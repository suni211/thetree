"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  let _temp0;
  _push(`<textarea${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_temp0 = server.vueExports.mergeProps({
    readonly: "",
    value: _ctx.data.content
  }, _attrs), "textarea")} data-v-0b889017>${server.serverRenderer_cjs_prodExports.ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/raw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const raw = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0b889017"]]);
exports.default = raw;
