<template>
  <div class="adminbox">
    <Modal :show="currAcceptSelect ? true : false">
      <div class="m-top">
        <h5>Accept</h5>
      </div>
      <div v-if="currAcceptSelect" class="m-mid">
        <p>
          คุณต้องการอนุมัติ
          <strong>{{ currAcceptSelect.title }}</strong> หรือไม่
        </p>
      </div>
      <div class="m-bot">
        <button class="btn-success" @click="acceptedChange()">Accept</button>
        <button class="btn-default" @click="unAcceptedChange()">Cancel</button>
      </div>
    </Modal>
    <div class="padadmin">
      <div class="listpage-top">
        <nuxt-link to="/admin/news/add">
          <button class="btn-default"><font-awesome-icon :icon="['fas', 'plus']" />New</button>
        </nuxt-link>
        <div class="input-group">
          <input v-model="searchString" type="text" placeholder="Search" />
          <button class="btn-default">
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </div>
        <Sorter :options="by" @sort-change="onChange($event)" />
      </div>
      <div class="table-wrapper">
        <div class="head-wrapper">
          <table class="datalist head">
            <tr class="tablehead">
              <th>หัวข้อข่าว</th>
              <th>ผู้เขียน</th>
              <th>อนุมัติแล้ว</th>
            </tr>
          </table>
        </div>
        <div class="sub-table-wrapper">
          <transition-group v-if="news" class="datalist" name="flip-list" tag="table">
            <tr v-for="d in formattedArrays" :key="d.id">
              <td>
                <nuxt-link :to="`/admin/news/${d.id}`">{{ d.title }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/news/${d.id}`">{{ d.writer }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/news/${d.id}`">
                  <span @click.stop>
                    <CheckBox
                      :is-check="d.accepted"
                      :disabled="d.accepted || login.userType === 'S'"
                      @change="acceptedChangePrompt($event, d)"
                    /> </span
                ></nuxt-link>
              </td>
            </tr>
          </transition-group>

          <div v-else class="loader">
            <div class="spinner spinner-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import { mapState } from 'vuex';
import Sorter from '@/components/Shared/Sorter.vue';
import CheckBox from '@/components/Shared/CheckBox.vue';
import NewsServ from '@/services/NewsApiService';
import News from '@/models/news';
import Modal from '@/components/Shared/Modal.vue';
import User from '@/models/User';

export default Vue.extend({
  layout: 'admin',
  name: 'ListNews',
  components: {
    Sorter,
    Modal,
    CheckBox,
  },
  data: () => ({
    news: null as Array<News> | null,
    currOption: 0,
    descending: false,
    searchString: '',
    currAcceptSelect: null as News | null,
  }),
  computed: {
    by: () => ['หัวข้อข่าว', 'ผู้เขียน', 'อนุมัติแล้ว'],
    field: () => ['title', 'writer', 'accepted'],
    ...mapState({
      login: (state: any) => state.login as User,
    }),
    formattedArrays() {
      let filter = this.news;
      if (this.searchString !== '') {
        // prettier-ignore
        const findinObj = (val: string, obj: object) => _.some(obj, v => _.includes(v, val));
        // prettier-ignore
        filter = _.filter(this.news, o => findinObj(this.searchString, o));
      }
      return _.orderBy(filter, this.field[this.currOption], this.descending ? 'desc' : 'asc');
    },
  },
  mounted() {
    NewsServ.getNewsList(this.$store).then((val) => {
      this.news = val.data;
    });
  },
  methods: {
    onChange({ currOption, descending }: any) {
      // console.log({ currOption, descending });
      this.currOption = currOption;
      this.descending = descending;
    },
    acceptedChangePrompt(event: any, news: News) {
      if (event.target.checked) {
        this.currAcceptSelect = news;
        this.currAcceptSelect!.accepted = true;
      }
    },
    unAcceptedChange() {
      this.currAcceptSelect!.accepted = false;
      this.currAcceptSelect = null;
    },
    acceptedChange() {
      NewsServ.acceptNews(this.$store, this.currAcceptSelect!.id!, {
        accepted: true,
      } as News);
      this.currAcceptSelect = null;
    },
  },
  head: () => ({
    title: 'Admin: News',
  }),
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.datalist {
  @include selector.th-td-spacing(3);
}
</style>
