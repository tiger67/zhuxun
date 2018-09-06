<template>
  <div class="pop-mask">
    <slot></slot>
  </div>
</template>
<script>
import data from "data"
export default {
  data() {
    return {
      c: data
    }
  },
  methods: {
    hide: function() {
      this.c.showPopSign = false;
    }
  }
}

</script>
<style lang="scss">
.pop-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .5);
  text-align: center;
  * {
    box-sizing: border-box;
  }
  &:before {
    display: inline-block;
    content: '';
    height: 85%;
    vertical-align: middle;
  }
}

</style>
