<template>
  <div class="cs">
    <!-- hidden select for form to use -->
    <select ref="sel">
      <option value="pls_select" disabled :selected="currSelect === -1">{{ customText }}</option>
      <option
        v-for="(opt, index) in options"
        :key="opt"
        :value="opt"
        :selected="index === currSelect"
      >{{ opt }}</option>
    </select>
    <!-- viewable custom select for user -->
    <div :class="'new-select' + (error ? ' error' : '')">
      <div
        :class="'showbox' + (currSelect === -1 ? ' curr-disable' : '') + getClass"
        @click="toggleShowDropdown()"
        v-on-clickaway="hideDropdown"
        :show="isShow"
      >{{ currSelect === -1 ? customText : options[currSelect] }}</div>
      <div class="dropdown" :show="isShow">
        <div
          class="dd-element"
          v-if="customText"
          disabled
          @click="clickDisabled = true"
        >{{ customText }}</div>
        <div
          class="dd-element"
          v-for="(opt, index) in options"
          :key="opt"
          :value="opt"
          :selected="index === currSelect"
          @click="selectMe(index)"
        >{{ opt }}</div>
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
    isShow: false,
    clickDisabled: false,
    currSelect: -1,
  }),
  props: {
    customText: String,
    options: Array,
    classN: String,
    defaultOption: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [clickaway],
  created() {
    if (!this.customText) this.currSelect = 0;
    if (this.defaultOption !== '') {
      // prettier-ignore
      this.currSelect = _.findIndex(users, o => o === this.defaultOption);
    }
  },
  computed: {
    getClass() {
      if (this.classN) return ` ${this.classN}`;
      return '';
    },
  },
  methods: {
    hideDropdown() {
      if (!this.clickDisabled) this.isShow = false;
      this.clickDisabled = false;
    },
    toggleShowDropdown() {
      this.isShow = !this.isShow;
    },
    selectMe(index) {
      this.currSelect = index;
      this.$emit('sel-change', { currSelect: index });
    },
    log(me) {
      console.log(me);
    },
  },
});
</script>

<style lang="scss" scoped>
.cs {
  display: inline-block;

  * {
    user-select: none;
  }

  // hide select
  select {
    display: none;
  }

  div {
    font-family: var.$font-fam;
  }

  .showbox,
  .dropdown,
  .new-select,
  & {
    width: inherit;
  }

  .showbox {
    @extend %animate-all;
    @extend %grayblock;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 9999;

    &.compound {
      border-radius: var.$b-radius 0 0 var.$b-radius;
      border-right: none;
    }

    &:hover {
      border-color: color.lightness(var.$gray, -20%);
      &::after {
        color: color.lightness(var.$gray, -20%);
      }
    }

    &[show] {
      border-radius: var.$b-radius var.$b-radius 0 0;

      &.compound {
        border-radius: var.$b-radius 0 0 0;
      }
      &::after {
        transform: rotate(180deg);
      }
    }

    &:not(.compound)::after {
      @extend %animate-all-bounceend;
      @extend %font-awesome;
      position: absolute;
      content: '\f078';
      right: var.$b-radius;
      color: var.$gray;
    }

    &.curr-disable {
      color: color.lightness(black, 50%);
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

    z-index: 10001;

    &:hover {
      background: color.lightness(var.$gray, 40%);
    }

    &[selected] {
      background: color.lightness(var.$gray, 20%);
    }

    &[disabled] {
      color: color.lightness(black, 50%);
    }
  }

  .error {
    .showbox,
    .dropdown {
      border-color: var.$warn;

      &:hover {
        border-color: color.lightness(var.$warn, -20%);
      }
    }
    .showbox {
      &,
      &::after {
        color: color.alpha(var.$warn, -0.5%);
      }
    }
  }
}
</style>
