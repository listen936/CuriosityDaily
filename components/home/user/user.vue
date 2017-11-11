<template>
  <div>
     <router-view></router-view>
  </div>
</template>
<script>
	import bus from '../../bus'
	
	export default{
		data(){
			return {
				name:''
			}
		},
		methods:{
			bundusername:function(){
				this.name = this.$cookie.get("username") || "";
				if(this.name != ""){
					bus.$emit("forchild",username);
				}
			}
		},
		mounted(){
			this.bundusername();
		},
	}
	
</script>