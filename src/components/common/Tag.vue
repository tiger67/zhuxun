<template>
  <li class="tag">
    <router-link to="/article-list">
      {{name}}
    </router-link>
  </li>
</template>
<style lang="scss">
.tag {
  float: left;
  padding: 8px 12px;
  background-color: #eee;
  margin: 10px;
  border-radius: 4px;
  a {
    color: #343434;
  }
  &:hover {
    /* box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1); */
    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
  }
}

</style>
<script>
export default {
  props: {
    url: String,
    name: String
  }
}

</script>
