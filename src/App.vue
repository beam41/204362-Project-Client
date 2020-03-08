<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const defaultLayout = 'default';

export default Vue.extend({
  name: 'app',
  components: {
    AdminLayout: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "AdminLayout" */ './components/Layout/Admin.vue'),
    UserLayout: () => import(/* webpackChunkName: "UserLayout" */ './components/Layout/User.vue'),
    DefaultLayout: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "DefaultLayout" */ './components/Layout/Default.vue'),
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
});
</script>

<!--style-->
<style lang="scss">
// non partial import here
// to prevent redundant import if import in loader
@use 'src/assets/styles/component';
</style>
