"use strict";
const server = require("../server.cjs");
const _sfc_main$1 = {
  components: {
    NuxtLink: server.NuxtLink
  },
  props: {
    href: {
      type: String,
      required: true
    },
    active: Boolean
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  _push(`<li${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({ ref: "item" }, _attrs))} data-v-d44c6321>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
    to: $props.href,
    class: ["item", { active: $props.active }]
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          server.vueExports.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</li>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/linkTabItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LinkTabItem = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d44c6321"]]);
const _sfc_main = {
  components: {
    LinkTabItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    tab: Boolean
  },
  data() {
    return {
      eventAbortController: void 0,
      showScrollGlowLeft: false,
      showScrollGlowRight: false,
      scrollGlowOpacityLeft: 1,
      scrollGlowOpacityRight: 1,
      scrollGlowWidth: 0,
      navigationPaddingLeft: 0,
      navigationPaddingRight: 0
    };
  },
  directives: {
    dragToScroll(el, binding) {
      var _a;
      let startX, startY, scrollLeft;
      let isDragging = false;
      const controller = (_a = binding.value) == null ? void 0 : _a.controller;
      const signal = controller == null ? void 0 : controller.signal;
      const clearDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        Array.from(el.querySelectorAll("a")).forEach((a) => {
          a.removeAttribute("draggable");
          a.style.removeProperty("user-select");
          a.style.removeProperty("pointer-events");
        });
      };
      el.addEventListener("mousedown", (e) => {
        scrollLeft = el.scrollLeft;
        el.scrollTop;
        startX = e.pageX - el.offsetLeft;
        startY = e.pageY - el.offsetTop;
        isDragging = true;
      }, { signal });
      el.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const dx = e.pageX - el.offsetLeft - startX;
        const dy = e.pageY - el.offsetTop - startY;
        if (dx !== 0 || dy !== 0) {
          Array.from(el.querySelectorAll("a")).forEach((a) => {
            a.setAttribute("draggable", "false");
            a.style.userSelect = "none";
            a.style.pointerEvents = "none";
          });
        }
        el.scrollLeft = scrollLeft - dx;
      }, { signal });
      el.addEventListener("mouseup", clearDrag, { signal });
      el.addEventListener("mouseleave", clearDrag, { signal });
    }
  },
  methods: {
    navigationHorizontalScrollCheck(initial) {
      const nav = this.$refs.navigation;
      if (!nav) return;
      if (nav.firstChild) {
        const style = getComputedStyle(nav.firstChild);
        const mr = parseFloat(style.marginRight) || 0;
        const ml = parseFloat(style.marginLeft) || 0;
        if (mr > 0) this.navigationPaddingRight = mr;
        if (ml > 0) this.navigationPaddingLeft = ml;
      }
      const glowEl = this.$refs.scrollGlowLeft;
      this.scrollGlowWidth = parseFloat(getComputedStyle(glowEl).width) || 0;
      if (initial && Array.isArray(this.$refs.items)) {
        const activeItem = this.$refs.items.find((c) => c.$props.active);
        const itemEl = activeItem == null ? void 0 : activeItem.$refs.item;
        if (itemEl) {
          const rect = itemEl.getBoundingClientRect();
          const center = rect.left + nav.scrollLeft + rect.width / 2;
          const half = nav.offsetWidth / 2;
          nav.scrollLeft = center > half ? center - half : 0;
        }
      }
      this.showScrollGlowLeft = nav.scrollLeft >= this.scrollGlowWidth;
      this.showScrollGlowRight = nav.offsetWidth + nav.scrollLeft < nav.scrollWidth;
    },
    navigationHorizontalScrollProcess() {
      const nav = this.$refs.navigation;
      if (!nav) return;
      if (nav.scrollLeft < this.navigationPaddingLeft) {
        this.scrollGlowOpacityLeft = 1;
      } else {
        this.scrollGlowOpacityLeft = (nav.scrollLeft - this.navigationPaddingLeft) / this.scrollGlowWidth;
      }
      this.showScrollGlowLeft = nav.scrollLeft > this.navigationPaddingLeft;
      const maxScroll = nav.scrollWidth - this.navigationPaddingRight;
      const distanceRight = maxScroll - nav.offsetWidth - nav.scrollLeft;
      if (distanceRight > this.scrollGlowWidth) {
        this.scrollGlowOpacityRight = 1;
      } else {
        this.scrollGlowOpacityRight = distanceRight / this.scrollGlowWidth;
      }
      this.showScrollGlowRight = nav.offsetWidth + nav.scrollLeft < maxScroll;
    },
    onResizeWindow() {
      this.navigationHorizontalScrollCheck(false);
      this.navigationHorizontalScrollProcess();
    },
    onNavigationScroll() {
      this.navigationHorizontalScrollProcess();
    }
  },
  watch: {
    async $route() {
      await this.$nextTick();
      this.navigationHorizontalScrollCheck(true);
      this.navigationHorizontalScrollProcess();
    }
  },
  mounted() {
    this.eventAbortController = new AbortController();
    this.navigationHorizontalScrollCheck(true);
    this.navigationHorizontalScrollProcess();
    window.addEventListener("resize", this.onResizeWindow, {
      signal: this.eventAbortController.signal
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LinkTabItem = server.vueExports.resolveComponent("LinkTabItem");
  const _directive_drag_to_scroll = server.vueExports.resolveDirective("drag-to-scroll");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({ class: "link-tab" }, _attrs))} data-v-31411c96><div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    ref: "navigation",
    class: ["tab-content", { "tab-line": $props.tab }]
  }, server.serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_drag_to_scroll, { controller: $data.eventAbortController })))} data-v-31411c96><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ "tab-wrapper": $props.tab }, "list-wrapper"])}" data-v-31411c96><ul class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ "list-tab": $props.tab }, "list"])}" data-v-31411c96><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList($props.items, (item) => {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LinkTabItem, {
      ref_for: true,
      ref: "items",
      href: item.href,
      active: item.active
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.title)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></ul></div></div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle([
    $data.showScrollGlowLeft ? null : { display: "none" },
    { opacity: $data.scrollGlowOpacityLeft }
  ])}" class="tab-glow tab-glow-left" data-v-31411c96></div><div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle([
    $data.showScrollGlowRight ? null : { display: "none" },
    { opacity: $data.scrollGlowOpacityRight }
  ])}" class="tab-glow" data-v-31411c96></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/linkTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkTab = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-31411c96"]]);
exports.LinkTab = LinkTab;
