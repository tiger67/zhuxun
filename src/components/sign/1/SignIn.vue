<template>
  <div class="sign-form sign-in">
    <form>
      <div class="input-box">
        <input type="text" placeholder="手机号或密码" v-model="nickname">
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
        <label for="remember_me">记住我</label>
      </div>
      <router-link to="/sd" class="problem">登录遇到问题</router-link>
      <div class="submit-box">
        <input type="submit" @click.prevent="submit" value="登录">
      </div>
    </form>
    <footer>
      <h5 class="sign-hr"><span>社交帐号直接注册</span></h5>
      <ul class="sign-more-style">
        <li>
          <router-link to="/" class="s-weibo">
            <i class="iconfont ic-weibo"></i>
          </router-link>
        </li>
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
        <li>
          <router-link to="/" class="s-douban">
            <i class="iconfont ic-douban"></i>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
  </div>
</template>
<style lang="scss">
.sign-in {
  .remember {
    float: left;
    margin: 15px 0;
  }
  .submit-box {
    input {
      background-color: #3194d0;
    }
  }
  .problem {
    float: right;
    margin: 15px 0;
    font-size: 14px;
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
