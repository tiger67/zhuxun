<template>
	<div class="myFavorite-wrapper">
        <div class="head">
            <div class="avatar">
                <img src="../../../assets/tou2@2x.png">
            </div>
            <p class="name">筑讯小透明</p>
        </div>
        <div class="total-bar">
            共{{dataList.pageCount}}<span v-if="paramsID == 2" >收藏</span><span v-if="paramsID == 3" >条浏览记录</span>
        </div>
        <div class="content-list">
             <div class="article-item" v-for="item in dataList.pageData">
                 <div class="content">
                    <h1 class="line-clamp-1">
                        <router-link to="">{{item.title}}</router-link>
                    </h1>
                    <div class="time-type">
                        <span class="time">{{item.createTime}}</span>
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
    import {collect, browse} from '@/api/request';
	export default {

        data () {
            return {
                path: this.$router.currentRoute.path,
                paramsID: this.$route.params.id,
                collect: [],
                browse: [],
                dataList: [],
                startPage: 1,
                pageSize: 10,
            }
        },
        watch: {
            '$route' (to, from) {
                this.path = this.$router.currentRoute.path;
                this.paramsID = this.$route.params.id;
                console.log(this.$route.params.id);
                if(this.$route.params.id==2){
                    this.getCollect();
                }else if(this.$route.params.id==3){
                    this.getBrowse();
                }
            }
    	},
        created() {
            this.path = this.$router.currentRoute.path;
            this.paramsID = this.$route.params.id;
            console.log(this.$route.params.id);
            if(this.$route.params.id==2){
                this.getCollect();
            }else if(this.$route.params.id==3){
                this.getBrowse();
            }
            
        },
        methods: {
            async getCollect(){
                const params = { startPage: this.startPage, pageSize: this.pageSize };
                const res = await collect(params);
                this.dataList = res.data;
                console.log(this.dataList)
            },
            async getBrowse(){
                const params = { startPage: this.startPage, pageSize: this.pageSize };
                const res = await browse(params);
                this.dataList = res.data;
                console.log(this.dataList)
            }
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