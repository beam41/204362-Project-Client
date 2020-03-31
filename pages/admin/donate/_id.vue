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
        >
          Cancel
        </button>
      </div>
    </Modal>
    <div class="padadmin addupdate donate-au">
      <div class="input-box">
        <div class="sep">
          <div class="form-control">
            <label class="with-warn">
              <span>หัวเรื่อง:</span>
              <span class="warn">ขึ้นต้นและลงท้ายได้เฉพาะตัวหนังสือ หรือ ตัวเลข</span>
            </label>
            <input
              ref="title"
              v-model="donate.title"
              :class="'input-au' + (titleErr ? ' error' : '')"
              type="text"
              placeholder="กรุณากรอกหัวเรื่อง"
            />
          </div>
          <div class="form-control">
            <label>คำอธิบาย:</label>
            <textarea
              ref="desc"
              v-model="donate.description"
              :class="'txt input-au' + (descErr ? ' error' : '')"
              type="text"
              placeholder="กรุณากรอกคำอธิบาย"
            />
          </div>
          <div class="form-control">
            <label>Link Qrcode:</label>
            <input
              ref="qr"
              v-model="donate.qrLink"
              :class="'input-au' + (qrErr ? ' error' : '')"
              type="text"
              placeholder="กรุณากรอก Qr code"
            />
          </div>

          <qrcode-vue
            class="form-control"
            :value="donate.qrLink"
            level="L"
            render-as="svg"
            :size="200"
          ></qrcode-vue>
        </div>
        <div class="img-upload">
          <div class="form-control im">
            <p v-if="!imgPath && imgPath === ''">ไม่มีรูป</p>
            <v-lazy-image v-else :src="imgUrl" :src-placeholder="imgPlacehold" />
          </div>
          <div class="form-control">
            <input ref="file" type="file" accept="image/*" :disabled="uploading" />
          </div>
          <div class="form-control">
            <button
              :class="'btn-' + (imgErr ? 'warn' : 'default')"
              :disabled="uploading"
              @click="upload()"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      <div class="admin-btn-pos">
        <div>
          <button class="btn-success" :disabled="uploading" @click="saveValidate()">Save</button>
          <button
            v-if="$route.params.id !== 'add'"
            class="btn-warn"
            :disabled="uploading"
            @click="
              () => {
                delShow = true;
              }
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
  </div>
</template>

<script lang="ts" src="./DonateAddUpdate.ts"></script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';
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

.sep {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
