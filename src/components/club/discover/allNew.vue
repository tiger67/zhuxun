<template>
	<div>
		<v-header></v-header>
		<div class="allNew-wrapper">
			<div class="head">
				<h1 v-if="typee===0">新增会员</h1>
				<h1 v-if="typee===1">新增机构</h1>
			</div>
			<div class="card-content clearfix">
				<div class="card-item" v-for="(item,index) in listContent" :key="item.userId">
                    <div class="com-avatar">
                        <router-link target="_blank" :to="{path: '/visitor/' + item.userId}"><img :src="item.photo"></router-link>
                    </div>
                    <div class="com-name line-clamp-1">
                        <span>{{item.nickName}}</span>
                        <i class="v1" v-if="item.auth_status===1"></i>
                    </div>
                    <div class="intro line-clamp-3">
                        {{item.introduce}}
                    </div>
                    <div class="btn-box">
                        <div class="fbtn1" :class="{'m-follow-btn': typee===0, 'o-follow-btn': typee===1 }" v-if="item.activeName" @click="attention(index, item.userId)">+ 关注</div>
                        <div class="fbtn1 followed-btn" v-if="!item.activeName">已关注</div>
                    </div>   
                </div>
			</div>
			<div class="load-more" v-if="isloadMore">
		  		<div class="load-more-btn" @click="loadMore">加载更多</div>
		  	</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import header from '@/components/header/header';
	import { getVipOrganAll, reAttention } from '@/api/request';

	export default {
		data() {
			return {
				startPage: 1,
                pageSize: 9,
                typee: parseInt(this.$route.params.id),
                listContent: [],
                isloadMore: false
			}
		},
		created() {
			this.getData()
		},
		methods: {
			async getData(){
                const params = { 'startPage': this.startPage, 'pageSize': this.pageSize, 'type': this.typee };
                const res = await getVipOrganAll(params);
                console.log(res);
                //this.listContent = res.data;
                this.listContent = this.listContent.concat(res.data);
                this.listContent.forEach(item => {
                    this.$set(item, 'activeName', true)
                });
                if( res.data.length < this.pageSize ){
                	this.isloadMore = false;
                }else{
                	this.isloadMore = true;
                }
            },
            async attention(i,id){
                const res = await reAttention(id);
                this.listContent[i].activeName = !this.listContent[i].activeName;
                this.$message({
                    message: res.data,
                    type: 'success'
                });
            },
            loadMore() {
                this.startPage++;
                this.getData();
            }
		},
		components: {
		    'v-header': header
		}
	};
</script>

<style scoped lang="scss">
	.allNew-wrapper{
		margin-top: 60px;
		.head{
			width: 100%;
			height: 240px;
			background: url('./bg.png') center center no-repeat;
			background-size: cover;
			h1{
				font-size: 32px;
				color: #fff;
				font-weight: bold;
				text-align: center;
				line-height: 240px;
			}
		}
		.card-content{
            width: 1002px;
            margin: 0 auto;
            padding-top: 10px;
            .card-item{
                position: relative;
                float: left;
                width: 248px;
                height: 278px;
                margin: 88px 42px;
                border: 1px solid #eee;
                text-align: center;
                &:last-child{
                    margin-right: 0;
                }
                .com-avatar{
                    position: absolute;
                    top: -48px;
                    left: 78px;
                }
                .com-name{
                    position: relative;
                    margin-top: 75px;
                    font-size: 0;
                    padding: 0 25px;
                    span{
                        display: inline-block;
                        line-height: 20px;
                    }
                }
                .intro{
                    font-size: 14px;
                    color: #999;
                    line-height: 24px;
                    margin: 16px 34px 25px 34px;
                    height: 70px;
                }
                .btn-box{
                    
                }
                &:hover{
                    box-shadow:0px 4px 10px 0px rgba(49,20,38,0.08);
                }
            }
        }
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
				color: #222;
				&:hover{
					color: #666;
					border-color: #999;
					background: #fafafa;
				}
			}
		}
	}
</style>