<template>
  <div>
    dogs

    <div class="dog_name_list content">
      <div v-if="dogname" class="dog_list">
        <nuxt-link v-for="dog in sortedDog" :key="dog.id" :to="`/dog/${dog.id}`" class="dog_box">
          <v-lazy-image
            :src="dog.imgPath | imgUrl"
            :src-placeholder="dog.imgPath | imgPlacehold"
            :alt="dog.description"
          />
          <h6>{{ dog.name[0] }}</h6>
        </nuxt-link>
      </div>
      <div v-else class="loader">
        <div class="spinner spinner-black"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore

import _ from 'lodash';
import DogServ from '@/services/DogApiService';
import dog from '@/models/dog';

export default Vue.extend({
  layout: 'visitor',
  name: 'DogVisitor',
  filters: {
    imgUrl(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${path}`;
    },
    imgPlacehold(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${path}`;
    },
  },
  data: () => ({
    dogname: null as null | dog[],
  }),
  computed: {
    sortedDog() {
      return _.orderBy(this.dogname, 'acceptedOn');
    },
  },
  mounted() {
    DogServ.getDogVisitor().then((val) => {
      this.dogname = val.data;
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

  .loader {
    height: 740px;
  }
}

.dog_list {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  min-height: 740px;
}

.dog_box {
  place-self: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var.$b-radius;
  overflow: hidden;
  margin: 1rem 0;
  width: 250px;
  &,
  & * {
    text-decoration: none;
  }

  border: 2px solid var.$gray;
  padding: 7px;
  h6 {
    color: black;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  img {
    object-fit: cover;
    size: 230px;
    margin-bottom: 2rem;
    border-radius: var.$b-radius;
  }
}
</style>
