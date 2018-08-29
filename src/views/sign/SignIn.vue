<template>
  <div class="sign-form">
    <form>
      <div class="input-box">
        <input type="text" placeholder="你的昵称" v-model="nickname">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-user"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="text" placeholder="设置密码" v-model="password">
        <input type="text" name="password" hidden>
        <i class="iconfont ic-user"></i>
        <div class="error-tip"></div>
      </div>
      <!-- <div class="input-box">
        <input type="text" placeholder="手机号" v-model="telephone">
        <i class="iconfont ic-user"></i>
        <div class="error-tip"></div>
      </div> -->
      <div class="submit-box">
        <input type="submit" @click.prevent="submit" value="登录">
      </div>
      <div class="msg-box">
        <div class='msg-box-l'><span>点击 “注册” 即表示您同意并愿意遵守简书</span></div>
        <div class='msg-box-l'><span><router-link class="msg-box-link" to="/">用户协议</router-link> 和 <router-link class="msg-box-link" to="/">隐私政策 </router-link>。</span></div>
      </div>
    </form>
    <footer>
      <h5 class="sign-hr"><span>社交帐号直接注册</span></h5>
      <ul class="tc">
        <li class="dib">
          <router-link class="sign-o-link" to="/">
            <i class="iconfont ic-wechat"></i>
          </router-link>
        </li>
        <li class="dib">
          <router-link class="sign-o-link " to="/">
            <i class="iconfont ic-qq_connect"></i>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      issign: true,
      nickname: "",
      password: "",
      telephone: ''
    }
  },
  methods: {
    togglesign: function() {
      this.issign = !this.issign;
    },
    submit: function() {}
  }
}

</script>
<style scoped>
.sign-pg footer {
    margin-top: 50px;
    padding: 60px;
}

.sign-pg .sign-o-link {
    font-size: 30px;
}

.sign-pg .sign-hr {
    border: 1px solid red;
}

.sign-pg header {}

.sign-pg .logo {
    position: absolute;
    top: 56px;
    left: 50px;
}

.sign-pg {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
}

.sign-pg .logo img {
    width: 100px;
}

.sign-pg .sign-panel {
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    vertical-align: middle;
    display: inline-block;
}

</style>
