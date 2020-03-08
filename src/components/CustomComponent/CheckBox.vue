<template>
  <label>
    <slot></slot>
    <input type="checkbox" />
    <span class="cb"></span>
  </label>
</template>

<style lang="scss" scoped>
label {
  display: inline-block;
  position: relative;
  padding: var.$txt-box-pad 0 var.$txt-box-pad var.$label-pad-left + var.$border-width;
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
      content: '';
      box-sizing: content-box;
      position: absolute;
      opacity: 0;
      left: var.$tick-left;
      top: var.$tick-top;
      width: var.$tick-short-length;
      height: var.$tick-long-length;
      border: solid white;
      border-width: 0 var.$tick-width var.$tick-width 0;
      transform: scale(0) rotate(-1 * var.$tick-rotate);
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
        transform: scale(1) rotate(var.$tick-rotate);
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
