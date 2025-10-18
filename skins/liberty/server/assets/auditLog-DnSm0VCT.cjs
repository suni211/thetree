"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
const selectMenu = require("./selectMenu-DyMdl_Ge.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
const heading = require("./heading-DaKgaeE6.cjs");
const diff = require("./diff-qWW-7YFT.cjs");
require("node:stream");
require("node:path");
const AuditLogTypes = {
  NamespaceACL: 0,
  DeleteThread: 1,
  ACLGroupCreate: 3,
  ACLGroupDelete: 4,
  ManageAccount: 5,
  ModifyConfig: 6,
  ThreadACL: 7,
  DevSupport: 2
};
const _sfc_main = {
  mixins: [server.Common],
  components: {
    Diff: diff.Diff,
    Heading: heading.Heading,
    NuxtLink: server.NuxtLink,
    LocalDate: server.LocalDate,
    AuthorSpan: authorSpan.AuthorSpan,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    GeneralButton: server.GeneralButton,
    SelectMenu: selectMenu.SelectMenu,
    CheckBox: checkBox.CheckBox,
    InputField: inputField.InputField,
    SeedForm: seedForm.SeedForm
  },
  data() {
    return {
      AuditLogTypes
    };
  },
  methods: {
    reset() {
      this.$router.push("/admin/audit_log");
    },
    iconClass(type) {
      return {
        [AuditLogTypes.NamespaceACL]: "icon-nsacl",
        [AuditLogTypes.DeleteThread]: "icon-delete-thread",
        [AuditLogTypes.DevSupport]: "icon-dev-support",
        [AuditLogTypes.ACLGroupCreate]: "icon-aclgroup-create",
        [AuditLogTypes.ACLGroupDelete]: "icon-aclgroup-delete",
        [AuditLogTypes.ManageAccount]: "icon-manage-account",
        [AuditLogTypes.ModifyConfig]: "icon-modify-config",
        [AuditLogTypes.ThreadACL]: "icon-thread-acl"
      }[type];
    },
    iconName(type) {
      return {
        [AuditLogTypes.NamespaceACL]: "lock",
        [AuditLogTypes.DeleteThread]: "trash-can",
        [AuditLogTypes.DevSupport]: "code",
        [AuditLogTypes.ACLGroupCreate]: "user-plus",
        [AuditLogTypes.ACLGroupDelete]: "user-minus",
        [AuditLogTypes.ManageAccount]: "user-gear",
        [AuditLogTypes.ModifyConfig]: "gear",
        [AuditLogTypes.ThreadACL]: "comments"
      }[type];
    },
    typeName(type) {
      return {
        [AuditLogTypes.NamespaceACL]: "이름공간ACL 편집",
        [AuditLogTypes.DeleteThread]: "스레드 삭제",
        [AuditLogTypes.DevSupport]: "개발자 지원",
        [AuditLogTypes.ACLGroupCreate]: "ACL그룹 생성",
        [AuditLogTypes.ACLGroupDelete]: "ACL그룹 삭제",
        [AuditLogTypes.ManageAccount]: "계정 관리",
        [AuditLogTypes.ModifyConfig]: "설정 수정",
        [AuditLogTypes.ThreadACL]: "토론 ACL 편집"
      }[type];
    },
    async onDiffToggle(item) {
      if (!item.hasDiff || item.diffHtml) return;
      const { diffHtml } = await this.internalRequest(`/admin/audit_log/${item._id}/diff`);
      item.diffHtml = diffHtml;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SelectMenu = server.vueExports.resolveComponent("SelectMenu");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_Diff = server.vueExports.resolveComponent("Diff");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
    flex: "",
    box: "",
    class: "search-form"
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SelectMenu, {
          name: "target",
          value: _ctx.$route.query.target || "text"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<option value="text" data-v-6e2e557d${_scopeId2}>내용</option><option value="author" data-v-6e2e557d${_scopeId2}>실행자</option>`);
            } else {
              return [
                server.vueExports.createVNode("option", { value: "text" }, "내용"),
                server.vueExports.createVNode("option", { value: "author" }, "실행자")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SelectMenu, {
          name: "type",
          value: _ctx.$route.query.type || "all"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<option value="all" data-v-6e2e557d${_scopeId2}>전체</option><!--[-->`);
              server.serverRenderer_cjs_prodExports.ssrRenderList(Object.values($data.AuditLogTypes), (i) => {
                _push3(`<option${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", i)} data-v-6e2e557d${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.typeName(i))}</option>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                server.vueExports.createVNode("option", { value: "all" }, "전체"),
                (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(Object.values($data.AuditLogTypes), (i) => {
                  return server.vueExports.openBlock(), server.vueExports.createBlock("option", { value: i }, server.vueExports.toDisplayString($options.typeName(i)), 9, ["value"]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_InputField, {
          class: "search-input",
          name: "query",
          placeholder: "검색",
          modelValue: _ctx.$route.query.query,
          "onUpdate:modelValue": ($event) => _ctx.$route.query.query = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="button-block" data-v-6e2e557d${_scopeId}>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
          type: "submit",
          theme: "primary",
          class: "search-button"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`검색`);
            } else {
              return [
                server.vueExports.createTextVNode("검색")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, { whenClick: $options.reset }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`초기화`);
            } else {
              return [
                server.vueExports.createTextVNode("초기화")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          server.vueExports.createVNode(_component_SelectMenu, {
            name: "target",
            value: _ctx.$route.query.target || "text"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("option", { value: "text" }, "내용"),
              server.vueExports.createVNode("option", { value: "author" }, "실행자")
            ]),
            _: 1
          }, 8, ["value"]),
          server.vueExports.createVNode(_component_SelectMenu, {
            name: "type",
            value: _ctx.$route.query.type || "all"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("option", { value: "all" }, "전체"),
              (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(Object.values($data.AuditLogTypes), (i) => {
                return server.vueExports.openBlock(), server.vueExports.createBlock("option", { value: i }, server.vueExports.toDisplayString($options.typeName(i)), 9, ["value"]);
              }), 256))
            ]),
            _: 1
          }, 8, ["value"]),
          server.vueExports.createVNode(_component_InputField, {
            class: "search-input",
            name: "query",
            placeholder: "검색",
            modelValue: _ctx.$route.query.query,
            "onUpdate:modelValue": ($event) => _ctx.$route.query.query = $event
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          server.vueExports.createVNode("div", { class: "button-block" }, [
            server.vueExports.createVNode(_component_GeneralButton, {
              type: "submit",
              theme: "primary",
              class: "search-button"
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("검색")
              ]),
              _: 1
            }),
            server.vueExports.createVNode(_component_GeneralButton, { whenClick: $options.reset }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createTextVNode("초기화")
              ]),
              _: 1
            }, 8, ["whenClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="top-page-block" data-v-6e2e557d>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({
    flex: "",
    class: "top-page"
  }, _ctx.data.pageProps), null, _parent));
  _push(`</div><ul class="list" data-v-6e2e557d><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.items, (item) => {
    _push(`<li class="row" data-v-6e2e557d><div class="item" data-v-6e2e557d><span class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([$options.iconClass(item.action), "icon"])}" data-v-6e2e557d>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, {
      icon: $options.iconName(item.action)
    }, null, _parent));
    _push(`</span></div><div class="item content" data-v-6e2e557d><div data-v-6e2e557d>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: item.user
    }, null, _parent));
    _push(` 사용자가 `);
    if (item.action === $data.AuditLogTypes.NamespaceACL) {
      _push(`<!--[--><b data-v-6e2e557d>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.target)}</b> 이름공간 ACL을 편집함 <!--]-->`);
    } else if (item.action === $data.AuditLogTypes.DeleteThread) {
      _push(`<!--[--><b data-v-6e2e557d>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: "/thread/" + item.thread.url
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.thread.topic)}`);
          } else {
            return [
              server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.thread.topic), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</b> 스레드를 삭제함 <!--]-->`);
    } else if (item.action === $data.AuditLogTypes.DevSupport) {
      _push(`<!--[--> 엔진 개발자 권한을 사용함 <!--]-->`);
    } else if (item.action === $data.AuditLogTypes.ACLGroupCreate) {
      _push(`<!--[--><b data-v-6e2e557d>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.target)}</b> ACL 그룹을 생성함 <!--]-->`);
    } else if (item.action === $data.AuditLogTypes.ACLGroupDelete) {
      _push(`<!--[--><b data-v-6e2e557d>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.target)}</b> ACL 그룹을 삭제함 <!--]-->`);
    } else if (item.action === $data.AuditLogTypes.ManageAccount) {
      _push(`<!--[-->`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
        account: item.targetUser
      }, null, _parent));
      _push(` 계정을 관리함 <!--]-->`);
    } else if (item.action === $data.AuditLogTypes.ModifyConfig) {
      _push(`<!--[--><b data-v-6e2e557d>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.target)}</b> 설정을 수정함 <!--]-->`);
    } else if (item.action === $data.AuditLogTypes.ThreadACL) {
      _push(`<!--[--><b data-v-6e2e557d>`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: "/thread/" + item.thread.url
      }, {
        default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.thread.topic)}`);
          } else {
            return [
              server.vueExports.createTextVNode(server.vueExports.toDisplayString(item.thread.topic), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</b> 토론 ACL을 편집함 <!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (item.content) {
      _push(`<div class="text" data-v-6e2e557d>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.content)}</div>`);
    } else {
      _push(`<!---->`);
    }
    if (item.hasDiff) {
      _push(`<details data-v-6e2e557d><summary data-v-6e2e557d>비교</summary>`);
      if (item.diffHtml) {
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Diff, {
          diffHtml: item.diffHtml
        }, null, _parent));
      } else {
        _push(`<span data-v-6e2e557d>Loading...</span>`);
      }
      _push(`</details>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="text" data-v-6e2e557d>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: item.createdAt
    }, null, _parent));
    _push(`</div></div></li>`);
  });
  _push(`<!--]--></ul>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, _ctx.data.pageProps), null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/auditLog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auditLog = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6e2e557d"]]);
exports.default = auditLog;
