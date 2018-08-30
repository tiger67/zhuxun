<template>
  <div class="atc-list-page">
    <div class="nav">
      <router-link to="/">CLUB <i class="iconfont ic-next-s"></i></router-link>
      <router-link to="/">艺术设计 <i class="iconfont ic-next-s"></i></router-link>
      <router-link to="/">室内设计 <i class="iconfont ic-next-s"></i></router-link>
    </div>
    <div class="left-atc clear">
      <div class="header">
        <img src="@/assets/home/index/avatar.png" alt="">
        <div class="desinfo">
          <h6 class="name">室内设计</h6>
          <div class="meta">
            <router-link to="/"> 成员:<span>45824</span></router-link>
            <router-link to="/"> 主题:<span>1824</span></router-link>
            <router-link to="/"> 收藏:<span>5824</span></router-link>
            <router-link to="/"> 评论:<span>3324</span></router-link>
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
      <article-unit v-for="(a,i) in lists" :article="a" :showimg="true" :key="i" />
      <div class="load-more-btn">
        加载更多
      </div>
    </div>
    <div class="right-act">
      <h4 class="title">圈子介绍</h4>
      <div class="content">
        <p style="margin-bottom:25px">欢迎关注公众号简宝玉(公众号ID : jianshu4321 后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。</p>
        <p>生活本无趣 </p>
        <p>光影挽留年 </p>
        <p>用图片 说故事 </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.atc-list-page {
  * {
    box-sizing: border-box;
  }
  .nav {
    line-height: 60px;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 25px;
    a {
      &:last-child {
        .iconfont {
          display: none;
        }
      }
    }
  }
  .left-atc {
    float: left;
    width: 71.666666666667%;

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
              font-size: 16px;
              color: #222;
              margin-left: 5px;
            }
          }
        }
      }
      .right-btn {
        float: right;
        margin-top: 15px;
      }
    }
  }
  .right-act {
    float: right;
    width: 25%;
    line-height: 1.6em;
    .title {
      color: #666;
      margin-bottom: 13px;
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
<script>
import ArticleListData from "../article-list-data";
import ArticleUnit from "../../common/Article"
export default {
  data() {
    return {
      lists: ArticleListData,
      quanzi: {
        followed: false
      }
    }
  },
  components: {
    ArticleUnit
  }

}

</script>
