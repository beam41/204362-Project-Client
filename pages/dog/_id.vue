<template>
  <div v-if="dogDetail" class="dogdetail content">
    <v-lazy-image
      :src="imgUrl"
      :src-placeholder="dogDetail.imgPath | imgPlacehold"
      :alt="dogDetail.description"
    />
    <h2>{{ dogDetail.name[0] }}</h2>
    <div class="doginfo">
      <p><b>พันธุ์:</b>{{ dogDetail.name }}</p>
      <p><b>อายุ:</b> {{ dogDetail.ageYear }}</p>
      <p><b>เพศ:</b> {{ dogDetail.sex }}</p>
      <p><b>ลักษณะ:</b>{{ dogDetail.description }}</p>
      <p><b>สถานะ:</b> {{ dogDetail.isAlive }}</p>
      <p><b>สีปลอกคอ:</b> {{ dogDetail.collarColor }}</p>
      <p><b>ผู้ดูแล:</b> {{ dogDetail.caretaker }}</p>
      <p><b>ติดต่อผู้ดูแล:</b> {{ dogDetail.caretakerPhone }}</p>
      <p><b>ที่อยู่:</b> {{ dogDetail.location }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dog from '@/models/dog';
import DogServ from '@/services/DogApiService';

export default Vue.extend({
  layout: 'visitor',
  name: 'DogDetail',

  data: () => ({
    dogDetail: null as null | dog,
  }),
  mounted() {
    DogServ.getDogVisitor(this.$route.params.id).then((val) => {
      this.dogDetail = val.data;
    });
  },
  computed: {
    imgUrl() {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${this.dogDetail!.imgPath}`;
    },
    imgPlacehold() {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${this.dogDetail!.imgPath}`;
    },
  },
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
.doginfo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 350px;
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
