"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const linkTab = require("./linkTab-DjDJQVUI.cjs");
const diffCount = require("./diffCount-CcPCubZa.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
const historyTypeTab = require("./historyTypeTab-5z88x7Tk.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    CheckBox: checkBox.CheckBox,
    HistoryTypeTab: historyTypeTab.HistoryTypeTab,
    LinkTab: linkTab.LinkTab,
    NuxtLink: server.NuxtLink,
    DiffCount: diffCount.DiffCount,
    GeneralButton: server.GeneralButton,
    AuthorSpan: authorSpan.AuthorSpan,
    LocalDate: server.LocalDate
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HistoryTypeTab = server.vueExports.resolveComponent("HistoryTypeTab");
  const _component_CheckBox = server.vueExports.resolveComponent("CheckBox");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_DiffCount = server.vueExports.resolveComponent("DiffCount");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HistoryTypeTab, null, null, _parent));
  if (_ctx.session.quick_block) {
    _push(`<!--[-->`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
      checked: _ctx.$route.query.userDoc === "1",
      whenChange: (e) => _ctx.$router.push({ query: { userDoc: e.target.checked ? "1" : void 0 } }),
      style: { "float": "right" }
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` 사용자 문서 보기 `);
        } else {
          return [
            server.vueExports.createTextVNode(" 사용자 문서 보기 ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "clear": "both" })}" data-v-c7039642></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="list-table" data-v-c7039642><div class="table-row table-heading" data-v-c7039642><div class="table-item" data-v-c7039642>문서</div><div class="table-item" data-v-c7039642>기능</div><div class="table-item" data-v-c7039642>수정자</div><div class="table-item" data-v-c7039642>수정 시간</div></div><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.revs, (rev) => {
    _push(`<div class="table-row" data-v-c7039642><div class="table-item" data-v-c7039642>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(rev.document.parsedName, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(rev.document.parsedName))}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(rev.document.parsedName)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DiffCount, {
      count: rev.diffLength,
      class: "history-diff-count"
    }, null, _parent));
    _push(`</div><div class="table-item table-buttons" data-v-c7039642><div class="table-buttons-wrap" data-v-c7039642>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      size: "small",
      href: _ctx.doc_action_link(rev.document.parsedName, "history")
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
      disabled: rev.rev === 1,
      href: _ctx.doc_action_link(rev.document.parsedName, "diff", { uuid: rev.uuid })
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
      href: _ctx.doc_action_link(rev.document.parsedName, "discuss")
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
    _push(`</div></div><div class="table-item" data-v-c7039642><span data-v-c7039642>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: rev.user
    }, null, _parent));
    if (rev.api) {
      _push(`<!--[-->(API)<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</span></div><div class="table-item" data-v-c7039642>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: rev.createdAt,
      relative: ""
    }, null, _parent));
    _push(`</div>`);
    if (rev.infoText || rev.log) {
      _push(`<div class="table-item history-log" data-v-c7039642>`);
      if (rev.log) {
        _push(`<span data-v-c7039642>${server.serverRenderer_cjs_prodExports.ssrInterpolate(rev.log)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (rev.infoText) {
        _push(`<i data-v-c7039642>${" (" + rev.infoText + ")"}</i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/recentChanges.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recentChanges = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c7039642"]]);
exports.default = recentChanges;
