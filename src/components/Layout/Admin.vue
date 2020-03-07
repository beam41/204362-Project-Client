<template>
  <div class="admin">
    <Navbar></Navbar>
    <div class="rightbox">
      <div class="headstyle">
        <p>name</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar/AdminNavbar.vue';

export default Vue.extend({
  name: 'AdminLayout',
  components: {
    Navbar,
  },
});
</script>

<style scoped lang="scss">
.admin,
.rightbox {
  display: flex;
}

.headstyle {
  box-shadow: 0px -1px 12px 0px black;
  height: var.$top-part-h;
}

p {
  font-family: var.$font-fam;
  font-weight: bold;
  margin: 15px;
  padding: 0;
}

.rightbox {
  display: flex;
  flex-direction: column;
  width: 100vw - var.$navbar-width;
}
</style>
