<template>
	<div class="myNotes-wrapper">
		<comHeader :pagenum="pagenum"></comHeader>
        <div class="note-list" v-if="note.pageCount>0">
        	<ul class="time-vertical">
		        <li v-for="(item,index) in note.pageData" :key="item.noteId">
		        	<b></b>
		        	<span class="time">{{item.createTime}}</span>
		        	<p>添加了笔记内容<span>“<a href="javascript:;" @click="openNote(item.note)" class="line-clamp-1">{{item.note}}</a>”</span></p>
		        	<h1>
		        		<router-link to="">{{item.title}}</router-link>
		        	</h1>
		        	<span class="delete" @click="delNote(index, item.noteId)">删除</span>
		        </li>
		    </ul>
        </div>
        <div class="com-empty-status" v-if="note.pageCount==0">
	    	<img src="@/common/img/empty.png">
	    	<p>暂无收藏</p>
	    </div>
        <div class="paginate-wrapper" v-if="note.pageSum>1">
			<el-pagination
			  	background
			  	@size-change="handleSizeChange"
      			@current-change="handleCurrentChange"
			  	:page-size="1"
			  	layout="total, prev, pager, next"
			  	:total="note.pageCount">
			</el-pagination>
        </div>
        <!-- <div class="notes-layer" v-show="openNotes"  @click="closeNotes">
        	<div class="notes-content">
	        	<div class="head">"32342444"的笔记</div>
	        	<div class="main">
	        		defrf
	        	</div>
        	</div>
        </div> -->
	</div>
</template>

<script>
	import {note, delNote} from '@/api/request';
	import comHeader from '../comHeader';

	export default {
		data () {
		    return {
		      	items: [],
		      	perpage: 2,
		      	findmessage: '',
		      	CurrentPage: 1,
		      	openNotes: false,
		      	note: [],
		      	startPage: 1,
                pageSize: 10,
                pagenum: ''
		    }
		},
		created() {
            this.getData();

        },
		methods: {
			async getData(){
                const params = { startPage: this.startPage, pageSize: this.pageSize };
                const res = await note(params);
                this.note = res.data;
                this.pagenum = this.note.pageCount+'条笔记';
            },
            handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    },
		    clickCallback (pageNum) {
		      console.log(pageNum)
		    },
		    openNote(note) {
		    	//document.body.style.overflow='hidden';
		    	//this.openNotes = true;
		    	this.$msgbox.alert(note, '"32342444"的笔记', {
		          	showConfirmButton: false,
		          	callback: action => {

		          }
		        });
		    },
		    async delNote(i,id){
                const res = await delNote(id);
                this.note.pageData.splice(i, 1);
                this.note.pageCount--;
                this.$message({
                    message: res.data,
                    type: 'success'
                });
            }

		},
        components: {
            comHeader
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
			    		display: inline-block;
			    		font-size: 14px;
			    		color: #ccc;
			    		span{
			    			color: #666;
			    		}
			    		a{
			    			display: inline-block;
			    			max-width: 400px;
			    			color: #666;
			    			text-decoration: underline;
			    			outline: none;
			    			vertical-align: bottom;
			    		}
			    	}
			    	h1{
			    		font-size: 18px;
			    		color: $system-color-black;
			    		font-weight: bold;
			    		margin-top: 30px;
			    	}
			    	.delete{
			    		position: absolute;
			    		right: 0;
			    		font-size: 14px;
                        color: #4285F4;
                        cursor: pointer;
                        &:hover{
                            text-decoration: underline;
                        }
			    	}
			    	.time{
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
    //     .notes-layer{
	   //      position: fixed;
		  //   left: 0;
		  //   top: 0;
		  //   bottom: 0;
		  //   right: 0;
		  //   z-index: 2000;
		  //   background-color: rgba(0, 0, 0, 0.61);
	   //      .notes-content{
	   //      	position: absolute;
				// top: 50%;
				// left: 50%;
				// margin-left: -265px;
				// margin-top: -275px;
	   //          z-index: 1002;
				// min-width: 530px;
				// min-height: 551px;
				// background: #fff;
				// border-radius: 4px;
				// overflow: hidden;
		
    //             .head{
    //                 width: 500px;
    //                 -webkit-box-shadow: 0 0 20px rgba(0,0,0,.1);
    //                 box-shadow: 0 0 20px rgba(0,0,0,.1);
    //                 border-bottom: 1px solid #d9d9d9;
    //                 background-color: #fff;
    //                 margin: auto;
    //                 display: block;
    //                 font-size: 18px;
    //             	color: #222;
    //                 padding: 15px;
    //             }
    //             .main{
    //                 width: 100%;
    //                 margin: 0 auto;
    //     			min-height: 500px;
    //                 box-shadow: 0 0 20px rgba(0,0,0,.1);
    //                 background-color: #fff;
    //                 -webkit-box-sizing: border-box;
    //             	box-sizing: border-box;
    //             	padding: 30px 40px;
    //                 color: #333;
    //                 font-size: 16px;
    //                 line-height: 1.7;
    //                 overflow-y: auto;
    //             }
    //         }
    //     }
	}
</style>