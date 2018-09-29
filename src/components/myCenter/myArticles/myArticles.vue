<template>
	<div class="myArticles-wrapper">
        <div class="head-tab clearfix">
            <div class="tab-item" :class="{'active': selectType===9}" @click="select(9)">全部文章({{centerArticle.allCount}})</div>
            <div class="tab-item" :class="{'active': selectType===1}" @click="select(1)">已发布({{centerArticle.publishCount}})</div>
            <div class="tab-item" :class="{'active': selectType===0}" @click="select(0)">草稿箱({{centerArticle.draftCount}})</div>
            <div class="tab-item" :class="{'active': selectType===2}" @click="select(2)">待审核({{centerArticle.checkPendingCount}})</div>
        </div>
        <div class="content-list">
            <div class="article-item" v-for="(item,index) in articleList.pageData" :key="item.articleId">
                <div class="img-wrapper"  v-if="item.thumbnail.length>0">
                    <router-link :to="'/article/'+item.articleId">
                        <img :src="item.thumbnail">
                        <div class="btm-type draft" v-if="item.status===0">草稿</div>
                        <div class="btm-type review" v-if="item.status===2">审核中</div>
                    </router-link>
                </div>
                <div class="content">
                    <h1 class="line-clamp-1" :class="{'bef-no-img':item.thumbnail.length==0}">
                        <span class="draft" v-if="item.status===0">草稿</span>
                        <span class="review" v-if="item.status===2">审核中</span>
                        <template v-if="item.status===1">
                            <router-link :to="'/article/'+item.articleId">{{item.title}}</router-link>
                        </template>
                        <template v-else>
                            {{item.title}}
                        </template>
                    </h1>
                    <div class="label">
                        <span>{{item.tagRspVo.tagName}}</span><span>{{item.childrenTagRspVo.tagName}}</span>
                    </div>
                    <div class="time-type">
                        <span class="time">{{item.createTime}}</span>
                        <span class="type" v-if="item.status===1">发布</span><span class="type" v-if="item.status===2 || item.status===0">保存</span>
                    </div>
                    <div class="btn-box">
                        <router-link :to="{path: '/editor/' + item.articleId}" target="_blank">
                            <span class="edit-btn" v-if="item.status===0">编辑</span>
                        </router-link>
                        <!-- <span class="delete-btn"  @click="showAlert(item.id,index)">删除</span> -->
                        <el-button type="text" class="delete-btn"  @click="showAlert(item.articleId, index)">删除</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="com-empty-status" v-if="articleList.pageCount==0">
            <img src="@/common/img/empty.png">
            <p>暂无文章</p>
        </div>
        <div class="paginate-wrapper" v-if="articleList.pageSum>1">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="articleList.pageSize"
                layout="total, prev, pager, next"
                :total="articleList.pageCount"
                :current-page="currentPage">
            </el-pagination>
        </div>
    </div>
    
</template>

<script>
    const released = 1; //发布
    const review = 2;   //审核
    const drafts = 0;   //草稿
    const all = 9;

    import {centerArticle, delcenterArticle} from '@/api/request';

	export default {
        data() {
            return {
                centerArticle: [],
                articleList: [],
                selectType: 9,
                deleteId: 0,
                startPage: 1,
                pageSize: 10,
                currentPage: 1
            }
        },
        created() {
            this.getData();
        },
        methods: {
            async getData(){
                const params = { startPage: this.startPage, pageSize: this.pageSize, status: this.selectType};
                const res = await centerArticle(params);
                this.centerArticle = res.data;
                this.articleList = res.data.page;
                console.log(this.centerArticle);
            },
            async delData(id, index){
                const res = await delcenterArticle(id);
                this.$message({
                    type: 'success',
                    message: res.data
                });
                this.getData();
            },
            select(type) {
                this.selectType = type;
                this.startPage = 1;
                this.getData();
            },
            showAlert(id, index) {
                this.$msgbox.confirm('您确定删除该文章?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delData(id, index);
                }).catch(() => {        
                });
            },
            selectBtn(type,i) {
                console.log(type+'..'+this.deleteId);
                if(type===1) {
                   this.articleList.splice(i,1);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);

            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.startPage = val;
                this.getData();
            }
        },
        components: {
            alert
        }
  };
</script>

<style lang="scss">
    $system-color-black: #222;
    $system-color-bright: #ffc81f;

    .myArticles-wrapper{
        margin-bottom: 160px;
        .head-tab{
            border-bottom: 1px solid #eee;
            .tab-item{
                float: left;
                margin-right: 60px;
                padding-bottom: 20px;
                font-size: 16px;
                color: #999;
                cursor: pointer;
                &.active{
                    color: $system-color-black;
                    padding-bottom: 19px;
                    border-bottom: 2px solid $system-color-black;
                    transition: all .2s;
                }
            }
        }
        .content-list{
            padding-bottom: 60px;
            .article-item{
                display: flex;
                padding: 30px 0;
                border-bottom: 1px solid #eee;
                .img-wrapper{
                    position: relative;
                    width: 150px;
                    height: 88px;
                    margin-right: 12px;
                    img{
                        width: 150px;
                        height: 88px;
                    }
                    .btm-type{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        height: 26px;
                        line-height: 26px;
                        background: rgba(0,0,0,.8);
                        text-align: center;
                        font-size: 12px;
                        &.draft{
                            color: #fff;
                        }
                        &.review{
                            color: $system-color-bright;
                        }
                    }
                }
                .content{
                    position: relative;
                    flex: 1;
                    h1{
                        display: block;
                        width: 465px;
                        font-size: 16px;
                        color: $system-color-black;
                        font-weight: bold;
                        &:hover{
                            a{
                                color: #4285F4;
                            }
                        }
                        span{
                            display: none;
                        }
                        &.bef-no-img{
                            width: 535px;
                            span{
                                display: inline-block;
                                padding: 0 6px;
                                height: 22px;
                                line-height: 22px;
                                font-size: 14px;
                                margin-right: 8px;
                                &.draft{
                                    border: 1px solid #ccc;
                                    color: #ccc;
                                }
                                &.review{
                                    border: 1px solid $system-color-bright;
                                    color: $system-color-bright;
                                }
                            }
                            & + .label{
                                padding-bottom: 28px;
                                margin-top: 16px;
                            }
                        } 
                    }
                    .label{
                        margin-top: 20px;
                        span{
                            display: inline-block;
                            height: 15px;
                            padding-right: 12px;
                            border-right: 1px solid #ccc;
                            margin-right: 12px;
                            font-size: 14px;
                            color: #ccc;
                            &:last-child{
                                border-right: none;
                                margin-right: 0;
                            }
                        }
                    }
                    .time-type{
                        position: absolute;
                        right: 0;
                        top: 0;
                        font-size: 0;
                        color: #999;
                        span{
                            font-size: 14px;
                        }
                        .type{
                            margin-left: 30px;
                        }
                    }
                    .btn-box{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        font-size: 0;
                        .edit-btn{
                            font-size: 14px;
                            color: #4285F4;
                            cursor: pointer;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        .delete-btn{
                            margin-left: 36px;
                            font-size: 14px;
                            color: #999;
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