<template>
  <div class="admin">
    <Navbar></Navbar>
    <div class="headstyle">
      <h2>{{ title }}</h2>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar/AdminNavbar.vue';

export default Vue.extend({
  name: 'AdminLayout',
  components: {
    Navbar,
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
});
</script>

<style lang="scss">
@use 'src/assets/styles/admin_util';

.admin {
  display: grid;
  height: 100vh;
  grid-template-columns: var.$navbar-width 100fr;
  grid-template-rows: var.$top-part-h 100fr;

  & .headstyle {
    display: flex;
  }

  .headstyle {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
    align-items: center;
    h2 {
      font-size: 1.75rem;
      margin: 0 1em;
    }
  }
}
</style>
