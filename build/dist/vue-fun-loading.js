!function(e){var n={};function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(l,o,function(n){return e[n]}.bind(null,o));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);function l(e,n,t,l,o,i,r,a){var d=typeof(e=e||{}).default;"object"!==d&&"function"!==d||(e=e.default);var u,s="function"==typeof e?e.options:e;if(n&&(s.render=n,s.staticRenderFns=t,s._compiled=!0),l&&(s.functional=!0),i&&(s._scopeId=i),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var c=s.render;s.render=function(e,n){return u.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:s}}var o=l({name:"FunLoadingCircleDot",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",{class:"fun-loading-circle-dot fun-loading-circle-dot-"+this.size},e._l(8,function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(1)},null,null).exports;var i=l({name:"FunLoadingCircleDotMoving",props:{color:{type:String,default:"#ff69b4"},size:{type:String,default:"middle",elem:["small","middle","large"]}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-circle-dot-moving fun-loading-circle-dot-moving-"+this.size},e._l(4,function(n){return t("div",{key:n},[t("span",{style:e.loadingStyle})])}),0)},[],!1,function(e){t(6)},null,null).exports;var r=l({name:"FunLoadingCircleGradient",props:{color:{type:String,default:"#ff69b4"},size:{type:String,default:"middle",elem:["small","middle","large"]}},computed:{loadingStyle(){return{background:`linear-gradient(${this.color}, rgba(0, 0, 0, 0))`}}}},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{class:"fun-loading-circle-gradient fun-loading-circle-gradient-"+this.size,style:this.loadingStyle},[n("div")])},[],!1,function(e){t(8)},null,null).exports;var a=l({name:"LoadingCircleLine",props:{color:{type:String,default:"#ff69b4"},size:{type:String,default:"middle",elem:["small","middle","large"]}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-circle-line fun-loading-circle-line-"+this.size},e._l(8,function(n){return t("span",{key:n,style:e.loadingStyle,attrs:{id:"idid"+n}})}),0)},[],!1,function(e){t(10)},null,null).exports;var d=l({name:"FunLoadingCircleHalf",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{borderColor:`${this.color} ${this.color} transparent transparent`}}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"fun-loading-circle-half fun-loading-circle-half-"+this.size,style:this.loadingStyle})},[],!1,function(e){t(12)},null,null).exports;const u=(e,n)=>{let t=!1;"#"===e[0]&&(e=e.slice(1),t=!0);const l=parseInt(e,16);let o=(l>>16)+n;o>255?o=255:o<0&&(o=0);let i=(l>>8&255)+n;i>255?i=255:i<0&&(i=0);let r=(255&l)+n;return r>255?r=255:r<0&&(r=0),(t?"#":"")+(r|i<<8|o<<16).toString(16)};var s=l({name:"FunLoadingCircleQuarter",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{borderColor:`${u(this.color,40)}`,borderRightColor:`${this.color}`}}}},function(){var e=this.$createElement;return(this._self._c||e)("span",{class:"fun-loading-circle fun-loading-circle-"+this.size,style:this.loadingStyle})},[],!1,function(e){t(14)},"data-v-2852bfeb",null).exports;var c=l({name:"FunLoadingCircleToDot",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{borderColor:`${u(this.color,40)} ${this.color}`}}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"fun-loading-circle-to-dot fun-loading-circle-to-dot-"+this.size,style:this.loadingStyle})},[],!1,function(e){t(16)},null,null).exports;var f=l({name:"FunLoadingCircleToDash",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{borderColor:`${u(this.color,40)} ${this.color}`}}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"fun-loading-circle-to-dash fun-loading-circle-to-dash-"+this.size,style:this.loadingStyle})},[],!1,function(e){t(18)},null,null).exports;var g=l({name:"FunLoadingCircleRidge",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{borderColor:`${u(this.color,40)} ${this.color}`}}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"fun-loading-circle-ridge fun-loading-circle-ridge-"+this.size,style:this.loadingStyle})},[],!1,function(e){t(20)},null,null).exports;var p=l({name:"FunLoadingDot",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-dot fun-loading-dot-"+e.size},e._l([1,2,3,4,5],function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(22)},null,null).exports;var m=l({name:"FunLoadingDotShrink",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-dot-shrink fun-loading-dot-shrink-"+e.size},e._l([1,2,3,4,5],function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(24)},null,null).exports;var y=l({name:"FunLoadingDotMoving",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-dot-moving fun-loading-dot-moving-"+e.size},e._l([1,2,3,4,5],function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(26)},null,null).exports;var h=l({name:"FunLoadingDotSquare",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-dot-square fun-loading-dot-square-"+e.size},e._l([1,2,3,4,5],function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(28)},null,null).exports;var S=l({name:"FunLoadingDotSquareShrink",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-dot-square-shrink fun-loading-dot-square-shrink-"+e.size},e._l([1,2,3,4,5],function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(30)},null,null).exports;var v=l({name:"FunLoadingWord",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{color:this.color}}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"fun-loading-word fun-loading-word-"+this.size,style:this.loadingStyle})},[],!1,function(e){t(32)},null,null).exports;var _=l({name:"FunLoadingWordCover",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{color:this.color}}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"fun-loading-word-cover fun-loading-word-cover-"+this.size,style:this.loadingStyle})},[],!1,function(e){t(34)},null,null).exports;var b=l({name:"FunLoadingWordBorderBounce",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{color:this.color}}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"fun-loading-word-border-bounce fun-loading-word-border-bounce-"+this.size,style:this.loadingStyle},[this._v("LOADING...")])},[],!1,function(e){t(36)},null,null).exports;var L=l({name:"FunLoadingLine",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-line fun-loading-line-"+e.size},e._l([1,2,3,4,5],function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(38)},null,null).exports;var C=l({name:"FunLoadingLineBase",props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String,default:"#ff69b4"}},computed:{loadingStyle(){return{backgroundColor:this.color}}}},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"fun-loading-line-base fun-loading-line-base-"+e.size},e._l([1,2,3,4,5],function(n){return t("span",{key:n,style:e.loadingStyle})}),0)},[],!1,function(e){t(40)},null,null),z=l({name:"VueFunLoading",components:{LoadingCircleDot:o,LoadingCircleDotMoving:i,LoadingCircleGradient:r,LoadingCircleLine:a,LoadingCircleHalf:d,LoadingCircleQuarter:s,LoadingCircleToDot:c,LoadingCircleToDash:f,LoadingCircleRidge:g,LoadingDot:p,LoadingDotShrink:m,LoadingDotMoving:y,LoadingDotSquare:h,LoadingDotSquareShrink:S,LoadingWord:v,LoadingWordCover:_,LoadingWordBorderBounce:b,LoadingLine:L,LoadingLineBase:C.exports},props:{size:{type:String,default:"middle",elem:["small","middle","large"]},color:{type:String},type:{type:String,default:"circle-dot",elem:["circle-dot","circle-half","circle-quarter","circle-to-dot","circle-to-dash","circle-ridge","dot","dot-shrink","dot-moving","dot-square","dot-square-shrink","circle-dot-moving","circle-gradient","circle-line","word","word-cover","word-border-bounce","line","line-base"]}},methods:{firstLetterUppercase(e){const n=e.split("");return n[0]=n[0].toUpperCase(),n.join("")}}},function(){var e=this.$createElement;return(this._self._c||e)("Loading"+this.firstLetterUppercase(this.type),{tag:"component",attrs:{size:this.size,color:this.color}})},[],!1,null,null,null).exports;const $=function(e,n={}){$.installed||e.component(z.name,z)};"undefined"!=typeof window&&window.Vue&&$(window.Vue);n.default=$},function(e,n){},,,,,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){}]);