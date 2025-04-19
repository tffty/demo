<template>
    <view class="container">
        <!-- 预留状态栏区域 -->
        <view class="status-bar"></view>
        <!-- 导航栏 -->
        <view class="nav-bar">
            <view class="back-button" @click="goBack">
                <text>&lt;</text>
            </view>
            <text class="nav-title">考研资料站</text>
        </view>
        <!-- 资料分类列表 -->
        <view class="category-list">
            <view class="category-item" v-for="(category, index) in categories" :key="index" @click="goToCategoryPage(category.name)">
                <text>{{ category.name }}</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                { name: '公共课资料' },
                { name: '专业课资料' },
                { name: '复试技巧' },
                { name: '考研资讯' }
            ]
        };
    },
    methods: {
        goBack() {
            uni.navigateBack({
                delta: 1
            });
        },
        goToCategoryPage(categoryName) {
            uni.navigateTo({
                url: `/pages/postgraduate-detail/postgraduate-detail?category=${encodeURIComponent(categoryName)}`
            });
        }
    }
};
</script>

<style scoped>
.container {
    min-height: 100vh;
    padding-top: 0px;
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

.category-list {
    padding: 20px;
}

.category-item {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
</style>    