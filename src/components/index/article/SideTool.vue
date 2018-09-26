<template>
  <div class="side-tool">
    <ul>
      <li v-tooltip="'回到顶部'">
        <router-link to="/article">
          <i class="iconfont ic-backtop"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/article" v-tooltip="'将文章加入专题'">
          <i class="iconfont ic-addcollectionmodal"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/article" v-tooltip="'收藏文章'">
          <i class="iconfont ic-mark"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/article" v-tooltip="'分享文章'">
          <i class="iconfont ic-share"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.side-tool {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 140;
  li {
    border: 1px solid #dcdcdc;
    border-bottom: none;
    background-color: #fff;
    line-height: 20px;
    transition: .1s ease-in;
    &:last-child {
      border-bottom: 1px solid #dcdcdc;
    }
    &:hover {
      background-color: hsla(0, 0%, 71%, .1);
    }
    a {
      cursor: pointer;
      width: 50px;
      height: 50px;
      text-align: center;
      display: block;
      i {
        padding-top: 16px;
        font-size: 20px;
        display: block;
      }
    }
  }
}

</style>
