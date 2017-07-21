<template>
    <aside class="sidebar-container menu">
      <p class="menu-label">
        Standards
      </p>
      <ul class="menu-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </aside>
</template>

<script>
  import { routes } from '../routes'

  export default {
    data() {
      return {
        standardsList: null
      }
    }
  }

</script>