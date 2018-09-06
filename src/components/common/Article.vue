<template>
  <div class="atc-unit" :class="{hasimg:showimg }">
    <!-- && article.img -->
    <router-link class="img-wrap" to="/">
      <!-- <img src="@/assets/home/index/c.png"  /> -->
      <img :src="article.img" />
      <router-link to="/article-list" class="atc-img-tag">室内设计</router-link>
    </router-link>
    <div class="atc-unit-c">
      <div class="atc-unit-c-inner">
        <router-link to="/article" class="title">{{article.title}}</router-link>
        <p class="abstract">{{article.abstract}}</p>
        <div class="meta">
          <router-link target="_blank" to="/myCenter" class="avatar">
            <img :src="article.meta.img" alt="">{{article.meta.nickname}}
          </router-link>
          <a href="javascript:void(0)">
            <i class='iconfont ic-applying'></i> 一个小时前</a>
          <a href="javascript:void(0)">
            <i class='iconfont ic-list-read'></i> {{article.meta.looks}}
          </a>
          <a href="javascript:void" @click.prevent="addLove(article)" :class={isloveing:article.isloveing}>
            <i class='iconfont ic-list-like'></i> {{article.meta.loves}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$home-color:#333;
.atc-unit.hasimg {
  height: 140px;
  .atc-unit-c {
    margin-left: 30.232558139535%
  }
  .img-wrap {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 27.441860465116%;
    height: 100%;
    text-align: center;
    &:before {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle;
    }
    img {
      width: 100%;
      vertical-align: middle;
      display: inline-block;
      border-radius: 4px;
    }
    .atc-img-tag {
      width: 64px;
      height: 25px;
      /* background: rgba(255, 200, 31, 1); */
      /* background-color: rgba(0, 0, 0, .35); */
      background-color: rgba(255, 200, 31, .7);
      color: rgba(255, 255, 255, 1);
      /* border-radius: 14px; */
      text-align: center;
      line-height: 25px;
      font-size: 12px;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }
}

.atc-unit {
  width: 100%;
  border: 0px solid red;
  position: relative;
  margin: 20px 0 40px;
  max-height: 140px;
  overflow: hidden;
  .img-wrap {
    display: none;
  }
  .atc-unit-c {
    height: 100%;
    vertical-align: middle;
    position: relative;
    &:before {
      content: '';
      width: 0;
      display: inline-block;
      height: 100%;
      visibility: hidden;
      vertical-align: middle;
    }
    .atc-unit-c-inner {
      display: inline-block;
      vertical-align: middle;
      width: 100%;
    }

    .title {
      display: block;
      width: 100%;
      margin: -4px 0 8px;
      font-size: 18px;
      line-height: 1.5;
      font-weight: bold;
      color: $home-color;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        text-decoration: underline;
      }
    }
    .abstract {
      width: 100%;
      font-size: 13px;
      line-height: 24px;
      color: #666;
      max-height: 67px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
  .meta {
    .isloveing {
      i {
        color: #ffc81f;
      }
    }
    .avatar {
      height: 32px;
      img {
        vertical-align: middle;
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 9px;
      }
    }
    a {
      margin-right: 12px;
      color: #b4b4b4;
      font-size: 13px;
    }
  }
}

</style>
<script>
import articlelist from "../index/article-list-data"
export default {
  props: {
    article: Object,
    showimg: Boolean,
  },
  data() {
    return {}
  },
  methods: {
    addLove: function(a) {
      if (a.isloveing) {
        return;
      }
      let index = articlelist.indexOf(a);
      let obj = { ...a,
        isloveing: true
      };

      obj.meta.loves = obj.meta.loves + 1;
      articlelist.splice(index, 1, obj);
    }
  },
  components: {

  }
}

</script>
