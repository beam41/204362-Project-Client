<template>
  <div class="donate">
    <h2>บริจาค</h2>
    <div v-if="donates" class="don-list">
      <div v-for="don in sortedDonates" :key="don.id" class="don-box">
        <h6>{{ don.title }}</h6>
      </div>
    </div>
    <div v-else class="loader">
      <div class="spinner spinner-black"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import DonateServ from '@/services/DonateApiService';
import Donate from '@/models/donate';

export default Vue.extend({
  layout: 'visitor',
  data: () => ({
    donates: null as null | Donate[],
  }),
  mounted() {
    DonateServ.getDonateListVisitor().then((val) => {
      this.donates = val.data;
    });
  },
  computed: {
    sortedDonates() {
      return _.orderBy(this.donates, 'acceptedOn');
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.donate {
  display: flex;
  flex-direction: column;
  align-items: center;

  .loader {
    height: 10vh;
  }

  .don-box {
    background-color: color.lightness(var.$violet, 20%);
  }
}
</style>
