"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const wikiContent = require("./wikiContent-j_kAYLje.cjs");
require("node:stream");
require("node:path");
require("./prevNextBtn-0UpawiXO.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    WikiCategoryDocs: wikiContent.WikiCategoryDocs,
    LocalDate: server.LocalDate,
    Alert: server.Alert,
    NuxtLink: server.NuxtLink,
    WikiContent: wikiContent.WikiContent
  },
  computed: {
    content() {
      return this.data.contentHtml;
    },
    categories() {
      return this.data.categories;
    },
    categoriesData() {
      return this.data.categoriesData;
    },
    userbox() {
      return this.data.userboxData ?? {};
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Alert = server.vueExports.resolveComponent("Alert");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_WikiContent = server.vueExports.resolveComponent("WikiContent");
  const _component_WikiCategoryDocs = server.vueExports.resolveComponent("WikiCategoryDocs");
  _push(`<!--[-->`);
  if (_ctx.data.rev) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, { error: "" }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<b${_scopeId}>[주의!]</b> 문서의 이전 버전(`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
            date: _ctx.data.date
          }, null, _parent2, _scopeId));
          _push2(`에 수정)을 보고 있습니다. `);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: _ctx.doc_action_link(_ctx.data.document, "w")
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`최신 버전으로 이동`);
              } else {
                return [
                  server.vueExports.createTextVNode("최신 버전으로 이동")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode("b", null, "[주의!]"),
            server.vueExports.createTextVNode(" 문서의 이전 버전("),
            server.vueExports.createVNode(_component_LocalDate, {
              date: _ctx.data.date
            }, null, 8, ["date"]),
            server.vueExports.createTextVNode("에 수정)을 보고 있습니다. "),
            server.vueExports.createVNode(_component_NuxtLink, {
              to: _ctx.doc_action_link(_ctx.data.document, "w")
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("최신 버전으로 이동")
              ]),
              _: 1
            }, 8, ["to"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$route.query.from) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, { theme: "primary" }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            rel: "nofollow",
            title: _ctx.$route.query.from,
            to: { path: `/w/${_ctx.$route.query.from}`, query: { noredirect: 1 } }
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$route.query.from)}`);
              } else {
                return [
                  server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.$route.query.from), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`에서 넘어옴 `);
        } else {
          return [
            server.vueExports.createVNode(_component_NuxtLink, {
              rel: "nofollow",
              title: _ctx.$route.query.from,
              to: { path: `/w/${_ctx.$route.query.from}`, query: { noredirect: 1 } }
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.$route.query.from), 1)
              ]),
              _: 1
            }, 8, ["title", "to"]),
            server.vueExports.createTextVNode("에서 넘어옴 ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!$options.categories.length && _ctx.data.document.namespace !== "사용자" && !_ctx.data.isRedirect) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, null, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` 이 문서는 분류가 되어 있지 않습니다. `);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: _ctx.doc_action_link({
              namespace: "분류",
              title: "분류"
            }, "w")
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`분류:분류`);
              } else {
                return [
                  server.vueExports.createTextVNode("분류:분류")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`에서 적절한 분류를 찾아 문서를 분류해주세요! `);
        } else {
          return [
            server.vueExports.createTextVNode(" 이 문서는 분류가 되어 있지 않습니다. "),
            server.vueExports.createVNode(_component_NuxtLink, {
              to: _ctx.doc_action_link({
                namespace: "분류",
                title: "분류"
              }, "w")
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("분류:분류")
              ]),
              _: 1
            }, 8, ["to"]),
            server.vueExports.createTextVNode("에서 적절한 분류를 찾아 문서를 분류해주세요! ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiContent, {
    content: $options.content,
    categories: $options.categories,
    userbox: $options.userbox
  }, null, _parent));
  if (_ctx.data.document.namespace === "분류") {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiCategoryDocs, { categories: $options.categoriesData }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/wiki.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wiki = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.default = wiki;
