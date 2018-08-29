<template>
  <div class="sign-pg">
    <router-link to="/" class="logo"><img src="../../assets/logo.png"></router-link>
    <section class="sign-panel">
      <header>
        <router-link to="/sign_in">登录</router-link>
        <router-link to="/sign_up">注册</router-link>
        <!--  <a href="javascript:void(0)" @click.default="togglesign" active>登录</a>
       <a href="javascript:void(0)" @click.default="togglesign">注册</a> -->
      </header>
      <router-view></router-view>
    </section>
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
    submit: function() {

    }
  }
}

</script>
<style scoped>
.sign-form footer {
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
