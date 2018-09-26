<template>
  <div class="comment-wrapper">
    <div class="comment-list">
      <!-- <div class="comment-item">
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
      </div> -->
      <div class="comment-item" v-for="(item, index) in commentList.pageData" :key="index">
        <h1 :commentArticleType="item.commentArticleType">
          <router-link :to="'/article/'+item.articleId">{{item.title}}</router-link>
        </h1>
        <div class="main">
          <div class="head clearfix">
            <img :src="item.commentUserPhoto">
            <div class="info-wrapper">
              <div class="com-name">
                <span>{{item.commentUserName}}</span>
                <i class="v1" v-if="item.auth_status===1 && item.user_type===1"></i>
                <i class="v2" v-else="item.auth_status===1 && item.user_type===0"></i>
              </div>
              <p class="floor">{{index+1}}楼 · {{item.commentTime | formatDate}}</p>
            </div>
          </div>
          <div class="comment-bar">
            <div class="reply-others-comment" v-if="item.quoteContent.length>0">
              <p class="comment-content">
                <span class="name">{{item.replyUserName}}：</span> {{item.quoteContent}}
              </p>
              <p class="time">{{item.replyTime | formatDate}}</p>
            </div>
            <p class="reply-p">{{item.commentContent}}</p>
            <div class="operation">
              <i class="icon-comment" @click="replyComment(index)" v-if="item.quoteContent.length===0"></i>
              <span class="praise-wrap">
                <i class="icon-like" v-if="item.isZan===0" @click="likeComment(item.commentId, index)"></i>
                <transition name="like">
                  <i class="icon-liked" v-if="item.isZan===1"></i>
                </transition>
                <span>{{item.zanNum}}</span>
              </span>
              <i class="icon-delete" @click="delAlert(item.commentId, index)"></i>
            </div>
            <transition name="reply">
              <div class="reply-form" v-show="item.activeName">
                <input class="input" v-model="commentInput"></input>
                <span class="submit" @click="submitComment(item.articleId, item.commentArticleType, item.commentId)">提交</span>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!-- <div class="comment-item">
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
                <span class="name">情依依：</span> Sed fringilla et quam a tempus. Nam volutpat augue eu lorem maximus, id luctus dolor venenatis. Morbi et vestibulum orci. Donec pretium suscipit massa quis convallis. Etiam et est dolor. Quisque eget lectus id risus vulputate venenatis. Praesent varius facilisis lorem id sagittis. Nullam vel elit quis neque dapibus lacinia.
              </p>
              <p class="time">2分钟前</p>
              <div class="operation">
                <i class="icon-delete"></i>
                <span class="praise-wrap"><i :class="{'icon-like':isPraise===0,'icon-liked': isPraise===1}" @click="praise"></i><span>122</span></span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="com-empty-status" v-if="commentList.pageCount==0">
        <img src="@/common/img/empty.png">
        <p>暂无评论</p>
    </div>
    <div class="paginate-wrapper" v-if="commentList.pageSum>1">
        <el-pagination
            background
            @current-change="handleCurrentChange"
            :page-size="commentList.pageSize"
            layout="total, prev, pager, next"
            :total="commentList.pageCount">
        </el-pagination>
    </div>
  </div>
</template>
<script>
  import { delComment, replyComment, likeComment} from '@/api/request';
  import {goodTime} from '@/common/js/date';
  import axios from 'axios';

  export default {
    props: {
      commentList: Object
    },
    data() {
      return {
        commentInput: ''
      }
    },
    created() {

    },
    methods: {
      
      async delComment(id, index){
          const res = await delComment(id);
          this.$message({
              type: 'success',
              message: res.data,
              duration: 1000,
          });
          this.commentList.pageData.splice(index, 1);
          this.commentList.pageCount--;
      },
      async submitComment(articleId, type, replyCommentId){
          const params = { 'articleId': articleId, 'type': type, 'content': this.commentInput, 'replyCommentId': replyCommentId };
          const res = await replyComment(params);
          this.commentInput = '';
          this.$emit('submitComment', true);
      },
      // submitComment(articleId, type, replyCommentId){
      //   const params = { 'articleId': articleId, 'type': type, 'content': this.commentInput, 'replyCommentId': replyCommentId };
      //   const headers = {};
      //   const user = sessionStorage.getItem("user");
      //     headers.AppId = JSON.parse(user)['appId'];
      //     headers.Authorization = "ticket " + JSON.parse(user)['access_ticket'];
      //     console.log(headers)
      //   axios.post('http://172.25.210.98/api/comment/add', {params:params}, {headers:headers})
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      //},
      async likeComment(id, index){
          const params = { 'commentId': id };
          console.log(params);
          const res = await likeComment(params);
          console.log(res);

          this.commentList.pageData[index].isZan = 1;
          this.commentList.pageData[index].zanNum++ ;
      },
      delAlert(id,index){
        const _this = this;
          this.$msgbox.confirm('你确定要删除此评论?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              _this.delComment(id,index);
          }).catch(() => {        
          });
      },
      replyComment(index) {
          this.commentList.pageData[index].activeName = !this.commentList.pageData[index].activeName;
      },
      handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.$emit('commentPage', val);
      }
    },
    filters: {
        formatDate(time) {
            return goodTime(time);
        }
    }
  };

