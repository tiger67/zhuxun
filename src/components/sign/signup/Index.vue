<template>
  <div class="sign-form sign-up">
    <h2 class="title">注册</h2>
    <form>
      <div class="input-box">
        <input type="text" placeholder="你的昵称" v-model.trim="nickname" v-error="'empty,nickname,:昵称'">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-user"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-model.trim="mobile" v-error="'empty,mobile,mobile1,:手机号'">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-phonenumber"></i>
        <!--  <div class="error-tip"><span class="error-tip-c" v-show="mobileErorr">{{mobileErorr}}</span></div> -->
      </div>
      <div class="input-box">
        <input type="text" placeholder="手机验证码" v-model.trim="smsCode" v-error="'empty,:验证码'">
        <input type="text" name="password" hidden>
        <i class="iconfont ic-verify"></i>
        <!-- <re-send  /> -->
        <a class="sign-resend" :class="{'active':mobileisvalid && !smsCodesending}" href="javascript:void(0)" @click="sendSmsVerifyCode">{{smsCodesended ? "已发送" :smsCodesending ? "正在发送":'重新发送'}}</a>
        <div class="error-tip"></div>
      </div>
      <div class="input-box last">
        <input type="text" placeholder="设置密码" v-model.trim="password" v-error="'empty,:密码'">
        <input type="text" name="password" hidden>
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="submit-box">
        <button v-error-submit.prevent.trim="{submit}">
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
    <signup-footer>
      <div class="other-link" v-show="!$slots.default">
        已有账号？
        <router-link to="/sign_in">立即登录</router-link>
      </div>
      <slot />
    </signup-footer>
    <error></error>
    <vertify-img />
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
var md5 = require('../comp/md5').md5;
import Loading from "../Loading"
import VertifyImg from "../comp/vertify-img/Index"
import API from "@/api";
import vtf from "../comp/vertify-img/data"
import SignupFooter from "./Footer"
import Error from "../comp/error"
export default {
  data() {
    return {
      issign: true,
      nickname: "",
      mobile: "13510022050",
      smsCode: "",
      password: "",
      mobileErorr: "",
      mobileisvalid: false,
      mobileisvertifying: false,
      smsCodesending: false,
      smsCodesended: false,
      issubmiting: false,
      vtf
    }
  },
  components: {
    Loading,
    VertifyImg,
    SignupFooter,
    Error
  },
  methods: {
    togglesign() {
      this.issign = !this.issign;
    },
    async veriftyMobile(e) {
      if (this.mobile) {
        if (!this.mobileisvertifying) {
          this.mobileisvertifying = true;
          this.mobileErorr = "";
          if (!this.mobileisvalid) {
            let d = (await API["get/api/u/checkMobile"]({ mobile: this.mobile, type: 1 })).data;
            /*let d = res.data;*/
            this.mobileisvertifying = false;
            if (d.code !== 0) {
              this.mobileErorr = d.msg;
            } else {
              this.mobileisvalid = true;
            }
          }
        }
      } else {
        this.mobileErorr = "手机号不能为空"
      }
    },
    async sendSmsVerifyCode() {
      if (this.mobileisvalid && !this.smsCodesending) {
        this.smsCodesending = true;
        this.smsCodesended = false;
        /*setTimeout(() => { this.smsCodesending = false; }, 60000);
         */
        let res = await API["post/api/sendSmsVerifyCode"]({ mobile: this.mobile, type: 1 });
        this.smsCodesending = false;
        if (res.data.code === 0) {
          this.smsCodesended = true;
          this.smsCode = 66666;
        }
      }
    },
    async imgVartify() {
      //let res = await API["get/api/getVerifyCode"]();
      //this.vertifying=false
      //console.log(res)

    },
    async submit() {
      this.issubmiting = true;
      //if (this.mobile && this.mobileisvalid) {
      this.vtf.vertifying = true;
      this.imgVartify();
      /* if (this.mobile) {
         let res = await API["post/api/u/register"]({
           nickName: this.nickname,
           password: md5(this.password),
           mobile: this.mobile,
           smsCode: this.smsCode
         });
         this.vertifying = false;
         this.issubmiting = false;
       }*/
    }
  }
}

</script>
