"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const heading = require("./heading-DaKgaeE6.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
const _sfc_main$1 = {
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  _push(`<span${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    class: ["checkmark-text", [$props.checked ? "checkmark-checked" : "checkmark-x"]]
  }, _attrs))} data-v-8a02ff39>`);
  if ($props.checked) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-circle-check" }, null, _parent));
  } else {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "circle-xmark" }, null, _parent));
  }
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/checkMarkText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CheckMarkText = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8a02ff39"]]);
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
  provide() {
    return {
      submittingSeedForm: server.vueExports.computed(() => this.submitting)
    };
  },
  components: {
    CheckMarkText,
    Alert: server.Alert,
    SeedForm: seedForm.SeedForm,
    GeneralButton: server.GeneralButton,
    InputField: inputField.InputField,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    Heading: heading.Heading
  },
  data() {
    return {
      submitting: false,
      THETREE_SKIN_NAME: "liberty",
      repoUrl: "",
      skinName: "",
      baseUrl: this.$store.state.config["wiki.canonical_url"],
      recommandedGroupList: [
        "차단된 사용자",
        "편집요청 차단",
        "로그인 허용 차단",
        "경고"
      ]
    };
  },
  watch: {
    repoUrl() {
      this.skinName = this.repoUrl.split(/[-_]/).at(-1);
    }
  },
  computed: {
    baseUrlIsSet() {
      return false;
    },
    changedWikiName() {
      return this.$store.state.config["wiki.site_name"] !== "테스트위키";
    },
    changedFrontPage() {
      return this.$store.state.config["wiki.front_page"] !== "FrontPage";
    }
  },
  methods: {
    async reloadView() {
      await this.$store.state.components.mainView.loadView();
    },
    async internalPost(url, data, andProcess = false) {
      this.submitting = true;
      const options = [url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(data).toString()
      }];
      if (andProcess) await this.internalRequestAndProcess(...options);
      else await this.internalRequest(...options);
      this.submitting = false;
    },
    async installSkin() {
      await this.internalPost("/admin/developer/skin/add", {
        name: this.skinName,
        url: this.repoUrl
      });
      await this.internalPost("/admin/developer/skin/build", {
        name: this.skinName
      }, true);
    },
    setBaseUrlToOrigin() {
      this.baseUrl = location.origin;
    },
    async addAclGroup() {
      for (let name of this.recommandedGroupList) {
        await this.internalPost("/aclgroup/group_add", {
          name
        });
      }
      await this.reloadView();
    },
    async addNsacl() {
      const aclTypes = ["Read", "Edit", "Move", "Delete", "CreateThread", "WriteThreadComment", "EditRequest", "ACL"];
      const addRule = async (namespace, aclType, data = {}) => await this.internalPost(this.doc_action_link({ namespace, title: "dummy" }, "acl"), {
        target: "namespace",
        aclType,
        ...data,
        duration: 0
      });
      await addRule("문서", "Read", {
        conditionType: "Perm",
        permission: "any",
        actionType: "Allow"
      });
      for (let aclType of ["Edit", "CreateThread", "WriteThreadComment"]) {
        await addRule("문서", aclType, {
          conditionType: "ACLGroup",
          conditionContent: "경고",
          actionType: "Deny"
        });
        await addRule("문서", aclType, {
          conditionType: "ACLGroup",
          conditionContent: "차단된 사용자",
          actionType: "Deny"
        });
        await addRule("문서", aclType, {
          conditionType: "Perm",
          permission: "member",
          actionType: "Allow"
        });
        await addRule("문서", aclType, {
          conditionType: "ACLGroup",
          conditionContent: "로그인 허용 차단",
          actionType: "Deny"
        });
        await addRule("문서", aclType, {
          conditionType: "Perm",
          permission: "any",
          actionType: "Allow"
        });
      }
      await addRule("문서", "Move", {
        conditionType: "Perm",
        permission: "member_signup_15days_ago",
        actionType: "Allow"
      });
      await addRule("문서", "Delete", {
        conditionType: "Perm",
        permission: "any",
        actionType: "Allow"
      });
      await addRule("문서", "EditRequest", {
        conditionType: "ACLGroup",
        conditionContent: "경고",
        actionType: "Deny"
      });
      await addRule("문서", "EditRequest", {
        conditionType: "ACLGroup",
        conditionContent: "편집요청 차단",
        actionType: "Deny"
      });
      await addRule("문서", "EditRequest", {
        conditionType: "Perm",
        permission: "member",
        actionType: "Allow"
      });
      await addRule("문서", "EditRequest", {
        conditionType: "ACLGroup",
        conditionContent: "차단된 사용자",
        actionType: "Deny"
      });
      await addRule("문서", "EditRequest", {
        conditionType: "Perm",
        permission: "any",
        actionType: "Allow"
      });
      await addRule("문서", "ACL", {
        conditionType: "Perm",
        permission: "admin",
        actionType: "Allow"
      });
      for (let namespace of this.data.namespaces) {
        for (let aclType of aclTypes) {
          if (namespace === "사용자" && aclType === "Edit") {
            await addRule(namespace, aclType, {
              conditionType: "Perm",
              permission: "match_username_and_document_title",
              actionType: "GotoOtherNS",
              actionContent: "문서"
            });
            await addRule(namespace, aclType, {
              conditionType: "Perm",
              permission: "admin",
              actionType: "GotoOtherNS",
              actionContent: "문서"
            });
          } else {
            const isAdmin = namespace.includes("운영") || namespace.includes("휴지통");
            await addRule(namespace, aclType, {
              conditionType: "Perm",
              permission: isAdmin ? "admin" : "any",
              actionType: "GotoOtherNS",
              actionContent: "문서"
            });
          }
        }
      }
    },
    async removeAllNsacl() {
      await this.internalPost("/admin/initial_setup/remove_all_nsacl", {}, true);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Heading = server.vueExports.resolveComponent("Heading");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_Alert = server.vueExports.resolveComponent("Alert");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_CheckMarkText = server.vueExports.resolveComponent("CheckMarkText");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
    title: "스킨 설치",
    folded: $data.THETREE_SKIN_NAME !== "plain"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form, _ctx.$style["form--full"]])}"${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "설치할 스킨의 Git 레포지토리 URL을 입력하세요.",
          inputId: "skinRepoInput",
          newStyle: ""
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                id: "skinRepoInput",
                modelValue: $data.repoUrl,
                "onUpdate:modelValue": ($event) => $data.repoUrl = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  id: "skinRepoInput",
                  modelValue: $data.repoUrl,
                  "onUpdate:modelValue": ($event) => $data.repoUrl = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "설치할 스킨의 이름을 입력하세요.",
          inputId: "skinNameInput",
          newStyle: ""
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                id: "skinNameInput",
                modelValue: $data.skinName,
                "onUpdate:modelValue": ($event) => $data.skinName = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  id: "skinNameInput",
                  modelValue: $data.skinName,
                  "onUpdate:modelValue": ($event) => $data.skinName = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          theme: "primary",
          type: "button",
          whenClick: $options.installSkin
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`설치`);
            } else {
              return [
                server.vueExports.createTextVNode("설치")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          server.vueExports.createVNode("div", {
            class: [_ctx.$style.form, _ctx.$style["form--full"]]
          }, [
            server.vueExports.createVNode(_component_SeedFormBlock, {
              label: "설치할 스킨의 Git 레포지토리 URL을 입력하세요.",
              inputId: "skinRepoInput",
              newStyle: ""
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_InputField, {
                  id: "skinRepoInput",
                  modelValue: $data.repoUrl,
                  "onUpdate:modelValue": ($event) => $data.repoUrl = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            server.vueExports.createVNode(_component_SeedFormBlock, {
              label: "설치할 스킨의 이름을 입력하세요.",
              inputId: "skinNameInput",
              newStyle: ""
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_InputField, {
                  id: "skinNameInput",
                  modelValue: $data.skinName,
                  "onUpdate:modelValue": ($event) => $data.skinName = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            server.vueExports.createVNode("div", null, [
              server.vueExports.createVNode(_component_GeneralButton, {
                theme: "primary",
                type: "button",
                whenClick: $options.installSkin
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("설치")
                ]),
                _: 1
              }, 8, ["whenClick"])
            ])
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
    title: "base_url 설정",
    folded: $options.baseUrlIsSet
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!$options.baseUrlIsSet) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, { theme: "danger" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`base_url이 현재 접속한 주소와 다릅니다.`);
              } else {
                return [
                  server.vueExports.createTextVNode("base_url이 현재 접속한 주소와 다릅니다.")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
          method: "post",
          action: "/admin/config/configjson",
          class: [_ctx.$style.form, _ctx.$style["form--full"]]
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="hidden" name="config" value="publicConfig.json"${_scopeId2}><input type="hidden" name="key" value="base_url"${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
                label: "base_url",
                inputId: "baseUrlInput",
                newStyle: ""
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                      id: "baseUrlInput",
                      modelValue: $data.baseUrl,
                      "onUpdate:modelValue": ($event) => $data.baseUrl = $event,
                      name: "value"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      server.vueExports.createVNode(_component_InputField, {
                        id: "baseUrlInput",
                        modelValue: $data.baseUrl,
                        "onUpdate:modelValue": ($event) => $data.baseUrl = $event,
                        name: "value"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`변경`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("변경")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                type: "button",
                whenClick: $options.setBaseUrlToOrigin
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`현재 접속 URL 입력`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("현재 접속 URL 입력")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "hidden",
                  name: "config",
                  value: "publicConfig.json"
                }),
                server.vueExports.createVNode("input", {
                  type: "hidden",
                  name: "key",
                  value: "base_url"
                }),
                server.vueExports.createVNode(_component_SeedFormBlock, {
                  label: "base_url",
                  inputId: "baseUrlInput",
                  newStyle: ""
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createVNode(_component_InputField, {
                      id: "baseUrlInput",
                      modelValue: $data.baseUrl,
                      "onUpdate:modelValue": ($event) => $data.baseUrl = $event,
                      name: "value"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode(_component_GeneralButton, {
                    theme: "primary",
                    type: "submit"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("변경")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createVNode(_component_GeneralButton, {
                    type: "button",
                    whenClick: $options.setBaseUrlToOrigin
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("현재 접속 URL 입력")
                    ]),
                    _: 1
                  }, 8, ["whenClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          !$options.baseUrlIsSet ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_Alert, {
            key: 0,
            theme: "danger"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("base_url이 현재 접속한 주소와 다릅니다.")
            ]),
            _: 1
          })) : server.vueExports.createCommentVNode("", true),
          server.vueExports.createVNode(_component_SeedForm, {
            method: "post",
            action: "/admin/config/configjson",
            class: [_ctx.$style.form, _ctx.$style["form--full"]]
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "hidden",
                name: "config",
                value: "publicConfig.json"
              }),
              server.vueExports.createVNode("input", {
                type: "hidden",
                name: "key",
                value: "base_url"
              }),
              server.vueExports.createVNode(_component_SeedFormBlock, {
                label: "base_url",
                inputId: "baseUrlInput",
                newStyle: ""
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode(_component_InputField, {
                    id: "baseUrlInput",
                    modelValue: $data.baseUrl,
                    "onUpdate:modelValue": ($event) => $data.baseUrl = $event,
                    name: "value"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode(_component_GeneralButton, {
                  theme: "primary",
                  type: "submit"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("변경")
                  ]),
                  _: 1
                }),
                server.vueExports.createVNode(_component_GeneralButton, {
                  type: "button",
                  whenClick: $options.setBaseUrlToOrigin
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("현재 접속 URL 입력")
                  ]),
                  _: 1
                }, 8, ["whenClick"])
              ])
            ]),
            _: 1
          }, 8, ["class"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
    title: "권장 ACLGroup 생성",
    folded: _ctx.data.hasAclGroup
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>생성 그룹 목록</p><ul${_scopeId}><!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList($data.recommandedGroupList, (item) => {
          _push2(`<li${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item)}</li>`);
        });
        _push2(`<!--]--></ul>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          theme: "primary",
          whenClick: $options.addAclGroup,
          disabled: _ctx.data.hasAclGroup
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`권장 ACLGroup 생성`);
            } else {
              return [
                server.vueExports.createTextVNode("권장 ACLGroup 생성")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode("p", null, "생성 그룹 목록"),
          server.vueExports.createVNode("ul", null, [
            (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($data.recommandedGroupList, (item) => {
              return server.vueExports.openBlock(), server.vueExports.createBlock("li", null, server.vueExports.toDisplayString(item), 1);
            }), 256))
          ]),
          server.vueExports.createVNode(_component_GeneralButton, {
            theme: "primary",
            whenClick: $options.addAclGroup,
            disabled: _ctx.data.hasAclGroup
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("권장 ACLGroup 생성")
            ]),
            _: 1
          }, 8, ["whenClick", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
    title: "이름공간 ACL 설정",
    folded: _ctx.data.hasNsacl
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.data.namespaces.at(-1) === "삭제된사용자") {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, { theme: "primary" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`추가할 이름공간이 있다면 nsacl 설정 전 `);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/admin/config" }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`config 페이지`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("config 페이지")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`의 serverConfig.json에서 namespaces에 이름공간을 추가해주세요.`);
              } else {
                return [
                  server.vueExports.createTextVNode("추가할 이름공간이 있다면 nsacl 설정 전 "),
                  server.vueExports.createVNode(_component_NuxtLink, { to: "/admin/config" }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("config 페이지")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createTextVNode("의 serverConfig.json에서 namespaces에 이름공간을 추가해주세요.")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<p${_scopeId}>권장 이름공간 ACL 설명</p><ul${_scopeId}><li${_scopeId}>아무나 읽기, 삭제, 토론, 편집 요청 허용</li><li${_scopeId}>차단된 사용자, 경고 보유 시 편집 차단</li><li${_scopeId}>로그인 허용 차단 지원</li><li${_scopeId}>admin에게 ACL 조정 허용</li><li${_scopeId}>사용자 문서는 본인과 관리자만 편집 허용</li><li${_scopeId}>휴지통, 운영 문서는 관리자만 열람 허용</li></ul>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          theme: "primary",
          whenClick: $options.addNsacl,
          disabled: _ctx.data.hasNsacl
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`권장 이름공간 ACL 생성`);
            } else {
              return [
                server.vueExports.createTextVNode("권장 이름공간 ACL 생성")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          theme: "danger",
          whenClick: $options.removeAllNsacl
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`모든 이름공간 ACL 제거`);
            } else {
              return [
                server.vueExports.createTextVNode("모든 이름공간 ACL 제거")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          _ctx.data.namespaces.at(-1) === "삭제된사용자" ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_Alert, {
            key: 0,
            theme: "primary"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("추가할 이름공간이 있다면 nsacl 설정 전 "),
              server.vueExports.createVNode(_component_NuxtLink, { to: "/admin/config" }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("config 페이지")
                ]),
                _: 1
              }),
              server.vueExports.createTextVNode("의 serverConfig.json에서 namespaces에 이름공간을 추가해주세요.")
            ]),
            _: 1
          })) : server.vueExports.createCommentVNode("", true),
          server.vueExports.createVNode("p", null, "권장 이름공간 ACL 설명"),
          server.vueExports.createVNode("ul", null, [
            server.vueExports.createVNode("li", null, "아무나 읽기, 삭제, 토론, 편집 요청 허용"),
            server.vueExports.createVNode("li", null, "차단된 사용자, 경고 보유 시 편집 차단"),
            server.vueExports.createVNode("li", null, "로그인 허용 차단 지원"),
            server.vueExports.createVNode("li", null, "admin에게 ACL 조정 허용"),
            server.vueExports.createVNode("li", null, "사용자 문서는 본인과 관리자만 편집 허용"),
            server.vueExports.createVNode("li", null, "휴지통, 운영 문서는 관리자만 열람 허용")
          ]),
          server.vueExports.createVNode(_component_GeneralButton, {
            theme: "primary",
            whenClick: $options.addNsacl,
            disabled: _ctx.data.hasNsacl
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("권장 이름공간 ACL 생성")
            ]),
            _: 1
          }, 8, ["whenClick", "disabled"]),
          server.vueExports.createVNode(_component_GeneralButton, {
            theme: "danger",
            whenClick: $options.removeAllNsacl
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("모든 이름공간 ACL 제거")
            ]),
            _: 1
          }, 8, ["whenClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
    title: "브랜딩 설정",
    folded: $options.changedWikiName || $options.changedFrontPage
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/admin/config" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`config 페이지`);
            } else {
              return [
                server.vueExports.createTextVNode("config 페이지")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`의 publicConfig.json에서 위키 이름, 색상 등을 설정해 주세요.</p><p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckMarkText, { checked: $options.changedWikiName }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`위키 이름 변경`);
            } else {
              return [
                server.vueExports.createTextVNode("위키 이름 변경")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p><p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckMarkText, { checked: $options.changedFrontPage }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`대문 변경`);
            } else {
              return [
                server.vueExports.createTextVNode("대문 변경")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p>`);
      } else {
        return [
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_NuxtLink, { to: "/admin/config" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("config 페이지")
              ]),
              _: 1
            }),
            server.vueExports.createTextVNode("의 publicConfig.json에서 위키 이름, 색상 등을 설정해 주세요.")
          ]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_CheckMarkText, { checked: $options.changedWikiName }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("위키 이름 변경")
              ]),
              _: 1
            }, 8, ["checked"])
          ]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_CheckMarkText, { checked: $options.changedFrontPage }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("대문 변경")
              ]),
              _: 1
            }, 8, ["checked"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, { title: "권장사항" }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>원활한 위키 운영을 위한 설정 권장사항입니다.</p><p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckMarkText, {
          checked: _ctx.data.useEmailVerification
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`이메일 인증 활성화(devConfig.json)`);
            } else {
              return [
                server.vueExports.createTextVNode("이메일 인증 활성화(devConfig.json)")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p><p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckMarkText, {
          checked: _ctx.data.useCaptcha
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`캡챠 활성화(devConfig.json)`);
            } else {
              return [
                server.vueExports.createTextVNode("캡챠 활성화(devConfig.json)")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p><p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckMarkText, {
          checked: _ctx.data.useSearchEngine
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`검색 엔진 설정(.env)`);
            } else {
              return [
                server.vueExports.createTextVNode("검색 엔진 설정(.env)")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p><p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckMarkText, {
          checked: _ctx.data.useRedis
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Redis 설정(.env)`);
            } else {
              return [
                server.vueExports.createTextVNode("Redis 설정(.env)")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p><p${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckMarkText, {
          checked: _ctx.data.useS3
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`파일 서버 설정(.env)`);
            } else {
              return [
                server.vueExports.createTextVNode("파일 서버 설정(.env)")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p>`);
      } else {
        return [
          server.vueExports.createVNode("p", null, "원활한 위키 운영을 위한 설정 권장사항입니다."),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_CheckMarkText, {
              checked: _ctx.data.useEmailVerification
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("이메일 인증 활성화(devConfig.json)")
              ]),
              _: 1
            }, 8, ["checked"])
          ]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_CheckMarkText, {
              checked: _ctx.data.useCaptcha
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("캡챠 활성화(devConfig.json)")
              ]),
              _: 1
            }, 8, ["checked"])
          ]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_CheckMarkText, {
              checked: _ctx.data.useSearchEngine
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("검색 엔진 설정(.env)")
              ]),
              _: 1
            }, 8, ["checked"])
          ]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_CheckMarkText, {
              checked: _ctx.data.useRedis
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("Redis 설정(.env)")
              ]),
              _: 1
            }, 8, ["checked"])
          ]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_CheckMarkText, {
              checked: _ctx.data.useS3
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("파일 서버 설정(.env)")
              ]),
              _: 1
            }, 8, ["checked"])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/initialSetup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const initialSetup = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);
exports.default = initialSetup;
