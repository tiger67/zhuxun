<template>
  <div class="atc-page">
    <side-tool />
    <aritcle-single :atc="d" />
  </div>
</template>
<style lang="scss">
.atc-page {
  margin: 30px auto;
  max-width: 800px;
}

</style>
<script>
import data from "../data"
import SideTool from "../SideTool"
import Article from "../Article"
import API from "@/api"
import api from "../api"

export default {
  data() {
    return {
      d: {}
    }
  },
  created() {
    data.type = 0;
  },
  mounted() {
    var id = this.$route.params.id;
    data.id = id;
    API["get/api/userPage/article"]({ articleId: id }).then(res => {
      if (res.data.code === 0) {
        var atc = res.data.data;
        this.d = {
          ...atc
        }
      }
    })

    //"startPage", "pageSize", "articleId", "type", "sort"
    /*
  文章评论列表
  startPage:起始页数,1为第一页;pageSize:每页数量,最多20条记录;articleId:文章id;type:类型，0文章，1快讯
  sort:排序方式，0倒序，1正序
   */
    /* API["get/api/comment/list"]({ startPage: 1, pageSize: 10, articleId: id, type: 0, sort: 0 }).then(res => {
       if (res.data.code === 0) {
         //console.log(res);
         this.d.comments = res.data.data;
       }
     })*/
  },
  components: {
    SideTool,
    AritcleSingle: Article,
  }
}

</script>
