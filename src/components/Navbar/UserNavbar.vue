<template>
  <div>
    <div class="imgcontainer">
      <h1>ตรงนี้ใส่รูปหมา</h1>
    </div>
    <div class="navbar">
      <nav class="navbar" v-bind:class="active" v-on:click.prevent>
        <router-link to="/home" class="nav-link home">หน้าหลัก</router-link>
        <router-link to="/news" class="nav-link news">ข่าว</router-link>
        <router-link to="/dogs" class="nav-link dogs">สุนัขในโครงการ</router-link>
        <router-link to="/donate" class="nav-link donate">บริจาค</router-link>
        <router-link to="/contact" class="nav-link contact">ติดต่อเรา</router-link>
        <router-link to="/report" class="nav-link report">รายงานปัญหา</router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserNavbar',
});
</script>

<style lang="scss">
.imgcontainer {
  display: block;
  align-items: center;
  justify-content: center;
  height: 15pc;
}
.navbar {
  background-color: #725d79;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.nav-link {
  color: #ffffff;
  transition: all 0.25s;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1em;
  margin: 0rem 1em;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: #f8d5e4;
  }
}

</style>
