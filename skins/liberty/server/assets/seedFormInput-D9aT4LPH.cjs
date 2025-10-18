"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  inject: {
    submittingSeedForm: {
      default: false
    }
  },
  props: {
    modelValue: {
      type: [String, Boolean],
      default: ""
    },
    tag: {
      type: String,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  watch: {
    submittingSeedForm(newValue) {
      this.$refs.input.disabled = newValue;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  server.serverRenderer_cjs_prodExports.ssrRenderVNode(_push, server.vueExports.createVNode(server.vueExports.resolveDynamicComponent($props.tag), server.vueExports.mergeProps({ class: "seed-form-input" }, _ctx.$attrs, {
    value: $props.modelValue,
    onInput: ($event) => _ctx.$emit("update:modelValue", $event.target.value),
    ref: "input"
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          server.vueExports.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/seedFormInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SeedFormInput = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f1ba45ae"]]);
exports.SeedFormInput = SeedFormInput;
