"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
require("node:stream");
require("node:path");
var define_THETREE_COMMIT_DATES_default = { frontend: "2025-08-18T06:25:08.000Z", skin: "2025-08-18T06:25:08.000Z" };
var define_THETREE_COMMIT_IDS_default = { frontend: "f387254", skin: "f387254" };
const _sfc_main = {
  components: {
    LocalDate: server.LocalDate
  },
  data() {
    return {
      ...this.$store.state.viewData,
      commitIds: define_THETREE_COMMIT_IDS_default,
      commitDates: define_THETREE_COMMIT_DATES_default
    };
  },
  computed: {
    beDate() {
      return server.formatDate(this.commitDate);
    },
    feDate() {
      return server.formatDate(this.commitDates.frontend);
    },
    skinDate() {
      return server.formatDate(this.commitDates.skin);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[--><h2>the tree</h2><p>v${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.version)}`);
  if (_ctx.branch) {
    _push(`<span> (${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.branch)})</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</p><p>엔진 업데이트: `);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, { date: _ctx.commitDate }, null, _parent));
  _push(` (`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
    date: _ctx.commitDate,
    forceRelative: ""
  }, null, _parent));
  _push(`)</p><ul><li${server.serverRenderer_cjs_prodExports.ssrRenderAttr("title", $options.beDate)}>Backend: ${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.commitId)}</li><li${server.serverRenderer_cjs_prodExports.ssrRenderAttr("title", $options.feDate)}>Frontend: ${server.serverRenderer_cjs_prodExports.ssrInterpolate($data.commitIds.frontend)}</li><li${server.serverRenderer_cjs_prodExports.ssrRenderAttr("title", $options.skinDate)}>Skin: ${server.serverRenderer_cjs_prodExports.ssrInterpolate($data.commitIds.skin)}</li></ul><p>Copyright <a href="https://github.com/wjdgustn">hyonsu</a> all rights reserved.</p><h3>Contributors</h3><ul><li>admin@hyonsu.com (backend &amp; frontend)</li></ul><h3>Open source license</h3><ul><li><pre>${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.openSourceLicense)}</pre></li></ul><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/license.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const license = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.default = license;
