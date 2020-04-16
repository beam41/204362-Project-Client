<template>
  <div class="content">
    <div v-if="dogDetail" class="dogdetail">
      <v-lazy-image :src="imgUrl" :src-placeholder="imgPlacehold" :alt="dogDetail.description" />
      <h2>{{ dogDetail.name[0] }}</h2>
      <div class="doginfo">
        <p><b>ชื่อ:</b> {{ dogDetail.name | arrToString }}</p>
        <p><b>พันธุ์:</b> {{ dogDetail.breed }}</p>
        <p><b>อายุ:</b> {{ formatAge }}</p>
        <p>
          <b>เพศ:</b> <font-awesome-icon :icon="['fas', dogDetail.sex ? 'venus' : 'mars']" />
          {{ formatSex }}
        </p>
        <p><b>ลักษณะ:</b> {{ dogDetail.description }}</p>
        <p><b>สถานะ:</b> {{ formatIsAlive }}</p>
        <p>
          <b>สีปลอกคอ: </b>
          <span :class="'collcol ' + dogDetail.collarColor">{{ formatCollarColor }}</span>
        </p>
        <p><b>ผู้ดูแล:</b> {{ dogDetail.caretaker }}</p>
        <p><b>ติดต่อผู้ดูแล:</b> {{ dogDetail.caretakerPhone | arrToString }}</p>
        <p><b>ที่อยู่:</b> {{ dogDetail.location }}</p>
      </div>
    </div>
    <div v-else class="loader">
      <div class="spinner spinner-black"></div>
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
  filters: {
    arrToString(arr: string[]) {
      return arr.toString().replace(/,/g, ', ');
    },
  },

  data: () => ({
    dogDetail: null as null | dog,
  }),
  computed: {
    imgUrl() {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${this.dogDetail!.imgPath}`;
    },
    imgPlacehold() {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${this.dogDetail!.imgPath}`;
    },
    formatSex() {
      if (this.dogDetail!.sex === 'F') {
        return 'ตัวเมีย';
      }
      return 'ตัวผู้';
    },
    formatIsAlive() {
      if (this.dogDetail!.isAlive) {
        return 'มีชีวิต';
      }
      return 'เสียชีวิต';
    },
    formatCollarColor() {
      if (this.dogDetail!.collarColor === 'G') {
        return 'สีเขียว';
      }
      if (this.dogDetail!.collarColor === 'Y') {
        return 'สีเหลือง';
      }
      return 'สีแดง';
    },
    formatAge() {
      const strAge = [];
      // @ts-ignore
      if (this.dogDetail!.ageYear > 0) strAge.push(`${this.dogDetail!.ageYear} ปี`);
      // @ts-ignore
      if (this.dogDetail!.ageMonth > 0) strAge.push(`${this.dogDetail!.ageMonth} เดือน`);
      return strAge.join(' ');
    },
  },
  mounted() {
    DogServ.getDogVisitor(this.$route.params.id).then((val) => {
      this.dogDetail = val.data;
    });
  },
});
</script>

<style lang="scss" scoped>
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

.collcol {
  border-radius: var.$b-radius;
  padding: 0 var.$b-radius;
  &.R {
    background: #ef4e4c;
  }

  &.Y {
    background: #ffdf54;
  }

  &.G {
    background: #8def29;
  }
}
</style>
