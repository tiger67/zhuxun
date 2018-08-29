<template>
  <div class="recommend-lists">
    <router-link v-for="com in lists" target="_blank" :key="com.name" to="/404" class="recommend-lists-cl">
      <img :src='com.img'>
      <div class="name">{{com.name}}</div>
    </router-link>
    <router-link class="recommend-lists-more" to="/404">
      更多热门专题<i class="iconfont ic-link"></i>
    </router-link>
  </div>
</template>
<style>
.recommend-lists-more {
  line-height: 32px;
  color: #787878;
}

.recommend-lists {
  margin-bottom: 20px;
}

.recommend-lists img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  border: 0;
}

.recommend-lists>.recommend-lists-cl {
  display: inline-block;
  margin: 0 22px 18px 0px;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
}

.recommend-lists .name {
  display: inline-block;
  padding: 0 12px 0 6px;
  font-size: 14px;
}

</style>
<script>
const abaseurl = "../../assets/home/recommend";
var datalist = [{
  img: require(`../../assets/home/recommend/gushi.jpg`),
  url: '/',
  name: "故事"
}, {
  img: require(`../../assets/home/recommend/shouhui.jpg`),
  url: '/',
  name: "手绘"
}, {
  img: require(`../../assets/home/recommend/flw.jpg`),
  url: '/',
  name: "@IT·互联网"
}, {
  img: require(`../../assets/home/recommend/dushu.jpg`),
  url: '/',
  name: "读书"
}, {
  img: require(`../../assets/home/recommend/zrkp.jpg`),
  url: '/',
  name: "自然科普"
}, {
  img: require(`../../assets/home/recommend/jsdy.jpg`),
  url: '/',
  name: "简书电影"
}, {
  img: require(`../../assets/home/recommend/sheying.jpg`),
  url: '/',
  name: "摄影"
}]
export default {
  data() {
    return {
      //lists: [datalist[1]]
      lists: datalist
    }
  }

}

</script>
