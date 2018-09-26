<template>
  <form class="nav-search-wrap" onsubmit="return false;">
    <input id="nav-search-input" v-model="s.key" placeholder="搜索" type="text" @keyup.enter="searchpath">
    <router-link to="/search/article"><i class="iconfont ic-search"></i></router-link>
  </form>
</template>
<script>
import search from "../search/searchData"
export default {
  data() {
    return {
      s: search
    }
  },
  methods: {
    searchpath() {
      if (this.s.key) {
        this.$router.push({ path: '/search/article' + (this.s.key ? '/' + this.s.key : '') });
      }
    }
  }
}

</script>
<style lang="scss">
.nav-search-wrap {
  line-height: 20px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, .1);
  margin: 9px 15px;
  padding: 5px 10px 5px 20px;
  background-color: rgba(255, 255, 255, .1);
  box-sizing: border-box;
  #nav-search-input {
    width: 107px;
    line-height: 22px;
    outline: none;
    border: none;
    font-size: 14px;
    background-color: transparent;
    color: #999;
    transition: width .5s;
    transition-delay: .1s;
    box-sizing: border-box;
    &:focus {
      width: 177px;
      color: #fff;
    }
    &::-webkit-input-placeholder {
      color: #999;
    }
  }
  a {
    .iconfont {
      font-size: 17px;
      color: #999;
    }
  }
}

</style>
