<template>
    <div id="addupdate">
    <div>ADD AND UPDATE DOG PAGE</div>
    <div>
      <label>ชื่อ:  </label>
      <Input v-model="dogname" style="width: 300px" />
    </div>

    <div>
      <label>สังกัด:  </label>
      <Input v-model="dogname" style="width: 300px" />
    </div>


    <div>
      <label>ลักษณ:  </label>
      <Input v-model="value5" :rows="4" type="textarea"
              style="width: 200px" />
    </div>

    <div>
      <label>ฉีดยา: <i-switch true-color="#13ce66" false-color="#ff4949" /></label>

    </div>

    <div>
      <label>ทำหมัน: <i-switch true-color="#13ce66" false-color="#ff4949" /></label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Addupdate',


};
</script>

<style>

</style>
