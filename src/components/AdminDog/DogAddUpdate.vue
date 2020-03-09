<template>
  <div class="addupdate">
    <div></div>
    <div>Dog ID:</div>

    <div class="form-control">
      <label>ชื่อ: </label>
      <input type="text" placeholder="Input Text" />
    </div>

    <div class="form-control">
      <label>พันธุ์: </label>
      <input type="text" placeholder="Input Text" />
    </div>

    <div class="form-control">
      <label>อายุ: </label>
      <input type="text" placeholder="Input Text" />
    </div>

    <div class="form-control">
      <label>เพศ: </label>
      <span class="select" style="width: 200px">
        <Select
          customText="Select Your Mee:"
          :options="['Mee', 'Moo', 'Maa']"
          @change="log($event)"
        />
      </span>
    </div>

    <div class="form-control">
      <label>ลักษณะ: </label>
      <input type="text" placeholder="Input Text" />
    </div>

    <div class="form-control">
      <label>สีปลอกคอ: </label>
      <span class="select" style="width: 200px">
        <Select
          customText="Select Your Mee:"
          :options="['Mee', 'Moo', 'Maa']"
          @change="log($event)"
        />
      </span>
    </div>

    <div class="form-control">
      <label>ติดต่อ: </label>
      <input type="text" placeholder="Input Text" />
    </div>

    <div class="form-control">
      <label>ผู้ดูแล: </label>
      <input type="text" placeholder="Input Text" />
    </div>

    <div class="form-control">
      <label>ที่อยู่: </label>
      <input type="text" placeholder="Input Text" />
    </div>
  </div>
</template>

<script>
import Select from '@/components/Shared/Select.vue';
import DogApiService from '@/services/DogApiService';

export default {
  name: 'DogAddUpdate',
  data: () => ({
    dogs: null,
  }),
  components: {
    Select,
  },
  created() {
    console.log(DogApiService.getDog(+this.$route.params.id));
    this.dogs = DogApiService.getDog(+this.$route.params.id);
  },
};
</script>

<style></style>
