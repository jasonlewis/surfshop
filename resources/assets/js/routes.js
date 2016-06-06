import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import SignIn from './components/SignIn.vue';
import SignOut from './components/SignOut.vue';

Vue.use(VueRouter);

let router = new VueRouter();

router.map({
    '/': {
        name: 'home',
        component: Home
    },
    '/sign-in': {
        name: 'signin',
        component: SignIn
    },
    '/sign-out': {
        name: 'signout',
        component: SignOut
    },
    '/register': {
        name: 'register',
        component: SignIn
    },
    '/dashboard': {
        name: 'dashboard',
        component: SignIn
    },
    '/orders': {
        name: 'orders',
        component: SignIn
    }
});

export default router;
