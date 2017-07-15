<template>
  <div id="app">
    <section class="section">
      <div class="columns">
        <div class="column is-11 is-offset-1">
          <h1 class="title is-1">
            JS Style Guide
          </h1>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3 is-offset-1">
          <app-sidebar>
          </app-sidebar>
        </div>
        <div class="column is-7">
          <transition
              name="fade"
              mode="out-in">
              <router-view></router-view>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import AppSidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    AppSidebar
  }
}
</script>

<style lang="scss">

  $primary: skyblue;

  @import "../node_modules/bulma/bulma.sass";
  @import "../node_modules/font-awesome/css/font-awesome.css";

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
</style>
