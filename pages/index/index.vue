<template>
    <view class="homeLayout">
        <!-- 状态栏 -->

        <!-- 搜索框 -->
        <!-- <custom-tnav-bar></custom-tnav-bar> -->
        <!-- 分类栏 -->
        <view class="class">

        </view>
        <!-- 图片滚动栏 -->
        <view class="banner">
            <swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay>
                <swiper-item>
                    <image src="/static/images/banner1.jpg" mode="aspectFill"></image>
                </swiper-item>
                <swiper-item>
                    <image src="/static/images/banner2.jpg" mode="aspectFill"></image>
                </swiper-item>
                <swiper-item>
                    <image src="/static/images/banner3.jpg" mode="aspectFill"></image>
                </swiper-item>
                <swiper-item>
                    <image src="/static/images/banner4.jpg" mode="aspectFill"></image>
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
                    <swiper-item v-for="item in 4">嗨嗨嗨嗨嗨嗨嗨嗨嗨文字文字文字文字文字文字文字文字文字文字</swiper-item>
                </swiper>
            </view>
            <view class="right">
                <uni-icons type="right" size="16" color="#333"></uni-icons>
            </view>
        </view> 
        <!-- 分栏 -->
        <view class="top">

            <view class="n2">
                <navigator url="/pages/n1/n1" >
                    考公
                </navigator>
            </view>
            <view class="n3">
                <navigator url="/pages/n2/n2" >考研</navigator>
            </view>
            <view class="n4">
                <navigator url="/pages/n3/n3" >比赛</navigator>
            </view>
            <view class="n5">
                <navigator url="/pages/n4/n4" >考证</navigator>
            </view>
        </view>

        <!-- 主体 -->
        <view class="centerify">
            <view class="book" v-for="(item, index) in mainContent" :key="index">
                <view class="titley">{{ item.title }}</view>
            </view>
        </view>
    </view>
</template>

<script setup>
import mainContent from '@/utils/mainContent.js';
</script>

<style lang="scss" scoped>
.homeLayout {
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
        }
       .titley{

        }
    }
}
// 分栏
.top {
    display: flex;
}
.n2, .n3, .n4, .n5 {
    border: 1px solid skyblue;
    flex: 1;
    text-align: center;
    border-radius: 5px;
    background: cornsilk;
    font-style: italic;   //字体调整
    font-weight: lighter; /* 或者使用具体数值，如 300 */
}
</style>