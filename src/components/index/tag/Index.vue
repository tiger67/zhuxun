<template>
  <div class="h-tag-page m0a">
    <h2 class="header">热门标签</h2>
    <div class="h-tag-page-c">
      <div class="category " v-for="(c ,index) in categorylists">
        <h3 class="title">
         <img :src="c.Logo" alt="">  
         <span>{{c.tagName}}</span>
       </h3>
        <ul class="clear">
          <tag v-for="t in c.tagRspVos" :key="t.tagId" :tag="t" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import API from "@/api"
import Tag from "../../common/Tag"
export default {
  data() {
    return {
      categorylists: {}
    }
  },
  components: {
    Tag
  },
  mounted() {
    API["get/api/tag/all"]().then(res => {
      //console.log(res);
      if (res.data.code === 0) {
        this.categorylists = res.data.data
      }
    })
  }
}

</script>
<style lang="scss">
.h-tag-page {
  .header {
    position: absolute;
    left: 0;
    top: 60px;
    right: 0;
    height: 180px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    width: 100%;
    line-height: 180px;
    background: url('../../../assets/home/index/tag-header.png') center center;
  }
  .h-tag-page-c {
    margin-top: 190px;
  }
  .category {
    border: 0px solid red;
    .title {
      padding: 42px 0 11px;
      line-height: 32px;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid #f5f5f5;
      vertical-align: middle;
      margin-bottom: 15px;
      img {
        width: 32px;
        height: 32px;
        margin-right: 8px;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
  }
}

</style>
