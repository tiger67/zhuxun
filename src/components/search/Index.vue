<template>
  <div class="search-page">
    <div class="s-wrap">
      <div class="w m0a">
        <form class="search-form">
          <input type="text" class="search-box" v-model="s.key" @keyup.enter="searchpath">
          <input type="text" style="display:none">
          <i class="iconfont ic-search"></i>
        </form>
      </div>
    </div>
    <div class="search-content clear">
      <div class="sc-left w-s">
        <router-link :to="`/search/article${s.key ? '/'+s.key : ''}`" class="toggle-s-btn"><i class="iconfont ic-articles"></i>文章</router-link>
        <router-link :to="`/search/writer${s.key ? '/'+s.key : ''}`" class="toggle-s-btn"><i class="iconfont ic-search-user"></i>用户</router-link>
        <div class="s-hr"></div>
        <div>
          <div class="hot-s-title"><span>热门搜索 </span>
            <!--  <a href="javascript:void(0);"><i class="iconfont ic-search-change"></i>换一批</a> -->
          </div>
          <ul class="hot-search">
            <tag v-for="(tag,i) in taglists" :key="i">
              <a href="javascript:void(0);">{{tag}}</a>
            </tag>
          </ul>
        </div>
      </div>
      <div class="sc-right w-b">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Tag from "@/components/common/Tag"
import search from "./searchData"
import API from "@/api"

export default {
  data() {
    return {
      taglists: [],
      s: search
    }
  },
  mounted() {
    this.s.key = this.$route.params.key;
    this.searchKeyword();
  },
  methods: {
    searchpath() {
      if (this.s.key) {
        this.$router.push({ path: '/search/article' + this.s.key ? '/' + this.s.key : '' });
      }
    },
    searchKeyword() {
      API["get/api/tag/searchKeyword"]().then(res => {
        //console.log(res);
        this.taglists = res.data.data;
      })
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
  .tag {
    float: left;
    padding: 8px 12px;
    background-color: #eee;
    margin: 10px;
    border-radius: 4px;

    a {
      color: #343434;
    }
    &:hover {
      /* box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1); */
      box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
    }
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
        .tag {
          margin: 8px;
        }
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
