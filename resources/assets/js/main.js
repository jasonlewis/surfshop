import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from './routes.js'
import App from './app.js'
import { API_PATH } from './config.js'

Vue.use(VueResource);

Vue.http.options.root = API_PATH;

Router.beforeEach(({to, next}) => {
    let app = Router.app;

    app.page = to.name;

    // Before firing the next route we'll hide any visible global alert that was
    // not hidden by the user.
    app.alert.hideIfVisible();

    next();
});

Router.afterEach(({to, next}) => {
    let app = Router.app;

    // After firing the route we expire any global alerts that may be visible. This
    // goes hand in hand with the above hiding that takes place, as global alerts
    // will only be hidden once they've been expired.
    app.alert.expire();
});

Router.start(App, '#app');
