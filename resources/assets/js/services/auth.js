import User from './user.js'

export default {
    // Will contain the authenticated user when a successful attempt is made,
    // otherwise this will default to false.
    authenticated: false,

    // Attempt to authentiate by sending a POST request to the API with the users
    // credentials. This delegates the success and failure responses to two
    // other methods.
    attempt(context, credentials, redirect) {
        context.$http.post('auth', credentials).then(
            response => { this.success(context, response, redirect) },
            response => { this.failed(context, response) }
        );
    },

    // For successful authentication we'll hide any errors and grab the users
    // token and data from the response. We'll then merge the token with
    // the user and store a JSON string representation in local storage.
    // We can then grabt he authenticated user instance and, if
    // applicable, redirect to the intended path.
    success(context, response, redirect) {
        context.$set('errors', {});

        let { token, user } = response.data;

        user.token = token;

        localStorage.setItem('user', JSON.stringify(user));

        this.authenticated = this.user();

        if (redirect) context.$router.go(redirect);
    },

    // Failed requests will simply result in any errors on the response being
    // set on the given context.
    failed(context, response) {
        context.$set('errors', response.data.errors);
    },

    // To log the authenticated user out we set the authenticated property to
    // false and remove the stored user data from local storage.
    logout() {
        this.authenticated = false;

        localStorage.removeItem('user');
    },

    // This method will attempt to new up a user instance if one does not
    // already exist. It will then return the new instance, or false, if
    // a user is not authenticated.
    user() {
        if (this.authenticated) return this.authenticated;

        let user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            this.authenticated = new User(user.id, user.name, user.email, user.token);

            return this.authenticated;
        }

        return false;
    },

    // The check and guest methods are merely syntactical sugar for use
    // in various places throughout the application to determine if
    // the user is authenticated or if they are a guest.
    check() {
        return this.user();
    },

    guest() {
        return ! this.user();
    }
}
