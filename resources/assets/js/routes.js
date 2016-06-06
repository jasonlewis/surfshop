import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Logout from './components/auth/Logout.vue'
import Dashboard from './components/user/Dashboard.vue'

Vue.use(VueRouter);

let router = new VueRouter();

router.map({
    '/': {
        name: 'home',
        component: Home
    },
    '/sign-in': {
        name: 'signin',
        component: Login
    },
    '/sign-out': {
        name: 'signout',
        component: Logout
    },
    '/register': {
        name: 'register',
        component: Login
    },
    '/dashboard': {
        name: 'dashboard',
        component: Dashboard
    },
    '/orders': {
        name: 'orders',
        component: Login
    },
    '/cart': {
        name: 'cart',
        component: Login
    }
});

export default router;
