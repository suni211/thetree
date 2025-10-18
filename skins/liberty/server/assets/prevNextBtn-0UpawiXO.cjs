"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  components: {
    GeneralButton: server.GeneralButton
  },
  props: {
    start: {
      type: [String, JSON, null]
    },
    prev: {
      type: [String, JSON, null]
    },
    next: {
      type: [String, JSON, null]
    },
    end: {
      type: [String, JSON, null]
    },
    flex: {
      type: Boolean
    }
  },
  computed: {
    actualPrev() {
      var _a;
      return {
        ...this.prev,
        query: {
          ...this.$route.query,
          ...(_a = this.prev) == null ? void 0 : _a.query,
          from: null,
          cfrom: null
        }
      };
    },
    actualNext() {
      var _a;
      return {
        ...this.next,
        query: {
          ...this.$route.query,
          ...(_a = this.next) == null ? void 0 : _a.query,
          until: null,
          cuntil: null
        }
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    class: ["page-group", {
      "page-flex": $props.flex
    }]
  }, _attrs))} data-v-54b138d4>`);
  if ($props.start !== void 0) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      disabled: !$props.start,
      class: "page-button",
      href: $props.start ?? void 0
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "angles-left" }, null, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "angles-left" })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.prev !== void 0) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      disabled: !$props.prev,
      class: "page-button",
      href: $options.actualPrev ?? void 0
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-left" }, null, _parent2, _scopeId));
          _push2(`<span data-v-54b138d4${_scopeId}>이전</span>`);
        } else {
          return [
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-left" }),
            server.vueExports.createVNode("span", null, "이전")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.next !== void 0) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      disabled: !$props.next,
      class: "page-button",
      href: $options.actualNext ?? void 0
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-54b138d4${_scopeId}>다음</span>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "chevron-right" }, null, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode("span", null, "다음"),
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "chevron-right" })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.end !== void 0) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      disabled: !$props.end,
      class: "page-button",
      href: $props.end ?? void 0
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "angles-right" }, null, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "angles-right" })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/prevNextBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PrevNextBtn = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-54b138d4"]]);
exports.PrevNextBtn = PrevNextBtn;
