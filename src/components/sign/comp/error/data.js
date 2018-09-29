import Vue from "vue";
import vfuns from "./vertifyFun"
var errheight = 42;
var data = {
  els: [],
  errors: []
};

function initData() {
  data.els.splice(0, data.els.length);
  data.errors.splice(0, data.errors.length);
}

function initerror() {
  return {
    filters: [],
    value: "",
    name: "",
    msg: "",
    pos: {
      left: 0,
      top: 0
    },
    isvertify: true,
    show: false
  }
}

var isverfitying = false;
Vue.directive("error", {
  inserted: function(el, binding) {
    var error = initerror();
    var filters = binding.value.split(",");
    var pos = error.pos;
    var p = el.parentNode;
    data.els.push(el);
    pos.left = p.offsetLeft + p.offsetWidth;
    pos.top = p.offsetTop + (p.offsetHeight - errheight) / 2;
    if (/^:/.test(filters[filters.length - 1])) {
      error.name = (filters.splice(filters.length - 1, 1)[0]).slice(1);
      // console.log(error.name);
    }
    error.filters = filters;
    data.errors.push(error);
    el.addEventListener("blur", async() => {
      if (isverfitying) {
        return;
      }
      var len = filters.length;
      error.value = el.value;
      //console.log(error.value);
      for (var i = 0; i < len; i++) {
        var fun = vfuns[filters[i]];
        if (fun) {
          var result = await fun.call(error);
          if (!result) {
            error.show = true;
            break;
          }
        }
      }
    })
    el.addEventListener("focus", () => {
      error.show = false;
      error.isvertify = true;
    })
  }
})

Vue.directive("errorSubmit", {
  inserted: function(btn, binding) {
    btn.addEventListener("click", async(e) => {
      if (binding.modifiers.prevent) {
        e.preventDefault();
      }
      isverfitying = true;
      var istrim = binding.modifiers.trim;
      var els = data.els;
      var elen = els.length;
      for (var j = 0; j < elen; j++) {
        var el = els[j];
        var error = data.errors[j]
        var filters = error.filters;
        var len = filters.length;
        error.value = istrim ? el.value.trim() : el.value;
        for (var i = 0; i < len; i++) {
          var fun = vfuns[filters[i]];
          if (fun) {
            var result = await fun.call(error);
            if (!result) {
              binding.value.isvertify = false;
              error.show = true;
              isverfitying = false;
              return false;
            } else {
              error.show = false;
            }
          }
        }
        isverfitying = false;

      }
      binding.value.submit();

    })
  }
})
export default {
  data,
  initData
}
