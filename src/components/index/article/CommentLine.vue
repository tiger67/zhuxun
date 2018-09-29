<template>
  <div class='cmt-line'>
    <div class="author">
      <router-link to="/myCenter" class="avatar"><img :src="cmt.commentUserPhotoUrl" alt=""></router-link>
      <div class="info">
        <router-link to="/myCenter" class="name">{{cmt.commentUserName||"textname"}}</router-link>
        <div class="meta">{{mindex+1}}楼 · {{cmt.createTime|TimeYMDhms}}</div>
      </div>
    </div>
    <div class="peer-info" v-if="cmt.peerUserId">
      <span>
      <span style="color:#888;font-size:12px;">引用</span>
      <router-link to="/">@{{cmt.peerUserName}}</router-link>
      <span style="color:#888;font-size:12px;">发表的</span>：{{cmt.peerContent}}</span>
    </div>
    <p class="cmt-content">
      {{cmt.commentContent}}
    </p>
    <div class="tool-group">
      <a href="javascript:void(0);" class="cmt-tool-zang" :class="{'zan-animation':zan,'active':cmt.isZan}" v-signin="{path:()=>{addzan(cmt)}}">
        {{cmt.zanNum > 0 ? cmt.zanNum+"人" : ""}}赞
      </a>
      <a href="javascript:void(0);" v-signin="{path:function(){toggleReply(true)}}">
        <i class="iconfont ic-comment"></i>
        回复
      </a>
    </div>
    <div v-if="openFlag " class="reply-wrap">
      <comment-reply :type="1" :commentId="cmt.id" @toggleReply="toggleReply">
      </comment-reply>
    </div>
    {{changeOpenFlag}}
  </div>
</template>
<script>
import api from "./api"
import c from 'data'
import commentReply from "./ArticleReply"
import data from "./data"
export default {
  props: {
    cmt: Object,
    mindex: Number,
  },
  data() {
    return {
      openFlag: false,
      zan: false,
      author: data.author
    }
  },
  components: {
    commentReply
  },
  computed: {
    changeOpenFlag() {
      if (c.isSignIned) {
        this.openFlag = false;
      } else {
        this.openFlag = false;
      }
    }
  },
  methods: {
    toggleReply(flag) {
      this.openFlag = flag;
    },
    addzan(cmt) {
      //console.log(cmt);
      api.zan(cmt.id, () => {
        this.zan = true;
      })
    }
  }
}

</script>
<style lang="scss">
@keyframes likeBlast-data-v-cdecbe24 {
  0% {
    background-position: -50px;
  }
  100% {
    background-position: right;
  }
}

.cmt-line {
  padding: 20px 0 30px 0;
  border-top: 1px solid #f0f0f0;
  .reply-wrap {
    padding-top: 10px;
  }
  .peer-info {
    /*  padding: 5px 5px 5px 5px; */
    padding: 12px;
    margin: 10px 0 0px;
    font-size: 14px;
    display: inline-block;
    /* border-left: 2px solid #888; */
    background-color: rgba(181, 181, 181, 0.1);

    a {
      color: #3194d0
    }
  }
  .tool-group {
    line-height: 30px;
    .cmt-tool-zang {
      position: relative;
      padding-left: 23px;
      &:before {
        content: '';
        position: absolute;
        left: -16px;
        top: -12px;
        width: 50px;
        height: 50px;
        background-image: url(./assets/zan_animation_steps.png);
        background-position: left;
        background-repeat: no-repeat;
        background-size: 1050px 50px;
      }
      &:hover:before {
        background-position: -50px;
      }
      &.active:before {
        background-position: right;
      }
      &.zan-animation:before {
        animation: likeBlast-data-v-cdecbe24 0.6s 1 steps(19);
        background-position: right;
      }
    }
    a {
      margin-right: 10px;
      font-size: 14px;
      color: #999;
      display: inline-block;
      &:hover {
        color: #333;
      }
      i {
        margin-right: 5px;
        font-size: 18px;
        vertical-align: middle;
      }
    }
  }

  .cmt-content {
    font-size: 16px;
    margin: 12px 0;
    line-height: 1.5;
    font-size: 16px;
    word-break: break-word!important;
    word-break: break-all;
  }

  .author {
    margin-bottom: 15px;
    .avatar {
      margin-right: 5px;
      width: 38px;
      height: 38px;
      vertical-align: middle;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }
    .info {
      display: inline-block;
      vertical-align: middle;
      .name {
        font-size: 15px;
        color: #333;
      }
      .meta {
        margin-top: 8px;
        font-size: 12px;
        color: #999
      }
    }
  }
}

</style>
