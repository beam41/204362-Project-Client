<template>
  <div class="nav-con">
    <nav class="navbar desktop">
      <nuxt-link to="/" class="nav-link home">หน้าหลัก</nuxt-link>
      <nuxt-link to="/news" class="nav-link news">ข่าว</nuxt-link>
      <nuxt-link to="/dog" class="nav-link dogs">สุนัขในโครงการ</nuxt-link>
      <nuxt-link to="/donate" class="nav-link donate">บริจาค</nuxt-link>
      <nuxt-link to="/contact" class="nav-link contact">ติดต่อเรา</nuxt-link>
      <nuxt-link to="/report" class="nav-link report">รายงานปัญหา</nuxt-link>
    </nav>
    <div class="navbar mobile">
      <VisitorNavbarMobile />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VisitorNavbarMobile from './VisitorNavbarMobile.vue';

export default Vue.extend({
  name: 'VisitorNavbar',
  components: {
    VisitorNavbarMobile,
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.nav-con {
  .desktop {
    visibility: visible;
    position: fixed;
    width: 100%;
    box-shadow: var.$navbar-shadow;
  }

  .mobile {
    visibility: hidden;
    display: none;
  }

  @include responsive.respond-to(responsive.$desktop-mid) {
    .desktop {
      visibility: hidden;
      display: none;
    }

    .mobile {
      display: flex;
      visibility: visible;
    }
  }
}

.navbar {
  background-color: var.$white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  position: relative;
  z-index: 10000;
}

.nav-link {
  @extend %animate-all;
  color: var.$gray;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: var.$link;
  }

  &.nuxt-link-exact-active,
  &.nuxt-link-exact-active:hover {
    box-shadow: inset 0 -0.175em white, inset 0 5px color.lightness(var.$link, 30%);
  }
}

#nav-icon {
  padding: 10px 10px;
  min-width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  font-size: 2rem;
  color: var.$white;
  background-color: var.$violet;
}

.bar {
  background-color: var.$white;
}
.content {
  padding: 0;
}
</style>
