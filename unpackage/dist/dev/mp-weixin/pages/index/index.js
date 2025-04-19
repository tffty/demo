"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_custom_tnav_bar2 = common_vendor.resolveComponent("custom-tnav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_custom_tnav_bar2 + _easycom_uni_icons2)();
}
const _easycom_custom_tnav_bar = () => "../../components/custom-tnav-bar/custom-tnav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_custom_tnav_bar + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_assets._imports_3,
    e: common_vendor.p({
      type: "sound-filled",
      size: "20",
      color: "#28b389"
    }),
    f: common_vendor.f(4, (item, k0, i0) => {
      return {};
    }),
    g: common_vendor.p({
      type: "right",
      size: "16",
      color: "#333"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
