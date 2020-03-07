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
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
});
</script>

<!--style-->
<style lang="scss">
@use 'src/assets/admin_util';
@use 'src/assets/component';

#app {
  min-width: 100%;
  min-height: 100%;
}
</style>
