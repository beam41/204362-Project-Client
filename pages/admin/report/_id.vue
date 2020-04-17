<template>
  <div v-if="report" class="adminbox">
    <div v-if="saving" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <Modal :show="showAcc">
      <div class="m-top">
        <h5>Accept</h5>
      </div>
      <div class="m-mid">
        <p>คุณต้องการเปลี่ยนสถานะเป็นรับทราบหรือไม่</p>
      </div>
      <div class="m-bot">
        <button class="btn-success btn-mar" @click="sendAcc()">Accept</button>
        <button class="btn-default" @click="() => (showAcc = false)">
          Cancel
        </button>
      </div>
    </Modal>
    <Modal :show="showDel">
      <div class="m-top">
        <h5>Delete</h5>
      </div>
      <div class="m-mid">
        <p>คุณต้องการลบหรือไม่</p>
      </div>
      <div class="m-bot">
        <button class="btn-warn btn-mar" @click="del()">Delete</button>
        <button class="btn-default" @click="() => (showDel = false)">
          Cancel
        </button>
      </div>
    </Modal>
    <div class="padadmin addupdate report-au">
      <div class="top">
        <div class="input-box">
          <div class="sep">
            <div class="form-control">
              <label>
                <span>ชื่อผู้แจ้ง:</span>
              </label>
              <input :value="report.reporter" class="input-au" type="text" disabled />
            </div>
            <div class="form-control">
              <label>
                <span>อีเมล์/เบอร์โทร:</span>
              </label>
              <input
                :value="report.reporterContact !== 'null' ? report.reporterContact : ''"
                class="input-au"
                type="text"
                placeholder="ไม่ได้กรอก"
                disabled
              />
            </div>
            <div class="form-control">
              <label>
                <span>หัวเรื่อง:</span>
              </label>
              <input :value="report.title" class="input-au" type="text" disabled />
            </div>
            <div class="form-control">
              <label>
                <span>เนื้อหา:</span>
              </label>
              <textarea
                :value="report.body !== 'null' ? report.body : ''"
                class="input-au"
                type="text"
                placeholder="ไม่ได้กรอก"
                disabled
              />
            </div>
          </div>
          <div class="img-upload">
            <div class="im-wrapper">
              <div class="im im-r">
                <p v-if="!report.imgPath || report.imgPath === ''">ไม่มีรูป</p>
                <v-lazy-image v-else :src="imgUrl" :src-placeholder="imgPlacehold" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="admin-btn-pos">
        <p v-if="report.accepted" class="acc-in">{{ acceptedInfo }}</p>
        <span>
          <button
            :disabled="login.userType === 'S'"
            v-if="!report.accepted"
            class="btn-success"
            @click="() => (showAcc = true)"
          >
            Accept
          </button>
          <button
            :disabled="login.userType === 'S'"
            v-if="report.accepted"
            class="btn-warn"
            @click="() => (showDel = true)"
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

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Report from '@/models/report';
import ReportServ from '@/services/ReportApiService';
import Modal from '@/components/Shared/Modal.vue';
import User from '@/models/User';

export default Vue.extend({
  layout: 'admin',
  name: 'ReportAddUpdate',
  components: {
    Modal,
  },
  data: () => ({
    report: null as null | Report,
    showAcc: false,
    showDel: false,
    saving: false,
  }),
  computed: {
    imgUrl() {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${this.report!.imgPath}`;
    },
    imgPlacehold() {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${this.report!.imgPath}`;
    },
    ...mapState({
      login: (state: any) => state.login as User,
    }),
    acceptedInfo() {
      const time = new Date(this.report!.acceptedOn!).toLocaleString('th-TH');
      return `Accepted by ${this.report!.acceptedBy} on ${time}`;
    },
  },
  mounted() {
    ReportServ.getReport(this.$store, this.$route.params.id).then((val) => {
      this.report = val.data;
    });
  },
  methods: {
    sendAcc() {
      this.showAcc = false;
      this.saving = true;
      ReportServ.acceptReport(this.$store, this.report!.id!, {
        accepted: true,
      } as Report).then((_) => this.$router.push('/admin/report'));
    },
    del() {
      this.saving = true;
      ReportServ.deleteReport(this.$store, this.report!.id!).then((_) =>
        this.$router.push('/admin/report'),
      );
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.im-r {
  &,
  & img {
    width: 100% !important;
    height: 50vmin !important;
  }

  img {
    object-fit: contain !important;
  }
}

input[disabled],
textarea[disabled] {
  background: white;
  cursor: default;
  color: black;
}

textarea {
  height: 7rem;
}
</style>
