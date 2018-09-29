<template>
  <transition name="pop">
    <div class="mask-layer" v-if="d.vertifying">
      <div class="vertify-wrap">
        <!-- <a class="close-btn" href="javascript:void(0);" >
        <i class="iconfont ic-unfollow"></i>
      </a> -->
        <div class="v-hd">
          <div class="v-hd-w">请在下图<span class="sp">依次</span>点击
          </div>
          <canvas id="codeSpace" class="code-space" width="130" height="20"></canvas>
        </div>
        <div class="img-wrap">
          <div class="img-wrap-w">
            <img :src="img" id="vtyimg" alt="">
            <div class="mark-list" @click.self="addmark">
              <!-- <div class='mark' style="left:20px;top:20px;">
              <span class="mark-no">1</span>
            </div> -->
              <div class="vertify-msg v-error" :class='{showvalid," v-error ":!isValid,"v-right ":isValid}'>
                {{isValid ? "验证通过！进入下一步" : "验证有误！请重新操作"}}
              </div>
              <div class='mark' v-for="(m,i) in marks" :style="`left:${m.x-16}px;top:${m.y-16}px`">
                <span class="mark-no">{{i+1}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="v-ft">
          <a href="javascript:void(0);" class="v-btn vfy-close-btn" @click="close"></a>
          <a href="javascript:void(0);" class="v-btn vfy-flash-btn" @click="getVartifyImg"></a>
          <a href="javascript:void(0);" class="quer-btn" :class="{'active':marks.length>=minlength}" @click="imgVartify">确认</a>
        </div>
      </div>
      {{getimg}}
    </div>
  </transition>
</template>
<style lang="scss">
@import "./index.scss";
.vertify-msg {
  height: 32px;
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 32px;
  opacity: 0;
  color: #fff;
  font-size: 16px;
  transition: all .3s ease-out;
  bottom: -32px;
  &.showvalid {
    bottom: 0px;
    opacity: 1;
  }
  &.v-error {
    background-color: #ea6f5a;
  }
  &.v-right {
    background-color: #00bb29;
  }
}

</style>
<script>
import API from "@/api"
import d from "./data"
//const img = require("./assets/vercode.jpg");
export default {
  data() {
    return {
      img: "",
      d,
      isValid: false,
      showvalid: false,
      minlength: 4,
      marks: [{
        x: 40,
        y: 60
      }]
    }
  },
  mounted() {
    //this.imgVartify();
  },
  computed: {
    getimg: function() {
      if (this.d.vertifying) {
        this.getVartifyImg();
      }
    }
  },
  methods: {
    queren() {

    },
    drawcode() {
      var c = document.querySelector("#codeSpace");
      var ctx = c && c.getContext("2d");
      var img = document.querySelector("#vtyimg");
      //console.dir(c);
      ctx && ctx.drawImage(img, 130, 3, 130, 20, 0, 0, 130, 20);

    },
    addmark(e) {
      /*console.log(e); console.dir(e.target);*/
      this.marks.push({ x: e.offsetX, y: e.offsetY });
      //this.marks.push({ x: e.layerX, y: e.layerX });
    },
    close() {
      this.d.vertifying = false;
    },
    async imgVartify() {
      if (this.marks.length < this.minlength) {
        return;
      }
      let code = "";
      this.marks.forEach(function(item) {
        code = code + `,${item.x}_${item.y+30}`;
      })
      //console.log(code);
      code = code.slice(1);
      API["post/api/verifyCode"]({ code: code }).then(res => {
        console.log(res);
        this.isValid = res.data.code !== 0 ? false : true;
        this.showvalid = true;
        setTimeout(() => {
          if (res.data.code === 0) {
            this.close();
          } else {
            this.getVartifyImg();
          }
        }, 1200)
      });
    },
    async getVartifyImg() {
      this.marks = [];
      this.showvalid = false;
      let res = await API["get/api/getVerifyCode"]();
      //this.vertifying=false
      //console.log(res)
      this.img = "data:image/jpg;base64," + res.data;
      setTimeout(() => {
        this.drawcode();
      }, 700)

    },
  }
  /*/api/verifyCode*/
}

</script>
