"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const ipWarn = require("./ipWarn-BXQoEWdq.cjs");
const server = require("../server.cjs");
require("./showError-CkeGKDwd.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    IpWarn: ipWarn.IpWarn,
    SeedButton: seedButton.SeedButton,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedForm: seedForm.SeedForm
  },
  data() {
    return {
      log: ""
    };
  },
  computed: {
    logLabel() {
      let result = "요약";
      if (this.log)
        result += ` (${this.log.length}/255)`;
      return result;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_IpWarn = server.vueExports.resolveComponent("IpWarn");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({ method: "post" }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "변경할 문서 제목",
          id: "titleInput",
          name: "title"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="text" id="titleInput" name="title" data-v-bbdd7d06${_scopeId2}>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "text",
                  id: "titleInput",
                  name: "title"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: $options.logLabel,
          inputId: "logInput",
          name: "log"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.log)} type="text" id="logInput" name="log" data-v-bbdd7d06${_scopeId2}>`);
            } else {
              return [
                server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $data.log = $event,
                  type: "text",
                  id: "logInput",
                  name: "log"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelText, $data.log]
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<label data-v-bbdd7d06${_scopeId}><input type="checkbox" name="mode" value="swap" data-v-bbdd7d06${_scopeId}> 문서를 서로 맞바꾸기 </label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_IpWarn, null, null, _parent2, _scopeId));
        _push2(`<div class="button-block" data-v-bbdd7d06${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`이동`);
            } else {
              return [
                server.vueExports.createTextVNode("이동")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "변경할 문서 제목",
            id: "titleInput",
            name: "title"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "text",
                id: "titleInput",
                name: "title"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: $options.logLabel,
            inputId: "logInput",
            name: "log"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                "onUpdate:modelValue": ($event) => $data.log = $event,
                type: "text",
                id: "logInput",
                name: "log"
              }, null, 8, ["onUpdate:modelValue"]), [
                [server.vueExports.vModelText, $data.log]
              ])
            ]),
            _: 1
          }, 8, ["label"]),
          server.vueExports.createVNode("label", null, [
            server.vueExports.createVNode("input", {
              type: "checkbox",
              name: "mode",
              value: "swap"
            }),
            server.vueExports.createTextVNode(" 문서를 서로 맞바꾸기 ")
          ]),
          server.vueExports.createVNode(_component_IpWarn),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("이동")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/move.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const move = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bbdd7d06"]]);
exports.default = move;
