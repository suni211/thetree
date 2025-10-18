"use strict";
const server = require("../server.cjs");
const linkTab = require("./linkTab-DjDJQVUI.cjs");
const _sfc_main = {
  mixins: [server.Common],
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
        title: "문서",
        href: _ctx.contribution_link(_ctx.data.account.uuid),
        active: _ctx.data.contributionType === "document"
      },
      {
        title: "토론",
        href: _ctx.contribution_link_discuss(_ctx.data.account.uuid),
        active: _ctx.data.contributionType === "discuss"
      },
      {
        title: "편집 요청",
        href: _ctx.contribution_link_edit_request(_ctx.data.account.uuid),
        active: _ctx.data.contributionType === "edit_request"
      },
      {
        title: "승인한 편집 요청",
        href: _ctx.contribution_link_accepted_edit_request(_ctx.data.account.uuid),
        active: _ctx.data.contributionType === "accepted_edit_request"
      }
    ]
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contributionTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContributionTab = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.ContributionTab = ContributionTab;
