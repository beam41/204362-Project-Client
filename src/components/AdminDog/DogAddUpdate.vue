<template>
  <div class="adminbox addupdate">
    <div>
      <div>Dog ID: {{ dog.id }}</div>
      <div class="form-control">
        <label>ชื่อ:</label>
        <input type="text" placeholder="กรุณากรอกชื่อ" v-model="dog.name" ref="name" />
      </div>

      <div class="form-control">
        <label>พันธุ์:</label>
        <input type="text" placeholder="กรุณากรอกพันธุ์" v-model="dog.breed" ref="breed" />
      </div>

      <div class="form-control">
        <label>อายุ:</label>
        <input type="text" placeholder style="width: 50px" v-model="dog.age" ref="age" />
        <Select :options="addUnit" @change="onChangeUnit($event)" />
      </div>

      <div class="form-control">
        <label>เพศ:</label>
        <span class="select" style="width: 200px">
          <Select customText="กรุณาเลือกเพศ" :options="addSex" @change="onChange($event)" />
        </span>
      </div>

      <div class="form-control">
        <label>ลักษณะ:</label>
        <textarea v-model="dog.description" ref="description"></textarea>
      </div>

      <div class="form-control">
        <label>สีปลอกคอ:</label>
        <span class="select" style="width: 200px">
          <Select
            customText="กรุณาเลือกสีปลอกคอ"
            :options="addCollarColor"
            @change="onChange($event)"
          />
        </span>
      </div>

      <div class="form-control">
        <label>สถานะ:</label>
        <span class="select" style="width: 200px">
          <Select customText="กรุณาเลือกสถานะ" :options="isAlive" @change="onChange($event)" />
        </span>
      </div>
    </div>

    <div>
      <div class="form-control">
        <label>ติดต่อ:</label>
        <input
          type="text"
          placeholder="กรุณากรอกข้อมูลติดต่อ"
          v-model="dog.caretakerPhone"
          ref="caretakerPhone"
        />
      </div>

      <div class="form-control">
        <label>ผู้ดูแล:</label>
        <input
          type="text"
          placeholder="กรุณากรอกชื่อผู้ดูแล"
          v-model="dog.caretaker"
          ref="caretaker"
        />
      </div>

      <div class="form-control">
        <label>ที่อยู่:</label>
        <textarea v-model="dog.location" ref="location"></textarea>
      </div>
      <button class="btn-success" @click="saveData()">save</button>
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
    dog: null as Dog | null,
    addSex: ['ตัวเมีย', 'ตัวผู้'],
    addCollarColor: ['สีเขียว', 'สีเหลือง', 'สีแดง'],
    addUnit: ['ปี', 'เดือน'],
    unitArr: ['M', 'Y'],
    isAlive: ['มีชีวิต', 'เสียชีวิต'],
    unit: 'M',
  }),
  components: {
    Select,
  },
  created() {
    if (this.$route.params.id !== 'add') {
      DogApiService.getDog(this.$route.params.id).then((val) => {
        this.dog = val.data;
      });
    } else {
      this.dog = new Dog();
    }
  },
  methods: {
    saveData() {
      // @ts-ignore
      const newDog: Dog = {
        id: undefined,
        // @ts-ignore
        name: this.$refs.name.value,
        // @ts-ignore
        breed: this.$refs.breed.value,
        // @ts-ignore
        age: this.$refs.age.value,
        // sex
        // @ts-ignore
        description: this.$refs.description.value,
        // color
        // status
        // @ts-ignore
        caretakerPhone: this.$refs.caretakerPhone.value,
        // @ts-ignore
        caretaker: this.$refs.caretaker.value,
        // @ts-ignore
        location: this.$refs.location.value,
      };
    },
    onChangeUnit(event: any) {
      this.unit = this.unitArr[event.value];
      console.log(this.unit);
    },
  },
});
</script>

<style>
.addupdate {
  display: grid;
  grid-template-columns: 60fr 40fr;
}
</style>
