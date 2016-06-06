<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Surf Shop</title>

        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body id="app" :class="page">

    <div class="topbar row expanded">
        <div class="columns text-left left-menu">
            <button class="navigation-button"></button>
        </div>
        <div class="columns text-center logo">
            <a v-link="{ name: 'home' }">Surf Shop</a>
        </div>
        <div class="columns text-right right-menu">
            <ul>
                <li v-if="Auth.guest()"><a v-link="{ name: 'signin' }">Sign In</a></li>
                <li>
                    <button class="cart"></button>
                </li>
            </ul>
        </div>
    </div>

    <navigation>
        <ul>
            <li><a v-link="{ name: 'home' }">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li class="heading">Your Account</li>

            <li v-if="Auth.guest()"><a v-link="{ name: 'signin' }">Sign In</a></li>
            <li v-if="Auth.guest()"><a href="#">Register</a></li>

            <li v-if="Auth.check()"><a v-link="{ name: 'dashboard' }">Dashboard</a></li>
            <li v-if="Auth.check()"><a v-link="{ name: 'orders' }">Order History</a></li>
            <li v-if="Auth.check()"><a v-link="{ name: 'signout' }">Sign Out</a></li>
        </ul>
    </navigation>

    <div class="navigation-overlay"></div>
    <div class="container">

        <div class="header">
            <div class="featured-product">
                <div class="overlay">
                    <h4>
                        <a href="#">Shop For Surfboards</a>
                    </h4>
                </div>
            </div>
        </div>

        <div class="expanded row content">
            <div class="column">
                <div class="row align-center">
                    <div class="small-12 medium-8 column">
                        <alert :type="alert.type" :show.sync="alert.show">@{{ alert.message }}</alert>
                    </div>
                </div>

                <router-view></router-view>
            </div>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
