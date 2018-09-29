<template>
  <pop-mask v-show="c.showPopSign">
    <div class="sign-panel">
      <div class="sign-p-hd">
        <a href="#" :class="{'exact-active':!issignup}" @click.prevent="toggle(false)">登录</a>
        <b>·</b>
        <a href="#" :class="{'exact-active':issignup}" @click.prevent="toggle(true)">注册</a>
      </div>
      <sign-in v-show="!issignup" />
      <sign-up v-show="issignup" />
    </div>
  </pop-mask>
</template>
<style lang="scss">
@import "./asign-page.scss";
@import "./asign-form.scss";

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
    }
  },
  components: {
    PopMask,
    SignIn,
    SignUp
  }
}

</script>
