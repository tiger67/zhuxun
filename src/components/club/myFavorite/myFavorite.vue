<template>
	<div class="myFavorite-wrapper">
        <comHeader :pagenum="pagenum"></comHeader>
        <div class="content-list" v-if="dataList.pageCount>0">
             <div class="article-item" v-for="(item,index) in dataList.pageData" :key="item.articleId">
                 <div class="content">
                    <h1 class="line-clamp-1" :commentArticleType="item.type">
                        <router-link :to="'/article/'+ item.articleId">{{item.title}}</router-link>
                    </h1>
                    <div class="time-type">
                        <span class="time">{{item.createTime}}</span>
                        <span class="type" v-if="paramsID == 2">收藏</span>
                        <span class="type" v-if="paramsID == 3">浏览</span>
                    </div>
                    <div class="btn-box">
                        <span class="delete-btn" @click="deleteLi(index, item.articleId, paramsID)">删除</span>
                        <!-- <span class="delete-btn" v-if="paramsID == 3" @click="delete(index, item.articleId)">删除</span> -->
                    </div>
                 </div>
             </div>
        </div>
        <div class="com-empty-status" v-if="dataList.pageCount==0">
            <img src="@/common/img/empty.png">
            <p>暂无关注</p>
        </div>
        <div class="paginate-wrapper" v-if="dataList.pageSum>1">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="dataList.pageSize"
                layout="total, prev, pager, next"
                :total="dataList.pageCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {collect, browse, delCollect, delBrowse} from '@/api/request';
    import comHeader from '../comHeader';
    import sign from "data";
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
                pagenum: ''
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
                this.pagenum = this.dataList.pageCount+'条收藏';
                console.log(this.dataList)
            },
            async getBrowse(){
                const params = { startPage: this.startPage, pageSize: this.pageSize };
                const res = await browse(params);
                this.dataList = res.data;
                this.pagenum = this.dataList.pageCount+'条浏览';
                console.log(this.dataList)
            },
            async delCollect(i,id){
                const res = await delCollect(id);
                this.$message({
                    message: res.data,
                    type: 'success'
                });
                this.pagenum = this.dataList.pageCount+'条收藏';
            },
            async delBrowse(i,id){
                const res = await delBrowse(id);
                this.$message({
                    message: res.data,
                    type: 'success'
                });
                this.pagenum = this.dataList.pageCount+'条浏览';
            },
            deleteLi(i, id, pID){
                if (pID==2) {
                    this.delCollect(i, id);
                }
                if (pID==3) {
                    this.delBrowse(i, id);
                }
                this.dataList.pageData.splice(i, 1);
                this.dataList.pageCount--;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);

            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.startPage = val;
                if(this.paramsID==2){
                    this.getCollect();
                }else if(this.paramsID==3){
                    this.getBrowse();
                }
            }
        },
        components: {
            comHeader
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