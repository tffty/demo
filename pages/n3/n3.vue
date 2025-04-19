<template>
    <view class="container">
        <!-- 预留状态栏区域 -->
        <view class="status-bar"></view>
        <!-- 导航栏 -->
        <view class="nav-bar">
            <view class="back-button" @click="goBack">
                <text>&lt;</text>
            </view>
            <text class="nav-title">大学生高含金量比赛资讯</text>
        </view>
        <view class="competition-list">
            <view class="competition-item" v-for="(competition, index) in competitions" :key="index">
                <view class="competition-title">{{ competition.title }}</view>
                <view class="competition-intro">{{ competition.intro }}</view>
                <button class="detail-button" @click="viewDetails(competition)">了解更多</button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            competitions: [
                {
                    title: '挑战杯全国大学生课外学术科技作品竞赛',
                    intro: '“挑战杯”是一项具有导向性、示范性和群众性的全国竞赛活动，被誉为中国大学生科技创新创业的“奥林匹克”盛会。竞赛分为自然科学类学术论文、哲学社会科学类社会调查报告和学术论文、科技发明制作三大类。',
                    details: '参赛对象为在校全日制本专科生、硕士研究生和博士研究生（不含在职研究生）。竞赛每两年举办一届，设特等奖、一等奖、二等奖、三等奖，对优秀组织单位颁发“挑战杯”，对获得三等奖以上的学生及其指导教师颁发证书。'
                },
                {
                    title: '中国国际大学生创新创业博览会',
                    intro: '聚焦“五育”并举融通创新，促进教育链、人才链与产业链、创新链有机衔接。展示各高校创新创业教育改革成果、大学生创新创业项目和学校服务国家战略需求取得的重大成果。',
                    details: '展会设置了综合展区、高校展区、企业展区等，有项目路演、高端论坛、成果发布等活动。众多高校和企业参与，为大学生提供了展示创新成果、交流合作的平台。'
                },
                {
                    title: '全国大学生数学建模竞赛',
                    intro: '全国大学生数学建模竞赛是全国高校规模最大的基础性学科竞赛，也是世界上规模最大的数学建模竞赛。竞赛题目一般来源于工程技术和管理科学等方面经过适当简化加工的实际问题。',
                    details: '竞赛以三人一组为单位进行，在三天时间内完成建模、求解、编程、论文写作等工作。竞赛设一、二等奖和成功参赛奖，获奖者在保研、考研、就业等方面有一定优势。'
                }
            ]
        };
    },
    methods: {
        viewDetails(competition) {
            uni.showModal({
                title: competition.title + ' 详情',
                content: competition.details,
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

.competition-list {
    padding: 20px;
}

.competition-item {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.detail-button {
    background-color: #007aff;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
}
</style>    