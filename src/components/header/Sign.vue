<template>
  <div class="head-sign-wrap">
    <div class="head-sign" v-if="!c.isSignIned">
      <router-link to="/sign_in">登录</router-link>
      <span>/</span>
      <router-link to="/sign_up">注册</router-link>
    </div>
    <span v-else>
    <span style="float:right;display:inline-block;margin-top:23px;font-size:13px;cursor:pointer;color:#999;"
           @click="c.isSignIned=false">退出</span>
    <img src="@/assets/home/index/4.png" alt="" class="sign-avatar" />
    </span>
  </div>
</template>
<script>
import data from "data"
export default {
  data() {
    return {
      c: data
    }
  }
}

</script>
<style lang="scss">
.head-sign-wrap {
  float: right;
  min-width: 100px;
  height: 100%;
  .head-sign {
    /*  border: 1px solid #999; */
    border-radius: 20px;
    box-sizing: border-box;
    line-height: 35px;
    margin-top: 11px;
    /*  margin-right: 10px; */
    font-size: 14px;
    padding: 0 0 0 13px;
    span {
      color: #999;
      margin: 0 5px;
      font-size: 16px;
    }
    a {
      color: #999;
      &:hover {
        color: #eee;
      }
    }
  }
  .sign-avatar {
    float: right;
    width: 36px;
    height: 36px;
    margin-top: 13px;
    margin-right: 10px;
  }
}

</style>
