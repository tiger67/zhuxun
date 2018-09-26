<template>
  <div class="article-single">
    <article-header v-if="atc&&atc.title" :atc="atc" />
    <div class="atc-content">
      <atc-content :atc="atc" />
    </div>
    <div class="comment-panel">
      <comment-panel :atc="atc" />
    </div>
  </div>
</template>
<style lang="scss">
.article-single {
  padding-top: 5px;
  padding-bottom: 40px;
  * {
    box-sizing: border-box;
  }
  .comment-panel {
    width: 675px;
    margin: 130px auto 0;
  }
}

</style>
<script>
import ArticleHeader from './ArticleHeader'
import CommentPanel from './CommentPanel'
import AtcContent from "./Content"
export default {
  props: {
    atc: Object
  },
  data() {
    return {}
  },
  components: {
    CommentPanel,
    AtcContent,
    ArticleHeader
  }
}

</script>
