<template>
	<div class="recentArticles-wrapper">
		<articleList :ArticleList="ArticleList"></articleList>
		<div class="load-more" v-if="isloadMore">
	  		<div class="load-more-btn" @click="loadMore">加载更多</div>
	  	</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import articleList from '@/components/articleList/articleList';
	import { newestArticle } from '@/api/request';

	export default {
		data() {
            return {
                ArticleList: [],
                startPage: 1,
                pageSize: 10,
                isloadMore: false
            }
        },
        created() {
            this.getArticle();
        },
        methods: {
            async getArticle(){
            	const params = { startPage: this.startPage, pageSize: this.pageSize};
                const res = await newestArticle(params);

                this.ArticleList = this.ArticleList.concat(res.data);
                if( res.data.length < this.pageSize ){
                	this.isloadMore = false;
                }else{
                	this.isloadMore = true;
                } 
            },
            loadMore() {
                this.startPage++;
                this.getArticle();
            }
        },
		components: {
			articleList
		}
	};
</script>

<style lang="scss">
	$system-color-black: #222;
	
	.recentArticles-wrapper{
		width: 834px;
		margin-top: 40px;
		.load-more{
			padding-top: 20px;
			text-align: center;
			.load-more-btn{
				display: inline-block;
				width: 158px;
				height: 48px;
				line-height: 48px;
				text-align: center;
				font-size: 16px;
				color: $system-color-black;
				&:hover{
					color: #666;
					border-color: #999;
					background: #fafafa;
				}
			}
		}
	}
</style>