<template>
  <transition name="fade-ep">
    <div v-if="show" class="m-container">
      <div v-if="show" class="m-body">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
  },
};
</script>

<style lang="scss">
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.m-container {
  position: absolute;
  top: 0;
  left: 0;
  size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: color.alpha(var.$black, -0.5);
  z-index: 20000;

  .m-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: var.$b-radius;
    padding: var.$txt-m-bot var.$b-radius;
    min-width: 300px;
  }

  .m-mid {
    margin-bottom: 2em;
  }

  .m-bot {
    display: flex;
    justify-content: flex-end;

    & button {
      margin-left: 0.5rem;
    }
  }
}
</style>
