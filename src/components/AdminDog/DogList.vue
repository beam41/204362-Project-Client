<template>
  <div class="listdog adminbox">
    <div class="listpage-top">
      <button class="btn-default"><i class="fas fa-plus"></i>New</button>
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
            <td>{{ getAllName(d.Name) }}</td>
            <td>{{ d.Age }} {{ d.AgeUnit }}</td>
            <td>{{ getSex(d.Sex) }}</td>
            <td>{{ d.Description }}</td>
            <td>{{ IsAlive(d.IsAlive) }}</td>
            <td>{{ getCollarColor(d.CollarColor) }}</td>
            <td>{{ d.Caretaker }}</td>
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
    this.dogs = DogApiService.getDogs();
  },
  methods: {
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
    dataDog(id: number) {
      this.$router.push(`/admin/dog/${id}`);
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
