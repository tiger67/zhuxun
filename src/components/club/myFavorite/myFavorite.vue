<template>
	<div class="myFavorite-wrapper">
        <div class="head">
            <div class="avatar">
                <img src="../../../assets/tou2@2x.png">
            </div>
            <p class="name">筑讯小透明</p>
        </div>
        <div class="total-bar">
            共84<span v-if="paramsID == 2" >收藏</span><span v-if="paramsID == 3" >条浏览记录</span>
        </div>
        <div class="content-list">
             <div class="article-item">
                 <div class="content">
                    <h1 class="line-clamp-1">
                        <router-link to="">华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
                    </h1>
                    <div class="time-type">
                        <span class="time">2018-08-20  14:15:24</span>
                        <span class="type" v-if="paramsID == 2">收藏</span>
                        <span class="type" v-if="paramsID == 3">浏览</span>
                    </div>
                    <div class="btn-box">
                        <span class="delete-btn">删除</span>
                    </div>
                 </div>
             </div>
             <div class="article-item">
                 <div class="content">
                    <h1 class="line-clamp-1">
                        <router-link to="">华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
                    </h1>
                     <div class="time-type">
                         <span class="time">2018-08-20  14:15:24</span>
                         <span class="type" v-if="paramsID == 2">收藏</span>
                         <span class="type" v-if="paramsID == 3">浏览</span>
                     </div>
                     <div class="btn-box">
                         <span class="delete-btn">删除</span>
                     </div>
                 </div>
             </div>
             <div class="article-item">
                 <div class="content">
                    <h1 class="line-clamp-1">
                        <router-link to="">华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
                    </h1>
                     <div class="time-type">
                         <span class="time">2018-08-20  14:15:24</span>
                         <span class="type" v-if="paramsID == 2">收藏</span>
                         <span class="type" v-if="paramsID == 3">浏览</span>
                     </div>
                     <div class="btn-box">
                         <span class="delete-btn">删除</span>
                     </div>
                 </div>
             </div>
             <div class="article-item">
                 <div class="content">
                    <h1 class="line-clamp-1">
                        <router-link to="">华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</router-link>
                    </h1>
                     <div class="time-type">
                         <span class="time">2018-08-20  14:15:24</span>
                         <span class="type" v-if="paramsID == 2">收藏</span>
                         <span class="type" v-if="paramsID == 3">浏览</span>
                     </div>
                     <div class="btn-box">
                         <span class="delete-btn">删除</span>
                     </div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
	export default {

        data () {
            return {
                path: this.$router.currentRoute.path,
                paramsID: this.$route.params.id
            }
        },
        watch: {
            '$route' (to, from) {
                this.path = this.$router.currentRoute.path;
                this.paramsID = this.$route.params.id;
                console.log(this.$route.params.id)
            }
    	},
        created(){

        }
    };
</script>

<style lang="scss">
    $system-color-black: #222;
    
    .myFavorite-wrapper{
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
            .article-item{
                padding: 30px 0;
                border-bottom: 1px solid #eee;
                .content{
                    position: relative;
                    h1{
                        display: block;
                        width: 480px;
                        font-size: 16px;
                        color: $system-color-black;
                        font-weight: bold;
                    }
                    .time-type{
                        position: absolute;
                        right: 0;
                        top: 0;
                        font-size: 14px;
                        color: #999;
                        .type{
                            margin-left: 30px;
                        }
                    }
                    .btn-box{
                        margin-top: 18px;
                        text-align: right;
                        .delete-btn{
                            font-size: 14px;
                            color: #4285F4;
                            cursor: pointer;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
</style>