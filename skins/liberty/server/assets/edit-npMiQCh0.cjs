"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const wikiContent = require("./wikiContent-j_kAYLje.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const seedFormInput = require("./seedFormInput-D9aT4LPH.cjs");
const diff = require("./diff-qWW-7YFT.cjs");
const loading = require("./loading-Dr5-cSvp.cjs");
const ipWarn = require("./ipWarn-BXQoEWdq.cjs");
require("node:stream");
require("node:path");
require("./prevNextBtn-0UpawiXO.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    IpWarn: ipWarn.IpWarn,
    WikiContent: wikiContent.WikiContent,
    Alert: server.Alert,
    SeedForm: seedForm.SeedForm,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    SeedButton: seedButton.SeedButton,
    SeedFormInput: seedFormInput.SeedFormInput,
    Diff: diff.Diff,
    Loading: loading.Loading
  },
  data() {
    return {
      tabs: [
        {
          name: "raw",
          label: "RAW 편집"
        },
        {
          name: "preview",
          label: "미리보기"
        }
      ],
      activeTab: null,
      initialContent: null,
      preview: {
        content: null,
        categories: null
      },
      log: ""
    };
  },
  created() {
    if (!this.editable) {
      this.tabs.length = 1;
      this.activeTab = this.tabs[0];
      return;
    }
    this.tabs.unshift(...this.$store.state.thetreePlugins.editor.map((a) => ({
      ...a.pluginInfo,
      component: a
    })));
    let activeTabName = this.$store.state.localConfig["wiki.default_edit_mode"];
    if (!this.tabs.some((a) => a.name === activeTabName)) activeTabName = null;
    activeTabName ?? (activeTabName = server.isMobile ? "raw" : this.tabs[0].name);
    this.activeTab = this.tabs.find((a) => a.name === activeTabName);
    this.initialContent = this.data.content;
    this.log = this.data.log || "";
    this.$store.state.components.mainView.beforeLeave = this.beforeLeave;
  },
  watch: {
    activeTab(newValue, oldValue) {
      if (!oldValue) return;
      this.updateContent(oldValue);
      if (newValue.name === "preview")
        this.loadPreview();
    },
    "data.content"() {
      if (this.activeTab.name === "raw") return;
      const activeComponent = this.getTabComponent(this.activeTab.name);
      activeComponent.setValue(this.data.content);
    }
  },
  computed: {
    logLabel() {
      let result = "요약";
      if (this.log)
        result += ` (${this.log.length}/255)`;
      return result;
    },
    editable() {
      return this.data.isEditRequest || !this.data.aclMessage;
    }
  },
  methods: {
    beforeLeave() {
      this.updateContent();
      if (this.data.content !== this.initialContent)
        return confirm("변경된 사항이 저장되지 않았습니다.");
      return true;
    },
    getTabComponent(name) {
      var _a;
      return (_a = this.$refs["pluginTab_" + name]) == null ? void 0 : _a[0];
    },
    updateContent(from) {
      from ?? (from = this.activeTab);
      const fromComponent = this.getTabComponent(from.name);
      const activeComponent = this.getTabComponent(this.activeTab.name);
      if (fromComponent) this.data.content = fromComponent.getValue();
      if (activeComponent && activeComponent.getValue() !== this.data.content)
        activeComponent.setValue(this.data.content);
    },
    async beforeSubmit() {
      if (!this.$refs.agreeCheckbox.checked) {
        alert("수정하기 전에 먼저 문서 배포 규정에 동의해 주세요.");
        return false;
      }
      this.updateContent();
      await this.$nextTick();
    },
    async loadPreview() {
      this.preview.content = null;
      this.preview.categories = null;
      const json = await this.internalRequest(this.doc_action_link(this.data.document, "preview"), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          content: this.data.content
        }).toString(),
        noProgress: true
      });
      this.preview.content = json.contentHtml;
      this.preview.categories = json.categories;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_Alert = server.vueExports.resolveComponent("Alert");
  const _component_WikiContent = server.vueExports.resolveComponent("WikiContent");
  const _component_Diff = server.vueExports.resolveComponent("Diff");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_Loading = server.vueExports.resolveComponent("Loading");
  const _component_SeedFormInput = server.vueExports.resolveComponent("SeedFormInput");
  const _component_IpWarn = server.vueExports.resolveComponent("IpWarn");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  if (_ctx.$route.query.redirected === "1" && _ctx.data.isEditRequest && _ctx.data.aclMessage) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, null, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<strong data-v-580fe532${_scopeId}>[알림]</strong> 문서를 편집할 권한이 없기 때문에 편집 요청으로 이동되었습니다. <div data-v-580fe532${_scopeId}>${_ctx.data.aclMessage ?? ""}</div>`);
        } else {
          return [
            server.vueExports.createVNode("strong", null, "[알림]"),
            server.vueExports.createTextVNode(" 문서를 편집할 권한이 없기 때문에 편집 요청으로 이동되었습니다. "),
            server.vueExports.createVNode("div", {
              innerHTML: _ctx.data.aclMessage
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!$options.editable) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, { theme: "danger" }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<strong data-v-580fe532${_scopeId}>[오류!] </strong><span data-v-580fe532${_scopeId}>${_ctx.data.aclMessage ?? ""}</span>`);
        } else {
          return [
            server.vueExports.createVNode("strong", null, "[오류!] "),
            server.vueExports.createVNode("span", {
              innerHTML: _ctx.data.aclMessage
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiContent, {
    content: _ctx.data.contentHtml
  }, null, _parent));
  if (_ctx.data.conflict) {
    _push(`<!--[-->`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Diff, {
      title: `r${_ctx.data.conflict.editedRev} vs 사용자 입력`,
      diffHtml: _ctx.data.conflict.diff.diffHtml
    }, null, _parent));
    _push(`<span class="conflict-error" data-v-580fe532>자동 병합에 실패했습니다! 수동으로 수정된 내역을 아래 텍스트 박스에 다시 입력해주세요.</span><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    beforeSubmit: $options.beforeSubmit,
    method: "post"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.page.data.body, (value, name) => {
          _push2(`<input type="hidden"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("name", name)}${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", value)} data-v-580fe532${_scopeId}>`);
        });
        _push2(`<!--]--><ul data-v-580fe532${_scopeId}><!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList($data.tabs, (tab) => {
          _push2(`<li data-v-580fe532${_scopeId}><button type="button" class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ active: $data.activeTab === tab })}" data-v-580fe532${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(tab.label)}</button></li>`);
        });
        _push2(`<!--]-->`);
        if ((_a = $data.activeTab.buttons) == null ? void 0 : _a.length) {
          _push2(`<li class="editor-buttons" data-v-580fe532${_scopeId}><!--[-->`);
          server.serverRenderer_cjs_prodExports.ssrRenderList($data.activeTab.buttons, (button) => {
            _push2(`<div data-v-580fe532${_scopeId}><button type="button" data-v-580fe532${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(button.label)}</button></div>`);
          });
          _push2(`<!--]--></li>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</ul><div class="tabs" data-v-580fe532${_scopeId}><!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList($data.tabs.filter((a) => a.component), (tab) => {
          _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ active: $data.activeTab === tab })}" data-v-580fe532${_scopeId}>`);
          if (tab.component) {
            server.serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, server.vueExports.createVNode(server.vueExports.resolveDynamicComponent(tab.component), {
              ref_for: true,
              ref: "pluginTab_" + tab.name
            }, null), _parent2, _scopeId);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        });
        _push2(`<!--]--><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ active: $data.activeTab.name === "raw" })}" data-v-580fe532${_scopeId}><textarea name="text" wrap="soft"${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!$options.editable) ? " readonly" : ""} data-v-580fe532${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.content)}</textarea></div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ active: $data.activeTab.name === "preview", loading: $data.preview.content == null }, "preview"])}" data-v-580fe532${_scopeId}>`);
        if ($data.preview.content != null) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiContent, {
            content: $data.preview.content,
            categories: $data.preview.categories
          }, null, _parent2, _scopeId));
        } else {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Loading, null, null, _parent2, _scopeId));
        }
        _push2(`</div></div>`);
        if ($options.editable) {
          _push2(`<!--[--><div class="log-block" data-v-580fe532${_scopeId}><label for="logInput" data-v-580fe532${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.logLabel)}</label>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormInput, {
            modelValue: $data.log,
            "onUpdate:modelValue": ($event) => $data.log = $event,
            id: "logInput",
            name: "log"
          }, null, _parent2, _scopeId));
          _push2(`</div><label data-v-580fe532${_scopeId}><input type="checkbox" name="agree" value="Y"${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(_ctx.data.editagreeAgreed) ? " checked" : ""} data-v-580fe532${_scopeId}><span data-v-580fe532${_scopeId}>${_ctx.data.editagree_text ?? ""}</span></label>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_IpWarn, null, null, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, { submit: "" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`저장`);
              } else {
                return [
                  server.vueExports.createTextVNode("저장")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<div class="clearboth" data-v-580fe532${_scopeId}></div><!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.page.data.body, (value, name) => {
            return server.vueExports.openBlock(), server.vueExports.createBlock("input", {
              type: "hidden",
              name,
              value
            }, null, 8, ["name", "value"]);
          }), 256)),
          server.vueExports.createVNode("ul", null, [
            (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($data.tabs, (tab) => {
              return server.vueExports.openBlock(), server.vueExports.createBlock("li", null, [
                server.vueExports.createVNode("button", {
                  onClick: ($event) => $data.activeTab = tab,
                  type: "button",
                  class: { active: $data.activeTab === tab }
                }, server.vueExports.toDisplayString(tab.label), 11, ["onClick"])
              ]);
            }), 256)),
            ((_b = $data.activeTab.buttons) == null ? void 0 : _b.length) ? (server.vueExports.openBlock(), server.vueExports.createBlock("li", {
              key: 0,
              class: "editor-buttons"
            }, [
              (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($data.activeTab.buttons, (button) => {
                return server.vueExports.openBlock(), server.vueExports.createBlock("div", null, [
                  server.vueExports.createVNode("button", {
                    type: "button",
                    onClick: ($event) => {
                      var _a2, _b2;
                      return (_b2 = (_a2 = $options.getTabComponent($data.activeTab.name)).onButtonClick) == null ? void 0 : _b2.call(_a2, button.name);
                    }
                  }, server.vueExports.toDisplayString(button.label), 9, ["onClick"])
                ]);
              }), 256))
            ])) : server.vueExports.createCommentVNode("", true)
          ]),
          server.vueExports.createVNode("div", { class: "tabs" }, [
            (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($data.tabs.filter((a) => a.component), (tab) => {
              return server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                class: { active: $data.activeTab === tab }
              }, [
                tab.component ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.resolveDynamicComponent(tab.component), {
                  key: 0,
                  ref_for: true,
                  ref: "pluginTab_" + tab.name
                }, null, 512)) : server.vueExports.createCommentVNode("", true)
              ], 2);
            }), 256)),
            server.vueExports.createVNode("div", {
              class: { active: $data.activeTab.name === "raw" }
            }, [
              server.vueExports.withDirectives(server.vueExports.createVNode("textarea", {
                ref: "textInput",
                name: "text",
                wrap: "soft",
                "onUpdate:modelValue": ($event) => _ctx.data.content = $event,
                readonly: !$options.editable
              }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                [server.vueExports.vModelText, _ctx.data.content]
              ])
            ], 2),
            server.vueExports.createVNode("div", {
              class: ["preview", { active: $data.activeTab.name === "preview", loading: $data.preview.content == null }]
            }, [
              $data.preview.content != null ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_WikiContent, {
                key: 0,
                content: $data.preview.content,
                categories: $data.preview.categories
              }, null, 8, ["content", "categories"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_Loading, { key: 1 }))
            ], 2)
          ]),
          $options.editable ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
            server.vueExports.createVNode("div", { class: "log-block" }, [
              server.vueExports.createVNode("label", { for: "logInput" }, server.vueExports.toDisplayString($options.logLabel), 1),
              server.vueExports.createVNode(_component_SeedFormInput, {
                modelValue: $data.log,
                "onUpdate:modelValue": ($event) => $data.log = $event,
                id: "logInput",
                name: "log"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            server.vueExports.createVNode("label", null, [
              server.vueExports.createVNode("input", {
                ref: "agreeCheckbox",
                type: "checkbox",
                name: "agree",
                value: "Y",
                checked: _ctx.data.editagreeAgreed
              }, null, 8, ["checked"]),
              server.vueExports.createVNode("span", {
                innerHTML: _ctx.data.editagree_text
              }, null, 8, ["innerHTML"])
            ]),
            server.vueExports.createVNode(_component_IpWarn),
            server.vueExports.createVNode(_component_SeedButton, { submit: "" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("저장")
              ]),
              _: 1
            }),
            server.vueExports.createVNode("div", { class: "clearboth" })
          ], 64)) : server.vueExports.createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiContent, {
    content: _ctx.data.dochelptext
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-580fe532"]]);
exports.default = edit;
