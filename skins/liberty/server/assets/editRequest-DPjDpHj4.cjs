"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const contributionTab = require("./contributionTab-Db7odAq0.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const diffCount = require("./diffCount-CcPCubZa.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
require("node:stream");
require("node:path");
require("./linkTab-DjDJQVUI.cjs");
const table = "_table_k0aa5_1";
const row = "_row_k0aa5_1";
const column = "_column_k0aa5_1";
const style0 = {
  table,
  "table--bordered": "_table--bordered_k0aa5_1",
  row,
  "row--head": "_row--head_k0aa5_1",
  column,
  "column--stack": "_column--stack_k0aa5_1",
  "column--button-parent": "_column--button-parent_k0aa5_1",
  "column--single": "_column--single_k0aa5_1",
  "column--full": "_column--full_k0aa5_1"
};
const _sfc_main = {
  mixins: [server.Common],
  components: {
    AuthorSpan: authorSpan.AuthorSpan,
    LocalDate: server.LocalDate,
    DiffCount: diffCount.DiffCount,
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    ContributionTab: contributionTab.ContributionTab
  },
  computed: {
    pageProps() {
      const prevItem = this.data.prevItem;
      const nextItem = this.data.nextItem;
      return {
        prev: prevItem ? { query: { until: prevItem.uuid } } : null,
        next: nextItem ? { query: { from: nextItem.uuid } } : null
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContributionTab = server.vueExports.resolveComponent("ContributionTab");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_DiffCount = server.vueExports.resolveComponent("DiffCount");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ContributionTab, null, null, _parent));
  _push(`<div data-v-1fa639fa>전체 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.total)}회</div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-bottom": "1rem" })}" data-v-1fa639fa>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.table)}" data-v-1fa639fa><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, _ctx.$style["row--head"], "table-row"])}" data-v-1fa639fa><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-1fa639fa>편집 요청</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-1fa639fa>상태</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-1fa639fa>시간</div></div>`);
  if (_ctx.data.items.length) {
    _push(`<!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.items, (item) => {
      _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, "table-row"])}" data-v-1fa639fa><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-1fa639fa>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: "/edit_request/" + item.url
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`편집요청 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.url)}`);
          } else {
            return [
              server.vueExports.createTextVNode("편집요청 " + server.vueExports.toDisplayString(item.url), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DiffCount, {
        class: "diff-count",
        count: item.diffLength
      }, null, _parent));
      _push(`<span class="document-group" data-v-1fa639fa><span class="document-icon" data-v-1fa639fa>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" }, null, _parent));
      _push(`</span>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.doc_action_link(item.document.parsedName, "discuss"),
        class: "document-link"
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
      _push(`</span></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-1fa639fa>${server.serverRenderer_cjs_prodExports.ssrInterpolate(["OPEN", "ACCEPTED", "CLOSED", "LOCKED"][item.status])}</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-1fa639fa>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
        date: item.lastUpdatedAt,
        relative: ""
      }, null, _parent));
      _push(`</div>`);
      if (item.createdUser) {
        _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, _ctx.$style["column--full"], "table-column", "author-text"])}" data-v-1fa639fa> (사용자 `);
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
          account: item.createdUser
        }, null, _parent));
        _push(`의 편집 요청) </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, "table-row"])}" data-v-1fa639fa><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, _ctx.$style["column--single"], "table-column"])}" data-v-1fa639fa> (기여 내역이 없습니다.) </div></div>`);
  }
  _push(`</div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-top": "1rem" })}" data-v-1fa639fa>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`</div><!--]-->`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/userContribution/editRequest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editRequest = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-1fa639fa"]]);
exports.default = editRequest;
