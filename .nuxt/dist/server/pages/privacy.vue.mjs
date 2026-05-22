import { Head, Title } from "../node_modules/nuxt/dist/head/runtime/components.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Title = Title;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-12" }, _attrs))}><div class="container mx-auto px-4 max-w-4xl">`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Privacy Policy`);
            } else {
              return [
                createTextVNode("Privacy Policy")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Privacy Policy")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1><div class="prose prose-lg max-w-none"><p class="text-gray-600 mb-6"><strong>Last updated:</strong> ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Information We Collect </h2><p class="text-gray-700 mb-4"> We collect information you provide directly to us, such as when you: </p><ul class="list-disc pl-6 text-gray-700 mb-4"><li>Create an account or sign up for our services</li><li>Subscribe to our newsletter</li><li>Contact us with questions or feedback</li><li>Participate in surveys or promotions</li><li>Make donations or volunteer</li></ul><p class="text-gray-700 mb-4"> This information may include your name, email address, postal address, phone number, and any other information you choose to provide. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> How We Use Your Information </h2><p class="text-gray-700 mb-4"> We use the information we collect to: </p><ul class="list-disc pl-6 text-gray-700 mb-4"><li>Provide, maintain, and improve our services</li><li>Send you newsletters and updates about our activities</li><li>Process donations and coordinate volunteer activities</li><li>Respond to your comments and questions</li><li>Comply with legal obligations</li></ul></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Information Sharing </h2><p class="text-gray-700 mb-4"> We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this privacy policy. We may share your information: </p><ul class="list-disc pl-6 text-gray-700 mb-4"><li> With service providers who help us operate our website and services </li><li>When required by law or to protect our rights</li><li>With your consent</li></ul></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Data Security </h2><p class="text-gray-700 mb-4"> We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2><p class="text-gray-700 mb-4">You have the right to:</p><ul class="list-disc pl-6 text-gray-700 mb-4"><li>Access and update your personal information</li><li>Request deletion of your personal information</li><li>Opt out of marketing communications</li><li>Request a copy of your personal information</li></ul></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2><p class="text-gray-700 mb-4"> We use cookies and similar tracking technologies to improve your experience on our website. You can control cookie settings through your browser preferences. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Changes to This Policy </h2><p class="text-gray-700 mb-4"> We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2><p class="text-gray-700 mb-4"> If you have any questions about this privacy policy, please contact us! </p></section></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  privacy as default
};
//# sourceMappingURL=privacy.vue.mjs.map
