<template>
  <div id="app">
    <HomeAdmin />
    <!-- <TestCom /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeAdmin from '@/components/HomeAdmin.vue';
// import TestCom from '@/components/CustomComponent/Test.vue';

export default Vue.extend({
  name: 'app',
  components: {
    HomeAdmin,
    // TestCom,
  },
});
</script>

<!--style-->
<style lang="scss">
@use './assets/component';
@use './assets/class';
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  min-width: 100%;
  min-height: 100%;
}
</style>
