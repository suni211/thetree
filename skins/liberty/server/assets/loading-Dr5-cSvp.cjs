"use strict";
const server = require("../server.cjs");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({ class: "loading-block" }, _attrs))} data-v-a9d213ac><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(12, (i) => {
    _push(`<div data-v-a9d213ac></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a9d213ac"]]);
exports.Loading = Loading;
