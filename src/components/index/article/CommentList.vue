<template>
  <div class="comments-list">
    <ul>
      <li v-for="c in comments">
        <div class="author">{{c.author.name}}</div>
        {{c.content}}
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.comments-list {
  height: 200px;
  border: 1px solid red;
}

</style>
<script>
export default {
  props: {
    comments: Array
  }
}

</script>
