"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const pinInput = require("./pinInput-Bng1AFSZ.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
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
    PinInput: pinInput.PinInput,
    InputField: inputField.InputField,
    GeneralButton: server.GeneralButton,
    SeedForm: seedForm.SeedForm,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    SeedFormBlock: seedFormBlock.SeedFormBlock
  },
  data() {
    return {
      step: 1
    };
  },
  methods: {
    prevStep() {
      if (this.step > 1)
        this.step--;
    },
    nextStep() {
      if (this.step < 3)
        this.step++;
    },
    copySecret() {
      navigator.clipboard.writeText(this.data.secret);
      server.Ke("비밀키가 복사되었습니다.");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_PinInput = server.vueExports.resolveComponent("PinInput");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  if ($data.step === 1) {
    _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form, _ctx.$style["form--large"]])}" data-v-08530902><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-08530902><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__section-title"])}" data-v-08530902>1단계</div><div data-v-08530902><p data-v-08530902>모바일 장치에 일회용 비밀번호 (OTP) 등록을 위한 인증기 애플리케이션을 설치합니다.</p><ul data-v-08530902><li data-v-08530902> Google OTP (<a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" rel="noopener" target="_blank" data-v-08530902>Play Store</a>, <a href="https://apps.apple.com/us/app/google-authenticator/id388497605" rel="noopener" target="_blank" data-v-08530902>App Store</a>) </li><li data-v-08530902> FreeOTP (<a href="https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp" rel="noopener" target="_blank" data-v-08530902>Play Store</a>, <a href="https://apps.apple.com/us/app/freeotp-authenticator/id872559395" rel="noopener" target="_blank" data-v-08530902>App Store</a>) </li></ul><p data-v-08530902>위의 예시 외에도 본인이 선호하는 인증기 애플리케이션을 사용할 수 있습니다.</p><p data-v-08530902> [`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, {
      class: _ctx.$style.icon,
      icon: "triangle-exclamation"
    }, null, _parent));
    _push(` 주의] <br data-v-08530902> 일회용 비밀번호를 설정하면 계정에 어떤 영향을 주는지 이해하는 경우에만 설정하세요. </p></div></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-08530902><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__buttons)}" data-v-08530902>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      class: _ctx.$style.button,
      whenClick: $options.nextStep
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-08530902${_scopeId}>다음</span>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode("span", null, "다음"),
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.step === 2) {
    _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form, _ctx.$style["form--large"]])}" data-v-08530902><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-08530902><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__section-title"])}" data-v-08530902>2단계</div><div data-v-08530902><ol data-v-08530902><li data-v-08530902>인증기 애플리케이션을 실행합니다.</li><li data-v-08530902>코드 추가를 클릭합니다.</li><li data-v-08530902>화면에 표시되는 단계를 따릅니다.</li></ol><p data-v-08530902>모바일 장치에서 등록을 시도하는 경우, QR 코드를 클릭해서 바로 인증기 애플리케이션에 등록할 수 있습니다.</p></div></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--center"]])}" data-v-08530902><a${server.serverRenderer_cjs_prodExports.ssrRenderAttr("href", _ctx.data.qrUrl)} class="qrcode" data-v-08530902><img${server.serverRenderer_cjs_prodExports.ssrRenderAttr("src", _ctx.data.qrcode)} data-v-08530902></a></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-08530902><p data-v-08530902>만약 QR 코드를 사용할 수 없는 경우, 아래의 비밀키를 사용하세요.</p></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--self-center"]])}" data-v-08530902><label data-v-08530902>비밀키</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-08530902>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
      class: "secret-input",
      readonly: "",
      disabled: "",
      center: "",
      value: _ctx.data.secret
    }, null, _parent));
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      class: "copy-button",
      whenClick: $options.copySecret
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-regular fa-copy" }, null, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "fa-regular fa-copy" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--between"], _ctx.$style["form__row--buttons"]])}" data-v-08530902>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      class: _ctx.$style.button,
      whenClick: $options.prevStep
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-left" }, null, _parent2, _scopeId));
          _push2(`<span data-v-08530902${_scopeId}>이전</span>`);
        } else {
          return [
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-left" }),
            server.vueExports.createVNode("span", null, "이전")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      class: _ctx.$style.button,
      whenClick: $options.nextStep
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-08530902${_scopeId}>다음</span>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode("span", null, "다음"),
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.step === 3) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
      class: [_ctx.$style.form, _ctx.$style["form--large"]],
      method: "post"
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin": "0 0 1rem" })}" data-v-08530902${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__section-title"])}" data-v-08530902${_scopeId}>3단계</div><div data-v-08530902${_scopeId}><p data-v-08530902${_scopeId}>아래에 일회용 비밀번호를 입력해서 2단계 인증을 활성화 할 수 있습니다.</p></div></div>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
            newStyle: "",
            label: "일회용 비밀번호 (OTP)",
            inputId: "pinInput",
            name: "pin"
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PinInput, { name: "pin" }, null, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_PinInput, { name: "pin" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--between"], _ctx.$style["form__row--buttons"]])}" data-v-08530902${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            class: _ctx.$style.button,
            whenClick: $options.prevStep
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-left" }, null, _parent3, _scopeId2));
                _push3(`<span data-v-08530902${_scopeId2}>이전</span>`);
              } else {
                return [
                  server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-left" }),
                  server.vueExports.createVNode("span", null, "이전")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            class: _ctx.$style.button,
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
          _push2(`</div>`);
        } else {
          return [
            server.vueExports.createVNode("div", { style: { "margin": "0 0 1rem" } }, [
              server.vueExports.createVNode("div", {
                class: _ctx.$style["form__section-title"]
              }, "3단계", 2),
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode("p", null, "아래에 일회용 비밀번호를 입력해서 2단계 인증을 활성화 할 수 있습니다.")
              ])
            ]),
            server.vueExports.createVNode(_component_SeedFormBlock, {
              newStyle: "",
              label: "일회용 비밀번호 (OTP)",
              inputId: "pinInput",
              name: "pin"
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_PinInput, { name: "pin" })
              ]),
              _: 1
            }),
            server.vueExports.createVNode("div", {
              class: [_ctx.$style.form__row, _ctx.$style["form__row--between"], _ctx.$style["form__row--buttons"]]
            }, [
              server.vueExports.createVNode(_component_GeneralButton, {
                class: _ctx.$style.button,
                whenClick: $options.prevStep
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-left" }),
                  server.vueExports.createVNode("span", null, "이전")
                ]),
                _: 1
              }, 8, ["class", "whenClick"]),
              server.vueExports.createVNode(_component_GeneralButton, {
                class: _ctx.$style.button,
                type: "submit",
                theme: "primary"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("제출")
                ]),
                _: 1
              }, 8, ["class"])
            ], 2)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/activate_otp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activate_otp = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-08530902"]]);
exports.default = activate_otp;
