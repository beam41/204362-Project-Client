<template>
  <div class="listdog">

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

.headtext {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #1b1b1b;
  font-size: 1.5rem;
  text-align: left;
  margin: 15px 0 0 40px;
}
</style>
