import Vue from "vue";
import API from "@/api"
import data from "data"

Vue.directive("addfollow", {
  inserted: (el, binding, vnode, oldVnode) => {
    el.addEventListener("click", (function() {
      var isrunning = false;
      return function(e) {
        /*console.log(binding);
          console.log(vnode);
          console.log(el);*/
        if (isrunning) {
          return
        }
        isrunning = true;
        if (!data.isSignIned) {
          data.showPopSign = true;
        } else {
          var userId = binding.value.w && binding.value.w.userId;
          if (!userId) {
            isrunning = false;
            return;
          }
          API["get/api/author/attention"]({ userId: userId }).then(res => {
            if (res.data.code === 0) {
              binding.value.follow(true);
              isrunning = false;
            }
          })
        }
      }
    }()))

  }
})
