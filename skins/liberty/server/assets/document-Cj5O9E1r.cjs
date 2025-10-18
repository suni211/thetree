"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const contributionTab = require("./contributionTab-Db7odAq0.cjs");
const historyTypeTab = require("./historyTypeTab-5z88x7Tk.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const diffCount = require("./diffCount-CcPCubZa.cjs");
require("node:stream");
require("node:path");
require("./linkTab-DjDJQVUI.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    LocalDate: server.LocalDate,
    GeneralButton: server.GeneralButton,
    DiffCount: diffCount.DiffCount,
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    HistoryTypeTab: historyTypeTab.HistoryTypeTab,
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
  const _component_HistoryTypeTab = server.vueExports.resolveComponent("HistoryTypeTab");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_DiffCount = server.vueExports.resolveComponent("DiffCount");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ContributionTab, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HistoryTypeTab, null, null, _parent));
  _push(`<div data-v-e01c0212>전체 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.total)}회</div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-bottom": "1rem" })}" data-v-e01c0212>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`</div><div class="list-table" data-v-e01c0212><div class="table-row table-heading" data-v-e01c0212><div class="table-item" data-v-e01c0212>문서</div><div class="table-item" data-v-e01c0212>기능</div><div class="table-item" data-v-e01c0212>수정 시간</div></div>`);
  if (_ctx.data.revs.length) {
    _push(`<!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.revs, (item) => {
      _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ troll: item.troll }, "table-row"])}" data-v-e01c0212><div class="table-item" data-v-e01c0212>`);
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
      _push(`<span class="history-rev" data-v-e01c0212>(`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        class: "history-rev-link",
        to: _ctx.doc_action_link(item.document.parsedName, "w", { uuid: item.uuid })
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`r${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.rev)}`);
          } else {
            return [
              server.vueExports.createTextVNode("r" + server.vueExports.toDisplayString(item.rev), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`)</span>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DiffCount, {
        class: "history-diff-count",
        count: item.diffLength
      }, null, _parent));
      _push(`</div><div class="table-item table-buttons" data-v-e01c0212><div class="table-buttons-wrap" data-v-e01c0212>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
        size: "small",
        href: _ctx.doc_action_link(item.document.parsedName, "history")
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`역사`);
          } else {
            return [
              server.vueExports.createTextVNode("역사")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
        size: "small",
        disabled: item.rev === 1,
        href: _ctx.doc_action_link(item.document.parsedName, "diff", { uuid: item.uuid })
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`비교`);
          } else {
            return [
              server.vueExports.createTextVNode("비교")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
        size: "small",
        href: _ctx.doc_action_link(item.document.parsedName, "discuss")
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`토론`);
          } else {
            return [
              server.vueExports.createTextVNode("토론")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div><div class="table-item" data-v-e01c0212>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
        date: item.createdAt,
        relative: ""
      }, null, _parent));
      _push(`</div>`);
      if (item.infoText || item.log) {
        _push(`<div class="table-item history-log" data-v-e01c0212>`);
        if (item.log) {
          _push(`<span data-v-e01c0212>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.log)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (item.infoText) {
          _push(`<i data-v-e01c0212>${" (" + item.infoText + ")"}</i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<div class="table-row" data-v-e01c0212><div class="table-item no-item" data-v-e01c0212> (기여 내역이 없습니다.) </div></div>`);
  }
  _push(`</div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-top": "1rem" })}" data-v-e01c0212>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/userContribution/document.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const document = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e01c0212"]]);
exports.default = document;
