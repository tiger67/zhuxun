import axios from 'axios';
//let base = "http://172.25.210.92";
let base = "http://172.25.210.6:8081";
//let base = "http://172.25.210.98";

//let base = "http://172.25.210.118:8081";

//let base = "http://localhost:8082";
import config from "./config"
import c from "data";
import errorCode from "./errorCode"
import sign from "@/components/sign/common"
var api = {
  baseurl: base
};

config.forEach(item => {
  api[item.method + item.url] = params => {
    var headers = {};
    let paramdata = item.method == "post" ? params : { params: params, headers: headers };
    if (c.isSignIned) {
      const u = JSON.parse(sessionStorage.getItem("user"));
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
      return axios[item.method](requestUrl, paramdata, { headers: headers }).then((res) => {
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
        /*if (code != 0) {
  console.log(code);

  if (code == 995) {
    sign.timeout();
  } else if (errorCode[code]) {
    console.log(errorCode[code])
  } else {
    reject && reject(res);
  }
  console.log("-----------------");
} else {
  resolve(res);
}
*/
      }, (error) => {
        if (error) {
          console.log("错误info" + error);
        }
      })
    });
  }
})
export default api
