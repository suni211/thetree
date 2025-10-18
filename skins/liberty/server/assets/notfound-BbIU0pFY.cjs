"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const diffCount = require("./diffCount-CcPCubZa.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    AuthorSpan: authorSpan.AuthorSpan,
    DiffCount: diffCount.DiffCount,
    LocalDate: server.LocalDate
  },
  computed: {
    newLink() {
      const document = this.data.document;
      if (document.namespace === "파일")
        return { path: "/Upload", query: { document: this.doc_fulltitle(document) } };
      else
        return this.doc_action_link(document, "edit");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_DiffCount = server.vueExports.resolveComponent("DiffCount");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  _push(`<!--[--><p data-v-0b52d41d>해당 문서를 찾을 수 없습니다.</p><p data-v-0b52d41d>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
    to: $options.newLink,
    rel: "nofollow"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`[새 문서 만들기]`);
      } else {
        return [
          server.vueExports.createTextVNode("[새 문서 만들기]")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p>`);
  if (_ctx.data.revs.length) {
    _push(`<!--[--><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-top": "40px", "margin-bottom": "15px" })}" data-v-0b52d41d></div><h3 data-v-0b52d41d>이 문서의 역사</h3><ul data-v-0b52d41d><!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.revs, (item) => {
      _push(`<li data-v-0b52d41d><span data-v-0b52d41d>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
        date: item.createdAt
      }, null, _parent));
      _push(`  </span><strong data-v-0b52d41d>r${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.rev)} </strong>`);
      if (item.infoText) {
        _push(`<i data-v-0b52d41d>${"(" + _ctx.removeHtmlTags(item.infoText) + ") "}</i>`);
      } else {
        _push(`<!---->`);
      }
      _push(` (`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DiffCount, {
        count: item.diffLength
      }, null, _parent));
      _push(`) `);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
        account: item.user,
        pos: `${_ctx.doc_fulltitle(_ctx.data.document)} r${item.rev}`
      }, null, _parent));
      _push(` (<span class="log" data-v-0b52d41d>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.log)}</span>) </li>`);
    });
    _push(`<!--]--></ul>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(_ctx.data.document, "history")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`[더보기]`);
        } else {
          return [
            server.vueExports.createTextVNode("[더보기]")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/notfound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notfound = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0b52d41d"]]);
exports.default = notfound;
