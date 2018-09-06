<template>
  <div class="sign-form sign-in">
    <h2 class="title">登录</h2>
    <form>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-model="mobile">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-user"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box last">
        <input type="text" placeholder="设置密码" v-model="password">
        <input type="text" name="password" hidden>
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="remember">
        <input type="checkbox" name="remember_me" id="remember_me">
        <label for="remember_me">下次自动登录</label>
      </div>
      <a href="javascript:void(0);" @click.prevent="forgetPassword" class="forget-password">忘记密码</a>
      <div class="submit-box">
        <button @click.prevent="submit">
          <loading v-show="issubmiting" />登录
        </button>
      </div>
    </form>
    <footer>
      <h5 class="sign-hr"><span>社交帐号登录</span></h5>
      <ul class="sign-more-style">
        <!-- <li>
          <router-link to="/" class="s-weibo">
            <i class="iconfont ic-weibo"></i>
          </router-link>
        </li> -->
        <li>
          <router-link to="/" class="s-wechat">
            <i class="iconfont ic-wechat"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="s-qq">
            <i class="iconfont ic-qq_connect"></i>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/" class="s-douban">
            <i class="iconfont ic-douban"></i>
          </router-link>
        </li> -->
      </ul>
      <div class="other-link" v-show="!$slots.default">
        还没有账号？
        <router-link to="/sign_up">立即注册</router-link>
      </div>
      <slot />
    </footer>
  </div>
  </div>
</template>
<style lang="scss">
.sign-in {
  .remember {
    input {
      position: relative;
      top: 2px;
      /* display: block;
      float: left;
      margin-top: -2px;
      margin-right: 5px; */
    }
    label {
      /*  float: left; */
    }
    float: left;
    margin: 15px 0;
    font-size: 13px;
  }
  .submit-box {
    input[type=submit] {
      /*   background-color: #3194d0; */
      background-color: #ffc81f;
    }
  }
  .forget-password {
    float: right;
    margin: 15px 0;
    font-size: 14px;
    /* color: #3194d0; */
    color: #999;
    &:hover {
      color: #222;
    }
  }
}

</style>
<script>
import data from "data";
import Loading from "./Loading"

export default {
  data() {
    return {
      issign: true,
      nickname: "",
      password: "",
      mobile: '',
      c: data,
      issubmiting: false
    }
  },
  components: {
    Loading
  },
  methods: {
    submit: function() {
      this.issubmiting = true;
      setTimeout(() => {
        this.c.isSignIned = true;
        this.issubmiting = false;
        if (this.$route.name == "SignIn") {
          this.$router.push('/');
        } else {
          this.c.showPopSign = false;
          //this.$router.push('/');
          //this.$parent.$parent.$parent.toggle(false);
        }
      }, 1000)

    },
    forgetPassword: function() {
      this.c.showPopSign = false;
      this.$router.push("/forget_password");
    }
  }
}

</script>
