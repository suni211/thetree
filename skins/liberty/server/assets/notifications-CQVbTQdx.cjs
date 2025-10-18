"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const comment = require("./comment-DJInbDnR.cjs");
const linkTab = require("./linkTab-DjDJQVUI.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
require("node:stream");
require("node:path");
require("./wikiContent-j_kAYLje.cjs");
require("./seedButton-BF8dRxSz.cjs");
const NotificationTypes = {
  UserDiscuss: 0,
  Mention: 1,
  Owner: 2,
  Plugin: 3
};
const _sfc_main = {
  mixins: [server.Common],
  components: {
    GeneralButton: server.GeneralButton,
    LocalDate: server.LocalDate,
    AuthorSpan: authorSpan.AuthorSpan,
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    LinkTab: linkTab.LinkTab,
    Comment: comment.Comment
  },
  data() {
    return {
      NotificationTypes
    };
  },
  methods: {
    iconClass(type) {
      return {
        [NotificationTypes.UserDiscuss]: "icon-user-discuss",
        [NotificationTypes.Mention]: "icon-mention",
        [NotificationTypes.Owner]: "icon-owner"
      }[type];
    },
    iconName(type) {
      return {
        [NotificationTypes.UserDiscuss]: "comments",
        [NotificationTypes.Mention]: "at",
        [NotificationTypes.Owner]: "bullhorn",
        [NotificationTypes.Plugin]: "bell"
      }[type];
    },
    async markNotification(uuid, read) {
      await this.internalRequestAndProcess(`/member/notifications/${uuid}/${read ? "read" : "unread"}`, {
        method: "POST"
      });
    },
    async readAll() {
      await this.internalRequestAndProcess("/member/notifications/read", {
        method: "POST"
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LinkTab = server.vueExports.resolveComponent("LinkTab");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LinkTab, {
    items: [
      {
        title: "읽지 않음",
        href: "?status=unread",
        active: !_ctx.$route.query.status || _ctx.$route.query.status === "unread"
      },
      {
        title: "읽음",
        href: "?status=read",
        active: _ctx.$route.query.status === "read"
      },
      {
        title: "전체",
        href: "?status=all",
        active: _ctx.$route.query.status === "all"
      }
    ]
  }, null, _parent));
  _push(`<div class="top-button-group" data-v-8f9e9d31>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
    whenClick: $options.readAll,
    disabled: !_ctx.session.notifications.length
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`모두 읽음`);
      } else {
        return [
          server.vueExports.createTextVNode("모두 읽음")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="list" data-v-8f9e9d31>`);
  if (_ctx.data.items.length) {
    _push(`<!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.items, (item) => {
      _push(`<li class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ read: item.read }, "row-parent"])}" data-v-8f9e9d31>`);
      server.serverRenderer_cjs_prodExports.ssrRenderVNode(_push, server.vueExports.createVNode(server.vueExports.resolveDynamicComponent(item.url ? "NuxtLink" : "div"), {
        to: item.url,
        class: "row row-link"
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="item" data-v-8f9e9d31${_scopeId}><span class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([$options.iconClass(item.type), "icon"])}" data-v-8f9e9d31${_scopeId}>`);
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, {
              icon: $options.iconName(item.type)
            }, null, _parent2, _scopeId));
            _push2(`</span></div><div class="item content" data-v-8f9e9d31${_scopeId}>`);
            if (item.type === $data.NotificationTypes.UserDiscuss) {
              _push2(`<!--[--><div data-v-8f9e9d31${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
                account: item.comment.user
              }, null, _parent2, _scopeId));
              _push2(` 사용자가 `);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
                to: "/thread/" + item.thread.url
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.thread.topic)} #${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.comment.id)}`);
                  } else {
                    return [
                      server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.thread.topic) + " #" + server.vueExports.toDisplayString(item.comment.id), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(` 사용자 토론 댓글 작성 </div><div class="text" data-v-8f9e9d31${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.removeHtmlTags(item.comment.contentHtml))}</div><!--]-->`);
            } else if (item.type === $data.NotificationTypes.Mention) {
              _push2(`<!--[--><div data-v-8f9e9d31${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
                account: item.comment.user
              }, null, _parent2, _scopeId));
              _push2(` 사용자가 `);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
                to: "/thread/" + item.thread.url
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.thread.topic)} #${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.comment.id)}`);
                  } else {
                    return [
                      server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.thread.topic) + " #" + server.vueExports.toDisplayString(item.comment.id), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(` 댓글에서 호출 <span class="document-group" data-v-8f9e9d31${_scopeId}><span class="document-icon" data-v-8f9e9d31${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" }, null, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
                to: _ctx.doc_action_link(item.document, "discuss"),
                class: "document-link"
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item.document))}`);
                  } else {
                    return [
                      server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item.document)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span></div><div class="text" data-v-8f9e9d31${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.removeHtmlTags(item.comment.contentHtml))}</div><!--]-->`);
            } else if (item.type === $data.NotificationTypes.Owner || item.type === $data.NotificationTypes.Plugin) {
              _push2(`<div class="html-notification" data-v-8f9e9d31${_scopeId}>${item.data ?? ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text" data-v-8f9e9d31${_scopeId}>`);
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
              date: item.createdAt,
              relative: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="buttons-wrap" data-v-8f9e9d31${_scopeId}>`);
            if (item.read) {
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                size: "small",
                whenClick: () => $options.markNotification(item.uuid, false)
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`읽지 않음`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("읽지 않음")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                size: "small",
                whenClick: () => $options.markNotification(item.uuid, true)
              }, {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`읽음`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("읽음")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              server.vueExports.createVNode("div", { class: "item" }, [
                server.vueExports.createVNode("span", {
                  class: ["icon", $options.iconClass(item.type)]
                }, [
                  server.vueExports.createVNode(_component_FontAwesomeIcon, {
                    icon: $options.iconName(item.type)
                  }, null, 8, ["icon"])
                ], 2)
              ]),
              server.vueExports.createVNode("div", { class: "item content" }, [
                item.type === $data.NotificationTypes.UserDiscuss ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                  server.vueExports.createVNode("div", null, [
                    server.vueExports.createVNode(_component_AuthorSpan, {
                      account: item.comment.user
                    }, null, 8, ["account"]),
                    server.vueExports.createTextVNode(" 사용자가 "),
                    server.vueExports.createVNode(_component_NuxtLink, {
                      to: "/thread/" + item.thread.url
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.thread.topic) + " #" + server.vueExports.toDisplayString(item.comment.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    server.vueExports.createTextVNode(" 사용자 토론 댓글 작성 ")
                  ]),
                  server.vueExports.createVNode("div", { class: "text" }, server.vueExports.toDisplayString(_ctx.removeHtmlTags(item.comment.contentHtml)), 1)
                ], 64)) : item.type === $data.NotificationTypes.Mention ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
                  server.vueExports.createVNode("div", null, [
                    server.vueExports.createVNode(_component_AuthorSpan, {
                      account: item.comment.user
                    }, null, 8, ["account"]),
                    server.vueExports.createTextVNode(" 사용자가 "),
                    server.vueExports.createVNode(_component_NuxtLink, {
                      to: "/thread/" + item.thread.url
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.thread.topic) + " #" + server.vueExports.toDisplayString(item.comment.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    server.vueExports.createTextVNode(" 댓글에서 호출 "),
                    server.vueExports.createVNode("span", { class: "document-group" }, [
                      server.vueExports.createVNode("span", { class: "document-icon" }, [
                        server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "fa-regular fa-file-lines" })
                      ]),
                      server.vueExports.createVNode(_component_NuxtLink, {
                        to: _ctx.doc_action_link(item.document, "discuss"),
                        class: "document-link"
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item.document)), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ]),
                  server.vueExports.createVNode("div", { class: "text" }, server.vueExports.toDisplayString(_ctx.removeHtmlTags(item.comment.contentHtml)), 1)
                ], 64)) : item.type === $data.NotificationTypes.Owner || item.type === $data.NotificationTypes.Plugin ? (server.vueExports.openBlock(), server.vueExports.createBlock("div", {
                  key: 2,
                  innerHTML: item.data,
                  class: "html-notification"
                }, null, 8, ["innerHTML"])) : server.vueExports.createCommentVNode("", true),
                server.vueExports.createVNode("div", { class: "text" }, [
                  server.vueExports.createVNode(_component_LocalDate, {
                    date: item.createdAt,
                    relative: ""
                  }, null, 8, ["date"])
                ])
              ]),
              server.vueExports.createVNode("div", { class: "buttons-wrap" }, [
                item.read ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                  key: 0,
                  size: "small",
                  whenClick: () => $options.markNotification(item.uuid, false)
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("읽지 않음")
                  ]),
                  _: 2
                }, 1032, ["whenClick"])) : (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                  key: 1,
                  size: "small",
                  whenClick: () => $options.markNotification(item.uuid, true)
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("읽음")
                  ]),
                  _: 2
                }, 1032, ["whenClick"]))
              ])
            ];
          }
        }),
        _: 2
      }), _parent);
      _push(`</li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<li class="row-parent" data-v-8f9e9d31><div class="row no-item" data-v-8f9e9d31> (모든 알림을 확인했습니다.) </div></li>`);
  }
  _push(`</ul>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notifications = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8f9e9d31"]]);
exports.default = notifications;
