<template>
  <div class="adminbox addupdate"></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DonateAddUpdate',
  data: () => ({
    id: '',
  }),
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },
});
</script>

<style>
</style>
