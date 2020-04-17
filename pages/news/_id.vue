<template>
  <div class="content">
    <div v-if="newsDetail" class="detail">
      <h2>{{ newsDetail.title }}</h2>
      <v-lazy-image :src="imgUrl" :src-placeholder="imgPlacehold" />
      <p
        v-for="line in newsDetail.detail.split('\n').filter((val) => val !== ' ')"
        :key="line.detail"
        class="news-detail"
      >
        {{ line }}<br />
      </p>
      <p class="news-writer">Writer : {{ newsDetail.writer }}</p>
    </div>
    <div v-else class="loader">
      <div class="spinner spinner-black"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore

import NewsServ from '@/services/NewsApiService';
import News from '@/models/news';

export default Vue.extend({
  layout: 'visitor',
  name: 'NewsDetail',

  data: () => ({
    newsDetail: null as null | News,
  }),
  computed: {
    imgUrl() {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${this.newsDetail!.imgPath}`;
    },
    imgPlacehold() {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${this.newsDetail!.imgPath}`;
    },
  },
  mounted() {
    NewsServ.getNewsVisitor(this.$route.params.id).then((val) => {
      this.newsDetail = val.data;
    });
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.news-detail {
  width: 60vw;
  @include responsive.respond-to(responsive.$tablet-portrait) {
    width: 90vw;
  }
}
.news-writer {
  margin-top: 200px;
}
img {
  object-fit: contain;
  size: 640px;
  border-radius: var.$b-radius;
  @include responsive.respond-to(responsive.$tablet-portrait) {
    width: 90vw;
  }
}
</style>
