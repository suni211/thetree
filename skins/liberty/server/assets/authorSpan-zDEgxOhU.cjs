"use strict";
const server = require("../server.cjs");
const _sfc_main$1 = {
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    noMaxSize: Boolean
  },
  components: {
    PopperWrapper: server.Rt
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PopperWrapper = server.vueExports.resolveComponent("PopperWrapper");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PopperWrapper, server.vueExports.mergeProps({
    theme: "contextmenu",
    delay: 0,
    handleResize: true,
    autoHide: true,
    triggers: ["click"],
    placement: $props.placement,
    popperClass: ["context-menu", { "max-size": !$props.noMaxSize }]
  }, _attrs), {
    popper: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "menu", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          server.vueExports.renderSlot(_ctx.$slots, "menu")
        ];
      }
    }),
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          server.vueExports.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contextMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContextMenu = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mixins: [server.Common],
  components: {
    ContextMenu,
    GeneralButton: server.GeneralButton
  },
  directives: {
    closePopover: server.Et
  },
  props: {
    account: {
      type: JSON,
      required: true
    },
    discuss: Boolean,
    discussAdmin: Boolean,
    pos: String
  },
  computed: {
    nameLink() {
      if (this.account.type === 1)
        return this.doc_action_link(`사용자:${this.account.name}`, "w");
      else if (this.account.uuid)
        return this.contribution_link(this.account.uuid);
    },
    isDeleted() {
      return this.account.type === -1;
    },
    isBold() {
      const isAccount = this.account.type === 1;
      return this.discuss ? this.discussAdmin : isAccount;
    },
    isMigrated() {
      return this.account.type === 2;
    },
    accountName() {
      return this.isDeleted ? "(삭제된 사용자)" : this.account.name || this.account.ip;
    },
    nameStyle() {
      if (!this.isDeleted) return this.account.userCSS;
    },
    accountType() {
      let str = this.account.type === 0 ? "IP" : "사용자";
      if (this.account.type === 2) str = "마이그레이션된 " + str;
      const admin = !!(this.account.flags & 1 << 5);
      const autoVerified = !!(this.account.flags & 1 << 1);
      const mobileVerified = !!(this.account.flags & 1 << 2);
      if (autoVerified && mobileVerified) str = "모바일과 자동 인증된 " + str;
      else if (autoVerified) str = "자동 인증된 " + str;
      else if (mobileVerified) str = "모바일 인증된 " + str;
      if (admin) str += " (관리자)";
      else if (this.discussAdmin) str += " (전 관리자)";
      return str;
    },
    isBlockable() {
      return [0, 1].includes(this.account.type);
    }
  },
  methods: {
    onBlockButtonClick() {
      const note = `${this.pos ? this.pos + " " : ""}긴급차단`;
      this.openQuickACLGroup({
        ...this.account.type === 0 ? {
          ip: this.account.ip
        } : {
          username: this.account.name
        },
        note
      });
    },
    copyUuid() {
      if (!this.account.uuid) return;
      navigator.clipboard.writeText(this.account.uuid);
      server.Ke(`사용자 '${this.accountName}'의 UUID가 복사되었습니다.`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContextMenu = server.vueExports.resolveComponent("ContextMenu");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _directive_close_popover = server.vueExports.resolveDirective("close-popover");
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ContextMenu, server.vueExports.mergeProps({ class: "author-span" }, _attrs), {
    menu: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="account-info" data-v-be768a1c${_scopeId}><div class="account-type" data-v-be768a1c${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.accountType)}</div><div class="account-name" data-v-be768a1c${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.accountName)}</div></div><hr data-v-be768a1c${_scopeId}>`);
        if ($options.isDeleted && !$props.account.uuid) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { disabled: "" }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`(없음)`);
              } else {
                return [
                  server.vueExports.createTextVNode("(없음)")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if ($props.account.type === 1) {
          _push2(`<!--[-->`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { href: $options.nameLink }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`사용자 문서`);
              } else {
                return [
                  server.vueExports.createTextVNode("사용자 문서")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<hr data-v-be768a1c${_scopeId}><!--]-->`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.account.uuid) {
          _push2(`<!--[-->`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            href: _ctx.contribution_link($props.account.uuid)
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`문서 기여 내역`);
              } else {
                return [
                  server.vueExports.createTextVNode("문서 기여 내역")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
            href: _ctx.contribution_link_discuss($props.account.uuid)
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`토론 기여 내역`);
              } else {
                return [
                  server.vueExports.createTextVNode("토론 기여 내역")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          if (_ctx.session.quick_block) {
            _push2(`<!--[--><hr data-v-be768a1c${_scopeId}>`);
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, server.vueExports.mergeProps({ whenClick: $options.copyUuid }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_close_popover)), {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`UUID 복사`);
                } else {
                  return [
                    server.vueExports.createTextVNode("UUID 복사")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
              href: { path: "/BlockHistory", query: { query: $props.account.type === 0 ? $props.account.ip : $props.account.uuid, target: "text" } }
            }, {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`차단 내역 조회`);
                } else {
                  return [
                    server.vueExports.createTextVNode("차단 내역 조회")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if ($options.isBlockable) {
              _push2(`<!--[--><hr data-v-be768a1c${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, server.vueExports.mergeProps({
                theme: "danger",
                whenClick: $options.onBlockButtonClick
              }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_close_popover)), {
                default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`차단`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("차단")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          server.vueExports.createVNode("div", { class: "account-info" }, [
            server.vueExports.createVNode("div", {
              class: "account-type",
              textContent: server.vueExports.toDisplayString($options.accountType)
            }, null, 8, ["textContent"]),
            server.vueExports.createVNode("div", {
              class: "account-name",
              textContent: server.vueExports.toDisplayString($options.accountName)
            }, null, 8, ["textContent"])
          ]),
          server.vueExports.createVNode("hr"),
          $options.isDeleted && !$props.account.uuid ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
            key: 0,
            disabled: ""
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode("(없음)")
            ]),
            _: 1
          })) : server.vueExports.createCommentVNode("", true),
          $props.account.type === 1 ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
            server.vueExports.createVNode(_component_GeneralButton, { href: $options.nameLink }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("사용자 문서")
              ]),
              _: 1
            }, 8, ["href"]),
            server.vueExports.createVNode("hr")
          ], 64)) : server.vueExports.createCommentVNode("", true),
          $props.account.uuid ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 2 }, [
            server.vueExports.createVNode(_component_GeneralButton, {
              href: _ctx.contribution_link($props.account.uuid)
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("문서 기여 내역")
              ]),
              _: 1
            }, 8, ["href"]),
            server.vueExports.createVNode(_component_GeneralButton, {
              href: _ctx.contribution_link_discuss($props.account.uuid)
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("토론 기여 내역")
              ]),
              _: 1
            }, 8, ["href"]),
            _ctx.session.quick_block ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
              server.vueExports.createVNode("hr"),
              server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, { whenClick: $options.copyUuid }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("UUID 복사")
                ]),
                _: 1
              }, 8, ["whenClick"])), [
                [_directive_close_popover]
              ]),
              server.vueExports.createVNode(_component_GeneralButton, {
                href: { path: "/BlockHistory", query: { query: $props.account.type === 0 ? $props.account.ip : $props.account.uuid, target: "text" } }
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("차단 내역 조회")
                ]),
                _: 1
              }, 8, ["href"]),
              $options.isBlockable ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                server.vueExports.createVNode("hr"),
                server.vueExports.withDirectives((server.vueExports.openBlock(), server.vueExports.createBlock(_component_GeneralButton, {
                  theme: "danger",
                  whenClick: $options.onBlockButtonClick
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("차단")
                  ]),
                  _: 1
                }, 8, ["whenClick"])), [
                  [_directive_close_popover]
                ])
              ], 64)) : server.vueExports.createCommentVNode("", true)
            ], 64)) : server.vueExports.createCommentVNode("", true)
          ], 64)) : server.vueExports.createCommentVNode("", true)
        ];
      }
    }),
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        server.serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, server.vueExports.createVNode(server.vueExports.resolveDynamicComponent($options.nameLink ? "a" : "span"), {
          class: {
            "name-bold": $options.isBold,
            "name-deleted": $options.isDeleted,
            "name-deleted-span": !$options.nameLink,
            "name-migrated": $options.isMigrated
          },
          href: $options.nameLink,
          style: $options.nameStyle,
          onClick: () => {
          }
        }, null), _parent2, _scopeId);
      } else {
        return [
          (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.resolveDynamicComponent($options.nameLink ? "a" : "span"), {
            class: {
              "name-bold": $options.isBold,
              "name-deleted": $options.isDeleted,
              "name-deleted-span": !$options.nameLink,
              "name-migrated": $options.isMigrated
            },
            href: $options.nameLink,
            style: $options.nameStyle,
            textContent: server.vueExports.toDisplayString($options.accountName),
            onClick: server.vueExports.withModifiers(() => {
            }, ["prevent"])
          }, null, 8, ["class", "href", "style", "textContent", "onClick"]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/authorSpan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthorSpan = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-be768a1c"]]);
exports.AuthorSpan = AuthorSpan;
exports.ContextMenu = ContextMenu;
