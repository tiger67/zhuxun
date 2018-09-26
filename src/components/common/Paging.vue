<template>
  <div>
    <slot />
    <div v-if="!hasNotMore">
      <div class="load-more-btn slide-to-top" v-if="!isEnd" @click="loadmore">加载更多</div>
      <div class="has-load-all slide-to-top" v-else>已加载完</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageSize: Number,
    hasNotMore: Boolean,
  },
  data() {
    return {
      startPage: 1,
      isEnd: false,
    }
  },
  mounted() {
    this.hasmore = true;
    this.$parent.$paging = this;
    this.init();

  },
  methods: {
    init() {
      this.isEnd = false;
      this.startPage = 1;
      this.$emit("getDataList", { startPage: this.startPage, pageSize: this.pageSize }, this.cb);
    },
    loadmore() {
      if (!this.isEnd) {
        this.startPage = this.startPage + 1;
        this.$emit("getDataList", { startPage: this.startPage, pageSize: this.pageSize }, this.cb);
      }
    },
    cb(datalength) {
      if (datalength < this.pageSize) {
        this.isEnd = true;
      }
    }
  }
}

</script>
<style lang="scss">
.has-load-all {
  text-align: center;
  margin: 100px auto;
}

</style>
