<template>
  <div v-if="donate" class="adminbox">
    <div v-if="saving" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <Modal :show="showDel">
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
              showDel = false;
            }
          "
        >
          Cancel
        </button>
      </div>
    </Modal>
    <div class="padadmin addupdate donate-au">
      <div class="top">
        <div class="input-box">
          <div class="sep">
            <div class="form-control">
              <label for="dn-1" class="with-warn">
                <span>หัวเรื่อง:</span>
                <span class="warn">ขึ้นต้นและลงท้ายได้เฉพาะตัวหนังสือ หรือ ตัวเลข</span>
              </label>
              <input
                id="dn-1"
                ref="title"
                v-model="donate.title"
                :class="'input-au' + (titleErr ? ' error' : '')"
                type="text"
                placeholder="กรุณากรอกหัวเรื่อง"
              />
            </div>
            <div class="form-control">
              <label for="dn-2">คำอธิบาย:</label>
              <textarea
                id="dn-2"
                ref="desc"
                v-model="donate.description"
                :class="'txt input-au' + (descErr ? ' error' : '')"
                type="text"
                placeholder="กรุณากรอกคำอธิบาย"
              />
            </div>
            <div class="form-control">
              <label for="dn-3">Link Qrcode:</label>
              <input
                id="dn-3"
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
            <div class="form-control im-wrapper">
              <div class="im">
                <p v-if="!imgPath || imgPath === ''">ไม่มีรูป</p>
                <v-lazy-image
                  v-else
                  :src="imgUrl"
                  :src-placeholder="imgPlacehold"
                  alt="uploaded image"
                />
              </div>
            </div>
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
      <div class="admin-btn-pos">
        <p v-if="donate.accepted" class="acc-in">{{ acceptedInfo }}</p>
        <span>
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
        </span>
      </div>
    </div>
  </div>
  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
  </div>
</template>

<script lang="ts" src="@/scripts/DonateAddUpdate.ts"></script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';
</style>
