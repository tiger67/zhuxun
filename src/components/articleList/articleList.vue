<template>
  <div class="articleList-wrapper">
    <ul class="article-lists">
      <li class="atc-unit" v-for="item in ArticleList" :key="item.id">
        <div class="img-wrapper" v-if="item.thumbnail.length>0">
          <router-link :to="'/article/'+ item.id"><img :src="item.thumbnail " /></router-link>
          <span class="atc-img-tag" :class="{'interior-design': item.tagId===3}">{{item.tagName}}</span>
        </div>
        <div class="atc-unit-c">
          <h1 class="title" :class="{'bef-no-img':item.thumbnail.length==0}">
	            		<span>{{item.tagName}}</span>
	            		<router-link :to="'/article/'+ item.id">{{item.title}}</router-link>
	            	</h1>
          <p class="abstract line-clamp-3">{{item.introduce}}</p>
          <div class="meta" :class="{'meta-no-photo':userArticle===1}">
            <span class="com-name">
		            		<template v-if="userArticle!=1">
			              		<router-link target="_blank" :to="'/visitor/'+item.userId" class="avatar">
			                		<img :src="item.photoUrl" alt="">
			              		</router-link>{{item.userName}}<i :class="{ 'v1': item.user_type===0, 'v2': item.user_type===1 }"></i>&nbsp;·&nbsp;
			              	</template>
			              	{{item.publishTime | formatDate}}
		              	</span>
            <span class="read">
			                <i class='iconfont ic-list-read'></i> {{item.browseCnt}}
			            </span>
            <span class="like">
			                <i class='iconfont ic-list-like'></i> {{item.collectCnt}}
			            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { goodTime } from '@/common/js/date';
export default {
  props: {
    ArticleList: Array,
    userArticle: Number
  },
  created() {
    console.log(this.userArticle)
  },
  filters: {
    formatDate(time) {
      return goodTime(time);
    }
  }
};

</script>
<style lang="scss" scope>
$system-color-black: #222;

.articleList-wrapper {

  .atc-unit {
    position: relative;
    margin-bottom: 40px;
    display: flex;
    .atc-img-tag {
      display: inline-block;
      width: 76px;
      height: 28px;
      opacity: 0.7;
      background: rgba(34, 34, 34, 1);
      text-align: center;
      line-height: 28px;
      font-size: 14px;
      color: #FFFEFE;
      font-weight: normal;
      margin-right: 23px;
    }
    .interior-design {
      background: rgba(255, 200, 31, 1);
      color: $system-color-black;
    }
    .img-wrapper {
      position: relative;
      width: 236px;
      height: 140px;
      margin-right: 24px;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        left: 10px;
        top: 10px;
      }
    }
    .atc-unit-c {
      position: relative;
      flex: 1;
      .title {
        font-size: 18px;
        font-weight: bold;
        color: $system-color-black;
        display: block;
        margin-bottom: 9px;
        &:hover {
          a {
            color: #4285F4;
          }
        }
        &.bef-no-img {
          span {
            display: inline-block;
            padding: 0 9px;
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            margin-right: 25px;
            color: #FFFEFE;
            background: rgba(34, 34, 34, .7);
          }
        }
      }
      .abstract {
        display: block;
        height: 71px;
        font-size: 14px;
        line-height: 24px;
        color: #666;
      }
      .meta {
        margin-top: 9px;
        font-size: 0;
        .avatar {
          height: 32px;
          img {
            vertical-align: middle;
            display: inline-block;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 9px;
          }
        }
        span {
          display: inline-block;
          margin-right: 20px;
          color: #b4b4b4;
          font-size: 14px;
        }
        .com-name {
          i {
            vertical-align: middle;
            margin-right: 5px;
          }
        }
        &.meta-no-photo {
          margin-top: 18px;
        }
      }
    }
  }
}

</style>
