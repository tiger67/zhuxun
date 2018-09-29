<template>
  <div class="atc-content-wrap">
    <div class="show-content-free" v-html="atc.content">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    atc: Object
  },
  data() {
    return {}
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
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  p {
    margin: 0 0 25px;
    word-break: break-word!important;
  }
  .watermark {
    display: block;
    max-width: 100%;
    margin: 0px auto;
  }
  .image-package {
    padding-bottom: 25px;
    margin: 10px auto;
    text-align: center;
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      vertical-align: middle;
      border: 0;
      cursor: -webkit-zoom-in;
      transition: all .25s ease-in-out;
    }
  }
}

</style>
