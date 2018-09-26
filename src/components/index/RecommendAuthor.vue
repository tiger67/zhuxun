<template>
  <div class="home-cmd-user">
    <div class="hcu-hd">
      <span>推荐作者</span>
      <a class="change-btn" href="javascript:void(0);" @click="fresh">
        <i class="iconfont ic-search-change"></i>换一批</a>
    </div>
    {{getlists}}
    <paging @getDataList="getData" :pageSize="5" :hasNotMore="true">
      <ul class="hcu-lists">
        <author-line v-for="a in lists" :writer="a" :key="a.userId" />
      </ul>
    </paging>
    <router-link class="get-more" to='/writer'>
      全部作者
      <i class="iconfont ic-link"></i>
    </router-link>
  </div>
</template>
<script>
import API from "@/api"
import sign from "data"
import AuthorLine from "./AuthorLine"
import Paging from "@/components/common/Paging"
export default {
  data() {
    return {
      lists: []
    }
  },
  components: {
    AuthorLine,
    Paging
  },
  mounted() {
    //this.$paging.init();
  },
  computed: {
    getlists: function() {
      //sign.isSignIned ? console.log(this.$paging) : console.log(this);
      /* if (this.$paging) {
         sign.isSignIned ? this.$paging.init() : this.$paging.init();
       }*/
      //sign.isSignIned ? this.$paging.init() : this.$paging.init();
    }
  },
  methods: {
    getData({ startPage, pageSize }, cb) {
      API["get/api/author/page"]({ startPage, pageSize }).then(res => {
        var lists = res.data.data;
        /*lists.forEach((item) => { item.followed = false; })*/
        this.lists = lists;
        /*if (lists.length < pageSize) { this.$paging.init(); }
         */
        cb && cb(lists.length);
      })
    },
    fresh: function() {
      this.$paging.loadmore();
    }
  }
}

</script>
<style lang="scss">
.home-cmd-user {
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  position: relative;
  .get-more {
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }

  a {
    cursor: pointer;
  }
  .change-btn {
    float: right;
    display: inline-block;
    font-size: 14px;
    color: #969696;
    i {
      margin-right: 3px;
    }
  }

  .hcu-hd {
    font-size: 14px;
    color: #969696;
    text-align: left;
  }

  .hcu-lists {
    margin: 0 0 20px;
    text-align: left;
  }
}

</style>
