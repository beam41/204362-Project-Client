<template>
  <span class="sorter-wrapper">
    <span class="sorter input-group" style="width: 100px;">
      <Select class-n="compound" :options="options" @sel-change="onChange($event)" />
      <button :class="'btn-default' + (descending ? ' desc' : '')" @click="onClick()">
        <font-awesome-icon :icon="['fas', 'arrow-down']" />
      </button>
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
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    currOption: 0,
    descending: false,
  }),
  methods: {
    onChange(event: any) {
      this.currOption = event.currSelect;
      this.$emit('sort-change', { currOption: this.currOption, descending: this.descending });
    },
    onClick() {
      this.descending = !this.descending;
      this.$emit('sort-change', { currOption: this.currOption, descending: this.descending });
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

button {
  height: 30px;
  svg {
    @extend %animate-tf-bounceend;
  }
}
.desc {
  svg {
    transform: rotate(180deg);
  }
}
</style>
