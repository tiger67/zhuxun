<template>
    <div>
        <v-header></v-header>
    	<div class="club-wrapper">
    		<div class="tab-wrapper">
    			<div class="tab-content clearfix">
    				<div class="tab-left">
    					<div class="tab-item">
    						<router-link to="/club/clubIndex">圈子</router-link>
    					</div>
    					<div class="tab-item">
    						<router-link to="/club/discover">发现</router-link>
    					</div>
    					<div class="tab-item">
    						<router-link to="/club/recentArticles">最新文章</router-link>
    					</div>
    				</div>
    				<div class="tab-right">
    					<div class="tab-item">
    						<router-link to="/club/myConcern">我的关注</router-link>
    					</div>
    					<div class="tab-item">
    						<router-link to="/club/myNotes">我的笔记</router-link>
    					</div>
    					<div class="tab-item">
    						<router-link to="/club/myFavorite/2">我的收藏</router-link>
    					</div>
    					<div class="tab-item">
    						<router-link to="/club/myBrowsing/3">浏览历史</router-link>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="content-wrapper">
    			<router-view/>
    		</div>
    	</div>
    </div>
</template>

<script>
    import header from '@/components/header/header';

	export default {
        components: {
            'v-header': header
        }
	};
</script>

<style lang="scss">
    $system-color-black: #222222;
    $system-bgcolor: #fafafa;

	.club-wrapper{
        
		.tab-wrapper{
			width: 100%;
			height: 79px;
            border-bottom: 1px solid #eee;
            background: $system-bgcolor;
            position: fixed;
            top: 60px;
            z-index: 100;
            .tab-content{
                width: 1200px;
                margin: 0 auto;
                .tab-left{
                    float: left;
                    .tab-item{
                        display: inline-block;
                        a{
                            display: inline-block;
                            padding: 33px 17px 28px 17px;
                            font-size: 18px;
                            color: #999; 
                            &.active{
                                border-bottom: 3px solid $system-color-black;
                                padding-bottom: 26px;
                                color: $system-color-black;
                            }
                        }
                        
                    }
                }
                .tab-right{
                    float: right;
                    .tab-item{
                        float: left;
                        line-height: 79px;
                        a{
                            margin: 0 14px;
                            font-size: 14px;
                            color: #999; 
                            &.active{
                                border-bottom: 2px solid $system-color-black;
                                padding-bottom: 9px;
                                color: $system-color-black;
                            }
                        }
                        &:last-child{
                            &:after{
                                width: 0;
                            }
                            a{
                                padding-right: 0;
                            }
                        }
                        &:after{
                            content: ' ';
                            display: inline-block;
                            width: 1px;
                            height: 8px;
                            background: #ccc;
                        }
                    }
                }
            }
			
		}
		.content-wrapper{
            width: 1200px;
            margin: 0 auto;
            margin-bottom: 121px;
            padding-top: 140px;
		}
	}
</style>