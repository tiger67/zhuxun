<template>
  <div class="input-box">
    <slot type="text" placeholder="手机号" />
    <!--  <input type="text" placeholder="手机号" v-model.trim="mobile" @blur="veriftyMobile"> -->
    <i class="iconfont ic-phonenumber"></i>
    <div class="error-tip">
      <!--  <span class="error-tip-c" v-show="mobileErorr">{{mobileErorr}}</span> -->
    </div>
  </div>
</template>
<script>
export default {

}

</script>
