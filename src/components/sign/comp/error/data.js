import Vue from "vue";
var nameindex = 0;
var errheight = 37;
var error = {
  info: "",
  name: nameindex,
  show: false,
  pos: {
    left: 0,
    top: 0
  }
}
Vue.directive("mobileVertify", {
  inserted: function(el, binding) {
    var input = el.querySelector("input");
    input.addEventListener("blur", (function() {
      var pos = null;
      var name = nameindex++;
      return function() {
        if (error.show && error.name !== name) {
          return;
        }
        var v = binding.value;
        error.name = name;
        if (v.value.length < 5) {
          if (!pos) {
            pos = {};
            pos.left = el.offsetLeft + el.offsetWidth;
            pos.top = el.offsetTop + (el.offsetHeight - errheight) / 2;
          }
          error.pos = pos;
          error.info = "长度至少5";
          error.show = true;
        } else {
          error.show = false;
        }
      }
    }()))
  }
})
Vue.directive("passwordVertify", {
  inserted: function(el, binding) {
    var input = el.querySelector("input");
    input.addEventListener("blur", (function() {
      var pos = null;
      var name = nameindex++;
      return function() {
        if (error.show && error.name !== name) {
          return;
        }
        var v = binding.value;
        error.name = name;
        if (v.value.length == 0) {
          if (!pos) {
            pos = {};
            pos.left = el.offsetLeft + el.offsetWidth;
            pos.top = el.offsetTop + (el.offsetHeight - errheight) / 2;
          }
          error.pos = pos;
          error.info = "密码不能为空";
          error.show = true;
        } else {
          error.show = false;
        }
      }
    }()))
  }
})

Vue.directive("nicknameVertify", {
  inserted: function(el, binding) {
    var input = el.querySelector("input");
    input.addEventListener("blur", (function() {
      var pos = null;
      var name = nameindex++;
      return function() {
        if (error.show && error.name !== name) {
          return;
        }
        var v = binding.value;
        error.name = name;
        if (v.value.length < 5) {
          if (!pos) {
            pos = {};
            pos.left = el.offsetLeft + el.offsetWidth;
            pos.top = el.offsetTop + (el.offsetHeight - errheight) / 2;
          }
          error.pos = pos;
          error.info = "长度至少5";
          error.show = true;
        } else {
          error.show = false;
        }
      }
    }()))
  }
})

export default error
