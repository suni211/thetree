"use strict";
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const selectMenu = require("./selectMenu-DyMdl_Ge.cjs");
const server = require("../server.cjs");
const _sfc_main = {
  components: {
    SeedForm: seedForm.SeedForm,
    SelectMenu: selectMenu.SelectMenu,
    GeneralButton: server.GeneralButton
  },
  props: {
    namespaces: Array,
    selected: String
  },
  computed: {
    actualNamespaces() {
      return this.namespaces || this.data.namespaces;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SelectMenu = server.vueExports.resolveComponent("SelectMenu");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({
    flex: "",
    box: ""
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label for="namespaceSelect" data-v-51a201f4${_scopeId}>이름공간:</label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SelectMenu, {
          id: "namespaceSelect",
          name: "namespace",
          value: $props.selected || _ctx.$route.query.namespace || $options.actualNamespaces[0]
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              server.serverRenderer_cjs_prodExports.ssrRenderList($options.actualNamespaces, (item) => {
                _push3(`<option data-v-51a201f4${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item)}</option>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($options.actualNamespaces, (item) => {
                  return server.vueExports.openBlock(), server.vueExports.createBlock("option", null, server.vueExports.toDisplayString(item), 1);
                }), 256))
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
            value: $props.selected || _ctx.$route.query.namespace || $options.actualNamespaces[0]
          }, {
            default: server.vueExports.withCtx(() => [
              (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($options.actualNamespaces, (item) => {
                return server.vueExports.openBlock(), server.vueExports.createBlock("option", null, server.vueExports.toDisplayString(item), 1);
              }), 256))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/namespaceSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NamespaceSelector = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-51a201f4"]]);
exports.NamespaceSelector = NamespaceSelector;
