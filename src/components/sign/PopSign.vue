<template>
  <pop-mask v-show="c.showPopSign">
    <div class="sign-panel">
      <a class="close-btn" href="javascript:void(0);" @click="close">
        <i class="iconfont ic-unfollow"></i>
      </a>
      <!-- <div class="sign-p-hd">
        <a href="#" :class="{'exact-active':!issignup}" @click.prevent="toggle(false)">登录</a>
        <b>·</b>
        <a href="#" :class="{'exact-active':issignup}" @click.prevent="toggle(true)">注册</a>
      </div> -->
      <sign-in v-show="!issignup">
        <div class="other-link">
          还没有账号？
          <a href="javascript:void(0);" @click.prevent="toggle(true)">立即注册</a>
        </div>
      </sign-in>
      <sign-up v-show="issignup">
        <div class="other-link">
          已有账号？
          <a href="javascript:void(0);" @click.prevent="toggle(false)">立即登录</a>
          <router-link to="/sign_in"></router-link>
        </div>
      </sign-up>
    </div>
  </pop-mask>
</template>
<style lang="scss">
/* @import "./asign-page.scss";
@import "./asign-form.scss"; */

</style>
<script>
import PopMask from "./PopMask"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import data from "data"
export default {
  data() {
    return {
      issignup: false,
      c: data
    }
  },
  methods: {
    toggle: function(flag) {
      this.issignup = flag;
    },
    close: function() {
      this.c.showPopSign = false;
    }
  },
  components: {
    PopMask,
    SignIn,
    SignUp
  }
}

</script>
