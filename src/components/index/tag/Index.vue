<template>
  <div class="h-tag-page m0a">
    <h2 class="header">热门标签</h2>
    <div class="h-tag-page-c">
      <div class="category " v-for="(c ,index) in categorylists">
        <h3 class="title">
         <img :src="c.img" alt="">  
         <span>{{c.name}}</span>
       </h3>
        <ul class="clear">
          <tag v-for="(t,i) in taglists" :name="t.name" :url="t.url" :key="i" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import cdata from "./data";
import Tag from "../../common/Tag"
export default {
  data() {
    return {
      ...cdata
    }
  },
  components: {
    Tag
  }
}

</script>
<style lang="scss">
@import "@/components/index/tag/index.scss";

</style>
