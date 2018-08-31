<template>
  <div class="page">
    <local-nav></local-nav>
    <div class="w m0a">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <pop-sign />
    </transition>
  </div>
</template>
<style>
.page {
  padding-top: 60px;
  min-width: 900px;
}

</style>
<script>
import '@/styles/fonts.css';
import header from "./header/header"
import PopSign from "./sign/PopSign"
export default {
  data() {
    return {
      islogin: true,
    }
  },
  components: {
    localNav: header,
    PopSign
  },
  methods: {
    togglesign: function() {
      this.islogin = !this.islogin;
    }
  }

}

</script>
