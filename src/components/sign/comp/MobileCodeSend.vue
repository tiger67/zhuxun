<template>
  <a class="sign-resend" href="javascript:void(0)">重新发送</a>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    async sendSmsVerifyCode() {
      return await API["post/api/sendSmsVerifyCode"]({ mobile: this.mobile, type: 1 });
    },
  }
}

</script>
<style lang="scss">
.sign-resend {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 100px;
    height: 36px;
    font-size: 13px;
    color: #fff;
    background-color: #42c02e;
    border-radius: 20px;
    line-height: 36px;
    opacity: .5;
}

.sign-resend.active {
    opacity: 1;
}

</style>
