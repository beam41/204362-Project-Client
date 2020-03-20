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
      >
        <span>{{ currSelect === -1 ? customText : options[currSelect] }}</span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </div>
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
import _ from 'lodash';

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
    // console.log('default: ', this.defaultOption);
    if (this.defaultOption !== '') {
      // prettier-ignore
      this.currSelect = _.findIndex(this.options, o => o === this.defaultOption);
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
      // console.log(me);
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

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
    display: flex;
    justify-content: space-between;
    align-items: center;

    & svg {
      @extend %animate-all-bounceend;
      color: var.$gray;
    }

    &.compound {
      border-radius: var.$b-radius 0 0 var.$b-radius;
      border-right: none;

      svg {
        display: none;
      }
    }

    &:hover {
      border-color: color.lightness(var.$gray, -20%);
      & svg {
        color: color.lightness(var.$gray, -20%);
      }
    }

    &[show] {
      border-radius: var.$b-radius var.$b-radius 0 0;

      &.compound {
        border-radius: var.$b-radius 0 0 0;
      }

      & svg {
        transform: rotate(180deg);
      }
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
        svg {
          color: var.$warn;
        }
      }
    }

    .showbox {
      color: var.$warn;
      &.curr-disable {
        color: color.lightness(var.$warn, 10%);
      }
      svg {
        color: color.lightness(var.$warn, 10%);
      }
    }
  }
}
</style>
