"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const diffCount = require("./diffCount-CcPCubZa.cjs");
require("node:stream");
require("node:path");
const _sfc_main$1 = {
  components: {
    SeedForm: seedForm.SeedForm,
    GeneralButton: server.GeneralButton,
    InputField: inputField.InputField
  },
  props: {
    blockClass: String
  },
  data() {
    return {
      value: this.$route.query.from
    };
  },
  computed: {
    showClearButton() {
      return !!this.value;
    }
  },
  methods: {
    clear() {
      this.value = "";
      this.$refs.input.focus();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, _attrs, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([$props.blockClass, "rev-input"])}" data-v-57162a2d${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
          ref: "input",
          modelValue: $data.value,
          "onUpdate:modelValue": ($event) => $data.value = $event,
          class: "input-field",
          type: "number",
          name: "from",
          pattern: "\\d+",
          min: "1",
          required: ""
        }, null, _parent2, _scopeId));
        _push2(`<span class="r-text" data-v-57162a2d${_scopeId}>r</span>`);
        if ($options.showClearButton) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            class: "clear-button",
            whenClick: $options.clear
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "circle-xmark" }, null, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "circle-xmark" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { type: "submit" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "share" }, null, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "share" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode("div", {
            class: ["rev-input", $props.blockClass]
          }, [
            server.vueExports.createVNode(_component_InputField, {
              ref: "input",
              modelValue: $data.value,
              "onUpdate:modelValue": ($event) => $data.value = $event,
              class: "input-field",
              type: "number",
              name: "from",
              pattern: "\\d+",
              min: "1",
              required: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            server.vueExports.createVNode("span", { class: "r-text" }, "r"),
            $options.showClearButton ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
              key: 0,
              class: "clear-button",
              whenClick: $options.clear
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "circle-xmark" })
              ]),
              _: 1
            }, 8, ["whenClick"])) : server.vueExports.createCommentVNode("", true),
            server.vueExports.createVNode(_component_GeneralButton, { type: "submit" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "share" })
              ]),
              _: 1
            })
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/revInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RevInput = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-57162a2d"]]);
const _sfc_main = {
  mixins: [server.Common],
  components: {
    SeedForm: seedForm.SeedForm,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    RevInput,
    GeneralButton: server.GeneralButton,
    LocalDate: server.LocalDate,
    NuxtLink: server.NuxtLink,
    DiffCount: diffCount.DiffCount,
    AuthorSpan: authorSpan.AuthorSpan
  },
  data() {
    return {
      diffOldRev: null,
      diffRev: null
    };
  },
  computed: {
    pageProps() {
      const revs = this.data.revs;
      const lastRev = revs[revs.length - 1];
      return {
        prev: revs[0].uuid !== this.data.latestRev.uuid ? { query: { until: revs[0].rev + 1 } } : null,
        next: lastRev.rev > 1 ? { query: { from: lastRev.rev - 1 } } : null
      };
    }
  },
  methods: {
    getActions(rev) {
      const actions = [
        ...rev.troll ? [] : [{
          action: "w",
          text: "보기",
          follow: true
        }],
        {
          action: "raw",
          text: "RAW"
        },
        {
          action: "blame",
          text: "Blame"
        },
        ...rev.troll ? [] : [{
          action: "revert",
          text: "이 리비전으로 되돌리기"
        }],
        ...rev.rev > 1 ? [{
          action: "diff",
          text: "비교"
        }] : []
      ];
      if (rev.transfer) actions.push({
        action: "transfer_contribution",
        text: "이 기여를 로그인 사용자로 이전하기",
        post: true
      });
      const permissions = this.data.permissions;
      if (permissions.troll) actions.push(rev.troll ? {
        action: "unmark_troll",
        text: "[A]반달표시 해제",
        admin: true
      } : {
        action: "mark_troll",
        text: "[A]반달로 표시",
        admin: true
      });
      if (rev.log && permissions.log) actions.push(rev.hideLog ? {
        action: "unhide_log",
        text: "[A]편집요약 숨기기 해제",
        admin: true
      } : {
        action: "hide_log",
        text: "[A]편집요약 숨기기",
        admin: true
      });
      if (permissions.hide) actions.push(rev.hidden ? {
        action: "unhide",
        text: "[A]리비전 숨기기 해제",
        admin: true
      } : {
        action: "hide",
        text: "[A]리비전 숨기기",
        admin: true
      });
      if (permissions.config && rev.fileKey) actions.push({
        action: "delete_file",
        text: "[A]파일 삭제",
        admin: true
      });
      return actions;
    },
    copyUuid(rev) {
      navigator.clipboard.writeText(rev.uuid);
      server.Ke(`r${rev.rev}의 UUID가 복사되었습니다.`);
    },
    async adminAction(rev, action) {
      await this.internalRequestAndProcess(this.doc_action_link(this.data.document, "a/" + action, { uuid: rev.uuid }));
    },
    async postAction(rev, action) {
      await this.internalRequestAndProcess(this.doc_action_link(this.data.document, action), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ uuid: rev.uuid }).toString()
      });
    },
    beforeDiff() {
      return !!this.diffOldRev && !!this.diffRev;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_RevInput = server.vueExports.resolveComponent("RevInput");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_DiffCount = server.vueExports.resolveComponent("DiffCount");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  _push(`<!--[--><div class="top-page-block" data-v-89aeba1b>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({
    class: "top-page top-page-item",
    flex: ""
  }, $options.pageProps), null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_RevInput, { blockClass: "top-page-item" }, null, _parent));
  _push(`</div>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    beforeSubmit: $options.beforeDiff,
    action: _ctx.doc_action_link(_ctx.data.document, "diff")
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-89aeba1b${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { type: "submit" }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`선택 리비전 비교`);
            } else {
              return [
                server.vueExports.createTextVNode("선택 리비전 비교")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p><ul data-v-89aeba1b${_scopeId}><!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.revs, (rev) => {
          _push2(`<li class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ troll: rev.troll })}" data-v-89aeba1b${_scopeId}><span data-v-89aeba1b${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
            date: rev.createdAt
          }, null, _parent2, _scopeId));
          _push2(`</span><span class="history-action" data-v-89aeba1b${_scopeId}> (<!--[-->`);
          server.serverRenderer_cjs_prodExports.ssrRenderList($options.getActions(rev), (action, index) => {
            _push2(`<!--[-->`);
            if (index !== 0) {
              _push2(`<!--[--> | <!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (action.admin) {
              _push2(`<a${server.serverRenderer_cjs_prodExports.ssrRenderAttr("rel", action.follow ? null : "nofollow")} data-v-89aeba1b${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(action.text)}</a>`);
            } else if (action.post) {
              _push2(`<a${server.serverRenderer_cjs_prodExports.ssrRenderAttr("rel", action.follow ? null : "nofollow")} data-v-89aeba1b${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(action.text)}</a>`);
            } else {
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
                to: _ctx.doc_action_link(_ctx.data.document, action.action, { uuid: rev.uuid }),
                rel: action.follow ? null : "nofollow"
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(action.text)}`);
                  } else {
                    return [
                      server.vueExports.createTextVNode(server.vueExports.toDisplayString(action.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
            _push2(`<!--]-->`);
          });
          _push2(`<!--]-->) </span>`);
          if (!rev.troll) {
            _push2(`<span data-v-89aeba1b${_scopeId}><input type="radio" name="olduuid"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", rev.uuid)}${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(rev.uuid === $data.diffOldRev) ? " checked" : ""} style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ visibility: !$data.diffRev || rev.rev < $data.diffRev.rev ? "visible" : "hidden" })}" data-v-89aeba1b${_scopeId}><input type="radio" name="uuid"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", rev.uuid)}${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(rev.uuid === $data.diffRev) ? " checked" : ""} style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ visibility: !$data.diffOldRev || rev.rev > $data.diffOldRev.rev ? "visible" : "hidden" })}" data-v-89aeba1b${_scopeId}></span>`);
          } else {
            _push2(`<!---->`);
          }
          if (rev.infoText) {
            _push2(`<i data-v-89aeba1b${_scopeId}>${"(" + _ctx.removeHtmlTags(rev.infoText) + ") "}</i>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<strong data-v-89aeba1b${_scopeId}><a class="rev-text" href="#" data-v-89aeba1b${_scopeId}>r${server.serverRenderer_cjs_prodExports.ssrInterpolate(rev.rev)}</a></strong><span data-v-89aeba1b${_scopeId}> (`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DiffCount, {
            count: rev.diffLength
          }, null, _parent2, _scopeId));
          _push2(`) </span>`);
          if (rev.editRequest) {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
              to: "/edit_request/" + rev.editRequest.url
            }, {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i data-v-89aeba1b${_scopeId2}>(편집 요청)</i>  `);
                } else {
                  return [
                    server.vueExports.createVNode("i", null, "(편집 요청)"),
                    server.vueExports.createTextVNode("  ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
            account: rev.user,
            pos: `${_ctx.doc_fulltitle(_ctx.data.document)} r${rev.rev}`
          }, null, _parent2, _scopeId));
          if (rev.troll) {
            _push2(`<!--[--> [`);
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
              account: rev.trollBy
            }, null, _parent2, _scopeId));
            _push2(` 사용자에 의해 반달로 표시됨] <!--]-->`);
          } else if (rev.log) {
            _push2(`<!--[-->`);
            if (rev.hideLog) {
              _push2(`<!--[--> (<span class="log" data-v-89aeba1b${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
                account: rev.hideLogBy
              }, null, _parent2, _scopeId));
              _push2(` 사용자에 의해 편집 요약 숨겨짐</span>) <!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (rev.hideLog && !rev.forceShowLog) {
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                class: "show-log-button",
                size: "small",
                whenClick: () => rev.forceShowLog = true
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`내용 보기`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("내용 보기")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!--[--> (<span class="log" data-v-89aeba1b${_scopeId}>`);
              if (rev.hideLog) {
                _push2(`<!--[-->내용: <!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(rev.log)}</span>) <!--]-->`);
            }
            _push2(`<!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode("p", null, [
            server.vueExports.createVNode(_component_GeneralButton, { type: "submit" }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("선택 리비전 비교")
              ]),
              _: 1
            })
          ]),
          server.vueExports.createVNode("ul", null, [
            (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.revs, (rev) => {
              return server.vueExports.openBlock(), server.vueExports.createBlock("li", {
                class: { troll: rev.troll },
                key: rev.uuid
              }, [
                server.vueExports.createVNode("span", null, [
                  server.vueExports.createVNode(_component_LocalDate, {
                    date: rev.createdAt
                  }, null, 8, ["date"])
                ]),
                server.vueExports.createVNode("span", { class: "history-action" }, [
                  server.vueExports.createTextVNode(" ("),
                  (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList($options.getActions(rev), (action, index) => {
                    return server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, null, [
                      index !== 0 ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                        server.vueExports.createTextVNode(" | ")
                      ], 64)) : server.vueExports.createCommentVNode("", true),
                      action.admin ? (server.vueExports.openBlock(), server.vueExports.createBlock("a", {
                        key: 1,
                        onClick: ($event) => $options.adminAction(rev, action.action),
                        rel: action.follow ? null : "nofollow"
                      }, server.vueExports.toDisplayString(action.text), 9, ["onClick", "rel"])) : action.post ? (server.vueExports.openBlock(), server.vueExports.createBlock("a", {
                        key: 2,
                        onClick: ($event) => $options.postAction(rev, action.action),
                        rel: action.follow ? null : "nofollow"
                      }, server.vueExports.toDisplayString(action.text), 9, ["onClick", "rel"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_NuxtLink, {
                        key: 3,
                        to: _ctx.doc_action_link(_ctx.data.document, action.action, { uuid: rev.uuid }),
                        rel: action.follow ? null : "nofollow"
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode(server.vueExports.toDisplayString(action.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["to", "rel"]))
                    ], 64);
                  }), 256)),
                  server.vueExports.createTextVNode(") ")
                ]),
                !rev.troll ? (server.vueExports.openBlock(), server.vueExports.createBlock("span", { key: 0 }, [
                  server.vueExports.createVNode("input", {
                    type: "radio",
                    name: "olduuid",
                    value: rev.uuid,
                    checked: rev.uuid === $data.diffOldRev,
                    onClick: ($event) => $data.diffOldRev = rev,
                    style: { visibility: !$data.diffRev || rev.rev < $data.diffRev.rev ? "visible" : "hidden" }
                  }, null, 12, ["value", "checked", "onClick"]),
                  server.vueExports.createVNode("input", {
                    type: "radio",
                    name: "uuid",
                    value: rev.uuid,
                    checked: rev.uuid === $data.diffRev,
                    onClick: ($event) => $data.diffRev = rev,
                    style: { visibility: !$data.diffOldRev || rev.rev > $data.diffOldRev.rev ? "visible" : "hidden" }
                  }, null, 12, ["value", "checked", "onClick"])
                ])) : server.vueExports.createCommentVNode("", true),
                rev.infoText ? (server.vueExports.openBlock(), server.vueExports.createBlock("i", {
                  key: 1,
                  innerHTML: "(" + _ctx.removeHtmlTags(rev.infoText) + ") "
                }, null, 8, ["innerHTML"])) : server.vueExports.createCommentVNode("", true),
                server.vueExports.createVNode("strong", null, [
                  server.vueExports.createVNode("a", {
                    class: "rev-text",
                    href: "#",
                    onClick: server.vueExports.withModifiers(($event) => $options.copyUuid(rev), ["prevent"])
                  }, "r" + server.vueExports.toDisplayString(rev.rev), 9, ["onClick"])
                ]),
                server.vueExports.createVNode("span", null, [
                  server.vueExports.createTextVNode(" ("),
                  server.vueExports.createVNode(_component_DiffCount, {
                    count: rev.diffLength
                  }, null, 8, ["count"]),
                  server.vueExports.createTextVNode(") ")
                ]),
                rev.editRequest ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_NuxtLink, {
                  key: 2,
                  to: "/edit_request/" + rev.editRequest.url
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createVNode("i", null, "(편집 요청)"),
                    server.vueExports.createTextVNode("  ")
                  ]),
                  _: 2
                }, 1032, ["to"])) : server.vueExports.createCommentVNode("", true),
                server.vueExports.createVNode(_component_AuthorSpan, {
                  account: rev.user,
                  pos: `${_ctx.doc_fulltitle(_ctx.data.document)} r${rev.rev}`
                }, null, 8, ["account", "pos"]),
                rev.troll ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 3 }, [
                  server.vueExports.createTextVNode(" ["),
                  server.vueExports.createVNode(_component_AuthorSpan, {
                    account: rev.trollBy
                  }, null, 8, ["account"]),
                  server.vueExports.createTextVNode(" 사용자에 의해 반달로 표시됨] ")
                ], 64)) : rev.log ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 4 }, [
                  rev.hideLog ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                    server.vueExports.createTextVNode(" ("),
                    server.vueExports.createVNode("span", { class: "log" }, [
                      server.vueExports.createVNode(_component_AuthorSpan, {
                        account: rev.hideLogBy
                      }, null, 8, ["account"]),
                      server.vueExports.createTextVNode(" 사용자에 의해 편집 요약 숨겨짐")
                    ]),
                    server.vueExports.createTextVNode(") ")
                  ], 64)) : server.vueExports.createCommentVNode("", true),
                  rev.hideLog && !rev.forceShowLog ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                    key: 1,
                    class: "show-log-button",
                    size: "small",
                    whenClick: () => rev.forceShowLog = true
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("내용 보기")
                    ]),
                    _: 2
                  }, 1032, ["whenClick"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 2 }, [
                    server.vueExports.createTextVNode(" ("),
                    server.vueExports.createVNode("span", { class: "log" }, [
                      rev.hideLog ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                        server.vueExports.createTextVNode("내용: ")
                      ], 64)) : server.vueExports.createCommentVNode("", true),
                      server.vueExports.createTextVNode(server.vueExports.toDisplayString(rev.log), 1)
                    ]),
                    server.vueExports.createTextVNode(") ")
                  ], 64))
                ], 64)) : server.vueExports.createCommentVNode("", true)
              ], 2);
            }), 128))
          ]),
          server.vueExports.createVNode(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/document/history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const history = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-89aeba1b"]]);
exports.default = history;
