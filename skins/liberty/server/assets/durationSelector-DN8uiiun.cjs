"use strict";
const server = require("../server.cjs");
const TemplateDuration = {
  0: "영구",
  86400: "하루",
  259200: "3일",
  432e3: "5일",
  604800: "7일",
  1209600: "2주",
  1814400: "3주",
  2419200: "4주",
  4838400: "2개월",
  7257600: "3개월",
  14515200: "6개월",
  29030400: "1년"
};
const _sfc_main = {
  inject: {
    submittingSeedForm: {
      default: false
    }
  },
  props: {
    name: String,
    disabled: Boolean,
    value: {
      type: Number,
      default: 0
    },
    unblock: Boolean
  },
  data() {
    return {
      model: this.value,
      select: this.value,
      rawNumber: "",
      rawUnit: "1",
      TemplateDuration
    };
  },
  computed: {
    disable() {
      return this.disabled || this.submittingSeedForm;
    }
  },
  emits: ["change"],
  watch: {
    model(newValue) {
      this.$emit("change", newValue);
    },
    value(newValue) {
      this.model = newValue;
      if (TemplateDuration[newValue] || this.unblock && newValue === "-1") {
        this.select = newValue;
        this.rawNumber = "";
        this.rawUnit = "1";
      } else {
        this.select = "raw";
        this.rawNumber = newValue;
        this.rawUnit = "1";
      }
    },
    select(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === "raw")
          this.$nextTick(() => this.$refs.rawNumber.focus());
        else {
          if (oldValue === "raw") {
            this.rawNumber = "";
            this.rawUnit = "1";
          }
          this.model = newValue;
        }
      }
    },
    rawUnit() {
      this.calcRaw();
    },
    rawNumber() {
      this.calcRaw();
    }
  },
  methods: {
    calcRaw() {
      if (this.select !== "raw") return;
      const num = parseInt(this.rawNumber);
      this.model = isNaN(num) ? "" : this.rawUnit * num;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-38bfe1a3><input${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.model)} type="hidden"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("name", $props.name)} data-v-38bfe1a3><select${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr($options.disable) ? " disabled" : ""} data-v-38bfe1a3>`);
  if ($props.unblock) {
    _push(`<option value="-1" data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.select) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.select, "-1") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.select, "-1")) ? " selected" : ""}>해제</option>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList($data.TemplateDuration, (label, value) => {
    _push(`<option${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", value)} data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.select) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.select, value) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.select, value)) ? " selected" : ""}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(label)}</option>`);
  });
  _push(`<!--]--><option value="raw" data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.select) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.select, "raw") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.select, "raw")) ? " selected" : ""}>직접입력</option></select>`);
  if ($data.select === "raw") {
    _push(`<!--[--><input${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.rawNumber)} class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ invalid: $data.rawNumber && isNaN($data.rawNumber) })}"${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr($options.disable) ? " disabled" : ""} data-v-38bfe1a3><select${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr($options.disable) ? " disabled" : ""} data-v-38bfe1a3><option value="1" data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.rawUnit) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.rawUnit, "1") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.rawUnit, "1")) ? " selected" : ""}>초</option><option value="60" data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.rawUnit) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.rawUnit, "60") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.rawUnit, "60")) ? " selected" : ""}>분</option><option value="3600" data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.rawUnit) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.rawUnit, "3600") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.rawUnit, "3600")) ? " selected" : ""}>시간</option><option value="86400" data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.rawUnit) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.rawUnit, "86400") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.rawUnit, "86400")) ? " selected" : ""}>일</option><option value="604800" data-v-38bfe1a3${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.rawUnit) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.rawUnit, "604800") : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.rawUnit, "604800")) ? " selected" : ""}>주</option></select><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/durationSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DurationSelector = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-38bfe1a3"]]);
exports.DurationSelector = DurationSelector;
