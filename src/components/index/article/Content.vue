<template>
  <div class="atc-content-wrap">
    <div class="show-content-free" v-html="atc.content">
    </div>
  </div>
</template>
<script>
import c from "./data-content"
export default {
  props: {
    atc: Object
  },
  data() {
    return {

    }
  }
}

</script>
<style lang="scss">
.atc-content-wrap {
  *,
   :before,
   :after {
    box-sizing: border-box;
  }
  color: #2f2f2f;
  word-break: break-word!important;
  word-break: break-all;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  p {
    margin: 0 0 25px;
    word-break: break-word!important;
  }

  .image-package {
    padding-bottom: 25px;
    width: 700px;
    margin: 10px auto;
    text-align: center;
    img {
      max-width: 100%;
      height: auto;

      vertical-align: middle;
      border: 0;
      cursor: -webkit-zoom-in;
      transition: all .25s ease-in-out;
    }
  }
}

</style>
