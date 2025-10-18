"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const heading = require("./heading-DaKgaeE6.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
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
  mixins: [server.Common],
  components: {
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    Heading: heading.Heading,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    NuxtLink: server.NuxtLink,
    CheckBox: checkBox.CheckBox,
    GeneralButton: server.GeneralButton,
    InputField: inputField.InputField,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedForm: seedForm.SeedForm
  },
  mounted() {
    this.focusQuery();
  },
  watch: {
    $route() {
      this.focusQuery();
    }
  },
  methods: {
    focusQuery() {
      if (!this.data.targetUser)
        this.$refs.queryInput.focus();
    },
    async accountAction(action, danger = true) {
      if (!this.data.targetUser.uuid) return;
      if (danger && !confirm("go?")) return;
      await this.internalRequestAndProcess("/admin/manage_account/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          uuid: this.data.targetUser.uuid,
          action
        }).toString()
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_CheckBox = server.vueExports.resolveComponent("CheckBox");
  const _component_Heading = server.vueExports.resolveComponent("Heading");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    class: _ctx.$style.form
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!_ctx.data.targetUser) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          name: "query",
          label: "query",
          inputId: "queryInput",
          newStyle: ""
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                name: "query",
                id: "queryInput",
                required: "",
                ref: "queryInput"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  name: "query",
                  id: "queryInput",
                  required: "",
                  ref: "queryInput"
                }, null, 512)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          class: _ctx.$style["form__row--buttons"]
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div data-v-8c08c01a${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`검색`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("검색")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode(_component_GeneralButton, {
                    theme: "primary",
                    type: "submit"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("검색")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        if (_ctx.data.searchData) {
          _push2(`<div data-v-8c08c01a${_scopeId}><div data-v-8c08c01a${_scopeId}>전체 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.searchData.total)}개</div>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.searchData.pageProps), null, _parent2, _scopeId));
          _push2(`<ul data-v-8c08c01a${_scopeId}><!--[-->`);
          server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.searchData.items, (item) => {
            _push2(`<li data-v-8c08c01a${_scopeId}>`);
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
              to: "?uuid=" + item.uuid
            }, {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.name)}`);
                } else {
                  return [
                    server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</li>`);
          });
          _push2(`<!--]--></ul>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.searchData.pageProps), null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          !_ctx.data.targetUser ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_FormErrorAlert, { key: 0 })) : server.vueExports.createCommentVNode("", true),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            name: "query",
            label: "query",
            inputId: "queryInput",
            newStyle: ""
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                name: "query",
                id: "queryInput",
                required: "",
                ref: "queryInput"
              }, null, 512)
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            class: _ctx.$style["form__row--buttons"]
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode(_component_GeneralButton, {
                  theme: "primary",
                  type: "submit"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("검색")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["class"]),
          _ctx.data.searchData ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", { key: 1 }, [
            server.vueExports.createVNode("div", null, "전체 " + server.vueExports.toDisplayString(_ctx.data.searchData.total) + "개", 1),
            server.vueExports.createVNode(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.searchData.pageProps), null, 16),
            server.vueExports.createVNode("ul", null, [
              (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.searchData.items, (item) => {
                return server.vueExports.openBlock(), server.vueExports.createBlock("li", {
                  key: item.uuid
                }, [
                  server.vueExports.createVNode(_component_NuxtLink, {
                    to: "?uuid=" + item.uuid
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]);
              }), 128))
            ]),
            server.vueExports.createVNode(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.searchData.pageProps), null, 16)
          ])) : server.vueExports.createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.data.targetUser) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
      method: "post",
      class: _ctx.$style.form
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<input type="hidden" name="uuid"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", _ctx.data.targetUser.uuid)} data-v-8c08c01a${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent2, _scopeId));
          _push2(`<h3 data-v-8c08c01a${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.targetUser.name)}</h3>`);
          if (_ctx.data.verifyEnabled) {
            _push2(`<p class="phone-number-text" data-v-8c08c01a${_scopeId}> 전화번호: `);
            if (_ctx.data.phoneNumber) {
              _push2(`<span data-v-8c08c01a${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.phoneNumber)}</span>`);
            } else if (_ctx.data.targetUser.mobileVerified) {
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                size: "small",
                type: "event",
                onClick: ($event) => $options.accountAction("getPhoneNumber", false)
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`표시`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("표시")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<span data-v-8c08c01a${_scopeId}>없음</span>`);
            }
            _push2(`</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
            name: "name",
            label: "name",
            inputId: "nameInput",
            newStyle: ""
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                  name: "name",
                  id: "nameInput",
                  value: _ctx.data.targetUser.name,
                  required: ""
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_InputField, {
                    name: "name",
                    id: "nameInput",
                    value: _ctx.data.targetUser.name,
                    required: ""
                  }, null, 8, ["value"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
            name: "email",
            label: "email",
            inputId: "emailInput",
            newStyle: ""
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                  name: "email",
                  id: "emailInput",
                  value: _ctx.data.targetUser.email,
                  type: "email",
                  required: ""
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_InputField, {
                    name: "email",
                    id: "emailInput",
                    value: _ctx.data.targetUser.email,
                    type: "email",
                    required: ""
                  }, null, 8, ["value"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { newStyle: "" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
                  name: "useTotp",
                  id: "useTotpInput",
                  checked: _ctx.data.targetUser.useTotp,
                  disabled: !_ctx.data.targetUser.useTotp,
                  value: "Y"
                }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` useTotp `);
                    } else {
                      return [
                        server.vueExports.createTextVNode(" useTotp ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_CheckBox, {
                    name: "useTotp",
                    id: "useTotpInput",
                    checked: _ctx.data.targetUser.useTotp,
                    disabled: !_ctx.data.targetUser.useTotp,
                    value: "Y"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode(" useTotp ")
                    ]),
                    _: 1
                  }, 8, ["checked", "disabled"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { newStyle: "" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
                  name: "usePasswordlessLogin",
                  id: "usePasswordlessLoginInput",
                  checked: _ctx.data.targetUser.usePasswordlessLogin,
                  value: "Y"
                }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` usePasswordlessLogin `);
                    } else {
                      return [
                        server.vueExports.createTextVNode(" usePasswordlessLogin ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_CheckBox, {
                    name: "usePasswordlessLogin",
                    id: "usePasswordlessLoginInput",
                    checked: _ctx.data.targetUser.usePasswordlessLogin,
                    value: "Y"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode(" usePasswordlessLogin ")
                    ]),
                    _: 1
                  }, 8, ["checked"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
            class: _ctx.$style["form__row--buttons"]
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div data-v-8c08c01a${_scopeId2}>`);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                  theme: "primary",
                  type: "submit"
                }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`적용`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("적용")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  server.vueExports.createVNode("div", null, [
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "primary",
                      type: "submit"
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("적용")
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
            title: "도구",
            folded: ""
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { newStyle: "" }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("resetLastNameChange")
                      }, {
                        default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`이름 변경 기간 제한 해제`);
                          } else {
                            return [
                              server.vueExports.createTextVNode("이름 변경 기간 제한 해제")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("resetLastActivity")
                      }, {
                        default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`탈퇴 미활동 제한 해제`);
                          } else {
                            return [
                              server.vueExports.createTextVNode("탈퇴 미활동 제한 해제")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("resetPasswordLink")
                      }, {
                        default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`비밀번호 재설정 링크 생성`);
                          } else {
                            return [
                              server.vueExports.createTextVNode("비밀번호 재설정 링크 생성")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                        disabled: !_ctx.data.targetUser.mobileVerified,
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("removePhoneNumber")
                      }, {
                        default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`모바일 인증 해제`);
                          } else {
                            return [
                              server.vueExports.createTextVNode("모바일 인증 해제")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("deleteAccount")
                      }, {
                        default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`계정 삭제`);
                          } else {
                            return [
                              server.vueExports.createTextVNode("계정 삭제")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "danger",
                          type: "event",
                          onClick: ($event) => $options.accountAction("resetLastNameChange")
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("이름 변경 기간 제한 해제")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "danger",
                          type: "event",
                          onClick: ($event) => $options.accountAction("resetLastActivity")
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("탈퇴 미활동 제한 해제")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "danger",
                          type: "event",
                          onClick: ($event) => $options.accountAction("resetPasswordLink")
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("비밀번호 재설정 링크 생성")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        server.vueExports.createVNode(_component_GeneralButton, {
                          disabled: !_ctx.data.targetUser.mobileVerified,
                          theme: "danger",
                          type: "event",
                          onClick: ($event) => $options.accountAction("removePhoneNumber")
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("모바일 인증 해제")
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"]),
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "danger",
                          type: "event",
                          onClick: ($event) => $options.accountAction("deleteAccount")
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("계정 삭제")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_SeedFormBlock, { newStyle: "" }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createVNode(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("resetLastNameChange")
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("이름 변경 기간 제한 해제")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("resetLastActivity")
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("탈퇴 미활동 제한 해제")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("resetPasswordLink")
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("비밀번호 재설정 링크 생성")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        disabled: !_ctx.data.targetUser.mobileVerified,
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("removePhoneNumber")
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("모바일 인증 해제")
                        ]),
                        _: 1
                      }, 8, ["disabled", "onClick"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        theme: "danger",
                        type: "event",
                        onClick: ($event) => $options.accountAction("deleteAccount")
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("계정 삭제")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
            server.vueExports.createVNode("input", {
              type: "hidden",
              name: "uuid",
              value: _ctx.data.targetUser.uuid
            }, null, 8, ["value"]),
            server.vueExports.createVNode(_component_FormErrorAlert),
            server.vueExports.createVNode("h3", null, server.vueExports.toDisplayString(_ctx.data.targetUser.name), 1),
            _ctx.data.verifyEnabled ? (server.vueExports.openBlock(), server.vueExports.createBlock("p", {
              key: 0,
              class: "phone-number-text"
            }, [
              server.vueExports.createTextVNode(" 전화번호: "),
              _ctx.data.phoneNumber ? (server.vueExports.openBlock(), server.vueExports.createBlock("span", { key: 0 }, server.vueExports.toDisplayString(_ctx.data.phoneNumber), 1)) : _ctx.data.targetUser.mobileVerified ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                key: 1,
                size: "small",
                type: "event",
                onClick: ($event) => $options.accountAction("getPhoneNumber", false)
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("표시")
                ]),
                _: 1
              }, 8, ["onClick"])) : (server.vueExports.openBlock(), server.vueExports.createBlock("span", { key: 2 }, "없음"))
            ])) : server.vueExports.createCommentVNode("", true),
            server.vueExports.createVNode(_component_SeedFormBlock, {
              name: "name",
              label: "name",
              inputId: "nameInput",
              newStyle: ""
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_InputField, {
                  name: "name",
                  id: "nameInput",
                  value: _ctx.data.targetUser.name,
                  required: ""
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            server.vueExports.createVNode(_component_SeedFormBlock, {
              name: "email",
              label: "email",
              inputId: "emailInput",
              newStyle: ""
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_InputField, {
                  name: "email",
                  id: "emailInput",
                  value: _ctx.data.targetUser.email,
                  type: "email",
                  required: ""
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            server.vueExports.createVNode(_component_SeedFormBlock, { newStyle: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_CheckBox, {
                  name: "useTotp",
                  id: "useTotpInput",
                  checked: _ctx.data.targetUser.useTotp,
                  disabled: !_ctx.data.targetUser.useTotp,
                  value: "Y"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode(" useTotp ")
                  ]),
                  _: 1
                }, 8, ["checked", "disabled"])
              ]),
              _: 1
            }),
            server.vueExports.createVNode(_component_SeedFormBlock, { newStyle: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_CheckBox, {
                  name: "usePasswordlessLogin",
                  id: "usePasswordlessLoginInput",
                  checked: _ctx.data.targetUser.usePasswordlessLogin,
                  value: "Y"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode(" usePasswordlessLogin ")
                  ]),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            }),
            server.vueExports.createVNode(_component_SeedFormBlock, {
              class: _ctx.$style["form__row--buttons"]
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode(_component_GeneralButton, {
                    theme: "primary",
                    type: "submit"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("적용")
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }, 8, ["class"]),
            server.vueExports.createVNode(_component_Heading, {
              title: "도구",
              folded: ""
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_SeedFormBlock, { newStyle: "" }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "danger",
                      type: "event",
                      onClick: ($event) => $options.accountAction("resetLastNameChange")
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("이름 변경 기간 제한 해제")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "danger",
                      type: "event",
                      onClick: ($event) => $options.accountAction("resetLastActivity")
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("탈퇴 미활동 제한 해제")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "danger",
                      type: "event",
                      onClick: ($event) => $options.accountAction("resetPasswordLink")
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("비밀번호 재설정 링크 생성")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    server.vueExports.createVNode(_component_GeneralButton, {
                      disabled: !_ctx.data.targetUser.mobileVerified,
                      theme: "danger",
                      type: "event",
                      onClick: ($event) => $options.accountAction("removePhoneNumber")
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("모바일 인증 해제")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "danger",
                      type: "event",
                      onClick: ($event) => $options.accountAction("deleteAccount")
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("계정 삭제")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/manageAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const manageAccount = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-8c08c01a"]]);
exports.default = manageAccount;
