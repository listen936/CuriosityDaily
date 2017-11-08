<template>
	<div>
		<div class="title">{{name}}</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				name: "详情页"
			}
		}
	}
</script>


<style lang="scss" scoped>
	$size: 60px;
	.title{
		height: $size;
		line-height: $size;
		width: 100%;
		background: black;
		color: #fff;
		font-size: 20px;
		text-align: center;
		font-weight: 800;
	}
</style>