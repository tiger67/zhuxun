<template>
  <ul class="user-sub-nav">
    <li v-for="nav in lists">
      <nav-line :name="nav.name" :path="nav.path" :icon="nav.icon" :isbtn="nav.isbtn" @myclick="signout">
      </nav-line>
    </li>
  </ul>
</template>
<style>
.user-sub-nav {
  position: absolute;
  background-color: #fff;
  left: 0;
  min-width: 160px;
  border: 1px solid transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  padding: 5px 0;
  margin: 0;
  overflow: hidden;
  left: auto;
  border-radius: 0 0 4px 4px;
  background-clip: padding-box;
  -webkit-filter: drop-shadow(0 2px 8px rgba(0, 0, 0, .1));
}

.user-sub-nav li i {
  margin-right: 15px;
  font-size: 18px;
  color: #ea6f5a;
  vertical-align: middle;
}

</style>
<script>
import NavLine from "./NavLine";
import data from "data";

const userlinks = [
  { name: "我的主页", path: "/404", icon: "ic-navigation-profile" },
  { name: "收藏的文章", path: "/404", icon: "ic-navigation-mark" },
  { name: "喜欢的文章", path: "/404", icon: "ic-navigation-like" },
  { name: "已购内容", path: "/404", icon: "ic-paid" },
  { name: "我的钱包", path: "/404", icon: "ic-navigation-wallet" },
  { name: "设置", path: "/404", icon: "ic-navigation-settings" },
  { name: "帮助与反馈", path: "/404", icon: "ic-navigation-feedback" },
  {
    name: "退出",
    path: "/404",
    icon: "ic-navigation-signout",
    isbtn: true,
    func: "signout"
  },
]
export default {
  data() {
    return {
      lists: userlinks,
      sign: data
    }
  },
  components: {
    NavLine
  },
  mounted: function() {

  },
  methods: {
    signout: function() {
      this.sign.isSignIned = false;
    }
  }

}

</script>
