<template>
  <div class="hot-tag">
    <h5 class="home-title">
      热门标签
      <router-link to="/tag">更多标签<i class="iconfont ic-link"></i></router-link>
    </h5>
    <ul class="clear">
      <tag v-for="(t,i) in taglists" :key="t.tagId" :tag="t" />
    </ul>
  </div>
</template>
<style lang="scss">
.hot-tag {
  &:before,
  &:after {
    display: table;
    content: '';
    clear: both;
  }
  ul {
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 5px;
  }
  margin-bottom:30px;
  .tag {
    margin: 8px;
  }
}

</style>
<script>
import API from "@/api"
import Tag from "../common/Tag";
export default {
  data() {
    return {
      taglists: []
    }
  },
  mounted() {
    API["get/api/tag/recommend"]().then(res => {
      console.log(res);
      if (res.data.code === 0) {
        this.taglists = res.data.data;
      }
    })
  },
  components: {
    Tag
  },
  methods: {

  }
}

</script>
