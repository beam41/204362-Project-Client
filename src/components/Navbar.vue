<template>
  <div class="navbar">
    <ul>
      <li><router-link to="/listdog">News</router-link></li>
      <li><router-link to="/listdog">Dog</router-link></li>
      <li><router-link to="/listdog">Report</router-link></li>
      <li><router-link to="/listdog">Donate</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
});
</script>

<style lang="scss">
@use "../assets/color";
@use "../assets/var";

.navbar {
  background: var.$gray;
  height: 100vh;
  width: 30vh;
}

li {
  margin-top: 100px;
  margin-bottom: 100px;

  a {
    display: block;
    color: #ffffff;
    padding: 8px 16px;
    transition: all 0.25s;

    &:hover {
      background-color: color.lightness(var.$gray, -20%);
    }
  }
}

ul {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
