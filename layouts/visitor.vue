<template>
  <div>
    <VisitorNavbar v-if="!mobileView"></VisitorNavbar>
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';

import VisitorNavbar from '../components/Navbar/VisitorNavbar.vue';

export default Vue.extend({
  data: () => {
    return {
      mobileView: false,
      showNav: false,
    };
  },
  name: 'VisitorLayout',
  components: {
    VisitorNavbar,
  },
});
</script>

<style scoped></style>
