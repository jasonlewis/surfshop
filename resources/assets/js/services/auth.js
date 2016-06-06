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
    },

    failed(context, response) {
        context.$set('errors', response.data.errors);
    }
}
