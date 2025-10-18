"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const selectMenu = require("./selectMenu-DyMdl_Ge.cjs");
const inputField = require("./inputField-Cszfz-0C.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
const checkBox = require("./checkBox-B5-ImMh5.cjs");
const authorSpan = require("./authorSpan-zDEgxOhU.cjs");
require("node:stream");
require("node:path");
const BlockHistoryTypes = {
  ACLGroupAdd: 0,
  ACLGroupRemove: 1,
  Grant: 2,
  BatchRevert: 3,
  LoginHistory: 4
};
const _sfc_main = {
  mixins: [server.Common],
  components: {
    LocalDate: server.LocalDate,
    AuthorSpan: authorSpan.AuthorSpan,
    CheckBox: checkBox.CheckBox,
    PrevNextBtn: prevNextBtn.PrevNextBtn,
    GeneralButton: server.GeneralButton,
    InputField: inputField.InputField,
    SeedForm: seedForm.SeedForm,
    SelectMenu: selectMenu.SelectMenu
  },
  data() {
    return {
      BlockHistoryTypes,
      useFormattedCopy: this.$store.state.localConfig["block_history.use_formatted_copy"] ?? false
    };
  },
  watch: {
    useFormattedCopy(newValue) {
      this.$store.state.localConfigSetValue("block_history.use_formatted_copy", newValue);
    }
  },
  computed: {
    pageProps() {
      const prevItem = this.data.prevItem;
      const nextItem = this.data.nextItem;
      return {
        prev: prevItem ? { query: { until: prevItem.uuid } } : null,
        next: nextItem ? { query: { from: nextItem.uuid } } : null
      };
    }
  },
  methods: {
    reset() {
      this.$router.push("/BlockHistory");
    },
    iconClass(type) {
      return {
        [BlockHistoryTypes.ACLGroupAdd]: "aclgroup-add",
        [BlockHistoryTypes.ACLGroupRemove]: "aclgroup-remove",
        [BlockHistoryTypes.Grant]: "grant",
        [BlockHistoryTypes.BatchRevert]: "batch-revert",
        [BlockHistoryTypes.LoginHistory]: "login-history"
      }[type];
    },
    iconName(type) {
      return {
        [BlockHistoryTypes.ACLGroupAdd]: "user-plus",
        [BlockHistoryTypes.ACLGroupRemove]: "user-minus",
        [BlockHistoryTypes.Grant]: "user-check",
        [BlockHistoryTypes.BatchRevert]: "clock-rotate-left",
        [BlockHistoryTypes.LoginHistory]: "user"
      }[type];
    },
    typeName(type) {
      return {
        [BlockHistoryTypes.ACLGroupAdd]: "ACL그룹 등록",
        [BlockHistoryTypes.ACLGroupRemove]: "ACL그룹 제거",
        [BlockHistoryTypes.Grant]: "권한 설정",
        [BlockHistoryTypes.BatchRevert]: "일괄 되돌리기",
        [BlockHistoryTypes.LoginHistory]: "로그인 기록 조회"
      }[type];
    },
    userToText(user) {
      let link;
      let text;
      if (user.type === -1)
        text = "<i>(삭제된 사용자)</i>";
      else if (user.name || user.ip) {
        text = `<b>${server.escapeHtml(user.name || user.ip)}</b>`;
        if (user.type === 1)
          link = this.doc_action_link(this.user_doc(user.name), "w");
        else if (user.uuid)
          link = this.contribution_link(user.uuid);
      }
      link && (link = new URL(link, location.href).toString());
      return link && text ? `<a href="${link}" target="_blank">${text}</a>` : text;
    },
    onListCopy(e) {
      var _a;
      if (!this.useFormattedCopy) return;
      const sel = document.getSelection();
      if (!sel || sel.rangeCount < 1) return;
      const root = e.currentTarget;
      const items = [...root.children].filter((a) => a.nodeType === Node.ELEMENT_NODE && a.classList.contains("block-row"));
      const findClosest = (el) => {
        while (el) {
          if (el.nodeType === Node.ELEMENT_NODE && el.classList.contains("block-row"))
            return el;
          el = el.parentNode;
        }
        return null;
      };
      const startEl = findClosest(sel.getRangeAt(0).startContainer);
      const endEl = findClosest(sel.getRangeAt(sel.rangeCount - 1).endContainer);
      const startIndex = items.indexOf(startEl);
      const endIndex = items.indexOf(endEl);
      const htmlItems = [];
      const textItems = [];
      for (let i = startIndex; i <= endIndex; i++) {
        const item = this.data.logs[i];
        let li = "<li>";
        if (item.createdAt)
          li += `(${server.formatDate(item.createdAt)}) `;
        li += `${this.userToText(item.createdUser) ?? "(사용자)"} 사용자가`;
        if (item.targetUser) {
          li += ` ${this.userToText(item.targetUser) ?? "(사용자)"}`;
          li += item.targetUser.type === 0 ? " IP" : " 사용자";
          if (item.type === BlockHistoryTypes.BatchRevert)
            li += "의 기여를";
          else if ([
            BlockHistoryTypes.ACLGroupAdd,
            BlockHistoryTypes.ACLGroupRemove
          ].includes(item.type))
            li += "를";
          if (item.targetUser && item.targetUser.name !== item.targetUsername)
            li += ` (차단 당시 이름: ${server.escapeHtml(item.targetUsername)})`;
        }
        if ([
          BlockHistoryTypes.ACLGroupAdd,
          BlockHistoryTypes.ACLGroupRemove,
          BlockHistoryTypes.BatchRevert
        ].includes(item.type)) {
          if (!item.targetUser && item.targetContent) {
            li += ` ${server.escapeHtml(item.targetContent)} IP를`;
          }
          if (item.type === BlockHistoryTypes.BatchRevert) {
            li += " 일괄 되돌림";
          } else {
            li += ` <b>${server.escapeHtml(
              ((_a = item.aclGroup) == null ? void 0 : _a.name) || item.aclGroupName || item.aclGroup
            )}</b> ACL 그룹에${item.type === BlockHistoryTypes.ACLGroupRemove ? "서" : ""}`;
            if (item.type === BlockHistoryTypes.ACLGroupAdd) {
              li += item.duration ? ` ${this.durationToExactString(item.duration)} 동안` : " 영구적으로";
              li += " 등록함";
            } else {
              li += " 제거함";
            }
            li += ` <b>#${server.escapeHtml(item.aclGroupId)}</b>`;
          }
        } else if (item.type === BlockHistoryTypes.Grant)
          li += `의 권한 설정`;
        else if (item.type === BlockHistoryTypes.LoginHistory)
          li += `의 로그인 기록 조회`;
        if (item.type === BlockHistoryTypes.Grant)
          li += `<br>권한: ${server.escapeHtml(item.content)}`;
        else if (item.content)
          li += `<br>사유: ${server.escapeHtml(item.content)}`;
        li += "</li>";
        htmlItems.push(li);
        const text = "- " + li.replaceAll("<br>", "\n").replace(/<[^>]*?>/g, "");
        textItems.push(server.unescapeHtml(text));
      }
      e.clipboardData.setData("text/html", `<ul>${htmlItems.join("")}</ul>`);
      e.clipboardData.setData("text/plain", textItems.join("\n") + "\n");
      e.preventDefault();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_SelectMenu = server.vueExports.resolveComponent("SelectMenu");
  const _component_InputField = server.vueExports.resolveComponent("InputField");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_CheckBox = server.vueExports.resolveComponent("CheckBox");
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_FontAwesomeIcon = server.vueExports.resolveComponent("FontAwesomeIcon");
  const _component_AuthorSpan = server.vueExports.resolveComponent("AuthorSpan");
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
              _push3(`<option value="text" data-v-706e89ec${_scopeId2}>내용</option><option value="author" data-v-706e89ec${_scopeId2}>실행자</option>`);
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
              _push3(`<option value="all" data-v-706e89ec${_scopeId2}>전체</option><!--[-->`);
              server.serverRenderer_cjs_prodExports.ssrRenderList(Object.values($data.BlockHistoryTypes), (i) => {
                _push3(`<option${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", i)} data-v-706e89ec${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate($options.typeName(i))}</option>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                server.vueExports.createVNode("option", { value: "all" }, "전체"),
                (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(Object.values($data.BlockHistoryTypes), (i) => {
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
        _push2(`<div class="button-block" data-v-706e89ec${_scopeId}>`);
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
        if (_ctx.data.permissions.dev) {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
            checked: _ctx.$route.query.showHidden === "1",
            whenChange: (e) => _ctx.$router.push({ query: { showHidden: e.target.checked ? "1" : void 0 } }),
            name: "showHidden",
            value: "1"
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` 비공개 내역 보기 `);
              } else {
                return [
                  server.vueExports.createTextVNode(" 비공개 내역 보기 ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
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
              (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(Object.values($data.BlockHistoryTypes), (i) => {
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
          ]),
          _ctx.data.permissions.dev ? (server.vueExports.openBlock(), server.vueExports.createBlock(_component_CheckBox, {
            key: 0,
            checked: _ctx.$route.query.showHidden === "1",
            whenChange: (e) => _ctx.$router.push({ query: { showHidden: e.target.checked ? "1" : void 0 } }),
            name: "showHidden",
            value: "1"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createTextVNode(" 비공개 내역 보기 ")
            ]),
            _: 1
          }, 8, ["checked", "whenChange"])) : server.vueExports.createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="top-page-block" data-v-706e89ec>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({
    flex: "",
    class: "top-page"
  }, $options.pageProps), null, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CheckBox, {
    modelValue: $data.useFormattedCopy,
    "onUpdate:modelValue": ($event) => $data.useFormattedCopy = $event
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`형식화된 복사 사용`);
      } else {
        return [
          server.vueExports.createTextVNode("형식화된 복사 사용")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="block-list" data-v-706e89ec><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.logs, (item) => {
    var _a, _b;
    _push(`<li class="block-row" data-v-706e89ec><div class="block-item" data-v-706e89ec><span class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([$options.iconClass(item.type), "icon"])}" data-v-706e89ec>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FontAwesomeIcon, {
      icon: $options.iconName(item.type)
    }, null, _parent));
    _push(`</span></div><div class="block-item block-content" data-v-706e89ec><div data-v-706e89ec>`);
    if (item.hideLog) {
      _push(`<!--[-->(비공개) <!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
      account: item.createdUser
    }, null, _parent));
    _push(` 사용자가 `);
    if (item.type === $data.BlockHistoryTypes.ACLGroupAdd) {
      _push(`<!--[-->`);
      if (item.targetUser) {
        _push(`<!--[-->`);
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
          account: item.targetUser
        }, null, _parent));
        _push(` 사용자를 <!--]-->`);
      } else {
        _push(`<!--[-->${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.targetContent)} IP를 <!--]-->`);
      }
      if (item.targetUser && item.targetUser.name !== item.targetUsername) {
        _push(`<!--[--> (차단 당시 이름: ${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.targetUsername)}) <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="bold" data-v-706e89ec>${server.serverRenderer_cjs_prodExports.ssrInterpolate(((_a = item.aclGroup) == null ? void 0 : _a.name) || item.aclGroupName || item.aclGroup)}</span> ACL 그룹에 <span data-v-706e89ec>`);
      if (item.duration) {
        _push(`<!--[-->${server.serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.durationToExactString(item.duration))} 동안 <!--]-->`);
      } else {
        _push(`<!--[--> 영구적으로 <!--]-->`);
      }
      _push(`</span> 등록함 <span class="block-id" data-v-706e89ec>#${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.aclGroupId)}</span><!--]-->`);
    } else if (item.type === $data.BlockHistoryTypes.ACLGroupRemove) {
      _push(`<!--[-->`);
      if (item.targetUser) {
        _push(`<!--[-->`);
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
          account: item.targetUser
        }, null, _parent));
        _push(` 사용자를 <!--]-->`);
      } else {
        _push(`<!--[-->${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.targetContent)} IP를 <!--]-->`);
      }
      if (item.targetUser && item.targetUser.name !== item.targetUsername) {
        _push(`<!--[--> (차단 당시 이름: ${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.targetUsername)}) <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="bold" data-v-706e89ec>${server.serverRenderer_cjs_prodExports.ssrInterpolate(((_b = item.aclGroup) == null ? void 0 : _b.name) || item.aclGroupName || item.aclGroup)}</span> ACL 그룹에서 제거함 <span class="block-id" data-v-706e89ec>#${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.aclGroupId)}</span><!--]-->`);
    } else if (item.type === $data.BlockHistoryTypes.Grant) {
      _push(`<!--[-->`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
        account: item.targetUser
      }, null, _parent));
      _push(` 사용자의 권한 설정 <!--]-->`);
    } else if (item.type === $data.BlockHistoryTypes.BatchRevert) {
      _push(`<!--[-->`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
        account: item.targetUser
      }, null, _parent));
      _push(` ${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.targetUser.type === 1 ? "사용자" : "IP")}의 기여를 일괄 되돌림 <!--]-->`);
    } else if (item.type === $data.BlockHistoryTypes.LoginHistory) {
      _push(`<!--[-->`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AuthorSpan, {
        account: item.targetUser
      }, null, _parent));
      _push(` 사용자의 로그인 기록 조회 <!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (item.type === $data.BlockHistoryTypes.Grant) {
      _push(`<div class="block-text" data-v-706e89ec>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.content)}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="block-text" data-v-706e89ec>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: item.createdAt
    }, null, _parent));
    if (item.type !== $data.BlockHistoryTypes.Grant && item.content) {
      _push(`<span data-v-706e89ec> (${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.content)}) </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></li>`);
  });
  _push(`<!--]--></ul>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, $options.pageProps), null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/special/blockHistory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blockHistory = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-706e89ec"]]);
exports.default = blockHistory;
