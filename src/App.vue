<template>
  <router-view/>
</template>
<script>
import "../static/css/reset.css"
export default {
  name: 'App',
};

</script>
<style lang="scss">
@import "@/components/sign/asign-page.scss";
@import "@/components/sign/asign-form.scss";
@import './common/scss/index.scss';
.index-content {
  min-height: 800px;
}

</style>
