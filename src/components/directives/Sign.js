import Vue from "vue";
import API from "@/api"
import data from "data"
import sign from "../sign/common"
import $router from "@/router"
Vue.directive("signin", {
  inserted: (el, binding) => {
    el.addEventListener("click", () => {
      var path = binding.value && binding.value.path;
      if (!data.isSignIned) {
        data.showPopSign = true;
        if (path) {
          data.afterSigninRun = typeof path === 'function' ? path : function() { $router.push(path); }
        }
      } else {
        path ? typeof path === 'function' ? path(function() {}) : $router.push(path) : undefined;
      }
    })
  }
})
Vue.directive("signout", {
  inserted: (el, binding) => {
    el.addEventListener("click", () => {
      if (data.isSignIned) {
        API["post/api/u/logout"]().then(res => {
          if (res.data.code === 0) {
            sign.clear()
          }
        })
      }
    })
  }
})
