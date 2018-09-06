export default [
  //type(1:注册，2：密码重置)
  { url: "/api/u/checkMobile", method: "get", params: ["mobile", "type"] },
  { url: "/api/u/checkNickName", method: "get", params: ["nickName"] },
  { url: "/api/u/register", method: "post", params: ["nickName", "mobile", "password", "smsCode"] },
  { url: "/api/u/login", method: "post", params: ["mobile", "password"] },
  { url: "/api/sendSmsVerifyCode", method: "post", params: ["mobile", "type"] },
  { url: "/api/u/resetPwd", method: "post", params: ["nickName"] },
  /*首页活动*/
  { url: "/api/newActivity", method: "get", params: [] },
  /*快讯页-根据标签获取快讯列表*/
  { url: "/api/hotNews/findByCode", method: "get", params: ["startPage", "pageSize", "code"] },
  /*首页-热点资讯列表 / 更多快讯*/
  { url: "/api/hotNews/tag", method: "get", params: ["startPage", "pageSize"] },
  /*首页-推荐作者*/
  { url: "/api/author/page", method: "get", params: ["startPage", "pageSize"] },
  /*轮播图*/
  { url: "/api/ad/slide", method: "get", params: [] },
]
