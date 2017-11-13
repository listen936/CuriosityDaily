<template>
   <div id="Weui" :style="{'display':bool? 'block': 'none'}">
      <div class="page gallery js_show">
         <div class="page__hd">
            <h1 class="page__title">Gallery</h1>
            <p class="page__desc">画廊，可实现上传图片的展示或幻灯片播放</p>
         </div>
         <div class="weui-gallery" style="display: block">
            <span class="weui-gallery__img" :style="{'backgroundImage': 'url('+ url +')'}"></span>
            <div class="weui-gallery__opr">
               <a href="javascript:" class="weui-gallery__del">
                  <i @click="Show" class="weui-icon-delete weui-icon_gallery-delete"></i>
               </a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            bool: false,
            url: ''
         }
      },
      methods: {
         Show: function () {
            this.bool = false;
         }
      }
   }
</script>

<style scoped>
   #Weui {
      position: absolute;
      top: 0;
   }

</style>