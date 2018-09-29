<template>
  <div class="atc-hd">
    <h1 class="a-title">
      {{atc.title}}
    </h1>
    <div class="writer-info">
      <img v-if="atc.photo" :src="atc.photo" alt="">
      <div class="desc">
        <router-link class="name" to="/article">
        {{atc.author || atc.name}}
        </router-link>
        <div class="meta">
          <span class="time" v-if="atc.publishTime">{{atc.publishTime|TimeYMDhms }}</span>
          <span class="time" else>{{atc.createTime|TimeYMDhms }}</span>
          <!--  <span>字数 1001</span> -->
          <span><i class="iconfont ic-list-read"></i>{{atc.browseLog||0}}</span>
          <span><i class="iconfont ic-list-like"></i>{{atc.collectLog||0}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    atc: Object
  },
  data() {
    return {}
  }
}

</script>
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
      border-radius: 50%;
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
