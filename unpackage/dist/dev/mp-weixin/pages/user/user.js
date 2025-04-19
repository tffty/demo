"use strict";
const common_vendor = require("../../common/vendor.js");
const MIN_SWIPE_DISTANCE = 50;
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const user = common_vendor.reactive({
      name: "李晓明",
      studentId: "202311001",
      avatar: "https://picsum.photos/60/60"
    });
    const isEditingName = common_vendor.ref(false);
    const isEditingStudentId = common_vendor.ref(false);
    const avatarInput = common_vendor.ref(null);
    const navItems = [
      { title: "校园新闻", emoji: "📰", path: "/news" },
      { title: "通知公告", emoji: "📢", path: "/notice" },
      { title: "我的收藏", emoji: "❤️", path: "/favorites" },
      { title: "系统设置", emoji: "⚙️", path: "/settings" }
    ];
    const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    const times = ["07:00 - 07:40", "08:30 - 10:05", "10:15 - 11:55", "13:30 - 15:05", "15:20 - 16:55", "18:30 - 20:00"];
    const schedule = common_vendor.reactive({
      周一: Array(times.length).fill(""),
      周二: Array(times.length).fill(""),
      周三: Array(times.length).fill(""),
      周四: Array(times.length).fill(""),
      周五: Array(times.length).fill(""),
      周六: Array(times.length).fill(""),
      周日: Array(times.length).fill("")
    });
    const currentEdit = common_vendor.ref({ day: null, time: null });
    const scheduleTableRef = common_vendor.ref(null);
    const touchStartX = common_vendor.ref(0);
    const touchEndX = common_vendor.ref(0);
    const startEdit = (day, time, index) => {
      currentEdit.value = { day, time, index };
    };
    const saveEdit = () => {
      localStorage.setItem("schedule", JSON.stringify(schedule));
      currentEdit.value = { day: null, time: null };
    };
    const clearAll = () => {
      if (confirm("确定要清空所有课程吗？")) {
        days.forEach((day) => schedule[day] = Array(times.length).fill(""));
        localStorage.removeItem("schedule");
      }
    };
    const initData = () => {
      const saved = localStorage.getItem("schedule");
      if (saved)
        Object.assign(schedule, JSON.parse(saved));
    };
    initData();
    const handleNav = (item) => {
      alert(`即将跳转到：${item.title}`);
    };
    const handleSettings = () => {
      alert("进入通用设置页面");
    };
    const handleAbout = () => {
      alert("查看关于我们信息");
    };
    const openAvatarUpload = () => {
      avatarInput.value.click();
    };
    const handleAvatarUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          user.avatar = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const editName = () => {
      isEditingName.value = true;
    };
    const saveName = () => {
      isEditingName.value = false;
    };
    const editStudentId = () => {
      isEditingStudentId.value = true;
    };
    const saveStudentId = () => {
      isEditingStudentId.value = false;
    };
    const onTouchStart = (e) => {
      touchStartX.value = e.touches[0].clientX;
    };
    const onTouchMove = (e) => {
      touchEndX.value = e.touches[0].clientX;
    };
    const onTouchEnd = () => {
      const distance = touchEndX.value - touchStartX.value;
      if (distance > MIN_SWIPE_DISTANCE) {
        scheduleTableRef.value.scrollLeft -= 100;
      } else if (distance < -MIN_SWIPE_DISTANCE) {
        scheduleTableRef.value.scrollLeft += 100;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: user.avatar,
        b: common_vendor.o(openAvatarUpload),
        c: common_vendor.o(handleAvatarUpload),
        d: isEditingName.value
      }, isEditingName.value ? {
        e: common_vendor.o(saveName),
        f: common_vendor.o(saveName),
        g: user.name,
        h: common_vendor.o(($event) => user.name = $event.detail.value)
      } : {
        i: common_vendor.t(user.name),
        j: common_vendor.o(editName)
      }, {
        k: isEditingStudentId.value
      }, isEditingStudentId.value ? {
        l: common_vendor.o(saveStudentId),
        m: common_vendor.o(saveStudentId),
        n: user.studentId,
        o: common_vendor.o(($event) => user.studentId = $event.detail.value)
      } : {
        p: common_vendor.t(user.studentId),
        q: common_vendor.o(editStudentId)
      }, {
        r: common_vendor.f(navItems, (item, index, i0) => {
          return {
            a: common_vendor.t(item.emoji),
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => handleNav(item), index)
          };
        }),
        s: common_vendor.o(clearAll),
        t: common_vendor.f(days, (day, k0, i0) => {
          return {
            a: common_vendor.t(day),
            b: day
          };
        }),
        v: common_vendor.f(times, (time, tIndex, i0) => {
          return {
            a: common_vendor.t(time),
            b: common_vendor.f(days, (day, k1, i1) => {
              return common_vendor.e({
                a: currentEdit.value.day === day && currentEdit.value.time === time
              }, currentEdit.value.day === day && currentEdit.value.time === time ? {
                b: common_vendor.o(saveEdit, day),
                c: common_vendor.o(saveEdit, day),
                d: schedule[day][tIndex],
                e: common_vendor.o(($event) => schedule[day][tIndex] = $event.detail.value, day)
              } : {
                f: common_vendor.t(schedule[day][tIndex] || "点击编辑")
              }, {
                g: day,
                h: currentEdit.value.day === day && currentEdit.value.time === time ? 1 : "",
                i: common_vendor.o(($event) => startEdit(day, time, tIndex), day)
              });
            }),
            c: time
          };
        }),
        w: common_vendor.o(onTouchStart),
        x: common_vendor.o(onTouchMove),
        y: common_vendor.o(onTouchEnd),
        z: common_vendor.o(handleSettings),
        A: common_vendor.o(handleAbout)
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
