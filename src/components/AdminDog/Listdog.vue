<template>
  <div class="listdog">
    <div class="headstyle">
      <p class="headtext">Dog</p>
    </div>
    <div>
      <div>btn</div>
      <div>table</div>
    </div>
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
  height: 8vh;
  box-shadow: 0 5px 5px 0 #bcbcbc;
}

.headtext {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #1b1b1b;
  font-size: 1.5rem;
  text-align: left;
  margin : 15px 0 0 40px;
}

</style>
