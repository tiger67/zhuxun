import axios from 'axios';
//let base = "http://172.25.210.92";
let base = "http://172.25.210.6";
//let base = "http://localhost:8082";
import c1 from "./c1"
import c2 from "./c2"

var config = c1.concat(c2);
var api = {};
config.forEach(item => {
  if (item.method == "post") {
    api[item.method + item.url] = params => {
      var token = sessionStorage.getItem("token");
      //params.token = token;
      return axios.post(`${base}${item.url}`, params)
    }
  } else {
    api[item.method + item.url] = params => {
      var token = sessionStorage.getItem("token");
      //params.token = token;
      return axios.get(`${base}${item.url}`, { params: params })
    }
  }
})
export default api
