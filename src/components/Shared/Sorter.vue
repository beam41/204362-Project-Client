<template>
  <span class="sorter-wrapper">
    <span class="sorter input-group" style="width: 100px;">
      <Select classN="compound" :options="['ชื่อ', 'ทีอยู่', 'บ้านเลขที่']" />
      <button
        :class="'btn-default' + (descending ? ' descending' : '')"
        @click="descending = !descending"
      ></button>
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import Select from './Select.vue';

export default Vue.extend({
  name: 'Sorter',
  components: {
    Select,
  },
  data: () => ({
    descending: false,
  }),
});
</script>

<style lang="scss" scoped>
button {
  height: 30px;
  &::after {
    @extend %font-awesome;
    display: inline-block;
    content: '\f063';
    @extend %animate-tf-bounceend;
  }
}
.descending {
  &::after {
    transform: rotate(180deg);
  }
}
</style>
