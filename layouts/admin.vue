<template>
  <div v-if="loggedIn" class="admin">
    <Navbar></Navbar>
    <div class="headstyle">
      <transition name="topbar">
        <h2 :key="title">{{ title }}</h2>
      </transition>
    </div>
    <nuxt />
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
  data: () => ({
    transitionName: '',
  }),
  computed: {
    title() {
      return this.$route.meta.title;
    },
    loggedIn() {
      return this.$store.state.login.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn === false) this.$router.push('/admin/login');
  },
});
</script>

<style lang="scss">
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';
@use 'assets/styles/admin_util';

.admin {
  display: grid;
  height: 100vh;
  grid-template-columns: max(#{var.$navbar-minwidth}, #{var.$navbar-width}) 1fr;
  grid-template-rows: var.$top-part-h 1fr;
  overflow: hidden;

  .headstyle {
    display: flex;
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
