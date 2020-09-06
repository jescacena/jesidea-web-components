/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${s}`);class n{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],h=document.createTreeWalker(e.content,133,null,!1);let a=0,d=-1,A=0;const{strings:u,values:{length:m}}=t;for(;A<m;){const t=h.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)r(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=u[A],i=l.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const r=n.split(o);this.parts.push({type:"attribute",index:d,name:i,strings:r}),A+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),h.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,n=e.split(o),h=n.length-1;for(let e=0;e<h;e++){let s,o=n[e];if(""===o)s=c();else{const t=l.exec(o);null!==t&&r(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++d})}""===n[h]?(i.insertBefore(c(),t),s.push(t)):t.data=n[h],A+=h}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&d!==a||(d++,e.insertBefore(c(),t)),a=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(s.push(t),d--),A++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),A++}}else h.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},h=t=>-1!==t.index,c=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function a(t,e){const{element:{content:i},parts:s}=t,o=document.createTreeWalker(i,133,null,!1);let n=A(s),r=s[n],h=-1,c=0;const l=[];let a=null;for(;o.nextNode();){h++;const t=o.currentNode;for(t.previousSibling===a&&(a=null),e.has(t)&&(l.push(t),null===a&&(a=t)),null!==a&&c++;void 0!==r&&r.index===h;)r.index=null!==a?-1:r.index-c,n=A(s,n),r=s[n]}l.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},A=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(h(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,m=t=>"function"==typeof t&&u.has(t),p={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,r=0,c=0,l=o.nextNode();for(;r<s.length;)if(n=s[r],h(n)){for(;c<n.index;)c++,"TEMPLATE"===l.nodeName&&(i.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=i.pop(),l=o.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=` ${i} `;class y{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");o=(r>-1||o)&&-1===t.indexOf("--\x3e",r+1);const h=l.exec(t);e+=null===h?t+(o?f:s):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class v{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(w(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===p||w(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=p,t(this)}this.value!==p&&this.committer.commit()}}class R{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=c()),t.s(this.endNode=c())}insertAfterPart(t){t.s(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.i);){const t=this.i;this.i=p,t(this)}const t=this.i;t!==p&&(w(t)?t!==this.value&&this.o(t):t instanceof y?this.h(t):t instanceof Node?this.l(t):x(t)?this.A(t):t===g?(this.value=g,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const i=new b(e,t.processor,this.options),s=i._clone();i.update(t.values),this.l(s),this.value=i}}A(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const o of t)i=e[s],void 0===i&&(i=new R(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(o),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=p,t(this)}if(this.i===p)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=p}}class B extends v{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends k{}let J=!1;(()=>{try{const t={get capture(){return J=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class C{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.u=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=p,t(this)}if(this.i===p)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.u,this.m),s&&(this.m=I(t),this.element.addEventListener(this.eventName,this.u,this.m)),this.value=t,this.i=p}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const I=t=>t&&(J?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function E(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(i);return s=e.keyString.get(o),void 0===s&&(s=new n(t,t.getTemplateElement()),e.keyString.set(o,s)),e.stringsArray.set(t.strings,s),s}const j=new Map,Q=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const G=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const o=e[0];if("."===o){return new B(t,e.slice(1),i).parts}return"@"===o?[new C(t,e.slice(1),s.eventContext)]:"?"===o?[new S(t,e.slice(1),i)]:new v(t,e,i).parts}handleTextExpression(t){return new R(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const O=(t,...e)=>new y(t,e,"html",G)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Z=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const N=t=>e=>{const s=Z(e.type,t);let o=j.get(s);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},j.set(s,o));let r=o.stringsArray.get(e.strings);if(void 0!==r)return r;const h=e.strings.join(i);if(r=o.keyString.get(h),void 0===r){const i=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(i,t),r=new n(e,i),o.keyString.set(h,r)}return o.stringsArray.set(e.strings,r),r},Y=["html","svg"],F=new Set,T=(t,e,i)=>{F.add(t);const s=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{Y.forEach(e=>{const i=j.get(Z(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),a(t,i)})})})(t);const h=s.content;i?function(t,e,i=null){const{element:{content:s},parts:o}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=A(o),h=0,c=-1;for(;n.nextNode();){for(c++,n.currentNode===i&&(h=d(e),i.parentNode.insertBefore(e,i));-1!==r&&o[r].index===c;){if(h>0){for(;-1!==r;)o[r].index+=h,r=A(o,r);return}r=A(o,r)}}}(i,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),a(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},K=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:K};class z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=K){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||q,o="function"==typeof s?s:s.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||q.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const s=this.constructor,o=s._attributeNameForProperty(t,i);if(void 0!==o){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,o=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}z.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const H=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),V=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function L(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):V(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const D="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol();class X{constructor(t,e){if(e!==P)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(D?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const _=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new X(i,P)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const $={};class tt extends z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?D?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==$&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return $}}tt.finalized=!0,tt.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const o=s.scopeName,n=Q.has(i),r=U&&11===i.nodeType&&!!i.host,h=r&&!F.has(o),c=h?document.createDocumentFragment():i;if(((t,i,s)=>{let o=Q.get(i);void 0===o&&(e(i,i.firstChild),Q.set(i,o=new R(Object.assign({templateFactory:E},s))),o.appendInto(i)),o.setValue(t),o.commit()})(t,c,Object.assign({templateFactory:N(o)},s)),h){const t=Q.get(c);Q.delete(c);const s=t.value instanceof b?t.value.template:void 0;T(o,c,s),e(i,i.firstChild),i.appendChild(c),Q.set(i,t)}!n&&r&&window.ShadyCSS.styleElement(i.host)};
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var et=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let it=class extends tt{constructor(){super(...arguments),this.name="World",this.count=0}render(){return O`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}foo(){return"foo"}};it.styles=_`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,et([L()],it.prototype,"name",void 0),et([L({type:Number})],it.prototype,"count",void 0),it=et([H("my-element")],it);customElements.define("lit-media-query",class extends tt{static get properties(){return{query:{type:String},_match:{type:Boolean}}}constructor(){super(),this.query="(max-width:460px)",this._match=!1}render(){return O`
    <style>
      :host {
        display: none;
      }
    </style>
    `}firstUpdated(){void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleRisize()}):window.addEventListener("resize",()=>{this._handleRisize()})}_handleRisize(){window.matchMedia(this.query).matches?!1===this._match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!0},composed:!0,bubbles:!0})),this._match=!0):!0===this._match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!1},composed:!0,bubbles:!0})),this._match=!1)}});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class st{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const ot=new WeakMap,nt=(rt=t=>e=>{if(!(e instanceof k)||e instanceof M||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:s}=i;let o=ot.get(e);void 0===o&&(s.setAttribute("class",i.strings.join(" ")),ot.set(e,o=new Set));const n=s.classList||new st(s);o.forEach(e=>{e in t||(n.remove(e),o.delete(e))});for(const e in t){const i=t[e];i!=o.has(e)&&(i?(n.add(e),o.add(e)):(n.remove(e),o.delete(e)))}"function"==typeof n.commit&&n.commit()},(...t)=>{const e=rt(...t);return u.set(e,!0),e});var rt;const ht=_`
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: solid 1px gray;
    max-width: 500px;
    font-family: var(--theme-font-family);
    color: var(--theme-font-color, #000)
  }

  .header {
    display: flex;
    flex: 0 0 200px;
    flex-direction: column;
    border-right: 1.5px dashed;
    border-color: #cacaca;
    padding: 0.3rem 1rem;
    text-align: center;
  }

  .header-mobile {
    border-right: 0px;
  }

  img {
    width: 100px;
    margin: 0 auto;
  }

  .right-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.3rem 1rem;
  }

  .right-list p {
    line-height: 1.2;
  } 

  ul {
    list-style:none;
    margin: 0 auto;
    padding: 0;
  }

  li {
    float: left;
    background-color: #fff;
    transition: 0.3s;
    padding: .3rem;
    border-radius: 5px;
  }

  .repository a::before {
    content: "";
    width: 2rem;
    height: 2rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPiSURBVFhHrVdLa1NBFE4Vn807M/eRxAgqWh+IICK6EBHxsRBcuHEhiHThWkTXLqy1+AekoBv1DwiupCIIgqXVKi6VKra0trZWN01V6veNZ8LNzU1MmnxwuPfOnPOdM2fOPG6sWSSTyYSv1AnPcfogQ5AJyBLkF2TSdZxneN7ytD6ZSCSSYtY+HMfZ5bnuXZB/y3veMsV33WV8VwnbbD++5yCDruvuFprWUSqV1oKkH1Ku57Se2GDwXkZmBorF4jqhbQ65XG6b7zjDQtKWCMcIOLcLfWNAcR+cT3XCuRXh+upls/vFTTSUUlvgfNqm26aylfRbCdvKc4bZFXfV6OnpWeMp9caO3BjgG1X9APM4HiaLkqBj2HyC/UM8R22f4db6bWRNQKHfOrfKWAFn2Idq3giSS2gfF7IJEA+D7CnFvDvOF+n7jCz2ptPpbmOby50O87pK3WFfBUwLOrmeK4oUON4pKga+72fzSu1lQNJUged5G9iHZ06aDHwUX5gXAf5GPewQFRhrPRiM0gr3AFFZMSSAP0Fe8XXPKDBV+FhAVBUFq+Rqfc4otQFf67NRg8Ogf3J3jWmtj4cVOJcsvEwmUxCeFSObzfrg/GAL0YrxiW2bxXczHID5VuqCcLQNTOX5SB+Oc5vzPxSMTt7nO3mgcJoxnbNhP8jyc2aAp1q4Y0RsOwYE8CoYgBGtpxhAOdholJR6KXYdA7hf1ASA5cgOnumVRpMBrd+LXceA0Y7VC2Ay2ChKC/nu7ozYtg3WE6Z1LhwAdsTpmiKkmO9c7pTYtw0u9SgftggjlyE6n4h928AgH9ddhlEbkVFAhFi/vcKxYqCeLpKrhp8+uRFVtuKAEt+pYNKk1FXwrPpH1xJWgetKOPWGn0+7FRP4MIeRcaj1Dbn9jrDNROq6YzgBryEjB/z623MXTsJNyOhB8FwH55ixDTmnsB1TfF/sYrGCHMcMANF9xM3oEJq7LAnbK8Eo9Yh9xrAaXbyAWL2okVtBX/VxTKDDXEjEcBGHiCdH6VxBSAu+z7o4KiY1wOgPN3JMIU/NhYSQa/hrOwK8m/Ma2diK9z7+G2B6LqNpNdujkM/nM9CtqqegGF6t39W9pttLqQRQxmiPSVdT2ByPpxDkTFQA0lb/UmqRl2s50w6DRUg/0852FOKRRj8ZpXg8jQCqTj2KDOj/13ILRokghjnnNCYhBZVbDt/5gogKQJyPsp5ErTmUYrGqXzMKAvjBi6mo1IDnBwKYt/qwXYLNAGpjvai0DqTf/JxiVN9BNptKpeLSVQO5eLAGFuB8EKtij3S1D1a4n04X5bMukKFioyxVIxb7C5L+QoUP57xRAAAAAElFTkSuQmCC');
    display: inline-block;
  }

  .download a::before {
    content: "";
    width: 2rem;
    height: 2rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALKSURBVFhH1dZZyA5RHMfxQ0KWRFwoSaQs2eOCS0uRiHAhLl1YCu+FrUghsu9FubQme+LGDSX7luyRJRFlX0J8f3Pm/zjP0zzzvO8z8ya/+vSeOee8039mzsxzXEKG4SN+Z7AQVecQrmJole5CRcxAVVEBJ3yzqpyH3Ykx6qhrDuKUb1aVi7ACvmAg6pQ8C5CX6IRaJ+8C5DZaoVbJWsBllBYgZ9AUFZO1AL1BSQXIUlRM1gJ6YSz0BoSuQG9YxWQtoFyO4rBvpmc3jvlmrjmCvb6ZnB5Yhvt4jA3YElN7TWAdNmMrtkFz1mMtNK6/G2Hj+vsUD7AcPVGU1niFpIWT5hs+4VfQF/oBjX8P+uQ12qCQfggnyCK0QEvMjvvMabRFI1j6QLdY47qYLmgGS0csgZ1jAArRP9uA6Io6w9Ie4VVooSoqcDpGRUc+l/DBN6NMxlQ0iI6cWw2dQxddSGkB16GMxBDfdOdg47aa+8L6JqmDzIdufePoyLk30PiO6Ojv/6TegRVQdmGlb7p5sHErIHx049VBFiMs4C00roWoDIKO+0dHcUoL0CTlPR75pusOG7cC2kHPdVx05HMD2tDYZ3cutDdoGB05twk6R9lH8AR6XlpgC1ATHyu3EBYQphv2Q+MvEC5ARYs2XIRlC9ipjjJZBc2xArpCPz7aBf2EnUMFNIGiuTehhWnjUraA0eogc3AvNk0dZDA0R181pfTRGRVga0DtpDlFBdjK1ObBcgE2+aw64miObdk6wOaEnsFyB0lzihZhb6hTn2EtGK34r3GfqK2+mdAJH2IW9IbYnNA76A5qjr56SXN00YVowaT9juftGpqjKNoyTYC+ZFo0U3Kmj5sW7ESkbs/24Lhv5hrtB/b5Znrqa0NyEv90R/T/FKBJ9bEG9PGyD1hqtFD09dJWantOdK7nOICKGQ5to5Le3yw+YwSCOPcHSoVxxSSyTpQAAAAASUVORK5CYII=');
    display: inline-block;

  }

  .website a::before {

    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR3SURBVFhHtZfrq1ZFFMZnz8lLZqKkmEVCBV4rraw0L0RRkIkifhEvWGofAj9oVy3tnpqlRHex7By8VGQqaSleCvpgHjMJUroZlH2qQ4h/gf2eNfO+Z+/3nX3Oew76wLPXmll77jNr1rgu4ErnsjnIN+FeeCxz/rxI/lHSXwab/TMEXjDcDrdR8bfIt53zs5DXwV3ov8Azwe6GRhv/2L/b4R2w2+gDN4XRZYvRe1tuQAtcQ4OPwKXoNGqsgH+zRaGs+xBeZrldwE1UfBL5OuxhOe14EdthKd75p0TLtcb8Y0Gv4hL4WqxrjOU0gMkUYFr9jJjO437y/0D2VYLGV8JnpYOBoZybGJJ5+OnRNiWky3EDP/6NnBCSBfTH9idSe8JA48/AVTEp3EPub8hLQ7KA8bFuZjcN1sn/iEw1LmijrQ1qQKIDwruRKagTJ5A2g7XYgPE/JGvs7oL9lBnBqLMjUa+Cxp+EK2IyB2tkVNCrGE7+EngOXUe5gFsw/IC8Fvk4cjcNfoP8Ar5B3q/InUiOWXYv+p2QMu4tqMpGQpbP3Qpl4whmrXRuOXoz5Q7AQ+jrIUuQfY8cB6vYQSbHpgDW3NZbM/MX8iX4EfwU0kE5I3XM1lxOSFSHqUtL4NuQHyDlG0bAHLKH+HwedOcGxR7VHrcK3sf+cNQLYIQ6hk/HZA38o3xWB70OHM/sGHIwNNf5nnITuJyKjiMHhGQRahyujMlaXE3dckQ9Q7IO72CfJ6XiXhPwD/DRdCdB46lTkMc+OCmotfAz+dAJ59gg5ttTeAE+H9R6NNABeUEtRQpseGvbjkwZWH8/Nep1oPFlsNb95pDN5iN3XgJbXt9GJVpLjaZAbD/xQ3PKJmI/CA+lbCJlOY7+RMoG2bz+n0oH5NNX1ZDNZZdIS8JmVOPwMHpJefcxdnWgrP5/1YGOlmAj9ou9BI5p7HATPhfUetC4prKzTVjWwcomvNjHsKmzY2iOqOz24kIyLym3XAca78gRXUXZVmSZI1LoNl9KZ64YL2khWR1iB0pmwKa+EVdsSF1GGsHdSG1EBRK6yT6BWpKv4H7yfw+UbuupfF1Im8nX1b6VOhYgdXPmBpg9yIfbtR1co7YjdWtp41GRxX2fwVfQf0ZuoeB9SIIKi2qGQXVKu5yI2F0PVX4spAOO+EH3v90z3JT+a6SWWrGFRn8bLED3/ln4BLru9fyS0GgyICm5DS2yGh30Kq4JI7eAJB9BV0GYZD5BI0xBcX5hTWk8dQo04rLblXeCBT7csmncyA9a71QnuJItKK1OXaIDCkq1J1JBKVNvdXcWnjcROltYTihdB7yiP420hwaN58PyK2IDiXPvp0HqzBRrNgR66U8h10E9LvJ4GZu8Z2UP5B8m2j95NMFXY103W04XoFHyrMq+gwvRe1luACdC+6HwNLPgIoJ/FfeprJ2IZBjeKPTAVJSrBycRsLlQ+XH8gY6nvXj0ZmCXm00vZP0rn1H2xugW5JjmIhWG74Gt7c9zp5HqyU6YbnEe/zYC5/4H82H4EB13ZtMAAAAASUVORK5CYII=');
    
    content:"";
    width: 2rem;
    height: 2rem;
    display: inline-block;

  }

  li:hover {
    background-color: var(--theme-bg-color-third, blue);
    color: white;
  }

  .mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px gray;
    max-width: 90%;
  }

  }`;
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var ct=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let lt=class extends tt{constructor(){super(...arguments),this._query="(max-width: 800px)",this._isMobile=window.visualViewport.width<800,this.image="data:image/png;base64,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",this.containerClasses={container:!0,mobile:!1},this.headerClasses={header:!0,"header-mobile":!1},this.data={name:"-Empty name-",description:"-Empty description-",website:"-Empty website url-",repo:null,download:null}}connectedCallback(){super.connectedCallback()}_handleMediaQuery(t){this._isMobile=t.detail.value,this.containerClasses={container:!0,mobile:this._isMobile.valueOf()},this.headerClasses={header:!0,"header-mobile":this._isMobile.valueOf()}}render(){this.containerClasses={container:!0,mobile:this._isMobile.valueOf()},this.headerClasses={header:!0,"header-mobile":this._isMobile.valueOf()};var t=this.data.download?O`
          <li class="download">
            <a href="${this.data.download}" target="_blank"></a>
          </li>
        `:"",e=this.data.repo?O`
          <li class="repository">
            <a href="${this.data.repo}" target="_blank"></a>
          </li>
        `:"";return O`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class=${nt(this.containerClasses)}>
        <div class=${nt(this.headerClasses)}>
          <h2>${this.data.name}</h2>
          <img src="${this.image}" />
        </div>
        <div class="right-list">
          <p>${this.data.description}</p>
          <ul>
            <li class="website">
              <a href="${this.data.website}" target="_blank"></a>
            </li>
            ${t} ${e}
          </ul>
        </div>
      </div>
    `}};lt.styles=[ht],ct([L()],lt.prototype,"_query",void 0),ct([L()],lt.prototype,"_isMobile",void 0),ct([L()],lt.prototype,"image",void 0),ct([L()],lt.prototype,"containerClasses",void 0),ct([L()],lt.prototype,"headerClasses",void 0),ct([L({attribute:"data",converter:(t,e)=>{if("string"==typeof t)return JSON.parse(t)}})],lt.prototype,"data",void 0),lt=ct([H("jwc-project-card")],lt);
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var at=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let dt=class extends tt{constructor(){super(...arguments),this.image=null,this.data={name:"Javier Escacena",username:null,occupation:"Programmer",location:"Cercedilla",company:"@paradigmate",email:"javier.escacena@gmail.com",website:"http://jesidea.com",twitter:"@javiescacena",linkedin:"https://www.linkedin.com/in/jescacena/",github:"jescacena"}}render(){return O` <div>JESidea user profile ${this.data.name}</div> `}};dt.styles=_`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,at([L()],dt.prototype,"image",void 0),at([L()],dt.prototype,"data",void 0),dt=at([H("jwc-user-profile")],dt);const At=_`

    :host {
    //  position: relative;
    }
    .container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    img {
        width: 130px;
        height: 25px;
    }


    .menu-desktop {
        list-style: none;
        margin ; 0;
        padding: 0;
        font-family: var(--theme-font-family);
        color: var(--theme-font-color, #000);

    }
    .menu-desktop li {
        float:left;
        margin-right: 1rem;
    }
    .menu-mobile-icon img {
        width: 32px;
    }


    .menu-mobile {
        position:absolute;
        width: 20%;
        transition: right 0.3s;
        font-family: var(--theme-font-family);
        color: var(--theme-font-color, #000);
        top: 0rem;
        right: -30rem;
        z-index:1111;
        background-color: var(--theme-bg-color-third);
        padding: 1rem;
    }

    .menu-mobile.visible {
        right: 0;
        display: block
    }

    .menu-mobile .close {
        font-weight: bold;
        text-align:right;
        margin-bottom: 2rem;
    }

    .menu-mobile ul {
        list-style: none;
        margin ; 0;
        padding: 0;
    }

    .menu-mobile li {
        margin-bottom: 1rem;
    }

`;var ut=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let mt=class extends tt{constructor(){super(...arguments),this._query="(max-width: 800px)",this._isMobile=window.visualViewport.width<800,this._isMenuMobileVisible=!1,this.logo="data:image/png;base64,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",this.menuItems=[{label:"Home",url:"/home"},{label:"About",url:"/home/about"},{label:"Articles",url:"/home/articles"}]}_handleMediaQuery(t){this._isMobile=t.detail.value}_handleClick(){this._toggleMenuMobile()}_toggleMenuMobile(){this._isMenuMobileVisible=!this._isMenuMobileVisible}renderMenuItems(){return this.menuItems.map(t=>O`<li>${t.label} &gt;</li>`)}renderMenu(){return O`
      ${this._isMobile?O`<a
            href="#"
            class="menu-mobile-icon"
            @click="${this._handleClick}"
            ><img src=${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVFhH7dY9DkBAFATg17gMzoMWZ6P1cyYO4ATMSChk63mKN8nX2GI2Npu3Fon8IRUccIqxs4HkopItnw9KK1gG/BUdtCLsYie7IxH/FDDADJMIu0YowTZI3VGFHfw3kIPHEbCTxx+J+OcZxz1wTCqw6x3HfBSk7qjC/SBJLSi5PkpriEQ8Y3YBGdA68Zu0vE8AAAAASUVORK5CYII="}
          /></a>`:O`<ul class="menu-desktop">
            ${this.renderMenuItems()}
          </ul>`}
    `}renderMenuMobile(){const t={"menu-mobile":!0,visible:this._isMenuMobileVisible.valueOf()};return O`
      ${this._isMobile?O` <div class=${nt(t)}>
            <div class="close" @click="${this._toggleMenuMobile}">X</div>
            <ul>
              ${this.renderMenuItems()}
            </ul>
          </div>`:O``}
    `}render(){console.log("JES render header 222!!!",this.menuItems);const t=this.renderMenu();return O`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class="container">
        <img src=${this.logo} />
        ${t}
      </div>
      ${this.renderMenuMobile()}
    `}};mt.styles=[At],ut([L()],mt.prototype,"_query",void 0),ut([L()],mt.prototype,"_isMobile",void 0),ut([L()],mt.prototype,"_isMenuMobileVisible",void 0),ut([L()],mt.prototype,"logo",void 0),ut([L({attribute:"menu-items",converter:(t,e)=>{if(console.log("JES type",e),"string"==typeof t)return JSON.parse(t)}})],mt.prototype,"menuItems",void 0),mt=ut([H("jwc-layout-header")],mt);const pt=_`
    :host {
        //  position: relative;
    }

    .container {
        font-family: var(--theme-font-family);
        color: var(--theme-font-color, #000);
        background-color: var(--theme-bg-color-secondary);
        text-align: center;
    }

    ul.social-links {
        list-style: none;
        width: 100%;
        margin:0 auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .social-links li {
        float: left;
    }
    .social-links li img {
        width: 1.5rem;
    }

    .copyright {
        float: none;
        clear: left;
        font-size: 0.7rem;
        margin-top: .5rem;
    }
`;var gt;!function(t){t.Github="github",t.Linkedin="linkedin",t.Twitter="twitter"}(gt||(gt={}));
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var bt=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ft=class extends tt{constructor(){super(...arguments),this._query="(max-width: 800px)",this._isMobile=window.visualViewport.width<800,this._isMenuMobileVisible=!1,this.socialLinkItems=[{type:gt.Github,url:"https://github.com/jescacena"},{type:gt.Linkedin,url:"https://www.linkedin.com/in/jescacena"},{type:gt.Twitter,url:"https://twitter.com/javiescacena"}]}_handleMediaQuery(t){this._isMobile=t.detail.value}_getIconBySocialNetwork(t){switch(t){case gt.Github:return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==";case gt.Linkedin:return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI4SURBVFhH7VZNTxNRFD0bE7pQE7fGlS79BRr3hp07/A1GXYgxbuQPsIAA8zoIFgga3ZgY3Rhdm2gaw8x7BQVbtPUjtEZ0oRiE1HvuPLUxBDNlwM2c5KT3vZt73ul9nTtFjhw5/onBJz0IqwcwvLg/FVnD2h3BxOdQqtVhXBPGrqRkU2uD+LxXS4k79R4R+YSZehvXX3ZH1gZ2FeG7gldNAbbQ2JYKmbiNsJIIkoy5Z+z2ZG1gP6K0fNCrpgDvka2kCA8M578hiPpFsF9jNbHFoZ1MDDT1y6RGp4HpNyIUPfQZyL0+0r2tDu1kZgbGX7ADKxiLe5WMS7W2kvmJxeRqpl63Uey4nswMFJ0Iuh8iFsleJAZEOG7I+pmsW8K3kr+lnWFufCFjA5OvKDTvM3w8P8NElzUuRsdxze3TmDCuD5NLm2o6UwPGLvhMYiBwV/xKfhPRaWn9Kb9iPsaN6m4bsFeT2J7A7RbzXxGWk4MC+0B/pHtiIHBncfOD5ON1DJWP6J6x9/fOwGjUh9n3NLCG4eiw7gW7YsBVfIZzYFVylzQemzvjO7CGkaeHdM/Yu5j2IzwTAxNLFKrCVI4pA/tFnoJBmOeML2KmQQPfEbqTGHVHJX6MqeUMDfyZbhuePHBTuCHdkM9feVkrbbK3IwMs+v0y8gdwyJCMOfEY6+T7K6+DS9aJgS5fRmG5ICL/8XVM8M9EqdZAUTrBVqYha1hr7AWv1iUG7hW0hbySNGTNgHQxR44c2wL4CXdMCQL2Gc8oAAAAAElFTkSuQmCC";case gt.Twitter:return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVFhH7VZLaxNRFA66SUAtuHGjW1F3rooLRRAxc+cmkyj4FxREwZU7u1OUbgpuAjUzk0ebl9Yu7NqVYHVtN4oQaSHzbNL0kb6O50xum1QbzCSzzAeHucy95zvfnHPvuRMaYYQR/ofxyc/hWyXnTDRrnfZj5DM+WQ0LmsEgadajWGGryjTbYJpV82e2ES+0qkw1Hgs6f7hX3A9LmukolT3guQbw/Jo/Qx+lvAcoxuXzEBG0/YNSyFTLJDIkAabb7ecxFi9sQeIdQKKyD3J2FeSMi7YKPNugeevGnDsmaPsH1RGdazzfAFl3vCBEyjSzExxFKaUdHNtfJNWcwIxNYfAWzqGZVmxmA7CMBn2MoO0fBwLipW0i+S7p9tPYzDrEi61DERQcA04JFw88bVyNZhyOPl+Vtu9wAhLvAfDrPtE73FAMRfxIzgHcnQfKQC0E4K3vhqQ2z7GMs6iUAxAQm92kujZjmn2F3l97tXQKN9gDpdxaQGEVb/FfYJrxPPkBcCOuBVMCnm/+lNLG/WQRTojpNujrj8kAU02NNmUgArw66/Yv8bovYKkWadMGIoCOIWUBT0CR684FMd0Td7LmRTlb36GjGJgAaipIuh59u3JZTPeEpNamKf3oG5wAPOcQm90AlnFVpluXrk/ASbHsCKLTy7dpnZxxghWADWaX5+rYjDZxbL/hqX9bK/aGm7hZXeoVB30iEAHxotcBl+R846Gi18+K6UMoafu8nKu/wDLtellSO50ysAy0e7uzwnTno6RarzHIM3y+xBa9wHS3QTWnO6A7+NACyKn7MqIA8eJ2+9IRRkeUZ+tHgnYbCcDnYJcRTy1H0LlzHSOZPxvyOibQzwT+VPzGU2BSKv0Y+ZAvjp8IusHAU98iiuqOUUn8GPmQr6AZYYQReiAU+gNkqkYBvl9ncgAAAABJRU5ErkJggg==";default:return console.log("Error _getIconBySocialNetwork: no icon for this network type"),""}}_renderItems(){return this.socialLinkItems.map(t=>O`<li>
                <a target="_blank" href=${t.url} class="social-link-item"><img src=${this._getIconBySocialNetwork(t.type)}></a>
            </li>`)}render(){console.log("JES render footer!!!");const t=(new Date).getFullYear();return O`
            <lit-media-query
                .query="${this._query}"
                @changed="${this._handleMediaQuery}"
            >
            </lit-media-query>
            <div class="container">
                <ul class="social-links">${this._renderItems()}</ul>
                <div class="copyright"> © Copyright Javier Escacena ${t}, All Rights Reserved.</div>
            </div>
        `}};ft.styles=[pt],bt([L()],ft.prototype,"_query",void 0),bt([L()],ft.prototype,"_isMobile",void 0),bt([L()],ft.prototype,"_isMenuMobileVisible",void 0),bt([L({attribute:"social-link-items",converter:(t,e)=>{if(console.log("JES footer type",e),"string"==typeof t)return JSON.parse(t)}})],ft.prototype,"socialLinkItems",void 0),ft=bt([H("jwc-layout-footer")],ft);
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var yt=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let wt=class extends tt{constructor(){super(...arguments),this.icon=null,this.header=null,this.source=[]}render(){return O` <div>JESidea jwc-quote-random-box</div> `}};wt.styles=_`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,yt([L()],wt.prototype,"icon",void 0),yt([L()],wt.prototype,"header",void 0),yt([L()],wt.prototype,"source",void 0),wt=yt([H("jwc-quote-random-box")],wt);export{ft as JwcLayoutFooter,mt as JwcLayoutHeader,lt as JwcProjectCard,wt as JwcQuoteRandomBox,dt as JwcUserProfile,it as MyElement};
