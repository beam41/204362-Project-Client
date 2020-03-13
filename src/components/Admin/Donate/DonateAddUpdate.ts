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
