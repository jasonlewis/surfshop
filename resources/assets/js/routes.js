import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import SignIn from './components/SignIn.vue';

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
    '/register': {
        name: 'register',
        component: SignIn
    }
});

export default router;
