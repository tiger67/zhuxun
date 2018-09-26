<template>
  <div class="sch-wrt">
    <div class="sch-msg-tip">
      含“LOFT”的搜索结果约 13
    </div>
    <div class="wrt-lists clear">
      <writer-card v-for="(w,i) in lists" :writer="w" :key="i" @follow="followRun" />
    </div>
  </div>
</template>
<style lang="scss">
.sch-wrt {
  .wrt-lists {
    border: 0px solid green;
    margin-right: -3.0232558139535%;
    ;
    margin-left: -3.0232558139535%;
    ;
  }
}

</style>
<script>
import search from "./searchData"
import WriterCard from "../common/WriterCard"
import API from "@/api"
export default {
  data() {
    return {
      lists: [],
      s: search
    }
  },
  components: {
    WriterCard
  },
  mounted() {
    this.s.key = this.$route.params.key;
    this.search();
  },
  methods: {
    followRun(w, flag) {
      let index = this.lists.indexOf(w);
      var newone = {
        ...w
      }
      newone.followed = flag;
      this.lists.splice(index, 1, newone)
    },
    search() {
      API["get/api/search/searchUser"]({ pageCurrent: 1, pageSize: 10, key: this.s.key }).then(res => {
        //console.log(res);
        if (res.data.code === 0) {
          this.lists = res.data.data.pageData;
        }
      })
    }
  }
}

</script>
