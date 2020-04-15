<template>
  <div>
    <div class="navbox" v-if="mobileView">
      <VisitorNavbarMobile></VisitorNavbarMobile>
    </div>
    <div v-if="!mobileView" class="navbar">
      <nav class="navbar">
        <nuxt-link to="/" class="nav-link home">หน้าหลัก</nuxt-link>
        <nuxt-link to="/news" class="nav-link news">ข่าว</nuxt-link>
        <nuxt-link to="/dog" class="nav-link dogs">สุนัขในโครงการ</nuxt-link>
        <nuxt-link to="/donate" class="nav-link donate">บริจาค</nuxt-link>
        <nuxt-link to="/contact" class="nav-link contact">ติดต่อเรา</nuxt-link>
        <nuxt-link to="/report" class="nav-link report">รายงานปัญหา</nuxt-link>
      </nav>
    </div>
    <div class="imgcontainer"></div>
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
  data: () => {
    return {
      mobileView: false,
      showNav: false,
    };
  },
  mounted() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.imgcontainer {
  width: 100%;
  height: 360px;
  background-image: url('~assets/images/tia.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 0px;
}

.navbar {
  background-color: var.$white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.navbox {
  background-color: var.$white;
  display: flex;
  height: 50px;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  box-shadow: -10px 5px 20px rgb(90, 90, 90);
}
.nav-link {
  @extend %animate-all;
  color: var.$gray;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1em;
  margin: 0rem 1em;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: var.$link;
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
  padding: 0px;
}
</style>
