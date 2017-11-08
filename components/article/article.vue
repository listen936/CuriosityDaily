<template>
  <div class="title">{{name}}</div>
</template>


<script>
	export default() {
		data() {
			return {
				name: "详情页"
			}
		}
	}
</script>


<style lang="scss" scoped>
	$size: 40px;
	.title{
		height: $size;
		line-height: $size;
		width: 100%;
		background: black;
		color: 20px;
		font-size: 800;
		text-align: center;
	}
</style>