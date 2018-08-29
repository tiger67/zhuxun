<template>
	<div>
		<v-header></v-header>
		<div class="myCenter-wrapper">
			<div class="head-wrapper">
				<img src="../../assets/center_bg.png">
			</div>
			<div class="content clearfix">
				<div class="left">
					<div class="header">
						<div class="com-avatar">
							<img src="../../assets/tou@2x.png">
						</div>
						<div class="com-name">
							<span>筑讯中国</span><i class="v2"></i>
						</div>
						<p class="intro">深圳 | 建筑爱好者</p>
						<div class="fbtn2">
							<router-link to="/editor" target="_blank">写文章</router-link>
						</div>
					</div>
					<ul class="menu-list">
						<li>
							<router-link to="/myCenter/myArticles">我的文章</router-link>
						</li>
						<li>
							<router-link to="/myCenter/messageCenter">消息中心</router-link>
						</li>
						<li>
							<router-link to="/myCenter/dataSet">资料设置</router-link>
						</li>
					</ul>
				</div>
				<div class="right">
					<router-view/>
				</div>
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
	$system-color-black: #222;
	
	.myCenter-wrapper{

		.head-wrapper{
			margin-top: 60px;
			height: 240px;
			img{
				width: 100%;
				height: 240px;
			}
		}
		.content{
			width: 1210px;
			margin: 0 auto;
			.left{
				position: relative;
				top: -126px;
				width: 240px;
				float: left;
				.header{
					height: 286px;
					border: 1px solid #eee;
					padding-top: 32px;
					background: #fff;
					text-align: center;
					.com-name{
						margin: 30px 0 18px 0;
						i{
							margin-left: 8px;
						}
					}
					.intro{
						font-size: 14px;
						color: #ccc;
					}
					.fbtn2{
						margin-top: 44px;
						a{
							display: block;
						}
					}
				}
				.menu-list{
					border-right: 1px solid #eee;
					li{
						width: 238px;
						height: 40px;
						line-height: 40px;
						text-align: center;
						padding: 24px 0;
						border-bottom: 1px solid #eee;
						font-size: 16px;
						color: $system-color-black;
						a{
							display: block;
							&.active{
								background: #eee;
							}
						}
						
					}
				}
			}
			.right{
				float: left;
				width: 930px;
				padding: 40px 0 0 40px;
			}
		}
	}
</style>