"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedFormInput = require("./seedFormInput-D9aT4LPH.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const server = require("../server.cjs");
require("./showError-CkeGKDwd.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    SeedButton: seedButton.SeedButton,
    SeedFormInput: seedFormInput.SeedFormInput,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedForm: seedForm.SeedForm
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SeedFormInput = server.vueExports.resolveComponent("SeedFormInput");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, { method: "post" }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "UUID",
          inputId: "uuidInput",
          name: "uuid"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                type: "text",
                id: "uuidInput",
                name: "uuid"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  type: "text",
                  id: "uuidInput",
                  name: "uuid"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "Duration",
          inputId: "durationInput",
          name: "duration"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                type: "text",
                id: "durationInput",
                name: "duration",
                value: "24h"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  type: "text",
                  id: "durationInput",
                  name: "duration",
                  value: "24h"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "Reason",
          inputId: "reasonInput",
          name: "reason"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                type: "text",
                id: "reasonInput",
                name: "reason"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_SeedFormInput, {
                  type: "text",
                  id: "reasonInput",
                  name: "reason"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { name: "closeEditRequests" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="checkbox" id="close_editrequestsInput" name="closeEditRequests" value="Y" checked data-v-64fc8451${_scopeId2}><label for="close_editrequestsInput" data-v-64fc8451${_scopeId2}>편집 요청 닫기</label>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "checkbox",
                  id: "close_editrequestsInput",
                  name: "closeEditRequests",
                  value: "Y",
                  checked: ""
                }),
                server.vueExports.createVNode("label", { for: "close_editrequestsInput" }, "편집 요청 닫기")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { name: "hideThreadComments" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="checkbox" id="hide_threadInput" name="hideThreadComments" value="Y" checked data-v-64fc8451${_scopeId2}><label for="hide_threadInput" data-v-64fc8451${_scopeId2}>토론 댓글 숨기기</label>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "checkbox",
                  id: "hide_threadInput",
                  name: "hideThreadComments",
                  value: "Y",
                  checked: ""
                }),
                server.vueExports.createVNode("label", { for: "hide_threadInput" }, "토론 댓글 숨기기")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { name: "revertContributions" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="checkbox" id="revert_documentInput" name="revertContributions" value="Y" checked data-v-64fc8451${_scopeId2}><label for="revert_documentInput" data-v-64fc8451${_scopeId2}>편집 되돌리기</label>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "checkbox",
                  id: "revert_documentInput",
                  name: "revertContributions",
                  value: "Y",
                  checked: ""
                }),
                server.vueExports.createVNode("label", { for: "revert_documentInput" }, "편집 되돌리기")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { name: "revertEditRequests" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="checkbox" id="revert_editrequestInput" name="revertEditRequests" value="Y" checked data-v-64fc8451${_scopeId2}><label for="revert_editrequestInput" data-v-64fc8451${_scopeId2}>편집 요청 되돌리기</label>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "checkbox",
                  id: "revert_editrequestInput",
                  name: "revertEditRequests",
                  value: "Y",
                  checked: ""
                }),
                server.vueExports.createVNode("label", { for: "revert_editrequestInput" }, "편집 요청 되돌리기")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        if (_ctx.data.hidelogPerm) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { name: "revertContributions" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input type="checkbox" id="hidelogInput" name="hidelog" value="Y" data-v-64fc8451${_scopeId2}><label for="hidelogInput" data-v-64fc8451${_scopeId2}>hidelog</label>`);
              } else {
                return [
                  server.vueExports.createVNode("input", {
                    type: "checkbox",
                    id: "hidelogInput",
                    name: "hidelog",
                    value: "Y"
                  }),
                  server.vueExports.createVNode("label", { for: "hidelogInput" }, "hidelog")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="button-block" data-v-64fc8451${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`실행`);
            } else {
              return [
                server.vueExports.createTextVNode("실행")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "UUID",
            inputId: "uuidInput",
            name: "uuid"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedFormInput, {
                type: "text",
                id: "uuidInput",
                name: "uuid"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "Duration",
            inputId: "durationInput",
            name: "duration"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedFormInput, {
                type: "text",
                id: "durationInput",
                name: "duration",
                value: "24h"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "Reason",
            inputId: "reasonInput",
            name: "reason"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedFormInput, {
                type: "text",
                id: "reasonInput",
                name: "reason"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, { name: "closeEditRequests" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "checkbox",
                id: "close_editrequestsInput",
                name: "closeEditRequests",
                value: "Y",
                checked: ""
              }),
              server.vueExports.createVNode("label", { for: "close_editrequestsInput" }, "편집 요청 닫기")
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, { name: "hideThreadComments" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "checkbox",
                id: "hide_threadInput",
                name: "hideThreadComments",
                value: "Y",
                checked: ""
              }),
              server.vueExports.createVNode("label", { for: "hide_threadInput" }, "토론 댓글 숨기기")
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, { name: "revertContributions" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "checkbox",
                id: "revert_documentInput",
                name: "revertContributions",
                value: "Y",
                checked: ""
              }),
              server.vueExports.createVNode("label", { for: "revert_documentInput" }, "편집 되돌리기")
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, { name: "revertEditRequests" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "checkbox",
                id: "revert_editrequestInput",
                name: "revertEditRequests",
                value: "Y",
                checked: ""
              }),
              server.vueExports.createVNode("label", { for: "revert_editrequestInput" }, "편집 요청 되돌리기")
            ]),
            _: 1
          }),
          _ctx.data.hidelogPerm ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedFormBlock, {
            key: 0,
            name: "revertContributions"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "checkbox",
                id: "hidelogInput",
                name: "hidelog",
                value: "Y"
              }),
              server.vueExports.createVNode("label", { for: "hidelogInput" }, "hidelog")
            ]),
            _: 1
          })) : server.vueExports.createCommentVNode("", true),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("실행")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.data.result) {
    _push(`<div data-v-64fc8451><p data-v-64fc8451>작업 결과</p><ul data-v-64fc8451><!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.result.resultText, (item) => {
      _push(`<li data-v-64fc8451>${item ?? ""}</li>`);
    });
    _push(`<!--]--></ul>`);
    if (_ctx.data.result.failResultText.length) {
      _push(`<!--[--><p data-v-64fc8451>실패 작업 목록</p><ul style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "color": "red" })}" data-v-64fc8451><!--[-->`);
      server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.result.failResultText, (item) => {
        _push(`<li data-v-64fc8451>${item ?? ""}</li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div data-v-64fc8451>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
      onClick: ($event) => _ctx.data.result = null
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`확인`);
        } else {
          return [
            server.vueExports.createTextVNode("확인")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/batch_revert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const batch_revert = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64fc8451"]]);
exports.default = batch_revert;
