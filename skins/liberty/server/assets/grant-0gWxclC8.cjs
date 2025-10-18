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
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, null, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, { name: "username" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Username `);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
                name: "username",
                required: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createTextVNode(" Username "),
                server.vueExports.createVNode(_component_SeedFormInput, {
                  name: "username",
                  required: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="button-block" data-v-d99e05e7${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`확인`);
            } else {
              return [
                server.vueExports.createTextVNode("확인")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode(_component_SeedFormBlock, { name: "username" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode(" Username "),
              server.vueExports.createVNode(_component_SeedFormInput, {
                name: "username",
                required: ""
              })
            ]),
            _: 1
          }),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("확인")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.data.targetUser) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, { method: "post" }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<input type="hidden" name="uuid"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", _ctx.data.targetUser.uuid)} data-v-d99e05e7${_scopeId}><h3 data-v-d99e05e7${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.targetUser.name)}</h3><!--[-->`);
          server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.allPermissions, (item) => {
            _push2(`<p data-v-d99e05e7${_scopeId}><label${server.serverRenderer_cjs_prodExports.ssrRenderAttr("for", item + "Input")} class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ "disabled-perm": !_ctx.data.grantablePermissions.includes(item) })}" data-v-d99e05e7${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item)}</label>  <input type="checkbox"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("id", item + "Input")}${server.serverRenderer_cjs_prodExports.ssrRenderAttr("name", item)} value="Y"${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(_ctx.data.targetUser.permissions.includes(item)) ? " checked" : ""}${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!_ctx.data.grantablePermissions.includes(item)) ? " disabled" : ""} data-v-d99e05e7${_scopeId}></p>`);
          });
          _push2(`<!--]--><div class="button-block" data-v-d99e05e7${_scopeId}>`);
          if (_ctx.data.hidelogPerm) {
            _push2(`<label data-v-d99e05e7${_scopeId}> hidelog: <input type="checkbox" name="hidelog" value="Y" data-v-d99e05e7${_scopeId}></label>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`확인`);
              } else {
                return [
                  server.vueExports.createTextVNode("확인")
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
              value: _ctx.data.targetUser.uuid
            }, null, 8, ["value"]),
            server.vueExports.createVNode("h3", null, server.vueExports.toDisplayString(_ctx.data.targetUser.name), 1),
            (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.allPermissions, (item) => {
              return server.vueExports.openBlock(), server.vueExports.createBlock("p", null, [
                server.vueExports.createVNode("label", {
                  for: item + "Input",
                  class: { "disabled-perm": !_ctx.data.grantablePermissions.includes(item) }
                }, server.vueExports.toDisplayString(item), 11, ["for"]),
                server.vueExports.createTextVNode("  "),
                server.vueExports.createVNode("input", {
                  type: "checkbox",
                  id: item + "Input",
                  name: item,
                  value: "Y",
                  checked: _ctx.data.targetUser.permissions.includes(item),
                  disabled: !_ctx.data.grantablePermissions.includes(item)
                }, null, 8, ["id", "name", "checked", "disabled"])
              ]);
            }), 256)),
            server.vueExports.createVNode("div", { class: "button-block" }, [
              _ctx.data.hidelogPerm ? (server.vueExports.openBlock(), server.vueExports.createBlock("label", { key: 0 }, [
                server.vueExports.createTextVNode(" hidelog: "),
                server.vueExports.createVNode("input", {
                  type: "checkbox",
                  name: "hidelog",
                  value: "Y"
                })
              ])) : server.vueExports.createCommentVNode("", true),
              server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("확인")
                ]),
                _: 1
              })
            ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/grant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const grant = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d99e05e7"]]);
exports.default = grant;
