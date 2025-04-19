<template>
    <view class="homeLayout">
        <!-- 头部框 -->
        <!-- <commonTitle></commonTitle> -->
        <!-- 分类栏 -->
        <view class="class">
        </view>
        <!-- 图片滚动栏 -->
        <view class="banner">
            <swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay>
                <swiper-item>
                    <image src="/static/images/weixin20250410211450.jpg" mode="aspectFill"></image>
                </swiper-item>
            </swiper>
        </view>
        <!-- 公告栏 -->
        <view class="notice">
            <view class="left">
                <uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
                <text class="text">公告</text>
            </view>
            <view class="center">
                <swiper vertical autoplay interval="1500" duration="300" circular>
                    <swiper-item v-for="item in 4">遵守社区规则</swiper-item>
                </swiper>
            </view>
            <view class="right">
                <uni-icons type="right" size="16" color="#333"></uni-icons>
            </view>
        </view>
        <!-- 分栏 -->
        <view class="top">
            <view class="n2" :class="{ active: currentTab === 'fengrunCampus' }" @click="changeTab('fengrunCampus')">丰润校区</view>
            <view class="n3" :class="{ active: currentTab === 'lunanCampus' }" @click="changeTab('lunanCampus')">路南校区</view>
            <view class="n4" :class="{ active: currentTab === 'lostAndFound' }" @click="changeTab('lostAndFound')">失物认领</view>
            <view class="n5" :class="{ active: currentTab ==='secondHandMarket' }" @click="changeTab('secondHandMarket')">二手集市</view>
            <view class="n1" :class="{ active: currentTab ==='recruitment' }" @click="changeTab('recruitment')">招人</view>
        </view>

        <!-- 主体，根据当前选中的 tab 展示不同内容 -->
        <view class="centerify">
            <view v-if="currentTab === 'fengrunCampus'">
                <view v-for="(item, index) in fengrunPosts" :key="index" class="book">
                    <view class="titley">{{ item.content }}</view>
                    <view class="date">{{ item.date }}</view>
                </view>
            </view>
            <view v-if="currentTab === 'lunanCampus'">
                <view v-for="(item, index) in lunanPosts" :key="index" class="book">
                    <view class="titley">{{ item.content }}</view>
                    <view class="date">{{ item.date }}</view>
                </view>
            </view>
            <view v-if="currentTab === 'lostAndFound'">
                <view v-for="(item, index) in lostAndFoundPosts" :key="index" class="book">
                    <view class="titley">{{ item.content }}</view>
                    <view class="date">{{ item.date }}</view>
                </view>
            </view>
            <view v-if="currentTab ==='secondHandMarket'">
                <view v-for="(item, index) in secondHandMarketPosts" :key="index" class="book">
                    <view class="titley">{{ item.content }}</view>
                    <view class="date">{{ item.date }}</view>
                </view>
            </view>
            <view v-if="currentTab ==='recruitment'">
                <view v-for="(item, index) in recruitmentPosts" :key="index" class="book">
                    <view class="titley">{{ item.content }}</view>
                    <view class="date">{{ item.date }}</view>
                </view>
            </view>
        </view>
        <!-- 发布按钮 -->
        <view class="plus-button"><navigator url="/pages/send/send" >+</navigator></view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
// 引入 mainContent.js 导出的数据
import {
    fengrunPosts,
    lunanPosts,
    lostAndFoundPosts,
    secondHandMarketPosts,
    recruitmentPosts
} from '@/utils/mainContent.js';

// 定义当前选中的 tab
const currentTab = ref('fengrunCampus');

// 定义切换 tab 的方法
const changeTab = (tab) => {
    currentTab.value = tab;
};
</script>

<style lang="scss" scoped>
.homeLayout{
    position: relative;
    z-index: 1;
	margin: 0;
	padding: 0;
	background: linear-gradient(to top right, rgba(255, 0, 0, 0.5), rgba(255, 255, 0, 0.5), rgba(255, 255, 255, 0.5));
	min-height: 100vh;
	background-attachment: fixed;
   .banner{
        margin-top: 15px;
        width: 750rpx;
        padding: 30rpx 0;
        swiper{
            width: 750rpx;
            height: 340rpx;
            &-item{
                width: 100%;
                height: 100%;
                padding: 0 30rpx;
                image{
                    width: 100%;
                    height: 100%;
                    border-radius: 10rpx;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // 图片阴影效果
                }
            }
        }
    }
    // 公告栏
   .notice{
        width: 690rpx;
        height: 80rpx;
        background: #f9f9f9;
        margin: 0 auto;
        border-radius: 80rpx;
        display: flex;
        line-height: 80rpx;
       .left{
            width: 140rpx;
            display: flex;
            align-items: center;
            justify-content: center;
           .text{
                color: #28b389;
                font-weight: 600;
                font-size: 28rpx;
            }
        }
       .center{
            flex: 1;
            swiper{
                height: 100%;
                &-item{
                    height: 100%;
                    font-size: 30rpx;
                    color: #666;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
       .right{
            width: 70rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    // 主体
   .centerify{
        padding: 30rpx;
       .book{
            width: 100%;
            border-bottom: 1px solid gray;
            height: 200rpx;
            display: flex;
            flex-direction: column;
        }
       .titley{
            margin-bottom: 5rpx;
            font-size: 30rpx; // 假设正文大小为 30rpx
        }
       .date{
            font-size: 22.5rpx; // 比正文小四分之一
            color: #999;
            text-align: right;
        }
    }
    // 右下角圆圈加号按钮样式
   .plus-button{
        position: absolute;
        right: 70rpx;
        bottom: 200rpx;
        width: 80rpx;
        height: 80rpx;
        background-color: #28b389;
        border-radius: 50%;
        color: white;
        font-size: 60rpx;
        text-align: center;
        line-height: 80rpx;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        position: fixed;
    }
}
// 分栏
.top {
    display: flex;
    padding: 0 20rpx;
}
.n1,.n2, .n3, .n4, .n5 {
    border: 1px solid skyblue;
    flex: 1;
    text-align: center;
    border-radius: 5px;
    background: lightgoldenrodyellow;
    font-style: italic;
    font-weight: lighter; /* 或者使用具体数值，如 300 */
}
.active {
    background-color: #e0e0e0; // 选中时的背景色，可自行调整
}
</style> 