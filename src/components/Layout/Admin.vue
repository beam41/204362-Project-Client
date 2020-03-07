<template>
  <div class="admin">
    <Navbar></Navbar>
    <div class="headstyle adminbox">
      <p>name</p>
    </div>
    <slot></slot>
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
.admin {
  display: flex;
}

.headstyle {
  box-shadow: 7px -1px 12px 0px var.$gray;
  height: 6vh;
}

p {
  font-family: var.$font-fam;
  font-weight: bold;
  margin: 15px;
  padding: 0;
}
</style>
