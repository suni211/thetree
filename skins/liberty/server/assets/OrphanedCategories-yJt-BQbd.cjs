"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const namespaceSelector = require("./namespaceSelector-DMabf0nv.cjs");
require("node:stream");
require("node:path");
require("./seedForm-BUHQKrKB.cjs");
require("./selectMenu-DyMdl_Ge.cjs");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    GeneralButton: server.GeneralButton,
    NamespaceSelector: namespaceSelector.NamespaceSelector
  },
  computed: {
    pageProps() {
      const prevItem = this.data.prevItem;
      const nextItem = this.data.nextItem;
      return {
        prev: prevItem >= 0 ? { query: { until: prevItem } } : null,
        next: nextItem < this.data.total ? { query: { from: nextItem } } : null
      };
    }
  },
  methods: {
    async update() {
      await this.internalRequestAndProcess("/OrphanedCategories/update");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  _push(`<!--[--><p data-v-5dab5616> 다음은 [[`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.doc_action_link("분류:분류", "w")
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`분류:분류`);
      } else {
        return [
          server.vueExports.createTextVNode("분류:분류")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`]]에서 분류로 도달할 수 없는 분류로, 역링크가 없거나 자기네들끼리만 분류 되어 있는 경우입니다. </p><p data-v-5dab5616>이 페이지는 하루에 한번 업데이트 됩니다.</p>`);
  if (_ctx.data.permissions.dev) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      theme: "danger",
      whenClick: $options.update
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`업데이트`);
        } else {
          return [
            server.vueExports.createTextVNode("업데이트")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`<ul data-v-5dab5616><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.items, (item) => {
    _push(`<li data-v-5dab5616>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(item, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.doc_fulltitle(item))}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(_ctx.doc_fulltitle(item)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`  `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.doc_action_link(item, "backlink")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`[역링크]`);
        } else {
          return [
            server.vueExports.createTextVNode("[역링크]")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/docList/OrphanedCategories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrphanedCategories = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5dab5616"]]);
exports.default = OrphanedCategories;
