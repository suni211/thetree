"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const seedFormBlock = require("./seedFormBlock-o575S1He.cjs");
const comment = require("./comment-DJInbDnR.cjs");
const ipWarn = require("./ipWarn-BXQoEWdq.cjs");
const formErrorAlert = require("./formErrorAlert-ndCvnHee.cjs");
const commentPreviewTab = require("./commentPreviewTab-CV_d1BTW.cjs");
require("node:stream");
require("node:path");
require("./showError-CkeGKDwd.cjs");
require("./authorSpan-zDEgxOhU.cjs");
require("./wikiContent-j_kAYLje.cjs");
require("./prevNextBtn-0UpawiXO.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    CommentPreviewTab: commentPreviewTab.CommentPreviewTab,
    Alert: server.Alert,
    FormErrorAlert: formErrorAlert.FormErrorAlert,
    IpWarn: ipWarn.IpWarn,
    Comment: comment.Comment,
    SeedFormBlock: seedFormBlock.SeedFormBlock,
    SeedButton: seedButton.SeedButton,
    SeedForm: seedForm.SeedForm,
    NuxtLink: server.NuxtLink
  },
  created() {
    this.$store.state.components.mainView.beforeLeave = this.beforeLeave;
  },
  methods: {
    goConfirm() {
      return confirm("go?");
    },
    beforeLeave() {
      var _a, _b;
      if (((_a = this.$refs.topicInput) == null ? void 0 : _a.value) || ((_b = this.$refs.commentPreviewTab.$refs.commentInput) == null ? void 0 : _b.value))
        return confirm("변경된 사항이 저장되지 않았습니다.");
      return true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  const _component_Comment = server.vueExports.resolveComponent("Comment");
  const _component_Alert = server.vueExports.resolveComponent("Alert");
  const _component_FormErrorAlert = server.vueExports.resolveComponent("FormErrorAlert");
  const _component_SeedFormBlock = server.vueExports.resolveComponent("SeedFormBlock");
  const _component_CommentPreviewTab = server.vueExports.resolveComponent("CommentPreviewTab");
  const _component_IpWarn = server.vueExports.resolveComponent("IpWarn");
  _push(`<!--[--><h3 data-v-411228a7>편집 요청</h3><ul data-v-411228a7><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.openEditRequests, (item) => {
    _push(`<li data-v-411228a7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: "/edit_request/" + item.url
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`편집 요청 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.url)}`);
        } else {
          return [
            server.vueExports.createTextVNode("편집 요청 " + server.vueExports.toDisplayString(item.url), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul><p data-v-411228a7>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.doc_action_link(_ctx.data.document, "discuss", { state: "closed_edit_requests" })
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`[닫힌 편집 요청 보기]`);
      } else {
        return [
          server.vueExports.createTextVNode("[닫힌 편집 요청 보기]")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 data-v-411228a7>토론</h3><ul data-v-411228a7><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.openThreads, (item, index) => {
    _push(`<li data-v-411228a7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: "#s-" + index + 1
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(index + 1)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<span data-v-411228a7>. </span>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: "/thread/" + item.url
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.topic)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.topic), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul><p data-v-411228a7>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.doc_action_link(_ctx.data.document, "discuss", { state: "close" })
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`[닫힌 토론 목록 보기]`);
      } else {
        return [
          server.vueExports.createTextVNode("[닫힌 토론 목록 보기]")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.openThreads, (item, index) => {
    _push(`<div data-v-411228a7>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
      beforeSubmit: $options.goConfirm,
      method: "post",
      class: "delete-thread-form",
      action: "/admin/thread/" + item.url + "/delete",
      noCaptcha: ""
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (_ctx.data.permissions.delete) {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
              type: "submit",
              danger: ""
            }, {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`[ADMIN] 스레드 삭제`);
                } else {
                  return [
                    server.vueExports.createTextVNode("[ADMIN] 스레드 삭제")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            _ctx.data.permissions.delete ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedButton, {
              key: 0,
              type: "submit",
              danger: ""
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("[ADMIN] 스레드 삭제")
              ]),
              _: 1
            })) : server.vueExports.createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<h2 data-v-411228a7>${server.serverRenderer_cjs_prodExports.ssrInterpolate(index + 1)}. `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: "/thread/" + item.url,
      id: "s-" + index
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.topic)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.topic), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h2><div class="preview-group" data-v-411228a7><!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(item.recentComments, (comment2, index2) => {
      _push(`<div data-v-411228a7>`);
      if (index2 === 1 && comment2.id !== 2) {
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          to: "/thread/" + item.url,
          class: "comment-more"
        }, {
          default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`more...`);
            } else {
              return [
                server.vueExports.createTextVNode("more...")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Comment, {
        previewMode: "",
        thread: item,
        slug: item.url,
        comment: comment2
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--><h3 data-v-411228a7>새 주제 생성</h3>`);
  if (_ctx.doc_fulltitle(_ctx.page.data.document) === _ctx.config["wiki.front_page"]) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Alert, null, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<strong data-v-411228a7${_scopeId}>[경고!]</strong> 이 토론은 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(_ctx.page.data.document))} 문서의 토론입니다. ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(_ctx.page.data.document))} 문서와 관련 없는 토론은 각 문서의 토론에서 진행해 주시기 바랍니다. ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(_ctx.page.data.document))} 문서와 관련 없는 토론은 삭제될 수 있습니다. `);
        } else {
          return [
            server.vueExports.createVNode("strong", null, "[경고!]"),
            server.vueExports.createTextVNode(" 이 토론은 " + server.vueExports.toDisplayString(_ctx.doc_fulltitle(_ctx.page.data.document)) + " 문서의 토론입니다. " + server.vueExports.toDisplayString(_ctx.doc_fulltitle(_ctx.page.data.document)) + " 문서와 관련 없는 토론은 각 문서의 토론에서 진행해 주시기 바랍니다. " + server.vueExports.toDisplayString(_ctx.doc_fulltitle(_ctx.page.data.document)) + " 문서와 관련 없는 토론은 삭제될 수 있습니다. ", 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FormErrorAlert, null, null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, { method: "post" }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedFormBlock, {
          label: "주제 :",
          inputId: "topicInput",
          name: "topic"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input type="text" id="topicInput" name="topic" data-v-411228a7${_scopeId2}>`);
            } else {
              return [
                server.vueExports.createVNode("input", {
                  ref: "topicInput",
                  type: "text",
                  id: "topicInput",
                  name: "topic"
                }, null, 512)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CommentPreviewTab, { ref: "commentPreviewTab" }, null, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_IpWarn, { discuss: "" }, null, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
          class: "submit-button",
          submit: ""
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`전송`);
            } else {
              return [
                server.vueExports.createTextVNode("전송")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode(_component_SeedFormBlock, {
            label: "주제 :",
            inputId: "topicInput",
            name: "topic"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                ref: "topicInput",
                type: "text",
                id: "topicInput",
                name: "topic"
              }, null, 512)
            ]),
            _: 1
          }),
          server.vueExports.createVNode(_component_CommentPreviewTab, { ref: "commentPreviewTab" }, null, 512),
          server.vueExports.createVNode(_component_IpWarn, { discuss: "" }),
          server.vueExports.createVNode(_component_SeedButton, {
            class: "submit-button",
            submit: ""
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("전송")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/discuss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discuss = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-411228a7"]]);
exports.default = discuss;
