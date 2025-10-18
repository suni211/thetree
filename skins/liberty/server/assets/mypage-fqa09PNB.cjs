"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toAuthenticatorAttachment = require("./toAuthenticatorAttachment-CuNDwn0n.cjs");
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const selectMenu = require("./selectMenu-DyMdl_Ge.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedFormInput = require("./seedFormInput-D9aT4LPH.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
function identifyRegistrationError({ error, options }) {
  var _a, _b, _c;
  const { publicKey } = options;
  if (!publicKey) {
    throw Error("options was missing required publicKey property");
  }
  if (error.name === "AbortError") {
    if (options.signal instanceof AbortSignal) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: error
      });
    }
  } else if (error.name === "ConstraintError") {
    if (((_a = publicKey.authenticatorSelection) == null ? void 0 : _a.requireResidentKey) === true) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: error
      });
    } else if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      options.mediation === "conditional" && ((_b = publicKey.authenticatorSelection) == null ? void 0 : _b.userVerification) === "required"
    ) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: error
      });
    } else if (((_c = publicKey.authenticatorSelection) == null ? void 0 : _c.userVerification) === "required") {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: error
      });
    }
  } else if (error.name === "InvalidStateError") {
    return new toAuthenticatorAttachment.WebAuthnError({
      message: "The authenticator was previously registered",
      code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
      cause: error
    });
  } else if (error.name === "NotAllowedError") {
    return new toAuthenticatorAttachment.WebAuthnError({
      message: error.message,
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  } else if (error.name === "NotSupportedError") {
    const validPubKeyCredParams = publicKey.pubKeyCredParams.filter((param) => param.type === "public-key");
    if (validPubKeyCredParams.length === 0) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: error
      });
    }
    return new toAuthenticatorAttachment.WebAuthnError({
      message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
      code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
      cause: error
    });
  } else if (error.name === "SecurityError") {
    const effectiveDomain = globalThis.location.hostname;
    if (!toAuthenticatorAttachment.isValidDomain(effectiveDomain)) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: `${globalThis.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: error
      });
    } else if (publicKey.rp.id !== effectiveDomain) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: `The RP ID "${publicKey.rp.id}" is invalid for this domain`,
        code: "ERROR_INVALID_RP_ID",
        cause: error
      });
    }
  } else if (error.name === "TypeError") {
    if (publicKey.user.id.byteLength < 1 || publicKey.user.id.byteLength > 64) {
      return new toAuthenticatorAttachment.WebAuthnError({
        message: "User ID was not between 1 and 64 characters",
        code: "ERROR_INVALID_USER_ID_LENGTH",
        cause: error
      });
    }
  } else if (error.name === "UnknownError") {
    return new toAuthenticatorAttachment.WebAuthnError({
      message: "The authenticator was unable to process the specified options, or could not create a new credential",
      code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
      cause: error
    });
  }
  return error;
}
async function startRegistration(options) {
  var _a;
  if (!options.optionsJSON && options.challenge) {
    console.warn("startRegistration() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.");
    options = { optionsJSON: options };
  }
  const { optionsJSON, useAutoRegister = false } = options;
  if (!toAuthenticatorAttachment.browserSupportsWebAuthn()) {
    throw new Error("WebAuthn is not supported in this browser");
  }
  const publicKey = {
    ...optionsJSON,
    challenge: toAuthenticatorAttachment.base64URLStringToBuffer(optionsJSON.challenge),
    user: {
      ...optionsJSON.user,
      id: toAuthenticatorAttachment.base64URLStringToBuffer(optionsJSON.user.id)
    },
    excludeCredentials: (_a = optionsJSON.excludeCredentials) == null ? void 0 : _a.map(toAuthenticatorAttachment.toPublicKeyCredentialDescriptor)
  };
  const createOptions = {};
  if (useAutoRegister) {
    createOptions.mediation = "conditional";
  }
  createOptions.publicKey = publicKey;
  createOptions.signal = toAuthenticatorAttachment.WebAuthnAbortService.createNewAbortSignal();
  let credential;
  try {
    credential = await navigator.credentials.create(createOptions);
  } catch (err) {
    throw identifyRegistrationError({ error: err, options: createOptions });
  }
  if (!credential) {
    throw new Error("Registration was not completed");
  }
  const { id, rawId, response, type } = credential;
  let transports = void 0;
  if (typeof response.getTransports === "function") {
    transports = response.getTransports();
  }
  let responsePublicKeyAlgorithm = void 0;
  if (typeof response.getPublicKeyAlgorithm === "function") {
    try {
      responsePublicKeyAlgorithm = response.getPublicKeyAlgorithm();
    } catch (error) {
      warnOnBrokenImplementation("getPublicKeyAlgorithm()", error);
    }
  }
  let responsePublicKey = void 0;
  if (typeof response.getPublicKey === "function") {
    try {
      const _publicKey = response.getPublicKey();
      if (_publicKey !== null) {
        responsePublicKey = toAuthenticatorAttachment.bufferToBase64URLString(_publicKey);
      }
    } catch (error) {
      warnOnBrokenImplementation("getPublicKey()", error);
    }
  }
  let responseAuthenticatorData;
  if (typeof response.getAuthenticatorData === "function") {
    try {
      responseAuthenticatorData = toAuthenticatorAttachment.bufferToBase64URLString(response.getAuthenticatorData());
    } catch (error) {
      warnOnBrokenImplementation("getAuthenticatorData()", error);
    }
  }
  return {
    id,
    rawId: toAuthenticatorAttachment.bufferToBase64URLString(rawId),
    response: {
      attestationObject: toAuthenticatorAttachment.bufferToBase64URLString(response.attestationObject),
      clientDataJSON: toAuthenticatorAttachment.bufferToBase64URLString(response.clientDataJSON),
      transports,
      publicKeyAlgorithm: responsePublicKeyAlgorithm,
      publicKey: responsePublicKey,
      authenticatorData: responseAuthenticatorData
    },
    type,
    clientExtensionResults: credential.getClientExtensionResults(),
    authenticatorAttachment: toAuthenticatorAttachment.toAuthenticatorAttachment(credential.authenticatorAttachment)
  };
}
function warnOnBrokenImplementation(methodName, cause) {
  console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${methodName}. You should report this error to them.
`, cause);
}
const form$1 = "_form_ttnyb_1";
const form__row$1 = "_form__row_ttnyb_1";
const form__buttons$1 = "_form__buttons_ttnyb_1";
const icon$1 = "_icon_ttnyb_1";
const text$1 = "_text_ttnyb_1";
const list$1 = "_list_ttnyb_1";
const link$1 = "_link_ttnyb_1";
const button$1 = "_button_ttnyb_1";
const style0$1 = {
  form: form$1,
  "form--large": "_form--large_ttnyb_1",
  "form--full": "_form--full_ttnyb_1",
  form__row: form__row$1,
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
  form__buttons: form__buttons$1,
  icon: icon$1,
  text: text$1,
  "text--help": "_text--help_ttnyb_1",
  "text--error": "_text--error_ttnyb_1",
  list: list$1,
  link: link$1,
  button: button$1,
  "block-button": "_block-button_ttnyb_1",
  "block-button__icon": "_block-button__icon_ttnyb_1",
  "block-button__content": "_block-button__content_ttnyb_1",
  "block-button__description": "_block-button__description_ttnyb_1",
  "block-button__chevron": "_block-button__chevron_ttnyb_1"
};
const _sfc_main$1 = {
  components: {
    GeneralButton: server.GeneralButton,
    InputField: inputField.InputField,
    Modal: server.Modal,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    SeedButton: seedButton.SeedButton,
    SeedForm: seedForm.SeedForm,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedFormInput: seedFormInput.SeedFormInput
  },
  computed: {
    apiToken() {
      return this.$store.state.viewData.apiToken;
    }
  },
  methods: {
    closed() {
      this.$store.state.viewData.apiToken = null;
    },
    copyToken() {
      navigator.clipboard.writeText(this.apiToken);
      server.Ke("API 토큰이 복사되었습니다.");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = server.vueExports.resolveComponent("Modal");
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Modal, server.vueExports.mergeProps({ onClosed: $options.closed }, _attrs), {
    default: server.vueExports.withCtx((props, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="modal-block" data-v-4e791876${_scopeId}><div class="modal-title" data-v-4e791876${_scopeId}>API Token 발급</div>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
          method: "post",
          action: "/member/generate_api_token",
          class: [_ctx.$style.form, _ctx.$style["form--full"]]
        }, {
          default: server.vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($options.apiToken) {
                _push3(`<!--[--><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-4e791876${_scopeId2}>`);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                  multiline: "",
                  readonly: "",
                  class: "token-textarea",
                  value: $options.apiToken
                }, null, _parent3, _scopeId2));
                _push3(`</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-4e791876${_scopeId2}><ul class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.list)}" data-v-4e791876${_scopeId2}><li data-v-4e791876${_scopeId2}>발급된 토큰은 이 창을 닫으면 다시 확인할 수 없습니다.</li><li data-v-4e791876${_scopeId2}>토큰은 비밀번호와 같이 취급해주세요.</li></ul></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-4e791876${_scopeId2}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__buttons)}" data-v-4e791876${_scopeId2}>`);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { whenClick: $options.copyToken }, {
                  default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`토큰 복사`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("토큰 복사")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                  class: _ctx.$style.button,
                  whenClick: props.close
                }, {
                  default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`닫기`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("닫기")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div><!--]-->`);
              } else {
                _push3(`<!--[--><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-4e791876${_scopeId2}><label for="passwordInput" data-v-4e791876${_scopeId2}>비밀번호</label>`);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                  type: "password",
                  id: "passwordInput",
                  name: "password"
                }, null, _parent3, _scopeId2));
                _push3(`<p class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.text, _ctx.$style["text--help"]])}" data-v-4e791876${_scopeId2}> 사용자 계정의 비밀번호를 입력하세요. </p></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-4e791876${_scopeId2}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__buttons)}" data-v-4e791876${_scopeId2}>`);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                  class: _ctx.$style.button,
                  whenClick: props.close
                }, {
                  default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`취소`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("취소")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                  class: _ctx.$style.button,
                  type: "submit",
                  theme: "primary"
                }, {
                  default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`발급`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("발급")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div><!--]-->`);
              }
            } else {
              return [
                $options.apiToken ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                  server.vueExports.createVNode("div", {
                    class: _ctx.$style.form__row
                  }, [
                    server.vueExports.createVNode(_component_InputField, {
                      multiline: "",
                      readonly: "",
                      class: "token-textarea",
                      value: $options.apiToken
                    }, null, 8, ["value"])
                  ], 2),
                  server.vueExports.createVNode("div", {
                    class: _ctx.$style.form__row
                  }, [
                    server.vueExports.createVNode("ul", {
                      class: _ctx.$style.list
                    }, [
                      server.vueExports.createVNode("li", null, "발급된 토큰은 이 창을 닫으면 다시 확인할 수 없습니다."),
                      server.vueExports.createVNode("li", null, "토큰은 비밀번호와 같이 취급해주세요.")
                    ], 2)
                  ], 2),
                  server.vueExports.createVNode("div", {
                    class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]]
                  }, [
                    server.vueExports.createVNode("div", {
                      class: _ctx.$style.form__buttons
                    }, [
                      server.vueExports.createVNode(_component_GeneralButton, { whenClick: $options.copyToken }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("토큰 복사")
                        ]),
                        _: 1
                      }, 8, ["whenClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        class: _ctx.$style.button,
                        whenClick: props.close
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("닫기")
                        ]),
                        _: 2
                      }, 1032, ["class", "whenClick"])
                    ], 2)
                  ], 2)
                ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
                  server.vueExports.createVNode("div", {
                    class: _ctx.$style.form__row
                  }, [
                    server.vueExports.createVNode("label", { for: "passwordInput" }, "비밀번호"),
                    server.vueExports.createVNode(_component_InputField, {
                      type: "password",
                      id: "passwordInput",
                      name: "password"
                    }),
                    server.vueExports.createVNode("p", {
                      class: [_ctx.$style.text, _ctx.$style["text--help"]]
                    }, " 사용자 계정의 비밀번호를 입력하세요. ", 2)
                  ], 2),
                  server.vueExports.createVNode("div", {
                    class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]]
                  }, [
                    server.vueExports.createVNode("div", {
                      class: _ctx.$style.form__buttons
                    }, [
                      server.vueExports.createVNode(_component_GeneralButton, {
                        class: _ctx.$style.button,
                        whenClick: props.close
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("취소")
                        ]),
                        _: 2
                      }, 1032, ["class", "whenClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        class: _ctx.$style.button,
                        type: "submit",
                        theme: "primary"
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("발급")
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 2)
                  ], 2)
                ], 64))
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode("div", { class: "modal-block" }, [
            server.vueExports.createVNode("div", { class: "modal-title" }, "API Token 발급"),
            server.vueExports.createVNode(_component_FormErrorAlert),
            server.vueExports.createVNode(_component_SeedForm, {
              method: "post",
              action: "/member/generate_api_token",
              class: [_ctx.$style.form, _ctx.$style["form--full"]]
            }, {
              default: server.vueExports.withCtx(() => [
                $options.apiToken ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                  server.vueExports.createVNode("div", {
                    class: _ctx.$style.form__row
                  }, [
                    server.vueExports.createVNode(_component_InputField, {
                      multiline: "",
                      readonly: "",
                      class: "token-textarea",
                      value: $options.apiToken
                    }, null, 8, ["value"])
                  ], 2),
                  server.vueExports.createVNode("div", {
                    class: _ctx.$style.form__row
                  }, [
                    server.vueExports.createVNode("ul", {
                      class: _ctx.$style.list
                    }, [
                      server.vueExports.createVNode("li", null, "발급된 토큰은 이 창을 닫으면 다시 확인할 수 없습니다."),
                      server.vueExports.createVNode("li", null, "토큰은 비밀번호와 같이 취급해주세요.")
                    ], 2)
                  ], 2),
                  server.vueExports.createVNode("div", {
                    class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]]
                  }, [
                    server.vueExports.createVNode("div", {
                      class: _ctx.$style.form__buttons
                    }, [
                      server.vueExports.createVNode(_component_GeneralButton, { whenClick: $options.copyToken }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("토큰 복사")
                        ]),
                        _: 1
                      }, 8, ["whenClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        class: _ctx.$style.button,
                        whenClick: props.close
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("닫기")
                        ]),
                        _: 2
                      }, 1032, ["class", "whenClick"])
                    ], 2)
                  ], 2)
                ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
                  server.vueExports.createVNode("div", {
                    class: _ctx.$style.form__row
                  }, [
                    server.vueExports.createVNode("label", { for: "passwordInput" }, "비밀번호"),
                    server.vueExports.createVNode(_component_InputField, {
                      type: "password",
                      id: "passwordInput",
                      name: "password"
                    }),
                    server.vueExports.createVNode("p", {
                      class: [_ctx.$style.text, _ctx.$style["text--help"]]
                    }, " 사용자 계정의 비밀번호를 입력하세요. ", 2)
                  ], 2),
                  server.vueExports.createVNode("div", {
                    class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]]
                  }, [
                    server.vueExports.createVNode("div", {
                      class: _ctx.$style.form__buttons
                    }, [
                      server.vueExports.createVNode(_component_GeneralButton, {
                        class: _ctx.$style.button,
                        whenClick: props.close
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("취소")
                        ]),
                        _: 2
                      }, 1032, ["class", "whenClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        class: _ctx.$style.button,
                        type: "submit",
                        theme: "primary"
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("발급")
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 2)
                  ], 2)
                ], 64))
              ]),
              _: 2
            }, 1032, ["class"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/apiTokenModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ApiTokenModal = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules$1], ["__scopeId", "data-v-4e791876"]]);
