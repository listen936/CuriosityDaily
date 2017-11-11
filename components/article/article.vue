<template>
	<div class="mobile articles show box">
		<xheader></xheader>
		<xmain></xmain>
		<router-view></router-view>
	</div>
</template>

<script>
	import xheader from './header.vue'
	import xmain from './main.vue'
	export default {
		components: {
			xheader,
			xmain
		}
	}
</script>

<style scoped>
</style>