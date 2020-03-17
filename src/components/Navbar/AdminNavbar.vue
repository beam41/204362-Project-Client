<template>
  <nav class="navbar">
    <div class="top">
      <h1>MheanMaa</h1>
    </div>
    <div class="center">
      <router-link to="/admin/news/" class="nav-link news">
        <font-awesome-icon :icon="['fas', 'newspaper']" />
        News
      </router-link>
      <router-link to="/admin/dog/" class="nav-link dog">
        <font-awesome-icon :icon="['fas', 'paw']" />
        Dog
      </router-link>
      <router-link to="/admin/report/" class="nav-link report">
        <font-awesome-icon :icon="['fas', 'inbox']" />
        Report
      </router-link>
      <router-link to="/admin/donate/" class="nav-link donate">
        <font-awesome-icon :icon="['fas', 'donate']" />
        Donate
      </router-link>
    </div>
    <div class="bot"></div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AdminNavbar',
});
</script>

<style lang="scss" scoped>
.top {
  h1 {
    color: white;
    margin: 2rem 0;
    font-size: 2rem;
    text-align: center;
  }
}

svg {
  margin: 0 1rem;
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
</style>
