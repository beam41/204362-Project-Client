<template>
  <div class="visitor">
    <Navbar></Navbar>
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';

import Navbar from '@/components/Navbar/VisitorNavbar.vue';

export default Vue.extend({
  name: 'VisitorLayout',
  components: {
    Navbar,
  },
  head: () => ({
    bodyAttrs: {
      class: 'visitor-body',
    },
  }),
});
</script>

<style>
</style>
