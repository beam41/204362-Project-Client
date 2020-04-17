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
      <h3>NEWS</h3>
      <div v-if="newsList" class="list">
        <nuxt-link v-for="news in newsList" :key="news.id" :to="`/news/${news.id}`" class="c-box">
          <div class="sep">
            <v-lazy-image
              :src="news.imgPath | imgUrl"
              :src-placeholder="news.imgPath | imgPlacehold"
            />
            <h6>{{ news.title }}</h6>
          </div>
        </nuxt-link>
      </div>
      <button class="gobtn">
        <nuxt-link to="/news" class="nav-link "><span>MORE</span></nuxt-link>
      </button>
      <div class="line"></div>
    </div>
    <div class="showcase">
      <h3>DOGS</h3>
      <div v-if="dogList" class="list">
        <nuxt-link v-for="dog in dogList" :key="dog.id" :to="`/dog/${dog.id}`" class="c-box">
          <div class="sep">
            <v-lazy-image
              :src="dog.imgPath | imgUrl"
              :src-placeholder="dog.imgPath | imgPlacehold"
            />
            <h6>{{ dog.name[0] }}</h6>
          </div>
        </nuxt-link>
      </div>
      <button class="gobtn">
        <nuxt-link to="/dog" class="nav-link "><span>MORE</span></nuxt-link>
      </button>
      <div class="line"></div>
    </div>
    <div class="showcase">
      <h3>SUPPORT US</h3>
      <button class="gobtn">
        <nuxt-link to="/donate" class="nav-link "><span>Donate</span></nuxt-link>
      </button>
      <div v-if="donates" class="list">
        <nuxt-link
          v-for="don in donates"
          :key="don.id"
          class="c-box hover-link"
          :to="`/donate#${don.id}`"
        >
          <div class="sep">
            <v-lazy-image
              :src="don.imgPath | imgUrl"
              :src-placeholder="don.imgPath | imgPlacehold"
            />
            <h6>{{ don.title }}</h6>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import DonateServ from '@/services/DonateApiService';
import Donate from '@/models/donate';
import DogServ from '@/services/DogApiService';
import Dog from '@/models/dog';
import NewsServ from '@/services/NewsApiService';
import News from '@/models/news';

export default Vue.extend({
  layout: 'visitor',
  name: 'Home',
  components: {
    KinesisContainer,
    KinesisElement,
  },
  filters: {
    imgUrl(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${path}`;
    },
    imgPlacehold(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${path}`;
    },
  },
  data: () => ({
    donates: null as null | Donate[],
    dogList: null as null | Dog[],
    newsList: null as null | News[],
  }),
  mounted() {
    DonateServ.getDonateRandomList().then((val) => {
      this.donates = val.data;
    });
    DogServ.getDogsRandomList().then((val) => {
      this.dogList = val.data;
    });
    NewsServ.getNewsRandomList().then((val) => {
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
  height: 500px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
}
.list {
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3rem 1rem;
  margin: 50px;
}

.c-box {
  @extend %animate-all;
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var.$b-radius;
  overflow: hidden;
  height: 400px;
  width: 300px;
  //background: color.lightness(var.$white, -2%);
  box-shadow: 0px 15px 27px -20px rgba(79, 79, 79, 0.45);
  color: var.$black;
  text-decoration: none;

  img {
    object-fit: cover;
    size: 300px;
    margin-bottom: 2rem;
    border-radius: var.$b-radius;
  }
}
.sep {
  text-align: center;
}
.gobtn {
  margin: 50px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: var.$b-radius;
}
.nav-link {
  font-size: 2rem;
  color: black;
  text-decoration: none;
}
.line {
  width: 50%;
  height: 5px;
  background-color: black;
  justify-self: middle;
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
