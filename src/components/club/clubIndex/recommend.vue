<template>
	<div class="recommend-wrapper">
        <div class="head">
            <h1>筑讯推荐</h1>
            <span @click="exchange"><i class="icon-refresh"></i>换一换</span>
        </div>
        <div class="content">
            <ul>
                <li v-for="item in recommendList.pageData" :key="item.articleId">
                    <h2 class="line-clamp-2">
                        <router-link :to="'/article/'+item.articleId">{{item.title}}</router-link>
                    </h2>
                    <div class="com-name bottom">
                        <img class="avatar" :src="item.photo">
                        <span class="name">{{item.nickName}}</span>
                        <i class="v1" v-if="item.auth_status===1 && item.user_type===1"></i>
                        <i class="v2" v-else="item.auth_status===1 && item.user_type===0"></i>
                        <span class="time">{{item.publishTime | formatDate}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import {recommend} from '@/api/request';
    import {goodTime} from '@/common/js/date';

	export default {
        data() {
            return {
                recommendList: [],
                startPage: 1,
                pageSize: 6,
                maxPage: 1
            }
        },
        created() {
            this.getData();
        },
        methods: {
            async getData() {
                const params = { startPage: this.startPage, pageSize: this.pageSize };
                const res = await recommend(params);
                this.recommendList = res.data;
                this.maxPage = res.data.pageSum
                console.log(res.data);
            },
            exchange() {
                if( this.startPage < this.maxPage ){
                    this.startPage++;
                    this.getData();
                }else{
                    this.startPage = 1;
                    this.getData();
                }
                
            }
        },
        filters: {
            formatDate(time) {
                return goodTime(time);
            }
        }
	};
</script>

<style scoped lang="scss">
	$system-color-black: #222;
    $system-color-bright: #ffc81f;

	.recommend-wrapper{
		.head{
            height: 66px;
            position: relative;
            h1{
                margin-top: 22px;
                padding-left: 16px;
                border-left: 4px solid $system-color-bright;
                font-size: 20px;
                font-weight: bold;
                color: $system-color-black;
            }
            span{
                display: inline-block;
                position: absolute;
                right: 20px;
                top: 6px;
                font-size: 14px;
                color: #999;
                cursor: pointer;
                i{
                    display: inline-block;
                    margin-right: 6px;
                    vertical-align: middle;
                }
            }
        }
        .content{
            li{
                padding-bottom: 30px;
                border-bottom: 1px solid #eee;
                margin: 0 20px 30px 20px;
                h2{
                    line-height: 30px;
                    margin-top: -6px;
                    font-size: 18px;
                    color: $system-color-black;
                }
                .bottom{
                    position: relative;
                    margin-top: 15px;
                    font-size: 0;
                    .avatar{
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                    }
                    .name{
                        display: inline-block;
                        padding: 0 10px;
                        line-height: 25px;
                        vertical-align: top;
                        font-size: 14px;
                        color: #aeb9cb;
                        font-weight: normal;
                    }
                    .time{
                        position: absolute;
                        right: 0;
                        bottom: 5px;
                        font-size: 12px;
                        color: #ccc;
                        font-weight: normal;
                    }
                    i{
                        display: inline-block;
                        width: 16px;
                        height: 25px;
                        background: url('../../../common/img/v1.png') center center no-repeat;
                    }
                }
                &:last-child{
                    border-bottom: none;
                    margin-bottom: 0;
                }
            }
        }
	}
</style>