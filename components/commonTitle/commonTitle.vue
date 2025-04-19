<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar"></view>
			<view class="titleBar">
				<view class="title">轻院墙</view>
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
			background: linear-gradient(to top right, white, );
				            height: 50rpx;
				            margin: 0;
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
				
			}
		}
		.fill{
			
		}
	}
</style>