<template>
    <div>
        <vHeader></vheader>
        <div class="visitor-wrapper">
            <div class="head-wrapper">
                <img src="../../assets/center_bg.png">
            </div>
            <div class="author-info">
                <div class="com-avatar">
                    <img :src="listContent.photoUrl">
                </div>
                <div class="com-name">
                    <span>{{listContent.userName}}</span>
                    <i class="v1" v-if="listContent.auth_status===1 && listContent.user_type===1"></i>
                    <i class="v2" v-else="listContent.auth_status===1 && listContent.user_type===0"></i>
                </div>
                <p class="intro">{{listContent.cityName}} <span v-if="listContent.industry">|</span> {{listContent.industry}}</p>
                <div class="fbtn1 m-follow-btn" @click="attention()" v-if="listContent.attention_status===0">+ 关注</div>
                <div class="fbtn1 followed-btn" v-if="listContent.attention_status===1">已关注</div>
                <div class="self-introduction">
                    {{listContent.introduce}}
                </div>
            </div>
            <div class="menu-bar">
                <div class="menu-item" @click="getPersonalInfo(1)"><span :class="{'active': typee===1}">文章</span></div>
                <div class="menu-item" @click="getPersonalInfo(2)"><span :class="{'active': typee===2}">收藏</span></div>
            </div>
            <div class="listContent-wrapper">
                <articleListV :ArticleList="ArticleList" :userArticle="userArticle"></articleListV>
            </div>
            <div class="com-empty-status" v-if="articleRspVos.pageCount==0">
                <img src="@/common/img/empty.png">
                <p>暂无文章</p>
            </div>
            <div class="paginate-wrapper" v-if="articleRspVos.pageSum>1">
                <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :page-size="articleRspVos.pageSize"
                    layout="total, prev, pager, next"
                    :total="articleRspVos.pageCount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '@/components/header/header';
    import articleListV from '@/components/articleList/articleList';
    import { getPersonalInfo, reAttention } from '@/api/request';

    export default {
        data() {
            return {
                startPage: 1,
                pageSize: 10,
                typee: 1,
                userId: this.$route.params.id,
                listContent: {},
                articleRspVos: {},
                ArticleList: [],
                userArticle: 0,
            }
        },
        created() {
            this.getPersonalInfo(1);
        },
        methods: {
            async getPersonalInfo(typee){
                this.typee = typee;
                if(typee===1){ this.userArticle = 1; }else{ this.userArticle = 0; }
                const params = { 'startPage': this.startPage, 'pageSize': this.pageSize, 'userId': this.userId, 'type': this.typee };
                const res = await getPersonalInfo(params);
                console.log(res);
                this.listContent = res.data;
                this.articleRspVos = res.data.articleRspVos;
                this.ArticleList = res.data.articleRspVos.pageData;
            },
            async attention(){
                const id = this.$route.params.id;
                const res = await reAttention(id);
                this.$message({
                    message: res.data,
                    type: 'success'
                });
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.startPage = val;
                this.getPersonalInfo(this.typee);
            }
        },
        components: {
            'vHeader': header,
            articleListV
        }
    };
</script>

<style lang="scss">
    $system-color-black: #222;
    
    .visitor-wrapper{
        padding-top: 60px;
        margin-bottom: 120px;
        .head-wrapper{
            height: 240px;
            img{
                width: 100%;
                height: 240px;
            }
        }
        .author-info{
            text-align: center;
            margin-top: -70px;
            .com-avatar{
                width: 120px;
                height: 120px;
                padding: 9px;
                background: #fff;
            }
            .com-name{
                margin: 20px 0 17px 0;
                span{
                    font-size: 24px;
                    font-weight: normal;
                } 
            }
            .intro{
                font-size: 14px;
                color: #ccc;
                margin-bottom: 35px;
            }
            .self-introduction{
                width: 840px;
                font-size: 14px;
                color: #999;
                line-height: 24px;
                margin: 35px auto;
            }
        }
        .menu-bar{
            width: 1200px;
            margin: 0 auto;
            border-bottom: 1px solid #ddd;
            text-align: center;
            .menu-item{
                display: inline-block;
                padding: 0 50px;
                cursor: pointer;
                span{
                    display: inline-block;
                    width: 90px;
                    text-align: center;
                    font-size: 16px;
                    color: #999;
                    padding-bottom: 20px;
                    &.active{
                        padding-bottom: 18px;
                        border-bottom: 2px solid $system-color-black;
                    }
                }
            }
        }
        .listContent-wrapper{
            width: 840px;
            margin: 0 auto;
            .articleList-wrapper{
                .atc-unit{
                    padding: 40px 0;
                    margin: 0;
                    border-bottom: 1px solid #eee;
                }
            }
        }
    }
</style>