<template>
  <div class="tooltip-error" :class="{'show':e.show}" :style="`left:${e.pos.left}px;top:${e.pos.top}px;`">
    <div class="tooltip-arrow tooltip-arrow-border" style="top: 50%;"></div>
    <div class="tooltip-arrow tooltip-arrow-bg" style="top: 50%;"></div>
    <i class="iconfont ic-error"></i>
    <div class="tooltip-inner">{{e.info}}</div>
  </div>
</template>
<script>
import error from "./data"
export default {
  data() {
    return {
      e: error
    }
  }
}

</script>
<style lang="scss">
.tooltip-error {
  font-size: 14px;
  line-height: 25px;
  white-space: nowrap;
  background: none;
  border-radius: 4px;
  text-align: center;
  position: absolute;
  margin-left: 3px;
  padding: 0 5px;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;

  display: none;
  &.show {
    display: block;
  }
  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
  }
  .tooltip-arrow-bg {
    left: 2px;
    border-right-color: #fff;
  }
  .tooltip-arrow-border {
    border-right-color: #ea6f5a;
  }
  .tooltip-inner {
    max-width: 280px;
    color: #333;
    border: 1px solid #ea6f5a;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }
}

</style>
