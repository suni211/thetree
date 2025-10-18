"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const showError = require("./showError-CkeGKDwd.cjs");
const SearchableSelect = require("./SearchableSelect-BKvOOeeO.cjs");
const server = require("../server.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
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
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    GeneralButton: server.GeneralButton,
    SearchableSelect: SearchableSelect.SearchableSelect,
    ShowError: showError.ShowError,
    InputField: inputField.InputField,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedForm: seedForm.SeedForm
  },
  mounted() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    }
  },
  computed: {
    countryCodes() {
      return this.data.countryCodes.map((code) => ({
        label: `${code.name} (+${code.dialCode})`,
        value: code.code
      }));
    }
  },
  methods: {
    init() {
      const defaultCountryCode = this.countryCodes.find((a) => a.value === this.data.countryCode);
      if (defaultCountryCode)
        this.$refs.countryCode.modelValue = defaultCountryCode;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SearchableSelect = server.vueExports.resolveComponent("SearchableSelect");
  const _component_ShowError = server.vueExports.resolveComponent("ShowError");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(`<!--[-->`);
  if (_ctx.data.note) {
    _push(`<p data-v-02446e27>이용중인 IP는 문서 훼손행위가 자주 발생하는 IP(사유:${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.note)})이므로 계정 생성을 하기 위해서는 추가 인증이 필요합니다.</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    class: _ctx.$style.form,
    method: "post"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          label: "전화번호",
          inputId: "phoneNumberInput",
          name: "phoneNumber"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SearchableSelect, {
                name: "countryCode",
                options: $options.countryCodes,
                ref: "countryCode"
              }, null, _parent3, _scopeId2));
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, {
                tag: "countryCode",
                class: _ctx.$style.text
              }, null, _parent3, _scopeId2));
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                pattern: "\\d*",
                type: "text",
                id: "phoneNumberInput",
                name: "phoneNumber"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SearchableSelect, {
                  name: "countryCode",
                  options: $options.countryCodes,
                  ref: "countryCode"
                }, null, 8, ["options"]),
                server.vueExports.createVNode(_component_ShowError, {
                  tag: "countryCode",
                  class: _ctx.$style.text
                }, null, 8, ["class"]),
                server.vueExports.createVNode(_component_InputField, {
                  pattern: "\\d*",
                  type: "text",
                  id: "phoneNumberInput",
                  name: "phoneNumber"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        if (_ctx.data.verifyText) {
          _push2(`<p class="verify-text" data-v-02446e27${_scopeId}>${_ctx.data.verifyText ?? ""}</p>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-02446e27${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__buttons)}" data-v-02446e27${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          class: _ctx.$style.button,
          theme: "primary",
          type: "submit"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`인증`);
            } else {
              return [
                server.vueExports.createTextVNode("인증")
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
            label: "전화번호",
            inputId: "phoneNumberInput",
            name: "phoneNumber"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SearchableSelect, {
                name: "countryCode",
                options: $options.countryCodes,
                ref: "countryCode"
              }, null, 8, ["options"]),
              server.vueExports.createVNode(_component_ShowError, {
                tag: "countryCode",
                class: _ctx.$style.text
              }, null, 8, ["class"]),
              server.vueExports.createVNode(_component_InputField, {
                pattern: "\\d*",
                type: "text",
                id: "phoneNumberInput",
                name: "phoneNumber"
              })
            ]),
            _: 1
          }),
          _ctx.data.verifyText ? (server.vueExports.openBlock(), server.vueExports.createBlock("p", {
            key: 0,
            innerHTML: _ctx.data.verifyText,
            class: "verify-text"
          }, null, 8, ["innerHTML"])) : server.vueExports.createCommentVNode("", true),
          server.vueExports.createVNode("div", {
            class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]]
          }, [
            server.vueExports.createVNode("div", {
              class: _ctx.$style.form__buttons
            }, [
              server.vueExports.createVNode(_component_GeneralButton, {
                class: _ctx.$style.button,
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("인증")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/signup_verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup_verify = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-02446e27"]]);
exports.default = signup_verify;
