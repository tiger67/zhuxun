<template>
	<div class="messageCenter-wrapper">
        <div class="head-tab clearfix">
            <router-link to="/myCenter/messageCenter/comment">
                <span class="tab-item">评论(15)<span class="new"></span></span>
            </router-link>
            <router-link to="/myCenter/messageCenter/messages">
                <span class="tab-item">系统消息(54)</span>
            </router-link>
        </div>
        <div class="content-list">
            <router-view/>
        </div>
    </div>
</template>

<script>
	export default {

	};
</script>

<style lang="scss">
    $system-color-black: #222;
    $system-color-bright: #ffc81f;

    .messageCenter-wrapper{
        .head-tab{
            border-bottom: 1px solid #eee;
            a{
                .tab-item{
                    position: relative;
                    float: left;
                    margin-right: 64px;
                    padding-bottom: 20px;
                    font-size: 16px;
                    color: #999;
                    cursor: pointer;
                    .new{
                        width: 6px;
                        height: 6px;
                        border-radius: 100%;
                        background: $system-color-bright;
                        position: absolute; 
                        top: 0;
                        right: -8px;  
                    }   
                }
                &.active{ 
                    .tab-item{
                        color: $system-color-black;
                        padding-bottom: 19px;
                        border-bottom: 2px solid $system-color-black;
                    } 
                }
            }
            
        }
        .content-list{

        }
    }
</style>