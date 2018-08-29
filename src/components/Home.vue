<template>
  <div class="page">
    <local-nav></local-nav>
    <div class="w m0a">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<style>
.page {
  padding-top: 60px;
}

</style>
<script>
import '@/styles/fonts.css';
import header from "./header/header"
export default {
  data() {
    return {
      islogin: true,
    }
  },
  components: {
    localNav: header
  },
  methods: {
    togglesign: function() {
      this.islogin = !this.islogin;
    }
  }

}

</script>
