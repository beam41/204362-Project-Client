<template>
  <label>
    <slot></slot>
    <input ref="cb" type="checkbox" :checked="isCheck" :disabled="disabled" @change="onC($event)" />
    <span class="cb label-less">
      <span class="tick">
        <font-awesome-icon :icon="['fas', 'check']" />
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CheckBox',
  props: {
    isCheck: Boolean,
    labelLess: Boolean,
    disabled: Boolean,
  },
  methods: {
    onC(event: any) {
      this.$emit('change', event);
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

label {
  display: inline-block;
  position: relative;
  padding: var.$txt-box-pad 0 var.$txt-box-pad var.$label-pad-left +
    (var.$border-width + var.$cb-size);
  cursor: pointer;
  user-select: none;

  // custom tickbox
  .cb {
    @extend %animate-all;
    box-sizing: border-box;
    position: absolute;
    top: var.$cb-top;
    left: var.$cb-left;
    height: var.$cb-size;
    width: var.$cb-size;
    border: var.$border-width solid var.$gray;
    border-radius: var.$b-radius;

    &.label-less {
      top: -17px;
      left: 8.5px;
    }

    // tick
    .tick {
      @extend %animate-all-bounceend;
      position: absolute;
      opacity: 0;
      left: var.$tick-left;
      top: var.$cb-size + var.$tick-top;
      color: white;
      visibility: hidden;
    }
  }

  &:hover .cb {
    border: var.$border-width solid color.lightness(var.$gray, -20%);
  }

  input {
    // hide the input
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    // after input got checked
    &:checked {
      &:hover {
        & ~ .cb {
          background-color: color.lightness(var.$gray, -20%);
          border-color: color.lightness(var.$gray, -20%);
        }
      }

      & ~ .cb {
        background-color: var.$gray;
        border-color: var.$gray;

        .tick {
          opacity: 1;
          top: var.$tick-top;
          visibility: visible;
        }
      }
    }
  }
}
</style>
