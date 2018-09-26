<template>
    <div class="messages-wrapper">
        <div class="messages-item" v-for="item in messagesList.pageData">
            <h1>{{item.msgType}}</h1>
            <div class="text" v-html="item.msgContent"></div>
            <span class="time">{{item.createTime}}</span>
        </div>
        <div class="com-empty-status" v-if="messagesList.pageCount==0">
            <img src="@/common/img/empty.png">
            <p>暂无消息</p>
        </div>
        <div class="paginate-wrapper" v-if="messagesList.pageSum>1">
            <el-pagination
                background
                @current-change="handleCurrentChange"
                :page-size="messagesList.pageSize"
                layout="total, prev, pager, next"
                :total="messagesList.pageCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {centerSysmsg} from '@/api/request';

    export default {
        props: {
            messagesList: Object
        },
        data() {
            return {

            }
        },
        created() {
            
        },
        methods: {
          handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
              this.$emit('messagesPage', val);
          }
        }
    };
</script>

<style lang="scss">
    .messages-wrapper{
        .messages-item{
            position: relative;
            padding: 20px 0 18px 0;
            border-bottom: 1px solid #ddd;
            h1{
                font-size: 14px;
                color: #222;
                margin-bottom: 19px;
                font-weight: bold;
            }
            .title{
                display: block;
                font-size: 14px;
                color: #999;
                margin-bottom: 15px;
            }
            .text{
                font-size: 14px;
                color: #999;
                line-height: 24px;
                margin-bottom: -5px;
            }
            .time{
                position: absolute;
                right: 0;
                top: 20px;
                font-size: 14px;
                color: #999;
            }
        }
    }
</style>