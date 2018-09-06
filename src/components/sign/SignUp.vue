<template>
  <div class="sign-form sign-up">
    <h2 class="title">注册</h2>
    <form>
      <div class="input-box">
        <input type="text" placeholder="你的昵称" v-model="nickname">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-user"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-model="mobile">
        <i class="iconfont ic-phonenumber"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="手机验证码" v-model="smsCode">
        <i class="iconfont ic-verify"></i>
        <re-send />
        <div class="error-tip"></div>
      </div>
      <div class="input-box last">
        <input type="text" placeholder="设置密码" v-model="password">
        <input type="text" name="password" hidden>
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="submit-box">
        <button @click.prevent="submit">
          <loading v-show="issubmiting" />注册
        </button>
      </div>
      <div class="msg-box">
        点击 “注册” 即表示您同意并愿意遵守筑讯
        <br/>
        <router-link to="/">用户协议</router-link> 和
        <router-link to="/">隐私政策 </router-link>。
      </div>
    </form>
    <footer>
      <h5 class="sign-hr"><span>社交帐号直接注册</span></h5>
      <ul class="sign-more-style">
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
      </ul>
      <div class="other-link" v-show="!$slots.default">
        已有账号？
        <router-link to="/sign_in">立即登录</router-link>
      </div>
      <slot />
    </footer>
    <vertify-img v-if="vertifying" />
  </div>
</template>
<style lang="scss">
.sign-up {
  .msg-box {
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    a {
      color: #3194d0;
    }
  }
}

</style>
<script>
import Loading from "./Loading"
import reSend from "./comp/MobileCodeSend"
import VertifyImg from "./VertifyImg"
import API from "@/api";
console.log(API);
export default {
  data() {
    return {
      issign: true,
      nickname: "",
      mobile: "",
      smsCode: "",
      password: "",
      vertifying: false,
      issubmiting: false
    }
  },
  components: {
    Loading,
    reSend,
    VertifyImg
  },
  methods: {
    togglesign() {
      this.issign = !this.issign;
    },
    submit() {
      this.issubmiting = true;
      setTimeout(() => {
        this.vertifying = true;
        setTimeout(() => {
          this.vertifying = false;
          this.issubmiting = false;
        }, 100000)
      }, 1000)

    }
  }
}

</script>
