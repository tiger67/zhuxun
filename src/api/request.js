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
//我的笔记列表
export const note = param => {
	return req.get('/club/p/note', param)
}
//我的收藏列表
export const collect = param => {
	return req.get('/club/p/collect', param)
}
//我的浏览列表
export const browse = param => {
	return req.get('/club/p/browse', param)
}

// ------个人中心
//我的文章
export const centerArticle = param => {
	return req.get('/pc/article', param)
}