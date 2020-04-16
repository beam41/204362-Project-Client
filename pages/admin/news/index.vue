<template>
  <div class="adminbox">
    <div class="padadmin">
      <div class="listpage-top">
        <nuxt-link to="/admin/news/add">
          <button class="btn-default"><font-awesome-icon :icon="['fas', 'plus']" />New</button>
        </nuxt-link>
        <Sorter :options="by" @change="onChange($event)" />
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
          <table class="datalist">
            <tr v-for="d in sortedArrays" :key="d.id">
              <td>{{ d.title }}</td>
              <td>{{ d.writer }}</td>
              <td>{{ d.accepted }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import Sorter from '@/components/Shared/Sorter.vue';
import NewsServ from '@/services/NewsApiService';
import News from '@/models/news';
import Modal from '@/components/Shared/Modal.vue';
import User from '@/models/User';

export default Vue.extend({
  layout: 'admin',
  name: 'ListNews',
  components: {
    Sorter,
  },
  data: () => ({
    by: ['หัวข้อข่าว', 'ผู้เขียน', 'อนุมัติแล้ว'],
    field: ['title', 'writer', 'accepted'],
    news: null as Array<any> | null,
    currOption: 0,
    descending: false,
  }),
  computed: {
    sortedArrays() {
      return _.orderBy(this.news, this.field[this.currOption], this.descending ? 'desc' : 'asc');
    },
  },
  mounted() {
    NewsServ.getNewsList(this.$store).then((val) => {
      this.news = val.data;
    });
  },
  methods: {
    onChange({ currOption, descending }: any) {
      this.currOption = currOption;
      this.descending = descending;
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
