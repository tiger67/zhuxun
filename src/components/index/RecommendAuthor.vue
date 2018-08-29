<template>
  <div class="home-cmd-user">
    <div class="hcu-hd">
      <span>推荐作者</span>
      <a class="change-btn" to="/" @click.prevent="change">
        <i class="iconfont ic-search-change"></i>换一批</a>
    </div>
    <ul class="hcu-lists">
      <li class="cmd-author-line" v-for="a in lists">
        <router-link class="avatar" to='/404'>
          <img :src="a.avatar" />
        </router-link>
        <a v-if="!a.isfollowed" herf="javascript:void(0);" @click.prevent="follow(a,true)" class="follow-btn follow">
            <i class="iconfont ic-follow"></i>关注
            </a>
        <a v-else herf="javascript:void(0);" @click.prevent="follow(a,false)" class="follow-btn hasfollow">
          <span class="hover-hid"><i class="iconfont ic-followed"></i>已关注</span>  
          <span><i class="iconfont ic-unfollow"></i>取消关注</span>  
        </a>
        <router-link to="/follow" class="author-name">{{a.name}}</router-link>
        <p>
          写了{{a.words>1000 ? (a.words/1000).toFixed(1)+'k':a.words}}字 · {{a.likes>1000 ? (a.likes/1000).toFixed(1)+'k':a.likes}}喜欢
        </p>
      </li>
    </ul>
    <router-link class="get-more" to='/writer'>
      全部作者
      <i class="iconfont ic-link"></i>
    </router-link>
  </div>
</template>
<style>
.hasfollow:hover .hover-hid {
  display: none;
}

.hasfollow:hover .hover-hid+span {
  display: inline;
}

.hover-hid+span {
  display: none;
}

.get-more {
  position: absolute;
  padding: 7px 7px 7px 12px;
  left: 0;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}

.home-cmd-user {
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  position: relative
}

.home-cmd-user a {
  cursor: pointer;
}

.change-btn {
  float: right;
  display: inline-block;
  font-size: 14px;
  color: #969696;
}

.author-name {
  padding-top: 5px;
  margin-right: 60px;
  font-size: 14px;
  display: block;
}

.change-btn>i {
  margin-right: 3px;
}

.hcu-hd {
  font-size: 14px;
  color: #969696;
  text-align: left;
}

.hcu-lists {
  margin: 0 0 20px;
  text-align: left;
}

.cmd-author-line {
  line-height: 20px;
  margin-top: 15px;
}

.cmd-author-line p {
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
}

.cmd-author-line .follow-btn {
  float: right;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
}

.cmd-author-line .follow {
  color: #42c02e;
}

.cmd-author-line .hasfollow {
  color: #969696;
}

.cmd-author-line .avatar {
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  display: block;
  cursor: pointer;
}

.cmd-author-line .avatar>img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
}

</style>
<script>
const datalists = [
  { name: '简书版权', avatar: require("@/assets/home/author/1.jpg"), words: 423735, likes: 36208 },
  { name: '王小麦', avatar: require("@/assets/home/author/2.jpg"), words: 178335, likes: 7346 },
  { name: '小万PPT', avatar: require("@/assets/home/author/3.jpg"), words: 101042, likes: 21198 },
  { name: '须僧', avatar: require("@/assets/home/author/4.jpg"), words: 210215, likes: 1780 },
  { name: '吴晓布', avatar: require("@/assets/home/author/5.jpg"), words: 549549, likes: 13320 },
  { name: '只有一半影子', avatar: require("@/assets/home/author/6.png"), words: 215783, likes: 624 },
  { name: '乔汉童', avatar: require("@/assets/home/author/7.jpg"), words: 472348, likes: 1118 },
  { name: 'lostdays', avatar: require("@/assets/home/author/8.jpg"), words: 118472, likes: 957 },
  { name: '格列柯南', avatar: require("@/assets/home/author/9.jpg"), words: 573417, likes: 14296 },
  { name: '徐林Grace', avatar: require("@/assets/home/author/10.jpg"), words: 462678, likes: 4289 },
]
export default {
  data() {
    return {
      lists: datalists.slice(0, 5)
    }
  },
  methods: {
    follow(a, flag) {
      var index = this.lists.indexOf(a);
      a.isfollowed = flag;
      this.lists.splice(index, 1, a);
    },
    change: (() => {
      const deg = 0;
      return function() {
        if (this.lists[0].words == 423735) {
          setTimeout(() => {
            this.lists = datalists.slice(5);
          }, 600)
        } else {
          setTimeout(() => {
            this.lists = datalists.slice(0, 5);
          }, 600)
        }
      }
    })()
  }
}

</script>
