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
    data.type = 1;
  },
  mounted() {
    var id = this.$route.params.id;
    data.id = id;
    API["get/api/hotNews/info"]({ newsId: id }).then(res => {
      if (res.data.code === 0) {
        var atc = res.data.data
        this.d = {
          ...atc
        }
      }
    })
  },
  components: {
    SideTool,
    AritcleSingle: Article,
  }
}

</script>
