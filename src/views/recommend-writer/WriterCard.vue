<template>
  <div class="writer-card">
    <div class="writer-card-wrap">
      <router-link to="/">
        <img :src="writer.img" alt="" class="avatar">
        <h4 class="name">{{writer.name}} <i  class="iconfont" :class="{'ic-man':writer.gender=='man','ic-woman':writer.gender=='woman'}"></i> 
        </h4>
        <p>{{writer.description}}</p>
      </router-link>
      <a class="btn follow-btn" @click.prevent="">
      	<i class="iconfont ic-follow"></i>关注
      </a>
      <div class="hr-split">最近更新</div>
      <div class="recent-update">
        <router-link class="update" v-for="(update,index) in writer.recentUpdate" :to="update.link" :key="index">
          {{update.text}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.writer-card-wrap:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
}

.name>i {
  margin-right: -5px;
  vertical-align: middle;
}

.name>.ic-man {
  color: #3194d0;
}

.name>.ic-woman {
  color: #ea6f5a;
}

.recent-update>.update {
  font-size: 13px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}

.writer-card-wrap .avatar {
  border-radius: 40px;
  width: 80px;
  height: 80px;
  margin: -40px auto 20px;
  display: block;
  border: 1px solid #ddd;
  background-color: #fff;
}

.writer-card-wrap .follow-btn {
  border-radius: 40px;
  color: #fff;
  background-color: #42c02e;
  font-size: 16px;
  width: 100px;
  padding: 8px 0;
  line-height: normal;
}

.writer-card-wrap .hr-split {
  text-align: left;
  margin-top: 12px;
  margin-bottom: 13px;
  height: 16px;
  border: 0;
  position: relative;
  font-size: 12px;
  color: #969696;
}

.writer-card-wrap .hr-split:after {
  position: absolute;
  right: 0;
  left: 60px;
  top: 8px;
  height: 1px;
  content: " ";
  background-color: #eaeaea;
}

.writer-card-wrap .name {
  font-size: 21px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
  line-height: 1.1;
}

.writer-card-wrap p {
  margin: 0 auto 10px;
  max-width: 180px;
  min-height: 50px;
  font-size: 13px;
  line-height: 25px;
}

.writer-card {
  float: left;
  width: 33.33333%;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
}

.writer-card-wrap {
  height: 320px;
  margin-top: 80px;
  padding: 0 20px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: hsla(0, 0%, 71%, .1);
  transition: .2s ease;
}

</style>
<script>
export default {
  props: {
    writer: Object
  },
  data() {
    return {}
  },
  methods: {

  }
}

</script>
