<template>
  <view class="container">
    <!-- 用户信息 -->
    <view class="user-card">
      <view class="user-info">
        <view class="avatar-edit" @click="changeAvatar">
          <image class="avatar" :src="userInfo.avatar" mode="aspectFill"></image>
          <uni-icons class="edit-icon" type="camera-filled" size="24" color="#fff"></uni-icons>
        </view>
        <view class="info-box">
          <view class="nickname" @click="editNickname">
            {{ userInfo.nickname || '点击输入昵称' }}
            <uni-icons type="compose" size="18" color="#666"></uni-icons>
          </view>
          <text class="location">{{ userInfo.location }}</text>
        </view>
      </view>
    </view>

    <!-- 功能模块 -->
    <view class="menu-list">
      <!-- 账号管理 -->
      <view class="menu-card" @click="navigateTo('account')">
        <view class="menu-header">
          <uni-icons type="person" size="24" color="#2c3e50"></uni-icons>
          <text class="menu-title">账号管理</text>
        </view>
        <view class="menu-items">
          <view class="menu-item" v-for="(item, index) in accountItems" :key="index">
            <uni-icons :type="item.icon" size="20" :color="item.color"></uni-icons>
            <text>{{ item.label }}</text>
            <uni-icons type="right" size="18" color="#ccc"></uni-icons>
          </view>
        </view>
      </view>

      <!-- 课程表 -->
      <view class="menu-card">
        <view class="menu-header">
          <uni-icons type="calendar" size="24" color="#e74c3c"></uni-icons>
          <text class="menu-title">我的课程表</text>
          <uni-icons v-if="!isScheduleEdit" type="edit" size="20" color="#3498db" @click="toggleScheduleEdit"></uni-icons>
          <uni-icons v-else type="checkmark" size="20" color="#27ae60" @click="saveScheduleEdit"></uni-icons>
        </view>
        <view class="day-tabs">
          <view
            v-for="(day, index) in daysOfWeek"
            :key="index"
            :class="{ 'active': currentDayIndex === index }"
            @click="changeDay(index)"
          >
            {{ day }}
          </view>
        </view>
        <view class="schedule" :style="{ 'overflow-y': 'auto','max-height': '300px' }">
          <view class="course-item" v-for="(course, index) in weeklyCourses[currentDayIndex]" :key="index" @click="editCourse(index)">
            <view v-if="isCourseEdit[index]">
              <input v-model="tempWeeklyCourses[currentDayIndex][index].time" type="text" placeholder="时间" class="time" />
              <input v-model="tempWeeklyCourses[currentDayIndex][index].name" type="text" placeholder="课程名称" class="name" />
              <input v-model="tempWeeklyCourses[currentDayIndex][index].location" type="text" placeholder="地点" class="location" />
            </view>
            <view v-else>
              <text class="time">{{ course.time }}</text>
              <text class="name">{{ course.name }}</text>
              <text class="location">{{ course.location }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 设置 -->
      <view class="menu-card" @click="navigateTo('settings')">
        <view class="menu-header">
          <uni-icons type="gear" size="24" color="#3498db"></uni-icons>
          <text class="menu-title">系统设置</text>
        </view>
        <view class="menu-items">
          <view class="menu-item" v-for="(item, index) in settingItems" :key="index">
            <uni-icons :type="item.icon" size="20" :color="item.color"></uni-icons>
            <text>{{ item.label }}</text>
            <uni-icons type="right" size="18" color="#ccc"></uni-icons>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        avatar: '/static/1C.jpg',
        nickname: '',
        location: '河北'
      },
      accountItems: [
        { label: '修改密码', icon: 'locked', color: '#27ae60' },
        { label: '安全设置', icon: 'shield', color: '#f39c12' },
        { label: '账号绑定', icon: 'link', color: '#9b59b6' }
      ],
      weeklyCourses: [],
      tempWeeklyCourses: [],
      settingItems: [
        { label: '通用设置', icon: 'settings', color: '#3498db' },
        { label: '关于我们', icon: 'info', color: '#7f8c8d' }
      ],
      isScheduleEdit: false,
      isCourseEdit: [],
      daysOfWeek: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      currentDayIndex: 0
    };
  },
  onLoad() {
    const storedData = uni.getStorageSync('weeklyCourses');
    if (storedData) {
      this.weeklyCourses = storedData;
      this.tempWeeklyCourses = this.weeklyCourses.map(day =>
        day.map(course => ({ ...course }))
      );
      this.isCourseEdit = this.weeklyCourses.map(() => Array().fill(false));
    } else {
      this.weeklyCourses = [
        [
          { time: '08:00', name: '高等数学', location: 'A201' },
          { time: '10:00', name: '大学英语', location: 'B305' },
          { time: '14:00', name: '数据结构', location: 'C412' },
          { time: '16:00', name: '计算机基础', location: 'D501' }
        ],
        [
          { time: '09:00', name: '线性代数', location: 'A302' },
          { time: '11:00', name: '物理实验', location: 'B406' },
          { time: '13:00', name: '编程语言', location: 'C513' },
          { time: '15:00', name: '体育', location: '操场' }
        ],
        [
          { time: '08:30', name: '离散数学', location: 'A403' },
          { time: '10:30', name: '电路原理', location: 'B507' },
          { time: '14:30', name: '软件工程', location: 'C614' },
          { time: '16:30', name: '艺术鉴赏', location: 'D702' }
        ],
        [
          { time: '09:30', name: '概率论', location: 'A504' },
          { time: '11:30', name: '通信原理', location: 'B608' },
          { time: '13:30', name: '算法设计', location: 'C715' },
          { time: '15:30', name: '音乐欣赏', location: 'D803' }
        ],
        [
          { time: '08:15', name: '大学语文', location: 'A605' },
          { time: '10:15', name: '政治经济学', location: 'B709' },
          { time: '14:15', name: '数据库原理', location: 'C816' },
          { time: '16:15', name: '舞蹈课', location: 'D904' }
        ],
        [
          { time: '09:15', name: '市场营销', location: 'A706' },
          { time: '11:15', name: '人力资源管理', location: 'B810' },
          { time: '13:15', name: '电子商务', location: 'C917' },
          { time: '15:15', name: '瑜伽课', location: 'D1005' }
        ],
        [
          { time: '08:45', name: '心理学', location: 'A807' },
          { time: '10:45', name: '社会学', location: 'B911' },
          { time: '14:45', name: '统计学', location: 'C1018' },
          { time: '16:45', name: '绘画课', location: 'D1106' }
        ]
      ];
      this.tempWeeklyCourses = this.weeklyCourses.map(day =>
        day.map(course => ({ ...course }))
      );
      this.isCourseEdit = this.weeklyCourses.map(() => Array().fill(false));
    }
  },
  methods: {
    changeAvatar() {
      uni.chooseImage({
        count: 1,
        success: res => {
          this.userInfo.avatar = res.tempFilePaths[0];
        }
      });
    },
    editNickname() {
      uni.showModal({
        title: '修改昵称',
        editable: true,
        success: res => {
          if (res.confirm) {
            this.userInfo.nickname = res.content;
          }
        }
      });
    },
    navigateTo(page) {
      const routes = {
        account: '/pages/account/account',
        schedule: '/pages/schedule/schedule',
        settings: '/pages/settings/settings'
      };
      uni.navigateTo({ url: routes[page] });
    },
    toggleScheduleEdit() {
      this.isScheduleEdit = !this.isScheduleEdit;
      if (this.isScheduleEdit) {
        this.tempWeeklyCourses = this.weeklyCourses.map(day =>
          day.map(course => ({ ...course }))
        );
      }
    },
    saveScheduleEdit() {
      this.weeklyCourses = this.tempWeeklyCourses.map(day =>
        day.map(course => ({ ...course }))
      );
      this.isScheduleEdit = false;
      this.isCourseEdit = this.weeklyCourses.map(() => Array().fill(false));
      uni.setStorageSync('weeklyCourses', this.weeklyCourses);
    },
    changeDay(index) {
      this.currentDayIndex = index;
    },
    editCourse(index) {
      if (this.isScheduleEdit) {
        this.isCourseEdit[this.currentDayIndex][index] = true;
      }
    }
  }
};
</script>

