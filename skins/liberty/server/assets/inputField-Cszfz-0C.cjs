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
  props: {
    modelValue: String,
    hasError: Boolean,
    multiline: Boolean,
    whenInput: Function,
    whenKeyDown: Function,
    whenPaste: Function,
    name: String,
    center: Boolean,
    readonly: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  mounted() {
    this.updateError();
    if (this.disabled)
      this.disable = true;
  },
  watch: {
    submittingSeedForm(newValue) {
      if (this.disabled) return;
      this.disable = newValue;
    },
    error() {
      this.updateError();
    },
    disable(newValue) {
      if (newValue) this.$refs.input.classList.add("disabled");
      else this.$refs.input.classList.remove("disabled");
      this.$refs.input.disabled = newValue;
    },
    readonly(newValue) {
      this.$refs.input.readOnly = newValue;
    }
  },
  computed: {
    fieldError() {
      var _a;
      return this.name && ((_a = this.$store.state.viewData.fieldErrors) == null ? void 0 : _a[this.name]);
    },
    error() {
      return !!(this.hasError || this.fieldError || this.$store.state.viewData.errorAlert);
    }
  },
  methods: {
    onInput(e) {
      var _a;
      (_a = this.whenInput) == null ? void 0 : _a.call(this, e);
      this.$emit("update:modelValue", e.target.value);
    },
    focus() {
      this.$refs.input.focus();
    },
    updateError() {
      const classList = this.$refs.input.classList;
      if (this.error) classList.add("error");
      else classList.remove("error");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  server.serverRenderer_cjs_prodExports.ssrRenderVNode(_push, server.vueExports.createVNode(server.vueExports.resolveDynamicComponent($props.multiline ? "textarea" : "input"), server.vueExports.mergeProps({
    class: ["input", {
      multiline: $props.multiline,
      center: $props.center,
      readonly: $props.readonly
    }],
    value: $props.modelValue,
    onInput: $options.onInput,
    onKeydown: $props.whenKeyDown,
    onPaste: $props.whenPaste,
    name: $props.name
  }, _ctx.$attrs, { ref: "input" }, _attrs), null), _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/inputField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputField = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8954cb3c"]]);
exports.InputField = InputField;
