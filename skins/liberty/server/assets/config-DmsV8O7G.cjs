"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const server = require("../server.cjs");
const heading = require("./heading-DaKgaeE6.cjs");
const seedForm = require("./seedForm-BUHQKrKB.cjs");
const seedButton = require("./seedButton-BF8dRxSz.cjs");
require("node:stream");
require("node:path");
const _sfc_main = {
  mixins: [server.Common],
  components: {
    SeedButton: seedButton.SeedButton,
    GeneralButton: server.GeneralButton,
    SeedForm: seedForm.SeedForm,
    Heading: heading.Heading
  },
  data() {
    return {
      disabledFeature: {
        template: 0,
        method: "ALL",
        type: "string",
        condition: "",
        messageType: "flexible",
        message: ""
      }
    };
  },
  watch: {
    "disabledFeature.template"() {
      const template = this.data.disabledFeaturesTemplates[this.disabledFeature.template];
      Object.assign(this.disabledFeature, template);
    }
  },
  methods: {
    async internalGet(url) {
      await this.internalRequestAndProcess(url);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Heading = server.vueExports.resolveComponent("Heading");
  const _component_SeedForm = server.vueExports.resolveComponent("SeedForm");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  const _component_SeedButton = server.vueExports.resolveComponent("SeedButton");
  _push(`<!--[-->`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, { title: "설정" }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.jsonConfigs, (item) => {
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
            level: 3,
            title: item.name
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
                  method: "post",
                  action: "/admin/config/configjson"
                }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<input type="hidden" name="config"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", item.name)} data-v-24b430b4${_scopeId3}><textarea name="content" rows="15" data-v-24b430b4${_scopeId3}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.content)}</textarea>`);
                      _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                        theme: "primary",
                        type: "submit"
                      }, {
                        default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`적용`);
                          } else {
                            return [
                              server.vueExports.createTextVNode("적용")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        server.vueExports.createVNode("input", {
                          type: "hidden",
                          name: "config",
                          value: item.name
                        }, null, 8, ["value"]),
                        server.vueExports.createVNode("textarea", {
                          name: "content",
                          rows: "15",
                          value: item.content
                        }, null, 8, ["value"]),
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "primary",
                          type: "submit"
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("적용")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  server.vueExports.createVNode(_component_SeedForm, {
                    method: "post",
                    action: "/admin/config/configjson"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createVNode("input", {
                        type: "hidden",
                        name: "config",
                        value: item.name
                      }, null, 8, ["value"]),
                      server.vueExports.createVNode("textarea", {
                        name: "content",
                        rows: "15",
                        value: item.content
                      }, null, 8, ["value"]),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        theme: "primary",
                        type: "submit"
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("적용")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
          level: 3,
          title: "텍스트",
          folded: ""
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
                method: "post",
                action: "/admin/config/stringconfig/add"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<input name="key" placeholder="key" required data-v-24b430b4${_scopeId3}>`);
                    _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                      theme: "primary",
                      type: "submit"
                    }, {
                      default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`추가`);
                        } else {
                          return [
                            server.vueExports.createTextVNode("추가")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                      theme: "primary",
                      type: "event",
                      onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
                    }, {
                      default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`stringConfig.example.json 필드 추가`);
                        } else {
                          return [
                            server.vueExports.createTextVNode("stringConfig.example.json 필드 추가")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      server.vueExports.createVNode("input", {
                        name: "key",
                        placeholder: "key",
                        required: ""
                      }),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        theme: "primary",
                        type: "submit"
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("추가")
                        ]),
                        _: 1
                      }),
                      server.vueExports.createVNode(_component_GeneralButton, {
                        theme: "primary",
                        type: "event",
                        onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createTextVNode("stringConfig.example.json 필드 추가")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.stringConfig, (value, key) => {
                _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
                  key,
                  method: "post",
                  action: "/admin/config/stringconfig"
                }, {
                  default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<input type="hidden" name="key"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", key)} data-v-24b430b4${_scopeId3}>`);
                      _push4(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
                        title: key,
                        level: 4,
                        folded: ""
                      }, {
                        default: server.vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<textarea name="value" rows="10" data-v-24b430b4${_scopeId4}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(value)}</textarea>`);
                            _push5(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                              theme: "primary",
                              type: "submit"
                            }, {
                              default: server.vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`적용`);
                                } else {
                                  return [
                                    server.vueExports.createTextVNode("적용")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                              theme: "danger",
                              type: "event",
                              onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
                            }, {
                              default: server.vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`삭제`);
                                } else {
                                  return [
                                    server.vueExports.createTextVNode("삭제")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              server.vueExports.createVNode("textarea", {
                                name: "value",
                                rows: "10",
                                value
                              }, null, 8, ["value"]),
                              server.vueExports.createVNode(_component_GeneralButton, {
                                theme: "primary",
                                type: "submit"
                              }, {
                                default: server.vueExports.withCtx(() => [
                                  server.vueExports.createTextVNode("적용")
                                ]),
                                _: 1
                              }),
                              server.vueExports.createVNode(_component_GeneralButton, {
                                theme: "danger",
                                type: "event",
                                onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
                              }, {
                                default: server.vueExports.withCtx(() => [
                                  server.vueExports.createTextVNode("삭제")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        server.vueExports.createVNode("input", {
                          type: "hidden",
                          name: "key",
                          value: key
                        }, null, 8, ["value"]),
                        server.vueExports.createVNode(_component_Heading, {
                          title: key,
                          level: 4,
                          folded: ""
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createVNode("textarea", {
                              name: "value",
                              rows: "10",
                              value
                            }, null, 8, ["value"]),
                            server.vueExports.createVNode(_component_GeneralButton, {
                              theme: "primary",
                              type: "submit"
                            }, {
                              default: server.vueExports.withCtx(() => [
                                server.vueExports.createTextVNode("적용")
                              ]),
                              _: 1
                            }),
                            server.vueExports.createVNode(_component_GeneralButton, {
                              theme: "danger",
                              type: "event",
                              onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
                            }, {
                              default: server.vueExports.withCtx(() => [
                                server.vueExports.createTextVNode("삭제")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["title"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                server.vueExports.createVNode(_component_SeedForm, {
                  method: "post",
                  action: "/admin/config/stringconfig/add"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createVNode("input", {
                      name: "key",
                      placeholder: "key",
                      required: ""
                    }),
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "primary",
                      type: "submit"
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("추가")
                      ]),
                      _: 1
                    }),
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "primary",
                      type: "event",
                      onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("stringConfig.example.json 필드 추가")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.stringConfig, (value, key) => {
                  return server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedForm, {
                    key,
                    method: "post",
                    action: "/admin/config/stringconfig"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createVNode("input", {
                        type: "hidden",
                        name: "key",
                        value: key
                      }, null, 8, ["value"]),
                      server.vueExports.createVNode(_component_Heading, {
                        title: key,
                        level: 4,
                        folded: ""
                      }, {
                        default: server.vueExports.withCtx(() => [
                          server.vueExports.createVNode("textarea", {
                            name: "value",
                            rows: "10",
                            value
                          }, null, 8, ["value"]),
                          server.vueExports.createVNode(_component_GeneralButton, {
                            theme: "primary",
                            type: "submit"
                          }, {
                            default: server.vueExports.withCtx(() => [
                              server.vueExports.createTextVNode("적용")
                            ]),
                            _: 1
                          }),
                          server.vueExports.createVNode(_component_GeneralButton, {
                            theme: "danger",
                            type: "event",
                            onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
                          }, {
                            default: server.vueExports.withCtx(() => [
                              server.vueExports.createTextVNode("삭제")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["title"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.jsonConfigs, (item) => {
            return server.vueExports.openBlock(), server.vueExports.createBlock(_component_Heading, {
              level: 3,
              title: item.name
            }, {
              default: server.vueExports.withCtx(() => [
                server.vueExports.createVNode(_component_SeedForm, {
                  method: "post",
                  action: "/admin/config/configjson"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createVNode("input", {
                      type: "hidden",
                      name: "config",
                      value: item.name
                    }, null, 8, ["value"]),
                    server.vueExports.createVNode("textarea", {
                      name: "content",
                      rows: "15",
                      value: item.content
                    }, null, 8, ["value"]),
                    server.vueExports.createVNode(_component_GeneralButton, {
                      theme: "primary",
                      type: "submit"
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createTextVNode("적용")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["title"]);
          }), 256)),
          server.vueExports.createVNode(_component_Heading, {
            level: 3,
            title: "텍스트",
            folded: ""
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode(_component_SeedForm, {
                method: "post",
                action: "/admin/config/stringconfig/add"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createVNode("input", {
                    name: "key",
                    placeholder: "key",
                    required: ""
                  }),
                  server.vueExports.createVNode(_component_GeneralButton, {
                    theme: "primary",
                    type: "submit"
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("추가")
                    ]),
                    _: 1
                  }),
                  server.vueExports.createVNode(_component_GeneralButton, {
                    theme: "primary",
                    type: "event",
                    onClick: ($event) => $options.internalGet("/admin/config/tools/fixstringconfig")
                  }, {
                    default: server.vueExports.withCtx(() => [
                      server.vueExports.createTextVNode("stringConfig.example.json 필드 추가")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.stringConfig, (value, key) => {
                return server.vueExports.openBlock(), server.vueExports.createBlock(_component_SeedForm, {
                  key,
                  method: "post",
                  action: "/admin/config/stringconfig"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createVNode("input", {
                      type: "hidden",
                      name: "key",
                      value: key
                    }, null, 8, ["value"]),
                    server.vueExports.createVNode(_component_Heading, {
                      title: key,
                      level: 4,
                      folded: ""
                    }, {
                      default: server.vueExports.withCtx(() => [
                        server.vueExports.createVNode("textarea", {
                          name: "value",
                          rows: "10",
                          value
                        }, null, 8, ["value"]),
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "primary",
                          type: "submit"
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("적용")
                          ]),
                          _: 1
                        }),
                        server.vueExports.createVNode(_component_GeneralButton, {
                          theme: "danger",
                          type: "event",
                          onClick: ($event) => $options.internalGet(`/admin/config/tools/removestringconfig?key=${encodeURIComponent(key)}`)
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("삭제")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["title"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, { title: "기능 비활성화" }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="wiki-content" data-v-24b430b4${_scopeId}><div class="wiki-table-wrap" data-v-24b430b4${_scopeId}><table class="wiki-table" data-v-24b430b4${_scopeId}><tbody data-v-24b430b4${_scopeId}><tr class="table-heading" data-v-24b430b4${_scopeId}><td data-v-24b430b4${_scopeId}>Method</td><td data-v-24b430b4${_scopeId}>Type</td><td data-v-24b430b4${_scopeId}>Condition</td><td data-v-24b430b4${_scopeId}>MessageType</td><td data-v-24b430b4${_scopeId}>Message</td><td data-v-24b430b4${_scopeId}>Action</td></tr><!--[-->`);
        server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.disabledFeatures, (item, index) => {
          _push2(`<tr data-v-24b430b4${_scopeId}><td style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "min-width": "100px" })}" data-v-24b430b4${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.method)}</td><td style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "min-width": "100px" })}" data-v-24b430b4${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.type)}</td><td style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "max-width": "300px", "white-space": "nowrap", "overflow-x": "auto" })}" data-v-24b430b4${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.condition)}</td><td style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "min-width": "120px" })}" data-v-24b430b4${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.messageType)}</td><td style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle({ "min-width": "100px" })}" data-v-24b430b4${_scopeId}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.message)}</td><td data-v-24b430b4${_scopeId}>`);
          _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedButton, {
            danger: "",
            onClick: ($event) => $options.internalGet(`/admin/config/tools/deletedisabledfeature?index=${index}`)
          }, {
            default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`삭제`);
              } else {
                return [
                  server.vueExports.createTextVNode("삭제")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div></div>`);
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
          method: "post",
          action: "/admin/config/disabledfeatures"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<select data-v-24b430b4${_scopeId2}><!--[-->`);
              server.serverRenderer_cjs_prodExports.ssrRenderList(_ctx.data.disabledFeaturesTemplates, (item, index) => {
                _push3(`<option${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", index)} data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.template) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.template, index) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.template, index)) ? " selected" : ""}${_scopeId2}>${server.serverRenderer_cjs_prodExports.ssrInterpolate(item.name)}</option>`);
              });
              _push3(`<!--]--></select><select name="methodField" data-v-24b430b4${_scopeId2}><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.method) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.method, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId2}>ALL</option><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.method) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.method, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId2}>GET</option><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.method) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.method, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId2}>POST</option><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.method) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.method, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId2}>PUT</option><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.method) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.method, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.method, null)) ? " selected" : ""}${_scopeId2}>DELETE</option></select><select name="type" data-v-24b430b4${_scopeId2}><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.type) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.type, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.type, null)) ? " selected" : ""}${_scopeId2}>string</option><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.type) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.type, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.type, null)) ? " selected" : ""}${_scopeId2}>js</option></select><input name="condition" placeholder="condition" required${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.disabledFeature.condition)} data-v-24b430b4${_scopeId2}><select name="messageType" data-v-24b430b4${_scopeId2}><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.messageType) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.messageType, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.messageType, null)) ? " selected" : ""}${_scopeId2}>flexible</option><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.messageType) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.messageType, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.messageType, null)) ? " selected" : ""}${_scopeId2}>res.error</option><option data-v-24b430b4${server.serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(Array.isArray($data.disabledFeature.messageType) ? server.serverRenderer_cjs_prodExports.ssrLooseContain($data.disabledFeature.messageType, null) : server.serverRenderer_cjs_prodExports.ssrLooseEqual($data.disabledFeature.messageType, null)) ? " selected" : ""}${_scopeId2}>plaintext</option></select><input name="message" placeholder="message"${server.serverRenderer_cjs_prodExports.ssrRenderAttr("value", $data.disabledFeature.message)} data-v-24b430b4${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`추가`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("추가")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                  "onUpdate:modelValue": ($event) => $data.disabledFeature.template = $event
                }, [
                  (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.disabledFeaturesTemplates, (item, index) => {
                    return server.vueExports.openBlock(), server.vueExports.createBlock("option", { value: index }, server.vueExports.toDisplayString(item.name), 9, ["value"]);
                  }), 256))
                ], 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelSelect, $data.disabledFeature.template]
                ]),
                server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                  name: "methodField",
                  "onUpdate:modelValue": ($event) => $data.disabledFeature.method = $event
                }, [
                  server.vueExports.createVNode("option", null, "ALL"),
                  server.vueExports.createVNode("option", null, "GET"),
                  server.vueExports.createVNode("option", null, "POST"),
                  server.vueExports.createVNode("option", null, "PUT"),
                  server.vueExports.createVNode("option", null, "DELETE")
                ], 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelSelect, $data.disabledFeature.method]
                ]),
                server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                  name: "type",
                  "onUpdate:modelValue": ($event) => $data.disabledFeature.type = $event
                }, [
                  server.vueExports.createVNode("option", null, "string"),
                  server.vueExports.createVNode("option", null, "js")
                ], 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelSelect, $data.disabledFeature.type]
                ]),
                server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                  name: "condition",
                  placeholder: "condition",
                  required: "",
                  "onUpdate:modelValue": ($event) => $data.disabledFeature.condition = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelText, $data.disabledFeature.condition]
                ]),
                server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                  name: "messageType",
                  "onUpdate:modelValue": ($event) => $data.disabledFeature.messageType = $event
                }, [
                  server.vueExports.createVNode("option", null, "flexible"),
                  server.vueExports.createVNode("option", null, "res.error"),
                  server.vueExports.createVNode("option", null, "plaintext")
                ], 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelSelect, $data.disabledFeature.messageType]
                ]),
                server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                  name: "message",
                  placeholder: "message",
                  "onUpdate:modelValue": ($event) => $data.disabledFeature.message = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [server.vueExports.vModelText, $data.disabledFeature.message]
                ]),
                server.vueExports.createVNode(_component_GeneralButton, {
                  theme: "primary",
                  type: "submit"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("추가")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode("div", { class: "wiki-content" }, [
            server.vueExports.createVNode("div", { class: "wiki-table-wrap" }, [
              server.vueExports.createVNode("table", { class: "wiki-table" }, [
                server.vueExports.createVNode("tbody", null, [
                  server.vueExports.createVNode("tr", { class: "table-heading" }, [
                    server.vueExports.createVNode("td", null, "Method"),
                    server.vueExports.createVNode("td", null, "Type"),
                    server.vueExports.createVNode("td", null, "Condition"),
                    server.vueExports.createVNode("td", null, "MessageType"),
                    server.vueExports.createVNode("td", null, "Message"),
                    server.vueExports.createVNode("td", null, "Action")
                  ]),
                  (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.disabledFeatures, (item, index) => {
                    return server.vueExports.openBlock(), server.vueExports.createBlock("tr", null, [
                      server.vueExports.createVNode("td", { style: { "min-width": "100px" } }, server.vueExports.toDisplayString(item.method), 1),
                      server.vueExports.createVNode("td", { style: { "min-width": "100px" } }, server.vueExports.toDisplayString(item.type), 1),
                      server.vueExports.createVNode("td", { style: { "max-width": "300px", "white-space": "nowrap", "overflow-x": "auto" } }, server.vueExports.toDisplayString(item.condition), 1),
                      server.vueExports.createVNode("td", { style: { "min-width": "120px" } }, server.vueExports.toDisplayString(item.messageType), 1),
                      server.vueExports.createVNode("td", { style: { "min-width": "100px" } }, server.vueExports.toDisplayString(item.message), 1),
                      server.vueExports.createVNode("td", null, [
                        server.vueExports.createVNode(_component_SeedButton, {
                          danger: "",
                          onClick: ($event) => $options.internalGet(`/admin/config/tools/deletedisabledfeature?index=${index}`)
                        }, {
                          default: server.vueExports.withCtx(() => [
                            server.vueExports.createTextVNode("삭제")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])
                    ]);
                  }), 256))
                ])
              ])
            ])
          ]),
          server.vueExports.createVNode(_component_SeedForm, {
            method: "post",
            action: "/admin/config/disabledfeatures"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                "onUpdate:modelValue": ($event) => $data.disabledFeature.template = $event
              }, [
                (server.vueExports.openBlock(true), server.vueExports.createBlock(server.vueExports.Fragment, null, server.vueExports.renderList(_ctx.data.disabledFeaturesTemplates, (item, index) => {
                  return server.vueExports.openBlock(), server.vueExports.createBlock("option", { value: index }, server.vueExports.toDisplayString(item.name), 9, ["value"]);
                }), 256))
              ], 8, ["onUpdate:modelValue"]), [
                [server.vueExports.vModelSelect, $data.disabledFeature.template]
              ]),
              server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                name: "methodField",
                "onUpdate:modelValue": ($event) => $data.disabledFeature.method = $event
              }, [
                server.vueExports.createVNode("option", null, "ALL"),
                server.vueExports.createVNode("option", null, "GET"),
                server.vueExports.createVNode("option", null, "POST"),
                server.vueExports.createVNode("option", null, "PUT"),
                server.vueExports.createVNode("option", null, "DELETE")
              ], 8, ["onUpdate:modelValue"]), [
                [server.vueExports.vModelSelect, $data.disabledFeature.method]
              ]),
              server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                name: "type",
                "onUpdate:modelValue": ($event) => $data.disabledFeature.type = $event
              }, [
                server.vueExports.createVNode("option", null, "string"),
                server.vueExports.createVNode("option", null, "js")
              ], 8, ["onUpdate:modelValue"]), [
                [server.vueExports.vModelSelect, $data.disabledFeature.type]
              ]),
              server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                name: "condition",
                placeholder: "condition",
                required: "",
                "onUpdate:modelValue": ($event) => $data.disabledFeature.condition = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [server.vueExports.vModelText, $data.disabledFeature.condition]
              ]),
              server.vueExports.withDirectives(server.vueExports.createVNode("select", {
                name: "messageType",
                "onUpdate:modelValue": ($event) => $data.disabledFeature.messageType = $event
              }, [
                server.vueExports.createVNode("option", null, "flexible"),
                server.vueExports.createVNode("option", null, "res.error"),
                server.vueExports.createVNode("option", null, "plaintext")
              ], 8, ["onUpdate:modelValue"]), [
                [server.vueExports.vModelSelect, $data.disabledFeature.messageType]
              ]),
              server.vueExports.withDirectives(server.vueExports.createVNode("input", {
                name: "message",
                placeholder: "message",
                "onUpdate:modelValue": ($event) => $data.disabledFeature.message = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [server.vueExports.vModelText, $data.disabledFeature.message]
              ]),
              server.vueExports.createVNode(_component_GeneralButton, {
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("추가")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Heading, {
    title: "openNAMU 기여 이동",
    folded: ""
  }, {
    default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SeedForm, {
          method: "post",
          action: "/admin/config/migratecontribution"
        }, {
          default: server.vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input name="from" placeholder="openNAMU 기여자 이름(O: 포함)" required data-v-24b430b4${_scopeId2}><input name="to" placeholder="새 기여자 이름" required data-v-24b430b4${_scopeId2}>`);
              _push3(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`이동`);
                  } else {
                    return [
                      server.vueExports.createTextVNode("이동")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                server.vueExports.createVNode("input", {
                  name: "from",
                  placeholder: "openNAMU 기여자 이름(O: 포함)",
                  required: ""
                }),
                server.vueExports.createVNode("input", {
                  name: "to",
                  placeholder: "새 기여자 이름",
                  required: ""
                }),
                server.vueExports.createVNode(_component_GeneralButton, {
                  theme: "primary",
                  type: "submit"
                }, {
                  default: server.vueExports.withCtx(() => [
                    server.vueExports.createTextVNode("이동")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          server.vueExports.createVNode(_component_SeedForm, {
            method: "post",
            action: "/admin/config/migratecontribution"
          }, {
            default: server.vueExports.withCtx(() => [
              server.vueExports.createVNode("input", {
                name: "from",
                placeholder: "openNAMU 기여자 이름(O: 포함)",
                required: ""
              }),
              server.vueExports.createVNode("input", {
                name: "to",
                placeholder: "새 기여자 이름",
                required: ""
              }),
              server.vueExports.createVNode(_component_GeneralButton, {
                theme: "primary",
                type: "submit"
              }, {
                default: server.vueExports.withCtx(() => [
                  server.vueExports.createTextVNode("이동")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/contents/admin/config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const config = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-24b430b4"]]);
exports.default = config;
