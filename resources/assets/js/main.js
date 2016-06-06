import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from './routes.js'
import Navigation from './components/Navigation.vue'
import Auth from './services/auth.js'
import App from './app.js'
import { API_PATH } from './config.js'

Vue.use(VueResource);

Vue.http.options.root = API_PATH;

Router.beforeEach(({to, next}) => {
    Router.app.page = to.name;

    next();
});

Router.start(App, '#app');
