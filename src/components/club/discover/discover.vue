<template>
	<div class="discover-wrapper">
        <div class="member">
            <div class="head-bar">
                <i class="icon-title1"></i><h1>新增会员</h1><i class="icon-title2"></i>
                <span class="all">
                    <router-link to="/allNew/0">全部<i class="icon-more"></i></router-link>
                </span>
            </div>
            <div class="card-content clearfix">
                <div class="card-item" v-for="(item,index) in vipList" :key="item.userId">
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
                        <div class="fbtn1 m-follow-btn" v-if="item.activeName" @click="attention(index, item.userId)">
                            <i class="iconfont ic-follow"></i> 关注
                        </div>
                        <div class="fbtn1 followed-btn" v-if="!item.activeName"><i class="iconfont ic-followed"></i> 已关注</div>
                    </div>   
                </div>
            </div>
        </div>
        <div class="organization">
            <div class="head-bar">
                <i class="icon-title1"></i><h1>新增机构</h1><i class="icon-title2"></i>
                <span class="all">
                    <router-link to="/allNew/1">全部<i class="icon-more"></i></router-link>
                </span>
            </div>
            <div class="card-content clearfix">
                <div class="card-item" v-for="item in OrganList" :key="item.userId ">
                    <div class="com-avatar">
                        <img :src="item.photo">
                    </div>
                    <div class="com-name">
                        <span>{{item.nickName}}</span>
                        <i class="v1" v-if="item.auth_status===1"></i>
                    </div>
                    <div class="intro line-clamp-3">
                        {{item.introduce}}
                    </div>
                    <div class="btn-box">
                        <div class="fbtn1 o-follow-btn">+ 关注</div>
                    </div>   
                </div>
            </div>
        </div>
        <div class="club">
            <div class="head-bar">
                <i class="icon-title1"></i><h1>行业圈子</h1><i class="icon-title2"></i>
                <span class="all">
                    <router-link to="">更多<i class="icon-more"></i></router-link>
                </span>
            </div>
            <div class="club-content clearfix">
                <div class="club-item" v-for="item in industry" :key="item.id">
                    <img :src="item.logo">
                    <div class="content">
                        <h2 class="line-clamp-1">{{item.industryName }}</h2>
                        <p class="intro line-clamp-2">{{item.tagDesc }}</p>
                        <div class="fans"><i class="icon-user"></i>{{item.gzNum}}人</div>
                        <div class="label">
                            <v-label :tagRspVos="item.tagRspVos"></v-label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import label from '@/components/label/label';
    import { vipOrganList, industry, reAttention } from '@/api/request';

	export default {
        data() {
            return {
                vipList: [],
                OrganList: [],
                industry: []
            }
        },
        created() {
            this.getvipOrgan();
            this.getIndustry();
        },
        methods: {
            async getvipOrgan(){
                const res = await vipOrganList();
                console.log(res);
                this.vipList = res.data.vipList;
                this.OrganList = res.data.OrganList;

                this.vipList.forEach(item => {
                    this.$set(item, 'activeName', true)
                });
            },
            async getIndustry(){
                const res = await industry();
                console.log(res);
                this.industry = res.data;
            },
            async attention(i,id){
                const res = await reAttention(id);
                this.vipList[i].activeName = !this.vipList[i].activeName;
                this.$message({
                    message: res.data,
                    type: 'success'
                });
            }
        },
        components: {
            'v-label': label
        }
	};
</script>

<style lang="scss">
    $system-color-black: #222;

    .discover-wrapper{
        padding-bottom: 113px;
        .head-bar{
            position: relative;
            padding-top: 75px;
            height: 44px;
            border-bottom: 1px solid #eee;
            text-align: center;
            .icon-title1,.icon-title2{
                vertical-align: middle;
            }
            h1{
                display: inline-block;
                padding: 0 48px;
                font-size: 24px;
                color: $system-color-black;
                font-weight: bold;
            }
            .all{
                position: absolute;
                right: 0;
                bottom: 19px;
                font-size: 14px;
                a{
                    color: #999;
                }
                i{
                    display: inline-block;
                    font-size: 10px;
                    margin-left: 8px;
                }
            }
        }
        .card-content{
            margin-top: 87px;
            .card-item{
                position: relative;
                float: left;
                width: 250px;
                height: 280px;
                margin-right: 67px;
                background: #fafafa;
                text-align: center;
                &:nth-child(2){
                    margin-right: 66px;
                }
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
                    box-shadow:0px 4px 10px 0px rgba(34,34,34,0.08);
                }
            }
        }
        .club{
            .club-content{
                .club-item{
                    float: left;
                    margin-top: 60px;
                    &:nth-child(odd){
                        padding-right: 69px;
                        border-right: 1px dashed #ccc;
                        margin-right: 32px;
                    }
                    img{
                        width: 160px;
                        height: 160px;
                        float: left;
                    }
                    .content{
                        float: left;
                        width: 350px;
                        margin-left: 20px;
                        h2{
                            font-size: 18px;
                            color: $system-color-black;
                            margin-bottom: 15px;
                        }
                        .intro{
                            font-size: 14px;
                            color: #999;
                            line-height: 24px;
                        }
                        .fans{
                            margin: 15px 0 20px 0;
                            font-size: 14px;
                            color: #ccc;
                            i{
                                display: inline-block;
                                font-size: 16px;
                                margin-right: 5px;
                            }
                        }
                        .label{
                            .label-wrapper{
                                span{
                                    margin-left: 10px;
                                    &:first-child{
                                        margin-left: 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
</style>