<template>
  <div class="HomeAdmin">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import navbar from '@/components/Navbar.vue';

export default Vue.extend({
  name: 'HomeAdmin',
  components: {
    navbar,

  },
});

</script>

<style scoped>
.HomeAdmin {
  display: flex;
}

</style>
