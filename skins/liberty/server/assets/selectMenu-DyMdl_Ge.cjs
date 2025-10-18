"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  inject: {
    submittingSeedForm: {
      default: false
    }
  },
  data() {
    return {
      disable: false
    };
  },
  watch: {
    submittingSeedForm(newValue) {
      if (this.disabled) return;
      this.disable = newValue;
    },
    disable(newValue) {
      if (newValue) this.$refs.input.classList.add("disabled");
      else this.$refs.input.classList.remove("disabled");
      this.$refs.input.disabled = newValue;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<select${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({ ref: "input" }, _attrs))} data-v-c98d523e>`);
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</select>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/selectMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectMenu = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c98d523e"]]);
exports.SelectMenu = SelectMenu;
