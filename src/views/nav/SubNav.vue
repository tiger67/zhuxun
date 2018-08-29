<template>
  <ul class="s-nav">
    <li v-for="nav in lists">
      <nav-line :name="nav.name" :path="nav.path" :icon="nav.icon"></nav-line>
    </li>
  </ul>
</template>
<script>
import cdata from "data"
import NavLine from "./NavLine"
const subNavLists = [
  { name: "评论", icon: "ic-comments", path: "/404" },
  { name: "简信", icon: "ic-chats", path: "/404" },
  { name: "投稿请求", icon: "ic-requests", path: "/404" },
  { name: "喜欢和赞", icon: "ic-likes", path: "/404" },
  { name: "关注", icon: "ic-follows", path: "/404" },
  { name: "赞赏和付费", icon: "ic-money", path: "/404" },
  { name: "其它提醒", icon: "ic-others", path: "/404" }
]
export default {
  props: {

  },
  data() {
    return {
      lists: subNavLists
    }
  },
  components: {
    NavLine
  },
  methods: {


  }
}

</script>
<style>
.s-nav {
  position: absolute;
  height: auto;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  padding: 5px 0;
  background-color: #fff;
  left: 0;
  top: 56px;
}

</style>
