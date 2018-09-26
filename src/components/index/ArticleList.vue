<template>
  <div class="home-atc-p">
    <h5 class="home-title">筑讯推荐</h5>
    <div class="atc-hr-line"></div>
    <paging @getDataList="getdata" :pageSize="5">
      <article-unit v-for="(a,i) in lists" :a="a" :showimg="true" :key="i" />
    </paging>
  </div>
</template>
<script>
import API from "@/api"
import ArticleUnit from "../common/Article"
import Paging from "@/components/common/Paging"
export default {
  data() {
    return {
      lists: []
    }
  },
  methods: {
    getdata({ startPage, pageSize }, cb) {
      API["get/api/home/recommendArticle"]({ startPage, pageSize }).then(res => {
        if (res.data.code === 0) {
          var data = res.data.data;
          cb(data.length);
          this.lists.push(...res.data.data);
        }
      })
    }
  },
  components: {
    ArticleUnit,
    Paging
  }
}

</script>
<style lang="scss">
.home-atc-p {
  .atc-hr-line {
    margin: 15px 0 20px;
    border-top: 1px solid #f0f0f0;
  }
  .load-all-msg {
    text-align: center;
    margin: 100px auto;
  }
}

</style>
