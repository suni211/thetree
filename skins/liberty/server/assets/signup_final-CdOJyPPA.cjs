"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedFormInput = require("./seedFormInput-D9aT4LPH.cjs");
const server = require("../server.cjs");
require("./showError-CkeGKDwd.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    SeedForm: seedForm.SeedForm,
    SeedButton: seedButton.SeedButton,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedFormInput: seedFormInput.SeedFormInput
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SeedFormInput = server.vueExports.resolveComponent("SeedFormInput");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({ method: "post" }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "이메일",
          inputId: "emailInput",
          name: "email"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                id: "emailInput",
                name: "email",
                readonly: "",
                value: _ctx.data.email
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  id: "emailInput",
                  name: "email",
                  readonly: "",
                  value: _ctx.data.email
                }, null, 8, ["value"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "사용자 이름",
          inputId: "usernameInput",
          name: "username"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.data.name) {
                _push3(`<!--[-->`);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                  id: "usernameInput",
                  value: _ctx.data.name,
                  readonly: ""
                }, null, _parent3, _scopeId2));
                _push3(`<input type="hidden" name="username" value="special:bypass" data-v-e05c996d${_scopeId2}><!--]-->`);
              } else {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                  id: "usernameInput",
                  name: "username"
                }, null, _parent3, _scopeId2));
              }
            } else {
              return [
                _ctx.data.name ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                  server.vueExports.createVNode(_component_SeedFormInput, {
                    id: "usernameInput",
                    value: _ctx.data.name,
                    readonly: ""
                  }, null, 8, ["value"]),
                  server.vueExports.createVNode("input", {
                    type: "hidden",
                    name: "username",
                    value: "special:bypass"
                  })
                ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedFormInput, {
                  key: 1,
                  id: "usernameInput",
                  name: "username"
                }))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        if (_ctx.data.fromOAuth2) {
          _push2(`<input type="hidden" name="from_oauth2" value="Y" data-v-e05c996d${_scopeId}>`);
        } else {
          _push2(`<!--[-->`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
            label: "암호",
            inputId: "passwordInput",
            name: "password"
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                  id: "passwordInput",
                  name: "password",
                  type: "password"
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_SeedFormInput, {
                    id: "passwordInput",
                    name: "password",
                    type: "password"
                  })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
            label: "암호 확인",
            inputId: "passwordConfirmInput",
            name: "password_confirm"
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                  id: "passwordConfirmInput",
                  name: "password_confirm",
                  type: "password"
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_SeedFormInput, {
                    id: "passwordConfirmInput",
                    name: "password_confirm",
                    type: "password"
                  })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<!--]-->`);
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`가입`);
            } else {
              return [
                server.vueExports.createTextVNode("가입")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "이메일",
            inputId: "emailInput",
            name: "email"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedFormInput, {
                id: "emailInput",
                name: "email",
                readonly: "",
                value: _ctx.data.email
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "사용자 이름",
            inputId: "usernameInput",
            name: "username"
          }, {
            default: server.vueExports.withCtx(() => [
              _ctx.data.name ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  id: "usernameInput",
                  value: _ctx.data.name,
                  readonly: ""
                }, null, 8, ["value"]),
                server.vueExports.createVNode("input", {
                  type: "hidden",
                  name: "username",
                  value: "special:bypass"
                })
              ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedFormInput, {
                key: 1,
                id: "usernameInput",
                name: "username"
              }))
            ]),
            _: 1
          }),
          _ctx.data.fromOAuth2 ? (server.vueExports.openBlock(), server.vueExports.createBlock("input", {
            key: 0,
            type: "hidden",
            name: "from_oauth2",
            value: "Y"
          })) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
            server.vueExports.createVNode(_component_SeedFormBlock, {
              label: "암호",
              inputId: "passwordInput",
              name: "password"
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  id: "passwordInput",
                  name: "password",
                  type: "password"
                })
              ]),
              _: 1
            }),
            server.vueExports.createVNode(_component_SeedFormBlock, {
              label: "암호 확인",
              inputId: "passwordConfirmInput",
              name: "password_confirm"
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  id: "passwordConfirmInput",
                  name: "password_confirm",
                  type: "password"
                })
              ]),
              _: 1
            })
          ], 64)),
          server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("가입")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/signup_final.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup_final = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e05c996d"]]);
exports.default = signup_final;
