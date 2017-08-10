<template>
    <div id="app">
        <section class="section">
            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <div class="logo-container">
                        <img class="logo" src="./assets/texas-nic-logo.svg" width="150">
                        <h2 class="logo-tagline title is-2" @click="toggleAdjectiveInput">
                            {{ guideTitle }}
                        </h2>
                    </div>
                    <input class="input" type="text" v-model="guideTitle" v-show="showGuideTitle" />
                </div>
            </div>
            <div class="columns">
                <div class="column is-2 is-offset-1">
                    <app-sidebar></app-sidebar>
                </div>
                <div class="column is-8">
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

    import '../node_modules/code-prettify/loader/run_prettify.js'
    import AppSidebar from './components/Sidebar.vue'

    export default {
        mounted() {
            document.querySelectorAll('pre').forEach(block => block.className += 'prettyprint');
        },
        data() {
            return {
                guideTitle: 'Jupiter Io Standards',
                showGuideTitle: false
            }
        },
        methods: {
            toggleAdjectiveInput() {
                this.showGuideTitle = !this.showGuideTitle;
            }
        },
        components: {
            AppSidebar
        }
    }

</script>

<style lang="scss">

    $tx-nic-oranage: #ea6941;
    $tx-nic-blue: #3d9ed9;

    $primary: $tx-nic-blue;

    @import "../node_modules/bulma/bulma.sass";
    @import "../node_modules/font-awesome/css/font-awesome.css";
    // @import "../node_modules/color-themes-for-google-code-prettify/dist/themes/tranquil-heart.min.css";

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

    pre {
        border-radius: 4px;
    }

</style>
