<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link to="/admin/news/list" class="nav-link">News</router-link>
      </li>
      <li>
        <router-link to="/admin/dog/list" class="nav-link">Dog</router-link>
      </li>
      <li>
        <router-link to="/admin/report/list" class="nav-link">Report</router-link>
      </li>
      <li>
        <router-link to="/admin/donate/list" class="nav-link">Donate</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AdminNavbar',
});
</script>

<style lang="scss">
.navbar {
  position: relative;
  background: var.$gray;
  height: 100vh;
  z-index: 15000;
}

li {
  margin-top: 100px;
  margin-bottom: 100px;

  .nav-link {
    display: block;
    color: #ffffff;
    padding: 8px 16px;
    transition: all 0.25s;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: var.$white;
      background-color: color.lightness(var.$gray, -20%);
    }
  }
}

ul {
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
