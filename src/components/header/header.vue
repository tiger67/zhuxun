<template>
  <div class="header-wrap">
    <div class="main w m0a">
      <router-link to="/">
        <img src="@/assets/home/index/nav-logo.png" class="nav-logo" alt="">
      </router-link>
      <div class="tab-wrap clear">
        <router-link to="/" class="tab">首页</router-link>
        <router-link to="/club/clubIndex" class="tab">club <i class="iconfont ic-show"></i>
        </router-link>
        <router-link to="/article-list" class="tab">新闻资讯</router-link>
      </div>
      <div class="search-wrap">
        <search-box></search-box>
      </div>
      <div class="right">
        <router-link to="/myCenter/myArticles" class="my-center tab">个人中心</router-link>
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
      padding: 0 25px;
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

    .my-center {
      float: right;
    }
  }
}

</style>
