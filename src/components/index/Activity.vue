<template>
  <div class="home-activity">
    <h5 class="home-title">
      最新活动
      <router-link :to="a.url||'/'">详细信息<i class="iconfont ic-link"></i></router-link>
    </h5>
    <img v-if="a.thumbnail" :src="a.thumbnail" alt="">
    <img v-else src="@/assets/home/index/10.png" alt="">
    <div class="desc">
      <h6>活动内容：{{a.title}}{{a.description}}</h6>
      <span>时间：{{a.start ||'2018-09-15  09:00-17:00'}}</span>
      <br/>
      <span>地点：{{a.city}}</span>
    </div>
  </div>
</template>
<script>
import API from "@/api"
export default {
  data() {
    return {
      a: {}
    }
  },
  mounted() {
    API["get/api/newActivity"]().then(res => {
      if (res.data.code === 0) {
        this.a = res.data.data;
      }
    })
  }
}

</script>
<style lang="scss">
.home-activity {
  padding-bottom: 3px;
  margin-bottom: 30px;
  .desc {
    padding: 15px;
    /*  background-color: #fafafa; */
    border: 1px solid #f0f0f0;
    font-size: 13px;
    h6 {
      line-height: 24px;
      color: #333;
      font-size: 13px;
      font-weight: 600;
    }
    span {
      display: inline-block;
      margin-top: 10px;
      color: #666;
    }
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }
  .home-title {
    margin-bottom: 20px;
  }
}

</style>
