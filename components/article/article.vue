<template>
	<div class="mobile articles show box">
		<xheader></xheader>
		<xmain></xmain>
		<xbg></xbg>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	import xheader from './header.vue'
	import xmain from './main.vue'
	import xbg from './bg.vue'
	export default {
		components: {
			xheader,
			xmain,
			xbg
		}
	}
</script>

<style scoped>
</style>