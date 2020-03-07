<template>
  <div class="listdog adminbox">
    <div class="headstyle">head</div>
    <div>list dog table</div>
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
}

.headstyle {
  border-bottom: 1px solid #f44336;
}
</style>
