export default {
    message: null,
    type: null,
    show: false,

    alert(message, type) {
        this.message = message;
        this.type = type;
        this.show = true;
    },

    info(message) {
        this.alert(message, 'info');
    },

    error(message) {
        this.alert(message, 'error');
    },

    warning(message) {
        this.alert(message, 'warning');
    },

    success(message) {
        this.alert(message, 'success');
    },

    notice(message) {
        this.alert(message, 'notice');
    }
}
