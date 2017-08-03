<template>
    <div id="app">
        <section class="section">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <div class="logo-container">
                        <img class="logo" src="./assets/texas-nic-logo.svg" width="150">
                        <h2 class="logo-tagline title is-2">
                            JavaScript Style Guide
                        </h2>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <transition
                        name="fade"
                        mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </section>
        <section class="section fixed-to-top">
            <a class="button" href="#app">
                &uarr; To Top
            </a>
        </section>
    </div>
</template>

<script>

    import AppGuide from './views/Guide.vue'
    import '../node_modules/code-prettify/loader/run_prettify.js'

    export default {
        name: 'app',
        components: {
            AppGuide
        }
    }

</script>

<style lang="scss">

    $tx-nic-oranage: #ea6941;
    $tx-nic-blue: #3d9ed9;

    $primary: $tx-nic-blue;

    @import "../node_modules/bulma/bulma.sass";
    @import "../node_modules/font-awesome/css/font-awesome.css";
    @import "../node_modules/color-themes-for-google-code-prettify/dist/themes/tranquil-heart.min.css";

    .logo-container {
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        .logo {
            margin-right: 14px;
        }

        .logo-tagline {
            margin-top: 10px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    .fixed-to-top {
        background: transparent;
        position: fixed;
        bottom: 0;
        right: 0;
    }

</style>
