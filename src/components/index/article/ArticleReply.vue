<template>
  <form class="new-comment">
    <!--  <slot/> -->
    <router-link to="/article" class="avatar"> <img :src="c.u.photo" alt="">
    </router-link>
    <textarea placeholder="写下你的评论" v-model="replyinfo" @keyup.ctrl.enter="reply">
    </textarea>
    <div class="new-c-ft">
      <span class="snt-tip">Ctrl+Enter 发表</span>
      <!-- @click.prevent="reply" -->
      <a href="javascript:void(0);" class="btn sent-btn" v-signin="{path:reply}">发送</a>
      <a href="javascript:void(0);" class="cancel" @click.prevent="close">取消</a>
    </div>
  </form>
</template>
<script>
import API from "@/api";
import api from "./api"
import data from "data"
const MINLENGTH = 6;
const MAXLENGTH = 100;
let $paging;
export default {
  props: {
    commentId: Number,
    atc: Object
  },
  data() {
    return {
      c: data,
      replyinfo: ""
    }
  },
  methods: {
    //评论文章 type (类型，0文章，1快讯) 字段“replyCommentId”为空则为评论文章； 否则为回复对方网友评论
    /*{ url: "/api/comment/add", method: "post", params: ["articleId", "type", "content", "replyCommentId"] },*/
    close() {
      this.$emit("toggleReply", false);
    },
    reply: function() {
      var id = this.$route.params.id;
      var replyCommentId = this.commentId || 0;
      var len = this.replyinfo.length;
      if (!$paging) {
        if (replyCommentId) {
          $paging = this.$parent.$parent.$parent.$paging;
        } else {
          $paging = this.$parent.$children[1].$paging;
        }
      }
      if (MINLENGTH < len && len < MAXLENGTH) {
        api.comment({ articleId: id, type: 0, content: this.replyinfo, replyCommentId: replyCommentId }, $paging, () => {
          this.replyinfo = "";
          this.$emit("toggleReply", false);
        })
      }
      //console.log(this.$route)
      /*console.log(this.$route.name == 'Article') return*/
    }
  }
}

</script>
<style lang="scss">
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
      border-radius: 50%;
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

</style>
