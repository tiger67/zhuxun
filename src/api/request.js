import req from '@/api/requestType';

//广告图片
export const slide = param => {
  return req.get('/ad/slide', param)
}
//圈子快讯
export const newsFlash = () => {
  return req.get('/club/newsFlash')
}
//圈子标签及热门文章列表
export const tagsAndArticle = () => {
  return req.get('/club/tagsAndArticle')
}
//圈子筑讯推荐
export const recommend = param => {
  return req.get('/club/recommend', param)
}
//圈子发现用户和机构列表
export const vipOrganList = () => {
  return req.get('/dc/club/vipOrganList')
}
export const getVipOrganAll = param => {
  return req.get('/dc/club/getVipOrganAll', param)
}
//发现行业圈子
export const industry = () => {
  return req.get('dc/club/industry')
}
//圈子最新文章列表
export const newestArticle = param => {
  return req.get('dc/club/newestArticle', param)
}
//我的关注列表
export const attention = param => {
  return req.get('/club/p/attention', param)
}
//关注
export const reAttention = id => {
  return req.get('/author/attention/' + id)
}
//取消关注
export const delAttention = id => {
  return req.delete('/club/p/del/attention/' + id)
}
//我的笔记列表
export const note = param => {
  return req.get('/club/p/note', param)
}
export const delNote = param => {
  return req.delete('/club/p/del/note', param)
}
//我的收藏列表
export const collect = param => {
  return req.get('/club/p/collect', param)
}
export const delCollect = id => {
  return req.delete('/club/p/del/collect/' + id)
}
//我的浏览列表
export const browse = param => {
  return req.get('/club/p/browse', param)
}
export const delBrowse = id => {
  return req.delete('/club/p/del/browse/' + id)
}

// ------个人中心
//我的文章
export const centerArticle = param => {
  return req.get('/pc/article', param)
}
//删除文章
export const delcenterArticle = id => {
  return req.delete('/pc/article/del/' + id)
}
//评论列表
export const centerComment = param => {
  return req.get('pc/mc/comment', param)
}
//删除评论
export const delComment = id => {
  return req.delete('pc/mc/comment/del/' + id)
}
//回复评论
export const replyComment = param => {
  return req.post('comment/add', param)
}
//点赞评论
export const likeComment = param => {
  return req.post('comment/like', param)
}
//消息
export const centerSysmsg = param => {
  return req.get('pc/mc/sysmsg', param)
}
//头像上传
export const singleImageUpload = param => {
  return req.post('fileUpload/singleImageUpload', param)
}
//资料设置
export const dataSet = () => {
  return req.get('pc/dataSet')
}
export const dataSetsave = param => {
  return req.put('pc/dataSet/save', param)
}
export const city = () => {
  return req.get('util/city')
}
export const dataIndustry = () => {
  return req.get('util/industry')
}
//第三方账号认证
export const weiboAuth = param => {
  return req.get('tp/weiboAuth', param)
}
export const weibobind = () => {
  return req.get('tp/weibobind')
}
export const wxCheckSignature = () => {
  return req.get('tp/wxCheckSignature')
}
export const wxCallBack = param => {
  return req.get('tp/wxCallBack', param)
}
export const qqAuth = param => {
  return req.get('tp/qqAuth', param)
}
export const qqbind = () => {
  return req.get('tp/qqbind')
}
export const delbindAuth = id => {
  return req.delete('pc/bind/del/' + id)
}
//个人中心访客
export const getPersonalInfo = param => {
  return req.get('pc/v/getPersonalInfo', param)
}
//写文章
export const getTag = () => {
  return req.get('util/tag')
}
export const addArticle = param => {
  return req.post('pc/article/add', param)
}
export const redact = param => {
  return req.get('pc/article/redact', param)
}
