<template>
  <div>
    <UserNavbar></UserNavbar>
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';

import UserNavbar from '../components/Navbar/UserNavbar';

export default Vue.extend({
  name: 'UserLayout',
  components: {
    UserNavbar,
  },
});
</script>

<style lang="scss" scoped></style>
