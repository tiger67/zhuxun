import Vue from "vue"
Vue.filter("TimeYMD", function(time) {
  var interval = Date.now() / 1000 - time;
  var msg = "";
  var temp = new Date(time * 1000).toLocaleString().split(" ");
  msg = temp[0].split("/").join("-");
  return msg
})
Vue.filter("TimeYMDhms", function(time) {
  var interval = Date.now() / 1000 - time;
  var date = new Date(time * 1000);
  var str = date.toLocaleString().replace(/\//g, "-");
  var d1 = str.indexOf("午");
  var d2 = str.indexOf(":");
  return str.slice(0, d1 - 1) + date.getHours() + str.slice(d2);

})
Vue.filter("Timehms", function(time) {
  var date = new Date(time * 1000);
  var str = date.toLocaleTimeString();
  var hours = date.getHours();
  if (hours < 10) {
    return "0" + hours + str.slice(str.indexOf(":"));
  } else {
    return hours + str.slice(str.indexOf(":"));
  }

})
Vue.filter("TimehmsTxt", function(time) {
  return new Date(time * 1000).toLocaleTimeString();
})
