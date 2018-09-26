<template>
	<div class="listContent-wrapper">
		<articleList></articleList>
	</div>
</template>

<script type='text/ecmascript-6'>
	import articleList from '@/components/articleList/articleList';
	export default {
		props: {
			listContent: Array
		},
		components: {
			articleList
		}
	};
</script>

<style lang="scss">
	.listContent-wrapper{
		width: 840px;
		margin: 0 auto;
		.articleList-wrapper{
			.atc-unit{
				padding: 40px 0;
				margin: 0;
				border-bottom: 1px solid #eee;
			}
		}
		
	}
</style>