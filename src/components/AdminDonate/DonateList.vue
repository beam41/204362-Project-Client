<template>
  <div class="adminbox">
    <div class="table-top">hi</div>
    <div class="table-wrapper">
      <table class="datalist">
        <tr class="head">
          <th>ชื่อเรื่อง</th>
          <th>ผู้สร้าง</th>
          <th>อนุมัติแล้ว</th>
        </tr>
        <tr v-for="d in donates" :key="d.id">
          <td>{{d.title}}</td>
          <td>{{d.creator}}</td>
          <td>{{d.accepted}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ListDonate',
  data: () => ({
    donates: [
      {
        id: '14785',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: true,
      },
      {
        id: '8747545',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: true,
      },
      {
        id: '48255',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: true,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },

      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },

      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
      {
        id: '2585',
        title: 'บริจาคกันเตอะ',
        creator: 'หมี',
        accepted: false,
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
</style>
