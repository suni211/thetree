"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const showError = require("./showError-CkeGKDwd.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const SearchableSelect = require("./SearchableSelect-BKvOOeeO.cjs");
const ipWarn = require("./ipWarn-BXQoEWdq.cjs");
const server = require("../server.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  components: {
    IpWarn: ipWarn.IpWarn,
    SearchableSelect: SearchableSelect.SearchableSelect,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    ShowError: showError.ShowError,
    SeedButton: seedButton.SeedButton,
    SeedForm: seedForm.SeedForm
  },
  data() {
    return {
      document: "",
      log: "",
      text: ""
    };
  },
  mounted() {
    this.text = this.data.file_upload_template;
  },
  watch: {
    "$route.query.document"(newValue) {
      if (newValue) this.document = newValue;
    }
  },
  computed: {
    documentLabel() {
      let result = "파일 이름";
      if (this.document)
        result += ` (${this.document.length}/255)`;
      return result;
    },
    logLabel() {
      let result = "요약";
      if (this.log)
        result += ` (${this.log.length}/255)`;
      return result;
    }
  },
  methods: {
    fileChange(e) {
      const fileCount = e.srcElement.files.length;
      if (fileCount > 10) {
        alert("파일은 10개까지만 선택할 수 있습니다.");
        return e.preventDefault();
      }
      if (fileCount <= 1) {
        this.$refs.fakeFileInput.value = this.$refs.fileInput.value;
        if (fileCount === 1) this.document || (this.document = "파일:" + this.$refs.fileInput.files[0].name);
        this.$refs.documentInput.disabled = false;
      } else {
        this.$refs.fakeFileInput.value = [...e.srcElement.files].map((a) => `"${a.name}"`).join(", ");
        this.document = "";
        this.$refs.documentInput.disabled = true;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  const _component_ShowError = server.vueExports.resolveComponent("ShowError");
  const _component_SearchableSelect = server.vueExports.resolveComponent("SearchableSelect");
  const _component_IpWarn = server.vueExports.resolveComponent("IpWarn");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, server.vueExports.mergeProps({
    method: "post",
    enctype: "multipart/form-data"
  }, _attrs), {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<input type="file" accept="image/*" name="file" multiple hidden data-v-10e6a80f${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent2, _scopeId));
        _push2(`<div class="form-block" data-v-10e6a80f${_scopeId}><label for="fakeFileInput" data-v-10e6a80f${_scopeId}>파일 선택</label><div class="file-block" data-v-10e6a80f${_scopeId}><input type="text" id="fakeFileInput" readonly data-v-10e6a80f${_scopeId}><span data-v-10e6a80f${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { type: "button" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Select`);
            } else {
              return [
                server.vueExports.createTextVNode("Select")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</span></div></div><div class="form-block" data-v-10e6a80f${_scopeId}><label for="documentInput" data-v-10e6a80f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.documentLabel)}</label><input${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.document)} type="text" id="documentInput" name="document" data-v-10e6a80f${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "document" }, null, _parent2, _scopeId));
        _push2(`</div><textarea name="text" wrap="soft" data-v-10e6a80f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($data.text)}</textarea><div class="form-block" data-v-10e6a80f${_scopeId}><label for="licenseSelect" data-v-10e6a80f${_scopeId}>라이선스</label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SearchableSelect, {
          name: "license",
          inputId: "licenseSelect",
          options: _ctx.data.licenses
        }, null, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "license" }, null, _parent2, _scopeId));
        _push2(`</div><div class="form-block" data-v-10e6a80f${_scopeId}><label for="categorySelect" data-v-10e6a80f${_scopeId}>분류</label>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SearchableSelect, {
          name: "category",
          inputId: "categorySelect",
          options: _ctx.data.categories
        }, null, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ShowError, { tag: "category" }, null, _parent2, _scopeId));
        _push2(`</div><div class="form-block" data-v-10e6a80f${_scopeId}><label for="logInput" data-v-10e6a80f${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.logLabel)}</label><input${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.log)} type="text" id="logInput" name="log" data-v-10e6a80f${_scopeId}></div><span data-v-10e6a80f${_scopeId}>${_ctx.data.editagree_text ?? ""}</span><div data-v-10e6a80f${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_IpWarn, null, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`업로드`);
            } else {
              return [
                server.vueExports.createTextVNode("업로드")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode("input", {
            ref: "fileInput",
            onChange: $options.fileChange,
            type: "file",
            accept: "image/*",
            name: "file",
            multiple: "",
            hidden: ""
          }, null, 40, ["onChange"]),
          server.vueExports.createVNode(_component_FormErrorAlert),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.createVNode("label", { for: "fakeFileInput" }, "파일 선택"),
            server.vueExports.createVNode("div", {
              class: "file-block",
              onClick: _ctx.$refs.fileInput.click
            }, [
              server.vueExports.createVNode("input", {
                ref: "fakeFileInput",
                type: "text",
                id: "fakeFileInput",
                readonly: ""
              }, null, 512),
              server.vueExports.createVNode("span", null, [
                server.vueExports.createVNode(_component_SeedButton, { type: "button" }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("Select")
                  ]),
                  _: 1
                })
              ])
            ], 8, ["onClick"])
          ]),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.createVNode("label", { for: "documentInput" }, server.vueExports.toDisplayString($options.documentLabel), 1),
            server.vueExports.withDirectives(server.vueExports.createVNode("input", {
              ref: "documentInput",
              "onUpdate:modelValue": ($event) => $data.document = $event,
              type: "text",
              id: "documentInput",
              name: "document"
            }, null, 8, ["onUpdate:modelValue"]), [
              [server.vueExports.vModelText, $data.document]
            ]),
            server.vueExports.createVNode(_component_ShowError, { tag: "document" })
          ]),
          server.vueExports.withDirectives(server.vueExports.createVNode("textarea", {
            name: "text",
            wrap: "soft",
            "onUpdate:modelValue": ($event) => $data.text = $event
          }, null, 8, ["onUpdate:modelValue"]), [
            [server.vueExports.vModelText, $data.text]
          ]),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.createVNode("label", { for: "licenseSelect" }, "라이선스"),
            server.vueExports.createVNode(_component_SearchableSelect, {
              name: "license",
              inputId: "licenseSelect",
              options: _ctx.data.licenses
            }, null, 8, ["options"]),
            server.vueExports.createVNode(_component_ShowError, { tag: "license" })
          ]),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.createVNode("label", { for: "categorySelect" }, "분류"),
            server.vueExports.createVNode(_component_SearchableSelect, {
              name: "category",
              inputId: "categorySelect",
              options: _ctx.data.categories
            }, null, 8, ["options"]),
            server.vueExports.createVNode(_component_ShowError, { tag: "category" })
          ]),
          server.vueExports.createVNode("div", { class: "form-block" }, [
            server.vueExports.createVNode("label", { for: "logInput" }, server.vueExports.toDisplayString($options.logLabel), 1),
            server.vueExports.withDirectives(server.vueExports.createVNode("input", {
              "onUpdate:modelValue": ($event) => $data.log = $event,
              type: "text",
              id: "logInput",
              name: "log"
            }, null, 8, ["onUpdate:modelValue"]), [
              [server.vueExports.vModelText, $data.log]
            ])
          ]),
          server.vueExports.createVNode("span", {
            innerHTML: _ctx.data.editagree_text
          }, null, 8, ["innerHTML"]),
          server.vueExports.createVNode("div", null, [
            server.vueExports.createVNode(_component_IpWarn)
          ]),
          server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("업로드")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const upload = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-10e6a80f"]]);
exports.default = upload;
