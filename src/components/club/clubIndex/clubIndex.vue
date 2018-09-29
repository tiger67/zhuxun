<template>
	<div class="clubindex-wrapper">
        <div class="banner-wrapper clearfix">
            <div class="banner">
                <banner></banner>
            </div>
            <div class="news">
                <ul>
                    <li v-for="item in newslist.slice(0, 3)" :key="item.articleId">
                        <h1 class="line-clamp-2">
                            <a :href="item.link" target="_blank">{{item.title}}</a>
                        </h1>
                        <p>{{item.publishTime | formatDate}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content clearfix">
            <div class="club-left">
                <columnItem></columnItem>
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
    import {newsFlash} from '@/api/request';
    import {goodTime} from '@/common/js/date';


    const ERR_OK = 0;

	export default {
        data() {
            return {
                newslist: [],
                clubClass: []
            }
        },
        created() {
            this.getData();
        },
        methods: {
            async getData() {
                const res = await newsFlash();
                this.newslist = res.data;
            }
        },
        components: {
            banner,
            columnItem,
            recommend
        },
        filters: {
            formatDate(time) {
                return goodTime(time);
            }
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
                min-height: 100px;
                margin-right: 40px;
            }
            .club-right{
                float: left;
                width: 340px;
                min-height: 100px;
                background: #fafafa;
            }
        }
		
	}
</style>