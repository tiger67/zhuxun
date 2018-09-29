<template>
  <div class="writer-card slide-to-top">
    <div class="writer-card-wrap">
      <router-link to="/myCenter">
        <div class="avatar-wrap"><img :src="writer.photo" alt="" class="avatar"></div>
        <h4 class="name" v-html="writer.nickName">
        <!-- <i  class="iconfont" :class="{'ic-man':writer.gender=='man','ic-woman':writer.gender=='woman'}"></i>  -->
        </h4>
      </router-link>
      <p>{{writer.instroduce}}</p>
      <!-- @click.prevent="$emit('follow', writer, true)" -->
      <a v-show="!c.isSignIned || !followed" class="btn follow-btn" v-addfollow="{w:writer,follow}">
        <span class="btn-inner"><i class="iconfont ic-follow"></i> 关注</span>
      </a>
      <!--  @click.prevent="$emit('follow', writer, false)" -->
      <a v-show="c.isSignIned && followed" class="btn cancel-btn">
        <span class="btn-inner"><i class="iconfont ic-followed"></i>已关注</span>
       <!--  <span class="btn-inner-hover"><i class="iconfont ic-unfollow"></i>取消关注</span> -->
      </a>
    </div>
  </div>
</template>
<script>
import c from "data"
export default {
  props: {
    writer: Object,
  },
  data() {
    return {
      followed: false,
      c
    }
  },
  mounted: function() {

  },
  methods: {
    follow: function(flag) {
      this.followed = true;
    }
  }
}

</script>
<style lang="scss">
.writer-card {
  float: left;
  width: 33.33333%;
  position: relative;
  padding-left: 3.0232558139535%;
  padding-right: 3.0232558139535%;
  text-align: center;
  .writer-card-wrap {
    height: 280px;
    margin-top: 88px;
    padding: 0 20px;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: hsla(0, 0%, 71%, .1);

    transition: .2s ease;
    &:hover {
      box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    }
    .name {
      font-size: 21px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 10px;
      line-height: 1.1;
      i {
        margin-right: -5px;
        vertical-align: middle;
      }

      .ic-man {
        color: #3194d0;
      }

      .ic-woman {
        color: #ea6f5a;
      }
    }
    p {
      margin: 20px auto 28px;
      max-width: 180px;
      min-height: 63px;
      font-size: 13px;
      line-height: 25px;
    }
    .avatar-wrap {
      padding: 5px;
      width: 94px;
      height: 94px;
      margin: -47px auto 20px;
      border-radius: 47px;
      border: 1px solid #eee;
      background-color: #fff;
      overflow: hidden;
    }
    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .follow-btn,
    .cancel-btn {
      border-radius: 40px;
      font-size: 15px;
      padding: 7px 0;
      width: 100px;
      line-height: normal;
    }
    .follow-btn {
      color: #fff;
      /* background-color: #42c02e; */
      border: 1px solid #ffc81f;
      background-color: #ffc81f;
      /*  background-color:#3385ff; */
    }
    .cancel-btn {
      border-radius: 40px;
      border: 1px solid hsla(0, 0%, 59%, .6);
      color: #8c8c8c;
      background-color: hsla(0, 0%, 71%, .1);
      .btn-inner-hover {
        display: none;
      }
      /*  &:hover {
       .btn-inner {
         display: none;
       }
       .btn-inner-hover {
         display: inline;
       }
     } */
    }
  }
}

</style>
