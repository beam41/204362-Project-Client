<template>
  <div v-if="dog" class="adminbox addupdate">
    <div v-if="editing" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <Modal :show="delShow">
      <div class="m-top">
        <h5>Delete</h5>
      </div>
      <div class="m-mid">
        <p>คุณต้องการลบหรือไม่</p>
      </div>
      <div class="m-bot">
        <button class="btn-warn btn-mar" @click="Delete()">Delete</button>
        <button
          class="btn-default"
          @click="
            () => {
              delShow = false;
            }
          "
        >Cancel</button>
      </div>
    </Modal>

    <div class="padadmin">
      <div>
        <div class="form-control">
          <label>ชื่อ:</label>
          <input
            :class="nameErr ? 'error' : ''"
            type="text"
            placeholder="กรุณากรอกชื่อ"
            v-model="dog.name"
            ref="name"
          />
        </div>

        <div class="form-control">
          <label>พันธุ์:</label>
          <input
            :class="breedErr ? 'error' : ''"
            type="text"
            placeholder="กรุณากรอกพันธุ์"
            v-model="dog.breed"
            ref="breed"
          />
        </div>

        <div class="form-control">
          <label>อายุ:</label>
          <input
            :class="ageYearErr ? 'error' : ''"
            type="text"
            style="width: 50px"
            v-model="dog.ageYear"
            ref="ageYear"
          /> ปี
          <input
            :class="ageMonthErr ? 'error' : ''"
            type="text"
            style="width: 50px"
            v-model="dog.ageMonth"
            ref="ageMonth"
          /> เดือน
        </div>

        <div class="form-control">
          <label>เพศ:</label>
          <span class="select" style="width: 200px">
            <Select
              :error="sexErr"
              customText="กรุณาเลือกเพศ"
              :options="sexSelect"
              :defaultOption="getDogsex"
              @sel-change="onChangeSex($event)"
            />
          </span>
        </div>

        <div class="form-control">
          <label>ลักษณะ:</label>
          <textarea v-model="dog.description" :class="descErr ? 'error' : ''" ref="description" />
        </div>

        <div class="form-control">
          <label>สีปลอกคอ:</label>
          <span class="select" style="width: 200px">
            <Select
              :error="colorCollarErr"
              customText="กรุณาเลือกสีปลอกคอ"
              :options="collarColorSelect"
              :defaultOption="getDogcolor"
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
              :options="isAliveSelect"
              :defaultOption="getDogstatus"
              @sel-change="onChangeAlive($event)"
            />
          </span>
        </div>
      </div>

      <div>
        <div class="form-control">
          <label>เบอร์ติดต่อ:</label>
          <input
            :class="caretakerPhoneErr ? 'error' : ''"
            type="text"
            placeholder="กรุณากรอกข้อมูลติดต่อ"
            v-model="dog.caretakerPhone"
            ref="caretakerPhone"
          />
        </div>

        <div class="form-control">
          <label>ผู้ดูแล:</label>
          <input
            :class="caretakerErr ? 'error' : ''"
            type="text"
            placeholder="กรุณากรอกชื่อผู้ดูแล"
            v-model="dog.caretaker"
            ref="caretaker"
          />
        </div>

        <div class="form-control">
          <label>ที่อยู่:</label>
          <textarea v-model="dog.location" :class="locationErr ? 'error' : ''" ref="location" />
        </div>
        <div>
          <div>
            <button class="btn-success btn-mar" @click="saveValidate()">Save</button>
            <button
              class="btn-warn"
              @click="
                () => {
                  delShow = true;
                }
              "
              v-if="$route.params.id !== 'add'"
            >Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="img-upload">
        <div class="flex-child im">
          <p v-if="!imgPath && imgPath === ''">No image</p>
          <progressive-background v-else :src="imgUrl">
            <div slot="content" slot-scope="{ visible }">
              <div v-show="visible" class="loader loader-img">
                <div class="spinner spinner-white"></div>
              </div>
            </div>
          </progressive-background>
        </div>
        <div class="flex-child">
          <input type="file" ref="file" accept="image/*" :disabled="uploading" />
        </div>
        <div class="flex-child">
          <button
            :class="'btn-' + (imgErr ? 'warn' : 'default')"
            @click="upload()"
            :disabled="uploading"
          >Upload</button>
        </div>
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

.btn-mar {
  margin: 5px;
}

.contrainer {
  display: grid;
}
</style>
