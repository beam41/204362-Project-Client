<template>
  <div v-if="donate" class="adminbox">
    <div v-if="editing" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <Modal :show="delShow">
      <div class="m-top">
        <h5>Delete</h5>
      </div>
      <div class="m-mid">
        <p>
          คุณต้องการลบ
          <strong>{{ donate.title }}</strong> หรือไม่
        </p>
      </div>
      <div class="m-bot">
        <button class="btn-warn" @click="del()">Delete</button>
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
    <div class="padadmin addupdate donate-au">
      <div class="input-box">
        <div>
          <div class="form-control">
            <label>หัวเรื่อง:</label>
            <input
              :class="'input-au' + (titleErr ? ' error' : '')"
              type="text"
              placeholder="กรุณากรอกหัวเรื่อง"
              v-model="donate.title"
              ref="title"
            />
          </div>
          <div class="form-control">
            <label>คำอธิบาย:</label>
            <textarea
              :class="'txt input-au' + (descErr ? ' error' : '')"
              type="text"
              placeholder="กรุณากรอกคำอธิบาย"
              v-model="donate.description"
              ref="desc"
            />
          </div>
          <div class="form-control">
            <label>Link Qrcode:</label>
            <input
              :class="'input-au' + (qrErr ? ' error' : '')"
              type="text"
              placeholder="กรุณากรอก Qr code"
              v-model="donate.qrLink"
              ref="qr"
            />
          </div>
          <qrcode-vue :value="donate.qrLink" level="L" renderAs="svg" :size="200"></qrcode-vue>
        </div>
        <div class="img-upload">
          <div class="flex-child im">
            <p v-if="!imgPath && imgPath === ''">ไม่มีรูป</p>
            <progressive-img v-else :src="imgUrl" :placeholder="imgPlacehold" />
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
      <div class="admin-btn-pos">
        <div>
          <button class="btn-success" :disabled="uploading" @click="saveValidate()">Save</button>
          <button
            class="btn-warn"
            :disabled="uploading"
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
  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
  </div>
</template>

<script lang="ts" src="./DonateAddUpdate.ts"></script>

<style lang="scss">
.donate-au {
  grid-template-rows: 90% 10%;
}

.txt {
  height: 10em;
}

.input-au {
  width: 100%;
}

.input-box {
  place-self: center stretch;
  display: grid;
  gap: 1rem 1rem;
  grid-template-columns: 1fr 1fr;
}
</style>
