<template>
  <div id="listdog">
    <div>
      <router-link to="/listdog">
        <Button type="list">list</Button>
      </router-link>
      <h :style="{margin: '0 30px'}"></h>

      <router-link to="/add-update">
        <Button type="new">+ new</Button>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Listdog',

});
</script>

<style>

</style>
