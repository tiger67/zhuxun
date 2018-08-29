<template>
  <div class="main">
    <local-nav></local-nav>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div>
      <ul style="position:fixed;right:50px;top:120px;font-size:18px;">
        <li>
          <router-link to="/sign_in">登录</router-link>
        </li>
        <li>
          <router-link to="/sign_up">注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.main {
  padding-top: 56px;
}

.main>.container {
  border: 1px solid red;
  min-height: 1000px;
}

</style>
<script>
import '@/styles/common.css';
import '@/styles/public.css';
import '@/styles/fonts.css';
import Nav from "./nav"
export default {
  data() {
    return {
      islogin: true,
    }
  },
  components: {
    localNav: Nav
  },
  methods: {
    togglesign: function() {
      this.islogin = !this.islogin;
    }
  }

}

</script>
