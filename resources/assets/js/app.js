import Vue from 'vue'
import Auth from './services/auth.js'
import Alert from './components/Alert.vue'
import AlertService from './services/alert.js'
import Navigation from './components/Navigation.vue'

let App = Vue.extend({
    components: {
        Navigation, Alert
    },

    data() {
        return {
            page: this.$route.name,
            alert: AlertService,
            Auth
        };
    },

    ready() {},

    methods: {}
});

export default App;
