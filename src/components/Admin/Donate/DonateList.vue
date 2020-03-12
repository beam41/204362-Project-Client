<template>
  <div class="adminbox">
    <div class="padadmin">
      <div class="listpage-top">
        <button class="btn-default" @click="addDonate()">
          <i class="fas fa-plus"></i>New
        </button>
        <div class="input-group">
          <input type="text" placeholder="Search" />
          <button class="btn-default" href="#">
            <i class="fas fa-search no-m"></i>
          </button>
        </div>
        <Sorter :options="by" @sort-change="onChange($event)" />
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
          <transition-group class="datalist" v-if="donates" name="flip-list" tag="table">
            <tr v-for="d in sortedArrays" :key="d.id" @click="dataDonate(d.id)">
              <td>{{ d.title }}</td>
              <td>{{ d.creator }}</td>
              <td>{{ d.accepted }}</td>
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
  created() {
    DonateServ.getDonateList().then((val) => {
      this.donates = val.data;
    });
  },
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
    dataDonate(id: string) {
      this.$router.push(`/admin/donate/${id}`);
    },
    addDonate() {
      this.$router.push('/admin/donate/add');
    },
  },
});
</script>

<style lang="scss" scoped>
.datalist {
  @include selector.th-td-spacing(3);
}
</style>
