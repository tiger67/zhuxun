<template>
  <div class="nav nav-fixed nav-wrap">
    <div class="nav-layout" style="position:relative">
      <div style="float:right" class="nav-right-wrap">
        <router-link class="btn write-btn" to="/writer">
          <i class="iconfont ic-write"></i>写文章
        </router-link>
        <span class="nav-user" v-if="c.isSignIned">
        <router-link class="user-logo-wrap" to="/404">
          <img src="@/assets/home/nav/default-user-logo.jpg" alt="用户标识">
        </router-link>
        <user-sub-nav class="user-sub-nav" />
        </span>
        <span v-if="!c.isSignIned && $route.name=='home'">
        <router-link  class="btn nav-sign-up-btn" to="/sign_up">
         注册
        </router-link>
         <router-link  to="/sign_in" class="btn nav-sign-in-btn">
         登录
        </router-link>
        </span>
        <span v-if="!c.isSignIned && $route.name!='home'">
        <a href="javascript:void(0);" class="btn nav-sign-up-btn" @click.prevent="toggle(true,true)">注册</a>
        <a href="javascript:void(0);" class="btn nav-sign-in-btn" @click.prevent="toggle(true)">登录</a>
        </span>
        <router-link to="/404" class="style-mode-btn">
          <i class="iconfont ic-navigation-mode"></i>
        </router-link>
      </div>
      <transition name="fade" mode="out-in">
        <pop-sign v-if="signshow" @close="toggle(false)" @swichsignup="swichsignup" :issignup="issignup">
        </pop-sign>
      </transition>
      <router-link class="logo" to="/"><img src="@/assets/nav-logo.png"></router-link>
      <div class="container">
        <div class="nav-menu-collapse">
          <ul class="nav">
            <li class="nav-tab nav">
              <router-link to="/">
                <i class="iconfont ic-navigation-discover menu-icon"></i><span class="menu-text">发现</span>
              </router-link>
            </li>
            <li class="nav-tab">
              <router-link to="/follow">
                <i class="iconfont ic-navigation-follow menu-icon"></i>
                <span class="menu-text">关注</span>
              </router-link>
            </li>
            <li class="nav-tab notification">
              <router-link to="/news" class="notification-btn">
                <i class="iconfont ic-navigation-notification menu-icon"></i>
                <span class="menu-text">消息</span>
                <span class="badge">2</span>
                <sub-nav class='sub-nav'></sub-nav>
              </router-link>
            </li>
            <li class="nav-tab notification">
            </li>
            <li class="nav-tab ">
              <search-box></search-box>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./anav.css"
import SubNav from "./SubNav";
import PopSign from "../sign/PopSign"
import SearchBox from "./SearchBox"
import UserSubNav from "./UserSubNav"
import data from "data"
export default {
  props: {
    hasSignIn: Boolean
  },
  name: 'Nav',
  data() {
    return {
      signshow: false,
      issignup: false,
      c: data
    }
  },
  updated: function() {
    /*console.log(this.$router); console.log(this.$route);*/
  },
  components: {
    SubNav,
    PopSign,
    SearchBox,
    UserSubNav
  },
  methods: {
    swichsignup: function(flag) {
      this.issignup = flag;
    },
    toggle: function(val, issignup) {
      this.issignup = !!issignup;
      if (val) {
        this.signshow = val;
      } else {
        this.signshow = !this.signshow;
      }
    }
  },
  beforeRouteEnter: function() {
    console.log("11111")
    console.log(arguments)
  }
}

</script>
