<template>
  <div class="mask-layer">
    <div class="vertify-wrap">
      <div class="v-hd">
        <div class="v-hd-w">请在下图<span class="sp">依次</span>点击</div>
        <span></span>
      </div>
      <div class="img-wrap">
        <div class="img-wrap-w">
          <img :src="img" alt="">
          <div class="mark-list">
            <div class='mark'>
              <span class="mark-no">2</span>
            </div>
          </div>
        </div>
      </div>
      <div class="v-ft">
        <a href="javascript:void(0);" class="v-btn close-btn"></a>
        <a href="javascript:void(0);" class="v-btn  flash-btn"></a>
        <a href="javascript:void(0);" class="quer-btn" @click="queren">确认</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.mask-layer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .5);
  text-align: center;
  * {
    box-sizing: border-box;
  }
  &:before {
    display: inline-block;
    content: '';
    height: 85%;
    vertical-align: middle;
  }
  @keyframes center-open {
    0% {
      transform: scale(.1, .1);
      opcacity: 0;
    }
    30% {
      transform: scale(.1, .1);
      opcacity: .6;
    }
  }
  .vertify-wrap {
    width: 320px;
    height: 410px;
    position: relative;
    background-color: #fff;
    display: inline-block;
    /*  padding: 8px; */
    opcacity: 1;
    vertical-align: middle;
    animation: center-open .5s ease-in-out;
    .img-wrap {
      position: relative;
      width: 100%;
      .img-wrap-w {
        display: inline-block;
        width: 95.8%;
        height: 0;
        overflow: hidden;
        padding-bottom: 95.8%;
        border: 0px solid red;
      }

      img {
        /*  width: 100%; */
        right: 0px;
        top: 0px;
        width: 100%;
        /*  height: 112%; */
        user-select: none;
      }
      .mark-list {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /*  border: 2px solid red; */
      }
      .mark {
        position: absolute;
        /* margin: -5% 0 0 -5%; */
        width: 32px;
        height: 32px;
        border: 3px solid white;
        border-radius: 50%;
        background-color: #539ffe;
        box-shadow: 0 0 10px black;
        text-align: center;
        cursor: pointer;
        /*   transform: scale(0, 0) translateZ(0); */
        transition: all .3s ease;
        .mark-no {
          line-height: 24px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          text-align: center;
          user-select: none;
        }
      }
    }
    .v-hd {
      position: relative;
      padding-bottom: 16%;
      height: 0;
      text-align: left;
      .v-hd-w {
        font-size: 16px;
        line-height: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: top;
      }

      .sp {
        color: #1c75e4;
      }
    }
    .v-ft {
      padding-bottom: 16%;
      width: 100%;
      height: 0;
      position: relative;
      .v-btn {
        background-img: url("./assets/sprite.1.4.3.png");
        width: 20px;
        margin-right: 14px;
        outline: none;
      }

      .close-btn {
        background-size: 280%;
        background-position: 0 6.70103%;
        overflow: visible;
      }
      .flash-btn {
        background-size: 280%;
        background-position: 0 67.01031%;
      }
      .quer-btn {
        display: block;
        position: absolute;
        border-radius: 2px;
        background-color: #539ffe;
        right: 0;
        bottom: 0;
        height: 38px;
        width: 110px;
        text-decoration: none;
        cursor: pointer;
        /*   height: 20px; */
        line-height: 38px;
        text-align: center;
        font-size: 16px;
        letter-spacing: 2px;
        color: white;
        /*  position: absolute;
       top: 50%;
       left: 0;
       margin-top: -10px;
       width: 100%;
        */
      }
    }
  }
}

</style>
<script>
const img = require("./assets/vercode.jpg");

export default {
  data() {
    return {
      img: img
    }
  },
  methods: {
    queren() {

    }
  }

}

</script>
