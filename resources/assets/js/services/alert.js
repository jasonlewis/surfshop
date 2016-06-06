export default {
    // Message to show within the alert contents.
    message: null,

    // The type of alert, in this case it does not refer to the CSS class names, as these
    // are associated within the alert component.
    type: null,

    // Whether or not the alert is visible.
    visible: false,

    // Whether or not the alert should be hidden on the next request.
    shouldHideOnNext: false,

    // The main method that sets the required properties on the alert.
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

    // This expire method is called after each route is fired and will expire
    // the alert so that on the next request it will be hidden.
    expire() {
        if (this.visible) this.shouldHideOnNext = true;
    },

    // Used before a route is fired, this method will hide the alert if it
    // has been expired by the method above.
    hideIfVisible() {
        if (this.shouldHideOnNext) this.visible = false;
    }
}