const form = "_form_q1hni_1";
const form__row = "_form__row_q1hni_1";
const form__buttons = "_form__buttons_q1hni_1";
const icon = "_icon_q1hni_1";
const text = "_text_q1hni_1";
const list = "_list_q1hni_1";
const link = "_link_q1hni_1";
const button = "_button_q1hni_1";
const table = "_table_q1hni_1";
const row = "_row_q1hni_1";
const column = "_column_q1hni_1";
const style0 = {
  form,
  "form--large": "_form--large_q1hni_1",
  "form--full": "_form--full_q1hni_1",
  form__row,
  "form__row--self-center": "_form__row--self-center_q1hni_1",
  "form__row--center": "_form__row--center_q1hni_1",
  "form__row--between": "_form__row--between_q1hni_1",
  "form__row--gap": "_form__row--gap_q1hni_1",
  "form__row--links": "_form__row--links_q1hni_1",
  "form__row--buttons": "_form__row--buttons_q1hni_1",
  "form__row--block-buttons": "_form__row--block-buttons_q1hni_1",
  "form--row-bordered": "_form--row-bordered_q1hni_1",
  "form__row-inner": "_form__row-inner_q1hni_1",
  "form__section-title": "_form__section-title_q1hni_1",
  "form__icon-row": "_form__icon-row_q1hni_1",
  form__buttons,
  icon,
  text,
  "text--help": "_text--help_q1hni_1",
  "text--error": "_text--error_q1hni_1",
  list,
  link,
  button,
  "block-button": "_block-button_q1hni_1",
  "block-button__icon": "_block-button__icon_q1hni_1",
  "block-button__content": "_block-button__content_q1hni_1",
  "block-button__description": "_block-button__description_q1hni_1",
  "block-button__chevron": "_block-button__chevron_q1hni_1",
  table,
  "table--bordered": "_table--bordered_q1hni_1",
  row,
  "row--head": "_row--head_q1hni_1",
  column,
  "column--stack": "_column--stack_q1hni_1",
  "column--button-parent": "_column--button-parent_q1hni_1",
  "column--single": "_column--single_q1hni_1",
  "column--full": "_column--full_q1hni_1"
};
const _sfc_main = {
  mixins: [server.Common],
  components: {
    CheckBox: checkBox.CheckBox,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    InputField: inputField.InputField,
    LocalDate: server.LocalDate,
    GeneralButton: server.GeneralButton,
    SeedForm: seedForm.SeedForm,
    SelectMenu: selectMenu.SelectMenu
  },
  computed: {
    data() {
      return this.$store.state.viewData;
    }
  },
  methods: {
    showTokenModal() {
      this.$vfm.show({ component: ApiTokenModal });
    },
    async addPasskey() {
      const optionsJSON = await this.internalRequest("/member/register_webauthn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.$refs.passkeyName.$el.value
        })
      });
      if (!optionsJSON) return;
      if (optionsJSON.data) return alert(optionsJSON.data);
      let attResp;
      try {
        attResp = await startRegistration({ optionsJSON });
      } catch (e) {
        console.error(e);
        alert(e.toString());
        return;
      }
      await this.internalRequestAndProcess("/member/register_webauthn/challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(attResp)
      });
    },
    async deletePasskey(name) {
      await this.internalRequestAndProcess("/member/delete_webauthn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name
        })
      });
    },
    async getDeveloperPerm() {
      const reason = prompt("요청 사유 입력");
      if (!reason) return;
      await this.internalRequestAndProcess("/member/get_developer_perm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          reason
        }).toString()
      });
    },
    async removeDeveloperPerm() {
      await this.internalRequestAndProcess("/member/remove_developer_perm", {
        method: "POST"
      });
    },
    async removeExternalAccount(provider) {
      await this.internalRequestAndProcess(`/member/login/oauth2/${provider}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SelectMenu = server.vueExports.resolveComponent("SelectMenu");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_CheckBox = server.vueExports.resolveComponent("CheckBox");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({
    method: "post",
    class: [_ctx.$style.form, _ctx.$style["form--full"], _ctx.$style["form--row-bordered"]]
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<div class="mypage-block" data-v-ba95bf5f${_scopeId}><div class="avatar-block" data-v-ba95bf5f${_scopeId}><img${server.serverRenderer_cjs_prodExports.ssrRenderAttr("src", _ctx.session.gravatar_url + "&s=512")} class="avatar-image" data-v-ba95bf5f${_scopeId}><div class="avatar-description" data-v-ba95bf5f${_scopeId}> 사용자 아바타는 <a href="https://gravatar.com" rel="noopener" target="_blank" data-v-ba95bf5f${_scopeId}>Gravatar</a>에서 제공됩니다. </div></div><div class="form-block" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}><label for="usernameInput" data-v-ba95bf5f${_scopeId}>사용자 이름</label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          theme: "link",
          href: "/member/change_name"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`변경`);
            } else {
              return [
                server.vueExports.createTextVNode("변경")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.data.user.name)}</div></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}><label for="emailInput" data-v-ba95bf5f${_scopeId}>Email</label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          theme: "link",
          href: "/member/change_email"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`변경`);
            } else {
              return [
                server.vueExports.createTextVNode("변경")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.data.user.email)}</div></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label for="emailInput" data-v-ba95bf5f${_scopeId}>비밀번호</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          class: _ctx.$style.button,
          href: "/member/change_password"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`변경`);
            } else {
              return [
                server.vueExports.createTextVNode("변경")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label for="permInput" data-v-ba95bf5f${_scopeId}>권한</label><div data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.data.permissions.join(", "))}</div></div>`);
        if ($options.data.verifyEnabled) {
          _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label for="permInput" data-v-ba95bf5f${_scopeId}>모바일 인증</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}>`);
          if ($options.data.permissions.includes("mobile_verified_member")) {
            _push2(`<span class="color-text color-text-green" data-v-ba95bf5f${_scopeId}>`);
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-circle-check" }, null, _parent2, _scopeId));
            _push2(` 인증됨 </span>`);
          } else {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
              class: _ctx.$style.button,
              href: "/member/signup_verify"
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
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          class: _ctx.$style.form__row,
          label: "스킨",
          inputId: "skinSelect"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SelectMenu, {
                id: "skinSelect",
                name: "skin",
                value: $options.data.user.skin
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option value="default" data-v-ba95bf5f${_scopeId3}>기본 스킨</option><!--[-->`);
                    server.serverRenderer_cjs_prodExports.ssrRenderList($options.data.skins, (skin) => {
                      _push4(`<option data-v-ba95bf5f${_scopeId3}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(skin)}</option>`);
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      server.vueExports.createVNode("option", { value: "default" }, "기본 스킨"),
                      (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($options.data.skins, (skin) => {
                        return server.vueExports.openBlock(), server.vueExports.createBlock("option", null, server.vueExports.toDisplayString(skin), 1);
                      }), 256))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  server.vueExports.createVNode(_component_SelectMenu, {
                    id: "skinSelect",
                    name: "skin",
                    value: $options.data.user.skin
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createVNode("option", { value: "default" }, "기본 스킨"),
                      (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($options.data.skins, (skin) => {
                        return server.vueExports.openBlock(), server.vueExports.createBlock("option", null, server.vueExports.toDisplayString(skin), 1);
                      }), 256))
                    ]),
                    _: 1
                  }, 8, ["value"])
                ], 2)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label data-v-ba95bf5f${_scopeId}>일회용 비밀번호 (OTP)</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}>`);
        if ($options.data.hasTotp) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            theme: "danger",
            class: _ctx.$style.button,
            href: "/member/deactivate_otp"
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`비활성화`);
              } else {
                return [
                  server.vueExports.createTextVNode("비활성화")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            class: _ctx.$style.button,
            href: "/member/activate_otp"
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`활성화`);
              } else {
                return [
                  server.vueExports.createTextVNode("활성화")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        }
        _push2(`</div></div>`);
        if ((_a = $options.data.externalProviders) == null ? void 0 : _a.length) {
          _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label data-v-ba95bf5f${_scopeId}>외부 계정 연결</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.table, _ctx.$style["table--bordered"]])}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, _ctx.$style["row--head"], "table-row"])}" data-v-ba95bf5f${_scopeId}><!--[-->`);
          server.serverRenderer_cjs_prodExports.ssrRenderList(["제공자", "이름", "이메일", ""], (text2) => {
            _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(text2)}</div>`);
          });
          _push2(`<!--]--></div><!--[-->`);
          server.serverRenderer_cjs_prodExports.ssrRenderList($options.data.externalProviders, (item) => {
            var _a2, _b2;
            _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, "table-row"])}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.displayName)}</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate((_a2 = $options.data.oauth2Maps[item.name]) == null ? void 0 : _a2.name)}</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate((_b2 = $options.data.oauth2Maps[item.name]) == null ? void 0 : _b2.email)}</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, _ctx.$style["column--button-parent"], "table-column"])}" data-v-ba95bf5f${_scopeId}>`);
            if ($options.data.oauth2Maps[item.name]) {
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                theme: "danger",
                size: "small",
                whenClick: () => $options.removeExternalAccount(item.name)
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`해제`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("해제")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                theme: "primary",
                size: "small",
                href: "/member/login/oauth2/" + item.name
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`등록`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("등록")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
          });
          _push2(`<!--]--></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($options.data.hasTotp) {
          _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label data-v-ba95bf5f${_scopeId}>Passkey</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.table, _ctx.$style["table--bordered"]])}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, _ctx.$style["row--head"], "table-row"])}" data-v-ba95bf5f${_scopeId}><!--[-->`);
          server.serverRenderer_cjs_prodExports.ssrRenderList(["이름", "등록 시각", "마지막 사용 시각", ""], (text2) => {
            _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(text2)}</div>`);
          });
          _push2(`<!--]--></div>`);
          if ($options.data.passkeys.length) {
            _push2(`<!--[-->`);
            server.serverRenderer_cjs_prodExports.ssrRenderList($options.data.passkeys, (passkey) => {
              _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, "table-row"])}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(passkey.name)}</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
                date: passkey.createdAt
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, "table-column"])}" data-v-ba95bf5f${_scopeId}>`);
              if (passkey.lastUsedAt) {
                _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
                  date: passkey.lastUsedAt
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!--[-->Not used<!--]-->`);
              }
              _push2(`</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, _ctx.$style["column--button-parent"], "table-column"])}" data-v-ba95bf5f${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                theme: "danger",
                size: "small",
                whenClick: () => $options.deletePasskey(passkey.name)
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`삭제`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("삭제")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.row, "table-row"])}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.column, _ctx.$style["column--single"], "table-column", "no-passkey"])}" data-v-ba95bf5f${_scopeId}> (등록된 Passkey가 없습니다.) </div></div>`);
          }
          _push2(`</div><div class="new-passkey-block" data-v-ba95bf5f${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
            ref: "passkeyName",
            class: "passkey-name",
            type: "text",
            placeholder: "새 Passkey 이름"
          }, null, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { whenClick: $options.addPasskey }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`추가`);
              } else {
                return [
                  server.vueExports.createTextVNode("추가")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
            name: "usePasswordlessLogin",
            value: "Y",
            checked: $options.data.user.usePasswordlessLogin
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`비밀번호 없이 패스키만 이용해 로그인`);
              } else {
                return [
                  server.vueExports.createTextVNode("비밀번호 없이 패스키만 이용해 로그인")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label data-v-ba95bf5f${_scopeId}>API Token</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          class: _ctx.$style.button,
          whenClick: $options.showTokenModal
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`발급`);
            } else {
              return [
                server.vueExports.createTextVNode("발급")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
        if ($options.data.canWithdraw) {
          _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label data-v-ba95bf5f${_scopeId}>계정</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            class: _ctx.$style.button,
            theme: "danger",
            href: "/member/withdraw"
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`계정 삭제`);
              } else {
                return [
                  server.vueExports.createTextVNode("계정 삭제")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($options.data.permissions.includes("engine_developer")) {
          _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__row)}" data-v-ba95bf5f${_scopeId}><label data-v-ba95bf5f${_scopeId}>엔진 개발자</label><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style["form__row-inner"])}" data-v-ba95bf5f${_scopeId}>`);
          if ($options.data.permissions.includes("developer")) {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
              theme: "danger",
              whenClick: $options.removeDeveloperPerm
            }, {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`개발자 권한 제거`);
                } else {
                  return [
                    server.vueExports.createTextVNode("개발자 권한 제거")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
              theme: "primary",
              whenClick: $options.getDeveloperPerm
            }, {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`개발자 권한 받기`);
                } else {
                  return [
                    server.vueExports.createTextVNode("개발자 권한 받기")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}" data-v-ba95bf5f${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__buttons)}" data-v-ba95bf5f${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          class: _ctx.$style.button,
          theme: "primary",
          type: "submit"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`저장`);
            } else {
              return [
                server.vueExports.createTextVNode("저장")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          server.vueExports.createVNode("div", { class: "mypage-block" }, [
            server.vueExports.createVNode("div", { class: "avatar-block" }, [
              server.vueExports.createVNode("img", {
                src: _ctx.session.gravatar_url + "&s=512",
                class: "avatar-image"
              }, null, 8, ["src"]),
              server.vueExports.createVNode("div", { class: "avatar-description" }, [
                server.vueExports.createTextVNode(" 사용자 아바타는 "),
                server.vueExports.createVNode("a", {
                  href: "https://gravatar.com",
                  rel: "noopener",
                  target: "_blank"
                }, "Gravatar"),
                server.vueExports.createTextVNode("에서 제공됩니다. ")
              ])
            ]),
            server.vueExports.createVNode("div", { class: "form-block" }, [
              server.vueExports.createVNode("div", {
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  server.vueExports.createVNode("label", { for: "usernameInput" }, "사용자 이름"),
                  server.vueExports.createVNode(_component_GeneralButton, {
                    theme: "link",
                    href: "/member/change_name"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("변경")
                    ]),
                    _: 1
                  })
                ], 2),
                server.vueExports.createVNode("div", null, server.vueExports.toDisplayString($options.data.user.name), 1)
              ], 2),
              server.vueExports.createVNode("div", {
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  server.vueExports.createVNode("label", { for: "emailInput" }, "Email"),
                  server.vueExports.createVNode(_component_GeneralButton, {
                    theme: "link",
                    href: "/member/change_email"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("변경")
                    ]),
                    _: 1
                  })
                ], 2),
                server.vueExports.createVNode("div", null, server.vueExports.toDisplayString($options.data.user.email), 1)
              ], 2),
              server.vueExports.createVNode("div", {
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", { for: "emailInput" }, "비밀번호"),
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  server.vueExports.createVNode(_component_GeneralButton, {
                    class: _ctx.$style.button,
                    href: "/member/change_password"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("변경")
                    ]),
                    _: 1
                  }, 8, ["class"])
                ], 2)
              ], 2),
              server.vueExports.createVNode("div", {
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", { for: "permInput" }, "권한"),
                server.vueExports.createVNode("div", null, server.vueExports.toDisplayString($options.data.permissions.join(", ")), 1)
              ], 2),
              $options.data.verifyEnabled ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                key: 0,
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", { for: "permInput" }, "모바일 인증"),
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  $options.data.permissions.includes("mobile_verified_member") ? (server.vueExports.openBlock(), server.vueExports.createBlock("span", {
                    key: 0,
                    class: "color-text color-text-green"
                  }, [
                    server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "fa-circle-check" }),
                    server.vueExports.createTextVNode(" 인증됨 ")
                  ])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 1,
                    class: _ctx.$style.button,
                    href: "/member/signup_verify"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("인증")
                    ]),
                    _: 1
                  }, 8, ["class"]))
                ], 2)
              ], 2)) : server.vueExports.createCommentVNode("", true),
              server.vueExports.createVNode(_component_SeedFormBlock, {
                newStyle: "",
                class: _ctx.$style.form__row,
                label: "스킨",
                inputId: "skinSelect"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode("div", {
                    class: _ctx.$style["form__row-inner"]
                  }, [
                    server.vueExports.createVNode(_component_SelectMenu, {
                      id: "skinSelect",
                      name: "skin",
                      value: $options.data.user.skin
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createVNode("option", { value: "default" }, "기본 스킨"),
                        (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($options.data.skins, (skin) => {
                          return server.vueExports.openBlock(), server.vueExports.createBlock("option", null, server.vueExports.toDisplayString(skin), 1);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ], 2)
                ]),
                _: 1
              }, 8, ["class"]),
              server.vueExports.createVNode("div", {
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", null, "일회용 비밀번호 (OTP)"),
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  $options.data.hasTotp ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 0,
                    theme: "danger",
                    class: _ctx.$style.button,
                    href: "/member/deactivate_otp"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("비활성화")
                    ]),
                    _: 1
                  }, 8, ["class"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 1,
                    class: _ctx.$style.button,
                    href: "/member/activate_otp"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("활성화")
                    ]),
                    _: 1
                  }, 8, ["class"]))
                ], 2)
              ], 2),
              ((_b = $options.data.externalProviders) == null ? void 0 : _b.length) ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                key: 1,
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", null, "외부 계정 연결"),
                server.vueExports.createVNode("div", {
                  class: [_ctx.$style.table, _ctx.$style["table--bordered"]]
                }, [
                  server.vueExports.createVNode("div", {
                    class: [_ctx.$style.row, _ctx.$style["row--head"], "table-row"]
                  }, [
                    (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(["제공자", "이름", "이메일", ""], (text2) => {
                      return server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, server.vueExports.toDisplayString(text2), 3);
                    }), 64))
                  ], 2),
                  (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($options.data.externalProviders, (item) => {
                    var _a2, _b2;
                    return server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                      class: [_ctx.$style.row, "table-row"]
                    }, [
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, server.vueExports.toDisplayString(item.displayName), 3),
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, server.vueExports.toDisplayString((_a2 = $options.data.oauth2Maps[item.name]) == null ? void 0 : _a2.name), 3),
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, server.vueExports.toDisplayString((_b2 = $options.data.oauth2Maps[item.name]) == null ? void 0 : _b2.email), 3),
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, _ctx.$style["column--button-parent"], "table-column"]
                      }, [
                        $options.data.oauth2Maps[item.name] ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                          key: 0,
                          theme: "danger",
                          size: "small",
                          whenClick: () => $options.removeExternalAccount(item.name)
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("해제")
                          ]),
                          _: 2
                        }, 1032, ["whenClick"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                          key: 1,
                          theme: "primary",
                          size: "small",
                          href: "/member/login/oauth2/" + item.name
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("등록")
                          ]),
                          _: 2
                        }, 1032, ["href"]))
                      ], 2)
                    ], 2);
                  }), 256))
                ], 2)
              ], 2)) : server.vueExports.createCommentVNode("", true),
              $options.data.hasTotp ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                key: 2,
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", null, "Passkey"),
                server.vueExports.createVNode("div", {
                  class: [_ctx.$style.table, _ctx.$style["table--bordered"]]
                }, [
                  server.vueExports.createVNode("div", {
                    class: [_ctx.$style.row, _ctx.$style["row--head"], "table-row"]
                  }, [
                    (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(["이름", "등록 시각", "마지막 사용 시각", ""], (text2) => {
                      return server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, server.vueExports.toDisplayString(text2), 3);
                    }), 64))
                  ], 2),
                  $options.data.passkeys.length ? (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, server.vueExports.renderList($options.data.passkeys, (passkey) => {
                    return server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                      class: [_ctx.$style.row, "table-row"]
                    }, [
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, server.vueExports.toDisplayString(passkey.name), 3),
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, [
                        server.vueExports.createVNode(_component_LocalDate, {
                          date: passkey.createdAt
                        }, null, 8, ["date"])
                      ], 2),
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, "table-column"]
                      }, [
                        passkey.lastUsedAt ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_LocalDate, {
                          key: 0,
                          date: passkey.lastUsedAt
                        }, null, 8, ["date"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
                          server.vueExports.createTextVNode("Not used")
                        ], 64))
                      ], 2),
                      server.vueExports.createVNode("div", {
                        class: [_ctx.$style.column, _ctx.$style["column--button-parent"], "table-column"]
                      }, [
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "danger",
                          size: "small",
                          whenClick: () => $options.deletePasskey(passkey.name)
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("삭제")
                          ]),
                          _: 2
                        }, 1032, ["whenClick"])
                      ], 2)
                    ], 2);
                  }), 256)) : (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                    key: 1,
                    class: [_ctx.$style.row, "table-row"]
                  }, [
                    server.vueExports.createVNode("div", {
                      class: [_ctx.$style.column, _ctx.$style["column--single"], "table-column", "no-passkey"]
                    }, " (등록된 Passkey가 없습니다.) ", 2)
                  ], 2))
                ], 2),
                server.vueExports.createVNode("div", { class: "new-passkey-block" }, [
                  server.vueExports.createVNode(_component_InputField, {
                    ref: "passkeyName",
                    class: "passkey-name",
                    type: "text",
                    placeholder: "새 Passkey 이름"
                  }, null, 512),
                  server.vueExports.createVNode(_component_GeneralButton, { whenClick: $options.addPasskey }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("추가")
                    ]),
                    _: 1
                  }, 8, ["whenClick"])
                ]),
                server.vueExports.createVNode(_component_CheckBox, {
                  name: "usePasswordlessLogin",
                  value: "Y",
                  checked: $options.data.user.usePasswordlessLogin
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("비밀번호 없이 패스키만 이용해 로그인")
                  ]),
                  _: 1
                }, 8, ["checked"])
              ], 2)) : server.vueExports.createCommentVNode("", true),
              server.vueExports.createVNode("div", {
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", null, "API Token"),
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  server.vueExports.createVNode(_component_GeneralButton, {
                    class: _ctx.$style.button,
                    whenClick: $options.showTokenModal
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("발급")
                    ]),
                    _: 1
                  }, 8, ["class", "whenClick"])
                ], 2)
              ], 2),
              $options.data.canWithdraw ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                key: 3,
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", null, "계정"),
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  server.vueExports.createVNode(_component_GeneralButton, {
                    class: _ctx.$style.button,
                    theme: "danger",
                    href: "/member/withdraw"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("계정 삭제")
                    ]),
                    _: 1
                  }, 8, ["class"])
                ], 2)
              ], 2)) : server.vueExports.createCommentVNode("", true),
              $options.data.permissions.includes("engine_developer") ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                key: 4,
                class: _ctx.$style.form__row
              }, [
                server.vueExports.createVNode("label", null, "엔진 개발자"),
                server.vueExports.createVNode("div", {
                  class: _ctx.$style["form__row-inner"]
                }, [
                  $options.data.permissions.includes("developer") ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 0,
                    theme: "danger",
                    whenClick: $options.removeDeveloperPerm
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("개발자 권한 제거")
                    ]),
                    _: 1
                  }, 8, ["whenClick"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 1,
                    theme: "primary",
                    whenClick: $options.getDeveloperPerm
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("개발자 권한 받기")
                    ]),
                    _: 1
                  }, 8, ["whenClick"]))
                ], 2)
              ], 2)) : server.vueExports.createCommentVNode("", true)
            ])
          ]),
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
                  server.vueExports.createTextVNode("저장")
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
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/mypage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mypage = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-ba95bf5f"]]);
exports.default = mypage;
