<template>
  <div class="input-box">
    <slot />
    <input type="text" name="password" hidden>
    <i class="iconfont ic-password"></i>
    <div class="error-tip">
    </div>
  </div>
</template>
<script>
export default {

}

</script>
