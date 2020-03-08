<template>
  <div class="adminbox">
    <div class="listpage-top">
      <button class="btn-default">+ New</button>
      <Sorter />
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
          <tr v-for="d in donates" :key="d.id">
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

export default Vue.extend({
  name: 'ListDonate',
  components: {
    Sorter,
  },
  data: () => ({
    donates: [
      {
        id: '14785',
        title: 'บริจาคกันเตอะ',
        creator: 'พี่ยิ้ม',
        accepted: true,
      },
      {
        id: '8747545',
        title: 'เอาเงินมา',
        creator: 'หมี',
        accepted: true,
      },
      {
        id: '48255',
        title: 'หมาน้อยสู้ภัย Covid-19',
        creator: 'คณะวิศวะ',
        accepted: true,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'ด็อกเตอร์ อากาสะ',
        accepted: false,
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.datalist {
  @include selector.th-td-spacing(3);
}
</style>
