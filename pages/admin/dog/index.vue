<template>
  <div class="listdog adminbox">
    <div class="padadmin">
      <div class="listpage-top">
        <nuxt-link to="/admin/dog/add">
          <button class="btn-default svg-m">
            <font-awesome-icon :icon="['fas', 'plus']" />New
          </button>
        </nuxt-link>
        <div class="input-group">
          <input v-model="searchString" type="text" placeholder="Search name" />
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
              <th>ชื่อ</th>
              <th>อายุ</th>
              <th>เพศ</th>
              <th>ลักษณะ</th>
              <th>สถานะ</th>
              <th>สีปลอกคอ</th>
              <th>ผู้ดูแล</th>
            </tr>
          </table>
        </div>
        <div class="sub-table-wrapper">
          <transition-group v-if="dogs" class="datalist" name="flip-list" tag="table">
            <tr v-for="d in formattedArrays" :key="d.id">
              <td>
                <nuxt-link :to="`/admin/dog/${d.id}`">{{ d.name | arrToString }}</nuxt-link>
              </td>
              <td v-if="d.ageYear > 0 && d.ageMonth > 0">
                <nuxt-link :to="`/admin/dog/${d.id}`"
                  >{{ d.ageYear }} ปี {{ d.ageMonth }} เดือน</nuxt-link
                >
              </td>
              <td v-if="d.ageYear > 0 && d.ageMonth === 0">
                <nuxt-link :to="`/admin/dog/${d.id}`">{{ d.ageYear }} ปี</nuxt-link>
              </td>
              <td v-if="d.ageYear === 0 && d.ageMonth > 0">
                <nuxt-link :to="`/admin/dog/${d.id}`">{ d.ageMonth }} เดือน</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/dog/${d.id}`">{{ d.sex | formatSex }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/dog/${d.id}`">{{ d.description }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/dog/${d.id}`">{{ d.isAlive | formatIsAlive }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/dog/${d.id}`">{{
                  d.collarColor | formatCollarColor
                }}</nuxt-link>
              </td>
              <td>
                <nuxt-link :to="`/admin/dog/${d.id}`">{{ d.caretaker }}</nuxt-link>
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
import DogApiService from '@/services/DogApiService';
import Dog from '@/models/dog';

export default Vue.extend({
  layout: 'admin',
  name: 'DogList',
  components: {
    Sorter,
  },
  filters: {
    arrToString(arr: string[]) {
      return arr.toString().replace(/,/g, ', ');
    },
    formatSex(sex: string) {
      if (sex === 'F') {
        return 'ตัวเมีย';
      }
      return 'ตัวผู้';
    },
    formatIsAlive(IsAlive: boolean) {
      if (IsAlive) {
        return 'มีชีวิต';
      }
      return 'เสียชีวิต';
    },
    formatCollarColor(CollarColor: string) {
      if (CollarColor === 'G') {
        return 'สีเขียว';
      }
      if (CollarColor === 'Y') {
        return 'สีเหลือง';
      }
      return 'สีแดง';
    },
  },
  data: () => ({
    dogs: null as Array<any> | null,
    currOption: 0,
    descending: false,
    searchString: '',
  }),
  computed: {
    by: () => ['ชื่อ', 'เพศ', 'สถานะ', 'ปลอกคอ'],
    field: () => ['name', 'sex', 'isAlive', 'collarColor'],
    formattedArrays() {
      let filter = this.dogs;
      if (this.searchString !== '') {
        // prettier-ignore
        const findinObj = (val: string, obj: object) => _.some(obj, v => _.includes(v, val));
        // prettier-ignore
        filter = _.filter(this.dogs, (o: Dog) => findinObj(this.searchString, {...o, name: o.name!.toString()}));
      }
      return _.orderBy(filter, this.field[this.currOption], this.descending ? 'desc' : 'asc');
    },
  },
  mounted() {
    DogApiService.getDogList(this.$store).then((val) => {
      this.dogs = val.data;
    });
  },
  methods: {
    onChange({ currOption, descending }: any) {
      this.currOption = currOption;
      this.descending = descending;
    },
  },
  head: () => ({
    title: 'Admin: Dog',
  }),
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.listdog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.datalist {
  @include selector.th-td-spacing(7);
}
</style>
