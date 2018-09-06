<template>
  <div class="atc-hd">
    <h1 class="a-title">
      {{atc.title}}
    </h1>
    <div class="writer-info">
      <img :src="atc.author.avatar" alt="">
      <div class="desc">
        <router-link class="name" to="/article">{{atc.author.name}}
        </router-link>
        <div class="meta">
          <span class="time">2018.05.21 16:07</span>
          <span>字数 1001</span>
          <span><i class="iconfont ic-list-read"></i>568</span>
          <span><i class="iconfont ic-list-like"></i>100</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.atc-hd {
  .a-title {
    word-break: break-word!important;
    word-break: break-all;
    margin: 20px 0 0;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }
  .writer-info {
    margin-top: 30px;
    margin-bottom: 40px;
    width: 100%;
    img {
      width: 48px;
      height: 48px;
      display: inline-block;
      vertical-align: middle;
    }
    .desc {
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px;
      .name {
        font-size: 16px;
        color: #222;
      }
      .meta {
        margin-top: 10px;
        font-size: 12px;
        color: #999;
        span {
          i {
            margin-right: 3px;
          }
          margin-right: 10px;
        }
      }
    }
  }
}

</style>
<script>
export default {
  props: {
    atc: Object
  },
  data() {
    return {

    }
  }
}

</script>
