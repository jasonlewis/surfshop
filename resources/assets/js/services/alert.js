export default {
    message: null,
    type: null,
    visible: false,
    shouldHideOnNext: false,

    alert(message, type) {
        this.message = message;
        this.type = type;
        this.visible = true;
        this.shouldHideOnNext = false;
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
    },

    expire() {
        if (this.visible) this.shouldHideOnNext = true;
    },

    hideIfVisible() {
        if (this.shouldHideOnNext) this.visible = false;
    }
}
