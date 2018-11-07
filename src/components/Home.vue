<template>
  <div class="page">
    <local-nav></local-nav>
    <div class="w m0a">
      <!--  <transition name="fade" mode="out-in"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>
    <transition name="pop">
      <pop-sign />
    </transition>
  </div>
</template>
<style lang="scss">
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
  components: {
    localNav: header,
    PopSign,
  }
}

</script>
