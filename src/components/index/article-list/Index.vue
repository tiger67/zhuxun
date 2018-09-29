<template>
  <div class="atc-list-page">
    <div class="nav">
      <router-link to="/">CLUB <i class="iconfont ic-next-s"></i></router-link>
      <router-link to="/" v-if="head.fuName">{{head.fuName}} <i class="iconfont ic-next-s"></i></router-link>
      <router-link to="/" v-if="head.ziName">{{head.ziName}} <i class="iconfont ic-next-s"></i></router-link>
    </div>
    <paging class="w-b left-atc clear" @getDataList="getdata" :pageSize="5">
      <local-header :head="head" />
      <article-unit v-for="(a,i) in lists" :a="a" :showimg="undefined" :key="i" />
    </paging>
    <right class=" w-s" />
  </div>
</template>
<style lang="scss">
.atc-list-page {
  * {
    box-sizing: border-box;
  }
  .left-atc {
    float: left;
  }
  .nav {
    line-height: 60px;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 25px;
    a {
      &:last-child {
        .iconfont {
          display: none;
        }
      }
    }
  }
}

</style>
<script>
import API from "@/api"
import Header from "./Header"
import Right from "./Right"
import ArticleUnit from "../../common/Article"
import Paging from "@/components/common/Paging"
export default {
  data() {
    return {
      lists: [],
      head: {},
      type: 1
    }
  },
  // { url: "/api/club/ta/list", method: "get", params: ["startPage", "pageSize", "tagId", "type"] }, // { url: "/api/club/ta/tagCard", method: "get", params: ["tagId"] },

  mounted() {
    API['get/api/club/ta/tagCard']({ tagId: this.$route.params.id }).then(res => {
      if (res.data.code === 0) {
        console.log(res.data.data);
        this.head = res.data.data;
        this.type = this.head.ziName ? 1 : 0;
      }
    })
  },
  methods: {
    getdata({ startPage, pageSize }, cb) {
      API['get/api/club/ta/list']({ startPage, pageSize, tagId: this.$route.params.id, type: this.type }).then(res => {
        if (res.data.code === 0) {
          this.lists.push(...res.data.data);
          cb(res.data.data.length);
        }
      })
    }
  },
  components: {
    localHeader: Header,
    ArticleUnit,
    Right,
    Paging
  }
}

</script>
