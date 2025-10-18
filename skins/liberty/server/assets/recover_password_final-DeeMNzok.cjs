"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedFormInput = require("./seedFormInput-D9aT4LPH.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const server = require("../server.cjs");
require("./showError-CkeGKDwd.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    SeedForm: seedForm.SeedForm,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedFormInput: seedFormInput.SeedFormInput,
    SeedButton: seedButton.SeedButton
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SeedFormInput = server.vueExports.resolveComponent("SeedFormInput");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({ method: "post" }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent2, _scopeId));
        _push2(`<p data-v-e0ee02f0${_scopeId}>새로운 비밀번호를 입력해주세요</p>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "비밀번호",
          inputId: "passwordInput",
          name: "password"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                type: "password",
                id: "passwordInput",
                name: "password"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SeedFormInput, {
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
          label: "비밀번호 확인",
          inputId: "passwordConfirmInput",
          name: "password_confirm"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                type: "password",
                id: "passwordConfirmInput",
                name: "password_confirm"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  type: "password",
                  id: "passwordConfirmInput",
                  name: "password_confirm"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="buttons-block" data-v-e0ee02f0${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`비밀번호 변경`);
            } else {
              return [
                server.vueExports.createTextVNode("비밀번호 변경")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode(_component_FormErrorAlert),
          server.vueExports.createVNode("p", null, "새로운 비밀번호를 입력해주세요"),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "비밀번호",
            inputId: "passwordInput",
            name: "password"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedFormInput, {
                type: "password",
                id: "passwordInput",
                name: "password"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "비밀번호 확인",
            inputId: "passwordConfirmInput",
            name: "password_confirm"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedFormInput, {
                type: "password",
                id: "passwordConfirmInput",
                name: "password_confirm"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode("div", { class: "buttons-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("비밀번호 변경")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/recover_password_final.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recover_password_final = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e0ee02f0"]]);
exports.default = recover_password_final;
