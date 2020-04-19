<template>
  <div class="adminbox">
    <div class="padadmin">
      <div class="listpage-top">
        <nuxt-link to="/admin/report/add">
          <button class="btn-default svg-m">
            <font-awesome-icon :icon="['fas', 'plus']" />New
          </button>
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
              <th>หัวเรื่อง</th>
              <th>ผู้สร้าง</th>
              <th>รับทราบแล้ว</th>
            </tr>
          </table>
        </div>
        <div class="sub-table-wrapper">
          <transition-group v-if="reports" class="datalist" name="flip-list" tag="table">
            <tr v-for="r in formattedArrays" :key="r.id">
              <td>
                <nuxt-link :to="`/admin/report/${r.id}`">{{ r.title }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/report/${r.id}`">{{ r.reporter }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/report/${r.id}`">
                  <span> <CheckBox :is-check="r.accepted" disabled /> </span
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
import Sorter from '@/components/Shared/Sorter.vue';
import Report from '@/models/report';
import ReportServ from '@/services/ReportApiService';
import CheckBox from '@/components/Shared/CheckBox.vue';

export default Vue.extend({
  layout: 'admin',
  name: 'ReportList',
  components: {
    Sorter,
    CheckBox,
  },
  data: () => ({
    by: ['หัวเรื่อง', 'ผู้สร้าง', 'รับทราบแล้ว'],
    field: ['title', 'reporter', 'accepted'],
    reports: null as Array<Report> | null,
    currOption: 0,
    descending: false,
    searchString: '',
  }),
  computed: {
    formattedArrays() {
      let filter = this.reports;
      if (this.searchString !== '') {
        // prettier-ignore
        const findinObj = (val: string, obj: object) => _.some(obj, v => _.includes(v, val));
        // prettier-ignore
        filter = _.filter(this.reports, o => findinObj(this.searchString, o));
      }
      return _.orderBy(filter, this.field[this.currOption], this.descending ? 'desc' : 'asc');
    },
  },
  mounted() {
    ReportServ.getReportList(this.$store).then((val) => {
      this.reports = val.data;
    });
  },
  methods: {
    onChange({ currOption, descending }: any) {
      this.currOption = currOption;
      this.descending = descending;
    },
  },
  head: () => ({
    title: 'Admin: Report',
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
