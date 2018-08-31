<template>
	<div class="column-item">
        <div class="head">
            <h1><span>艺术设计</span>Art Design</h1>
            <div class="label">
                <router-link to="">
                    <v-label></v-label>
                    <i class="icon-more"></i>
                </router-link>
            </div>
        </div>
        <div class="list-wrapper">
            <div class="left">
                <div class="info">
                    <img src="../../../assets/pic1.png">
                    <div class="info-text">
                        <h2 class="line-clamp-2">  
                            <router-link to=""><span class="icon_jing">精</span>冰岛第三季度很简单涉及到回家啊</router-link>
                        </h2>
                        <p>2018-08-14</p>
                    </div>
                </div>
                <div class="list">
                    <ul>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="info">
                    <img src="../../../assets/pic2.png">
                    <div class="info-text">
                        <h2 class="line-clamp-2">
                            <router-link to=""><span class="icon_re">热</span>冰岛第三季度很简单涉及到回家啊冰岛第三季度很简单涉及到回家啊</router-link>
                        </h2>
                        <p>2018-08-14</p>
                    </div>
                </div>
                <div class="list">
                    <ul>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                        <li>
                            <router-link to="">对话框未收到货款未收到坑王驾到</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
	import label from '@/components/label/label';

	export default {
		components: {
            'v-label': label
        }
	};
</script>

<style scoped lang="scss">
	$system-color-black: #222;
	$system-color-bright: #ffc81f;
	$system-color-white: #fff;
	
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
            display: flex;
            .left,.right{
                flex: 1;
            }
            .left{
                margin-right: 40px;
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
            .list{
                li{
                    position: relative;
                    width: 360px;
                    padding-left: 11px;
                    margin-bottom: 21px;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 14px;
                    font-size: 14px;
                    color: $system-color-black;
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
</style>