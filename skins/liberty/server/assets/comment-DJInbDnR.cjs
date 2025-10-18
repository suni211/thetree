"use strict";
const server = require("../server.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
const wikiContent = require("./wikiContent-j_kAYLje.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
const _sfc_main = {
  components: {
    SeedButton: seedButton.SeedButton,
    GeneralButton: server.GeneralButton,
    WikiContent: wikiContent.WikiContent,
    ContextMenu: authorSpan.ContextMenu,
    LocalDate: server.LocalDate,
    AuthorSpan: authorSpan.AuthorSpan
  },
  mixins: [server.Common],
  emits: ["updateShow", "updateHide", "show", "hide"],
  directives: {
    closePopover: server.Et
  },
  props: {
    comment: {
      type: JSON,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    previewMode: Boolean,
    tooltipMode: Boolean,
    thread: JSON
  },
  data() {
    return {
      shown: false,
      tooltipVisible: false,
      showRaw: false,
      rawContent: null,
      loadingRaw: false,
      abortController: null,
      forceShow: false
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries.length > 0) {
        const entry = entries[0];
        this.shown = entry.isIntersecting;
        this.$emit(this.shown ? "show" : "hide");
      }
    });
    this.observer.observe(this.$refs.elem);
    this.abortController = new AbortController();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  },
  computed: {
    fetched() {
      return this.comment.user;
    },
    pos() {
      return "토론 " + this.slug + " #" + this.comment.id;
    }
  },
  methods: {
    async loadRaw() {
      if (this.loadingRaw) return;
      this.loadingRaw = true;
      try {
        const res = await this.internalRequest(`/thread/${this.slug}/${this.comment.id}/raw`, {
          noProgress: true
        });
        if (res.code) {
          alert(res.data);
          this.showRaw = false;
          return;
        }
        this.rawContent = res.data;
      } catch (e) {
        console.error(e);
        this.showRaw = false;
      } finally {
        this.loadingRaw = false;
      }
    },
    async toggleRaw() {
      this.showRaw = !this.showRaw;
      if (this.showRaw && this.rawContent === null) {
        await this.loadRaw();
      }
    },
    async toggleHide() {
      await this.internalRequestAndProcess(`/admin/thread/${this.slug}/${this.comment.id}/${this.comment.hidden ? "show" : "hide"}`, {
        method: "POST"
      });
    },
    async togglePin() {
      await this.internalRequestAndProcess(`/admin/thread/${this.slug}/${this.data.thread.pinnedComment === this.comment.id ? 0 : this.comment.id}/pin`, {
        method: "POST"
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_ContextMenu = server.vueExports.resolveComponent("ContextMenu");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_WikiContent = server.vueExports.resolveComponent("WikiContent");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  const _directive_close_popover = server.vueExports.resolveDirective("close-popover");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    ref: "elem",
    class: ["comment", {
      loading: !$options.fetched,
      visible: $data.shown,
      "tooltip-mode": $props.tooltipMode
    }]
  }, _attrs, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_close_popover)))} data-v-9a889b34><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ "tooltip-mode": $props.tooltipMode }, "comment-inside"])}" data-v-9a889b34><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ "user-starter": !$props.previewMode && ($props.comment.user && ((_a = $props.comment.user) == null ? void 0 : _a.uuid) === ((_b = _ctx.data.thread) == null ? void 0 : _b.createdUser)) }, "user-block"])}" data-v-9a889b34><span class="num-text" data-v-9a889b34><a${server.serverRenderer_cjs_prodExports.ssrRenderAttr("id", $props.comment.id)} data-v-9a889b34>#${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.comment.id)}</a></span>`);
  if ($options.fetched) {
    _push(`<!--[-->`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: $props.comment.user,
      pos: $options.pos,
      discuss: "",
      discussAdmin: $props.comment.admin
    }, null, _parent));
    _push(`<span class="time-block" data-v-9a889b34>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: $props.comment.createdAt
    }, null, _parent));
    if (!$props.previewMode && $props.comment.type === 0) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ContextMenu, {
        class: "menu-block",
        placement: "bottom-end"
      }, {
        menu: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2;
          if (_push2) {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, server.vueExports.mergeProps({ whenClick: $options.toggleRaw }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_close_popover)), null, _parent2, _scopeId));
            if (_ctx.data.permissions.manage) {
              _push2(`<!--[--><hr data-v-9a889b34${_scopeId}>`);
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, server.vueExports.mergeProps({
                theme: "danger",
                whenClick: $options.toggleHide
              }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_close_popover)), null, _parent2, _scopeId));
              _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, server.vueExports.mergeProps({
                theme: "danger",
                whenClick: $options.togglePin
              }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_close_popover)), null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              server.vueExports.withDirectives(server.vueExports.createVNode(_component_GeneralButton, {
                whenClick: $options.toggleRaw,
                textContent: server.vueExports.toDisplayString($data.showRaw ? "위키 보기" : "원문 보기")
              }, null, 8, ["whenClick", "textContent"]), [
                [_directive_close_popover]
              ]),
              _ctx.data.permissions.manage ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
                server.vueExports.createVNode("hr"),
                server.vueExports.withDirectives(server.vueExports.createVNode(_component_GeneralButton, {
                  theme: "danger",
                  whenClick: $options.toggleHide,
                  textContent: server.vueExports.toDisplayString($props.comment.hidden ? "[ADMIN] 숨기기 해제" : "[ADMIN] 숨기기")
                }, null, 8, ["whenClick", "textContent"]), [
                  [_directive_close_popover]
                ]),
                server.vueExports.withDirectives(server.vueExports.createVNode(_component_GeneralButton, {
                  theme: "danger",
                  whenClick: $options.togglePin,
                  textContent: server.vueExports.toDisplayString($props.comment.id === ((_a2 = _ctx.data.thread) == null ? void 0 : _a2.pinnedComment) ? "[ADMIN] 댓글 고정 해제" : "[ADMIN] 댓글 고정")
                }, null, 8, ["whenClick", "textContent"]), [
                  [_directive_close_popover]
                ])
              ], 64)) : server.vueExports.createCommentVNode("", true)
            ];
          }
        }),
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { class: "menu-button" }, {
              default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, { icon: "caret-down" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "caret-down" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              server.vueExports.createVNode(_component_GeneralButton, { class: "menu-button" }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode(_component_FontAwesomeIcon, { icon: "caret-down" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</span><div class="clearfix" data-v-9a889b34></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{
    "special-comment": $options.fetched && $props.comment.type !== 0,
    "hidden-comment": $props.comment.hidden && !$data.forceShow
  }, "content-block"])}" data-v-9a889b34>`);
  if (!$options.fetched || !$props.comment.hidden || $data.forceShow) {
    _push(`<!--[-->`);
    if ($data.showRaw) {
      _push(`<div class="wiki-raw" data-v-9a889b34>${server.serverRenderer_cjs_prodExports.ssrInterpolate($data.rawContent)}</div>`);
    } else if ($props.comment.contentHtml) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiContent, {
        discuss: "",
        content: $props.comment.contentHtml
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($data.forceShow && $props.comment.hidden) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
        onClick: ($event) => $data.forceShow = false,
        danger: ""
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`[ADMIN] HIDE`);
          } else {
            return [
              server.vueExports.createTextVNode("[ADMIN] HIDE")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!--[--> [`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: $props.comment.hideUser,
      pos: $options.pos,
      discuss: "",
      discussAdmin: $props.comment.hideUser.admin
    }, null, _parent));
    _push(`에 의해 숨겨진 글입니다.] `);
    if (_ctx.data.permissions.manage) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
        onClick: ($event) => $data.forceShow = true,
        danger: ""
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`[ADMIN] SHOW`);
          } else {
            return [
              server.vueExports.createTextVNode("[ADMIN] SHOW")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/comment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Comment = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9a889b34"]]);
exports.Comment = Comment;
