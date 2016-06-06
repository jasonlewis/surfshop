<template>
    <div v-show="show" class="callout {{ types[type] }}">
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
                default: 'error'
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
            return {
                types: {
                    info: 'primary',
                    success: 'success',
                    error: 'alert',
                    notice: 'secondary',
                    warning: 'warning'
                }
            }
        }
    }
</script>
