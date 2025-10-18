"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>메일(<b>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.data.email)}</b>)로 계정 찾기 인증 메일을 전송했습니다. 메일함에 도착한 메일을 통해 인증을 완료해 주시기 바랍니다.</p><ul><li>입력하신 정보가 올바르지 않으면 메일이 발송되지 않습니다.</li><li>간혹 메일이 도착하지 않는 경우가 있습니다. 이 경우, 스팸함을 확인해주시기 바랍니다.</li><li>인증 메일은 24시간동안 유효합니다.</li></ul><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/member/recover_password_email_sent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recover_password_email_sent = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.default = recover_password_email_sent;
