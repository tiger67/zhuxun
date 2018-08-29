<template>
  <div class="hot-tag">
    <h5 class="home-title">
      热门标签
      <router-link to="/tag">更多标签<i class="iconfont ic-link"></i></router-link>
    </h5>
    <ul class="clear">
      <tag v-for="(t,i) in taglists" :name="t.name" :url="t.url" :key="i" />
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
  font-size:14px;
  margin-bottom:30px;
}

</style>
<script>
import Tag from "../common/Tag";
export default {
  data() {
    return {
      taglists: [
        { name: "室内设计", url: "/" },
        { name: "建筑设计", url: "/" },
        { name: "证书", url: "/" },
        { name: "房地产", url: "/" },
        { name: "工程造价", url: "/" },
        { name: "电气工程", url: "/" },
        { name: "BIM等级考试", url: "/" }
      ]
    }
  },
  components: {
    Tag
  },
  methods: {

  }
}

</script>
