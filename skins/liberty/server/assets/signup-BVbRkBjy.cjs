"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const server = require("../server.cjs");
const flexFormBlock = require("./flexFormBlock-BfriicCb.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
const emailWhitelist = require("./emailWhitelist-D3npPp5E.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
const _sfc_main = {
  components: {
    SeedForm: seedForm.SeedForm,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    FlexFormBlock: flexFormBlock.FlexFormBlock,
    InputField: inputField.InputField,
    GeneralButton: server.GeneralButton,
    CheckBox: checkBox.CheckBox,
    EmailWhitelist: emailWhitelist.EmailWhitelist
  },
  data() {
    return this.$store.state.viewData;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_FlexFormBlock = server.vueExports.resolveComponent("FlexFormBlock");
  const _component_CheckBox = server.vueExports.resolveComponent("CheckBox");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_EmailWhitelist = server.vueExports.resolveComponent("EmailWhitelist");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, { method: "post" }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, null, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<pre class="signup-terms" data-v-0c54a64c${_scopeId2}>${_ctx.terms ?? ""}</pre>`);
            } else {
              return [
                server.vueExports.createVNode("pre", {
                  class: "signup-terms",
                  innerHTML: _ctx.terms
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, { name: "agree" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, { name: "agree" }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.agreeText)}`);
                  } else {
                    return [
                      server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.agreeText), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_CheckBox, { name: "agree" }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.agreeText), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, {
          label: "Email",
          inputId: "emailInput",
          name: "email"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                id: "emailInput",
                name: "email"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  id: "emailInput",
                  name: "email"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_EmailWhitelist, { domains: _ctx.emailWhitelist }, null, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, {
          buttons: "",
          padding: ""
        }, {
          buttons: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                type: "submit",
                theme: "primary"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`가입`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("가입")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_GeneralButton, {
                  type: "submit",
                  theme: "primary"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("가입")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode(_component_FlexFormBlock, null, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("pre", {
                class: "signup-terms",
                innerHTML: _ctx.terms
              }, null, 8, ["innerHTML"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_FlexFormBlock, { name: "agree" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_CheckBox, { name: "agree" }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.agreeText), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_FlexFormBlock, {
            label: "Email",
            inputId: "emailInput",
            name: "email"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                id: "emailInput",
                name: "email"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_EmailWhitelist, { domains: _ctx.emailWhitelist }, null, 8, ["domains"]),
          server.vueExports.createVNode(_component_FlexFormBlock, {
            buttons: "",
            padding: ""
          }, {
            buttons: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_GeneralButton, {
                type: "submit",
                theme: "primary"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("가입")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0c54a64c"]]);
exports.default = signup;
