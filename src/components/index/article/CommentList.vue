<template>
  <div class="comments-list">
    <div class="signin-wrap" v-if="!c.isSignIned">
      <router-link to="/" class="btn signin-btn">登录</router-link>
      <span>后发表评论</span>
    </div>
    <ul>
      <li v-for="c in comments">
        <div class="author">{{c.author.name}}</div>
        {{c.content}}
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.comments-list {
    height: 500px;
    border: 0px solid red;
    .signin-wrap {
        margin-top: 50px;
        height: 80px;
        border: 1px solid #eee;
        text-align: center;
        &:before {
            height: 100%;
            display: inline-block;
            content: '';
            vertical-align: middle;
        }
        .signin-btn {
            display: inline-block;
            border-radius: 40px;
            font-size: 18px;
            padding: 7px 0;
            width: 100px;
            vertical-align: middle;
            margin-right: 10px;
            color: #fff;
            background-color: #ffc81f;
        }
    }
}

</style>
<script>
import data from "data"
export default {
  props: {
    comments: Array
  },
  data() {
    return {
      c: data
    }
  }
}

</script>
