<template>
  <div v-if="dog" class="adminbox addupdate">
    <div class="padadmin">
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
          <Select :options="unitSelect" @sel-change="onChangeUnit($event)" />
        </div>

        <div class="form-control">
          <label>เพศ:</label>
          <span class="select" style="width: 200px">
            <Select
              customText="กรุณาเลือกเพศ"
              :options="sexSelect"
              @sel-change="onChangeSex($event)"
            />
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
              :options="collarColorSelect"
              @sel-change="onChangeColor($event)"
            />
          </span>
        </div>

        <div class="form-control">
          <label>สถานะ:</label>
          <span class="select" style="width: 200px">
            <Select
              customText="กรุณาเลือกสถานะ"
              :options="isAliveSelect"
              @sel-change="onChangeAlive($event)"
            />
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
        <button class="btn-warn" @click="Delete()">Delete</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Select from '@/components/Shared/Select.vue';
import DogApiService from '@/services/DogApiService';
import Dog from '@/models/dog';
import util from '@/util';

export default Vue.extend({
  name: 'DogAddUpdate',
  data: () => ({
    dog: null as Dog | null,

    sexSelect: ['ตัวเมีย', 'ตัวผู้'],
    collarColorSelect: ['สีเขียว', 'สีเหลือง', 'สีแดง'],
    unitSelect: ['ปี', 'เดือน'],
    isAliveSelect: ['มีชีวิต', 'เสียชีวิต'],

    SexArr: ['F', 'M'],
    collarColorArr: ['G', 'Y', 'R'],
    unitArr: ['ํY', 'M'],
    isAliveArr: [true, false],

    sex: 'F',
    collarColor: 'G',
    unit: 'Y',
    isAlive: true,
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
      const newDog: Dog = {
        id: this.$route.params.id !== 'add' ? this.$route.params.id : undefined,
        // @ts-ignore
        name: util.splitToArr(this.$refs.name.value),
        // @ts-ignore
        breed: this.$refs.breed.value,
        // @ts-ignore
        age: +this.$refs.age.value,
        ageUnit: this.unit,
        sex: this.sex,
        // @ts-ignore
        description: this.$refs.description.value,
        collarColor: this.collarColor,
        isAlive: this.isAlive,
        // @ts-ignore
        caretakerPhone: util.splitToArr(this.$refs.caretakerPhone.value),
        // @ts-ignore
        caretaker: this.$refs.caretaker.value,
        // @ts-ignore
        location: this.$refs.location.value,
      };
      if (this.dog && this.$route.params.id !== 'add') {
        const putDog: Dog = newDog;
        console.log('update!!!');
        DogApiService.putDog(this.$route.params.id, putDog);
      } else {
        console.log('save!!!');
        DogApiService.postDog(newDog);
      }
    },
    onChangeUnit(event: any) {
      this.unit = this.unitArr[event.currSelect];
    },
    onChangeSex(event: any) {
      this.sex = this.SexArr[event.currSelect];
    },
    onChangeColor(event: any) {
      this.collarColor = this.collarColorArr[event.currSelect];
    },
    onChangeAlive(event: any) {
      this.isAlive = this.isAliveArr[event.currSelect];
    },
    Delete() {
      if (this.dog && this.$route.params.id !== 'add') {
        console.log('delete!!!');
        DogApiService.delDog(this.$route.params.id);
      } else {
        console.log('stop!!!');
      }
    },
  },
});
</script>

<style scoped>
.addupdate {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
