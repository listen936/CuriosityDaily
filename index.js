import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

//引入组件
import xhome from './components/home/home.vue';
import xarticle from './components/article/article.vue';

import xuser from './components/home/user/user.vue';
import xaccount from './components/home/user/account.vue';
import xcenter from './components/home/user/center.vue';


import xcontent from './components/home/content/content.vue';
//栏目中心组件
import xcolumn from "./components/home/columns/column.vue"

//生活研究院组件
import xlabs from "./components/home/labs/labs.vue"


const router = new VueRouter({
   routes: [{
      path: "/article",
      component: xarticle
   },{
      path: "/home",
      component: xhome,
      children: [{
         path: "user",
         component: xuser,
         children: [{
            path: "account",
            component: xaccount
         },{
            path: "center",
            component: xcenter
         }]
      },{
         path: "content",
         component: xcontent
      },{
         path: "column",
         component: xcolumn
      },{
         path: "labs",
         component: xlabs
      }]
   },{
      path: '/',
      redirect: '/home'
   }]
});

const store = new Vuex.Store({
   state: {
      signShow:false
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
      xhome,    
   }
});