<template>
  <div class="atc-list-page">
    <div class="nav">
      <router-link to="/">CLUB <i class="iconfont ic-next-s"></i></router-link>
      <router-link to="/">艺术设计 <i class="iconfont ic-next-s"></i></router-link>
      <router-link to="/">室内设计 <i class="iconfont ic-next-s"></i></router-link>
    </div>
    <div class="header">
    </div>
    <div class="wrap">
      <article-unit v-for="(a,i) in lists" :article="a" :showimg="true" :key="i" />
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
    a {
      &:last-child {
        .iconfont {
          display: none;
        }
      }
    }
  }
  .header {
    height: 100px;
  }
  .wrap {
    width: 71.666666666667%;
    padding-right: 10px;
    border-top: 1px solid #f5f5f5;
  }
}

</style>
<script>
import ArticleListData from "../article-list-data";
import ArticleUnit from "../../common/Article"
export default {
  data() {
    return {
      lists: ArticleListData
    }
  },
  components: {
    ArticleUnit
  }

}

</script>
