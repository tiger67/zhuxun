<template>
	<div class="myConcern-wrapper">
        <comHeader :pagenum="pagenum"></comHeader>
        <div class="content-list" v-if="attentionData.pageCount>0">
            <div class="author-item" v-for="(item, index) in attentionData.pageData" :key="item.userId">
                <router-link target="_blank" :to="{path: '/visitor/' + item.userId}"><img :src="item.photo"></router-link>
                <div class="content">
                    <h1 class="com-name">
                        <span>{{item.nickName}}</span>
                        <i class="v1" v-if="item.auth_status===1 && item.user_type===1"></i>
                        <i class="v2" v-if="item.auth_status===1 && item.user_type===0"></i>
                    </h1>
                    <p class="line-clamp-1">{{item.introduce}}</p>
                    <div class="fbtn1 m-follow-btn" v-if="item.activeName" @click="reData(index, item.userId)">+ 关注</div>
                    <div class="fbtn1 followed-btn" v-if="!item.activeName" @click="delData(index, item.userId)"><span class="followed">已关注</span><span class="unfollow">取消关注</span></div>
                </div>
            </div>
        </div>
        <div class="com-empty-status" v-if="attentionData.pageCount==0">
            <img src="@/common/img/empty.png">
            <p>暂无关注</p>
        </div>
        <div class="paginate-wrapper" v-if="attentionData.pageSum>1">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="attentionData.pageSize"
                layout="total, prev, pager, next"
                :total="attentionData.pageCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {attention, reAttention, delAttention} from '@/api/request';
    import comHeader from '../comHeader';
    import sign from "data";

	export default {
        data() {
            return {
                attentionData: [],
                startPage: 1,
                pageSize: 10,
                currentId: -1,
                pagenum: ''
            }
        },
        created() {
            this.getData();
        },
        methods: {
            async getData(){
                const params = { startPage: this.startPage, pageSize: this.pageSize };
                const res = await attention(params);
                this.attentionData = res.data;

                this.attentionData.pageData.forEach(item => {
                    this.$set(item, 'activeName', false)
                });
                this.pagenum = this.attentionData.pageCount+'个关注';
                console.log(this.attentionData);
            },
            async reData(i,id){
                const res = await reAttention(id);
                this.attentionData.pageData[i].activeName = !this.attentionData.pageData[i].activeName;
                this.$message({
                    message: res.data,
                    type: 'success'
                });
                this.attentionData.pageCount++;
                this.pagenum = this.attentionData.pageCount+'个关注';
            },
            async delData(i,id){
                const res = await delAttention(id);
                this.attentionData.pageData[i].activeName = !this.attentionData.pageData[i].activeName;
                this.$message(res.data);
                this.attentionData.pageCount--;
                this.pagenum = this.attentionData.pageCount+'个关注';
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);

            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.startPage = val;
                this.getData();
            }
        },
        components: {
            comHeader
        }
	};
</script>

<style lang="scss">
    $system-color-black: #222;
    
    .myConcern-wrapper{
        width: 800px;
        margin: 0 auto;
        
        .content-list{
            .author-item{
                display: flex;
                padding: 40px 0;
                border-bottom: 1px solid #eee;
                align-items: center;
                img{
                    width: 48px;
                    height: 48px;
                    border-radius: 100%;
                }
                .content{
                    position: relative;
                    flex: 1;
                    margin-left: 10px;
                    h1{
                        margin-bottom: 12px;
                        font-size: 16px;
                        color: $system-color-black;
                        span{
                            font-size: 16px;
                            font-weight: normal;
                        }
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
                        .unfollow{
                            display: none;
                        }
                        .followed,.unfollow{
                            transition: all .5s;
                        }
                    }
                    .followed-btn:hover{
                        background: #ddd;
                        color: #666;
                        .followed{
                            display: none;
                        }
                        .unfollow{
                            display: inline-block;
                        }
                    }    
                }
            }
            
        }
    }
</style>