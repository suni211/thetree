"use strict";
const inputField = require("./inputField-Cszfz-0C.cjs");
const server = require("../server.cjs");
const _sfc_main = {
  components: {
    InputField: inputField.InputField
  },
  props: {
    name: String,
    length: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    value() {
      this.movePinTexts();
    }
  },
  methods: {
    movePinTexts() {
      const value = this.value;
      for (let i in this.$refs.pinInput) {
        const fillInput = this.$refs.pinInput[i];
        const str = value[i];
        if (!str) break;
        fillInput.$el.value = str;
      }
      this.focus();
    },
    focus() {
      const inputs = this.$refs.pinInput;
      inputs[Math.min(this.value.length, inputs.length - 1)].$el.focus();
    },
    input(e) {
      if (this.value.length >= this.length) {
        this.movePinTexts();
        return e.preventDefault();
      }
      this.value = this.$refs.pinInput.map((a) => a.$el.value).join("") ?? "";
    },
    keydown(e) {
      if (e.key === "Backspace") {
        this.value = this.value.slice(0, this.value.length - 1);
      }
    },
    paste(e) {
      const text = e.clipboardData.getData("text/plain");
      e.preventDefault();
      this.value = text.split("").filter((a) => "0123456789".includes(a)).slice(0, this.length).join("");
      this.movePinTexts();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-78d857a5><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList($props.length, (i) => {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
      ref_for: true,
      ref: "pinInput",
      class: "pin-input",
      type: "number",
      inputmode: "numeric",
      pattern: "\\d*",
      autocomplete: "asdf",
      onFocus: $options.focus,
      onInput: $options.input,
      onKeydown: $options.keydown,
      onPaste: $options.paste
    }, null, _parent));
  });
  _push(`<!--]--><input type="hidden"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("name", $props.name)}${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.value)} data-v-78d857a5></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/pinInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PinInput = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-78d857a5"]]);
exports.PinInput = PinInput;
