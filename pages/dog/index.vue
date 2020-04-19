<template>
  <div class="dog_name_list content">
    <h2>สุนัขในโครงการ</h2>
    <div v-if="dogList" class="input-group">
      <input v-model="searchString" type="text" placeholder="Search" />
      <button class="btn-default">
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </div>
    <div v-if="dogList" class="dog_list">
      <nuxt-link
        v-for="dog in dogSearch"
        :key="dog.id"
        :to="`/dog/${dog.id}`"
        class="dog_box hover-link"
      >
        <v-lazy-image
          :src="dog.imgPath | imgUrl"
          :src-placeholder="dog.imgPath | imgPlacehold"
          :alt="dog.name[0]"
        />
        <h6>{{ dog.name[0] }}</h6>
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

import _ from 'lodash';
import DogServ from '@/services/DogApiService';
import Dog from '@/models/dog';

export default Vue.extend({
  layout: 'visitor',
  name: 'DogListVisitor',
  filters: {
    imgUrl(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${path}`;
    },
    imgPlacehold(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${path}`;
    },
  },
  data: () => ({
    dogList: null as null | Dog[],
    currOption: 0,
    descending: false,
    searchString: '',
  }),
  computed: {
    dogSearch() {
      let filter = this.dogList;
      if (this.searchString !== '') {
        // prettier-ignore
        filter = _.filter(this.dogList, (o: Dog) => _.includes(o.name!.toString(), this.searchString));
      }
      return _.orderBy(filter, 'name');
    },
  },

  mounted() {
    DogServ.getDogListVisitor().then((val) => {
      this.dogList = val.data;
    });
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.dog_name_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dog_list {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.dog_box {
  @extend %animate-all;
  place-self: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var.$b-radius;
  overflow: hidden;
  margin: 1rem 0;
  width: 250px;
  padding: 0 7px 7px 7px;
  box-shadow: 0px 15px 27px -20px rgba(79, 79, 79, 0.45);

  &,
  & * {
    text-decoration: none;
  }

  h6 {
    color: black;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  img {
    object-fit: cover;
    size: 250px;
    margin-bottom: 2rem;
    border-radius: var.$b-radius;
  }
}

.input-group {
  margin-bottom: 2.5rem;
}
</style>
