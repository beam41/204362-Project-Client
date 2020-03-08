<template>
  <div class="user">
    user
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'UserLayout',
});
</script>

<style scoped></style>
