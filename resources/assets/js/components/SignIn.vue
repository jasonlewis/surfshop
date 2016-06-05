<template>
    <div class="expanded row align-center">
        <div class="small-12 medium-4 column">
            <form v-on:submit.prevent="attempt">
                <h3>Sign in to your account</h3>

                <p>
                    If you do not have an account yet then please <a v-link="{ name: 'register' }">register</a> for free.
                </p>

                <error-alert :errors="errors"></error-alert>

                <div class="row">
                    <div class="small-12 column">
                        <label for="email">E-mail</label>
                        <input type="text" name="email" id="email" v-model="credentials.email">
                    </div>
                </div>
                <div class="row">
                    <div class="small-12 column">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" v-model="credentials.password">
                    </div>
                </div>

                <button type="submit" class="button">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Auth from '../services/auth.js'
    import ErrorAlert from './ErrorAlert.vue'

    export default {
        components: {
            ErrorAlert
        },
        data() {
            return {
                credentials: {
                    email: null,
                    password: null
                },
                // The errors will be automatically set from within the Auth service because
                // we pass this context through to it. Because we have a one-way binding
                // with the error alert component it will trigger the alert component
                // to be shown. This is explained in the error alert component.
                errors: {}
            };
        },
        methods: {
            attempt() {
                Auth.attempt(this, this.credentials, 'redirectPath');
            }
        }
    }
</script>
