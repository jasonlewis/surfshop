<template>
    <div class="expanded row align-center">
        <div class="small-12 medium-4 column">
            <form v-on:submit.prevent="attempt">
                <h3>Sign in to your account</h3>

                <p>
                    If you do not have an account yet then please <a v-link="{ name: 'register' }">register</a> for free.
                </p>

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

    export default {
        data() {
            return {
                credentials: {
                    email: null,
                    password: null
                }
            };
        },
        methods: {
            attempt() {
                Auth.attempt(this, this.credentials, 'redirectPath');
            }
        }
    }
</script>
