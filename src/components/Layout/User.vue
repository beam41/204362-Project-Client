<template>
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';

import Navbar from '@/components/Navbar/UserNavbar.vue';

export default Vue.extend({
  name: 'UserLayout',
  components: {
    Navbar,
  },
});
</script>

<style scoped></style>
