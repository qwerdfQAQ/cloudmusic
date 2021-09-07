<template>
	<view class="index">
		<musichead title="查铠的音乐项目-练手" :icon="false"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search">
					<text class="iconfont icon-fangdajing"></text>
					<input type="text" placeholder="搜索歌曲" />
				</view>
				<view class="index-list">
					<view class="index-list-item" v-for="(item,index) in topList" :key="index" @tap="handToList(item.listId)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl"></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-text">
							<view  v-for="(item,index) in item.tracks" :key="index">
								{{index+1}}.{{item.first}}-{{item.second}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musichead from '../../components/musichead/musichead.vue';
	import {
		topList
	} from '../../common/api.js';
	export default {
		data() {
			return {
				topList: []
			}
		},
		components: {
			musichead
		},
		onLoad() {
			topList().then((res) => {
				if (res.length) {
					this.topList = res;
				}
			});
		},
		methods: {
           handToList(listId){
			   uni.navigateTo({
			   	url: '/pages/list/list?listId='+listId,
			   	success: res => {},
			   	fail: () => {},
			   	complete: () => {}
			   });
		   }
		}
	}
</script>

<style scoped>
	@import url("../../common/iconfont.css");
	.index-search {
		display: flex;
		align-items: center;
		height: 80rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #F7F7F7;
		border-radius: 50rpx;
	}

	.index-search text {
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 28rpx;
	}

	.index-search input {
		font-size: 28rpx;
		flex: 1;
	}

	.index-list {
		margin: 0 30rpx;
	}
	.index-list-item {
		display: flex; 
		margin-bottom: 34rpx;
	}
	.index-list-img {
		flex-shrink:0;
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 22rpx;
	}
	.index-list-img image {
		width: 100%;
		height: 100%;
	}
	.index-list-img text {
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: white;
		font-size: 20rpx;
	}
	.index-list-text {
		font-size: 22rpx;
		color: #CCCCCC;
		line-height: 66rpx;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
