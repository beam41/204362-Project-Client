<template>
  <div class="listdog adminbox">
    <div class="padadmin">
      <div class="listpage-top">
        <button class="btn-default" @click="addDog()">
          <i class="fas fa-plus"></i>New
        </button>
        <div class="input-group">
          <input type="text" placeholder="Search name" ref="search" />
          <button class="btn-default" @click="search()">
            <i class="fas fa-search no-m"></i>
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
              <th>ปลอกคอ</th>
              <th>ผู้ดูแล</th>
            </tr>
          </table>
        </div>
        <div class="sub-table-wrapper">
          <transition-group class="datalist" v-if="dogs" name="flip-list" tag="table">
            <tr v-for="d in formattedArrays" :key="d.id" @click="dataDog(d.id)">
              <td>{{ getAllName(d.name) }}</td>
              <td v-if="d.ageYear > 0 && d.ageMonth > 0 ">
                  {{ d.ageYear }} ปี {{ d.ageMonth }} เดือน
              </td>
              <td v-if="d.ageYear > 0 && d.ageMonth === 0 ">
                  {{ d.ageYear }} ปี
              </td>
              <td v-if="d.ageYear === 0 && d.ageMonth > 0 ">
                  {{ d.ageMonth }} เดือน
              </td>
              <td>{{ getSex(d.sex) }}</td>
              <td>{{ d.description }}</td>
              <td>{{ IsAlive(d.isAlive) }}</td>
              <td>{{ getCollarColor(d.collarColor) }}</td>
              <td>{{ d.caretaker }}</td>
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
import DogApiService from '@/services/DogApiService';
import _ from 'lodash';

export default Vue.extend({
  name: 'DogList',
  components: {
    Sorter,
  },
  data: () => ({
    dogs: null as Array<any> | null,
    by: ['ชื่อ', 'เพศ', 'สถานะ', 'ปลอกคอ'],
    field: ['name', 'sex', 'isAlive', 'collarColor'],
    currOption: 0,
    descending: false,
    searchString: '',
  }),
  created() {
    DogApiService.getDogList().then((val) => {
      console.log(val);
      this.dogs = val.data;
    });
  },
  computed: {
    formattedArrays() {
      let filter = this.dogs;
      if (this.searchString !== '') {
        // prettier-ignore
        const findinObj = (val: string, obj: object) => _.some(obj, v => _.includes(v, val));
        // prettier-ignore
        filter = _.filter(this.dogs, o => findinObj(this.searchString, o));
      }
      return _.orderBy(filter, this.field[this.currOption], this.descending ? 'desc' : 'asc');
    },
  },
  methods: {
    onChange({ currOption, descending }: any) {
      this.currOption = currOption;
      this.descending = descending;
    },
    getAllName(Allname: String) {
      return Allname.toString();
    },
    getSex(sex: string) {
      if (sex === 'F') {
        return 'ตัวเมีย';
      }
      return 'ตัวผู้';
    },
    IsAlive(IsAlive: boolean) {
      if (IsAlive) {
        return 'มีชีวิต';
      }
      return 'เสียชีวิต';
    },
    getCollarColor(CollarColor: string) {
      if (CollarColor === 'G') {
        return 'สีเขียว';
      }
      if (CollarColor === 'Y') {
        return 'สีเหลือง';
      }
      return 'สีแดง';
    },
    dataDog(id: string) {
      this.$router.push(`/admin/dog/${id}`);
    },
    addDog() {
      this.$router.push('/admin/dog/add');
    },
    search() {
      // @ts-ignore
      this.searchString = this.$refs.search.value;
    },
  },
});
</script>

<style lang="scss" scoped>
.listdog {
  display: flex;
  flex-direction: column;
}

.datalist {
  @include selector.th-td-spacing(7);
}
</style>
