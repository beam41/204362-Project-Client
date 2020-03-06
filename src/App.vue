<template>
  <div id="app">
    <HomeAdmin />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeAdmin from '@/components/HomeAdmin.vue';

export default Vue.extend({
  name: 'app',
  components: {
    HomeAdmin,
  },
});
</script>

<!--style-->
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
