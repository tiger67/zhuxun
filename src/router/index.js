import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/404'
import r1 from "./r1"
import r2 from "./r2"


Vue.use(Router);

let r = r1.concat(r2).concat([{
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]);

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: r
})
