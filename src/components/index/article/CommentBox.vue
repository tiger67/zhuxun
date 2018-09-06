<template>
  <form class="new-comment">
    <slot/>
    <textarea placeholder="写下你的评论">
    </textarea>
    <div class="new-c-ft">
      <span class="snt-tip">Ctrl+Enter 发表</span>
      <a href="javascript:void" class="btn sent-btn" @click.prevent="">发送</a>
      <a href="javascript:void" class="cancel" @click.prevent="">取消</a>
    </div>
  </form>
</template>
<style lang="scss">
.new-comment {
  position: relative;
  margin-left: 48px;
  .new-c-ft {
    height: 50px;
  }
  .snt-tip {
    float: left;
    margin: 20px 0 0 0px;
    font-size: 13px;
    color: #969696;
  }
  .cancel {
    float: right;
    margin: 18px 30px 0 0;
    font-size: 16px;
    color: #969696;
  }
  .sent-btn {
    float: right;
    width: 78px;
    margin: 10px 0;
    padding: 8px 18px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    color: #fff!important;
    background-color: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
  }
  .avatar {
    position: absolute;
    left: -48px;
    margin-right: 5px;
    width: 38px;
    height: 38px;
    vertical-align: middle;
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
    }
  }
  textarea {
    padding: 10px 15px;
    width: 100%;
    height: 80px;
    font-size: 13px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background-color: hsla(0, 0%, 71%, .1);
    resize: none;
    display: inline-block;
    vertical-align: top;
    outline-style: none;
  }
}

</style>
<script>


</script>
