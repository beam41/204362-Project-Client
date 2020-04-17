<template>
  <div v-if="news" class="adminbox">
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
          <strong>{{ news.title }}</strong> หรือไม่
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
    <div class="padadmin addupdate news-au">
      <div class="top">
        <div class="input-box">
          <div class="sep">
            <div class="form-control">
              <label class="with-warn">
                <span>หัวข้อข่าว:</span>
                <span class="warn">ขึ้นต้นและลงท้ายได้เฉพาะตัวหนังสือ หรือ ตัวเลข</span>
              </label>
              <input
                ref="title"
                v-model="news.title"
                :class="'input-au' + (titleErr ? ' error' : '')"
                type="text"
                placeholder="กรุณากรอกหัวข้อข่าว"
              />
            </div>
            <div class="form-control">
              <label>เนื้อหาข่าว:</label>
              <textarea
                ref="desc"
                v-model="news.description"
                :class="'txt input-au' + (descErr ? ' error' : '')"
                type="text"
                placeholder="กรุณากรอกเนื้อหาข่าว"
              />
            </div>
          </div>
          <div class="img-upload">
            <div class="form-control im">
              <p v-if="!imgPath && imgPath === ''">ภาพประกอบข่าว</p>
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
      </div>
      <div class="admin-btn-pos">
        <span>
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
        </span>
      </div>
    </div>
  </div>
  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
  </div>
</template>

<script lang="ts" src="@/scripts/NewsAddUpdate.ts"></script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.input-au {
  width: 100%;
}

.input-box {
  display: grid;
  gap: 1rem 1rem;
  grid-template-columns: 1fr 1fr;
}

.txt {
  height: 10rem;
}

.sep {
  display: flex;
  flex-direction: column;
}
</style>
