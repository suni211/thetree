"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const wikiContent = require("./wikiContent-j_kAYLje.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const server = require("../server.cjs");
require("./prevNextBtn-0UpawiXO.cjs");
require("./showError-CkeGKDwd.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: { SeedButton: seedButton.SeedButton, SeedFormBlock: seedFormBlock.SeedFormBlock, WikiContent: wikiContent.WikiContent, SeedForm: seedForm.SeedForm }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_WikiContent = server.vueExports.resolveComponent("WikiContent");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({ method: "post" }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<input type="hidden" name="uuid"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", _ctx.data.uuid)} data-v-035058f3${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiContent, {
          content: _ctx.data.contentHtml
        }, null, _parent2, _scopeId));
        _push2(`<textarea readonly data-v-035058f3${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.content)}</textarea>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "요약",
          inputId: "logInput",
          name: "log"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="text" id="logInput" name="log" data-v-035058f3${_scopeId2}>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  type: "text",
                  id: "logInput",
                  name: "log"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="button-block" data-v-035058f3${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`되돌리기`);
            } else {
              return [
                server.vueExports.createTextVNode("되돌리기")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode("input", {
            type: "hidden",
            name: "uuid",
            value: _ctx.data.uuid
          }, null, 8, ["value"]),
          server.vueExports.createVNode(_component_WikiContent, {
            content: _ctx.data.contentHtml
          }, null, 8, ["content"]),
          server.vueExports.createVNode("textarea", {
            readonly: "",
            value: _ctx.data.content
          }, null, 8, ["value"]),
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "요약",
            inputId: "logInput",
            name: "log"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                type: "text",
                id: "logInput",
                name: "log"
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("되돌리기")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/revert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const revert = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-035058f3"]]);
exports.default = revert;
