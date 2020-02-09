<template>
  <div id="navbar">
    <nav>
    <Menu active-name="1"
          theme="dark" width="auto">

      <MenuItem name="1">
        <span>News</span>
      </MenuItem>

      <router-link to="/listdog">
      <MenuItem name="2">
        <span>Dog</span>
      </MenuItem>
      </router-link>

      <MenuItem name="3">
        <span>Reports</span>
      </MenuItem>

    </Menu>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',

});
</script>

<style scoped>
#navbar {
  text-align: center;
}
</style>
