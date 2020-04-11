<template>
  <div>
    <UserNavbar v-if="!mobileView"></UserNavbar>
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';

import UserNavbar from '../components/Navbar/UserNavbar';

export default Vue.extend({
  data: () => {
    return {
      mobileView: false,
      showNav: false,
    };
  },
  name: 'UserLayout',
  components: {
    UserNavbar,
  },
});
</script>

<style scoped></style>
