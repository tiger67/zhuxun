<template>
    <div class="column-wrapper">
    	<div class="column-item" v-for="tag in tagsAndArticle">
            <div class="head">
                <h1><span>{{tag.tagName}}</span>Art Design</h1>
                <div class="label">
                    <router-link to="">
                        <v-label :tagRspVos="tag.tagRspVos"></v-label>
                        <i class="icon-more"></i>
                    </router-link>
                </div>
            </div>
            <div class="list-wrapper">
                <div class="img-list">
                    <div class="info-item" v-for="(item, index) in tag.hotNewsRspVos" v-if="index<2">
                        <div class="info">
                            <img :src="item.thumbnailUrl">
                            <div class="info-text">
                                <h2 class="line-clamp-2">  
                                    <router-link to=""><span class="icon_jing">精</span>{{item.title}}</router-link>
                                    <!-- <span class="icon_re">热</span> -->
                                </h2>
                                <p>{{item.publishTime}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="noimg-list">
                    <div class="list">
                        <ul class="clearfix">
                            <li class="line-clamp-1" v-for="item in tag.newsRspVos" :key="item.articleId">
                                <router-link to="">{{item.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
	import label from '@/components/label/label';
    import {tagsAndArticle} from '@/api/request';

	export default {
        data(){
            return {
                tagsAndArticle: []
            }
        },
        created() {
            this.getData();
        },
        methods: {
            async getData() {
                const res = await tagsAndArticle();
                this.tagsAndArticle = res.data;
            }
        },
		components: {
            'v-label': label
        }
	};
</script>

<style scoped lang="scss">
	$system-color-black: #222;
	$system-color-bright: #ffc81f;
	$system-color-white: #fff;
	.column-wrapper{
    	.column-item{
            margin-bottom: 28px;
            .head{
                height: 61px;
                line-height: 61px;
                border-bottom: 1px solid #eee;
                margin-bottom: 33px;
                h1{
                    display: inline-block;
                    font-size: 18px;
                    color: #ccc;
                    span{
                        display: inline-block;
                        font-size: 24px;
                        color: $system-color-black;
                        border-bottom: 4px solid #ddd;
                        margin-right: 8px;
                    }
                }
                .label{
                    float: right;
                    i{
                        display: inline-block;
                        font-size: 10px;
                        vertical-align: middle;
                        margin-left: 10px;
                    }
                }
            }
            .list-wrapper{
                .img-list{
                    display: flex;
                    .info-item{
                        flex: 1;
                        &:first-child{
                            margin-right: 38px;
                        }
                        .info{
                            display: flex;
                            margin-bottom: 30px;
                            img{
                                width: 150px;
                                height: 88px;
                            }
                            .info-text{
                                position: relative;
                                margin-left: 10px;
                                flex: 1;
                                h2{
                                    margin-top: -6px;
                                    a{
                                        line-height: 26px;
                                        font-size: 18px;
                                        font-weight: bold;
                                        color: $system-color-black;
                                    }
                                    span{
                                        display: inline-block;
                                        width: 20px;
                                        height: 20px;
                                        line-height: 20px;
                                        margin-right: 8px;
                                        border-radius: 4px;
                                        font-size: 12px;
                                        text-align: center;
                                        &.icon_jing{
                                            background: $system-color-bright;
                                            color: $system-color-black;
                                        }
                                        &.icon_re{
                                            background: #f4523b;
                                            color: $system-color-white;
                                        }
                                    }
                                }
                                p{
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    font-size: 9px;
                                    color: #ccc;
                                }
                            } 
                        }
                    }
                    
                }
                .noimg-list{
                    .list{
                        li{
                            position: relative;
                            float: left;
                            width: 348px;
                            padding-left: 11px;
                            margin-bottom: 20px;
                            line-height: 14px;
                            font-size: 14px;
                            color: $system-color-black;
                            &:nth-child(odd){
                                margin-right: 70px;
                            }
                            &:before{
                                content: " ";  
                                position: absolute;
                                left: 0;
                                top: 5px;
                                background: #999;
                                width: 3px;
                                height: 3px;
                            }
                        }
                        
                    }
                }
                
            }
        }
    }
</style>