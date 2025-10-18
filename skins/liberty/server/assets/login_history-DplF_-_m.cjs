"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormInput = require("./seedFormInput-D9aT4LPH.cjs");
const server = require("../server.cjs");
require("./showError-CkeGKDwd.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    SeedFormInput: seedFormInput.SeedFormInput,
    SeedForm: seedForm.SeedForm,
    SeedButton: seedButton.SeedButton,
    SeedFormBlock: seedFormBlock.SeedFormBlock
  },
  methods: {
    goConfirm() {
      return confirm("go?");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SeedFormInput = server.vueExports.resolveComponent("SeedFormInput");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({
    beforeSubmit: $options.goConfirm,
    method: "post"
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "Username",
          for: "usernameInput",
          name: "username"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                id: "usernameInput",
                name: "username",
                required: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  id: "usernameInput",
                  name: "username",
                  required: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        if (_ctx.data.hidelogPerm) {
          _push2(`<label data-v-fd71121a${_scopeId}> hidelog: <input type="checkbox" name="hidelog" value="Y" data-v-fd71121a${_scopeId}></label>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="button-block" data-v-fd71121a${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`확인`);
            } else {
              return [
                server.vueExports.createTextVNode("확인")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "Username",
            for: "usernameInput",
            name: "username"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedFormInput, {
                id: "usernameInput",
                name: "username",
                required: ""
              })
            ]),
            _: 1
          }),
          _ctx.data.hidelogPerm ? (server.vueExports.openBlock(), server.vueExports.createBlock("label", { key: 0 }, [
            server.vueExports.createTextVNode(" hidelog: "),
            server.vueExports.createVNode("input", {
              type: "checkbox",
              name: "hidelog",
              value: "Y"
            })
          ])) : server.vueExports.createCommentVNode("", true),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("확인")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/login_history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login_history = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fd71121a"]]);
exports.default = login_history;
