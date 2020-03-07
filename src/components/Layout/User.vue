<template>
  <div class="user">
    user
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'UserLayout',
});
</script>

<style scoped></style>
