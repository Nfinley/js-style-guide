<template>
    <aside class="sidebar-container menu">
      <p class="menu-label">
        Standards
      </p>
      <ul class="menu-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/bullets">Bullets</router-link>
        </li>
        <li>
          <router-link to="/oath">Oath</router-link>
        </li>
        <li>
          <router-link to="/standards/all">Standards</router-link>
          <ul>
            <li v-for="route in standardsList">
              <router-link :to="'/standards/' + route.path">{{ route.display }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
</template>

<script>
  import { routes } from '../routes'

  export default {
    mounted() {
      const standardsRoutes = routes[routes.length - 1].children;
      // console.log(standardsRoutes);
      this.standardsList = standardsRoutes;
      return;
    },
    data() {
      return {
        standardsList: null
      }
    }
  }

</script>