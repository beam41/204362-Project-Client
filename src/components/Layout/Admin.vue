<template>
  <div class="admin" v-if="loggedIn">
    <Navbar></Navbar>
    <div class="headstyle">
      <transition name="topbar">
        <h2 :key="title">{{ title }}</h2>
      </transition>
    </div>
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar/AdminNavbar.vue';

export default Vue.extend({
  name: 'AdminLayout',
  data: () => ({
    transitionName: '',
  }),
  created() {
    if (this.loggedIn === false) this.$router.push('/admin/login');
  },
  components: {
    Navbar,
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    loggedIn() {
      return this.$store.state.login.loggedIn;
    },
  },
  watch: {
    $route(to, from) {
      if (to.meta.pos !== from.meta.pos) {
        this.transitionName = to.meta.pos > from.meta.pos ? 'up' : 'down';
      } else {
        this.transitionName = to.meta.sub ? 'right' : 'left';
      }
    },
  },
});
</script>

<style lang="scss">
@use 'src/assets/styles/admin_util';

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
