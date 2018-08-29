<template>
  <router-link to="/app-download" class="app-share-box">
    <img src="@/assets/home/code/td-code.png" class="td-code">
    <div class='app-share-text'>
      <div class='title'>关注微信公众号&小程序</div>
      <div class="desc">实时掌握建筑资讯</div>
    </div>
    <div class="pop-prcode">
      <img class="qrcode" src="@/assets/home/code/td-code.png" />
    </div>
  </router-link>
</template>
<style lang="scss">
.app-share-box {
  display: block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  background-color: #fafafa;
  position: relative;
  .td-code {
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
  &:hover {
    .pop-prcode {
      display: block
    }
  }
  .pop-prcode {
    position: absolute;
    top: -193px;
    left: 58px;
    z-index: 10;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    background-color: #fff;
    display: none;
    .qrcode {
      width: 160px;
      height: 160px;
      display: block;
      margin: 10px;
    }
    &:after,
    &:before {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      left: 50%;
    }

    &:after {
      border-width: 10px;
      bottom: -10px;
      margin-left: -10px;
      border-bottom-width: 0;
      border-top-color: #fff;
    }

    &:before {
      border-width: 11px;
      bottom: -11px;
      margin-left: -11px;
      border-bottom-width: 0;
      border-top-color: rgba(0, 0, 0, .25);
    }
  }


  .app-share-text {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .desc {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
    .title {
      font-size: 14px;
      color: #333;
      margin-bottom: 10px;
    }
  }
}

</style>
