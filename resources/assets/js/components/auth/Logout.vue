<script>
    import Auth from '../../services/auth.js'

    export default {
        data() {
            return {};
        },
        ready() {
            if (Auth.guest()) this.$router.go({ name: 'home' });

            Auth.logout();

            this.$root.alert.info('You have been signed out of your account.');

            this.$router.go({ name: 'home' });
        }
    }
</script>
