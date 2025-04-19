<template>
    <view class="container">
        <!-- 预留状态栏区域 -->
        <view class="status-bar"></view>
        <!-- 导航栏 -->
        <view class="nav-bar">
            <view class="back-button" @click="goBack">
                <text>&lt;</text>
            </view>
            <text class="nav-title">考证资讯</text>
        </view>
        <view class="certification-list">
            <view class="certification-item" v-for="(certification, index) in certifications" :key="index">
                <view class="certification-title">{{ certification.title }}</view>
                <view class="certification-intro">{{ certification.intro }}</view>
                <button class="detail-button" @click="viewDetails(certification)">了解更多</button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            certifications: [
                {
                    title: '注册会计师（CPA）',
                    intro: '注册会计师是指通过注册会计师执业资格考试并取得注册会计师证书在会计师事务所执业的人员。',
                    details: '考试科目包括会计、审计、财务成本管理、经济法、税法、公司战略与风险管理。具有高等专科以上学校毕业学历，或者具有会计或者相关专业中级以上技术职称的人员可以报名参加考试。'
                },
                {
                    title: '教师资格证',
                    intro: '教师资格证是教育行业从业教师的许可证。',
                    details: '分为幼儿园、小学、中学等不同学段的教师资格证。考试内容一般包括综合素质、教育知识与能力等科目，部分学段还需考查学科知识与教学能力。非师范类学生也可以报考。'
                },
                {
                    title: '法律职业资格证书',
                    intro: '担任法官、检察官、律师、公证员、法律顾问、仲裁员（法律类）及政府部门中从事行政处罚决定审核、行政复议、行政裁决的人员必须通过法律职业资格考试。',
                    details: '考试分为客观题和主观题两部分。客观题考试通过后才能参加主观题考试。报名条件一般要求具有全日制普通高等学校法学类本科学历并获得学士及以上学位等。'
                }
            ]
        };
    },
    methods: {
        viewDetails(certification) {
            uni.showModal({
                title: certification.title + ' 详情',
                content: certification.details,
                showCancel: false
            });
        },
        goBack() {
            uni.navigateBack({
                delta: 1
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

.certification-list {
    padding: 20px;
}

.certification-item {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.certification-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.certification-intro {
    line-height: 1.5;
    margin-bottom: 15px;
}

.detail-button {
    background-color: #007aff;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
}
</style>    