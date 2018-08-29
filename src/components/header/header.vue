<template>
  <div class="header-wrap">
    <div class="main w m0a">
      <div class="tab">
        <div class="tab-item">
          <router-link to="/">首页</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/club">club</router-link>
        </div>
      </div>
      <div class="right">
        <div class="search-wrap">
          <search-box></search-box>
        </div>
        <div class="myCenter">
          <router-link to="/myCenter">个人中心</router-link>
        </div>
        <div class="head-sign">
          <router-link to="/sign_in">登录</router-link>
          <span>/</span>
          <router-link to="/sign_up">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "data"
import PopSign from "../sign/PopSign"
import SearchBox from "./Search"

export default {
  data() {
    return {
      c: data
    }
  },
  components: {
    PopSign,
    SearchBox
  }
};

</script>
<style lang="scss">
$system-color-black: #222;
$system-color-white: #fff;

.header-wrap {
  width: 100%;
  height: 60px;
  position: fixed;
  font-size: 15px;
  top: 0;
  left: 0;
  z-index: 99;
  background: $system-color-black;
  color: $system-color-white;
  .right {
    float: right;
  }
  .main {
    line-height: 60px;
    .tab {
      display: inline-block;
      .tab-item {
        display: inline-block;
        margin-right: 30px;
        a {
          color: $system-color-white;
        }
      }
    }
    .search-wrap {
      display: inline-block;
    }

    .head-sign {
      float: right;
      border: 1px solid #999;
      border-radius: 20px;
      box-sizing: border-box;
      line-height: 38px;
      margin-top: 11px;
      margin-right: 40px;
      padding: 0 13px;
      a {
        color: $system-color-white;
      }
    }

    .myCenter {
      float: right;
      a {
        color: $system-color-white;
      }
    }
  }
}

</style>
