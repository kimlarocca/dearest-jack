import{c as b}from"./Be1fzYNM.js";import{s as f}from"./BW719G8j.js";import{s as $}from"./B5Tgi-DF.js";import y from"./CW6xtQE4.js";import{R as v}from"./DGvf1fdH.js";import{s as B}from"./CsSZs-SH.js";import{N as k,y as w,c as p,o as s,a as d,b as g,a2 as a,a1 as c,a5 as t,t as P,a4 as C,w as h,a0 as D,a8 as A,j as S,al as I,a9 as K}from"./CZ3uGgH9.js";import"./CVsvjQdU.js";import"./CQFbSZdt.js";import"./ImDTsO1s.js";import"./Bs0vetCs.js";import"./DmfvTtO6.js";var L=({dt:e})=>`
.p-panel {
    border: 1px solid ${e("panel.border.color")};
    border-radius: ${e("panel.border.radius")};
    background: ${e("panel.background")};
    color: ${e("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e("panel.header.padding")};
    background: ${e("panel.header.background")};
    color: ${e("panel.header.color")};
    border-style: solid;
    border-width: ${e("panel.header.border.width")};
    border-color: ${e("panel.header.border.color")};
    border-radius: ${e("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${e("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${e("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${e("panel.content.padding")};
}

.p-panel-footer {
    padding: ${e("panel.footer.padding")};
}
`,N={root:function(o){var u=o.props;return["p-panel p-component",{"p-panel-toggleable":u.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},T=k.extend({name:"panel",style:L,classes:N}),E={name:"BasePanel",extends:B,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:T,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:E,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(o){this.d_collapsed=o}},methods:{toggle:function(o){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:o,value:this.d_collapsed})},onKeyDown:function(o){(o.code==="Enter"||o.code==="NumpadEnter"||o.code==="Space")&&(this.toggle(o),o.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return b({toggleable:this.toggleable})}},components:{PlusIcon:$,MinusIcon:f,Button:y},directives:{ripple:v}},V=["data-p"],M=["data-p"],R=["id"],z=["id","aria-labelledby"];function O(e,o,u,q,l,n){var m=w("Button");return s(),p("div",t({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[d("div",t({class:e.cx("header"),"data-p":n.dataP},e.ptm("header")),[a(e.$slots,"header",{id:e.$id+"_header",class:C(e.cx("title"))},function(){return[e.header?(s(),p("span",t({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),P(e.header),17,R)):c("",!0)]}),d("div",t({class:e.cx("headerActions")},e.ptm("headerActions")),[a(e.$slots,"icons"),e.toggleable?a(e.$slots,"togglebutton",{key:0,collapsed:l.d_collapsed,toggleCallback:function(i){return n.toggle(i)},keydownCallback:function(i){return n.onKeyDown(i)}},function(){return[g(m,t({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":n.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:o[0]||(o[0]=function(r){return n.toggle(e.event)}),onKeydown:o[1]||(o[1]=function(r){return n.onKeyDown(e.event)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(r){return[a(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(s(),D(A(l.d_collapsed?"PlusIcon":"MinusIcon"),t({class:r.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):c("",!0)],16)],16,M),g(K,t({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[S(d("div",t({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[d("div",t({class:e.cx("content")},e.ptm("content")),[a(e.$slots,"default")],16),e.$slots.footer?(s(),p("div",t({key:0,class:e.cx("footer")},e.ptm("footer")),[a(e.$slots,"footer")],16)):c("",!0)],16,z),[[I,!l.d_collapsed]])]}),_:3},16)],16,V)}j.render=O;export{j as default};
