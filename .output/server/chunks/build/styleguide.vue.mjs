import { H as Head, T as Title } from './components.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { T as Tooltip } from './index.mjs';
import script$f from './index299.mjs';
import script$e from './index259.mjs';
import script$d from './index2117.mjs';
import script$c from './index2118.mjs';
import script from './index261.mjs';
import script$b from './index235.mjs';
import script$a from './index233.mjs';
import script$9 from './index227.mjs';
import script$8 from './index24.mjs';
import script$7 from './index237.mjs';
import script$6 from './index216.mjs';
import script$5 from './index215.mjs';
import script$4 from './index230.mjs';
import script$3 from './index219.mjs';
import script$2 from './index226.mjs';
import script$1 from './index222.mjs';
import { toRef, isRef, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { u as useNuxtApp, _ as _export_sfc } from './server.mjs';
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
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './index3.mjs';
import './index4.mjs';
import './index5.mjs';
import '@primeuix/utils';
import './index6.mjs';
import './index7.mjs';
import './index8.mjs';
import './index9.mjs';
import './index10.mjs';
import './index11.mjs';
import './index12.mjs';
import './index13.mjs';
import './index2108.mjs';
import './index14.mjs';
import './index15.mjs';
import './index16.mjs';
import './index212.mjs';
import './index217.mjs';
import './index17.mjs';
import '@primeuix/utils/eventbus';
import './index18.mjs';
import './index253.mjs';
import './index19.mjs';
import './index20.mjs';
import './index21.mjs';
import 'vue-router';
import '@primeuix/styles/base';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}

function useDarkMode() {
  const isDarkMode = useState("isDarkMode", () => false);
  const setDarkMode = () => {
    (void 0).documentElement.classList.add("dark-mode");
    (void 0).documentElement.classList.remove("light-mode");
    (void 0).cookie = "colorMode=dark; path=/; max-age=31536000";
    isDarkMode.value = true;
  };
  const setLightMode = () => {
    (void 0).documentElement.classList.add("light-mode");
    (void 0).documentElement.classList.remove("dark-mode");
    (void 0).cookie = "colorMode=light; path=/; max-age=31536000";
    isDarkMode.value = false;
  };
  const checkColorMode = () => {
    var _a;
    const cookies = (void 0).cookie.split(";");
    const colorMode = (_a = cookies.find((cookie) => cookie.trim().startsWith("colorMode="))) == null ? void 0 : _a.split("=")[1];
    if (colorMode === "dark") {
      setDarkMode();
      isDarkMode.value = true;
    } else if (colorMode === "light") {
      setLightMode();
      isDarkMode.value = false;
    } else {
      if ((void 0).matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode();
      } else {
        setLightMode();
      }
    }
  };
  return { setLightMode, checkColorMode, setDarkMode, isDarkMode };
}

