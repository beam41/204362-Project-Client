<template>
  <div id="app">
    <router-view />
  </div>
</template>

<!--style-->
<style lang="scss">
// non partial import here
// to prevent redundant import if import in loader
@use 'src/assets/styles/component';
</style>
