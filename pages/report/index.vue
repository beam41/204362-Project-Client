<template>
  <div class="report content">
    <Modal :show="showModal">
      <div class="m-top">
        <h5>ส่งข้อมูล{{ successful ? '' : 'ไม่' }}สำเร็จ</h5>
      </div>
      <div class="m-mid">
        <p>
          {{ successful ? 'ส่งข้อมูลเรียบร้อยแล้ว' : 'ส่งข้อมูลไม่สำเร็จ' }}
        </p>
      </div>
      <div class="m-bot">
        <button
          class="btn-default "
          @click="
            () => {
              showModal = false;
            }
          "
        >
          Ok
        </button>
      </div>
    </Modal>
    <h2>รายงานปัญหาสุนัข</h2>
    <form class="report-body" @submit.prevent="submitMe">
      <div class="form-control">
        <label for="r-n" class="req">ชื่อผู้แจ้ง:</label>
        <input id="r-n" v-model="datName" type="name" placeholder="กรุณากรอกชื่อผู้แจ้ง" required />
      </div>
      <div class="form-control">
        <label for="r-e">อีเมล์/เบอร์โทร:</label>
        <input id="r-e" v-model="datContact" type="text" placeholder="อีเมล์/เบอร์โทร" />
      </div>
      <div class="form-control">
        <label for="r-t" class="req">หัวเรื่อง:</label>
        <input id="r-t" v-model="datTitle" type="text" placeholder="กรุณากรอกหัวเรื่อง" required />
      </div>
      <div class="form-control">
        <label for="r-b">เนื้อหา:</label>
        <textarea id="r-b" v-model="datBody" type="text" placeholder="เนื้อหา" />
      </div>
      <div class="form-control">
        <label for="r-im">รูป:</label>
        <div class="img-upload">
          <SmoothReflow class="form-control im">
            <p v-if="!imgShow">ไม่มีรูป</p>
            <img v-else :src="imgShow" />
          </SmoothReflow>
          <div class="upload-pos">
            <div class="form-control">
              <input
                id="r-im"
                ref="fileIn"
                type="file"
                accept="image/png,image/jpeg"
                @change="imgChange"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="subm">
        <input v-if="!isSaving" type="submit" class="btn-success" value="ส่งรายงาน" />
        <input v-else type="submit" class="btn-success" value="กำลังส่ง" disabled />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SmoothReflow from '@/components/Shared/SmoothReflow.vue';
import ReportService from '@/services/ReportApiService';
import Modal from '@/components/Shared/Modal.vue';

export default Vue.extend({
  layout: 'visitor',
  name: 'ReportVisitor',
  components: {
    SmoothReflow,
    Modal,
  },
  data: () => ({
    imgShow: null as null | any,
    datName: null as null | string,
    datContact: null as null | string,
    datTitle: null as null | string,
    datBody: null as null | string,
    imgFile: null as null | any,
    isSaving: false,
    successful: false,
    showModal: false,
  }),
  methods: {
    imgChange(e: any) {
      if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (re: any) => {
          this.imgShow = re.target.result;
        };
        this.imgFile = e.target.files[0];
        reader.readAsDataURL(e.target.files[0]);
      } else {
        this.imgShow = null;
      }
    },
    submitMe() {
      this.isSaving = true;
      ReportService.postReport(
        this.datTitle!,
        this.datBody!,
        this.datName!,
        this.datContact!,
        this.imgFile,
      )
        .then((_res) => {
          this.successful = true;
          this.showModal = true;
          this.reset();
        })
        .catch((err) => {
          if (err) {
            this.successful = false;
            this.showModal = true;
            this.reset();
          }
        });
    },
    reset() {
      this.isSaving = false;
      this.imgShow = null;
      this.datName = null;
      this.datContact = null;
      this.datTitle = null;
      this.datBody = null;
      this.imgFile = null;
      // @ts-ignore
      this.$refs.fileIn.value = '';
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

form {
  width: 100%;
  max-width: 400px;

  & input:not([type='submit']),
  & textarea {
    width: 100%;
  }

  textarea {
    height: 7rem;
  }

  .im {
    width: 100%;
    min-height: 200px;
    max-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    border-radius: var.$b-radius;
    overflow: hidden;

    p {
      color: white;
      margin: 0;
      user-select: none;
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      max-height: 60vh;
    }
  }

  .req::after {
    content: '*';
    color: var.$warn;
    user-select: none;
  }

  .subm {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  }
}
</style>
