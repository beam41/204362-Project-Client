<template>
  <div class="list content">
    <h2>ข่าว</h2>
    <div v-if="newsList" class="news_list">
      <nuxt-link
        v-for="news in sortedNews"
        :key="news.id"
        :to="`/news/${news.id}`"
        class="news_box"
      >
        <div class="n-box">
          <h6 class="topic">
            {{ news.title }}
            <span class="time-part"
              >&#183; <timeago :datetime="new Date(news.acceptedOn)"></timeago
            ></span>
          </h6>
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
import _ from 'lodash';
import NewsServ from '@/services/NewsApiService';
import News from '@/models/news';

export default Vue.extend({
  layout: 'visitor',
  name: 'NewsListVisitor',
  data: () => ({
    newsList: null as null | News[],
  }),
  computed: {
    sortedNews() {
      return _.orderBy(this.newsList, 'acceptedOn', 'desc');
    },
  },
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
  padding: 0 50px 0 20px;
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
  padding: 0px 50px 0px 30px;
  margin-bottom: 5px;
}
.news_box {
  text-decoration: none;
}
.n-box {
  @extend %animate-all;
  color: black;
  box-shadow: 0 0 12px 0 rgba(79, 79, 79, 0.45);
  border-radius: var.$b-radius;
  width: 750px;
  margin: 30px;
  padding: 5px 0;

  @include responsive.respond-to(responsive.$desktop-mid) {
    width: 70vw;
  }
  @include responsive.respond-to(responsive.$tablet-portrait) {
    width: 90vw;
  }

  &:hover {
    box-shadow: 0 0 12px 0 rgba(79, 79, 79, 1);
  }
}

.time-part {
  font-size: 0.75rem;
  color: #575757;
  font-weight: normal;
}
</style>
