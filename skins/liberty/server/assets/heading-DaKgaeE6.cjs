"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  props: {
    level: {
      type: Number,
      default: 2
    },
    title: {
      type: String,
      required: true
    },
    folded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fold: this.folded
    };
  },
  methods: {
    toggleFold() {
      this.fold = !this.fold;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderVNode(_push, server.vueExports.createVNode(server.vueExports.resolveDynamicComponent("h" + $props.level), {
    onClick: $options.toggleFold,
    class: ["wiki-heading", { "wiki-heading-folded": $data.fold }]
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-2a732578${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.title)}</span>`);
      } else {
        return [
          server.vueExports.createVNode("span", null, server.vueExports.toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }), _parent);
  _push(`<div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle(!$data.fold ? null : { display: "none" })}" class="wiki-heading-content" data-v-2a732578>`);
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/heading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Heading = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a732578"]]);
exports.Heading = Heading;
