"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const showError = require("./showError-CkeGKDwd.cjs");
const durationSelector = require("./durationSelector-DN8uiiun.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const heading = require("./heading-DaKgaeE6.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    Modal: server.Modal,
    Heading: heading.Heading,
    LocalDate: server.LocalDate,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    SeedButton: seedButton.SeedButton,
    DurationSelector: durationSelector.DurationSelector,
    ShowError: showError.ShowError,
    SeedForm: seedForm.SeedForm,
    NuxtLink: server.NuxtLink
  },
  data() {
    return {
      mode: "ip",
      ip: "",
      username: "",
      showCreateModal: false,
      removeModal: {
        show: false,
        uuid: "",
        id: 0
      }
    };
  },
  computed: {
    pageProps() {
      const prevItem = this.data.prevItem;
      const nextItem = this.data.nextItem;
      return {
        prev: prevItem ? { query: { name: this.data.selectedGroup.name, until: prevItem } } : null,
        next: nextItem ? { query: { name: this.data.selectedGroup.name, from: nextItem } } : null
      };
    }
  },
  methods: {
    goConfirm() {
      return confirm("go?");
    },
    openRemoveModal(item) {
      this.removeModal.uuid = item.uuid;
      this.removeModal.id = item.id;
      this.removeModal.show = true;
    },
    closeModal() {
      this.$vfm.hideAll();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_ShowError = server.vueExports.resolveComponent("ShowError");
  const _component_DurationSelector = server.vueExports.resolveComponent("DurationSelector");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_Modal = server.vueExports.resolveComponent("Modal");
  _push(`<!--[--><ul data-v-9a600ebf><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.aclGroups, (item) => {
    _push(`<li data-v-9a600ebf>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: { query: { group: item.name } },
      class: { active: _ctx.data.selectedGroup.uuid === item.uuid }
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.name)}`);
          if (item.managable) {
            _push2(`<button data-v-9a600ebf${_scopeId}>`);
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, {
              class: "gear-icon",
              icon: "gear"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.name), 1),
            item.managable ? (server.vueExports.openBlock(), server.vueExports.createBlock("button", {
              key: 0,
              onClick: server.vueExports.withModifiers(($event) => _ctx.$store.state.components.mainView.routerPush({ path: "/aclgroup/group_manage", query: { name: item.name } }), ["prevent"])
            }, [
              server.vueExports.createVNode(_component_FontAwesomeIcon, {
                class: "gear-icon",
                icon: "gear"
              })
            ], 8, ["onClick"])) : server.vueExports.createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]-->`);
  if (_ctx.data.permissions.aclgroup) {
    _push(`<li data-v-9a600ebf><button data-v-9a600ebf>+</button></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    class: "add-form",
    method: "post",
    action: "/aclgroup"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<input type="hidden" name="group"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", (_a = _ctx.data.selectedGroup) == null ? void 0 : _a.uuid)} data-v-9a600ebf${_scopeId}><div class="form-block" data-v-9a600ebf${_scopeId}><select name="mode" data-v-9a600ebf${_scopeId}><option value="ip" data-v-9a600ebf${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.mode) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.mode, "ip") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.mode, "ip")) ? " selected" : ""}${_scopeId}>아이피</option><option value="username" data-v-9a600ebf${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.mode) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.mode, "username") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.mode, "username")) ? " selected" : ""}${_scopeId}>사용자 이름</option></select>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "mode" }, null, _parent2, _scopeId));
        if ($data.mode === "ip") {
          _push2(`<input type="text" name="ip"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.ip)} placeholder="CIDR" data-v-9a600ebf${_scopeId}>`);
        } else {
          _push2(`<input type="text" name="username"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.username)} placeholder="사용자 이름" data-v-9a600ebf${_scopeId}>`);
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: $data.mode }, null, _parent2, _scopeId));
        _push2(`</div><div class="form-block" data-v-9a600ebf${_scopeId}><label for="noteInput" data-v-9a600ebf${_scopeId}>메모 :</label><input type="text" id="noteInput" name="note" data-v-9a600ebf${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "note" }, null, _parent2, _scopeId));
        _push2(`</div><div class="form-block" data-v-9a600ebf${_scopeId}><label data-v-9a600ebf${_scopeId}>기간 :</label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DurationSelector, { name: "duration" }, null, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "duration" }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.data.permissions.hidelog) {
          _push2(`<div class="form-block" data-v-9a600ebf${_scopeId}><label for="hidelogInput" data-v-9a600ebf${_scopeId}>hidelog :</label><input type="checkbox" id="hidelogInput" name="hidelog" value="Y" data-v-9a600ebf${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "hidelog" }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
          disabled: !_ctx.data.addable,
          submit: ""
        }, {
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
      } else {
        return [
          server.vueExports.createVNode("input", {
            type: "hidden",
            name: "group",
            value: (_b = _ctx.data.selectedGroup) == null ? void 0 : _b.uuid
          }, null, 8, ["value"]),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.withDirectives(server.vueExports.createVNode("select", {
              name: "mode",
              "onUpdate:modelValue": ($event) => $data.mode = $event
            }, [
              server.vueExports.createVNode("option", { value: "ip" }, "아이피"),
              server.vueExports.createVNode("option", { value: "username" }, "사용자 이름")
            ], 8, ["onUpdate:modelValue"]), [
              [server.vueExports.vModelSelect, $data.mode]
            ]),
            server.vueExports.createVNode(_component_ShowError, { tag: "mode" }),
            $data.mode === "ip" ? server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock("input", {
              key: 0,
              type: "text",
              name: "ip",
              "onUpdate:modelValue": ($event) => $data.ip = $event,
              placeholder: "CIDR"
            }, null, 8, ["onUpdate:modelValue"])), [
              [server.vueExports.vModelText, $data.ip]
            ]) : server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock("input", {
              key: 1,
              type: "text",
              name: "username",
              "onUpdate:modelValue": ($event) => $data.username = $event,
              placeholder: "사용자 이름"
            }, null, 8, ["onUpdate:modelValue"])), [
              [server.vueExports.vModelText, $data.username]
            ]),
            server.vueExports.createVNode(_component_ShowError, { tag: $data.mode }, null, 8, ["tag"])
          ]),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.createVNode("label", { for: "noteInput" }, "메모 :"),
            server.vueExports.createVNode("input", {
              type: "text",
              id: "noteInput",
              name: "note"
            }),
            server.vueExports.createVNode(_component_ShowError, { tag: "note" })
          ]),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.createVNode("label", null, "기간 :"),
            server.vueExports.createVNode(_component_DurationSelector, { name: "duration" }),
            server.vueExports.createVNode(_component_ShowError, { tag: "duration" })
          ]),
          _ctx.data.permissions.hidelog ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
            key: 0,
            class: "form-block"
          }, [
            server.vueExports.createVNode("label", { for: "hidelogInput" }, "hidelog :"),
            server.vueExports.createVNode("input", {
              type: "checkbox",
              id: "hidelogInput",
              name: "hidelog",
              value: "Y"
            }),
            server.vueExports.createVNode(_component_ShowError, { tag: "hidelog" })
          ])) : server.vueExports.createCommentVNode("", true),
          server.vueExports.createVNode(_component_SeedButton, {
            disabled: !_ctx.data.addable,
            submit: ""
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("추가")
            ]),
            _: 1
          }, 8, ["disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.data.selectedGroup) {
    _push(`<!--[-->`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, { class: "id-input-form" }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b;
        if (_push2) {
          _push2(`<div class="form-block" data-v-9a600ebf${_scopeId}><input type="hidden" name="group"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", (_a = _ctx.data.selectedGroup) == null ? void 0 : _a.name)} data-v-9a600ebf${_scopeId}><input type="text" name="from" placeholder="ID" data-v-9a600ebf${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Go`);
              } else {
                return [
                  server.vueExports.createTextVNode("Go")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            server.vueExports.createVNode("div", { class: "form-block" }, [
              server.vueExports.createVNode("input", {
                type: "hidden",
                name: "group",
                value: (_b = _ctx.data.selectedGroup) == null ? void 0 : _b.name
              }, null, 8, ["value"]),
              server.vueExports.createVNode("input", {
                type: "text",
                name: "from",
                placeholder: "ID"
              }),
              server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("Go")
                ]),
                _: 1
              })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<table data-v-9a600ebf><colgroup data-v-9a600ebf><col style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "150px" })}" data-v-9a600ebf><col style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "150px" })}" data-v-9a600ebf><col data-v-9a600ebf><col style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "200px" })}" data-v-9a600ebf><col style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "160px" })}" data-v-9a600ebf><col style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "60px" })}" data-v-9a600ebf></colgroup><thead data-v-9a600ebf><tr data-v-9a600ebf><th data-v-9a600ebf>ID</th><th data-v-9a600ebf>대상</th><th data-v-9a600ebf>메모</th><th data-v-9a600ebf>생성일</th><th data-v-9a600ebf>만료일</th><th data-v-9a600ebf>작업</th></tr></thead><tbody data-v-9a600ebf><!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.groupItems, (item) => {
      var _a, _b;
      _push(`<tr data-v-9a600ebf><td data-v-9a600ebf>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.id)}</td><td data-v-9a600ebf>${server.serverRenderer_cjs_prodExports.ssrInterpolate(((_a = item.user) == null ? void 0 : _a.name) || item.ip || ((_b = item.user) == null ? void 0 : _b.uuid))}</td><td data-v-9a600ebf>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.note)}</td><td data-v-9a600ebf>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
        date: item.createdAt
      }, null, _parent));
      _push(`</td><td data-v-9a600ebf>`);
      if (item.expiresAt) {
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
          date: item.expiresAt
        }, null, _parent));
      } else {
        _push(`<!--[-->영구<!--]-->`);
      }
      _push(`</td><td data-v-9a600ebf>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
        disabled: !_ctx.data.removable,
        danger: "",
        onClick: ($event) => $options.openRemoveModal(item)
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`삭제`);
          } else {
            return [
              server.vueExports.createTextVNode("삭제")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</td></tr>`);
    });
    _push(`<!--]--></tbody></table>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Modal, {
    modelValue: $data.showCreateModal,
    "onUpdate:modelValue": ($event) => $data.showCreateModal = $event,
    class: "aclgroup-modal"
  }, {
    default: server.vueExports.withCtx((props, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
          beforeSubmit: $options.goConfirm,
          afterSubmit: $options.closeModal,
          method: "post",
          action: "/aclgroup/group_add"
        }, {
          default: server.vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h4 data-v-9a600ebf${_scopeId2}>ACL그룹 생성</h4><div data-v-9a600ebf${_scopeId2}><p data-v-9a600ebf${_scopeId2}>그룹 이름:</p><input type="text" name="name" data-v-9a600ebf${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "name" }, null, _parent3, _scopeId2));
              _push3(`</div><div class="button-block" data-v-9a600ebf${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                large: "",
                submit: ""
              }, {
                default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`생성`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("생성")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                large: "",
                type: "button",
                onClick: props.close
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
              _push3(`</div>`);
            } else {
              return [
                server.vueExports.createVNode("h4", null, "ACL그룹 생성"),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "그룹 이름:"),
                  server.vueExports.createVNode("input", {
                    type: "text",
                    name: "name"
                  }),
                  server.vueExports.createVNode(_component_ShowError, { tag: "name" })
                ]),
                server.vueExports.createVNode("div", { class: "button-block" }, [
                  server.vueExports.createVNode(_component_SeedButton, {
                    large: "",
                    submit: ""
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("생성")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createVNode(_component_SeedButton, {
                    large: "",
                    type: "button",
                    onClick: props.close
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("취소")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode(_component_SeedForm, {
            beforeSubmit: $options.goConfirm,
            afterSubmit: $options.closeModal,
            method: "post",
            action: "/aclgroup/group_add"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("h4", null, "ACL그룹 생성"),
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode("p", null, "그룹 이름:"),
                server.vueExports.createVNode("input", {
                  type: "text",
                  name: "name"
                }),
                server.vueExports.createVNode(_component_ShowError, { tag: "name" })
              ]),
              server.vueExports.createVNode("div", { class: "button-block" }, [
                server.vueExports.createVNode(_component_SeedButton, {
                  large: "",
                  submit: ""
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("생성")
                  ]),
                  _: 1
                }),
                server.vueExports.createVNode(_component_SeedButton, {
                  large: "",
                  type: "button",
                  onClick: props.close
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("취소")
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]),
            _: 2
          }, 1032, ["beforeSubmit", "afterSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Modal, {
    modelValue: $data.removeModal.show,
    "onUpdate:modelValue": ($event) => $data.removeModal.show = $event,
    class: "aclgroup-modal"
  }, {
    default: server.vueExports.withCtx((props, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
          afterSubmit: $options.closeModal,
          method: "post",
          action: "/aclgroup/remove"
        }, {
          default: server.vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
            var _a, _b;
            if (_push3) {
              _push3(`<input type="hidden" name="uuid"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.removeModal.uuid)} data-v-9a600ebf${_scopeId2}><input type="hidden" name="group"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", (_a = _ctx.data.selectedGroup) == null ? void 0 : _a.uuid)} data-v-9a600ebf${_scopeId2}><h4 data-v-9a600ebf${_scopeId2}>ACL 요소 제거</h4><div data-v-9a600ebf${_scopeId2}><p data-v-9a600ebf${_scopeId2}>ID:</p><span data-v-9a600ebf${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($data.removeModal.id)}</span></div><div data-v-9a600ebf${_scopeId2}><p data-v-9a600ebf${_scopeId2}>메모:</p><input type="text" name="note" data-v-9a600ebf${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "note" }, null, _parent3, _scopeId2));
              _push3(`</div>`);
              if (_ctx.data.permissions.hidelog) {
                _push3(`<div class="form-block" data-v-9a600ebf${_scopeId2}><p data-v-9a600ebf${_scopeId2}>hidelog:</p><input type="checkbox" name="hidelog" value="Y" data-v-9a600ebf${_scopeId2}></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="button-block" data-v-9a600ebf${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                large: "",
                submit: ""
              }, {
                default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`삭제`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("삭제")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                large: "",
                type: "button",
                onClick: props.close
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
              _push3(`</div>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "hidden",
                  name: "uuid",
                  value: $data.removeModal.uuid
                }, null, 8, ["value"]),
                server.vueExports.createVNode("input", {
                  type: "hidden",
                  name: "group",
                  value: (_b = _ctx.data.selectedGroup) == null ? void 0 : _b.uuid
                }, null, 8, ["value"]),
                server.vueExports.createVNode("h4", null, "ACL 요소 제거"),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "ID:"),
                  server.vueExports.createVNode("span", null, server.vueExports.toDisplayString($data.removeModal.id), 1)
                ]),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "메모:"),
                  server.vueExports.createVNode("input", {
                    type: "text",
                    name: "note"
                  }),
                  server.vueExports.createVNode(_component_ShowError, { tag: "note" })
                ]),
                _ctx.data.permissions.hidelog ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                  key: 0,
                  class: "form-block"
                }, [
                  server.vueExports.createVNode("p", null, "hidelog:"),
                  server.vueExports.createVNode("input", {
                    type: "checkbox",
                    name: "hidelog",
                    value: "Y"
                  })
                ])) : server.vueExports.createCommentVNode("", true),
                server.vueExports.createVNode("div", { class: "button-block" }, [
                  server.vueExports.createVNode(_component_SeedButton, {
                    large: "",
                    submit: ""
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("삭제")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createVNode(_component_SeedButton, {
                    large: "",
                    type: "button",
                    onClick: props.close
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("취소")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode(_component_SeedForm, {
            afterSubmit: $options.closeModal,
            method: "post",
            action: "/aclgroup/remove"
          }, {
            default: server.vueExports.withCtx(() => {
              var _a;
              return [
                server.vueExports.createVNode("input", {
                  type: "hidden",
                  name: "uuid",
                  value: $data.removeModal.uuid
                }, null, 8, ["value"]),
                server.vueExports.createVNode("input", {
                  type: "hidden",
                  name: "group",
                  value: (_a = _ctx.data.selectedGroup) == null ? void 0 : _a.uuid
                }, null, 8, ["value"]),
                server.vueExports.createVNode("h4", null, "ACL 요소 제거"),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "ID:"),
                  server.vueExports.createVNode("span", null, server.vueExports.toDisplayString($data.removeModal.id), 1)
                ]),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "메모:"),
                  server.vueExports.createVNode("input", {
                    type: "text",
                    name: "note"
                  }),
                  server.vueExports.createVNode(_component_ShowError, { tag: "note" })
                ]),
                _ctx.data.permissions.hidelog ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                  key: 0,
                  class: "form-block"
                }, [
                  server.vueExports.createVNode("p", null, "hidelog:"),
                  server.vueExports.createVNode("input", {
                    type: "checkbox",
                    name: "hidelog",
                    value: "Y"
                  })
                ])) : server.vueExports.createCommentVNode("", true),
                server.vueExports.createVNode("div", { class: "button-block" }, [
                  server.vueExports.createVNode(_component_SeedButton, {
                    large: "",
                    submit: ""
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("삭제")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createVNode(_component_SeedButton, {
                    large: "",
                    type: "button",
                    onClick: props.close
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("취소")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ];
            }),
            _: 2
          }, 1032, ["afterSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/aclgroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aclgroup = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9a600ebf"]]);
exports.default = aclgroup;
