/* Knowledge Foundation graph explorer. Includes sigma.js 4.0.3 (MIT), graphology 0.26.0 (MIT), events 3.3.0 (MIT). */
(()=>{var zs=Object.create;var Dr=Object.defineProperty;var Ms=Object.getOwnPropertyDescriptor;var Os=Object.getOwnPropertyNames;var Bs=Object.getPrototypeOf,Ws=Object.prototype.hasOwnProperty;var wr=(a,n)=>()=>{try{return n||a((n={exports:{}}).exports,n),n.exports}catch(e){throw n=0,e}};var Us=(a,n,e,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of Os(n))!Ws.call(a,r)&&r!==e&&Dr(a,r,{get:()=>n[r],enumerable:!(t=Ms(n,r))||t.enumerable});return a};var it=(a,n,e)=>(e=a!=null?zs(Bs(a)):{},Us(n||!a||!a.__esModule?Dr(e,"default",{value:a,enumerable:!0}):e,a));var yt=wr((gh,ma)=>{"use strict";var bt=typeof Reflect=="object"?Reflect:null,Lr=bt&&typeof bt.apply=="function"?bt.apply:function(n,e,t){return Function.prototype.apply.call(n,e,t)},_n;bt&&typeof bt.ownKeys=="function"?_n=bt.ownKeys:Object.getOwnPropertySymbols?_n=function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:_n=function(n){return Object.getOwnPropertyNames(n)};function Hs(a){console&&console.warn&&console.warn(a)}var kr=Number.isNaN||function(n){return n!==n};function ae(){ae.init.call(this)}ma.exports=ae;ma.exports.once=Xs;ae.EventEmitter=ae;ae.prototype._events=void 0;ae.prototype._eventsCount=0;ae.prototype._maxListeners=void 0;var Cr=10;function Tn(a){if(typeof a!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}Object.defineProperty(ae,"defaultMaxListeners",{enumerable:!0,get:function(){return Cr},set:function(a){if(typeof a!="number"||a<0||kr(a))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");Cr=a}});ae.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ae.prototype.setMaxListeners=function(n){if(typeof n!="number"||n<0||kr(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this};function Pr(a){return a._maxListeners===void 0?ae.defaultMaxListeners:a._maxListeners}ae.prototype.getMaxListeners=function(){return Pr(this)};ae.prototype.emit=function(n){for(var e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);var r=n==="error",i=this._events;if(i!==void 0)r=r&&i.error===void 0;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var l=i[n];if(l===void 0)return!1;if(typeof l=="function")Lr(l,this,e);else for(var d=l.length,u=zr(l,d),t=0;t<d;++t)Lr(u[t],this,e);return!0};function Fr(a,n,e,t){var r,i,o;if(Tn(e),i=a._events,i===void 0?(i=a._events=Object.create(null),a._eventsCount=0):(i.newListener!==void 0&&(a.emit("newListener",n,e.listener?e.listener:e),i=a._events),o=i[n]),o===void 0)o=i[n]=e,++a._eventsCount;else if(typeof o=="function"?o=i[n]=t?[e,o]:[o,e]:t?o.unshift(e):o.push(e),r=Pr(a),r>0&&o.length>r&&!o.warned){o.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(n)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=a,s.type=n,s.count=o.length,Hs(s)}return a}ae.prototype.addListener=function(n,e){return Fr(this,n,e,!1)};ae.prototype.on=ae.prototype.addListener;ae.prototype.prependListener=function(n,e){return Fr(this,n,e,!0)};function $s(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Ir(a,n,e){var t={fired:!1,wrapFn:void 0,target:a,type:n,listener:e},r=$s.bind(t);return r.listener=e,t.wrapFn=r,r}ae.prototype.once=function(n,e){return Tn(e),this.on(n,Ir(this,n,e)),this};ae.prototype.prependOnceListener=function(n,e){return Tn(e),this.prependListener(n,Ir(this,n,e)),this};ae.prototype.removeListener=function(n,e){var t,r,i,o,s;if(Tn(e),r=this._events,r===void 0)return this;if(t=r[n],t===void 0)return this;if(t===e||t.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[n],r.removeListener&&this.emit("removeListener",n,t.listener||e));else if(typeof t!="function"){for(i=-1,o=t.length-1;o>=0;o--)if(t[o]===e||t[o].listener===e){s=t[o].listener,i=o;break}if(i<0)return this;i===0?t.shift():Vs(t,i),t.length===1&&(r[n]=t[0]),r.removeListener!==void 0&&this.emit("removeListener",n,s||e)}return this};ae.prototype.off=ae.prototype.removeListener;ae.prototype.removeAllListeners=function(n){var e,t,r;if(t=this._events,t===void 0)return this;if(t.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):t[n]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete t[n]),this;if(arguments.length===0){var i=Object.keys(t),o;for(r=0;r<i.length;++r)o=i[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=t[n],typeof e=="function")this.removeListener(n,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(n,e[r]);return this};function Nr(a,n,e){var t=a._events;if(t===void 0)return[];var r=t[n];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?js(r):zr(r,r.length)}ae.prototype.listeners=function(n){return Nr(this,n,!0)};ae.prototype.rawListeners=function(n){return Nr(this,n,!1)};ae.listenerCount=function(a,n){return typeof a.listenerCount=="function"?a.listenerCount(n):Gr.call(a,n)};ae.prototype.listenerCount=Gr;function Gr(a){var n=this._events;if(n!==void 0){var e=n[a];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}ae.prototype.eventNames=function(){return this._eventsCount>0?_n(this._events):[]};function zr(a,n){for(var e=new Array(n),t=0;t<n;++t)e[t]=a[t];return e}function Vs(a,n){for(;n+1<a.length;n++)a[n]=a[n+1];a.pop()}function js(a){for(var n=new Array(a.length),e=0;e<n.length;++e)n[e]=a[e].listener||a[e];return n}function Xs(a,n){return new Promise(function(e,t){function r(o){a.removeListener(n,i),t(o)}function i(){typeof a.removeListener=="function"&&a.removeListener("error",r),e([].slice.call(arguments))}Mr(a,n,i,{once:!0}),n!=="error"&&qs(a,r,{once:!0})})}function qs(a,n,e){typeof a.on=="function"&&Mr(a,"error",n,e)}function Mr(a,n,e,t){if(typeof a.on=="function")t.once?a.once(n,e):a.on(n,e);else if(typeof a.addEventListener=="function")a.addEventListener(n,function r(i){t.once&&a.removeEventListener(n,r),e(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}});var Ba=wr((wh,Di)=>{Di.exports=function(n){return n!==null&&typeof n=="object"&&typeof n.addUndirectedEdgeWithKey=="function"&&typeof n.dropNode=="function"&&typeof n.multi=="boolean"}});var Ur=it(yt(),1);function Ys(){let a=arguments[0];for(let n=1,e=arguments.length;n<e;n++)if(arguments[n])for(let t in arguments[n])a[t]=arguments[n][t];return a}var ce=Ys;typeof Object.assign=="function"&&(ce=Object.assign);function Te(a,n,e,t){let r=a._nodes.get(n),i=null;return r&&(t==="mixed"?i=r.out&&r.out[e]||r.undirected&&r.undirected[e]:t==="directed"?i=r.out&&r.out[e]:i=r.undirected&&r.undirected[e]),i}function fe(a){return typeof a=="object"&&a!==null}function Hr(a){let n;for(n in a)return!1;return!0}function _e(a,n,e){Object.defineProperty(a,n,{enumerable:!1,configurable:!1,writable:!0,value:e})}function Ce(a,n,e){let t={enumerable:!0,configurable:!0};typeof e=="function"?t.get=e:(t.value=e,t.writable=!1),Object.defineProperty(a,n,t)}function Or(a){return!(!fe(a)||a.attributes&&!Array.isArray(a.attributes))}function Ks(){let a=Math.floor(Math.random()*256)&255;return()=>a++}function Me(){let a=arguments,n=null,e=-1;return{[Symbol.iterator](){return this},next(){let t=null;do{if(n===null){if(e++,e>=a.length)return{done:!0};n=a[e][Symbol.iterator]()}if(t=n.next(),t.done){n=null;continue}break}while(!0);return t}}}function _t(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}var jt=class extends Error{constructor(n){super(),this.name="GraphError",this.message=n}},W=class a extends jt{constructor(n){super(n),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}},B=class a extends jt{constructor(n){super(n),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}},j=class a extends jt{constructor(n){super(n),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}};function $r(a,n){this.key=a,this.attributes=n,this.clear()}$r.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function Vr(a,n){this.key=a,this.attributes=n,this.clear()}Vr.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function jr(a,n){this.key=a,this.attributes=n,this.clear()}jr.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function Tt(a,n,e,t,r){this.key=n,this.attributes=r,this.undirected=a,this.source=e,this.target=t}Tt.prototype.attach=function(){let a="out",n="in";this.undirected&&(a=n="undirected");let e=this.source.key,t=this.target.key;this.source[a][t]=this,!(this.undirected&&e===t)&&(this.target[n][e]=this)};Tt.prototype.attachMulti=function(){let a="out",n="in",e=this.source.key,t=this.target.key;this.undirected&&(a=n="undirected");let r=this.source[a],i=r[t];if(typeof i>"u"){r[t]=this,this.undirected&&e===t||(this.target[n][e]=this);return}i.previous=this,this.next=i,r[t]=this,this.target[n][e]=this};Tt.prototype.detach=function(){let a=this.source.key,n=this.target.key,e="out",t="in";this.undirected&&(e=t="undirected"),delete this.source[e][n],delete this.target[t][a]};Tt.prototype.detachMulti=function(){let a=this.source.key,n=this.target.key,e="out",t="in";this.undirected&&(e=t="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][n],delete this.target[t][a]):(this.next.previous=void 0,this.source[e][n]=this.next,this.target[t][a]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};var Xr=0,qr=1,Zs=2,Yr=3;function Oe(a,n,e,t,r,i,o){let s,l,d,u;if(t=""+t,e===Xr){if(s=a._nodes.get(t),!s)throw new B(`Graph.${n}: could not find the "${t}" node in the graph.`);d=r,u=i}else if(e===Yr){if(r=""+r,l=a._edges.get(r),!l)throw new B(`Graph.${n}: could not find the "${r}" edge in the graph.`);let c=l.source.key,f=l.target.key;if(t===c)s=l.target;else if(t===f)s=l.source;else throw new B(`Graph.${n}: the "${t}" node is not attached to the "${r}" edge (${c}, ${f}).`);d=i,u=o}else{if(l=a._edges.get(t),!l)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`);e===qr?s=l.source:s=l.target,d=r,u=i}return[s,d,u]}function Qs(a,n,e){a.prototype[n]=function(t,r,i){let[o,s]=Oe(this,n,e,t,r,i);return o.attributes[s]}}function Js(a,n,e){a.prototype[n]=function(t,r){let[i]=Oe(this,n,e,t,r);return i.attributes}}function el(a,n,e){a.prototype[n]=function(t,r,i){let[o,s]=Oe(this,n,e,t,r,i);return o.attributes.hasOwnProperty(s)}}function tl(a,n,e){a.prototype[n]=function(t,r,i,o){let[s,l,d]=Oe(this,n,e,t,r,i,o);return s.attributes[l]=d,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function nl(a,n,e){a.prototype[n]=function(t,r,i,o){let[s,l,d]=Oe(this,n,e,t,r,i,o);if(typeof d!="function")throw new W(`Graph.${n}: updater should be a function.`);let u=s.attributes,c=d(u[l]);return u[l]=c,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function al(a,n,e){a.prototype[n]=function(t,r,i){let[o,s]=Oe(this,n,e,t,r,i);return delete o.attributes[s],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:s}),this}}function rl(a,n,e){a.prototype[n]=function(t,r,i){let[o,s]=Oe(this,n,e,t,r,i);if(!fe(s))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return o.attributes=s,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function il(a,n,e){a.prototype[n]=function(t,r,i){let[o,s]=Oe(this,n,e,t,r,i);if(!fe(s))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return ce(o.attributes,s),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:s}),this}}function ol(a,n,e){a.prototype[n]=function(t,r,i){let[o,s]=Oe(this,n,e,t,r,i);if(typeof s!="function")throw new W(`Graph.${n}: provided updater is not a function.`);return o.attributes=s(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}var sl=[{name:a=>`get${a}Attribute`,attacher:Qs},{name:a=>`get${a}Attributes`,attacher:Js},{name:a=>`has${a}Attribute`,attacher:el},{name:a=>`set${a}Attribute`,attacher:tl},{name:a=>`update${a}Attribute`,attacher:nl},{name:a=>`remove${a}Attribute`,attacher:al},{name:a=>`replace${a}Attributes`,attacher:rl},{name:a=>`merge${a}Attributes`,attacher:il},{name:a=>`update${a}Attributes`,attacher:ol}];function ll(a){sl.forEach(function({name:n,attacher:e}){e(a,n("Node"),Xr),e(a,n("Source"),qr),e(a,n("Target"),Zs),e(a,n("Opposite"),Yr)})}function dl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,s=""+r;if(r=arguments[2],i=Te(this,o,s,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return i.attributes[r]}}function ul(a,n,e){a.prototype[n]=function(t){let r;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let i=""+t,o=""+arguments[1];if(r=Te(this,i,o,e),!r)throw new B(`Graph.${n}: could not find an edge for the given path ("${i}" - "${o}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,r=this._edges.get(t),!r)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return r.attributes}}function cl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,s=""+r;if(r=arguments[2],i=Te(this,o,s,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return i.attributes.hasOwnProperty(r)}}function hl(a,n,e){a.prototype[n]=function(t,r,i){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let s=""+t,l=""+r;if(r=arguments[2],i=arguments[3],o=Te(this,s,l,e),!o)throw new B(`Graph.${n}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,o=this._edges.get(t),!o)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return o.attributes[r]=i,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function fl(a,n,e){a.prototype[n]=function(t,r,i){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let s=""+t,l=""+r;if(r=arguments[2],i=arguments[3],o=Te(this,s,l,e),!o)throw new B(`Graph.${n}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,o=this._edges.get(t),!o)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(typeof i!="function")throw new W(`Graph.${n}: updater should be a function.`);return o.attributes[r]=i(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function gl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,s=""+r;if(r=arguments[2],i=Te(this,o,s,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return delete i.attributes[r],this.emit("edgeAttributesUpdated",{key:i.key,type:"remove",attributes:i.attributes,name:r}),this}}function pl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,s=""+r;if(r=arguments[2],i=Te(this,o,s,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(!fe(r))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return i.attributes=r,this.emit("edgeAttributesUpdated",{key:i.key,type:"replace",attributes:i.attributes}),this}}function vl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,s=""+r;if(r=arguments[2],i=Te(this,o,s,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(!fe(r))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return ce(i.attributes,r),this.emit("edgeAttributesUpdated",{key:i.key,type:"merge",attributes:i.attributes,data:r}),this}}function ml(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new j(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new j(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,s=""+r;if(r=arguments[2],i=Te(this,o,s,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new j(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(typeof r!="function")throw new W(`Graph.${n}: provided updater is not a function.`);return i.attributes=r(i.attributes),this.emit("edgeAttributesUpdated",{key:i.key,type:"update",attributes:i.attributes}),this}}var bl=[{name:a=>`get${a}Attribute`,attacher:dl},{name:a=>`get${a}Attributes`,attacher:ul},{name:a=>`has${a}Attribute`,attacher:cl},{name:a=>`set${a}Attribute`,attacher:hl},{name:a=>`update${a}Attribute`,attacher:fl},{name:a=>`remove${a}Attribute`,attacher:gl},{name:a=>`replace${a}Attributes`,attacher:pl},{name:a=>`merge${a}Attributes`,attacher:vl},{name:a=>`update${a}Attributes`,attacher:ml}];function yl(a){bl.forEach(function({name:n,attacher:e}){e(a,n("Edge"),"mixed"),e(a,n("DirectedEdge"),"directed"),e(a,n("UndirectedEdge"),"undirected")})}var xl=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function _l(a,n,e,t){let r=!1;for(let i in n){if(i===t)continue;let o=n[i];if(r=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),a&&r)return o.key}}function Tl(a,n,e,t){let r,i,o,s=!1;for(let l in n)if(l!==t){r=n[l];do{if(i=r.source,o=r.target,s=e(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected),a&&s)return r.key;r=r.next}while(r!==void 0)}}function ba(a,n){let e=Object.keys(a),t=e.length,r,i=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(i>=t)return{done:!0};let o=e[i++];if(o===n){r=void 0;continue}r=a[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function Sl(a,n,e,t){let r=n[e];if(!r)return;let i=r.source,o=r.target;if(t(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected)&&a)return r.key}function El(a,n,e,t){let r=n[e];if(!r)return;let i=!1;do{if(i=t(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),a&&i)return r.key;r=r.next}while(r!==void 0)}function ya(a,n){let e=a[n];if(e.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!e)return{done:!0};let r={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:r}}};let t=!1;return{[Symbol.iterator](){return this},next(){return t===!0?{done:!0}:(t=!0,{done:!1,value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected}})}}}function Al(a,n){if(a.size===0)return[];if(n==="mixed"||n===a.type)return Array.from(a._edges.keys());let e=n==="undirected"?a.undirectedSize:a.directedSize,t=new Array(e),r=n==="undirected",i=a._edges.values(),o=0,s,l;for(;s=i.next(),s.done!==!0;)l=s.value,l.undirected===r&&(t[o++]=l.key);return t}function Kr(a,n,e,t){if(n.size===0)return;let r=e!=="mixed"&&e!==n.type,i=e==="undirected",o,s,l=!1,d=n._edges.values();for(;o=d.next(),o.done!==!0;){if(s=o.value,r&&s.undirected!==i)continue;let{key:u,attributes:c,source:f,target:h}=s;if(l=t(u,c,f.key,h.key,f.attributes,h.attributes,s.undirected),a&&l)return u}}function Rl(a,n){if(a.size===0)return _t();let e=n!=="mixed"&&n!==a.type,t=n==="undirected",r=a._edges.values();return{[Symbol.iterator](){return this},next(){let i,o;for(;;){if(i=r.next(),i.done)return i;if(o=i.value,!(e&&o.undirected!==t))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function xa(a,n,e,t,r,i){let o=n?Tl:_l,s;if(e!=="undirected"&&(t!=="out"&&(s=o(a,r.in,i),a&&s)||t!=="in"&&(s=o(a,r.out,i,t?void 0:r.key),a&&s))||e!=="directed"&&(s=o(a,r.undirected,i),a&&s))return s}function Dl(a,n,e,t){let r=[];return xa(!1,a,n,e,t,function(i){r.push(i)}),r}function wl(a,n,e){let t=_t();return a!=="undirected"&&(n!=="out"&&typeof e.in<"u"&&(t=Me(t,ba(e.in))),n!=="in"&&typeof e.out<"u"&&(t=Me(t,ba(e.out,n?void 0:e.key)))),a!=="directed"&&typeof e.undirected<"u"&&(t=Me(t,ba(e.undirected))),t}function _a(a,n,e,t,r,i,o){let s=e?El:Sl,l;if(n!=="undirected"&&(typeof r.in<"u"&&t!=="out"&&(l=s(a,r.in,i,o),a&&l)||typeof r.out<"u"&&t!=="in"&&(t||r.key!==i)&&(l=s(a,r.out,i,o),a&&l))||n!=="directed"&&typeof r.undirected<"u"&&(l=s(a,r.undirected,i,o),a&&l))return l}function Ll(a,n,e,t,r){let i=[];return _a(!1,a,n,e,t,r,function(o){i.push(o)}),i}function Cl(a,n,e,t){let r=_t();return a!=="undirected"&&(typeof e.in<"u"&&n!=="out"&&t in e.in&&(r=Me(r,ya(e.in,t))),typeof e.out<"u"&&n!=="in"&&t in e.out&&(n||e.key!==t)&&(r=Me(r,ya(e.out,t)))),a!=="directed"&&typeof e.undirected<"u"&&t in e.undirected&&(r=Me(r,ya(e.undirected,t))),r}function kl(a,n){let{name:e,type:t,direction:r}=n;a.prototype[e]=function(i,o){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return[];if(!arguments.length)return Al(this,t);if(arguments.length===1){i=""+i;let s=this._nodes.get(i);if(typeof s>"u")throw new B(`Graph.${e}: could not find the "${i}" node in the graph.`);return Dl(this.multi,t==="mixed"?this.type:t,r,s)}if(arguments.length===2){i=""+i,o=""+o;let s=this._nodes.get(i);if(!s)throw new B(`Graph.${e}:  could not find the "${i}" source node in the graph.`);if(!this._nodes.has(o))throw new B(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return Ll(t,this.multi,r,s,o)}throw new W(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Pl(a,n){let{name:e,type:t,direction:r}=n,i="forEach"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[i]=function(d,u,c){if(!(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)){if(arguments.length===1)return c=d,Kr(!1,this,t,c);if(arguments.length===2){d=""+d,c=u;let f=this._nodes.get(d);if(typeof f>"u")throw new B(`Graph.${i}: could not find the "${d}" node in the graph.`);return xa(!1,this.multi,t==="mixed"?this.type:t,r,f,c)}if(arguments.length===3){d=""+d,u=""+u;let f=this._nodes.get(d);if(!f)throw new B(`Graph.${i}:  could not find the "${d}" source node in the graph.`);if(!this._nodes.has(u))throw new B(`Graph.${i}:  could not find the "${u}" target node in the graph.`);return _a(!1,t,this.multi,r,f,u,c)}throw new W(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};let o="map"+e[0].toUpperCase()+e.slice(1);a.prototype[o]=function(){let d=Array.prototype.slice.call(arguments),u=d.pop(),c;if(d.length===0){let f=0;t!=="directed"&&(f+=this.undirectedSize),t!=="undirected"&&(f+=this.directedSize),c=new Array(f);let h=0;d.push((g,v,b,p,m,y,x)=>{c[h++]=u(g,v,b,p,m,y,x)})}else c=[],d.push((f,h,g,v,b,p,m)=>{c.push(u(f,h,g,v,b,p,m))});return this[i].apply(this,d),c};let s="filter"+e[0].toUpperCase()+e.slice(1);a.prototype[s]=function(){let d=Array.prototype.slice.call(arguments),u=d.pop(),c=[];return d.push((f,h,g,v,b,p,m)=>{u(f,h,g,v,b,p,m)&&c.push(f)}),this[i].apply(this,d),c};let l="reduce"+e[0].toUpperCase()+e.slice(1);a.prototype[l]=function(){let d=Array.prototype.slice.call(arguments);if(d.length<2||d.length>4)throw new W(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${d.length}).`);if(typeof d[d.length-1]=="function"&&typeof d[d.length-2]!="function")throw new W(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,c;d.length===2?(u=d[0],c=d[1],d=[]):d.length===3?(u=d[1],c=d[2],d=[d[0]]):d.length===4&&(u=d[2],c=d[3],d=[d[0],d[1]]);let f=c;return d.push((h,g,v,b,p,m,y)=>{f=u(f,h,g,v,b,p,m,y)}),this[i].apply(this,d),f}}function Fl(a,n){let{name:e,type:t,direction:r}=n,i="find"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[i]=function(l,d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return!1;if(arguments.length===1)return u=l,Kr(!0,this,t,u);if(arguments.length===2){l=""+l,u=d;let c=this._nodes.get(l);if(typeof c>"u")throw new B(`Graph.${i}: could not find the "${l}" node in the graph.`);return xa(!0,this.multi,t==="mixed"?this.type:t,r,c,u)}if(arguments.length===3){l=""+l,d=""+d;let c=this._nodes.get(l);if(!c)throw new B(`Graph.${i}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(d))throw new B(`Graph.${i}:  could not find the "${d}" target node in the graph.`);return _a(!0,t,this.multi,r,c,d,u)}throw new W(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};let o="some"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[o]=function(){let l=Array.prototype.slice.call(arguments),d=l.pop();return l.push((c,f,h,g,v,b,p)=>d(c,f,h,g,v,b,p)),!!this[i].apply(this,l)};let s="every"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[s]=function(){let l=Array.prototype.slice.call(arguments),d=l.pop();return l.push((c,f,h,g,v,b,p)=>!d(c,f,h,g,v,b,p)),!this[i].apply(this,l)}}function Il(a,n){let{name:e,type:t,direction:r}=n,i=e.slice(0,-1)+"Entries";a.prototype[i]=function(o,s){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return _t();if(!arguments.length)return Rl(this,t);if(arguments.length===1){o=""+o;let l=this._nodes.get(o);if(!l)throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return wl(t,r,l)}if(arguments.length===2){o=""+o,s=""+s;let l=this._nodes.get(o);if(!l)throw new B(`Graph.${i}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(s))throw new B(`Graph.${i}:  could not find the "${s}" target node in the graph.`);return Cl(t,r,l,s)}throw new W(`Graph.${i}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Nl(a){xl.forEach(n=>{kl(a,n),Pl(a,n),Fl(a,n),Il(a,n)})}var Gl=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Ln(){this.A=null,this.B=null}Ln.prototype.wrap=function(a){this.A===null?this.A=a:this.B===null&&(this.B=a)};Ln.prototype.has=function(a){return this.A!==null&&a in this.A||this.B!==null&&a in this.B};function $t(a,n,e,t,r){for(let i in t){let o=t[i],s=o.source,l=o.target,d=s===e?l:s;if(n&&n.has(d.key))continue;let u=r(d.key,d.attributes);if(a&&u)return d.key}}function Ta(a,n,e,t,r){if(n!=="mixed"){if(n==="undirected")return $t(a,null,t,t.undirected,r);if(typeof e=="string")return $t(a,null,t,t[e],r)}let i=new Ln,o;if(n!=="undirected"){if(e!=="out"){if(o=$t(a,null,t,t.in,r),a&&o)return o;i.wrap(t.in)}if(e!=="in"){if(o=$t(a,i,t,t.out,r),a&&o)return o;i.wrap(t.out)}}if(n!=="directed"&&(o=$t(a,i,t,t.undirected,r),a&&o))return o}function zl(a,n,e){if(a!=="mixed"){if(a==="undirected")return Object.keys(e.undirected);if(typeof n=="string")return Object.keys(e[n])}let t=[];return Ta(!1,a,n,e,function(r){t.push(r)}),t}function Vt(a,n,e){let t=Object.keys(e),r=t.length,i=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(i>=r)return a&&a.wrap(e),{done:!0};let s=e[t[i++]],l=s.source,d=s.target;if(o=l===n?d:l,a&&a.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Ml(a,n,e){if(a!=="mixed"){if(a==="undirected")return Vt(null,e,e.undirected);if(typeof n=="string")return Vt(null,e,e[n])}let t=_t(),r=new Ln;return a!=="undirected"&&(n!=="out"&&(t=Me(t,Vt(r,e,e.in))),n!=="in"&&(t=Me(t,Vt(r,e,e.out)))),a!=="directed"&&(t=Me(t,Vt(r,e,e.undirected))),t}function Ol(a,n){let{name:e,type:t,direction:r}=n;a.prototype[e]=function(i){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return[];i=""+i;let o=this._nodes.get(i);if(typeof o>"u")throw new B(`Graph.${e}: could not find the "${i}" node in the graph.`);return zl(t==="mixed"?this.type:t,r,o)}}function Bl(a,n){let{name:e,type:t,direction:r}=n,i="forEach"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[i]=function(d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return;d=""+d;let c=this._nodes.get(d);if(typeof c>"u")throw new B(`Graph.${i}: could not find the "${d}" node in the graph.`);Ta(!1,t==="mixed"?this.type:t,r,c,u)};let o="map"+e[0].toUpperCase()+e.slice(1);a.prototype[o]=function(d,u){let c=[];return this[i](d,(f,h)=>{c.push(u(f,h))}),c};let s="filter"+e[0].toUpperCase()+e.slice(1);a.prototype[s]=function(d,u){let c=[];return this[i](d,(f,h)=>{u(f,h)&&c.push(f)}),c};let l="reduce"+e[0].toUpperCase()+e.slice(1);a.prototype[l]=function(d,u,c){if(arguments.length<3)throw new W(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let f=c;return this[i](d,(h,g)=>{f=u(f,h,g)}),f}}function Wl(a,n){let{name:e,type:t,direction:r}=n,i=e[0].toUpperCase()+e.slice(1,-1),o="find"+i;a.prototype[o]=function(d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return;d=""+d;let c=this._nodes.get(d);if(typeof c>"u")throw new B(`Graph.${o}: could not find the "${d}" node in the graph.`);return Ta(!0,t==="mixed"?this.type:t,r,c,u)};let s="some"+i;a.prototype[s]=function(d,u){return!!this[o](d,u)};let l="every"+i;a.prototype[l]=function(d,u){return!this[o](d,(f,h)=>!u(f,h))}}function Ul(a,n){let{name:e,type:t,direction:r}=n,i=e.slice(0,-1)+"Entries";a.prototype[i]=function(o){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return _t();o=""+o;let s=this._nodes.get(o);if(typeof s>"u")throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return Ml(t==="mixed"?this.type:t,r,s)}}function Hl(a){Gl.forEach(n=>{Ol(a,n),Bl(a,n),Wl(a,n),Ul(a,n)})}function Sn(a,n,e,t,r){let i=t._nodes.values(),o=t.type,s,l,d,u,c,f,h;for(;s=i.next(),s.done!==!0;){let g=!1;if(l=s.value,o!=="undirected"){u=l.out;for(d in u){c=u[d];do{if(f=c.target,g=!0,h=r(l.key,f.key,l.attributes,f.attributes,c.key,c.attributes,c.undirected),a&&h)return c;c=c.next}while(c)}}if(o!=="directed"){u=l.undirected;for(d in u)if(!(n&&l.key>d)){c=u[d];do{if(f=c.target,f.key!==d&&(f=c.source),g=!0,h=r(l.key,f.key,l.attributes,f.attributes,c.key,c.attributes,c.undirected),a&&h)return c;c=c.next}while(c)}}if(e&&!g&&(h=r(l.key,null,l.attributes,null,null,null,null),a&&h))return null}}function $l(a,n){let e={key:a};return Hr(n.attributes)||(e.attributes=ce({},n.attributes)),e}function Vl(a,n,e){let t={key:n,source:e.source.key,target:e.target.key};return Hr(e.attributes)||(t.attributes=ce({},e.attributes)),a==="mixed"&&e.undirected&&(t.undirected=!0),t}function jl(a){if(!fe(a))throw new W('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in a))throw new W("Graph.import: serialized node is missing its key.");if("attributes"in a&&(!fe(a.attributes)||a.attributes===null))throw new W("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Xl(a){if(!fe(a))throw new W('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in a))throw new W("Graph.import: serialized edge is missing its source.");if(!("target"in a))throw new W("Graph.import: serialized edge is missing its target.");if("attributes"in a&&(!fe(a.attributes)||a.attributes===null))throw new W("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in a&&typeof a.undirected!="boolean")throw new W("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}var ql=Ks(),Yl=new Set(["directed","undirected","mixed"]),Br=new Set(["domain","_events","_eventsCount","_maxListeners"]),Kl=[{name:a=>`${a}Edge`,generateKey:!0},{name:a=>`${a}DirectedEdge`,generateKey:!0,type:"directed"},{name:a=>`${a}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:a=>`${a}EdgeWithKey`},{name:a=>`${a}DirectedEdgeWithKey`,type:"directed"},{name:a=>`${a}UndirectedEdgeWithKey`,type:"undirected"}],Zl={allowSelfLoops:!0,multi:!1,type:"mixed"};function Ql(a,n,e){if(e&&!fe(e))throw new W(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(n=""+n,e=e||{},a._nodes.has(n))throw new j(`Graph.addNode: the "${n}" node already exist in the graph.`);let t=new a.NodeDataClass(n,e);return a._nodes.set(n,t),a.emit("nodeAdded",{key:n,attributes:e}),t}function Wr(a,n,e){let t=new a.NodeDataClass(n,e);return a._nodes.set(n,t),a.emit("nodeAdded",{key:n,attributes:e}),t}function Zr(a,n,e,t,r,i,o,s){if(!t&&a.type==="undirected")throw new j(`Graph.${n}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(t&&a.type==="directed")throw new j(`Graph.${n}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(s&&!fe(s))throw new W(`Graph.${n}: invalid attributes. Expecting an object but got "${s}"`);if(i=""+i,o=""+o,s=s||{},!a.allowSelfLoops&&i===o)throw new j(`Graph.${n}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let l=a._nodes.get(i),d=a._nodes.get(o);if(!l)throw new B(`Graph.${n}: source node "${i}" not found.`);if(!d)throw new B(`Graph.${n}: target node "${o}" not found.`);let u={key:null,undirected:t,source:i,target:o,attributes:s};if(e)r=a._edgeKeyGenerator();else if(r=""+r,a._edges.has(r))throw new j(`Graph.${n}: the "${r}" edge already exists in the graph.`);if(!a.multi&&(t?typeof l.undirected[o]<"u":typeof l.out[o]<"u"))throw new j(`Graph.${n}: an edge linking "${i}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);let c=new Tt(t,r,l,d,s);a._edges.set(r,c);let f=i===o;return t?(l.undirectedDegree++,d.undirectedDegree++,f&&(l.undirectedLoops++,a._undirectedSelfLoopCount++)):(l.outDegree++,d.inDegree++,f&&(l.directedLoops++,a._directedSelfLoopCount++)),a.multi?c.attachMulti():c.attach(),t?a._undirectedSize++:a._directedSize++,u.key=r,a.emit("edgeAdded",u),r}function Jl(a,n,e,t,r,i,o,s,l){if(!t&&a.type==="undirected")throw new j(`Graph.${n}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(t&&a.type==="directed")throw new j(`Graph.${n}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(s){if(l){if(typeof s!="function")throw new W(`Graph.${n}: invalid updater function. Expecting a function but got "${s}"`)}else if(!fe(s))throw new W(`Graph.${n}: invalid attributes. Expecting an object but got "${s}"`)}i=""+i,o=""+o;let d;if(l&&(d=s,s=void 0),!a.allowSelfLoops&&i===o)throw new j(`Graph.${n}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=a._nodes.get(i),c=a._nodes.get(o),f,h;if(!e&&(f=a._edges.get(r),f)){if((f.source.key!==i||f.target.key!==o)&&(!t||f.source.key!==o||f.target.key!==i))throw new j(`Graph.${n}: inconsistency detected when attempting to merge the "${r}" edge with "${i}" source & "${o}" target vs. ("${f.source.key}", "${f.target.key}").`);h=f}if(!h&&!a.multi&&u&&(h=t?u.undirected[o]:u.out[o]),h){let m=[h.key,!1,!1,!1];if(l?!d:!s)return m;if(l){let y=h.attributes;h.attributes=d(y),a.emit("edgeAttributesUpdated",{type:"replace",key:h.key,attributes:h.attributes})}else ce(h.attributes,s),a.emit("edgeAttributesUpdated",{type:"merge",key:h.key,attributes:h.attributes,data:s});return m}s=s||{},l&&d&&(s=d(s));let g={key:null,undirected:t,source:i,target:o,attributes:s};if(e)r=a._edgeKeyGenerator();else if(r=""+r,a._edges.has(r))throw new j(`Graph.${n}: the "${r}" edge already exists in the graph.`);let v=!1,b=!1;u||(u=Wr(a,i,{}),v=!0,i===o&&(c=u,b=!0)),c||(c=Wr(a,o,{}),b=!0),f=new Tt(t,r,u,c,s),a._edges.set(r,f);let p=i===o;return t?(u.undirectedDegree++,c.undirectedDegree++,p&&(u.undirectedLoops++,a._undirectedSelfLoopCount++)):(u.outDegree++,c.inDegree++,p&&(u.directedLoops++,a._directedSelfLoopCount++)),a.multi?f.attachMulti():f.attach(),t?a._undirectedSize++:a._directedSize++,g.key=r,a.emit("edgeAdded",g),[r,!0,v,b]}function xt(a,n){a._edges.delete(n.key);let{source:e,target:t,attributes:r}=n,i=n.undirected,o=e===t;i?(e.undirectedDegree--,t.undirectedDegree--,o&&(e.undirectedLoops--,a._undirectedSelfLoopCount--)):(e.outDegree--,t.inDegree--,o&&(e.directedLoops--,a._directedSelfLoopCount--)),a.multi?n.detachMulti():n.detach(),i?a._undirectedSize--:a._directedSize--,a.emit("edgeDropped",{key:n.key,attributes:r,source:e.key,target:t.key,undirected:i})}var re=class a extends Ur.EventEmitter{constructor(n){if(super(),n=ce({},Zl,n),typeof n.multi!="boolean")throw new W(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${n.multi}".`);if(!Yl.has(n.type))throw new W(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${n.type}".`);if(typeof n.allowSelfLoops!="boolean")throw new W(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${n.allowSelfLoops}".`);let e=n.type==="mixed"?$r:n.type==="directed"?Vr:jr;_e(this,"NodeDataClass",e);let t="geid_"+ql()+"_",r=0,i=()=>{let o;do o=t+r++;while(this._edges.has(o));return o};_e(this,"_attributes",{}),_e(this,"_nodes",new Map),_e(this,"_edges",new Map),_e(this,"_directedSize",0),_e(this,"_undirectedSize",0),_e(this,"_directedSelfLoopCount",0),_e(this,"_undirectedSelfLoopCount",0),_e(this,"_edgeKeyGenerator",i),_e(this,"_options",n),Br.forEach(o=>_e(this,o,this[o])),Ce(this,"order",()=>this._nodes.size),Ce(this,"size",()=>this._edges.size),Ce(this,"directedSize",()=>this._directedSize),Ce(this,"undirectedSize",()=>this._undirectedSize),Ce(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),Ce(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),Ce(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),Ce(this,"multi",this._options.multi),Ce(this,"type",this._options.type),Ce(this,"allowSelfLoops",this._options.allowSelfLoops),Ce(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(n){return this._nodes.has(""+n)}hasDirectedEdge(n,e){if(this.type==="undirected")return!1;if(arguments.length===1){let t=""+n,r=this._edges.get(t);return!!r&&!r.undirected}else if(arguments.length===2){n=""+n,e=""+e;let t=this._nodes.get(n);return t?t.out.hasOwnProperty(e):!1}throw new W(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(n,e){if(this.type==="directed")return!1;if(arguments.length===1){let t=""+n,r=this._edges.get(t);return!!r&&r.undirected}else if(arguments.length===2){n=""+n,e=""+e;let t=this._nodes.get(n);return t?t.undirected.hasOwnProperty(e):!1}throw new W(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(n,e){if(arguments.length===1){let t=""+n;return this._edges.has(t)}else if(arguments.length===2){n=""+n,e=""+e;let t=this._nodes.get(n);return t?typeof t.out<"u"&&t.out.hasOwnProperty(e)||typeof t.undirected<"u"&&t.undirected.hasOwnProperty(e):!1}throw new W(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(n,e){if(this.type==="undirected")return;if(n=""+n,e=""+e,this.multi)throw new j("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");let t=this._nodes.get(n);if(!t)throw new B(`Graph.directedEdge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);let r=t.out&&t.out[e]||void 0;if(r)return r.key}undirectedEdge(n,e){if(this.type==="directed")return;if(n=""+n,e=""+e,this.multi)throw new j("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");let t=this._nodes.get(n);if(!t)throw new B(`Graph.undirectedEdge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);let r=t.undirected&&t.undirected[e]||void 0;if(r)return r.key}edge(n,e){if(this.multi)throw new j("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.edge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.edge: could not find the "${e}" target node in the graph.`);let r=t.out&&t.out[e]||t.undirected&&t.undirected[e]||void 0;if(r)return r.key}areDirectedNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areDirectedNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:e in t.in||e in t.out}areOutNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areOutNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:e in t.out}areInNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areInNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:e in t.in}areUndirectedNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areUndirectedNeighbors: could not find the "${n}" node in the graph.`);return this.type==="directed"?!1:e in t.undirected}areNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&(e in t.in||e in t.out)||this.type!=="directed"&&e in t.undirected}areInboundNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areInboundNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&e in t.in||this.type!=="directed"&&e in t.undirected}areOutboundNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areOutboundNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&e in t.out||this.type!=="directed"&&e in t.undirected}inDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.directedDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.undirectedDegree: could not find the "${n}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inboundDegree: could not find the "${n}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.inDegree),t}outboundDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outboundDegree: could not find the "${n}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.outDegree),t}degree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.degree: could not find the "${n}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.inDegree+e.outDegree),t}inDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.directedDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.inDegree,r+=e.directedLoops),t-r}outboundDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.outDegree,r+=e.directedLoops),t-r}degreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.degreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.inDegree+e.outDegree,r+=e.directedLoops*2),t-r}source(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.source: could not find the "${n}" edge in the graph.`);return e.source.key}target(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.target: could not find the "${n}" edge in the graph.`);return e.target.key}extremities(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.extremities: could not find the "${n}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(n,e){n=""+n,e=""+e;let t=this._edges.get(e);if(!t)throw new B(`Graph.opposite: could not find the "${e}" edge in the graph.`);let r=t.source.key,i=t.target.key;if(n===r)return i;if(n===i)return r;throw new B(`Graph.opposite: the "${n}" node is not attached to the "${e}" edge (${r}, ${i}).`)}hasExtremity(n,e){n=""+n,e=""+e;let t=this._edges.get(n);if(!t)throw new B(`Graph.hasExtremity: could not find the "${n}" edge in the graph.`);return t.source.key===e||t.target.key===e}isUndirected(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.isUndirected: could not find the "${n}" edge in the graph.`);return e.undirected}isDirected(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.isDirected: could not find the "${n}" edge in the graph.`);return!e.undirected}isSelfLoop(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.isSelfLoop: could not find the "${n}" edge in the graph.`);return e.source===e.target}addNode(n,e){return Ql(this,n,e).key}mergeNode(n,e){if(e&&!fe(e))throw new W(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);n=""+n,e=e||{};let t=this._nodes.get(n);return t?(e&&(ce(t.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:n,attributes:t.attributes,data:e})),[n,!1]):(t=new this.NodeDataClass(n,e),this._nodes.set(n,t),this.emit("nodeAdded",{key:n,attributes:e}),[n,!0])}updateNode(n,e){if(e&&typeof e!="function")throw new W(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);n=""+n;let t=this._nodes.get(n);if(t){if(e){let i=t.attributes;t.attributes=e(i),this.emit("nodeAttributesUpdated",{type:"replace",key:n,attributes:t.attributes})}return[n,!1]}let r=e?e({}):{};return t=new this.NodeDataClass(n,r),this._nodes.set(n,t),this.emit("nodeAdded",{key:n,attributes:r}),[n,!0]}dropNode(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.dropNode: could not find the "${n}" node in the graph.`);let t;if(this.type!=="undirected"){for(let r in e.out){t=e.out[r];do xt(this,t),t=t.next;while(t)}for(let r in e.in){t=e.in[r];do xt(this,t),t=t.next;while(t)}}if(this.type!=="directed")for(let r in e.undirected){t=e.undirected[r];do xt(this,t),t=t.next;while(t)}this._nodes.delete(n),this.emit("nodeDropped",{key:n,attributes:e.attributes})}dropEdge(n){let e;if(arguments.length>1){let t=""+arguments[0],r=""+arguments[1];if(e=Te(this,t,r,this.type),!e)throw new B(`Graph.dropEdge: could not find the "${t}" -> "${r}" edge in the graph.`)}else if(n=""+n,e=this._edges.get(n),!e)throw new B(`Graph.dropEdge: could not find the "${n}" edge in the graph.`);return xt(this,e),this}dropDirectedEdge(n,e){if(arguments.length<2)throw new j("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new j("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");n=""+n,e=""+e;let t=Te(this,n,e,"directed");if(!t)throw new B(`Graph.dropDirectedEdge: could not find a "${n}" -> "${e}" edge in the graph.`);return xt(this,t),this}dropUndirectedEdge(n,e){if(arguments.length<2)throw new j("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new j("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");let t=Te(this,n,e,"undirected");if(!t)throw new B(`Graph.dropUndirectedEdge: could not find a "${n}" -> "${e}" edge in the graph.`);return xt(this,t),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){let n=this._nodes.values(),e;for(;e=n.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(n){return this._attributes[n]}getAttributes(){return this._attributes}hasAttribute(n){return this._attributes.hasOwnProperty(n)}setAttribute(n,e){return this._attributes[n]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:n}),this}updateAttribute(n,e){if(typeof e!="function")throw new W("Graph.updateAttribute: updater should be a function.");let t=this._attributes[n];return this._attributes[n]=e(t),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:n}),this}removeAttribute(n){return delete this._attributes[n],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:n}),this}replaceAttributes(n){if(!fe(n))throw new W("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=n,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(n){if(!fe(n))throw new W("Graph.mergeAttributes: provided attributes are not a plain object.");return ce(this._attributes,n),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:n}),this}updateAttributes(n){if(typeof n!="function")throw new W("Graph.updateAttributes: provided updater is not a function.");return this._attributes=n(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(n,e){if(typeof n!="function")throw new W("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!Or(e))throw new W("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let t=this._nodes.values(),r,i;for(;r=t.next(),r.done!==!0;)i=r.value,i.attributes=n(i.key,i.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(n,e){if(typeof n!="function")throw new W("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!Or(e))throw new W("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let t=this._edges.values(),r,i,o,s;for(;r=t.next(),r.done!==!0;)i=r.value,o=i.source,s=i.target,i.attributes=n(i.key,i.attributes,o.key,s.key,o.attributes,s.attributes,i.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(n){if(typeof n!="function")throw new W("Graph.forEachAdjacencyEntry: expecting a callback.");Sn(!1,!1,!1,this,n)}forEachAdjacencyEntryWithOrphans(n){if(typeof n!="function")throw new W("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Sn(!1,!1,!0,this,n)}forEachAssymetricAdjacencyEntry(n){if(typeof n!="function")throw new W("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Sn(!1,!0,!1,this,n)}forEachAssymetricAdjacencyEntryWithOrphans(n){if(typeof n!="function")throw new W("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Sn(!1,!0,!0,this,n)}nodes(){return Array.from(this._nodes.keys())}forEachNode(n){if(typeof n!="function")throw new W("Graph.forEachNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)r=t.value,n(r.key,r.attributes)}findNode(n){if(typeof n!="function")throw new W("Graph.findNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,n(r.key,r.attributes))return r.key}mapNodes(n){if(typeof n!="function")throw new W("Graph.mapNode: expecting a callback.");let e=this._nodes.values(),t,r,i=new Array(this.order),o=0;for(;t=e.next(),t.done!==!0;)r=t.value,i[o++]=n(r.key,r.attributes);return i}someNode(n){if(typeof n!="function")throw new W("Graph.someNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,n(r.key,r.attributes))return!0;return!1}everyNode(n){if(typeof n!="function")throw new W("Graph.everyNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,!n(r.key,r.attributes))return!1;return!0}filterNodes(n){if(typeof n!="function")throw new W("Graph.filterNodes: expecting a callback.");let e=this._nodes.values(),t,r,i=[];for(;t=e.next(),t.done!==!0;)r=t.value,n(r.key,r.attributes)&&i.push(r.key);return i}reduceNodes(n,e){if(typeof n!="function")throw new W("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new W("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let t=e,r=this._nodes.values(),i,o;for(;i=r.next(),i.done!==!0;)o=i.value,t=n(t,o.key,o.attributes);return t}nodeEntries(){let n=this._nodes.values();return{[Symbol.iterator](){return this},next(){let e=n.next();if(e.done)return e;let t=e.value;return{value:{node:t.key,attributes:t.attributes},done:!1}}}}export(){let n=new Array(this._nodes.size),e=0;this._nodes.forEach((r,i)=>{n[e++]=$l(i,r)});let t=new Array(this._edges.size);return e=0,this._edges.forEach((r,i)=>{t[e++]=Vl(this.type,i,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:n,edges:t}}import(n,e=!1){if(n instanceof a)return n.forEachNode((l,d)=>{e?this.mergeNode(l,d):this.addNode(l,d)}),n.forEachEdge((l,d,u,c,f,h,g)=>{e?g?this.mergeUndirectedEdgeWithKey(l,u,c,d):this.mergeDirectedEdgeWithKey(l,u,c,d):g?this.addUndirectedEdgeWithKey(l,u,c,d):this.addDirectedEdgeWithKey(l,u,c,d)}),this;if(!fe(n))throw new W("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(n.attributes){if(!fe(n.attributes))throw new W("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(n.attributes):this.replaceAttributes(n.attributes)}let t,r,i,o,s;if(n.nodes){if(i=n.nodes,!Array.isArray(i))throw new W("Graph.import: invalid nodes. Expecting an array.");for(t=0,r=i.length;t<r;t++){o=i[t],jl(o);let{key:l,attributes:d}=o;e?this.mergeNode(l,d):this.addNode(l,d)}}if(n.edges){let l=!1;if(this.type==="undirected"&&(l=!0),i=n.edges,!Array.isArray(i))throw new W("Graph.import: invalid edges. Expecting an array.");for(t=0,r=i.length;t<r;t++){s=i[t],Xl(s);let{source:d,target:u,attributes:c,undirected:f=l}=s,h;"key"in s?(h=e?f?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:f?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,h.call(this,s.key,d,u,c)):(h=e?f?this.mergeUndirectedEdge:this.mergeDirectedEdge:f?this.addUndirectedEdge:this.addDirectedEdge,h.call(this,d,u,c))}}return this}nullCopy(n){let e=new a(ce({},this._options,n));return e.replaceAttributes(ce({},this.getAttributes())),e}emptyCopy(n){let e=this.nullCopy(n);return this._nodes.forEach((t,r)=>{let i=ce({},t.attributes);t=new e.NodeDataClass(r,i),e._nodes.set(r,t)}),e}copy(n){if(n=n||{},typeof n.type=="string"&&n.type!==this.type&&n.type!=="mixed")throw new j(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${n.type}" because this would mean losing information about the current graph.`);if(typeof n.multi=="boolean"&&n.multi!==this.multi&&n.multi!==!0)throw new j("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof n.allowSelfLoops=="boolean"&&n.allowSelfLoops!==this.allowSelfLoops&&n.allowSelfLoops!==!0)throw new j("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");let e=this.emptyCopy(n),t=this._edges.values(),r,i;for(;r=t.next(),r.done!==!0;)i=r.value,Zr(e,"copy",!1,i.undirected,i.key,i.source.key,i.target.key,ce({},i.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){let n={};this._nodes.forEach((i,o)=>{n[o]=i.attributes});let e={},t={};this._edges.forEach((i,o)=>{let s=i.undirected?"--":"->",l="",d=i.source.key,u=i.target.key,c;i.undirected&&d>u&&(c=d,d=u,u=c);let f=`(${d})${s}(${u})`;o.startsWith("geid_")?this.multi&&(typeof t[f]>"u"?t[f]=0:t[f]++,l+=`${t[f]}. `):l+=`[${o}]: `,l+=f,e[l]=i.attributes});let r={};for(let i in this)this.hasOwnProperty(i)&&!Br.has(i)&&typeof this[i]!="function"&&typeof i!="symbol"&&(r[i]=this[i]);return r.attributes=this._attributes,r.nodes=n,r.edges=e,_e(r,"constructor",this.constructor),r}};typeof Symbol<"u"&&(re.prototype[Symbol.for("nodejs.util.inspect.custom")]=re.prototype.inspect);Kl.forEach(a=>{["add","merge","update"].forEach(n=>{let e=a.name(n),t=n==="add"?Zr:Jl;a.generateKey?re.prototype[e]=function(r,i,o){return t(this,e,!0,(a.type||this.type)==="undirected",null,r,i,o,n==="update")}:re.prototype[e]=function(r,i,o,s){return t(this,e,!1,(a.type||this.type)==="undirected",r,i,o,s,n==="update")}})});ll(re);yl(re);Nl(re);Hl(re);var En=class extends re{constructor(n){let e=ce({type:"directed"},n);if("multi"in e&&e.multi!==!1)throw new W("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new W('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},An=class extends re{constructor(n){let e=ce({type:"undirected"},n);if("multi"in e&&e.multi!==!1)throw new W("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new W('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},Rn=class extends re{constructor(n){let e=ce({multi:!0},n);if("multi"in e&&e.multi!==!0)throw new W("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}},Dn=class extends re{constructor(n){let e=ce({type:"directed",multi:!0},n);if("multi"in e&&e.multi!==!0)throw new W("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new W('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},wn=class extends re{constructor(n){let e=ce({type:"undirected",multi:!0},n);if("multi"in e&&e.multi!==!0)throw new W("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new W('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}};function St(a){a.from=function(n,e){let t=ce({},n.options,e),r=new a(t);return r.import(n),r}}St(re);St(En);St(An);St(Rn);St(Dn);St(wn);re.Graph=re;re.DirectedGraph=En;re.UndirectedGraph=An;re.MultiGraph=Rn;re.MultiDirectedGraph=Dn;re.MultiUndirectedGraph=wn;re.InvalidArgumentsGraphError=W;re.NotFoundGraphError=B;re.UsageGraphError=j;function Pn(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}function Fn(a,n){if(a){if(typeof a=="string")return Pn(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Pn(a,n):void 0}}function ed(a){if(Array.isArray(a))return a}function td(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,r,i,o,s=[],l=!0,d=!1;try{if(i=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;l=!1}else for(;!(l=(t=i.call(e)).done)&&(s.push(t.value),s.length!==n);l=!0);}catch(u){d=!0,r=u}finally{try{if(!l&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(d)throw r}}return s}}function nd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(a,n){return ed(a)||td(a,n)||Fn(a,n)||nd()}function M(a,n){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=Fn(a))||n&&a&&typeof a.length=="number"){e&&(a=e);var t=0,r=function(){};return{s:r,n:function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){e=e.call(a)},n:function(){var l=e.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||e.return==null||e.return()}finally{if(s)throw i}}}}function Se(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function Cn(a,n,e){return a[0]=n,a[4]=typeof e=="number"?e:n,a}function Qr(a,n){var e=Math.sin(n),t=Math.cos(n);return a[0]=t,a[1]=e,a[3]=-e,a[4]=t,a}function Jr(a,n,e){return a[6]=n,a[7]=e,a}function Ve(a,n){var e=a[0],t=a[1],r=a[2],i=a[3],o=a[4],s=a[5],l=a[6],d=a[7],u=a[8],c=n[0],f=n[1],h=n[2],g=n[3],v=n[4],b=n[5],p=n[6],m=n[7],y=n[8];return a[0]=c*e+f*i+h*l,a[1]=c*t+f*o+h*d,a[2]=c*r+f*s+h*u,a[3]=g*e+v*i+b*l,a[4]=g*t+v*o+b*d,a[5]=g*r+v*s+b*u,a[6]=p*e+m*i+y*l,a[7]=p*t+m*o+y*d,a[8]=p*r+m*s+y*u,a}function Sa(a,n){var e=Math.cos(n),t=Math.sin(n);return{x:e*a.x+t*a.y,y:-t*a.x+e*a.y}}function At(a,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,t=a[0],r=a[1],i=a[3],o=a[4],s=a[6],l=a[7],d=n.x,u=n.y;return{x:d*t+u*i+s*e,y:d*r+u*o+l*e}}function ad(a,n){var e=a.height/a.width,t=n.height/n.width;return e<1&&t>1||e>1&&t<1?1:Math.min(Math.max(t,1/t),Math.max(1/e,e))}function je(a,n,e,t,r){var i=a.angle,o=a.ratio,s=a.x,l=a.y,d=n.width,u=n.height,c=Se(),f=Math.min(d,u)-2*t,h=ad(n,e);return r?(Ve(c,Jr(Se(),s,l)),Ve(c,Cn(Se(),o)),Ve(c,Qr(Se(),i)),Ve(c,Cn(Se(),d/f/2/h,u/f/2/h))):(Ve(c,Cn(Se(),2*(f/d)*h,2*(f/u)*h)),Ve(c,Qr(Se(),-i)),Ve(c,Cn(Se(),1/o)),Ve(c,Jr(Se(),-s,-l))),c}function ei(a,n,e){var t=At(a,{x:Math.cos(n.angle),y:Math.sin(n.angle)},0),r=t.x,i=t.y;return 1/Math.sqrt(Math.pow(r,2)+Math.pow(i,2))/e.width}function Ea(a,n,e,t,r){var i=Math.floor(n/r*t),o=Math.floor(a.drawingBufferHeight/r-e/r*t);return[i,o]}var qt={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},ti=new Int8Array(4),kn=new Int32Array(ti.buffer,0,1),ni=new Float32Array(ti.buffer,0,1),rd=/^\s*rgba?\s*\(/,id=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function In(a){var n=0,e=0,t=0,r=1,i=a.toLowerCase();if(i==="transparent")return{r:0,g:0,b:0,a:0};if(i in qt)return In(qt[i]);if(a[0]==="#")a.length===4?(n=parseInt(a.charAt(1)+a.charAt(1),16),e=parseInt(a.charAt(2)+a.charAt(2),16),t=parseInt(a.charAt(3)+a.charAt(3),16)):(n=parseInt(a.charAt(1)+a.charAt(2),16),e=parseInt(a.charAt(3)+a.charAt(4),16),t=parseInt(a.charAt(5)+a.charAt(6),16)),a.length===9&&(r=parseInt(a.charAt(7)+a.charAt(8),16)/255);else if(rd.test(a)){var o=a.match(id);o&&(n=+o[1],e=+o[2],t=+o[3],o[4]&&(r=+o[4]))}return{r:n,g:e,b:t,a:r}}function ai(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=In(a),t=e.r,r=e.g,i=e.b,o=e.a;return n?[t/255*o,r/255*o,i/255*o,o]:[t/255,r/255,i/255,o]}var Et={};for(Xt in qt)Et[Xt]=Ee(qt[Xt]),Et[qt[Xt]]=Et[Xt];var Xt;function od(a,n,e,t,r){return kn[0]=t<<24|e<<16|n<<8|a,r&&(kn[0]=kn[0]&4278190079),ni[0]}function Ee(a){if(a=a.toLowerCase(),typeof Et[a]<"u")return Et[a];var n=In(a),e=n.r,t=n.g,r=n.b,i=n.a;i=i*255|0;var o=od(e,t,r,i,!0);return Et[a]=o,o}function Xe(a,n){ni[0]=Ee(a);var e=kn[0];n&&(e=e|16777216);var t=e&255,r=e>>8&255,i=e>>16&255,o=e>>24&255;return[t,r,i,o]}function Rt(a){var n=a>>>8&255,e=a>>>16&255,t=a>>>24&255,r=a&255;return(r<<24|t<<16|e<<8|n)>>>0}function Aa(a,n,e,t){return(e<<24|n<<16|a<<8|t)>>>0}function ri(a,n,e,t,r,i){var o=Ea(a,e,t,r,i),s=J(o,2),l=s[0],d=s[1],u=new Uint8Array(4);a.bindFramebuffer(a.FRAMEBUFFER,n),a.readPixels(l,d,1,1,a.RGBA,a.UNSIGNED_BYTE,u);var c=J(u,4),f=c[0],h=c[1],g=c[2],v=c[3];return[f,h,g,v]}function ii(a){var n=In(a),e=n.r,t=n.g,r=n.b,i=n.a,o=(e/255).toFixed(6),s=(t/255).toFixed(6),l=(r/255).toFixed(6),d=i.toFixed(6);return"vec4(".concat(o,", ").concat(s,", ").concat(l,", ").concat(d,")")}function sd(a,n){if(typeof a!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function li(a){var n=sd(a,"string");return typeof n=="symbol"?n:n+""}function S(a,n,e){return(n=li(n))in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function oi(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),e.push.apply(e,t)}return e}function O(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?oi(Object(e),!0).forEach(function(t){S(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):oi(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function Y(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function si(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,li(t.key),t)}}function K(a,n,e){return n&&si(a.prototype,n),e&&si(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function ot(a){return ot=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ot(a)}function di(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(di=function(){return!!a})()}function ld(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function dd(a,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ld(a)}function oe(a,n,e){return n=ot(n),dd(a,di()?Reflect.construct(n,e||[],ot(a).constructor):n.apply(a,e))}function Ra(a,n){return Ra=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ra(a,n)}function se(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),n&&Ra(a,n)}function ud(a){if(Array.isArray(a))return Pn(a)}function cd(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function hd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(a){return ud(a)||cd(a)||Fn(a)||hd()}function Z(a){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Z(a)}function ke(a){return Z(a)==="object"&&a!==null&&"attribute"in a}function Yt(){var a=`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`;return{name:"circle",glsl:a,uniforms:[]}}function Kt(a){var n,e=WebGL2RenderingContext,t=e.UNSIGNED_BYTE,r=(n=a?.color)!==null&&n!==void 0?n:{attribute:"color"};if(!ke(r)){var i=r,o=`
vec4 layer_fill() {
  return `.concat(ii(i),`;
}
`);return{name:"fill",uniforms:[],attributes:[],glsl:o}}var s=r.attribute,l=`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`;return{name:"fill",uniforms:[],attributes:[{name:"fillColor",size:4,type:t,normalized:!0,source:s}],glsl:l}}function Da(a,n){if(typeof a=="string"){var e=ai(a).map(function(d){return d.toFixed(6)}),t=J(e,4),r=t[0],i=t[1],o=t[2],s=t[3];return{glsl:"vec4(".concat(r,", ").concat(i,", ").concat(o,", ").concat(s,")"),attributes:[],needsNodeColors:!1}}if("node"in a&&a.node)return{glsl:a.node==="source"?"v_sourceColor":"v_targetColor",attributes:[],needsNodeColors:!0};var l=a;return{glsl:"v_".concat(n),attributes:[{name:"a_".concat(n),size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:l.attribute,defaultValue:l.default}],needsNodeColors:!1}}function Ie(a){var n=a?.color;if(n===void 0){var e=`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`;return{name:"plain",glsl:e,uniforms:[],attributes:[]}}var t=Da(n,"plainColor"),r=`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return `.concat(t.glsl,`;
}
`);return{name:"plain",glsl:r,uniforms:[],attributes:t.attributes,needsNodeColors:t.needsNodeColors}}function Zt(){var a=`
// Position at parameter t \u2208 [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`;return{name:"straight",segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:a,uniforms:[],attributes:[]}}function wa(a){var n=a??{},e=n.segments,t=e===void 0?32:e,r=`
const float LOOP_PI = 3.141592653589793;

float loopWorldRadius() {
  float nodeWorldRadius = v_sourceNodeSize * u_correctionRatio / u_sizeRatio;
  return max(v_loopRadius * nodeWorldRadius, 0.001);
}

// Cubic B\xE9zier with P0 = P3 = source.
// Control points extend outward orthogonal to the node surface at exit/entry angles.
vec2 path_loop_position(float t, vec2 source, vec2 target) {
  float R = loopWorldRadius();
  float angle = v_loopAngle + (v_loopFixedOrientation > 0.5 ? u_cameraAngle : 0.0);
  float halfSpread = v_loopSpread * 0.5;

  float exitAngle = angle - halfSpread;
  float entryAngle = angle + halfSpread;

  // Control point distance: at t=0.5 the B\xE9zier reaches 0.75 * cpDist * cos(halfSpread)
  // from source. Solve for cpDist so the loop tip reaches exactly R.
  float cpDist = R / (0.75 * cos(halfSpread));

  vec2 cp1 = source + cpDist * vec2(cos(exitAngle), sin(exitAngle));
  vec2 cp2 = source + cpDist * vec2(cos(entryAngle), sin(entryAngle));

  float u = 1.0 - t;
  vec2 d1 = cp1 - source;
  vec2 d2 = cp2 - source;
  return source + 3.0 * t * u * (u * d1 + t * d2);
}

// Approximate arc length via chord sampling
float path_loop_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_loop_position(0.0, source, target);
  const int STEPS = 16;
  for (int i = 1; i <= STEPS; i++) {
    float t = float(i) / float(STEPS);
    vec2 cur = path_loop_position(t, source, target);
    len += length(cur - prev);
    prev = cur;
  }
  return len;
}
`;return{name:"loop",segments:t,glsl:r,needsNodeSize:!0,uniforms:[],attributes:[{name:"loopRadius",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopAngle",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopSpread",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopFixedOrientation",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:"number",default:4},loopAngle:{type:"number",default:Math.PI/4},loopSpread:{type:"number",default:80*Math.PI/180},loopFixedOrientation:{type:"number",default:0}},spread:{variable:"loopRadius",compute:function(o){return o+4}}}}var pi=it(yt());function ui(a){return Z(a)==="object"&&"glsl"in a&&!("attributes"in a)}function ci(a){return Z(a)==="object"&&"glsl"in a&&!("attributes"in a)}var Qt={shapes:[Yt()],variables:{},layers:[Kt()],label:{},backdrop:{},labelAttachments:{}},Dt={paths:[Zt(),wa()],extremities:[],variables:{},layers:[Ie()],defaultHead:"none",defaultTail:"none",label:{}},Nn=["nodes","topNodes"],Gn=["edges","topEdges"],zn=[].concat(Gn,Nn),hi={nodes:Qt,edges:Dt,depthLayers:V(zn)};var fd=function(n){return n},gd=function(n){return n*n},pd=function(n){return n*(2-n)},vd=function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)},md=function(n){return n*n*n},bd=function(n){return--n*n*n+1},yd=function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)},xd=function(n){return n===0?0:Math.pow(2,10*(n-1))},_d=function(n){return n===1?1:1-Math.pow(2,-10*n)},Td=function(n){return n===0?0:n===1?1:n<.5?Math.pow(2,10*(2*n-1))/2:(2-Math.pow(2,-10*(2*n-1)))/2},La={linear:fd,quadraticIn:gd,quadraticOut:pd,quadraticInOut:vd,cubicIn:md,cubicOut:bd,cubicInOut:yd,exponentialIn:xd,exponentialOut:_d,exponentialInOut:Td};function Jt(a){return a?typeof a=="function"?a:La[a]:La.linear}function ka(a){return Z(a)==="object"&&a!==null&&"attribute"in a}function vi(a){return typeof a=="function"}function mi(a){return Z(a)==="object"&&a!==null&&"when"in a&&typeof a.when=="function"&&"then"in a}function bi(a){return Z(a)==="object"&&a!==null&&"whenState"in a&&"then"in a}function yi(a){return Z(a)==="object"&&a!==null&&"whenData"in a&&"then"in a}var Sd={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},Ed={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},Ad={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function xi(a){return O(O({},Sd),a)}function _i(a){return O(O({},Ed),a)}function Pa(a){return O(O({},Ad),a)}var Rd={x:{attribute:"x"},y:{attribute:"y"},size:{whenState:"isHovered",then:{attribute:"size",defaultValue:12},else:{attribute:"size",defaultValue:10}},color:{attribute:"color",defaultValue:"#666"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"},labelVisibility:{whenState:"isHovered",then:"visible",else:"auto"},backdropVisibility:{whenState:"isHovered",then:"visible",else:"hidden"},backdropColor:"#ffffff",backdropShadowColor:"rgba(0, 0, 0, 0.5)",backdropShadowBlur:12,backdropPadding:6},Dd={size:{attribute:"size",defaultValue:1},color:{attribute:"color",defaultValue:"#ccc"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"}};var qe={nodes:O(O({},Rd),{},{depth:{whenState:"isHovered",then:"topNodes",else:"nodes"}}),edges:O(O({},Dd),{},{depth:{whenState:["isHighlighted","isHovered"],then:"topEdges",else:"edges"}})};function wd(a){return"min"in a||"max"in a||"minValue"in a||"maxValue"in a||"easing"in a}function Ld(a){return"dict"in a}function On(a,n){return typeof a=="string"?n[a]===!0:Array.isArray(a)?a.every(function(e){return n[e]===!0}):Z(a)==="object"&&a!==null?Object.entries(a).every(function(e){var t=J(e,2),r=t[0],i=t[1];return n[r]===i}):!1}function Cd(a,n){var e=n[a.attribute];return e===void 0?a.defaultValue:e}function kd(a,n,e){var t,r,i,o,s=n[a.attribute];if(s===void 0)return a.defaultValue;var l=Number(s);if(isNaN(l))return a.defaultValue;if(a.min===void 0&&a.max===void 0)return l;var d=(t=a.minValue)!==null&&t!==void 0?t:l,u=(r=a.maxValue)!==null&&r!==void 0?r:l;if(u===d){var c;return(c=a.min)!==null&&c!==void 0?c:l}var f=(l-d)/(u-d);f=Math.max(0,Math.min(1,f));var h=Jt(a.easing);f=h(f);var g=(i=a.min)!==null&&i!==void 0?i:0,v=(o=a.max)!==null&&o!==void 0?o:1;return g+f*(v-g)}function Pd(a,n){var e=n[a.attribute];if(e===void 0)return a.defaultValue;var t=String(e);return t in a.dict?a.dict[t]:a.defaultValue}function Fd(a,n,e){return Ld(a)?Pd(a,n):wd(a)?kd(a,n):Cd(a,n)}function Ti(a,n){return typeof a=="string"?!!n[a]:Array.isArray(a)?a.every(function(e){return!!n[e]}):Z(a)==="object"&&a!==null?Object.entries(a).every(function(e){var t=J(e,2),r=t[0],i=t[1];return n[r]===i}):!1}function Mn(a,n,e,t,r,i){if(a==null)return i;if(Z(a)!=="object"&&typeof a!="function")return a;if(mi(a)){var o=a.when(n,e,t,r)?a.then:a.else;return o===void 0?i:Mn(o,n,e,t,r,i)}if(bi(a)){var s=On(a.whenState,e)?a.then:a.else;return s===void 0?i:Mn(s,n,e,t,r,i)}if(yi(a)){var l=Ti(a.whenData,n)?a.then:a.else;return l===void 0?i:Mn(l,n,e,t,r,i)}if(vi(a)){var d=a(n,e,t,r);return d??i}if(ka(a)){var u=Fd(a,n);return u??i}return a}function Pe(a){if(a==null)return"static";if(mi(a))return"graph-state";if(bi(a)){var n=Pe(a.then),e=a.else!==void 0?Pe(a.else):"static";return Ae("item-state",Ae(n,e))}if(yi(a)){var t=Pe(a.then),r=a.else!==void 0?Pe(a.else):"static";return Ae(t,r)}return vi(a)?"graph-state":(ka(a),"static")}function Ae(a,n){return a==="graph-state"||n==="graph-state"?"graph-state":a==="item-state"||n==="item-state"?"item-state":"static"}function Fa(a){if(!a)return{dependency:"static",xAttribute:null,yAttribute:null};var n=Array.isArray(a)?a:[a],e="static",t=null,r=null,i=M(n),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;if("matchData"in s&&"cases"in s)for(var l=s.cases,d=0,u=Object.values(l);d<u.length;d++)for(var c=u[d],f=0,h=Object.values(c);f<h.length;f++){var g=h[f];e=Ae(e,Pe(g))}else if("matchState"in s&&"cases"in s){e=Ae(e,"item-state");for(var v=s.cases,b=0,p=Object.values(v);b<p.length;b++)for(var m=p[b],y=0,x=Object.values(m);y<x.length;y++){var _=x[y];e=Ae(e,Pe(_))}}else if("when"in s&&"then"in s)e="graph-state";else if("whenState"in s){e=Ae(e,"item-state");var T=s.then;if(T&&Z(T)==="object")for(var A=0,E=Object.values(T);A<E.length;A++){var R=E[A];e=Ae(e,Pe(R))}var C=s.else;if(C&&Z(C)==="object")for(var k=0,D=Object.values(C);k<D.length;k++){var F=D[k];e=Ae(e,Pe(F))}}else if("whenData"in s){var L=s.then;if(L&&Z(L)==="object")for(var G=0,N=Object.values(L);G<N.length;G++){var z=N[G];e=Ae(e,Pe(z))}var P=s.else;if(P&&Z(P)==="object")for(var w=0,I=Object.values(P);w<I.length;w++){var H=I[w];e=Ae(e,Pe(H))}}else for(var U=0,$=Object.entries(s);U<$.length;U++){var X=J($[U],2),Q=X[0],ue=X[1];if(!Na.has(Q)&&(e=Ae(e,Pe(ue)),(Q==="x"||Q==="y")&&ka(ue))){var xe=ue.attribute;Q==="x"&&!t&&(t=xe),Q==="y"&&!r&&(r=xe)}}}}catch(Le){i.e(Le)}finally{i.f()}return{dependency:e,xAttribute:t,yAttribute:r}}var Be={size:10,color:"#666",opacity:1,shape:"circle",rotationAlignment:"viewport",labelRotationAlignment:"viewport",visibility:"visible",depth:"nodes",zIndex:0,label:"",labelColor:"#000",labelSize:12,labelFont:"sans-serif",labelVisibility:"auto",labelPosition:"right",labelAngle:0,labelDepth:"nodes",backdropVisibility:"hidden",backdropColor:"transparent",backdropShadowColor:"transparent",backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:"transparent",backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:"both",labelAttachment:null,labelAttachmentPlacement:"below"},Ia={size:1,color:"#ccc",opacity:1,path:"straight",selfLoopPath:"loop",parallelSpread:.25,tail:"none",head:"none",visibility:"visible",depth:"edges",zIndex:0,label:"",labelColor:"#666",labelVisibility:"auto",labelDepth:"edges"},Na=new Set(["when","whenState","whenData","then","else"]),fi=Object.keys(Be),Id=Object.values(Be),gi=Object.keys(Ia),Nd=Object.values(Ia);function wt(a,n,e,t,r,i,o){for(var s in n){var l;if(!Na.has(s)){var d=(l=a[s])!==null&&l!==void 0?l:o[s];a[s]=Mn(n[s],e,t,r,i,d)}}"depth"in n&&!("labelDepth"in n)&&(a.labelDepth=a.depth)}function Si(a,n,e,t,r,i,o){var s=M(n),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;if("matchData"in d&&"cases"in d){var u,c=String((u=e[d.matchData])!==null&&u!==void 0?u:""),f=d.cases;c in f&&wt(a,f[c],e,t,r,i,o)}else if("matchState"in d&&"cases"in d){var h,g=String((h=t[d.matchState])!==null&&h!==void 0?h:""),v=d.cases;g in v&&wt(a,v[g],e,t,r,i,o)}else if("when"in d&&"then"in d){var b=d.when;if(!b(e,t,r,i))continue;wt(a,d.then,e,t,r,i,o)}else if("whenState"in d&&"then"in d){if(!On(d.whenState,t))continue;wt(a,d.then,e,t,r,i,o)}else if("whenData"in d&&"then"in d){if(!Ti(d.whenData,e))continue;wt(a,d.then,e,t,r,i,o)}else wt(a,d,e,t,r,i,o)}}catch(p){s.e(p)}finally{s.f()}}function Ga(a,n,e,t,r,i){for(var o=i||{},s=o,l=0,d=fi.length;l<d;l++)s[fi[l]]=Id[l];if(s.x=void 0,s.y=void 0,s.labelBackgroundColor=void 0,s.labelBackgroundPadding=void 0,s.labelCursor=void 0,!a){var u,c,f,h,g;return s.x=(u=n.x)!==null&&u!==void 0?u:0,s.y=(c=n.y)!==null&&c!==void 0?c:0,o.size=(f=n.size)!==null&&f!==void 0?f:10,o.color=(h=n.color)!==null&&h!==void 0?h:"#666",o.label=(g=n.label)!==null&&g!==void 0?g:"",o}var v=Array.isArray(a)?a:[a];return Si(s,v,n,e,t,r,Be),o}function za(a,n,e,t,r,i){for(var o=i||{},s=o,l=0,d=gi.length;l<d;l++)s[gi[l]]=Nd[l];if(!a){var u,c,f;return o.size=(u=n.size)!==null&&u!==void 0?u:1,o.color=(c=n.color)!==null&&c!==void 0?c:"#ccc",o.label=(f=n.label)!==null&&f!==void 0?f:"",o}var h=Array.isArray(a)?a:[a];return Si(s,h,n,e,t,r,Ia),typeof s.labelPosition=="number"&&(s.labelPosition=void 0),o}function Gd(a,n,e){var t,r;if(a==null)return e;if(typeof a=="function")return(t=a(n))!==null&&t!==void 0?t:e;if(Z(a)==="object"&&"when"in a){var i,o=a,s=o.when(n),l=s?o.then:o.else;return l===void 0?e:typeof l=="function"?(i=l(n))!==null&&i!==void 0?i:e:l??e}if(Z(a)==="object"&&"whenState"in a){var d,u=a,c=On(u.whenState,n),f=c?u.then:u.else;return f===void 0?e:typeof f=="function"?(d=f(n))!==null&&d!==void 0?d:e:f??e}return(r=a)!==null&&r!==void 0?r:e}function Ma(a,n){var e={};if(!a)return e;var t=Array.isArray(a)?a:[a],r=M(t),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if("when"in o&&"then"in o){var s=o.when(n),l=s?o.then:o.else;l&&Z(l)==="object"&&Ca(e,l,n)}else if("whenState"in o&&"then"in o){var d=On(o.whenState,n),u=d?o.then:o.else;u&&Z(u)==="object"&&Ca(e,u,n)}else Ca(e,o,n)}}catch(c){r.e(c)}finally{r.f()}return e}function Ca(a,n,e){for(var t=0,r=Object.entries(n);t<r.length;t++){var i=J(r[t],2),o=i[0],s=i[1];Na.has(o)||(a[o]=Gd(s,e))}}var Bn=(function(a){function n(){var e;return Y(this,n),e=oe(this,n),e.rawEmitter=e,e}return se(n,a),K(n)})(pi.EventEmitter);var Ei=hi;function Oa(a,n){var e=n.size;if(e!==0){var t=a.length;a.length+=e;var r=0;n.forEach(function(i){a[t+r]=i,r++})}}function Ai(a){a=a||{};for(var n=0,e=arguments.length<=1?0:arguments.length-1;n<e;n++){var t=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];t&&Object.assign(a,t)}return a}function Lt(a,n){for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&n[e]!==a[e])return!0;return!1}function Ri(a,n){var e=a,t=n;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&e[r]!==t[r])return!1;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&t[i]!==e[i])return!1;return!0}function st(a,n,e){e?a.add(n):a.delete(n)}var wi=it(Ba());var Li={easing:"quadraticInOut",duration:150};function Ye(a){return a.labelVisibility==="visible"&&a.visibility!=="hidden"}function Wa(a){return a.backdropVisibility==="visible"&&a.visibility!=="hidden"}function Wn(a){return[a.rotationAlignment==="graph"?1:0,a.labelRotationAlignment==="graph"?1:0]}function Ua(a,n,e){var t=a[n];if(t)for(var r=0;r<t.length;r++){var i=t[r];if(!(e<i.offset||e>=i.offset+i.count)){if(i.count===1)t.splice(r,1);else if(e===i.offset)i.offset++,i.count--;else if(e===i.offset+i.count-1)i.count--;else{var o=e+1,s=i.offset+i.count-o;i.count=e-i.offset,t.splice(r+1,0,{offset:o,count:s})}return}}}function Ha(a,n,e){if(!a[n]){a[n]=[{offset:e,count:1}];return}for(var t=a[n],r=t.length,i=0;i<t.length;i++)if(e<t[i].offset){r=i;break}var o=r>0?t[r-1]:null,s=r<t.length?t[r]:null,l=o&&o.offset+o.count===e,d=s&&e+1===s.offset;l&&d?(o.count+=1+s.count,t.splice(r,1)):l?o.count++:d?(s.offset--,s.count++):t.splice(r,0,{offset:e,count:1})}function Ci(a){if(!(0,wi.default)(a))throw new Error("Sigma: invalid graph instance.")}function Un(a){var n=J(a.x,2),e=n[0],t=n[1],r=J(a.y,2),i=r[0],o=r[1],s=Math.max(t-e,o-i),l=(t+e)/2,d=(o+i)/2;(s===0||Math.abs(s)===1/0||isNaN(s))&&(s=1),isNaN(l)&&(l=0),isNaN(d)&&(d=0);var u=function(f){return{x:.5+(f.x-l)/s,y:.5+(f.y-d)/s}};return u.applyTo=function(c){c.x=.5+(c.x-l)/s,c.y=.5+(c.y-d)/s},u.inverse=function(c){return{x:l+s*(c.x-.5),y:d+s*(c.y-.5)}},u.ratio=s,u}var Hn={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:"nodeLabels",enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"positions",autoRescale:!0,autoRescaleContent:"positions",enableNodeDrag:!1,getDraggedNodes:function(n){return[n]},dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:"graph",sharedGestureWheelMessage:"Use Ctrl + scroll to zoom the graph",sharedGestureAppleWheelMessage:"Use \u2318 + scroll to zoom the graph",sharedGestureTouchMessage:"Use two fingers to move the graph",allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function $n(a){if(typeof a.labelDensity!="number"||a.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var n=a.minCameraRatio,e=a.maxCameraRatio;if(typeof n=="number"&&typeof e=="number"&&e<n)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function ki(a){return Ai({},Hn,a)}var zd=new Set(["italic","oblique"]),Md=new Set(["bold","bolder","lighter"]);function Vn(a){for(var n="normal",e="normal",t=a.trim(),r=t.split(/\s+/),i=0,o=0;o<r.length;o++){var s=r[o].toLowerCase();if(zd.has(s))e=s,i=o+1;else if(Md.has(s)||/^\d{3}$/.test(s))n=s,i=o+1;else if(s==="normal")i=o+1;else break}var l=r.slice(i).join(" ");return{family:l||t,weight:n,style:e}}function Ct(a,n,e){var t=document.createElement(a);if(n)for(var r in n)t.style[r]=n[r];if(e)for(var i in e)t.setAttribute(i,e[i]);return t}function en(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}var Mi=it(yt());function Od(a){var n=a.type===WebGL2RenderingContext.FLOAT&&!a.normalized,e=a.type===WebGL2RenderingContext.UNSIGNED_BYTE&&a.size===4&&a.normalized;if(!n&&!e)throw new Error('Attribute "'.concat(a.name,'" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.'));return a.normalized?1:a.size}function Zn(a){var n=0;return a.forEach(function(e){return n+=Od(e)}),n}function Oi(a,n,e){var t=a==="VERTEX"?n.VERTEX_SHADER:n.FRAGMENT_SHADER,r=n.createShader(t);if(r===null)throw new Error("loadShader: error while creating the shader");n.shaderSource(r,e),n.compileShader(r);var i=n.getShaderParameter(r,n.COMPILE_STATUS);if(!i){var o=n.getShaderInfoLog(r);throw n.deleteShader(r),new Error(`loadShader: error while compiling the shader:
`.concat(o,`
`).concat(e))}return r}function Jn(a,n){return Oi("VERTEX",a,n)}function ea(a,n){return Oi("FRAGMENT",a,n)}function ta(a,n){var e=a.createProgram();if(e===null)throw new Error("loadProgram: error while creating the program.");var t,r;for(t=0,r=n.length;t<r;t++)a.attachShader(e,n[t]);a.linkProgram(e);var i=a.getProgramParameter(e,a.LINK_STATUS);if(!i){var o=a.getProgramInfoLog(e);throw a.deleteProgram(e),new Error("loadProgram: error while linking the program: ".concat(o))}return e}function $a(a){var n=a.gl,e=a.buffer,t=a.program,r=a.vertexShader,i=a.fragmentShader;n.deleteShader(r),n.deleteShader(i),n.deleteProgram(t),n.deleteBuffer(e)}function le(a){return a%1===0?a.toFixed(1):a.toString()}var Qn=new Map,Bi=new Map,Bd=0;function qa(a,n){var e,t=(e=a.variables)===null||e===void 0||(e=e[n.source||n.name.replace(/^a_/,"")])===null||e===void 0?void 0:e.default,r=typeof t=="number"?t:typeof n.defaultValue=="number"?n.defaultValue:0;return le(r)}function on(a,n,e){var t,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(o){return"v_".concat(o.name.replace(/^a_/,""))},i=[n,e].concat(V(a.uniforms.filter(function(o){return o.type==="float"}).map(function(o){var s;return le((s=o.value)!==null&&s!==void 0?s:0)})),V(((t=a.attributes)!==null&&t!==void 0?t:[]).map(r)));return"sdf_".concat(a.name,"(").concat(i.join(", "),")")}function Wd(a){var n,e=a.name,t=a.uniforms.filter(function(o){return o.type==="float"&&o.value!==void 0&&o.value!==0}).map(function(o){return"".concat(o.name.replace("u_",""),"=").concat(o.value)}).sort(),r=((n=a.attributes)!==null&&n!==void 0?n:[]).map(function(o){var s;return"".concat(o.name,"@").concat((s=o.source)!==null&&s!==void 0?s:"","=").concat(qa(a,o))}),i=[].concat(V(t),V(r));return i.length>0&&(e+="#"+i.join("#")),e}function Wi(a){var n=Wd(a);if(!Qn.has(n)){var e={},t=M(a.uniforms),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;i.type==="float"&&i.value!==void 0&&(e[i.name]=i.value)}}catch(o){t.e(o)}finally{t.f()}Qn.set(n,{shape:a,uniformValues:e,slug:n}),Bi.set(n,Bd++)}return n}function Pt(a){var n;return(n=Bi.get(a))!==null&&n!==void 0?n:-1}function Ui(a){var n=[],e=new Set,t=new Set,r=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/,i=M(a),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;if(!t.has(s.name)){t.add(s.name);var l=s.glsl;r.test(l)&&(e.has("rotate2D")?l=l.replace(r,""):e.add("rotate2D")),n.push(l)}}}catch(d){i.e(d)}finally{i.f()}return n.join(`
`)}function Hi(){return Ui(Array.from(Qn.values()).map(function(a){return a.shape}))}function $i(a){var n=Array.from(Qn.entries());if(n.length===0)return`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`;var e=n.map(function(t,r){var i=J(t,2),o=i[0],s=i[1].shape,l=on(s,"uv","size",function(d){var u=d.name.replace(/^a_/,"");return a!=null&&a.has(u)?"g_".concat(u):qa(s,d)});return"    case ".concat(r,": return ").concat(l,"; // ").concat(o)}).join(`
`);return`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(e,`
    default: return length(uv) - size;
  }
}
`)}function na(a){return Ui(a)}function Ft(a){return V(new Map(a.flatMap(function(n){return n.uniforms}).map(function(n){return[n.name,n]})).values())}function Vi(a,n){if(a.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;var e=function(c){return on(c,"uv","size")},t=function(c){var f,h;return(f=c.inradiusFactorGLSL)!==null&&f!==void 0?f:le((h=c.inradiusFactor)!==null&&h!==void 0?h:1)};if(a.length===1){var r=a[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = `.concat(e(r),`;
  context.inradiusFactor = `).concat(t(r),`;
}
`)}var i=a.map(function(u,c){return"    case ".concat(c,": // ").concat(u.name,`
      context.sdf = `).concat(e(u),`;
      context.inradiusFactor = `).concat(t(u),`;
      break;`)}).join(`
`),o=a[0],s="",l="shapeId";if(n&&n.length>1){var d=n.map(function(u,c){return"    case ".concat(u,": return ").concat(c,"; // ").concat(a[c].name)}).join(`
`);s=`
int globalToLocalShapeId(int globalId) {
  switch (globalId) {
`.concat(d,`
    default: return 0;
  }
}
`),l="globalToLocalShapeId(shapeId)"}return"".concat(s,`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  switch (`).concat(l,`) {
`).concat(i,`
    default:
      context.sdf = `).concat(e(o),`;
      context.inradiusFactor = `).concat(t(o),`;
  }
}
`)}var lt={right:0,left:1,above:2,below:3,over:4},dt=5,aa=3,Ya=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,It=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,Ka=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,ji=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,Xi=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,qi=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,Yi=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,Za=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,ra=2,Ge=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(ra,`;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`),Je=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(ra,` + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`),Ki=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(ra,` + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`),ut=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`;function Zi(a,n){var e=function(o){return on(o,"uv","size")};if(a.length===1)return{code:Pi(e(a[0])),multiShape:!1};var t=a.map(function(i,o){return"    case ".concat(n?n[o]:o,": return ").concat(e(i),";")}).join(`
`),r=`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(t,`
    default: return `).concat(e(a[0]),`;
  }
}
int g_shapeId;
`).concat(Pi("queryShapeSDF(g_shapeId, uv, size)"),`
`);return{code:r,multiShape:!0}}function Pi(a){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (`.concat(a,` < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`)}function Ud(a,n){for(;!{}.hasOwnProperty.call(a,n)&&(a=ot(a))!==null;);return a}function Va(){return Va=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(a,n,e){var t=Ud(a,n);if(t){var r=Object.getOwnPropertyDescriptor(t,n);return r.get?r.get.call(arguments.length<3?a:e):r.value}},Va.apply(null,arguments)}function he(a,n,e,t){var r=Va(ot(1&t?a.prototype:a),n,e);return 2&t&&typeof r=="function"?function(i){return r.apply(e,i)}:r}var Hd=1024,$d=1.5,Vd=4096,Qi=-1,sn=(function(){function a(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Hd;Y(this,a),S(this,"texture",null),S(this,"dirty",!1),S(this,"dirtyRangeStart",1/0),S(this,"dirtyRangeEnd",-1),S(this,"indexMap",new Map),S(this,"freeIndices",[]),S(this,"nextIndex",0),this.gl=n,this.TEXELS_PER_ITEM=e,this.capacity=this.roundUpToPowerOfTwo(t);var r=this.computeTextureDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}return K(a,[{key:"computeTextureDimensions",value:function(e){var t=e*this.TEXELS_PER_ITEM,r=Math.min(t,Vd),i=Math.ceil(t/r);return{width:r,height:i}}},{key:"roundUpToPowerOfTwo",value:function(e){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,e))))}},{key:"createTexture",value:function(){var e=this.gl;this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textureWidth,this.textureHeight,0,e.RGBA,e.FLOAT,this.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null)}},{key:"resize",value:function(e){if(!(e<=this.capacity)){var t=this.roundUpToPowerOfTwo(Math.ceil(e*$d)),r=this.gl,i=this.computeTextureDimensions(t),o=new Float32Array(i.width*i.height*4);o.set(this.data),this.texture&&r.deleteTexture(this.texture),this.data=o,this.capacity=t,this.textureWidth=i.width,this.textureHeight=i.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}}},{key:"allocate",value:function(e){var t=this.indexMap.get(e);if(t!==void 0)return t;var r;return this.freeIndices.length>0?r=this.freeIndices.pop():(r=this.nextIndex++,r>=this.capacity&&this.resize(r+1)),this.indexMap.set(e,r),r}},{key:"free",value:function(e){var t=this.indexMap.get(e);if(t!==void 0){this.indexMap.delete(e),this.freeIndices.push(t);for(var r=t*this.TEXELS_PER_ITEM*4,i=0;i<this.TEXELS_PER_ITEM*4;i++)this.data[r+i]=0;this.markDirty(t)}}},{key:"getIndex",value:function(e){var t;return(t=this.indexMap.get(e))!==null&&t!==void 0?t:-1}},{key:"has",value:function(e){return this.indexMap.has(e)}},{key:"markDirty",value:function(e){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,e),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,e+1)}},{key:"upload",value:function(){if(!(!this.dirty||!this.texture)){var e=this.gl,t=this.textureWidth;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture);var r=this.dirtyRangeStart*this.TEXELS_PER_ITEM,i=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(r<i)for(var o=Math.floor(r/t),s=Math.floor((i-1)/t),l=o;l<=s;l++){var d=l*t,u=Math.min(d+t,this.capacity*this.TEXELS_PER_ITEM),c=Math.max(r,d),f=Math.min(i,u);if(c<f){var h=c-d,g=f-c,v=this.data.subarray(c*4,f*4);e.texSubImage2D(e.TEXTURE_2D,0,h,l,g,1,e.RGBA,e.FLOAT,v)}}e.bindTexture(e.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}}},{key:"bind",value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getCapacity",value:function(){return this.capacity}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"getTexelsPerItem",value:function(){return this.TEXELS_PER_ITEM}},{key:"getCount",value:function(){return this.indexMap.size}},{key:"getHighWaterMark",value:function(){return this.nextIndex}},{key:"isDirty",value:function(){return this.dirty}},{key:"clear",value:function(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}},{key:"restore",value:function(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}},{key:"kill",value:function(){this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.indexMap.clear(),this.freeIndices=[]}}])})();function Re(a){var n={},e={},t=0,r=M(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,s=M(o.attributes),l;try{for(s.s();!(l=s.n()).done;){var d=l.value,u=d.name.replace(/^a_/,"");u in n||(n[u]=t,e[u]=d,t+=d.size)}}catch(c){s.e(c)}finally{s.f()}}}catch(c){r.e(c)}finally{r.f()}return{floatsPerItem:t,texelsPerItem:Math.max(1,Math.ceil(t/4)),offsets:n,specs:e}}var ia=(function(a){function n(e,t,r){var i;return Y(this,n),i=oe(this,n,[e,t.texelsPerItem,r]),i.floatsPerItem=t.floatsPerItem,i}return se(n,a),K(n,[{key:"updateAllAttributes",value:function(t,r){var i=this.indexMap.get(t);i===void 0&&(i=this.allocate(t));for(var o=i*this.TEXELS_PER_ITEM*4,s=Math.min(r.length,this.floatsPerItem),l=0;l<s;l++)this.data[o+l]=r[l];this.markDirty(i)}},{key:"updateAllAttributesAtRow",value:function(t,r){t>=this.capacity&&this.resize(t+1);for(var i=t*this.TEXELS_PER_ITEM*4,o=Math.min(r.length,this.floatsPerItem),s=0;s<o;s++)this.data[i+s]=r[s];this.markDirty(t)}}])})(sn);function oa(a,n,e){for(var t=[],r=new Set,i=0;i<a.length;i++){var o=a[i],s=M(o.attributes),l;try{for(s.s();!(l=s.n()).done;){var d=l.value,u=d.name.replace(/^a_/,"");if(!r.has(u)){r.add(u);var c=n.offsets[u];if(c!==void 0){var f=e?.get(i);t.push({sourceKey:d.source||u,packedOffset:c,size:d.size,isColor:d.size===4&&!!d.normalized,defaultNum:typeof d.defaultValue=="number"?d.defaultValue:d.defaultValue===!0?1:0,defaultColor:typeof d.defaultValue=="string"?d.defaultValue:"",sourceIndex:i,hasLifecycleHook:!!(f!=null&&f.getAttributeData)})}}}}catch(h){s.e(h)}finally{s.f()}}return t}function sa(a,n,e,t,r,i){e.fill(0);for(var o=0,s=a.length;o<s;o++){var l=a[o],d=l.packedOffset,u=void 0;if(l.hasLifecycleHook){var c=r.get(l.sourceIndex-i);u=c.getAttributeData(n,l.sourceKey),u===null&&(u=n[l.sourceKey])}else u=n[l.sourceKey];if(l.isColor){var f=typeof u=="string"?u:l.defaultColor||t,h=Xe(f),g=J(h,4),v=g[0],b=g[1],p=g[2],m=g[3];e[d]=v/255,e[d+1]=b/255,e[d+2]=p/255,e[d+3]=m/255}else if(l.size===1)e[d]=typeof u=="number"?u:typeof u=="boolean"?u?1:0:l.defaultNum;else{var y=Array.isArray(u)?u:null;if(y)for(var x=0;x<l.size;x++){var _;e[d+x]=(_=y[x])!==null&&_!==void 0?_:0}}}}var jn=["r","g","b","a"];function kt(a,n){var e=a.offsets,t=a.specs,r=a.texelsPerItem,i=a.floatsPerItem,o=Object.keys(e);if(o.length===0||i===0)return{fetchCode:"",varyingAssignments:""};var s=n.varPrefix,l=n.baseTexelExpr,d=n.textureWidthUniform,u=n.textureSamplerUniform,c=n.outputPrefix,f=c===void 0?"v_":c,h=[];h.push("  int ".concat(s,"BaseTexel = ").concat(l,";")),h.push("");for(var g=0;g<r;g++)h.push("  ivec2 ".concat(s,"Coord").concat(g," = ivec2((").concat(s,"BaseTexel + ").concat(g,") % ").concat(d,", (").concat(s,"BaseTexel + ").concat(g,") / ").concat(d,");")),h.push("  vec4 ".concat(s,"Texel").concat(g," = texelFetch(").concat(u,", ").concat(s,"Coord").concat(g,", 0);"));h.push("");for(var v=[],b=function(){var x=m[p],_=t[x],T=e[x],A=Math.floor(T/4),E=T%4,R="".concat(s,"Texel").concat(A),C="".concat(s,"Texel").concat(A+1),k="".concat(s,"Fetched_").concat(x);if(_.size===1)h.push("  float ".concat(k," = ").concat(R,".").concat(jn[E],";"));else if(_.size===4&&E===0)h.push("  vec4 ".concat(k," = ").concat(R,";"));else{var D=E+_.size;if(D<=4){var F="vec".concat(_.size),L=jn.slice(E,D).join("");h.push("  ".concat(F," ").concat(k," = ").concat(R,".").concat(L,";"))}else{var G=_.size===4?"vec4":"vec".concat(_.size),N=jn.slice(E).map(function(w){return"".concat(R,".").concat(w)}),z=jn.slice(0,D-4).map(function(w){return"".concat(C,".").concat(w)}),P=[].concat(V(N),V(z)).join(", ");h.push("  ".concat(G," ").concat(k," = ").concat(G,"(").concat(P,");"))}}v.push("  ".concat(f).concat(x," = ").concat(k,";"))},p=0,m=o;p<m.length;p++)b();return{fetchCode:h.join(`
`),varyingAssignments:v.join(`
`)}}function Qa(a,n,e){if(!(!n||e.type==="sampler2D"))switch(e.type){case"float":a.uniform1f(n,e.value);break;case"int":case"bool":a.uniform1i(n,e.value);break;case"vec2":a.uniform2fv(n,e.value);break;case"vec3":a.uniform3fv(n,e.value);break;case"vec4":a.uniform4fv(n,e.value);break;case"mat3":a.uniformMatrix3fv(n,!1,e.value);break;case"mat4":a.uniformMatrix4fv(n,!1,e.value);break}}var jd=S(S(S(S(S(S(S(S({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4);function Xn(a){var n=a.match(/^(#version[^\n]*\n)/);return n?n[1]+`#define PICKING_MODE
`+a.slice(n[1].length):`#define PICKING_MODE
`+a}var et=(function(){function a(n,e,t){Y(this,a),S(this,"floats",new Float32Array),S(this,"ints",new Uint32Array),S(this,"constantArray",new Float32Array),S(this,"capacity",0),S(this,"verticesCount",0),S(this,"bufferGeneration",0),S(this,"uploadedGeneration",new Map),S(this,"constantBufferGeneration",0),S(this,"uploadedConstantGeneration",new Map),S(this,"renderOffset",0),S(this,"renderCount",-1),S(this,"debugStats",{drawCalls:0,verticesDrawn:0,bufferUploadBytes:0}),S(this,"shadersLogged",!1),S(this,"pickProgram",null);var r=this.getDefinition();if(this.VERTICES=r.VERTICES,this.VERTEX_SHADER_SOURCE=r.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=r.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=r.UNIFORMS,this.ATTRIBUTES=r.ATTRIBUTES,this.METHOD=r.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in r?r.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in r?r.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in r,this.ATTRIBUTES_ITEMS_COUNT=Zn(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=t,this.normalProgram=this.getProgramInfo("normal",n,r.VERTEX_SHADER_SOURCE,r.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo("pick",n,Xn(r.VERTEX_SHADER_SOURCE),Xn(r.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){var i=Zn(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*i);for(var o=0;o<this.CONSTANT_DATA.length;o++){var s=this.CONSTANT_DATA[o];if(s.length!==i)throw new Error("Program: error while getting constant data (one vector has ".concat(s.length," items instead of ").concat(i,")"));for(var l=0;l<s.length;l++)this.constantArray[o*i+l]=s[l]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return K(a,[{key:"kill",value:function(){$a(this.normalProgram),this.pickProgram&&$a(this.pickProgram)}},{key:"resetDebugStats",value:function(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}},{key:"getProgramInfo",value:function(e,t,r,i,o){var s=t.createBuffer();if(s===null)throw new Error("Program: error while creating the WebGL buffer.");var l=Jn(t,r),d=ea(t,i),u=ta(t,[l,d]),c={};this.UNIFORMS.forEach(function(g){var v=t.getUniformLocation(u,g);v&&(c[g]=v)});var f={};this.ATTRIBUTES.forEach(function(g){f[g.name]=t.getAttribLocation(u,g.name)});var h;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(function(g){f[g.name]=t.getAttribLocation(u,g.name)}),h=t.createBuffer(),h===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:e,program:u,gl:t,frameBuffer:o,buffer:s,constantBuffer:h||{},uniformLocations:c,attributeLocations:f,isPicking:e==="pick",vertexShader:l,fragmentShader:d}}},{key:"bindProgram",value:function(e){var t=this,r=0,i=e.gl,o=e.buffer;if(this.isInstanced){if(i.bindBuffer(i.ARRAY_BUFFER,e.constantBuffer),r=0,this.CONSTANT_ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r,!1)}),this.uploadedConstantGeneration.get(e.constantBuffer)!==this.constantBufferGeneration){var l;i.bufferData(i.ARRAY_BUFFER,this.constantArray,i.STATIC_DRAW),this.uploadedConstantGeneration.set(e.constantBuffer,this.constantBufferGeneration),(l=this.renderer)!==null&&l!==void 0&&l.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)}if(i.bindBuffer(i.ARRAY_BUFFER,e.buffer),r=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r,!0)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var d;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(d=this.renderer)!==null&&d!==void 0&&d.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}}else if(i.bindBuffer(i.ARRAY_BUFFER,o),r=0,this.ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var s;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(s=this.renderer)!==null&&s!==void 0&&s.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}i.bindBuffer(i.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(e){var t=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e,!1)}),this.ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e,!0)})):this.ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e)})}},{key:"bindAttribute",value:function(e,t,r,i){var o=jd[e.type];if(typeof o!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(e.type,'"'));var s=t.attributeLocations[e.name],l=t.gl;if(s!==-1){l.enableVertexAttribArray(s);var d=this.isInstanced?(i?this.ATTRIBUTES_ITEMS_COUNT:Zn(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;l.vertexAttribPointer(s,e.size,e.type,e.normalized||!1,d,r),this.isInstanced&&i&&l.vertexAttribDivisor(s,1)}return e.size*o}},{key:"unbindAttribute",value:function(e,t,r){var i=t.attributeLocations[e.name],o=t.gl;i!==-1&&(o.disableVertexAttribArray(i),this.isInstanced&&r&&o.vertexAttribDivisor(i,0))}},{key:"reallocate",value:function(e){e!==this.capacity&&(this.capacity=e,this.verticesCount=this.VERTICES*e,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}},{key:"invalidateBuffers",value:function(){this.bufferGeneration++,this.constantBufferGeneration++}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"setTypedUniform",value:function(e,t){var r;Qa(t.gl,(r=t.uniformLocations[e.name])!==null&&r!==void 0?r:null,e)}},{key:"renderProgram",value:function(e,t){var r=t.gl,i=t.program,o=t.isPicking;o?r.disable(r.BLEND):r.enable(r.BLEND),r.useProgram(i),this.setUniforms(e,t),this.drawWebGL(this.METHOD,t)}},{key:"render",value:function(e,t,r){var i;if(!this.shadersLogged&&(i=this.renderer)!==null&&i!==void 0&&i.getSetting("DEBUG_logShaders")&&(this.shadersLogged=!0,console.log("[sigma] DEBUG_logShaders: ".concat(this.constructor.name),{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:Xn(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:Xn(this.FRAGMENT_SHADER_SOURCE)}})),!this.hasNothingToRender()){this.renderOffset=t??0,this.renderCount=r??-1;var o=this.normalProgram.gl;if(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(e,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&e.pickingFrameBuffer){var s=Math.ceil(e.width*e.pixelRatio/e.downSizingRatio),l=Math.ceil(e.height*e.pixelRatio/e.downSizingRatio);o.bindFramebuffer(o.FRAMEBUFFER,e.pickingFrameBuffer),o.viewport(0,0,s,l),this.bindProgram(this.pickProgram),this.renderProgram(e,this.pickProgram),this.unbindProgram(this.pickProgram),o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio)}}}},{key:"drawWebGL",value:function(e,t){var r,i=t.gl,o=this.renderCount>=0?this.renderCount:this.capacity;(r=this.renderer)!==null&&r!==void 0&&r.getSetting("DEBUG_logRenderStats")&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=o*this.VERTICES),this.isInstanced?i.drawArraysInstanced(e,0,this.VERTICES,o):i.drawArrays(e,this.renderOffset*this.VERTICES,o*this.VERTICES)}}])})(),tt=2,ln=7,Ji={below:0,above:1,left:2,right:3};function Xd(){var a=`#version 300 es
precision highp float;

uniform mat3 u_matrix;
uniform vec2 u_resolution;
uniform float u_labelPixelSnapping;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;

uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

// Atlas size is fixed at 2048\xD72048 \u2014 matches AttachmentManager.ATLAS_SIZE.
uniform sampler2D u_atlasTexture;
const vec2 u_atlasSize = vec2(2048.0);

// Per-instance
in float a_nodeIndex;           // node-data texture index
in vec4 a_atlasRect;            // x, y, width, height in atlas pixels
in vec2 a_attachmentSize;       // attachment dimensions (CSS px)
in float a_positionMode;        // label position: 0=right 1=left 2=above 3=below 4=over
in float a_attachmentPlacement; // 0=below 1=above 2=left 3=right (relative to label)
in float a_labelWidth;          // label width (CSS px)
in float a_labelHeight;         // label height: font line box (CSS px)
in float a_textHeight;          // actual glyph height (CSS px)
in float a_labelAngle;          // label rotation angle (radians)

// Per-vertex (constant)
in vec2 a_quadCorner;           // [-1,-1], [1,-1], [-1,1], [1,1]

out vec2 v_texCoord;

`.concat(Ge,`
`).concat(Je,`
`).concat(ut,`
`).concat(Za,`
`).concat(It,`

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePos = nodeData.xy;
  float nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; we just read the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  vec3 nodeClip = u_matrix * vec3(nodePos, 1.0);

  // Node radius in physical pixels (matches label/background).
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusPixels = nodeRadiusGraphSpace * matrixScaleX * u_resolution.x / 2.0;

  // CSS-px inputs -> physical px, scaled by the zoom-dependent label ratio, so
  // the attachment stays glued to the label box exactly as the label scales.
  float zoomScale = u_zoomLabelSizeRatio;
  vec2 labelHalf = vec2(a_labelWidth, a_labelHeight) * 0.5 * zoomScale * u_pixelRatio;
  vec2 attachHalf = a_attachmentSize * 0.5 * zoomScale * u_pixelRatio;
  float gap = `).concat(tt.toFixed(1),` * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Graph-aligned labels add the camera angle so the attachment orbits with the box.
  mat2 labelRotMat = rotate2D(a_labelAngle - labelRotation * u_cameraAngle);

  // Label box center relative to the node center (pre-rotation). The shape-aware
  // edge distance comes from the frame texture, so placement matches the label.
  vec2 boxCenter = vec2(0.0);
  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * 0.5 * zoomScale * u_pixelRatio;
    boxCenter = labelBoxCenter(a_positionMode, labelStart, labelHalf, textHalf);
  }

  // Horizontal anchor of below/above attachments tracks the label position, so
  // the attachment hangs from the label edge nearest the node (or is centered
  // when the label itself is node-centered): right->left, left->right, else center.
  float anchorX = 0.0;
  if (a_positionMode < 0.5) anchorX = -labelHalf.x + attachHalf.x;       // right label
  else if (a_positionMode < 1.5) anchorX = labelHalf.x - attachHalf.x;   // left label

  // Attachment center relative to the box (pre-rotation, Y-down). This offset
  // depends only on the box, the gap and the attachment size \u2014 never the shape.
  vec2 attachCenter;
  if (a_attachmentPlacement < 0.5) {
    // below
    attachCenter = boxCenter + vec2(anchorX, labelHalf.y + gap + attachHalf.y);
  } else if (a_attachmentPlacement < 1.5) {
    // above
    attachCenter = boxCenter + vec2(anchorX, -(labelHalf.y + gap + attachHalf.y));
  } else if (a_attachmentPlacement < 2.5) {
    // left, top-aligned
    attachCenter = boxCenter + vec2(-(labelHalf.x + gap + attachHalf.x), -labelHalf.y + attachHalf.y);
  } else {
    // right, top-aligned
    attachCenter = boxCenter + vec2(labelHalf.x + gap + attachHalf.x, -labelHalf.y + attachHalf.y);
  }

  // Rotate the whole assembly by the label angle, around the node center.
  vec2 rotatedCenter = labelRotMat * attachCenter;
  vec2 cornerOffset = labelRotMat * (a_quadCorner * attachHalf);

  // Node center in screen px (Y-down).
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;

  // Snap node center to the pixel grid so label/backdrop/attachment move as one.
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Snap the quad's top-left to integer pixels so atlas texels map 1:1.
  vec2 centerScreen = nodeScreen + rotatedCenter + snapDelta;
  vec2 topLeft = centerScreen - attachHalf;
  topLeft = mix(topLeft, round(topLeft), u_labelPixelSnapping);
  centerScreen = topLeft + attachHalf;

  vec2 vertexScreen = centerScreen + cornerOffset;
  gl_Position = vec4(
    vertexScreen.x * 2.0 / u_resolution.x - 1.0,
    1.0 - vertexScreen.y * 2.0 / u_resolution.y,
    0.0, 1.0
  );

  vec2 texOrigin = a_atlasRect.xy / u_atlasSize;
  vec2 texSize = a_atlasRect.zw / u_atlasSize;
  vec2 uv = (a_quadCorner + 1.0) / 2.0;
  v_texCoord = texOrigin + uv * texSize;
}
`);return a}var qd=`#version 300 es
precision highp float;

uniform sampler2D u_atlasTexture;

in vec2 v_texCoord;

layout(location = 0) out vec4 fragColor;
#ifdef PICKING_MODE
layout(location = 1) out vec4 pickColor;
#endif

void main() {
  // Canvas textures are premultiplied; output directly for (ONE, 1-SRC_ALPHA) blending
  vec4 color = texture(u_atlasTexture, v_texCoord);
  if (color.a < 0.01) discard;
  fragColor = color;
#ifdef PICKING_MODE
  pickColor = vec4(0.0); // Attachments are not pickable
#endif
}
`;function Yd(a,n,e,t){var r,i,o=t.label,s=o===void 0?{}:o,l=(r=s.margin)!==null&&r!==void 0?r:dt,d=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=Xd(),c=qd,f=(function(h){function g(){var v;Y(this,g);for(var b=arguments.length,p=new Array(b),m=0;m<b;m++)p[m]=arguments[m];return v=oe(this,g,[].concat(p)),S(v,"totalCount",0),S(v,"bufferCapacity",0),v}return se(g,h),K(g,[{key:"getDefinition",value:function(){var b=WebGL2RenderingContext,p=b.FLOAT,m=b.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:c,METHOD:m,UNIFORMS:["u_matrix","u_resolution","u_labelPixelSnapping","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_atlasTexture"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:p},{name:"a_atlasRect",size:4,type:p},{name:"a_attachmentSize",size:2,type:p},{name:"a_positionMode",size:1,type:p},{name:"a_attachmentPlacement",size:1,type:p},{name:"a_labelWidth",size:1,type:p},{name:"a_labelHeight",size:1,type:p},{name:"a_textHeight",size:1,type:p},{name:"a_labelAngle",size:1,type:p}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:p}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processAttachment",value:function(b,p){var m=this.floats,y=b*this.STRIDE;m[y++]=p.nodeIndex,m[y++]=p.atlasX,m[y++]=p.atlasY,m[y++]=p.atlasW,m[y++]=p.atlasH,m[y++]=p.attachWidth,m[y++]=p.attachHeight,m[y++]=p.positionMode,m[y++]=p.attachmentPlacement,m[y++]=p.labelWidth,m[y++]=p.labelHeight,m[y++]=p.textHeight,m[y++]=p.labelAngle}},{key:"setUniforms",value:function(b,p){var m=p.gl,y=p.uniformLocations;m.uniformMatrix3fv(y.u_matrix,!1,b.matrix),m.uniform2f(y.u_resolution,b.width*b.pixelRatio,b.height*b.pixelRatio),m.uniform1f(y.u_labelPixelSnapping,b.labelPixelSnapping),m.uniform1f(y.u_sizeRatio,b.sizeRatio),m.uniform1f(y.u_correctionRatio,b.correctionRatio),m.uniform1f(y.u_cameraAngle,b.cameraAngle),m.uniform1f(y.u_pixelRatio,b.pixelRatio),m.uniform1f(y.u_labelMargin,g.labelMargin),m.uniform1f(y.u_zoomLabelSizeRatio,1/d(b.zoomRatio)),m.uniform1i(y.u_nodeDataTexture,b.nodeDataTextureUnit),m.uniform1i(y.u_nodeDataTextureWidth,b.nodeDataTextureWidth),m.uniform1i(y.u_nodeFrameTexture,b.nodeFrameTextureUnit),m.uniform1i(y.u_nodeFrameTextureWidth,b.nodeFrameTextureWidth),m.uniform1i(y.u_atlasTexture,ln)}},{key:"reallocateAttachments",value:function(b){this.totalCount=b,b>this.bufferCapacity&&(this.bufferCapacity=Math.max(b,Math.ceil(this.bufferCapacity*1.5)||10),he(g,"reallocate",this,3)([this.bufferCapacity]))}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(b,p){var m=p.gl;this.totalCount!==0&&m.drawArraysInstanced(b,0,this.VERTICES,this.totalCount)}}])})(et);return S(f,"labelMargin",l),new f(a,n,e)}var Ke=5;function la(a,n){return[].concat(V(n),V(a.map(function(e){var t;return{attributes:(t=e.attributes)!==null&&t!==void 0?t:[]}})))}function Nt(a,n){var e=Re(la(a,n)),t=new Set(a.flatMap(function(d){var u;return(u=d.attributes)!==null&&u!==void 0?u:[]}).map(function(d){return d.name.replace(/^a_/,"")})),r={},i={},o=M(t),s;try{for(o.s();!(s=o.n()).done;){var l=s.value;r[l]=e.offsets[l],i[l]=e.specs[l]}}catch(d){o.e(d)}finally{o.f()}return O(O({},e),{},{offsets:r,specs:i})}function eo(a,n){var e=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pickingPadding","u_nodeDataTexture","u_layerAttributeTexture"]),t=new Set,r=a.flatMap(function(h){return h.uniforms}).filter(function(h){return e.has(h.name)||t.has(h.name)?!1:(t.add(h.name),!0)}).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),i=n.flatMap(function(h){return h.uniforms}).filter(function(h){return e.has(h.name)||t.has(h.name)?!1:(t.add(h.name),!0)}).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),o=la(a,n),s=new Set,l=o.flatMap(function(h){return h.attributes}).filter(function(h){var g=h.name.replace(/^a_/,"");return s.has(g)?!1:(s.add(g),!0)}).map(function(h){var g=h.name.replace(/^a_/,""),v=h.size===1?"float":"vec".concat(h.size);return"out ".concat(v," v_").concat(g,";")}).join(`
`),d=kt(Re(o),{varPrefix:"layer",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),u=d.fetchCode,c=d.varyingAssignments,f=`#version 300 es

// Standard node attributes (per instance) - minimal buffer usage
in float a_nodeIndex;  // Index into node data texture AND layer attribute texture
in vec4 a_id;          // Node ID for picking
in float a_opacity;    // Node opacity, applied once to the final fragment

// Constant attributes (per vertex, same for all instances)
in vec2 a_quadCorner;  // (-1,-1), (1,-1), (1,1), (-1,1) for quad corners

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;

// Layer attribute texture uniforms
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

`.concat(r,`
`).concat(i,`

// Standard varyings
out vec2 v_uv;                    // Normalized coordinates [-1, 1]
out vec4 v_id;
out float v_opacity;
out float v_antialiasingWidth;    // Width for antialiasing in UV space
out float v_pixelSize;            // Node size in pixels (for pixel-mode borders)
out float v_pixelToUV;            // Conversion factor: multiply by this to convert screen pixels to UV units
out float v_shapeId;              // Shape ID for multi-shape programs

// Layer varyings
`).concat(l,`

// Node-data fetch helpers (geometry texel + rotation-flags texel)
`).concat(Ge,`
`).concat(Je,`

void main() {
  // Fetch node geometry: vec4(x, y, size, shapeId).
  int nodeIdx = int(a_nodeIndex);

  // Hidden nodes are flagged with a negative row by NodeProgram.process(). Push
  // the whole quad outside the clip volume: every vertex lands at the same
  // out-of-range position, so the primitive is fully clipped and rasterizes
  // nothing \u2014 neither to the frame buffer nor to the picking buffer.
  if (nodeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    return;
  }

  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_position = nodeData.xy;
  float a_size = nodeData.z;
  v_shapeId = nodeData.w;  // Pass shape ID to fragment shader

  // Per-node rotation alignment: 0 = viewport (screen-upright), 1 = graph.
  float nodeRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).r;

`).concat(u,`

  // Calculate the actual size in pixels
  float size = a_size * u_correctionRatio / u_sizeRatio * 2.0;

  // In PICKING_MODE, inflate the quad by nodePickingPadding pixels on each side
  #ifdef PICKING_MODE
    float paddedSize = size + u_pickingPadding * u_correctionRatio;
    vec2 offset = a_quadCorner * paddedSize;
  #else
    vec2 offset = a_quadCorner * size;
  #endif
  // Counter-rotate the quad offset so viewport-aligned nodes stay upright as the
  // camera turns. Graph-aligned nodes (nodeRotation=1) skip it and turn with the
  // camera. The angle scales by (1 - nodeRotation) so both fall out of one path.
  {
    float ca = u_cameraAngle * (1.0 - nodeRotation);
    float c = cos(ca);
    float s = sin(ca);
    offset = mat2(c, s, -s, c) * offset;
  }
  vec2 position = a_position + offset;

  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  // In PICKING_MODE, UV is scaled beyond [-1, 1] to match the inflated quad
  #ifdef PICKING_MODE
    v_uv = a_quadCorner * (paddedSize / size);
  #else
    v_uv = a_quadCorner;
  #endif

  // Pass ID to fragment shader
  v_id = a_id;
  v_opacity = a_opacity;

  // Pass pixel size for layers that need pixel-mode calculations
  // Multiply by 2 because 'size' is half-width (offset from center), not full diameter
  v_pixelSize = size * 2.0;

  // Conversion factor from screen pixels to UV units
  // Same derivation as v_antialiasingWidth which represents ~1 pixel in UV space
  // P pixels in UV space = P * u_correctionRatio / size
  v_pixelToUV = u_correctionRatio / size;

  // We use an antialiasing width of 1px (so v_pixelToUV)
  v_antialiasingWidth = v_pixelToUV;

  // Pass layer attributes to fragment shader (fetched from texture)
`).concat(c,`
}
`);return f}function to(a,n,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,r=n.map(function(g,v){var b="layer_".concat(g.name),p=[].concat(V(g.attributes.map(function(m){return"v_".concat(m.name.replace(/^a_/,""))})),V(g.uniforms.map(function(m){return m.name}))).join(", ");return"  // Layer ".concat(v+1,": ").concat(g.name,`
  color = blendOver(color, `).concat(b,"(").concat(p,"));")}).join(`

`),i=new Set(["u_correctionRatio"]),o=new Set,s=a.flatMap(function(g){return g.uniforms}).filter(function(g){return i.has(g.name)||o.has(g.name)?!1:(o.add(g.name),!0)}).map(function(g){return"uniform ".concat(g.type," ").concat(g.name,";")}).join(`
`),l=n.flatMap(function(g){return g.uniforms}).filter(function(g){return i.has(g.name)||o.has(g.name)?!1:(o.add(g.name),!0)}).map(function(g){return"uniform ".concat(g.type," ").concat(g.name,";")}).join(`
`),d=new Set,u=la(a,n).flatMap(function(g){return g.attributes}).filter(function(g){var v=g.name.replace(/^a_/,"");return d.has(v)?!1:(d.add(v),!0)}).map(function(g){var v=g.name.replace(/^a_/,""),b=g.size===1?"float":"vec".concat(g.size);return"in ".concat(b," v_").concat(v,";")}).join(`
`),c=na(a),f=Vi(a,e),h=`#version 300 es
precision highp float;

// Standard varyings
in vec2 v_uv;
in vec4 v_id;
in float v_opacity;
in float v_antialiasingWidth;
in float v_pixelSize;
in float v_pixelToUV;
in float v_shapeId;  // Shape ID for multi-shape programs

// Standard uniforms (needed for some layer calculations like pixel-mode borders)
uniform float u_correctionRatio;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Shape uniforms
`.concat(s,`

// Layer uniforms
`).concat(l,`

// Layer varyings
`).concat(u,`

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

// LayerContext struct - provides rendering context to all layers
struct LayerContext {
  float sdf;             // Signed distance from shape boundary (negative inside)
  vec2 uv;               // UV coordinates [-1, 1], center at (0,0)
  float shapeSize;       // Effective shape size (~diameter) in UV space (1.0 - aaWidth)
  float shapeHalfSize;   // Effective shape half size (~radius) in UV space
  float pixelSize;       // Node full size (~diameter) in screen pixels
  float aaWidth;         // Anti-aliasing width for smooth transitions
  float correctionRatio; // Scaling factor for consistent rendering across zoom levels
  float pixelToUV;       // Conversion factor: multiply screen pixels by this to get UV units
  float inradiusFactor;  // Ratio of inradius to circumradius (shape depth factor)
};

LayerContext context;  // Global instance, populated before layer calls

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// SDF shape functions
`).concat(c,`

// Shape selector function (sets context.sdf and context.inradiusFactor)
`).concat(f,`

// Layer functions
`).concat(n.map(function(g){return g.glsl}).join(`

`),`

void main() {
  // 1. Setup LayerContext (available to all layer functions)
  context.shapeSize = 1.0 - v_antialiasingWidth;
  context.shapeHalfSize = context.shapeSize * 0.5;
  context.pixelSize = v_pixelSize;
  context.uv = v_uv;
  context.aaWidth = v_antialiasingWidth;
  context.correctionRatio = u_correctionRatio;
  context.pixelToUV = v_pixelToUV;

  // Query shape SDF based on shapeId (sets context.sdf and context.inradiusFactor)
  queryNodeSDF(int(v_shapeId), v_uv, context.shapeSize);

  // 2. Early discard for pixels fully outside the shape (with AA margin)
  // In PICKING_MODE, allow extra fragments up to the picking padding distance
  #ifdef PICKING_MODE
    if (context.sdf > u_pickingPadding * v_pixelToUV + context.aaWidth) discard;
  #else
    if (context.sdf > context.aaWidth) discard;
  #endif

  // 3. Apply layers sequentially with "over" compositing
  vec4 color = vec4(0.0);

`).concat(r,`

  #ifdef PICKING_MODE
    // Picking pass: output node ID for pixels within the picking area.
    if (context.sdf > u_pickingPadding * v_pixelToUV) discard;
    fragColor = v_id;
  #else
`).concat(t?`    // Visual pass: apply antialiasing at shape boundary, node opacity once
    // smoothstep provides smooth transition from opaque to transparent
    float alpha = smoothstep(context.aaWidth, -context.aaWidth, context.sdf) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) shape boundary, node opacity applied once
    float alpha = (context.sdf < 0.0 ? 1.0 : 0.0) * v_opacity;`,`
    // Mix with transparent to fade both color AND alpha together (avoids bright halo)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`);return h}function no(a,n){var e=new Set;return e.add("u_matrix"),e.add("u_sizeRatio"),e.add("u_correctionRatio"),e.add("u_cameraAngle"),e.add("u_pickingPadding"),e.add("u_nodeDataTexture"),e.add("u_nodeDataTextureWidth"),e.add("u_layerAttributeTexture"),e.add("u_layerAttributeTextureWidth"),e.add("u_layerAttributeTexelsPerNode"),a.forEach(function(t){t.uniforms.forEach(function(r){return e.add(r.name)})}),n.forEach(function(t){t.uniforms.forEach(function(r){return e.add(r.name)})}),Array.from(e)}function ao(a){var n=WebGL2RenderingContext,e=n.UNSIGNED_BYTE,t=n.FLOAT;return[{name:"a_nodeIndex",size:1,type:t},{name:"a_id",size:4,type:e,normalized:!0},{name:"a_opacity",size:1,type:t}]}function ja(a){var n=a.shapes,e=a.layers,t=a.shapeGlobalIds,r=a.antialias,i=r===void 0?!0:r;return{vertexShader:eo(n,e),fragmentShader:to(n,e,t,i),uniforms:no(n,e),attributes:ao()}}function ro(a,n,e){var t=Nt(a,n),r=t.specs;return Object.keys(r).map(function(i){return"flat ".concat(e," ").concat(r[i].size===1?"float":"vec".concat(r[i].size)," v_").concat(i,";")}).join(`
`)}function io(a){var n,e,t=a.shapes,r=a.layers,i=a.shapeGlobalIds,o=kt(Nt(t,r),{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),s=t.length===1?"float inradiusFactor = ".concat(le((n=t[0].inradiusFactor)!==null&&n!==void 0?n:1),";"):"float inradiusFactor = ".concat(le((e=t[0].inradiusFactor)!==null&&e!==void 0?e:1),`;
  switch (int(shapeId)) {
`).concat(t.map(function(d,u){var c,f=i?i[u]:u;return"    case ".concat(f,": inradiusFactor = ").concat(le((c=d.inradiusFactor)!==null&&c!==void 0?c:1),"; break;")}).join(`
`),`
    default: break;
  }`),l=`#version 300 es

in float a_nodeIndex;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in vec4 a_backdropColor;
in vec4 a_backdropShadowColor;
in float a_backdropShadowBlur;
in float a_backdropPadding;
in vec4 a_backdropBorderColor;
in vec4 a_backdropExtra; // [borderWidth, cornerRadius, labelPadding, area]
in vec2 a_labelBoxOffset;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

out vec2 v_uv;
out vec2 v_nodeCenter;
out float v_nodeRadius;
out vec2 v_labelCenter;
out vec2 v_labelHalfSize;
out float v_aaWidth;
out float v_shapeId;
out float v_nodeRotation;
out float v_labelAngle;
out vec4 v_backdropColor;
out vec4 v_backdropShadowColor;
out float v_backdropShadowBlur;
out float v_backdropPadding;
out vec4 v_backdropBorderColor;
out float v_backdropBorderWidth;
out float v_backdropCornerRadius;
out float v_backdropArea;
`.concat(ro(t,r,"out"),`

`).concat(Ge,`
`).concat(Je,`
`).concat(ut,`

void main() {
  int nodeIdx = int(a_nodeIndex);
`).concat(o.fetchCode,`
`).concat(o.varyingAssignments,`

  // Node data: (x, y, size, shapeId). shapeId (global) is forwarded to the
  // fragment shader, which keeps the shape SDF for the outline.
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;
  float shapeId = nodeData.w;

  // Per-node rotation alignment (0 = viewport, 1 = graph). nodeRotation drives
  // the fragment's shape outline; labelRotation turns the label box with camera.
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;
  v_nodeRotation = nodeRotation;

  `).concat(Ya,`
  // CSS pixel attributes are multiplied by u_pixelRatio to match nodeRadiusPixels,
  // which is already in physical pixels (nodeRadiusNDC * u_resolution.x / 2.0).
  float padding = a_backdropPadding * u_pixelRatio;
  float shadowBlur = a_backdropShadowBlur * u_pixelRatio;
  // Unpack a_backdropExtra: [borderWidth, cornerRadius, labelPadding, area]
  float borderWidth = a_backdropExtra.x * u_pixelRatio;
  float cornerRadius = a_backdropExtra.y * u_pixelRatio;
  float labelPad = a_backdropExtra.z * u_pixelRatio;
  float backdropArea = a_backdropExtra.w;
  // Use 2x shadowBlur so the Gaussian fully decays before the quad edge
  float totalExpansion = shadowBlur * 2.0 + borderWidth;
  float enlargedRadius = nodeRadiusPixels + padding;

  // Circumscribed radius for the quad bounds. Non-circular shapes reach past
  // their inradius out to their circumradius (= enlargedRadius / inradiusFactor),
  // in any direction once rotated. The axis-aligned quad must contain that, or
  // the fill/shadow gets clipped (square corners, triangle tip, etc.).
  `).concat(s,`
  float boundRadius = enlargedRadius / inradiusFactor;

  // Apply zoom-dependent label size scaling
  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Only apply labelPad when a label is actually present
  float effectiveLabelPad = labelW > 0.0 ? labelPad : 0.0;
  vec2 labelHalfSize = vec2(labelW * 0.5 + effectiveLabelPad, labelH * 0.5 + effectiveLabelPad);
  vec2 labelOffset = vec2(0.0);

  // Effective label angle: intrinsic angle plus the camera angle when the label
  // is graph-aligned, so the box orbits the node in lockstep with the frame-pass.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 snapDelta = vec2(0.0);

  if (labelW > 0.0) {
    // labelW > 0.0 means this node's label is displayed, so the frame-pass wrote
    // its edge distance this frame.
    float edgeDistPixels = nodeRadiusPixels * readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;
    // labelMargin matches the label shader's margin (gap from node edge to text)
    float labelStart = edgeDistPixels + labelMargin;
    // Above/below center on the actual glyph height, not the font line box, so
    // the box stays aligned with the rendered text (matches labelBoxCenter()).
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;

    // Snap node center to pixel grid so label/backdrop/attachment move as a unit
    vec2 nodeScreen = vec2(
      (nodeClip.x + 1.0) * u_resolution.x,
      (1.0 - nodeClip.y) * u_resolution.y
    ) * 0.5;
    snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

    if (a_positionMode < 0.5) {
      // Right: box spans from node center to text end + padding
      float boxRightEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(boxRightEdge * 0.5, 0.0);
      labelHalfSize.x = boxRightEdge * 0.5;
    } else if (a_positionMode < 1.5) {
      // Left: mirror of right
      float boxLeftEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(-boxLeftEdge * 0.5, 0.0);
      labelHalfSize.x = boxLeftEdge * 0.5;
    } else if (a_positionMode < 2.5) {
      // Above: text bottom at labelStart, centered horizontally
      labelOffset = vec2(0.0, -(labelStart + textHalf));
    } else if (a_positionMode < 3.5) {
      // Below: text top at labelStart, centered horizontally
      labelOffset = vec2(0.0, labelStart + textHalf);
    }
    // over (>=4): labelOffset stays (0,0) \u2014 text centered on the node.

    // The attachment-cover shift is in label space (like the attachment itself),
    // so rotate it together with the position offset \u2014 otherwise the box drifts
    // off the attachment as the label angle grows.
    labelOffset = labelRotMat * (labelOffset + a_labelBoxOffset * zoomScale * u_pixelRatio);
  }

  // For node-only mode, zero out label dimensions
  if (backdropArea > 0.5 && backdropArea < 1.5) {
    labelHalfSize = vec2(0.0);
    labelOffset = vec2(0.0);
  }

  vec2 minBound, maxBound;

  bool hasLabelBounds = labelW > 0.0 && (backdropArea > 1.5 || backdropArea < 0.5);

  if (hasLabelBounds) {
    // Union with label bounds (area=both) or label-only bounds (area=label)
    vec2 labelMin, labelMax;

    if (a_labelAngle != 0.0) {
      vec2 corner1 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, -labelHalfSize.y);
      vec2 corner2 = labelOffset + labelRotMat * vec2(labelHalfSize.x, -labelHalfSize.y);
      vec2 corner3 = labelOffset + labelRotMat * vec2(labelHalfSize.x, labelHalfSize.y);
      vec2 corner4 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, labelHalfSize.y);
      labelMin = min(min(corner1, corner2), min(corner3, corner4));
      labelMax = max(max(corner1, corner2), max(corner3, corner4));
    } else {
      labelMin = labelOffset - labelHalfSize;
      labelMax = labelOffset + labelHalfSize;
    }

    if (backdropArea > 1.5) {
      // Label-only: bounds from label rect only
      minBound = labelMin - totalExpansion;
      maxBound = labelMax + totalExpansion;
    } else {
      // Both: union of node + label
      minBound = min(-vec2(boundRadius), labelMin) - totalExpansion;
      maxBound = max(vec2(boundRadius), labelMax) + totalExpansion;
    }
  } else {
    // Node-only or no visible label
    float totalRadius = boundRadius + totalExpansion;
    minBound = -vec2(totalRadius);
    maxBound = vec2(totalRadius);
  }

  vec2 quadSize = maxBound - minBound;
  vec2 quadCenter = (minBound + maxBound) * 0.5;

  vec2 localPos = quadCenter + a_quadCorner * quadSize * 0.5 + snapDelta;
  vec2 ndcOffset = localPos * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);

  v_uv = localPos;
  v_nodeCenter = vec2(0.0);
  v_nodeRadius = nodeRadiusPixels;
  v_labelCenter = labelOffset;
  v_labelHalfSize = labelHalfSize;
  v_aaWidth = 1.0;
  v_shapeId = shapeId;
  v_labelAngle = labelAngle;
  v_backdropColor = a_backdropColor;
  v_backdropShadowColor = a_backdropShadowColor;
  v_backdropShadowBlur = a_backdropShadowBlur;
  v_backdropPadding = a_backdropPadding;
  v_backdropBorderColor = a_backdropBorderColor;
  v_backdropBorderWidth = borderWidth;
  v_backdropCornerRadius = cornerRadius;
  v_backdropArea = backdropArea;
}
`);return l}function oo(a){var n=a.shapes,e=a.layers,t=a.shapeGlobalIds,r=na(n),i=Ft(n).map(function(f){return"uniform ".concat(f.type," ").concat(f.name,";")}).join(`
`),o=function(h){return on(h,"nodeUV","1.0")},s;if(n.length===1)s="float nodeSdfNormalized = ".concat(o(n[0]),";");else{var l=n.map(function(f,h){var g=t?t[h]:h;return"    case ".concat(g,": nodeSdfNormalized = ").concat(o(f),"; break;")}).join(`
`),d=o(n[0]);s=`float nodeSdfNormalized;
  int shapeId = int(v_shapeId);
  switch (shapeId) {
`.concat(l,`
    default: nodeSdfNormalized = `).concat(d,`;
  }`)}var u=`float effectiveRadius = max(enlargedRadius - cornerRadius, 0.01);
  float ca = u_cameraAngle * v_nodeRotation;
  float ca_c = cos(ca);
  float ca_s = sin(ca);
  vec2 rotatedScreenUV = mat2(ca_c, -ca_s, ca_s, ca_c) * screenUV;
  vec2 nodeUV = vec2(rotatedScreenUV.x, -rotatedScreenUV.y) / effectiveRadius;`,c=`#version 300 es
precision highp float;

in vec2 v_uv;
in vec2 v_nodeCenter;
in float v_nodeRadius;
in vec2 v_labelCenter;
in vec2 v_labelHalfSize;
in float v_aaWidth;
in float v_shapeId;
in float v_nodeRotation;
in float v_labelAngle;
in vec4 v_backdropColor;
in vec4 v_backdropShadowColor;
in float v_backdropShadowBlur;
in float v_backdropPadding;
in vec4 v_backdropBorderColor;
in float v_backdropBorderWidth;
in float v_backdropCornerRadius;
in float v_backdropArea;
`.concat(ro(n,e,"in"),`

uniform float u_cameraAngle;
`).concat(i,`

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

`).concat(r,`
`).concat(ji,`
`).concat(Xi,`
`).concat(qi,`
`).concat(Yi,`

void main() {
  vec4 backdropColor = v_backdropColor;
  vec4 shadowColor = v_backdropShadowColor;
  float shadowBlur = v_backdropShadowBlur;
  float padding = v_backdropPadding;
  vec4 borderColor = v_backdropBorderColor;
  float borderWidth = v_backdropBorderWidth;
  float cornerRadius = v_backdropCornerRadius;

  float enlargedRadius = v_nodeRadius + padding;
  vec2 screenUV = v_uv - v_nodeCenter;
  `).concat(u,`

  // Query the correct shape SDF based on shapeId
  `).concat(s,`
  float nodeSdfPixels = nodeSdfNormalized * effectiveRadius - cornerRadius;

  // Label SDF with optional corner radius and rotation
  float labelSdfPixels;
  if (v_labelHalfSize.x > 0.0) {
    vec2 labelP = v_uv - v_labelCenter;
    labelSdfPixels = sdfRoundedRotatedBox(labelP, v_labelHalfSize, v_labelAngle, cornerRadius);
  } else {
    labelSdfPixels = 10000.0;
  }

  // Select area: 0=both, 1=node, 2=label
  float combinedSdf;
  if (v_backdropArea > 1.5) {
    combinedSdf = labelSdfPixels;
  } else if (v_backdropArea > 0.5) {
    combinedSdf = nodeSdfPixels;
  } else {
    combinedSdf = min(nodeSdfPixels, labelSdfPixels);
  }

  // Fill + border composite
  float outerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf);
  vec4 background;
  if (borderWidth > 0.5) {
    float innerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf + borderWidth);
    float fillAlpha = innerEdge * backdropColor.a;
    vec4 fill = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
    float borderAlpha = (outerEdge - innerEdge) * borderColor.a;
    vec4 border = vec4(borderColor.rgb * borderAlpha, borderAlpha);
    background = fill + border * (1.0 - fill.a);
  } else {
    float fillAlpha = outerEdge * backdropColor.a;
    background = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
  }

  // Gaussian-like shadow falloff (mimics canvas shadowBlur)
  vec4 shadow = vec4(0.0);
  float sigma = shadowBlur / 2.5;
  if (sigma > 0.001) {
    float shadowDist = max(0.0, combinedSdf);
    float shadowAlpha = exp(-(shadowDist * shadowDist) / (2.0 * sigma * sigma)) * shadowColor.a;
    shadow = vec4(shadowColor.rgb * shadowAlpha, shadowAlpha);
  }

  fragColor = background + shadow * (1.0 - background.a);
  fragPicking = vec4(0.0);
}
`);return c}function so(a){var n=["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"],e=M(Ft(a)),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;n.includes(r.name)||n.push(r.name)}}catch(i){e.e(i)}finally{e.f()}return n}function lo(a){return{vertexShader:io(a),fragmentShader:oo(a),uniforms:so(a.shapes)}}function uo(a,n,e,t){var r,i,o=t.label,s=o===void 0?{}:o,l=t.shapes,d=t.layers,u=t.getAttributeTexture,c=t.shapeGlobalIds;if(l.length===0)throw new Error("createBackdropProgram: at least one shape must be provided in 'shapes'");var f=(r=s.margin)!==null&&r!==void 0?r:5,h=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},g={shapes:l,layers:d,shapeGlobalIds:c},v=lo(g),b=(function(p){function m(){var y;Y(this,m);for(var x=arguments.length,_=new Array(x),T=0;T<x;T++)_[T]=arguments[T];return y=oe(this,m,[].concat(_)),S(y,"totalBackdropCount",0),S(y,"bufferCapacity",0),y}return se(m,p),K(m,[{key:"getDefinition",value:function(){var x=WebGL2RenderingContext,_=x.FLOAT,T=x.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:v.vertexShader,FRAGMENT_SHADER_SOURCE:v.fragmentShader,METHOD:T,UNIFORMS:v.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:_},{name:"a_labelWidth",size:1,type:_},{name:"a_labelHeight",size:1,type:_},{name:"a_textHeight",size:1,type:_},{name:"a_positionMode",size:1,type:_},{name:"a_labelAngle",size:1,type:_},{name:"a_backdropColor",size:4,type:_},{name:"a_backdropShadowColor",size:4,type:_},{name:"a_backdropShadowBlur",size:1,type:_},{name:"a_backdropPadding",size:1,type:_},{name:"a_backdropBorderColor",size:4,type:_},{name:"a_backdropExtra",size:4,type:_},{name:"a_labelBoxOffset",size:2,type:_}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:_}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processBackdrop",value:function(x,_){var T=this.floats,A=this.STRIDE,E=x*A;T[E++]=_.nodeIndex,T[E++]=_.labelWidth,T[E++]=_.labelHeight,T[E++]=_.textHeight,T[E++]=lt[_.position],T[E++]=_.labelAngle,T[E++]=_.backdropColor[0],T[E++]=_.backdropColor[1],T[E++]=_.backdropColor[2],T[E++]=_.backdropColor[3],T[E++]=_.backdropShadowColor[0],T[E++]=_.backdropShadowColor[1],T[E++]=_.backdropShadowColor[2],T[E++]=_.backdropShadowColor[3],T[E++]=_.backdropShadowBlur,T[E++]=_.backdropPadding,T[E++]=_.backdropBorderColor[0],T[E++]=_.backdropBorderColor[1],T[E++]=_.backdropBorderColor[2],T[E++]=_.backdropBorderColor[3],T[E++]=_.backdropBorderWidth,T[E++]=_.backdropCornerRadius,T[E++]=_.backdropLabelPadding,T[E++]=_.backdropArea,T[E++]=_.labelBoxOffset[0],T[E++]=_.labelBoxOffset[1]}},{key:"setUniforms",value:function(x,_){var T=_.gl,A=_.uniformLocations;T.uniformMatrix3fv(A.u_matrix,!1,x.matrix),T.uniform1f(A.u_sizeRatio,x.sizeRatio),T.uniform1f(A.u_correctionRatio,x.correctionRatio),T.uniform1f(A.u_cameraAngle,x.cameraAngle),T.uniform2f(A.u_resolution,x.width*x.pixelRatio,x.height*x.pixelRatio),T.uniform1f(A.u_pixelRatio,x.pixelRatio),T.uniform1f(A.u_labelMargin,m.labelMargin),T.uniform1f(A.u_zoomLabelSizeRatio,1/h(x.zoomRatio)),T.uniform1f(A.u_labelPixelSnapping,x.labelPixelSnapping),T.uniform1i(A.u_nodeDataTexture,x.nodeDataTextureUnit),T.uniform1i(A.u_nodeDataTextureWidth,x.nodeDataTextureWidth),T.uniform1i(A.u_nodeFrameTexture,x.nodeFrameTextureUnit),T.uniform1i(A.u_nodeFrameTextureWidth,x.nodeFrameTextureWidth);var E=u();A.u_layerAttributeTexture&&E&&(E.bind(Ke),T.uniform1i(A.u_layerAttributeTexture,Ke),T.uniform1i(A.u_layerAttributeTextureWidth,E.getTextureWidth()),T.uniform1i(A.u_layerAttributeTexelsPerNode,E.getTexelsPerItem()));var R=M(Ft(l)),C;try{for(R.s();!(C=R.n()).done;){var k=C.value;this.setTypedUniform(k,_)}}catch(D){R.e(D)}finally{R.f()}}},{key:"hasNothingToRender",value:function(){return this.totalBackdropCount===0}},{key:"drawWebGL",value:function(x,_){var T=_.gl;this.totalBackdropCount!==0&&(this.isInstanced?T.drawArraysInstanced(x,0,this.VERTICES,this.totalBackdropCount):T.drawArrays(x,0,this.totalBackdropCount*this.VERTICES))}},{key:"reallocate",value:function(x){this.totalBackdropCount=x,x>this.bufferCapacity&&(this.bufferCapacity=Math.max(x,Math.ceil(this.bufferCapacity*1.5)||10),he(m,"reallocate",this,3)([this.bufferCapacity]))}}])})(et);return S(b,"labelMargin",f),new b(a,n,e)}var Ja=(function(a){function n(){var e;Y(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=oe(this,n,[].concat(r)),S(e,"totalCharacterCount",0),S(e,"bufferCapacity",0),e}return se(n,a),K(n,[{key:"processLabel",value:function(t,r,i){if(i.hidden||!i.text)return 0;for(var o=i.text,s=o.length,l=0;l<s;l++){var d=o[l];this.processCharacter(r+l,i,d,l)}return s}},{key:"hasNothingToRender",value:function(){return this.totalCharacterCount===0}},{key:"drawWebGL",value:function(t,r){var i=r.gl;this.totalCharacterCount!==0&&(this.isInstanced?i.drawArraysInstanced(t,0,this.VERTICES,this.totalCharacterCount):i.drawArrays(t,0,this.totalCharacterCount*this.VERTICES))}},{key:"reallocate",value:function(t){this.totalCharacterCount=t,t>this.bufferCapacity&&(this.bufferCapacity=Math.max(t,Math.ceil(this.bufferCapacity*1.5)||1e3),he(n,"reallocate",this,3)([this.bufferCapacity]))}}])})(et);function Kd(){var a=`#version 300 es

in float a_nodeIndex;
in vec4 a_id;
in vec4 a_color;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in float a_padding;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pickingPadding;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

out vec4 v_id;
out vec4 v_color;

`.concat(Ge,`
`).concat(Je,`
`).concat(ut,`
`).concat(Za,`

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;

  // Shape-aware edge distance, read once from the shared frame texture.
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  `).concat(Ya,`

  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;
#ifdef PICKING_MODE
  float padding = u_pickingPadding * u_pixelRatio;
#else
  float padding = a_padding * u_pixelRatio;
#endif

  if (labelW <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    v_color = vec4(0.0);
    return;
  }

  vec2 labelHalfSize = vec2(labelW * 0.5 + padding, labelH * 0.5 + padding);
  vec2 labelOffset = vec2(0.0);

  // Graph-aligned labels add the camera angle so the rect orbits with the text.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;
    // Box center uses the text half-size; the padding expands the quad below.
    labelOffset = labelRotMat * labelBoxCenter(a_positionMode, labelStart, vec2(labelW * 0.5, labelH * 0.5), textHalf);
  }

  // Rotate the rect with the label so it stays aligned with the (rotated) text.
  vec2 localPos = labelOffset + labelRotMat * (a_quadCorner * labelHalfSize);
  vec2 ndcOffset = (localPos + snapDelta) * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);
  v_id = a_id;
  v_color = a_color;
}
`);return a}var Zd=`#version 300 es
precision highp float;

in vec4 v_id;
in vec4 v_color;

out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    fragColor = v_id;
  #else
    if (v_color.a <= 0.0) discard;
    // v_color is non-premultiplied RGBA (0-1); convert to premultiplied for blending
    fragColor = vec4(v_color.rgb * v_color.a, v_color.a);
  #endif
}
`;function Qd(a,n,e,t){var r,i,o=t.label,s=o===void 0?{}:o,l=(r=s.margin)!==null&&r!==void 0?r:dt,d=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=Kd(),c=(function(f){function h(){var g;Y(this,h);for(var v=arguments.length,b=new Array(v),p=0;p<v;p++)b[p]=arguments[p];return g=oe(this,h,[].concat(b)),S(g,"totalCount",0),S(g,"bufferCapacity",0),g}return se(h,f),K(h,[{key:"getDefinition",value:function(){var v=WebGL2RenderingContext,b=v.FLOAT,p=v.UNSIGNED_BYTE,m=v.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:Zd,METHOD:m,UNIFORMS:["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:b},{name:"a_id",size:4,type:p,normalized:!0},{name:"a_color",size:4,type:p,normalized:!0},{name:"a_labelWidth",size:1,type:b},{name:"a_labelHeight",size:1,type:b},{name:"a_textHeight",size:1,type:b},{name:"a_positionMode",size:1,type:b},{name:"a_labelAngle",size:1,type:b},{name:"a_padding",size:1,type:b}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:b}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processLabelBackground",value:function(v,b){var p=this.floats,m=this.ints,y=v*this.STRIDE;p[y++]=b.nodeIndex,m[y++]=b.id,p[y++]=b.color,p[y++]=b.labelWidth,p[y++]=b.labelHeight,p[y++]=b.textHeight,p[y++]=b.positionMode,p[y++]=b.labelAngle,p[y++]=b.padding}},{key:"setUniforms",value:function(v,b){var p=b.gl,m=b.uniformLocations;p.uniformMatrix3fv(m.u_matrix,!1,v.matrix),p.uniform1f(m.u_sizeRatio,v.sizeRatio),p.uniform1f(m.u_correctionRatio,v.correctionRatio),p.uniform1f(m.u_cameraAngle,v.cameraAngle),p.uniform2f(m.u_resolution,v.width*v.pixelRatio,v.height*v.pixelRatio),p.uniform1f(m.u_pixelRatio,v.pixelRatio),p.uniform1f(m.u_labelMargin,h.labelMargin),p.uniform1f(m.u_zoomLabelSizeRatio,1/d(v.zoomRatio)),p.uniform1f(m.u_labelPixelSnapping,v.labelPixelSnapping),p.uniform1f(m.u_pickingPadding,v.labelPickingPadding),p.uniform1i(m.u_nodeDataTexture,v.nodeDataTextureUnit),p.uniform1i(m.u_nodeDataTextureWidth,v.nodeDataTextureWidth),p.uniform1i(m.u_nodeFrameTexture,v.nodeFrameTextureUnit),p.uniform1i(m.u_nodeFrameTextureWidth,v.nodeFrameTextureWidth)}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(v,b){var p=b.gl;this.totalCount!==0&&p.drawArraysInstanced(p.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(v){this.totalCount=v,v>this.bufferCapacity&&(this.bufferCapacity=Math.max(v,Math.ceil(this.bufferCapacity*1.5)||10),he(h,"reallocate",this,3)([this.bufferCapacity]))}}])})(et);return S(c,"labelMargin",l),new c(a,n,e)}var Ne={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},tn=2,an=1e20;function Jd(a,n,e,t,r){var i=a+r*4,o=document.createElement("canvas");o.width=i,o.height=i;var s=o.getContext("2d",{willReadFrequently:!0});return s.font="".concat(t," ").concat(e," ").concat(a,"px ").concat(n),s.textBaseline="alphabetic",s.textAlign="left",s.fillStyle="black",{ctx:s,canvasSize:i,gridOuter:new Float64Array(i*i),gridInner:new Float64Array(i*i),f:new Float64Array(i),z:new Float64Array(i+1),v:new Uint16Array(i)}}function eu(a,n,e,t,r){var i=a.ctx,o=a.canvasSize,s=i.measureText(n),l=s.width,d=s.actualBoundingBoxAscent,u=s.actualBoundingBoxDescent,c=s.actualBoundingBoxLeft,f=s.actualBoundingBoxRight,h=Math.ceil(d),g=Math.ceil(c),v=Math.max(0,Math.min(o-e,Math.ceil(c)+Math.ceil(f))),b=Math.min(o-e,h+Math.ceil(u)),p=v+2*e,m=b+2*e,y=Math.max(p*m,0),x=new Uint8ClampedArray(y),_={data:x,width:p,height:m,glyphWidth:v,glyphHeight:b,glyphTop:h,glyphLeft:g,glyphAdvance:l};if(v===0||b===0)return _;var T=a.gridInner,A=a.gridOuter;i.clearRect(e,e,v,b),i.fillText(n,e+g,e+h);var E=i.getImageData(e,e,v,b);A.fill(an,0,y),T.fill(0,0,y);for(var R=0;R<b;R++)for(var C=0;C<v;C++){var k=E.data[4*(R*v+C)+3]/255;if(k!==0){var D=(R+e)*p+C+e;if(k===1)A[D]=0,T[D]=an;else{var F=.5-k;A[D]=F>0?F*F:0,T[D]=F<0?F*F:0}}}Fi(A,0,0,p,m,p,a.f,a.v,a.z),Fi(T,e,e,v,b,p,a.f,a.v,a.z);for(var L=0;L<y;L++){var G=Math.sqrt(A[L])-Math.sqrt(T[L]);x[L]=Math.round(255-255*(G/t+r))}return _}function Fi(a,n,e,t,r,i,o,s,l){for(var d=n;d<n+t;d++)Ii(a,e*i+d,i,r,o,s,l);for(var u=e;u<e+r;u++)Ii(a,u*i+n,1,t,o,s,l)}function Ii(a,n,e,t,r,i,o){i[0]=0,o[0]=-an,o[1]=an,r[0]=a[n];for(var s=1,l=0,d=0;s<t;s++){r[s]=a[n+s*e];var u=s*s;do{var c=i[l];d=(r[s]-r[c]+u-c*c)/(s-c)/2}while(d<=o[l]&&--l>-1);l++,i[l]=s,o[l]=d,o[l+1]=an}for(var f=0,h=0;f<t;f++){for(;o[h+1]<f;)h++;var g=i[h],v=f-g;a[n+f*e]=r[g]+v*v}}var Ze=(function(a){function n(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y(this,n),e=oe(this,n),S(e,"fonts",new Map),S(e,"textures",[]),S(e,"cursor",{x:0,y:0,rowHeight:0,atlasIndex:0}),S(e,"pendingGlyphs",[]),S(e,"debounceTimer",null),e.options=O(O({},Ne),t),e.canvas=document.createElement("canvas"),e.canvas.width=e.options.maxTextureSize,e.canvas.height=e.options.maxTextureSize,e.ctx=e.canvas.getContext("2d",{willReadFrequently:!0}),e.measureCanvas=document.createElement("canvas"),e.measureCtx=e.measureCanvas.getContext("2d"),e.textures.push(e.ctx.getImageData(0,0,1,1)),e}return se(n,a),K(n,[{key:"getFontKey",value:function(t){return"".concat(t.family,"-").concat(t.weight,"-").concat(t.style)}},{key:"registerFont",value:function(t){var r=this.getFontKey(t);if(this.fonts.has(r))return r;var i=Jd(this.options.fontSize,t.family,t.weight,t.style,this.options.buffer);return this.fonts.set(r,{descriptor:t,generator:i,glyphs:new Map}),r}},{key:"ensureGlyphs",value:function(t,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered. Call registerFont() first.'));var o=!1,s=M(t),l;try{for(s.s();!(l=s.n()).done;){var d=l.value,u=d.codePointAt(0);u!==void 0&&(i.glyphs.has(u)||(this.pendingGlyphs.push({fontKey:r,charCode:u}),o=!0))}}catch(c){s.e(c)}finally{s.f()}o&&this.scheduleTextureGeneration()}},{key:"measureText",value:function(t,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered.'));var o=i.descriptor,s=o.family,l=o.weight,d=o.style;return this.measureCtx.font="".concat(d," ").concat(l," ").concat(this.options.fontSize,"px ").concat(s),this.measureCtx.measureText(t).width}},{key:"getGlyph",value:function(t,r){var i=this.fonts.get(r);if(i)return i.glyphs.get(t)}},{key:"getTextures",value:function(){return this.textures}},{key:"getFontCount",value:function(){return this.fonts.size}},{key:"getGlyphCount",value:function(){var t=0,r=M(this.fonts.values()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;t+=o.glyphs.size}}catch(s){r.e(s)}finally{r.f()}return t}},{key:"hasPendingGlyphs",value:function(){return this.pendingGlyphs.length>0}},{key:"flush",value:function(){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null),this.generateTextures()}},{key:"destroy",value:function(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}},{key:"scheduleTextureGeneration",value:function(){var t=this;this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(function(){t.debounceTimer=null,t.generateTextures()},this.options.debounceTimeout))}},{key:"generateTextures",value:function(){if(this.pendingGlyphs.length!==0){var t=this.options,r=t.maxTextureSize,i=t.buffer,o=t.radius,s=t.cutoff,l=M(this.pendingGlyphs),d;try{for(l.s();!(d=l.n()).done;){var u=d.value,c=u.fontKey,f=u.charCode,h=this.fonts.get(c);if(!(!h||h.glyphs.has(f))){var g=String.fromCodePoint(f),v=eu(h.generator,g,i,o,s),b=v.width,p=v.height;this.cursor.x+b+tn>r&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+tn,this.cursor.rowHeight=0),this.cursor.y+p+tn>r&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,r,r));for(var m=v.data,y=new Uint8ClampedArray(b*p*4),x=0;x<m.length;x++){var _=x*4;y[_]=255,y[_+1]=255,y[_+2]=255,y[_+3]=m[x]}var T=new ImageData(y,b,p);this.ctx.putImageData(T,this.cursor.x,this.cursor.y);var A={charCode:f,width:v.glyphWidth,height:v.glyphHeight,bearingX:-v.glyphLeft-i,bearingY:v.glyphTop+i,advance:v.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:b,atlasHeight:p,atlasIndex:this.cursor.atlasIndex};h.glyphs.set(f,A),this.cursor.x+=b+tn,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,p)}}}catch(E){l.e(E)}finally{l.f()}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(n.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}}},{key:"finalizeCurrentTexture",value:function(){var t=this.options.maxTextureSize,r=this.cursor.y>0||this.cursor.rowHeight>0,i=Math.min(t,Math.max(this.cursor.x,r?t:1)),o=Math.min(t,this.cursor.y+this.cursor.rowHeight+tn),s=this.ctx.getImageData(0,0,i,o);this.cursor.atlasIndex>=this.textures.length?this.textures.push(s):this.textures[this.cursor.atlasIndex]=s}}])})(Mi.EventEmitter);S(Ze,"ATLAS_UPDATED_EVENT","atlasUpdated");var tu=Ne.fontSize;function co(){var a=`  // -------------------------------------------------------------------------
  // Step 3: Calculate position offset from the shared edge distance
  // -------------------------------------------------------------------------
  vec2 positionOffset = vec2(0.0);

  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    float boundaryDistPixels = nodeRadiusPixels * edgeDist;
    positionOffset = screenDir * (boundaryDistPixels + margin);
  }`,n=`#version 300 es

// ============================================================================
// Attributes
// ============================================================================

// Per-character (instanced)
in float a_nodeIndex;        // Index into node data texture
in vec2 a_charOffset;        // Character offset from label origin (pixels)
in vec2 a_charSize;          // Character dimensions (pixels)
in vec4 a_texCoords;         // Atlas coords: (x, y, width, height) in pixels
in vec4 a_color;             // Text color (RGBA)
in float a_margin;           // Gap between node edge and label (pixels)
in float a_positionMode;     // Position: 0=right, 1=left, 2=above, 3=below, 4=over
in float a_labelWidth;       // Total label width (pixels)
in float a_labelHeight;      // Label height (pixels)
in float a_verticalCenter;   // Vertical center offset from baseline (pixels)
in float a_textHeight;       // Actual text height: maxAscent + maxDescent (pixels)
in float a_labelAngle;       // Label rotation angle (radians)

// Per-vertex (constant quad corners)
in vec2 a_quadCorner;        // Quad corner: [-1,-1], [1,-1], [-1,1], [1,1]

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pixelRatio;

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
out float v_fontScale;

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float ATLAS_FONT_SIZE = `.concat(le(tu),`;

// ============================================================================
// Helper Functions
// ============================================================================

`).concat(Ge,`
`).concat(Je,`
`).concat(ut,`
`).concat(Ka,`

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Step 0: Fetch node data + shared edge distance from textures
  // -------------------------------------------------------------------------
  // Node-data texture format: vec4(x, y, size, shapeId)
  // 2D texture layout: texCoord = (index % width, index / width)
  int nodeIdx = int(a_nodeIndex);
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_anchorPosition = nodeData.xy;
  float a_nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; the label just reads the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  // Apply zoom-dependent label size scaling
  // Positional values are in CSS pixels; multiply by u_pixelRatio to convert to
  // physical pixels, which is what the NDC conversion (/ u_resolution) expects.
  float zoomScale = u_zoomLabelSizeRatio;
  float margin = a_margin * zoomScale * u_pixelRatio;
  vec2 charOffset = a_charOffset * zoomScale * u_pixelRatio;
  vec2 charSize = a_charSize * zoomScale * u_pixelRatio;
  float labelWidth = a_labelWidth * zoomScale * u_pixelRatio;
  float labelHeight = a_labelHeight * zoomScale;

  // Font scale: ratio of CSS label size to the base atlas font size.
  // Divided by u_pixelRatio because the atlas is generated at ATLAS_FONT_SIZE * pixelRatio,
  // which cancels out the u_pixelRatio in the fragment shader's gamma formula and keeps
  // the anti-aliasing band width consistent across pixel densities.
  v_fontScale = a_labelHeight * zoomScale / (ATLAS_FONT_SIZE * u_pixelRatio);

  // -------------------------------------------------------------------------
  // Step 1: Transform node position to clip space
  // -------------------------------------------------------------------------
  vec3 anchorClip = u_matrix * vec3(a_anchorPosition, 1.0);

  // -------------------------------------------------------------------------
  // Step 2: Convert node size to screen pixels
  // -------------------------------------------------------------------------
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = a_nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
  float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;

`).concat(a,`

  // -------------------------------------------------------------------------
  // Step 4: Calculate final vertex position
  // -------------------------------------------------------------------------
  vec2 cornerOffset = (a_quadCorner + 1.0) * 0.5;
  vec2 charPixelPos = positionOffset + charOffset + cornerOffset * charSize;

  // Apply text alignment based on position mode
  float verticalCenter = a_verticalCenter * zoomScale * u_pixelRatio;
  float textHeight = a_textHeight * zoomScale * u_pixelRatio;
  float baselineToDescent = textHeight / 2.0 - verticalCenter;
  float baselineToAscent = textHeight / 2.0 + verticalCenter;

  if (a_positionMode < 0.5) {
    // Right: vertically center
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 1.5) {
    // Left: right-align and vertically center
    charPixelPos.x -= labelWidth;
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 2.5) {
    // Above: center horizontally, bottom of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y -= baselineToDescent;
  } else if (a_positionMode < 3.5) {
    // Below: center horizontally, top of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += baselineToAscent;
  } else {
    // Over: center both
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += verticalCenter;
  }

  // Apply label angle rotation. Graph-aligned labels add the camera angle so the
  // whole label orbits the node in lockstep with the frame-pass edge distance.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);
  charPixelPos = labelRotMat * charPixelPos;

  // Snap node center to pixel grid so label/backdrop/attachment move as a unit
  vec2 nodeScreen = vec2(
    (anchorClip.x + 1.0) * u_resolution.x,
    (1.0 - anchorClip.y) * u_resolution.y
  ) * 0.5;
  charPixelPos += (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Convert to NDC (flip Y: screen Y-down -> clip Y-up)
  vec2 ndcOffset = vec2(charPixelPos.x, -charPixelPos.y) * 2.0 / u_resolution;
  gl_Position = vec4(anchorClip.xy + ndcOffset, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 5: Texture coordinates
  // -------------------------------------------------------------------------
  v_texCoord = (a_texCoords.xy + cornerOffset * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 6: Pass color
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
}
`);return n}function ho(){var a=`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
in float v_fontScale;

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Labels are not pickable - discard all fragments in picking mode
    discard;
  #else
    // Sample SDF value from atlas (high = inside glyph, low = outside)
    float sdfValue = texture(u_atlas, v_texCoord).a;

    // Edge threshold: 1.0 - cutoff = 0.75 for default cutoff=0.25
    // This is where the glyph edge is located in the SDF
    float edgeThreshold = 1.0 - u_sdfBuffer;

    // Gamma controls the anti-aliasing band width.
    // Scale inversely with font scale so small labels get a wider AA band
    // (smoother) and large labels get a tighter band (sharper).
    float gamma = u_gamma / (u_pixelRatio * v_fontScale);

    // Pure gamma-based anti-aliasing using smoothstep
    // The AA band extends from (threshold - gamma) to (threshold + gamma)
    float alpha = smoothstep(edgeThreshold - gamma, edgeThreshold + gamma, sdfValue);

    // Premultiplied alpha output for correct blending
    float finalAlpha = v_color.a * alpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  #endif
}
`;return a}function fo(){return["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_pixelRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_zoomLabelSizeRatio","u_labelPixelSnapping"]}function go(){return{vertexShader:co(),fragmentShader:ho(),uniforms:fo()}}function po(a,n,e,t){var r,i,o=t.label,s=o===void 0?{}:o,l=(r=s.margin)!==null&&r!==void 0?r:dt,d=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=go(),c=(function(f){function h(g,v,b){var p,m,y,x;if(Y(this,h),x=oe(this,h,[g,v,b]),S(x,"atlasTexture",null),S(x,"atlasNeedsUpdate",!1),S(x,"labelGlyphCache",new Map),x.atlasFontSize=Ne.fontSize*en(),x.atlasManager=new Ze({fontSize:x.atlasFontSize}),x.gamma=.025,x.sdfBuffer=Ne.cutoff,x.atlasTexture=g.createTexture(),!x.atlasTexture)throw new Error("NodeLabelProgram: failed to create atlas texture");g.bindTexture(g.TEXTURE_2D,x.atlasTexture),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR),g.bindTexture(g.TEXTURE_2D,null),x.atlasManager.on(Ze.ATLAS_UPDATED_EVENT,function(){x.atlasNeedsUpdate=!0});var _={family:((p=s.font)===null||p===void 0?void 0:p.family)||"sans-serif",weight:((m=s.font)===null||m===void 0?void 0:m.weight)||"normal",style:((y=s.font)===null||y===void 0?void 0:y.style)||"normal"};return x.defaultFontKey=x.atlasManager.registerFont(_),x}return se(h,f),K(h,[{key:"getDefinition",value:function(){var v=WebGL2RenderingContext,b=v.FLOAT,p=v.UNSIGNED_BYTE,m=v.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u.vertexShader,FRAGMENT_SHADER_SOURCE:u.fragmentShader,METHOD:m,UNIFORMS:u.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:b},{name:"a_charOffset",size:2,type:b},{name:"a_charSize",size:2,type:b},{name:"a_texCoords",size:4,type:b},{name:"a_color",size:4,type:p,normalized:!0},{name:"a_margin",size:1,type:b},{name:"a_positionMode",size:1,type:b},{name:"a_labelWidth",size:1,type:b},{name:"a_labelHeight",size:1,type:b},{name:"a_verticalCenter",size:1,type:b},{name:"a_textHeight",size:1,type:b},{name:"a_labelAngle",size:1,type:b}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:b}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(v,b){if(b.hidden||!b.text){this.labelGlyphCache.delete(v);return}var p=b.text,m=b.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(p,m);var y=[],x=[],_=0,T=0,A=0,E=M(p),R;try{for(E.s();!(R=E.n()).done;){var C=R.value,k=C.codePointAt(0);if(k===void 0){y.push(void 0),x.push(_);continue}var D=this.atlasManager.getGlyph(k,m);y.push(D),x.push(_),D&&(_+=D.advance,T=Math.max(T,D.bearingY),A=Math.max(A,D.atlasHeight-D.bearingY))}}catch(F){E.e(F)}finally{E.f()}this.labelGlyphCache.set(v,{glyphs:y,xOffsets:x,totalWidth:_,totalHeight:T+A,verticalCenterOffset:(T-A)/2})}},{key:"processCharacter",value:function(v,b,p,m){var y=this.floats,x=this.STRIDE,_=v*x,T=this.labelGlyphCache.get(b.parentKey);if(!T||!T.glyphs[m]){for(var A=0;A<x;A++)y[_+A]=0;return}var E=T.glyphs[m],R=T.xOffsets[m],C=b.size/this.atlasFontSize,k=Ee(b.color),D=_;y[D++]=b.nodeIndex,y[D++]=(R+E.bearingX)*C,y[D++]=-E.bearingY*C,y[D++]=E.atlasWidth*C,y[D++]=E.atlasHeight*C,y[D++]=E.atlasX,y[D++]=E.atlasY,y[D++]=E.atlasWidth,y[D++]=E.atlasHeight,y[D++]=k,y[D++]=b.margin,y[D++]=lt[b.position],y[D++]=T.totalWidth*C,y[D++]=b.size,y[D++]=T.verticalCenterOffset*C,y[D++]=T.totalHeight*C,y[D++]=b.labelAngle}},{key:"processLabel",value:function(v,b,p){return this.prepareLabelGlyphs(v,p),he(h,"processLabel",this,3)([v,b,p])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var v=this.normalProgram.gl,b=this.atlasManager.getTextures();if(b.length!==0){var p=b[0];v.bindTexture(v.TEXTURE_2D,this.atlasTexture),v.texImage2D(v.TEXTURE_2D,0,v.RGBA,p.width,p.height,0,v.RGBA,v.UNSIGNED_BYTE,p.data),v.bindTexture(v.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(v,b){var p=b.gl,m=b.uniformLocations;p.uniformMatrix3fv(m.u_matrix,!1,v.matrix),p.uniform1f(m.u_sizeRatio,v.sizeRatio),p.uniform1f(m.u_correctionRatio,v.correctionRatio),p.uniform1f(m.u_cameraAngle,v.cameraAngle),p.uniform2f(m.u_resolution,v.width*v.pixelRatio,v.height*v.pixelRatio);var y=this.atlasManager.getTextures();y.length>0?p.uniform2f(m.u_atlasSize,y[0].width,y[0].height):p.uniform2f(m.u_atlasSize,1,1),p.activeTexture(p.TEXTURE0),p.bindTexture(p.TEXTURE_2D,this.atlasTexture),p.uniform1i(m.u_atlas,0),m.u_nodeDataTexture!==void 0&&p.uniform1i(m.u_nodeDataTexture,v.nodeDataTextureUnit),m.u_nodeDataTextureWidth!==void 0&&p.uniform1i(m.u_nodeDataTextureWidth,v.nodeDataTextureWidth),p.uniform1i(m.u_nodeFrameTexture,v.nodeFrameTextureUnit),p.uniform1i(m.u_nodeFrameTextureWidth,v.nodeFrameTextureWidth),p.uniform1f(m.u_gamma,this.gamma),p.uniform1f(m.u_sdfBuffer,this.sdfBuffer),p.uniform1f(m.u_pixelRatio,v.pixelRatio),p.uniform1f(m.u_zoomLabelSizeRatio,1/h.zoomToLabelSizeRatioFunction(v.zoomRatio)),p.uniform1f(m.u_labelPixelSnapping,v.labelPixelSnapping)}},{key:"renderProgram",value:function(v,b){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),he(h,"renderProgram",this,3)([v,b])}},{key:"registerFont",value:function(v){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:v,weight:b,style:p})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"measureLabel",value:function(v,b,p){var m=p||this.defaultFontKey;this.atlasManager.ensureGlyphs(v,m),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var y=0,x=0,_=0,T=M(v),A;try{for(T.s();!(A=T.n()).done;){var E=A.value,R=E.codePointAt(0);if(R!==void 0){var C=this.atlasManager.getGlyph(R,m);C&&(y+=C.advance,x=Math.max(x,C.bearingY),_=Math.max(_,C.atlasHeight-C.bearingY))}}}catch(D){T.e(D)}finally{T.f()}var k=b/this.atlasFontSize;return{width:y*k,height:b,textHeight:(x+_)*k}}},{key:"ensureGlyphsReady",value:function(v,b){var p=b||this.defaultFontKey,m=M(v),y;try{for(m.s();!(y=m.n()).done;){var x=y.value;this.atlasManager.ensureGlyphs(x,p)}}catch(_){m.e(_)}finally{m.f()}this.atlasManager.flush()}},{key:"kill",value:function(){var v=this.normalProgram.gl;this.atlasTexture&&(v.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),he(h,"kill",this,3)([])}}])})(Ja);return S(c,"labelMargin",l),S(c,"zoomToLabelSizeRatioFunction",d),new c(a,n,e)}var nu=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function au(a,n,e){var t=na(a),r=Ft(a).map(function(g){return"uniform ".concat(g.type," ").concat(g.name,";")}).join(`
`),i=Zi(a,e),o=i.code,s=i.multiShape,l=Nt(a,n),d=Object.keys(l.specs).map(function(g){return"float v_".concat(g,";")}).join(`
`),u=kt(l,{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),c=u.fetchCode,f=u.varyingAssignments,h=`#version 300 es
precision highp float;

uniform float u_cameraAngle;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;
`.concat(r,`

in float a_nodeIndex;     // node-data texture index (also the target frame texel)
in float a_positionMode;  // 0=right 1=left 2=above 3=below 4=over
in float a_labelAngle;    // intrinsic label angle (radians)

out float v_edgeDist;

// Shape attributes (plain globals: this pass is vertex-only)
`).concat(d,`

`).concat(Ge,`
`).concat(Je,`
`).concat(t,`
`).concat(o,`
`).concat(Ka,`

void main() {
  int nodeIdx = int(a_nodeIndex);
`).concat(c,`
`).concat(f,`
  `).concat(s?`// Multi-shape: the shape id lives in the node-data texture's .w channel:
  g_shapeId = int(readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).w);`:"// Single-shape mode, shape id not needed",`

  // Per-node rotation alignment (0 = viewport, 1 = graph).
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;

  // Effective angle: intrinsic (style-given) plus the camera angle when the label
  // is graph-aligned. The companions place the box at this same angle.
  float effectiveAngle = a_labelAngle - labelRotation * u_cameraAngle;

  // The "over" mode (4) sits on the node center, so it has no edge distance.
  float edgeDist = 0.0;
  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    // Rotate by the effective label angle. Inlined rather than via rotate2D()
    // because the shape SDFs (getShapeGLSLForShapes) already define that helper
    // for multi-shape programs, and redefining it would be a GLSL error.
    float ea_c = cos(effectiveAngle);
    float ea_s = sin(effectiveAngle);
    vec2 rotatedScreenDir = mat2(ea_c, -ea_s, ea_s, ea_c) * screenDir;
    // Screen (Y-down) -> SDF (Y-up).
    vec2 sdfDir = vec2(rotatedScreenDir.x, -rotatedScreenDir.y);
    // Counter-rotate into the shape's local frame for graph-aligned nodes, so the
    // boundary is queried against the shape's actual on-screen orientation.
    float nodeCa = -u_cameraAngle * nodeRotation;
    float nc = cos(nodeCa), ns = sin(nodeCa);
    sdfDir = mat2(nc, -ns, ns, nc) * sdfDir;
    edgeDist = findEdgeDistance(sdfDir, 1.0);
  }
  v_edgeDist = edgeDist;

  // Scatter to this node's texel center in the frame texture.
  float x = mod(a_nodeIndex, u_frameTextureWidth);
  float y = floor(a_nodeIndex / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`);return h}var er=(function(){function a(n,e){Y(this,a),S(this,"uniformLocations",{});var t=e.shapes,r=e.layers,i=e.shapeGlobalIds;if(t.length===0)throw new Error("NodeLabelFramePass: at least one shape must be provided");this.gl=n,this.shapeUniforms=Ft(t),this.hasAttributeData=Object.keys(Nt(t,r).offsets).length>0,this.vertexShader=Jn(n,au(t,r,i)),this.fragmentShader=ea(n,nu),this.program=ta(n,[this.vertexShader,this.fragmentShader]);var o=["u_cameraAngle","u_nodeDataTexture","u_nodeDataTextureWidth","u_frameTextureWidth","u_frameTextureHeight","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"].concat(V(this.shapeUniforms.map(function(p){return p.name}))),s=M(o),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;this.uniformLocations[d]=n.getUniformLocation(this.program,d)}}catch(p){s.e(p)}finally{s.f()}var u=a.FLOATS_PER_POINT*4;this.vao=n.createVertexArray(),this.buffer=n.createBuffer(),n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,this.buffer);var c=M([["a_nodeIndex",0],["a_positionMode",4],["a_labelAngle",8]]),f;try{for(c.s();!(f=c.n()).done;){var h=J(f.value,2),g=h[0],v=h[1],b=n.getAttribLocation(this.program,g);b>=0&&(n.enableVertexAttribArray(b),n.vertexAttribPointer(b,1,n.FLOAT,!1,u,v))}}catch(p){c.e(p)}finally{c.f()}n.bindVertexArray(null)}return K(a,[{key:"run",value:function(e,t,r,i,o){if(t!==0){var s=this.gl;s.useProgram(this.program),s.bindVertexArray(this.vao),s.bindBuffer(s.ARRAY_BUFFER,this.buffer),s.bufferData(s.ARRAY_BUFFER,e.subarray(0,t*a.FLOATS_PER_POINT),s.DYNAMIC_DRAW);var l=this.uniformLocations;s.uniform1f(l.u_cameraAngle,i.cameraAngle),s.uniform1i(l.u_nodeDataTexture,i.nodeDataTextureUnit),s.uniform1i(l.u_nodeDataTextureWidth,i.nodeDataTextureWidth),s.uniform1f(l.u_frameTextureWidth,r.getTextureWidth()),s.uniform1f(l.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&o&&(o.bind(Ke),l.u_layerAttributeTexture&&s.uniform1i(l.u_layerAttributeTexture,Ke),l.u_layerAttributeTextureWidth&&s.uniform1i(l.u_layerAttributeTextureWidth,o.getTextureWidth()),l.u_layerAttributeTexelsPerNode&&s.uniform1i(l.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var d=M(this.shapeUniforms),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;Qa(s,this.uniformLocations[c.name],c)}}catch(f){d.e(f)}finally{d.f()}r.bindAsRenderTarget(),s.disable(s.BLEND),s.disable(s.DEPTH_TEST),s.drawArrays(s.POINTS,0,t),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindVertexArray(null)}}},{key:"kill",value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteBuffer(this.buffer),e.deleteVertexArray(this.vao)}}])})();S(er,"FLOATS_PER_POINT",3);function tr(a,n,e,t,r){var i,o=t.label,s=o===void 0?{}:o,l=t.shapes;if(l.length===0)throw new Error("createNodeProgram: at least one shape must be provided in 'shapes'");var d={},u=[],c;l.forEach(function(A,E){var R=Wi(A);E===0&&(c=R),d[A.name]=E,u[E]=Pt(R)});var f=V(t.layers),h=ja({shapes:l,layers:f,shapeGlobalIds:l.length>1?u:void 0,antialias:r}),g=po(a,null,e,{label:s}),v=uo(a,null,e,{shapes:l,layers:f,getAttributeTexture:function(){return T.getAttributeTexture()},label:s,shapeGlobalIds:l.length>1?u:void 0}),b=Qd(a,n,e,{label:s}),p=t.labelAttachments&&Object.keys(t.labelAttachments).length>0?Yd(a,null,e,{label:s}):null,m=new er(a,{shapes:l,layers:f,shapeGlobalIds:l.length>1?u:void 0}),y=la(l,f),x=Re(y),_=(i=(function(A){function E(R,C,k){var D;Y(this,E),D=oe(this,E,[R,C,k]),S(D,"layerLifecycles",new Map),S(D,"layersNeedingRegeneration",new Set),S(D,"attrDescriptors",[]),D._pickingBuffer=C;var F=_.layerTextures.get(R);F||(F=new ia(R,x),_.layerTextures.set(R,F)),D.layerAttributeTexture=F;var L=_.textureRefCounts.get(R)||0;_.textureRefCounts.set(R,L+1),D.packedAttributeData=new Float32Array(x.floatsPerItem),f.forEach(function(N,z){if(N.lifecycle){var P={gl:R,renderer:{refresh:function(){return k.refresh()}},getUniformLocation:function(H){return R.getUniformLocation(D.normalProgram.program,H)},requestShaderRegeneration:function(){D.layersNeedingRegeneration.add(z)},requestRefresh:function(){k.refresh()}},w=N.lifecycle(P);D.layerLifecycles.set(z,w)}}),D.layerLifecycles.forEach(function(N){var z;(z=N.init)===null||z===void 0||z.call(N)});var G=new Map;return D.layerLifecycles.forEach(function(N,z){N.getAttributeData&&G.set(z,N)}),D.attrDescriptors=oa(y,x,G),D}return se(E,A),K(E,[{key:"getDefinition",value:function(){var C=WebGL2RenderingContext,k=C.FLOAT,D=C.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:h.vertexShader,FRAGMENT_SHADER_SOURCE:h.fragmentShader,METHOD:D,UNIFORMS:h.uniforms,ATTRIBUTES:h.attributes,CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:k}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"maybeRegenerateShaders",value:function(){var C=this;if(this.layersNeedingRegeneration.size!==0){f=f.map(function(z,P){if(C.layersNeedingRegeneration.has(P)){var w=C.layerLifecycles.get(P);if(w!=null&&w.regenerate){var I=w.regenerate();return O(O({},I),{},{lifecycle:z.lifecycle})}}return z}),this.layersNeedingRegeneration.clear(),h=ja({shapes:l,layers:f,shapeGlobalIds:l.length>1?u:void 0,antialias:this.renderer.getSetting("antialiasNodes")});var k=this.normalProgram.gl,D=this.normalProgram,F=D.program,L=D.buffer,G=D.vertexShader,N=D.fragmentShader;k.deleteProgram(F),k.deleteBuffer(L),k.deleteShader(G),k.deleteShader(N),this.normalProgram=this.getProgramInfo("normal",k,h.vertexShader,h.fragmentShader,this._pickingBuffer)}}},{key:"allocateNode",value:function(C){this.layerAttributeTexture.allocate(C)}},{key:"freeNode",value:function(C){this.layerAttributeTexture.free(C)}},{key:"getAttributeTexture",value:function(){return this.layerAttributeTexture}},{key:"uploadLayerTexture",value:function(){this.layerAttributeTexture.upload()}},{key:"process",value:function(C,k,D,F,L){var G=k*this.STRIDE;if(D.visibility==="hidden"){for(var N=G+this.STRIDE;G<N;G++)this.floats[G]=0;this.floats[k*this.STRIDE]=Qi;return}this.processVisibleItem(Rt(C),G,D,F,L)}},{key:"processVisibleItem",value:function(C,k,D,F,L){var G,N=this.floats,z=this.ints;if(N[k++]=F,z[k++]=C,N[k++]=(G=D.opacity)!==null&&G!==void 0?G:1,x.floatsPerItem!==0){var P=this.packedAttributeData;sa(this.attrDescriptors,D,P,D.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(L,P)}}},{key:"setUniforms",value:function(C,k){var D=this,F=k.gl,L=k.uniformLocations;L.u_matrix&&F.uniformMatrix3fv(L.u_matrix,!1,C.matrix),L.u_sizeRatio&&F.uniform1f(L.u_sizeRatio,C.sizeRatio),L.u_correctionRatio&&F.uniform1f(L.u_correctionRatio,C.correctionRatio),L.u_pickingPadding&&F.uniform1f(L.u_pickingPadding,C.nodePickingPadding),L.u_cameraAngle&&F.uniform1f(L.u_cameraAngle,C.cameraAngle),L.u_nodeDataTexture&&F.uniform1i(L.u_nodeDataTexture,C.nodeDataTextureUnit),L.u_nodeDataTextureWidth&&F.uniform1i(L.u_nodeDataTextureWidth,C.nodeDataTextureWidth),L.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(Ke),F.uniform1i(L.u_layerAttributeTexture,Ke)),L.u_layerAttributeTextureWidth&&F.uniform1i(L.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),L.u_layerAttributeTexelsPerNode&&F.uniform1i(L.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),l.forEach(function(G){G.uniforms.forEach(function(N){D.setTypedUniform(N,k)})}),f.forEach(function(G){G.uniforms.forEach(function(N){D.setTypedUniform(N,k)})})}},{key:"render",value:function(C,k,D){this.maybeRegenerateShaders(),he(E,"render",this,3)([C,k,D])}},{key:"renderProgram",value:function(C,k){var D=k.gl,F=k.program;D.useProgram(F),k===this.normalProgram&&this.layerLifecycles.forEach(function(L){var G;(G=L.beforeRender)===null||G===void 0||G.call(L)}),he(E,"renderProgram",this,3)([C,k])}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(D){var F;(F=D.kill)===null||F===void 0||F.call(D)}),this.layerLifecycles.clear();var C=this.normalProgram.gl,k=(_.textureRefCounts.get(C)||1)-1;k<=0?(this.layerAttributeTexture.kill(),_.layerTextures.delete(C),_.textureRefCounts.delete(C)):_.textureRefCounts.set(C,k),he(E,"kill",this,3)([])}}])})(et),S(i,"layerTextures",new WeakMap),S(i,"textureRefCounts",new WeakMap),i),T=new _(a,null,e);return{nodeProgram:T,labelProgram:g,backdropProgram:v,labelBackgroundProgram:b,attachmentProgram:p,framePass:m,shapeSlug:c,shapeNameToIndex:l.length>1?d:void 0,shapeGlobalIds:l.length>1?u:void 0}}var Qe=6;function dn(a){var n=a.offsets,e=a.specs,t=a.floatsPerItem,r=Object.keys(n);if(r.length===0||t===0)return{uniformDeclarations:"",uniformNames:[],vertexVaryingDeclarations:"",fragmentVaryingDeclarations:"",fetchCode:"",varyingAssignments:""};var i=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=["u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"],s=r.map(function(h){var g=e[h].size===1?"float":"vec".concat(e[h].size);return"".concat(g," v_").concat(h,";")}),l=s.map(function(h){return"out ".concat(h)}).join(`
`),d=s.map(function(h){return"in ".concat(h)}).join(`
`),u=kt(a,{varPrefix:"attr",baseTexelExpr:"edgeIdx * u_edgeAttributeTexelsPerEdge",textureWidthUniform:"u_edgeAttributeTextureWidth",textureSamplerUniform:"u_edgeAttributeTexture"}),c=u.fetchCode,f=u.varyingAssignments;return{uniformDeclarations:i,uniformNames:o,vertexVaryingDeclarations:l,fragmentVaryingDeclarations:d,fetchCode:c,varyingAssignments:f}}function ru(a){return`
float findSourceClampT_`.concat(a,`(vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  float lo = 0.0, hi = 0.5;
  float nodeExtent = sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // Counter-rotate the query point so viewport-aligned nodes (rotateAlign=0) are
  // clamped against their on-screen orientation; graph-aligned nodes skip it.
  float ca = u_cameraAngle * (1.0 - sourceRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_`).concat(a,`_position(mid, source, target);
    vec2 localPos = rot * ((pos - source) / nodeExtent);
    float sdf = querySDF(sourceShapeId, localPos, effectiveSize);
    if (sdf < 0.0) lo = mid;
    else hi = mid;
  }

  float pathLen = path_`).concat(a,`_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 + marginT;
}
`)}function iu(a){return`
float findTargetClampT_`.concat(a,`(vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  float lo = 0.5, hi = 1.0;
  float nodeExtent = targetSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // See findSourceClampT_ for the rotation rationale.
  float ca = u_cameraAngle * (1.0 - targetRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_`).concat(a,`_position(mid, source, target);
    vec2 localPos = rot * ((pos - target) / nodeExtent);
    float sdf = querySDF(targetShapeId, localPos, effectiveSize);
    if (sdf < 0.0) hi = mid;
    else lo = mid;
  }

  float pathLen = path_`).concat(a,`_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 - marginT;
}
`)}function vo(a){return`
// Auto-generated numerical tangent (from position via finite differences)
vec2 path_`.concat(a,`_tangent(float t, vec2 source, vec2 target) {
  float epsilon = 0.001;
  float t1 = max(0.0, t - epsilon);
  float t2 = min(1.0, t + epsilon);
  vec2 p1 = path_`).concat(a,`_position(t1, source, target);
  vec2 p2 = path_`).concat(a,`_position(t2, source, target);
  return normalize(p2 - p1);
}

// Auto-generated normal (perpendicular to tangent)
vec2 path_`).concat(a,`_normal(float t, vec2 source, vec2 target) {
  vec2 tangent = path_`).concat(a,`_tangent(t, source, target);
  return vec2(-tangent.y, tangent.x);
}
`)}function ou(a){return`
// Auto-generated path length (samples position 16 times)
float path_`.concat(a,`_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_`).concat(a,`_position(0.0, source, target);
  for (int i = 1; i <= 16; i++) {
    float t = float(i) / 16.0;
    vec2 curr = path_`).concat(a,`_position(t, source, target);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}
`)}function su(a){return`
// Auto-generated closest_t (coarse sample + ternary search)
float path_`.concat(a,`_closest_t(vec2 p, vec2 source, vec2 target) {
  // Coarse search: find best among 10 samples
  float bestT = 0.0;
  float bestDist = 1e10;
  for (int i = 0; i <= 10; i++) {
    float t = float(i) / 10.0;
    vec2 pos = path_`).concat(a,`_position(t, source, target);
    float d = length(p - pos);
    if (d < bestDist) {
      bestDist = d;
      bestT = t;
    }
  }

  // Refine with ternary search
  float lo = max(0.0, bestT - 0.1);
  float hi = min(1.0, bestT + 0.1);
  for (int i = 0; i < 10; i++) {
    float mid1 = lo + (hi - lo) / 3.0;
    float mid2 = hi - (hi - lo) / 3.0;
    float d1 = length(p - path_`).concat(a,`_position(mid1, source, target));
    float d2 = length(p - path_`).concat(a,`_position(mid2, source, target));
    if (d1 < d2) {
      hi = mid2;
    } else {
      lo = mid1;
    }
  }
  return (lo + hi) * 0.5;
}
`)}function lu(a){return`
// Auto-generated signed distance (via closest_t + normal)
float path_`.concat(a,`_distance(vec2 p, vec2 source, vec2 target) {
  float closestT = path_`).concat(a,`_closest_t(p, source, target);
  vec2 closest = path_`).concat(a,`_position(closestT, source, target);
  vec2 diff = p - closest;
  float dist = length(diff);
  if (dist < 0.0001) return 0.0;

  // Get normal at closest point
  vec2 normal = path_`).concat(a,`_normal(closestT, source, target);
  return dist * sign(dot(diff, normal));
}
`)}function du(a){return`
// Auto-generated t_at_distance (binary search)
float path_`.concat(a,`_t_at_distance(float targetDist, vec2 source, vec2 target) {
  if (targetDist <= 0.0) return 0.0;

  float totalLen = path_`).concat(a,`_length(source, target);
  if (targetDist >= totalLen) return 1.0;

  // Binary search for t
  float lo = 0.0, hi = 1.0;
  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;

    // Compute arc length from 0 to mid
    float arcLen = 0.0;
    vec2 prev = path_`).concat(a,`_position(0.0, source, target);
    for (int j = 1; j <= 8; j++) {
      float t = mid * float(j) / 8.0;
      vec2 curr = path_`).concat(a,`_position(t, source, target);
      arcLen += length(curr - prev);
      prev = curr;
    }

    if (arcLen < targetDist) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) * 0.5;
}
`)}function qn(a,n){var e=new RegExp("\\b(float|vec[234]|void|int|bool)\\s+".concat(n,"\\s*\\("));return e.test(a)}function mo(a,n){var e=[];return qn(n,"path_".concat(a,"_length"))||e.push(ou(a)),qn(n,"path_".concat(a,"_closest_t"))||e.push(su(a)),qn(n,"path_".concat(a,"_distance"))||e.push(lu(a)),qn(n,"path_".concat(a,"_t_at_distance"))||e.push(du(a)),e.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
`.concat(e.join(`
`)):""}function bo(a){var n,e,t,r=a.paths,i=a.layers,o=(n=a.extremities)!==null&&n!==void 0?n:[];if(r.length===0)throw new Error("At least one path is required in 'paths'");if(i.length===0)throw new Error("At least one layer is required in 'layers'");var s=(e=a.defaultHead)!==null&&e!==void 0?e:"none",l=(t=a.defaultTail)!==null&&t!==void 0?t:"none";return{paths:r,extremities:o,layers:i,path:r[0],layer:i[0],defaultHead:s,defaultTail:l}}var yo=WebGL2RenderingContext,rn=yo.FLOAT,Ni=yo.UNSIGNED_BYTE;function uu(a,n,e){var t=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"]),r=new Set(t);return a.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),n.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),e.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),Array.from(r)}function nr(a){var n=new Set,e=[],t=M(a),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;n.has(i.name)||(n.add(i.name),e.push("// Path: ".concat(i.name)),e.push(i.glsl),e.push(vo(i.name)),e.push(mo(i.name,i.glsl)))}}catch(o){t.e(o)}finally{t.f()}return e.join(`

`)}function cu(a){var n=[],e=M(a),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;n.push("// Extremity: ".concat(r.name)),n.push(r.glsl)}}catch(i){e.e(i)}finally{e.f()}return n.join(`

`)}var hu=[{queryName:"queryPathPosition",pathFunc:"position",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathTangent",pathFunc:"tangent",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathNormal",pathFunc:"normal",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathLength",pathFunc:"length",returnType:"float",params:"vec2 source, vec2 target",args:"source, target"},{queryName:"queryPathClosestT",pathFunc:"closest_t",returnType:"float",params:"vec2 p, vec2 source, vec2 target",args:"p, source, target"}];function fu(a,n){var e=n.queryName,t=n.pathFunc,r=n.returnType,i=n.params,o=n.args;if(a.length===1)return"".concat(r," ").concat(e,"(int pathId, ").concat(i,`) {
  return path_`).concat(a[0].name,"_").concat(t,"(").concat(o,`);
}`);var s=a.map(function(l,d){return"    case ".concat(d,": return path_").concat(l.name,"_").concat(t,"(").concat(o,");")}).join(`
`);return"".concat(r," ").concat(e,"(int pathId, ").concat(i,`) {
  switch (pathId) {
`).concat(s,`
    default: return path_`).concat(a[0].name,"_").concat(t,"(").concat(o,`);
  }
}`)}function ar(a){return hu.map(function(n){return fu(a,n)}).join(`

`)}function gu(a){if(a.length===1)return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_`.concat(a[0].name,`(uv, lengthRatio, widthRatio);
}`);var n=a.map(function(e,t){return"    case ".concat(t,": return extremity_").concat(e.name,"(uv, lengthRatio, widthRatio);")}).join(`
`);return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
`.concat(n,`
    default: return extremity_`).concat(a[0].name,`(uv, lengthRatio, widthRatio);
  }
}`)}function pu(a){var n=[],e=M(a),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;n.push(ru(r.name)),n.push(iu(r.name))}}catch(s){e.e(s)}finally{e.f()}if(a.length===1)n.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_`.concat(a[0].name,`(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_`).concat(a[0].name,`(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`));else{var i=a.map(function(s,l){return"    case ".concat(l,": return findSourceClampT_").concat(s.name,"(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);")}).join(`
`),o=a.map(function(s,l){return"    case ".concat(l,": return findTargetClampT_").concat(s.name,"(source, target, targetSize, targetShapeId, targetRotateAlign, margin);")}).join(`
`);n.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  switch (pathId) {
`.concat(i,`
    default: return findSourceClampT_`).concat(a[0].name,`(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
  }
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  switch (pathId) {
`).concat(o,`
    default: return findTargetClampT_`).concat(a[0].name,`(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
  }
}`))}return n.join(`

`)}function vu(a,n,e,t,r){var i=Re([].concat(V(a),V(e))),o=dn(i),s=Nt(t,r),l=Object.keys(s.offsets),d=function(A){var E=s.specs[A].size;return E===1?"float":"vec".concat(E)},u=l.map(function(T){return"".concat(d(T)," v_source_").concat(T,`;
`).concat(d(T)," v_target_").concat(T,";")}).join(`
`),c=kt(s,{varPrefix:"srcNodeAttr",baseTexelExpr:"srcIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_source_"}),f=kt(s,{varPrefix:"tgtNodeAttr",baseTexelExpr:"tgtIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_target_"}),h=l.map(function(T){return"".concat(d(T)," g_").concat(T,";")}).join(`
`),g=l.map(function(T){return"  g_".concat(T," = v_source_").concat(T,";")}).join(`
`),v=l.map(function(T){return"  g_".concat(T," = v_target_").concat(T,";")}).join(`
`),b=new Set,p=[],m=function(A){b.has(A.name)||(b.add(A.name),p.push("uniform ".concat(A.type," ").concat(A.name,";")))};a.forEach(function(T){return T.uniforms.forEach(m)}),n.forEach(function(T){return T.uniforms.forEach(m)});var y=n.map(function(T){return le(T.widthFactor)}).join(", "),x=Math.max.apply(Math,V(a.map(function(T){return T.minBodyLengthRatio||0}))),_=`#version 300 es

// Node and edge data textures
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;

// Edge attribute texture (for path-specific attributes like curvature)
`.concat(o.uniformDeclarations,`

// Node attribute texture (for node shape attributes)
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

// Render params needed for clamping
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;

// Edge-frame texture dimensions, for scattering each point to its texel
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;

// Custom path/extremity uniforms
`).concat(p.join(`
`),`

// Path attribute varyings \u2014 assigned so path functions can read them as globals
`).concat(o.vertexVaryingDeclarations,`

// Node size varyings \u2014 read by path functions like loop
out float v_sourceNodeSize;
out float v_targetNodeSize;

// Node shape attributes per endpoint, and the ones querySDF reads
`).concat(u,`
`).concat(h,`

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[`).concat(n.length,"] = float[](").concat(y,`);

// Node-data fetch helpers (geometry texel + rotation-flags texel)
`).concat(Ge,`
`).concat(Je,`

// Shape SDFs for node boundary clamping
`).concat(Hi(),`
`).concat($i(new Set(l)),`

// Path functions
`).concat(nr(a),`
`).concat(ar(a),`
`).concat(pu(a),`

void main() {
  // One point per edge-data row; the row index is the edge-frame texel target.
  int edgeIdx = gl_VertexID;
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes and assign to path-function globals
`).concat(o.fetchCode,`
`).concat(o.varyingAssignments,`

  // Fetch node shape attributes for both endpoints
`).concat(c.fetchCode,`
`).concat(c.varyingAssignments,`
`).concat(f.fetchCode,`
`).concat(f.varyingAssignments,`

  // Fetch node geometry (texel 0) and rotation flags (texel 1).
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
  float a_sourceSize = srcNodeData.z;
  float a_targetSize = tgtNodeData.z;
  float a_sourceShapeId = srcNodeData.w;
  float a_targetShapeId = tgtNodeData.w;
  // Per-node rotation alignment (0 = viewport, 1 = graph), for boundary clamping.
  float a_sourceRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx).r;
  float a_targetRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx).r;

  v_sourceNodeSize = a_sourceSize;
  v_targetNodeSize = a_targetSize;

  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = `).concat(le(x),`;

  // Thickness in WebGL units (needed to compute clamping margin and extremity lengths)
  float pixelsThickness = max(a_thickness, u_minEdgeThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // SDF clamping: find where the edge body meets the node boundaries. Always
  // searched (ungated) so labels get a true boundary clamp; the body re-applies
  // its extremity gating in-shader.
`).concat(g,`
  float tStart = queryFindSourceClampT(pathId, a_source, a_sourceSize, int(a_sourceShapeId), a_sourceRotateAlign, a_target, 0.0);
`).concat(v,`
  float tEnd = queryFindTargetClampT(pathId, a_source, a_target, a_targetSize, int(a_targetShapeId), a_targetRotateAlign, 0.0);

  // straightenFactor (frame .z) is consumed only by the body, which runs to the
  // node center when an extremity is absent. Derive the straightening math from
  // these gated clamps \u2014 not the ungated boundary ones above \u2014 so it matches the
  // geometry it drives. The ungated tStart/tEnd remain what labels read.
  float bodyTStart = tailLengthRatio > 0.0 ? tStart : 0.0;
  float bodyTEnd = headLengthRatio > 0.0 ? tEnd : 1.0;

  // Path length and zone boundaries (needed for straightening check)
  float pathLength = queryPathLength(pathId, a_source, a_target);
  float visibleLength = pathLength * (bodyTEnd - bodyTStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  float tTailEnd = bodyTStart + tailLengthT;
  float tHeadStart = bodyTEnd - headLengthT;
  if (tTailEnd > tHeadStart) {
    float mid = (bodyTStart + bodyTEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Straighten factor: blend toward straight line when path twists in extremity zones
  float straightenFactor = 0.0;
  {
    float maxDeviation = 0.0;
    if (tailLengthT > 0.0001) {
      vec2 tailTang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
      vec2 tailChord = queryPathPosition(pathId, bodyTStart, a_source, a_target)
                     - queryPathPosition(pathId, tTailEnd, a_source, a_target);
      float tailChordLen = length(tailChord);
      if (tailChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(-tailTang, tailChord / tailChordLen));
      }
    }
    if (headLengthT > 0.0001) {
      vec2 headTang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
      vec2 headChord = queryPathPosition(pathId, bodyTEnd, a_source, a_target)
                     - queryPathPosition(pathId, tHeadStart, a_source, a_target);
      float headChordLen = length(headChord);
      if (headChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(headTang, headChord / headChordLen));
      }
    }
    straightenFactor = smoothstep(0.035, 0.5, maxDeviation);
  }

  // When straightening, blend the ungated tStart/tEnd (the label-facing clamps)
  // toward straight-line clamp positions.
  if (straightenFactor > 0.001) {
    if (tailLengthRatio > 0.0) {
`).concat(g,`
      float srcExtent = a_sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
      float srcEffective = 1.0 - u_correctionRatio / srcExtent;
      float srcCa = u_cameraAngle * (1.0 - a_sourceRotateAlign);
      mat2 srcRot = mat2(cos(srcCa), -sin(srcCa), sin(srcCa), cos(srcCa));
      float lo = 0.0, hi = 0.5;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = srcRot * ((pos - a_source) / srcExtent);
        float sdf = querySDF(int(a_sourceShapeId), localPos, srcEffective);
        if (sdf < 0.0) lo = mid; else hi = mid;
      }
      tStart = mix(tStart, (lo + hi) * 0.5, straightenFactor);
    }
    if (headLengthRatio > 0.0) {
`).concat(v,`
      float tgtExtent = a_targetSize * u_correctionRatio / u_sizeRatio * 2.0;
      float tgtEffective = 1.0 - u_correctionRatio / tgtExtent;
      float tgtCa = u_cameraAngle * (1.0 - a_targetRotateAlign);
      mat2 tgtRot = mat2(cos(tgtCa), -sin(tgtCa), sin(tgtCa), cos(tgtCa));
      float lo = 0.5, hi = 1.0;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = tgtRot * ((pos - a_target) / tgtExtent);
        float sdf = querySDF(int(a_targetShapeId), localPos, tgtEffective);
        if (sdf < 0.0) hi = mid; else lo = mid;
      }
      tEnd = mix(tEnd, (lo + hi) * 0.5, straightenFactor);
    }
  }

  v_clamp = vec4(tStart, tEnd, straightenFactor, pathLength);

  // Scatter this point to its edge's texel center in the frame texture.
  float x = mod(float(edgeIdx), u_frameTextureWidth);
  float y = floor(float(edgeIdx) / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`);return _}var Yn=0,Gi=1,Kn=2;function mu(a,n,e){var t=[];e&&(t.push([Yn,0,-1],[Yn,0,1]),t.push([Yn,1,-1],[Yn,1,1]));for(var r=0;r<=a;r++){var i=r/a;t.push([Gi,i,-1],[Gi,i,1])}return n&&(t.push([Kn,0,-1],[Kn,0,1]),t.push([Kn,1,-1],[Kn,1,1])),{data:t,attributes:[{name:"a_zone",size:1,type:rn},{name:"a_zoneT",size:1,type:rn},{name:"a_side",size:1,type:rn}],verticesPerEdge:t.length}}function bu(a,n,e,t){var r=Re([].concat(V(a),V(e))),i=dn(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture"]),s=new Set,l=[],d=function(p){!o.has(p.name)&&!s.has(p.name)&&(s.add(p.name),l.push("uniform ".concat(p.type," ").concat(p.name,";")))};a.forEach(function(b){return b.uniforms.forEach(d)}),n.forEach(function(b){return b.uniforms.forEach(d)}),e.forEach(function(b){return b.uniforms.forEach(d)});var u=t.map(function(b){var p=b.size===1?"float":"vec".concat(b.size);return"in ".concat(p," ").concat(b.name,";")}).join(`
`),c=n.map(function(b){return le(b.widthFactor)}).join(", "),f=Math.max.apply(Math,V(a.map(function(b){return b.minBodyLengthRatio||0}))),h=e.some(function(b){return b.needsNodeColors}),g=a.some(function(b){return b.needsNodeSize}),v=`#version 300 es

// Constant attributes (per vertex)
`.concat(u,`

// Per-edge attributes
// Edge data (source/target indices, thickness, extremity ratios, path/extremity IDs)
// is fetched from edge data texture via edge index
in float a_edgeIndex;   // Index into edge data texture
in vec4 a_color;        // Edge color
in vec4 a_id;           // Edge ID for picking
in float a_opacity;     // Edge opacity

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture;
uniform int u_edgeFrameTextureWidth;

// Edge path attribute texture uniforms
`).concat(i.uniformDeclarations,`

// Custom uniforms
`).concat(l.join(`
`),`

// Standard varyings
out vec4 v_color;
out float v_opacity;
out vec4 v_id;
out float v_thickness;       // Edge body thickness (in consistent units)
out float v_t;
out float v_tStart;
out float v_tEnd;
out float v_side;
out float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
out vec2 v_source;
out vec2 v_target;
out float v_edgeLength;
`).concat(g?`
out float v_sourceNodeSize;  // Source node size (mirrored in labels/generator.ts as plain float)
out float v_targetNodeSize;  // Target node size (mirrored in labels/generator.ts as plain float)`:"",`
`).concat(h?`
out vec4 v_sourceColor;
out vec4 v_targetColor;`:"",`
// Zone varyings
out float v_zone;            // 0=tail, 1=body, 2=head
out float v_zoneT;           // Position within zone [0,1]
out float v_headLengthRatio; // Head length as ratio of thickness
out float v_tailLengthRatio; // Tail length as ratio of thickness
out float v_headWidthRatio;  // Head width factor
out float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat out int v_pathId;
flat out int v_headId;
flat out int v_tailId;

// Path/layer attribute varyings (fetched from edge attribute texture)
`).concat(i.vertexVaryingDeclarations,`

const float bias = 255.0 / 254.0;

// Width factor array for extremities (shared pool for head/tail)
const float EXTREMITY_WIDTH_FACTORS[`).concat(n.length,"] = float[](").concat(c,`);

// All path functions
`).concat(nr(a),`

// Path selector functions
`).concat(ar(a),`

// Node-data fetch helper (geometry texel of the two-texel node stride)
`).concat(Ge,`
`).concat(h?Ki:"",`
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
`).concat(ut,`

void main() {
  // Fetch edge data from edge texture (2 texels per edge)
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, (headId << 4) | tailId
  int edgeIdx = int(a_edgeIndex);

  // Hidden edges are flagged with a negative row by EdgeProgram.process(). Push
  // the whole primitive outside the clip volume: every vertex lands at the same
  // out-of-range position, so it is fully clipped and rasterizes nothing \u2014
  // neither to the frame buffer nor to the picking buffer.
  if (edgeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    return;
  }

  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  // edgeData0.w is now reserved (curvature moved to path attribute texture)
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes from edge attribute texture
`).concat(i.fetchCode,`

  // Assign path/layer attribute varyings
`).concat(i.varyingAssignments,`

  // Fetch source and target node geometry (texel 0 of the two-texel node stride)
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
`).concat(g?`
  // Assign node size varyings early (path functions like loops need them during clamping)
  v_sourceNodeSize = srcNodeData.z;
  v_targetNodeSize = tgtNodeData.z;`:"",`
`).concat(h?`
  v_sourceColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  v_targetColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);`:"",`

  // Convert thickness to WebGL units
  float minThickness = u_minEdgeThickness;
  float pixelsThickness = max(a_thickness, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Extremity parameters from ID lookups (shared pool)
  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = `).concat(le(f),`;

  // Per-edge values from the frame-pass texture (read by edge index).
  // tStart/tEnd are the ungated boundary clamps: re-apply the body's extremity
  // gating here (no extremity \u2192 body runs to the node center, 0/1).
  vec4 frameClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  float tStart           = a_tailLengthRatio > 0.0 ? frameClamp.x : 0.0;
  float tEnd             = a_headLengthRatio > 0.0 ? frameClamp.y : 1.0;
  float straightenFactor = frameClamp.z;
  float pathLength       = frameClamp.w;

  // Anti-aliasing width (~1 pixel, normalized by thickness)
  float antialiasingWidth = u_correctionRatio / webGLThickness;

  float visibleLength = pathLength * (tEnd - tStart);

  // Compute extremity lengths in world units
  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  // Handle short edges: scale down extremities if needed
  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  // Convert lengths to t-values
  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  // Zone boundaries in t-space
  float tTailEnd = tStart + tailLengthT;
  float tHeadStart = tEnd - headLengthT;

  // Ensure body has non-negative length
  if (tTailEnd > tHeadStart) {
    float mid = (tStart + tEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Convert to webGL units for geometry expansion
  float aaWidthWebGL = antialiasingWidth * webGLThickness;

  // Extra geometry width for picking padding (0 in visual mode)
  #ifdef PICKING_MODE
    float pickingPaddingWebGL = u_pickingPadding * u_correctionRatio;
  #else
    float pickingPaddingWebGL = 0.0;
  #endif

  // Straight-line direction and normal (for blending when straightenFactor > 0)
  vec2 straightDir = length(a_target - a_source) > 0.0001
    ? normalize(a_target - a_source) : vec2(1.0, 0.0);
  vec2 straightNormal = vec2(-straightDir.y, straightDir.x);

  // Zone-based vertex processing using path selectors
  vec2 position;
  vec2 normal;
  float t;
  float zone = a_zone;
  float zoneT = a_zoneT;
  float side = a_side;

  // Scaled extremity width factors (geometry must be at least as wide as body)
  float scaledTailWidth = max(tailWidthFactor * extremityScale, 1.0);
  float scaledHeadWidth = max(headWidthFactor * extremityScale, 1.0);

  if (zone < 0.5) {
    // TAIL ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tStart, a_source, a_target),
                         queryPathPosition(pathId, tTailEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tStart, tTailEnd, zoneT);

  } else if (zone < 1.5) {
    // BODY ZONE: follows path curvature with width = 1.0
    t = mix(tTailEnd, tHeadStart, zoneT);
    normal = queryPathNormal(pathId, t, a_source, a_target);
    float halfWidth = webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = queryPathPosition(pathId, t, a_source, a_target) + normal * side * halfWidth;

  } else {
    // HEAD ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tHeadStart, a_source, a_target),
                         queryPathPosition(pathId, tEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tHeadStart, tEnd, zoneT);
  }

  // Blend toward straight line based on path twist in extremity zones
  if (straightenFactor > 0.001) {
    float zoneWidth = zone < 0.5 ? webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      zone < 1.5 ? webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    vec2 straightPos = mix(a_source, a_target, t) + straightNormal * side * zoneWidth;
    position = mix(position, straightPos, straightenFactor);
  }

  gl_Position = vec4((u_matrix * vec3(position, 1.0)).xy, 0.0, 1.0);

  // Pass varyings to fragment shader
  v_color = a_color;
  v_color.a *= bias;
  v_opacity = a_opacity;
  v_id = a_id;
  v_thickness = webGLThickness;
  v_t = t;
  v_tStart = tStart;
  v_tEnd = tEnd;
  v_side = side;
  v_antialiasingWidth = antialiasingWidth;
  v_source = a_source;
  v_target = a_target;
  v_edgeLength = pathLength;

  // Zone varyings
  v_zone = zone;
  v_zoneT = zoneT;
  v_headLengthRatio = headLengthRatio * extremityScale;
  v_tailLengthRatio = tailLengthRatio * extremityScale;
  // Scale extremity width proportionally with length when crushed
  v_headWidthRatio = headWidthFactor * extremityScale;
  v_tailWidthRatio = tailWidthFactor * extremityScale;

  // Multi-path varyings
  v_pathId = pathId;
  v_headId = headId;
  v_tailId = tailId;
}
`);return v}function yu(a,n,e,t){var r=Re([].concat(V(a),V(e))),i=dn(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding"]),s=new Set,l=[],d=function(m){!o.has(m.name)&&!s.has(m.name)&&(s.add(m.name),l.push("uniform ".concat(m.type," ").concat(m.name,";")))};a.forEach(function(p){return p.uniforms.forEach(d)}),n.forEach(function(p){return p.uniforms.forEach(d)}),e.forEach(function(p){return p.uniforms.forEach(d)});var u=n.map(function(p){var m;return le((m=p.baseRatio)!==null&&m!==void 0?m:.5)}).join(", "),c=function(m){var y,x;return n.length>1?"EXTREMITY_BASE_RATIOS[".concat(m,"]"):le((y=(x=n[0])===null||x===void 0?void 0:x.baseRatio)!==null&&y!==void 0?y:.5)},f=n.some(function(p){return ke(p.length)?!0:p.length>0}),h=e.some(function(p){return p.needsNodeColors}),g=a.some(function(p){return p.needsNodeSize}),v=e.map(function(p,m){return"  // Layer ".concat(m+1,": ").concat(p.name,`
  color = blendOver(color, layer_`).concat(p.name,"(context));")}).join(`

`),b=`#version 300 es
precision highp float;

// Standard varyings
in vec4 v_color;
in float v_opacity;
in vec4 v_id;
in float v_thickness;       // Edge body thickness
in float v_t;
in float v_tStart;
in float v_tEnd;
in float v_side;
in float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
in vec2 v_source;
in vec2 v_target;
in float v_edgeLength;
`.concat(g?`
in float v_sourceNodeSize;   // Source node size (mirrored in labels/generator.ts as plain float)
in float v_targetNodeSize;   // Target node size (mirrored in labels/generator.ts as plain float)`:"",`
`).concat(h?`
in vec4 v_sourceColor;
in vec4 v_targetColor;`:"",`
// Zone varyings
in float v_zone;            // 0=tail, 1=body, 2=head
in float v_zoneT;           // Position within zone [0,1]
in float v_headLengthRatio; // Head length as ratio of thickness (scaled for short edges)
in float v_tailLengthRatio; // Tail length as ratio of thickness (scaled for short edges)
in float v_headWidthRatio;  // Head width factor
in float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat in int v_pathId;
flat in int v_headId;
flat in int v_tailId;

// Path/layer attribute varyings (from vertex shader texture fetch)
`).concat(i.fragmentVaryingDeclarations,`

// Standard uniforms (needed by some path types)
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Custom uniforms
`).concat(l.join(`
`),`

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

`).concat(n.length>1?`// Base ratio array for extremities (shared pool for head/tail)
const float EXTREMITY_BASE_RATIOS[`.concat(n.length,"] = float[](").concat(u,");"):"",`

// EdgeContext struct
struct EdgeContext {
  float t;                   // Position along path [0, 1]
  float sdf;                 // Signed distance from centerline
  vec2 position;             // World position
  vec2 tangent;              // Path tangent
  vec2 normal;               // Path normal
  float thickness;           // Edge thickness
  float aaWidth;             // Anti-aliasing width
  float edgeLength;          // Total path length
  float tStart;              // Clamped start t
  float tEnd;                // Clamped end t
  float distanceFromSource;  // Arc distance from source
  float distanceToTarget;    // Arc distance to target
};

EdgeContext context;

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// All path functions
`).concat(nr(a),`

// Path selector functions
`).concat(ar(a),`

// All extremity functions
`).concat(cu(n),`

// Extremity SDF selector (shared pool for head/tail)
`).concat(gu(n),`

// Layer functions
`).concat(e.map(function(p){return p.glsl}).join(`

`),`

// Helper: Compute arc length using path selector
float computeArcLengthMulti(int pathId, float t0, float t1, vec2 source, vec2 target, int samples) {
  float arcLen = 0.0;
  vec2 prev = queryPathPosition(pathId, t0, source, target);
  for (int i = 1; i <= samples; i++) {
    float t = t0 + (t1 - t0) * float(i) / float(samples);
    vec2 curr = queryPathPosition(pathId, t, source, target);
    arcLen += length(curr - prev);
    prev = curr;
  }
  return arcLen;
}

void main() {
  // Compute normalized t within visible edge (0 = start, 1 = end)
  float tNorm = (v_t - v_tStart) / max(v_tEnd - v_tStart, 0.0001);

  // Edge body half-thickness
  float halfThickness = v_thickness * 0.5;

  // Convert normalized AA width to webGL units (~1 pixel)
  float aaWidthWebGL = v_antialiasingWidth * v_thickness;

  // Distance from centerline based on v_side interpolation
  float zoneWidthFactor = v_zone < 0.5 ? v_tailWidthRatio :
                          v_zone < 1.5 ? 1.0 :
                          v_headWidthRatio;
  // In PICKING_MODE, inflate halfGeometryWidth to match the inflated vertex geometry
  #ifdef PICKING_MODE
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL + u_pickingPadding * aaWidthWebGL;
  #else
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL;
  #endif
  float distFromCenter = abs(v_side) * halfGeometryWidth;

  // Populate EdgeContext (for layer functions)
  context.t = tNorm;
  context.sdf = distFromCenter - halfThickness;
  context.position = queryPathPosition(v_pathId, v_t, v_source, v_target);
  context.tangent = queryPathTangent(v_pathId, v_t, v_source, v_target);
  context.normal = vec2(-context.tangent.y, context.tangent.x);
  context.thickness = v_thickness;
  context.aaWidth = aaWidthWebGL;
  context.edgeLength = v_edgeLength;
  context.tStart = v_tStart;
  context.tEnd = v_tEnd;

  // Compute arc distances
  float visibleLength = v_edgeLength * (v_tEnd - v_tStart);
  float pathT = v_t;
  float pathTNorm = tNorm;
`).concat(a.every(function(p){return p.linearParameterization})?`  // All paths have linear parameterization: t maps directly to arc distance
  context.distanceFromSource = pathTNorm * visibleLength;
  context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;`:a.every(function(p){return!p.linearParameterization})?`  // No paths have linear parameterization: use numerical integration
  context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
  context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);`:`  // Mixed parameterization: use analytical for linear paths, numerical for others
  if (`.concat(a.filter(function(p){return p.linearParameterization}).map(function(p){return"v_pathId == ".concat(a.indexOf(p))}).join(" || "),`) {
    context.distanceFromSource = pathTNorm * visibleLength;
    context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;
  } else {
    context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
    context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);
  }`),`

  // Compute SDF based on zone using extremity selector (shared pool)
  float bodySDF = distFromCenter - halfThickness;
  float finalSDF;

`).concat(f?`  // Base ratios, from baseRatioLookup
  float headBaseRatio = `.concat(c("v_headId"),`;
  float tailBaseRatio = `).concat(c("v_tailId"),`;

  if (v_zone < 0.5) {
    // TAIL ZONE: v_zoneT goes 0 (tip) to 1 (base)
    vec2 uv = vec2((1.0 - v_zoneT) * v_tailLengthRatio, v_side * v_tailWidthRatio * 0.5);
    float tailSDF = queryExtremitySDF(v_tailId, uv, v_tailLengthRatio, v_tailWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT > 1 - baseRatio)
    if (v_zoneT > 1.0 - tailBaseRatio) {
      finalSDF = min(tailSDF, bodySDF);
    } else {
      finalSDF = tailSDF;
    }
  } else if (v_zone < 1.5) {
    // BODY ZONE: distance from centerline
    finalSDF = bodySDF;
  } else {
    // HEAD ZONE: v_zoneT goes 0 (base) to 1 (tip)
    vec2 uv = vec2(v_zoneT * v_headLengthRatio, v_side * v_headWidthRatio * 0.5);
    float headSDF = queryExtremitySDF(v_headId, uv, v_headLengthRatio, v_headWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT < baseRatio)
    if (v_zoneT < headBaseRatio) {
      finalSDF = min(headSDF, bodySDF);
    } else {
      finalSDF = headSDF;
    }
  }`):`  // No extremity draws tail/head geometry, so every vertex is body zone.
  finalSDF = bodySDF;`,`

  #ifdef PICKING_MODE
    // Picking pass: output edge ID for pixels within the picking area
    if (finalSDF > u_pickingPadding * aaWidthWebGL) discard;
    fragColor = v_id;
  #else
`).concat(t?`    // Visual pass: anti-aliased edge with layers, edge opacity applied once
    float alpha = smoothstep(aaWidthWebGL, -aaWidthWebGL, finalSDF) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) edge with layers, edge opacity applied once
    float alpha = (finalSDF < 0.0 ? 1.0 : 0.0) * v_opacity;`,`
    if (alpha < 0.01) discard;

    // Apply layers sequentially with "over" compositing
    vec4 color = vec4(0.0);

`).concat(v,`

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`);return b}function xu(a,n,e){var t=ke(n.length)?!0:n.length>0,r=ke(e.length)?!0:e.length>0;if(a.generateConstantData){var i=a.generateConstantData();return{data:i.data,attributes:i.attributes,verticesPerEdge:i.verticesPerEdge}}return mu(a.segments,t,r)}function Xa(a){var n,e=bo(a),t=e.paths,r=e.extremities,i=e.layers,o=(n=a.antialias)!==null&&n!==void 0?n:!0,s=new Map,l=new Map,d=new Map,u=M(t),c;try{for(u.s();!(c=u.n()).done;){var f=c.value,h=M(r),g;try{for(h.s();!(g=h.n()).done;){var v=g.value,b=M(r),p;try{for(b.s();!(p=b.n()).done;){var m=p.value,y="".concat(f.name,":").concat(v.name,":").concat(m.name),x=xu(f,v,m);s.set(y,x.verticesPerEdge),l.set(y,x.data);var _=M(x.attributes),T;try{for(_.s();!(T=_.n()).done;){var A=T.value;d.has(A.name)||d.set(A.name,A)}}catch(X){_.e(X)}finally{_.f()}}}catch(X){b.e(X)}finally{b.f()}}}catch(X){h.e(X)}finally{h.f()}}}catch(X){u.e(X)}finally{u.f()}var E=Array.from(d.values()),R={};E.forEach(function(X,Q){R[X.name]=Q});var C=0,k="",D=M(s),F;try{for(D.s();!(F=D.n()).done;){var L=J(F.value,2),G=L[0],N=L[1];N>C&&(C=N,k=G)}}catch(X){D.e(X)}finally{D.f()}var z=l.get(k)||[],P=k.split(":"),w=J(P,1),I=w[0],H=t.find(function(X){return X.name===I}),U=[];H!=null&&H.generateConstantData?U=H.generateConstantData().attributes:U=[{name:"a_zone"},{name:"a_zoneT"},{name:"a_side"}];var $=z.map(function(X){var Q=new Array(E.length).fill(0);return U.forEach(function(ue,xe){var Le=R[ue.name];Le!==void 0&&xe<X.length&&(Q[Le]=X[xe])}),Q});return{vertexShader:bu(t,r,i,E),fragmentShader:yu(t,r,i,o),uniforms:uu(t,r,i),attributes:_u(),verticesPerEdge:C,constantData:$,constantAttributes:E,vertexCountsPerCombination:s,constantDataPerCombination:l}}function _u(a,n,e){return[{name:"a_edgeIndex",size:1,type:rn},{name:"a_color",size:4,type:Ni,normalized:!0},{name:"a_id",size:4,type:Ni,normalized:!0},{name:"a_opacity",size:1,type:rn}]}var Tu=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,xo=(function(){function a(n,e){Y(this,a),S(this,"uniformLocations",{});var t=e.paths,r=e.extremities,i=e.layers,o=e.nodeShapes,s=e.nodeLayers;this.gl=n,this.hasAttributeData=Re([].concat(V(t),V(i))).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(Nt(o,s).offsets).length>0,this.vertexShader=Jn(n,vu(t,r,i,o,s)),this.fragmentShader=ea(n,Tu),this.program=ta(n,[this.vertexShader,this.fragmentShader]);var l=new Set;this.customUniforms=[];for(var d=0,u=[].concat(V(t),V(r));d<u.length;d++){var c=u[d],f=M(c.uniforms),h;try{for(f.s();!(h=f.n()).done;){var g=h.value;l.has(g.name)||(l.add(g.name),this.customUniforms.push(g))}}catch(y){f.e(y)}finally{f.f()}}var v=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_minEdgeThickness","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode","u_frameTextureWidth","u_frameTextureHeight"].concat(V(this.customUniforms.map(function(y){return y.name}))),b=M(v),p;try{for(b.s();!(p=b.n()).done;){var m=p.value;this.uniformLocations[m]=n.getUniformLocation(this.program,m)}}catch(y){b.e(y)}finally{b.f()}this.vao=n.createVertexArray()}return K(a,[{key:"run",value:function(e,t,r,i,o){if(r!==0){var s=this.gl,l=this.uniformLocations;s.useProgram(this.program),s.bindVertexArray(this.vao),l.u_sizeRatio&&s.uniform1f(l.u_sizeRatio,e.sizeRatio),l.u_correctionRatio&&s.uniform1f(l.u_correctionRatio,e.correctionRatio),l.u_cameraAngle&&s.uniform1f(l.u_cameraAngle,e.cameraAngle),l.u_minEdgeThickness&&s.uniform1f(l.u_minEdgeThickness,e.minEdgeThickness),l.u_nodeDataTexture&&s.uniform1i(l.u_nodeDataTexture,e.nodeDataTextureUnit),l.u_nodeDataTextureWidth&&s.uniform1i(l.u_nodeDataTextureWidth,e.nodeDataTextureWidth),l.u_edgeDataTexture&&s.uniform1i(l.u_edgeDataTexture,e.edgeDataTextureUnit),l.u_edgeDataTextureWidth&&s.uniform1i(l.u_edgeDataTextureWidth,e.edgeDataTextureWidth),l.u_frameTextureWidth&&s.uniform1f(l.u_frameTextureWidth,t.getTextureWidth()),l.u_frameTextureHeight&&s.uniform1f(l.u_frameTextureHeight,t.getTextureHeight()),this.hasAttributeData&&i&&(i.bind(Qe),l.u_edgeAttributeTexture&&s.uniform1i(l.u_edgeAttributeTexture,Qe),l.u_edgeAttributeTextureWidth&&s.uniform1i(l.u_edgeAttributeTextureWidth,i.getTextureWidth()),l.u_edgeAttributeTexelsPerEdge&&s.uniform1i(l.u_edgeAttributeTexelsPerEdge,i.getTexelsPerItem())),this.hasNodeAttributeData&&o&&(o.bind(Ke),l.u_layerAttributeTexture&&s.uniform1i(l.u_layerAttributeTexture,Ke),l.u_layerAttributeTextureWidth&&s.uniform1i(l.u_layerAttributeTextureWidth,o.getTextureWidth()),l.u_layerAttributeTexelsPerNode&&s.uniform1i(l.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var d=M(this.customUniforms),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;Qa(s,this.uniformLocations[c.name],c)}}catch(f){d.e(f)}finally{d.f()}t.bindAsRenderTarget(),s.disable(s.BLEND),s.disable(s.DEPTH_TEST),s.drawArrays(s.POINTS,0,r),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindVertexArray(null)}}},{key:"kill",value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteVertexArray(this.vao)}}])})();function nn(a,n,e,t,r,i){if(a.length===1)return"".concat(t," ").concat(n,"(int pathId, ").concat(r,`) {
  return path_`).concat(a[0].name,"_").concat(e,"(").concat(i,`);
}`);var o=a.map(function(s,l){return"    case ".concat(l,": return path_").concat(s.name,"_").concat(e,"(").concat(i,");")}).join(`
`);return"".concat(t," ").concat(n,"(int pathId, ").concat(r,`) {
  switch (pathId) {
`).concat(o,`
    default: return path_`).concat(a[0].name,"_").concat(e,"(").concat(i,`);
  }
}`)}var Su=`
vec3 computeEdgeLabelBodyBounds(
  float tStart, float tEnd, float pathLength,
  float webGLThickness, float headLengthRatio, float tailLengthRatio
) {
  float visibleLength = pathLength * (tEnd - tStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float totalNeededLength = headLength + tailLength;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    float extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float bodyStartDist = tStart * pathLength + tailLength;
  float bodyEndDist = tEnd * pathLength - headLength;
  return vec3(bodyStartDist, bodyEndDist, max(bodyEndDist - bodyStartDist, 0.0));
}
`;function Eu(a,n){var e=le(a),t=le(n);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < `.concat(e,`) return 0.0;
  if (ratio < `).concat(t,") return (ratio - ").concat(e,") / (").concat(t," - ").concat(e,`);
  return 1.0;
}
`)}var Au=`
float computeEdgeLabelPerpOffset(
  float positionMode,
  float halfThickness, float marginWebGL, float halfTextHeight,
  vec2 source, vec2 target, mat3 matrix
) {
  float magnitude = halfThickness + marginWebGL + halfTextHeight;
  if (positionMode == 1.0) return magnitude;
  if (positionMode == 2.0) return -magnitude;
  if (positionMode == 3.0) {
    vec3 sc = matrix * vec3(source, 1.0);
    vec3 tc = matrix * vec3(target, 1.0);
    return sc.x < tc.x ? magnitude : -magnitude;
  }
  return 0.0;
}
`;function _o(a){var n=a.paths,e=a.minVisibilityThreshold,t=a.fullVisibilityThreshold,r=n.some(function(s){return s.hasSharpCorners}),i=n.map(function(s){return"// --- Path: ".concat(s.name,` ---
`).concat(s.glsl,`

// Tangent/normal functions: analytical if provided, otherwise numerical
`).concat(s.analyticalTangentGlsl||vo(s.name),`

// Auto-generated fallbacks for any missing path functions
`).concat(mo(s.name,s.glsl),`

// Corner skip helpers (for paths with sharp corners like step/taxi)
`).concat(s.cornerSkipGlsl||"",`
`)}).join(`
`),o=r?`// Corner function selectors (only some paths have sharp corners)
vec2 queryGetCornerTs(int pathId, vec2 source, vec2 target) {
  switch (pathId) {
`.concat(n.map(function(s,l){return s.hasSharpCorners?"    case ".concat(l,": return path_").concat(s.name,"_getCornerTs(source, target);"):"    case ".concat(l,": return vec2(-1.0, -1.0); // No corners for ").concat(s.name)}).join(`
`),`
    default: return vec2(-1.0, -1.0);
  }
}

vec2 queryGetCornerConcavity(int pathId, vec2 source, vec2 target, float perpOffset) {
  switch (pathId) {
`).concat(n.map(function(s,l){return s.hasSharpCorners?"    case ".concat(l,": return path_").concat(s.name,"_getCornerConcavity(source, target, perpOffset);"):"    case ".concat(l,": return vec2(0.0, 0.0); // No corners for ").concat(s.name)}).join(`
`),`
    default: return vec2(0.0, 0.0);
  }
}`):"";return`
// ============================================================================
// Node data fetch (geometry texel) and per-edge clamp fetch (edge-frame texture)
// ============================================================================

`.concat(Ge,`
`).concat(ut,`

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

`).concat(i,`

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

`).concat(nn(n,"queryPathPosition","position","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(nn(n,"queryPathTangent","tangent","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(nn(n,"queryPathNormal","normal","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(nn(n,"queryPathLength","length","float","vec2 source, vec2 target","source, target"),`

`).concat(nn(n,"queryPathTAtDistance","t_at_distance","float","float dist, vec2 source, vec2 target","dist, source, target"),`

`).concat(o,`

// ============================================================================
// Shared helpers (body bounds, alpha ramp, perpendicular offset)
// ============================================================================

`).concat(Su,`
`).concat(Eu(e,t),`
`).concat(Au,`
`)}var Ru=Ne.fontSize,Du=new Map,To=24,zi=(To+1)*2;function wu(a){var n=a.paths,e=a.fontSizeMode,t=a.headLengthRatio,r=a.tailLengthRatio,i=a.minVisibilityThreshold,o=a.fullVisibilityThreshold,s=e==="scaled",l=Ie(),d=Re([].concat(V(n),[l])),u=dn(d),c=`#version 300 es

// Per-instance attributes
in float a_edgeIndex;
in float a_edgeAttrIndex;
in float a_baseFontSize;
in float a_totalTextWidth;
in float a_positionMode;
in float a_margin;
in float a_padding;
in vec4 a_color;
in vec4 a_id;

// Per-vertex (constant) attribute: strip vertex index
in float a_vertexIndex;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
`.concat(s?"uniform float u_zoomSizeRatio;":"",`

`).concat(u.uniformDeclarations,`

out vec4 v_color;
out vec4 v_id;
out float v_alphaModifier;

const float ATLAS_FONT_SIZE = `).concat(le(Ru),`;
const float HEAD_RATIO = `).concat(le(t),`;
const float TAIL_RATIO = `).concat(le(r),`;
const int RIBBON_SEGMENTS = `).concat(To,`;

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
`).concat(u.vertexVaryingDeclarations.replace(/out /g,""),`

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
`).concat(_o({paths:n,minVisibilityThreshold:i,fullVisibilityThreshold:o}),`

void main() {
  int vIdx = int(a_vertexIndex);
  int pairIdx = vIdx / 2;
  int side = vIdx - pairIdx * 2; // 0 = left/bottom, 1 = right/top

  // --- Fetch edge data (2 texels per edge) ---
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 e0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 e1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, e0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, e1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  int pathId = int(edgeData1.z);

  // --- Fetch path attributes (curvature, etc.) ---
  {
    int edgeIdx = int(a_edgeAttrIndex);
`).concat(u.fetchCode,`
`).concat(u.varyingAssignments,`
  }

  // --- Fetch node data: geometry (texel 0) + rotation flags (texel 1) ---
  vec4 srcN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcN.xy;
  vec2 target = tgtN.xy;
  float sourceSize = srcN.z;
  float targetSize = tgtN.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;

  // --- Pixel-to-graph conversion (fixed font mode) ---
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // --- Body bounds (shared with edge label shader) ---
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, HEAD_RATIO, TAIL_RATIO
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // --- Text dimensions ---
  float baseFontSize = a_baseFontSize;
  `).concat(s?`float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  float textWidthWebGL = a_totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float marginWebGL = a_margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  float textWidthWebGL = a_totalTextWidth * fontScale * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;
  float marginWebGL = a_margin * pixelToGraph;`,`
  float paddingWebGL = a_padding * pixelToGraph;

  // --- Alpha modifier (shared with edge label shader) ---
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);
  if (alphaModifier <= 0.0 || textWidthWebGL <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    v_alphaModifier = 0.0;
    return;
  }

  // --- Perpendicular offset (shared with edge label shader) ---
  float halfThickness = webGLThickness * 0.5;
  float perpOffset = computeEdgeLabelPerpOffset(
    a_positionMode, halfThickness, marginWebGL, halfTextHeight, source, target, u_matrix
  );

  // --- Ribbon span (clipped to body) ---
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;
  float halfTextWebGL = textWidthWebGL * 0.5;
  float labelStartDist = max(bodyCenterDist - halfTextWebGL, bodyStartDist);
  float labelEndDist = min(bodyCenterDist + halfTextWebGL, bodyEndDist);

  // Sample centerline at this pair, then apply perpendicular offset.
  // The ribbon follows the centerline path (simple & robust); for curved edges
  // this closely matches the offset path the characters sit on.
  float u = float(pairIdx) / float(RIBBON_SEGMENTS);
  float arcDist = mix(labelStartDist, labelEndDist, u);
  float t = queryPathTAtDistance(pathId, arcDist, source, target);
  vec2 pos = queryPathPosition(pathId, t, source, target);
  vec2 tan = queryPathTangent(pathId, t, source, target);
  vec2 perp = vec2(-tan.y, tan.x);

  vec2 centerPos = pos + perp * perpOffset;

  float halfRibbon = halfTextHeight + paddingWebGL;
  float sideSign = side == 0 ? -1.0 : 1.0;
  vec2 ribbonPos = centerPos + perp * (sideSign * halfRibbon);

  vec3 clipPos = u_matrix * vec3(ribbonPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  v_color = a_color;
  v_id = a_id;
  v_alphaModifier = alphaModifier;
}
`);return c}var Lu=`#version 300 es
precision highp float;

in vec4 v_color;
in vec4 v_id;
in float v_alphaModifier;

out vec4 fragColor;

void main() {
#ifdef PICKING_MODE
  if (v_alphaModifier <= 0.0) discard;
  fragColor = v_id;
#else
  float alpha = v_color.a * v_alphaModifier;
  if (alpha <= 0.0) discard;
  fragColor = vec4(v_color.rgb * alpha, alpha);
#endif
}
`;function So(a,n,e,t){var r=t.shaderConfig,i=r.paths,o=r.fontSizeMode;if(i.length===0)throw new Error("createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path");var s=Ie(),l=Re([].concat(V(i),[s])),d=oa([].concat(V(i),[s]),l),u=wu(r),c=(function(f){function h(g,v,b){var p;return Y(this,h),p=oe(this,h,[g,v,b]),S(p,"totalCount",0),S(p,"bufferCapacity",0),S(p,"edgeAttributeTexture",null),p.edgeAttributeTexture=new ia(g,l),p.packedAttributeData=new Float32Array(l.floatsPerItem),p}return se(h,f),K(h,[{key:"getDefinition",value:function(){for(var v=WebGL2RenderingContext,b=v.FLOAT,p=v.UNSIGNED_BYTE,m=v.TRIANGLE_STRIP,y=[],x=0;x<zi;x++)y.push([x]);var _=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_resolution","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth"];return o==="scaled"&&_.push("u_zoomSizeRatio"),l.floatsPerItem>0&&_.push("u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"),{VERTICES:zi,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:Lu,METHOD:m,UNIFORMS:_,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:b},{name:"a_edgeAttrIndex",size:1,type:b},{name:"a_baseFontSize",size:1,type:b},{name:"a_totalTextWidth",size:1,type:b},{name:"a_positionMode",size:1,type:b},{name:"a_margin",size:1,type:b},{name:"a_padding",size:1,type:b},{name:"a_color",size:4,type:p,normalized:!0},{name:"a_id",size:4,type:p,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_vertexIndex",size:1,type:b}],CONSTANT_DATA:y}}},{key:"processEdgeLabelBackground",value:function(v,b,p){var m=0;if(this.edgeAttributeTexture&&l.floatsPerItem>0){m=this.edgeAttributeTexture.allocate(b);var y=this.packedAttributeData;sa(d,p.edgeAttributes,y,"",Du,0),this.edgeAttributeTexture.updateAllAttributes(b,y)}var x=this.floats,_=this.ints,T=v*this.STRIDE;x[T++]=p.edgeIndex,x[T++]=m,x[T++]=p.baseFontSize,x[T++]=p.totalTextWidth,x[T++]=p.positionMode,x[T++]=p.margin,x[T++]=p.padding,x[T++]=p.color,_[T++]=p.id}},{key:"setUniforms",value:function(v,b){var p=b.gl,m=b.uniformLocations;if(p.uniformMatrix3fv(m.u_matrix,!1,v.matrix),p.uniform1f(m.u_sizeRatio,v.sizeRatio),p.uniform1f(m.u_correctionRatio,v.correctionRatio),p.uniform1f(m.u_pixelRatio,v.pixelRatio),p.uniform1f(m.u_cameraAngle,v.cameraAngle),p.uniform2f(m.u_resolution,v.width,v.height),m.u_nodeDataTexture!==void 0&&p.uniform1i(m.u_nodeDataTexture,v.nodeDataTextureUnit),m.u_nodeDataTextureWidth!==void 0&&p.uniform1i(m.u_nodeDataTextureWidth,v.nodeDataTextureWidth),m.u_edgeDataTexture!==void 0&&p.uniform1i(m.u_edgeDataTexture,v.edgeDataTextureUnit),m.u_edgeDataTextureWidth!==void 0&&p.uniform1i(m.u_edgeDataTextureWidth,v.edgeDataTextureWidth),m.u_edgeFrameTexture!==void 0&&p.uniform1i(m.u_edgeFrameTexture,v.edgeFrameTextureUnit),m.u_edgeFrameTextureWidth!==void 0&&p.uniform1i(m.u_edgeFrameTextureWidth,v.edgeFrameTextureWidth),o==="scaled"&&m.u_zoomSizeRatio!==void 0){var y=this.renderer.getSetting("zoomToSizeRatioFunction");p.uniform1f(m.u_zoomSizeRatio,1/y(v.zoomRatio))}this.edgeAttributeTexture&&l.floatsPerItem>0&&m.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Qe),p.uniform1i(m.u_edgeAttributeTexture,Qe),p.uniform1i(m.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),p.uniform1i(m.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}},{key:"renderProgram",value:function(v,b){this.edgeAttributeTexture&&l.floatsPerItem>0&&this.edgeAttributeTexture.upload(),he(h,"renderProgram",this,3)([v,b])}},{key:"kill",value:function(){this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),he(h,"kill",this,3)([])}},{key:"drawWebGL",value:function(v,b){var p=b.gl;this.totalCount!==0&&p.drawArraysInstanced(p.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(v){this.totalCount=v,v>this.bufferCapacity&&(this.bufferCapacity=Math.max(v,Math.ceil(this.bufferCapacity*1.5)||10),he(h,"reallocate",this,3)([this.bufferCapacity]))}}])})(et);return new c(a,n,e)}function Eo(a){var n,e,t,r,i;return{paths:a.paths,headLengthRatio:(n=a.headLengthRatio)!==null&&n!==void 0?n:0,tailLengthRatio:(e=a.tailLengthRatio)!==null&&e!==void 0?e:0,fontSizeMode:(t=a.fontSizeMode)!==null&&t!==void 0?t:"fixed",minVisibilityThreshold:(r=a.minVisibilityThreshold)!==null&&r!==void 0?r:.7,fullVisibilityThreshold:(i=a.fullVisibilityThreshold)!==null&&i!==void 0?i:.8}}var Cu=Ne.fontSize,ku=17/64;function Pu(a){var n=a.paths,e=a.hasBorder,t=e===void 0?!1:e,r=a.fontSizeMode,i=r===void 0?"fixed":r,o=a.minVisibilityThreshold,s=o===void 0?.5:o,l=a.fullVisibilityThreshold,d=l===void 0?.6:l,u=i==="scaled",c=n.some(function(b){return b.hasSharpCorners}),f=Ie(),h=Re([].concat(V(n),[f])),g=dn(h),v=`#version 300 es

// ============================================================================
// Attributes - Per Character (Instanced)
// ============================================================================

// Edge geometry: indices for texture lookup
// Edge data (source/target node indices, thickness, head/tail ratios) is fetched from edge data texture
// Edge path attributes (curvature, etc.) are fetched from edge attribute texture
in float a_edgeIndex;       // Index into edge data texture
in float a_edgeAttrIndex;   // Index into edge attribute texture (for curvature, etc.)
in float a_baseFontSize;    // Base font size in pixels (per-label)

// Character metrics (in glyph units = atlas font size pixels)
in vec4 a_charMetrics;      // (charTextOffset, charAdvance, totalTextWidth, positionMode)
in vec4 a_charDims;         // (charSize.x, charSize.y, charOffset.x, charOffset.y)

// Atlas texture coordinates
in vec4 a_texCoords;        // (x, y, width, height) in atlas pixels

// Label parameters
in vec2 a_labelParams;      // (margin, unused)

// Appearance
in vec4 a_color;            // Character color (RGBA, normalized)
`.concat(t?"in vec4 a_borderColor;      // Border color (RGBA, normalized)":"",`

// ============================================================================
// Attributes - Per Vertex (Constant)
// ============================================================================

in vec2 a_quadCorner;       // Quad corner: (0,0), (1,0), (0,1), (1,1)

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;    // Required by node shape SDFs
// u_sdfBufferPixels kept for ABI compatibility but unused in shader
uniform float u_sdfBufferPixels;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture; // Shared texture with node position/size/shape data
uniform int u_nodeDataTextureWidth;  // Width of 2D node data texture for coordinate calculation
uniform sampler2D u_edgeDataTexture; // Shared texture with edge data
uniform int u_edgeDataTextureWidth;  // Width of 2D edge data texture for coordinate calculation
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
`).concat(u?"uniform float u_zoomSizeRatio;  // Zoom-based size ratio from zoomToSizeRatioFunction":"",`

// Edge path attribute texture uniforms (for curvature and other path attributes)
`).concat(g.uniformDeclarations,`

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
`).concat(t?"out vec4 v_borderColor;":"",`
out float v_edgeFade;  // 0 = fully visible, 1 = fully faded (outside body)
out float v_alphaModifier;  // 0-1 based on label visibility ratio
out float v_fontScale;  // Ratio of rendered font size to atlas font size
`).concat(t?"out float v_positionMode;  // Position mode for conditional border (0=over needs border)":"",`

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float FADE_WIDTH_PIXELS = 15.0;  // Width of fade gradient in pixels
const float ATLAS_FONT_SIZE = `).concat(le(Cu),`;  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = `).concat(le(ku),`;  // Baseline to visual center ratio

// ============================================================================
// Path Attribute Variables (set in main, used by path functions)
// ============================================================================
// Path attributes are fetched from the edge attribute texture and stored in
// variables with v_ prefix (e.g., v_curvature) for path functions to access.
`).concat(g.vertexVaryingDeclarations.replace(/out /g,""),`

// Node size variables (set in main, used by some path functions like loops).
// These mirror the v_sourceNodeSize / v_targetNodeSize varyings in generator.ts,
// but are plain floats here since the label shader is vertex-only.
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
`).concat(_o({paths:n,minVisibilityThreshold:s,fullVisibilityThreshold:d}),`

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Fetch edge data from edge texture (2 texels per edge)
  // -------------------------------------------------------------------------
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, extremityIds
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  // edgeData0.w is reserved
  float headLengthRatio = edgeData1.x;
  float tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);  // Path type for multi-path support
  float baseFontSize = a_baseFontSize;

  // -------------------------------------------------------------------------
  // Fetch path attributes from edge attribute texture
  // -------------------------------------------------------------------------
  // Note: The fetch code uses 'edgeIdx' variable, so we set it to the attribute texture index
  {
    int edgeIdx = int(a_edgeAttrIndex);  // Use attribute texture index for path attributes
`).concat(g.fetchCode,`
`).concat(g.varyingAssignments,`
  }

  // -------------------------------------------------------------------------
  // Fetch node data from node texture (geometry texel + rotation-flags texel)
  // -------------------------------------------------------------------------
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcNodeData.xy;
  vec2 target = tgtNodeData.xy;
  float sourceSize = srcNodeData.z;
  float targetSize = tgtNodeData.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;
  float charTextOffset = a_charMetrics.x;
  float charAdvance = a_charMetrics.y;
  float totalTextWidth = a_charMetrics.z;
  float positionMode = a_charMetrics.w;
  vec2 charSize = a_charDims.xy;
  vec2 charOffset = a_charDims.zw;
  float margin = a_labelParams.x;

  // -------------------------------------------------------------------------
  // Compute pixel-to-graph conversion (for fixed font size mode)
  // -------------------------------------------------------------------------
  // This converts screen pixels to graph units such that N pixels on screen
  // becomes N pixels regardless of zoom level.
  // matrixScaleX is how much the matrix scales graph units to clip space
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  // -------------------------------------------------------------------------
  // Step 1: Convert thickness to WebGL units
  // -------------------------------------------------------------------------
  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // -------------------------------------------------------------------------
  // Step 2: Compute body bounds (truncated at node boundaries + extremities)
  // -------------------------------------------------------------------------
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, headLengthRatio, tailLengthRatio
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // -------------------------------------------------------------------------
  // Step 3: Compute font scale and text dimensions
  // -------------------------------------------------------------------------
  // Font size modes:
  // - "fixed": Constant pixel size regardless of zoom, using pixelToGraph conversion
  // - "scaled": Scales with zoom using zoomToSizeRatioFunction
  `).concat(u?`// Scaled mode: font scales with zoom
  float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  // Convert glyph-unit metrics to WebGL units (scales with zoom)
  float textWidthWebGL = totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float charOffsetWebGL = charTextOffset * fontScale * u_correctionRatio / u_sizeRatio;
  float charAdvanceWebGL = charAdvance * fontScale * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: font stays constant in screen pixels
  float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  // Convert glyph-unit metrics to graph units using pixelToGraph (zoom-independent)
  float textWidthWebGL = totalTextWidth * fontScale * pixelToGraph;
  float charOffsetWebGL = charTextOffset * fontScale * pixelToGraph;
  float charAdvanceWebGL = charAdvance * fontScale * pixelToGraph;`,`

  // Font scale varying for fragment shader gamma scaling.
  // Ratio of rendered font size to atlas font size \u2014 used to tighten the
  // anti-aliasing band for large labels so they stay sharp.
  v_fontScale = fontScale;

  // -------------------------------------------------------------------------
  // Step 4: Alpha modifier from how much of the label fits in the body
  // -------------------------------------------------------------------------
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);

  // -------------------------------------------------------------------------
  // Step 5: Compute character center offset (truncation check moved to after curvature adjustment)
  // -------------------------------------------------------------------------
  // Character center position relative to label center (on centerline, before curvature adjustment)
  float charCenterOffset = charOffsetWebGL + charAdvanceWebGL * 0.5 - textWidthWebGL * 0.5;

  // -------------------------------------------------------------------------
  // Step 6: Compute perpendicular offset based on position mode
  // -------------------------------------------------------------------------
  // Position modes: 0=over, 1=above, 2=below, 3=auto
  // Needed early for curvature-adaptive character spacing in Step 7
  float halfThickness = webGLThickness * 0.5;
  `).concat(u?`// Scaled mode: margin and text height scale with zoom (same factor as font)
  float marginWebGL = margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: margin and text height stay constant in screen pixels
  float marginWebGL = margin * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;`,`
  float perpOffset = computeEdgeLabelPerpOffset(
    positionMode, halfThickness, marginWebGL, halfTextHeight, source, target, u_matrix
  );

  // -------------------------------------------------------------------------
  // Step 7: Position character on path using offset path traversal
  // -------------------------------------------------------------------------
  // Body center in arc distance
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;

  // For "over" mode (perpOffset = 0), use simple centerline placement
  // For above/below modes, walk along the offset path to find correct position
  float charT;

  if (perpOffset == 0.0) {
    // Simple case: place on centerline
    float charArcDist = bodyCenterDist + charCenterOffset;
    charT = queryPathTAtDistance(pathId, charArcDist, source, target);
  } else {
    // Offset path traversal: walk along the offset curve to find character position
    // This ensures even character spacing regardless of curvature

    // Start from body center on offset path
    float centerT = queryPathTAtDistance(pathId, bodyCenterDist, source, target);

    `).concat(c?`// -----------------------------------------------------------------------
    // Corner skip setup for step/taxi edges with above/below labels
    // -----------------------------------------------------------------------
    // At concave corners (inner side of the bend), characters would bunch up
    // because the offset path has near-zero arc length. We detect corner
    // crossings during the offset path traversal and add skip distance.

    // Get corner t values and concavity
    vec2 cornerTs = queryGetCornerTs(pathId, source, target);
    vec2 concavity = queryGetCornerConcavity(pathId, source, target, perpOffset);

    // Skip distance in graph units, proportional to on-screen font size
    // For fixed mode: use pixelToGraph so gap stays constant regardless of zoom
    // For scaled mode: use the same conversion as text width
    `.concat(u?"float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;":"float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * pixelToGraph;",`

    // Corner t values for detecting crossings during traversal
    float corner1T = cornerTs.x;
    float corner2T = cornerTs.y;
    bool corner1IsConcave = concavity.x > 0.5;
    bool corner2IsConcave = concavity.y > 0.5;`):"",`

    // Target distance along offset path from center
    float targetOffsetDist = abs(charCenterOffset);

    // Handle center character (charCenterOffset \u2248 0) - no search needed
    if (targetOffsetDist < 0.0001) {
      charT = centerT;
    } else {
      vec2 centerPos = queryPathPosition(pathId, centerT, source, target);
      vec2 centerNormal = queryPathNormal(pathId, centerT, source, target);
      vec2 offsetCenter = centerPos + centerNormal * perpOffset;

      float searchDir = charCenterOffset > 0.0 ? 1.0 : -1.0;

      // Search bounds (t values for body start and end)
      float tBodyStart = queryPathTAtDistance(pathId, bodyStartDist, source, target);
      float tBodyEnd = queryPathTAtDistance(pathId, bodyEndDist, source, target);

      // Walk along offset path to find character position
      float accumDist = 0.0;
      vec2 prevOffsetPos = offsetCenter;
      float prevT = centerT;
      float foundT = centerT;

      // Search range depends on direction
      float tSearchEnd = searchDir > 0.0 ? tBodyEnd : tBodyStart;

      `).concat(c?`// Track which concave corners we've crossed to add skip distance
      bool crossedCorner1 = false;
      bool crossedCorner2 = false;
      float effectiveTargetDist = targetOffsetDist;`:"",`

      const int STEPS = 32;
      for (int i = 1; i <= STEPS; i++) {
        // Step along centerline t, from center toward target
        float stepT = centerT + searchDir * float(i) * abs(tSearchEnd - centerT) / float(STEPS);

        `).concat(c?`// Check for concave corner crossings and add skip distance
        // Corner 1 crossing check
        if (corner1IsConcave && !crossedCorner1) {
          bool crossingCorner1 = (searchDir > 0.0)
            ? (prevT < corner1T && stepT >= corner1T)
            : (prevT > corner1T && stepT <= corner1T);
          if (crossingCorner1) {
            crossedCorner1 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }

        // Corner 2 crossing check
        if (corner2IsConcave && !crossedCorner2) {
          bool crossingCorner2 = (searchDir > 0.0)
            ? (prevT < corner2T && stepT >= corner2T)
            : (prevT > corner2T && stepT <= corner2T);
          if (crossingCorner2) {
            crossedCorner2 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }`:"",`

        // Compute offset position at this t
        vec2 stepPos = queryPathPosition(pathId, stepT, source, target);
        vec2 stepNormal = queryPathNormal(pathId, stepT, source, target);
        vec2 offsetPos = stepPos + stepNormal * perpOffset;

        // Distance along offset path
        float segDist = length(offsetPos - prevOffsetPos);

        `).concat(c?`if (accumDist + segDist >= effectiveTargetDist) {
          // Interpolate within segment to find exact t
          float remaining = effectiveTargetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`:`if (accumDist + segDist >= targetOffsetDist) {
          // Interpolate within segment to find exact t
          float remaining = targetOffsetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`,`

        accumDist += segDist;
        prevOffsetPos = offsetPos;
        prevT = stepT;
        // Update foundT to last valid position in case loop exhausts without finding target
        foundT = stepT;
      }

      charT = foundT;
    }
  }

  // Get position and tangent at final character position
  vec2 pathPos = queryPathPosition(pathId, charT, source, target);
  vec2 tangent = queryPathTangent(pathId, charT, source, target);

  // Compute perpendicular direction (90 degrees from tangent)
  vec2 perpDir = vec2(-tangent.y, tangent.x);

  // Apply perpendicular offset to path position
  vec2 offsetPathPos = pathPos + perpDir * perpOffset;

  // -------------------------------------------------------------------------
  // Step 8: Build character quad
  // -------------------------------------------------------------------------
  // Character size in screen pixels
  vec2 charSizePixels = charSize * fontScale;

  // Character offset from origin to the atlas region's top-left corner.
  // bearingX/bearingY already include the SDF buffer.
  vec2 charOffsetPixels = charOffset * fontScale;

  // The character's local X offset from pathPos (which is at character center)
  float charLocalX = -charAdvance * 0.5 * fontScale;

  // Build quad position:
  // - Start at character origin (charLocalX on X axis, 0 on Y axis = baseline)
  // - Add bearing offset to get to atlas region corner
  // - Add quad corner * size to get vertex position
  vec2 quadPos;
  quadPos.x = charLocalX + charOffsetPixels.x + a_quadCorner.x * charSizePixels.x;
  // charOffset.y = -bearingY (negated), so -charOffsetPixels.y = bearingY * fontScale
  // (distance from baseline to atlas region top, positive = upward)
  // Quad corner (0,0) = bottom-left, (1,1) = top-right
  quadPos.y = -charOffsetPixels.y - charSizePixels.y * (1.0 - a_quadCorner.y);

  // Center vertically on the path by offsetting by half the visual text height
  // VERTICAL_CENTER_RATIO is the distance from baseline to visual center as a ratio of atlas font size
  float verticalCenterOffset = VERTICAL_CENTER_RATIO * ATLAS_FONT_SIZE * fontScale;
  quadPos.y -= verticalCenterOffset;

  // -------------------------------------------------------------------------
  // Step 9: Rotate quad to align with tangent
  // -------------------------------------------------------------------------
  // Rotation matrix from tangent
  // tangent = (cos(angle), sin(angle)), so we can build rotation directly
  mat2 rotation = mat2(tangent.x, tangent.y, -tangent.y, tangent.x);

  // Convert pixel offset to WebGL units for rotation
  `).concat(u?"vec2 quadPosWebGL = quadPos * u_correctionRatio / u_sizeRatio; // Scaled mode":"vec2 quadPosWebGL = quadPos * pixelToGraph; // Fixed mode: use pixelToGraph for zoom-independent size",`

  // Rotate around character center on path
  vec2 rotatedOffset = rotation * quadPosWebGL;

  // Final position in graph space (using offset path position for above/below modes)
  vec2 worldPos = offsetPathPos + rotatedOffset;

  // -------------------------------------------------------------------------
  // Step 10: Transform to clip space
  // -------------------------------------------------------------------------
  vec3 clipPos = u_matrix * vec3(worldPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 11: Texture coordinates
  // -------------------------------------------------------------------------
  // Flip Y for texture coordinates (texture Y goes down, quad Y goes up)
  vec2 texCorner = vec2(a_quadCorner.x, 1.0 - a_quadCorner.y);
  v_texCoord = (a_texCoords.xy + texCorner * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 12: Pass color, border color, and alpha modifier
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
`).concat(t?`  v_borderColor = a_borderColor;
  v_borderColor.a *= bias;
  v_positionMode = positionMode;`:"",`
  v_alphaModifier = alphaModifier;

  // -------------------------------------------------------------------------
  // Step 13: Compute edge fade for soft truncation
  // -------------------------------------------------------------------------
  // Convert fade width from pixels to WebGL units
  `).concat(u?"float fadeWidthWebGL = FADE_WIDTH_PIXELS * u_correctionRatio / u_sizeRatio;":"float fadeWidthWebGL = FADE_WIDTH_PIXELS * pixelToGraph;",`

  // Compute the arc position of THIS VERTEX (not just character center)
  // The quad extends from charCenter - advance/2 to charCenter + advance/2
  // a_quadCorner.x is 0 for left edge, 1 for right edge
  float vertexLocalOffset = (a_quadCorner.x - 0.5) * charAdvanceWebGL;
  float vertexArcOffset = charCenterOffset + vertexLocalOffset;

  // Compute distance from body edges (positive = inside body, negative = outside)
  float halfBody = bodyLength * 0.5;
  float distFromStart = vertexArcOffset + halfBody;  // Distance from body start edge
  float distFromEnd = halfBody - vertexArcOffset;    // Distance from body end edge
  float distFromEdge = min(distFromStart, distFromEnd);

  // Compute fade: 0 = fully visible (deep inside body), 1 = fully faded (at body edge)
  // Fade goes from 0 (at 2*fadeWidth inside) to 1 (at body edge)
  // This ensures text is fully transparent before reaching extremities
  v_edgeFade = 1.0 - smoothstep(0.0, fadeWidthWebGL * 2.0, distFromEdge);
}
`);return v}function Fu(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.hasBorder,e=n===void 0?!1:n,t=`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
`.concat(e?"in vec4 v_borderColor;":"",`
in float v_edgeFade;  // 0 = fully visible, 1 = fully faded
in float v_alphaModifier;  // 0-1 based on label visibility ratio
in float v_fontScale;  // Ratio of rendered font size to atlas font size
`).concat(e?"in float v_positionMode;  // Position mode (0=over, 1=above, 2=below, 3=auto)":"",`

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;
`).concat(e?"uniform float u_borderWidth;  // Border width in SDF units (normalized)":"",`

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Edge labels are not pickable - discard all fragments in picking mode
    discard;
  #else
  // SDF stores normalized distance: 0.5 = on edge, >0.5 = inside glyph
  float sdfValue = texture(u_atlas, v_texCoord).a;

  // Edge threshold accounting for SDF buffer padding
  float edge = 1.0 - u_sdfBuffer;

  // Scale gamma inversely with font scale so small labels get a wider AA band
  // (smoother) and large labels get a tighter band (sharper).
  float aaWidth = u_gamma / (u_pixelRatio * v_fontScale);

  // Apply edge fade for soft truncation at body boundaries
  // Also apply visibility-based alpha modifier for short edge labels
  float edgeAlpha = (1.0 - v_edgeFade) * v_alphaModifier;

`).concat(e?`  // Fill alpha: fully opaque inside the glyph
  float fillAlpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Only apply border for "over" position mode (v_positionMode == 0.0)
  // Labels positioned above/below/auto don't overlap the edge line and don't need borders
  if (v_positionMode < 0.5) {
    // Border rendering: compute alpha for both fill and border regions
    // Border extends from (edge - borderWidth) to edge
    float borderEdge = edge - u_borderWidth;

    // Border alpha: opaque in the border region (between borderEdge and edge)
    float borderAlpha = smoothstep(borderEdge - aaWidth, borderEdge + aaWidth, sdfValue);

    // Composite: fill on top of border
    // Border is visible where borderAlpha > 0 but fillAlpha < 1
    vec3 borderColorPremult = v_borderColor.rgb * v_borderColor.a * borderAlpha * edgeAlpha;
    vec3 fillColorPremult = v_color.rgb * v_color.a * fillAlpha * edgeAlpha;

    // Blend fill over border (fill replaces border where fill is opaque)
    float finalBorderAlpha = borderAlpha * (1.0 - fillAlpha);
    vec3 finalColor = fillColorPremult + v_borderColor.rgb * v_borderColor.a * finalBorderAlpha * edgeAlpha;
    float finalAlpha = (v_color.a * fillAlpha + v_borderColor.a * finalBorderAlpha) * edgeAlpha;

    fragColor = vec4(finalColor, finalAlpha);
  } else {
    // No border for above/below/auto positions - simple text rendering
    float finalAlpha = v_color.a * fillAlpha * edgeAlpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  }`:`  // Smooth transition from transparent to opaque at glyph edge
  float alpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Premultiplied alpha output
  float finalAlpha = v_color.a * alpha * edgeAlpha;
  fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);`,`
  #endif
}
`);return t}function Iu(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"fixed",t=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_sdfBufferPixels","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"];e==="scaled"&&t.push("u_zoomSizeRatio"),n&&t.push("u_borderWidth");var r=M(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,s=M(o.uniforms),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;t.includes(d.name)||t.push(d.name)}}catch(u){s.e(u)}finally{s.f()}}}catch(u){r.e(u)}finally{r.f()}return t}function Ao(a){var n=a.hasBorder,e=n===void 0?!1:n,t=a.fontSizeMode,r=t===void 0?"fixed":t;return{vertexShader:Pu(a),fragmentShader:Fu({hasBorder:e}),uniforms:Iu(a.paths,e,r)}}var Nu=new Map;function Gu(a){switch(a){case"over":return 0;case"above":return 1;case"below":return 2;case"auto":return 3;default:return 0}}function Ro(a,n,e,t){var r=t.color,i=t.margin,o=t.textBorder,s=Eo(t),l=s.paths,d=s.fontSizeMode,u=s.minVisibilityThreshold,c=s.fullVisibilityThreshold,f=!!o,h=Ao({paths:l,hasBorder:f,fontSizeMode:d,minVisibilityThreshold:u,fullVisibilityThreshold:c}),g=(function(v){function b(p,m,y){var x;Y(this,b),x=oe(this,b,[p,m,y]),S(x,"atlasTexture",null),S(x,"atlasNeedsUpdate",!1),S(x,"labelGlyphCache",new Map),S(x,"edgeAttributeTexture",null);var _=Ie();if(x.attributeLayout=Re([].concat(V(l),[_])),x.attrDescriptors=oa([].concat(V(l),[_]),x.attributeLayout),x.edgeAttributeTexture=new ia(p,x.attributeLayout),x.packedAttributeData=new Float32Array(x.attributeLayout.floatsPerItem),x.atlasManager=new Ze,x.gamma=.025,x.sdfBuffer=Ne.cutoff,x.atlasTexture=p.createTexture(),!x.atlasTexture)throw new Error("EdgeLabelProgram: failed to create atlas texture");p.bindTexture(p.TEXTURE_2D,x.atlasTexture),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.LINEAR),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.LINEAR),p.bindTexture(p.TEXTURE_2D,null),x.atlasManager.on(Ze.ATLAS_UPDATED_EVENT,function(){x.atlasNeedsUpdate=!0,setTimeout(function(){return x.renderer.refresh()},0)});var T={family:"sans-serif",weight:"normal",style:"normal"};return x.defaultFontKey=x.atlasManager.registerFont(T),x}return se(b,v),K(b,[{key:"getDefinition",value:function(){var m=WebGL2RenderingContext,y=m.FLOAT,x=m.UNSIGNED_BYTE,_=m.TRIANGLE_STRIP,T=new Set,A=[],E=M(l),R;try{for(E.s();!(R=E.n()).done;){var C=R.value,k=M(C.attributes),D;try{for(k.s();!(D=k.n()).done;){var F=D.value,L=F.name.startsWith("a_")?F.name:"a_".concat(F.name);T.has(L)||(T.add(L),A.push({name:L,size:F.size,type:F.type}))}}catch(G){k.e(G)}finally{k.f()}}}catch(G){E.e(G)}finally{E.f()}return{VERTICES:4,VERTEX_SHADER_SOURCE:h.vertexShader,FRAGMENT_SHADER_SOURCE:h.fragmentShader,METHOD:_,UNIFORMS:h.uniforms,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:y},{name:"a_edgeAttrIndex",size:1,type:y},{name:"a_baseFontSize",size:1,type:y},{name:"a_charMetrics",size:4,type:y},{name:"a_charDims",size:4,type:y},{name:"a_texCoords",size:4,type:y},{name:"a_labelParams",size:2,type:y},{name:"a_color",size:4,type:x,normalized:!0}].concat(V(f?[{name:"a_borderColor",size:4,type:x,normalized:!0}]:[]),V(A.filter(function(G){return!["a_curvature","curvature"].includes(G.name)}))),CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:y}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(m,y){if(y.hidden||!y.text){this.labelGlyphCache.delete(m);return}var x=y.text,_=y.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(x,_);var T=[],A=[],E=0,R=M(x),C;try{for(R.s();!(C=R.n()).done;){var k=C.value,D=k.codePointAt(0);if(D===void 0){T.push(void 0),A.push(E);continue}var F=this.atlasManager.getGlyph(D,_);T.push(F),A.push(E),F&&(E+=F.advance)}}catch(L){R.e(L)}finally{R.f()}this.labelGlyphCache.set(m,{glyphs:T,xOffsets:A,totalWidth:E})}},{key:"processCharacter",value:function(m,y,x,_){var T,A,E,R=this.floats,C=this.STRIDE,k=m*C,D=this.labelGlyphCache.get(y.parentKey);if(!D||!D.glyphs[_]){for(var F=0;F<C;F++)R[k+F]=0;return}var L=D.glyphs[_],G=D.xOffsets[_],N=b.labelColor,z=N&&Z(N)==="object"&&"color"in N&&N.color?N.color:y.color,P=Ee(z),w=k;R[w++]=y.edgeIndex,R[w++]=(T=(A=this.edgeAttributeTexture)===null||A===void 0?void 0:A.getIndex(y.parentKey))!==null&&T!==void 0?T:0,R[w++]=y.size,R[w++]=G,R[w++]=L.advance,R[w++]=D.totalWidth,R[w++]=Gu(y.position),R[w++]=L.atlasWidth,R[w++]=L.atlasHeight,R[w++]=L.bearingX,R[w++]=-L.bearingY,R[w++]=L.atlasX,R[w++]=L.atlasY,R[w++]=L.atlasWidth,R[w++]=L.atlasHeight;var I=(E=b.labelMargin)!==null&&E!==void 0?E:y.margin;if(R[w++]=I,R[w++]=0,R[w++]=P,f&&o){var H;typeof o.color=="string"?H=o.color:H=o.color.color||"#ffffff",R[w++]=Ee(H)}var U=new Set,$=M(l),X;try{for($.s();!(X=$.n()).done;){var Q=X.value,ue=M(Q.attributes),xe;try{for(ue.s();!(xe=ue.n()).done;){var Le=xe.value,Ht=Le.name.startsWith("a_")?Le.name.slice(2):Le.name;if(Ht!=="curvature"&&!U.has(Ht)){U.add(Ht);for(var xn=0;xn<Le.size;xn++)R[w++]=0}}}catch(mt){ue.e(mt)}finally{ue.f()}}}catch(mt){$.e(mt)}finally{$.f()}}},{key:"processEdgeLabel",value:function(m,y,x){if(this.prepareLabelGlyphs(m,x),this.edgeAttributeTexture&&!x.hidden&&x.text){this.edgeAttributeTexture.allocate(m);var _=this.packedAttributeData;sa(this.attrDescriptors,x.edgeAttributes,_,"",Nu,0),this.edgeAttributeTexture.updateAllAttributes(m,_)}return he(b,"processLabel",this,3)([m,y,x])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var m=this.normalProgram.gl,y=this.atlasManager.getTextures();if(y.length!==0){var x=y[0];m.bindTexture(m.TEXTURE_2D,this.atlasTexture),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,x.width,x.height,0,m.RGBA,m.UNSIGNED_BYTE,x.data),m.bindTexture(m.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(m,y){var x=y.gl,_=y.uniformLocations,T=this.atlasManager.getTextures(),A=T.length>0?[T[0].width,T[0].height]:[1,1];if(x.uniformMatrix3fv(_.u_matrix,!1,m.matrix),x.uniform1f(_.u_sizeRatio,m.sizeRatio),x.uniform1f(_.u_correctionRatio,m.correctionRatio),x.uniform1f(_.u_pixelRatio,m.pixelRatio),x.uniform1f(_.u_cameraAngle,m.cameraAngle),x.uniform1f(_.u_sdfBufferPixels,Ne.buffer),x.uniform2f(_.u_resolution,m.width,m.height),x.uniform2f(_.u_atlasSize,A[0],A[1]),x.uniform1f(_.u_gamma,this.gamma),x.uniform1f(_.u_sdfBuffer,this.sdfBuffer),x.activeTexture(x.TEXTURE0),x.bindTexture(x.TEXTURE_2D,this.atlasTexture),x.uniform1i(_.u_atlas,0),_.u_nodeDataTexture!==void 0&&x.uniform1i(_.u_nodeDataTexture,m.nodeDataTextureUnit),_.u_nodeDataTextureWidth!==void 0&&x.uniform1i(_.u_nodeDataTextureWidth,m.nodeDataTextureWidth),_.u_edgeDataTexture!==void 0&&x.uniform1i(_.u_edgeDataTexture,m.edgeDataTextureUnit),_.u_edgeDataTextureWidth!==void 0&&x.uniform1i(_.u_edgeDataTextureWidth,m.edgeDataTextureWidth),_.u_edgeFrameTexture!==void 0&&x.uniform1i(_.u_edgeFrameTexture,m.edgeFrameTextureUnit),_.u_edgeFrameTextureWidth!==void 0&&x.uniform1i(_.u_edgeFrameTextureWidth,m.edgeFrameTextureWidth),f&&o&&_.u_borderWidth!==void 0){var E=o.width/Ne.buffer*this.sdfBuffer;x.uniform1f(_.u_borderWidth,E)}if(this.edgeAttributeTexture&&_.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Qe),x.uniform1i(_.u_edgeAttributeTexture,Qe),x.uniform1i(_.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),x.uniform1i(_.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),d==="scaled"&&_.u_zoomSizeRatio!==void 0){var R=this.renderer.getSetting("zoomToSizeRatioFunction"),C=1/R(m.zoomRatio);x.uniform1f(_.u_zoomSizeRatio,C)}}},{key:"renderProgram",value:function(m,y){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),he(b,"renderProgram",this,3)([m,y])}},{key:"registerFont",value:function(m){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:m,weight:y,style:x})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"ensureGlyphsReady",value:function(m,y){var x=y||this.defaultFontKey,_=M(m),T;try{for(_.s();!(T=_.n()).done;){var A=T.value;this.atlasManager.ensureGlyphs(A,x)}}catch(E){_.e(E)}finally{_.f()}this.atlasManager.flush()}},{key:"measureLabelAtlasWidth",value:function(m,y){var x=y||this.defaultFontKey;this.atlasManager.ensureGlyphs(m,x),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var _=0,T=M(m),A;try{for(T.s();!(A=T.n()).done;){var E=A.value,R=E.codePointAt(0);if(R!==void 0){var C=this.atlasManager.getGlyph(R,x);C&&(_+=C.advance)}}}catch(k){T.e(k)}finally{T.f()}return _}},{key:"measureLabel",value:function(m,y,x){var _=this.measureLabelAtlasWidth(m,x),T=y/Ne.fontSize;return{width:_*T,height:y,textHeight:y}}},{key:"kill",value:function(){var m=this.normalProgram.gl;this.atlasTexture&&(m.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),he(b,"kill",this,3)([])}}])})(Ja);return S(g,"labelColor",r),S(g,"labelMargin",i),new g(a,n,e)}function zu(){var a=`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`;return{name:"none",glsl:a,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function rr(a,n,e,t,r,i,o){var s,l,d=bo(t),u=d.paths,c=d.layers,f=d.defaultHead,h=d.defaultTail,g=[zu()].concat(V(d.extremities)),v={},b={};u.forEach(function(F,L){return v[F.name]=L}),g.forEach(function(F,L){return b[F.name]=L});var p=(s=b[f])!==null&&s!==void 0?s:0,m=(l=b[h])!==null&&l!==void 0?l:0,y=null,x=Re([].concat(V(u),V(c))),_=(function(F){function L(G,N,z){var P;Y(this,L),y||(y=Xa({paths:u,extremities:g,layers:c,antialias:r})),P=oe(this,L,[G,N,z]),S(P,"layerLifecycles",new Map),S(P,"needsShaderRegeneration",!1),S(P,"edgeAttributeTexture",null),S(P,"layout",x),S(P,"attrDescriptors",[]),S(P,"lifecycleIndexOffset",u.length),P._pickingBuffer=N,P.edgeAttributeTexture=new ia(G,P.layout),P.packedAttributeData=new Float32Array(P.layout.floatsPerItem),c.forEach(function(I,H){if(I.lifecycle){var U={gl:G,renderer:{refresh:function(){return z.refresh()}},getUniformLocation:function(X){return G.getUniformLocation(P.normalProgram.program,X)},requestShaderRegeneration:function(){P.needsShaderRegeneration=!0},requestRefresh:function(){z.refresh()}};P.layerLifecycles.set(H,I.lifecycle(U))}}),P.layerLifecycles.forEach(function(I){var H;return(H=I.init)===null||H===void 0?void 0:H.call(I)});var w=new Map;return P.layerLifecycles.forEach(function(I,H){I.getAttributeData&&w.set(u.length+H,I)}),P.attrDescriptors=oa([].concat(V(u),V(c)),P.layout,w),P}return se(L,F),K(L,[{key:"getAttributeTexture",value:function(){return this.edgeAttributeTexture}},{key:"resolveEdgeIds",value:function(N,z,P){var w=N,I=0,H=p,U=m,$=z?w.selfLoopPath:P&&w.parallelPath?w.parallelPath:w.path;$&&v[$]!==void 0&&(I=v[$]),w.head&&w.head!=="none"&&b[w.head]!==void 0&&(H=b[w.head]),w.tail&&w.tail!=="none"&&b[w.tail]!==void 0&&(U=b[w.tail]);var X=g[H],Q=g[U];return{pathId:I,headId:H,tailId:U,headLengthRatio:ke(X.length)?0:X.length,tailLengthRatio:ke(Q.length)?0:Q.length}}},{key:"getDefinition",value:function(){var N=WebGL2RenderingContext,z=N.TRIANGLE_STRIP,P=z,w=y;return{VERTICES:w.verticesPerEdge,VERTEX_SHADER_SOURCE:w.vertexShader,FRAGMENT_SHADER_SOURCE:w.fragmentShader,METHOD:P,UNIFORMS:w.uniforms,ATTRIBUTES:w.attributes,CONSTANT_ATTRIBUTES:w.constantAttributes,CONSTANT_DATA:w.constantData}}},{key:"maybeRegenerateShaders",value:function(){var N=this;if(this.needsShaderRegeneration){this.needsShaderRegeneration=!1;var z=c.map(function(X,Q){var ue=N.layerLifecycles.get(Q);return ue!=null&&ue.regenerate?ue.regenerate():X});y=Xa({paths:u,extremities:g,layers:z,antialias:this.renderer.getSetting("antialiasEdges")});var P=this.normalProgram.gl,w=this.normalProgram,I=w.program,H=w.buffer,U=w.vertexShader,$=w.fragmentShader;P.deleteProgram(I),P.deleteBuffer(H),P.deleteShader(U),P.deleteShader($),this.normalProgram=this.getProgramInfo("normal",P,y.vertexShader,y.fragmentShader,this._pickingBuffer)}}},{key:"process",value:function(N,z,P,w,I,H){var U=z*this.STRIDE;if(I.visibility==="hidden"||P.visibility==="hidden"||w.visibility==="hidden"){for(var $=U+this.STRIDE;U<$;U++)this.floats[U]=0;this.floats[z*this.STRIDE]=Qi;return}this.processVisibleItem(Rt(N),U,P,w,I,H)}},{key:"processVisibleItem",value:function(N,z,P,w,I,H){var U,$=this.floats,X=this.ints;$[z++]=H,$[z++]=Ee(I.color),X[z++]=N,$[z++]=(U=I.opacity)!==null&&U!==void 0?U:1;var Q=this.packedAttributeData;sa(this.attrDescriptors,I,Q,I.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(H,Q)}},{key:"setUniforms",value:function(N,z){var P=this,w=z.gl,I=z.uniformLocations;I.u_matrix&&w.uniformMatrix3fv(I.u_matrix,!1,N.matrix),I.u_sizeRatio&&w.uniform1f(I.u_sizeRatio,N.sizeRatio),I.u_correctionRatio&&w.uniform1f(I.u_correctionRatio,N.correctionRatio),I.u_zoomRatio&&w.uniform1f(I.u_zoomRatio,N.zoomRatio),I.u_pixelRatio&&w.uniform1f(I.u_pixelRatio,N.pixelRatio),I.u_cameraAngle&&w.uniform1f(I.u_cameraAngle,N.cameraAngle),I.u_feather&&w.uniform1f(I.u_feather,N.antiAliasingFeather),I.u_minEdgeThickness&&w.uniform1f(I.u_minEdgeThickness,N.minEdgeThickness),I.u_pickingPadding&&w.uniform1f(I.u_pickingPadding,N.edgePickingPadding),I.u_nodeDataTexture&&w.uniform1i(I.u_nodeDataTexture,N.nodeDataTextureUnit),I.u_nodeDataTextureWidth&&w.uniform1i(I.u_nodeDataTextureWidth,N.nodeDataTextureWidth),I.u_edgeDataTexture&&w.uniform1i(I.u_edgeDataTexture,N.edgeDataTextureUnit),I.u_edgeDataTextureWidth&&w.uniform1i(I.u_edgeDataTextureWidth,N.edgeDataTextureWidth),I.u_edgeFrameTexture&&w.uniform1i(I.u_edgeFrameTexture,N.edgeFrameTextureUnit),I.u_edgeFrameTextureWidth&&w.uniform1i(I.u_edgeFrameTextureWidth,N.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(Qe),I.u_edgeAttributeTexture&&w.uniform1i(I.u_edgeAttributeTexture,Qe),I.u_edgeAttributeTextureWidth&&w.uniform1i(I.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),I.u_edgeAttributeTexelsPerEdge&&w.uniform1i(I.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));var H=new Set;u.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),P.setTypedUniform($,z))})}),g.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),P.setTypedUniform($,z))})}),c.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),P.setTypedUniform($,z))})})}},{key:"render",value:function(N,z,P){this.maybeRegenerateShaders(),he(L,"render",this,3)([N,z,P])}},{key:"renderProgram",value:function(N,z){this.layerLifecycles.forEach(function(P){var w;return(w=P.beforeRender)===null||w===void 0?void 0:w.call(P)}),he(L,"renderProgram",this,3)([N,z])}},{key:"uploadAttributeTexture",value:function(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(N){var z;return(z=N.kill)===null||z===void 0?void 0:z.call(N)}),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),he(L,"kill",this,3)([])}}])})(et),T=g[p],A=g[m],E=O({paths:u,headLengthRatio:ke(T.length)?0:T.length,tailLengthRatio:ke(A.length)?0:A.length},t.label),R=Eo(E),C=Ro(a,null,e,E),k=So(a,n,e,{shaderConfig:R}),D=new xo(a,{paths:u,extremities:g,layers:c,nodeShapes:i,nodeLayers:o});return{edgeProgram:new _(a,null,e),labelProgram:C,labelBackgroundProgram:k,framePass:D}}function Mu(a){return Z(a)==="object"&&"uniforms"in a&&Array.isArray(a.uniforms)}function Ou(a){return Z(a)==="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function Bu(a){return Z(a)==="object"&&"uniforms"in a&&"attributes"in a&&"segments"in a}function Wu(a){return Z(a)==="object"&&"uniforms"in a&&"attributes"in a&&"length"in a}function Uu(a){return Z(a)==="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function Hu(a){return Z(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function $u(a){return Z(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function Vu(a){return Z(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function ju(a){if(Mu(a))return a;if(Hu(a))return{name:a.name,glsl:a.glsl,inradiusFactor:a.inradiusFactor,uniforms:[]};throw new Error("Invalid node shape specification: ".concat(JSON.stringify(a)))}function Xu(a){if(Ou(a))return a;if(ui(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error("Invalid node layer specification: ".concat(JSON.stringify(a)))}function qu(a){if(Bu(a))return a;if($u(a))return{name:a.name,glsl:a.glsl,segments:a.segments,uniforms:[],attributes:[]};throw new Error("Invalid edge path specification: ".concat(JSON.stringify(a)))}function Yu(a){if(Uu(a))return a;if(ci(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error("Invalid edge layer specification: ".concat(JSON.stringify(a)))}function Ku(a){if(Wu(a))return a;if(Vu(a))return{name:a.name,glsl:a.glsl,length:a.length,widthFactor:a.widthFactor,margin:0,uniforms:[],attributes:[]};throw new Error("Invalid edge extremity specification: ".concat(JSON.stringify(a)))}function Do(a){var n,e,t=(n=a?.shapes)!==null&&n!==void 0?n:Qt.shapes,r=(e=a?.layers)!==null&&e!==void 0?e:Qt.layers,i=t.map(ju),o=r.map(Xu);if(i.length===0)throw new Error("At least one node shape must be specified.");if(o.length===0)throw new Error("At least one node layer must be specified.");return{shapes:i,layers:o}}function Zu(a){var n,e,t,r=(n=a?.paths)!==null&&n!==void 0?n:Dt.paths,i=(e=a?.extremities)!==null&&e!==void 0?e:Dt.extremities,o=(t=a?.layers)!==null&&t!==void 0?t:Dt.layers,s=r.map(qu),l=i.map(Ku).filter(function(u){return u!==null}),d=o.map(Yu);if(s.length===0)throw new Error("At least one edge path must be specified.");if(d.length===0)throw new Error("At least one edge layer must be specified.");return{paths:s,extremities:l,layers:d}}function wo(a,n){var e={},t=M(a),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;i.variables&&Object.assign(e,i.variables)}}catch(o){t.e(o)}finally{t.f()}return Object.assign(e,n||{}),e}function Lo(a,n,e,t,r){var i=Do(t),o=i.shapes,s=i.layers,l=wo(o,t?.variables),d=tr(a,n,e,{shapes:o,layers:s,label:t?.label,backdrop:t?.backdrop,labelAttachments:t?.labelAttachments},r);return O(O({},d),{},{variables:l})}function Co(a,n,e,t,r,i){var o=Zu(t),s=o.paths,l=o.extremities,d=o.layers,u=Do(i),c=u.shapes,f=u.layers,h=wo(s,t?.variables),g=rr(a,n,e,{paths:s,extremities:l,layers:d,defaultHead:t?.defaultHead,defaultTail:t?.defaultTail,label:t?.label},r,c,f);return O(O({},g),{},{variables:h,paths:s})}var Qu=2;function ko(a,n,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Qu,r=n.canvas,i=r.width,o=r.height,s=e.x,l=e.y,d=e.rowHeight,u=e.maxRowWidth,c={},f=[],h=M(a),g;try{for(h.s();!(g=h.n()).done;){var v=g.value,b=v.width+t,p=v.height+t;if(b>i||p>o||s+b>i&&l+d+p>o){f.push(v);continue}s+b>i&&(u=Math.max(u,s),s=0,l+=d,d=p),v.draw(n,s,l),c[v.key]={x:s,y:l,width:v.width,height:v.height},s+=b,d=Math.max(d,p)}}catch(m){h.e(m)}finally{h.f()}return u=Math.max(u,s),{atlas:c,cursor:{x:s,y:l,rowHeight:d,maxRowWidth:u},remaining:f}}function ve(a,n,e,t){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}ve=function(i,o,s,l){function d(u,c){ve(i,u,function(f){return this._invoke(u,c,f)})}o?r?r(i,o,{value:s,enumerable:!l,configurable:!l,writable:!l}):i[o]=s:(d("next",0),d("throw",1),d("return",2))},ve(a,n,e,t)}function me(){var a,n,e=typeof Symbol=="function"?Symbol:{},t=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag";function i(h,g,v,b){var p=g&&g.prototype instanceof s?g:s,m=Object.create(p.prototype);return ve(m,"_invoke",(function(y,x,_){var T,A,E,R=0,C=_||[],k=!1,D={p:0,n:0,v:a,a:F,f:F.bind(a,4),d:function(L,G){return T=L,A=0,E=a,D.n=G,o}};function F(L,G){for(A=L,E=G,n=0;!k&&R&&!N&&n<C.length;n++){var N,z=C[n],P=D.p,w=z[2];L>3?(N=w===G)&&(E=z[(A=z[4])?5:(A=3,3)],z[4]=z[5]=a):z[0]<=P&&((N=L<2&&P<z[1])?(A=0,D.v=G,D.n=z[1]):P<w&&(N=L<3||z[0]>G||G>w)&&(z[4]=L,z[5]=G,D.n=w,A=0))}if(N||L>1)return o;throw k=!0,G}return function(L,G,N){if(R>1)throw TypeError("Generator is already running");for(k&&G===1&&F(G,N),A=G,E=N;(n=A<2?a:E)||!k;){T||(A?A<3?(A>1&&(D.n=-1),F(A,E)):D.n=E:D.v=E);try{if(R=2,T){if(A||(L="next"),n=T[L]){if(!(n=n.call(T,E)))throw TypeError("iterator result is not an object");if(!n.done)return n;E=n.value,A<2&&(A=0)}else A===1&&(n=T.return)&&n.call(T),A<2&&(E=TypeError("The iterator does not provide a '"+L+"' method"),A=1);T=a}else if((n=(k=D.n<0)?E:y.call(x,D))!==o)break}catch(z){T=a,A=1,E=z}finally{R=1}}return{value:n,done:k}}})(h,v,b),!0),m}var o={};function s(){}function l(){}function d(){}n=Object.getPrototypeOf;var u=[][t]?n(n([][t]())):(ve(n={},t,function(){return this}),n),c=d.prototype=s.prototype=Object.create(u);function f(h){return Object.setPrototypeOf?Object.setPrototypeOf(h,d):(h.__proto__=d,ve(h,r,"GeneratorFunction")),h.prototype=Object.create(c),h}return l.prototype=d,ve(c,"constructor",d),ve(d,"constructor",l),l.displayName="GeneratorFunction",ve(d,r,"GeneratorFunction"),ve(c),ve(c,r,"Generator"),ve(c,t,function(){return this}),ve(c,"toString",function(){return"[object Generator]"}),(me=function(){return{w:i,m:f}})()}function Po(a,n,e,t,r,i,o){try{var s=a[i](o),l=s.value}catch(d){return void e(d)}s.done?n(l):Promise.resolve(l).then(t,r)}function zt(a){return function(){var n=this,e=arguments;return new Promise(function(t,r){var i=a.apply(n,e);function o(l){Po(i,t,r,o,s,"next",l)}function s(l){Po(i,t,r,o,s,"throw",l)}o(void 0)})}}var da=new Map,Fo=!1;function Ju(a){return new Promise(function(n,e){var t=new FileReader;t.onload=function(){return n(t.result)},t.onerror=e,t.readAsDataURL(a)})}function ec(a){if(!da.has(a)){var n=fetch(a).then(function(e){return e.blob()}).then(Ju).catch(function(){return da.delete(a),null});da.set(a,n)}return da.get(a)}function tc(a){return ir.apply(this,arguments)}function ir(){return ir=zt(me().m(function a(n){var e,t,r;return me().w(function(i){for(;;)switch(i.n){case 0:return e=document.createElement("div"),e.innerHTML=n,t=Array.from(e.querySelectorAll("img[src]")),r=t.filter(function(o){return!o.getAttribute("src").startsWith("data:")}),i.n=1,Promise.all(r.map((function(){var o=zt(me().m(function s(l){var d;return me().w(function(u){for(;;)switch(u.n){case 0:return u.n=1,ec(l.getAttribute("src"));case 1:d=u.v,d&&l.setAttribute("src",d);case 2:return u.a(2)}},s)}));return function(s){return o.apply(this,arguments)}})()));case 1:return i.a(2,e.innerHTML)}},a)})),ir.apply(this,arguments)}function Io(a){return or.apply(this,arguments)}function or(){return or=zt(me().m(function a(n){var e,t,r,i,o,s,l,d,u,c,f,h,g,v=arguments;return me().w(function(b){for(;;)switch(b.n){case 0:if(e=v.length>1&&v[1]!==void 0?v[1]:1,t=n instanceof SVGElement?new XMLSerializer().serializeToString(n):n,r=new DOMParser,i=r.parseFromString(t,"image/svg+xml"),o=i.querySelector("svg"),o){b.n=1;break}return b.a(2,null);case 1:if(s=parseFloat(o.getAttribute("width")||""),l=parseFloat(o.getAttribute("height")||""),(!(s>0)||!(l>0))&&(d=o.getAttribute("viewBox"),d&&(u=d.trim().split(/[\s,]+/),s=parseFloat(u[2]),l=parseFloat(u[3]))),!(!(s>0)||!(l>0))){b.n=2;break}return console.warn("Sigma: SVG label attachment has no parseable dimensions \u2014 skipped."),b.a(2,null);case 2:return c=Math.ceil(s*e),f=Math.ceil(l*e),h=new Blob([t],{type:"image/svg+xml"}),g=URL.createObjectURL(h),b.a(2,new Promise(function(p){var m=new Image;m.onload=function(){var y=document.createElement("canvas");y.width=c,y.height=f,y.getContext("2d").drawImage(m,0,0,c,f),URL.revokeObjectURL(g);try{y.getContext("2d").getImageData(0,0,1,1)}catch(x){if(x instanceof DOMException&&x.name==="SecurityError"){Fo||(Fo=!0,console.warn('Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.')),p(null);return}throw x}p(y)},m.onerror=function(){URL.revokeObjectURL(g),p(null)},m.src=g}))}},a)})),or.apply(this,arguments)}function nc(a,n){var e=document.createElement("div");e.style.cssText="position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content",e.innerHTML=(n?"<style>".concat(n,"</style>"):"")+a,document.body.appendChild(e);var t=e.getBoundingClientRect(),r=t.width,i=t.height;return document.body.removeChild(e),{width:Math.ceil(r),height:Math.ceil(i)}}function ac(a,n,e,t){return sr.apply(this,arguments)}function sr(){return sr=zt(me().m(function a(n,e,t,r){var i,o,s,l,d,u,c,f,h=arguments;return me().w(function(g){for(;;)switch(g.n){case 0:return i=h.length>4&&h[4]!==void 0?h[4]:1,o=n instanceof HTMLElement?n.outerHTML:n,g.n=1,tc(o);case 1:return s=g.v,(t==null||r==null)&&(l=nc(s,e),t=t??l.width,r=r??l.height),d=Math.ceil(t*i),u=Math.ceil(r*i),c=e?"<style>".concat(e,"</style>"):"",f='<svg xmlns="http://www.w3.org/2000/svg" '+'width="'.concat(d,'" height="').concat(u,'" viewBox="0 0 ').concat(t," ").concat(r,'">')+'<foreignObject width="'.concat(t,'" height="').concat(r,'">')+'<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">'.concat(c).concat(s,"</body>")+"</foreignObject></svg>",g.a(2,Io(f,1))}},a)})),sr.apply(this,arguments)}function rc(a){return lr.apply(this,arguments)}function lr(){return lr=zt(me().m(function a(n){var e,t=arguments,r;return me().w(function(i){for(;;)switch(i.n){case 0:e=t.length>1&&t[1]!==void 0?t[1]:1,r=n.type,i.n=r==="canvas"?1:r==="svg"?2:r==="html"?3:4;break;case 1:return i.a(2,n.canvas);case 2:return i.a(2,Io(n.svg,e));case 3:return i.a(2,ac(n.html,n.css,n.width,n.height,e));case 4:return i.a(2)}},a)})),lr.apply(this,arguments)}var Gt=2048,dr=(function(){function a(n,e,t){Y(this,a),S(this,"cache",new Map),S(this,"pending",new Set),S(this,"atlas",{}),S(this,"glTexture",null),S(this,"dirty",!0),this.gl=n,this.renderers=e,this.scheduleRender=t,this.packCanvas=document.createElement("canvas"),this.packCanvas.width=Gt,this.packCanvas.height=Gt,this.packCtx=this.packCanvas.getContext("2d")}return K(a,[{key:"renderAttachment",value:function(e,t,r){var i=this,o="".concat(e,":").concat(t);if(!(this.cache.has(o)||this.pending.has(o))){var s=this.renderers[t];if(s){var l=s(r);if(l){this.pending.add(o);var d=r.pixelRatio;Promise.resolve(l).then((function(){var u=zt(me().m(function c(f){var h;return me().w(function(g){for(;;)switch(g.n){case 0:if(i.pending.has(o)){g.n=1;break}return g.a(2);case 1:if(i.pending.delete(o),f){g.n=2;break}return g.a(2);case 2:return g.n=3,rc(f,d);case 3:if(h=g.v,!(!h||h.width===0||h.height===0)){g.n=4;break}return g.a(2);case 4:i.cache.set(o,{image:h,width:h.width,height:h.height}),i.dirty=!0,i.scheduleRender();case 5:return g.a(2)}},c)}));return function(c){return u.apply(this,arguments)}})())}}}}},{key:"regenerateAtlas",value:function(){if(this.dirty){this.dirty=!1;var e=[];if(this.cache.forEach(function(d,u){e.push({key:u,width:d.width,height:d.height,draw:function(f,h,g){f.drawImage(d.image,h,g)}})}),e.length===0){this.atlas={},this.deleteGLTexture();return}var t={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,Gt,Gt);var r=ko(e,this.packCtx,t),i=r.atlas,o=r.remaining;this.atlas=i,o.length>0&&console.warn("Sigma: ".concat(o.length," label attachment(s) could not fit in the ").concat(Gt,"x").concat(Gt," atlas and will not be rendered.")),this.deleteGLTexture();var s=this.gl,l=s.createTexture();s.activeTexture(s.TEXTURE0+ln),s.bindTexture(s.TEXTURE_2D,l),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.packCanvas),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),this.glTexture=l}}},{key:"bindTexture",value:function(e){if(this.glTexture){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.glTexture)}}},{key:"getEntry",value:function(e,t){var r="".concat(e,":").concat(t);return this.atlas[r]||null}},{key:"invalidateNode",value:function(e){var t="".concat(e,":"),r=M(this.cache.keys()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;o.startsWith(t)&&(this.cache.delete(o),this.dirty=!0)}}catch(u){r.e(u)}finally{r.f()}var s=M(this.pending),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;d.startsWith(t)&&this.pending.delete(d)}}catch(u){s.e(u)}finally{s.f()}}},{key:"restore",value:function(){this.glTexture=null,this.dirty=!0}},{key:"clear",value:function(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}},{key:"kill",value:function(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}},{key:"deleteGLTexture",value:function(){this.glTexture&&(this.gl.deleteTexture(this.glTexture),this.glTexture=null)}}])})(),ua=(function(){function a(n){Y(this,a),S(this,"buckets",new Map),S(this,"keyDepth",new Map);var e=M(n),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;this.buckets.set(r,new Set)}}catch(i){e.e(i)}finally{e.f()}}return K(a,[{key:"has",value:function(e){return this.keyDepth.has(e)}},{key:"getBucket",value:function(e){return this.buckets.get(e)}},{key:"set",value:function(e,t){var r,i=this.keyDepth.get(e);if(i!==t){var o=this.buckets.get(t);if(!o)throw new Error('Sigma: "'.concat(t,'" is not a declared depth layer'));i!==void 0&&((r=this.buckets.get(i))===null||r===void 0||r.delete(e)),o.add(e),this.keyDepth.set(e,t)}}},{key:"remove",value:function(e){var t=this.keyDepth.get(e);t!==void 0&&(this.buckets.get(t).delete(e),this.keyDepth.delete(e))}},{key:"clearAll",value:function(){var e=M(this.buckets.values()),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;r.clear()}}catch(i){e.e(i)}finally{e.f()}this.keyDepth.clear()}},{key:"getSorted",value:function(e,t){var r=this.buckets.get(e);return!r||r.size===0?[]:V(r).sort(function(i,o){return t(i)-t(o)})}}])})(),ur=(function(a){function n(e,t){return Y(this,n),oe(this,n,[e,2,t])}return se(n,a),K(n,[{key:"updateNode",value:function(t,r,i,o,s,l,d,u){var c=this.indexMap.get(t);if(c===void 0)throw new Error('Node "'.concat(t,'" not allocated in NodeDataTexture'));var f=Xe(u),h=J(f,4),g=h[0],v=h[1],b=h[2],p=h[3],m=c*2*4;this.data[m]=r,this.data[m+1]=i,this.data[m+2]=o,this.data[m+3]=s,this.data[m+4]=l,this.data[m+5]=d,this.data[m+6]=g*65536+v*256+b,this.data[m+7]=p/255,this.markDirty(c)}}])})(sn),ic=1024,oc=1.5,sc=4096,ca=(function(){function a(n,e){var t;if(Y(this,a),S(this,"texture",null),S(this,"framebuffer",null),!n.getExtension("EXT_color_buffer_float"))throw new Error("sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.");this.gl=n,this.channels=e.channels,this.capacity=this.roundUpToPowerOfTwo((t=e.initialCapacity)!==null&&t!==void 0?t:ic);var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}return K(a,[{key:"roundUpToPowerOfTwo",value:function(e){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,e))))}},{key:"computeDimensions",value:function(e){var t=Math.min(e,sc),r=Math.ceil(e/t);return{width:t,height:r}}},{key:"create",value:function(){var e=this.gl,t=this.channels===1?e.R32F:e.RGBA32F,r=this.channels===1?e.RED:e.RGBA;if(this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,t,this.textureWidth,this.textureHeight,0,r,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw new Error("sigma: float framebuffer for frame-pass placement is incomplete.");e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}},{key:"ensureCapacity",value:function(e){if(!(e<=this.capacity)){var t=this.gl;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(e*oc));var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.texture&&t.deleteTexture(this.texture),this.framebuffer&&t.deleteFramebuffer(this.framebuffer),this.create()}}},{key:"bindAsRenderTarget",value:function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.viewport(0,0,this.textureWidth,this.textureHeight)}},{key:"bind",value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"restore",value:function(){this.gl.getExtension("EXT_color_buffer_float"),this.create()}},{key:"kill",value:function(){var e=this.gl;this.texture&&(e.deleteTexture(this.texture),this.texture=null),this.framebuffer&&(e.deleteFramebuffer(this.framebuffer),this.framebuffer=null)}}])})(),cr=(function(a){function n(e,t){return Y(this,n),oe(this,n,[e,2,t])}return se(n,a),K(n,[{key:"updateEdge",value:function(t,r,i,o,s,l){var d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,c=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,f=this.indexMap.get(t);if(f===void 0)throw new Error('Edge "'.concat(t,'" not allocated in EdgeDataTexture'));var h=f*this.TEXELS_PER_ITEM*4;this.data[h+0]=r,this.data[h+1]=i,this.data[h+2]=o,this.data[h+3]=0,this.data[h+4]=s,this.data[h+5]=l,this.data[h+6]=d,this.data[h+7]=(u&15)<<4|c&15,this.markDirty(f)}}])})(sn);var cf=it(yt()),hf=it(Ba());function lc(a,n){if(a==null)return{};var e={};for(var t in a)if({}.hasOwnProperty.call(a,t)){if(n.indexOf(t)!==-1)continue;e[t]=a[t]}return e}function No(a,n){if(a==null)return{};var e,t,r=lc(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)===-1&&{}.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var dc=["factor"],uc=["factor"],Go=1.5,hr={x:.5,y:.5,angle:0,ratio:1},zo=(function(a){function n(){var e;Y(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=oe(this,n,[].concat(r)),S(e,"minRatio",null),S(e,"maxRatio",null),S(e,"enabled",!0),S(e,"enabledZooming",!0),S(e,"enabledPanning",!0),S(e,"enabledRotation",!0),S(e,"constrainState",null),S(e,"state",O({},hr)),S(e,"previousState",O({},hr)),S(e,"nextFrame",null),S(e,"currentAnimationFrom",null),S(e,"currentAnimationTo",null),S(e,"animationCallback",null),e}return se(n,a),K(n,[{key:"x",get:function(){return this.state.x}},{key:"y",get:function(){return this.state.y}},{key:"angle",get:function(){return this.state.angle}},{key:"ratio",get:function(){return this.state.ratio}},{key:"getState",value:function(){return O({},this.state)}},{key:"getPreviousState",value:function(){return O({},this.previousState)}},{key:"getBoundedRatio",value:function(t){var r=t;return typeof this.minRatio=="number"&&(r=Math.max(r,this.minRatio)),typeof this.maxRatio=="number"&&(r=Math.min(r,this.maxRatio)),r}},{key:"validateState",value:function(t){var r=this.getState();return this.enabledPanning&&typeof t.x=="number"&&(r.x=t.x),this.enabledPanning&&typeof t.y=="number"&&(r.y=t.y),this.enabledZooming&&typeof t.ratio=="number"&&(r.ratio=this.getBoundedRatio(t.ratio)),this.enabledRotation&&typeof t.angle=="number"&&(r.angle=t.angle),this.constrainState?this.constrainState(r):r}},{key:"isAnimating",value:function(){return this.nextFrame!==null}},{key:"setState",value:function(t){if(!this.enabled)return this;var r=this.validateState(t);return Ri(this.state,r)?this:(this.previousState=this.state,this.state=r,this.emit("updated",this.getState()),this)}},{key:"updateState",value:function(t){return this.setState(t(this.getState())),this}},{key:"animate",value:function(t,r){var i=this;return this.enabled?new Promise(function(o){return i.runAnimation(t,O(O({},Li),r),o)}):Promise.resolve()}},{key:"cancelAnimation",value:function(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}},{key:"zoomIn",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.factor,i=r===void 0?Go:r,o=No(t,dc);return this.animate({ratio:this.ratio/i},o)}},{key:"zoomOut",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.factor,i=r===void 0?Go:r,o=No(t,uc);return this.animate({ratio:this.ratio*i},o)}},{key:"reset",value:function(t){return this.animate(hr,t)}},{key:"runAnimation",value:function(t,r,i){var o=this,s=Jt(r.easing),l=Date.now(),d=this.getState(),u=this.validateState(t),c=function(){if(!o.enabled){o.cancelAnimation();return}var h=r.duration>0?(Date.now()-l)/r.duration:1;if(h>=1){o.nextFrame=null,o.setState(u),o.resolveAnimation(),o.emitAnimationEnd(!0);return}var g=s(h);o.setState({x:d.x+(u.x-d.x)*g,y:d.y+(u.y-d.y)*g,angle:d.angle+(u.angle-d.angle)*g,ratio:d.ratio+(u.ratio-d.ratio)*g}),o.nextFrame=requestAnimationFrame(c)};this.cancelAnimation(),this.currentAnimationFrom=d,this.currentAnimationTo=u,this.animationCallback=i,this.emit("animationStart",{from:d,to:u}),c()}},{key:"resolveAnimation",value:function(){var t=this.animationCallback;this.animationCallback=null,t&&t()}},{key:"emitAnimationEnd",value:function(t){var r=this.currentAnimationFrom,i=this.currentAnimationTo;!r||!i||(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit("animationEnd",{from:r,to:i,completed:t}))}}],[{key:"from",value:function(t){var r=new n;return r.setState(t)}}])})(Bn);function be(a,n){var e=n.getBoundingClientRect();return{x:a.clientX-e.left,y:a.clientY-e.top}}function ze(a,n){var e=O(O({},be(a,n)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){e.sigmaDefaultPrevented=!0},original:a});return e}function ct(a){var n="x"in a?a:O(O({},a.touches[0]||a.previousTouches[0]),{},{original:a.original,sigmaDefaultPrevented:a.sigmaDefaultPrevented,preventSigmaDefault:function(){a.sigmaDefaultPrevented=!0,n.sigmaDefaultPrevented=!0}});return n}function cc(a,n){var e=ze(a,n);return e.delta=Zo(a),e}var hc=2;function fa(a){for(var n=[],e=0,t=Math.min(a.length,hc);e<t;e++)n.push(a[e]);return n}function un(a,n,e){var t={touches:fa(a.touches).map(function(r){return be(r,e)}),previousTouches:n.map(function(r){return be(r,e)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:a};return t}function Zo(a){if(typeof a.deltaY<"u")return a.deltaY*-3/360;if(typeof a.detail<"u")return a.detail/-9;throw new Error("Captor: could not extract delta from event.")}var Qo=(function(a){function n(e,t){var r;return Y(this,n),r=oe(this,n),r.container=e,r.renderer=t,r}return se(n,a),K(n)})(Bn),fc=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","enableCameraMouseRotation","gestureTarget","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],gc=fc.reduce(function(a,n){return O(O({},a),{},S({},n,Hn[n]))},{});function cn(a){return a instanceof PointerEvent&&a.pointerType==="touch"}var pc=(function(a){function n(e,t){var r;return Y(this,n),r=oe(this,n,[e,t]),S(r,"enabled",!0),S(r,"draggedEvents",0),S(r,"downStartTime",null),S(r,"lastMouseX",null),S(r,"lastMouseY",null),S(r,"isMouseDown",!1),S(r,"isMoving",!1),S(r,"isPanningStage",!1),S(r,"movingTimeout",null),S(r,"startCameraState",null),S(r,"clicks",0),S(r,"doubleClickTimeout",null),S(r,"isRightMouseDown",!1),S(r,"startRotationAngle",null),S(r,"startCameraAngle",null),S(r,"currentWheelDirection",0),S(r,"lastWheelAnimationId",0),S(r,"settings",gc),r.handleRightClick=r.handleRightClick.bind(r),r.handleDown=r.handleDown.bind(r),r.handleUp=r.handleUp.bind(r),r.handleMove=r.handleMove.bind(r),r.handleWheel=r.handleWheel.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleEnter=r.handleEnter.bind(r),e.addEventListener("contextmenu",r.handleRightClick,{capture:!1}),e.addEventListener("pointerdown",r.handleDown,{capture:!1}),e.addEventListener("wheel",r.handleWheel,{capture:!1,passive:!1}),e.addEventListener("pointerleave",r.handleLeave,{capture:!1}),e.addEventListener("pointerenter",r.handleEnter,{capture:!1}),document.addEventListener("pointermove",r.handleMove,{capture:!1}),document.addEventListener("pointerup",r.handleUp,{capture:!1}),r}return se(n,a),K(n,[{key:"kill",value:function(){var t=this.container;t.removeEventListener("contextmenu",this.handleRightClick),t.removeEventListener("pointerdown",this.handleDown),t.removeEventListener("wheel",this.handleWheel),t.removeEventListener("pointerleave",this.handleLeave),t.removeEventListener("pointerenter",this.handleEnter),document.removeEventListener("pointermove",this.handleMove),document.removeEventListener("pointerup",this.handleUp)}},{key:"handleClick",value:function(t){var r=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(t);setTimeout(function(){r.clicks=0,r.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",ze(t,this.container))}}},{key:"handleRightClick",value:function(t){this.enabled&&(this.settings.enableCameraMouseRotation&&t.preventDefault(),this.emit("rightClick",ze(t,this.container)))}},{key:"handleDoubleClick",value:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var r=ze(t,this.container);if(this.emit("doubleClick",r),!r.sigmaDefaultPrevented){var i=this.renderer.getCamera(),o=i.getBoundedRatio(i.getState().ratio/this.settings.doubleClickZoomingRatio);i.animate(this.renderer.getViewportZoomedState(be(t,this.container),o),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(t){if(!(!this.enabled||cn(t))){if(t.button===0){this.startCameraState=this.renderer.getCamera().getState();var r=be(t,this.container),i=r.x,o=r.y;this.lastMouseX=i,this.lastMouseY=o,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(t.button===2&&this.settings.enableCameraMouseRotation){var s=be(t,this.container),l=s.x,d=s.y,u=this.container.offsetWidth/2,c=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(d-c,l-u),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit("mousedown",ze(t,this.container))}}},{key:"handleUp",value:function(t){var r=this;if(!(!this.enabled||cn(t)||!this.isMouseDown&&!this.isRightMouseDown)){if(this.isRightMouseDown){this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit("mouseup",ze(t,this.container));return}var i=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var o=be(t,this.container),s=o.x,l=o.y,d=i.getState(),u=i.getPreviousState();this.isMoving?i.animate({x:d.x+this.settings.inertiaRatio*(d.x-u.x),y:d.y+this.settings.inertiaRatio*(d.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==s||this.lastMouseY!==l)&&i.setState({x:d.x,y:d.y}),this.isMoving=!1,setTimeout(function(){var c=r.draggedEvents>0;r.draggedEvents=0;var f=r.renderer.getSetting("hideEdgesOnMove")||r.renderer.getSetting("hideLabelsOnMove");c&&f&&r.renderer.refresh()},0),this.emit("mouseup",ze(t,this.container)),(t.target===this.container||t.composedPath()[0]===this.container)&&this.handleClick(t)}}},{key:"handleMove",value:function(t){var r=this;if(!(!this.enabled||cn(t))){var i=ze(t,this.container);if(this.emit("mousemovebody",i),(t.target===this.container||t.composedPath()[0]===this.container)&&this.emit("mousemove",i),this.isMouseDown&&this.draggedEvents++,!i.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.movingTimeout=null,r.isMoving=!1},this.settings.dragTimeout);var o=this.renderer.getCamera(),s=be(t,this.container),l=s.x,d=s.y,u=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),c=this.renderer.viewportToFramedGraph({x:l,y:d}),f=u.x-c.x,h=u.y-c.y,g=o.getState(),v=g.x+f,b=g.y+h;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),o.setState({x:v,y:b}),this.lastMouseX=l,this.lastMouseY=d,t.preventDefault(),t.stopPropagation()}if(this.isRightMouseDown){var p=be(t,this.container),m=p.x,y=p.y,x=this.container.offsetWidth/2,_=this.container.offsetHeight/2,T=Math.atan2(y-_,m-x),A=T-this.startRotationAngle,E=this.renderer.getCamera();E.setState({angle:this.startCameraAngle+A}),t.preventDefault(),t.stopPropagation()}}}}},{key:"handleLeave",value:function(t){cn(t)||this.emit("mouseleave",ze(t,this.container))}},{key:"handleEnter",value:function(t){cn(t)||this.emit("mouseenter",ze(t,this.container))}},{key:"handleWheel",value:function(t){var r=this,i=this.renderer.getCamera();if(!(!this.enabled||!i.enabledZooming)){var o=cc(t,this.container);if(this.emit("wheel",o),!o.sigmaDefaultPrevented){var s=this.settings.gestureTarget;if(s!=="page"){if(s==="shared"&&!t.ctrlKey&&!t.metaKey){this.renderer._showGestureHint("wheel");return}var l=Zo(t);if(l){t.preventDefault(),t.stopPropagation();var d=i.getState().ratio,u=l>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,c=i.getBoundedRatio(d*u),f=l>0?1:-1,h=Date.now();if(d!==c&&!(this.currentWheelDirection===f&&this.lastWheelTriggerTime&&h-this.lastWheelTriggerTime<this.settings.zoomDuration/5)){var g=++this.lastWheelAnimationId;i.animate(this.renderer.getViewportZoomedState(be(t,this.container),c),{easing:"quadraticOut",duration:this.settings.zoomDuration}).then(function(){r.lastWheelAnimationId===g&&(r.currentWheelDirection=0)}),this.currentWheelDirection=f,this.lastWheelTriggerTime=h}}}}}}},{key:"setSettings",value:function(t){this.settings=t}}])})(Qo),vc=["dragTimeout","gestureTarget","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],mc=vc.reduce(function(a,n){return O(O({},a),{},S({},n,Hn[n]))},{}),bc=(function(a){function n(e,t){var r;return Y(this,n),r=oe(this,n,[e,t]),S(r,"enabled",!0),S(r,"isMoving",!1),S(r,"hasMoved",!1),S(r,"isPanningStage",!1),S(r,"isZoomingStage",!1),S(r,"touchMode",0),S(r,"startTouchesPositions",[]),S(r,"lastTouches",[]),S(r,"lastTap",null),S(r,"settings",mc),r.handleStart=r.handleStart.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleMove=r.handleMove.bind(r),e.addEventListener("touchstart",r.handleStart,{capture:!1}),e.addEventListener("touchcancel",r.handleLeave,{capture:!1}),document.addEventListener("touchend",r.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",r.handleMove,{capture:!1,passive:!1}),r}return se(n,a),K(n,[{key:"kill",value:function(){var t=this.container;t.removeEventListener("touchstart",this.handleStart),t.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"doesCapture",value:function(t){var r=this.settings.gestureTarget;return r==="graph"?!0:r==="page"?!1:t>=2}},{key:"syncStageFlags",value:function(){var t=this.touchMode===1&&this.hasMoved,r=this.touchMode===2;t!==this.isPanningStage&&(this.isPanningStage=t,this.renderer._setPanning(t)),r!==this.isZoomingStage&&(this.isZoomingStage=r,this.renderer._setZooming(r))}},{key:"handleStart",value:function(t){var r=this;if(this.enabled){var i=fa(t.touches);if(this.touchMode=i.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=i.map(function(h){return be(h,r.container)}),this.touchMode===2){var o=J(this.startTouchesPositions,2),s=o[0],l=s.x,d=s.y,u=o[1],c=u.x,f=u.y;this.startTouchesAngle=Math.atan2(f-d,c-l),this.startTouchesDistance=Math.sqrt(Math.pow(c-l,2)+Math.pow(f-d,2))}this.syncStageFlags(),this.emit("touchdown",un(t,this.lastTouches,this.container)),this.lastTouches=i,this.lastTouchesPositions=this.startTouchesPositions,t.cancelable&&(this.doesCapture(t.touches.length)||this.renderer._hasNodeDrag())&&t.preventDefault()}}},{key:"handleLeave",value:function(t){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(t.cancelable&&this.doesCapture(this.touchMode)&&t.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(t.touches.length===1){this.handleStart(t);break}case 1:if(this.isMoving){var r=this.renderer.getCamera(),i=r.getState(),o=r.getPreviousState();r.animate({x:i.x+this.settings.inertiaRatio*(i.x-o.x),y:i.y+this.settings.inertiaRatio*(i.y-o.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.syncStageFlags(),this.emit("touchup",un(t,this.lastTouches,this.container)),!t.touches.length){var s=be(this.lastTouches[0],this.container),l=this.startTouchesPositions[0],d=Math.pow(s.x-l.x,2)+Math.pow(s.y-l.y,2);if(!t.touches.length&&d<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var u=un(t,this.lastTouches,this.container);if(this.emit("doubletap",u),this.lastTap=null,!u.sigmaDefaultPrevented&&this.settings.gestureTarget!=="page"){var c=this.renderer.getCamera(),f=c.getBoundedRatio(c.getState().ratio/this.settings.doubleClickZoomingRatio);c.animate(this.renderer.getViewportZoomedState(s,f),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var h=un(t,this.lastTouches,this.container);this.emit("tap",h),this.lastTap={time:Date.now(),position:h.touches[0]||h.previousTouches[0]}}}this.lastTouches=fa(t.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(t){var r=this;if(!(!this.enabled||!this.startTouchesPositions.length)){var i=this.doesCapture(t.touches.length);i&&t.preventDefault();var o=fa(t.touches),s=o.map(function(U){return be(U,r.container)}),l=this.lastTouches;this.lastTouches=o,this.lastTouchesPositions=s;var d=un(t,l,this.container);if(this.emit("touchmove",d),!d.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=s.some(function(U,$){var X=r.startTouchesPositions[$];return X&&(U.x!==X.x||U.y!==X.y)})),!!this.hasMoved)){if(!i){this.settings.gestureTarget==="shared"&&this.renderer._showGestureHint("touch");return}this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=this.startCameraState,f=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var h=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),g=h.x,v=h.y,b=this.renderer.viewportToFramedGraph(s[0]),p=b.x,m=b.y;u.setState({x:c.x+g-p,y:c.y+v-m});break}case 2:{var y={x:.5,y:.5,angle:0,ratio:1},x=s[0],_=x.x,T=x.y,A=s[1],E=A.x,R=A.y,C=Math.atan2(R-T,E-_)-this.startTouchesAngle,k=Math.hypot(R-T,E-_)/this.startTouchesDistance,D=u.getBoundedRatio(c.ratio/k);y.ratio=D,y.angle=c.angle+C;var F=this.getDimensions(),L=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:c}),G=Math.min(F.width,F.height)-2*f,N=G/F.width,z=G/F.height,P=D/G,w=_-G/2/N,I=T-G/2/z,H=Sa({x:w,y:I},y.angle);w=H.x,I=H.y,y.x=L.x-w*P,y.y=L.y+I*P,u.setState(y);break}}}}}},{key:"setSettings",value:function(t){this.settings=t}}])})(Qo),yc=(function(){function a(n,e,t,r){Y(this,a),S(this,"pendingNode",null),S(this,"session",null),this.graph=n,this.viewportToGraph=e,this.setNodesState=t,this.emit=r}return K(a,[{key:"start",value:function(e,t,r,i,o){var s=r(e),l=!1;if(this.emit("nodeDragStart",{node:e,allDraggedNodes:s,event:t,preventSigmaDefault:function(){l=!0}}),l)return!1;var d=new Map,u=M(s),c;try{for(u.s();!(c=u.n()).done;){var f=c.value;d.set(f,{x:this.graph.getNodeAttribute(f,i),y:this.graph.getNodeAttribute(f,o)})}}catch(h){u.e(h)}finally{u.f()}return this.session={node:e,allNodes:s,startPosition:this.viewportToGraph(t),startNodePositions:d,xAttr:i,yAttr:o},this.setNodesState(s,{isDragged:!0}),!0}},{key:"applyMove",value:function(e,t){var r=this.session,i=r.allNodes,o=r.startNodePositions,s=r.startPosition,l=r.xAttr,d=r.yAttr,u=this.viewportToGraph(e),c={x:u.x-s.x,y:u.y-s.y},f=M(i),h;try{for(f.s();!(h=f.n()).done;){var g=h.value,v=o.get(g);if(!(!v||!this.graph.hasNode(g))){var b={x:v.x+c.x,y:v.y+c.y};t?this.graph.mergeNodeAttributes(g,t(b,g)):(this.graph.setNodeAttribute(g,l,b.x),this.graph.setNodeAttribute(g,d,b.y))}}}catch(p){f.e(p)}finally{f.f()}}},{key:"end",value:function(){if(this.pendingNode=null,!this.session)return null;var e=this.session,t=e.node,r=e.allNodes;return this.setNodesState(r,{isDragged:!1}),this.session=null,{node:t,allNodes:r}}},{key:"removeNode",value:function(e){e===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===e?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(e)&&(this.session.allNodes=this.session.allNodes.filter(function(t){return t!==e}),this.session.startNodePositions.delete(e)))}},{key:"clear",value:function(){this.pendingNode=null,this.session=null}}])})(),xc=(function(){function a(n,e){Y(this,a),S(this,"groups",new Map),S(this,"edgeToGroupKey",new Map),this.graph=n,this.onGroupChanged=e}return K(a,[{key:"getGroupKey",value:function(e){var t=this.graph.source(e),r=this.graph.target(e);return t<r?"".concat(t,"\0").concat(r):"".concat(r,"\0").concat(t)}},{key:"sortGroup",value:function(e,t){var r=this,i=t.split("\0")[0];e.sort(function(o,s){var l=r.graph.source(o)===i||!r.graph.isDirected(o)?0:1,d=r.graph.source(s)===i||!r.graph.isDirected(s)?0:1;return l-d})}},{key:"register",value:function(e){var t=this.getGroupKey(e),r=this.groups.get(t);r||(r=[],this.groups.set(t,r)),r.includes(e)||r.push(e),this.edgeToGroupKey.set(e,t),this.sortGroup(r,t),this.onGroupChanged(r,r.length)}},{key:"unregister",value:function(e){var t=this.edgeToGroupKey.get(e);if(t){this.edgeToGroupKey.delete(e);var r=this.groups.get(t);if(r){var i=r.indexOf(e);i!==-1&&r.splice(i,1),r.length===0?this.groups.delete(t):this.onGroupChanged(r,r.length)}}}},{key:"getGroup",value:function(e){var t,r=this.edgeToGroupKey.get(e);return r?(t=this.groups.get(r))!==null&&t!==void 0?t:[]:[]}},{key:"getSiblings",value:function(e){return this.getGroup(e).filter(function(t){return t!==e})}},{key:"rebuild",value:function(){var e=this;this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(function(l){var d=e.getGroupKey(l),u=e.groups.get(d);u||(u=[],e.groups.set(d,u)),u.push(l),e.edgeToGroupKey.set(l,d)});var t=M(this.groups),r;try{for(t.s();!(r=t.n()).done;){var i=J(r.value,2),o=i[0],s=i[1];this.sortGroup(s,o),this.onGroupChanged(s,s.length)}}catch(l){t.e(l)}finally{t.f()}}},{key:"clear",value:function(){this.groups.clear(),this.edgeToGroupKey.clear()}}])})();function Mo(a,n){var e;if(a===!1||a==="extend"||a==="separate")return a;var t=a[n];return t!==void 0?t:(e=a.default)!==null&&e!==void 0?e:!1}function Oo(a){return a===!1?!1:a==="extend"||a==="separate"?!0:Object.values(a).some(function(n){return n==="extend"||n==="separate"})}function Bo(a){return a==="separate"?!0:a===!1||a==="extend"?!1:a.default==="separate"?!0:Object.values(a).includes("separate")}var ge={node:{parent:null,eventSuffix:"Node",payloadKey:"node",isEnabled:function(){return!0},writesPickingThisFrame:function(){return!0},setHover:function(n,e,t){return n.setNodeState(e,{isHovered:t})},getCursor:function(n,e){var t;return(t=n.nodeDataCache[e])===null||t===void 0?void 0:t.cursor},isHitValid:function(n,e){var t;return((t=n.nodeDataCache[e])===null||t===void 0?void 0:t.visibility)!=="hidden"}},edge:{parent:null,eventSuffix:"Edge",payloadKey:"edge",isEnabled:function(n){return!!n.settings.enableEdgeEvents},writesPickingThisFrame:function(n){return!!n.settings.enableEdgeEvents},setHover:function(n,e,t){return n.setEdgeState(e,{isHovered:t})},getCursor:function(n,e){var t;return(t=n.edgeDataCache[e])===null||t===void 0?void 0:t.cursor}},nodeLabel:{parent:"node",eventSuffix:"NodeLabel",payloadKey:"node",isEnabled:function(n){return Bo(n.settings.nodeLabelEvents)},writesPickingThisFrame:function(n){return Oo(n.settings.nodeLabelEvents)},setHover:function(n,e,t){return n.setNodeState(e,{isLabelHovered:t})},getCursor:function(n,e){var t;return(t=n.nodeDataCache[e])===null||t===void 0?void 0:t.labelCursor},resolveForVerb:function(n,e,t){var r=Mo(t.settings.nodeLabelEvents,e);return r===!1?null:r==="extend"?{kind:"node",key:n.key}:n}},edgeLabel:{parent:"edge",eventSuffix:"EdgeLabel",payloadKey:"edge",isEnabled:function(n){return Bo(n.settings.edgeLabelEvents)},writesPickingThisFrame:function(n){return Oo(n.settings.edgeLabelEvents)},setHover:function(n,e,t){return n.setEdgeState(e,{isLabelHovered:t})},getCursor:function(n,e){var t;return(t=n.edgeDataCache[e])===null||t===void 0?void 0:t.labelCursor},resolveForVerb:function(n,e,t){var r=Mo(t.settings.edgeLabelEvents,e);return r===!1?null:r==="extend"?{kind:"edge",key:n.key}:n}}},gt=["node","edge","nodeLabel","edgeLabel"];function _c(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function ft(a,n,e){var t;return(t=a.idsByKind[n].get(e))!==null&&t!==void 0?t:0}function fr(a,n){var e=M(gt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;if(r===n||ge[r].parent===n){var i=M(a.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;a.lookup[s]=null}}catch(f){i.e(f)}finally{i.f()}a.idsByKind[r]=new Map}}}catch(f){e.e(f)}finally{e.f()}var l=1,d=M(gt),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;if(c===n)break;l+=a.idsByKind[c].size}}catch(f){d.e(f)}finally{d.f()}a.nextId=l}function Wo(a,n,e){var t=a.nextId++;return a.idsByKind[n].set(e,t),a.lookup[t]={kind:n,key:e},t}function Tc(a,n){var e=M(gt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;if(ge[r].parent!==null){var i=M(a.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;a.lookup[s]=null}}catch(_){i.e(_)}finally{i.f()}a.idsByKind[r]=new Map}}}catch(_){e.e(_)}finally{e.f()}a.nextId=1;var l=M(gt),d;try{for(l.s();!(d=l.n()).done;){var u=d.value;if(ge[u].parent===null){var c=M(a.idsByKind[u].values()),f;try{for(c.s();!(f=c.n()).done;){var h=f.value;h>=a.nextId&&(a.nextId=h+1)}}catch(_){c.e(_)}finally{c.f()}}}}catch(_){l.e(_)}finally{l.f()}var g=M(gt),v;try{for(g.s();!(v=g.n()).done;){var b=v.value,p=ge[b];if(!(p.parent===null||!p.isEnabled(n))){var m=M(a.idsByKind[p.parent].keys()),y;try{for(m.s();!(y=m.n()).done;){var x=y.value;a.idsByKind[b].set(x,a.nextId),a.lookup[a.nextId]={kind:b,key:x},a.nextId++}}catch(_){m.e(_)}finally{m.f()}}}}catch(_){g.e(_)}finally{g.f()}}function Sc(a,n){var e=M(gt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value,i=a[r],o=n[r];if(i!==o){if(i.size!==o.size)return!1;var s=M(i),l;try{for(s.s();!(l=s.n()).done;){var d=J(l.value,2),u=d[0],c=d[1];if(o.get(u)!==c)return!1}}catch(f){s.e(f)}finally{s.f()}}}}catch(f){e.e(f)}finally{e.f()}return!0}function Uo(a,n,e){ge[n.kind].setHover(a,n.key,e)}function Ec(a,n){return ge[n.kind].getCursor(a,n.key)}function hn(a,n){return"".concat(n).concat(ge[a].eventSuffix)}function fn(a,n){return O(O({},n),{},S({},ge[a.kind].payloadKey,a.key))}function Ac(a,n,e){var t=ge[n.kind].resolveForVerb;return t?t(n,e,a):n}function Rc(a,n){var e=ge[n.kind].isHitValid;return e?e(a,n.key):!0}function gr(a){return gt.filter(function(n){return n===a||ge[n].parent===a})}function Jo(a,n,e){return n&&(n=Ac(a,n,e)),n&&!Rc(a,n)&&(n=null),n}function pr(a,n,e){var t=e==="wheel"?a.stateManager.hovered:a.getHitAtPosition(n);return Jo(a,t,e)}function Dc(a,n){return!a||!n?a===n:a.kind===n.kind&&a.key===n.key}function es(a,n,e){var t={event:e,preventSigmaDefault:function(){return e.preventSigmaDefault()}},r=a.dragManager.session,i=r?{kind:"node",key:r.node}:Jo(a,n,"enter"),o=a.stateManager,s=o.hovered;Dc(s,i)||(s&&(Uo(a,s,!1),a.emit(hn(s.kind,"leave"),fn(s,t))),o.setHovered(i),i&&(Uo(a,i,!0),a.emit(hn(i.kind,"enter"),fn(i,t))),a.updateContainerCursor())}function wc(a,n,e,t){t.handleResize=function(){return a.scheduleRefresh()},window.addEventListener("resize",t.handleResize),t.handleMove=function(i){a.hoverResolver.pointerMoved(ct(i))},t.handleMoveBody=function(i){var o=ct(i),s=a.dragManager;if(s.pendingNode&&!s.session){var l=a.nodeStyleAnalysis,d=l.xAttribute,u=l.yAttribute,c=a.settings;s.start(s.pendingNode,o,c.getDraggedNodes,d||"x",u||"y"),s.pendingNode=null}s.session&&(s.applyMove(o,a.settings.dragPositionToAttributes),a.emit("nodeDrag",{node:s.session.node,allDraggedNodes:s.session.allNodes,event:o}),o.preventSigmaDefault()),a.emit("moveBody",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})},t.handleLeave=function(i){var o=ct(i),s={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}};a.hoverResolver.pointerLeft(),es(a,null,o),a.emit("leaveStage",s)},t.handleEnter=function(i){var o=ct(i);a.emit("enterStage",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})};var r=function(o){return function(s){var l=ct(s),d={event:l,preventSigmaDefault:function(){return l.preventSigmaDefault()}},u=pr(a,l,o);if(u){a.emit(hn(u.kind,o),fn(u,d));return}a.emit("".concat(o,"Stage"),d)}};t.handleClick=r("click"),t.handleRightClick=r("rightClick"),t.handleDoubleClick=r("doubleClick"),t.handleWheel=r("wheel"),t.handleDown=function(i){var o=ct(i),s={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},l=pr(a,o,"down");if(l){l.kind==="node"&&a.settings.enableNodeDrag&&(a.dragManager.pendingNode=l.key),a.emit(hn(l.kind,"down"),fn(l,s));return}a.emit("downStage",s)},t.handleUp=function(i){var o=ct(i),s={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},l=a.dragManager.end();l&&a.emit("nodeDragEnd",O({node:l.node,allDraggedNodes:l.allNodes},s));var d=pr(a,o,"up");if(d){a.emit(hn(d.kind,"up"),fn(d,s));return}a.emit("upStage",s)},n.on("mousemove",t.handleMove),n.on("mousemovebody",t.handleMoveBody),n.on("click",t.handleClick),n.on("rightClick",t.handleRightClick),n.on("doubleClick",t.handleDoubleClick),n.on("wheel",t.handleWheel),n.on("mousedown",t.handleDown),n.on("mouseup",t.handleUp),n.on("mouseleave",t.handleLeave),n.on("mouseenter",t.handleEnter),e.on("touchdown",t.handleDown),e.on("touchdown",t.handleMove),e.on("touchup",t.handleUp),e.on("touchmove",t.handleMove),e.on("tap",t.handleClick),e.on("doubletap",t.handleDoubleClick),e.on("touchmove",t.handleMoveBody)}function Lc(a,n){var e=a.graph,t=new Set(["x","y","zIndex","type"]);n.eachNodeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,s=!o||o.some(function(l){return t.has(l)});a.refresh({partialGraph:{nodes:e.nodes()},skipIndexation:!s,schedule:!0})},n.eachEdgeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,s=o&&["zIndex","type"].some(function(l){return o?.includes(l)});a.refresh({partialGraph:{edges:e.edges()},skipIndexation:!s,schedule:!0})},n.addNodeGraphUpdate=function(r){a.addNode(r.key),a.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},n.updateNodeGraphUpdate=function(r){a.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},n.dropNodeGraphUpdate=function(r){a.removeNode(r.key),a.refresh({schedule:!0})},n.addEdgeGraphUpdate=function(r){var i=r.key;a.edgeGroups.register(i),a.addEdge(i);var o=a.edgeGroups.getSiblings(i),s=M(o),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;a.addEdge(d)}}catch(u){s.e(u)}finally{s.f()}a.refresh({partialGraph:{edges:[i].concat(V(o))},schedule:!0})},n.updateEdgeGraphUpdate=function(r){a.refresh({partialGraph:{edges:[r.key]},skipIndexation:!1,schedule:!0})},n.dropEdgeGraphUpdate=function(r){var i=r.key,o=a.edgeGroups.getSiblings(i);a.edgeGroups.unregister(i),a.removeEdge(i);var s=M(o),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;a.addEdge(d)}}catch(u){s.e(u)}finally{s.f()}a.refresh({schedule:!0})},n.clearEdgesGraphUpdate=function(){a.clearEdgeState(),a.clearEdgeIndices(),a.refresh({schedule:!0})},n.clearGraphUpdate=function(){a.clearEdgeState(),a.clearNodeState(),a.clearEdgeIndices(),a.clearNodeIndices(),a.refresh({schedule:!0})},e.on("nodeAdded",n.addNodeGraphUpdate),e.on("nodeDropped",n.dropNodeGraphUpdate),e.on("nodeAttributesUpdated",n.updateNodeGraphUpdate),e.on("eachNodeAttributesUpdated",n.eachNodeAttributesUpdatedGraphUpdate),e.on("edgeAdded",n.addEdgeGraphUpdate),e.on("edgeDropped",n.dropEdgeGraphUpdate),e.on("edgeAttributesUpdated",n.updateEdgeGraphUpdate),e.on("eachEdgeAttributesUpdated",n.eachEdgeAttributesUpdatedGraphUpdate),e.on("edgesCleared",n.clearEdgesGraphUpdate),e.on("cleared",n.clearGraphUpdate)}function Cc(a,n){a.removeListener("nodeAdded",n.addNodeGraphUpdate),a.removeListener("nodeDropped",n.dropNodeGraphUpdate),a.removeListener("nodeAttributesUpdated",n.updateNodeGraphUpdate),a.removeListener("eachNodeAttributesUpdated",n.eachNodeAttributesUpdatedGraphUpdate),a.removeListener("edgeAdded",n.addEdgeGraphUpdate),a.removeListener("edgeDropped",n.dropEdgeGraphUpdate),a.removeListener("edgeAttributesUpdated",n.updateEdgeGraphUpdate),a.removeListener("eachEdgeAttributesUpdated",n.eachEdgeAttributesUpdatedGraphUpdate),a.removeListener("edgesCleared",n.clearEdgesGraphUpdate),a.removeListener("cleared",n.clearGraphUpdate)}var kc={x:.5,y:.5,angle:0,ratio:1},Pc=8,Fc=.001;function Ic(a){var n=a.coords,e=a.nodeData,t=a.dimensions,r=a.stagePadding,i=a.zoomToSizeRatioFunction,o=a.itemSizesReference,s=a.fitLabels,l=a.nodeLabelBox,d=Object.keys(n);if(!d.length)return a.extent;for(var u=i(1)||1,c=o==="positions",f=t.width,h=t.height,g=a.extent,v=0;v<Pc;v++){for(var b=Un(g),p={width:g.x[1]-g.x[0]||1,height:g.y[1]-g.y[0]||1},m=je(kc,t,p,r),y=Ho(m,b({x:0,y:0}),f,h),x=Ho(m,b({x:1,y:0}),f,h),_=Math.hypot(x.x-y.x,x.y-y.y)||1,T=1/0,A=-1/0,E=1/0,R=-1/0,C=0,k=d.length;C<k;C++){var D=d[C],F=e[D],L=F.size/u*(c?_:1),G=-L,N=L,z=-L,P=L;if(s){var w=l(F,L);w&&(w.minX<G&&(G=w.minX),w.maxX>N&&(N=w.maxX),w.minY<z&&(z=w.minY),w.maxY>P&&(P=w.maxY))}var I=n[D],H=I.x,U=I.y;T=Math.min(T,H+G/_),A=Math.max(A,H+N/_),E=Math.min(E,U-P/_),R=Math.max(R,U-z/_)}var $={x:[T,A],y:[E,R]},X=Math.max($.x[1]-$.x[0],$.y[1]-$.y[0])||1,Q=Math.max(Math.abs($.x[0]-g.x[0]),Math.abs($.x[1]-g.x[1]),Math.abs($.y[0]-g.y[0]),Math.abs($.y[1]-g.y[1]));if(g=$,Q/X<Fc)break}return g}function Ho(a,n,e,t){var r=At(a,n);return{x:(1+r.x)*e/2,y:(1-r.y)*t/2}}var Nc=typeof navigator<"u"&&/Mac|iP(hone|ad|od)/.test(navigator.platform),Gc=1500,zc=`.sigma-gesture-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
  background: #00000066;
  color: #ffffff;
  font-size: 1em;
  pointer-events: none;
  transition: opacity 0.1s;
}`;function $o(a){var n,e,t=Ct("style");t.textContent=a,document.head.appendChild(t);var r=((n=(e=t.sheet)===null||e===void 0?void 0:e.cssRules.length)!==null&&n!==void 0?n:0)>0;return t.remove(),r}var ht=null;function Mc(){return ht===null&&(ht=zc,$o("@scope {}")&&(ht=`@scope {
`.concat(ht,`
}`)),$o("@layer sigma-gesture-hint {}")&&(ht=`@layer sigma-gesture-hint {
`.concat(ht,`
}`))),ht}var Oc=(function(){function a(n){Y(this,a),S(this,"hideTimeout",null),this.styleElement=Ct("style"),this.styleElement.textContent=Mc(),n.appendChild(this.styleElement),this.element=Ct("div",{opacity:"0"},{class:"sigma-gesture-hint"}),n.appendChild(this.element)}return K(a,[{key:"show",value:function(e,t){var r=this,i=e==="touch"?t.sharedGestureTouchMessage:Nc?t.sharedGestureAppleWheelMessage:t.sharedGestureWheelMessage;i&&(this.element.textContent=i,this.element.style.opacity="1",typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(function(){r.hideTimeout=null,r.element.style.opacity="0"},Gc))}},{key:"kill",value:function(){typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}}])})(),Bc=(function(){function a(n){Y(this,a),S(this,"readBuffer",null),S(this,"fence",null),S(this,"result",new Uint8Array(4)),S(this,"generation",0),S(this,"readGeneration",0),S(this,"lastEvent",null),S(this,"active",!1),S(this,"dirty",!1),S(this,"rafId",null),S(this,"killed",!1),this.options=n}return K(a,[{key:"pointerMoved",value:function(e){this.lastEvent=e,this.active=!0,!this.options.isRenderPending()&&this.request()}},{key:"pointerLeft",value:function(){this.active=!1,this.dirty=!1}},{key:"frameRendered",value:function(){this.request()}},{key:"invalidate",value:function(){this.generation++}},{key:"request",value:function(){if(!(this.killed||!this.active||!this.lastEvent)){if(this.fence){this.dirty=!0;return}this.startRead()}}},{key:"startRead",value:function(){var e=this.options,t=e.gl,r=e.getFrameBuffer,i=e.getPixelRatio,o=e.getDownSizingRatio;this.readGeneration=this.generation;var s=this.lastEvent,l=Ea(t,s.x,s.y,i(),o()),d=J(l,2),u=d[0],c=d[1];this.readBuffer||(this.readBuffer=t.createBuffer()),t.bindFramebuffer(t.FRAMEBUFFER,r()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(u,c,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(s)}},{key:"schedulePoll",value:function(e){var t=this;this.rafId=requestAnimationFrame(function(){t.rafId=null,t.poll(e)})}},{key:"poll",value:function(e){var t=this.options,r=t.gl,i=t.onIndex;if(!(this.killed||!this.fence)){var o=r.clientWaitSync(this.fence,0,0);if(o===r.TIMEOUT_EXPIRED){this.schedulePoll(e);return}if(r.deleteSync(this.fence),this.fence=null,o!==r.WAIT_FAILED&&this.readGeneration===this.generation){r.bindBuffer(r.PIXEL_PACK_BUFFER,this.readBuffer),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,this.result),r.bindBuffer(r.PIXEL_PACK_BUFFER,null);var s=J(this.result,4),l=s[0],d=s[1],u=s[2],c=s[3];this.active&&i(Aa(l,d,u,c),e)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}}},{key:"reset",value:function(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}},{key:"kill",value:function(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;var e=this.options.gl;this.fence&&e.deleteSync(this.fence),this.fence=null,this.readBuffer&&e.deleteBuffer(this.readBuffer),this.readBuffer=null}}])})(),Vo=(function(){function a(n,e){Y(this,a),this.key=n,this.size=e}return K(a,null,[{key:"compare",value:function(e,t){return e.size>t.size?-1:e.size<t.size||e.key>t.key?1:-1}}])})(),ha=(function(){function a(){Y(this,a),S(this,"width",0),S(this,"height",0),S(this,"cellSize",0),S(this,"columns",0),S(this,"rows",0),S(this,"cells",{})}return K(a,[{key:"resizeAndClear",value:function(e,t){this.width=e.width,this.height=e.height,this.cellSize=t,this.columns=Math.ceil(e.width/t),this.rows=Math.ceil(e.height/t),this.cells={}}},{key:"getIndex",value:function(e){var t=Math.floor(e.x/this.cellSize),r=Math.floor(e.y/this.cellSize);return r*this.columns+t}},{key:"add",value:function(e,t,r){var i=new Vo(e,t),o=this.getIndex(r),s=this.cells[o];s||(s=[],this.cells[o]=s),s.push(i)}},{key:"organize",value:function(){for(var e in this.cells){var t=this.cells[e];t.sort(Vo.compare)}}},{key:"getLabelsToDisplay",value:function(e,t,r){var i=this.cellSize*this.cellSize,o=i/e/e,s=o*t/i,l=Math.ceil(s),d=[];if(r)for(var u=Math.max(0,Math.floor(r.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(r.x2/this.cellSize)),f=Math.max(0,Math.floor(r.y1/this.cellSize)),h=Math.min(this.rows-1,Math.floor(r.y2/this.cellSize)),g=f;g<=h;g++)for(var v=u;v<=c;v++){var b=g*this.columns+v,p=this.cells[b];if(p)for(var m=0;m<Math.min(l,p.length);m++)d.push(p[m].key)}else for(var y in this.cells)for(var x=this.cells[y],_=0;_<Math.min(l,x.length);_++)d.push(x[_].key);return d}}])})();function Wc(a){var n=a.graph,e=a.hoveredNode,t=a.highlightedNodes,r=a.displayedNodeLabels,i=new Set,o=new Set(t);e&&o.add(e);var s=M(o),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;n.hasNode(d)&&n.forEachEdge(d,function(h){i.add(h)})}}catch(h){s.e(h)}finally{s.f()}var u=M(r),c;try{var f=function(){var g=c.value;if(o.has(g))return 1;n.forEachEdge(g,function(v,b,p,m){var y=p===g?m:p;r.has(y)&&i.add(v)})};for(u.s();!(c=u.n()).done;)f()}catch(h){u.e(h)}finally{u.f()}return Array.from(i)}var Mt=150,Ot=50,Uc={both:0,node:1,label:2},Hc={over:0,above:1,below:2,auto:3},jo=12,$c=3,Vc=(function(){function a(n){Y(this,a),S(this,"labelGrid",new ha),S(this,"edgeAnchorGrid",new ha),S(this,"displayedNodeLabels",new Set),S(this,"displayedEdgeLabels",new Set),S(this,"edgeLabelCandidates",[]),S(this,"renderedNodeLabels",new Set),S(this,"labelSizeCache",new Map),S(this,"framePassPoints",new Float32Array(0)),S(this,"labelsDirty",!0),this.internals=n}return K(a,[{key:"resetFrame",value:function(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}},{key:"clearEdgeLabels",value:function(){this.displayedEdgeLabels=new Set}},{key:"resetLabelGrid",value:function(){this.labelGrid=new ha,this.edgeAnchorGrid=new ha}},{key:"processWebGLLabels",value:function(e){for(var t,r=this.internals,i=r.labelProgram,o=r.primitives,s=r.nodeDataCache,l=(o==null||(t=o.nodes)===null||t===void 0||(t=t.label)===null||t===void 0||(t=t.font)===null||t===void 0?void 0:t.family)||"sans-serif",d=new Map,u=0,c=e.length;u<c;u++){var f=e[u],h=s[f];if(!(h.visibility==="hidden"||!h.label)){var g=h.labelFont||l,v=d.get(g);v?v.push(h.label):d.set(g,[h.label])}}var b=M(d),p;try{for(b.s();!(p=b.n()).done;){var m=J(p.value,2),y=m[0],x=m[1],_=Vn(y),T=_.family,A=_.weight,E=_.style,R=i.registerFont(T,A,E);i.ensureGlyphsReady(x,R)}}catch(C){b.e(C)}finally{b.f()}}},{key:"measureNodeLabel",value:function(e){var t,r;if(!e.label)return{width:0,height:0,textHeight:0};var i=this.internals,o=i.labelProgram,s=i.primitives,l=(t=e.labelSize)!==null&&t!==void 0?t:14,d=e.labelFont||(s==null||(r=s.nodes)===null||r===void 0||(r=r.label)===null||r===void 0||(r=r.font)===null||r===void 0?void 0:r.family)||"sans-serif",u="".concat(e.label,"|").concat(l,"|").concat(d);if(this.labelSizeCache.has(u))return this.labelSizeCache.get(u);var c=Vn(d),f=c.family,h=c.weight,g=c.style,v=o.registerFont(f,h,g),b=o.measureLabel(e.label,l,v);return this.labelSizeCache.set(u,b),b}},{key:"nodeLabelBox",value:function(e,t){var r,i,o,s,l;if(e.visibility==="hidden"||e.labelVisibility==="hidden")return null;var d=this.measureNodeLabel(e),u=d.width,c=d.height,f=d.textHeight;if(!u)return null;var h=(r=(i=this.internals.primitives)===null||i===void 0||(i=i.nodes)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:dt,g=t+h,v=e.labelBackgroundColor?(o=e.labelBackgroundPadding)!==null&&o!==void 0?o:aa:0,b=u/2,p=c/2,m=b+v,y=p+v,x=f/2,_=0,T=0;switch((s=e.labelPosition)!==null&&s!==void 0?s:"right"){case"left":_=-(g+b);break;case"above":T=-(g+x);break;case"below":T=g+x;break;case"over":break;default:_=g+b}var A=(l=e.labelAngle)!==null&&l!==void 0?l:0,E=Sa({x:_,y:T},A),R=E.x,C=E.y,k=Math.abs(Math.cos(A)),D=Math.abs(Math.sin(A)),F=k*m+D*y,L=D*m+k*y;return{minX:R-F,maxX:R+F,minY:C-L,maxY:C+L}}},{key:"computeDisplayedNodeLabels",value:function(){var e=this.internals.getCameraState(),t=this.internals.getDimensions(),r=t.width,i=t.height,o=this.internals.viewportToFramedGraph({x:-Mt,y:-Ot}),s=this.internals.viewportToFramedGraph({x:r+Mt,y:-Ot}),l=this.internals.viewportToFramedGraph({x:-Mt,y:i+Ot}),d=this.internals.viewportToFramedGraph({x:r+Mt,y:i+Ot}),u=Math.min(o.x,s.x,l.x,d.x),c=Math.max(o.x,s.x,l.x,d.x),f=Math.min(o.y,s.y,l.y,d.y),h=Math.max(o.y,s.y,l.y,d.y),g=je({x:.5,y:.5,ratio:1,angle:0},{width:r,height:i},this.internals.getGraphDimensions(),this.internals.getStagePadding()),v=function(w){var I=At(g,w);return{x:(1+I.x)*r/2,y:(1-I.y)*i/2}},b=v({x:u,y:f}),p=v({x:c,y:f}),m=v({x:u,y:h}),y=v({x:c,y:h}),x={x1:Math.min(b.x,p.x,m.x,y.x),y1:Math.min(b.y,p.y,m.y,y.y),x2:Math.max(b.x,p.x,m.x,y.x),y2:Math.max(b.y,p.y,m.y,y.y)},_=this.internals,T=_.settings,A=_.nodeDataCache,E=_.nodesWithForcedLabels,R=this.labelGrid.getLabelsToDisplay(e.ratio,T.labelDensity,x);Oa(R,E);for(var C=0,k=R.length;C<k;C++){var D=R[C],F=A[D];if(!this.displayedNodeLabels.has(D)&&!(F.visibility==="hidden"||F.labelVisibility==="hidden")&&F.label&&!(F.x<u||F.x>c||F.y<f||F.y>h)){var L=this.internals.framedGraphToViewport(F),G=L.x,N=L.y,z=this.internals.scaleSize(F.size);!Ye(F)&&z<T.labelRenderedSizeThreshold||G<-Mt-z||G>r+Mt+z||N<-Ot-z||N>i+Ot+z||this.displayedNodeLabels.add(D)}}}},{key:"buildFramePassPoints",value:function(){var e=this.internals,t=e.nodeDataCache,r=e.nodeDataTexture;if(!r)return{data:this.framePassPoints,count:0};var i=this.displayedNodeLabels.size*3;this.framePassPoints.length<i&&(this.framePassPoints=new Float32Array(i));var o=this.framePassPoints,s=0,l=M(this.displayedNodeLabels),d;try{for(l.s();!(d=l.n()).done;){var u,c,f=d.value,h=t[f];if(h){var g=r.getIndex(f);g<0||(o[s*3]=g,o[s*3+1]=(u=lt[h.labelPosition||Be.labelPosition])!==null&&u!==void 0?u:0,o[s*3+2]=(c=h.labelAngle)!==null&&c!==void 0?c:0,s++)}}}catch(v){l.e(v)}finally{l.f()}return{data:o,count:s}}},{key:"renderWebGLLabels",value:function(e,t){var r=this.internals,i=r.nodeDataCache,o=r.labelProgram,s=r.primitives,l=r.nodeDataTexture,d=[],u=M(this.displayedNodeLabels),c;try{for(u.s();!(c=u.n()).done;){var f=c.value;if(!this.renderedNodeLabels.has(f)){var h=i[f];t&&h.labelDepth!==t||(this.renderedNodeLabels.add(f),d.push(f))}}}catch(xe){u.e(xe)}finally{u.f()}if(d.length!==0){if(this.labelsDirty){for(var g,v,b,p=0,m=0,y=d.length;m<y;m++){var x=i[d[m]];p+=x.label.length}o.reallocate(p);for(var _=14,T=(g=s==null||(v=s.nodes)===null||v===void 0||(v=v.label)===null||v===void 0?void 0:v.margin)!==null&&g!==void 0?g:dt,A=Be.labelPosition,E=(s==null||(b=s.nodes)===null||b===void 0||(b=b.label)===null||b===void 0||(b=b.font)===null||b===void 0?void 0:b.family)||"sans-serif",R=new Map,C=0,k=0,D=d.length;k<D;k++){var F,L,G,N,z=d[k],P=i[z],w=P.labelFont||E,I=R.get(w);if(I===void 0){var H=Vn(w),U=H.family,$=H.weight,X=H.style;I=o.registerFont(U,$,X),R.set(w,I)}var Q={text:P.label,x:P.x,y:P.y,size:(F=P.labelSize)!==null&&F!==void 0?F:_,color:P.labelColor,nodeSize:P.size,margin:T,position:(L=P.labelPosition)!==null&&L!==void 0?L:A,hidden:!1,forceLabel:Ye(P),type:"default",zIndex:(G=P.zIndex)!==null&&G!==void 0?G:0,parentType:"node",parentKey:z,fontKey:I,labelAngle:(N=P.labelAngle)!==null&&N!==void 0?N:0,nodeIndex:l.getIndex(z)},ue=o.processLabel(z,C,Q);C+=ue}o.invalidateBuffers()}o.render(e)}}},{key:"renderBackdrops",value:function(e,t){var r=this.internals,i=r.backdropProgram,o=r.nodeDataCache,s=r.nodesWithBackdrop,l=r.attachmentManager,d=r.pixelRatio,u=r.nodeDataTexture,c=[],f=M(s),h;try{for(f.s();!(h=f.n()).done;){var g,v=h.value,b=o[v];if(!(!b||b.visibility==="hidden")&&!(t&&b.depth!==t)){var p=(g=u?.getIndex(v))!==null&&g!==void 0?g:-1;p<0||c.push({key:v,nodeIndex:p})}}}catch(rt){f.e(rt)}finally{f.f()}if(c.length!==0){i.reallocate(c.length);for(var m=0;m<c.length;m++){var y,x,_,T,A,E,R,C,k=c[m],D=k.key,F=k.nodeIndex,L=o[D],G=this.displayedNodeLabels.has(D),N=G?this.measureNodeLabel(L):{width:0,height:0,textHeight:0},z=N.textHeight,P=N.width,w=N.height,I=0,H=0;if(G&&L.labelAttachment&&l){var U=l.getEntry(D,L.labelAttachment);if(U){var $=L.labelAttachmentPlacement||"below";if($==="below"||$==="above"){var X=U.height/d;w+=X+tt,P=Math.max(P,U.width/d),H=$==="below"?(X+tt)/2:-(X+tt)/2}else{var Q=U.width/d;P+=Q+tt,w=Math.max(w,U.height/d),I=$==="right"?(Q+tt)/2:-(Q+tt)/2}}}var ue=L.backdropColor?Xe(L.backdropColor):[255,255,255,255],xe=L.backdropShadowColor?Xe(L.backdropShadowColor):[0,0,0,128],Le=ue.map(function(rt){return rt/255}),Ht=xe.map(function(rt){return rt/255}),xn=(y=L.backdropShadowBlur)!==null&&y!==void 0?y:12,mt=(x=L.backdropPadding)!==null&&x!==void 0?x:6,Cs=L.backdropBorderColor?Xe(L.backdropBorderColor):[0,0,0,0],ks=Cs.map(function(rt){return rt/255}),Ps=(_=L.backdropBorderWidth)!==null&&_!==void 0?_:0,Fs=(T=L.backdropCornerRadius)!==null&&T!==void 0?T:0,Rr=(A=L.backdropLabelPadding)!==null&&A!==void 0?A:-1,Is=Rr<0?mt:Rr,Ns=(E=Uc[(R=L.backdropArea)!==null&&R!==void 0?R:"both"])!==null&&E!==void 0?E:0,Gs={key:D,nodeIndex:F,label:L.label,labelWidth:P,labelHeight:w,textHeight:z,type:"default",position:L.labelPosition||Be.labelPosition,labelAngle:(C=L.labelAngle)!==null&&C!==void 0?C:0,backdropColor:Le,backdropShadowColor:Ht,backdropShadowBlur:xn,backdropPadding:mt,backdropBorderColor:ks,backdropBorderWidth:Ps,backdropCornerRadius:Fs,backdropLabelPadding:Is,backdropArea:Ns,labelBoxOffset:[I,H]};i.processBackdrop(m,Gs)}i.invalidateBuffers(),i.render(e)}}},{key:"renderLabelBackgrounds",value:function(e,t){var r=this.internals,i=r.labelBackgroundProgram,o=r.nodeDataCache,s=r.nodeDataTexture,l=ge.nodeLabel.writesPickingThisFrame(this.internals),d=[],u=M(this.displayedNodeLabels),c;try{for(u.s();!(c=u.n()).done;){var f=c.value,h=o[f];!h||h.visibility==="hidden"||t&&h.labelDepth!==t||!l&&!h.labelBackgroundColor||d.push(f)}}catch(F){u.e(F)}finally{u.f()}if(d.length!==0){i.reallocate(d.length);for(var g=0;g<d.length;g++){var v,b,p,m,y=d[g],x=o[y],_=(v=s?.getIndex(y))!==null&&v!==void 0?v:-1;if(!(_<0)){var T=this.measureNodeLabel(x),A=T.width,E=T.height,R=T.textHeight,C=ft(this.internals.pickingState,"nodeLabel",y)||ft(this.internals.pickingState,"node",y),k=x.labelBackgroundColor?Ee(x.labelBackgroundColor):Ee("transparent"),D={nodeIndex:_,id:Rt(C),color:k,labelWidth:A,labelHeight:E,textHeight:R,positionMode:(b=lt[x.labelPosition||Be.labelPosition])!==null&&b!==void 0?b:0,labelAngle:(p=x.labelAngle)!==null&&p!==void 0?p:0,padding:(m=x.labelBackgroundPadding)!==null&&m!==void 0?m:aa};i.processLabelBackground(g,D)}}i.invalidateBuffers(),i.render(e)}}},{key:"cacheAttachments",value:function(e){var t=this.internals,r=t.attachmentManager,i=t.pixelRatio,o=t.nodeDataCache,s=t.nodesWithBackdrop,l=t.graph;if(r){var d=M(s),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;if(this.displayedNodeLabels.has(c)){var f=o[c];if(!(!f||f.visibility==="hidden")&&!(e&&f.depth!==e)&&f.labelAttachment){var h=l.getNodeAttributes(c),g=this.measureNodeLabel(f),v=g.width,b=g.height,p={node:c,attributes:h,pixelRatio:i,labelWidth:v,labelHeight:b};r.renderAttachment(c,f.labelAttachment,p)}}}}catch(m){d.e(m)}finally{d.f()}r.regenerateAtlas()}}},{key:"renderAttachments",value:function(e,t){var r=this.internals,i=r.attachmentManager,o=r.attachmentProgram,s=r.nodeDataCache,l=r.nodesWithBackdrop,d=r.pixelRatio,u=r.nodeDataTexture;if(!(!i||!o)){var c=0;o.reallocateAttachments(l.size);var f=M(l),h;try{for(f.s();!(h=f.n()).done;){var g,v,b,p,m=h.value;if(this.displayedNodeLabels.has(m)){var y=s[m];if(!(!y||y.visibility==="hidden")&&!(t&&y.labelDepth!==t)&&y.labelAttachment){var x=i.getEntry(m,y.labelAttachment);if(x){var _=(g=u?.getIndex(m))!==null&&g!==void 0?g:-1;if(!(_<0)){var T=this.measureNodeLabel(y),A=T.width,E=T.height,R=T.textHeight,C=(v=Ji[y.labelAttachmentPlacement||"below"])!==null&&v!==void 0?v:0;o.processAttachment(c,{nodeIndex:_,atlasX:x.x,atlasY:x.y,atlasW:x.width,atlasH:x.height,attachWidth:x.width/d,attachHeight:x.height/d,positionMode:(b=lt[y.labelPosition||Be.labelPosition])!==null&&b!==void 0?b:0,attachmentPlacement:C,labelWidth:A,labelHeight:E,textHeight:R,labelAngle:(p=y.labelAngle)!==null&&p!==void 0?p:0}),c++}}}}}}catch(k){f.e(k)}finally{f.f()}c!==0&&(o.reallocateAttachments(c),i.bindTexture(ln),o.invalidateBuffers(),o.render(e))}}},{key:"computeDisplayedEdgeLabels",value:function(){var e=this.internals,t=e.graph,r=e.stateManager,i=e.settings,o=e.edgesWithForcedLabels,s=r.getHighlightedNodes(),l=i.edgeLabelAnchors==="allNodes"?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,i.labelDensity)):this.displayedNodeLabels,d=r.hovered,u=Wc({graph:t,hoveredNode:d?.kind==="node"?d.key:null,displayedNodeLabels:l,highlightedNodes:s});Oa(u,o),this.edgeLabelCandidates=u,this.displayedEdgeLabels=new Set}},{key:"filterEdgeLabelsForDepth",value:function(e){for(var t=this.internals,r=t.graph,i=t.nodeDataCache,o=t.edgeDataCache,s=[],l=new Set,d=0,u=this.edgeLabelCandidates.length;d<u;d++){var c=this.edgeLabelCandidates[d];if(!l.has(c)){l.add(c);var f=r.extremities(c),h=i[f[0]],g=i[f[1]],v=o[c];!v||!h||!g||v.visibility==="hidden"||v.labelVisibility==="hidden"||h.visibility==="hidden"||g.visibility==="hidden"||e&&v.labelDepth!==e||v.label&&s.push(c)}}return s}},{key:"renderEdgeLabels",value:function(e,t){var r=this.internals,i=r.graph,o=r.nodeDataCache,s=r.edgeDataCache,l=r.primitives,d=r.edgeLabelProgram,u=r.nodeDataTexture,c=r.edgeDataTexture,f=this.filterEdgeLabelsForDepth(t),h=M(f),g;try{for(h.s();!(g=h.n()).done;){var v=g.value;this.displayedEdgeLabels.add(v)}}catch(Q){h.e(Q)}finally{h.f()}if(f.length!==0){if(this.labelsDirty){var b,p,m=0,y=M(f),x;try{for(y.s();!(x=y.n()).done;){var _=x.value;m+=s[_].label.length}}catch(Q){y.e(Q)}finally{y.f()}d.reallocate(m);var T=(b=l==null||(p=l.edges)===null||p===void 0||(p=p.label)===null||p===void 0?void 0:p.margin)!==null&&b!==void 0?b:5,A="over",E=0,R=M(f),C;try{for(R.s();!(C=R.n()).done;){var k,D,F=C.value,L=i.extremities(F),G=L[0],N=L[1],z=o[G],P=o[N],w=s[F],I=u.getIndex(G),H=u.getIndex(N),U=c.getIndex(F),$={text:w.label,x:(z.x+P.x)/2,y:(z.y+P.y)/2,size:jo,color:w.labelColor,nodeSize:0,nodeIndex:-1,margin:T,position:(k=w.labelPosition)!==null&&k!==void 0?k:A,hidden:!1,forceLabel:Ye(w),type:"default",zIndex:(D=w.zIndex)!==null&&D!==void 0?D:0,parentType:"edge",parentKey:F,fontKey:"",labelAngle:0,sourceX:z.x,sourceY:z.y,targetX:P.x,targetY:P.y,sourceSize:z.size,targetSize:P.size,sourceShape:z.shape||"circle",targetShape:P.shape||"circle",edgeSize:w.size,offset:0,edgeAttributes:w,sourceNodeIndex:I,targetNodeIndex:H,edgeIndex:U},X=d.processEdgeLabel(F,E,$);E+=X}}catch(Q){R.e(Q)}finally{R.f()}d.invalidateBuffers()}d.render(e)}}},{key:"renderEdgeLabelBackgrounds",value:function(e,t){var r,i,o=this.internals,s=o.edgeLabelBackgroundProgram,l=o.edgeLabelProgram,d=o.edgeDataCache,u=o.primitives,c=o.edgeDataTexture;if(c){var f=ge.edgeLabel.writesPickingThisFrame(this.internals),h=(r=u==null||(i=u.edges)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:5,g="over",v=this.filterEdgeLabelsForDepth(t),b=[],p=M(v),m;try{for(p.s();!(m=p.n()).done;){var y=m.value;!f&&!d[y].labelBackgroundColor||b.push(y)}}catch(z){p.e(z)}finally{p.f()}if(b.length!==0){s.reallocate(b.length);for(var x=0;x<b.length;x++){var _,T,A,E=b[x],R=d[E],C=R.label,k=l.measureLabelAtlasWidth(C),D=(_=R.labelPosition)!==null&&_!==void 0?_:g,F=typeof D=="string"&&(T=Hc[D])!==null&&T!==void 0?T:0,L=ft(this.internals.pickingState,"edgeLabel",E)||ft(this.internals.pickingState,"edge",E),G=R.labelBackgroundColor?Ee(R.labelBackgroundColor):Ee("transparent"),N={edgeIndex:c.getIndex(E),baseFontSize:jo,totalTextWidth:k,positionMode:F,margin:h,padding:(A=R.labelBackgroundPadding)!==null&&A!==void 0?A:$c,color:G,id:Rt(L),edgeAttributes:R};s.processEdgeLabelBackground(x,E,N)}s.invalidateBuffers(),s.render(e)}}}}])})(),jc=(function(){function a(n,e,t,r){Y(this,a),S(this,"nodeStates",new Map),S(this,"edgeStates",new Map),S(this,"hovered",null),S(this,"dirtyNodes",new Set),S(this,"dirtyEdges",new Set),S(this,"graphStateChanged",!1),S(this,"graphStateFlagsDirty",!1),this.scheduleRefresh=n,this.customNodeStateDefaults=e,this.customEdgeStateDefaults=t,this.customGraphStateDefaults=r,this.graphState=Pa(r)}return K(a,[{key:"getNodeState",value:function(e){e=""+e;var t=this.nodeStates.get(e);return t||(t=xi(this.customNodeStateDefaults),this.nodeStates.set(e,t)),t}},{key:"getEdgeState",value:function(e){e=""+e;var t=this.edgeStates.get(e);return t||(t=_i(this.customEdgeStateDefaults),this.edgeStates.set(e,t)),t}},{key:"getGraphState",value:function(){return this.flushGraphStateFlags(),this.graphState}},{key:"getHighlightedNodes",value:function(){var e=new Set,t=M(this.nodeStates),r;try{for(t.s();!(r=t.n()).done;){var i=J(r.value,2),o=i[0],s=i[1];s.isHighlighted&&e.add(o)}}catch(l){t.e(l)}finally{t.f()}return e}},{key:"setNodeState",value:function(e,t){e=""+e;var r=this.getNodeState(e);if(Lt(r,t)){var i=O(O({},r),t);this.nodeStates.set(e,i),this.dirtyNodes.add(e),this.updateHoveredNodeTracking(e,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setEdgeState",value:function(e,t){e=""+e;var r=this.getEdgeState(e);if(Lt(r,t)){var i=O(O({},r),t);this.edgeStates.set(e,i),this.dirtyEdges.add(e),this.updateHoveredEdgeTracking(e,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setGraphState",value:function(e){if(Lt(this.graphState,e)){var t=O(O({},this.graphState),e);t.isIdle=!t.isPanning&&!t.isZooming&&!t.isDragging,this.graphState=t,this.graphStateChanged=!0,this.scheduleRefresh()}}},{key:"setNodesState",value:function(e,t){var r=!1,i=M(e),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;s=""+s;var l=this.getNodeState(s);if(Lt(l,t)){var d=O(O({},l),t);this.nodeStates.set(s,d),this.dirtyNodes.add(s),this.updateHoveredNodeTracking(s,l,d),r=!0}}}catch(u){i.e(u)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"setEdgesState",value:function(e,t){var r=!1,i=M(e),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;s=""+s;var l=this.getEdgeState(s);if(Lt(l,t)){var d=O(O({},l),t);this.edgeStates.set(s,d),this.dirtyEdges.add(s),this.updateHoveredEdgeTracking(s,l,d),r=!0}}}catch(u){i.e(u)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"removeNode",value:function(e){this.nodeStates.delete(e),this.dirtyNodes.delete(e),this.clearHoveredFor("node",e)}},{key:"removeEdge",value:function(e){this.edgeStates.delete(e),this.dirtyEdges.delete(e),this.clearHoveredFor("edge",e)}},{key:"pruneNodes",value:function(e){var t=M(this.nodeStates.keys()),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;e(i)||this.removeNode(i)}}catch(o){t.e(o)}finally{t.f()}}},{key:"pruneEdges",value:function(e){var t=M(this.edgeStates.keys()),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;e(i)||this.removeEdge(i)}}catch(o){t.e(o)}finally{t.f()}}},{key:"clearNodes",value:function(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(gr("node"))}},{key:"clearEdges",value:function(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(gr("edge"))}},{key:"resetGraphState",value:function(){this.graphState=Pa(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}},{key:"clearDirtyTracking",value:function(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}},{key:"setHovered",value:function(e){this.hovered=e}},{key:"clearHoveredFor",value:function(e,t){this.hovered&&this.hovered.key===t&&gr(e).includes(this.hovered.kind)&&(this.hovered=null)}},{key:"clearHoveredForKinds",value:function(e){this.hovered&&e.includes(this.hovered.kind)&&(this.hovered=null)}},{key:"updateGraphStateFromNodes",value:function(){var e,t=!1,r=!1,i=!1,o=M(this.nodeStates),s;try{for(o.s();!(s=o.n()).done;){var l=J(s.value,2),d=l[1];if(d.isHovered&&(t=!0),d.isHighlighted&&(r=!0),d.isDragged&&(i=!0),t&&r&&i)break}}catch(c){o.e(c)}finally{o.f()}!t&&((e=this.hovered)===null||e===void 0?void 0:e.kind)==="edge"&&(t=!0);var u=!this.graphState.isPanning&&!this.graphState.isZooming&&!i;(this.graphState.hasHovered!==t||this.graphState.hasHighlighted!==r||this.graphState.isDragging!==i||this.graphState.isIdle!==u)&&(this.graphStateChanged=!0),this.graphState=O(O({},this.graphState),{},{hasHovered:t,hasHighlighted:r,isDragging:i,isIdle:u})}},{key:"updateGraphStateFromEdges",value:function(){var e,t=((e=this.hovered)===null||e===void 0?void 0:e.kind)==="node";if(!t){var r=M(this.edgeStates),i;try{for(r.s();!(i=r.n()).done;){var o=J(i.value,2),s=o[1];if(s.isHovered){t=!0;break}}}catch(l){r.e(l)}finally{r.f()}}this.graphState.hasHovered!==t&&(this.graphStateChanged=!0),this.graphState=O(O({},this.graphState),{},{hasHovered:t})}},{key:"flushGraphStateFlags",value:function(){this.graphStateFlagsDirty&&(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),this.graphStateFlagsDirty=!1)}},{key:"updateHoveredNodeTracking",value:function(e,t,r){var i;if(t.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="node"&&this.hovered.key!==e){var s=this.hovered.key,l=this.getNodeState(s);this.nodeStates.set(s,O(O({},l),{},{isHovered:!1})),this.dirtyNodes.add(s)}this.hovered={kind:"node",key:e}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="node"&&this.hovered.key===e&&(this.hovered=null)}},{key:"updateHoveredEdgeTracking",value:function(e,t,r){var i;if(t.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="edge"&&this.hovered.key!==e){var s=this.hovered.key,l=this.getEdgeState(s);this.edgeStates.set(s,O(O({},l),{},{isHovered:!1})),this.dirtyEdges.add(s)}this.hovered={kind:"edge",key:e}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="edge"&&this.hovered.key===e&&(this.hovered=null)}}])})(),Xo=1,qo=2,Yo=3,Ko=4,Xc=(function(a){function n(e,t){var r,i,o,s,l,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Y(this,n),l=oe(this,n),S(l,"nodeReducer",null),S(l,"edgeReducer",null),S(l,"stageCanvas",null),S(l,"mouseLayer",null),S(l,"gestureHint",null),S(l,"extraElements",{}),S(l,"webGLContext",null),S(l,"pickingFrameBuffer",null),S(l,"pickingTexture",null),S(l,"pickingDepthBuffer",null),S(l,"activeListeners",{}),S(l,"nodeVariableEntries",[]),S(l,"edgeVariableEntries",[]),S(l,"edgePathsByName",new Map),S(l,"nodeProgramIndex",{}),S(l,"edgeProgramIndex",{}),S(l,"edgeTextureIndexCache",{}),S(l,"nodeGraphCoords",{}),S(l,"nodeExtent",{x:[0,1],y:[0,1]}),S(l,"matrix",Se()),S(l,"invMatrix",Se()),S(l,"correctionRatio",1),S(l,"frameId",0),S(l,"customBBox",null),S(l,"gpuTimerExt",void 0),S(l,"activeGpuTimerQuery",null),S(l,"pendingGpuTimerQueries",[]),S(l,"normalizationFunction",Un({x:[0,1],y:[0,1]})),S(l,"graphToViewportRatio",1),S(l,"pickingState",_c()),S(l,"prevNodeVisibilities",{}),S(l,"width",0),S(l,"height",0),S(l,"autoRescaleFrozen",!1),S(l,"stylesDeclaration",null),S(l,"resolvedStageStyle",{}),S(l,"renderFrame",null),S(l,"contextLost",!1),S(l,"pendingProcess","full"),S(l,"needToRefreshState",!1),S(l,"checkEdgesEventsFrame",null),S(l,"edgeStyleAnalysis",{dependency:"static",xAttribute:null,yAttribute:null}),S(l,"depthLayers",V(zn)),S(l,"customLayerPrograms",new Map),S(l,"nodeShapeSlug",null),S(l,"sdfAtlas",null),S(l,"depthRanges",{nodes:{},edges:{}}),S(l,"nodeBaseDepth",{}),S(l,"edgeBaseDepth",{});var u=d.primitives,c=d.styles,f=d.settings,h=f===void 0?{}:f,g=d.nodeReducer,v=d.edgeReducer,b=d.customNodeState,p=d.customEdgeState,m=d.customGraphState;l.stateManager=new jc(function(){return l.scheduleStateRefresh()},b,p,m);var y=u??Ei;l.stylesDeclaration=c?{nodes:(r=c.nodes)!==null&&r!==void 0?r:qe.nodes,edges:(i=c.edges)!==null&&i!==void 0?i:qe.edges,stage:c.stage}:qe,l.nodeReducer=g??null,l.edgeReducer=v??null;var x=Fa(l.stylesDeclaration.nodes);l.nodeReducer&&(x.dependency="graph-state"),l.edgeStyleAnalysis=Fa(l.stylesDeclaration.edges),l.edgeReducer&&(l.edgeStyleAnalysis.dependency="graph-state"),l.stylesDeclaration.stage&&(l.resolvedStageStyle=Ma(l.stylesDeclaration.stage,l.stateManager.graphState));var _=ki(h);if($n(_),_.enableNodeDrag){var T=x.xAttribute,A=x.yAttribute;if((!T||!A)&&!_.dragPositionToAttributes)throw new Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(Ci(e),!(t instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");l.container=t,l.edgeGroups=new xc(e,function(P,w){for(var I=0;I<P.length;I++){var H=l.stateManager.getEdgeState(P[I]);H.parallelIndex=I,H.parallelCount=w}});var E=new yc(e,l.viewportToGraph.bind(l),l.setNodesState.bind(l),function(P,w){return l.emit(P,w)});if(l.depthLayers=(o=y.depthLayers)!==null&&o!==void 0?o:V(zn),!(c!=null&&c.nodes)&&!Nn.every(function(P){return l.depthLayers.includes(P)}))throw new Error("Sigma: depthLayers must include ".concat(Nn.join(", ")," for the built-in node styles."));if(!(c!=null&&c.edges)&&!Gn.every(function(P){return l.depthLayers.includes(P)}))throw new Error("Sigma: depthLayers must include ".concat(Gn.join(", ")," for the built-in edge styles."));l.itemBuckets={nodes:new ua(l.depthLayers),edges:new ua(l.depthLayers)},l.initWebGLContext(),l.mouseLayer=Ct("div",{position:"absolute",touchAction:"none",userSelect:"none"},{class:"sigma-mouse"}),l.container.appendChild(l.mouseLayer),l.resolvedStageStyle.background&&(l.container.style.backgroundColor=l.resolvedStageStyle.background),l.resolvedStageStyle.cursor&&(l.container.style.cursor=l.resolvedStageStyle.cursor);var R=new ur(l.webGLContext),C=new ca(l.webGLContext,{channels:1}),k=new cr(l.webGLContext),D=new ca(l.webGLContext,{channels:4}),F=l.webGLContext,L=new Bc({gl:F,getFrameBuffer:function(){return l.pickingFrameBuffer},getPixelRatio:function(){return l.internals.pixelRatio},getDownSizingRatio:function(){return l.internals.settings.pickingDownSizingRatio},isRenderPending:function(){return l.renderFrame!==null},onIndex:function(w,I){var H;return es(l.internals,(H=l.pickingState.lookup[w])!==null&&H!==void 0?H:null,I)}}),G=l.initPrograms(y,_),N=y==null||(s=y.nodes)===null||s===void 0?void 0:s.labelAttachments,z=null;return N&&Object.keys(N).length>0&&(z=new dr(F,N,function(){return l.scheduleRender()})),l.internals=O(O({nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:_,primitives:y,pixelRatio:en(),graph:e,stateManager:l.stateManager,dragManager:E,hoverResolver:L,nodeStyleAnalysis:x,pickingState:l.pickingState},G),{},{attachmentManager:z,nodeDataTexture:R,nodeFrameTexture:C,edgeDataTexture:k,edgeFrameTexture:D,getDimensions:function(){return l.getDimensions()},getGraphDimensions:function(){return l.getGraphDimensions()},getStagePadding:function(){return l.getStagePadding()},getCameraState:function(){return l.camera.getState()},getHitAtPosition:function(w){return l.getHitAtPosition(w)},setNodeState:function(w,I){return l.setNodeState(w,I)},setEdgeState:function(w,I){return l.setEdgeState(w,I)},updateContainerCursor:function(){return l.updateContainerCursor()},scheduleRefresh:function(){return l.scheduleRefresh()},viewportToFramedGraph:function(w){return l.viewportToFramedGraph(w)},viewportToGraph:function(w){return l.viewportToGraph(w)},framedGraphToViewport:function(w){return l.framedGraphToViewport(w)},scaleSize:function(w){return l.scaleSize(w)},emit:function(w,I){return l.emit(w,I)}}),l.labelRenderer=new Vc(l.internals),l.resize(),l.initializeWebGLLabels(),l.camera=new zo,l.bindCameraHandlers(),l.mouseCaptor=new pc(l.mouseLayer,l),l.mouseCaptor.setSettings(l.internals.settings),l.touchCaptor=new bc(l.mouseLayer,l),l.touchCaptor.setSettings(l.internals.settings),l.bindEventHandlers(),l.bindGraphHandlers(),l.handleSettingsUpdate(),l.refresh(),l}return se(n,a),K(n,[{key:"initializeWebGLLabels",value:function(){this.sdfAtlas=new Ze,this.sdfAtlas.registerFont({family:"sans-serif",weight:"normal",style:"normal"})}},{key:"resetWebGLTexture",value:function(){var t=this.webGLContext;if(!this.pickingFrameBuffer)return this;var r=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),i=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);t.bindFramebuffer(t.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&t.deleteTexture(this.pickingTexture);var o=t.createTexture();o&&(t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r,i,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),this.pickingTexture=o),this.pickingDepthBuffer&&t.deleteRenderbuffer(this.pickingDepthBuffer);var s=t.createRenderbuffer();return s&&(t.bindRenderbuffer(t.RENDERBUFFER,s),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,s),this.pickingDepthBuffer=s),t.bindFramebuffer(t.FRAMEBUFFER,null),this}},{key:"bindCameraHandlers",value:function(){var t=this;return this.activeListeners.camera=function(){t.refreshMatrices(),t.labelRenderer.labelsDirty=!0,t.scheduleRender()},this.activeListeners.cameraAnimationStart=function(r){var i=r.from,o=r.to;i.ratio!==o.ratio&&t.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=function(){t.stateManager.setGraphState({isZooming:!1})},this.camera.on("updated",this.activeListeners.camera),this.camera.on("animationStart",this.activeListeners.cameraAnimationStart),this.camera.on("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this.camera.removeListener("animationStart",this.activeListeners.cameraAnimationStart),this.camera.removeListener("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"getHitAtPosition",value:function(t){var r;if(this.contextLost)return null;var i=this.webGLContext;i.bindFramebuffer(i.FRAMEBUFFER,this.pickingFrameBuffer);var o=ri(i,this.pickingFrameBuffer,t.x,t.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),s=Aa.apply(void 0,V(o));return(r=this.pickingState.lookup[s])!==null&&r!==void 0?r:null}},{key:"bindEventHandlers",value:function(){return wc(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}},{key:"bindGraphHandlers",value:function(){return Lc({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}},{key:"unbindGraphHandlers",value:function(){Cc(this.internals.graph,this.activeListeners)}},{key:"getNodeShapeId",value:function(t){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&t.shape&&t.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[t.shape]]:Pt(t.shape||"circle")}},{key:"processNodes",value:function(){var t=this,r=this.internals.graph,i=this.internals.settings,o=this.getDimensions(),s=i.autoRescale,l=i.autoRescaleContent,d=this.nodeExtent;if(s===!1){var u=o.width,c=o.height;d={x:[-u/2,u/2],y:[-c/2,c/2]}}else(s!=="once"||!this.autoRescaleFrozen)&&(d=this.computeNodeExtent(),l!=="positions"&&!this.customBBox&&(d=Ic({extent:d,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:o,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:i.zoomToSizeRatioFunction,itemSizesReference:i.itemSizesReference,fitLabels:l==="labels",nodeLabelBox:function(H,U){return t.labelRenderer.nodeLabelBox(H,U)}})),s==="once"&&(this.autoRescaleFrozen=!0));this.nodeExtent=d,this.normalizationFunction=Un(this.customBBox||this.nodeExtent);var f=new zo,h=je(f.getState(),o,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(o,i.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(o,i.labelGridCellSize);var g=i.renderEdgeLabels&&i.edgeLabelAnchors==="allNodes",v=!1;fr(this.pickingState,"node");for(var b=r.nodes(),p=0,m=b.length;p<m;p++){var y=b[p],x=this.internals.nodeDataCache[y],_=this.nodeGraphCoords[y];x.x=_.x,x.y=_.y,this.normalizationFunction.applyTo(x),x.visibility!==this.prevNodeVisibilities[y]&&(v=!0),typeof x.label=="string"&&x.visibility!=="hidden"&&x.labelVisibility!=="hidden"&&this.labelRenderer.labelGrid.add(y,x.size,this.framedGraphToViewport(x,{matrix:h})),g&&x.visibility!=="hidden"&&this.labelRenderer.edgeAnchorGrid.add(y,x.size,this.framedGraphToViewport(x,{matrix:h}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(b.length);var T=0;this.depthRanges.nodes={},this.nodeBaseDepth={};var A=this.internals.nodeDataCache,E=M(this.depthLayers),R;try{for(E.s();!(R=E.n()).done;){var C=R.value,k=this.itemBuckets.nodes.getSorted(C,function(I){return A[I].zIndex});if(k.length!==0){this.depthRanges.nodes[C]=[{offset:T,count:k.length}];var D=M(k),F;try{for(D.s();!(F=D.n()).done;){var L=F.value;this.nodeBaseDepth[L]=C,this.nodeProgram.allocateNode(L),Wo(this.pickingState,"node",L),this.addNodeToProgram(L,T++)}}catch(I){D.e(I)}finally{D.f()}}}}catch(I){E.e(I)}finally{E.f()}this.nodeProgram.invalidateBuffers();for(var G=0,N=b.length;G<N;G++)this.prevNodeVisibilities[b[G]]=this.internals.nodeDataCache[b[G]].visibility;this.labelRenderer.processWebGLLabels(b);var z=M(this.customLayerPrograms.values()),P;try{for(z.s();!(P=z.n()).done;){var w=P.value.program;w.cacheData&&w.cacheData()}}catch(I){z.e(I)}finally{z.f()}return v}},{key:"processEdges",value:function(){var t=this.internals.graph,r=t.edges();this.edgeProgram.reallocate(r.length);var i=0;fr(this.pickingState,"edge"),this.depthRanges.edges={},this.edgeBaseDepth={};var o=this.internals.edgeDataCache,s=M(this.depthLayers),l;try{for(s.s();!(l=s.n()).done;){var d=l.value,u=this.itemBuckets.edges.getSorted(d,function(g){return o[g].zIndex});if(u.length!==0){this.depthRanges.edges[d]=[{offset:i,count:u.length}];var c=M(u),f;try{for(c.s();!(f=c.n()).done;){var h=f.value;this.edgeBaseDepth[h]=d,Wo(this.pickingState,"edge",h),this.addEdgeToProgram(h,i++)}}catch(g){c.e(g)}finally{c.f()}}}}catch(g){s.e(g)}finally{s.f()}this.edgeProgram.invalidateBuffers()}},{key:"updateNodeDepthRanges",value:function(t,r,i){var o=this.nodeProgramIndex[t];o!==void 0&&(Ua(this.depthRanges.nodes,r,o),Ha(this.depthRanges.nodes,i,o))}},{key:"updateEdgeDepthRanges",value:function(t,r,i){var o=this.edgeProgramIndex[t];o!==void 0&&(Ua(this.depthRanges.edges,r,o),Ha(this.depthRanges.edges,i,o))}},{key:"handleSettingsUpdate",value:function(){var t=this,r=this.internals.settings;return this.camera.minRatio=r.minCameraRatio,this.camera.maxRatio=r.maxCameraRatio,this.camera.enabledZooming=r.enableCameraZooming,this.camera.enabledPanning=r.enableCameraPanning,this.camera.enabledRotation=r.enableCameraRotation,r.cameraPanBoundaries?this.camera.constrainState=function(i){return t.cleanCameraState(i,r.cameraPanBoundaries&&Z(r.cameraPanBoundaries)==="object"?r.cameraPanBoundaries:{})}:this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=r.gestureTarget==="graph"?"none":r.gestureTarget==="shared"?"pan-x pan-y":"auto",r.gestureTarget!=="shared"&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}},{key:"cleanCameraState",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.tolerance,o=i===void 0?0:i,s=r.boundaries,l=O({},t),d=s||this.nodeExtent,u=J(d.x,2),c=u[0],f=u[1],h=J(d.y,2),g=h[0],v=h[1],b=[this.graphToViewport({x:c,y:g},{cameraState:t}),this.graphToViewport({x:f,y:g},{cameraState:t}),this.graphToViewport({x:c,y:v},{cameraState:t}),this.graphToViewport({x:f,y:v},{cameraState:t})],p=1/0,m=-1/0,y=1/0,x=-1/0;b.forEach(function(L){var G=L.x,N=L.y;p=Math.min(p,G),m=Math.max(m,G),y=Math.min(y,N),x=Math.max(x,N)});var _=m-p,T=x-y,A=this.getDimensions(),E=A.width,R=A.height,C=0,k=0;if(_>=E?m<E-o?C=m-(E-o):p>o&&(C=p-o):m>E+o?C=m-(E+o):p<-o&&(C=p+o),T>=R?x<R-o?k=x-(R-o):y>o&&(k=y-o):x>R+o?k=x-(R+o):y<-o&&(k=y+o),C||k){var D=this.viewportToFramedGraph({x:0,y:0},{cameraState:t}),F=this.viewportToFramedGraph({x:C,y:k},{cameraState:t});C=F.x-D.x,k=F.y-D.y,l.x+=C,l.y+=k}return l}},{key:"refreshMatrices",value:function(){var t=this.camera.getState(),r=this.getDimensions(),i=this.getGraphDimensions(),o=this.getStagePadding();this.matrix=je(t,r,i,o),this.invMatrix=je(t,r,i,o,!0),this.correctionRatio=ei(this.matrix,t,r),this.graphToViewportRatio=this.getGraphToViewportRatio()}},{key:"processData",value:function(){var t;this.emit("beforeProcess"),(t=this.internals.attachmentManager)===null||t===void 0||t.clear();var r=O({},this.pickingState.idsByKind),i=this.processNodes();(this.pendingProcess==="full"||i)&&this.processEdges(),Tc(this.pickingState,this.internals),Sc(r,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess="none",this.emit("afterProcess")}},{key:"render",value:function(){var t=this;if(this.contextLost)return this;this.emit("beforeRender");var r=function(){return t.internals.hoverResolver.frameRendered(),t.emit("afterRender"),t};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),(this.pendingProcess!=="none"||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!=="none"&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!=="none"&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return r();var i=this.mouseCaptor,o=this.camera.isAnimating()||i.isMoving||i.draggedEvents||i.currentWheelDirection;this.refreshMatrices(),this.frameId++;var s=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;s&&s.forEach(function(U){return U.resetDebugStats()}),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());var l=this.getRenderParams(),d=ge.edge.writesPickingThisFrame(this.internals)?l:O(O({},l),{},{pickingFrameBuffer:null});this.labelRenderer.resetFrame();var u=this.webGLContext,c=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),f=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(u.bindFramebuffer(u.FRAMEBUFFER,this.pickingFrameBuffer),u.viewport(0,0,c,f),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit("afterTexturesUpload"),this.internals.nodeDataTexture.bind(Yo),this.internals.edgeDataTexture.bind(Ko),this.edgeFramePass.run(l,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(Xo),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();var h=this.labelRenderer.buildFramePassPoints(),g=h.data,v=h.count;this.nodeFramePass.run(g,v,this.internals.nodeFrameTexture,l,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(qo)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();var b=M(this.customLayerPrograms.values()),p;try{for(b.s();!(p=b.n()).done;){var m=p.value.program;m.preRender&&m.preRender(l)}}catch(U){b.e(U)}finally{b.f()}u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA);var y=!this.internals.settings.hideLabelsOnMove||!o,x=M(this.depthLayers),_;try{for(x.s();!(_=x.n()).done;){var T=_.value,A=M(this.customLayerPrograms.values()),E;try{for(A.s();!(E=A.n()).done;){var R=E.value;R.depth===T&&R.program.render(l)}}catch(U){A.e(U)}finally{A.f()}var C=this.depthRanges.edges[T];if(C&&(!this.internals.settings.hideEdgesOnMove||!o)){var k=M(C),D;try{for(k.s();!(D=k.n()).done;){var F=D.value,L=F.offset,G=F.count;G>0&&this.edgeProgram.render(d,L,G)}}catch(U){k.e(U)}finally{k.f()}}this.internals.settings.renderEdgeLabels&&y&&(this.labelRenderer.renderEdgeLabelBackgrounds(ge.edgeLabel.writesPickingThisFrame(this.internals)?l:O(O({},l),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderEdgeLabels(l,T)),this.labelRenderer.cacheAttachments(T),this.labelRenderer.renderBackdrops(O(O({},l),{},{pickingFrameBuffer:null}),T);var N=this.depthRanges.nodes[T];if(N){var z=M(N),P;try{for(z.s();!(P=z.n()).done;){var w=P.value,I=w.offset,H=w.count;H>0&&this.nodeProgram.render(l,I,H)}}catch(U){z.e(U)}finally{z.f()}}y&&(this.labelRenderer.renderAttachments(O(O({},l),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderLabelBackgrounds(ge.nodeLabel.writesPickingThisFrame(this.internals)?l:O(O({},l),{},{pickingFrameBuffer:null}),T),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(l,T))}}catch(U){x.e(U)}finally{x.f()}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(u.bindFramebuffer(u.READ_FRAMEBUFFER,this.pickingFrameBuffer),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.blitFramebuffer(0,0,c,f,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,u.COLOR_BUFFER_BIT,u.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),s&&this.logRenderStats(s),r()}},{key:"getDebugPrograms",value:function(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(function(t){return t!==null})}},{key:"logRenderStats",value:function(t){var r={},i=M(t),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;r[s.constructor.name]=O({},s.debugStats)}}catch(l){i.e(l)}finally{i.f()}console.log("[sigma] DEBUG_logRenderStats: frame #".concat(this.frameId)),console.table(r)}},{key:"getGpuTimerExtension",value:function(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension("EXT_disjoint_timer_query_webgl2"),this.gpuTimerExt||console.warn("Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.")),this.gpuTimerExt}},{key:"beginGpuTimerQuery",value:function(){var t=this.getGpuTimerExtension();if(t){var r=this.webGLContext,i=r.createQuery();i&&(r.beginQuery(t.TIME_ELAPSED_EXT,i),this.activeGpuTimerQuery=i)}}},{key:"endGpuTimerQuery",value:function(){!this.gpuTimerExt||!this.activeGpuTimerQuery||(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}},{key:"pollGpuTimerQueries",value:function(){if(this.pendingGpuTimerQueries.length!==0){var t=this.webGLContext,r=this.gpuTimerExt;if(!r){this.pendingGpuTimerQueries.forEach(function(c){var f=c.query;return t.deleteQuery(f)}),this.pendingGpuTimerQueries=[];return}var i=t.getParameter(r.GPU_DISJOINT_EXT),o=[],s=M(this.pendingGpuTimerQueries),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;if(!t.getQueryParameter(d.query,t.QUERY_RESULT_AVAILABLE)){o.push(d);continue}if(!i){var u=t.getQueryParameter(d.query,t.QUERY_RESULT);console.log("[sigma] DEBUG_gpuTimerQueries: frame #".concat(d.frameId," GPU time = ").concat((u/1e6).toFixed(2),"ms"))}t.deleteQuery(d.query)}}catch(c){s.e(c)}finally{s.f()}this.pendingGpuTimerQueries=o}}},{key:"postEvaluateNode",value:function(t,r,i){var o=t;o.x===void 0&&(o.x=r.x),o.y===void 0&&(o.y=r.y),t.highlighted=i.isHighlighted;for(var s=0,l=this.nodeVariableEntries.length;s<l;s++){var d,u,c=J(this.nodeVariableEntries[s],2),f=c[0],h=c[1];o[f]=(d=(u=o[f])!==null&&u!==void 0?u:r[f])!==null&&d!==void 0?d:h.default}}},{key:"addNode",value:function(t){var r=this.internals.graph.getNodeAttributes(t),i=this.stateManager.getNodeState(t),o=this.internals.nodeDataCache[t]||{};if(Ga(this.stylesDeclaration.nodes,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateNode(o,r,i),this.nodeReducer){var s=this.nodeReducer(t,o,r,i,this.stateManager.graphState,this.internals.graph);o=O(O({},o),s)}if(typeof o.x!="number"||typeof o.y!="number")throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(t,'". ')+"Provide coordinates via node attributes, styles, or a nodeReducer.");this.internals.nodeShapeMap?(!o.shape||!(o.shape in this.internals.nodeShapeMap))&&(o.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(o.shape=this.nodeShapeSlug),this.internals.nodeDataCache[t]=o,this.nodeGraphCoords[t]={x:o.x,y:o.y},st(this.internals.nodesWithForcedLabels,t,Ye(o)),st(this.internals.nodesWithBackdrop,t,Wa(o)),this.itemBuckets.nodes.set(t,o.depth)}},{key:"updateNode",value:function(t){this.addNode(t);var r=this.internals.nodeDataCache[t];this.normalizationFunction.applyTo(r)}},{key:"removeNode",value:function(t){this.itemBuckets.nodes.remove(t),delete this.internals.nodeDataCache[t],delete this.nodeGraphCoords[t],delete this.nodeProgramIndex[t],this.internals.dragManager.removeNode(t),this.stateManager.removeNode(t),this.internals.nodesWithForcedLabels.delete(t),this.internals.nodesWithBackdrop.delete(t)}},{key:"postEvaluateEdge",value:function(t,r){for(var i=t,o=0,s=this.edgeVariableEntries.length;o<s;o++){var l,d,u=J(this.edgeVariableEntries[o],2),c=u[0],f=u[1];i[c]=(l=(d=i[c])!==null&&d!==void 0?d:r[c])!==null&&l!==void 0?l:f.default}}},{key:"applyEdgeSpread",value:function(t,r,i){var o;if(!(i.parallelCount<=1)){var s=this.internals.graph.source(t),l=this.internals.graph.target(t),d=s===l,u=d?r.selfLoopPath||r.path:r.parallelPath||r.path,c=u?this.edgePathsByName.get(u):void 0;if(c!=null&&c.spread){var f=(o=r.parallelSpread)!==null&&o!==void 0?o:.25,h=c.spread.compute(i.parallelIndex,i.parallelCount,f);!d&&this.internals.graph.isDirected(t)&&s>l&&(h=-h),r[c.spread.variable]=h}}}},{key:"addEdge",value:function(t){var r=this.internals.graph.getEdgeAttributes(t),i=this.stateManager.getEdgeState(t),o={};if(za(this.stylesDeclaration.edges,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateEdge(o,r),this.edgeReducer){var s=this.edgeReducer(t,o,r,i,this.stateManager.graphState,this.internals.graph);o=O(O({},o),s)}this.applyEdgeSpread(t,o,i),this.internals.edgeDataCache[t]=o,st(this.internals.edgesWithForcedLabels,t,Ye(o)),this.itemBuckets.edges.set(t,o.depth)}},{key:"updateEdge",value:function(t){this.addEdge(t)}},{key:"removeEdge",value:function(t){this.itemBuckets.edges.remove(t),delete this.internals.edgeDataCache[t],delete this.edgeProgramIndex[t],delete this.edgeTextureIndexCache[t],this.internals.edgeDataTexture.free(t),this.stateManager.removeEdge(t),this.internals.edgesWithForcedLabels.delete(t)}},{key:"clearNodeIndices",value:function(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}},{key:"clearEdgeIndices",value:function(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),fr(this.pickingState,"edge"),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}},{key:"clearEdgeState",value:function(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}},{key:"addNodeToProgram",value:function(t,r){var i,o=this.internals.nodeDataCache[t];this.internals.nodeDataTexture.allocate(t),(i=this.internals.nodeDataTexture).updateNode.apply(i,[t,o.x,o.y,o.size,this.getNodeShapeId(o)].concat(V(Wn(o)),[o.color]));var s=this.internals.nodeDataTexture.getIndex(t);this.nodeProgram.process(ft(this.pickingState,"node",t),r,o,s,t),this.nodeProgramIndex[t]=r}},{key:"addEdgeToProgram",value:function(t,r){var i,o,s=this.internals.edgeDataCache[t],l=this.internals.graph.source(t),d=this.internals.graph.target(t),u=this.internals.edgeDataTexture.allocate(t);this.edgeTextureIndexCache[t]=u;var c=l===d,f=!c&&((i=(o=this.stateManager.getEdgeState(t))===null||o===void 0?void 0:o.parallelCount)!==null&&i!==void 0?i:1)>1,h=this.edgeProgram.resolveEdgeIds(s,c,f),g=h.pathId,v=h.headId,b=h.tailId,p=h.headLengthRatio,m=h.tailLengthRatio;this.internals.edgeDataTexture.updateEdge(t,this.internals.nodeDataTexture.getIndex(l),this.internals.nodeDataTexture.getIndex(d),s.size,p,m,g,v,b),this.edgeProgram.process(ft(this.pickingState,"edge",t),r,this.internals.nodeDataCache[l],this.internals.nodeDataCache[d],s,u),this.edgeProgramIndex[t]=r}},{key:"getRenderParams",value:function(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:Yo,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:qo,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:Ko,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:Xo,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:this.internals.settings.labelPixelSnapping?1:0}}},{key:"getStagePadding",value:function(){var t=this.internals.settings,r=t.stagePadding,i=t.autoRescale;return i&&r||0}},{key:"getLayerElement",value:function(t){if(t==="mouse")return this.mouseLayer;var r=this.extraElements[t];if(!r)throw new Error('Sigma: layer "'.concat(t,'" does not exist'));return r}},{key:"initWebGLContext",value:function(){var t=this,r=this.createWebGLContext("stage");this.stageCanvas=this.extraElements.stage,this.webGLContext=r,this.stageCanvas.addEventListener("webglcontextlost",function(i){t.webGLContext&&(i.preventDefault(),t.contextLost=!0,t.renderFrame&&(cancelAnimationFrame(t.renderFrame),t.renderFrame=null),t.gpuTimerExt=void 0,t.activeGpuTimerQuery=null,t.pendingGpuTimerQueries=[],t.emit("webglContextLost"))}),this.stageCanvas.addEventListener("webglcontextrestored",function(){requestAnimationFrame(function(){t.webGLContext&&!t.webGLContext.isContextLost()&&t.restoreWebGLContext()})}),this.initPickingFramebuffer()}},{key:"initPickingFramebuffer",value:function(){var t=this.webGLContext,r=t.createFramebuffer();if(!r)throw new Error("Sigma: cannot create picking frame buffer");t.bindFramebuffer(t.FRAMEBUFFER,r);var i=t.createTexture();if(!i)throw new Error("Sigma: cannot create picking texture");t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0);var o=t.createRenderbuffer();if(!o)throw new Error("Sigma: cannot create picking depth buffer");if(t.bindRenderbuffer(t.RENDERBUFFER,o),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,1,1),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,o),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)throw new Error("Sigma: picking framebuffer is not complete");t.bindFramebuffer(t.FRAMEBUFFER,null),this.pickingFrameBuffer=r,this.pickingTexture=i,this.pickingDepthBuffer=o}},{key:"initPrograms",value:function(t,r){var i=this,o=this.webGLContext,s=Lo(o,this.pickingFrameBuffer,i,t?.nodes,r.antialiasNodes),l=s.nodeProgram,d=s.labelProgram,u=s.backdropProgram,c=s.labelBackgroundProgram,f=s.attachmentProgram,h=s.framePass,g=s.shapeSlug,v=s.shapeNameToIndex,b=s.shapeGlobalIds,p=s.variables;this.nodeProgram=l,this.nodeFramePass=h,this.nodeVariableEntries=Object.entries(p),g&&(this.nodeShapeSlug=g);var m=Co(o,this.pickingFrameBuffer,i,t?.edges,r.antialiasEdges,t?.nodes),y=m.edgeProgram,x=m.labelProgram,_=m.labelBackgroundProgram,T=m.framePass,A=m.variables,E=m.paths;return this.edgeProgram=y,this.edgeFramePass=T,this.edgeVariableEntries=Object.entries(A),this.edgePathsByName=new Map(E.map(function(R){return[R.name,R]})),{labelProgram:d,edgeLabelProgram:x,edgeLabelBackgroundProgram:_,backdropProgram:u,labelBackgroundProgram:c,attachmentProgram:f,nodeShapeMap:v??null,nodeGlobalShapeIds:b??null}}},{key:"restoreWebGLContext",value:function(){var t,r,i,o,s,l=this.internals;this.initPickingFramebuffer(),(t=l.nodeDataTexture)===null||t===void 0||t.restore(),(r=l.nodeFrameTexture)===null||r===void 0||r.restore(),(i=l.edgeDataTexture)===null||i===void 0||i.restore(),(o=l.edgeFrameTexture)===null||o===void 0||o.restore(),(s=l.attachmentManager)===null||s===void 0||s.restore(),l.hoverResolver.reset(),Object.assign(l,this.initPrograms(l.primitives,l.settings));var d=M(this.customLayerPrograms.values()),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;c.program.kill(),c.program=c.factory(this.webGLContext)}}catch(f){d.e(f)}finally{d.f()}this.contextLost=!1,this.emit("webglContextRestored"),this.refresh()}},{key:"createLayer",value:function(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.extraElements[t])throw new Error('Sigma: a layer named "'.concat(t,'" already exists'));var o=Ct(r,{position:"absolute"},{class:"sigma-".concat(t)});return i.style&&Object.assign(o.style,i.style),this.extraElements[t]=o,"beforeLayer"in i&&i.beforeLayer?this.getLayerElement(i.beforeLayer).before(o):"afterLayer"in i&&i.afterLayer?this.getLayerElement(i.afterLayer).after(o):this.container.appendChild(o),o}},{key:"createCanvas",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(t,"canvas",r)}},{key:"createWebGLContext",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.createCanvas(t,r);r.hidden&&i.remove();var o=i.getContext("webgl2",O({preserveDrawingBuffer:!1,antialias:!1,depth:!0},r));if(!o)throw new Error("Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).");return o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o}},{key:"killLayer",value:function(t){if(t==="stage"||t==="mouse")throw new Error('Sigma: cannot kill built-in layer "'.concat(t,'"'));var r=this.extraElements[t];if(!r)throw new Error("Sigma: cannot kill layer ".concat(t,", which does not exist"));return r.remove(),delete this.extraElements[t],this}},{key:"getWebGLContext",value:function(){if(!this.webGLContext)throw new Error("Sigma: WebGL context is not available");return this.webGLContext}},{key:"getNodeDataTexture",value:function(){if(!this.internals.nodeDataTexture)throw new Error("Sigma: node data texture is not available");return this.internals.nodeDataTexture}},{key:"getNormalizationFunction",value:function(){return this.normalizationFunction}},{key:"addCustomLayerProgram",value:function(t,r,i){var o;if(!this.depthLayers.includes(r))throw new Error('Sigma: cannot add custom layer program at depth "'.concat(r,'", ')+"it must be declared in primitives.depthLayers. Current layers: ".concat(this.depthLayers.join(", ")));return(o=this.customLayerPrograms.get(t))===null||o===void 0||o.program.kill(),this.customLayerPrograms.set(t,{depth:r,factory:i,program:i(this.webGLContext)}),this.refresh(),this}},{key:"removeCustomLayerProgram",value:function(t){var r=this.customLayerPrograms.get(t);return r&&(r.program.kill(),this.customLayerPrograms.delete(t),this.scheduleRender()),this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(t){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=t,this.bindCameraHandlers(),this.scheduleRender(),this}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.internals.graph}},{key:"setGraph",value:function(t){return t===this.internals.graph?this:(this.stateManager.pruneNodes(function(r){return t.hasNode(r)}),this.stateManager.pruneEdges(function(r){return t.hasEdge(r)}),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=t,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh(),this)}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var t=this.customBBox||this.nodeExtent;return{width:t.x[1]-t.x[0]||1,height:t.y[1]-t.y[0]||1}}},{key:"getNodeDisplayData",value:function(t){var r=this.internals.nodeDataCache[t];return r?Object.assign({},r):void 0}},{key:"getEdgeDisplayData",value:function(t){var r=this.internals.edgeDataCache[t];return r?Object.assign({},r):void 0}},{key:"getNodeState",value:function(t){return this.stateManager.getNodeState(t)}},{key:"getEdgeState",value:function(t){return this.stateManager.getEdgeState(t)}},{key:"getGraphState",value:function(){return this.stateManager.getGraphState()}},{key:"setNodeState",value:function(t,r){return this.stateManager.setNodeState(t,r),this}},{key:"setEdgeState",value:function(t,r){return this.stateManager.setEdgeState(t,r),this}},{key:"setGraphState",value:function(t){return this.stateManager.setGraphState(t),this}},{key:"_setPanning",value:function(t){this.stateManager.setGraphState({isPanning:t})}},{key:"_setZooming",value:function(t){this.stateManager.setGraphState({isZooming:t})}},{key:"_hasNodeDrag",value:function(){var t=this.internals.dragManager;return!!(t.pendingNode||t.session)}},{key:"_showGestureHint",value:function(t){var r=this.internals.settings;r.gestureTarget==="shared"&&(this.gestureHint=this.gestureHint||new Oc(this.container),this.gestureHint.show(t,r))}},{key:"setNodesState",value:function(t,r){return this.stateManager.setNodesState(t,r),this}},{key:"setEdgesState",value:function(t,r){return this.stateManager.setEdgesState(t,r),this}},{key:"updateContainerCursor",value:function(){var t=this.stateManager.hovered,r=this.resolvedStageStyle.cursor||"";this.container.style.cursor=t&&Ec(this.internals,t)||r}},{key:"refreshStageStyle",value:function(){this.resolvedStageStyle=Ma(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedEdgeLabels)}},{key:"getSettings",value:function(){return O({},this.internals.settings)}},{key:"getSetting",value:function(t){return this.internals.settings[t]}},{key:"getStyles",value:function(){return O({},this.stylesDeclaration)}},{key:"getPrimitives",value:function(){return O({},this.internals.primitives)}},{key:"setSetting",value:function(t,r){return this.internals.settings[t]=r,$n(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(t,r){return this.setSetting(t,r(this.internals.settings[t])),this}},{key:"setSettings",value:function(t){return this.internals.settings=O(O({},this.internals.settings),t),$n(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"resize",value:function(t){var r=this.width,i=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=en(),this.width===0)if(this.internals.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.internals.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!t&&r===this.width&&i===this.height)return this;this.labelRenderer.labelsDirty=!0;for(var o=0,s=[this.mouseLayer].concat(V(Object.values(this.extraElements)));o<s.length;o++){var l=s[o];l.style.width=this.width+"px",l.style.height=this.height+"px"}return this.webGLContext&&(this.stageCanvas.setAttribute("width",this.width*this.internals.pixelRatio+"px"),this.stageCanvas.setAttribute("height",this.height*this.internals.pixelRatio+"px"),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit("afterClear"),this}},{key:"scheduleStateRefresh",value:function(){this.needToRefreshState=!0,this.scheduleRender()}},{key:"refreshState",value:function(){var t=this,r;this.stateManager.flushGraphStateFlags();var i=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency==="graph-state",o=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency==="graph-state",s=!1;if(i)this.internals.graph.forEachNode(function(g){t.refreshNodeState(g)&&(s=!0)});else if(this.internals.nodeStyleAnalysis.dependency!=="static"){var l=M(this.stateManager.dirtyNodes),d;try{for(l.s();!(d=l.n()).done;){var u=d.value;this.refreshNodeState(u)&&(s=!0)}}catch(g){l.e(g)}finally{l.f()}}if(o)this.internals.graph.forEachEdge(function(g){t.refreshEdgeState(g)&&(s=!0)});else if(this.edgeStyleAnalysis.dependency!=="static"){var c=M(this.stateManager.dirtyEdges),f;try{for(c.s();!(f=c.n()).done;){var h=f.value;this.refreshEdgeState(h)&&(s=!0)}}catch(g){c.e(g)}finally{c.f()}}this.stateManager.graphStateChanged&&(r=this.stylesDeclaration)!==null&&r!==void 0&&r.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),s&&(this.pendingProcess="full")}},{key:"refreshNodeState",value:function(t){var r=this.internals.nodeDataCache[t];if(!r||this.nodeReducer){var i,o,s,l,d=(i=this.internals.nodeDataCache[t])===null||i===void 0?void 0:i.depth,u=(o=this.internals.nodeDataCache[t])===null||o===void 0?void 0:o.zIndex,c=(s=this.internals.nodeDataCache[t])===null||s===void 0?void 0:s.labelAttachment;this.updateNode(t);var f=this.internals.nodeDataCache[t];this.internals.attachmentManager&&f.labelAttachment!==c&&this.internals.attachmentManager.invalidateNode(t);var h;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&f.shape&&f.shape in this.internals.nodeShapeMap?h=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[f.shape]]:h=Pt(f.shape||"circle"),(l=this.internals.nodeDataTexture).updateNode.apply(l,[t,f.x,f.y,f.size,h].concat(V(Wn(f)),[f.color])),d&&f.depth!==d&&this.updateNodeDepthRanges(t,d,f.depth);var g=this.nodeProgramIndex[t];return g!==void 0&&(this.addNodeToProgram(t,g),this.nodeProgram.invalidateBuffers()),u!==void 0&&f.zIndex!==u}var v=this.internals.graph.getNodeAttributes(t),b=this.stateManager.getNodeState(t),p=r.size,m=r.shape,y=r.depth,x=r.zIndex,_=r.labelAttachment,T=r.rotationAlignment,A=r.labelRotationAlignment,E=r.color;Ga(this.stylesDeclaration.nodes,v,b,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,v,b);var R=this.nodeGraphCoords[t],C=r.x!==R.x||r.y!==R.y;if(C&&(R.x=r.x,R.y=r.y),this.normalizationFunction.applyTo(r),this.internals.nodeShapeMap?(!r.shape||!(r.shape in this.internals.nodeShapeMap))&&(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.attachmentManager&&r.labelAttachment!==_&&this.internals.attachmentManager.invalidateNode(t),st(this.internals.nodesWithForcedLabels,t,Ye(r)),st(this.internals.nodesWithBackdrop,t,Wa(r)),C||r.size!==p||r.shape!==m||r.rotationAlignment!==T||r.labelRotationAlignment!==A||r.color!==E){var k,D;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&r.shape&&r.shape in this.internals.nodeShapeMap?D=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[r.shape]]:D=Pt(r.shape||"circle"),(k=this.internals.nodeDataTexture).updateNode.apply(k,[t,r.x,r.y,r.size,D].concat(V(Wn(r)),[r.color]))}this.itemBuckets.nodes.set(t,r.depth),r.depth!==y&&this.updateNodeDepthRanges(t,y,r.depth);var F=this.nodeProgramIndex[t];return F!==void 0&&(this.addNodeToProgram(t,F),this.nodeProgram.invalidateBuffers()),r.zIndex!==x}},{key:"refreshEdgeState",value:function(t){var r=this.internals.edgeDataCache[t];if(!r||this.edgeReducer){var i=r?.depth,o=r?.zIndex;this.updateEdge(t);var s=this.internals.edgeDataCache[t];i&&s.depth!==i&&this.updateEdgeDepthRanges(t,i,s.depth);var l=this.edgeProgramIndex[t];return l!==void 0&&(this.addEdgeToProgram(t,l),this.edgeProgram.invalidateBuffers()),o!==void 0&&s.zIndex!==o}var d=this.internals.graph.getEdgeAttributes(t),u=this.stateManager.getEdgeState(t),c=r.depth,f=r.zIndex,h=r.size,g=r.path,v=r.selfLoopPath,b=r.parallelPath,p=r.head,m=r.tail;za(this.stylesDeclaration.edges,d,u,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,d),this.applyEdgeSpread(t,r,u),st(this.internals.edgesWithForcedLabels,t,Ye(r)),this.itemBuckets.edges.set(t,r.depth),r.depth!==c&&this.updateEdgeDepthRanges(t,c,r.depth);var y=this.edgeProgramIndex[t];if(y!==void 0){var x=r.size!==h||r.path!==g||r.selfLoopPath!==v||r.parallelPath!==b||r.head!==p||r.tail!==m;if(x)this.addEdgeToProgram(t,y),this.edgeProgram.invalidateBuffers();else{var _=this.internals.graph.source(t),T=this.internals.graph.target(t),A=this.internals.nodeDataCache[_],E=this.internals.nodeDataCache[T],R=this.edgeTextureIndexCache[t];this.edgeProgram.process(ft(this.pickingState,"edge",t),y,A,E,r,R),this.edgeProgram.invalidateBuffers()}}return r.zIndex!==f}},{key:"refresh",value:function(t){var r=this,i=t?.skipIndexation!==void 0?t?.skipIndexation:!1,o=t?.schedule!==void 0?t.schedule:!1,s=!t||!t.partialGraph;if(s)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(function(A){return r.addNode(A)}),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(function(A){return r.addEdge(A)}),this.pendingProcess="full";else{for(var l,d,u=((l=t.partialGraph)===null||l===void 0?void 0:l.nodes)||[],c=0,f=u?.length||0;c<f;c++){var h,g,v=""+u[c],b=(h=this.internals.nodeDataCache[v])===null||h===void 0?void 0:h.labelAttachment;if(this.updateNode(v),this.internals.attachmentManager&&((g=this.internals.nodeDataCache[v])!==null&&g!==void 0&&g.labelAttachment||b)&&this.internals.attachmentManager.invalidateNode(v),i){var p=this.nodeProgramIndex[v];if(p===void 0)throw new Error('Sigma: node "'.concat(v,`" can't be repaint`));this.addNodeToProgram(v,p)}}i&&u.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);for(var m=(t==null||(d=t.partialGraph)===null||d===void 0?void 0:d.edges)||[],y=0,x=m.length;y<x;y++){var _=""+m[y];if(this.updateEdge(_),i){var T=this.edgeProgramIndex[_];if(T===void 0)throw new Error('Sigma: edge "'.concat(_,`" can't be repaint`));this.addEdgeToProgram(_,T)}}i&&m.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!i&&this.pendingProcess!=="full"&&(this.pendingProcess=m.length>0?"full":"nodes")}return o?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var t=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){t.render()})),this}},{key:"scheduleRefresh",value:function(t){return this.refresh(O(O({},t),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(t,r){var i=this.camera.getState(),o=i.ratio,s=i.angle,l=i.x,d=i.y,u=this.internals.settings,c=u.minCameraRatio,f=u.maxCameraRatio;typeof f=="number"&&(r=Math.min(r,f)),typeof c=="number"&&(r=Math.max(r,c));var h=r/o,g={x:this.width/2,y:this.height/2},v=this.viewportToFramedGraph(t),b=this.viewportToFramedGraph(g);return{angle:s,x:(v.x-b.x)*(1-h)+l,y:(v.y-b.y)*(1-h)+d,ratio:r}}},{key:"viewRectangle",value:function(){var t=this.viewportToFramedGraph({x:0,y:0}),r=this.viewportToFramedGraph({x:this.width,y:0}),i=this.viewportToFramedGraph({x:0,y:this.height});return{x1:t.x,y1:t.y,x2:r.x,y2:r.y,height:r.y-i.y}}},{key:"framedGraphToViewport",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?je(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding()):this.matrix),s=At(o,t);return{x:(1+s.x)*this.width/2,y:(1-s.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?je(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding(),!0):this.invMatrix),s=At(o,{x:t.x/this.width*2-1,y:1-t.y/this.height*2});return isNaN(s.x)&&(s.x=0),isNaN(s.y)&&(s.y=0),s}},{key:"viewportToGraph",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(t,r))}},{key:"graphToViewport",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(t),r)}},{key:"graphToFramedGraph",value:function(t){return this.normalizationFunction(t)}},{key:"framedGraphToGraph",value:function(t){return this.normalizationFunction.inverse(t)}},{key:"getGraphToViewportRatio",value:function(){var t={x:0,y:0},r={x:1,y:1},i=Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2)),o=this.graphToViewport(t),s=this.graphToViewport(r),l=Math.sqrt(Math.pow(o.x-s.x,2)+Math.pow(o.y-s.y,2));return l/i}},{key:"computeNodeExtent",value:function(){var t=this.nodeGraphCoords,r=Object.keys(t);if(!r.length)return{x:[0,1],y:[0,1]};for(var i=1/0,o=-1/0,s=1/0,l=-1/0,d=0,u=r.length;d<u;d++){var c=t[r[d]],f=c.x,h=c.y;f<i&&(i=f),f>o&&(o=f),h<s&&(s=h),h>l&&(l=h)}return{x:[i,o],y:[s,l]}}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(t){return this.customBBox=t,this.scheduleRender(),this}},{key:"kill",value:function(){var t,r,i;this.emit("kill"),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null);for(var o=this.container;o.firstChild;)o.removeChild(o.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),this.internals.edgeLabelProgram.kill(),this.internals.edgeLabelBackgroundProgram.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),(t=this.internals.attachmentProgram)===null||t===void 0||t.kill(),(r=this.internals.attachmentManager)===null||r===void 0||r.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;var s=M(this.customLayerPrograms.values()),l;try{for(s.s();!(l=s.n()).done;){var d=l.value.program;d.kill()}}catch(f){s.e(f)}finally{s.f()}if(this.customLayerPrograms.clear(),this.sdfAtlas&&(this.sdfAtlas=null),this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext){var u;(u=this.webGLContext.getExtension("WEBGL_lose_context"))===null||u===void 0||u.loseContext(),this.webGLContext=null}(i=this.gestureHint)===null||i===void 0||i.kill(),this.gestureHint=null,this.mouseLayer.remove();for(var c in this.extraElements)this.extraElements[c].remove();this.extraElements={}}},{key:"scaleSize",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return t/this.internals.settings.zoomToSizeRatioFunction(r)*(this.getSetting("itemSizesReference")==="positions"?r*this.graphToViewportRatio:1)}},{key:"getStageCanvas",value:function(){return this.stageCanvas}},{key:"getMouseLayer",value:function(){return this.mouseLayer}}])})(Bn),ts=Xc;var Df=it(yt());function ns(a,n){return typeof a=="number"?a:(Z(a)==="object"&&a!==null&&"attribute"in a,n)}function os(a){var n=a??{},e=n.cornerRadius,t=n.rotation,r=ns(e,0),i=ns(t,0),o=`
`.concat(It,`
float sdf_square(vec2 uv, float size, float cornerRadius, float rotation) {
  // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
  }

  // Distance to box with given corner radius
  // Based on Inigo Quilez's box SDF: https://iquilezles.org/articles/distfunctions2d/
  vec2 d = abs(p) - vec2(size - cornerRadius);
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - cornerRadius;
}
`);return{name:"square",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function as(a,n){return typeof a=="number"?a:(Z(a)==="object"&&a!==null&&"attribute"in a,n)}function ss(a){var n=a??{},e=n.cornerRadius,t=n.rotation,r=as(e,0),i=as(t,0),o=`
`.concat(It,`
float sdf_triangle(vec2 uv, float size, float cornerRadius, float rotation) {
  // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
  }

  // Equilateral triangle SDF
  // Based on Inigo Quilez's triangle SDF: https://iquilezles.org/articles/distfunctions2d/
  //
  // The IQ formula uses parameter 'r' where the triangle has width = 2r.
  // For circumradius R (distance from centroid to vertex):
  //   R = r * 2 / sqrt(3), so r = R * sqrt(3) / 2
  const float k = sqrt(3.0);
  float r = size * k / 2.0;

  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  float dist = -length(p) * sign(p.y);

  // Apply corner radius if specified
  if (cornerRadius > 0.0) {
    dist = dist + cornerRadius;
  }

  return dist;
}
`);return{name:"triangle",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:.5}}function rs(a,n){return typeof a=="number"?a:(Z(a)==="object"&&a!==null&&"attribute"in a,n)}function ls(a){var n=a??{},e=n.cornerRadius,t=n.rotation,r=rs(e,0),i=rs(t,0),o=`
`.concat(It,`
float sdf_diamond(vec2 uv, float size, float cornerRadius, float rotation) {
  // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
  }

  // Diamond SDF - using rhombus formula from Inigo Quilez
  // https://iquilezles.org/articles/distfunctions2d/
  // For a diamond (square rotated 45\xB0), b = (size, size)
  vec2 b = vec2(size, -size);
  p = abs(p);
  float h = clamp((dot(b, p) + b.y * b.y) / dot(b, b), 0.0, 1.0);
  p -= b * vec2(h, h - 1.0);
  float d = length(p) * sign(p.x);

  // Apply corner radius if specified
  if (cornerRadius > 0.0) {
    d = d + cornerRadius;
  }

  return d;
}
`);return{name:"diamond",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function ds(a){var n=a??{},e=n.segments,t=e===void 0?16:e,r=`
// Compute control point from curvature
// Control point is placed perpendicular to the midpoint of source-target line
vec2 computeControlPoint(vec2 source, vec2 target, float curvature) {
  vec2 midpoint = 0.5 * (source + target);
  vec2 delta = target - source;
  // Perpendicular direction (rotated 90 degrees)
  vec2 perp = vec2(-delta.y, delta.x);
  float len = length(perp);
  if (len < 0.0001) return midpoint;
  perp = perp / len;
  // Offset by curvature * edge length
  return midpoint + perp * curvature * len;
}

// Position at parameter t \u2208 [0, 1]
vec2 path_curved_position(float t, vec2 source, vec2 target) {
  float curvature = v_curvature;
  vec2 control = computeControlPoint(source, target, curvature);
  float u = 1.0 - t;
  return u * u * source + 2.0 * u * t * control + t * t * target;
}

// Derivative of quadratic Bezier (for efficient arc length computation)
vec2 path_curved_derivative(float t, vec2 source, vec2 target) {
  float curvature = v_curvature;
  vec2 control = computeControlPoint(source, target, curvature);
  // B'(t) = 2(1-t)(P1-P0) + 2t(P2-P1)
  return 2.0 * (1.0 - t) * (control - source) + 2.0 * t * (target - control);
}

// Approximate arc length using 5-point Gauss-Legendre quadrature
float path_curved_length(vec2 source, vec2 target) {
  // Gauss-Legendre 5-point weights and abscissae
  const float x1 = 0.9061798459, x2 = 0.5384693101;
  const float w1 = 0.2369268850, w2 = 0.4786286705, w3 = 0.5688888889;

  // Transform from [-1,1] to [0,1]: t = 0.5 * (x + 1)
  float t1a = 0.5 * (-x1 + 1.0), t1b = 0.5 * (x1 + 1.0);
  float t2a = 0.5 * (-x2 + 1.0), t2b = 0.5 * (x2 + 1.0);

  // Evaluate derivative magnitudes at sample points
  float d1a = length(path_curved_derivative(t1a, source, target));
  float d1b = length(path_curved_derivative(t1b, source, target));
  float d2a = length(path_curved_derivative(t2a, source, target));
  float d2b = length(path_curved_derivative(t2b, source, target));
  float d3 = length(path_curved_derivative(0.5, source, target));

  // Sum weighted samples (factor of 0.5 for interval transformation)
  return 0.5 * (w1 * (d1a + d1b) + w2 * (d2a + d2b) + w3 * d3);
}
`;return{name:"curved",segments:t,glsl:r,uniforms:[],attributes:[{name:"curvature",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{curvature:{type:"number",default:0}},spread:{variable:"curvature",compute:function(o,s,l){return(o-(s-1)/2)*l}}}}function us(a){var n=a??{},e=n.lengthRatio,t=e===void 0?5:e,r=n.widthRatio,i=r===void 0?4:r,o=n.margin,s=o===void 0?0:o,l=`
// Arrow SDF: triangle with base at x=0, tip at x=lengthRatio
// uv.x: 0 (base) to lengthRatio (tip), uv.y: [-halfW, +halfW]
// Returns signed distance (negative inside, positive outside)
float extremity_arrow(vec2 uv, float lengthRatio, float widthRatio) {
  float x = uv.x;
  float y = abs(uv.y);
  float halfW = widthRatio * 0.5;

  // Past the tip: euclidean distance to tip point
  if (x > lengthRatio) {
    return length(vec2(x - lengthRatio, y));
  }

  // Back edge: signed distance to x=0 line
  float backDist = -x;

  // Side edge: signed distance to sloped triangle edge
  float clampedX = max(0.0, x);
  float maxY = halfW * (1.0 - clampedX / lengthRatio);
  float sideDist = y - maxY;

  // Convex shape SDF = max of half-plane distances
  return max(backDist, sideDist);
}
`;return{name:"arrow",glsl:l,length:t,widthFactor:i,margin:s,uniforms:[],attributes:[]}}var is=8,Lf=(function(){function a(n){Y(this,a),S(this,"program",null),S(this,"vao",null),S(this,"drawFramebuffer",null),S(this,"readFramebuffer",null),S(this,"viewport",new Int32Array(4)),S(this,"blend",!1),S(this,"blendSrcRGB",WebGL2RenderingContext.ONE),S(this,"blendDstRGB",WebGL2RenderingContext.ZERO),S(this,"blendSrcAlpha",WebGL2RenderingContext.ONE),S(this,"blendDstAlpha",WebGL2RenderingContext.ZERO),S(this,"blendEquationRGB",WebGL2RenderingContext.FUNC_ADD),S(this,"blendEquationAlpha",WebGL2RenderingContext.FUNC_ADD),S(this,"colorMask",[!0,!0,!0,!0]),S(this,"activeTexture",WebGL2RenderingContext.TEXTURE0),S(this,"textures",[]),this.gl=n}return K(a,[{key:"save",value:function(){var e=this.gl;this.program=e.getParameter(e.CURRENT_PROGRAM),this.vao=e.getParameter(e.VERTEX_ARRAY_BINDING),this.drawFramebuffer=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING),this.readFramebuffer=e.getParameter(e.READ_FRAMEBUFFER_BINDING),this.viewport=e.getParameter(e.VIEWPORT),this.blend=e.isEnabled(e.BLEND),this.blendSrcRGB=e.getParameter(e.BLEND_SRC_RGB),this.blendDstRGB=e.getParameter(e.BLEND_DST_RGB),this.blendSrcAlpha=e.getParameter(e.BLEND_SRC_ALPHA),this.blendDstAlpha=e.getParameter(e.BLEND_DST_ALPHA),this.blendEquationRGB=e.getParameter(e.BLEND_EQUATION_RGB),this.blendEquationAlpha=e.getParameter(e.BLEND_EQUATION_ALPHA),this.colorMask=e.getParameter(e.COLOR_WRITEMASK),this.activeTexture=e.getParameter(e.ACTIVE_TEXTURE);for(var t=0;t<is;t++)e.activeTexture(e.TEXTURE0+t),this.textures[t]=e.getParameter(e.TEXTURE_BINDING_2D);e.activeTexture(this.activeTexture)}},{key:"restore",value:function(){for(var e=this.gl,t=0;t<is;t++)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.textures[t]);e.activeTexture(this.activeTexture),e.useProgram(this.program),e.bindVertexArray(this.vao),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.drawFramebuffer),e.bindFramebuffer(e.READ_FRAMEBUFFER,this.readFramebuffer),e.viewport(this.viewport[0],this.viewport[1],this.viewport[2],this.viewport[3]),this.blend?e.enable(e.BLEND):e.disable(e.BLEND),e.blendFuncSeparate(this.blendSrcRGB,this.blendDstRGB,this.blendSrcAlpha,this.blendDstAlpha),e.blendEquationSeparate(this.blendEquationRGB,this.blendEquationAlpha),e.colorMask(this.colorMask[0],this.colorMask[1],this.colorMask[2],this.colorMask[3]),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}}])})();var bs=a=>a.canonical||a.url,qc=["#0b6b7a","#3d4fc4","#b5650f","#b2306b","#2d7a4c","#6a4c9c","#7a6400"],Yc=["#5fd3e0","#93a2ff","#f5b360","#f584b8","#74d6a0","#c3a6f5","#e6cf5c"],yr={Theme:"circle",Essay:"circle",Initiative:"diamond",Playbook:"square",Source:"triangle"},xr=new Set(["Source"]),ys=new Set(["source","extracted"]),cs={frontmatter:"Declared relations",link:"Links in text",folder:"Theme membership",source:"Sources",extracted:"Extracted (machine)"},Kc={frontmatter:.85,link:.5,folder:.16,source:.32,extracted:.3},_r=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Bt=a=>_r?0:a,de=a=>document.getElementById(a),vn=de("g-canvas"),ye=de("g-panel"),hs=de("g-status"),pt=de("g-list"),vr=de("g-view"),pe=de("g-search"),De=de("g-suggest"),He=de("g-legend"),Zc=de("g-empty"),Qc=de("g-announce"),fs=document.querySelector(".toolbar"),ee=a=>String(a??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n]),Jc=a=>/^https?:\/\//.test(a),eh=a=>a==="human-reviewed"?"Reviewed by Muthu":a==="machine-confirmed"?"Machine-confirmed":"Not yet reviewed",mr=a=>getComputedStyle(document.documentElement).getPropertyValue(a).trim(),gn=()=>document.documentElement.getAttribute("saved-theme")==="dark",Tr=a=>1-Math.pow(1-a,3),gs=a=>1+(1.6+1)*Math.pow(a-1,3)+1.6*Math.pow(a-1,2),th=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2;function ga(a,n){let e=a.replace("#",""),t=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${n})`}var Ue=new Set(xr),at=new Set(ys),we=null,va=null,Fe=null,ne=new re({multi:!0,type:"directed",allowSelfLoops:!1}),q=null,te={},ie={},We=[],pn=new Map,Wt=0;function ps(a,n,e,t,r,i=Tr,o){if(t<=0){r(e),pn.delete(a),o?.();return}pn.set(a,{from:n,to:e,dur:t,start:performance.now(),ease:i,set:r,done:o}),Wt||(Wt=requestAnimationFrame(Sr))}function Sr(a){Wt=0;for(let[e,t]of pn){let r=Math.min(1,(a-t.start)/t.dur);t.set(t.from+(t.to-t.from)*t.ease(r)),r>=1&&(pn.delete(e),t.done?.())}let n=!!we&&!_r&&!document.hidden;n&&q?.setGraphState({pulse:(Math.sin(a/520)+1)/2}),q?.refresh({skipIndexation:!0}),(pn.size||n)&&(Wt=requestAnimationFrame(Sr))}var xs=()=>{Wt||(Wt=requestAnimationFrame(Sr))};function _s(){let a=gn()?Yc:qc,n=mr("--ink"),e=mr("--muted"),t=mr("--page"),r=i=>{let o=te[i]?.type==="Theme"?i:ie[i];return o?a[We.indexOf(o)%a.length]:e};ne.updateEachNodeAttributes((i,o)=>({...o,color:o.kind==="Source"?e:r(i),labelColor:n,page:t,halo:ga(r(i).startsWith("#")?r(i):"#888888",gn()?.75:.55),ring:ga(r(i).startsWith("#")?r(i):"#888888",gn()?.35:.22),pill:ga(t.startsWith("#")?t:"#ffffff",gn()?.82:.9),pillLine:gn()?"rgba(255,255,255,0.10)":"rgba(21,23,28,0.08)"})),ne.updateEachEdgeAttributes((i,o,s)=>{let l=r(s);return{...o,color:l.startsWith("#")?ga(l,Kc[o.origin]??.4):l,activeColor:l}}),document.querySelectorAll("[data-theme-dot]").forEach(i=>i.style.background=r(i.dataset.themeDot)),q?.refresh()}var pa=Math.min(1,Math.max(.6,Math.min(innerWidth,innerHeight)/850));function nh(a){return pa*(a.type==="Theme"?16+Math.sqrt(a.degree||0)*2:(a.type==="Source"?4:6)+Math.sqrt(a.degree||0)*2.1)}function ah(a,n){let e={},r={};We.forEach(h=>r[h]=[]),a.forEach(h=>{h.type!=="Theme"&&h.type!=="Source"&&ie[h.id]&&r[ie[h.id]].push(h.id)});let i={},o=(h,g)=>h<g?h+"|"+g:g+"|"+h;n.forEach(h=>{let g=ie[h.source],v=ie[h.target];g&&v&&g!==v&&h.origin!=="source"&&h.origin!=="folder"&&(i[o(g,v)]=(i[o(g,v)]||0)+1)});let s=We.length?[We[0]]:[];for(;s.length<We.length;){let h=s[s.length-1],g=We.filter(v=>!s.includes(v)).sort((v,b)=>(i[o(h,b)]||0)-(i[o(h,v)]||0))[0];s.push(g)}let l={};s.forEach((h,g)=>{let v=-Math.PI/2+g/Math.max(1,s.length)*Math.PI*2;l[h]={x:Math.cos(v)*100,y:Math.sin(v)*100},e[h]={...l[h],side:Math.cos(v)<0?"left":"right"}});let d={};n.forEach(h=>{var g,v;h.origin==="folder"||h.origin==="source"||((d[g=h.source]||(d[g]=[])).push(h.target),(d[v=h.target]||(d[v]=[])).push(h.source))});let u=Math.PI*2;for(let h of s){let g=l[h],v=r[h].sort((A,E)=>(te[E].degree||0)-(te[A].degree||0)||A.localeCompare(E)),b=A=>{let E=0,R=0;for(let C of d[A]||[]){let k=ie[C];k&&k!==h&&l[k]&&(E+=l[k].x-g.x,R+=l[k].y-g.y)}return!E&&!R&&(E=g.x,R=g.y),Math.atan2(R,E)},p=.62,m=Math.PI/2+p,y=u-2*p,x=Math.max(30,19+1.15*v.length),_=Math.max(6,Math.floor(y*x/7.5)),T=A=>((A-m)%u+u)%u;for(let A=0,E=0;E<v.length;A++,E+=_){let R=v.slice(E,E+_).map(D=>({id:D,p:T(b(D))})).sort((D,F)=>D.p-F.p),C=x+A*9,k=y/R.length;R.forEach((D,F)=>{let L=m+(F+.5)*k;e[D.id]={x:g.x+Math.cos(L)*C,y:g.y+Math.sin(L)*C,side:Math.cos(L)<0?"left":"right"}})}}let c=a.filter(h=>h.type!=="Theme"&&h.type!=="Source"&&!e[h.id]);c.forEach((h,g)=>{let v=g/Math.max(1,c.length)*u;e[h.id]={x:Math.cos(v)*18,y:Math.sin(v)*18,side:Math.cos(v)<0?"left":"right"}});let f={};return n.filter(h=>h.origin==="source").forEach(h=>{let[g,v]=te[h.target].type==="Source"?[h.source,h.target]:[h.target,h.source];if(e[v]||!e[g])return;let b=ie[g],p=b?l[b]:{x:0,y:0},m=Math.atan2(e[g].y-p.y,e[g].x-p.x)+((f[g]=(f[g]||0)+1)-1)*.35;e[v]={x:e[g].x+Math.cos(m)*9,y:e[g].y+Math.sin(m)*9,side:Math.cos(m)<0?"left":"right"}}),a.forEach((h,g)=>{e[h.id]||(e[h.id]={x:Math.cos(g)*140,y:Math.sin(g)*140,side:"right"})}),e}function mn(){let a=va||we,n=e=>!q.getNodeState(e).isHidden;if(a){let e=new Set([a]);return ne.forEachNeighbor(a,t=>{n(t)&&e.add(t)}),e}if(Fe){let e=new Set([Fe]);return ne.forEachNode(t=>{ie[t]===Fe&&n(t)&&e.add(t)}),e}return null}var br=!1;function vt(){let a=mn(),n=va||we;ne.forEachNode(t=>q.setNodeState(t,{isActive:!!a?.has(t),isHighlighted:t===we})),ne.forEachEdge((t,r,i,o)=>q.setEdgeState(t,{isActive:!!a&&(n?i===n||o===n:a.has(i)&&a.has(o))}));let e=!!a;e?(q.setGraphState({hasActive:!0}),br||ps("fade",q.getGraphState().fade||0,1,Bt(180),t=>q.setGraphState({fade:t}))):br&&ps("fade",q.getGraphState().fade??1,0,Bt(220),t=>q.setGraphState({fade:t}),Tr,()=>{mn()||q.setGraphState({hasActive:!1})}),br=e,He.querySelectorAll("[data-theme]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.theme===Fe))),q.refresh({skipIndexation:!0}),xs()}function bn(){ne.forEachNode((a,n)=>q.setNodeState(a,{isHidden:Ue.has(n.kind)})),ne.forEachEdge((a,n,e,t)=>{let r=at.has(n.origin)||Ue.has(ne.getNodeAttribute(e,"kind"))||Ue.has(ne.getNodeAttribute(t,"kind"));q.setEdgeState(a,{isHidden:r})}),q.refresh({skipIndexation:!0}),document.querySelectorAll("#f-types input").forEach(a=>a.checked=!Ue.has(a.value)),document.querySelectorAll("#f-origins input").forEach(a=>a.checked=!at.has(a.value)),$e(),ws()}function Ts(){return ne.filterNodes(a=>!q.getNodeState(a).isHidden)}function rh(){return ne.filterEdges(a=>!q.getEdgeState(a).isHidden)}function $e(a){if(!q){hs.textContent=a??"";return}let n=Ts().length;hs.textContent=a??`${n} nodes \xB7 ${rh().length} connections shown`,Zc.hidden=n>0||!pt.hidden}var Ss=a=>{Qc.textContent=a};function Es(a){a.querySelectorAll("[data-bg]").forEach(n=>n.style.background=n.dataset.bg),a.querySelectorAll("[data-c]").forEach(n=>n.style.setProperty("--c",n.dataset.c))}function ih(a,n){let e={},t={};a.forEach(r=>e[r.type]=(e[r.type]||0)+1),n.forEach(r=>t[r.origin]=(t[r.origin]||0)+1),de("f-types").insertAdjacentHTML("beforeend",Object.keys(e).sort().map(r=>`<label><input type="checkbox" value="${ee(r)}"> <span class="shape shape-${ee(yr[r]||"circle")}" aria-hidden="true"></span>${ee(r)} <span class="muted">${e[r]}</span></label>`).join("")),de("f-origins").insertAdjacentHTML("beforeend",Object.keys(cs).filter(r=>t[r]).map(r=>`<label><input type="checkbox" value="${ee(r)}"> ${ee(cs[r])} <span class="muted">${t[r]}</span></label>`).join("")),document.querySelectorAll("#f-types input").forEach(r=>r.addEventListener("change",()=>{r.checked?Ue.delete(r.value):Ue.add(r.value),r.value==="Source"&&(r.checked?at.delete("source"):at.add("source")),bn(),vt()})),document.querySelectorAll("#f-origins input").forEach(r=>r.addEventListener("change",()=>{r.checked?at.delete(r.value):at.add(r.value),bn()}))}function oh(){let a=n=>Object.keys(ie).filter(e=>ie[e]===n&&te[e].type!=="Source").length;He.innerHTML='<p class="legend-title">Themes</p><ul>'+We.map(n=>`<li><button type="button" data-theme="${ee(n)}" aria-pressed="false"><span class="dot" data-theme-dot="${ee(n)}"></span>${ee(te[n].label)}<span class="muted">${a(n)}</span></button></li>`).join("")+'</ul><p class="legend-shapes" aria-label="Shapes"><span><span class="shape shape-circle"></span>Essay</span><span><span class="shape shape-diamond"></span>Initiative</span><span><span class="shape shape-square"></span>Playbook</span></p>',He.hidden=!1,He.querySelectorAll("[data-theme]").forEach(n=>n.addEventListener("click",()=>{let e=n.dataset.theme;if(Fe===e){Er();return}Fe=e,we&&Ut(!1),vt(),As([...mn()||[]]),Ss(`Showing the ${te[e].label} theme. Escape to leave.`),$e(`${te[e].label} \xB7 ${(mn()?.size??1)-1} notes \xB7 Esc to leave`)}))}function Er(){Fe&&(Fe=null,vt(),$e(),Ar())}function Ar(){q.getCamera().animate({x:.5,y:.5,ratio:1,angle:0},{duration:Bt(650),easing:"cubicInOut"})}var sh=()=>vn.clientWidth<=760;function As(a,n={}){let e=a.map(y=>q.getNodeDisplayData(y)).filter(Boolean);if(!e.length)return;let t=e.map(y=>y.x),r=e.map(y=>y.y),[i,o,s,l]=[Math.min(...t),Math.max(...t),Math.min(...r),Math.max(...r)],d=n.centre?q.getNodeDisplayData(n.centre):null,u=d?d.x:(i+o)/2,c=d?d.y:(s+l)/2,f=d?2*Math.max(u-i,o-u,c-s,l-c):Math.max(o-i,l-s),h=Math.min(n.maxRatio??1,Math.max(.25,f*1.25)),g=vn.clientWidth||1,v=vn.clientHeight||1,b=y=>y*h/Math.max(1,Math.min(g,v)-96),p=0,m=0;sh()?n.besidePanel&&!ye.hidden&&(m-=b(ye.offsetHeight/2)):(n.besidePanel&&!ye.hidden&&(p+=b((ye.offsetWidth+28)/2)),!He.hidden&&He.offsetParent&&(p-=b((He.offsetWidth+28)/2))),q.getCamera().animate({x:u+p,y:c+m,ratio:h},{duration:Bt(700),easing:"cubicInOut"})}var lh={links_to:"",builds_on:"builds on",refines:"refines",applies:"applies",contradicts:"contradicts",cites:"cites",part_of:"part of",supersedes:"supersedes",answers:"answers",about:"about",authored_by:"authored by",mentions:"mentions"};function vs(a){return lh[a]??String(a).replace(/_/g," ")}function dh(a){we=a,Fe=null;let n=te[a],e=ne.getNodeAttribute(a,"color"),t={link:"Linked notes",frontmatter:"Linked notes",source:n.type==="Source"?"Notes drawn from it":"Sources",folder:n.type==="Theme"?"Notes in this theme":"",extracted:"Mentions"},r={},i=(f,h,g,v)=>{let b=t[f.origin]??"Other connections";if(!b||q.getEdgeState(v).isHidden)return;let p=r[b]||(r[b]=new Map),m=p.get(h)||{out:!1,inn:!1,rel:new Set};g?m.out=!0:m.inn=!0,vs(f.rel)&&m.rel.add(vs(f.rel)),p.set(h,m)};ne.forEachOutEdge(a,(f,h,g,v)=>i(h,v,!0,f)),ne.forEachInEdge(a,(f,h,g)=>i(h,g,!1,f));let o=["Notes in this theme","Linked notes","Sources","Notes drawn from it","Mentions","Other connections"],s=f=>f.out&&f.inn?"\u21C4":f.out?"\u2192":"\u2190",l=f=>f.out&&f.inn?"Linked both ways":f.out?"This note links to it":"It links to this note",d=o.filter(f=>r[f]?.size).map(f=>{let h=[...r[f]].sort((g,v)=>te[g[0]].label.localeCompare(te[v[0]].label)).map(([g,v])=>`<li><a href="#" data-id="${ee(g)}"><span class="dot" data-bg="${ee(ne.getNodeAttribute(g,"color"))}"></span><span class="t">${ee(te[g].label)}</span>${v.rel.size?`<span class="rel muted">${ee([...v.rel].join(", "))}</span>`:""}`+(f==="Linked notes"?`<span class="dir" title="${l(v)}" aria-label="${l(v)}">${s(v)}</span>`:"")+"</a></li>");return`<h3>${ee(f)} <span class="muted">${h.length}</span></h3><ul>${h.join("")}</ul>`}),u=n.type!=="Source"&&n.type!=="Theme"?`<p class="meta"><span class="badge ${n.trust==="human-reviewed"?"ok":""}">${ee(eh(n.trust))}</span>${n.updated?`<span class="muted">Updated ${ee(n.updated)}</span>`:""}</p>`:"";ye.innerHTML=`<div class="accent" data-bg="${ee(e)}"></div><button class="close" type="button" aria-label="Close">\xD7</button><div class="g-panel-body"><p class="kind"><span class="shape shape-${ee(yr[n.type]||"circle")}" data-c="${ee(e)}"></span>${ee(n.type)}${ie[a]?` \xB7 ${ee(te[ie[a]].label)}`:""}</p><h2 tabindex="-1">${ee(n.label)}</h2>`+(n.summary?`<p class="summary">${ee(n.summary)}</p>`:"")+u+(n.canonical?`<p class="actions"><a class="open" href="${ee(n.canonical)}">Read on muthub.org <span aria-hidden="true">\u2192</span></a><a class="wiki" href="${ee(n.url)}">Wiki summary</a></p>`:`<p class="actions"><a class="open" href="${ee(n.url)}">${Jc(n.url)?"Open source":n.type==="Theme"?"Open theme":"Open note"} <span aria-hidden="true">\u2192</span></a></p>`)+d.join("")+"</div>",Es(ye),ye.hidden=!1,ye.classList.remove("in"),ye.offsetWidth,ye.classList.add("in"),Ss(`Selected ${n.type}: ${n.label}`);let c=new URL(location.href);c.searchParams.set("node",a),history.replaceState(null,"",c),vt()}function Ut(a=!0){we=null,ye.hidden=!0;let n=new URL(location.href);n.searchParams.delete("node"),history.replaceState(null,"",n),a&&vt()}function yn(a,n={}){let e=ne.getNodeAttribute(a,"kind");Ue.has(e)&&(Ue.delete(e),e==="Source"&&at.delete("source"),bn()),dh(a);let t=[...mn()||[a]],r=ie[a],i=t.length<4&&r?[...t,r,...ne.filterNodes(o=>ie[o]===r&&!q.getNodeState(o).isHidden)]:t;As(i,{maxRatio:t.length<4?.6:.85,besidePanel:!0,centre:a}),n.moveFocus&&ye.querySelector("h2")?.focus({preventScroll:!0})}ye.addEventListener("click",a=>{let n=a.target.closest("[data-id]");n?(a.preventDefault(),yn(n.getAttribute("data-id"))):a.target.closest(".close")&&Ut()});function Rs(a){if(a=a.trim().toLowerCase(),!a)return[];let n=Object.values(te),e=t=>(t.label.toLowerCase()===a?0:t.label.toLowerCase().startsWith(a)?1:2)+(t.type==="Source"?3:0);return n.filter(t=>t.label.toLowerCase().includes(a)).sort((t,r)=>e(t)-e(r)||t.label.localeCompare(r.label))}function uh(a){return Rs(a)[0]?.id??null}var nt=-1;function Ds(){let a=Rs(pe.value).slice(0,7);if(nt=-1,pe.removeAttribute("aria-activedescendant"),!a.length||document.activeElement!==pe){De.hidden=!0,pe.setAttribute("aria-expanded","false");return}De.innerHTML=a.map((n,e)=>`<li role="option" id="g-opt-${e}" data-id="${ee(n.id)}"><span class="dot" data-bg="${ee(ne.getNodeAttribute(n.id,"color"))}"></span>${ee(n.label)}<span class="muted">${ee(n.type)}</span></li>`).join(""),Es(De),De.hidden=!1,pe.setAttribute("aria-expanded","true")}function ms(a){let n=[...De.querySelectorAll("li")];n.length&&(nt=(nt+a+n.length)%n.length,n.forEach((e,t)=>{e.classList.toggle("on",t===nt),e.setAttribute("aria-selected",String(t===nt))}),pe.setAttribute("aria-activedescendant",n[nt].id))}function ch(){let a=nt>=0?De.querySelectorAll("li")[nt]?.getAttribute("data-id"):uh(pe.value);De.hidden=!0,a?($e(),yn(a,{moveFocus:!0})):$e(`No note matches \u201C${pe.value}\u201D.`)}pe.addEventListener("input",Ds);pe.addEventListener("focus",Ds);pe.addEventListener("blur",()=>setTimeout(()=>De.hidden=!0,120));pe.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),ch()):a.key==="ArrowDown"?(a.preventDefault(),ms(1)):a.key==="ArrowUp"?(a.preventDefault(),ms(-1)):a.key==="Escape"&&!De.hidden&&(De.hidden=!0,a.stopPropagation())});De.addEventListener("mousedown",a=>{let n=a.target.closest("li");n&&(a.preventDefault(),De.hidden=!0,pe.value=te[n.dataset.id].label,yn(n.dataset.id))});function ws(){if(pt.hidden)return;let a=Ts().map(n=>te[n]).sort((n,e)=>n.label.localeCompare(e.label)).map(n=>`<tr><td><a href="${ee(bs(n))}">${ee(n.label)}</a></td><td>${ee(n.type)}</td><td>${ie[n.id]?ee(te[ie[n.id]].label):""}</td><td>${n.degree||0}</td><td>${ee(n.summary)}</td></tr>`);pt.innerHTML=`<table><caption class="sr">Nodes in the graph</caption><thead><tr><th>Name</th><th>Type</th><th>Theme</th><th>Connections</th><th>Summary</th></tr></thead><tbody>${a.join("")}</tbody></table>`}function Ls(){pt.style.top=`${fs.offsetTop+fs.offsetHeight+10}px`}addEventListener("resize",()=>{pt.hidden||Ls()});vr.addEventListener("click",()=>{let a=pt.hidden;a&&we&&Ut(!1),pt.hidden=!a,a&&Ls(),de("explorer").classList.toggle("listing",a),vn.style.visibility=a?"hidden":"visible",He.style.visibility=a?"hidden":"visible",$e(),vr.setAttribute("aria-pressed",String(a)),vr.textContent=a?"Graph view":"List view",ws()});de("g-reset").addEventListener("click",()=>{Ue=new Set(xr),at=new Set(ys),pe.value="",Fe=null,Ut(),bn(),Ar()});de("g-zoom-in").addEventListener("click",()=>q.getCamera().zoomIn({duration:Bt(220)}));de("g-zoom-out").addEventListener("click",()=>q.getCamera().zoomOut({duration:Bt(220)}));de("g-fit").addEventListener("click",Ar);document.addEventListener("keydown",a=>{a.key==="Escape"&&we?Ut():a.key==="Escape"&&Fe?Er():a.key==="/"&&document.activeElement!==pe&&!a.target.closest("input,textarea")&&(a.preventDefault(),pe.focus())});document.addEventListener("themechange",_s);document.addEventListener("visibilitychange",xs);function hh(a){let n={};if(ne.forEachNode((d,u)=>{n[d]={x:u.x,y:u.y,size:u.size}}),_r){q.setGraphState({reveal:1}),a();return}let e=We.slice();ne.forEachNode(d=>{let u=te[d].type==="Theme"?d:ie[d],c=u?n[u]:{x:0,y:0};ne.mergeNodeAttributes(d,{x:c.x,y:c.y,size:0})}),q.setGraphState({reveal:0});let t=performance.now(),r=0,i={};ne.forEachNode(d=>{let u=te[d].type==="Theme"?d:ie[d];i[d]=te[d].type==="Theme"?e.indexOf(d)*90:260+Math.max(0,e.indexOf(u))*110+r++%12*18});let o=900,s=620,l=d=>{let u=!1;ne.forEachNode(f=>{let h=n[f],g=d-t-i[f];if(g<0){u=!0;return}let v=te[f].type==="Theme",b=Math.min(1,g/(v?s:o));b<1&&(u=!0);let p=v?f:ie[f],m=p?n[p]:h,y=Tr(b);ne.mergeNodeAttributes(f,v?{size:h.size*gs(b)}:{x:m.x+(h.x-m.x)*y,y:m.y+(h.y-m.y)*y,size:h.size*Math.min(1,gs(b))})});let c=Math.min(1,Math.max(0,(d-t-700)/700));q.setGraphState({reveal:th(c)}),u||c<1?requestAnimationFrame(l):(ne.forEachNode(f=>ne.mergeNodeAttributes(f,n[f])),a())};requestAnimationFrame(l)}$e("Loading the map\u2026");de("g-empty-reset").addEventListener("click",()=>de("g-reset").click());fetch("/graph.json").then(a=>{if(!a.ok)throw new Error(String(a.status));return a.json()}).then(a=>{a.nodes.forEach(s=>te[s.id]=s);let n=a.edges.filter(s=>s.source!==s.target&&te[s.source]&&te[s.target]);n.filter(s=>s.origin==="folder").forEach(s=>{let[l,d]=te[s.target].type==="Theme"?[s.source,s.target]:[s.target,s.source];te[d].type==="Theme"&&(ie[l]=d)}),We=a.nodes.filter(s=>s.type==="Theme").sort((s,l)=>(l.degree||0)-(s.degree||0)).map(s=>s.id),n.filter(s=>s.origin==="source").forEach(s=>{let[l,d]=te[s.target].type==="Source"?[s.source,s.target]:[s.target,s.source];!ie[d]&&ie[l]&&(ie[d]=ie[l])});let e=ah(a.nodes,n);a.nodes.forEach(s=>{let l=e[s.id];ne.addNode(s.id,{x:l.x,y:-l.y,size:nh(s),label:s.label,kind:s.type,community:s.community,shape:yr[s.type]||"circle",labelSide:s.type==="Theme"?"below":l.side})}),n.forEach(s=>ne.addEdge(s.source,s.target,{rel:s.type,origin:s.origin,size:s.origin==="folder"?.7:s.origin==="frontmatter"?1.6:1.1})),oh(),_s();let t=(s,l)=>l.hasActive&&!s.isActive&&!s.isHovered;q=new ts(ne,vn,{settings:{itemSizesReference:"screen",labelFont:"Instrument Sans, system-ui, sans-serif",labelDensity:.4,labelRenderedSizeThreshold:11,stagePadding:48,zIndex:!0,hideEdgesOnMove:!1,minCameraRatio:.12,maxCameraRatio:1.4},primitives:{nodes:{shapes:[Yt(),ls({cornerRadius:.12}),os({cornerRadius:.28}),ss({cornerRadius:.15})],layers:[Kt()]},edges:{paths:[Zt(),ds({curvature:.22})],extremities:[us({lengthRatio:4.5,widthRatio:3.2})],layers:[Ie()]}},customNodeState:{isActive:!1},customEdgeState:{isActive:!1},customGraphState:{hasActive:!1,fade:0,reveal:0,pulse:0},styles:{nodes:[qe.nodes,{shape:{attribute:"shape"},labelColor:{attribute:"labelColor"},cursor:"pointer",labelSize:12.5,backdropColor:{attribute:"page"},backdropPadding:5,backdropCornerRadius:8,backdropShadowColor:"rgba(0,0,0,0.18)",backdropShadowBlur:10,opacity:(s,l,d)=>t(l,d)?1-.86*(d.fade??0):1},{labelPosition:{attribute:"labelSide"}},{when:s=>s.kind==="Theme",then:{labelVisibility:s=>(s.size||0)>8*pa?"visible":"hidden",backdropVisibility:s=>(s.size||0)>8*pa?"visible":"hidden",labelSize:Math.round(15*Math.max(.8,pa)),labelFont:"Newsreader, Georgia, serif",backdropArea:"label",backdropLabelPadding:5,backdropShadowBlur:6,backdropCornerRadius:8,backdropColor:{attribute:"pill"},backdropBorderColor:{attribute:"pillLine"},backdropBorderWidth:1}},{when:(s,l,d)=>t(l,d)&&(d.fade??0)>.5,then:{labelVisibility:"hidden",backdropVisibility:"hidden"}},{whenState:"isActive",then:{labelVisibility:"visible",depth:"topNodes",backdropVisibility:"visible",backdropArea:"label",backdropLabelPadding:3,backdropColor:{attribute:"pill"},backdropShadowBlur:0}},{whenState:"isHovered",then:{backdropVisibility:"visible",backdropArea:"both",labelVisibility:"visible",backdropShadowBlur:10,size:s=>(s.size||6)*1.18}},{whenState:"isHighlighted",then:{backdropVisibility:"visible",backdropArea:"node",backdropPadding:3,labelVisibility:"visible",depth:"topNodes",backdropColor:{attribute:"ring"},backdropShadowColor:{attribute:"halo"},backdropShadowBlur:(s,l,d)=>14+16*(d.pulse??.5)}}],edges:[qe.edges,{path:{when:s=>s.origin==="folder",then:"line",else:"curved"}},{opacity:(s,l,d)=>(d.reveal??1)*(d.hasActive&&!l.isActive?1-.9*(d.fade??0):1)},{whenState:"isActive",then:{color:{attribute:"activeColor"},size:2.4,depth:"topEdges"}},{when:(s,l)=>l.isActive&&s.origin!=="folder",then:{head:"arrow"}},{when:(s,l)=>l.isActive&&s.origin==="folder",then:{size:1,opacity:.55}},{when:s=>s.origin==="frontmatter",then:{head:"arrow"}}]}}),q.on("enterNode",({node:s})=>{va=s,vt()}),q.on("leaveNode",()=>{va=null,vt()}),q.on("clickNode",({node:s})=>{if(te[s].type==="Theme"&&!we){He.querySelector(`[data-theme="${CSS.escape(s)}"]`)?.click();return}yn(s)}),q.on("doubleClickNode",s=>{s.preventSigmaDefault?.(),location.href=bs(te[s.node])}),q.on("clickStage",()=>{we?Ut():Er()}),ih(a.nodes,n),bn();let r=a.nodes.filter(s=>!xr.has(s.type)).map(s=>e[s.id]);q.setCustomBBox({x:[Math.min(...r.map(s=>s.x)),Math.max(...r.map(s=>s.x))],y:[Math.min(...r.map(s=>-s.y)),Math.max(...r.map(s=>-s.y))]});let i=new URL(location.href).searchParams.get("node"),o=!!(i&&te[i]);if(i&&!o){let s=new URL(location.href);s.searchParams.delete("node"),history.replaceState(null,"",s)}(o?s=>{q.setGraphState({reveal:1}),s()}:hh)(()=>{o?yn(i):i&&$e("That note is not in the graph. Showing the whole map."),window.kfExplorer={screenPos:s=>{let l=q.getNodeDisplayData(s);if(!l)return null;let d=q.framedGraphToViewport({x:l.x,y:l.y});return[d.x,d.y]},selected:()=>we,cameraRatio:()=>q.getCamera().ratio,renderer:q},de("explorer").dataset.ready="true"})}).catch(a=>{console.error(a),$e("The graph could not be loaded.")});})();
/*! Bundled license information:

sigma/dist/edge-data-texture-f60aad70.esm.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
