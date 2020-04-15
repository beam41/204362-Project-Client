<template>
  <Slide :close-on-navigation="true" class=" bm-burger-button">
    <nuxt-link to="/" class="nav-link home"><span>หน้าหลัก</span></nuxt-link>
    <nuxt-link to="/news" class="nav-link news"><span>ข่าว</span></nuxt-link>
    <nuxt-link to="/dog" class="nav-link dogs"><span>สุนัขในโครงการ</span></nuxt-link>
    <nuxt-link to="/donate" class="nav-link donate"><span>บริจาค</span></nuxt-link>
    <nuxt-link to="/contact" class="nav-link contact"><span>ติดต่อเรา</span></nuxt-link>
    <nuxt-link to="/report" class="nav-link report"><span>รายงานปัญหา</span></nuxt-link>
  </Slide>
</template>

<script lang="ts">
import Vue from 'vue';
import { Slide } from 'vue-burger-menu';

export default Vue.extend({
  components: {
    Slide,
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.bm-burger-button {
  width: 25px;
  height: 19px;
  left: -25px;
  top: -25px;
  cursor: pointer;
  background-color: white;
}
</style>
