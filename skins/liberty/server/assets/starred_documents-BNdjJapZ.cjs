"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    GeneralButton: server.GeneralButton,
    LocalDate: server.LocalDate,
    NuxtLink: server.NuxtLink
  },
  data() {
    return {
      disableButton: false
    };
  },
  methods: {
    async toggleStar(item) {
      this.disableButton = true;
      const res = await this.internalRequestAndProcess(
        this.doc_action_link(item.document.parsedName, "member/" + (item.removed ? "star" : "unstar"))
      );
      if ((res == null ? void 0 : res.code) === 204) item.removed = !item.removed;
      this.disableButton = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({ class: "list-table" }, _attrs))} data-v-2e8eeca2><div class="table-row table-heading" data-v-2e8eeca2><div class="table-item" data-v-2e8eeca2>문서명</div><div class="table-item" data-v-2e8eeca2>문서 수정 시각</div><div class="table-item" data-v-2e8eeca2></div></div><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.stars, (item) => {
    _push(`<div class="table-row" data-v-2e8eeca2><div class="table-item" data-v-2e8eeca2>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(item.document.parsedName, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item.document.parsedName))}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item.document.parsedName)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="table-item" data-v-2e8eeca2>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: item.rev.createdAt,
      relative: ""
    }, null, _parent));
    _push(`</div><div class="table-item table-buttons" data-v-2e8eeca2>`);
    if (item.removed) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
        class: "toggle-button",
        size: "small",
        theme: "primary",
        title: "추가",
        type: "event",
        onClick: ($event) => $options.toggleStar(item),
        disabled: $data.disableButton
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, {
              class: "button-icon",
              icon: "plus"
            }, null, _parent2, _scopeId));
            _push2(`<span class="button-text" data-v-2e8eeca2${_scopeId}>추가</span>`);
          } else {
            return [
              server.vueExports.createVNode(_component_FontAwesomeIcon, {
                class: "button-icon",
                icon: "plus"
              }),
              server.vueExports.createVNode("span", { class: "button-text" }, "추가")
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
        class: "toggle-button",
        size: "small",
        theme: "danger",
        title: "삭제",
        type: "event",
        onClick: ($event) => $options.toggleStar(item),
        disabled: $data.disableButton
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, {
              class: "button-icon",
              icon: "trash-can"
            }, null, _parent2, _scopeId));
            _push2(`<span class="button-text" data-v-2e8eeca2${_scopeId}>삭제</span>`);
          } else {
            return [
              server.vueExports.createVNode(_component_FontAwesomeIcon, {
                class: "button-icon",
                icon: "trash-can"
              }),
              server.vueExports.createVNode("span", { class: "button-text" }, "삭제")
            ];
          }
        }),
        _: 2
      }, _parent));
    }
    _push(`</div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/starred_documents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const starred_documents = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2e8eeca2"]]);
exports.default = starred_documents;
