<template>
	<div>
		<v-header></v-header>
		<div class="myCenter-wrapper">
			<div class="head-wrapper">
				<img src="../../assets/center_bg.png">
			</div>
			<div class="content clearfix">
				<div class="left">
					<div class="header">
						<div class="com-avatar">
							<img :src="user.u.photo">
						</div>
						<div class="com-name">
							<span>{{user.u.nickName}}</span>
              <i class="v1" v-if="user.u.auth_status===1 && user.u.user_type===1"></i>
              <i class="v2" v-if="user.u.auth_status===1 && user.u.user_type===0"></i>
						</div>
						<p class="intro line-clamp-1">{{user.u.cityName}} <span v-if="user.u.industry">|</span> {{user.u.industry}}</p>
						<div class="fbtn2">
							<router-link to="/editor/0" target="_blank">写文章</router-link>
						</div>
					</div>
					<ul class="menu-list">
						<li>
							<router-link to="/myCenter/myArticles">我的文章</router-link>
						</li>
						<li>
							<router-link to="/myCenter/messageCenter">消息中心</router-link>
						</li>
						<li>
							<router-link to="/myCenter/dataSet">资料设置</router-link>
						</li>
					</ul>
				</div>
				<div class="right">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import header from '@/components/header/header';
import data from "data";

export default {
  data() {
    return {
      user: data,
    }
  },
  created() {
    // this.user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(this.user)
  },
  components: {
    'v-header': header
  }
};

</script>
<style lang="scss">
$system-color-black: #222;

.myCenter-wrapper {

  .head-wrapper {
    margin-top: 60px;
    height: 240px;
    img {
      width: 100%;
      height: 240px;
    }
  }
  .content {
    width: 1210px;
    margin: 0 auto;
    .left {
      position: relative;
      top: -126px;
      width: 240px;
      float: left;
      .header {
        height: 286px;
        border: 1px solid #eee;
        padding-top: 32px;
        background: #fff;
        text-align: center;
        .com-name {
          margin: 30px 0 18px 0;
          i {
            margin-left: 8px;
          }
        }
        .intro {
          font-size: 14px;
          color: #ccc;
          padding: 0 30px;
        }
        .fbtn2 {
          margin-top: 44px;
          a {
            display: block;
          }
        }
      }
      .menu-list {
        border-right: 1px solid #eee;
        li {
          width: 239px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          padding: 24px 0;
          border-bottom: 1px solid #eee;
          font-size: 16px;
          color: $system-color-black;
          a {
            display: block;
            &.active {
              background: #eee;
            }
          }
        }
      }
    }
    .right {
      float: left;
      width: 930px;
      padding: 40px 0 0 40px;
    }
  }
}

</style>
