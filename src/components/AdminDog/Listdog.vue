<template>
  <div class="listdog">
    <div class="headstyle">head</div>
    <div> list dog table</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Listdog',

});
</script>

<style scoped>
.listdog {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.headstyle {
  border-color: #f44336!important;
  border-bottom: 1px solid
}
</style>
