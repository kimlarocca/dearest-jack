import { H as Head, T as Title } from './components.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './v3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';

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
              _push3(`Terms of Service`);
            } else {
              return [
                createTextVNode("Terms of Service")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Terms of Service")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1><div class="prose prose-lg max-w-none"><p class="text-gray-600 mb-6"><strong>Last updated:</strong> ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Agreement to Terms </h2><p class="text-gray-700 mb-4"> By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Use License</h2><p class="text-gray-700 mb-4"> Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: </p><ul class="list-disc pl-6 text-gray-700 mb-4"><li>modify or copy the materials</li><li> use the materials for any commercial purpose or for any public display </li><li> attempt to reverse engineer any software contained on the website </li><li> remove any copyright or other proprietary notations from the materials </li></ul><p class="text-gray-700 mb-4"> This license shall automatically terminate if you violate any of these restrictions and may be terminated at any time. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2><p class="text-gray-700 mb-4"> The materials on this website are provided on an &#39;as is&#39; basis, and we make no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2><p class="text-gray-700 mb-4"> In no event shall this website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Accuracy of Materials </h2><p class="text-gray-700 mb-4"> The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice. However, we do not make any commitment to update the materials. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Links</h2><p class="text-gray-700 mb-4"> This website has not reviewed all of the sites linked to the website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user&#39;s own risk. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> User Conduct </h2><p class="text-gray-700 mb-4">You agree not to use the website to:</p><ul class="list-disc pl-6 text-gray-700 mb-4"><li>Violate any applicable laws or regulations</li><li>Transmit any harmful, offensive, or objectionable content</li><li>Impersonate another person or entity</li><li>Interfere with or disrupt the website or servers</li><li>Collect or harvest personal information about other users</li></ul></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4">Donations</h2><p class="text-gray-700 mb-4"> All donations are final and non-refundable unless required by law. We reserve the right to refuse or return any donation. Donors are responsible for determining the tax deductibility of their contributions. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Modifications </h2><p class="text-gray-700 mb-4"> We may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Governing Law </h2><p class="text-gray-700 mb-4"> These terms and conditions are governed by and construed in accordance with the laws of New Jersey and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-gray-900 mb-4"> Contact Information </h2><p class="text-gray-700 mb-4"> If you have any questions about these Terms of Service, please contact us! </p></section></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { terms as default };
//# sourceMappingURL=terms.vue.mjs.map
