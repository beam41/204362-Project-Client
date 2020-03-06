<template>
  <div class="navbar">
    <ul>
      <li><router-link to='/listdog'>News</router-link></li>
      <li><router-link to='/listdog'>Dog</router-link></li>
      <li><router-link to='/listdog'>Report</router-link></li>
      <li><router-link to='/listdog'>Donate</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'navbar',

});
</script>

<style>

.navbar {
  background: #6d6d6d;
  height: 100vh;
  width: 30vh;
}

li {
  margin-top: 100px;
  margin-bottom: 100px;
}

ul {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin: 0;
  padding: 0;
}

li a {
  display: block;
  color: #efefef;
  padding: 8px 16px;
  transition: all 0.25s;
}

li a:hover {
  background-color: #424242;
  color: white;
}

</style>
