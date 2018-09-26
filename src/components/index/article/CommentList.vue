<template>
  <div class="comments-list-w">
    <div class="hd-title">
      <span ref="init">{{d.commentSum}}条评论</span>
      <div class="hd-title-r">
        <a href="javascript:void(0);" ref="getdataA" @click="putsort(0)" :class="{active:sort==0}">按照时间倒序</a>
        <a href="javascript:void(0);" ref="getdataB" @click="putsort(1)" :class="{active:sort==1}">按照时间正序</a>
      </div>
    </div>
    <paging class="comments-list-content" @getDataList="getdata" :pageSize="3">
      <comment-line v-for="(cmt,i) in comments" :key="cmt.id" :cmt="cmt" :mindex="i" />
    </paging>
  </div>
</template>
<script>
import Paging from "@/components/common/Paging"
import CommentLine from "./CommentLine"
import api from "./api"
import data from "./data"
export default {
  props: {
    comments: Array,
  },
  data() {
    return {
      sort: data.sort,
      d: data,
    }
  },
  components: {
    CommentLine,
    Paging
  },
  mounted() {
    var id = this.$route.params.id
    api.commentsum(id);
  },
  methods: {
    getdata({ startPage, pageSize }, cb) {
      api.getcomments({ id: this.$route.params.id, cb, startPage, pageSize });
    },
    putsort(s) {
      if (data.sort == s) {
        return;
      }
      this.sort = s;
      data.sort = this.sort;
      this.$paging.init();
      //api.getcomments();
    }
  }
}

</script>
<style lang="scss">
.comments-list-w {
  margin-top: 40px;
  padding-bottom: 200px;
  .comments-list-content {
    /* border: 2px solid red; */
    min-height: 400px;
  }
  .hd-title {
    padding-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
    span {
      vertical-align: middle;
    }
    .hd-title-r {
      float: right;
      a {
        margin-left: 10px;
        font-size: 12px;
        font-weight: 400;
        color: #969696;
        display: inline-block;
        &.active {
          color: #222;
        }
      }
    }
  }
}

</style>
