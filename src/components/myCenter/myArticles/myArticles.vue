<template>
	<div class="myArticles-wrapper">
        <div class="head-tab clearfix">
            <div class="tab-item" :class="{'active': selectType===0}" @click="select(0)">全部文章({{articleList.length}})</div>
            <div class="tab-item" :class="{'active': selectType===1}" @click="select(1)">已发布({{released.length}})</div>
            <div class="tab-item" :class="{'active': selectType===3}" @click="select(3)">草稿箱({{drafts.length}})</div>
            <div class="tab-item" :class="{'active': selectType===2}" @click="select(2)">待审核({{review.length}})</div>
        </div>
        <div class="content-list">
            <div class="article-item" v-show="needShow(item.type)" v-for="(item,index) in articleList">
                <div class="img-wrapper" v-if="item.hasImg===1">
                    <img :src="item.img">
                    <div class="btm-type draft" v-if="item.type===3">草稿</div>
                    <div class="btm-type review" v-if="item.type===2">审核中</div>
                </div>
                <div class="content">
                    <h1 class="line-clamp-1" :class="{'bef-no-img':item.hasImg!=1}">
                        <span class="draft" v-if="item.hasImg!=1 && item.type===3">草稿</span>
                        <span class="review" v-if="item.hasImg!=1 && item.type===2">审核中</span>
                        <router-link to="">{{item.title}}</router-link>
                    </h1>
                    <div class="label">
                        <span v-for="labell in item.label">{{labell.name}}</span>
                    </div>
                    <div class="time-type">
                        <span class="time">{{item.time}}</span>
                        <span class="type" v-if="item.type===1">发布</span><span class="type" v-if="item.type===2 || item.type===3">保存</span>
                    </div>
                    <div class="btn-box">
                        <router-link :to="{path: '/editor/' + item.id}" target="_blank">
                            <span class="edit-btn" v-if="item.type===3">编辑</span>
                        </router-link>
                        <span class="delete-btn"  @click="showAlert(item.id,index)">删除</span>
                    </div>
                </div>
            </div>
        </div>
        <alert ref="alert" @select-btn="selectBtn">确定要删除这篇文章吗？</alert>
    </div>
    
</template>

<script>
    const released = 1;
    const review = 2;
    const drafts = 3;
    const all = 0;

    import alert from '@/components/alert/alert';

	export default {
        data() {
            return {
                articleList: [
                    {
                        'id': 1,
                        'title': '华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排',
                        'img': './assets/pic1.png',
                        'hasImg': 1, //1是true，0是false
                        'label': [{'name': '艺术设计'},{'name': '建筑设计'}],
                        'time': '2018-08-20  14:15:24',
                        'type': 1, //1是已发布，2是待审核，3是草稿箱
                    },
                    {
                        'id': 2,
                        'title': '华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排',
                        'img': '../../../assets/pic1.png',
                        'hasImg': 1,
                        'label': [{'name': '艺术设计'},{'name': '建筑设计'}],
                        'time': '2018-08-20  14:15:24',
                        'type': 2, 
                    },
                    {
                        'id': 3,
                        'title': '华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排',
                        'img': '../../../assets/pic1.png',
                        'hasImg': 1,
                        'label': [{'name': '艺术设计'},{'name': '建筑设计'}],
                        'time': '2018-08-20  14:15:24',
                        'type': 3, 
                    },
                    {
                        'id': 4,
                        'title': '华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排',
                        'img': '../../../assets/pic1.png',
                        'hasImg': 0,
                        'label': [{'name': '艺术设计'},{'name': '建筑设计'}],
                        'time': '2018-08-20  14:15:24',
                        'type': 1,
                    },
                    {
                        'id': 5,
                        'title': '华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排',
                        'img': '../../../assets/pic1.png',
                        'hasImg': 0,
                        'label': [{'name': '艺术设计'},{'name': '建筑设计'}],
                        'time': '2018-08-20  14:15:24',
                        'type': 2,
                    },
                    {
                        'id': 6,
                        'title': '华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排',
                        'img': '../../../assets/pic1.png',
                        'hasImg': 0,
                        'label': [{'name': '艺术设计'},{'name': '建筑设计'}],
                        'time': '2018-08-20  14:15:24',
                        'type': 3,
                    },
                    {
                        'id': 7,
                        'title': '华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排',
                        'img': '../../../assets/pic1.png',
                        'hasImg': 1,
                        'label': [{'name': '艺术设计'},{'name': '建筑设计'}],
                        'time': '2018-08-20  14:15:24',
                        'type': 1, 
                    }
                ],
                selectType: 0,
                deleteId: 0
            }
        },
        computed: {
            released() {
                return this.articleList.filter((article) => {
                    return article.type === released;
                })
            },
            review() {
                return this.articleList.filter((article) => {
                    return article.type === review;
                })
            },
            drafts() {
                return this.articleList.filter((article) => {
                    return article.type === drafts;
                })
            }
        },
        methods: {
            select(type) {
                this.selectType = type;
            },
            needShow(type){
                if(this.selectType === all){
                    return true;
                }else{
                    return type === this.selectType;
                }
            },
            showAlert(id) {
                document.body.style.overflow='hidden';
                this.$refs.alert.show();
                this.deleteId = id;
            },
            selectBtn(type,i) {
                console.log(type+'..'+this.deleteId);
                if(type===1) {
                   this.articleList.splice(i,1);
                }
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