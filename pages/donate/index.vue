<template>
  <div class="donate content">
    <h2>บริจาค</h2>
    <div v-if="donates" class="don-list">
      <div v-for="don in sortedDonates" :ref="don.id" :key="don.id" class="don-box">
        <div class="sep">
          <v-lazy-image
            :src="don.imgPath | imgUrl"
            :src-placeholder="don.imgPath | imgPlacehold"
            :alt="don.title"
          />
          <h6>{{ don.title }}</h6>
          <p class="desc">{{ don.description }}</p>
        </div>
        <div class="sep">
          <p class="bor">บริจาคผ่าน Qr code:</p>
          <qrcode-vue class="qr" :value="don.qrLink" level="L" render-as="svg" :size="100" />
        </div>
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
  name: 'DonateVisitor',
  components: {
    QrcodeVue,
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
  }),
  computed: {
    sortedDonates() {
      return _.orderBy(this.donates, 'acceptedOn');
    },
  },
  mounted() {
    DonateServ.getDonateListVisitor().then((val) => {
      this.donates = val.data;
      if (this.$route.hash) {
        setTimeout(() => {
          // @ts-ignore
          this.$refs[this.$route.hash.slice(1)][0].scrollIntoView();
        }, 100);
      }
    });
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

  .don-list {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 3rem 1rem;
  }

  .don-box {
    @extend %animate-all;
    place-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: var.$b-radius;
    overflow: hidden;
    height: 100%;
    width: 400px;
    //background: color.lightness(var.$white, -2%);
    box-shadow: 0 15px 27px -20px rgba(79, 79, 79, 0.45);

    &:hover {
      box-shadow: 0 15px 27px -10px rgba(79, 79, 79, 1);
    }

    h6 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    & h6,
    & p {
      margin-left: 0.3rem;
      margin-right: 0.3rem;
    }

    .desc {
      margin-bottom: 2rem;
    }

    .bor {
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      user-select: none;
    }

    img {
      object-fit: cover;
      size: 400px;
      margin-bottom: 2rem;
      border-radius: var.$b-radius;
    }

    .qr {
      @extend %animate-all;
      border: 15px solid white;
      margin-bottom: 1rem;
      border-radius: var.$b-radius;
      box-shadow: 0 0 8px -2px rgba(79, 79, 79, 0.45);

      &:hover {
        transform: translateY(-125px) scale(2.5);
        box-shadow: 0 0 10px -2px rgba(79, 79, 79, 1);
      }
    }
  }

  .sep {
    text-align: center;
  }

  @include responsive.respond-to(responsive.$phone) {
    .don-list {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .don-box {
      width: 300px;

      img {
        object-fit: cover;
        size: 300px;
        margin-bottom: 2rem;
        border-radius: var.$b-radius;
      }

      .qr {
        &:hover {
          transform: translateY(-75px) scale(2);
          box-shadow: 0 0 10px -2px rgba(79, 79, 79, 1);
        }
      }
    }
  }
}
</style>
