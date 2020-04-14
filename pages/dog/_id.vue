<template>
  <div class="dogdetail content">
    <v-lazy-image src="https://mheanmaa.azurewebsites.net/placeholder.jpg" />
    <h2>หมาโรยไอซิ่ง</h2>
    <p><b>พันธุ์:</b> {ข้อมูลที่จะดึง}</p>
    <p><b>อายุ:</b> {ข้อมูลที่จะดึง}</p>
    <p><b>เพศ:</b> {ข้อมูลที่จะดึง}</p>
    <p><b>ลักษณะ:</b> {ข้อมูลที่จะดึง}</p>
    <p><b>สถานะ:</b> {ข้อมูลที่จะดึง}</p>
    <p><b>สีปลอกคอ:</b> {ข้อมูลที่จะดึง}</p>
    <p><b>ติดต่อผู้ดูแล:</b> {ข้อมูลที่จะดึง}</p>
    <p><b>ที่อยู่:</b> {ข้อมูลที่จะดึง}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  layout: 'visitor',
  name: 'DogDetail',
});
</script>

<style lang="scss" scpoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.dogdetail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 1.5;
  margin: 0.5em 0;
}
img {
  object-fit: cover;
  size: 400px;
  border-radius: var.$b-radius;
}
</style>
