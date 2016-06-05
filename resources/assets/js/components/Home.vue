<template>
    <div class="expanded row">
        <div class="columns text-center">

            <product-filter label="Filter By" type="filters">
                <ul>
                    <li><a href="#">Newest</a></li>
                    <li><a href="#">Top Sellers</a></li>
                    <li><a href="#">Specials</a></li>
                </ul>
            </product-filter>

            <product-filter label="Brand" type="brands">
                <ul>
                    <li><a href="#">Rusty</a></li>
                    <li><a href="#">Firewire</a></li>
                    <li><a href="#">Channel Islands</a></li>
                    <li><a href="#">JS Industries</a></li>
                </ul>
            </product-filter>
        </div>
    </div>

    <div class="expanded row product-listing">

        <div class="small-12 medium-6 large-2 large-offset-2 columns product">
            <div class="product-photo" style="background-image: url(/images/boards/firewire/baked-potato.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>Firewire Baked Potato</h3>

                <span class="price">$900.00</span>
            </div>
        </div>

        <div class="small-12 medium-6 large-2 columns product">
            <div class="product-photo" style="background-image: url(/images/boards/firewire/double-agent.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>Firewire Double Agent</h3>

                <span class="price">$550.00</span>
            </div>
        </div>

        <div class="small-12 medium-6 large-2 columns product">
            <div class="product-photo" style="background-image: url(/images/boards/firewire/nano.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>Firewire Nano</h3>

                <span class="price">$550.00</span>
            </div>
        </div>

        <div class="small-12 medium-6 large-2 columns product">
            <div class="product-photo" style="background-image: url(/images/boards/firewire/vadar.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>Firewire Vadar</h3>

                <span class="price">$850.00</span>
            </div>
        </div>
    </div>

    <div class="expanded row product-listing">
        <div class="small-12 medium-6 large-2 large-offset-2 product">
            <div class="product-photo" style="background-image: url(/images/boards/js/black-box-2.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>JS Black Box 2</h3>

                <span class="price">$999.00</span>
            </div>
        </div>

        <div class="small-12 medium-6 large-2 product">
            <div class="product-photo" style="background-image: url(/images/boards/js/monsta-3.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>JS Monsta 3</h3>

                <span class="price">$830.00</span>
            </div>
        </div>

        <div class="small-12 medium-6 large-2 product">
            <div class="product-photo" style="background-image: url(/images/boards/js/monsta-box.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>JS Monsta Box</h3>

                <span class="price">$830.00</span>
            </div>
        </div>

        <div class="small-12 medium-6 large-2 product">
            <div class="product-photo" style="background-image: url(/images/boards/js/psycho-nitro.jpg)">
                <a class="overlay" href="#">
                    <span>View</span>
                </a>
            </div>

            <div class="product-details">
                <h3>JS Psycho Nitro</h3>

                <span class="price">$850.00</span>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductFilter from './ProductFilter.vue';

    export default {
        components: {
            ProductFilter
        },

        data() {
            return {};
        }
    }
</script>
