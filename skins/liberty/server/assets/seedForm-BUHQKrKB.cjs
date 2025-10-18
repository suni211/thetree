"use strict";
const server = require("../server.cjs");
const _sfc_main = {
  mixins: [server.Common],
  data() {
    var _a;
    return {
      submitting: false,
      abortController: null,
      useCaptcha: !this.noCaptcha && this.$store.state.config.captcha && ((_a = this.$store.state.viewData.captchaData) == null ? void 0 : _a.use),
      captchaId: null,
      captchaLoadLock: [],
      captchaLock: []
    };
  },
  provide() {
    return {
      submittingSeedForm: server.vueExports.computed(() => this.submitting)
    };
  },
  props: {
    noCaptcha: Boolean,
    beforeSubmit: Function,
    flex: Boolean,
    box: Boolean,
    afterSubmit: Function
  },
  computed: {
    captchaConfig() {
      return this.$store.state.config.captcha;
    }
  },
  mounted() {
    if (this.useCaptcha) this.loadCaptcha();
  },
  watch: {
    async useCaptcha(newValue) {
      if (newValue) {
        await this.$nextTick();
        await this.loadCaptcha();
      }
    }
  },
  methods: {
    getCaptchaLib() {
      return this.captchaConfig && {
        recaptcha: window.grecaptcha,
        turnstile: window.turnstile,
        hcaptcha: window.hcaptcha
      }[this.captchaConfig.type];
    },
    async loadCaptcha() {
      if (this.getCaptchaLib()) return this.captchaOnLoad();
      window.captchaOnLoad = this.captchaOnLoad;
      const script = document.createElement("script");
      script.src = {
        recaptcha: "https://www.google.com/recaptcha/api.js?render=explicit&onload=captchaOnLoad",
        turnstile: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=captchaOnLoad",
        hcaptcha: "https://js.hcaptcha.com/1/api.js?render=explicit&onload=captchaOnLoad"
      }[this.captchaConfig.type];
      document.head.appendChild(script);
    },
    captchaOnLoad() {
      delete window.captchaOnLoad;
      for (let resolve of this.captchaLoadLock) resolve();
      this.captchaLoadLock.length = 0;
      this.captchaId = this.getCaptchaLib().render(this.$refs.captcha, {
        sitekey: this.captchaConfig.site_key,
        theme: this.$store.state.currentTheme,
        callback: () => {
          for (let { resolve } of this.captchaLock) resolve();
          this.captchaLock.length = 0;
        },
        ...{
          recaptcha: {
            badge: "inline",
            size: "invisible"
          },
          turnstile: {
            execution: "execute",
            appearance: "execute"
          },
          hcaptcha: {
            size: "invisible"
          }
        }[this.captchaConfig.type]
      });
    },
    async submit(e) {
      var _a, _b, _c, _d, _e;
      e.preventDefault();
      if (this.submitting) return;
      if (await ((_a = this.beforeSubmit) == null ? void 0 : _a.call(this, e)) === false) return;
      if (this.$refs.form.method === "get") {
        const url2 = new URL(this.$refs.form.action);
        url2.search = new URLSearchParams(new FormData(this.$refs.form)).toString();
        const finalUrl = url2.pathname + url2.search;
        await this.$store.state.components.mainView.routerPush(finalUrl);
        return;
      }
      if (this.captchaId == null && this.useCaptcha)
        await new Promise((resolve) => {
          this.captchaLoadLock.push(resolve);
        });
      if (this.captchaId != null && this.useCaptcha) {
        for (let { reject } of this.captchaLock) reject();
        this.captchaLock.length = 0;
        const captchaLib = this.getCaptchaLib();
        captchaLib.reset(this.captchaId);
        captchaLib.execute(this.captchaId);
        try {
          await new Promise((resolve, reject) => {
            this.captchaLock.push({ resolve, reject });
          });
        } catch (e2) {
          return;
        }
      }
      this.submitting = true;
      const form = this.$refs.form;
      const data = new FormData(form);
      const url = new URL(form.action);
      if (form.method === "get")
        url.search = new URLSearchParams(data).toString();
      const isMultipartForm = form.enctype === "multipart/form-data";
      const json = await this.internalRequest(url, {
        method: form.method,
        ...form.method === "get" ? {} : {
          ...isMultipartForm ? {} : {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          body: isMultipartForm ? data : new URLSearchParams(data).toString()
        }
      });
      this.submitting = false;
      if (!((_b = this.data.captchaData) == null ? void 0 : _b.force) && this.useCaptcha)
        this.useCaptcha = false;
      const noError = typeof (json == null ? void 0 : json.data) !== "string" && !((_c = json == null ? void 0 : json.data) == null ? void 0 : _c.fieldErrors);
      if (noError) this.$store.state.components.mainView.beforeLeave = null;
      await this.processInternalResponse(json, this.$refs.form);
      if (typeof (json == null ? void 0 : json.data) === "string") {
        if (json.data === "invalid_captcha") {
          this.useCaptcha = true;
        }
      }
      if ((_d = json == null ? void 0 : json.captchaData) == null ? void 0 : _d.use)
        this.useCaptcha = true;
      if ((json == null ? void 0 : json.code) === 204) {
        this.$store.state.clearFormErrors();
      }
      if (noError)
        (_e = this.afterSubmit) == null ? void 0 : _e.call(this);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({ ref: "form" }, _ctx.$attrs, {
    class: { flex: $props.flex, box: $props.box }
  }, _attrs))} data-v-a4ef1aca>`);
  server.serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($data.useCaptcha) {
    _push(`<div class="captcha" data-v-a4ef1aca></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/seedForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SeedForm = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a4ef1aca"]]);
exports.SeedForm = SeedForm;
