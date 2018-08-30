<template>
  <div class="atc-unit" :class="{hasimg:showimg  }">
    <router-link class="img-wrap" to="/">
      <img src="@/assets/home/index/c.png" />
      <div class="atc-img-tag">室内设计</div>
    </router-link>
    <div class="atc-unit-c">
      <div class="atc-unit-c-inner">
        <router-link to="/article" class="title">{{article.title}}</router-link>
        <p class="abstract">{{article.abstract}}</p>
        <div class="meta">
          <router-link target="_blank" to="/author" class="avatar">
            <img src="@/assets/home/index/2.png" alt="">筑讯中国
          </router-link>
          <a href="javascript:void(0);">
            <i class='iconfont ic-applying'></i> 一个小时前</a>
          <router-link target="_blank" to="/comments">
            <i class='iconfont ic-list-read'></i> 2486
          </router-link>
          <router-link target="_blank" to="/likes">
            <i class='iconfont ic-list-like'></i> 456
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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
    }
    .atc-img-tag {
      width: 76px;
      height: 28px;
      background: rgba(255, 200, 31, 1);
      opacity: 0.7;
      border-radius: 14px;
      text-align: center;
      line-height: 28px;
      font-size: 14px;
      color: $home-color;
      position: absolute;
      left: 10px;
      top: 10px;
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
      font-size: 14px;
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
export default {
  props: {
    article: Object,
    showimg: Boolean,
  },
  data() {
    return {

    }
  }
}

</script>
