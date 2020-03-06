<template>
  <div id="app">
    <HomeAdmin></HomeAdmin>
  </div>
</template>

<script>
import HomeAdmin from '@/components/HomeAdmin.vue';

export default {
  name: 'app',
  components: {
    HomeAdmin,
  },

};
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
