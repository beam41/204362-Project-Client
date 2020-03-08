<template>
  <div class="sorter">
    <Select classN="compound" :options="['Mee', 'Moo', 'Maa']"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Select from './Select.vue';

export default Vue.extend({
  name: 'Sorter',
  components: {
    Select,
  },
});
</script>

<style>
</style>
