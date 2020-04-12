<template>
  <div class="login">
    <transition appear name="up-long">
      <div class="loginbox">
        <div v-if="trylogin" class="mini-cover">
          <div class="spinner spinner-black"></div>
        </div>
        <div :style="{ visibility: trylogin ? 'hidden' : 'visible' }">
          <div class="form-control">
            <label for="login-usn">Username:</label>
            <input id="login-usn" ref="usn" type="text" @keyup.enter="login()" />
          </div>
          <div class="form-control">
            <label for="login-pwd">Password:</label>
            <input id="login-pwd" ref="pwd" type="password" @keyup.enter="login()" />
          </div>
          <p class="err">{{ errMessage }}</p>
          <div class="cover-btn">
            <button class="btn-success" @click="login()">Login</button>
            <nuxt-link to="/"><button class="btn-default">Go Back</button></nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginService from '@/services/LoginService';
import User from '@/models/User';

export default Vue.extend({
  name: 'Login',
  data: () => ({
    trylogin: false,
    errMessage: '',
  }),
  mounted() {
    const storage = localStorage.getItem('mm-login');
    if (storage) {
      const login: User = JSON.parse(storage) as User;
      if (login.loggedIn !== false) {
        this.$store.commit('LOGIN', login);
        this.$router.push('/admin/news');
      }
    }
  },
  methods: {
    login() {
      this.trylogin = true;
      // @ts-ignore
      LoginService.login(this.$store, this.$refs.usn.value, this.$refs.pwd.value)
        .then((_: any) => {
          this.$router.push('/admin/news');
        })
        .catch((reason: any) => {
          // console.log(reason);
          this.trylogin = false;
          if (reason.response) this.errMessage = reason.response.data.message;
        });
    },
  },
  head: () => ({
    title: 'Admin: Login',
  }),
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

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
    color: var.$txt-warn;
  }
}
</style>
