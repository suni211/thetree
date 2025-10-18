"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  computed: {
    error() {
      var _a;
      return this.tag && ((_a = this.$store.state.viewData.fieldErrors) == null ? void 0 : _a[this.tag]);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($options.error) {
    _push(`<p${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-61f720a7>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.error.msg)}</p>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/showError.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShowError = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-61f720a7"]]);
exports.ShowError = ShowError;
