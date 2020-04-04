<template>
  <div class="donate content">
    <h2>บริจาค</h2>
    <div v-if="donates" class="don-list">
      <div v-for="don in sortedDonates" :key="don.id" class="don-box">
        <v-lazy-image
          :src="don.imgPath | imgUrl"
          :src-placeholder="don.imgPath | imgPlacehold"
          :alt="don.description"
        />
        <h6>{{ don.title }}</h6>
        <p class="desc">{{ don.description }}</p>
        <p class="bor">บริจาคผ่าน Qr code:</p>
        <qrcode-vue class="qr" :value="don.qrLink" level="L" render-as="svg" :size="100" />
      </div>
    </div>
    <div v-else class="loader">
      <div class="spinner spinner-black"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import QrcodeVue from 'qrcode.vue';
import _ from 'lodash';
import DonateServ from '@/services/DonateApiService';
import Donate from '@/models/donate';

export default Vue.extend({
  layout: 'visitor',
  components: {
    QrcodeVue,
  },
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
  filters: {
    imgUrl(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${path}`;
    },
    imgPlacehold(path: string) {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${path}`;
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

  .don-list {
    width: 400px;
  }

  .don-box {
    background-color: color.lightness(var.$violet, 20%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var.$b-radius;
    overflow: hidden;
    margin: 1rem 0;

    h6 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    .desc {
      margin-bottom: 2rem;
    }

    .bor {
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
    }

    img {
      object-fit: cover;
      size: 400px;
      margin-bottom: 2rem;
    }

    .qr {
      border: 15px solid white;
      border-radius: var.$b-radius;
      margin-bottom: 1rem;
    }
  }
}
</style>
