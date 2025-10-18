"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    SeedLinkButton: server.SeedLinkButton,
    Alert: server.Alert,
    SeedButton: seedButton.SeedButton,
    SeedForm: seedForm.SeedForm
  },
  computed: {
    pageNum() {
      const num = parseInt(this.$route.query.page) || 1;
      const start = num - num % 10 + 1;
      const end = Math.min(num + 9, this.data.totalPages);
      const result = [];
      for (let i = start; i <= end; i++)
        result.push(i);
      return result;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  const _component_Alert = server.vueExports.resolveComponent("Alert");
  const _component_SeedLinkButton = server.vueExports.resolveComponent("SeedLinkButton");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, null, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<select name="namespace"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", _ctx.$route.query.namespace || "")} data-v-70223721${_scopeId}><option value="" data-v-70223721${_scopeId}>전체</option><!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.readableNamespaces, (item) => {
          _push2(`<option data-v-70223721${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item)}</option>`);
        });
        _push2(`<!--]--></select><select name="target"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", _ctx.$route.query.target || "title_content")} data-v-70223721${_scopeId}><option value="title_content" data-v-70223721${_scopeId}>제목/내용</option><option value="title" data-v-70223721${_scopeId}>제목</option><option value="content" data-v-70223721${_scopeId}>내용</option><option value="raw" data-v-70223721${_scopeId}>원문</option></select><input type="text" name="q"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", _ctx.$route.query.q || "")} data-v-70223721${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`검색`);
            } else {
              return [
                server.vueExports.createTextVNode("검색")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode("select", {
            name: "namespace",
            value: _ctx.$route.query.namespace || ""
          }, [
            server.vueExports.createVNode("option", { value: "" }, "전체"),
            (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.readableNamespaces, (item) => {
              return server.vueExports.openBlock(), server.vueExports.createBlock("option", null, server.vueExports.toDisplayString(item), 1);
            }), 256))
          ], 8, ["value"]),
          server.vueExports.createVNode("select", {
            name: "target",
            value: _ctx.$route.query.target || "title_content"
          }, [
            server.vueExports.createVNode("option", { value: "title_content" }, "제목/내용"),
            server.vueExports.createVNode("option", { value: "title" }, "제목"),
            server.vueExports.createVNode("option", { value: "content" }, "내용"),
            server.vueExports.createVNode("option", { value: "raw" }, "원문")
          ], 8, ["value"]),
          server.vueExports.createVNode("input", {
            type: "text",
            name: "q",
            value: _ctx.$route.query.q || ""
          }, null, 8, ["value"]),
          server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("검색")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, null, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="alert-block" data-v-70223721${_scopeId}><i class="ion-ios-arrow-forward" data-v-70223721${_scopeId}></i> 찾는 문서가 없나요? 문서로 바로 갈 수 있습니다. </div><div class="alert-button" data-v-70223721${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedLinkButton, {
          to: _ctx.doc_action_link(_ctx.$route.query.q, "w")
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`&#39;${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$route.query.q)}&#39; 문서로 가기`);
            } else {
              return [
                server.vueExports.createTextVNode("'" + server.vueExports.toDisplayString(_ctx.$route.query.q) + "' 문서로 가기", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="clear" data-v-70223721${_scopeId}></div>`);
      } else {
        return [
          server.vueExports.createVNode("div", { class: "alert-block" }, [
            server.vueExports.createVNode("i", { class: "ion-ios-arrow-forward" }),
            server.vueExports.createTextVNode(" 찾는 문서가 없나요? 문서로 바로 갈 수 있습니다. ")
          ]),
          server.vueExports.createVNode("div", { class: "alert-button" }, [
            server.vueExports.createVNode(_component_SeedLinkButton, {
              to: _ctx.doc_action_link(_ctx.$route.query.q, "w")
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("'" + server.vueExports.toDisplayString(_ctx.$route.query.q) + "' 문서로 가기", 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          server.vueExports.createVNode("div", { class: "clear" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="info-text" data-v-70223721>전체 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.totalHits)} 건 / 처리 시간 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.processingTime / 1e3)}초</div><section data-v-70223721><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.hits, (item) => {
    _push(`<div data-v-70223721><h4 data-v-70223721><i class="ion-md-document" data-v-70223721></i>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(item, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item))}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h4><div data-v-70223721>${(item.content || item.raw) ?? ""}</div></div>`);
  });
  _push(`<!--]--><nav data-v-70223721><ul data-v-70223721><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList($options.pageNum, (i) => {
    _push(`<li data-v-70223721>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: { query: { page: i } },
      class: { active: i.toString() === (_ctx.$route.query.page || "1") }
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(i)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(i), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></nav><div class="clear" data-v-70223721></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-70223721"]]);
exports.default = search;
