<template>
  <div class="list content">
    <h2>ข่าว</h2>
    <div v-if="newsList" class="news_list">
      <nuxt-link v-for="news in newsList" :key="news.id" :to="`/news/${news.id}`" class="news_box">
        <div class="n-box">
          <h6 class="topic">{{ news.title }}</h6>
          <p class="detail">{{ news.detail }}</p>
        </div>
      </nuxt-link>
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
  name: 'NewsVisitor',
  data: () => ({
    newsList: null as null | News[],
  }),
  mounted() {
    NewsServ.getNewsListVisitor().then((val) => {
      this.newsList = val.data;
    });
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.topic {
  padding: 0px 50px 0px 20px;
  font-size: 1.25rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-top: 5px;
}
.detail {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding: 0px 50px 4px 30px;
  margin-bottom: 5px;
}
.news_box {
  text-decoration: none;
}
.n-box {
  background-color: rgba(230, 230, 230, 0.562);
  color: black;
  border: 2px solid black;
  border-radius: var.$b-radius;
  width: 750px;
  margin: 10px;

  @include responsive.respond-to(responsive.$desktop-mid) {
    width: 70vw;
  }
  @include responsive.respond-to(responsive.$tablet-portrait) {
    width: 90vw;
  }
}
</style>
