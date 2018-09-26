<template>
  <div class="sch-atc">
    <div class="sch-msg-tip">
      含“LOFT”的搜索结果约 13
    </div>
    <div class="article-lists">
      <article-unit v-for="(a,i) in lists" :a="a" :showimg="false" :key="a.userId" />
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
import API from "@/api"
import search from "./searchData"
import ArticleUnit from "../common/Article"
export default {
  data() {
    return {
      lists: [],
      s: search
    }
  },
  mounted() {
    this.s.key = this.$route.params.key;
    this.search();
  },
  methods: {
    search() {
      API["get/api/search/searchArticle"]({ pageCurrent: 1, pageSize: 10, key: this.s.key }).then(res => {
        console.log(res);
        if (res.data.code === 0) {
          //this.lists = res.data.data;
          this.lists = res.data.data.pageData || [];
        }
      })
    }
  },
  components: {
    ArticleUnit
  }
}

</script>