<style lang="scss">
page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.container {
  padding: 30rpx;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    to top right,
    rgba(255, 0, 0, 0.5),
    rgba(255, 255, 0, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  min-height: 100vh;
  background-attachment: fixed;
}

.user-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20rpx;
  padding: 40rpx;
  box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.1);
  margin-bottom: 30rpx;

  .user-info {
    display: flex;
    align-items: center;
    gap: 30rpx;

    .avatar-edit {
      position: relative;
      .avatar {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        border: 4rpx solid #fff;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
      }
      .edit-icon {
        position: absolute;
        right: -8rpx;
        bottom: -8rpx;
        background: #3498db;
        border-radius: 50%;
        padding: 8rpx;
        box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.2);
      }
    }

    .info-box {
      .nickname {
        font-size: 36rpx;
        color: #2c3e50;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10rpx;
        margin-bottom: 10rpx;
      }

      .location {
        font-size: 28rpx;
        color: #7f8c8d;
      }
    }
  }
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 30rpx;

  .menu-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16rpx;
    padding: 30rpx;
    box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.05);

    .menu-header {
      display: flex;
      align-items: center;
      gap: 15rpx;
      margin-bottom: 25rpx;

      .menu-title {
        font-size: 32rpx;
        font-weight: 500;
        color: #2c3e50;
      }
    }

    .day-tabs {
      display: flex;
      gap: 20rpx;
      margin-bottom: 20rpx;

      view {
        padding: 10rpx 20rpx;
        border-radius: 10rpx;
        background-color: #f0f0f0;
        cursor: pointer;

        &.active {
          background-color: #3498db;
          color: #fff;
        }
      }
    }

    .menu-items {
      .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25rpx 0;
        border-bottom: 1rpx solid #eee;

        &:last-child {
          border-bottom: none;
        }

        text {
          flex: 1;
          margin-left: 20rpx;
          font-size: 30rpx;
          color: #34495e;
        }
      }
    }

    .schedule {
      .course-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25rpx 0;
        border-bottom: 1rpx solid #eee;

        .time {
          color: #e74c3c;
          font-size: 28rpx;
        }

        .name {
          flex: 1;
          margin: 0 30rpx;
          color: #2c3e50;
        }

        .location {
          color: #7f8c8d;
          font-size: 26rpx;
        }

        input {
          border: none;
          outline: none;
          font-size: 28rpx;
          color: #34495e;
        }
      }
    }
  }
}
</style>