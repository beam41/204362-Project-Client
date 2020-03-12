<template>
  <div id="app">
    <div class="dontforgettoremove">
      <router-link to="/admin/dog/">Admin</router-link>
      <router-link to="/">User</router-link>
      <router-link to="/hidden/test">Test</router-link>
    </div>
    <router-view />
  </div>
</template>

<!--style-->
<style lang="scss">
// non partial import here
// to prevent redundant import if import in loader
@use 'src/assets/styles/component';
@use 'src/assets/styles/class';

.dontforgettoremove {
  position: absolute;
  z-index: 1000000;
}
</style>
