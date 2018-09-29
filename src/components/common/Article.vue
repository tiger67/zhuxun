<template>
  <div class="atc-unit slide-to-top" :class="{hasimg:showimg || (showimg===undefined && a.thumbnail) }">
    <!-- && article.img -->
    <router-link class="img-wrap" to="/">
      <!-- <img src="@/assets/home/index/c.png"  /> -->
      <img :src="a.thumbnail" />
      <router-link to="/article-list" class="atc-img-tag">{{a.tagName||a.author}}</router-link>
    </router-link>
    <div class="atc-unit-c">
      <div class="atc-unit-c-inner">
        <router-link :to="`/article/${a.id}`" class="title" v-html="a.title"></router-link>
        <p class="abstract" v-html="a.introduce"></p>
        <div class="meta">
          <router-link target="_blank" to="/myCenter" class="avatar">
            <img :src="a.photoUrl||a.photo" alt="">{{a.userName||a.author}}
          </router-link>
          <a href="javascript:void(0)">
            <i class='spicon' :class="{v1:a.user_type===1,v2:a.user_type===0}"></i> {{a.publishTime | parse}}</a>
          <a href="javascript:void(0)">
            <i class='iconfont ic-list-read'></i> {{a.browseCnt||a.browseLog||0}}
          </a>
          <a href="javascript:void" @click.prevent="addLove(a)" :class={isloveing:a.isloveing}>
            <i class='iconfont ic-list-like'></i> {{a.collectCnt||a.collectLog||0}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Time from "../common/utils/time"
export default {
  props: {
    a: Object,
    showimg: Boolean
  },
  data() {
    return {}
  },
  filters: {
    parse: Time.parse
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
    &:hover {
      .atc-img-tag {
        background-color: rgba(0, 0, 0, .6);
        color: rgba(255, 255, 255, 1);
      }
    }
    .atc-img-tag {
      width: 64px;
      height: 25px;
      /* background: rgba(255, 200, 31, 1); */
      /* background-color: rgba(0, 0, 0, .35); */
      /* background-color: rgba(255, 200, 31, .7); */
      background-color: rgba(0, 0, 0, .2);
      color: rgba(255, 255, 255, .6);
      /* border-radius: 14px; */
      text-align: center;
      line-height: 25px;
      font-size: 12px;
      position: absolute;
      left: 0px;
      top: 0px;
      transition: background-color, color .75s;
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
    .spicon {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      position: relative;
      top: -2px;
      &.v1 {
        background: url('~@/common/img/v1.png') center center no-repeat;
      }

      &.v2 {
        background: url('~@/common/img/v2.png') center center no-repeat;
      }
    }

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
