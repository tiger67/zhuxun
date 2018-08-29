<template>
  <router-link v-if="!isbtn" :to="path" class="nav-line">
    <i class="iconfont" :class="classObj()"></i>
    <span class="nav-line-text">{{name}}</span>
  </router-link>
  <a v-else href="javascript:void(0);" @click.prevent="$emit('myclick')" class="nav-line" :class="{ggos:isbtn}">
    <i class="iconfont" :class="classObj()"></i>
    <span class="nav-line-text">{{name}}</span>
  </a>
</template>
<script>
export default {
  props: {
    icon: String,
    name: String,
    isbtn: Boolean,
    path: String
  },
  methods: {
    classObj: function() {
      var cobj = {};
      cobj[this.icon] = true;
      return cobj;
    }
  }
}

</script>
<style>
.nav-line {
  display: block;
  height: auto;
  padding: 10px 20px;
  line-height: 30px;
}

.nav-line:hover {
  background-color: #f0f0f0;
}

.nav-line>i {
  margin-right: 15px;
  font-size: 24px;
  color: #ea6f5a;
  vertical-align: middle;
}

.nav-line-text {
  font-size: 15px;
  vertical-align: middle;
}

</style>
