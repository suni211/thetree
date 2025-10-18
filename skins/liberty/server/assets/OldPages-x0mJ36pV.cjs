"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    LocalDate: server.LocalDate,
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[--><p data-v-779e97d7>편집된 지 오래된 문서의 목록입니다. (리다이렉트 제외)</p>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`<ul data-v-779e97d7><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.items, (item) => {
    _push(`<li data-v-779e97d7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(item.document.parsedName, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item.document.parsedName))}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item.document.parsedName)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(` (수정 시각: `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: item.createdAt
    }, null, _parent));
    _push(`) </li>`);
  });
  _push(`<!--]--></ul>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/docList/OldPages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OldPages = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-779e97d7"]]);
exports.default = OldPages;
