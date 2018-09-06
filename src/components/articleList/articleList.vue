<template>
	<div class="articleList-wrapper">
		<ul class="article-lists">
			<li class="atc-unit" v-for="item in ArticleList" :key="item.id">
		        <div class="img-wrapper">
		          	<img :src="item.thumbnail " />
		          	<span class="atc-img-tag" :class="{'interior-design': item.tagId===3}">{{item.tagName}}</span>
		        </div>
		        <div class="atc-unit-c">
	            	<h1 class="title">
	            		<router-link to="">{{item.title}}</router-link>
	            	</h1>
	            	<p class="abstract">{{item.introduce}}</p>
		            <div class="meta">
		            	<span class="com-name">
		              		<router-link target="_blank" to="/visitor" class="avatar">
		                		<img :src="item.photoUrl" alt="">
		              		</router-link>{{item.userName}}<i :class="{ 'v1': item.user_type===0, 'v2': item.user_type===1 }"></i>&nbsp;·&nbsp;{{item.publishTime | formatDate}}
		              	</span>
			            <span class="read">
			                <i class='iconfont ic-list-read'></i> {{item.borwseCnt}}
			            </span>
			            <span class="like">
			                <i class='iconfont ic-list-like'></i> {{item.collectCnt}}
			            </span>
		            </div>
		        </div>
	      	</li>
	  	</ul>
	  	
	</div>
</template>

<script>
	import {goodTime} from '@/common/js/date';

	export default {
		props: {
			ArticleList: Array
		},
        filters: {
            formatDate(time) {
                return goodTime(time);
            }
        }
	};
</script>

<style lang="scss" scope>
	$system-color-black: #222;

	.articleList-wrapper{

		.atc-unit {
		    position: relative;
		    margin-bottom: 40px;
		    max-height: 140px;
		    overflow: hidden;
		    display: flex;
		    .atc-img-tag{
		    	display: inline-block;
		        width: 76px;
		        height: 28px;
		        opacity: 0.7;
		        border-radius: 14px;
		        background: rgba(34,34,34,1);
		        text-align: center;
		        line-height: 28px;
		        font-size: 14px;
		        color: #FFFEFE; 
		        font-weight: normal;
		        margin-right: 23px;
	      	}
	      	.interior-design{
	      		background: rgba(255, 200, 31, 1);
		        color: $system-color-black;
	      	}
		    .img-wrapper {
		    	position: relative;
		      	width: 236px;
		      	height: 140px;
		      	margin-right: 24px;
		      	img {
		        	width: 100%;
		        	height: 100%;
		      	}
		      	span{
		      		position: absolute;
			        left: 10px;
			        top: 10px;
		      	}
		      	
		    }
		    .atc-unit-c{
		      	position: relative;
		      	flex: 1;
		      	.title {
			        font-size: 18px;
			        font-weight: bold;
			        color: $system-color-black;
			        display: block;
			        margin-bottom: 9px;
			        &:hover {
			          	color: #4285F4;
			        }
		      	}
		      	.abstract {
			        font-size: 14px;
			        line-height: 24px;
			        color: #666;
		      	}
		    }
		    .meta {
		    	position: absolute;
		    	bottom: 0;
		    	font-size: 0;
		      	.avatar {
		        	height: 32px;
		        	img {
			          	vertical-align: middle;
			          	display: inline-block;
			          	width: 32px;
			          	height: 32px;
			          	border-radius: 50%;
			          	margin-right: 9px;
		       		}
		      	}
		      	span {
		      		display: inline-block;
			        margin-right: 20px;
			        color: #b4b4b4;
			        font-size: 14px;
		      	}
		      	.com-name{
		      		i{
		      			vertical-align: middle;
		      			margin-right: 5px;
		      		}
		      	}
		    }
		}
		
	}
</style>