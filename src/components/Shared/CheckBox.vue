<template>
  <label>
    <slot></slot>
    <input type="checkbox" ref="cb" @change="onC($event)" />
    <span class="cb"></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CheckBox',
  methods: {
    onC(event: any) {
      this.$emit('change', event);
    },
  },
});
</script>

<style lang="scss" scoped>
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

    // tick
    &:after {
      @extend %animate-all-bounceend;
      @extend %font-awesome;
      content: '\f00c';
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
      & ~ .cb:after {
        opacity: 1;
        top: var.$tick-top;
        visibility: visible;
      }

      &:hover {
        & ~ .cb {
          background-color: color.lightness(var.$gray, -20%);
          border-color: color.lightness(var.$gray, -20%);
        }
      }

      & ~ .cb {
        background-color: var.$gray;
        border-color: var.$gray;
      }
    }
  }
}
</style>
