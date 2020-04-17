<template>
  <div class="box">
    <kinesis-container class="parent">
      <kinesis-element class="logo" type="depth" :strength="10" />
      <kinesis-element class="ma dog1" type="depth" :strength="10" />
      <kinesis-element class="ma dog2" type="depth" :strength="20" />
      <kinesis-element class="ma dog3" type="depth" :strength="25" />
      <kinesis-element class="ma dog4" type="depth" :strength="20" />
      <kinesis-element class="ma dog5" type="depth" :strength="30" />
      <kinesis-element class="ma dog6" type="depth" :strength="10" />
      <kinesis-element class="ma dog7" type="depth" :strength="20" />
      <kinesis-element class="ma dog8" type="depth" :strength="10" />
      <kinesis-element class="ma dog9" type="depth" :strength="15" />
    </kinesis-container>
    <div class="showcase">
      <card>1</card>
      <card>2</card>
      <card>3</card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

export default Vue.extend({
  layout: 'visitor',
  name: 'Home',
  components: {
    KinesisContainer,
    KinesisElement,
  },
});
</script>

<style scoped>
.parent {
  width: 100vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
.logo {
  width: 100vw;
  max-width: 700px;
  max-height: 500px;
  background-image: url('~assets/images/maa-parallax/Ma-para-1.png');
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}
.ma {
  width: 100vw;
  max-width: 700px;
  height: 500px;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.showcase {
  display: grid;
  grid-row: 3;
  justify-content: center;
}
.dog1 {
  background-image: url('~assets/images/maa-parallax/2.png');
}
.dog2 {
  background-image: url('~assets/images/maa-parallax/Artboard 1.png');
}
.dog3 {
  background-image: url('~assets/images/maa-parallax/Artboard 3.png');
}
.dog4 {
  background-image: url('~assets/images/maa-parallax/Artboard 4.png');
}
.dog5 {
  background-image: url('~assets/images/maa-parallax/Artboard 5.png');
}
.dog6 {
  background-image: url('~assets/images/maa-parallax/Artboard 6.png');
}
.dog7 {
  background-image: url('~assets/images/maa-parallax/Artboard 7.png');
}
.dog8 {
  background-image: url('~assets/images/maa-parallax/Artboard 8.png');
}
.dog9 {
  background-image: url('~assets/images/maa-parallax/Artboard 9.png');
}
</style>
