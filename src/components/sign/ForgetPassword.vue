<template>
  <div class="sign-form forget-password-pg">
    <h2 class="title">手机号密码重置</h2>
    <form>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-model="nickname">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-phonenumber"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="短信验证码" v-model="nickname">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-verify"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="请输入新密码" v-model="nickname">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box last">
        <input type="text" placeholder="请再输入一遍新密码" v-model="password">
        <input type="text" name="password" hidden>
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
      /*   background-color: #3194d0; */
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
import data from "data";
export default {
  data() {
    return {
      issign: true,
      nickname: "",
      password: "",
      telephone: '',
      c: data
    }
  },
  methods: {
    submit: function() {
      this.c.isSignIned = true;
      if (this.$route.name == "SignIn") {
        this.$router.push('/');
      } else {
        this.c.showPopSign = false;
        //this.$router.push('/');
        //this.$parent.$parent.$parent.toggle(false);
      }
    }
  }
}

</script>
