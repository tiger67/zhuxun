<template>
  <div class="news-info-page">
    <div class="hd">热点关键词：
      <ul class="tag-list clear">
        <tag>
          <a href="javascript:void(0);" @click="findAll()">所有</a>
        </tag>
        <tag v-for="(t,i) in lists" :key="i">
          <a href="javascript:void(0);" @click="findByTag(t)">{{t.tagName}}</a>
        </tag>
      </ul>
    </div>
    <paging @getDataList="getdata" :pageSize="20">
      <div class="news-list" v-for="(n,i) in timelist" :key="n">
        <h5 class="time-title">{{timelistTxt[i]}}</h5>
        <div class="news-line" v-for="news in newsobj[n]">
          <span class="time">{{news.publishTime|Timehms}}</span>
          <router-link :to="`/info-article/${news.articleId}`">{{news.title}}</router-link>
        </div>
      </div>
    </paging>
  </div>
</template>
<script>
import Tag from "@/components/common/Tag"
import API from "@/api"
import Paging from "@/components/common/Paging"
export default {
  data() {
    return {
      lists: [],
      newsobj: {},
      timelist: [],
      timelistTxt: [],
      config: {
        isall: true,
        t: null
      }
    }
  },
  mounted() {
    this.taglists();
  },
  methods: {
    taglists() {
      API["get/api/hotNews/tag"]().then(res => {
        if (res.data.code === 0) {
          this.lists = res.data.data;
        }
      })
    },
    findAll() {
      this.config.isall = true;
      this.$paging.init();
    },
    getdata({ startPage, pageSize }, cb) {
      if (this.config.isall) {
        API["get/api/hotNews/page"]({ startPage, pageSize }).then(res => {
          if (res.data.code === 0) {
            this.parsedata(res.data.data)
            cb && cb(res.data.data.length);
          }
        })
      } else {
        API["get/api/hotNews/findByCode"]({ startPage, pageSize, code: this.config.t.code }).then(res => {
          if (res.data.code === 0) {
            this.parsedata(res.data.data);
            cb && cb(res.data.data.length);
          }
        })
      }
    },
    findByTag(t) {
      this.newsobj = {};
      this.timelist = [];
      this.timelistTxt = [];
      this.config.isall = false;
      this.config.t = t;
      this.$paging.init();
    },
    parsedata(data) {
      const DAYLIST = {
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "0": "日",
      }
      data.forEach(item => {
        var t = new Date(item.publishTime * 1000)
        var date = t.toLocaleDateString();
        var temp = date.split("/");;
        var day = t.getDay()
        //console.log(date);
        if (!this.newsobj[date]) {
          this.timelist.push(date);
          this.timelistTxt.push(`${temp[1]}月${temp[2]}日 · 星期${DAYLIST[day]}`);
          this.newsobj[date] = [];
        }
        this.newsobj[date].push(item);
      })
    }
  },
  components: {
    Tag,
    Paging
  }
}

</script>
<style lang="scss">
.news-info-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0px;
  min-height: 1000px;
  .hd {
    height: 25px;
    /* margin-bottom: 85px; */
    margin-bottom: 55px;
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
      /* font-size: 20px; */
      font-size: 18px;
      color: #333;
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
      /* font-size: 18px; */
      /* padding: 25px 0; */
      padding: 16px 0;
      font-size: 16px;
      line-height: 1.5;
      /*  margin-left: -14px;
     padding-left: 13px; */
      color: #666;
      border-bottom: 1px solid transparent;
      border-bottom-color: #f5f5f5;

      &:last-child {
        border-color: transparent;
      }
      a {
        transition: font-size .5s;
        border-bottom: 1px solid transparent;
        &:hover {
          /*  border-color: red; */
          /*  background-color: #eee; */
          /*  font-size: 17px; */
          border-bottom-color: #666;
          /* transform: scale(1.05, 1.05); */
        }
      }

      .time {
        /*  display: block; */
        /* margin-top: 10px; */
        margin-right: 10px;
        color: #999;
        /* font-size: 14px; */
        font-size: 13px;
        letter-spacing: 1px;
        float: right;
      }
    }
  }
}

</style>
