"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const server = require("../server.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    LocalDate: server.LocalDate,
    PrevNextBtn: prevNextBtn.PrevNextBtn
  },
  computed: {
    pageProps() {
      const prevItem = this.data.prevItem;
      const nextItem = this.data.nextItem;
      return {
        prev: prevItem ? { query: { until: prevItem._id } } : null,
        next: nextItem ? { query: { from: nextItem._id } } : null
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[--><p data-v-c908b1dc>마지막 로그인 UA : ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.userAgent)}</p><p data-v-c908b1dc>이메일 : ${server.serverRenderer_cjs_prodExports.ssrInterpolate((_a = _ctx.data.targetUser) == null ? void 0 : _a.email)}</p>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`<div data-v-c908b1dc><table data-v-c908b1dc><thead data-v-c908b1dc><tr data-v-c908b1dc><th data-v-c908b1dc>DATE</th><th data-v-c908b1dc>TYPE</th><th data-v-c908b1dc>IP</th><th data-v-c908b1dc>DEVICE</th><th data-v-c908b1dc>UA</th></tr></thead><tbody data-v-c908b1dc><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.logs, (item) => {
    _push(`<tr data-v-c908b1dc><td data-v-c908b1dc>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: item.createdAt
    }, null, _parent));
    _push(`</td><td data-v-c908b1dc>${server.serverRenderer_cjs_prodExports.ssrInterpolate(["Login", "IPChange"][item.type] ?? item.type)}</td><td data-v-c908b1dc>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.ip)}</td><td data-v-c908b1dc>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.device)}</td><td data-v-c908b1dc>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.userAgent)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, $options.pageProps, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/login_history_result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login_history_result = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c908b1dc"]]);
exports.default = login_history_result;
