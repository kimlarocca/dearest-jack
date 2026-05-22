import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
/* empty css                           */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "FloatingDonateButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "floating-donate-btn flex align-center" }, _attrs))} data-v-03229e1a><button aria-label="Donate" class="donate-btn" data-v-03229e1a> Donate </button><button aria-label="Volunteer" class="volunteer-btn" data-v-03229e1a> Volunteer </button><button aria-label="Linktree" class="icon-btn" data-v-03229e1a><i class="pi pi-link" style="${ssrRenderStyle({ "font-size": "1.5rem", "color": "var(--white)" })}" data-v-03229e1a></i></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingDonateButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03229e1a"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=FloatingDonateButton.vue.mjs.map
