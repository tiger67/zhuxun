<template>
  <div class="writer-pg">
    <img src="@/assets/home/writer-cmd/header.png" alt="">
    <router-link to="/" class="writer-pg-hd-link">
      <i class="iconfont ic-navigation-help"></i>如何成为签约作者
    </router-link>
    <div class="writer-card-panel">
      <writer-card v-for="(w,index) in lists" :writer="w" :key="index"></writer-card>
    </div>
  </div>
</template>
<style>
.writer-pg {
  position: relative;
  padding: 30px 0 50px;
  text-align: center;
  margin-left: -15px;
  margin-right: -15px;
}

.writer-pg>img {
  width: 100%;
  min-height: 100px;
  background-color: hsla(0, 0%, 71%, .2);
  border-radius: 6px;
}

.writer-pg-hd-link {
  position: absolute;
  right: 30px;
  top: 68px;
  color: #fff;
  font-size: 17px;
}

</style>
<script>
import datalists from "./data.js"
import WriterCard from "./WriterCard"
export default {
  data() {
    return {
      lists: datalists
    }
  },
  components: {
    WriterCard
  },
  methods: {

  }
}

</script>
