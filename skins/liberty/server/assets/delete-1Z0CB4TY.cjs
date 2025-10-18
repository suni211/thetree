"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const ipWarn = require("./ipWarn-BXQoEWdq.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    IpWarn: ipWarn.IpWarn,
    SeedButton: seedButton.SeedButton,
    NuxtLink: server.NuxtLink,
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
  },
  methods: {
    beforeSubmit() {
      if (!this.$refs.agreeCheckbox.checked) {
        alert("문서 삭제에 대한 안내를 확인해 주세요.");
        return false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_IpWarn = server.vueExports.resolveComponent("IpWarn");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({
    method: "post",
    beforeSubmit: $options.beforeSubmit
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: $options.logLabel,
          inputId: "logInput",
          name: "log"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.log)} type="text" id="logInput" name="log" data-v-f463481a${_scopeId2}>`);
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
        _push2(`<label data-v-f463481a${_scopeId}><input type="checkbox" name="agree" value="Y" data-v-f463481a${_scopeId}> 문서 이동 및 일부 내용 제거가 아닌 문서 전체를 삭제하기 위한 기능임을 확인합니다. </label><p data-v-f463481a${_scopeId}><b data-v-f463481a${_scopeId}>알림! :</b> 문서의 제목을 변경하려는 경우 `);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.doc_action_link(_ctx.data.document, "move")
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`문서 이동`);
            } else {
              return [
                server.vueExports.createTextVNode("문서 이동")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` 기능을 사용해 주세요. 문서 이동 기능을 사용할 수 없는 경우 토론 기능이나 게시판을 통해 대행 요청을 해주세요. </p>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_IpWarn, null, null, _parent2, _scopeId));
        _push2(`<div class="button-block" data-v-f463481a${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { danger: "" }, {
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
        _push2(`</div>`);
      } else {
        return [
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
              ref: "agreeCheckbox",
              type: "checkbox",
              name: "agree",
              value: "Y"
            }, null, 512),
            server.vueExports.createTextVNode(" 문서 이동 및 일부 내용 제거가 아닌 문서 전체를 삭제하기 위한 기능임을 확인합니다. ")
          ]),
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode("b", null, "알림! :"),
            server.vueExports.createTextVNode(" 문서의 제목을 변경하려는 경우 "),
            server.vueExports.createVNode(_component_NuxtLink, {
              to: _ctx.doc_action_link(_ctx.data.document, "move")
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("문서 이동")
              ]),
              _: 1
            }, 8, ["to"]),
            server.vueExports.createTextVNode(" 기능을 사용해 주세요. 문서 이동 기능을 사용할 수 없는 경우 토론 기능이나 게시판을 통해 대행 요청을 해주세요. ")
          ]),
          server.vueExports.createVNode(_component_IpWarn),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { danger: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("삭제")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/delete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _delete = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f463481a"]]);
exports.default = _delete;
