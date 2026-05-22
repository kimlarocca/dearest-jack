import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styled';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
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
import 'node:url';

const _sfc_main$1 = {
  __name: "FloatingDonateButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "floating-donate-btn flex align-center" }, _attrs))} data-v-03229e1a><button aria-label="Donate" class="donate-btn" data-v-03229e1a> Donate </button><button aria-label="Volunteer" class="volunteer-btn" data-v-03229e1a> Volunteer </button><button aria-label="Linktree" class="icon-btn" data-v-03229e1a><i class="pi pi-link" style="${ssrRenderStyle({ "font-size": "1.5rem", "color": "var(--white)" })}" data-v-03229e1a></i></button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingDonateButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-03229e1a"]]);

const _imports_0 = publicAssetsURL("/letter.jpg");

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FloatingDonateButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container p-2 lg:p-4" }, _attrs))}><section class="text-center mb-6"><a target="_blank" href="/original-letter.png" class="plain"><img class="m-auto"${ssrRenderAttr("src", _imports_0)} alt="Letter to Jack Ciattarelli"></a></section><section style="${ssrRenderStyle({ "max-width": "887px", "margin": "auto" })}"><hr class="mb-12" style="${ssrRenderStyle({ "height": "20px", "border": "none", "background": "var(--black)" })}"><p class="mb-4"><span class="c1">Dearest Jack,</span></p><p class="mb-4"><span class="c1">I used to believe in you. You spoke like someone who understood New Jersey. Its grit, its talent, its heartbreak, its hope.</span></p><p class="mb-4"><span>You blamed Christie for the mess. You blamed Murphy for the missteps. And I believed you. Because you sounded honest. But now, </span><span class="font-bold">I don&#39;t know who you are anymore.</span></p><p class="mb-4"><span class="c0"><a target="_blank" class="c13" href="https://www.mycentraljersey.com/story/news/politics/2015/12/10/jack-ciattarelli-vs-donald-trump/77115510/">You told me “Mr. Trump preys upon our worst instincts and fears,”</a></span><span> that he&#39;s a “charlatan,” and an “embarrassment” who is “not fit to be President of the United States. </span><span class="font-bold">What changed?</span></p><p class="mb-4"><span>You promised you would keep our daughters safe - but can you explain how exactly that is accomplished by embracing the endorsement of a man who bragged about </span><span class="c0"><a target="_blank" class="c13" href="https://www.youtube.com/watch?v=fYqKx1GuZGg">grabbing women by their private parts</a></span><span> and </span><span class="c0"><a target="_blank" class="c13" href="https://www.youtube.com/watch?v=kikTv0I8XVw">walking into underage dressing rooms</a></span><span>, and was even </span><span class="c0"><a target="_blank" class="c13" href="https://www.pbs.org/newshour/politics/the-facts-and-timeline-of-trump-and-epsteins-falling-out">close friends with a convicted sex trafficker</a></span><span>. </span><span class="font-bold">Will you ever stand up for women, Jack?</span></p><p class="mb-4"><span>When Trump lost the election in 2020 and told The Big Lie that divided our country, you headlined a Stop The Steal rally undermining faith in our elections. After the January 6th riot, you felt the politics turning and finally admitted that Biden won the election. </span><span class="font-bold">Disturbingly, you didn&#39;t speak up when Trump pardoned the rioters who assaulted Capitol Police officers, including Brian Sicknick, a New Jerseyan who died defending democracy</span><span>.</span></p><p class="mb-4"><span>When you were running for office again, </span><span class="c0"><a target="_blank" class="c13" href="https://www.pbs.org/video/decision-2021-who-will-lead-nj-with-jack-ciattarelli-i50cwr/">you admitted that Trump, Guiliani, and others contributed to the riot, and that those who violated the law should be prosecuted to the full extent of the law</a></span><span>. But they weren&#39;t, and you didn&#39;t speak up. Worse than not speaking up, you went to Bedminster to beg for Trump&#39;s endorsement this year, and were “honored and humbled” when he gave it to you. </span><span class="font-bold">What did you promise him in return?</span></p><p class="mb-4"><span>It seems you only know how to speak up enough to blame your political opponents when it&#39;s convenient, and then you&#39;ll stay quiet instead of doing what&#39;s right. </span><span class="font-bold">That&#39;s not Leadership. That&#39;s Cowardice.</span></p><p class="mb-4"><span>You say you&#39;re a Libertarian who believes in personal freedoms, but</span><span> you support State funding for private schools instead of funding under-resourced public classrooms, you remain silent as the military takes over our streets, and you even once proposed </span><span class="c0"><a target="_blank" class="c13" href="https://www.youtube.com/watch?v=2TnsMJn1pU0">banning profanity</a></span><span>. </span><span class="c12">NJ needs help in certain areas, but did you notice that </span><span class="c0 c12"><a target="_blank" class="c13" href="https://www.usnews.com/news/best-states/rankings/education">we&#39;re #1 in Education</a></span><span class="font-bold">? Please don&#39;t ruin that.</span></p><p class="mb-4"><span>You talk about parental rights but won&#39;t protect a woman&#39;s right to choose. </span><span>You said that you&#39;ve “</span><span class="c0"><a target="_blank" class="c13" href="https://www.youtube.com/watch?v=B2jbdWkAJWA">never advocated for overturning Roe v. Wade</a></span><span>” and that you are “A-OK with a woman having the right to choose” and clearly suggested that </span><span>New Jersey didn&#39;t need its own protections. </span><span class="font-bold">Then SCOTUS overturned it. And you said nothing. And now you are supporting Abortion bans in New Jersey.</span></p><p class="mb-4"><span class="c12">You flip-flop on everything.</span><span> On Trump. On </span><span class="c0"><a target="_blank" class="c13" href="https://www.insidernj.com/press-release/ciattarelli-doubles-anti-science-covid-19-misinformation-record-editorial-board-meeting/">vaccines</a></span><span class="c1">. On offshore drilling. On LGBTQ rights. On gun safety. On climate change. Whatever polls well, you say it. Whatever base might carry you, you chase it. And when that doesn&#39;t work, you pivot again.</span></p><p class="mb-4"><span>You called out Mikie Sherrill for her husband&#39;s well-paying job where he made millions. But you said nothing about the Trump </span><span>family&#39;s </span><span class="c0"><a target="_blank" class="c13" href="https://gizmodo.com/trump-family-cryptocurrency-5-billion-richer-wlfi-price-2000652197">$5 billion crypto grift</a></span><span>.</span><span> </span><span class="font-bold">That&#39;s not Accountability. That&#39;s Hypocrisy.</span></p><p class="mb-4"><span class="c24">New Jerseyans</span><span> de</span><span class="c1">serve your loyalty. Trump does not.</span></p><p class="mb-4"><span class="font-bold">If you&#39;ll say anything to get elected, you stand for nothing.</span></p><p class="mb-4"><span class="c1">And if you stand for nothing, you don&#39;t deserve to lead this state.</span></p><p class="mb-4"><span class="c1">— Disgusted in NJ</span></p><hr class="mb-12" style="${ssrRenderStyle({ "height": "20px", "border": "none", "background": "var(--black)" })}"><p class="text-center text-sm"> This website was not requested or authorized by any candidate or candidate&#39;s committee.<br>Paid for by <a target="_blank" href="https://www.papnj.com">People Are People LLC</a>, 971 US Highway 202N #8014, Branchburg, NJ 08876. </p></section>`);
  _push(ssrRenderComponent(_component_FloatingDonateButton, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
