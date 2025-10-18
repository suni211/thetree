"use strict";
const server = require("../server.cjs");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<p${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-e1dcfdd6>`);
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blinkRedWarn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlinkRedWarn = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e1dcfdd6"]]);
const _sfc_main = {
  components: {
    BlinkRedWarn
  },
  props: {
    discuss: Boolean
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlinkRedWarn = server.vueExports.resolveComponent("BlinkRedWarn");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
  if (_ctx.session.account.type !== 1) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_BlinkRedWarn, null, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if ($props.discuss) {
            _push2(`<!--[--> 비로그인 상태로 토론에 참여합니다. 토론 내역에 IP(${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.session.account.name)}) 주소 전체가 영구히 기록됩니다. <!--]-->`);
          } else {
            _push2(`<!--[--> 비로그인 상태로 편집합니다. 로그인하지 않은 상태로 문서 편집을 저장하면, 편집 역사에 본인이 사용하는 IP(${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.session.account.name)}) 주소 전체가 영구히 기록됩니다. <!--]-->`);
          }
        } else {
          return [
            $props.discuss ? (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 0 }, [
              server.vueExports.createTextVNode(" 비로그인 상태로 토론에 참여합니다. 토론 내역에 IP(" + server.vueExports.toDisplayString(_ctx.session.account.name) + ") 주소 전체가 영구히 기록됩니다. ", 1)
            ], 64)) : (server.vueExports.openBlock(), server.vueExports.createBlock(server.vueExports.Fragment, { key: 1 }, [
              server.vueExports.createTextVNode(" 비로그인 상태로 편집합니다. 로그인하지 않은 상태로 문서 편집을 저장하면, 편집 역사에 본인이 사용하는 IP(" + server.vueExports.toDisplayString(_ctx.session.account.name) + ") 주소 전체가 영구히 기록됩니다. ", 1)
            ], 64))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ipWarn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IpWarn = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.IpWarn = IpWarn;
