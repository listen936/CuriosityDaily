import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueCookie from "vue-cookie";
import VueSwiper from 'vue-awesome-swiper';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueCookie);
Vue.use(VueSwiper);

//引入组件
import xhome from './components/home/home.vue';
import xarticle from './components/article/article.vue';


import xuser from './components/home/user/user.vue';
import xaccount from './components/home/user/account.vue';
import xcenter from './components/home/user/center.vue';

//主页内容组件
import xcontent from './components/home/content/content.vue';
//新闻中心
import xnews from "./components/home/news/longarticle.vue"
//栏目中心组件
import xcolumn from "./components/home/columns/column.vue"
//搜索组件
import xsearch from "./components/home/search/search.vue"
//生活研究院组件
import xlabs from "./components/home/labs/labs.vue"



const router = new VueRouter({
   routes: [{
      path: "/article",
      component: xarticle,
   },{
      path: "/home",
      component: xhome,
      children: [{
         path: "user",
         component: xuser,
         children: [{
            path: "account",
            component: xaccount
         }, {
            path: "center",
            component: xcenter
         }, {
            path: 'user',
            redirect: 'center'
         }]
      }, {
         path: "content",
         component: xcontent
      } , {
         path: "news",
         component: xnews
      },{
         path: "column",
         component: xcolumn
      }, {
         path: "labs",
         component: xlabs
      }, {
         path: "search",
         component: xsearch
      }, {
         path: "/home",
         redirect: 'content'
      }]
   }, {
      path: '/',
      redirect: '/home'
   }]
});

const store = new Vuex.Store({
   state: {
      signShow: false,
      switchNum: 0,
      email:"",
      pwd:""
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