<template>
  <div class="hot-info">
    <h5 class="home-title">
        热点资讯
      <router-link to="/article-list">更多资讯<i class="iconfont ic-link"></i></router-link>
    </h5>
    <ul>
      <li class="info-line" v-for="f in lists.slice(0,10) ">
        <router-link :to="f.url"><span class="time">{{f.time}}</span> {{f.info}}</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.hot-info {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 30px;
  ul {
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
  }
  .info-line {
    padding-left: 62px;
    margin-bottom: 13px;
    position: relative;
    .time {
      color: #999;
      position: absolute;
      left: 0;
      top: 0
    }
  }
}

</style>
<script>
export default {
  data() {
    return {
      lists: [
        { time: "1小时前", info: "把澡堂修在火车站里，坂茂设计日本女川町火车站正式启用", url: "/" },
        { time: "1小时前", info: "中金：上调阅文集团目标价，看涨逾20%", url: "/" },
        { time: "2小时前", info: "在“拆迁办”工作是一种什么体验", url: "/" },
        { time: "3小时前", info: "遍布镜面的科威特CreditOne大楼", url: "/" },
        { time: "3小时前", info: "沙托纳西恩小学/Savioz Fabrizzi建筑事务所", url: "/" },
        { time: "3小时前", info: "谷歌AI可为50种眼疾推荐治疗方案，准确率高达94%", url: "/" },
        { time: "5小时前", info: "特斯拉大股东富达基金二季度减持21%", url: "/" },
        { time: "5小时前", info: "二手书交易平台「阅邻」完成 A 轮融资%", url: "/" },
        { time: "5小时前", info: "二手书交易平台「阅邻」完成 A 轮融资%", url: "/" },
        { time: "5小时前", info: "二手书交易平台「阅邻」完成 A 轮融资%", url: "/" },
      ]
    }
  },


}

</script>
