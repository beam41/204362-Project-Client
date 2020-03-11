<template>
  <div class="listdog adminbox">
    <div class="listpage-top">
      <button class="btn-default" @click="addDog()"><i class="fas fa-plus"></i>New</button>
      <Sorter :options="['Hi']" />
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
        <table class="datalist">
          <tr v-for="d in dogs" :key="d.id" @click="dataDog(d.id)">
            <td>{{ getAllName(d.name) }}</td>
            <td>{{ d.age }} {{ getUnit(d.ageUnit) }}</td>
            <td>{{ getSex(d.sex) }}</td>
            <td>{{ d.description }}</td>
            <td>{{ IsAlive(d.isAlive) }}</td>
            <td>{{ getCollarColor(d.collarColor) }}</td>
            <td>{{ d.caretaker }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Sorter from '@/components/Shared/Sorter.vue';
import DogApiService from '@/services/DogApiService';

export default Vue.extend({
  name: 'DogList',
  components: {
    Sorter,
  },
  data: () => ({
    dogs: null as any | null,
  }),
  created() {
    DogApiService.getDogList().then((val) => {
      this.dogs = val.data;
    });
  },
  methods: {
    getAllName(Allname: String) {
      return Allname.toString();
    },
    getUnit(unit: string) {
      if (unit === 'Y') {
        return 'ปี';
      }
      return 'เดือน';
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
