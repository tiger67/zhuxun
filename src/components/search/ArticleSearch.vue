<template>
  <div class="sch-atc">
    <div class="sch-msg-tip">
      含“LOFT”的搜索结果约 13
    </div>
    <div class="article-lists">
      <article-unit v-for="(a,i) in lists.slice(0,10)" :article="a" :showimg="false" :key="i" />
    </div>
  </div>
</template>
<style lang="scss">
$home-color:#333;
.sch-atc {
  .sch-msg-tip {
    color: #999;
    margin-bottom: 15px;
  }
}

</style>
<script>
import ArticleListData from "../index/article-list-data";
import ArticleUnit from "../common/Article"
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
