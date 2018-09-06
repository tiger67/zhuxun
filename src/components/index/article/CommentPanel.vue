<template>
  <div class="comment-panel-wrap">
    <div class="post-comment-control">
      <div class="signin-wrap" v-if="!c.isSignIned">
        <a href="javascript:void" @click.prevent="toggleSign(true)" class="btn signin-btn">登录</a>
        <span>后发表评论</span>
      </div>
      <comment-box v-else>
        <router-link to="/article" class="avatar"> <img :src="author.avatar" alt="">
        </router-link>
      </comment-box>
    </div>
    <comment-list />
  </div>
</template>
<script>
import data from "data"
import CommentList from "./CommentList"
import CommentBox from "./CommentBox"

export default {
  props: {
    comments: Array,
    author: Object
  },
  data() {
    return {
      c: data,
    }
  },
  components: {
    CommentList,
    CommentBox
  },
  methods: {
    toggleSign: function(flag) {
      this.c.showPopSign = flag
    }
  }
}

</script>
<style lang="scss">
.comment-panel-wrap {
  height: 500px;
  border: 0px solid red;
  .post-comment-control {
    padding-bottom: 40px;
  }
  .signin-wrap {
    height: 80px;
    margin-bottom: 50px;
    text-align: center;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    &:before {
      height: 100%;
      display: inline-block;
      content: '';
      vertical-align: middle;
    }
    .signin-btn {
      display: inline-block;
      border-radius: 40px;
      font-size: 16px;
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
