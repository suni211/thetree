"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const server = require("../server.cjs");
const emailWhitelist = require("./emailWhitelist-D3npPp5E.cjs");
require("./showError-CkeGKDwd.cjs");
require("node:stream");
require("node:path");
const form = "_form_ttnyb_1";
const form__row = "_form__row_ttnyb_1";
const form__buttons = "_form__buttons_ttnyb_1";
const icon = "_icon_ttnyb_1";
const text = "_text_ttnyb_1";
const list = "_list_ttnyb_1";
const link = "_link_ttnyb_1";
const button = "_button_ttnyb_1";
const style0 = {
  form,
  "form--large": "_form--large_ttnyb_1",
  "form--full": "_form--full_ttnyb_1",
  form__row,
  "form__row--self-center": "_form__row--self-center_ttnyb_1",
  "form__row--center": "_form__row--center_ttnyb_1",
  "form__row--between": "_form__row--between_ttnyb_1",
  "form__row--gap": "_form__row--gap_ttnyb_1",
  "form__row--links": "_form__row--links_ttnyb_1",
  "form__row--buttons": "_form__row--buttons_ttnyb_1",
  "form__row--block-buttons": "_form__row--block-buttons_ttnyb_1",
  "form--row-bordered": "_form--row-bordered_ttnyb_1",
  "form__row-inner": "_form__row-inner_ttnyb_1",
  "form__section-title": "_form__section-title_ttnyb_1",
  "form__icon-row": "_form__icon-row_ttnyb_1",
  form__buttons,
  icon,
  text,
  "text--help": "_text--help_ttnyb_1",
  "text--error": "_text--error_ttnyb_1",
  list,
  link,
  button,
  "block-button": "_block-button_ttnyb_1",
  "block-button__icon": "_block-button__icon_ttnyb_1",
  "block-button__content": "_block-button__content_ttnyb_1",
  "block-button__description": "_block-button__description_ttnyb_1",
  "block-button__chevron": "_block-button__chevron_ttnyb_1"
};
const _sfc_main = {
  components: {
    EmailWhitelist: emailWhitelist.EmailWhitelist,
    GeneralButton: server.GeneralButton,
    InputField: inputField.InputField,
    SeedForm: seedForm.SeedForm,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    SeedFormBlock: seedFormBlock.SeedFormBlock
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_EmailWhitelist = server.vueExports.resolveComponent("EmailWhitelist");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    class: _ctx.$style.form,
    method: "post"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          label: "비밀번호",
          inputId: "passwordInput",
          name: "password"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "password",
                id: "passwordInput",
                name: "password"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "password",
                  id: "passwordInput",
                  name: "password"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          label: "이메일"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                readonly: "",
                disabled: "",
                type: "text",
                value: _ctx.data.email
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  readonly: "",
                  disabled: "",
                  type: "text",
                  value: _ctx.data.email
                }, null, 8, ["value"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          label: "새 이메일",
          inputId: "emailInput",
          name: "email"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "email",
                id: "emailInput",
                name: "email"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "email",
                  id: "emailInput",
                  name: "email"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_EmailWhitelist, {
          domains: _ctx.data.emailWhitelist
        }, null, _parent2, _scopeId));
        _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}"${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__buttons)}"${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          class: _ctx.$style.button,
          type: "submit",
          theme: "primary"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`이메일 변경`);
            } else {
              return [
                server.vueExports.createTextVNode("이메일 변경")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            label: "비밀번호",
            inputId: "passwordInput",
            name: "password"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "password",
                id: "passwordInput",
                name: "password"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            label: "이메일"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                readonly: "",
                disabled: "",
                type: "text",
                value: _ctx.data.email
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            label: "새 이메일",
            inputId: "emailInput",
            name: "email"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "email",
                id: "emailInput",
                name: "email"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_EmailWhitelist, {
            domains: _ctx.data.emailWhitelist
          }, null, 8, ["domains"]),
          server.vueExports.createVNode("div", {
            class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]]
          }, [
            server.vueExports.createVNode("div", {
              class: _ctx.$style.form__buttons
            }, [
              server.vueExports.createVNode(_component_GeneralButton, {
                class: _ctx.$style.button,
                type: "submit",
                theme: "primary"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("이메일 변경")
                ]),
                _: 1
              }, 8, ["class"])
            ], 2)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/change_email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const change_email = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);
exports.default = change_email;
