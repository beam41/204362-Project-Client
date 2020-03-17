<template>
  <div class="adminbox">
    <div class="listpage-top">
      <button class="btn-default">
        <font-awesome-icon :icon="['fas', 'plus']"/>New
      </button>
      <Sorter :options="by" @change="onChange($event)" />
    </div>
    <div class="table-wrapper">
      <div class="head-wrapper">
        <table class="datalist head">
          <tr class="tablehead">
            <th>ชื่อเรื่อง</th>
            <th>ผู้สร้าง</th>
            <th>อนุมัติแล้ว</th>
          </tr>
        </table>
      </div>
      <div class="sub-table-wrapper">
        <table class="datalist">
          <tr v-for="d in sortedArrays" :key="d.id">
            <td>{{ d.title }}</td>
            <td>{{ d.creator }}</td>
            <td>{{ d.accepted }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Sorter from '@/components/Shared/Sorter.vue';
import util from '@/util';
import DonateServ from '@/services/DonateApiService';
import _ from 'lodash';

export default Vue.extend({
  name: 'ListDonate',
  components: {
    Sorter,
  },
  data: () => ({
    by: ['ชื่อเรื่อง', 'ผู้สร้าง', 'อนุมัติแล้ว'],
    field: ['title', 'creator', 'accepted'],
    donates: null as Array<any> | null,
    currOption: 0,
    descending: false,
  }),
  created() {},
  computed: {
    sortedArrays() {
      return _.orderBy(this.donates, this.field[this.currOption], this.descending ? 'desc' : 'asc');
    },
  },
  methods: {
    onChange({ currOption, descending }: any) {
      this.currOption = currOption;
      this.descending = descending;
    },
  },
});
</script>

<style lang="scss" scoped>
.datalist {
  @include selector.th-td-spacing(3);
}
</style>
