"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const linkTab = require("./linkTab-DjDJQVUI.cjs");
const diffCount = require("./diffCount-CcPCubZa.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    LinkTab: linkTab.LinkTab,
    NuxtLink: server.NuxtLink,
    DiffCount: diffCount.DiffCount,
    GeneralButton: server.GeneralButton,
    AuthorSpan: authorSpan.AuthorSpan,
    LocalDate: server.LocalDate
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LinkTab = server.vueExports.resolveComponent("LinkTab");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_DiffCount = server.vueExports.resolveComponent("DiffCount");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LinkTab, {
    class: "link-tab",
    items: [
      {
        title: "열린 토론",
        href: "?logtype=normal_thread",
        active: !_ctx.$route.query.logtype || _ctx.$route.query.logtype === "normal_thread"
      },
      {
        title: "오래된 토론",
        href: "?logtype=old_thread",
        active: _ctx.$route.query.logtype === "old_thread"
      },
      {
        title: "중지된 토론",
        href: "?logtype=pause_thread",
        active: _ctx.$route.query.logtype === "pause_thread"
      },
      {
        title: "닫힌 토론",
        href: "?logtype=closed_thread",
        active: _ctx.$route.query.logtype === "closed_thread"
      },
      {
        title: "열린 편집 요청",
        href: "?logtype=open_editrequest",
        active: _ctx.$route.query.logtype === "open_editrequest"
      },
      {
        title: "승인된 편집 요청",
        href: "?logtype=accepted_editrequest",
        active: _ctx.$route.query.logtype === "accepted_editrequest"
      },
      {
        title: "닫힌 편집 요청",
        href: "?logtype=closed_editrequest",
        active: _ctx.$route.query.logtype === "closed_editrequest"
      },
      {
        title: "오래된 편집 요청",
        href: "?logtype=old_editrequest",
        active: _ctx.$route.query.logtype === "old_editrequest"
      }
    ]
  }, null, _parent));
  _push(`<div class="list-table" data-v-c0822bc5><div class="table-row table-heading" data-v-c0822bc5><div class="table-item" data-v-c0822bc5>제목</div><div class="table-item" data-v-c0822bc5>수정자</div><div class="table-item" data-v-c0822bc5>시간</div></div><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList([..._ctx.data.threads, ..._ctx.data.editRequests], (item) => {
    _push(`<div class="table-row" data-v-c0822bc5><div class="table-item" data-v-c0822bc5>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: (item.topic ? "/thread/" : "/edit_request/") + item.url
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.topic || `편집 요청 ${item.url}`)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.topic || `편집 요청 ${item.url}`), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    if (item.diffLength != null) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DiffCount, {
        class: "diff-count",
        count: item.diffLength
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="document-group" data-v-c0822bc5><span class="document-icon" data-v-c0822bc5>`);
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
    _push(`</span></div><div class="table-item" data-v-c0822bc5>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: item.lastUpdateUser || item.createdUser,
      pos: (item.lastUpdateUser ? "토론" : "편집 요청") + " " + item.url
    }, null, _parent));
    _push(`</div><div class="table-item" data-v-c0822bc5>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: item.lastUpdatedAt,
      relative: ""
    }, null, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/recentDiscuss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recentDiscuss = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c0822bc5"]]);
exports.default = recentDiscuss;
