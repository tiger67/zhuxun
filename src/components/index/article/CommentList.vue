<template>
  <div class="comments-list-w">
    <div class="hd-title">
      <span>56条评论</span>
      <div class="hd-title-r">
        <a href="javascript:void">按照时间倒序</a>
        <a href="javascript:void">按照时间正序</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.comments-list-w {
  margin-top: 40px;
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
        color: #666;
        display: inline-block;
      }
    }
  }
}

</style>
<script>
import data from "data"
export default {
  props: {

  },
  data() {
    return {

    }
  }
}

</script>
