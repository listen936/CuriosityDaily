import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);


//引入组件
import xhome from './components/home/home.vue';
import xarticle from './components/article/article.vue';

import xuser from './components/home/user/user.vue';
import xcontent from './components/home/content/content.vue';

const router = new VueRouter({
   routes: [{
      path: "/article",
      component: xarticle
   },{
      path: "/home",
      component: xhome,
      children: [{
         path: "user.vue",
         component: xuser
      },{
         path: "content.vue",
         component: xcontent
      }]
   }]
});
const store = new Vuex.Store({
   state: {
      
   }
});

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
});