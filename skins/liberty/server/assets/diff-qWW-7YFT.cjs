"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  props: {
    title: String,
    diffHtml: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<table${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({ class: "diff-table" }, _attrs))} data-v-71783955>`);
  if ($props.title) {
    _push(`<thead data-v-71783955><tr data-v-71783955><th data-v-71783955></th><th data-v-71783955></th><th class="texttitle" data-v-71783955>${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.title)}</th></tr></thead>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<tbody data-v-71783955>${$props.diffHtml ?? ""}</tbody></table>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/diff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Diff = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-71783955"]]);
exports.Diff = Diff;
