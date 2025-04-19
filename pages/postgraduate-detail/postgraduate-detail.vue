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
            <view v-if="category === '公共课资料'">
                <text>近期公共课资料：</text>
                <ul>
                    <li v-for="(item, index) in categoryContents['公共课资料']" :key="index">{{ item }}</li>
                </ul>
            </view>
            <view v-if="category === '专业课资料'">
                <text>近期专业课资料：</text>
                <ul>
                    <li v-for="(item, index) in categoryContents['专业课资料']" :key="index">{{ item }}</li>
                </ul>
            </view>
            <view v-if="category === '复试技巧'">
                <text>近期复试技巧资料：</text>
                <ul>
                    <li v-for="(item, index) in categoryContents['复试技巧']" :key="index">{{ item }}</li>
                </ul>
            </view>
            <view v-if="category === '考研资讯'">
                <text>近期考研资讯资料：</text>
                <ul>
                    <li v-for="(item, index) in categoryContents['考研资讯']" :key="index">{{ item }}</li>
                </ul>
            </view>
        </view>
    </view>
</template>

<script>
import { categoryContents } from '@/utils/mainContent.js';
export default {
    data() {
        return {
            category: '',
            categoryContents: categoryContents
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
    min-height: 100vh;
    background-color: #f5f5f5;
}

/* 新增状态栏样式 */
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