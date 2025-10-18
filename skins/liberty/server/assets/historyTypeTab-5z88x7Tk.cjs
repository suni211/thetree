"use strict";
const linkTab = require("./linkTab-DjDJQVUI.cjs");
const server = require("../server.cjs");
const _sfc_main = {
  components: {
    LinkTab: linkTab.LinkTab
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LinkTab = server.vueExports.resolveComponent("LinkTab");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LinkTab, server.vueExports.mergeProps({
    class: "link-tab",
    items: [
      {
        title: "전체",
        href: "?logtype=all",
        active: !_ctx.$route.query.logtype || _ctx.$route.query.logtype === "all"
      },
      {
        title: "새 문서",
        href: "?logtype=create",
        active: _ctx.$route.query.logtype === "create"
      },
      {
        title: "삭제",
        href: "?logtype=delete",
        active: _ctx.$route.query.logtype === "delete"
      },
      {
        title: "이동",
        href: "?logtype=move",
        active: _ctx.$route.query.logtype === "move"
      },
      {
        title: "되돌림",
        href: "?logtype=revert",
        active: _ctx.$route.query.logtype === "revert"
      }
    ]
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/historyTypeTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HistoryTypeTab = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.HistoryTypeTab = HistoryTypeTab;
