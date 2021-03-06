// Team Io Dev Guide
// -------------------------
// A project by Nigel Finley and Seth Davis of Texas NIC.

import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
