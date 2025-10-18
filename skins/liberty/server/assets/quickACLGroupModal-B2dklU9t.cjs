"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const showError = require("./showError-CkeGKDwd.cjs");
const loading = require("./loading-Dr5-cSvp.cjs");
const durationSelector = require("./durationSelector-DN8uiiun.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    Modal: server.Modal,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    SeedButton: seedButton.SeedButton,
    DurationSelector: durationSelector.DurationSelector,
    Loading: loading.Loading,
    ShowError: showError.ShowError,
    SeedForm: seedForm.SeedForm
  },
  data() {
    return {
      groups: [],
      mode: "ip",
      ip: "",
      username: "",
      note: ""
    };
  },
  methods: {
    beforeOpen(e) {
      this.loadACLGroups();
      const params = e.ref.params._rawValue;
      this.mode = params.ip ? "ip" : "username";
      this.ip = params.ip;
      this.username = params.username;
      this.note = params.note;
    },
    async loadACLGroups() {
      const res = await this.internalRequest("/aclgroup/groups", {
        noProgress: true
      });
      this.groups = Object.values(res);
    },
    afterSubmit() {
      this.$vfm.hideAll();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = server.vueExports.resolveComponent("Modal");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_Loading = server.vueExports.resolveComponent("Loading");
  const _component_ShowError = server.vueExports.resolveComponent("ShowError");
  const _component_DurationSelector = server.vueExports.resolveComponent("DurationSelector");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Modal, server.vueExports.mergeProps({ onBeforeOpen: $options.beforeOpen }, _attrs), {
    default: server.vueExports.withCtx((props, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
          afterSubmit: $options.afterSubmit,
          method: "post",
          action: "/aclgroup"
        }, {
          default: server.vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h4 data-v-f297e224${_scopeId2}>빠른 ACLGroup</h4>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent3, _scopeId2));
              _push3(`<div data-v-f297e224${_scopeId2}><p data-v-f297e224${_scopeId2}>그룹:</p>`);
              if ($data.groups.length) {
                _push3(`<select name="group" data-v-f297e224${_scopeId2}><!--[-->`);
                server.serverRenderer_cjs_prodExports.ssrRenderList($data.groups, (item) => {
                  _push3(`<option${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", item.uuid)} data-v-f297e224${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.name)}</option>`);
                });
                _push3(`<!--]--></select>`);
              } else {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Loading, null, null, _parent3, _scopeId2));
              }
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "group" }, null, _parent3, _scopeId2));
              _push3(`</div><div data-v-f297e224${_scopeId2}><p data-v-f297e224${_scopeId2}>대상:</p><select name="mode" data-v-f297e224${_scopeId2}><option value="ip" data-v-f297e224${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.mode) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.mode, "ip") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.mode, "ip")) ? " selected" : ""}${_scopeId2}>아이피</option><option value="username" data-v-f297e224${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.mode) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.mode, "username") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.mode, "username")) ? " selected" : ""}${_scopeId2}>사용자 이름</option></select>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "mode" }, null, _parent3, _scopeId2));
              if ($data.mode === "ip") {
                _push3(`<input type="text" name="ip"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.ip)} data-v-f297e224${_scopeId2}>`);
              } else {
                _push3(`<input type="text" name="username"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.username)} data-v-f297e224${_scopeId2}>`);
              }
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: $data.mode }, null, _parent3, _scopeId2));
              _push3(`</div><div data-v-f297e224${_scopeId2}><p data-v-f297e224${_scopeId2}>사유:</p><input type="text" name="note"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.note)} data-v-f297e224${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "note" }, null, _parent3, _scopeId2));
              _push3(`</div><div data-v-f297e224${_scopeId2}><p data-v-f297e224${_scopeId2}>차단 기간:</p>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DurationSelector, { name: "duration" }, null, _parent3, _scopeId2));
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "duration" }, null, _parent3, _scopeId2));
              _push3(`</div><div class="button-block" data-v-f297e224${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                type: "submit",
                large: "",
                danger: ""
              }, {
                default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`추가`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("추가")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                type: "button",
                large: "",
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
                server.vueExports.createVNode("h4", null, "빠른 ACLGroup"),
                server.vueExports.createVNode(_component_FormErrorAlert),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "그룹:"),
                  $data.groups.length ? (server.vueExports.openBlock(), server.vueExports.createBlock("select", {
                    key: 0,
                    name: "group"
                  }, [
                    (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($data.groups, (item) => {
                      return server.vueExports.openBlock(), server.vueExports.createBlock("option", {
                        value: item.uuid
                      }, server.vueExports.toDisplayString(item.name), 9, ["value"]);
                    }), 256))
                  ])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_Loading, { key: 1 })),
                  server.vueExports.createVNode(_component_ShowError, { tag: "group" })
                ]),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "대상:"),
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
                    "onUpdate:modelValue": ($event) => $data.ip = $event
                  }, null, 8, ["onUpdate:modelValue"])), [
                    [server.vueExports.vModelText, $data.ip]
                  ]) : server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock("input", {
                    key: 1,
                    type: "text",
                    name: "username",
                    "onUpdate:modelValue": ($event) => $data.username = $event
                  }, null, 8, ["onUpdate:modelValue"])), [
                    [server.vueExports.vModelText, $data.username]
                  ]),
                  server.vueExports.createVNode(_component_ShowError, { tag: $data.mode }, null, 8, ["tag"])
                ]),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "사유:"),
                  server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                    type: "text",
                    name: "note",
                    "onUpdate:modelValue": ($event) => $data.note = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [server.vueExports.vModelText, $data.note]
                  ]),
                  server.vueExports.createVNode(_component_ShowError, { tag: "note" })
                ]),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "차단 기간:"),
                  server.vueExports.createVNode(_component_DurationSelector, { name: "duration" }),
                  server.vueExports.createVNode(_component_ShowError, { tag: "duration" })
                ]),
                server.vueExports.createVNode("div", { class: "button-block" }, [
                  server.vueExports.createVNode(_component_SeedButton, {
                    type: "submit",
                    large: "",
                    danger: ""
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("추가")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createVNode(_component_SeedButton, {
                    type: "button",
                    large: "",
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
            afterSubmit: $options.afterSubmit,
            method: "post",
            action: "/aclgroup"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("h4", null, "빠른 ACLGroup"),
              server.vueExports.createVNode(_component_FormErrorAlert),
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode("p", null, "그룹:"),
                $data.groups.length ? (server.vueExports.openBlock(), server.vueExports.createBlock("select", {
                  key: 0,
                  name: "group"
                }, [
                  (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($data.groups, (item) => {
                    return server.vueExports.openBlock(), server.vueExports.createBlock("option", {
                      value: item.uuid
                    }, server.vueExports.toDisplayString(item.name), 9, ["value"]);
                  }), 256))
                ])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_Loading, { key: 1 })),
                server.vueExports.createVNode(_component_ShowError, { tag: "group" })
              ]),
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode("p", null, "대상:"),
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
                  "onUpdate:modelValue": ($event) => $data.ip = $event
                }, null, 8, ["onUpdate:modelValue"])), [
                  [server.vueExports.vModelText, $data.ip]
                ]) : server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock("input", {
                  key: 1,
                  type: "text",
                  name: "username",
                  "onUpdate:modelValue": ($event) => $data.username = $event
                }, null, 8, ["onUpdate:modelValue"])), [
                  [server.vueExports.vModelText, $data.username]
                ]),
                server.vueExports.createVNode(_component_ShowError, { tag: $data.mode }, null, 8, ["tag"])
              ]),
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode("p", null, "사유:"),
                server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                  type: "text",
                  name: "note",
                  "onUpdate:modelValue": ($event) => $data.note = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelText, $data.note]
                ]),
                server.vueExports.createVNode(_component_ShowError, { tag: "note" })
              ]),
              server.vueExports.createVNode("div", null, [
                server.vueExports.createVNode("p", null, "차단 기간:"),
                server.vueExports.createVNode(_component_DurationSelector, { name: "duration" }),
                server.vueExports.createVNode(_component_ShowError, { tag: "duration" })
              ]),
              server.vueExports.createVNode("div", { class: "button-block" }, [
                server.vueExports.createVNode(_component_SeedButton, {
                  type: "submit",
                  large: "",
                  danger: ""
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("추가")
                  ]),
                  _: 1
                }),
                server.vueExports.createVNode(_component_SeedButton, {
                  type: "button",
                  large: "",
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
          }, 1032, ["afterSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/quickACLGroupModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickACLGroupModal = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f297e224"]]);
exports.default = quickACLGroupModal;
