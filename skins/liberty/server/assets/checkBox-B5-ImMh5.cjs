"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  inject: {
    submittingSeedForm: {
      default: false
    }
  },
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    checked: Boolean,
    whenChange: Function
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  emits: ["update:modelValue"],
  created() {
    if (this.checked) this.value = true;
  },
  watch: {
    checked(newValue) {
      this.value = newValue;
    }
  },
  computed: {
    fieldError() {
      var _a;
      return this.name && ((_a = this.$store.state.viewData.fieldErrors) == null ? void 0 : _a[this.name]);
    },
    error() {
      return !!(this.hasError || this.fieldError || this.$store.state.viewData.errorAlert);
    },
    disable() {
      return this.disabled || this.submittingSeedForm;
    }
  },
  methods: {
    onInput(e) {
      var _a;
      (_a = this.whenChange) == null ? void 0 : _a.call(this, e);
      this.$emit("update:modelValue", e.target.checked);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<label${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    class: { disable: $options.disable }
  }, _attrs))} data-v-e4c117fa><input${server.serverRenderer_cjs_prodExports.ssrRenderAttrs((_temp0 = server.vueExports.mergeProps({ type: "checkbox" }, _ctx.$attrs, {
    checked: Array.isArray($data.value) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.value, null) : $data.value,
    disabled: $options.disable
  }), server.vueExports.mergeProps(_temp0, server.serverRenderer_cjs_prodExports.ssrGetDynamicModelProps(_temp0, $data.value))))} data-v-e4c117fa>`);
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</label>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/checkBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckBox = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e4c117fa"]]);
exports.CheckBox = CheckBox;
