<template>
    <ul class="product-filters {{ type }}">
        <li class="filter-label" @click="toggle">{{ label }}<span class="icon"></span></li>
        <li class="filter-items"><slot></slot></li>
    </ul>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                open: false
            }
        },

        methods: {
            toggle() {
                if (this.open) {
                    this.$el.classList.remove('is-active');
                } else {
                    this.$el.classList.add('is-active');
                }

                this.open = ! this.open;
            }
        }
    }
</script>