const _sfc_main = {
  __name: "styleguide",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDarkMode } = useDarkMode();
    const checked = ref(false);
    const cities = ref([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
      { name: "Tokyo", code: "TKY" },
      { name: "Berlin", code: "BER" },
      { name: "Madrid", code: "MAD" },
      { name: "Moscow", code: "MSC" },
      { name: "Beijing", code: "BJS" }
    ]);
    const ingredient = ref("Cheese");
    ref(["Long", "Medium", "Short"]);
    ref("Medium");
    const selectedCity = ref();
    ref(4);
    const value = ref("sample text");
    const valueNumber = ref(12345);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Divider = script;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_InputText = script$1;
      const _component_Password = script$2;
      const _component_InputNumber = script$3;
      const _component_Select = script$4;
      const _component_InputGroup = script$5;
      const _component_InputGroupAddon = script$6;
      const _component_Button = script$7;
      const _component_Checkbox = script$8;
      const _component_RadioButton = script$9;
      const _component_Textarea = script$a;
      const _component_ToggleSwitch = script$b;
      const _component_divider = script;
      const _component_Tag = script$c;
      const _component_ProgressSpinner = script$d;
      const _component_Card = script$e;
      const _component_Message = script$f;
      const _directive_tooltip = Tooltip;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container px-4" }, _attrs))} data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Styleguide`);
                } else {
                  return [
                    createTextVNode("Styleguide")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Styleguide")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 data-v-8d531b7c> Styleguide `);
      if (unref(isDarkMode)) {
        _push(`<i class="pi pi-sun clickable" data-v-8d531b7c></i>`);
      } else {
        _push(`<i class="pi pi-moon clickable mr-2" data-v-8d531b7c></i>`);
      }
      _push(`</h1>`);
      _push(ssrRenderComponent(_component_Divider, { class: "my-7" }, null, _parent));
      _push(`<h1 class="mb-3" data-v-8d531b7c>H1 Lorem Ipsum Dolor</h1><h2 class="mb-3" data-v-8d531b7c>H2 Lorem Ipsum Dolor Sit Amet</h2><h3 class="mb-3" data-v-8d531b7c>H3 Lorem Ipsum Dolor Sit Amet</h3><h4 class="mb-3" data-v-8d531b7c>H4 Lorem Ipsum Dolor Sit Amet</h4><h5 class="mb-3" data-v-8d531b7c>H5 Lorem Ipsum Dolor Sit Amet</h5><p class="mb-3" data-v-8d531b7c> This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, esse eum ex explicabo facere maiores minus mollitia nulla qui saepe tempora veritatis. Dolore ducimus fuga provident sed temporibus. Ab, perspiciatis. </p><p class="mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`This is an inline link.`);
          } else {
            return [
              createTextVNode("This is an inline link.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p class="mb-3" data-v-8d531b7c> Text with a tooltip! <i${ssrRenderAttrs(_temp0 = mergeProps({ class: "pi pi-info-circle clickable" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Here is the tooltip!", void 0, { right: true })))} data-v-8d531b7c>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</i></p><p class="mb-3" data-v-8d531b7c> Here is some <strong data-v-8d531b7c>bold text</strong> and some <em data-v-8d531b7c>italic text</em>. </p><p class="mb-3 small" data-v-8d531b7c>Here is a paragraph with small text.</p>`);
      _push(ssrRenderComponent(_component_Divider, { class: "my-7" }, null, _parent));
      _push(`<div class="flex gap-4 mb-3" data-v-8d531b7c><div class="bg-blue w-32 h-32" data-v-8d531b7c></div><div class="bg-orange w-32 h-32" data-v-8d531b7c></div><div class="bg-green w-32 h-32" data-v-8d531b7c></div><div class="bg-purple w-32 h-32" data-v-8d531b7c></div><div class="bg-red w-32 h-32" data-v-8d531b7c></div><div class="bg-light-gray w-32 h-32" data-v-8d531b7c></div><div class="bg-dark-gray w-32 h-32" data-v-8d531b7c></div></div>`);
      _push(ssrRenderComponent(_component_Divider, { class: "my-7" }, null, _parent));
      _push(`<div class="mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_InputText, {
        placeholder: "Email Address",
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
      }, null, _parent));
      _push(`</div><div class="mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Password, {
        toggleMask: "",
        placeholder: "Password",
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        class: "w-full"
      }, null, _parent));
      _push(`</div><div class="mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_InputText, {
        disabled: "",
        placeholder: "Disabled"
      }, null, _parent));
      _push(`</div><div class="mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_InputNumber, {
        modelValue: unref(valueNumber),
        "onUpdate:modelValue": ($event) => isRef(valueNumber) ? valueNumber.value = $event : null,
        inputId: "integeronly",
        prefix: "$"
      }, null, _parent));
      _push(`</div><div class="mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(selectedCity),
        "onUpdate:modelValue": ($event) => isRef(selectedCity) ? selectedCity.value = $event : null,
        options: unref(cities),
        optionLabel: "name",
        placeholder: "Select a City"
      }, null, _parent));
      _push(`</div><div class="mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_InputGroup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputText, { placeholder: "Search" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputGroupAddon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, { icon: "pi pi-search" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, { icon: "pi pi-search" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputText, { placeholder: "Search" }),
              createVNode(_component_InputGroupAddon, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, { icon: "pi pi-search" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex align-items-center mb-3" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: unref(checked),
        "onUpdate:modelValue": ($event) => isRef(checked) ? checked.value = $event : null,
        inputId: "checkbox",
        name: "checkbox",
        value: "checkbox",
        binary: ""
      }, null, _parent));
      _push(`<label for="checkbox" class="ml-2" data-v-8d531b7c> Checkbox </label></div><div class="flex flex-wrap gap-4 mb-3" data-v-8d531b7c><div class="flex items-center gap-2" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_RadioButton, {
        modelValue: unref(ingredient),
        "onUpdate:modelValue": ($event) => isRef(ingredient) ? ingredient.value = $event : null,
        inputId: "ingredient1",
        name: "pizza",
        value: "Cheese"
      }, null, _parent));
      _push(`<label for="ingredient1" data-v-8d531b7c>Cheese</label></div><div class="flex items-center gap-2" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_RadioButton, {
        modelValue: unref(ingredient),
        "onUpdate:modelValue": ($event) => isRef(ingredient) ? ingredient.value = $event : null,
        inputId: "ingredient2",
        name: "pizza",
        value: "Mushroom"
      }, null, _parent));
      _push(`<label for="ingredient2" data-v-8d531b7c>Mushroom</label></div><div class="flex items-center gap-2" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_RadioButton, {
        modelValue: unref(ingredient),
        "onUpdate:modelValue": ($event) => isRef(ingredient) ? ingredient.value = $event : null,
        inputId: "ingredient3",
        name: "pizza",
        value: "Pepper"
      }, null, _parent));
      _push(`<label for="ingredient3" data-v-8d531b7c>Pepper</label></div></div>`);
      _push(ssrRenderComponent(_component_Textarea, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        rows: "5",
        cols: "30",
        class: "mb-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ToggleSwitch, {
        modelValue: unref(checked),
        "onUpdate:modelValue": ($event) => isRef(checked) ? checked.value = $event : null,
        class: "block"
      }, null, _parent));
      _push(ssrRenderComponent(_component_divider, { class: "my-7" }, null, _parent));
      _push(`<div class="flex gap-2 mt-6 mb-4" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Button, { label: "Example Button" }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-home",
        label: "Button With Icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-check",
        label: "Button With Icon",
        iconPos: "right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-heart",
        "aria-label": "Favorite"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Outlined Button",
        variant: "outlined"
      }, null, _parent));
      _push(`</div><div class="flex gap-2 mb-4" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Loading State",
        icon: "pi pi-check",
        loading: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Disabled",
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="flex gap-2 mb-4" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "small button",
        size: "small"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-external-link",
        size: "small"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Small Outlined Button",
        size: "small",
        variant: "outlined"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_divider, { class: "my-7" }, null, _parent));
      _push(`<div class="flex gap-2 mt-6" data-v-8d531b7c>`);
      _push(ssrRenderComponent(_component_Tag, { value: "Primary Tag" }, null, _parent));
      _push(ssrRenderComponent(_component_Tag, {
        icon: "pi pi-user",
        value: "With Icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Tag, {
        severity: "contrast",
        value: "Contrast Tag"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_divider, { class: "my-7" }, null, _parent));
      _push(ssrRenderComponent(_component_ProgressSpinner, { class: "mb-3" }, null, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "w-96 mb-3" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="user header" src="https://placehold.co/600x300" data-v-8d531b7c${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "user header",
                src: "https://placehold.co/600x300"
              })
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Card Example`);
          } else {
            return [
              createTextVNode("Card Example")
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Card subtitle`);
          } else {
            return [
              createTextVNode("Card subtitle")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="m-0" data-v-8d531b7c${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! </p>`);
          } else {
            return [
              createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-4" data-v-8d531b7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, { label: "Learn More" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              label: "Cancel",
              class: "block mb-3",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-4" }, [
                createVNode(_component_Button, { label: "Learn More" }),
                createVNode(_component_Button, {
                  label: "Cancel",
                  class: "block mb-3",
                  variant: "outlined"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_divider, { class: "my-7" }, null, _parent));
      _push(ssrRenderComponent(_component_Message, {
        severity: "info",
        class: "mb-3",
        closable: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` An informative message goes here. `);
          } else {
            return [
              createTextVNode(" An informative message goes here. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Message, {
        severity: "warn",
        class: "mb-3",
        closable: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` A warning message goes here. `);
          } else {
            return [
              createTextVNode(" A warning message goes here. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Message, {
        severity: "error",
        class: "mb-3",
        closable: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sorry, there was a problem logging in to your account. `);
          } else {
            return [
              createTextVNode(" Sorry, there was a problem logging in to your account. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Message, {
        class: "mb-3",
        severity: "success",
        closable: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Success! Please check your email for the magic link. `);
          } else {
            return [
              createTextVNode(" Success! Please check your email for the magic link. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/styleguide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const styleguide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d531b7c"]]);

export { styleguide as default };
//# sourceMappingURL=styleguide.vue.mjs.map
