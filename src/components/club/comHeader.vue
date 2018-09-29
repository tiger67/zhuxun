<template>
  <div class="comHeader-wrapper">{{loginedd}}
    <div v-if="isShow">
      <div class="head">
        <div class="avatar">
          <img :src="photo">
        </div>
        <p class="name">{{nickName}}</p>
      </div>
      <div class="total-bar">
        共{{pagenum}}
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import sign from "data";

export default {
  props: {
    pagenum: String
  },
  data() {
    return {
      nickName: '',
      photo: '',
      isShow: false
    }
  },
  computed: {
    loginedd() {
      sign.isSignIned ? this.getData() : '';
    }
  },
  created() {
    // console.log(sign.isSignIned)
    // if (sign.isSignIned) {
    // 	const user = JSON.parse(sessionStorage.getItem("user"));
    // 	this.isSign = true;
    // 	this.nickName = user.nickName;
    // 	this.photo = user.photo;
    // }else{
    // 	this.isSign = false;
    // }
  },
  methods: {
    getData() {
      console.log(sign.isSignIned)
      const user = JSON.parse(sessionStorage.getItem("user"));
      this.nickName = user.nickName;
      this.photo = user.photo;
      this.isShow = true;
    }
  }
};

</script>
<style scoped lang="scss">
$system-color-black: #222;

.comHeader-wrapper {
  .head {
    text-align: center;
    margin-top: 59px;
    .avatar {
      display: inline-block;
      width: 120px;
      height: 120px;
      margin-bottom: 28px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 120px;
        height: 120px;
      }
    }
    .name {
      font-size: 24px;
      color: $system-color-black;
    }
  }
  .total-bar {
    margin-top: 68px;
    padding-bottom: 9px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    color: $system-color-black;
  }
}

</style>
