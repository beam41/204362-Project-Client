<template>
  <div v-if="dog" class="adminbox">
    <div v-if="saving" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <Modal :show="showDel">
      <div class="m-top">
        <h5>Delete</h5>
      </div>
      <div class="m-mid">
        <p>คุณต้องการลบหรือไม่</p>
      </div>
      <div class="m-bot">
        <button class="btn-warn btn-mar" @click="del()">Delete</button>
        <button
          class="btn-default"
          @click="
            () => {
              showDel = false;
            }
          "
        >
          Cancel
        </button>
      </div>
    </Modal>

    <div class="padadmin addupdate dog-au">
      <div class="input-box">
        <div class="sep">
          <div class="form-control">
            <label for="d-1" class="with-warn">
              <span>ชื่อ:</span>
              <span class="warn"
                >ขึ้นต้นและลงท้ายได้เฉพาะตัวหนังสือ หากเพิ่มชื่อใส่เครื่องหมาย ','</span
              >
            </label>
            <input
              id="d-1"
              ref="name"
              v-model="dog.name"
              :class="nameErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกชื่อ"
            />
          </div>

          <div class="form-control">
            <label for="d-2" class="with-warn">
              <span>พันธุ์:</span>
              <span class="warn">ขึ้นต้นและลงท้ายได้เฉพาะตัวหนังสือ</span>
            </label>
            <input
              id="d-2"
              ref="breed"
              v-model="dog.breed"
              :class="breedErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกพันธุ์"
            />
          </div>

          <div class="form-control">
            <label for="d-3">อายุ:</label>
            <input
              id="d-3"
              ref="ageYear"
              v-model="dog.ageYear"
              :class="ageYearErr ? 'error' : ''"
              class="w-50"
              type="text"
            />
            ปี
            <input
              ref="ageMonth"
              v-model="dog.ageMonth"
              :class="ageMonthErr ? 'error' : ''"
              class="w-50"
              type="text"
            />
            เดือน
          </div>
          <div class="form-control">
            <label class="ml-50">เพศ:</label>
            <span class="select">
              <Select
                :error="sexErr"
                custom-text="กรุณาเลือกเพศ"
                :options="sexSelect"
                :default-option="getDogsex"
                @sel-change="onChangeSex($event)"
              />
            </span>
          </div>

          <div class="form-control">
            <label>สีปลอกคอ:</label>
            <span class="select collar">
              <Select
                :error="colorCollarErr"
                custom-text="กรุณาเลือกสีปลอกคอ"
                :options="collarColorSelect"
                :default-option="getDogcolor"
                @sel-change="onChangeColor($event)"
              />
            </span>
          </div>

          <div class="form-control">
            <label>สถานะ:</label>
            <span class="select select-short">
              <Select
                :error="isAliveErr"
                custom-text="กรุณาเลือกสถานะ"
                :options="isAliveSelect"
                :default-option="getDogstatus"
                @sel-change="onChangeAlive($event)"
              />
            </span>
          </div>

          <div class="form-control">
            <label for="d-4">ลักษณะ:</label>
            <textarea
              id="d-4"
              ref="description"
              v-model="dog.description"
              :class="descErr ? 'error' : ''"
              class="desc"
            />
          </div>
        </div>

        <div class="sep">
          <div class="form-control">
            <label for="d-5" class="with-warn">
              <span>ผู้ดูแล:</span>
              <span class="warn">ขึ้นต้นและลงท้ายได้เฉพาะตัวหนังสือ</span>
            </label>
            <input
              id="d-5"
              ref="caretaker"
              v-model="dog.caretaker"
              :class="caretakerErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกชื่อผู้ดูแล"
            />
          </div>

          <div class="form-control">
            <label for="d-6" class="with-warn">
              <span>เบอร์ติดต่อ:</span>
              <span class="warn"
                >ขึ้นต้นและลงท้ายได้เฉพาะตัวเลข หากเพิ่มหมายเลขใส่เครื่องหมาย ','</span
              >
            </label>
            <input
              id="d-6"
              ref="caretakerPhone"
              v-model="dog.caretakerPhone"
              :class="caretakerPhoneErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกข้อมูลติดต่อ"
            />
          </div>

          <div class="form-control">
            <label for="d-7">ที่อยู่:</label>
            <textarea
              id="d-7"
              ref="location"
              v-model="dog.location"
              :class="locationErr ? 'error' : ''"
              class="desc"
            />
          </div>

          <div class="img-upload">
            <div class="form-control im">
              <p v-if="!imgPath || imgPath === ''">ไม่มีรูป</p>
              <v-lazy-image
                v-else
                :src="imgUrl"
                :src-placeholder="imgPlacehold"
                alt="uploaded image"
              />
            </div>
            <div class="upload-pos">
              <div class="form-control">
                <input ref="file" type="file" accept="image/png,image/jpeg" :disabled="uploading" />
              </div>
              <div class="form-control">
                <button
                  :class="'btn-' + (imgErr ? 'warn' : 'default')"
                  :disabled="uploading"
                  @click="upload()"
                >
                  Upload
                </button>
                <p class="txt-info">อัตราส่วนที่แนะนำ 1:1 ไฟล์สกุล jpeg หรือ png เท่านั้น</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="admin-btn-pos">
        <button class="btn-success" :disabled="uploading" @click="saveValidate()">Save</button>
        <button
          v-if="$route.params.id !== 'add'"
          class="btn-warn"
          :disabled="uploading"
          @click="
            () => {
              showDel = true;
            }
          "
        >
          Delete
        </button>
      </div>
    </div>
  </div>

  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
  </div>
</template>

<script lang="ts" src="@/scripts/DogAddUpdate.ts"></script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.dog-au {
  grid-template-rows: 90% 10%;
}

.input-box {
  width: 100%;
}

input {
  width: 100%;
}

.img-upload {
  flex-direction: row;

  .im {
    margin: 0;
    width: 10em;
    height: 10em;

    img {
      width: 10em;
      height: 10em;
    }
  }
}

.upload-pos {
  margin: 15px;
}

.w-50 {
  width: 50px;
}

.select {
  width: 200px;
}

.desc {
  width: 100%;
  height: 12.5rem;
}
</style>
