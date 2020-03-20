<template>
  <nav class="navbar">
    <div class="top">
      <h1>MheanMaa</h1>
    </div>
    <div class="center">
      <nuxt-link to="/admin/news/" class="nav-link news">
        <font-awesome-icon :icon="['fas', 'newspaper']" />News
      </nuxt-link>
      <nuxt-link to="/admin/dog/" class="nav-link dog">
        <font-awesome-icon :icon="['fas', 'paw']" />Dog
      </nuxt-link>
      <nuxt-link to="/admin/report/" class="nav-link report">
        <font-awesome-icon :icon="['fas', 'inbox']" />Report
      </nuxt-link>
      <nuxt-link to="/admin/donate/" class="nav-link donate">
        <font-awesome-icon :icon="['fas', 'donate']" />Donate
      </nuxt-link>
    </div>
    <div class="bot">
      <h5>
        <font-awesome-icon :icon="['fas', 'user']" />
        {{ login.firstName }}
      </h5>
      <h6>{{ login.deptNo | depName }}</h6>
      <button class="btn-warn" href="#" @click="logout()">
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" />Logout
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import User from '@/models/User';

export default Vue.extend({
  name: 'AdminNavbar',
  computed: mapState({
    login: (state: any) => state.login as User,
  }),
  methods: {
    logout() {
      this.$store.commit('LOGOUT');
      this.$router.push('/admin/login');
    },
  },
  filters: {
    depName(/* value: number */) {
      return `Faculty of ${['Humanities'][0]}`;
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.top {
  h1 {
    color: white;
    margin: 2rem 0;
    font-size: 2rem;
    text-align: center;
  }
}

.center {
  svg {
    margin: 0 1rem;
  }
}

.navbar {
  position: relative;
  background: var.$gray;
  z-index: 5000;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-link {
  display: block;
  color: #ffffff;
  transition: all 0.25s;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 2rem 0;
  padding: 1rem 0;

  &:hover {
    text-decoration: none;
    background-color: color.lightness(var.$gray, -20%);
  }
}

.bot {
  margin: 1rem 1rem;

  * {
    color: white;
  }

  h6 {
    margin-bottom: 1rem;
  }

  svg {
    margin-right: 0.5em;
  }

  h5 {
    font-size: 1.7rem;
    margin: 0;
  }
}
</style>
