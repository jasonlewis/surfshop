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
                    if (this.open) this.toggle();
                });

                const stopPropagation = event => event.stopPropagation();

                this.elements.nav = this.$el;

                // Bind the stopPropagation event to both the navigation and the button, this prevents
                // the above document wide toggler from being fired for these elements.
                ['nav', 'button'].forEach(key => {
                    this.elements[key].addEventListener('click', stopPropagation);
                });

                // We do want to toggle the navigation if the button is clicked though. But it must
                // be a direct click on the button itself.
                this.elements.button.addEventListener('click', event => this.toggle());

                let anchors = this.elements.nav.querySelectorAll('a');

                for (let i = 0; i < anchors.length; ++i) {
                    anchors[i].addEventListener('click', event => this.toggle());
                }
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
