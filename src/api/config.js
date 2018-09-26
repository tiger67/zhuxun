export default [
  //type(1:注册，2：密码重置)
  { url: "/api/u/checkMobile", method: "get", params: ["mobile", "type"] },
  { url: "/api/u/checkNickName", method: "get", params: ["nickName"] },
  { url: "/api/u/register", method: "post", params: ["nickName", "mobile", "password", "smsCode"] },
  { url: "/api/u/login", method: "post", params: ["mobile", "password"] },
  { url: "/api/u/logout", method: "post", params: [] },
  { url: "/api/u/resetPwd", method: "post", params: ["confirmPassword", "mobile", "password", "smsCode"] },
  { url: "/api/sendSmsVerifyCode", method: "post", params: ["mobile", "type"] },
  /*首页活动*/
  { url: "/api/newActivity", method: "get", params: [] },
  /*快讯页-根据标签获取快讯列表*/
  { url: "/api/hotNews/findByCode", method: "get", params: ["startPage", "pageSize", "code"] },
  /*首页-热点资讯列表 / 更多快讯*/
  { url: "/api/hotNews/page", method: "get", params: ["startPage", "pageSize"] },
  { url: "/api/hotNews/tag", method: "get", params: [] },
  /*首页-推荐tag*/
  { url: "/api/tag/recommend", method: "get", params: [] },
  { url: "/api/tag/all", method: "get", params: [] },
  /*首页-热门搜索关键词*/
  { url: "/api/tag/searchKeyword", method: "get", params: [] },
  /*搜索文章*/
  { url: "/api/search/searchArticle", method: "get", params: ["pageCurrent", "pageSize"] },
  /*搜索作者*/
  { url: "/api/search/searchUser", method: "get", params: ["pageCurrent", "pageSize"] },
  /*首页-推荐作者*/
  { url: "/api/author/page", method: "get", params: ["startPage", "pageSize"] },
  /*加关注*/
  { url: "/api/author/attention", method: "get", params: ["userId"], restful: ["userId"] },
  /*首页筑讯推荐文章列表*/
  { url: "/api/home/recommendArticle", method: "get", params: ["startPage", "pageSize"] },
  /*轮播图*/
  { url: "/api/ad/slide", method: "get", params: ["channel"] }, //渠道；1首页、2圈子
  /*获取图像验证码*/
  { url: "/api/getVerifyCode", method: "get", params: [] },

  { url: "/api/verifyCode", method: "post", params: ["code"], isparams: true },
  /*文章模块*/
  /*用户文章详情页*/
  { url: "/api/userPage/article", method: "get", params: ["articleId"] },
  { url: "/api/hotNews/info", method: "get", params: ["newsId"] },
  /*
  文章评论列表
  startPage:起始页数,1为第一页;pageSize:每页数量,最多20条记录;articleId:文章id;type:类型，0文章，1快讯
  sort:排序方式，0倒序，1正序
   */
  { url: "/api/comment/list", method: "get", params: ["startPage", "pageSize", "articleId", "type", "sort"] },
  //评论文章 type (类型，0文章，1快讯) 字段“replyCommentId”为空则为评论文章； 否则为回复对方网友评论
  { url: "/api/comment/add", method: "post", params: ["articleId", "type", "content", "replyCommentId"] },
  //点赞评论
  { url: "/api/comment/like", method: "post", params: ["commentId"], isparams: true },
  //评论总数
  { url: "/api/comment/sum", method: "get", params: ["commentId", "type"] },
  /*用户文章添加收藏*/
  { url: "/api/userPage/collect", method: "post", params: ["articleId"] },
  /*用户文章添加笔记*/
  { url: "/api/userPage/note", method: "get", params: ["articleId", "noteContent"] },
  /*第三方登录绑定*/
  { url: "/api/tp/qqlogin", method: "get", params: [] },
  { url: "/api/tp/qqAuth", method: "get", params: ["code", "state"] },
  { url: "/api/tp/qqbind", method: "get", params: [] },

  { url: "/api/tp/weibologin", method: "get", params: [] },
  { url: "/api/tp/weiboAuth", method: "get", params: ["code"] },
  { url: "/api/tp/weibobind", method: "get", params: [] },

  { url: "/api/tp/wxCallBack", method: "get", params: ["modelMap"] },
  { url: "/api/tp/wxLogin", method: "get", params: [] },
  { url: "/api/tp/wxCheckSignature", method: "get", params: [] },

  /*标签详情页*/
  { url: "/api/club/ta/list", method: "get", params: ["startPage", "pageSize", "tagId", "type"] },
  { url: "/api/club/ta/tagCard", method: "get", params: ["tagId"] },


]
