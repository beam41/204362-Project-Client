<template>
  <div class="list content">
    <h2>สุนัขในโครงการ</h2>
    <div v-if="newsList" class="news_list">
      <nuxt-link v-for="news in newsList" :key="news.id" :to="`/news/${news.id}`" class="news_box">
        <h6>{{ news.title }}</h6>
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

<style></style>
