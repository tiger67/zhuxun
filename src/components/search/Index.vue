<template>
  <div class="search-page">
    <div class="s-wrap">
      <div class="w m0a">
        <form class="search-form">
          <input type="text" class="search-box">
          <i class="iconfont ic-search"></i>
        </form>
      </div>
    </div>
    <div class="search-content clear">
      <div class="sc-left">
        <router-link to="/search/article" class="toggle-s-btn"><i class="iconfont ic-articles"></i>文章</router-link>
        <router-link to="/search/writer" class="toggle-s-btn"><i class="iconfont ic-search-user"></i>用户</router-link>
        <div class="s-hr"></div>
        <div>
          <div class="hot-s-title"><span>热门搜索 </span>
            <a href="javascript:void(0);"><i class="iconfont ic-search-change"></i>换一批</a>
          </div>
          <ul class="hot-search">
            <tag v-for="(t,i) in taglists" :name="t.name" :url="t.url" :key="i" />
          </ul>
        </div>
      </div>
      <div class="sc-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Tag from "../common/Tag"
export default {
  data() {
    return {
      taglists: [
        { name: "证书", url: "/" },
        { name: "区块链", url: "/" },
        { name: "一个会所", url: "/" },
        { name: "二级建造师培训", url: "/" },
        { name: "毕业", url: "/" },
        { name: "理财", url: "/" },
        { name: "o2o", url: "/" }
      ]
    }
  },
  components: {
    Tag
  }
}

</script>
<style lang="scss">
.search-page {
  * {
    box-sizing: border-box;
  }
  .clear {
    &:after,
    &:before {
      display: table;
      content: "";
      clear: both;
    }
  }
  .s-hr {
    border-top: 1px solid #eee;
  }
  .search-content {
    margin-top: 160px;

    .sc-left {
      width: 25%;
      float: left;
      height: 800px;
      .hot-s-title {
        width: 100%;
        margin: 20px 0;
        color: #999;
        font-size: 13px;
        a {
          float: right;
          color: #999;
          margin-right: 2px;
          i {
            margin-right: 3px;
          }
        }
      }
      .hot-search {
        margin-left: -8px;
        margin-right: -8px;
      }

      .hot-search-link {
        float: left;
        padding: 8px 12px;
        background-color: #eee;
        margin: 8px;
      }
      .s-hr {
        margin-top: 20px;
      }
      .toggle-s-btn {
        display: block;
        width: 100%;
        height: 68px;
        padding: 23px 18px;
        font-size: 16px;
        i {
          margin-right: 10px;
        }
      }
      .toggle-s-btn.exact-active {
        background-color: #eee;
      }
    }
    .sc-right {
      float: right;
      width: 71.666666666667%;
      /*  height: 600px; */
      /*  border: 5px solid red; */
    }
  }
  .s-wrap {
    background-color: #fafafa;
    position: absolute;
    width: 100%;
    left: 0;
    top: 60px;
    .search-form {
      margin: 30px auto;
      width: 66.666666666667%;
      height: 60px;
      padding: 15px 50px 15px 20px;
      line-height: 30px;
      position: relative;
      background-color: #fff;
      border: 1px solid rgba(238, 238, 238, 1);
      .search-box {
        padding: 5px 0;
        width: 100%;
        font-size: 15px;
        outline: none;
        border: none;
      }
      i {
        right: 20px;
        top: 15px;
        font-size: 20px;
        position: absolute;
      }
    }
  }
}

</style>
