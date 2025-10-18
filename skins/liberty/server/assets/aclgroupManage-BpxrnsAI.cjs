"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const selectMenu = require("./selectMenu-DyMdl_Ge.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
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
    GeneralButton: server.GeneralButton,
    CheckBox: checkBox.CheckBox,
    InputField: inputField.InputField,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedForm: seedForm.SeedForm,
    SelectMenu: selectMenu.SelectMenu
  },
  computed: {
    group() {
      return this.data.group;
    }
  },
  methods: {
    async deleteGroup() {
      if (!confirm(`${this.group.name} 그룹을 삭제하겠습니까?`)) return;
      await this.internalRequestAndProcess("/aclgroup/group_remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          uuid: this.group.uuid
        }).toString()
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_SelectMenu = server.vueExports.resolveComponent("SelectMenu");
  const _component_CheckBox = server.vueExports.resolveComponent("CheckBox");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({
    class: _ctx.$style.form,
    method: "post"
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.group.name)}</h3><input type="hidden" name="uuid"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $options.group.uuid)}${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "nameInput",
          label: "name",
          name: "name"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "nameInput",
                name: "name",
                value: $options.group.name
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "nameInput",
                  name: "name",
                  value: $options.group.name
                }, null, 8, ["value"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "withdraw_period_hoursInput",
          label: "withdraw_period_hours",
          name: "withdrawPeriodHours"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "withdraw_period_hoursInput",
                name: "withdrawPeriodHours",
                modelValue: $options.group.withdrawPeriodHours,
                "onUpdate:modelValue": ($event) => $options.group.withdrawPeriodHours = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "withdraw_period_hoursInput",
                  name: "withdrawPeriodHours",
                  modelValue: $options.group.withdrawPeriodHours,
                  "onUpdate:modelValue": ($event) => $options.group.withdrawPeriodHours = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "signup_policyInput",
          label: "signup_policy",
          name: "signupPolicy"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SelectMenu, {
                id: "signup_policyInput",
                name: "signupPolicy",
                value: $options.group.signupPolicy
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option value="0"${_scopeId3}>none</option><option value="1"${_scopeId3}>block</option><option value="2"${_scopeId3}>require_verification</option>`);
                  } else {
                    return [
                      server.vueExports.createVNode("option", { value: "0" }, "none"),
                      server.vueExports.createVNode("option", { value: "1" }, "block"),
                      server.vueExports.createVNode("option", { value: "2" }, "require_verification")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SelectMenu, {
                  id: "signup_policyInput",
                  name: "signupPolicy",
                  value: $options.group.signupPolicy
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createVNode("option", { value: "0" }, "none"),
                    server.vueExports.createVNode("option", { value: "1" }, "block"),
                    server.vueExports.createVNode("option", { value: "2" }, "require_verification")
                  ]),
                  _: 1
                }, 8, ["value"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "max_durationInput",
          label: "max_duration",
          name: "maxDuration"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "max_durationInput",
                name: "maxDuration",
                modelValue: $options.group.maxDuration,
                "onUpdate:modelValue": ($event) => $options.group.maxDuration = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "max_durationInput",
                  name: "maxDuration",
                  modelValue: $options.group.maxDuration,
                  "onUpdate:modelValue": ($event) => $options.group.maxDuration = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "max_duration_ipInput",
          label: "max_duration_ip",
          name: "maxDurationIp"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "max_duration_ipInput",
                name: "maxDurationIp",
                modelValue: $options.group.maxDurationIp,
                "onUpdate:modelValue": ($event) => $options.group.maxDurationIp = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "max_duration_ipInput",
                  name: "maxDurationIp",
                  modelValue: $options.group.maxDurationIp,
                  "onUpdate:modelValue": ($event) => $options.group.maxDurationIp = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "max_duration_accountInput",
          label: "max_duration_account",
          name: "maxDurationAccount"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "max_duration_accountInput",
                name: "maxDurationAccount",
                modelValue: $options.group.maxDurationAccount,
                "onUpdate:modelValue": ($event) => $options.group.maxDurationAccount = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "max_duration_accountInput",
                  name: "maxDurationAccount",
                  modelValue: $options.group.maxDurationAccount,
                  "onUpdate:modelValue": ($event) => $options.group.maxDurationAccount = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "max_ipv4_cidrInput",
          label: "max_ipv4_cidr",
          name: "maxIpv4Cidr"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "max_ipv4_cidrInput",
                name: "maxIpv4Cidr",
                modelValue: $options.group.maxIpv4Cidr,
                "onUpdate:modelValue": ($event) => $options.group.maxIpv4Cidr = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "max_ipv4_cidrInput",
                  name: "maxIpv4Cidr",
                  modelValue: $options.group.maxIpv4Cidr,
                  "onUpdate:modelValue": ($event) => $options.group.maxIpv4Cidr = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "max_ipv6_cidrInput",
          label: "max_ipv6_cidr",
          name: "maxIpv6Cidr"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "max_ipv6_cidrInput",
                name: "maxIpv6Cidr",
                modelValue: $options.group.maxIpv6Cidr,
                "onUpdate:modelValue": ($event) => $options.group.maxIpv6Cidr = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "max_ipv6_cidrInput",
                  name: "maxIpv6Cidr",
                  modelValue: $options.group.maxIpv6Cidr,
                  "onUpdate:modelValue": ($event) => $options.group.maxIpv6Cidr = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "access_flagsInput",
          label: "access_flags",
          name: "accessPerms"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "access_flagsInput",
                name: "accessPerms",
                modelValue: $options.group.accessPerms,
                "onUpdate:modelValue": ($event) => $options.group.accessPerms = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "access_flagsInput",
                  name: "accessPerms",
                  modelValue: $options.group.accessPerms,
                  "onUpdate:modelValue": ($event) => $options.group.accessPerms = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "add_flagsInput",
          label: "add_flags",
          name: "addPerms"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "add_flagsInput",
                name: "addPerms",
                modelValue: $options.group.addPerms,
                "onUpdate:modelValue": ($event) => $options.group.addPerms = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "add_flagsInput",
                  name: "addPerms",
                  modelValue: $options.group.addPerms,
                  "onUpdate:modelValue": ($event) => $options.group.addPerms = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "remove_flagsInput",
          label: "remove_flags",
          name: "removePerms"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "remove_flagsInput",
                name: "removePerms",
                modelValue: $options.group.removePerms,
                "onUpdate:modelValue": ($event) => $options.group.removePerms = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "remove_flagsInput",
                  name: "removePerms",
                  modelValue: $options.group.removePerms,
                  "onUpdate:modelValue": ($event) => $options.group.removePerms = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "managePermsInput",
          label: "manage_flags",
          name: "managePerms"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "managePermsInput",
                name: "managePerms",
                modelValue: $options.group.managePerms,
                "onUpdate:modelValue": ($event) => $options.group.managePerms = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "managePermsInput",
                  name: "managePerms",
                  modelValue: $options.group.managePerms,
                  "onUpdate:modelValue": ($event) => $options.group.managePerms = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "styleInput",
          label: "style",
          name: "userCSS"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "styleInput",
                name: "userCSS",
                modelValue: $options.group.userCSS,
                "onUpdate:modelValue": ($event) => $options.group.userCSS = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "styleInput",
                  name: "userCSS",
                  modelValue: $options.group.userCSS,
                  "onUpdate:modelValue": ($event) => $options.group.userCSS = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "messageInput",
          label: "message",
          name: "aclMessage"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "messageInput",
                name: "aclMessage",
                modelValue: $options.group.aclMessage,
                "onUpdate:modelValue": ($event) => $options.group.aclMessage = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "messageInput",
                  name: "aclMessage",
                  modelValue: $options.group.aclMessage,
                  "onUpdate:modelValue": ($event) => $options.group.aclMessage = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "self_remove_noteInput",
          label: "self_remove_note",
          name: "selfRemoveNote"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "self_remove_noteInput",
                name: "selfRemoveNote",
                modelValue: $options.group.selfRemoveNote,
                "onUpdate:modelValue": ($event) => $options.group.selfRemoveNote = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "self_remove_noteInput",
                  name: "selfRemoveNote",
                  modelValue: $options.group.selfRemoveNote,
                  "onUpdate:modelValue": ($event) => $options.group.selfRemoveNote = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "permissionsInput",
          label: "permissions",
          name: "permissions"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "permissionsInput",
                name: "permissions",
                modelValue: $options.group.permissions,
                "onUpdate:modelValue": ($event) => $options.group.permissions = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "permissionsInput",
                  name: "permissions",
                  modelValue: $options.group.permissions,
                  "onUpdate:modelValue": ($event) => $options.group.permissions = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          newStyle: "",
          inputId: "captchaRateInput",
          label: "captcha_rate",
          name: "captchaRate"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
                type: "text",
                id: "captchaRateInput",
                name: "captchaRate",
                modelValue: $options.group.captchaRate,
                "onUpdate:modelValue": ($event) => $options.group.captchaRate = $event
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_InputField, {
                  type: "text",
                  id: "captchaRateInput",
                  name: "captchaRate",
                  modelValue: $options.group.captchaRate,
                  "onUpdate:modelValue": ($event) => $options.group.captchaRate = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { newStyle: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
                id: "show_user_documentInput",
                name: "forBlock",
                modelValue: $options.group.forBlock,
                "onUpdate:modelValue": ($event) => $options.group.forBlock = $event,
                value: "Y"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`show_user_document`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("show_user_document")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_CheckBox, {
                  id: "show_user_documentInput",
                  name: "forBlock",
                  modelValue: $options.group.forBlock,
                  "onUpdate:modelValue": ($event) => $options.group.forBlock = $event,
                  value: "Y"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("show_user_document")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { newStyle: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
                id: "self_removableInput",
                name: "selfRemovable",
                modelValue: $options.group.selfRemovable,
                "onUpdate:modelValue": ($event) => $options.group.selfRemovable = $event,
                value: "Y"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`self_removable`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("self_removable")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_CheckBox, {
                  id: "self_removableInput",
                  name: "selfRemovable",
                  modelValue: $options.group.selfRemovable,
                  "onUpdate:modelValue": ($event) => $options.group.selfRemovable = $event,
                  value: "Y"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("self_removable")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.$style.form__row, _ctx.$style["form__row--buttons"]])}"${_scopeId}><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass(_ctx.$style.form__buttons)}"${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          theme: "danger",
          type: "button",
          whenClick: $options.deleteGroup
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
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          class: _ctx.$style.button,
          theme: "primary",
          type: "submit"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`수정`);
            } else {
              return [
                server.vueExports.createTextVNode("수정")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          server.vueExports.createVNode("h3", null, server.vueExports.toDisplayString($options.group.name), 1),
          server.vueExports.withDirectives(server.vueExports.createVNode("input", {
            type: "hidden",
            name: "uuid",
            "onUpdate:modelValue": ($event) => $options.group.uuid = $event
          }, null, 8, ["onUpdate:modelValue"]), [
            [server.vueExports.vModelText, $options.group.uuid]
          ]),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "nameInput",
            label: "name",
            name: "name"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "nameInput",
                name: "name",
                value: $options.group.name
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "withdraw_period_hoursInput",
            label: "withdraw_period_hours",
            name: "withdrawPeriodHours"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "withdraw_period_hoursInput",
                name: "withdrawPeriodHours",
                modelValue: $options.group.withdrawPeriodHours,
                "onUpdate:modelValue": ($event) => $options.group.withdrawPeriodHours = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "signup_policyInput",
            label: "signup_policy",
            name: "signupPolicy"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SelectMenu, {
                id: "signup_policyInput",
                name: "signupPolicy",
                value: $options.group.signupPolicy
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode("option", { value: "0" }, "none"),
                  server.vueExports.createVNode("option", { value: "1" }, "block"),
                  server.vueExports.createVNode("option", { value: "2" }, "require_verification")
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "max_durationInput",
            label: "max_duration",
            name: "maxDuration"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "max_durationInput",
                name: "maxDuration",
                modelValue: $options.group.maxDuration,
                "onUpdate:modelValue": ($event) => $options.group.maxDuration = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "max_duration_ipInput",
            label: "max_duration_ip",
            name: "maxDurationIp"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "max_duration_ipInput",
                name: "maxDurationIp",
                modelValue: $options.group.maxDurationIp,
                "onUpdate:modelValue": ($event) => $options.group.maxDurationIp = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "max_duration_accountInput",
            label: "max_duration_account",
            name: "maxDurationAccount"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "max_duration_accountInput",
                name: "maxDurationAccount",
                modelValue: $options.group.maxDurationAccount,
                "onUpdate:modelValue": ($event) => $options.group.maxDurationAccount = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "max_ipv4_cidrInput",
            label: "max_ipv4_cidr",
            name: "maxIpv4Cidr"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "max_ipv4_cidrInput",
                name: "maxIpv4Cidr",
                modelValue: $options.group.maxIpv4Cidr,
                "onUpdate:modelValue": ($event) => $options.group.maxIpv4Cidr = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "max_ipv6_cidrInput",
            label: "max_ipv6_cidr",
            name: "maxIpv6Cidr"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "max_ipv6_cidrInput",
                name: "maxIpv6Cidr",
                modelValue: $options.group.maxIpv6Cidr,
                "onUpdate:modelValue": ($event) => $options.group.maxIpv6Cidr = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "access_flagsInput",
            label: "access_flags",
            name: "accessPerms"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "access_flagsInput",
                name: "accessPerms",
                modelValue: $options.group.accessPerms,
                "onUpdate:modelValue": ($event) => $options.group.accessPerms = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "add_flagsInput",
            label: "add_flags",
            name: "addPerms"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "add_flagsInput",
                name: "addPerms",
                modelValue: $options.group.addPerms,
                "onUpdate:modelValue": ($event) => $options.group.addPerms = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "remove_flagsInput",
            label: "remove_flags",
            name: "removePerms"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "remove_flagsInput",
                name: "removePerms",
                modelValue: $options.group.removePerms,
                "onUpdate:modelValue": ($event) => $options.group.removePerms = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "managePermsInput",
            label: "manage_flags",
            name: "managePerms"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "managePermsInput",
                name: "managePerms",
                modelValue: $options.group.managePerms,
                "onUpdate:modelValue": ($event) => $options.group.managePerms = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "styleInput",
            label: "style",
            name: "userCSS"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "styleInput",
                name: "userCSS",
                modelValue: $options.group.userCSS,
                "onUpdate:modelValue": ($event) => $options.group.userCSS = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "messageInput",
            label: "message",
            name: "aclMessage"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "messageInput",
                name: "aclMessage",
                modelValue: $options.group.aclMessage,
                "onUpdate:modelValue": ($event) => $options.group.aclMessage = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "self_remove_noteInput",
            label: "self_remove_note",
            name: "selfRemoveNote"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "self_remove_noteInput",
                name: "selfRemoveNote",
                modelValue: $options.group.selfRemoveNote,
                "onUpdate:modelValue": ($event) => $options.group.selfRemoveNote = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "permissionsInput",
            label: "permissions",
            name: "permissions"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "permissionsInput",
                name: "permissions",
                modelValue: $options.group.permissions,
                "onUpdate:modelValue": ($event) => $options.group.permissions = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            newStyle: "",
            inputId: "captchaRateInput",
            label: "captcha_rate",
            name: "captchaRate"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_InputField, {
                type: "text",
                id: "captchaRateInput",
                name: "captchaRate",
                modelValue: $options.group.captchaRate,
                "onUpdate:modelValue": ($event) => $options.group.captchaRate = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, { newStyle: "" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_CheckBox, {
                id: "show_user_documentInput",
                name: "forBlock",
                modelValue: $options.group.forBlock,
                "onUpdate:modelValue": ($event) => $options.group.forBlock = $event,
                value: "Y"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("show_user_document")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, { newStyle: "" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_CheckBox, {
                id: "self_removableInput",
                name: "selfRemovable",
                modelValue: $options.group.selfRemovable,
                "onUpdate:modelValue": ($event) => $options.group.selfRemovable = $event,
                value: "Y"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("self_removable")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode("div", {
            class: [_ctx.$style.form__row, _ctx.$style["form__row--buttons"]]
          }, [
            server.vueExports.createVNode("div", {
              class: _ctx.$style.form__buttons
            }, [
              server.vueExports.createVNode(_component_GeneralButton, {
                theme: "danger",
                type: "button",
                whenClick: $options.deleteGroup
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("삭제")
                ]),
                _: 1
              }, 8, ["whenClick"]),
              server.vueExports.createVNode(_component_GeneralButton, {
                class: _ctx.$style.button,
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("수정")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/aclgroupManage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aclgroupManage = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);
exports.default = aclgroupManage;
