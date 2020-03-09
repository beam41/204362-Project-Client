<template>
  <div class="navbar">
    <div class="top">
      <h1>MheanMaa</h1>
    </div>
    <div class="center">
      <router-link to="/admin/news/list" class="nav-link news">
        <i class="fas fa-newspaper"></i> News
      </router-link>
      <router-link to="/admin/dog/list" class="nav-link dog">
        <i class="fas fa-paw"></i> Dog
      </router-link>
      <router-link to="/admin/report/list" class="nav-link report">
        <i class="fas fa-inbox"></i> Report
      </router-link>
      <router-link to="/admin/donate/list" class="nav-link donate">
        <i class="fas fa-donate"></i> Donate
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AdminNavbar',
});
</script>

<style lang="scss">
.top {
  h1 {
    font-size: 2rem;
  }
}

.navbar {
  position: relative;
  background: var.$gray;
  z-index: 5000;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
}

.nav-link {
  display: block;
  color: #ffffff;
  transition: all 0.25s;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 2rem 1em;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    background-color: color.lightness(var.$gray, -20%);
  }
}

.news:hover {
  color: blue;
}
.dog:hover {
  color: red;
}
.report:hover {
  color: green;
}
.donate:hover {
  color: yellow;
}
</style>
