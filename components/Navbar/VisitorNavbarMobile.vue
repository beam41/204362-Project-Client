<template>
  <div>
    <font-awesome-icon :icon="['fas', 'bars']" @click="showMenu()" />
    <transition name="slide-l">
      <div class="menu" v-if="show">
        <nuxt-link to="/" class="nav-link home"><span>หน้าหลัก</span></nuxt-link>
        <nuxt-link to="/news" class="nav-link news"><span>ข่าว</span></nuxt-link>
        <nuxt-link to="/dog" class="nav-link dogs"><span>สุนัขในโครงการ</span></nuxt-link>
        <nuxt-link to="/donate" class="nav-link donate"><span>บริจาค</span></nuxt-link>
        <nuxt-link to="/contact" class="nav-link contact"><span>ติดต่อเรา</span></nuxt-link>
        <nuxt-link to="/report" class="nav-link report"><span>รายงานปัญหา</span></nuxt-link>
        <font-awesome-icon :icon="['fas', 'times']" @click="hideMenu()" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'VisitorNavbarMobile',
  data: () => ({
    show: false,
  }),
  methods: {
    showMenu() {
      this.show = true;
    },
    hideMenu() {
      this.show = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.menu {
  position: absolute;
  top: 0;
  left: 0;
  background: brown;
  height: 100vh;
}
</style>
