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
          <router-link to="/myCenter" class="my-center tab not-exact">个人中心</router-link>
          <div class="head-sign" v-if="!c.isSignIned">
            <router-link to="/sign_in">登录</router-link>
            <span>/</span>
            <router-link to="/sign_up">注册</router-link>
          </div>
          <span v-else>
           <span style="float:right;display:inline-block;margin-top:23px;font-size:13px;cursor:pointer;"
           @click="c.isSignIned=false"
           >退出</span>
          <img src="@/assets/home/index/4.png" alt="" class="sign-avatar" />
          </span>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 900px;
  font-size: 15px;
  z-index: 99;
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
        background-color: #444;
      }
    }
    .tab.not-exact.active {
      background-color: #444;
    }
    .search-wrap {
      display: inline-block;
    }
    .head-sign {
      float: right;
      border: 1px solid #999;
      color: #999;
      border-radius: 20px;
      box-sizing: border-box;
      line-height: 35px;
      margin-top: 11px;
      margin-right: 10px;
      font-size: 14px;
      padding: 0 13px;
      a {
        color: #999;
        &:hover {
          color: #aaa;
        }
      }
    }
    .sign-avatar {
      width: 40px;
      height: 40px;
      float: right;
      margin-top: 11px;
      margin-right: 10px;
    }

    .my-center {
      float: right;
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
