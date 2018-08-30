<template>
  <div class="home-activity">
    <h5 class="home-title">
      最新活动
      <router-link to="/">详细信息<i class="iconfont ic-link"></i></router-link>
    </h5>
    <img src="@/assets/home/index/10.png" alt="">
    <div class="desc">
      <h6>活动内容：2018建筑中国品牌沙龙之“微博营销助力设计企业品牌提升”专题活动</h6>
      <span>时间：2018-09-15  09:00-17:00</span>
      <br/>
      <span>地点：全国</span>
    </div>
  </div>
</template>
<style lang="scss">
.home-activity {
  padding-bottom: 3px;
  margin-bottom: 30px;
  .desc {
    padding: 10px;
    background-color: #fafafa;
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
  }
  .home-title {
    margin-bottom: 20px;
  }
}

</style>
