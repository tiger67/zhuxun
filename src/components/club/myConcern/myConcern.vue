<template>
	<div class="myConcern-wrapper">
        <div class="head">
            <div class="avatar">
                <img src="../../../assets/tou2@2x.png">
            </div>
            <p class="name">筑讯小透明</p>
        </div>
        <div class="total-bar">
            共32关注
        </div>
        <div class="content-list">
            <div class="author-item">
                <img src="../../../assets/tou3.png">
                <div class="content">
                    <h1>筑讯中国<i></i></h1>
                    <p class="line-clamp-1">顺其自然大概是一种不想努力的挣扎</p>
                    <div class="fbtn1 followed-btn">取消关注</div>
                </div>
            </div>
            <div class="author-item">
                <img src="../../../assets/tou3.png">
                <div class="content">
                    <h1>筑讯中国<i></i></h1>
                    <p class="line-clamp-1">建筑，在这个社会中扮演什么角色？有什么意义？是文明的痕迹，还是居住的机器，是典雅高贵、粗犷豪放，还是极简主义、功能至上。实际，建筑作品体现着建筑师设计师们的意识形态和他们的世界观。在此，我们不。</p>
                    <div class="fbtn1 followed-btn">取消关注</div>
                </div>
            </div>
            <div class="author-item">
                <img src="../../../assets/tou3.png">
                <div class="content">
                    <h1>筑讯中国<i></i></h1>
                    <p class="line-clamp-1">顺其自然大概是一种不想努力的挣扎</p>
                    <div class="fbtn1 followed-btn">取消关注</div>
                </div>
            </div>
            <div class="author-item">
                <img src="../../../assets/tou3.png">
                <div class="content">
                    <h1>筑讯中国<i></i></h1>
                    <p class="line-clamp-1">顺其自然大概是一种不想努力的挣扎</p>
                    <div class="fbtn1 followed-btn">取消关注</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {

	};
</script>

<style lang="scss">
    $system-color-black: #222;
    
    .myConcern-wrapper{
        width: 800px;
        margin: 0 auto;
        .head{
            text-align: center;
            margin-top: 59px;
            .avatar{
                display: inline-block;
                width: 120px;
                height: 120px;
                margin-bottom: 28px;
                overflow: hidden;
                img{
                    width: 120px;
                    height: 120px;
                }
            }
            .name{
                font-size: 24px;
                color: $system-color-black;
            }   
        }
        .total-bar{
            margin-top: 68px;
            padding-bottom: 9px;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
            color: $system-color-black;
        }
        .content-list{
            .author-item{
                display: flex;
                padding: 40px 0;
                border-bottom: 1px solid #eee;
                align-items: center;
                img{
                    width: 48px;
                    height: 48px;
                }
                .content{
                    position: relative;
                    flex: 1;
                    margin-left: 10px;
                    h1{
                        margin-bottom: 12px;
                        font-size: 16px;
                        color: $system-color-black;
                        i{
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            background: url('../../../common/img/v1.png') center center no-repeat;
                            margin-left: 8px;
                            vertical-align: top;
                        }
                    }
                    p{
                        display: block;
                        width: 570px;
                        font-size: 14px;
                        color: #999;
                    }
                    .fbtn1{
                        position: absolute;
                        right: 0;
                        top: 0;
                        cursor: pointer;
                    }
                }
            }
            
        }
    }
</style>