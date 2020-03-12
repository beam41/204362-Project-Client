<template>
  <div v-if="donate" class="adminbox addupdate">
    <div v-if="editing" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <div class="padadmin">
      <div class="form-control">
        <label>หัวเรื่อง:</label>
        <input type="text" placeholder="กรุณากรอกชื่อ" v-model="donate.title" ref="title" />
      </div>
      <div class="form-control">
        <label>คำอธิบาย:</label>
        <textarea type="text" placeholder="กรุณากรอกชื่อ" v-model="donate.description" ref="desc" />
      </div>
      <div class="form-control">
        <label>Link Qrcode:</label>
        <input type="text" placeholder="กรุณากรอกชื่อ" v-model="donate.qrLink" ref="qr" />
      </div>
      <button class="btn-success" @click="save()">Save</button>
      <button class="btn-warn" @click="del()">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DonateServ from '@/services/DonateApiService';
import Donate from '../../../models/donate';

export default Vue.extend({
  name: 'DonateAddUpdate',
  data: () => ({
    donate: null as Donate | null,
    editing: false,
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
