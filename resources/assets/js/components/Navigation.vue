<template>
    <nav class="navigation">
        <slot></slot>
    </nav>
</template>

<script>
    export default {
        props: {},

        data() {
            return {
                open: false,
                elements: {
                    nav: null,
                    body: document.querySelector('body'),
                    button: document.querySelector('button.navigation-button')
                }
            }
        },

        ready() {
            this.prepare();
        },

        methods: {
            prepare() {
                document.addEventListener('click', event => {
                    // If the event target is an anchor and the offset parent is the same
                    // as the navigation element then we've clicked a link inside the
                    // navigation. We toggle it from here because depending on the
                    // users authentication status certain links are added or
                    // removed from the DOM.
                    if ((event.target.tagName == 'a' && event.target.offsetParent == this.$el) || this.open) {
                        this.toggle();
                    }
                });

                // Bind the stopPropagation event to the button, this prevents the above document
                // wide toggler from being fired for these elements.
                this.elements.button.addEventListener('click', event => event.stopPropagation());

                // We do want to toggle the navigation if the button is clicked though. But it must
                // be a direct click on the button itself.
                this.elements.button.addEventListener('click', event => this.toggle());
            },
            toggle() {
                if (this.open) {
                    this.elements.body.classList.remove('navigation-active');
                } else{
                    this.elements.body.classList.add('navigation-active');
                }

                this.open = ! this.open;
            }
        }
    }
</script>
