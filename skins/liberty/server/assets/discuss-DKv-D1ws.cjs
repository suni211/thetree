"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const contributionTab = require("./contributionTab-Db7odAq0.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
require("node:stream");
require("node:path");
require("./linkTab-DjDJQVUI.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    LocalDate: server.LocalDate,
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    ContributionTab: contributionTab.ContributionTab
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContributionTab = server.vueExports.resolveComponent("ContributionTab");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ContributionTab, null, null, _parent));
  _push(`<div data-v-a2f7f2e2>전체 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.total)}회</div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-bottom": "1rem" })}" data-v-a2f7f2e2>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`</div><div class="list-table" data-v-a2f7f2e2><div class="table-row table-heading" data-v-a2f7f2e2><div class="table-item" data-v-a2f7f2e2>제목</div><div class="table-item" data-v-a2f7f2e2>시간</div></div>`);
  if (_ctx.data.items.length) {
    _push(`<!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.items, (item) => {
      _push(`<div class="table-row" data-v-a2f7f2e2><div class="table-item" data-v-a2f7f2e2>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: `/thread/${item.thread.url}#${item.id}`
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`#${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.id)} ${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.thread.topic)}`);
          } else {
            return [
              server.vueExports.createTextVNode("#" + server.vueExports.toDisplayString(item.id) + " " + server.vueExports.toDisplayString(item.thread.topic), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<span class="document-group" data-v-a2f7f2e2><span class="document-icon" data-v-a2f7f2e2>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" }, null, _parent));
      _push(`</span>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.doc_action_link(item.thread.document.parsedName, "discuss"),
        class: "document-link"
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item.thread.document.parsedName))}`);
          } else {
            return [
              server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item.thread.document.parsedName)), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</span></div><div class="table-item" data-v-a2f7f2e2>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
        date: item.createdAt,
        relative: ""
      }, null, _parent));
      _push(`</div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<div class="table-row" data-v-a2f7f2e2><div class="table-item no-item" data-v-a2f7f2e2> (기여 내역이 없습니다.) </div></div>`);
  }
  _push(`</div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-top": "1rem" })}" data-v-a2f7f2e2>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/userContribution/discuss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discuss = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2f7f2e2"]]);
exports.default = discuss;