</script>
<style lang="scss">
$system-color-black: #222;
$system-bgcolor: #fafafa;

.comment-wrapper {
  margin-bottom: 179px;
  .comment-list {
    padding-bottom: 60px;
    .comment-item {
      padding: 30px 0;
      border-bottom: 1px solid #eee;
      h1 {
        font-size: 18px;
        color: $system-color-black;
        font-weight: bold;
        &:hover{
            a{
                color: #4285F4;
            }
        }
      }
      .main {
        padding: 20px 20px 0 20px;
        margin-top: 20px;
        border: 1px solid #eee;
        .head {
          img {
            float: left;
            width: 40px;
            height: 40px;
            border-radius: 100%;
          }
          .info-wrapper {
            float: left;
            margin-left: 15px;
            .com-name {
              span {
                font-size: 14px;
                color: #666;
                font-weight: normal;
              }
            }
            .floor {
              margin-top: 7px;
              font-size: 12px;
              color: #999;
            }
          }
        }
        .comment-bar {
          margin-left: 55px;
          .others-comment {
            font-size: 16px;
            color: $system-color-black;
            margin-top: 23px;
          }
          .reply-others-comment {
            position: relative;
            padding: 15px 26px 19px 19px;
            border: 1px solid #eee;
            margin: 20px 0;
            background: $system-bgcolor;
            .comment-content {
              font-size: 14px;
              color: $system-color-black;
              line-height: 24px;
              .name {
                color: #4285F4;
              }
            }
            .time {
              font-size: 14px;
              color: #999;
              margin-top: 17px;
            }
            .operation {
              position: absolute;
              bottom: 0;
              right: 22px;
            }
          }
          .reply-p {
            font-size: 16px;
            color: $system-color-black;
            margin-top: 19px;
          }
          .operation {
            padding: 20px 0 10px 0;
            text-align: right;
            font-size: 0;
            i {
              font-size: 18px;
              cursor: pointer;
            }
            .praise-wrap {
              margin: 0 15px;
              font-size: 0;
              color: #666;
              i {
                font-size: 18px;
                cursor: pointer;
              }
              span {
                margin-left: 4px;
                font-size: 14px;
              }
              .like-enter-active, .like-leave-active {
                font-size: 20px;
                transition: opacity .2s;
              }
              .like-enter, .like-leave-to {
                opacity: 0
              }
              
            }
          }
          .reply-form {
            display: flex;
            height: 48px;
            border: 1px solid #eee;
            margin: 10px 0 20px 0;
            background: $system-bgcolor;
            transition: all 0.3s;
            &.reply-enter-active,
            &.reply-leave-active {
              transition: all 0.3s;
              height: 48px;
              margin: 10px 0 20px 0;
              .input {
                line-height: 28px;
                padding: 10px 20px;
              }
            }
            &.reply-enter,
            &.reply-leave-to {
              height: 0;
              margin: 0;
              .input {
                height: 0;
                padding: 0;
              }
              .submit {
                height: 0;
                opacity: 0;
              }
            }
            .input {
              flex: 1;
              height: 28px;
              line-height: 28px;
              padding: 10px 20px;
              border: none;
              background: $system-bgcolor;
              font-size: 14px;
              color: $system-color-black;
              transition: all 0.5s;
              outline: none;
            }
            .submit {
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
