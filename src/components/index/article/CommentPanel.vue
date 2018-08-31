<template>
  <div class="comment-panel-wrap">
    <div class="post-comment-control">
      <div class="signin-wrap" v-if="!c.isSignIned">
        <a href="javascript:void" @click.prevent="toggleSign(true)" class="btn signin-btn">登录</a>
        <span>后发表评论</span>
      </div>
      <form v-else class="new-comment">
        <router-link to="/article" class="avatar"> <img :src="author.avatar" alt="">
        </router-link>
        <textarea placeholder="写下你的评论">
        </textarea>
        <div class="new-c-ft">
          <span class="snt-tip">Ctrl+Enter 发表</span>
          <a href="javascript:void" class="btn sent-btn" @click.prevent="">发送</a>
          <a href="javascript:void" class="cancel" @click.prevent="">取消</a>
        </div>
      </form>
    </div>
    <comment-list />
  </div>
</template>
<script>
import data from "data"
import CommentList from "./CommentList"

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
    CommentList
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
  .new-comment {
    position: relative;
    margin-left: 48px;
    .new-c-ft {
      height: 50px;
    }
    .snt-tip {
      float: left;
      margin: 20px 0 0 0px;
      font-size: 13px;
      color: #969696;
    }
    .cancel {
      float: right;
      margin: 18px 30px 0 0;
      font-size: 16px;
      color: #969696;
    }
    .sent-btn {
      float: right;
      width: 78px;
      margin: 10px 0;
      padding: 8px 18px;
      font-size: 16px;
      border: none;
      border-radius: 20px;
      color: #fff!important;
      background-color: #42c02e;
      cursor: pointer;
      outline: none;
      display: block;
    }
    .avatar {
      position: absolute;
      left: -48px;
      margin-right: 5px;
      width: 38px;
      height: 38px;
      vertical-align: middle;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    textarea {
      padding: 10px 15px;
      width: 100%;
      height: 80px;
      font-size: 13px;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      background-color: hsla(0, 0%, 71%, .1);
      resize: none;
      display: inline-block;
      vertical-align: top;
      outline-style: none;
    }
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
