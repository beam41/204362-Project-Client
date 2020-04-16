import Vue from 'vue';
// @ts-ignore
import QrcodeVue from 'qrcode.vue';
import DonateServ from '@/services/DonateApiService';
import Donate from '@/models/donate';
import Modal from '@/components/Shared/Modal.vue';
import ImageServ from '@/services/ImageUploadService';

export default Vue.extend({
  layout: 'admin',
  name: 'DonateAddUpdate',
  components: {
    Modal,
    QrcodeVue,
  },
  data: () => ({
    donate: null as Donate | null,
    saving: false,
    delShow: false,
    titleErr: false,
    descErr: false,
    qrErr: false,
    imgErr: false,
    uploading: false,
    imgPath: '',
  }),
  head: () => ({
    title: 'Admin: Donate',
  }),
  computed: {
    imgUrl() {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${this.imgPath}`;
    },
    imgPlacehold() {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${this.imgPath}`;
    },
    acceptedInfo() {
      const time = new Date(this.donate!.acceptedOn!).toLocaleString('th-TH');
      return `Accepted By ${this.donate!.acceptedBy} on ${time}`;
    },
  },
  mounted() {
    if (this.$route.params.id !== 'add') {
      DonateServ.getDonate(this.$store, this.$route.params.id).then((val) => {
        this.donate = val.data;
        this.imgPath = this.donate.imgPath as string;
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
      this.imgErr = false;
      let err = false;
      // @ts-ignore
      const title: string = this.$refs.title.value;
      // @ts-ignore
      const desc = this.$refs.desc.value;
      // @ts-ignore
      const qr = this.$refs.qr.value;
      if (
        title === '' ||
        !/[\wก-์\d]/g.test(title[0]) ||
        !/[\wก-์\d]/g.test(title[title.length - 1])
      ) {
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
      if (this.imgPath === '') {
        this.imgErr = true;
        err = true;
      }
      if (err) return;
      // @ts-ignore
      this.save();
    },
    save() {
      this.saving = true;
      let newDon: Donate = new Donate();
      if (this.donate) {
        newDon = {
          // @ts-ignore
          title: this.$refs.title.value,
          accepted: false,
          // @ts-ignore
          description: this.$refs.desc.value,
          // @ts-ignore
          qrLink: this.$refs.qr.value,
          imgPath: this.imgPath,
        } as Donate;
      }
      if (this.$route.params.id === 'add') {
        DonateServ.postDonate(this.$store, newDon).then((_) => {
          this.$router.go(-1);
        });
      } else {
        DonateServ.putDonate(this.$store, this.$route.params.id, newDon).then((_) => {
          this.$router.go(-1);
        });
      }
    },
    del() {
      this.delShow = false;
      this.saving = true;
      DonateServ.delDonate(this.$store, this.$route.params.id).then((_) => {
        this.$router.go(-1);
      });
    },
    upload() {
      this.uploading = true;
      // @ts-ignore
      ImageServ.postImage(this.$store, this.$refs.file.files[0]).then((val) => {
        this.imgPath = val.data.fileName;
        this.uploading = false;
      });
    },
  },
});
