// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "@/components/directives"
import "@/components/filters"


import { carousel, CarouselItem, Pagination, Button, Input, Select, Option, Cascader, Upload, Message, MessageBox } from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
Vue.use(carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Upload)
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  //store,
  components: { App },
  template: '<App/>'
})
