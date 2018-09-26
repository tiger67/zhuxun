<template>
  <div class="hot-info">
    <h5 class="home-title">
        热点资讯
      <router-link to="/news">更多资讯<i class="iconfont ic-link"></i></router-link>
    </h5>
    <ul>
      <li class="info-line" v-for="f in lists.slice(0,8) ">
        <router-link :to="`/info-article/${f.articleId}`"><span class="time">{{f.publishTime|parse}}</span> {{f.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.hot-info {
  line-height: 1.5;
  margin-bottom: 30px;
  ul {
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
  }
  .info-line {
    padding-left: 68px;
    margin-bottom: 13px;
    position: relative;
    .time {
      color: #999;
      position: absolute;
      left: 0;
      top: 0;
      font-size: 12px;
    }
  }
}

@media (max-width: 1092px) {
  .hot-info {
    font-size: 13px;
  }
}

</style>
<script>
import Time from "../common/utils/time"
import API from "@/api"
export default {
  data() {
    return {
      lists: [

      ]
    }
  },
  mounted() {
    API["get/api/hotNews/page"]({ startPage: 1, pageSize: 10 }).then(res => {
     /* if (res.data.code === 0) { console.log(res.data) }
*/
       this.lists = res.data.data;
    })
  },
  filters: {
    parse: Time.parse
  }
}

</script>
