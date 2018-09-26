<template>
  <div class="h-writer-page">
    <h2 class="header">全部作者</h2>
    <paging class="h-w-p-con" @getDataList="getData" :pageSize="3">
      <!--  {{getlists}} -->
      <div class="wrt-lists clear">
        <writer-card v-for="(w,i) in lists" :writer="w" :key="w.userId" />
      </div>
      <!-- @follow="followRun" -->
    </paging>
  </div>
</template>
<script>
import API from "@/api"
import sign from "data"
import WriterCard from "../../common/WriterCard"
import Paging from "@/components/common/Paging"
export default {
  data() {
    return {
      lists: []
    }
  },
  components: {
    WriterCard,
    Paging
  },
  computed: {
    /* getlists: function() { sign.isSignIned ? this.getData() : this.getData(); }
     */
  },
  methods: {
    getData({ startPage, pageSize }, cb) {
      API["get/api/author/page"]({ startPage, pageSize }).then(res => {
        /*console.log(res);*/
        this.lists.push(...res.data.data);
        cb(res.data.data.length)

      })
    }
  }
}

</script>
<style lang="scss">
.h-writer-page {
  * {
    box-sizing: border-box;
  }
  .header {
    position: absolute;
    left: 0;
    top: 60px;
    right: 0;
    height: 180px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    width: 100%;
    line-height: 180px;
    background: url(~@/assets/home/index/writer-header.png) center center;
  }
  .h-w-p-con {
    width: 76.666666666667%;
    border: 0px solid red;
    margin: 180px auto;
    .wrt-lists {
      border: 0px solid green;
      /* margin-right: -3.0232558139535%;
      margin-left: -3.0232558139535%; */
      margin-right: -4.1552173913043%;
      margin-left: -4.1552173913043%;
      .writer-card {
        padding-right: 4.1552173913043%;
        padding-left: 4.1552173913043%;
      }
    }
  }
}

</style>
