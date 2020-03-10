<template>
  <div class="addupdate">
    <div>
      <div>Dog ID: {{ dog.id }}</div>

      <div class="form-control">
        <label>ชื่อ:</label>
        <input type="text" placeholder="กรุณากรอกชื่อ" v-model="dog.name" />
      </div>

      <div class="form-control">
        <label>พันธุ์:</label>
        <input type="text" placeholder="กรุณากรอกพันธุ์" v-model="dog.breed" />
      </div>

      <div class="form-control">
        <label>อายุ:</label>
        <input type="text" placeholder style="width: 50px" /> ปี
        <input type="text" placeholder style="width: 50px" /> เดือน
      </div>

      <div class="form-control">
        <label>เพศ:</label>
        <span class="select" style="width: 200px">
          <Select
            customText="กรุณาเลือกเพศ"
            :options="['Mee', 'Moo', 'Maa']"
            @change="log($event)"
          />
        </span>
      </div>

      <div class="form-control">
        <label>ลักษณะ:</label>
        <textarea v-model="dog.description"></textarea>
      </div>

      <div class="form-control">
        <label>สีปลอกคอ:</label>
        <span class="select" style="width: 200px">
          <Select
            customText="กรุณาเลือกสีปลอกคอ"
            :options="['Mee', 'Moo', 'Maa']"
            @change="log($event)"
          />
        </span>
      </div>
    </div>

    <div>
      <div class="form-control">
        <label>ติดต่อ:</label>
        <input type="text" placeholder="กรุณากรอกข้อมูลติดต่อ" v-model="dog.caretakerPhone" />
      </div>

      <div class="form-control">
        <label>ผู้ดูแล:</label>
        <input type="text" placeholder="Input Text" v-model="dog.caretaker" />
      </div>

      <div class="form-control">
        <label>ที่อยู่:</label>
        <textarea v-model="dog.location"></textarea>
      </div>
      <button class="btn-success" href="#">save</button>
      <button class="btn-warn" href="#">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Select from '@/components/Shared/Select.vue';
import DogApiService from '@/services/DogApiService';
import Dog from '@/models/dog';

export default Vue.extend({
  name: 'DogAddUpdate',
  data: () => ({
    dog: undefined as Dog | undefined,
  }),
  components: {
    Select,
  },
  created() {
    if (this.$route.params.id !== 'add') {
      this.dog = DogApiService.getDog(this.$route.params.id);
    } else {
      this.dog = new Dog();
    }
  },
});
</script>

<style>
.addupdate {
  display: grid;
  grid-template-columns: 60fr 40fr;
}
</style>
