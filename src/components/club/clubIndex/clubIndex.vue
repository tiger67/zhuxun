<template>
	<div class="clubindex-wrapper">
        <div class="banner-wrapper clearfix">
            <div class="banner">
                <banner></banner>
            </div>
            <div class="news">
                <ul>
                    <li>
                        <h1 class="line-clamp-2">
                            <router-link to="">冰岛：蓝色泄湖度假酒店</router-link>
                        </h1>
                        <p>30分钟前</p>
                    </li>
                    <li>
                        <h1 class="line-clamp-2">
                            <router-link to="">北辰小汤山农业高科技示范园住宅小区售楼处室内装饰</router-link>
                        </h1>
                        <p>1小时前</p>
                    </li>
                    <li>
                        <h1 class="line-clamp-2">
                            <router-link to="">实拍6栋农村自建房，第三款最漂亮,第六款建的人最多！</router-link>
                        </h1>
                        <p>昨天</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content clearfix">
            <div class="club-left">
                <div class="column-wrapper">
                    <columnItem></columnItem>
                    <columnItem></columnItem>
                    <columnItem></columnItem>
                </div>
            </div>
            <div class="club-right">
                <recommend></recommend>
            </div>
        </div>
		
	</div>
</template>

<script>
    import banner from '@/components/banner/banner';
    import columnItem from './columnItem';
    import recommend from './recommend';

    const ERR_OK = 0;

	export default {
        data() {
            return {
                newslist: [],
                clubClass: []
            }
        },
        created() {
            // this.$http.get('api/newslist').then((response) => {
            //     response = response.data;
            //     if(response.errno === ERR_OK){
            //         console.log(response);
            //         this.newslist = response.data;
            //     }
            // }).catch((error) => {

            // });
            // this.$http.get('api/clubClass').then((response) => {
            //     response = response.data;
            //     if (response.errno === ERR_OK) {
            //         this.clubClass = response.data;
            //     }
            // }).catch((error) => {

            // });
        },
        components: {
            banner,
            columnItem,
            recommend
        }
	};
</script>

<style lang="scss">
    $system-color-black: #222;
    $system-color-bright: #ffc81f;
    $system-color-white: #fff;

	.clubindex-wrapper{
		width: 100%;
		margin-top: 40px;
        .banner-wrapper{
            height: 280px;
            margin-bottom: 39px;
            .banner{
                float: left;
                width: 820px;
                height: 100%;
                background: #f2f2f2;
                .swiper-pagination{
                    text-align: right;
                }
                .swiper-pagination-bullets{
                    width: auto;
                    right: 16px;
                    .swiper-pagination-bullet{
                        width: 20px;
                        height: 3px;
                        border-radius: 0;
                        background: rgba(255,255,255,.3);
                    }
                    .swiper-pagination-bullet-active{
                        background: $system-color-white;
                    }
                }
            }
            .news{
                position: relative;
                float: left;
                width: 292px;
                height: 100%;
                padding: 0 48px 0 40px;
                &:after{
                    content: ' ';
                    position: absolute;
                    bottom: -16px;
                    left: 0;
                    width: 380px;
                    height: 16px;
                    background: url('shadow.png') center bottom no-repeat;
                }
                li{
                    padding-top: 20px;
                    &:first-child{
                        h1{
                            -webkit-line-clamp: 1;
                        }  
                    }
                    h1{
                        line-height: 24px;
                        font-size: 16px;     
                        margin-bottom: 10px;
                        margin-top: -4px;
                        color: $system-color-black;
                        &:before{
                            content: ' ';
                            display: inline-block;
                            width: 6px;
                            height: 6px;
                            border: 2px solid #ddd;
                            border-radius: 50%;
                            margin-right: 10px;
                        }
                    }
                    p{
                        position: relative;
                        display: block;
                        padding-bottom: 15px;
                        font-size: 12px;
                        color: #ccc;
                        &:after{
                            content: ' ';
                            position: absolute;
                            width: 50px;
                            height: 1px;
                            background: #eee;
                            bottom: 0;
                            left: 0;
                        }
                    }
                    &:last-child{
                        p{
                            padding-bottom: 0;
                            &:after{
                                height: 0;
                            }
                        } 
                    }
                }
            }
        }
        .content{
            width: 100%;
            .club-left{
                float: left;
                width: 820px;
                margin-right: 40px;
                .column-wrapper{
                    
                }
            }
            .club-right{
                float: left;
                width: 340px;
                background: #fafafa;
            }
        }
		
	}
</style>