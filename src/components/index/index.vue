<template>
  <div class="home">
    <div class="left-m w-b">
      <swiper />
      <!-- <recommend-subject />
      <div class="split-line"></div> -->
      <article-list/>
    </div>
    <div class="right-m w-s clear">
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
<<<<<<< HEAD
    * {
        box-sizing: border-box;
    }

    .split-line {
        margin: -5px 0 15px;
        border-top: 1px solid #f0f0f0;
    }

    .left-m {
        float: left;
        /*  */
        width: 66.66667%;
        /*  width: 860px; */
        /* width: 71.666666666667%; */
        /*  border: 1px solid #ccc; */
        padding-top: 30px;
        /*  padding-left: 15px; */
    }

    .right-m {
        float: right;
        /*  margin-left: 4.16667%; */
        /*  */
        width: 29.16667%;
        /*  width: 300px; */
        /*  width: 25%; */
        padding: 30px 0 0;
    }
=======
  * {
    box-sizing: border-box;
  }
  min-height:1200px;
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
    padding: 30px 0 100px;
  }
>>>>>>> 48f9a81ddad02d9a8de9a3ad3e4819e31992f88b

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
