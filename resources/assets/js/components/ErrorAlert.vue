<template>
    <alert important :show.sync="show">
        <h5>Woops, looks like something went wrong.</h5>

        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </alert>
</template>

<script>
    import Alert from './Alert.vue'

    export default {
        components: {
            Alert
        },
        props: {
            errors: {},
            show: {
                type: Boolean,
                default: false
            },
            important: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {}
        },
        watch: {
            // We will watch the errors property for an update. If the errors property is updated then
            // that means we have a failed request somewhere and we want to display the errors
            // within our alert component. Because we are using two-way binding (sync) we
            // can update the show property on this component to have the show proeprty
            // updated on the alert component. This allows the alert to be hidden
            // and then reshown again if the form is submitted incorrectly
            // several times in a row.
            errors() {
                this.$set('show', true);
            }
        }
    }
</script>
