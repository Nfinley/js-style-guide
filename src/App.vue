<template>
    <div id="app">
        <section class="section">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <div class="logo-container">
                        <img class="logo" src="./assets/texas-nic-logo.svg" width="150">
                        <h3 class="logo-tagline title is-3">
                            JavaScript Style Guide
                        </h3>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <app-home :companyName="companyName"></app-home>
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

    import AppHome from './views/Home.vue'

    export default {
        name: 'app',
        data () {
            return {
                companyName: 'Texas NIC'
            }
        },
        components: {
            AppHome
        }
    }

</script>

<style lang="scss">

    $tx-nic-oranage: #ea6941;
    $tx-nic-blue: #3d9ed9;

    $primary: $tx-nic-blue;

    @import "../node_modules/bulma/bulma.sass";
    @import "../node_modules/font-awesome/css/font-awesome.css";

    .logo-container {
        display: flex;
        align-items: center;

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

    .spaced-paragraphs {
        p {
            margin-bottom: 15px;
        }
    }

    .fixed-to-top {
        background: transparent;
        position: fixed;
        bottom: 0;
        right: 0;
    }

</style>
