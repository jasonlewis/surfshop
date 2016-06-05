<template>
    <div v-show="show" class="callout {{ type }}" transition="remove">
        <button v-if="important" class="close-button" aria-label="Close alert" type="button" @click="show = false">
            <span aria-hidden="true">&times;</span>
        </button>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default: 'alert'
            },
            important: {
                type: Boolean,
                default: true
            },
            show: {
                type: Boolean,
                default: true
            }
        },

        data() {
            return {}
        }
    }
</script>

<style>
    .remove-transition {
        transition: opacity 0.4s ease;
    }

    .remove-leave, .remove-enter {
        opacity: 0;
    }
</style>
