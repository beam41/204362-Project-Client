<template>
  <div class="box">
    <div class="bgicon">
      <div class="f pad">
        <font-awesome-icon :icon="['fas', 'bars']" @click="showMenu()" />
      </div>
      <h1 class="myweb">หมา มช.</h1>
    </div>
    <transition name="slide-l">
      <div v-if="show" class="menu">
        <div class="cross">
          <div class="f">
            <font-awesome-icon :icon="['fas', 'times']" @click="hideMenu()" />
          </div>
        </div>
        <nav class="link" @click="hideMenu()">
          <nuxt-link to="/" class="nav-link home"><span>หน้าหลัก</span></nuxt-link>
          <nuxt-link to="/news" class="nav-link news"><span>ข่าว</span></nuxt-link>
          <nuxt-link to="/dog" class="nav-link dogs"><span>สุนัขในโครงการ</span></nuxt-link>
          <nuxt-link to="/donate" class="nav-link donate"><span>บริจาค</span></nuxt-link>
          <nuxt-link to="/contact" class="nav-link contact"><span>ติดต่อเรา</span></nuxt-link>
          <nuxt-link to="/report" class="nav-link report"><span>รายงานปัญหา</span></nuxt-link>
        </nav>
        <div class="shade" @click="hideMenu()"></div>
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
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 300px;
  color: var.$gray;
  box-shadow: 68px 0px 44px 10px rgba(0, 0, 0, 0.3);
}
.shade {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: 300px;
  width: 100vw;
  height: 100vh;
}
.bgicon {
  font-size: 2.5rem;
  width: 100vw;
  display: flex;
  align-items: center;
}

.box {
  position: fixed;
  top: 0;
  left: 0;
  color: var.$gray;
  background-color: var.$white;
  box-shadow: var.$navbar-shadow;
}
.cross {
  font-size: 2.5rem;
  display: flex;
  justify-content: flex-end;
  margin: 10px 15px 30px 10px;
}
.link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
.nav-link {
  display: flex;
  justify-content: center;
  margin: 15px 0px 15px 0px;
  color: var.$gray;
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: var.$link;
  }

  &.nuxt-link-exact-active,
  &.nuxt-link-exact-active:hover {
    background-color: color.lightness(var.$link, 30%);
    color: var.$white;
  }
}

.myweb {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0;
  display: flex;
  margin-left: 5px;
}

.f {
  display: flex;
  align-items: center;
  justify-content: center;
  size: 52px;

  &.pad {
    width: 62px;
    padding: 0 10px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
