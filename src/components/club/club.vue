<template>
  <div>
    <v-header></v-header>
    <div class="club-wrapper">
      <div class="tab-wrapper">
        <div class="tab-content clearfix">
          <div class="tab-left">
            <div class="tab-item">
              <router-link to="/club/clubIndex">圈子</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/club/discover">发现</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/club/recentArticles">最新文章</router-link>
            </div>
          </div>
          <div class="tab-right">
            <div class="tab-item">
              <a href="javascript:void(0)" v-signin="{path:mc}" :class="{'active':$route.name=='myConcern'}">我的关注</a>
            </div>
            <div class="tab-item">
              <a href="javascript:void(0)" v-signin="{path:mf}" :class="{'active':$route.name=='myFavorite'}">我的收藏</a>
            </div>
            <div class="tab-item">
              <a href="javascript:void(0)" v-signin="{path:mb}" :class="{'active':$route.name=='myBrowsing'}">浏览历史</a>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <router-view/>
      </div>
    </div>
    <pop-sign />
  </div>
</template>
<script>
import header from '@/components/header/header';
import PopSign from '@/components/sign/PopSign';

export default {
  data() {
    return {

    }
  },
  components: {
    'v-header': header,
    PopSign
  },
  methods: {
    mc: function(a) {
      this.$router.push('/club/myConcern')
      a();
    },
    mf: function(a) {
      this.$router.push('/club/myFavorite/2')
      a();
    },
    mb: function(a) {
      this.$router.push('/club/myBrowsing/3')
      a();
    }
  }
};

</script>
<style lang="scss">
$system-color-black: #222222;
$system-bgcolor: #fafafa;
.el-message {
  top: 140px;
}

.club-wrapper {

  .tab-wrapper {
    width: 100%;
    height: 79px;
    border-bottom: 1px solid #eee;
    background: $system-bgcolor;
    position: fixed;
    top: 60px;
    z-index: 100;
    .tab-content {
      width: 1200px;
      margin: 0 auto;
      .tab-left {
        float: left;
        .tab-item {
          display: inline-block;
          margin-right: 85px;
          a {
            display: inline-block;
            padding: 33px 17px 28px 17px;
            font-size: 18px;
            color: #999;
            &.active {
              border-bottom: 3px solid $system-color-black;
              padding-bottom: 26px;
              color: $system-color-black;
            }
          }
        }
      }
      .tab-right {
        float: right;
        .tab-item {
          float: left;
          line-height: 79px;
          a {
            margin: 0 14px;
            font-size: 14px;
            color: #999;
            &.active {
              border-bottom: 2px solid $system-color-black;
              padding-bottom: 9px;
              color: $system-color-black;
            }
          }
          &:last-child {
            &:after {
              width: 0;
            }
            a {
              padding-right: 0;
            }
          }
          &:after {
            content: ' ';
            display: inline-block;
            width: 1px;
            height: 8px;
            background: #ccc;
          }
        }
      }
    }
  }
  .content-wrapper {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 121px;
    padding-top: 140px;
  }
}

</style>
