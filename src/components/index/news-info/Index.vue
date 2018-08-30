<template>
  <div class="news-info-page">
    <div class="hd">热点关键词：
      <ul class="tag-list clear">
        <tag v-for="(t,i) in lists" :key="i" :name="t.name" url="/" />
      </ul>
    </div>
    <div class="news-list" v-for="(n,index) in newsobj" :key="index">
      <h5 class="time-title">{{n.dateTime}}</h5>
      <div class="news-line" v-for="(news,i) in n.newList">
        <router-link :to="news.url">{{news.info}}</router-link>
        <span class="time">{{news.time}}</span>
      </div>
    </div>
    <div class="load-more-btn">
      加载更多
    </div>
  </div>
</template>
<style lang="scss">
.news-info-page {
    max-width: 842px;
    margin: 0 auto;
    padding: 40px 0px;
    .hd {
        height: 25px;
        margin-bottom: 85px;
        &:before {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }
        .tag-list {
            display: inline-block;
            vertical-align: middle;
            .tag {
                margin: 0 10px;
            }
        }
    }
    .news-list {
        padding-left: 15px;
        .time-title {
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 20px;
            color: #222;
            font-weight: bold;
            margin-left: -15px;
            &:before {
                display: inline-block;
                content: '';
                width: 10px;
                height: 10px;
                position: relative;
                top: -2px;
                margin-right: 5px;
                background: rgba(255, 200, 31, 1);
            }
        }
        .news-line {
            padding: 25px 0;
            font-size: 18px;
            line-height: 1.5;
            color: #222;
            border-bottom: 1px solid #f5f5f5;
            &:last-child {
                border-color: transparent;
            }
            .time {
                display: block;
                margin-top: 10px;
                color: #999;
                font-size: 14px;
            }
        }
    }
}

</style>
<script>
import Tag from "../../common/Tag"
import newsobj from "./data"
let taglist = [{ name: '室内设计' }, { name: '建筑设计' },
  { name: '房地产' }, { name: '工程造价' }
];

export default {
  data() {
    return {
      lists: taglist,
      newsobj
    }
  },
  components: {
    Tag
  }
}

</script>
