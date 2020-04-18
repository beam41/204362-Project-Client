<template>
  <div>
    <VisitorNavbar></VisitorNavbar>
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';

import VisitorNavbar from '../components/Navbar/VisitorNavbar.vue';

export default Vue.extend({
  name: 'VisitorLayout',
  components: {
    VisitorNavbar,
  },
  head: () => ({
    bodyAttrs: {
      class: 'visitor-body',
    },
  }),
});
</script>

<style lang="scss">
@use 'assets/styles/visitor_util';
</style>
