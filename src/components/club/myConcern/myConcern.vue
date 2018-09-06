<template>
	<div class="myConcern-wrapper">
        <div class="head">
            <div class="avatar">
                <img src="../../../assets/tou2@2x.png">
            </div>
            <p class="name">筑讯小透明</p>
        </div>
        <div class="total-bar">
            共{{attention.pageCount}}关注
        </div>
        <div class="content-list">
            <div class="author-item" v-for="item in attention.pageData" :key="item.userId">
                <img :src="item.photo">
                <div class="content">
                    <h1 class="com-name">
                        <span>{{item.nickName}}</span>
                        <i class="v1" v-if="item.auth_status===1 && item.user_type===1"></i>
                        <i class="v1" v-if="item.auth_status===1 && item.user_type===0"></i>
                    </h1>
                    <p class="line-clamp-1">{{item.introduce}}</p>
                    <div class="fbtn1 m-follow-btn" v-if="!isfollow" @click="follow">+ 关注</div>
                    <div class="fbtn1 followed-btn" v-if="isfollow" @click="unfollow"><span class="followed">已关注</span><span class="unfollow">取消关注</span></div>
                </div>
            </div>
        </div>
        <div class="paginate-wrapper" v-if="attention.pageSum>1">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="attention.pageSize"
                layout="total, prev, pager, next"
                :total="attention.pageCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {attention} from '@/api/request';

	export default {
        data() {
            return {
                isfollow: true,
                attention: [],
                startPage: 1,
                pageSize: 10
            }
        },
        created() {
            this.getData();
        },
        methods: {
            follow() {
                this.isfollow = true;
            },
            unfollow() {
                this.isfollow = false;
            },
            async getData(){
                const params = { startPage: this.startPage, pageSize: this.pageSize };
                const res = await attention(params);
                this.attention = res.data;
                console.log(this.attention);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);

            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.startPage = val;
                this.getData();
            }
        }
	};
</script>

<style lang="scss">
    $system-color-black: #222;
    
    .myConcern-wrapper{
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
        .content-list{
            .author-item{
                display: flex;
                padding: 40px 0;
                border-bottom: 1px solid #eee;
                align-items: center;
                img{
                    width: 48px;
                    height: 48px;
                    border-radius: 100%;
                }
                .content{
                    position: relative;
                    flex: 1;
                    margin-left: 10px;
                    h1{
                        margin-bottom: 12px;
                        font-size: 16px;
                        color: $system-color-black;
                        span{
                            font-size: 16px;
                            font-weight: normal;
                        }
                        i{
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            background: url('../../../common/img/v1.png') center center no-repeat;
                            margin-left: 8px;
                            vertical-align: top;
                        }
                    }
                    p{
                        display: block;
                        width: 570px;
                        font-size: 14px;
                        color: #999;
                    }
                    .fbtn1{
                        position: absolute;
                        right: 0;
                        top: 0;
                        cursor: pointer;
                        .unfollow{
                            display: none;
                        }
                        .followed,.unfollow{
                            transition: all .5s;
                        }
                    }
                    .followed-btn:hover{
                        background: #ddd;
                        color: #666;
                        .followed{
                            display: none;
                        }
                        .unfollow{
                            display: inline-block;
                        }
                    }    
                }
            }
            
        }
    }
</style>