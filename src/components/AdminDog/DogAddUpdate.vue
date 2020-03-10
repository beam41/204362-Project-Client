<template>
  <div class="addupdate">
    <div>
      <div>Dog ID: {{ dog.id }}</div>

      <div class="form-control">
        <label>ชื่อ:</label>
        <input type="text" placeholder="กรุณากรอกชื่อ" v-model="dog.Name" />
      </div>

      <div class="form-control">
        <label>พันธุ์:</label>
        <input type="text" placeholder="กรุณากรอกพันธุ์" v-model="dog.Breed" />
      </div>

      <div class="form-control">
        <label>อายุ:</label>
        <input type="text" placeholder="" style="width: 50px" />  ปี
        <input type="text" placeholder="" style="width: 50px" />  เดือน
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
        <textarea v-model="dog.Description"></textarea>
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
        <input type="text" placeholder="กรุณากรอกข้อมูลติดต่อ" v-model="dog.CaretakerPhone" />
      </div>

      <div class="form-control">
        <label>ผู้ดูแล:</label>
        <input type="text" placeholder="Input Text" v-model="dog.Caretaker" />
      </div>

      <div class="form-control">
        <label>ที่อยู่:</label>
        <textarea v-model="dog.Location"></textarea>
      </div>
      <button class="btn-success" href="#" >save</button>
      <button class="btn-warn" href="#" >Delete</button>
    </div>
  </div>
</template>

<script>
import Select from '@/components/Shared/Select.vue';
import DogApiService from '@/services/DogApiService';

export default {
  name: 'DogAddUpdate',
  data: () => ({
    dog: null,
  }),
  components: {
    Select,
  },
  created() {
    this.dog = DogApiService.getDog(+this.$route.params.id);
  },
};
</script>

<style>
.addupdate {
  display: grid;
  grid-template-columns: 60fr 40fr;
}

</style>
