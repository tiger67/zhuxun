import Vue from "vue";
import ToolTip from "../common/ToolTip"

let tooltip = new Vue({
  components: { ToolTip },
  template: '<tooltip />'
})
console.log(tooltip);
//console.log(ToolTip.render())
Vue.directive("tooltip", {
  inserted: (el, binding) => {
    el.addEventListener("mouseenter", () => {
      //console.dir(binding);
      // tooltip
    })
    el.addEventListener("mouseleave", () => {})
  }
})
