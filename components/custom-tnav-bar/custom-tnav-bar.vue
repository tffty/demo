<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar"></view>
			<view class="titleBar">
				<view class="title">轻院知</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888 " size="18"></uni-icons>
					
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		
		<view class="fill">
			
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.layout{
		.navbar{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 10;
			background: white;
			border-bottom-left-radius: 2px;
			border-bottom-right-radius: 2px;
			.statusBar{}
			.titleBar{
				display: flex;
				align-items: center;
				padding: 0 30rpx;
				
				.title{
					font-size: 20px;
					font-weight: 400;
					font-style: italic;   //字体调整
					font-weight: lighter; /* 或者使用具体数值，如 300 */
					font-size: 16px;
				}
				.search{
					width: 220rpx;
					height: 50rpx;
					border-radius: 60rpx;
					background: rgba(255,255,255,0.4);
					border: 1px solid #fff;
					margin-left:30rpx;
					color: #999;
					font-size: 28rpx;
					display: flex;
					align-items: center;
					.icon{
						margin-left: 5rpx;
					}
					.text{
						padding-left: 10rpx;
					}
				}
			}
		}
		.fill{
			
		}
	}
</style>