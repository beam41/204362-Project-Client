<template>
  <div class="adminbox">
<<<<<<< Updated upstream
    <div class="listpage-top">
      <button class="btn-default"><font-awesome-icon :icon="['fas', 'plus']" />New</button>
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
=======
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
>>>>>>> Stashed changes
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
import _ from 'lodash';
import Sorter from '@/components/Shared/Sorter.vue';

export default Vue.extend({
  layout: 'admin',
  name: 'ListDonate',
  components: {
    Sorter,
<<<<<<< Updated upstream
=======
    CheckBox,
    Modal,
>>>>>>> Stashed changes
  },
  data: () => ({
    by: ['ชื่อเรื่อง', 'ผู้สร้าง', 'อนุมัติแล้ว'],
    field: ['title', 'creator', 'accepted'],
    donates: null as Array<any> | null,
    currOption: 0,
    descending: false,
  }),
  computed: {
    sortedArrays() {
      return _.orderBy(this.donates, this.field[this.currOption], this.descending ? 'desc' : 'asc');
    },
  },
  mounted() {},
  methods: {
    onChange({ currOption, descending }: any) {
      this.currOption = currOption;
      this.descending = descending;
    },
<<<<<<< Updated upstream
=======
    acceptedChangePrompt(event: any, n: News) {
      if (event.target.checked) {
        this.currAcceptSelect = n;
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
>>>>>>> Stashed changes
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
