<template>
  <div v-if="dog" class="adminbox addupdate">
    <div v-if="editing" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <div class="padadmin">
      <div>
        <div>Dog ID: {{ dog.id }}</div>
        <div class="form-control">
          <label>ชื่อ:</label>
          <input
            :class="nameErr ? 'error':''"
            type="text"
            placeholder="กรุณากรอกชื่อ"
            v-model="dog.name"
            ref="name"
          />
        </div>

        <div class="form-control">
          <label>พันธุ์:</label>
          <input
            :class="breedErr ? 'error':''"
            type="text"
            placeholder="กรุณากรอกพันธุ์"
            v-model="dog.breed"
            ref="breed"
          />
        </div>

        <div class="form-control">
          <label>อายุ:</label>
          <input
            :class="ageErr ? 'error':''"
            type="text"
            placeholder
            style="width: 50px"
            v-model="dog.age"
            ref="age"
          />
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
          <textarea v-model="dog.description" :class="descErr ? 'error':''" ref="description" />
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
            :class="caretakerPhoneErr ? 'error':''"
            type="text"
            placeholder="กรุณากรอกข้อมูลติดต่อ"
            v-model="dog.caretakerPhone"
            ref="caretakerPhone"
          />
        </div>

        <div class="form-control">
          <label>ผู้ดูแล:</label>
          <input
            :class="caretakerErr ? 'error':''"
            type="text"
            placeholder="กรุณากรอกชื่อผู้ดูแล"
            v-model="dog.caretaker"
            ref="caretaker"
          />
        </div>

        <div class="form-control">
          <label>ที่อยู่:</label>
          <textarea v-model="dog.location" :class="locationErr ? 'error':''" ref="location" />
        </div>
        <button class="btn-success" @click="saveValidate()">save</button>
        <button class="btn-warn" @click="Delete()">Delete</button>
      </div>
    </div>
  </div>
  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
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

    sex: undefined as string | undefined,
    collarColor: undefined as string | undefined,
    unit: undefined as string | undefined,
    isAlive: undefined as boolean | undefined,

    editing: false,
    nameErr: false,
    breedErr: false,
    ageErr: false,
    ageUnitErr: false,
    sexErr: false,
    descErr: false,
    colorCollarErr: false,
    isAliveErr: false,
    caretakerPhoneErr: false,
    caretakerErr: false,
    locationErr: false,
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
    saveValidate() {
      this.nameErr = false;
      this.breedErr = false;
      this.ageErr = false;
      this.ageUnitErr = false;
      this.sexErr = false;
      this.descErr = false;
      this.colorCollarErr = false;
      this.isAliveErr = false;
      this.caretakerPhoneErr = false;
      this.caretakerErr = false;
      this.locationErr = false;
      let err = false;
      // @ts-ignore
      const name = this.$refs.name.value;
      // @ts-ignore
      const breed = this.$refs.breed.value;
      // @ts-ignore
      const age = this.$refs.age.value;
      const ageUnit = this.unit;
      const sexSave = this.sex;
      // @ts-ignore
      const description = this.$refs.description.value;
      const collarColorSave = this.collarColor;
      const isAliveSave = this.isAlive;
      // @ts-ignore
      const caretakerPhone = this.$refs.caretakerPhone.value;
      // @ts-ignore
      const caretaker = this.$refs.caretaker.value;
      // @ts-ignore
      const location = this.$refs.location.value;

      if (name === '') {
        this.nameErr = true;
        err = true;
      }
      if (breed === '') {
        this.breedErr = true;
        err = true;
      }
      if (age === '' || !Number.isInteger(+age)) {
        this.ageErr = true;
        err = true;
      }
      // if (!ageUnit) {
      //   this.ageUnitErr = true;
      //   err = true;
      // }
      // if (!sexSave) {
      //   this.sexErr = true;
      //   err = true;
      // }
      if (description === '') {
        this.descErr = true;
        err = true;
      }
      // if (!collarColorSave) {
      //   this.colorCollarErr = true;
      //   err = true;
      // }
      // if (!isAliveSave) {
      //   this.isAliveErr = true;
      //   err = true;
      // }
      if (caretakerPhone === '') {
        this.caretakerPhoneErr = true;
        err = true;
      }
      if (caretaker === '') {
        this.caretakerErr = true;
        err = true;
      }
      if (location === '') {
        this.locationErr = true;
        err = true;
      }
      if (err) return;
      this.saveData();
    },
    saveData() {
      this.editing = true;
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
      if (this.$route.params.id === 'add') {
        DogApiService.postDog(newDog).then((_) => {
          this.$router.go(-1);
        });
      } else {
        DogApiService.putDog(this.$route.params.id, newDog).then((_) => {
          this.$router.go(-1);
        });
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
