import ProductFilter from './components/ProductFilter.vue';

new Vue({
    el: '#app',

    components: {
        ProductFilter
    },

    data: {
        menu: {
            open: false,
            elements: {
                parent: document.querySelector('nav.main-menu'),
                overlay: document.querySelector('div.main-menu-overlay'),
                body: document.querySelector('body'),
                container: document.querySelector('div.container'),
                button: document.querySelector('button.main-menu-button')
            }
        }
    },

    ready() {
        this.setupPushNavigation();
    },

    methods: {
        setupPushNavigation() {
            const stopPropagation = event => event.stopPropagation();

            document.addEventListener('click', event => {
                if (this.menu.open) this.closeMainMenu();
            });

            this.menu.elements.parent.addEventListener('click', stopPropagation);
            this.menu.elements.button.addEventListener('click', stopPropagation);
        },
        toggleMainMenu: function () {
            if (this.menu.open) {
                this.closeMainMenu();

                return;
            }

            this.openMainMenu();
        },
        openMainMenu: function () {
            this.menu.elements.body.classList.add('main-menu-active');
            this.menu.elements.parent.classList.add('main-menu-active');
            this.menu.elements.overlay.classList.add('main-menu-active');
            this.menu.elements.container.classList.add('main-menu-active');

            this.menu.open = true;
        },
        closeMainMenu: function () {
            this.menu.elements.body.classList.remove('main-menu-active');
            this.menu.elements.parent.classList.remove('main-menu-active');
            this.menu.elements.overlay.classList.remove('main-menu-active');
            this.menu.elements.container.classList.remove('main-menu-active');

            this.menu.open = false;
        }
    }
});
