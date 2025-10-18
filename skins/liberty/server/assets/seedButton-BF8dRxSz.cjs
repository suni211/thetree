"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  inject: {
    submittingSeedForm: {
      default: false
    }
  },
  props: {
    disabled: Boolean,
    large: Boolean,
    green: Boolean,
    submit: Boolean,
    info: Boolean,
    danger: Boolean,
    block: Boolean
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps(_ctx.$attrs, {
    disabled: $props.disabled || $options.submittingSeedForm,
    class: {
      large: _ctx.$props.large,
      green: _ctx.$props.green,
      submit: _ctx.$props.submit,
      info: _ctx.$props.info,
      danger: _ctx.$props.danger,
      block: _ctx.$props.block
    }
  }, _attrs))} data-v-ceda02d5>`);
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/seedButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SeedButton = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ceda02d5"]]);
exports.SeedButton = SeedButton;
