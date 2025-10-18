"use strict";
const showError = require("./showError-CkeGKDwd.cjs");
const server = require("../server.cjs");
const form = "_form_ttnyb_1";
const form__row = "_form__row_ttnyb_1";
const form__buttons = "_form__buttons_ttnyb_1";
const icon = "_icon_ttnyb_1";
const text = "_text_ttnyb_1";
const list = "_list_ttnyb_1";
const link = "_link_ttnyb_1";
const button = "_button_ttnyb_1";
const style0 = {
  form,
  "form--large": "_form--large_ttnyb_1",
  "form--full": "_form--full_ttnyb_1",
  form__row,
  "form__row--self-center": "_form__row--self-center_ttnyb_1",
  "form__row--center": "_form__row--center_ttnyb_1",
  "form__row--between": "_form__row--between_ttnyb_1",
  "form__row--gap": "_form__row--gap_ttnyb_1",
  "form__row--links": "_form__row--links_ttnyb_1",
  "form__row--buttons": "_form__row--buttons_ttnyb_1",
  "form__row--block-buttons": "_form__row--block-buttons_ttnyb_1",
  "form--row-bordered": "_form--row-bordered_ttnyb_1",
  "form__row-inner": "_form__row-inner_ttnyb_1",
  "form__section-title": "_form__section-title_ttnyb_1",
  "form__icon-row": "_form__icon-row_ttnyb_1",
  form__buttons,
  icon,
  text,
  "text--help": "_text--help_ttnyb_1",
  "text--error": "_text--error_ttnyb_1",
  list,
  link,
  button,
  "block-button": "_block-button_ttnyb_1",
  "block-button__icon": "_block-button__icon_ttnyb_1",
  "block-button__content": "_block-button__content_ttnyb_1",
  "block-button__description": "_block-button__description_ttnyb_1",
  "block-button__chevron": "_block-button__chevron_ttnyb_1"
};
const _sfc_main = {
  components: {
    ShowError: showError.ShowError
  },
  props: {
    inputId: String,
    name: String,
    label: String,
    newStyle: Boolean
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShowError = server.vueExports.resolveComponent("ShowError");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    class: { [_ctx.$style.form__row]: $props.newStyle }
  }, _attrs))} data-v-fb3475e4>`);
  if ($props.label) {
    _push(`<label${server.serverRenderer_cjs_prodExports.ssrRenderAttr("for", $props.inputId)} data-v-fb3475e4>${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.label)}</label>`);
  } else {
    _push(`<!---->`);
  }
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($props.name) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, {
      tag: $props.name,
      class: { [_ctx.$style.text]: $props.newStyle }
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/seedFormBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SeedFormBlock = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-fb3475e4"]]);
exports.SeedFormBlock = SeedFormBlock;
