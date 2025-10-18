"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    NuxtLink: server.NuxtLink
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  _push(`<ul${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-5ef262f3><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.editRequests, (item) => {
    _push(`<li data-v-5ef262f3>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: "/edit_request/" + item.url
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`편집 요청 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.url)}`);
        } else {
          return [
            server.vueExports.createTextVNode("편집 요청 " + server.vueExports.toDisplayString(item.url), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/closedEditRequest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const closedEditRequest = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5ef262f3"]]);
exports.default = closedEditRequest;
