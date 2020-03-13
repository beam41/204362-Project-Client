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
          <Select
            :error="unitErr"
            :customText="unit"
            style="width: 60px"
            :defaultOption="unitSelect"
            :options="unitSelect"
            @sel-change="onChangeUnit($event)"
          />
        </div>

        <div class="form-control">
          <label>เพศ:</label>
          <span class="select" style="width: 200px">
            <Select
              :error="sexErr"
              customText="กรุณาเลือกเพศ"
              :defaultOption="sexSelect"
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
              :error="colorCollarErr"
              customText="กรุณาเลือกสีปลอกคอ"
              :defaultOption="collarColorSelect"
              :options="collarColorSelect"
              @sel-change="onChangeColor($event)"
            />
          </span>
        </div>

        <div class="form-control">
          <label>สถานะ:</label>
          <span class="select" style="width: 200px">
            <Select
              :error="isAliveErr"
              customText="กรุณาเลือกสถานะ"
              :defaultOption="isAliveSelect"
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

<script lang="ts" src="./DogAddUpdate.ts"></script>

<style scoped>
.addupdate {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
