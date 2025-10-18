"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toAuthenticatorAttachment = require("./toAuthenticatorAttachment-CuNDwn0n.cjs");
const startAuthentication = require("./startAuthentication-q_aWPw_6.cjs");
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const flexFormBlock = require("./flexFormBlock-BfriicCb.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
const pinInput = require("./pinInput-Bng1AFSZ.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
require("./inputField-Cszfz-0C.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    SeedForm: seedForm.SeedForm,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    FlexFormBlock: flexFormBlock.FlexFormBlock,
    CheckBox: checkBox.CheckBox,
    GeneralButton: server.GeneralButton,
    PinInput: pinInput.PinInput
  },
  data() {
    const viewData = this.$store.state.viewData;
    return {
      ...viewData,
      passkey: viewData.hasPasskey
    };
  },
  mounted() {
    if (this.passkey) this.passkeyLogin();
    else this.$refs.pinInput.focus();
  },
  beforeUnmount() {
    toAuthenticatorAttachment.WebAuthnAbortService.cancelCeremony();
  },
  watch: {
    async passkey(newValue) {
      if (!newValue) {
        await this.$nextTick();
        this.$refs.pinInput.focus();
      }
    }
  },
  methods: {
    togglePasskey() {
      this.passkey = !this.passkey;
    },
    async passkeyLogin() {
      this.$refs.form.submitting = true;
      let asseResp;
      try {
        asseResp = await startAuthentication.startAuthentication({ optionsJSON: this.$store.state.page.data.passkeyData });
      } catch (e) {
        if (e.code === "ERROR_CEREMONY_ABORTED") return;
        console.error(e);
        alert(e.toString());
        this.$refs.form.submitting = false;
        return;
      }
      await this.internalRequestAndProcess("/member/login/pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          challenge: asseResp,
          autologin: this.autologin
        })
      });
      this.$refs.form.submitting = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_FlexFormBlock = server.vueExports.resolveComponent("FlexFormBlock");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_PinInput = server.vueExports.resolveComponent("PinInput");
  const _component_CheckBox = server.vueExports.resolveComponent("CheckBox");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    ref: "form",
    method: "post",
    action: "/member/login/pin"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<input type="hidden" name="autologin"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", _ctx.autologin)} data-v-b64cba79${_scopeId}><p data-v-b64cba79${_scopeId}> 확인되지 않은 기기에서 로그인하셨습니다.<br data-v-b64cba79${_scopeId}>`);
        if (_ctx.useTotp) {
          _push2(`<!--[-->`);
          if ($data.passkey) {
            _push2(`<span data-v-b64cba79${_scopeId}>Passkey을 사용하여 2단계 인증을 진행합니다.</span>`);
          } else {
            _push2(`<span data-v-b64cba79${_scopeId}>Google Authenticator 코드를 입력해주세요.</span>`);
          }
          _push2(`<!--]-->`);
        } else {
          _push2(`<!--[--> 이메일(<b data-v-b64cba79${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.email)}</b>)로 전송된 PIN을 입력해주세요. <!--]-->`);
        }
        _push2(`</p>`);
        if ($data.passkey) {
          _push2(`<!--[--><div class="passkey-icon" data-v-b64cba79${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "key" }, null, _parent2, _scopeId));
          _push2(`</div>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, { class: "padding" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                  whenClick: $options.passkeyLogin,
                  theme: "primary",
                  block: ""
                }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Passkey 로그인`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("Passkey 로그인")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_GeneralButton, {
                    whenClick: $options.passkeyLogin,
                    theme: "primary",
                    block: ""
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("Passkey 로그인")
                    ]),
                    _: 1
                  }, 8, ["whenClick"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<!--]-->`);
        } else {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, null, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PinInput, {
                  ref: "pinInput",
                  name: "pin"
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_PinInput, {
                    ref: "pinInput",
                    name: "pin"
                  }, null, 512)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, {
          class: { "buttons padding": !$data.passkey }
        }, server.vueExports.createSlots({
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, { name: "trust" }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`이 기기를 신뢰`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("이 기기를 신뢰")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_CheckBox, { name: "trust" }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("이 기기를 신뢰")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, [
          !$data.passkey ? {
            name: "buttons",
            fn: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                  type: "submit",
                  theme: "primary"
                }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`로그인`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("로그인")
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
                      server.vueExports.createTextVNode("로그인")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent2, _scopeId));
        if (_ctx.data.hasPasskey) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FlexFormBlock, { class: "other-method" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="other-method-title" data-v-b64cba79${_scopeId2}>다른 인증 방법</div>`);
                if ($data.passkey) {
                  _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                    class: "other-method-button",
                    whenClick: $options.togglePasskey
                  }, {
                    default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="other-method-icon" data-v-b64cba79${_scopeId3}>`);
                        _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "mobile-screen" }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="other-method-content" data-v-b64cba79${_scopeId3}><div data-v-b64cba79${_scopeId3}>일회용 암호</div><div class="other-method-description" data-v-b64cba79${_scopeId3}> 이메일이나 OTP 앱에서 받은 일회용 인증 코드를 입력하여 인증합니다. </div></div><div class="other-method-arrow" data-v-b64cba79${_scopeId3}>`);
                        _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          server.vueExports.createVNode("div", { class: "other-method-icon" }, [
                            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "mobile-screen" })
                          ]),
                          server.vueExports.createVNode("div", { class: "other-method-content" }, [
                            server.vueExports.createVNode("div", null, "일회용 암호"),
                            server.vueExports.createVNode("div", { class: "other-method-description" }, " 이메일이나 OTP 앱에서 받은 일회용 인증 코드를 입력하여 인증합니다. ")
                          ]),
                          server.vueExports.createVNode("div", { class: "other-method-arrow" }, [
                            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                    class: "other-method-button",
                    whenClick: $options.togglePasskey
                  }, {
                    default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="other-method-icon" data-v-b64cba79${_scopeId3}>`);
                        _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "key" }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="other-method-content" data-v-b64cba79${_scopeId3}><div data-v-b64cba79${_scopeId3}>Passkey</div><div class="other-method-description" data-v-b64cba79${_scopeId3}> 지문, 얼굴 인식 또는 보안 키를 사용하여 인증합니다. </div></div><div class="other-method-arrow" data-v-b64cba79${_scopeId3}>`);
                        _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          server.vueExports.createVNode("div", { class: "other-method-icon" }, [
                            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "key" })
                          ]),
                          server.vueExports.createVNode("div", { class: "other-method-content" }, [
                            server.vueExports.createVNode("div", null, "Passkey"),
                            server.vueExports.createVNode("div", { class: "other-method-description" }, " 지문, 얼굴 인식 또는 보안 키를 사용하여 인증합니다. ")
                          ]),
                          server.vueExports.createVNode("div", { class: "other-method-arrow" }, [
                            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                }
              } else {
                return [
                  server.vueExports.createVNode("div", { class: "other-method-title" }, "다른 인증 방법"),
                  $data.passkey ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 0,
                    class: "other-method-button",
                    whenClick: $options.togglePasskey
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createVNode("div", { class: "other-method-icon" }, [
                        server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "mobile-screen" })
                      ]),
                      server.vueExports.createVNode("div", { class: "other-method-content" }, [
                        server.vueExports.createVNode("div", null, "일회용 암호"),
                        server.vueExports.createVNode("div", { class: "other-method-description" }, " 이메일이나 OTP 앱에서 받은 일회용 인증 코드를 입력하여 인증합니다. ")
                      ]),
                      server.vueExports.createVNode("div", { class: "other-method-arrow" }, [
                        server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
                      ])
                    ]),
                    _: 1
                  }, 8, ["whenClick"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 1,
                    class: "other-method-button",
                    whenClick: $options.togglePasskey
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createVNode("div", { class: "other-method-icon" }, [
                        server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "key" })
                      ]),
                      server.vueExports.createVNode("div", { class: "other-method-content" }, [
                        server.vueExports.createVNode("div", null, "Passkey"),
                        server.vueExports.createVNode("div", { class: "other-method-description" }, " 지문, 얼굴 인식 또는 보안 키를 사용하여 인증합니다. ")
                      ]),
                      server.vueExports.createVNode("div", { class: "other-method-arrow" }, [
                        server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
                      ])
                    ]),
                    _: 1
                  }, 8, ["whenClick"]))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          server.vueExports.createVNode("input", {
            type: "hidden",
            name: "autologin",
            value: _ctx.autologin
          }, null, 8, ["value"]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createTextVNode(" 확인되지 않은 기기에서 로그인하셨습니다."),
            server.vueExports.createVNode("br"),
            _ctx.useTotp ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
              $data.passkey ? (server.vueExports.openBlock(), server.vueExports.createBlock("span", { key: 0 }, "Passkey을 사용하여 2단계 인증을 진행합니다.")) : (server.vueExports.openBlock(), server.vueExports.createBlock("span", { key: 1 }, "Google Authenticator 코드를 입력해주세요."))
            ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
              server.vueExports.createTextVNode(" 이메일("),
              server.vueExports.createVNode("b", null, server.vueExports.toDisplayString(_ctx.email), 1),
              server.vueExports.createTextVNode(")로 전송된 PIN을 입력해주세요. ")
            ], 64))
          ]),
          $data.passkey ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
            server.vueExports.createVNode("div", { class: "passkey-icon" }, [
              server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "key" })
            ]),
            server.vueExports.createVNode(_component_FlexFormBlock, { class: "padding" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_GeneralButton, {
                  whenClick: $options.passkeyLogin,
                  theme: "primary",
                  block: ""
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("Passkey 로그인")
                  ]),
                  _: 1
                }, 8, ["whenClick"])
              ]),
              _: 1
            })
          ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_FlexFormBlock, { key: 1 }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_PinInput, {
                ref: "pinInput",
                name: "pin"
              }, null, 512)
            ]),
            _: 1
          })),
          server.vueExports.createVNode(_component_FlexFormBlock, {
            class: { "buttons padding": !$data.passkey }
          }, server.vueExports.createSlots({
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_CheckBox, { name: "trust" }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("이 기기를 신뢰")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, [
            !$data.passkey ? {
              name: "buttons",
              fn: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_GeneralButton, {
                  type: "submit",
                  theme: "primary"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("로그인")
                  ]),
                  _: 1
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["class"]),
          _ctx.data.hasPasskey ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_FlexFormBlock, {
            key: 2,
            class: "other-method"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("div", { class: "other-method-title" }, "다른 인증 방법"),
              $data.passkey ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                key: 0,
                class: "other-method-button",
                whenClick: $options.togglePasskey
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode("div", { class: "other-method-icon" }, [
                    server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "mobile-screen" })
                  ]),
                  server.vueExports.createVNode("div", { class: "other-method-content" }, [
                    server.vueExports.createVNode("div", null, "일회용 암호"),
                    server.vueExports.createVNode("div", { class: "other-method-description" }, " 이메일이나 OTP 앱에서 받은 일회용 인증 코드를 입력하여 인증합니다. ")
                  ]),
                  server.vueExports.createVNode("div", { class: "other-method-arrow" }, [
                    server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
                  ])
                ]),
                _: 1
              }, 8, ["whenClick"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                key: 1,
                class: "other-method-button",
                whenClick: $options.togglePasskey
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode("div", { class: "other-method-icon" }, [
                    server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "key" })
                  ]),
                  server.vueExports.createVNode("div", { class: "other-method-content" }, [
                    server.vueExports.createVNode("div", null, "Passkey"),
                    server.vueExports.createVNode("div", { class: "other-method-description" }, " 지문, 얼굴 인식 또는 보안 키를 사용하여 인증합니다. ")
                  ]),
                  server.vueExports.createVNode("div", { class: "other-method-arrow" }, [
                    server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
                  ])
                ]),
                _: 1
              }, 8, ["whenClick"]))
            ]),
            _: 1
          })) : server.vueExports.createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/pin_verification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pin_verification = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b64cba79"]]);
exports.default = pin_verification;
