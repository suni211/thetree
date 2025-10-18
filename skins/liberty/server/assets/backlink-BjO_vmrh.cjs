"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const selectMenu = require("./selectMenu-DyMdl_Ge.cjs");
require("node:stream");
require("node:path");
const _sfc_main$1 = {
  components: {
    SeedForm: seedForm.SeedForm,
    SelectMenu: selectMenu.SelectMenu,
    GeneralButton: server.GeneralButton
  },
  props: {
    namespaces: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SelectMenu = server.vueExports.resolveComponent("SelectMenu");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({
    flex: "",
    box: ""
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<label for="namespaceSelect" data-v-f345ea7b${_scopeId}>이름공간:</label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SelectMenu, {
          id: "namespaceSelect",
          name: "namespace",
          value: _ctx.$route.query.namespace || ((_a = $props.namespaces[0]) == null ? void 0 : _a.namespace)
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              server.serverRenderer_cjs_prodExports.ssrRenderList($props.namespaces, (ns) => {
                _push3(`<option${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", ns.namespace)} data-v-f345ea7b${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(ns.namespace)} (${server.serverRenderer_cjs_prodExports.ssrInterpolate(ns.count)})</option>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($props.namespaces, (ns) => {
                  return server.vueExports.openBlock(), server.vueExports.createBlock("option", {
                    value: ns.namespace
                  }, server.vueExports.toDisplayString(ns.namespace) + " (" + server.vueExports.toDisplayString(ns.count) + ")", 9, ["value"]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SelectMenu, {
          name: "flag",
          value: _ctx.$route.query.flag || 0
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<option value="0" data-v-f345ea7b${_scopeId2}>(전체)</option><option value="1" data-v-f345ea7b${_scopeId2}>link</option><option value="2" data-v-f345ea7b${_scopeId2}>file</option><option value="4" data-v-f345ea7b${_scopeId2}>include</option><option value="8" data-v-f345ea7b${_scopeId2}>redirect</option>`);
            } else {
              return [
                server.vueExports.createVNode("option", { value: "0" }, "(전체)"),
                server.vueExports.createVNode("option", { value: "1" }, "link"),
                server.vueExports.createVNode("option", { value: "2" }, "file"),
                server.vueExports.createVNode("option", { value: "4" }, "include"),
                server.vueExports.createVNode("option", { value: "8" }, "redirect")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          type: "submit",
          theme: "primary"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`제출`);
            } else {
              return [
                server.vueExports.createTextVNode("제출")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode("label", { for: "namespaceSelect" }, "이름공간:"),
          server.vueExports.createVNode(_component_SelectMenu, {
            id: "namespaceSelect",
            name: "namespace",
            value: _ctx.$route.query.namespace || ((_b = $props.namespaces[0]) == null ? void 0 : _b.namespace)
          }, {
            default: server.vueExports.withCtx(() => [
              (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($props.namespaces, (ns) => {
                return server.vueExports.openBlock(), server.vueExports.createBlock("option", {
                  value: ns.namespace
                }, server.vueExports.toDisplayString(ns.namespace) + " (" + server.vueExports.toDisplayString(ns.count) + ")", 9, ["value"]);
              }), 256))
            ]),
            _: 1
          }, 8, ["value"]),
          server.vueExports.createVNode(_component_SelectMenu, {
            name: "flag",
            value: _ctx.$route.query.flag || 0
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("option", { value: "0" }, "(전체)"),
              server.vueExports.createVNode("option", { value: "1" }, "link"),
              server.vueExports.createVNode("option", { value: "2" }, "file"),
              server.vueExports.createVNode("option", { value: "4" }, "include"),
              server.vueExports.createVNode("option", { value: "8" }, "redirect")
            ]),
            _: 1
          }, 8, ["value"]),
          server.vueExports.createVNode(_component_GeneralButton, {
            type: "submit",
            theme: "primary"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("제출")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/backlinkNamespaceSelector.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BacklinkNamespaceSelector = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f345ea7b"]]);
const _sfc_main = {
  mixins: [server.Common],
  components: {
    SeedForm: seedForm.SeedForm,
    GeneralButton: server.GeneralButton,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    SelectMenu: selectMenu.SelectMenu,
    BacklinkNamespaceSelector,
    NuxtLink: server.NuxtLink
  },
  computed: {
    pageProps() {
      const prevItem = this.data.prevItem;
      const nextItem = this.data.nextItem;
      return {
        prev: prevItem ? { query: { until: prevItem.title } } : null,
        next: nextItem ? { query: { from: nextItem.title } } : null
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BacklinkNamespaceSelector = server.vueExports.resolveComponent("BacklinkNamespaceSelector");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_BacklinkNamespaceSelector, {
    namespaces: _ctx.data.namespaceCounts
  }, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  if (Object.keys(_ctx.data.backlinksPerChar).length) {
    _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ "many-wrapper": Object.keys(_ctx.data.backlinksPerChar).length >= 3 })}" data-v-4407733a><!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.backlinksPerChar, (documents, char) => {
      _push(`<div data-v-4407733a><h3 data-v-4407733a>${server.serverRenderer_cjs_prodExports.ssrInterpolate(char)}</h3><ul data-v-4407733a><!--[-->`);
      server.serverRenderer_cjs_prodExports.ssrRenderList(documents, (doc) => {
        _push(`<li data-v-4407733a>`);
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.doc_action_link(doc.parsedName, "w")
        }, {
          default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(doc.parsedName))}`);
            } else {
              return [
                server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(doc.parsedName)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(` (${server.serverRenderer_cjs_prodExports.ssrInterpolate(doc.flags.map((a) => ({ 1: "link", 2: "file", 4: "include", 8: "redirect" })[a]).join(", "))}) </li>`);
      });
      _push(`<!--]--></ul></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div data-v-4407733a> 해당 문서의 역링크가 존재하지 않습니다. </div>`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/backlink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backlink = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4407733a"]]);
exports.default = backlink;
