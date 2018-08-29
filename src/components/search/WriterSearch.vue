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
import datalist from "./data"
import WriterCard from "../common/WriterCard"
export default {
  data() {
    return {
      lists: datalist
    }
  },
  components: {
    WriterCard
  },
  methods: {
    followRun: function(w, flag) {
      let index = this.lists.indexOf(w);
      var newone = {
        ...w
      }
      newone.followed = flag;
      this.lists.splice(index, 1, newone)

    }
  }
}

</script>
