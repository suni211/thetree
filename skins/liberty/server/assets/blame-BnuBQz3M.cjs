"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    AuthorSpan: authorSpan.AuthorSpan
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  _push(`<table${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-28dfb777><thead data-v-28dfb777><tr data-v-28dfb777><th data-v-28dfb777></th><th data-v-28dfb777></th><th class="texttitle" data-v-28dfb777>r${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.rev)}</th></tr></thead><tbody data-v-28dfb777><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.blameLines, (item, index) => {
    _push(`<tr data-v-28dfb777>`);
    if (item.diff) {
      _push(`<th${server.serverRenderer_cjs_prodExports.ssrRenderAttr("rowspan", item.diff.count)} style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "background-color": item.diff.user.color })}" data-v-28dfb777>`);
      if (item.diff.history.rev !== 1) {
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.doc_action_link(_ctx.data.document, "diff", { uuid: item.diff.uuid })
        }, {
          default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` r${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.diff.history.rev)}`);
            } else {
              return [
                server.vueExports.createTextVNode(" r" + server.vueExports.toDisplayString(item.diff.history.rev), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!--[-->r${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.diff.history.rev)}<!--]-->`);
      }
      _push(`<br data-v-28dfb777>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
        account: item.diff.user
      }, null, _parent));
      if (item.diff.history.infoText) {
        _push(`<!--[--><br data-v-28dfb777><i data-v-28dfb777>`);
        if (item.diff.history.type === 5) {
          _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: _ctx.doc_action_link(_ctx.data.document, "blame", { uuid: item.diff.uuid })
          }, {
            default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` (${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.diff.history.infoText)}) `);
              } else {
                return [
                  server.vueExports.createTextVNode(" (" + server.vueExports.toDisplayString(item.diff.history.infoText) + ") ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!--[--> (${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.diff.history.infoText)}) <!--]-->`);
        }
        _push(`</i><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</th>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<th data-v-28dfb777>${server.serverRenderer_cjs_prodExports.ssrInterpolate(index + 1)}</th><td data-v-28dfb777>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.content)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/blame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blame = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-28dfb777"]]);
exports.default = blame;
