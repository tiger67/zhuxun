<template>
  <div class="sign-form sign-in">
    <h2 class="title">登录</h2>
    <form>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-model.trim.lazy.number="mobile" v-error="'empty,mobile,:手机号'">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-phonenumber"></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="设置密码" v-model.trim="password" v-error="'empty,:密码'">
        <input type="text" name="password" hidden>
        <i class="iconfont ic-password"></i>
        <div class="error-tip">
        </div>
      </div>
      <div class="remember">
        <input type="checkbox" name="remember_me" id="remember_me">
        <label for="remember_me">下次自动登录</label>
      </div>
      <a href="javascript:void(0);" @click.prevent="forgetPassword" class="forget-password">忘记密码</a>
      <div class="submit-box">
        <button v-error-submit.prevent.trim="{submit,isvertify}">
          <loading v-show="issubmiting" />登录
        </button>
      </div>
    </form>
    <signin-footer>
      <div class="other-link" v-show="!$slots.default">
        还没有账号？
        <router-link to="/sign_up">立即注册</router-link>
      </div>
      <slot />
    </signin-footer>
    <div class='sign-error-wrap' v-show="error">
      <div class="sign-error"> {{error}}</div>
    </div>
    <error ref="error"></error>
  </div>
</template>
<script>
var md5 = require('../comp/md5').md5;
import SigninFooter from "./Footer"
import localdata from "./data";
import Loading from "../Loading"
import directives from "./directives"
import API from "@/api"
import sign from "../common"
import Error from "../comp/error"
export default {
  data() {
    return {
      ...localdata,
      isvertify: false
    }
  },
  components: {
    Loading,
    SigninFooter,
    Error
  },
  directives,
  methods: {
    pushError(msg) {
      this.error = msg;
      this.issubmiting = false;
      setTimeout(() => {
        this.error = "";
      }, 5000);
    },
    clearAfterSigninRun: function() {
      this.c.afterSigninRun = null;
      //console.log("this.c.afterSigninRun已经清空");
    },
    submit: function() {
      this.issubmiting = true;
      API["post/api/u/login"]({
        password: md5(this.password),
        mobile: this.mobile,
      }).then((res, error) => {
        if (res.data.code === 0) {
          setTimeout(() => {
            this.c.isSignIned = true;
            this.issubmiting = false;
            this.c.u = { ...this.c.u, ...res.data.data };
            sign.setUser(res.data.data);
            if (this.$route.name == "SignIn") {
              this.$router.push('/');
            } else {
              this.c.showPopSign = false;
              this.c.afterSigninRun && this.c.afterSigninRun(this.clearAfterSigninRun);
            }
          }, 1000);
        } else {
          this.issubmiting = false;
          this.pushError(res.data.msg);
        }
      })
    },
    forgetPassword: function() {
      this.c.showPopSign = false;
      this.$router.push("/forget_password");
    }
  }
}

</script>
<style lang="scss">
@import "./Index.scss"

</style>
