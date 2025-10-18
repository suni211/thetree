"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  components: {
    Alert: server.Alert
  },
  computed: {
    errorAlert() {
      return this.$store.state.viewData.errorAlert;
    }
  },
  watch: {
    errorAlert() {
      this.$store.state.viewData.errorAlertExists = true;
    },
    "$store.state.viewData.errorAlertExists"() {
      this.$store.state.viewData.errorAlertExists = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Alert = server.vueExports.resolveComponent("Alert");
  if ($options.errorAlert) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, server.vueExports.mergeProps({
      error: "",
      class: "error-alert"
    }, _attrs), {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<b data-v-b3caedfd${_scopeId}>[오류!]</b>  <span data-v-b3caedfd${_scopeId}>${$options.errorAlert ?? ""}</span>`);
        } else {
          return [
            server.vueExports.createVNode("b", null, "[오류!]"),
            server.vueExports.createTextVNode("  "),
            server.vueExports.createVNode("span", { innerHTML: $options.errorAlert }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/formErrorAlert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormErrorAlert = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b3caedfd"]]);
exports.FormErrorAlert = FormErrorAlert;
