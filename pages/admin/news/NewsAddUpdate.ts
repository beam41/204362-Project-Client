import Vue from 'vue';
// @ts-ignore
import NewsServ from '@/services/NewsApiService';
import News from '@/models/news';
import Modal from '@/components/Shared/Modal.vue';
import ImageServ from '@/services/ImageUploadService';

export default Vue.extend({
  layout: 'admin',
  name: 'NewsAddUpdate',
  components: {
    Modal,
  },
  data: () => ({
    news: null as News | null,
    editing: false,
    delShow: false,
    titleErr: false,
    descErr: false,
    imgErr: false,
    uploading: false,
    imgPath: '',
  }),
  head: () => ({
    title: 'Admin: News',
  }),
  computed: {
    imgUrl() {
      return `${process.env.VUE_APP_BACKEND_PATH}/uploads/${this.imgPath}`;
    },
    imgPlacehold() {
      return `${process.env.VUE_APP_BACKEND_PATH}/placeholder/${this.imgPath}`;
    },
  },
  mounted() {
    if (this.$route.params.id !== 'add') {
      NewsServ.getNews(this.$store, this.$route.params.id).then((val) => {
        this.news = val.data;
        this.imgPath = this.news.imgPath as string;
      });
    } else {
      this.news = new News();
    }
  },
  methods: {
    saveValidate() {
      this.titleErr = false;
      this.descErr = false;
      this.imgErr = false;
      let err = false;
      // @ts-ignore
      const title: string = this.$refs.title.value;
      // @ts-ignore
      const desc = this.$refs.desc.value;
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
      if (this.imgPath === '') {
        this.imgErr = true;
        err = true;
      }
      if (err) return;
      // @ts-ignore
      this.save();
    },
    save() {
      this.editing = true;
      let newNews: News = new News();
      if (this.news) {
        newNews = {
          id: this.$route.params.id !== 'add' ? this.$route.params.id : undefined,
          // @ts-ignorebuil
          title: this.$refs.title.value,
          writer: undefined,
          accepted: false,
          // @ts-ignore
          description: this.$refs.desc.value,
          // @ts-ignore
          imgPath: this.imgPath,
          deptNo: undefined,
        };
      }
      if (this.$route.params.id === 'add') {
        NewsServ.postNews(this.$store, newNews).then((_) => {
          this.$router.go(-1);
        });
      } else {
        NewsServ.putNews(this.$store, this.$route.params.id, newNews).then((_) => {
          this.$router.go(-1);
        });
      }
    },
    del() {
      this.delShow = false;
      this.editing = true;
      NewsServ.delNews(this.$store, this.$route.params.id).then((_) => {
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
