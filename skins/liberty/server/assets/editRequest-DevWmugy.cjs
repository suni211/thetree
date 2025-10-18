"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
const diffCount = require("./diffCount-CcPCubZa.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const wikiContent = require("./wikiContent-j_kAYLje.cjs");
const loading = require("./loading-Dr5-cSvp.cjs");
const diff = require("./diff-qWW-7YFT.cjs");
require("node:stream");
require("node:path");
require("./prevNextBtn-0UpawiXO.cjs");
const _sfc_main = {
  mixins: [server.Common],
  directives: {
    tooltip: server.Mt
  },
  components: {
    Modal: server.Modal,
    NuxtLink: server.NuxtLink,
    Diff: diff.Diff,
    Loading: loading.Loading,
    SeedLinkButton: server.SeedLinkButton,
    WikiContent: wikiContent.WikiContent,
    SeedButton: seedButton.SeedButton,
    SeedForm: seedForm.SeedForm,
    DiffCount: diffCount.DiffCount,
    LocalDate: server.LocalDate,
    AuthorSpan: authorSpan.AuthorSpan
  },
  data() {
    return {
      showCloseModal: false,
      activeTab: "compare",
      preview: {
        content: null,
        categories: null
      }
    };
  },
  computed: {
    editRequest() {
      return this.data.editRequest;
    },
    pos() {
      return "편집 요청" + this.editRequest.url;
    },
    acceptTooltip() {
      return this.data.conflict ? "이 편집 요청은 충돌된 상태입니다. 요청자가 수정해야 합니다." : this.data.editable ? "이 편집 요청을 문서에 적용합니다." : "이 문서를 편집할 수 있는 권한이 없습니다.";
    },
    closeTooltip() {
      return this.data.selfCreated || this.data.editable ? "이 편집 요청을 닫습니다." : "편집 요청을 닫기 위해서는 요청자 본인이거나 문서를 편집할 수 있는 권한이 있어야 합니다.";
    },
    editTooltip() {
      return this.data.selfCreated ? "편집 요청을 수정합니다." : "요청자 본인만 수정할 수 있습니다.";
    },
    reopenInfo() {
      let disabled = false;
      let tooltip = "이 편집 요청을 다시 엽니다.";
      const updateThreadStatusPerm = this.data.permissions.status;
      if (this.editRequest.status === 3) {
        if (!updateThreadStatusPerm) {
          disabled = true;
          tooltip = "이 편집 요청은 잠겨있어서 다시 열 수 없습니다.";
        }
      } else {
        if (!this.data.selfCreated && !updateThreadStatusPerm) {
          disabled = true;
          tooltip = "편집 요청을 다시 열기 위해서는 요청자 본인이거나 권한이 있어야 합니다.";
        }
      }
      return { disabled, tooltip };
    }
  },
  watch: {
    activeTab(newValue) {
      if (newValue === "preview")
        this.loadPreview();
    }
  },
  methods: {
    async loadPreview() {
      this.preview.content = null;
      this.preview.categories = null;
      const res = await this.internalRequest(this.doc_action_link(this.data.document, "preview"), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          content: this.editRequest.content
        }).toString(),
        noProgress: true
      });
      this.preview.content = res.contentHtml;
      this.preview.categories = res.categories;
    },
    afterCloseSubmit() {
      this.showCloseModal = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_DiffCount = server.vueExports.resolveComponent("DiffCount");
  const _component_Modal = server.vueExports.resolveComponent("Modal");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  const _component_WikiContent = server.vueExports.resolveComponent("WikiContent");
  const _component_SeedLinkButton = server.vueExports.resolveComponent("SeedLinkButton");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_Diff = server.vueExports.resolveComponent("Diff");
  const _component_Loading = server.vueExports.resolveComponent("Loading");
  const _directive_tooltip = server.vueExports.resolveDirective("tooltip");
  _push(`<!--[--><h3 data-v-1b6c83e7>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
    account: $options.editRequest.createdUser,
    pos: $options.pos
  }, null, _parent));
  _push(`가 `);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
    date: $options.editRequest.createdAt
  }, null, _parent));
  _push(`에 요청 </h3><hr data-v-1b6c83e7><div class="margin-block" data-v-1b6c83e7><label data-v-1b6c83e7>기준 판</label> r${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.baseRev.rev)} `);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DiffCount, {
    count: $options.editRequest.diffLength
  }, null, _parent));
  _push(`</div><div class="margin-block" data-v-1b6c83e7><label data-v-1b6c83e7>편집 요약</label> ${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.editRequest.log)}</div>`);
  if ($options.editRequest.status === 0) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Modal, {
      modelValue: $data.showCloseModal,
      "onUpdate:modelValue": ($event) => $data.showCloseModal = $event,
      classes: "close-modal"
    }, {
      default: server.vueExports.withCtx((props, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
            method: "post",
            action: "/edit_request/" + $options.editRequest.url + "/close",
            afterSubmit: $options.afterCloseSubmit
          }, {
            default: server.vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<h4 data-v-1b6c83e7${_scopeId2}>편집 요청 닫기</h4><div data-v-1b6c83e7${_scopeId2}><p data-v-1b6c83e7${_scopeId2}>사유:</p><input type="text" name="close_reason" data-v-1b6c83e7${_scopeId2}></div>`);
                if (_ctx.data.permissions.status) {
                  _push3(`<div data-v-1b6c83e7${_scopeId2}><p data-v-1b6c83e7${_scopeId2}>이 편집 요청을 다시 열수 없게 잠금</p><input type="checkbox" name="lock" value="Y" data-v-1b6c83e7${_scopeId2}></div>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<div class="button-block" data-v-1b6c83e7${_scopeId2}>`);
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                  submit: "",
                  large: ""
                }, {
                  default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`닫기`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("닫기")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
                  type: "button",
                  large: "",
                  onClick: props.close
                }, {
                  default: server.vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`취소`);
                    } else {
                      return [
                        server.vueExports.createTextVNode("취소")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  server.vueExports.createVNode("h4", null, "편집 요청 닫기"),
                  server.vueExports.createVNode("div", null, [
                    server.vueExports.createVNode("p", null, "사유:"),
                    server.vueExports.createVNode("input", {
                      type: "text",
                      name: "close_reason"
                    })
                  ]),
                  _ctx.data.permissions.status ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", { key: 0 }, [
                    server.vueExports.createVNode("p", null, "이 편집 요청을 다시 열수 없게 잠금"),
                    server.vueExports.createVNode("input", {
                      type: "checkbox",
                      name: "lock",
                      value: "Y"
                    })
                  ])) : server.vueExports.createCommentVNode("", true),
                  server.vueExports.createVNode("div", { class: "button-block" }, [
                    server.vueExports.createVNode(_component_SeedButton, {
                      submit: "",
                      large: ""
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("닫기")
                      ]),
                      _: 1
                    }),
                    server.vueExports.createVNode(_component_SeedButton, {
                      type: "button",
                      large: "",
                      onClick: props.close
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("취소")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.createVNode(_component_SeedForm, {
              method: "post",
              action: "/edit_request/" + $options.editRequest.url + "/close",
              afterSubmit: $options.afterCloseSubmit
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode("h4", null, "편집 요청 닫기"),
                server.vueExports.createVNode("div", null, [
                  server.vueExports.createVNode("p", null, "사유:"),
                  server.vueExports.createVNode("input", {
                    type: "text",
                    name: "close_reason"
                  })
                ]),
                _ctx.data.permissions.status ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", { key: 0 }, [
                  server.vueExports.createVNode("p", null, "이 편집 요청을 다시 열수 없게 잠금"),
                  server.vueExports.createVNode("input", {
                    type: "checkbox",
                    name: "lock",
                    value: "Y"
                  })
                ])) : server.vueExports.createCommentVNode("", true),
                server.vueExports.createVNode("div", { class: "button-block" }, [
                  server.vueExports.createVNode(_component_SeedButton, {
                    submit: "",
                    large: ""
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("닫기")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createVNode(_component_SeedButton, {
                    type: "button",
                    large: "",
                    onClick: props.close
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("취소")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ]),
              _: 2
            }, 1032, ["action", "afterSubmit"])
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
  _push(`<div class="action-block" data-v-1b6c83e7>`);
  if ($options.editRequest.status === 0) {
    _push(`<div data-v-1b6c83e7><h4 data-v-1b6c83e7>이 편집 요청을...</h4><div data-v-1b6c83e7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: $options.editRequest.lastUpdatedAt
    }, null, _parent));
    _push(`에 마지막으로 수정됨 </div><div class="button-block" data-v-1b6c83e7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
      method: "post",
      action: "/edit_request/" + $options.editRequest.url + "/accept"
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, server.vueExports.mergeProps({
            green: "",
            large: "",
            disabled: _ctx.data.conflict || !_ctx.data.editable
          }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_tooltip, $options.acceptTooltip)), {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Accept`);
              } else {
                return [
                  server.vueExports.createTextVNode("Accept")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedButton, {
              green: "",
              large: "",
              disabled: _ctx.data.conflict || !_ctx.data.editable
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("Accept")
              ]),
              _: 1
            }, 8, ["disabled"])), [
              [_directive_tooltip, $options.acceptTooltip]
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, server.vueExports.mergeProps({
      onClick: ($event) => $data.showCloseModal = true,
      large: "",
      disabled: !_ctx.data.editable && !_ctx.data.selfCreated
    }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_tooltip, $options.closeTooltip)), {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Close`);
        } else {
          return [
            server.vueExports.createTextVNode("Close")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedLinkButton, server.vueExports.mergeProps({
      info: "",
      large: "",
      to: "/edit_request/" + $options.editRequest.url + "/edit",
      disabled: !_ctx.data.selfCreated
    }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_tooltip, $options.editTooltip)), {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Edit`);
        } else {
          return [
            server.vueExports.createTextVNode("Edit")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else if ($options.editRequest.status === 1) {
    _push(`<div data-v-1b6c83e7><h4 data-v-1b6c83e7>편집 요청이 승인되었습니다.</h4><div data-v-1b6c83e7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: $options.editRequest.lastUpdatedAt
    }, null, _parent));
    _push(`에 `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: $options.editRequest.lastUpdateUser,
      pos: $options.pos
    }, null, _parent));
    _push(`가 r${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.editRequest.acceptedRev.rev)} <span class="history-action" data-v-1b6c83e7> (`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(_ctx.data.document, "w", { uuid: $options.editRequest.acceptedRev.uuid }),
      rel: "nofollow"
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`보기`);
        } else {
          return [
            server.vueExports.createTextVNode("보기")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(` | `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(_ctx.data.document, "raw", { uuid: $options.editRequest.acceptedRev.uuid }),
      rel: "nofollow"
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`RAW`);
        } else {
          return [
            server.vueExports.createTextVNode("RAW")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(` | `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(_ctx.data.document, "diff", { uuid: $options.editRequest.acceptedRev.uuid }),
      rel: "nofollow"
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`비교`);
        } else {
          return [
            server.vueExports.createTextVNode("비교")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`) </span> 으로 승인함. </div></div>`);
  } else {
    _push(`<div data-v-1b6c83e7><h4 data-v-1b6c83e7>편집 요청이 닫혔습니다.</h4><div data-v-1b6c83e7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: $options.editRequest.lastUpdatedAt
    }, null, _parent));
    _push(`에 `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: $options.editRequest.lastUpdateUser,
      pos: $options.pos
    }, null, _parent));
    _push(`가 편집 요청을 `);
    if ($options.editRequest.status === 3) {
      _push(`<!--[-->닫고 잠갔습니다.<!--]-->`);
    } else {
      _push(`<!--[-->닫았습니다.<!--]-->`);
    }
    _push(`</div>`);
    if ($options.editRequest.closedReason) {
      _push(`<p data-v-1b6c83e7>사유: ${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.editRequest.closedReason)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="button-block" data-v-1b6c83e7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
      method: "post",
      action: "/edit_request/" + $options.editRequest.url + "/reopen"
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, server.vueExports.mergeProps({
            green: "",
            large: "",
            disabled: $options.reopenInfo.disabled
          }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_tooltip, $options.reopenInfo.tooltip)), {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Reopen`);
              } else {
                return [
                  server.vueExports.createTextVNode("Reopen")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedButton, {
              green: "",
              large: "",
              disabled: $options.reopenInfo.disabled
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("Reopen")
              ]),
              _: 1
            }, 8, ["disabled"])), [
              [_directive_tooltip, $options.reopenInfo.tooltip]
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  }
  _push(`</div>`);
  if (_ctx.data.showContent) {
    _push(`<!--[--><ul data-v-1b6c83e7><li data-v-1b6c83e7><button class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ active: $data.activeTab === "compare" })}" data-v-1b6c83e7>비교</button></li><li data-v-1b6c83e7><button class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ active: $data.activeTab === "preview" })}" data-v-1b6c83e7>미리보기</button></li></ul><div class="tabs" data-v-1b6c83e7><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ active: $data.activeTab === "compare" })}" data-v-1b6c83e7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Diff, {
      title: `편집 요청 ${$options.editRequest.url}`,
      diffHtml: _ctx.data.diff.diffHtml
    }, null, _parent));
    _push(`</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ active: $data.activeTab === "preview", loading: !$data.preview.content }, "preview-tab"])}" data-v-1b6c83e7>`);
    if ($data.preview.content) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiContent, {
        content: $data.preview.content,
        categories: $data.preview.categories
      }, null, _parent));
    } else {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Loading, null, null, _parent));
    }
    _push(`</div></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/editRequest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editRequest = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1b6c83e7"]]);
exports.default = editRequest;
