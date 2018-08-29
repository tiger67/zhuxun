<template>
    <div class="comment-wrapper">
        <div class="comment-list">
            <div class="comment-item">
                <h1>华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</h1>
                <div class="main">
                    <div class="head clearfix">
                        <img src="../../../../assets/tou4.png">
                        <div class="info-wrapper">
                            <div class="com-name">
                                <span>筑讯中国</span><i class="v1"></i>
                            </div>
                            <p class="floor">1楼 · 6小时前</p>
                        </div>
                    </div>
                    <div class="comment-bar">
                        <p class="others-comment">你改个文件名试试，根本不能打包封装</p>
                        <div class="operation">
                            <i class="icon-comment" @click="replyComment"></i>
                            <span class="praise-wrap"><i :class="{'icon-like':isPraise===0,'icon-liked': isPraise===1}" @click="praise"></i><span>122</span></span>
                        </div>
                        <transition name="reply">
                            <div class="reply-form" v-show="replyBox">
                                <input class="input"></input>
                                <span class="submit">提交</span>
                            </div>
                        </transition>
                    </div>
                    
                </div>
            </div>
            <div class="comment-item">
                <h1>华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</h1>
                <div class="main">
                    <div class="head clearfix">
                        <img src="../../../../assets/tou4.png">
                        <div class="info-wrapper">
                            <div class="com-name">
                                <span>筑讯中国</span><i class="v1"></i>
                            </div>
                            <p class="floor">1楼 · 6小时前</p>
                        </div>
                    </div>
                    <div class="comment-bar">
                        <div class="reply-others-comment">
                            <p class="comment-content">
                                <span class="name">情依依：</span>
                                Sed fringilla et quam a tempus. Nam volutpat augue eu lorem maximus, id luctus dolor venenatis. Morbi et 
    vestibulum orci. Donec pretium suscipit massa quis convallis. Etiam et est dolor. Quisque eget lectus id risus 
    vulputate venenatis. Praesent varius facilisis lorem id sagittis. Nullam vel elit quis neque dapibus lacinia.
                            </p>
                            <p class="time">2分钟前</p>
                        </div>
                        <p class="reply-p">说中文好吗？</p>
                        <div class="operation">
                            <i class="icon-delete"></i>
                            <span class="praise-wrap"><i :class="{'icon-like':isPraise===0,'icon-liked': isPraise===1}" @click="praise"></i><span>122</span></span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="comment-item">
                <h1>华奎区长连夜组织召开全区违法建设、违法销售和扬尘治理工作会议第二排</h1>
                <div class="main">
                    <div class="head clearfix">
                        <img src="../../../../assets/tou4.png">
                        <div class="info-wrapper">
                            <div class="com-name">
                                <span>筑讯中国</span><i class="v1"></i>
                            </div>
                            <p class="floor">1楼 · 6小时前</p>
                        </div>
                    </div>
                    <div class="comment-bar">
                        <p class="reply-p">说中文好吗？</p>
                        <div class="reply-others-comment">
                            <p class="comment-content">
                                <span class="name">情依依：</span>
                                Sed fringilla et quam a tempus. Nam volutpat augue eu lorem maximus, id luctus dolor venenatis. Morbi et 
    vestibulum orci. Donec pretium suscipit massa quis convallis. Etiam et est dolor. Quisque eget lectus id risus 
    vulputate venenatis. Praesent varius facilisis lorem id sagittis. Nullam vel elit quis neque dapibus lacinia.
                            </p>
                            <p class="time">2分钟前</p>
                            <div class="operation">
                                <i class="icon-delete"></i>
                                <span class="praise-wrap"><i :class="{'icon-like':isPraise===0,'icon-liked': isPraise===1}" @click="praise"></i><span>122</span></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
</template>

<script>
    export default {
        data() {
            return {
                replyBox: false,
                isPraise: 0
            }
        },
        methods: {
            replyComment() {
                this.replyBox = !this.replyBox;
            },
            praise() {
                this.isPraise = 1;
            }
        }
    };
</script>

<style lang="scss">
    $system-color-black: #222;
    $system-bgcolor: #fafafa;

    .comment-wrapper{
        margin-bottom: 179px;
        .comment-list{
            padding-bottom: 60px;
            .comment-item{
                padding: 30px 0;
                border-bottom: 1px solid #eee;
                h1{
                    font-size: 18px;
                    color: $system-color-black;
                    font-weight: bold;
                }
                .main{
                    padding: 20px 20px 0 20px;
                    margin-top: 20px;
                    border: 1px solid #eee;
                    .head{
                        img{
                            float: left;
                            width: 40px;
                            height: 40px;
                        }
                        .info-wrapper{
                            float: left;
                            margin-left: 15px;
                            .com-name{
                                span{
                                    font-size: 14px;
                                    color: #666;
                                    font-weight: normal;
                                }
                            }
                            .floor{
                                margin-top: 7px;
                                font-size: 12px;
                                color: #999;
                            }
                        }
                    }
                    .comment-bar{
                        margin-left: 55px;
                        .others-comment{
                            font-size: 16px;
                            color: $system-color-black;
                            margin-top: 23px;
                        }
                        .reply-others-comment{
                            position: relative;
                            padding: 15px 26px 19px 19px;
                            border: 1px solid #eee;
                            margin: 20px 0;
                            background: $system-bgcolor;
                            .comment-content{
                                font-size: 14px;
                                color: $system-color-black;
                                line-height: 24px;
                                .name{
                                    color: #4285F4;
                                }
                            }
                            .time{
                                font-size: 14px;
                                color: #999;
                                margin-top: 17px;
                            }
                            .operation{
                                position: absolute;
                                bottom: 0;
                                right: 22px;
                            }
                        }
                        .reply-p{
                            font-size: 16px;
                            color: $system-color-black;
                            margin-top: 19px;
                        }
                        .operation{
                            padding: 20px 0 10px 0;
                            text-align: right;
                            font-size: 0;
                            i{
                                font-size: 18px;
                                cursor: pointer;
                            }
                            .praise-wrap{
                                margin-left: 15px;
                                font-size: 14px;
                                color: #666;
                                i{
                                    font-size: 18px;
                                    cursor: pointer;
                                }
                                span{
                                    margin-left: 4px;
                                }
                            }
                        }
                        .reply-form{
                            display: flex;
                            height: 48px;
                            border: 1px solid #eee;
                            margin: 10px 0 20px 0;
                            background: $system-bgcolor;
                            transition: all 0.5s;
                            &.reply-enter-active,&.reply-leave-active{
                                transition: all 0.5s;
                                height: 48px;
                                margin: 10px 0 20px 0;
                                .input{
                                    line-height: 28px;
                                    padding: 10px 20px;
                                }
                            }
                            &.reply-enter,&.reply-leave-to{
                                height: 0;
                                margin: 0;
                                .input{
                                    height: 0;
                                    padding: 0;
                                }
                                .submit{
                                    height: 0;
                                    opacity: 0;
                                }
                            }
                            .input{
                                flex: 1;
                                height: 28px;
                                line-height: 28px;
                                padding: 10px 20px;
                                border: none;
                                background: $system-bgcolor;
                                font-size: 14px;
                                color: $system-color-black;
                                transition: all 0.5s;
                            }
                            .submit{
                                display: inline-block;
                                width: 88px;
                                height: 28px;
                                line-height: 28px;
                                margin: 10px 0;
                                text-align: center;
                                border-left: 2px solid #eee;
                                font-size: 16px;
                                color: #666;
                                cursor: pointer;
                                transition: all 0.3s;
                            }
                        }
                    }
                    
                }
            }
        }
        
    }
</style>