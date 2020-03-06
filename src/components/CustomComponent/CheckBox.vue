<template>
  <span class="cb"></span>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    onChange: Function,
    check: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      check = !check;
      this.onChange(check);
    },
  },
};
</script>

<style scoped>
.cb {
  width: 20px;
  height: 20px;
}
</style>
