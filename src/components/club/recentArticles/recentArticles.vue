<template>
	<div class="recentArticles-wrapper">
		<articleList></articleList>
		<div class="load-more">
	  		<div class="load-more-btn">加载更多</div>
	  	</div>
	</div>
</template>

<script>
	import articleList from '@/components/articleList/articleList';
	export default {
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
				border: 1px solid #666;
				font-size: 18px;
				color: $system-color-black;
				cursor: pointer;
				&:hover{
					color: #666;
					border-color: #999;
					background: #fafafa;
				}
			}
		}
	}
</style>