"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const namespaceSelector = require("./namespaceSelector-DMabf0nv.cjs");
require("node:stream");
require("node:path");
require("./seedForm-BUHQKrKB.cjs");
require("./selectMenu-DyMdl_Ge.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    NamespaceSelector: namespaceSelector.NamespaceSelector
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NamespaceSelector = server.vueExports.resolveComponent("NamespaceSelector");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NamespaceSelector, null, null, _parent));
  _push(`<ul data-v-79b2fbf1><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.docs, (item) => {
    _push(`<li data-v-79b2fbf1>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(item, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item))}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/randomPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const randomPage = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-79b2fbf1"]]);
exports.default = randomPage;
