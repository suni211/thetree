"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedFormInput = require("./seedFormInput-D9aT4LPH.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    SeedForm: seedForm.SeedForm,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedFormInput: seedFormInput.SeedFormInput,
    SeedButton: seedButton.SeedButton
  },
  data() {
    return {
      ...this.$store.state.viewData,
      pledgeInput: ""
    };
  },
  computed: {
    correctLength() {
      let correctLen = 0;
      for (let i in this.pledge) {
        const char1 = this.pledgeInput[i];
        const char2 = this.pledge[i];
        if (char1 !== char2) break;
        correctLen++;
      }
      return correctLen;
    },
    redPledge() {
      return this.pledge.slice(0, this.correctLength);
    },
    normalPledge() {
      return this.pledge.slice(this.correctLength);
    }
  },
  methods: {
    pledgeChange(event) {
      this.pledgeInput = event.target.value;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SeedFormInput = server.vueExports.resolveComponent("SeedFormInput");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, { method: "post" }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
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
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { name: "pledge" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<label for="pledgeInput" data-v-81f50597${_scopeId2}><span class="pledge pledge-correct" data-v-81f50597${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.redPledge)}</span><span class="pledge" data-v-81f50597${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.normalPledge)}</span></label>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                onInput: $options.pledgeChange,
                onPaste: () => {
                },
                type: "text",
                id: "pledgeInput",
                name: "pledge",
                placeholder: _ctx.pledge,
                autocomplete: "off"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode("label", { for: "pledgeInput" }, [
                  server.vueExports.createVNode("span", { class: "pledge pledge-correct" }, server.vueExports.toDisplayString($options.redPledge), 1),
                  server.vueExports.createVNode("span", { class: "pledge" }, server.vueExports.toDisplayString($options.normalPledge), 1)
                ]),
                server.vueExports.createVNode(_component_SeedFormInput, {
                  onInput: $options.pledgeChange,
                  onPaste: server.vueExports.withModifiers(() => {
                  }, ["prevent"]),
                  type: "text",
                  id: "pledgeInput",
                  name: "pledge",
                  placeholder: _ctx.pledge,
                  autocomplete: "off"
                }, null, 8, ["onInput", "onPaste", "placeholder"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p data-v-81f50597${_scopeId}>마지막 활동 후 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.durationToExactString(_ctx.noActivityTime))}이 지나야 삭제할 수 있습니다.</p><p data-v-81f50597${_scopeId}>계정 삭제 버튼을 누르면 모든 데이터가 즉시 삭제되며 복구가 불가능합니다.</p><p data-v-81f50597${_scopeId}> 단, `);
        if (_ctx.blacklistDays) {
          _push2(`<!--[-->${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.blacklistDays)}일동안 <!--]-->`);
        } else {
          _push2(`<!--[--> 영구적으로 <!--]-->`);
        }
        _push2(` 재가입이 불가능하며, 이를 위해서 이메일, 기타 개인식별정보를 계정 삭제 후 `);
        if (_ctx.blacklistDays) {
          _push2(`<!--[-->${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.blacklistDays)}일(영구 차단자는 영구적으로 보관될 수 있음)동안 <!--]-->`);
        } else {
          _push2(`<!--[--> 영구적으로 <!--]-->`);
        }
        _push2(` 원문을 알 수 없는 단방향 해시함수 결과값을 저장합니다. </p><div class="button-block" data-v-81f50597${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { danger: "" }, {
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
        _push2(`</div>`);
      } else {
        return [
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
          server.vueExports.createVNode(_component_SeedFormBlock, { name: "pledge" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("label", { for: "pledgeInput" }, [
                server.vueExports.createVNode("span", { class: "pledge pledge-correct" }, server.vueExports.toDisplayString($options.redPledge), 1),
                server.vueExports.createVNode("span", { class: "pledge" }, server.vueExports.toDisplayString($options.normalPledge), 1)
              ]),
              server.vueExports.createVNode(_component_SeedFormInput, {
                onInput: $options.pledgeChange,
                onPaste: server.vueExports.withModifiers(() => {
                }, ["prevent"]),
                type: "text",
                id: "pledgeInput",
                name: "pledge",
                placeholder: _ctx.pledge,
                autocomplete: "off"
              }, null, 8, ["onInput", "onPaste", "placeholder"])
            ]),
            _: 1
          }),
          server.vueExports.createVNode("p", null, "마지막 활동 후 " + server.vueExports.toDisplayString(_ctx.durationToExactString(_ctx.noActivityTime)) + "이 지나야 삭제할 수 있습니다.", 1),
          server.vueExports.createVNode("p", null, "계정 삭제 버튼을 누르면 모든 데이터가 즉시 삭제되며 복구가 불가능합니다."),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createTextVNode(" 단, "),
            _ctx.blacklistDays ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
              server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.blacklistDays) + "일동안 ", 1)
            ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
              server.vueExports.createTextVNode(" 영구적으로 ")
            ], 64)),
            server.vueExports.createTextVNode(" 재가입이 불가능하며, 이를 위해서 이메일, 기타 개인식별정보를 계정 삭제 후 "),
            _ctx.blacklistDays ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 2 }, [
              server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.blacklistDays) + "일(영구 차단자는 영구적으로 보관될 수 있음)동안 ", 1)
            ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 3 }, [
              server.vueExports.createTextVNode(" 영구적으로 ")
            ], 64)),
            server.vueExports.createTextVNode(" 원문을 알 수 없는 단방향 해시함수 결과값을 저장합니다. ")
          ]),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { danger: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("계정 삭제")
              ]),
              _: 1
            })
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/withdraw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const withdraw = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81f50597"]]);
exports.default = withdraw;
