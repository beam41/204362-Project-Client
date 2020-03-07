<template>
  <div class="admin">
    <Navbar></Navbar>
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar/AdminNavbar.vue';

export default Vue.extend({
  name: 'AdminLayout',
  components: {
    Navbar,
  },
});

</script>

<style scoped>
.admin {
  display: flex;
}

</style>
