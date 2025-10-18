"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const namespaceSelector = require("./namespaceSelector-DMabf0nv.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
require("node:stream");
require("node:path");
require("./seedForm-BUHQKrKB.cjs");
require("./selectMenu-DyMdl_Ge.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    NamespaceSelector: namespaceSelector.NamespaceSelector
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NamespaceSelector = server.vueExports.resolveComponent("NamespaceSelector");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NamespaceSelector, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`<ul data-v-b3ede92d><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.items, (item) => {
    _push(`<li data-v-b3ede92d>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(item.parsedName, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item.parsedName))}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item.parsedName)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/docList/UncategorizedPages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UncategorizedPages = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b3ede92d"]]);
exports.default = UncategorizedPages;
