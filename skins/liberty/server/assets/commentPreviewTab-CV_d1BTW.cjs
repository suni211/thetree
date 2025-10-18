"use strict";
const server = require("../server.cjs");
const comment = require("./comment-DJInbDnR.cjs");
const _sfc_main = {
  mixins: [server.Common],
  props: {
    sendComment: Function
  },
  components: {
    Comment: comment.Comment
  },
  data() {
    return {
      activeTab: "raw",
      previewComment: {}
    };
  },
  watch: {
    activeTab(newValue) {
      if (newValue === "preview")
        this.loadPreview();
    }
  },
  methods: {
    async loadPreview() {
      var _a;
      this.previewComment = {
        type: 0,
        id: (((_a = this.data.comments) == null ? void 0 : _a.at(-1).id) ?? 0) + 1,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        user: {
          uuid: this.session.account.uuid,
          name: this.session.account.name,
          type: this.session.account.type
        }
      };
      const json = await this.internalRequest(this.doc_action_link(this.data.document, "preview"), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          content: this.$refs.commentInput.value,
          mode: "thread"
        }).toString(),
        noProgress: true
      });
      this.previewComment.contentHtml = json.contentHtml;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Comment = server.vueExports.resolveComponent("Comment");
  _push(`<!--[--><ul data-v-973ee210><li data-v-973ee210><button type="button" class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ active: $data.activeTab === "raw" }, "tab-button"])}" data-v-973ee210>RAW 편집</button></li><li data-v-973ee210><button type="button" class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ active: $data.activeTab === "preview" }, "tab-button"])}" data-v-973ee210>미리보기</button></li></ul><div class="tabs" data-v-973ee210><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ active: $data.activeTab === "raw" })}" data-v-973ee210>`);
  if (!_ctx.data.thread || _ctx.data.thread.status === 0) {
    _push(`<textarea rows="5" name="text" data-v-973ee210></textarea>`);
  } else {
    _push(`<textarea rows="5" disabled data-v-973ee210>${server.serverRenderer_cjs_prodExports.ssrInterpolate(["", "pause 상태입니다.", "닫힌 토론입니다."][_ctx.data.thread.status])}</textarea>`);
  }
  _push(`</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ active: $data.activeTab === "preview" }, "preview-tab"])}" data-v-973ee210>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Comment, {
    previewMode: "",
    slug: ((_a = _ctx.data.thread) == null ? void 0 : _a.url) ?? "dummy",
    comment: $data.previewComment
  }, null, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/commentPreviewTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommentPreviewTab = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-973ee210"]]);
exports.CommentPreviewTab = CommentPreviewTab;
