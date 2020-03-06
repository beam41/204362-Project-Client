<template>
  <label>
    <slot></slot>
    <input type="checkbox" />
    <span class="cb"></span>
  </label>
</template>

<style lang="scss" scoped>
@use "../../assets/var";
@use "../../assets/color";
@use "../../assets/animation";

label {
  display: inline-block;
  position: relative;
  padding-left: 30px + var.$border-width;
  cursor: pointer;
  user-select: none;

  // custom tickbox
  .cb {
    @extend %animate-all;
    box-sizing: border-box;
    position: absolute;
    top: -3px;
    left: 0;
    height: 25px;
    width: 25px;
    border: var.$border-width solid var.$gray;
    border-radius: var.$b-radius;

    // tick
    &:after {
      @extend %animate-all-bounceend;
      content: '';
      position: absolute;
      opacity: 0;
      left: 8.5px;
      top: 4px;
      width: 3px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: scale(0) rotate(-40deg);
    }
  }

  &:hover .cb {
    border: var.$border-width solid color.darker(var.$gray);
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
        transform: scale(1) rotate(40deg);
      }

      &:hover {
        & ~ .cb {
          background-color: color.darker(var.$gray);
          border-color: color.darker(var.$gray);
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
