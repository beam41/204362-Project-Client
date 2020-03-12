<template>
  <div v-if="donate" class="adminbox addupdate">
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
          <strong>{{donate.title}}</strong> หรือไม่
        </p>
      </div>
      <div class="m-bot">
        <button class="btn-warn" @click="del()">Delete</button>
        <button class="btn-default" @click="() => {delShow = false}">Cancel</button>
      </div>
    </Modal>
    <div class="padadmin">
      <div class="form-control">
        <label>หัวเรื่อง:</label>
        <input
          :class="titleErr ? 'error':''"
          type="text"
          placeholder="กรุณากรอกชื่อ"
          v-model="donate.title"
          ref="title"
        />
      </div>
      <div class="form-control">
        <label>คำอธิบาย:</label>
        <textarea
          :class="descErr ? 'error':''"
          type="text"
          placeholder="กรุณากรอกชื่อ"
          v-model="donate.description"
          ref="desc"
        />
      </div>
      <div class="form-control">
        <label>Link Qrcode:</label>
        <input
          :class="qrErr ? 'error':''"
          type="text"
          placeholder="กรุณากรอกชื่อ"
          v-model="donate.qrLink"
          ref="qr"
        />
      </div>
      <button class="btn-success" @click="saveValidate()">Save</button>
      <button class="btn-warn" @click="() => {delShow = true}">Delete</button>
    </div>
  </div>
  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DonateServ from '@/services/DonateApiService';
import Donate from '@/models/donate';
import Modal from '@/components/Shared/Modal.vue';

export default Vue.extend({
  name: 'DonateAddUpdate',
  components: {
    Modal,
  },
  data: () => ({
    donate: null as Donate | null,
    editing: false,
    delShow: false,
    titleErr: false,
    descErr: false,
    qrErr: false,
  }),
  created() {
    if (this.$route.params.id !== 'add') {
      DonateServ.getDonate(this.$route.params.id).then((val) => {
        this.donate = val.data;
      });
    } else {
      this.donate = new Donate();
    }
  },
  methods: {
    saveValidate() {
      this.titleErr = false;
      this.descErr = false;
      this.qrErr = false;
      let err = false;
      // @ts-ignore
      const title = this.$refs.title.value;
      // @ts-ignore
      const desc = this.$refs.desc.value;
      // @ts-ignore
      const qr = this.$refs.qr.value;
      if (title === '') {
        this.titleErr = true;
        err = true;
      }
      if (desc === '') {
        this.descErr = true;
        err = true;
      }
      if (qr === '') {
        this.qrErr = true;
        err = true;
      }
      if (err) return;
      this.save();
    },
    save() {
      this.editing = true;
      let newDon: Donate = new Donate();
      if (this.donate) {
        newDon = {
          id: this.$route.params.id !== 'add' ? this.$route.params.id : undefined,
          // @ts-ignore
          title: this.$refs.title.value,
          creator: this.$route.params.id !== 'add' ? this.donate.creator : 'Anonymous',
          accepted: this.$route.params.id !== 'add' ? this.donate.accepted : false,
          // @ts-ignore
          description: this.$refs.desc.value,
          // @ts-ignore
          qrLink: this.$refs.qr.value,
        };
      }
      if (this.$route.params.id === 'add') {
        DonateServ.postDonate(newDon).then((_) => {
          this.$router.go(-1);
        });
      } else {
        DonateServ.putDonate(this.$route.params.id, newDon).then((_) => {
          this.$router.go(-1);
        });
      }
    },
    del() {
      this.delShow = false;
      this.editing = true;
      DonateServ.delDonate(this.$route.params.id).then((_) => {
        this.$router.go(-1);
      });
    },
  },
});
</script>

<style>
</style>
