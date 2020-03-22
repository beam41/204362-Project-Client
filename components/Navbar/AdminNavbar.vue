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
      <!--prettyhtml-ignore-->
      <h5><font-awesome-icon :icon="['fas', 'user']" />{{ fullName }}</h5>
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
  computed: {
    fullName() {
      return `${this.login.firstName} ${this.login.lastName}`;
    },
    ...mapState({
      login: (state: any) => state.login as User,
    }),
  },
  methods: {
    logout() {
      this.$store.commit('LOGOUT');
      this.$router.push('/admin/login');
    },
  },
  filters: {
    depName(value: number) {
      if (value < 21)
        return `Faculty of ${
          [
            'Humanities',
            'Education',
            'Fine Arts',
            'Social Sciences',
            'Science',
            'Engineering',
            'Medicine',
            'Agriculture',
            'Dentistry',
            'Pharmacy',
            'Associated Medical Sciences',
            'Nursing',
            'Agro-Industry',
            'Veterinary Medicine',
            'Business Administration',
            'Economics',
            'Architecture',
            'Mass Communication',
            'Political Science and Public Administration',
            'Law',
          ][value - 1]
        }`;
      else if (value === 21) return 'College of Art, Media and Technology';
      return 'Faculty of Everything Else';
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

  h5,
  h6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
