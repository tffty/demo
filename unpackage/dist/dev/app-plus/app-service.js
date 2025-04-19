if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$b = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/Lenovo/Desktop/demo1/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const mainContentData = [
    { title: "清明缅怀先烈 传承红色基因" },
    { title: "今日，清明" },
    { title: "清明将至，安全先行——华北理工大学轻工学院清明假期安全提醒" },
    { title: "华北理工大学轻工学院在全国大学生职业规划大赛河北省决赛中再创佳绩" },
    { title: "你好，四月丨在轻工，春来一季，心生欢喜" },
    { title: "华北理工大学轻工学院2025年单招报考指南，欢迎你报考！" },
    { title: "轻风微语 |一树花开" },
    { title: "5621名！石家庄事业单位公开招聘正在报名中，职等你来→" },
    { title: "西门子（中国）有限公司来华北理工大学轻工学院洽谈产业学院合作事宜" },
    { title: "华北理工大学轻工学院与唐山开滦国家矿山公园签约 共建大思政实践教育基地" },
    { title: "中国民办教育协会高等教育数字化专委会调研华北理工大学轻工学院" },
    { title: "华北理工大学轻工学院师生执裁中美青少年短道速滑邀请赛" },
    { title: "华北理工大学轻工学院举办肺结核防范培训活动" },
    { title: "轻风微语 |人生没有如果，愿你勇往直前" }
  ];
  const generateRandomDate = () => {
    const start = /* @__PURE__ */ new Date("2025-04-13T07:00:00");
    const end = /* @__PURE__ */ new Date();
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    const month = randomDate.getMonth() + 1;
    const day = randomDate.getDate();
    const hours = randomDate.getHours();
    const minutes = randomDate.getMinutes();
    return `${month}/${day}/${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };
  const allPosts = [
    "路南日常求问有没有社团招新的,想加个社团",
    "路南日常谁家轻食好吃啊求推荐#轻食减脂餐",
    "低卡轻食~好吃不贵,轻院学子订餐可送至宿舍楼下",
    "丰润日常秘制凉拌菜,每天新鲜现做,坚决不用隔夜菜",
    "二手集市丰润日常出两个mini40的壳子15元可小刀",
    "丰润日常想问下各位考研进度都到哪里了",
    "丰润日常晚上哪个教学楼可以自习呀",
    "二手集市收一副羽毛球拍",
    "丰润日常有没有人明天下午拼车去路南万达",
    "丰润日常今麦郎火鸡面买多了有木有要的",
    "招人丰润校门外招配送员,管饭,每天5点,按单结算",
    "表白捞人寻物刚刚在东食堂西门口捡到一条数据线失主可以联系我",
    "丰润日常可代取快递",
    "路南日常路南有图书馆吗",
    "路南日常有人知道学校附近哪里能修自行车吗？车胎爆了。",
    "路南日常求租学校附近的单间，预算1000元左右。",
    "路南日常有没有一起组队参加数学建模比赛的同学？",
    "路南日常出一本全新的专业教材，价格可商量。",
    "路南日常有没有喜欢打篮球的同学，周末一起约球呀。",
    "路南日常捡到一张校园卡，失主请联系我。",
    "路南日常想找个英语搭子，一起练习口语。",
    "路南日常学校食堂今天的红烧肉太好吃啦，强烈推荐！",
    "路南日常有没有人会安装电脑系统呀，有偿帮忙。",
    "路南日常有没有同学要转让自行车的，想买一辆。",
    "丰润日常明天上午有一起去图书馆占座的吗？",
    "丰润日常出闲置的健身器材，几乎全新。",
    "丰润日常有没有人知道学校的打印店几点关门呀？",
    "丰润日常求问最近有没有校园招聘会的消息。",
    "丰润日常晚上在操场跑步，有没有人一起？",
    "丰润日常学校附近哪家理发店剪头发比较好？",
    "丰润日常收一套考研复习资料，价格合理就行。",
    "丰润日常有没有人一起拼单买水果呀，更划算。",
    "丰润日常寻长期饭搭子，一起探索学校周边美食。",
    "丰润日常有没有同学有多余的校园网账号，借用一下。",
    "二手集市出售一台九成新的笔记本电脑，配置高。",
    "二手集市出一个闲置的行李箱，24寸，质量很好。",
    "二手集市收一些考研用过的辅导书，价格从优。",
    "二手集市转让一张书桌，可折叠，方便收纳。",
    "二手集市出售一套瑜伽垫和健身球，低价出。",
    "二手集市收一辆二手电动车，能正常骑行的。",
    "二手集市出闲置的音响设备，音质超棒。",
    "二手集市求购一台打印机，最好是喷墨的。",
    "二手集市出售一个小冰箱，宿舍用很合适。",
    "二手集市转让一些手工制作材料，低价处理。",
    "招人学校附近奶茶店招兼职，周末上班，薪资面议。",
    "招人招室友一起合租校外公寓，租金平摊。",
    "招人学生会宣传部招新，欢迎有创意的同学加入。",
    "招人学校附近餐厅招洗碗工，包吃，工作轻松。",
    "招人创业团队招募成员，一起做项目，有分红。",
    "招人社团招新啦，喜欢摄影的同学看过来。",
    "招人健身房招前台兼职，每天工作4小时。",
    "招人招一起组队参加创新创业大赛的队友。",
    "招人招校园代理，帮忙推广学习资料。",
    "招人学校附近超市招理货员，长期稳定优先。",
    "失物认领今天在图书馆三楼靠窗座位捡到一本专业笔记，有姓名缩写，失主速联系。",
    "失物认领在学校食堂二楼的角落捡到一个黑色保温杯，杯身有卡通贴纸，快来认领。",
    "失物认领于学校操场看台处发现一副运动耳机，还连着充电盒，失主看到请联系。",
    "失物认领在校园小花园的长椅上捡到一把雨伞，花色独特，着急用伞的同学联系我。",
    "失物认领在教学楼的楼梯间捡到一串钥匙，钥匙扣是个小玩偶，失主快来领回。",
    "失物认领学校附近公交站捡到一个学生卡套，里面有校园卡，联系我归还。",
    "失物认领在学校体育馆更衣室捡到一件运动外套，衣服上有品牌标志，速来认领。",
    "失物认领图书馆借阅处捡到一本写满批注的小说，失主可描述书内内容来取。",
    "失物认领在学校湖边散步时捡到一个智能手环，屏幕有细微划痕，失主联系。",
    "失物认领教学楼电梯口发现一个文件袋，里面有一些资料，失主请联系。"
  ];
  const fengrunPosts = allPosts.filter((item) => item.includes("丰润日常")).map((content) => ({
    content,
    date: generateRandomDate()
  }));
  const lunanPosts = allPosts.filter((item) => item.includes("路南日常")).map((content) => ({
    content,
    date: generateRandomDate()
  }));
  const lostAndFoundPosts = allPosts.filter((item) => item.includes("失物认领")).map((content) => ({
    content,
    date: generateRandomDate()
  }));
  const secondHandMarketPosts = allPosts.filter((item) => item.includes("二手集市")).map((content) => ({
    content,
    date: generateRandomDate()
  }));
  const recruitmentPosts = allPosts.filter((item) => item.includes("招人")).map((content) => ({
    content,
    date: generateRandomDate()
  }));
  const contentByCategory = {
    "行测资料": [
      "2025年行测数量关系新题型分析，针对工程问题、行程问题等经典题型的创新变化进行了深入解读。",
      "行测言语理解中的高频成语汇总，包含近义、反义成语辨析及在真题中的运用示例。"
    ],
    "申论资料": [
      "2025年申论热点话题预测，如乡村振兴中的产业融合发展、城市治理中的数字化转型等。",
      "申论高分作文的结构模板与素材积累，分享不同类型作文的框架搭建和实用论据。"
    ],
    "面试技巧": [
      "结构化面试中的最新评分标准解读，明确各环节得分要点和常见扣分点。",
      "无领导小组讨论的角色定位与策略，教你如何在小组讨论中脱颖而出。"
    ],
    "时政热点": [
      "2025年一季度国内外重大政策解读，如财政政策、货币政策调整对经济的影响。",
      "科技前沿动态汇总，包括人工智能、新能源等领域的最新突破。"
    ]
  };
  const categoryContents = {
    "公共课资料": [
      "2025 考研英语新大纲词汇变化解读：重点标注了新增和删减的词汇，同时对词义变化的词汇给出了例句帮助理解，如“novel”除了常见的“小说”意思，新增了“新颖的”这一常考释义。",
      "考研数学概率论与数理统计的高频考点总结及解题技巧：详细总结了随机变量及其分布、数字特征等高频考点，针对不同题型给出了对应的解题思路和技巧，例如在求解二维随机变量的联合分布函数时的分步解法。",
      "政治马原部分最新理论热点分析及可能考查方向：结合当前国际形势和国内政策，分析了唯物辩证法、认识论等部分的理论热点，预测了可能在选择题和分析题中出现的考查方向。"
    ],
    "专业课资料": [
      "计算机专业数据结构最新真题解析及命题趋势分析：选取了多所高校近年的真题进行详细解析，分析了算法设计、图论等考点的命题趋势，如更加注重对实际应用场景的考查。",
      "管理学专业经典案例分析及答题思路指导：提供了多个不同行业的管理学经典案例，包括战略管理、人力资源管理等方面，同时给出了案例分析题的答题思路和框架。",
      "医学专业内科学重点疾病的诊断与治疗新进展：介绍了心血管疾病、呼吸系统疾病等重点疾病的最新诊断标准和治疗方法，如新型药物的应用和介入治疗技术的发展。"
    ],
    "复试技巧": [
      "考研复试英语口语常见话题及回答模板：整理了个人介绍、兴趣爱好、未来规划等常见话题的回答模板，同时给出了提高口语表达流利度和准确性的建议。",
      "复试面试中如何突出个人科研能力和优势：分享了在面试中展示科研项目经历、论文发表情况等科研能力的方法，以及如何结合报考专业突出自身优势。",
      "复试专业课笔试的复习重点和备考策略：根据不同专业的特点，总结了复试专业课笔试的复习重点，如参考书目、历年真题等，并给出了合理的备考时间安排和复习方法。"
    ],
    "考研资讯": [
      "2025 各高校考研招生人数及专业调整情况汇总：收集了多所高校的招生信息，包括招生人数的增减、新增和取消的专业等，为考生提供了全面的报考参考。",
      "考研调剂最新信息及注意事项：实时更新了各院校的调剂名额和要求，同时提醒考生在调剂过程中的注意事项，如调剂系统的开放时间、填报技巧等。",
      "考研国家线预测分析及各院校复试分数线趋势：结合历年国家线和各院校复试分数线，分析了今年的分数线走势，为考生判断自己是否能进入复试提供了参考。"
    ]
  };
  const _imports_0$1 = "/static/images/banner1.jpg";
  const _imports_1 = "/static/images/banner2.jpg";
  const _imports_2 = "/static/images/banner3.jpg";
  const _imports_3 = "/static/images/banner4.jpg";
  const _sfc_main$a = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { get mainContent() {
        return mainContentData;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "homeLayout" }, [
      vue.createCommentVNode(" 状态栏 "),
      vue.createCommentVNode(" 搜索框 "),
      vue.createCommentVNode(" <custom-tnav-bar></custom-tnav-bar> "),
      vue.createCommentVNode(" 分类栏 "),
      vue.createElementVNode("view", { class: "class" }),
      vue.createCommentVNode(" 图片滚动栏 "),
      vue.createElementVNode("view", { class: "banner" }, [
        vue.createElementVNode("swiper", {
          circular: "",
          "indicator-dots": "",
          "indicator-color": "rgba(255,255,255,0.5)",
          "indicator-active-color": "#fff",
          autoplay: ""
        }, [
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("image", {
              src: _imports_0$1,
              mode: "aspectFill"
            })
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("image", {
              src: _imports_1,
              mode: "aspectFill"
            })
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("image", {
              src: _imports_2,
              mode: "aspectFill"
            })
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("image", {
              src: _imports_3,
              mode: "aspectFill"
            })
          ])
        ])
      ]),
      vue.createCommentVNode(" 公告栏 "),
      vue.createElementVNode("view", { class: "notice" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createVNode(_component_uni_icons, {
            type: "sound-filled",
            size: "20",
            color: "#28b389"
          }),
          vue.createElementVNode("text", { class: "text" }, "公告")
        ]),
        vue.createElementVNode("view", { class: "center" }, [
          vue.createElementVNode("swiper", {
            vertical: "",
            autoplay: "",
            interval: "1500",
            duration: "300",
            circular: ""
          }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(4, (item) => {
                return vue.createElementVNode("swiper-item", null, "嗨嗨嗨嗨嗨嗨嗨嗨嗨文字文字文字文字文字文字文字文字文字文字");
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createVNode(_component_uni_icons, {
            type: "right",
            size: "16",
            color: "#333"
          })
        ])
      ]),
      vue.createCommentVNode(" 分栏 "),
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", { class: "n2" }, [
          vue.createElementVNode("navigator", { url: "/pages/n1/n1" }, " 考公 ")
        ]),
        vue.createElementVNode("view", { class: "n3" }, [
          vue.createElementVNode("navigator", { url: "/pages/n2/n2" }, "考研")
        ]),
        vue.createElementVNode("view", { class: "n4" }, [
          vue.createElementVNode("navigator", { url: "/pages/n3/n3" }, "比赛")
        ]),
        vue.createElementVNode("view", { class: "n5" }, [
          vue.createElementVNode("navigator", { url: "/pages/n4/n4" }, "考证")
        ])
      ]),
      vue.createCommentVNode(" 主体 "),
      vue.createElementVNode("view", { class: "centerify" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.mainContent, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "book",
              key: index
            }, [
              vue.createElementVNode(
                "view",
                { class: "titley" },
                vue.toDisplayString(item.title),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/index/index.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        userInfo: {
          avatar: "/static/1C.jpg",
          nickname: "",
          location: "河北"
        },
        accountItems: [
          { label: "修改密码", icon: "locked", color: "#27ae60" },
          { label: "安全设置", icon: "shield", color: "#f39c12" },
          { label: "账号绑定", icon: "link", color: "#9b59b6" }
        ],
        weeklyCourses: [],
        tempWeeklyCourses: [],
        settingItems: [
          { label: "通用设置", icon: "settings", color: "#3498db" },
          { label: "关于我们", icon: "info", color: "#7f8c8d" }
        ],
        isScheduleEdit: false,
        isCourseEdit: [],
        daysOfWeek: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        currentDayIndex: 0
      };
    },
    onLoad() {
      const storedData = uni.getStorageSync("weeklyCourses");
      if (storedData) {
        this.weeklyCourses = storedData;
        this.tempWeeklyCourses = this.weeklyCourses.map(
          (day) => day.map((course) => ({ ...course }))
        );
        this.isCourseEdit = this.weeklyCourses.map(() => Array().fill(false));
      } else {
        this.weeklyCourses = [
          [
            { time: "08:00", name: "高等数学", location: "A201" },
            { time: "10:00", name: "大学英语", location: "B305" },
            { time: "14:00", name: "数据结构", location: "C412" },
            { time: "16:00", name: "计算机基础", location: "D501" }
          ],
          [
            { time: "09:00", name: "线性代数", location: "A302" },
            { time: "11:00", name: "物理实验", location: "B406" },
            { time: "13:00", name: "编程语言", location: "C513" },
            { time: "15:00", name: "体育", location: "操场" }
          ],
          [
            { time: "08:30", name: "离散数学", location: "A403" },
            { time: "10:30", name: "电路原理", location: "B507" },
            { time: "14:30", name: "软件工程", location: "C614" },
            { time: "16:30", name: "艺术鉴赏", location: "D702" }
          ],
          [
            { time: "09:30", name: "概率论", location: "A504" },
            { time: "11:30", name: "通信原理", location: "B608" },
            { time: "13:30", name: "算法设计", location: "C715" },
            { time: "15:30", name: "音乐欣赏", location: "D803" }
          ],
          [
            { time: "08:15", name: "大学语文", location: "A605" },
            { time: "10:15", name: "政治经济学", location: "B709" },
            { time: "14:15", name: "数据库原理", location: "C816" },
            { time: "16:15", name: "舞蹈课", location: "D904" }
          ],
          [
            { time: "09:15", name: "市场营销", location: "A706" },
            { time: "11:15", name: "人力资源管理", location: "B810" },
            { time: "13:15", name: "电子商务", location: "C917" },
            { time: "15:15", name: "瑜伽课", location: "D1005" }
          ],
          [
            { time: "08:45", name: "心理学", location: "A807" },
            { time: "10:45", name: "社会学", location: "B911" },
            { time: "14:45", name: "统计学", location: "C1018" },
            { time: "16:45", name: "绘画课", location: "D1106" }
          ]
        ];
        this.tempWeeklyCourses = this.weeklyCourses.map(
          (day) => day.map((course) => ({ ...course }))
        );
        this.isCourseEdit = this.weeklyCourses.map(() => Array().fill(false));
      }
    },
    methods: {
      changeAvatar() {
        uni.chooseImage({
          count: 1,
          success: (res) => {
            this.userInfo.avatar = res.tempFilePaths[0];
          }
        });
      },
      editNickname() {
        uni.showModal({
          title: "修改昵称",
          editable: true,
          success: (res) => {
            if (res.confirm) {
              this.userInfo.nickname = res.content;
            }
          }
        });
      },
      navigateTo(page) {
        const routes = {
          account: "/pages/account/account",
          schedule: "/pages/schedule/schedule",
          settings: "/pages/settings/settings"
        };
        uni.navigateTo({ url: routes[page] });
      },
      toggleScheduleEdit() {
        this.isScheduleEdit = !this.isScheduleEdit;
        if (this.isScheduleEdit) {
          this.tempWeeklyCourses = this.weeklyCourses.map(
            (day) => day.map((course) => ({ ...course }))
          );
        }
      },
      saveScheduleEdit() {
        this.weeklyCourses = this.tempWeeklyCourses.map(
          (day) => day.map((course) => ({ ...course }))
        );
        this.isScheduleEdit = false;
        this.isCourseEdit = this.weeklyCourses.map(() => Array().fill(false));
        uni.setStorageSync("weeklyCourses", this.weeklyCourses);
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 用户信息 "),
      vue.createElementVNode("view", { class: "user-card" }, [
        vue.createElementVNode("view", { class: "user-info" }, [
          vue.createElementVNode("view", {
            class: "avatar-edit",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.changeAvatar && $options.changeAvatar(...args))
          }, [
            vue.createElementVNode("image", {
              class: "avatar",
              src: $data.userInfo.avatar,
              mode: "aspectFill"
            }, null, 8, ["src"]),
            vue.createVNode(_component_uni_icons, {
              class: "edit-icon",
              type: "camera-filled",
              size: "24",
              color: "#fff"
            })
          ]),
          vue.createElementVNode("view", { class: "info-box" }, [
            vue.createElementVNode("view", {
              class: "nickname",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.editNickname && $options.editNickname(...args))
            }, [
              vue.createTextVNode(
                vue.toDisplayString($data.userInfo.nickname || "点击输入昵称") + " ",
                1
                /* TEXT */
              ),
              vue.createVNode(_component_uni_icons, {
                type: "compose",
                size: "18",
                color: "#666"
              })
            ]),
            vue.createElementVNode(
              "text",
              { class: "location" },
              vue.toDisplayString($data.userInfo.location),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      vue.createCommentVNode(" 功能模块 "),
      vue.createElementVNode("view", { class: "menu-list" }, [
        vue.createCommentVNode(" 账号管理 "),
        vue.createElementVNode("view", {
          class: "menu-card",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.navigateTo("account"))
        }, [
          vue.createElementVNode("view", { class: "menu-header" }, [
            vue.createVNode(_component_uni_icons, {
              type: "person",
              size: "24",
              color: "#2c3e50"
            }),
            vue.createElementVNode("text", { class: "menu-title" }, "账号管理")
          ]),
          vue.createElementVNode("view", { class: "menu-items" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.accountItems, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "menu-item",
                  key: index
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    size: "20",
                    color: item.color
                  }, null, 8, ["type", "color"]),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.label),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "18",
                    color: "#ccc"
                  })
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createCommentVNode(" 课程表 "),
        vue.createElementVNode("view", { class: "menu-card" }, [
          vue.createElementVNode("view", { class: "menu-header" }, [
            vue.createVNode(_component_uni_icons, {
              type: "calendar",
              size: "24",
              color: "#e74c3c"
            }),
            vue.createElementVNode("text", { class: "menu-title" }, "我的课程表"),
            !$data.isScheduleEdit ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              type: "edit",
              size: "20",
              color: "#3498db",
              onClick: $options.toggleScheduleEdit
            }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 1,
              type: "checkmark",
              size: "20",
              color: "#27ae60",
              onClick: $options.saveScheduleEdit
            }, null, 8, ["onClick"]))
          ]),
          vue.createElementVNode("view", { class: "day-tabs" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.daysOfWeek, (day, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass({ "active": $data.currentDayIndex === index }),
                  onClick: ($event) => $options.changeDay(index)
                }, vue.toDisplayString(day), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", {
            class: "schedule",
            style: { "overflow-y": "auto", "max-height": "300px" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.weeklyCourses[$data.currentDayIndex], (course, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "course-item",
                  key: index,
                  onClick: ($event) => $options.editCourse(index)
                }, [
                  $data.isCourseEdit[index] ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.tempWeeklyCourses[$data.currentDayIndex][index].time = $event,
                      type: "text",
                      placeholder: "时间",
                      class: "time"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vue.vModelText, $data.tempWeeklyCourses[$data.currentDayIndex][index].time]
                    ]),
                    vue.withDirectives(vue.createElementVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.tempWeeklyCourses[$data.currentDayIndex][index].name = $event,
                      type: "text",
                      placeholder: "课程名称",
                      class: "name"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vue.vModelText, $data.tempWeeklyCourses[$data.currentDayIndex][index].name]
                    ]),
                    vue.withDirectives(vue.createElementVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.tempWeeklyCourses[$data.currentDayIndex][index].location = $event,
                      type: "text",
                      placeholder: "地点",
                      class: "location"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vue.vModelText, $data.tempWeeklyCourses[$data.currentDayIndex][index].location]
                    ])
                  ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                    vue.createElementVNode(
                      "text",
                      { class: "time" },
                      vue.toDisplayString(course.time),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "name" },
                      vue.toDisplayString(course.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "location" },
                      vue.toDisplayString(course.location),
                      1
                      /* TEXT */
                    )
                  ]))
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createCommentVNode(" 设置 "),
        vue.createElementVNode("view", {
          class: "menu-card",
          onClick: _cache[3] || (_cache[3] = ($event) => $options.navigateTo("settings"))
        }, [
          vue.createElementVNode("view", { class: "menu-header" }, [
            vue.createVNode(_component_uni_icons, {
              type: "gear",
              size: "24",
              color: "#3498db"
            }),
            vue.createElementVNode("text", { class: "menu-title" }, "系统设置")
          ]),
          vue.createElementVNode("view", { class: "menu-items" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.settingItems, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "menu-item",
                  key: index
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    size: "20",
                    color: item.color
                  }, null, 8, ["type", "color"]),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.label),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "18",
                    color: "#ccc"
                  })
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ])
    ]);
  }
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/user/user.vue"]]);
  const _imports_0 = "/static/images/weixin20250410211450.jpg";
  const _sfc_main$8 = {
    __name: "community",
    setup(__props, { expose: __expose }) {
      __expose();
      const currentTab = vue.ref("fengrunCampus");
      const changeTab = (tab) => {
        currentTab.value = tab;
      };
      const __returned__ = { currentTab, changeTab, ref: vue.ref, get fengrunPosts() {
        return fengrunPosts;
      }, get lunanPosts() {
        return lunanPosts;
      }, get lostAndFoundPosts() {
        return lostAndFoundPosts;
      }, get secondHandMarketPosts() {
        return secondHandMarketPosts;
      }, get recruitmentPosts() {
        return recruitmentPosts;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "homeLayout" }, [
      vue.createCommentVNode(" 头部框 "),
      vue.createCommentVNode(" <commonTitle></commonTitle> "),
      vue.createCommentVNode(" 分类栏 "),
      vue.createElementVNode("view", { class: "class" }),
      vue.createCommentVNode(" 图片滚动栏 "),
      vue.createElementVNode("view", { class: "banner" }, [
        vue.createElementVNode("swiper", {
          circular: "",
          "indicator-dots": "",
          "indicator-color": "rgba(255,255,255,0.5)",
          "indicator-active-color": "#fff",
          autoplay: ""
        }, [
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("image", {
              src: _imports_0,
              mode: "aspectFill"
            })
          ])
        ])
      ]),
      vue.createCommentVNode(" 公告栏 "),
      vue.createElementVNode("view", { class: "notice" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createVNode(_component_uni_icons, {
            type: "sound-filled",
            size: "20",
            color: "#28b389"
          }),
          vue.createElementVNode("text", { class: "text" }, "公告")
        ]),
        vue.createElementVNode("view", { class: "center" }, [
          vue.createElementVNode("swiper", {
            vertical: "",
            autoplay: "",
            interval: "1500",
            duration: "300",
            circular: ""
          }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(4, (item) => {
                return vue.createElementVNode("swiper-item", null, "遵守社区规则");
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createVNode(_component_uni_icons, {
            type: "right",
            size: "16",
            color: "#333"
          })
        ])
      ]),
      vue.createCommentVNode(" 分栏 "),
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["n2", { active: $setup.currentTab === "fengrunCampus" }]),
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.changeTab("fengrunCampus"))
          },
          "丰润校区",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["n3", { active: $setup.currentTab === "lunanCampus" }]),
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.changeTab("lunanCampus"))
          },
          "路南校区",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["n4", { active: $setup.currentTab === "lostAndFound" }]),
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.changeTab("lostAndFound"))
          },
          "失物认领",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["n5", { active: $setup.currentTab === "secondHandMarket" }]),
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.changeTab("secondHandMarket"))
          },
          "二手集市",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["n1", { active: $setup.currentTab === "recruitment" }]),
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.changeTab("recruitment"))
          },
          "招人",
          2
          /* CLASS */
        )
      ]),
      vue.createCommentVNode(" 主体，根据当前选中的 tab 展示不同内容 "),
      vue.createElementVNode("view", { class: "centerify" }, [
        $setup.currentTab === "fengrunCampus" ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.fengrunPosts, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "book"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "titley" },
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "date" },
                  vue.toDisplayString(item.date),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : vue.createCommentVNode("v-if", true),
        $setup.currentTab === "lunanCampus" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.lunanPosts, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "book"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "titley" },
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "date" },
                  vue.toDisplayString(item.date),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : vue.createCommentVNode("v-if", true),
        $setup.currentTab === "lostAndFound" ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.lostAndFoundPosts, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "book"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "titley" },
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "date" },
                  vue.toDisplayString(item.date),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : vue.createCommentVNode("v-if", true),
        $setup.currentTab === "secondHandMarket" ? (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.secondHandMarketPosts, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "book"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "titley" },
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "date" },
                  vue.toDisplayString(item.date),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : vue.createCommentVNode("v-if", true),
        $setup.currentTab === "recruitment" ? (vue.openBlock(), vue.createElementBlock("view", { key: 4 }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.recruitmentPosts, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "book"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "titley" },
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "date" },
                  vue.toDisplayString(item.date),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createCommentVNode(" 发布按钮 "),
      vue.createElementVNode("view", { class: "plus-button" }, [
        vue.createElementVNode("navigator", { url: "/pages/send/send" }, "+")
      ])
    ]);
  }
  const PagesCommunityCommunity = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-a6ef5318"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/community/community.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        categories: [
          { name: "行测资料" },
          { name: "申论资料" },
          { name: "面试技巧" },
          { name: "时政热点" }
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
          url: `/pages/category-detail/category-detail?category=${encodeURIComponent(categoryName)}`
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 预留状态栏区域 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createCommentVNode(" 导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("text", null, "<")
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "考公资料站")
      ]),
      vue.createCommentVNode(" 资料分类列表 "),
      vue.createElementVNode("view", { class: "category-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.categories, (category, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "category-item",
              key: index,
              onClick: ($event) => $options.goToCategoryPage(category.name)
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(category.name),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesN1N1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-9a254acf"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/n1/n1.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        categories: [
          { name: "公共课资料" },
          { name: "专业课资料" },
          { name: "复试技巧" },
          { name: "考研资讯" }
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 预留状态栏区域 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createCommentVNode(" 导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("text", null, "<")
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "考研资料站")
      ]),
      vue.createCommentVNode(" 资料分类列表 "),
      vue.createElementVNode("view", { class: "category-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.categories, (category, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "category-item",
              key: index,
              onClick: ($event) => $options.goToCategoryPage(category.name)
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(category.name),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesN2N2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-9e26401d"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/n2/n2.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        competitions: [
          {
            title: "挑战杯全国大学生课外学术科技作品竞赛",
            intro: "“挑战杯”是一项具有导向性、示范性和群众性的全国竞赛活动，被誉为中国大学生科技创新创业的“奥林匹克”盛会。竞赛分为自然科学类学术论文、哲学社会科学类社会调查报告和学术论文、科技发明制作三大类。",
            details: "参赛对象为在校全日制本专科生、硕士研究生和博士研究生（不含在职研究生）。竞赛每两年举办一届，设特等奖、一等奖、二等奖、三等奖，对优秀组织单位颁发“挑战杯”，对获得三等奖以上的学生及其指导教师颁发证书。"
          },
          {
            title: "中国国际大学生创新创业博览会",
            intro: "聚焦“五育”并举融通创新，促进教育链、人才链与产业链、创新链有机衔接。展示各高校创新创业教育改革成果、大学生创新创业项目和学校服务国家战略需求取得的重大成果。",
            details: "展会设置了综合展区、高校展区、企业展区等，有项目路演、高端论坛、成果发布等活动。众多高校和企业参与，为大学生提供了展示创新成果、交流合作的平台。"
          },
          {
            title: "全国大学生数学建模竞赛",
            intro: "全国大学生数学建模竞赛是全国高校规模最大的基础性学科竞赛，也是世界上规模最大的数学建模竞赛。竞赛题目一般来源于工程技术和管理科学等方面经过适当简化加工的实际问题。",
            details: "竞赛以三人一组为单位进行，在三天时间内完成建模、求解、编程、论文写作等工作。竞赛设一、二等奖和成功参赛奖，获奖者在保研、考研、就业等方面有一定优势。"
          }
        ]
      };
    },
    methods: {
      viewDetails(competition) {
        uni.showModal({
          title: competition.title + " 详情",
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 预留状态栏区域 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createCommentVNode(" 导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("text", null, "<")
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "大学生高含金量比赛资讯")
      ]),
      vue.createElementVNode("view", { class: "competition-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.competitions, (competition, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "competition-item",
              key: index
            }, [
              vue.createElementVNode(
                "view",
                { class: "competition-title" },
                vue.toDisplayString(competition.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "competition-intro" },
                vue.toDisplayString(competition.intro),
                1
                /* TEXT */
              ),
              vue.createElementVNode("button", {
                class: "detail-button",
                onClick: ($event) => $options.viewDetails(competition)
              }, "了解更多", 8, ["onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesN3N3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-3016e82d"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/n3/n3.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        certifications: [
          {
            title: "注册会计师（CPA）",
            intro: "注册会计师是指通过注册会计师执业资格考试并取得注册会计师证书在会计师事务所执业的人员。",
            details: "考试科目包括会计、审计、财务成本管理、经济法、税法、公司战略与风险管理。具有高等专科以上学校毕业学历，或者具有会计或者相关专业中级以上技术职称的人员可以报名参加考试。"
          },
          {
            title: "教师资格证",
            intro: "教师资格证是教育行业从业教师的许可证。",
            details: "分为幼儿园、小学、中学等不同学段的教师资格证。考试内容一般包括综合素质、教育知识与能力等科目，部分学段还需考查学科知识与教学能力。非师范类学生也可以报考。"
          },
          {
            title: "法律职业资格证书",
            intro: "担任法官、检察官、律师、公证员、法律顾问、仲裁员（法律类）及政府部门中从事行政处罚决定审核、行政复议、行政裁决的人员必须通过法律职业资格考试。",
            details: "考试分为客观题和主观题两部分。客观题考试通过后才能参加主观题考试。报名条件一般要求具有全日制普通高等学校法学类本科学历并获得学士及以上学位等。"
          }
        ]
      };
    },
    methods: {
      viewDetails(certification) {
        uni.showModal({
          title: certification.title + " 详情",
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 预留状态栏区域 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createCommentVNode(" 导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("text", null, "<")
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "考证资讯")
      ]),
      vue.createElementVNode("view", { class: "certification-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.certifications, (certification, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "certification-item",
              key: index
            }, [
              vue.createElementVNode(
                "view",
                { class: "certification-title" },
                vue.toDisplayString(certification.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "certification-intro" },
                vue.toDisplayString(certification.intro),
                1
                /* TEXT */
              ),
              vue.createElementVNode("button", {
                class: "detail-button",
                onClick: ($event) => $options.viewDetails(certification)
              }, "了解更多", 8, ["onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesN4N4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-c9909846"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/n4/n4.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 发布 ");
  }
  const PagesSendSend = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/send/send.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        category: "",
        contentByCategory
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-container" }, [
      vue.createCommentVNode(" 预留状态栏区域 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("text", null, "<")
        ]),
        vue.createElementVNode(
          "text",
          { class: "nav-title" },
          vue.toDisplayString($data.category),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        $data.category === "行测资料" ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
          vue.createElementVNode("text", null, "近期行测资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.contentByCategory["行测资料"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.category === "申论资料" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
          vue.createElementVNode("text", null, "近期申论资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.contentByCategory["申论资料"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.category === "面试技巧" ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
          vue.createElementVNode("text", null, "近期面试技巧资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.contentByCategory["面试技巧"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.category === "时政热点" ? (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
          vue.createElementVNode("text", null, "近期时政热点资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.contentByCategory["时政热点"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesCategoryDetailCategoryDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-cadc03b8"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/category-detail/category-detail.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        category: "",
        categoryContents
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-container" }, [
      vue.createCommentVNode(" 预留状态栏区域 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("text", null, "<")
        ]),
        vue.createElementVNode(
          "text",
          { class: "nav-title" },
          vue.toDisplayString($data.category),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        $data.category === "公共课资料" ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
          vue.createElementVNode("text", null, "近期公共课资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.categoryContents["公共课资料"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.category === "专业课资料" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
          vue.createElementVNode("text", null, "近期专业课资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.categoryContents["专业课资料"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.category === "复试技巧" ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
          vue.createElementVNode("text", null, "近期复试技巧资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.categoryContents["复试技巧"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.category === "考研资讯" ? (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
          vue.createElementVNode("text", null, "近期考研资讯资料："),
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.categoryContents["考研资讯"], (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  { key: index },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesPostgraduateDetailPostgraduateDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-7aa04925"], ["__file", "C:/Users/Lenovo/Desktop/demo1/pages/postgraduate-detail/postgraduate-detail.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/community/community", PagesCommunityCommunity);
  __definePage("pages/n1/n1", PagesN1N1);
  __definePage("pages/n2/n2", PagesN2N2);
  __definePage("pages/n3/n3", PagesN3N3);
  __definePage("pages/n4/n4", PagesN4N4);
  __definePage("pages/send/send", PagesSendSend);
  __definePage("pages/category-detail/category-detail", PagesCategoryDetailCategoryDetail);
  __definePage("pages/postgraduate-detail/postgraduate-detail", PagesPostgraduateDetailPostgraduateDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/Lenovo/Desktop/demo1/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
