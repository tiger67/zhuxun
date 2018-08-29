<template>
    <div>
        <vHeader></vheader>
        <div class="visitor-wrapper">
            <div class="head-wrapper">
                <img src="../../assets/center_bg.png">
            </div>
            <div class="author-info">
                <div class="com-avatar">
                    <img src="../../assets/tou2@2x.png">
                </div>
                <div class="com-name">
                    <span>筑讯中国</span><i class="v2"></i>
                </div>
                <p class="intro">深圳 | 建筑爱好者</p>
                <div class="fbtn1 m-follow-btn">+ 关注</div>
                <div class="self-introduction">
                    大家好~我叫XXX（大名），平时大家可以叫我小依（小名），今年刚好14岁了。说道自己的性格，其实我自己也不是很清楚，有的时候
    很细心，有的时候很粗心.有时候的很暴躁，也有时候的很耐心.（这话打上去很有个性的，挺脱俗的）我平时最喜欢
    的事是坐在自己的书桌前，拉开窗帘，让温暖的阳光照在身上，塞上耳机，播放自己最喜欢的音乐《XXX》（这里一定要是抒情歌曲），
    之后握起一枝笔，在自己的本子上记录下自己的心情、体会、经历，
                </div>
            </div>
            <div class="menu-bar">
                <div class="menu-item">
                    <router-link to="/visitor/listContent">文章</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/visitor/collectList">收藏</router-link>
                </div>
            </div>
            <div>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '@/components/header/header';
    export default {
        components: {
            'vHeader': header
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
                a{
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
    }
</style>