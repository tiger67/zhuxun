<template>
  <div class="home-atc-p">
    <h5 class="home-title">筑讯推荐</h5>
    <div class="atc-hr-line"></div>
    <div>
      <article-unit v-for="(a,i) in lists.slice(0,10)" :article="a" :showimg="true" :key="i" />
    </div>
  </div>
</template>
<style lang="scss">
$home-color:#333;
.home-atc-p {
  .atc-hr-line {
    margin: 15px 0 20px;
    border-top: 1px solid #f0f0f0;
  }
}

</style>
<script>
import ArticleListData from "./article-list-data";
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
