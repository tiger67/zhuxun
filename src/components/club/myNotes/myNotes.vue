<template>
	<div class="myNotes-wrapper">
		<div class="head">
            <div class="avatar">
                <img src="../../../assets/tou2@2x.png">
            </div>
            <p class="name">筑讯小透明</p>
        </div>
        <div class="total-bar">
            共84条笔记
        </div>
        <div class="note-list">
        	<ul class="time-vertical">
		        <li>
		        	<b></b>
		        	<span>2018-08-15  14:15:16</span>
		        	<p>添加了笔记内容<router-link to="">“keso”</router-link></p>
		        	<h1>
		        		<router-link to="">奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
		        	</h1>
		        </li>
		        <li>
		        	<b></b>
		        	<span>2018-08-15  14:15:16</span>
		        	<p>添加了笔记内容<router-link to="">“keso”</router-link></p>
		        	<h1>
		        		<router-link to="">奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
		        	</h1>
		        </li>
		        <li>
		        	<b></b>
		        	<span>2018-08-15  14:15:16</span>
		        	<p>添加了笔记内容<router-link to="">“keso”</router-link></p>
		        	<h1>
		        		<router-link to="">奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
		        	</h1>
		        </li>
		        <li>
		        	<b></b>
		        	<span>2018-08-15  14:15:16</span>
		        	<p>添加了笔记内容<router-link to="">“keso”</router-link></p>
		        	<h1>
		        		<router-link to="">奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
		        	</h1>
		        </li>
		    </ul>
        </div>
        <div class="paginate-wrapper">
        	<paginate
			    :page-count="20"
			    :click-handler="clickCallback"
			    :prev-text="'上一页'"
			    :next-text="'下一页'"
			    :container-class="'pagination clearfix'"
			    :page-class="'page-item'">
			 </paginate>
			 <div class="page-count">共20页</div>
        </div>
	</div>
</template>

<script>
	import paginate from 'vuejs-paginate';
	export default {
		data () {
		    return {
		      	items: [],
		      	perpage: 2,
		      	findmessage: '',
		      	CurrentPage: 1
		    }
		},
		methods: {
		    clickCallback (pageNum) {
		      console.log(pageNum)
		    }
		},
		components: {
			paginate
		}
	};
</script>

<style lang="scss" scope>
	$system-color-black: #222;
    $system-color-bright: #ffc81f;
    
	.myNotes-wrapper{
		width: 800px;
        margin: 0 auto;
        .head{
            text-align: center;
            margin-top: 59px;
            .avatar{
                display: inline-block;
                width: 120px;
                height: 120px;
                margin-bottom: 28px;
                overflow: hidden;
                img{
                    width: 120px;
                    height: 120px;
                }
            }
            .name{
                font-size: 24px;
                color: $system-color-black;
            }  
        }
        .total-bar{
            margin-top: 68px;
            padding-bottom: 9px;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
            color: $system-color-black;
        }
        .note-list{
        	margin-top: 59px;
        	padding-bottom: 48px;
        	border-bottom: 1px solid #ddd;
        	.time-vertical {
			    border-left: 1px solid #eee;
			    padding-left: 30px;
			    margin-left: 168px;
			    li{
			    	position: relative;
			    	border-bottom: 1px solid #eee;
			    	padding-bottom: 40px;
			    	margin-bottom: 40px;
			    	b{
			    		padding: 0;
			    		&:before{
			    			content: '';
						    position: absolute;
						    top: 0;
						    left: -36px;
						    width: 10px;
							height: 10px;
							background: $system-color-bright;
							border-radius: 50%;
			    		}
			    	}
			    	p{
			    		font-size: 14px;
			    		color: #ccc;
			    		a{
			    			color: #666;
			    		}
			    	}
			    	h1{
			    		font-size: 18px;
			    		color: $system-color-black;
			    		font-weight: bold;
			    		margin-top: 30px;
			    	}
			    	span{
			    		position: absolute;
			    		top: 0;
			    		left: -198px;
			    		font-size: 14px;
			    		color: #999;
			    	}
			    	&:last-child{
			    		border-bottom: none;
    					padding-bottom: 0;
    					p{
    						height: 10px;
    					}
    					h1{
    						position: absolute;
    					}
			    	}
			    }
			}
			 
			 
        }
        
	}
</style>