<template>
	<view class="music-head" :style="{color:color}">
		<view v-if="icon" class="music-head-icon">
			<text class="iconfont icon-arrow-left" @tap="handToBack"></text> | <text @tap="handToHome" class="iconfont icon-shouye"></text>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','icon','color'],
		methods:{
			handToBack(){
				uni.navigateBack();
			},
			handToHome(){
				uni.navigateTo({
					url:'/pages/index/index'
				});
			}
		}
	}
</script>

<style scoped>
     .music-head{
		 width: 100%;
		 height: 75px;
		 font-size: 16px;
		 line-height: 80px;
		 text-align: center;
		 color: black;
		 position: relative;
	 }
	 .music-head-icon{
		 position: absolute;
		 left: 8px;
		 top:26px;
		 width: 90px;
		 height: 30px;
		 background-color: rgba(0,0,0,0.2);
		 color: white;
		 line-height: 31px;
		 border-radius: 15px;
		 display: flex;
		 justify-content: space-evenly;
	 }
</style>
