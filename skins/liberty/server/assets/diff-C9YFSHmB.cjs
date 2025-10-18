"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const diff$1 = require("./diff-qWW-7YFT.cjs");
const server = require("../server.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    Diff: diff$1.Diff
  },
  data() {
    return this.$store.state.viewData;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Diff = server.vueExports.resolveComponent("Diff", true);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Diff, server.vueExports.mergeProps({
    title: `r${_ctx.oldRev} vs r${_ctx.rev}`,
    diffHtml: _ctx.diff.diffHtml
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/diff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const diff = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.default = diff;
