<template>
  <div class='cmt-line'>
    <div class="author">
      <router-link to="/myCenter" class="avatar"><img :src="cmt.commentUserPhotoUrl" alt=""></router-link>
      <div class="info">
        <router-link to="/myCenter" class="name">{{cmt.commentUserName||"textname"}}</router-link>
        <div class="meta">楼 · {{cmt.createTime}}</div>
      </div>
    </div>
    <p class="cmt-content">
      {{cmt.commentContent||cmt.content}}
    </p>
    <div class="tool-group">
      <a href="javascript:void(0);" class="cmt-tool-zang">
        赞
      </a>
      <a href="javascript:void(0);">
        <i class="iconfont ic-comment"></i>
        回复
      </a>
    </div>
    <!-- <div class="sub-cmt-list" v-show="cmt.subcomments.length>0">
      <div class="sub-cmt-line" v-for="sub in cmt.subcomments">
        <div class="sub-cmt-l-u">
          <router-link :to="sub.from.url">
            {{sub.from.name}}
          </router-link>：
          <router-link to="/">
            @{{sub.to.name}}
          </router-link>
          <span>{{sub.content}}</span>
        </div>
        <div class="sub-tool-group">
          <span>{{sub.createTime}}</span>
          <a href="javascript:void(0);">
        <i class="iconfont ic-comment"></i>
        回复
      </a>
        </div>
      </div>
      <div class="sub-cmt-more">
        <a class='add-sub-cmt-btn' href="javascript:void(0);">
          <i class="iconfont ic-subcomment"></i>添加评论
        </a>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    cmt: Object,
    mindex: Number
  },
  data() {
    return {
      openReply: false
    }
  }
}

</script>
<style lang="scss">
.cmt-line {
  padding: 20px 0 30px 0;
  border-top: 1px solid #f0f0f0;
  .sub-cmt-list {
    margin-top: 20px;
    padding: 5px 0 5px 20px;
    border-left: 2px solid #d9d9d9;
    .sub-cmt-more {
      .add-sub-cmt-btn {
        color: #969696;
        &:hover {
          color: #333;
        }
      }
      i {
        margin-right: 8px;
      }
    }
    .sub-cmt-line {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px dashed #f0f0f0;
      .sub-cmt-l-u {
        a {
          color: #3194d0;
        }
      }
      .sub-tool-group {
        font-size: 12px;
        color: #969696;
        margin-top: 10px;
        a {
          margin-left: 10px;
          color: #969696;
          i {
            margin-right: 5px;
            font-size: 14px;
            vertical-align: middle;
          }
        }
      }
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
