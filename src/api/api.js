import axios from 'axios';
import config from "./config"
import c from "data";
import errorCode from "./errorCode"
import sign from "@/components/sign/common"

let base = "http://172.25.210.6:8081";

//let base = "http://172.25.210.98";

//let base = "http://172.25.210.118:8081";

//let base = "http://localhost:8082";

var api = {
  baseurl: base
};
axios.defaults.withCredentials = true
config.forEach(item => {
  api[item.method + item.url] = params => {
    var headers = {};
    let paramdata = item.method == "post" ? params : { params: params, headers: headers };
    if (c.isSignIned) {
      const u = sign.getUser();
      headers.AppId = u.appId;
      headers.Authorization = "ticket " + u.access_ticket;
    }
    let requestUrl = `${base}${item.url}`;
    if (item.restful) {
      item.restful.forEach(a => {
        requestUrl = requestUrl + "/" + params[a];
        delete params[a];
      })
    }
    if (item.url == "/api/comment/like") {
      // paramdata.headers = {};
      // console.log(paramdata);
      // paramdata = qs.stringify(paramdata);
    }
    return new Promise((resolve, reject) => {
      let resolve_cb = (res) => {
        var code = res.data.code;
        var timeout_code = [996, 995, 994, 992];
        if (timeout_code.indexOf(code) != -1) {
          sign.timeout();
        }
        if (errorCode[code]) {
          console.log("-----------------");
          console.log(errorCode[code])
          console.log("-----------------");
        } else {
          resolve(res);
        }
      }
      let reject_cb = (error) => {
        if (error) {
          console.log("错误info" + error);
        }
      }
      if (item.url == "/api/getVerifyCode" || item.url == "/api/verifyCode") {
        return axios({ method: item.method, url: requestUrl, params: params, data: paramdata, headers: headers }).then(
          resolve_cb, reject_cb)
      } else if (item.isparams) {
        return axios({ method: item.method, url: requestUrl, params: params, data: paramdata, headers: headers }).then(
          resolve_cb, reject_cb)
      } else {
        return axios[item.method](requestUrl, paramdata, { headers: headers }).then(
          resolve_cb, reject_cb)
      }
    });
  }
})
export default api
