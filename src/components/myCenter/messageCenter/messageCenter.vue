<template>
	<div class="messageCenter-wrapper">
        <div class="head-tab clearfix">
            <router-link to="/myCenter/messageCenter/comment">
                <span class="tab-item">评论({{commentList.pageCount}})</span>
            </router-link>
            <router-link to="/myCenter/messageCenter/messages">
                <span class="tab-item">系统消息({{messagesList.pageCount}})<span class="new" v-if="unread!=0"></span></span>
            </router-link>
        </div>
        <div class="content-list">
            <router-view :commentList="commentList" @commentPage="commentPage" :messagesList="messagesList" @messagesPage="messagesPage" @submitComment="submitComment"/>
        </div>
    </div>
</template>

<script>
    import {centerComment, centerSysmsg} from '@/api/request';

	export default {
        data() {
            return {
                startPage1: 1,
                pageSize1: 10,
                startPage2: 1,
                pageSize2: 10,
                commentList: {},
                messagesList: {},
                unread: 0
            }
        },
        computed: {
            pageCount(){
                
            }
        },
        created() {
            this.getComment();
            this.getSysmsg();
        },
        methods: {
            async getComment(){
                const params = { startPage: this.startPage1, pageSize: this.pageSize1};
                const res = await centerComment(params);
                this.commentList = res.data;

                this.commentList.pageData.forEach(item => {
                    this.$set(item, 'activeName', false)
                })
                console.log(this.commentList);
            },
            async getSysmsg(){
                const params = { startPage: this.startPage2, pageSize: this.pageSize2};
                const res = await centerSysmsg(params);
                this.messagesList = res.data.page;
                this.unread = res.data.unreadNum;
                console.log(this.unread);
            },
            commentPage(page) {
                this.startPage1 = page;
                this.getComment();
            },
            messagesPage(page){
                this.startPage2 = page;
                this.getSysmsg();
            },
            submitComment(val){
                this.getComment();
            }
        }
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
                        transition: all .2s;
                    } 
                }
            }
            
        }
        .content-list{

        }
    }
</style>