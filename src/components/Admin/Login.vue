<template>
  <div class="login">
    <transition appear name="up-long">
      <div class="loginbox">
        <div v-if="trylogin" class="mini-cover">
          <div class="spinner spinner-black"></div>
        </div>
        <div :style="{visibility: (trylogin ? 'hidden': 'visible')}">
          <div class="form-control">
            <label for="login-usn">Username:</label>
            <input id="login-usn" type="text" ref="usn" @keyup.enter="login()"/>
          </div>
          <div class="form-control">
            <label for="login-pwd">Password:</label>
            <input id="login-pwd" type="password" ref="pwd" @keyup.enter="login()"/>
          </div>
          <p class="err">{{ errMessage }}</p>
          <div class="cover-btn">
            <button class="btn-success" @click="login()">Login</button>
            <button class="btn-default" @click="goBack()">Go Back</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginService from '@/services/LoginService';

export default Vue.extend({
  name: 'Login',
  data: () => ({
    trylogin: false,
    errMessage: '',
  }),
  methods: {
    goBack() {
      this.$router.go(-2);
    },
    login() {
      this.trylogin = true;
      // @ts-ignore
      LoginService.login(this.$refs.usn.value, this.$refs.pwd.value)
        .then((_) => {
          this.$router.push('/admin/news');
        })
        .catch((reason) => {
          this.trylogin = false;
          this.errMessage = reason.response.data.message;
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: color.lightness(var.$violet, 45%);
  display: flex;
  justify-content: center;
  align-items: center;

  .loginbox {
    border-radius: var.$b-radius;
    padding: 20px;
    max-width: 300px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
  }
  .cover-btn {
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;

    button {
      width: 100px;
    }
  }

  .mini-cover {
    position: absolute;
  }

  .err {
    text-align: center;
    color: var.$warn;
  }
}
</style>
