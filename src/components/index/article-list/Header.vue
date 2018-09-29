<template>
  <div class="header">
    <!-- @/assets/home/index/avatar.png -->
    <img :src="head.thumbnail" alt="">
    <div class="desinfo">
      <h6 class="name">{{head.ziName}}</h6>
      <div class="meta">
        <router-link to="/"> 成员:<span>{{head.memberCnt}}</span></router-link>
        <router-link to="/"> 主题:<span>{{head.themeCnt  }}</span></router-link>
        <router-link to="/"> 收藏:<span>{{head.collectCnt}}</span></router-link>
        <router-link to="/"> 评论:<span>{{head.commentCnt}}</span></router-link>
      </div>
    </div>
    <div class="right-btn">
      <a v-if="!quanzi.followed" class="btn follow-btn" @click.prevent="quanzi.followed=true">
        <span class="btn-inner"><i class="iconfont ic-follow"></i> 关注</span>
      </a>
      <a v-else="quanzi.followed" class="btn cancel-btn" @click.prevent="quanzi.followed=false">
        <span class="btn-inner"><i class="iconfont ic-followed"></i>已关注</span>
        <span class="btn-inner-hover"><i class="iconfont ic-unfollow"></i>取消关注</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    head: Object
  },
  data() {
    return {
      quanzi: {
        followed: false
      }
    }
  }
}

</script>
<style lang="scss">
.atc-list-page {
  .header {
    border-bottom: 1px solid #f5f5f5;
    min-height: 93px;
    padding-bottom: 25px;
    img {
      width: 68px;
      height: 68px;
      vertical-align: middle;
    }

    .desinfo {
      display: inline-block;
      padding-left: 15px;
      vertical-align: middle;
      .name {
        font-size: 18px;
        color: #222;
        margin-bottom: 20px;
      }
      .meta {

        a {
          margin-right: 15px;
          color: #666;
          span {
            font-size: 13px;
            color: #222;
            margin-left: 5px;
          }
        }
      }
    }
    .right-btn {
      float: right;
      margin-top: 17px;
    }
  }

  .follow-btn,
  .cancel-btn {
    border-radius: 40px;
    font-size: 15px;
    padding: 7px 0;
    width: 100px;
    line-height: normal;
  }
  .follow-btn {
    color: #fff;
    /* background-color: #42c02e; */
    border: 1px solid #ffc81f;
    background-color: #ffc81f;
  }
  .cancel-btn {
    border-radius: 40px;
    border: 1px solid hsla(0, 0%, 59%, .6);
    color: #8c8c8c;
    background-color: hsla(0, 0%, 71%, .1);
    .btn-inner-hover {
      display: none;
    }
    &:hover {
      .btn-inner {
        display: none;
      }
      .btn-inner-hover {
        display: inline;
      }
    }
  }
}

</style>
