"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_commonTitle2 = common_vendor.resolveComponent("commonTitle");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_commonTitle2 + _easycom_uni_icons2)();
}
const _easycom_commonTitle = () => "../../components/commonTitle/commonTitle.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_commonTitle + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "community",
  setup(__props) {
    const posts = [
      "求问有没有社团招新的,想加个社团",
      "谁家轻食好吃啊求推荐#轻食减脂餐",
      "低卡轻食~好吃不贵,轻院学子订餐可送至宿舍楼下",
      "丰润日常秘制凉拌菜,每天新鲜现做,坚决不用隔夜菜",
      "丰润日常出两个mini40的壳子15元可小刀",
      "丰润日常想问下各位考研进度都到哪里了",
      "丰润日常晚上哪个教学楼可以自习呀",
      "丰润日常收一副羽毛球拍",
      "丰润日常有没有人明天下午拼车去路南万达",
      "丰润日常今麦郎火鸡面买多了有木有要的",
      "丰润日常丰润校门外招配送员,管饭,每天5点,按单结算",
      "表白捞人寻物刚刚在东食堂西门口捡到一条数据线失主可以联系我",
      "丰润日常可代取快递",
      "路南日常路南有图书馆吗"
    ];
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          type: "sound-filled",
          size: "20",
          color: "#28b389"
        }),
        c: common_vendor.f(4, (item, k0, i0) => {
          return {};
        }),
        d: common_vendor.p({
          type: "right",
          size: "16",
          color: "#333"
        }),
        e: common_vendor.f(posts, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a6ef5318"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/community/community.js.map
