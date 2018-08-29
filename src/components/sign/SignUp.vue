<template>
  <div class="sign-form">
    <form>
      <div class="input-box bb-none">
        <input type="text" placeholder="你的昵称" v-model="nickname">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-user"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box bb-none">
        <input type="text" placeholder="手机号" v-model="telephone">
        <i class="iconfont ic-phonenumber"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="设置密码" v-model="password">
        <input type="text" name="password" hidden>
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="submit-box">
        <input type="submit" @click.prevent="submit" value="注册">
      </div>
      <div class="msg-box">
        点击 “注册” 即表示您同意并愿意遵守简书
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
    </footer>
  </div>
  </div>
</template>
<style>
.msg-box {
  margin: 10px 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #969696;
}

.msg-box>a {
  color: #3194d0;
}

</style>
<script>
export default {
  data() {
    return {
      issign: true,
      nickname: "",
      password: "",
      telephone: ""
    }
  },
  methods: {
    togglesign: function() {
      this.issign = !this.issign;
    },
    submit: function() {

    }
  }
}

</script>
