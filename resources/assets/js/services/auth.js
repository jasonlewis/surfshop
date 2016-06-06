import User from './user.js'

export default {
    authenticated: false,

    attempt(context, credentials, redirect) {
        context.$http.post('auth', credentials).then(
            response => { this.success(context, response, redirect) },
            response => { this.failed(context, response) }
        );
    },

    success(context, response, redirect) {
        context.$set('errors', {});

        let { token, user } = response.data;

        user.token = token;

        localStorage.setItem('user', JSON.stringify(user));

        this.authenticated = this.user();

        if (redirect) context.$router.go(redirect);
    },

    failed(context, response) {
        context.$set('errors', response.data.errors);
    },

    logout() {
        this.authenticated = false;

        localStorage.removeItem('user');
    },

    user() {
        if (this.authenticated) return this.authenticated;

        let user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            this.authenticated = new User(user.id, user.name, user.email, user.token);

            return this.authenticated;
        }

        return false;
    },

    check() {
        return this.user();
    },

    guest() {
        return ! this.user();
    }
}
