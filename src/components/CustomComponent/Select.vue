<template>
  <div class="cs">
    <!-- hidden select for form to use -->
    <select>
      <option value="pls_select" disabled :selected="currSelect === -1">{{ customText }}</option>
      <option
        v-for="(opt, index) in options"
        :key="opt"
        :value="opt"
        :selected="index === currSelect"
        >{{ opt }}</option
      >
    </select>
    <!-- viewable custom select for user -->
    <div class="new-select">
      <div
        class="showbox"
        @click="toggleShowDropdown()"
        v-on-clickaway="hideDropdown"
        :show="isShow"
        :style="{ width: `${width}px` }"
      >
        {{ currSelect === -1 ? customText : options[currSelect] }}
      </div>
      <div class="dropdown" :show="isShow" :style="{ width: `${width}px` }">
        <div
          class="dd-element"
          v-for="(opt, index) in options"
          :key="opt"
          :value="opt"
          :selected="index === currSelect"
          @click="selectMe(index)"
        >
          {{ opt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mixin as clickaway } from 'vue-clickaway';

export default Vue.extend({
  name: 'Select',
  data: () => ({
    customText: 'Select your mee:',
    options: ['Mee', 'Moo', 'Maa'],
    currSelect: -1,
    isShow: false,
    width: 202.08,
  }),
  mixins: [clickaway],
  methods: {
    hideDropdown() {
      this.isShow = false;
    },
    toggleShowDropdown() {
      this.isShow = !this.isShow;
    },
    selectMe(index) {
      this.currSelect = index;
    },
  },
});
</script>

<style lang="scss" scoped>
@use "../../assets/var";
@use "../../assets/color";
@use "../../assets/animation";

.cs {
  display: inline-block;
  // hide select
  select {
    display: none;
  }

  div {
    font-family: var.$font-fam;
  }

  .showbox {
    @extend %animate-all;
    position: relative;
    box-sizing: border-box;
    width: fit-content;
    padding: var.$txt-box-pad var.$b-radius;
    border: var.$border-width solid var.$gray;
    border-radius: var.$b-radius;
    cursor: pointer;
    z-index: 10001;

    &:hover {
      border-color: color.lightness(var.$gray, -20%);
      &::after {
        color: color.lightness(var.$gray, -20%);
      }
    }

    &[show] {
      border-radius: var.$b-radius var.$b-radius 0 0;
      &::after {
        transform: rotate(180deg);
      }
    }

    &::after {
      @extend %animate-all-bounceend;
      position: absolute;
      content: '\25bc';
      right: var.$b-radius;
      color: var.$gray;
    }
  }

  .dropdown {
    @extend %animate-all-bounceend;
    position: absolute;
    display: block;
    cursor: pointer;
    border: var.$border-width solid var.$gray;
    border-radius: 0 0 var.$b-radius var.$b-radius;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    z-index: 10000;

    &[show] {
      border-top: 0;
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dd-element {
    @extend %animate-all;
    position: relative;
    padding: var.$txt-box-pad var.$b-radius;
    background: white;

    &:hover {
      background: color.lightness(var.$gray, 40%);
    }

    &[selected] {
      background: color.lightness(var.$gray, 20%);
    }
  }
}
</style>
