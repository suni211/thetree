"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  props: {
    count: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    countStr() {
      return this.count > 0 ? "+" + this.count : this.count;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    class: { plus: $props.count > 0, minus: $props.count < 0 }
  }, _attrs))} data-v-47e792d5>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.countStr)}</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/diffCount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DiffCount = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-47e792d5"]]);
exports.DiffCount = DiffCount;
