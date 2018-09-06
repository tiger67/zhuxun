<template>
  <div class="sign-pg">
    <router-link to="/" class="logo">
      <img src="./assets/sign-logo.png" alt="">
    </router-link>
    <div class="sign-panel">
      <!-- <div class="sign-p-hd">
        <router-link to="/sign_in">登录</router-link>
        <b>·</b>
        <router-link to="/sign_up">注册</router-link>
      </div> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      issign: true,
      nickname: "",
      password: "",
      telephone: ''
    }
  },
  methods: {
    togglesign: function() {
      this.issign = !this.issign;
    },
    submit: function() {}
  }
}

</script>
