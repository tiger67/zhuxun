<template>
  <div class="comment-panel-wrap">
    <div class="post-comment-control">
      <div class="signin-wrap" v-if="!c.isSignIned">
        <a href="javascript:void(0)" v-signin class="btn signin-btn">登录</a>
        <span>后发表评论</span>
      </div>
      <article-reply v-else :atc="atc">
        <router-link to="/article" class="avatar"> <img :src="atc.photo || atc.avatar" alt="">
        </router-link>
      </article-reply>
    </div>
    <comment-list :comments="comments" />
  </div>
</template>
<script>
import c from "data"
import CommentList from "./CommentList"
import ArticleReply from "./ArticleReply"
import api from "./api"
import data from "./data"
export default {
  props: {
    atc: Object
  },
  data() {
    return {
      c,
      comments: data.comments,
    }
  },
  mounted() {
    //this.commentslist();
    var id = this.$route.params.id
    api.getcomments(id)

  },
  methods: {
    commentslist() {

    }
  },
  components: {
    CommentList,
    ArticleReply
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
