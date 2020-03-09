<template>
  <div class="admin">
    <Navbar></Navbar>
    <div class="headstyle">
      <transition name="topbar">
        <h2 :key="title">{{ title }}</h2>
      </transition>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar/AdminNavbar.vue';

export default Vue.extend({
  name: 'AdminLayout',
  components: {
    Navbar,
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
});
</script>

<style lang="scss">
@use 'src/assets/styles/admin_util';

.admin {
  display: grid;
  height: 100vh;
  grid-template-columns: var.$navbar-width 100fr;
  grid-template-rows: var.$top-part-h 100fr;

  & .headstyle {
    display: flex;
  }

  .headstyle {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
    align-items: center;
    h2 {
      font-size: 1.75rem;
      margin: 0 1em;
      position: absolute;
    }
  }
}
</style>
