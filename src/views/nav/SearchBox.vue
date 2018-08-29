<template>
  <form class="nav-search-wrap">
    <input id="nav-search-input" placeholder="搜索" type="text">
    <router-link to="/"><i class="iconfont ic-search"></i></router-link>
  </form>
</template>
<style>
.nav-search-wrap>input {
    width: 107px;
    line-height: 22px;
    outline: none;
    border: none;
    font-size: 14px;
    background-color: transparent;
    color: #999;
}

#nav-search-input::-webkit-input-placeholder {
    color: #999;
}

.nav-search-wrap>a>.iconfont {
    font-size: 17px;
    color: #999;
}

.nav-search-wrap {
    border-radius: 40px;
    border: 1px solid #eee;
    margin: 9px 15px;
    padding: 6px 10px 6px 20px;
    background-color: #eee;
}

</style>
<script>


</script>
