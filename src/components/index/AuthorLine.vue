<template>
  <li class="cmd-author-line clear">
    <router-link class="avatar" to='/myCenter'>
      <img :src="writer.photo" />
    </router-link>
    <a v-show="!c.isSignIned || !followed" herf="javascript:void(0);" v-addfollow="{w:writer,follow}" class="follow-btn follow">
            <i class="iconfont ic-follow"></i>关注
            </a>
    <a v-show="c.isSignIned && followed" herf="javascript:void(0);" class="follow-btn hasfollow">
          <span class="hover-hid"><i class="iconfont ic-followed"></i>已关注</span>  
          <!-- <span><i class="iconfont ic-unfollow"></i>取消关注</span> -->  
        </a>
    <router-link to="/myCenter" class="author-name">{{writer.nickName}}</router-link>
    <p>
      {{writer.instroduce}}
    </p>
  </li>
</template>
<script>
import c from "data"
export default {
  props: {
    writer: Object
  },
  data() {
    return {
      followed: false,
      c
    }
  },
  methods: {
    follow: function(flag) {
      this.followed = flag;
    }
  }
}

</script>
<style lang="scss">
.cmd-author-line {
  line-height: 20px;
  margin-top: 15px;
  border: 0px solid red;
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }

  .follow-btn {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
  }
  .follow {
    color: #42c02e;
    /*  color: #ffc81f; */
  }
  .hasfollow {
    color: #969696;
    .hover-hid+span {
      display: none;
    }
    /* &:hover .hover-hid {
      display: none;
      &+span {
        display: inline;
      }
    } */
  }
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: block;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}

</style>
