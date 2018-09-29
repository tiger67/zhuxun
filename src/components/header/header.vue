<template>
  <div class="header-wrap">
    <div class="w m0a">
      <div class="main ">
        <router-link to="/">
          <img src="@/assets/home/index/nav-logo.png" class="nav-logo" alt="">
        </router-link>
        <div class="tab-wrap clear">
          <router-link to="/" class="tab">首页</router-link>
          <router-link to="/club" class="tab not-exact">club <i class="iconfont ic-show"></i>
          </router-link>
          <router-link to="/news" class="tab">新闻资讯</router-link>
        </div>
        <div class="search-wrap">
          <search-box></search-box>
        </div>
        <div class="right">
          <sign />
          <router-link v-if="c.isSignIned" to="/myCenter" class="my-center tab not-exact">个人中心</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PopSign from "../sign/PopSign"
import SearchBox from "./Search"
import Sign from "./Sign"
import data from "data"
export default {
  data() {
    return {
      c: data
    }
  },
  components: {
    PopSign,
    SearchBox,
    Sign

  }
};

</script>
<style lang="scss">
$system-color-black: #222;
$system-color-white: #fff;

.header-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 900px;
  font-size: 15px;
  z-index: 11000;
  background: $system-color-black;
  color: $system-color-white;
  .right {
    float: right;
  }
  .main {
    height: 60px;
    * {
      vertical-align: middle;
    }
    &:before {
      display: inline-block;
      height: 100%;
      content: '';
      width: 0;
      vertical-align: middle;
    }
    .nav-logo {
      vertical-align: middle;
    }
    /*  line-height: 60px; */
    .tab-wrap {
      margin-left: 150px;
      display: inline-block;
      .tab {
        float: left;
      }
    }

    .tab {
      padding: 0 20px;
      line-height: 60px;
      color: #fff;
      &:hover {
        background-color: #444;
      }
      i {
        line-height: 40px;
      }
    }
    .tab.exact-active {
      &:not(.not-exact) {
        /* background-color: #444; */
        color: #ffc81f;
      }
    }
    .tab.not-exact.active {
      /* background-color: #444; */
      color: #ffc81f;
    }
    .search-wrap {
      display: inline-block;
    }


    .my-center {
      float: right;
      color: #999;
      font-size: 13px;
    }
  }
  @media (max-width: 1366px) {
    .main {
      /* margin-left: -175px; */
      /* margin-right: -105px; */
      .tab-wrap {
        margin-left: 55px;
      }
    }
  }
  @media (max-width: 1092px) {
    .main {
      margin-left: -140px;
      margin-right: 0px;
      .tab-wrap {
        margin-left: 20px;
      }
    }
  }
}

</style>
