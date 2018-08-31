<template>
	<div class="recommend-wrapper">
        <div class="head">
            <h1>筑讯推荐</h1>
            <span><i class="icon-refresh"></i>换一换</span>
        </div>
        <div class="content">
            <ul>
                <li>
                    <h2 class="line-clamp-2">
                        <router-link to="">好的客户的很到位和地位的hi我的好的客户的很到位和地位的hi我的好的客户的很到位和地位的hi我的</router-link>
                    </h2>
                    <div class="bottom">
                        <img class="avatar" src="../../../assets/tou1.png">
                        <span class="name">李某人李某人李某人李</span>
                        <i></i>
                        <span class="time">12小时前</span>
                    </div>
                </li>
                <li>
                    <h2 class="line-clamp-2">
                        <router-link to="">好的客户的很到位和地位的hi我的</router-link>
                    </h2>
                    <div class="bottom">
                        <img class="avatar" src="../../../assets/tou2.png">
                        <span class="name">李某人李某人李某人李</span>
                        <i></i>
                        <span class="time">12小时前</span>
                    </div>
                </li>
                <li>
                    <h2 class="line-clamp-2">
                        <router-link to="">好的客户的很到位和地位的hi我的</router-link>
                    </h2>
                    <div class="bottom">
                        <img class="avatar" src="../../../assets/tou2.png">
                        <span class="name">李某人</span>
                        <i></i>
                        <span class="time">12小时前</span>
                    </div>
                </li>
                <li>
                    <h2 class="line-clamp-2">
                        <router-link to="">好的客户的很到位和地位的hi我的好的客户的很到位和地位的hi我的好的客户的很到位和地位的hi我的</router-link>
                    </h2>
                    <div class="bottom">
                        <img class="avatar" src="../../../assets/tou1.png">
                        <span class="name">李某人李某人李某人李</span>
                        <i></i>
                        <span class="time">12小时前</span>
                    </div>
                </li>
                <li>
                    <h2 class="line-clamp-2">
                        <router-link to="">好的客户的很到位和地位的hi我的</router-link>
                    </h2>
                    <div class="bottom">
                        <img class="avatar" src="../../../assets/tou2.png">
                        <span class="name">李某人李某人李某人李</span>
                        <i></i>
                        <span class="time">12小时前</span>
                    </div>
                </li>
                <li>
                    <h2 class="line-clamp-2">
                        <router-link to="">好的客户的很到位和地位的hi我的</router-link>
                    </h2>
                    <div class="bottom">
                        <img class="avatar" src="../../../assets/tou2.png">
                        <span class="name">李某人</span>
                        <i></i>
                        <span class="time">12小时前</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
	export default {

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
                    }
                    .time{
                        position: absolute;
                        right: 0;
                        bottom: 5px;
                        font-size: 12px;
                        color: #ccc;
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