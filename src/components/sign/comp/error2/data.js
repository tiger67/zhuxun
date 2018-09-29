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
var next = true;
Vue.directive("a", {
  inserted: function(el) {
    console.log("this is a");
    el.addEventListener("blur", function() {
      if (next) {
        console.log("a click!!!");
      }
    })
  }
})
Vue.directive("b", {
  inserted: function(el) {
    console.log("this is b");
    el.addEventListener("blur", function() {
      console.log("b click!!!");
      next = false;
    })
  }
})
Vue.directive("mobileVertify", {
  inserted: function(el, binding) {
    //var input = el.querySelector("input");
    var input = el;
    input.addEventListener("blur", (function() {
      var pos = null;
      var name = nameindex++;
      return function() {
        if (error.show && error.name !== name) {
          return;
        }
        var value = el.value.trim();
        var haserror = true;
        error.name = name;
        if (value === "") {
          error.info = "请输入手机号";
        } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
          error.info = "手机号无效";
        } else {
          haserror = false;
        }
        if (haserror) {
          if (!pos) {
            var p = el.parentNode;
            pos = {};
            pos.left = p.offsetLeft + p.offsetWidth;
            pos.top = p.offsetTop + (p.offsetHeight - errheight) / 2;
          }
          error.pos = pos;
        }
        error.show = haserror;
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
