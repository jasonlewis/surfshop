export default {
    authenticated: false,

    attempt(context, credentials, redirect) {
        context.$http.post('auth', credentials).then(this.success, this.failed);
    },

    success(response) {
        console.log('success', response.status);
    },

    failed(response) {
        console.log('failed', response.status);
    }
}
