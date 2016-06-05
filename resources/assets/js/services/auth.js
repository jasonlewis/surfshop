export default {
    authenticated: false,

    attempt(context, credentials, redirect) {
        context.$http.post('auth', credentials).then(
            response => { this.success(context, response, redirect) },
            response => { this.failed(context, response) }
        );
    },

    success(context, response) {
        console.log('success', response.status);
    },

    failed(context, response) {
        context.$set('errors', response.data.errors);
    }
}
