<template>
    <view class="detail-container">
        <!-- 预留状态栏区域 -->
        <view class="status-bar"></view>
        <view class="nav-bar">
            <view class="back-button" @click="goBack">
                <text>&lt;</text>
            </view>
            <text class="nav-title">{{ category }}</text>
        </view>
        <view class="content">
            <view v-if="category === '行测资料'">
                <text>近期行测资料：</text>
                <ul>
                    <li v-for="(item, index) in contentByCategory['行测资料']" :key="index">{{ item }}</li>
                </ul>
            </view>
            <view v-if="category === '申论资料'">
                <text>近期申论资料：</text>
                <ul>
                    <li v-for="(item, index) in contentByCategory['申论资料']" :key="index">{{ item }}</li>
                </ul>
            </view>
            <view v-if="category === '面试技巧'">
                <text>近期面试技巧资料：</text>
                <ul>
                    <li v-for="(item, index) in contentByCategory['面试技巧']" :key="index">{{ item }}</li>
                </ul>
            </view>
            <view v-if="category === '时政热点'">
                <text>近期时政热点资料：</text>
                <ul>
                    <li v-for="(item, index) in contentByCategory['时政热点']" :key="index">{{ item }}</li>
                </ul>
            </view>
        </view>
    </view>
</template>

<script>
import { contentByCategory } from '@/utils/mainContent.js';
export default {
    data() {
        return {
            category: '',
            contentByCategory: contentByCategory
        };
    },
    onLoad(options) {
        this.category = decodeURIComponent(options.category);
    },
    methods: {
        goBack() {
            uni.navigateBack({
                delta: 1
            });
        }
    }
};
</script>

<style scoped>
.detail-container {
    background-color: #f5f5f5;
    min-height: 100vh; /* 设置最小高度为 100% 视口高度 */
}

/* 状态栏样式 */
.status-bar {
    height: 20px;
    background-color: #007aff;
}

.nav-bar {
    height: 44px;
    background-color: #007aff;
    display: flex;
    align-items: center;
    position: relative;
}

.back-button {
    position: absolute;
    left: 15px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
}

.nav-title {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto;
}

.content {
    padding: 20px;
}

ul {
    list-style-type: disc;
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
}
</style>