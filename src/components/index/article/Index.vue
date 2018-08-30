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
import data from "./data"
import SideTool from "./SideTool"
import Article from "./Article"
console.log(data);
export default {
  data() {
    return {
      d: data
    }
  },
  components: {
    SideTool,
    AritcleSingle: Article
  }
}

</script>
