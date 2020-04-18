<template>
  <div class="content">
    <div v-if="newsDetail" class="detail">
      <h2>{{ newsDetail.title }}</h2>
      <p class="news-time">{{ newsTimeInfo }}</p>
      <v-lazy-image :src="imgUrl" :src-placeholder="imgPlacehold" />
      <p v-for="line in newsDetailSpilt" :key="line.detail" class="news-detail">{{ line }}</p>
      <p class="news-writer">เขียนโดย {{ newsDetail.writer }}</p>
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
    newsDetailSpilt() {
      return this.newsDetail!.detail!.split('\n').filter((val) => val !== '');
    },
    newsTimeInfo() {
      return new Date(this.newsDetail!.acceptedOn!).toLocaleString('th-TH');
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

  h2 {
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }
}
.news-detail {
  width: 60vw;
  @include responsive.respond-to(responsive.$tablet-portrait) {
    width: 90vw;
  }
}
.news-writer {
  margin: 5rem 0 0 0;
  color: #575757;
  font-size: 0.8rem;
}

.news-time {
  margin: 0;
  color: #575757;
  font-size: 0.8rem;
}

img {
  object-fit: contain;
  width: 640px;
  height: 100%;
  border-radius: var.$b-radius;
  margin: 5rem 0;
  @include responsive.respond-to(responsive.$tablet-portrait) {
    width: 90vw;
  }
}
</style>
