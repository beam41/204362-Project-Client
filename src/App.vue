<template>
  <div id="app">
    <HomeAdmin/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

}
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar{
  background: #fff;
  box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
}


</style>
