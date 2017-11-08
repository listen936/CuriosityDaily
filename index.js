import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"

Vue.use(Vuex)
Vue.use(VueRouter)


//引入组件
import xhome from './components/home/home.vue'
import xarticle from './components/article/article.vue'


const router = new VueRouter({
   routes: [{
      path: "/article",
      component: xarticle
   },{
      path: "/home",
      component: xhome
   }]
})
const store = new Vuex.Store({
   state: {
      
   }
})

new Vue({
   el: "#app",
   store,
   router,
   data: {

   },
   template: `
		<router-view></router-view>
	`,
   components: {
      xarticle,
      xhome
   }
})