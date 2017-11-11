<template>
   <div>
      <div class="com-sidebar-panel panel panel-left panel-cover layout-dark" :class="{'active-left active': isShow}" style="display: block;">
         <div class="sidebar-panel-hd">
            <canvas class="radar" width="446" height="426" style="width: 223px; height: 213px;"></canvas>
            <a href="#" class="avatar circle x40">
               <img src="../../assets/images/missing_face_radar.png" alt="">
            </a>
            <div class="name-description">
               <a href="#" class="name">登录</a>
               <p class="description"></p>
            </div>
         </div>
         <div class="iscroll-container">
            <div class="iscroll" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
               <div class="sidebar-panel-bd">
                  <ul class="items categories">
                     <li class="item">
                        <a @click="sideBarHide" class="nav-item" style="color:#ffc81f;" href="#/home">
                           <span class="iconfont icon-logo"></span>首页
                        </a>
                     </li>
                     <li class="item news">
                        <a @click="dropdown" class="newsBtn">
                           <span class="iconfont icon-fenlei"></span>新闻分类
                           <strong class="iconfont min" :class="clicked ? 'icon-toDown' : 'icon-toTop'"></strong>
                        </a>

                        <ul class="news-items" :class="{'news-dropdown':isDropdown}">
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-changwenzhang"></span> 长文章 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-10getu"></span> 10 个图 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-top15"></span> Top 15 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-shangye"></span> 商业 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-zhineng"></span> 智能 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-sheji"></span> 设计 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-shishang"></span> 时尚 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-yule"></span> 娱乐 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-chengshi"></span> 城市 </a>
                           </li>
                           <li class="news-item ">
                              <a @click="sideBarHide" class="nav-item" href="#/home/news">
                                 <span class="iconfont icon-youxi"></span> 游戏 </a>
                           </li>
                        </ul>

                     </li>
                     <li class="item ">
                        <a @click="sideBarHide" class="nav-item" href="#/home/column">
                           <span class="iconfont icon-2lanmu"></span>栏目中心</a>
                     </li>
                     <li class="item ">
                        <a @click="sideBarHide" class="nav-item" href="#/home/labs">
                           <span class="iconfont icon-1yanjiusuo"></span>生活研究所</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="sidebar-panel-ft">
            <a href="#/home/search" class="search" @click="sidebarShow">
               <div class="mock-input">搜索</div>
               <span class="iconfont icon-search"></span>
            </a>
            <a href="/mobile/aboutus.html" class="aboutus">关于我们</a>
         </div>
         <a @click="sidebarShow"  data-panle=".com-sidebar-panel" class="open-panel" style="display: block;">
            <span class="menu"></span>
         </a>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            isShow: false,
            isDropdown: false,
            clicked: true
         }
      },
      methods: {
         sidebarShow: function () {
            this.isShow = !this.isShow;
            this.$parent.isShow = !this.$parent.isShow;
         },
         dropdown: function () {
            this.isDropdown = !this.isDropdown;
            this.clicked = !this.clicked;
         },
         sideBarHide: function (e) {
            this.isShow = !this.isShow;
            this.$parent.isShow = !this.$parent.isShow;

            var items = this.$el.querySelectorAll(".nav-item");
            for (var i = 0; i < items.length; i++) {
               items[i].style.color = "#8D8D8D";
            }
            var el = e.target;
            el.style.color = "#ffc81f";
         }
      }
   }
</script>

<style scoped>
   .active-left {
      left: 0 !important;
   }

   .com-sidebar-panel .sidebar-panel-bd .items .item.news .news-items {
      display: block;
      overflow: hidden;
      height: 0px;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
   }

   .news-dropdown {
      height: 420px !important;
   }
</style>