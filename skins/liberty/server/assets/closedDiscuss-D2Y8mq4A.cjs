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
  _push(`<ul${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-a725ec2e><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.threads, (item, index) => {
    _push(`<li data-v-a725ec2e>${server.serverRenderer_cjs_prodExports.ssrInterpolate(index + 1)}. `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: "/thread/" + item.url
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.topic)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.topic), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/closedDiscuss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const closedDiscuss = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a725ec2e"]]);
exports.default = closedDiscuss;
