<template>
  <footer>
    <h5 class="sign-hr"><span>社交帐号登录</span></h5>
    <ul class="sign-more-style">
      <li>
        <a href="javascript:void(0);" @click.prevent="weiboLogin" class="s-weibo">
          <i class="iconfont ic-weibo"></i>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="weixinLogin" class="s-wechat">
          <i class="iconfont ic-wechat"></i>
      </a>
      </li>
      <li>
        <a href="javascript:void(0);" @click="qqLogin" class="s-qq">
         <i class="iconfont ic-qq_connect"></i>
      </a>
      </li>
    </ul>
    <slot/>
  </footer>
</template>
<script>
import API from "@/api"
export default {
  mounted() {
    /* console.log(this.$route);*/
    var query = this.$route.query;
    var code = query.code;
    var modelMap = query.modelMap;
    var state = query.state;
    if (modelMap) {
      this.weixinAuth(modelMap)
    } else if (code) {
      if (state) {
        this.qqAuth(code, state)
      } else {
        this.weiboAuth(code)
      }
    }
  },
  methods: {
    qqAuth(code, state) {
      API['get/api/tp/qqAuth']({ code, state }).then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          //this.$router.push()
          window.location = res.data.data;
        }
      })
    },
    weixinAuth(modelMap) {
      API['get/api/tp/wxCallBack']({ modelMap }).then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          //this.$router.push()
          window.location = res.data.data;
        }
      })
    },
    weiboAuth(code) {
      API['get/api/tp/weiboAuth']({ code }).then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          //this.$router.push()
          window.location = res.data.data;
        }
      })
    },
    qqLogin() {
      API['get/api/tp/qqlogin']().then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          //this.$router.push()
          window.location = res.data.data;
        }
      })
    },
    weixinLogin() {
      API['get/api/tp/wxLogin']().then(res => {
        //console.log(res);
        console.log(res);
        window.location = res.data;

      })
    },
    weiboLogin() {
      //console.log("jjdjdjdjddjdjd")
      API['get/api/tp/weibologin']().then(res => {
        //console.log(res);
        if (res.data.code === 0) {
          //this.$router.push() 
          window.location = res.data.data;
        }
      })
    }
  }
}

</script>
