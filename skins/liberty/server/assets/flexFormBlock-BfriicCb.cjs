"use strict";
const showError = require("./showError-CkeGKDwd.cjs");
const server = require("../server.cjs");
const _sfc_main = {
  components: {
    ShowError: showError.ShowError
  },
  props: {
    inputId: String,
    name: String,
    label: String,
    flexStart: Boolean,
    buttons: Boolean,
    padding: Boolean
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShowError = server.vueExports.resolveComponent("ShowError");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    class: ["form-block", {
      "flex-start": $props.flexStart,
      buttons: $props.buttons,
      padding: $props.padding
    }]
  }, _attrs))} data-v-7df77fa3>`);
  if ($props.label) {
    _push(`<label${server.serverRenderer_cjs_prodExports.ssrRenderAttr("for", $props.inputId)} data-v-7df77fa3>${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.label)}</label>`);
  } else {
    _push(`<!---->`);
  }
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($props.name) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: $props.name }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$slots.buttons) {
    _push(`<div class="buttons-group" data-v-7df77fa3>`);
    server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "buttons", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/flexFormBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FlexFormBlock = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7df77fa3"]]);
exports.FlexFormBlock = FlexFormBlock;
