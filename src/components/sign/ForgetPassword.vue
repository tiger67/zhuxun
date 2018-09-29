<template>
  <div class="sign-form forget-password-pg">
    <h2 class="title">手机号密码重置</h2>
    <form>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-model="mobile">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-phonenumber"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="短信验证码" v-model="smsCode">
        <i class="iconfont ic-verify"></i>
        <a class="sign-resend" :class="{'active':mobileisvalid && !smsCodesending}" href="javascript:void(0)" @click="sendSmsVerifyCode">{{smsCodesended ? "已发送" :smsCodesending ? "正在发送":'重新发送'}}</a>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="password" placeholder="请输入新密码" v-model="password">
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box last">
        <input type="password" placeholder="请再输入一遍新密码" v-model="repassword">
        <input type="password" name="password" hidden>
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="submit-box">
        <button @click.prevent="submit">密码重置</button>
      </div>
    </form>
    <footer>
      <div class="other-link">
        <i class="iconfont ic-back"></i>
        <router-link to="/sign_in">返回登录</router-link>
      </div>
    </footer>
  </div>
  </div>
</template>
<style lang="scss">
.forget-password-pg {
  .submit-box {
    input[type=submit] {
      /*background-color: #3194d0; */
      background-color: #ffc81f;
    }
  }
  .other-link {
    i {
      margin-right: 6px;
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
// { url: "/api/u/resetPwd", method: "post", params: ["confirmPassword", "mobile", "password", "smsCode"] },
import API from "@/api"
import data from "data";
var md5 = require('./comp/md5').md5;
export default {
  data() {
    return {
      issign: true,
      mobile: "13510022050",
      password: "123456",
      repassword: "123456",
      smsCode: "",
      c: data,
      mobileisvalid: false,
      mobileisvertifying: false,
      vertifying: false,
      smsCodesending: false,
      smsCodesended: false,
    }
  },
  mounted() {

  },
  methods: {
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
      let res = await API["get/api/getVerifyCode"]();
      //this.vertifying=false
      console.log(res);

    },
    submit() {
      this.c.isSignIned = true;
      if (this.$route.name == "SignIn") {
        this.$router.push('/');
      } else {
        this.c.showPopSign = false;
        //this.$router.push('/');
        //this.$parent.$parent.$parent.toggle(false);
      }
    },
    resetPwd() {
      API["/api/u/resetPwd"]({
        password: this.password,
        confirmPassword: this.repassword,
        mobile: this.mobile,
        smsCode: this.smsCode
      }).then(res => {
        if (res.data.code === 0) {
          console.log(res);
        }
      })
    }
  }
}

</script>
