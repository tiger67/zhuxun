<template>
  <div class="home">
    <div class="left-m w-b">
      <swiper />
      <!-- <recommend-subject />
      <div class="split-line"></div> -->
      <article-list/>
    </div>
    <div class="right-m w-s">
      <activity />
      <app-share />
      <hot-info />
      <hot-tag />
      <recommend-author />
    </div>
  </div>
</template>
<style lang="scss">
.home {
  * {
    box-sizing: border-box;
  }

  .split-line {
    margin: -5px 0 15px;
    border-top: 1px solid #f0f0f0;
  }

  .left-m {
    float: left;
    /* width: 66.66667%; */
    /*  width: 860px; */
    /*  border: 1px solid #ccc; */
    padding-top: 30px;
    /*  padding-left: 15px; */
  }

  .right-m {
    float: right;
    /*  margin-left: 4.16667%; */
    /* width: 29.16667%; */
    /*  width: 300px; */
    padding: 30px 0 0;
  }

  .home-title {
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    font-weight: 600;
    color: #333;
    line-height: 20px;
    border-left: 6px solid rgba(255, 200, 31, 1);
    margin-bottom: 20px;
    a {
      float: right;
      font-size: 14px;
      color: #666;
    }
  }
}

</style>
<script>
import API from "@/api"
import Swiper from "./Swiper"
import RecommendSubject from "./RecommendSubject"
import RecommendAuthor from "./RecommendAuthor"
import ArticleList from "./ArticleList"
import AppShare from "./AppShare"
import Activity from "./Activity"
import HotInfo from "./HotInfo"
import HotTag from "./HotTag"
import data from "data"
//console.log(API);
/* 15823233290
 */

/*API["post/api/sendSmsVerifyCode"]({ mobile: "15823233292", type: 1 }).then(function(res, error) { console.log(res); if (res.data.code == 0) { API["post/api/u/register"]({ nickName: "百度百科2", password: "123456", mobile: "15823233292", smsCode: "666666" }).then(function(res, error) { console.log(error); console.log(res); }) } })
 */
/*API["post/api/u/login"]({
  password: "e10adc3949ba59abbe56e057f20f883e",
  mobile: "13510022050",
}).then(function(res, error) {
  console.log(error)
  console.log(res)
})*/
export default {
  components: {
    Swiper,
    RecommendSubject,
    RecommendAuthor,
    ArticleList,
    Activity,
    AppShare,
    HotInfo,
    HotTag
  }
}

</script>
