<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Surf Shop</title>

        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body id="app">
        <div class="wrapper">

            <nav class="main-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Shop For Boards</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div class="main-menu-overlay"></div>

            <div class="topbar fixed-to-top">
                <div class="col-xs-4 text-left left-menu">
                    <button class="main-menu-button" v-on:click="toggleMainMenu">
                        <span class="glyphicon glyphicon-menu-hamburger"></span>
                    </button>
                </div>
                <div class="col-xs-4 text-center logo">
                    Surf Shop
                </div>
                <div class="col-xs-4 text-right right-menu">
                    <ul>
                        <li><a href="#">Sign In</a></li>
                        <li>
                            <button>
                                <span class="glyphicon glyphicon-shopping-cart"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="header">
                <div class="featured-product" style="background-image: url(/images/featured-product.jpg)">
                    <div class="overlay">
                        <h3>
                            <a href="#">Shop For Surfboards</a>
                        </h3>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <ul class="shop-filters filters">
                            <li class="filter-label">Filter By</li>
                            <li><a href="#">Newest</a></li>
                            <li><a href="#">Top Sellers</a></li>
                            <li><a href="#">Specials</a></li>
                        </ul>

                        <ul class="shop-filters brands">
                            <li class="filter-label">Brand</li>
                            <li><a href="#">Rusty</a></li>
                            <li><a href="#">Firewire</a></li>
                            <li><a href="#">Channel Islands</a></li>
                            <li><a href="#">JS Industries</a></li>
                            <li><a href="#">More &raquo;</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row product-listing">
                    <div class="col-md-2"></div>
                    <div class="col-md-2 product">
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

                    <div class="col-md-2 product">
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

                    <div class="col-md-2 product">
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

                    <div class="col-md-2 product">
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
                    <div class="col-md-2"></div>
                </div>

                <div class="row product-listing">
                    <div class="col-md-2"></div>
                    <div class="col-md-2 product">
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

                    <div class="col-md-2 product">
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

                    <div class="col-md-2 product">
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

                    <div class="col-md-2 product">
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
                    <div class="col-md-2"></div>
                </div>
            </div>

        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
