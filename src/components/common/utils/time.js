const parse = function(time) {
  var interval = Date.now() / 1000 - time;
  var msg = "";
  if (interval > 60 * 60 * 24) {
    var temp = new Date(time * 1000).toLocaleString().split(" ");
    msg = temp[0].split("/").join("-");
  } else {
    if (interval < 60) {
      msg = Math.round(interval) + " 秒之前";
    } else if (interval < 3600) {
      interval = Math.round(interval / 60);
      msg = interval + " 分钟前";
    } else {
      interval = Math.round(interval / 3600);
      msg = interval + " 小时前";
    }
  }
  return msg;
}

export default {
  parse
};
