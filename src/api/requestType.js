//引入axios
import axios from 'axios'
import { Message } from 'element-ui'
import sign from "data"
import timeoutHandle from "./timeout"
import qs from "qs"


let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;

//请求拦截器
axios.interceptors.request.use(config => {
  //发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {

  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        err.message = '未授权，请重新登录'
        break;
      case 403:
        err.message = '拒绝访问'
        break;
      case 404:
        err.message = '请求错误,未找到该资源'
        break;
      case 405:
        err.message = '请求方法未允许'
        break;
      case 408:
        err.message = '请求超时'
        break;
      case 500:
        err.message = '服务器端出错'
        break;
      case 501:
        err.message = '网络未实现'
        break;
      case 502:
        err.message = '网络错误'
        break;
      case 503:
        err.message = '服务不可用'
        break;
      case 504:
        err.message = '网络超时'
        break;
      case 505:
        err.message = 'http版本不支持该请求'
        break;
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = "连接到服务器失败"
  }
  console.log(err.message);
  Message.error(err.message);
  return Promise.resolve(err.response)
})



axios.defaults.baseURL = 'http://172.25.210.6:8081/api'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
//axios.defaults.headers['Content-Type']="application/x-www-form-urlencoded;charset=UTF-8"


//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'

}
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

function isSignIned() {console.log(sign.isSignIned);
  if (sign.isSignIned) {
    const user = sessionStorage.getItem("user");console.log(user);
    axios.defaults.headers.AppId = JSON.parse(user)['appId'];
    axios.defaults.headers.Authorization = "ticket " + JSON.parse(user)['access_ticket'];
  }
}

axios.defaults.timeout = 10000

let ajaxMethod = ['get', 'post', 'delete', 'put'];
let api = {};
ajaxMethod.forEach((method)=> {
    //数组取值的两种方式
    api[method] = function (url, param) {
        isSignIned();
        return new Promise((resolve, reject) => {
            
            axios({
              method,
              url, 
              params: param, 
              // cancelToken: new CancelToken(c => {
              //   cancel = c
              // })
            }).then(res => {
                //根据后台数据进行处理
                if ( res.data.code === 0 ) {
                    resolve(res.data);
                } else if ( res.data.code === 994 || res.data.code === 996){ 
                     Message.warning({
                        message: res.data.msg,
                        duration: 2000
                     });
                     // setTimeout(function(){ 
                     //    timeoutHandle();
                     // },2000)
                }else if ( res.data.code === 1 || res.data.code === 995){ 
                     Message.warning({
                        message: '登录信息已过期，请重新登录',
                        duration: 1000
                     });
                     setTimeout(function(){ 
                        timeoutHandle();
                     },1000)
                } else {
                    Message.warning({
                        message: res.data.msg,
                        duration: 2000
                     });
                }

                //  else if ( res.data.code === 1 ){ //重新刷新 Ticket.
                //     Message.warning(res.data.msg);
                // }
                // } else if ( res.data.code === 2 ){  //操作失败
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 989 ){  //无效的参数值
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 990 ){  //起始页参数值不正确
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 991 ){  //每页数量超出限制
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 992 ){  //缺省或无效的appId
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 993 ){  //头部参数错误
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 994 ){  //缺省或无效的 Authorization.
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 995 ){  //缺省或无效的 Ticket.
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 996 ){  //请先登录系统
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 997 ){  //权限不足
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 998 ){  //未获取到请求参数
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 999 ){  //业务异常
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 1006 ){  //手机号不存在
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 1007 ){  //账号或密码不正确
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 1008 ){  //用户已禁用或无效
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 1009 ){  //密码输入错误次数超过限制，请稍等5分钟后再试
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 1105 ){  //无效的手机号
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 1106 ){  //手机号已存在
                //     Message.warning(res.data.msg);
                // } else if ( res.data.code === 1107 ){  //短信下发失败
                //     Message.warning(res.data.msg);
                // }
            }).catch(err => {
                console.log(err)
            })
        })
    }
});

function errorCode(code,msg){
    //根据后台数据进行处理
    if ( code === 994 || code === 996){ 
         Message.warning({
            message: res.data.msg,
            duration: 2000
         });
    }else if ( code === 995){ 
         Message.warning({
            message: '登录信息已过期，请重新登录',
            duration: 1000
         });
         setTimeout(function(){ 
            timeoutHandle();
         },1000)
    } else {
        Message.warning({
            message: msg,
            duration: 2000
         });
    }
};

export default {
  //api,
  //get请求
  get(url, param) {
    isSignIned();
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        if (res.data.code === 0) { 
            resolve(res.data)
        }else{
            errorCode(res.data.code,res.data.msg)
        }
        
      }).catch(err => {
        console.log(err)
      })
    })
  },
  //post请求
  post(url, param) {
    isSignIned();
    var header = {};
    if(param.commentId){
      console.log('-----');
      header = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type' : 'application/x-www-form-urlencoded'
      };
      param = qs.stringify(param);
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        headers: header,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
          if (res.data.code === 0) { 
              resolve(res.data)
          }else{
              errorCode(res.data.code,res.data.msg)
          }
      })
    })
  },
  // // delete
  delete(url, param) {
    isSignIned();
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        if (res.data.code === 0) { 
            resolve(res.data)
        }else{
            errorCode(res.data.code,res.data.msg)
        }
      })
    })
  },
  // // put
  put(url, param) {
    isSignIned();
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        if (res.data.code === 0) { 
            resolve(res.data)
        }else{
            errorCode(res.data.code,res.data.msg)
        }
      })
    })
  }
}
