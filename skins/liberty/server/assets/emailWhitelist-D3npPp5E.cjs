"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  props: {
    domains: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.domains.length) {
    _push(`<!--[--><p> 이메일 허용 목록이 활성화 되어 있습니다. <br>이메일 허용 목록에 존재하는 메일만 사용할 수 있습니다. </p><ul><!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList($props.domains, (domain) => {
      _push(`<li>${server.serverRenderer_cjs_prodExports.ssrInterpolate(domain)}</li>`);
    });
    _push(`<!--]--></ul><!--]-->`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/emailWhitelist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmailWhitelist = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.EmailWhitelist = EmailWhitelist;
