/* Knowledge Foundation graph explorer. Includes sigma.js 4.0.3 (MIT), graphology 0.26.0 (MIT), events 3.3.0 (MIT). */
(()=>{var Ns=Object.create;var fn=Object.defineProperty;var Fs=Object.getOwnPropertyDescriptor;var Is=Object.getOwnPropertyNames;var ks=Object.getPrototypeOf,Ms=Object.prototype.hasOwnProperty;var pn=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var zs=(r,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Is(t))!Ms.call(r,i)&&i!==e&&fn(r,i,{get:()=>t[i],enumerable:!(a=Fs(t,i))||a.enumerable});return r};var Mr=(r,t,e)=>(e=r!=null?Ns(ks(r)):{},zs(t||!r||!r.__esModule?fn(e,"default",{value:r,enumerable:!0}):e,r));var Or=pn((Dc,ja)=>{"use strict";var St=typeof Reflect=="object"?Reflect:null,bn=St&&typeof St.apply=="function"?St.apply:function(t,e,a){return Function.prototype.apply.call(t,e,a)},zr;St&&typeof St.ownKeys=="function"?zr=St.ownKeys:Object.getOwnPropertySymbols?zr=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:zr=function(t){return Object.getOwnPropertyNames(t)};function Os(r){console&&console.warn&&console.warn(r)}var yn=Number.isNaN||function(t){return t!==t};function V(){V.init.call(this)}ja.exports=V;ja.exports.once=Hs;V.EventEmitter=V;V.prototype._events=void 0;V.prototype._eventsCount=0;V.prototype._maxListeners=void 0;var xn=10;function Br(r){if(typeof r!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}Object.defineProperty(V,"defaultMaxListeners",{enumerable:!0,get:function(){return xn},set:function(r){if(typeof r!="number"||r<0||yn(r))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");xn=r}});V.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};V.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||yn(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function Sn(r){return r._maxListeners===void 0?V.defaultMaxListeners:r._maxListeners}V.prototype.getMaxListeners=function(){return Sn(this)};V.prototype.emit=function(t){for(var e=[],a=1;a<arguments.length;a++)e.push(arguments[a]);var i=t==="error",n=this._events;if(n!==void 0)i=i&&n.error===void 0;else if(!i)return!1;if(i){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var l=n[t];if(l===void 0)return!1;if(typeof l=="function")bn(l,this,e);else for(var d=l.length,c=An(l,d),a=0;a<d;++a)bn(c[a],this,e);return!0};function vn(r,t,e,a){var i,n,o;if(Br(e),n=r._events,n===void 0?(n=r._events=Object.create(null),r._eventsCount=0):(n.newListener!==void 0&&(r.emit("newListener",t,e.listener?e.listener:e),n=r._events),o=n[t]),o===void 0)o=n[t]=e,++r._eventsCount;else if(typeof o=="function"?o=n[t]=a?[e,o]:[o,e]:a?o.unshift(e):o.push(e),i=Sn(r),i>0&&o.length>i&&!o.warned){o.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=r,s.type=t,s.count=o.length,Os(s)}return r}V.prototype.addListener=function(t,e){return vn(this,t,e,!1)};V.prototype.on=V.prototype.addListener;V.prototype.prependListener=function(t,e){return vn(this,t,e,!0)};function Ws(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function En(r,t,e){var a={fired:!1,wrapFn:void 0,target:r,type:t,listener:e},i=Ws.bind(a);return i.listener=e,a.wrapFn=i,i}V.prototype.once=function(t,e){return Br(e),this.on(t,En(this,t,e)),this};V.prototype.prependOnceListener=function(t,e){return Br(e),this.prependListener(t,En(this,t,e)),this};V.prototype.removeListener=function(t,e){var a,i,n,o,s;if(Br(e),i=this._events,i===void 0)return this;if(a=i[t],a===void 0)return this;if(a===e||a.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,a.listener||e));else if(typeof a!="function"){for(n=-1,o=a.length-1;o>=0;o--)if(a[o]===e||a[o].listener===e){s=a[o].listener,n=o;break}if(n<0)return this;n===0?a.shift():Us(a,n),a.length===1&&(i[t]=a[0]),i.removeListener!==void 0&&this.emit("removeListener",t,s||e)}return this};V.prototype.off=V.prototype.removeListener;V.prototype.removeAllListeners=function(t){var e,a,i;if(a=this._events,a===void 0)return this;if(a.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):a[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete a[t]),this;if(arguments.length===0){var n=Object.keys(a),o;for(i=0;i<n.length;++i)o=n[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=a[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this};function Tn(r,t,e){var a=r._events;if(a===void 0)return[];var i=a[t];return i===void 0?[]:typeof i=="function"?e?[i.listener||i]:[i]:e?$s(i):An(i,i.length)}V.prototype.listeners=function(t){return Tn(this,t,!0)};V.prototype.rawListeners=function(t){return Tn(this,t,!1)};V.listenerCount=function(r,t){return typeof r.listenerCount=="function"?r.listenerCount(t):_n.call(r,t)};V.prototype.listenerCount=_n;function _n(r){var t=this._events;if(t!==void 0){var e=t[r];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}V.prototype.eventNames=function(){return this._eventsCount>0?zr(this._events):[]};function An(r,t){for(var e=new Array(t),a=0;a<t;++a)e[a]=r[a];return e}function Us(r,t){for(;t+1<r.length;t++)r[t]=r[t+1];r.pop()}function $s(r){for(var t=new Array(r.length),e=0;e<t.length;++e)t[e]=r[e].listener||r[e];return t}function Hs(r,t){return new Promise(function(e,a){function i(o){r.removeListener(t,n),a(o)}function n(){typeof r.removeListener=="function"&&r.removeListener("error",i),e([].slice.call(arguments))}Dn(r,t,n,{once:!0}),t!=="error"&&Vs(r,i,{once:!0})})}function Vs(r,t,e){typeof r.on=="function"&&Dn(r,"error",t,e)}function Dn(r,t,e,a){if(typeof r.on=="function")a.once?r.once(t,e):r.on(t,e);else if(typeof r.addEventListener=="function")r.addEventListener(t,function i(n){a.once&&r.removeEventListener(t,i),e(n)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof r)}});var oo=pn((Gh,no)=>{no.exports=function(t){return t!==null&&typeof t=="object"&&typeof t.addUndirectedEdgeWithKey=="function"&&typeof t.dropNode=="function"&&typeof t.multi=="boolean"}});function Bs(){let r=arguments[0];for(let t=1,e=arguments.length;t<e;t++)if(arguments[t])for(let a in arguments[t])r[a]=arguments[t][a];return r}var j=Bs;typeof Object.assign=="function"&&(j=Object.assign);function ne(r,t,e,a){let i=r._nodes.get(t),n=null;return i&&(a==="mixed"?n=i.out&&i.out[e]||i.undirected&&i.undirected[e]:a==="directed"?n=i.out&&i.out[e]:n=i.undirected&&i.undirected[e]),n}function Y(r){return typeof r=="object"&&r!==null}function Xa(r){let t;for(t in r)return!1;return!0}function le(r,t,e){Object.defineProperty(r,t,{enumerable:!1,configurable:!1,writable:!0,value:e})}function ge(r,t,e){let a={enumerable:!0,configurable:!0};typeof e=="function"?a.get=e:(a.value=e,a.writable=!1),Object.defineProperty(r,t,a)}function qa(r){return!(!Y(r)||r.attributes&&!Array.isArray(r.attributes))}function mn(){let r=Math.floor(Math.random()*256)&255;return()=>r++}function Se(){let r=arguments,t=null,e=-1;return{[Symbol.iterator](){return this},next(){let a=null;do{if(t===null){if(e++,e>=r.length)return{done:!0};t=r[e][Symbol.iterator]()}if(a=t.next(),a.done){t=null;continue}break}while(!0);return a}}}function Xe(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}var Mn=Mr(Or());var Yt=class extends Error{constructor(t){super(),this.name="GraphError",this.message=t}},C=class r extends Yt{constructor(t){super(t),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,r.prototype.constructor)}},P=class r extends Yt{constructor(t){super(t),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,r.prototype.constructor)}},F=class r extends Yt{constructor(t){super(t),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,r.prototype.constructor)}};function Ka(r,t){this.key=r,this.attributes=t,this.clear()}Ka.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function Ya(r,t){this.key=r,this.attributes=t,this.clear()}Ya.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function Za(r,t){this.key=r,this.attributes=t,this.clear()}Za.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function nt(r,t,e,a,i){this.key=t,this.attributes=i,this.undirected=r,this.source=e,this.target=a}nt.prototype.attach=function(){let r="out",t="in";this.undirected&&(r=t="undirected");let e=this.source.key,a=this.target.key;this.source[r][a]=this,!(this.undirected&&e===a)&&(this.target[t][e]=this)};nt.prototype.attachMulti=function(){let r="out",t="in",e=this.source.key,a=this.target.key;this.undirected&&(r=t="undirected");let i=this.source[r],n=i[a];if(typeof n>"u"){i[a]=this,this.undirected&&e===a||(this.target[t][e]=this);return}n.previous=this,this.next=n,i[a]=this,this.target[t][e]=this};nt.prototype.detach=function(){let r=this.source.key,t=this.target.key,e="out",a="in";this.undirected&&(e=a="undirected"),delete this.source[e][t],delete this.target[a][r]};nt.prototype.detachMulti=function(){let r=this.source.key,t=this.target.key,e="out",a="in";this.undirected&&(e=a="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][t],delete this.target[a][r]):(this.next.previous=void 0,this.source[e][t]=this.next,this.target[a][r]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};var Ln=0,Rn=1,Xs=2,Pn=3;function Ce(r,t,e,a,i,n,o){let s,l,d,c;if(a=""+a,e===Ln){if(s=r._nodes.get(a),!s)throw new P(`Graph.${t}: could not find the "${a}" node in the graph.`);d=i,c=n}else if(e===Pn){if(i=""+i,l=r._edges.get(i),!l)throw new P(`Graph.${t}: could not find the "${i}" edge in the graph.`);let f=l.source.key,u=l.target.key;if(a===f)s=l.target;else if(a===u)s=l.source;else throw new P(`Graph.${t}: the "${a}" node is not attached to the "${i}" edge (${f}, ${u}).`);d=n,c=o}else{if(l=r._edges.get(a),!l)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`);e===Rn?s=l.source:s=l.target,d=i,c=n}return[s,d,c]}function qs(r,t,e){r.prototype[t]=function(a,i,n){let[o,s]=Ce(this,t,e,a,i,n);return o.attributes[s]}}function js(r,t,e){r.prototype[t]=function(a,i){let[n]=Ce(this,t,e,a,i);return n.attributes}}function Ks(r,t,e){r.prototype[t]=function(a,i,n){let[o,s]=Ce(this,t,e,a,i,n);return o.attributes.hasOwnProperty(s)}}function Ys(r,t,e){r.prototype[t]=function(a,i,n,o){let[s,l,d]=Ce(this,t,e,a,i,n,o);return s.attributes[l]=d,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function Zs(r,t,e){r.prototype[t]=function(a,i,n,o){let[s,l,d]=Ce(this,t,e,a,i,n,o);if(typeof d!="function")throw new C(`Graph.${t}: updater should be a function.`);let c=s.attributes,f=d(c[l]);return c[l]=f,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function Qs(r,t,e){r.prototype[t]=function(a,i,n){let[o,s]=Ce(this,t,e,a,i,n);return delete o.attributes[s],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:s}),this}}function Js(r,t,e){r.prototype[t]=function(a,i,n){let[o,s]=Ce(this,t,e,a,i,n);if(!Y(s))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return o.attributes=s,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function el(r,t,e){r.prototype[t]=function(a,i,n){let[o,s]=Ce(this,t,e,a,i,n);if(!Y(s))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return j(o.attributes,s),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:s}),this}}function tl(r,t,e){r.prototype[t]=function(a,i,n){let[o,s]=Ce(this,t,e,a,i,n);if(typeof s!="function")throw new C(`Graph.${t}: provided updater is not a function.`);return o.attributes=s(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}var rl=[{name:r=>`get${r}Attribute`,attacher:qs},{name:r=>`get${r}Attributes`,attacher:js},{name:r=>`has${r}Attribute`,attacher:Ks},{name:r=>`set${r}Attribute`,attacher:Ys},{name:r=>`update${r}Attribute`,attacher:Zs},{name:r=>`remove${r}Attribute`,attacher:Qs},{name:r=>`replace${r}Attributes`,attacher:Js},{name:r=>`merge${r}Attributes`,attacher:el},{name:r=>`update${r}Attributes`,attacher:tl}];function Qa(r){rl.forEach(function({name:t,attacher:e}){e(r,t("Node"),Ln),e(r,t("Source"),Rn),e(r,t("Target"),Xs),e(r,t("Opposite"),Pn)})}function al(r,t,e){r.prototype[t]=function(a,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+a,s=""+i;if(i=arguments[2],n=ne(this,o,s,e),!n)throw new P(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,n=this._edges.get(a),!n)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}return n.attributes[i]}}function il(r,t,e){r.prototype[t]=function(a){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let n=""+a,o=""+arguments[1];if(i=ne(this,n,o,e),!i)throw new P(`Graph.${t}: could not find an edge for the given path ("${n}" - "${o}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,i=this._edges.get(a),!i)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}return i.attributes}}function nl(r,t,e){r.prototype[t]=function(a,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+a,s=""+i;if(i=arguments[2],n=ne(this,o,s,e),!n)throw new P(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,n=this._edges.get(a),!n)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}return n.attributes.hasOwnProperty(i)}}function ol(r,t,e){r.prototype[t]=function(a,i,n){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let s=""+a,l=""+i;if(i=arguments[2],n=arguments[3],o=ne(this,s,l,e),!o)throw new P(`Graph.${t}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,o=this._edges.get(a),!o)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}return o.attributes[i]=n,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:i}),this}}function sl(r,t,e){r.prototype[t]=function(a,i,n){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let s=""+a,l=""+i;if(i=arguments[2],n=arguments[3],o=ne(this,s,l,e),!o)throw new P(`Graph.${t}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,o=this._edges.get(a),!o)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}if(typeof n!="function")throw new C(`Graph.${t}: updater should be a function.`);return o.attributes[i]=n(o.attributes[i]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:i}),this}}function ll(r,t,e){r.prototype[t]=function(a,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+a,s=""+i;if(i=arguments[2],n=ne(this,o,s,e),!n)throw new P(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,n=this._edges.get(a),!n)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}return delete n.attributes[i],this.emit("edgeAttributesUpdated",{key:n.key,type:"remove",attributes:n.attributes,name:i}),this}}function dl(r,t,e){r.prototype[t]=function(a,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+a,s=""+i;if(i=arguments[2],n=ne(this,o,s,e),!n)throw new P(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,n=this._edges.get(a),!n)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}if(!Y(i))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return n.attributes=i,this.emit("edgeAttributesUpdated",{key:n.key,type:"replace",attributes:n.attributes}),this}}function ul(r,t,e){r.prototype[t]=function(a,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+a,s=""+i;if(i=arguments[2],n=ne(this,o,s,e),!n)throw new P(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,n=this._edges.get(a),!n)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}if(!Y(i))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return j(n.attributes,i),this.emit("edgeAttributesUpdated",{key:n.key,type:"merge",attributes:n.attributes,data:i}),this}}function cl(r,t,e){r.prototype[t]=function(a,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+a,s=""+i;if(i=arguments[2],n=ne(this,o,s,e),!n)throw new P(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(a=""+a,n=this._edges.get(a),!n)throw new P(`Graph.${t}: could not find the "${a}" edge in the graph.`)}if(typeof i!="function")throw new C(`Graph.${t}: provided updater is not a function.`);return n.attributes=i(n.attributes),this.emit("edgeAttributesUpdated",{key:n.key,type:"update",attributes:n.attributes}),this}}var hl=[{name:r=>`get${r}Attribute`,attacher:al},{name:r=>`get${r}Attributes`,attacher:il},{name:r=>`has${r}Attribute`,attacher:nl},{name:r=>`set${r}Attribute`,attacher:ol},{name:r=>`update${r}Attribute`,attacher:sl},{name:r=>`remove${r}Attribute`,attacher:ll},{name:r=>`replace${r}Attributes`,attacher:dl},{name:r=>`merge${r}Attributes`,attacher:ul},{name:r=>`update${r}Attributes`,attacher:cl}];function Ja(r){hl.forEach(function({name:t,attacher:e}){e(r,t("Edge"),"mixed"),e(r,t("DirectedEdge"),"directed"),e(r,t("UndirectedEdge"),"undirected")})}var gl=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function fl(r,t,e,a){let i=!1;for(let n in t){if(n===a)continue;let o=t[n];if(i=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),r&&i)return o.key}}function pl(r,t,e,a){let i,n,o,s=!1;for(let l in t)if(l!==a){i=t[l];do{if(n=i.source,o=i.target,s=e(i.key,i.attributes,n.key,o.key,n.attributes,o.attributes,i.undirected),r&&s)return i.key;i=i.next}while(i!==void 0)}}function ei(r,t){let e=Object.keys(r),a=e.length,i,n=0;return{[Symbol.iterator](){return this},next(){do if(i)i=i.next;else{if(n>=a)return{done:!0};let o=e[n++];if(o===t){i=void 0;continue}i=r[o]}while(!i);return{done:!1,value:{edge:i.key,attributes:i.attributes,source:i.source.key,target:i.target.key,sourceAttributes:i.source.attributes,targetAttributes:i.target.attributes,undirected:i.undirected}}}}}function ml(r,t,e,a){let i=t[e];if(!i)return;let n=i.source,o=i.target;if(a(i.key,i.attributes,n.key,o.key,n.attributes,o.attributes,i.undirected)&&r)return i.key}function bl(r,t,e,a){let i=t[e];if(!i)return;let n=!1;do{if(n=a(i.key,i.attributes,i.source.key,i.target.key,i.source.attributes,i.target.attributes,i.undirected),r&&n)return i.key;i=i.next}while(i!==void 0)}function ti(r,t){let e=r[t];if(e.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!e)return{done:!0};let i={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:i}}};let a=!1;return{[Symbol.iterator](){return this},next(){return a===!0?{done:!0}:(a=!0,{done:!1,value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected}})}}}function xl(r,t){if(r.size===0)return[];if(t==="mixed"||t===r.type)return Array.from(r._edges.keys());let e=t==="undirected"?r.undirectedSize:r.directedSize,a=new Array(e),i=t==="undirected",n=r._edges.values(),o=0,s,l;for(;s=n.next(),s.done!==!0;)l=s.value,l.undirected===i&&(a[o++]=l.key);return a}function Cn(r,t,e,a){if(t.size===0)return;let i=e!=="mixed"&&e!==t.type,n=e==="undirected",o,s,l=!1,d=t._edges.values();for(;o=d.next(),o.done!==!0;){if(s=o.value,i&&s.undirected!==n)continue;let{key:c,attributes:f,source:u,target:g}=s;if(l=a(c,f,u.key,g.key,u.attributes,g.attributes,s.undirected),r&&l)return c}}function yl(r,t){if(r.size===0)return Xe();let e=t!=="mixed"&&t!==r.type,a=t==="undirected",i=r._edges.values();return{[Symbol.iterator](){return this},next(){let n,o;for(;;){if(n=i.next(),n.done)return n;if(o=n.value,!(e&&o.undirected!==a))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function ri(r,t,e,a,i,n){let o=t?pl:fl,s;if(e!=="undirected"&&(a!=="out"&&(s=o(r,i.in,n),r&&s)||a!=="in"&&(s=o(r,i.out,n,a?void 0:i.key),r&&s))||e!=="directed"&&(s=o(r,i.undirected,n),r&&s))return s}function Sl(r,t,e,a){let i=[];return ri(!1,r,t,e,a,function(n){i.push(n)}),i}function vl(r,t,e){let a=Xe();return r!=="undirected"&&(t!=="out"&&typeof e.in<"u"&&(a=Se(a,ei(e.in))),t!=="in"&&typeof e.out<"u"&&(a=Se(a,ei(e.out,t?void 0:e.key)))),r!=="directed"&&typeof e.undirected<"u"&&(a=Se(a,ei(e.undirected))),a}function ai(r,t,e,a,i,n,o){let s=e?bl:ml,l;if(t!=="undirected"&&(typeof i.in<"u"&&a!=="out"&&(l=s(r,i.in,n,o),r&&l)||typeof i.out<"u"&&a!=="in"&&(a||i.key!==n)&&(l=s(r,i.out,n,o),r&&l))||t!=="directed"&&typeof i.undirected<"u"&&(l=s(r,i.undirected,n,o),r&&l))return l}function El(r,t,e,a,i){let n=[];return ai(!1,r,t,e,a,i,function(o){n.push(o)}),n}function Tl(r,t,e,a){let i=Xe();return r!=="undirected"&&(typeof e.in<"u"&&t!=="out"&&a in e.in&&(i=Se(i,ti(e.in,a))),typeof e.out<"u"&&t!=="in"&&a in e.out&&(t||e.key!==a)&&(i=Se(i,ti(e.out,a)))),r!=="directed"&&typeof e.undirected<"u"&&a in e.undirected&&(i=Se(i,ti(e.undirected,a))),i}function _l(r,t){let{name:e,type:a,direction:i}=t;r.prototype[e]=function(n,o){if(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)return[];if(!arguments.length)return xl(this,a);if(arguments.length===1){n=""+n;let s=this._nodes.get(n);if(typeof s>"u")throw new P(`Graph.${e}: could not find the "${n}" node in the graph.`);return Sl(this.multi,a==="mixed"?this.type:a,i,s)}if(arguments.length===2){n=""+n,o=""+o;let s=this._nodes.get(n);if(!s)throw new P(`Graph.${e}:  could not find the "${n}" source node in the graph.`);if(!this._nodes.has(o))throw new P(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return El(a,this.multi,i,s,o)}throw new C(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Al(r,t){let{name:e,type:a,direction:i}=t,n="forEach"+e[0].toUpperCase()+e.slice(1,-1);r.prototype[n]=function(d,c,f){if(!(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)){if(arguments.length===1)return f=d,Cn(!1,this,a,f);if(arguments.length===2){d=""+d,f=c;let u=this._nodes.get(d);if(typeof u>"u")throw new P(`Graph.${n}: could not find the "${d}" node in the graph.`);return ri(!1,this.multi,a==="mixed"?this.type:a,i,u,f)}if(arguments.length===3){d=""+d,c=""+c;let u=this._nodes.get(d);if(!u)throw new P(`Graph.${n}:  could not find the "${d}" source node in the graph.`);if(!this._nodes.has(c))throw new P(`Graph.${n}:  could not find the "${c}" target node in the graph.`);return ai(!1,a,this.multi,i,u,c,f)}throw new C(`Graph.${n}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};let o="map"+e[0].toUpperCase()+e.slice(1);r.prototype[o]=function(){let d=Array.prototype.slice.call(arguments),c=d.pop(),f;if(d.length===0){let u=0;a!=="directed"&&(u+=this.undirectedSize),a!=="undirected"&&(u+=this.directedSize),f=new Array(u);let g=0;d.push((h,p,b,x,m,y,S)=>{f[g++]=c(h,p,b,x,m,y,S)})}else f=[],d.push((u,g,h,p,b,x,m)=>{f.push(c(u,g,h,p,b,x,m))});return this[n].apply(this,d),f};let s="filter"+e[0].toUpperCase()+e.slice(1);r.prototype[s]=function(){let d=Array.prototype.slice.call(arguments),c=d.pop(),f=[];return d.push((u,g,h,p,b,x,m)=>{c(u,g,h,p,b,x,m)&&f.push(u)}),this[n].apply(this,d),f};let l="reduce"+e[0].toUpperCase()+e.slice(1);r.prototype[l]=function(){let d=Array.prototype.slice.call(arguments);if(d.length<2||d.length>4)throw new C(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${d.length}).`);if(typeof d[d.length-1]=="function"&&typeof d[d.length-2]!="function")throw new C(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let c,f;d.length===2?(c=d[0],f=d[1],d=[]):d.length===3?(c=d[1],f=d[2],d=[d[0]]):d.length===4&&(c=d[2],f=d[3],d=[d[0],d[1]]);let u=f;return d.push((g,h,p,b,x,m,y)=>{u=c(u,g,h,p,b,x,m,y)}),this[n].apply(this,d),u}}function Dl(r,t){let{name:e,type:a,direction:i}=t,n="find"+e[0].toUpperCase()+e.slice(1,-1);r.prototype[n]=function(l,d,c){if(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)return!1;if(arguments.length===1)return c=l,Cn(!0,this,a,c);if(arguments.length===2){l=""+l,c=d;let f=this._nodes.get(l);if(typeof f>"u")throw new P(`Graph.${n}: could not find the "${l}" node in the graph.`);return ri(!0,this.multi,a==="mixed"?this.type:a,i,f,c)}if(arguments.length===3){l=""+l,d=""+d;let f=this._nodes.get(l);if(!f)throw new P(`Graph.${n}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(d))throw new P(`Graph.${n}:  could not find the "${d}" target node in the graph.`);return ai(!0,a,this.multi,i,f,d,c)}throw new C(`Graph.${n}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};let o="some"+e[0].toUpperCase()+e.slice(1,-1);r.prototype[o]=function(){let l=Array.prototype.slice.call(arguments),d=l.pop();return l.push((f,u,g,h,p,b,x)=>d(f,u,g,h,p,b,x)),!!this[n].apply(this,l)};let s="every"+e[0].toUpperCase()+e.slice(1,-1);r.prototype[s]=function(){let l=Array.prototype.slice.call(arguments),d=l.pop();return l.push((f,u,g,h,p,b,x)=>!d(f,u,g,h,p,b,x)),!this[n].apply(this,l)}}function Ll(r,t){let{name:e,type:a,direction:i}=t,n=e.slice(0,-1)+"Entries";r.prototype[n]=function(o,s){if(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)return Xe();if(!arguments.length)return yl(this,a);if(arguments.length===1){o=""+o;let l=this._nodes.get(o);if(!l)throw new P(`Graph.${n}: could not find the "${o}" node in the graph.`);return vl(a,i,l)}if(arguments.length===2){o=""+o,s=""+s;let l=this._nodes.get(o);if(!l)throw new P(`Graph.${n}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(s))throw new P(`Graph.${n}:  could not find the "${s}" target node in the graph.`);return Tl(a,i,l,s)}throw new C(`Graph.${n}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function ii(r){gl.forEach(t=>{_l(r,t),Al(r,t),Dl(r,t),Ll(r,t)})}var Rl=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Wr(){this.A=null,this.B=null}Wr.prototype.wrap=function(r){this.A===null?this.A=r:this.B===null&&(this.B=r)};Wr.prototype.has=function(r){return this.A!==null&&r in this.A||this.B!==null&&r in this.B};function Zt(r,t,e,a,i){for(let n in a){let o=a[n],s=o.source,l=o.target,d=s===e?l:s;if(t&&t.has(d.key))continue;let c=i(d.key,d.attributes);if(r&&c)return d.key}}function ni(r,t,e,a,i){if(t!=="mixed"){if(t==="undirected")return Zt(r,null,a,a.undirected,i);if(typeof e=="string")return Zt(r,null,a,a[e],i)}let n=new Wr,o;if(t!=="undirected"){if(e!=="out"){if(o=Zt(r,null,a,a.in,i),r&&o)return o;n.wrap(a.in)}if(e!=="in"){if(o=Zt(r,n,a,a.out,i),r&&o)return o;n.wrap(a.out)}}if(t!=="directed"&&(o=Zt(r,n,a,a.undirected,i),r&&o))return o}function Pl(r,t,e){if(r!=="mixed"){if(r==="undirected")return Object.keys(e.undirected);if(typeof t=="string")return Object.keys(e[t])}let a=[];return ni(!1,r,t,e,function(i){a.push(i)}),a}function Qt(r,t,e){let a=Object.keys(e),i=a.length,n=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(n>=i)return r&&r.wrap(e),{done:!0};let s=e[a[n++]],l=s.source,d=s.target;if(o=l===t?d:l,r&&r.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Cl(r,t,e){if(r!=="mixed"){if(r==="undirected")return Qt(null,e,e.undirected);if(typeof t=="string")return Qt(null,e,e[t])}let a=Xe(),i=new Wr;return r!=="undirected"&&(t!=="out"&&(a=Se(a,Qt(i,e,e.in))),t!=="in"&&(a=Se(a,Qt(i,e,e.out)))),r!=="directed"&&(a=Se(a,Qt(i,e,e.undirected))),a}function wl(r,t){let{name:e,type:a,direction:i}=t;r.prototype[e]=function(n){if(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)return[];n=""+n;let o=this._nodes.get(n);if(typeof o>"u")throw new P(`Graph.${e}: could not find the "${n}" node in the graph.`);return Pl(a==="mixed"?this.type:a,i,o)}}function Gl(r,t){let{name:e,type:a,direction:i}=t,n="forEach"+e[0].toUpperCase()+e.slice(1,-1);r.prototype[n]=function(d,c){if(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)return;d=""+d;let f=this._nodes.get(d);if(typeof f>"u")throw new P(`Graph.${n}: could not find the "${d}" node in the graph.`);ni(!1,a==="mixed"?this.type:a,i,f,c)};let o="map"+e[0].toUpperCase()+e.slice(1);r.prototype[o]=function(d,c){let f=[];return this[n](d,(u,g)=>{f.push(c(u,g))}),f};let s="filter"+e[0].toUpperCase()+e.slice(1);r.prototype[s]=function(d,c){let f=[];return this[n](d,(u,g)=>{c(u,g)&&f.push(u)}),f};let l="reduce"+e[0].toUpperCase()+e.slice(1);r.prototype[l]=function(d,c,f){if(arguments.length<3)throw new C(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u=f;return this[n](d,(g,h)=>{u=c(u,g,h)}),u}}function Nl(r,t){let{name:e,type:a,direction:i}=t,n=e[0].toUpperCase()+e.slice(1,-1),o="find"+n;r.prototype[o]=function(d,c){if(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)return;d=""+d;let f=this._nodes.get(d);if(typeof f>"u")throw new P(`Graph.${o}: could not find the "${d}" node in the graph.`);return ni(!0,a==="mixed"?this.type:a,i,f,c)};let s="some"+n;r.prototype[s]=function(d,c){return!!this[o](d,c)};let l="every"+n;r.prototype[l]=function(d,c){return!this[o](d,(u,g)=>!c(u,g))}}function Fl(r,t){let{name:e,type:a,direction:i}=t,n=e.slice(0,-1)+"Entries";r.prototype[n]=function(o){if(a!=="mixed"&&this.type!=="mixed"&&a!==this.type)return Xe();o=""+o;let s=this._nodes.get(o);if(typeof s>"u")throw new P(`Graph.${n}: could not find the "${o}" node in the graph.`);return Cl(a==="mixed"?this.type:a,i,s)}}function oi(r){Rl.forEach(t=>{wl(r,t),Gl(r,t),Nl(r,t),Fl(r,t)})}function Jt(r,t,e,a,i){let n=a._nodes.values(),o=a.type,s,l,d,c,f,u,g;for(;s=n.next(),s.done!==!0;){let h=!1;if(l=s.value,o!=="undirected"){c=l.out;for(d in c){f=c[d];do{if(u=f.target,h=!0,g=i(l.key,u.key,l.attributes,u.attributes,f.key,f.attributes,f.undirected),r&&g)return f;f=f.next}while(f)}}if(o!=="directed"){c=l.undirected;for(d in c)if(!(t&&l.key>d)){f=c[d];do{if(u=f.target,u.key!==d&&(u=f.source),h=!0,g=i(l.key,u.key,l.attributes,u.attributes,f.key,f.attributes,f.undirected),r&&g)return f;f=f.next}while(f)}}if(e&&!h&&(g=i(l.key,null,l.attributes,null,null,null,null),r&&g))return null}}function wn(r,t){let e={key:r};return Xa(t.attributes)||(e.attributes=j({},t.attributes)),e}function Gn(r,t,e){let a={key:t,source:e.source.key,target:e.target.key};return Xa(e.attributes)||(a.attributes=j({},e.attributes)),r==="mixed"&&e.undirected&&(a.undirected=!0),a}function Nn(r){if(!Y(r))throw new C('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in r))throw new C("Graph.import: serialized node is missing its key.");if("attributes"in r&&(!Y(r.attributes)||r.attributes===null))throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Fn(r){if(!Y(r))throw new C('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in r))throw new C("Graph.import: serialized edge is missing its source.");if(!("target"in r))throw new C("Graph.import: serialized edge is missing its target.");if("attributes"in r&&(!Y(r.attributes)||r.attributes===null))throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in r&&typeof r.undirected!="boolean")throw new C("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}var Il=mn(),kl=new Set(["directed","undirected","mixed"]),In=new Set(["domain","_events","_eventsCount","_maxListeners"]),Ml=[{name:r=>`${r}Edge`,generateKey:!0},{name:r=>`${r}DirectedEdge`,generateKey:!0,type:"directed"},{name:r=>`${r}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:r=>`${r}EdgeWithKey`},{name:r=>`${r}DirectedEdgeWithKey`,type:"directed"},{name:r=>`${r}UndirectedEdgeWithKey`,type:"undirected"}],zl={allowSelfLoops:!0,multi:!1,type:"mixed"};function Bl(r,t,e){if(e&&!Y(e))throw new C(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(t=""+t,e=e||{},r._nodes.has(t))throw new F(`Graph.addNode: the "${t}" node already exist in the graph.`);let a=new r.NodeDataClass(t,e);return r._nodes.set(t,a),r.emit("nodeAdded",{key:t,attributes:e}),a}function kn(r,t,e){let a=new r.NodeDataClass(t,e);return r._nodes.set(t,a),r.emit("nodeAdded",{key:t,attributes:e}),a}function zn(r,t,e,a,i,n,o,s){if(!a&&r.type==="undirected")throw new F(`Graph.${t}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(a&&r.type==="directed")throw new F(`Graph.${t}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(s&&!Y(s))throw new C(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`);if(n=""+n,o=""+o,s=s||{},!r.allowSelfLoops&&n===o)throw new F(`Graph.${t}: source & target are the same ("${n}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let l=r._nodes.get(n),d=r._nodes.get(o);if(!l)throw new P(`Graph.${t}: source node "${n}" not found.`);if(!d)throw new P(`Graph.${t}: target node "${o}" not found.`);let c={key:null,undirected:a,source:n,target:o,attributes:s};if(e)i=r._edgeKeyGenerator();else if(i=""+i,r._edges.has(i))throw new F(`Graph.${t}: the "${i}" edge already exists in the graph.`);if(!r.multi&&(a?typeof l.undirected[o]<"u":typeof l.out[o]<"u"))throw new F(`Graph.${t}: an edge linking "${n}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);let f=new nt(a,i,l,d,s);r._edges.set(i,f);let u=n===o;return a?(l.undirectedDegree++,d.undirectedDegree++,u&&(l.undirectedLoops++,r._undirectedSelfLoopCount++)):(l.outDegree++,d.inDegree++,u&&(l.directedLoops++,r._directedSelfLoopCount++)),r.multi?f.attachMulti():f.attach(),a?r._undirectedSize++:r._directedSize++,c.key=i,r.emit("edgeAdded",c),i}function Ol(r,t,e,a,i,n,o,s,l){if(!a&&r.type==="undirected")throw new F(`Graph.${t}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(a&&r.type==="directed")throw new F(`Graph.${t}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(s){if(l){if(typeof s!="function")throw new C(`Graph.${t}: invalid updater function. Expecting a function but got "${s}"`)}else if(!Y(s))throw new C(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`)}n=""+n,o=""+o;let d;if(l&&(d=s,s=void 0),!r.allowSelfLoops&&n===o)throw new F(`Graph.${t}: source & target are the same ("${n}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let c=r._nodes.get(n),f=r._nodes.get(o),u,g;if(!e&&(u=r._edges.get(i),u)){if((u.source.key!==n||u.target.key!==o)&&(!a||u.source.key!==o||u.target.key!==n))throw new F(`Graph.${t}: inconsistency detected when attempting to merge the "${i}" edge with "${n}" source & "${o}" target vs. ("${u.source.key}", "${u.target.key}").`);g=u}if(!g&&!r.multi&&c&&(g=a?c.undirected[o]:c.out[o]),g){let m=[g.key,!1,!1,!1];if(l?!d:!s)return m;if(l){let y=g.attributes;g.attributes=d(y),r.emit("edgeAttributesUpdated",{type:"replace",key:g.key,attributes:g.attributes})}else j(g.attributes,s),r.emit("edgeAttributesUpdated",{type:"merge",key:g.key,attributes:g.attributes,data:s});return m}s=s||{},l&&d&&(s=d(s));let h={key:null,undirected:a,source:n,target:o,attributes:s};if(e)i=r._edgeKeyGenerator();else if(i=""+i,r._edges.has(i))throw new F(`Graph.${t}: the "${i}" edge already exists in the graph.`);let p=!1,b=!1;c||(c=kn(r,n,{}),p=!0,n===o&&(f=c,b=!0)),f||(f=kn(r,o,{}),b=!0),u=new nt(a,i,c,f,s),r._edges.set(i,u);let x=n===o;return a?(c.undirectedDegree++,f.undirectedDegree++,x&&(c.undirectedLoops++,r._undirectedSelfLoopCount++)):(c.outDegree++,f.inDegree++,x&&(c.directedLoops++,r._directedSelfLoopCount++)),r.multi?u.attachMulti():u.attach(),a?r._undirectedSize++:r._directedSize++,h.key=i,r.emit("edgeAdded",h),[i,!0,p,b]}function vt(r,t){r._edges.delete(t.key);let{source:e,target:a,attributes:i}=t,n=t.undirected,o=e===a;n?(e.undirectedDegree--,a.undirectedDegree--,o&&(e.undirectedLoops--,r._undirectedSelfLoopCount--)):(e.outDegree--,a.inDegree--,o&&(e.directedLoops--,r._directedSelfLoopCount--)),r.multi?t.detachMulti():t.detach(),n?r._undirectedSize--:r._directedSize--,r.emit("edgeDropped",{key:t.key,attributes:i,source:e.key,target:a.key,undirected:n})}var H=class r extends Mn.EventEmitter{constructor(t){if(super(),t=j({},zl,t),typeof t.multi!="boolean")throw new C(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${t.multi}".`);if(!kl.has(t.type))throw new C(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${t.type}".`);if(typeof t.allowSelfLoops!="boolean")throw new C(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${t.allowSelfLoops}".`);let e=t.type==="mixed"?Ka:t.type==="directed"?Ya:Za;le(this,"NodeDataClass",e);let a="geid_"+Il()+"_",i=0,n=()=>{let o;do o=a+i++;while(this._edges.has(o));return o};le(this,"_attributes",{}),le(this,"_nodes",new Map),le(this,"_edges",new Map),le(this,"_directedSize",0),le(this,"_undirectedSize",0),le(this,"_directedSelfLoopCount",0),le(this,"_undirectedSelfLoopCount",0),le(this,"_edgeKeyGenerator",n),le(this,"_options",t),In.forEach(o=>le(this,o,this[o])),ge(this,"order",()=>this._nodes.size),ge(this,"size",()=>this._edges.size),ge(this,"directedSize",()=>this._directedSize),ge(this,"undirectedSize",()=>this._undirectedSize),ge(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),ge(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),ge(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),ge(this,"multi",this._options.multi),ge(this,"type",this._options.type),ge(this,"allowSelfLoops",this._options.allowSelfLoops),ge(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(t){return this._nodes.has(""+t)}hasDirectedEdge(t,e){if(this.type==="undirected")return!1;if(arguments.length===1){let a=""+t,i=this._edges.get(a);return!!i&&!i.undirected}else if(arguments.length===2){t=""+t,e=""+e;let a=this._nodes.get(t);return a?a.out.hasOwnProperty(e):!1}throw new C(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(t,e){if(this.type==="directed")return!1;if(arguments.length===1){let a=""+t,i=this._edges.get(a);return!!i&&i.undirected}else if(arguments.length===2){t=""+t,e=""+e;let a=this._nodes.get(t);return a?a.undirected.hasOwnProperty(e):!1}throw new C(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(t,e){if(arguments.length===1){let a=""+t;return this._edges.has(a)}else if(arguments.length===2){t=""+t,e=""+e;let a=this._nodes.get(t);return a?typeof a.out<"u"&&a.out.hasOwnProperty(e)||typeof a.undirected<"u"&&a.undirected.hasOwnProperty(e):!1}throw new C(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(t,e){if(this.type==="undirected")return;if(t=""+t,e=""+e,this.multi)throw new F("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");let a=this._nodes.get(t);if(!a)throw new P(`Graph.directedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new P(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);let i=a.out&&a.out[e]||void 0;if(i)return i.key}undirectedEdge(t,e){if(this.type==="directed")return;if(t=""+t,e=""+e,this.multi)throw new F("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");let a=this._nodes.get(t);if(!a)throw new P(`Graph.undirectedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new P(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);let i=a.undirected&&a.undirected[e]||void 0;if(i)return i.key}edge(t,e){if(this.multi)throw new F("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.edge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new P(`Graph.edge: could not find the "${e}" target node in the graph.`);let i=a.out&&a.out[e]||a.undirected&&a.undirected[e]||void 0;if(i)return i.key}areDirectedNeighbors(t,e){t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.areDirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in a.in||e in a.out}areOutNeighbors(t,e){t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.areOutNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in a.out}areInNeighbors(t,e){t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.areInNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in a.in}areUndirectedNeighbors(t,e){t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.areUndirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="directed"?!1:e in a.undirected}areNeighbors(t,e){t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.areNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&(e in a.in||e in a.out)||this.type!=="directed"&&e in a.undirected}areInboundNeighbors(t,e){t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.areInboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in a.in||this.type!=="directed"&&e in a.undirected}areOutboundNeighbors(t,e){t=""+t,e=""+e;let a=this._nodes.get(t);if(!a)throw new P(`Graph.areOutboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in a.out||this.type!=="directed"&&e in a.undirected}inDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.inDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.outDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.directedDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.undirectedDegree: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.inboundDegree: could not find the "${t}" node in the graph.`);let a=0;return this.type!=="directed"&&(a+=e.undirectedDegree),this.type!=="undirected"&&(a+=e.inDegree),a}outboundDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.outboundDegree: could not find the "${t}" node in the graph.`);let a=0;return this.type!=="directed"&&(a+=e.undirectedDegree),this.type!=="undirected"&&(a+=e.outDegree),a}degree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.degree: could not find the "${t}" node in the graph.`);let a=0;return this.type!=="directed"&&(a+=e.undirectedDegree),this.type!=="undirected"&&(a+=e.inDegree+e.outDegree),a}inDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.inDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.outDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.directedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let a=0,i=0;return this.type!=="directed"&&(a+=e.undirectedDegree,i+=e.undirectedLoops*2),this.type!=="undirected"&&(a+=e.inDegree,i+=e.directedLoops),a-i}outboundDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let a=0,i=0;return this.type!=="directed"&&(a+=e.undirectedDegree,i+=e.undirectedLoops*2),this.type!=="undirected"&&(a+=e.outDegree,i+=e.directedLoops),a-i}degreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.degreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let a=0,i=0;return this.type!=="directed"&&(a+=e.undirectedDegree,i+=e.undirectedLoops*2),this.type!=="undirected"&&(a+=e.inDegree+e.outDegree,i+=e.directedLoops*2),a-i}source(t){t=""+t;let e=this._edges.get(t);if(!e)throw new P(`Graph.source: could not find the "${t}" edge in the graph.`);return e.source.key}target(t){t=""+t;let e=this._edges.get(t);if(!e)throw new P(`Graph.target: could not find the "${t}" edge in the graph.`);return e.target.key}extremities(t){t=""+t;let e=this._edges.get(t);if(!e)throw new P(`Graph.extremities: could not find the "${t}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(t,e){t=""+t,e=""+e;let a=this._edges.get(e);if(!a)throw new P(`Graph.opposite: could not find the "${e}" edge in the graph.`);let i=a.source.key,n=a.target.key;if(t===i)return n;if(t===n)return i;throw new P(`Graph.opposite: the "${t}" node is not attached to the "${e}" edge (${i}, ${n}).`)}hasExtremity(t,e){t=""+t,e=""+e;let a=this._edges.get(t);if(!a)throw new P(`Graph.hasExtremity: could not find the "${t}" edge in the graph.`);return a.source.key===e||a.target.key===e}isUndirected(t){t=""+t;let e=this._edges.get(t);if(!e)throw new P(`Graph.isUndirected: could not find the "${t}" edge in the graph.`);return e.undirected}isDirected(t){t=""+t;let e=this._edges.get(t);if(!e)throw new P(`Graph.isDirected: could not find the "${t}" edge in the graph.`);return!e.undirected}isSelfLoop(t){t=""+t;let e=this._edges.get(t);if(!e)throw new P(`Graph.isSelfLoop: could not find the "${t}" edge in the graph.`);return e.source===e.target}addNode(t,e){return Bl(this,t,e).key}mergeNode(t,e){if(e&&!Y(e))throw new C(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);t=""+t,e=e||{};let a=this._nodes.get(t);return a?(e&&(j(a.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:t,attributes:a.attributes,data:e})),[t,!1]):(a=new this.NodeDataClass(t,e),this._nodes.set(t,a),this.emit("nodeAdded",{key:t,attributes:e}),[t,!0])}updateNode(t,e){if(e&&typeof e!="function")throw new C(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);t=""+t;let a=this._nodes.get(t);if(a){if(e){let n=a.attributes;a.attributes=e(n),this.emit("nodeAttributesUpdated",{type:"replace",key:t,attributes:a.attributes})}return[t,!1]}let i=e?e({}):{};return a=new this.NodeDataClass(t,i),this._nodes.set(t,a),this.emit("nodeAdded",{key:t,attributes:i}),[t,!0]}dropNode(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new P(`Graph.dropNode: could not find the "${t}" node in the graph.`);let a;if(this.type!=="undirected"){for(let i in e.out){a=e.out[i];do vt(this,a),a=a.next;while(a)}for(let i in e.in){a=e.in[i];do vt(this,a),a=a.next;while(a)}}if(this.type!=="directed")for(let i in e.undirected){a=e.undirected[i];do vt(this,a),a=a.next;while(a)}this._nodes.delete(t),this.emit("nodeDropped",{key:t,attributes:e.attributes})}dropEdge(t){let e;if(arguments.length>1){let a=""+arguments[0],i=""+arguments[1];if(e=ne(this,a,i,this.type),!e)throw new P(`Graph.dropEdge: could not find the "${a}" -> "${i}" edge in the graph.`)}else if(t=""+t,e=this._edges.get(t),!e)throw new P(`Graph.dropEdge: could not find the "${t}" edge in the graph.`);return vt(this,e),this}dropDirectedEdge(t,e){if(arguments.length<2)throw new F("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new F("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");t=""+t,e=""+e;let a=ne(this,t,e,"directed");if(!a)throw new P(`Graph.dropDirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return vt(this,a),this}dropUndirectedEdge(t,e){if(arguments.length<2)throw new F("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new F("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");let a=ne(this,t,e,"undirected");if(!a)throw new P(`Graph.dropUndirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return vt(this,a),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){let t=this._nodes.values(),e;for(;e=t.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(t){return this._attributes[t]}getAttributes(){return this._attributes}hasAttribute(t){return this._attributes.hasOwnProperty(t)}setAttribute(t,e){return this._attributes[t]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}updateAttribute(t,e){if(typeof e!="function")throw new C("Graph.updateAttribute: updater should be a function.");let a=this._attributes[t];return this._attributes[t]=e(a),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}removeAttribute(t){return delete this._attributes[t],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:t}),this}replaceAttributes(t){if(!Y(t))throw new C("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=t,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(t){if(!Y(t))throw new C("Graph.mergeAttributes: provided attributes are not a plain object.");return j(this._attributes,t),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:t}),this}updateAttributes(t){if(typeof t!="function")throw new C("Graph.updateAttributes: provided updater is not a function.");return this._attributes=t(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(t,e){if(typeof t!="function")throw new C("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!qa(e))throw new C("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let a=this._nodes.values(),i,n;for(;i=a.next(),i.done!==!0;)n=i.value,n.attributes=t(n.key,n.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(t,e){if(typeof t!="function")throw new C("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!qa(e))throw new C("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let a=this._edges.values(),i,n,o,s;for(;i=a.next(),i.done!==!0;)n=i.value,o=n.source,s=n.target,n.attributes=t(n.key,n.attributes,o.key,s.key,o.attributes,s.attributes,n.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(t){if(typeof t!="function")throw new C("Graph.forEachAdjacencyEntry: expecting a callback.");Jt(!1,!1,!1,this,t)}forEachAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new C("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Jt(!1,!1,!0,this,t)}forEachAssymetricAdjacencyEntry(t){if(typeof t!="function")throw new C("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Jt(!1,!0,!1,this,t)}forEachAssymetricAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new C("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Jt(!1,!0,!0,this,t)}nodes(){return Array.from(this._nodes.keys())}forEachNode(t){if(typeof t!="function")throw new C("Graph.forEachNode: expecting a callback.");let e=this._nodes.values(),a,i;for(;a=e.next(),a.done!==!0;)i=a.value,t(i.key,i.attributes)}findNode(t){if(typeof t!="function")throw new C("Graph.findNode: expecting a callback.");let e=this._nodes.values(),a,i;for(;a=e.next(),a.done!==!0;)if(i=a.value,t(i.key,i.attributes))return i.key}mapNodes(t){if(typeof t!="function")throw new C("Graph.mapNode: expecting a callback.");let e=this._nodes.values(),a,i,n=new Array(this.order),o=0;for(;a=e.next(),a.done!==!0;)i=a.value,n[o++]=t(i.key,i.attributes);return n}someNode(t){if(typeof t!="function")throw new C("Graph.someNode: expecting a callback.");let e=this._nodes.values(),a,i;for(;a=e.next(),a.done!==!0;)if(i=a.value,t(i.key,i.attributes))return!0;return!1}everyNode(t){if(typeof t!="function")throw new C("Graph.everyNode: expecting a callback.");let e=this._nodes.values(),a,i;for(;a=e.next(),a.done!==!0;)if(i=a.value,!t(i.key,i.attributes))return!1;return!0}filterNodes(t){if(typeof t!="function")throw new C("Graph.filterNodes: expecting a callback.");let e=this._nodes.values(),a,i,n=[];for(;a=e.next(),a.done!==!0;)i=a.value,t(i.key,i.attributes)&&n.push(i.key);return n}reduceNodes(t,e){if(typeof t!="function")throw new C("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new C("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let a=e,i=this._nodes.values(),n,o;for(;n=i.next(),n.done!==!0;)o=n.value,a=t(a,o.key,o.attributes);return a}nodeEntries(){let t=this._nodes.values();return{[Symbol.iterator](){return this},next(){let e=t.next();if(e.done)return e;let a=e.value;return{value:{node:a.key,attributes:a.attributes},done:!1}}}}export(){let t=new Array(this._nodes.size),e=0;this._nodes.forEach((i,n)=>{t[e++]=wn(n,i)});let a=new Array(this._edges.size);return e=0,this._edges.forEach((i,n)=>{a[e++]=Gn(this.type,n,i)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:t,edges:a}}import(t,e=!1){if(t instanceof r)return t.forEachNode((l,d)=>{e?this.mergeNode(l,d):this.addNode(l,d)}),t.forEachEdge((l,d,c,f,u,g,h)=>{e?h?this.mergeUndirectedEdgeWithKey(l,c,f,d):this.mergeDirectedEdgeWithKey(l,c,f,d):h?this.addUndirectedEdgeWithKey(l,c,f,d):this.addDirectedEdgeWithKey(l,c,f,d)}),this;if(!Y(t))throw new C("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(t.attributes){if(!Y(t.attributes))throw new C("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}let a,i,n,o,s;if(t.nodes){if(n=t.nodes,!Array.isArray(n))throw new C("Graph.import: invalid nodes. Expecting an array.");for(a=0,i=n.length;a<i;a++){o=n[a],Nn(o);let{key:l,attributes:d}=o;e?this.mergeNode(l,d):this.addNode(l,d)}}if(t.edges){let l=!1;if(this.type==="undirected"&&(l=!0),n=t.edges,!Array.isArray(n))throw new C("Graph.import: invalid edges. Expecting an array.");for(a=0,i=n.length;a<i;a++){s=n[a],Fn(s);let{source:d,target:c,attributes:f,undirected:u=l}=s,g;"key"in s?(g=e?u?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:u?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,g.call(this,s.key,d,c,f)):(g=e?u?this.mergeUndirectedEdge:this.mergeDirectedEdge:u?this.addUndirectedEdge:this.addDirectedEdge,g.call(this,d,c,f))}}return this}nullCopy(t){let e=new r(j({},this._options,t));return e.replaceAttributes(j({},this.getAttributes())),e}emptyCopy(t){let e=this.nullCopy(t);return this._nodes.forEach((a,i)=>{let n=j({},a.attributes);a=new e.NodeDataClass(i,n),e._nodes.set(i,a)}),e}copy(t){if(t=t||{},typeof t.type=="string"&&t.type!==this.type&&t.type!=="mixed")throw new F(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${t.type}" because this would mean losing information about the current graph.`);if(typeof t.multi=="boolean"&&t.multi!==this.multi&&t.multi!==!0)throw new F("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof t.allowSelfLoops=="boolean"&&t.allowSelfLoops!==this.allowSelfLoops&&t.allowSelfLoops!==!0)throw new F("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");let e=this.emptyCopy(t),a=this._edges.values(),i,n;for(;i=a.next(),i.done!==!0;)n=i.value,zn(e,"copy",!1,n.undirected,n.key,n.source.key,n.target.key,j({},n.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){let t={};this._nodes.forEach((n,o)=>{t[o]=n.attributes});let e={},a={};this._edges.forEach((n,o)=>{let s=n.undirected?"--":"->",l="",d=n.source.key,c=n.target.key,f;n.undirected&&d>c&&(f=d,d=c,c=f);let u=`(${d})${s}(${c})`;o.startsWith("geid_")?this.multi&&(typeof a[u]>"u"?a[u]=0:a[u]++,l+=`${a[u]}. `):l+=`[${o}]: `,l+=u,e[l]=n.attributes});let i={};for(let n in this)this.hasOwnProperty(n)&&!In.has(n)&&typeof this[n]!="function"&&typeof n!="symbol"&&(i[n]=this[n]);return i.attributes=this._attributes,i.nodes=t,i.edges=e,le(i,"constructor",this.constructor),i}};typeof Symbol<"u"&&(H.prototype[Symbol.for("nodejs.util.inspect.custom")]=H.prototype.inspect);Ml.forEach(r=>{["add","merge","update"].forEach(t=>{let e=r.name(t),a=t==="add"?zn:Ol;r.generateKey?H.prototype[e]=function(i,n,o){return a(this,e,!0,(r.type||this.type)==="undirected",null,i,n,o,t==="update")}:H.prototype[e]=function(i,n,o,s){return a(this,e,!1,(r.type||this.type)==="undirected",i,n,o,s,t==="update")}})});Qa(H);Ja(H);ii(H);oi(H);var er=class extends H{constructor(t){let e=j({type:"directed"},t);if("multi"in e&&e.multi!==!1)throw new C("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new C('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},tr=class extends H{constructor(t){let e=j({type:"undirected"},t);if("multi"in e&&e.multi!==!1)throw new C("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new C('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},rr=class extends H{constructor(t){let e=j({multi:!0},t);if("multi"in e&&e.multi!==!0)throw new C("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}},ar=class extends H{constructor(t){let e=j({type:"directed",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new C("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new C('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},ir=class extends H{constructor(t){let e=j({type:"undirected",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new C("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new C('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}};function Et(r){r.from=function(t,e){let a=j({},t.options,e),i=new r(a);return i.import(t),i}}Et(H);Et(er);Et(tr);Et(rr);Et(ar);Et(ir);H.Graph=H;H.DirectedGraph=er;H.UndirectedGraph=tr;H.MultiGraph=rr;H.MultiDirectedGraph=ar;H.MultiUndirectedGraph=ir;H.InvalidArgumentsGraphError=C;H.NotFoundGraphError=P;H.UsageGraphError=F;var Bn=H;var Uo=Mr(Or());function Wl(r){let t=r.type===WebGL2RenderingContext.FLOAT&&!r.normalized,e=r.type===WebGL2RenderingContext.UNSIGNED_BYTE&&r.size===4&&r.normalized;if(!t&&!e)throw new Error(`Attribute "${r.name}" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.`);return r.normalized?1:r.size}function Ur(r){let t=0;return r.forEach(e=>t+=Wl(e)),t}function On(r,t,e){let a=r==="VERTEX"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,i=t.createShader(a);if(i===null)throw new Error("loadShader: error while creating the shader");if(t.shaderSource(i,e),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){let o=t.getShaderInfoLog(i);throw t.deleteShader(i),new Error(`loadShader: error while compiling the shader:
${o}
${e}`)}return i}function Tt(r,t){return On("VERTEX",r,t)}function _t(r,t){return On("FRAGMENT",r,t)}function At(r,t){let e=r.createProgram();if(e===null)throw new Error("loadProgram: error while creating the program.");let a,i;for(a=0,i=t.length;a<i;a++)r.attachShader(e,t[a]);if(r.linkProgram(e),!r.getProgramParameter(e,r.LINK_STATUS)){let o=r.getProgramInfoLog(e);throw r.deleteProgram(e),new Error(`loadProgram: error while linking the program: ${o}`)}return e}function si({gl:r,buffer:t,program:e,vertexShader:a,fragmentShader:i}){r.deleteShader(a),r.deleteShader(i),r.deleteProgram(e),r.deleteBuffer(t)}function $(r){return r%1===0?r.toFixed(1):r.toString()}var $r=new Map,Wn=new Map,Ul=0;function li(r,t){let e=r.variables?.[t.source||t.name.replace(/^a_/,"")]?.default,a=typeof e=="number"?e:typeof t.defaultValue=="number"?t.defaultValue:0;return $(a)}function ot(r,t,e,a=i=>`v_${i.name.replace(/^a_/,"")}`){let i=[t,e,...r.uniforms.filter(n=>n.type==="float").map(n=>$(n.value??0)),...(r.attributes??[]).map(a)];return`sdf_${r.name}(${i.join(", ")})`}function $l(r){let t=r.name,e=r.uniforms.filter(n=>n.type==="float"&&n.value!==void 0&&n.value!==0).map(n=>`${n.name.replace("u_","")}=${n.value}`).sort(),a=(r.attributes??[]).map(n=>`${n.name}@${n.source??""}=${li(r,n)}`),i=[...e,...a];return i.length>0&&(t+="#"+i.join("#")),t}function di(r){let t=$l(r);if(!$r.has(t)){let e={};for(let a of r.uniforms)a.type==="float"&&a.value!==void 0&&(e[a.name]=a.value);$r.set(t,{shape:r,uniformValues:e,slug:t}),Wn.set(t,Ul++)}return t}function st(r){return Wn.get(r)??-1}function Un(r){let t=[],e=new Set,a=new Set,i=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/;for(let n of r){if(a.has(n.name))continue;a.add(n.name);let o=n.glsl;i.test(o)&&(e.has("rotate2D")?o=o.replace(i,""):e.add("rotate2D")),t.push(o)}return t.join(`
`)}function ui(){return Un(Array.from($r.values()).map(r=>r.shape))}function ci(r){let t=Array.from($r.entries());return t.length===0?`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`:`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${t.map(([a,{shape:i}],n)=>{let o=ot(i,"uv","size",s=>{let l=s.name.replace(/^a_/,"");return r?.has(l)?`g_${l}`:li(i,s)});return`    case ${n}: return ${o}; // ${a}`}).join(`
`)}
    default: return length(uv) - size;
  }
}
`}function lt(r){return Un(r)}function we(r){return[...new Map(r.flatMap(t=>t.uniforms).map(t=>[t.name,t])).values()]}function hi(r,t){if(r.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;let e=l=>ot(l,"uv","size"),a=l=>l.inradiusFactorGLSL??$(l.inradiusFactor??1);if(r.length===1){let l=r[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = ${e(l)};
  context.inradiusFactor = ${a(l)};
}
`}let i=r.map((l,d)=>`    case ${d}: // ${l.name}
      context.sdf = ${e(l)};
      context.inradiusFactor = ${a(l)};
      break;`).join(`
`),n=r[0],o="",s="shapeId";return t&&t.length>1&&(o=`
int globalToLocalShapeId(int globalId) {
  switch (globalId) {
${t.map((d,c)=>`    case ${d}: return ${c}; // ${r[c].name}`).join(`
`)}
    default: return 0;
  }
}
`,s="globalToLocalShapeId(shapeId)"),`${o}
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  switch (${s}) {
${i}
    default:
      context.sdf = ${e(n)};
      context.inradiusFactor = ${a(n)};
  }
}
`}var qe={right:0,left:1,above:2,below:3,over:4},Ge=5,gi=3,Hr=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,Ne=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,Vr=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,Hn=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,Vn=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,Xn=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,qn=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,Xr=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,fi=2,te=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * ${fi};
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,oe=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * ${fi} + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,jn=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * ${fi} + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`,fe=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`;function Kn(r,t){let e=n=>ot(n,"uv","size");return r.length===1?{code:$n(e(r[0])),multiShape:!1}:{code:`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${r.map((n,o)=>`    case ${t?t[o]:o}: return ${e(n)};`).join(`
`)}
    default: return ${e(r[0])};
  }
}
int g_shapeId;
${$n("queryShapeSDF(g_shapeId, uv, size)")}
`,multiShape:!0}}function $n(r){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (${r} < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`}var Hl=r=>r,Vl=r=>r*r,Xl=r=>r*(2-r),ql=r=>(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1),jl=r=>r*r*r,Kl=r=>--r*r*r+1,Yl=r=>(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2),Zl=r=>r===0?0:Math.pow(2,10*(r-1)),Ql=r=>r===1?1:1-Math.pow(2,-10*r),Jl=r=>r===0?0:r===1?1:r<.5?Math.pow(2,10*(2*r-1))/2:(2-Math.pow(2,-10*(2*r-1)))/2,pi={linear:Hl,quadraticIn:Vl,quadraticOut:Xl,quadraticInOut:ql,cubicIn:jl,cubicOut:Kl,cubicInOut:Yl,exponentialIn:Zl,exponentialOut:Ql,exponentialInOut:Jl};function nr(r){return r?typeof r=="function"?r:pi[r]:pi.linear}var Yn={easing:"quadraticInOut",duration:150};function de(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function or(r,t,e){return r[0]=t,r[4]=typeof e=="number"?e:t,r}function mi(r,t){let e=Math.sin(t),a=Math.cos(t);return r[0]=a,r[1]=e,r[3]=-e,r[4]=a,r}function bi(r,t,e){return r[6]=t,r[7]=e,r}function Fe(r,t){let e=r[0],a=r[1],i=r[2],n=r[3],o=r[4],s=r[5],l=r[6],d=r[7],c=r[8],f=t[0],u=t[1],g=t[2],h=t[3],p=t[4],b=t[5],x=t[6],m=t[7],y=t[8];return r[0]=f*e+u*n+g*l,r[1]=f*a+u*o+g*d,r[2]=f*i+u*s+g*c,r[3]=h*e+p*n+b*l,r[4]=h*a+p*o+b*d,r[5]=h*i+p*s+b*c,r[6]=x*e+m*n+y*l,r[7]=x*a+m*o+y*d,r[8]=x*i+m*s+y*c,r}function qr(r,t){let e=Math.cos(t),a=Math.sin(t);return{x:e*r.x+a*r.y,y:-a*r.x+e*r.y}}function Ie(r,t,e=1){let a=r[0],i=r[1],n=r[3],o=r[4],s=r[6],l=r[7],d=t.x,c=t.y;return{x:d*a+c*n+s*e,y:d*i+c*o+l*e}}function ed(r,t){let e=r.height/r.width,a=t.height/t.width;return e<1&&a>1||e>1&&a<1?1:Math.min(Math.max(a,1/a),Math.max(1/e,e))}function De(r,t,e,a,i){let{angle:n,ratio:o,x:s,y:l}=r,{width:d,height:c}=t,f=de(),u=Math.min(d,c)-2*a,g=ed(t,e);return i?(Fe(f,bi(de(),s,l)),Fe(f,or(de(),o)),Fe(f,mi(de(),n)),Fe(f,or(de(),d/u/2/g,c/u/2/g))):(Fe(f,or(de(),2*(u/d)*g,2*(u/c)*g)),Fe(f,mi(de(),-n)),Fe(f,or(de(),1/o)),Fe(f,bi(de(),-s,-l))),f}function Zn(r,t,e){let{x:a,y:i}=Ie(r,{x:Math.cos(t.angle),y:Math.sin(t.angle)},0);return 1/Math.sqrt(Math.pow(a,2)+Math.pow(i,2))/e.width}function jr(r,t,e,a,i){let n=Math.floor(t/i*a),o=Math.floor(r.drawingBufferHeight/i-e/i*a);return[n,o]}var sr={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},Qn=new Int8Array(4),Kr=new Int32Array(Qn.buffer,0,1),Jn=new Float32Array(Qn.buffer,0,1),td=/^\s*rgba?\s*\(/,rd=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function Yr(r){let t=0,e=0,a=0,i=1,n=r.toLowerCase();if(n==="transparent")return{r:0,g:0,b:0,a:0};if(n in sr)return Yr(sr[n]);if(r[0]==="#")r.length===4?(t=parseInt(r.charAt(1)+r.charAt(1),16),e=parseInt(r.charAt(2)+r.charAt(2),16),a=parseInt(r.charAt(3)+r.charAt(3),16)):(t=parseInt(r.charAt(1)+r.charAt(2),16),e=parseInt(r.charAt(3)+r.charAt(4),16),a=parseInt(r.charAt(5)+r.charAt(6),16)),r.length===9&&(i=parseInt(r.charAt(7)+r.charAt(8),16)/255);else if(td.test(r)){let o=r.match(rd);o&&(t=+o[1],e=+o[2],a=+o[3],o[4]&&(i=+o[4]))}return{r:t,g:e,b:a,a:i}}function eo(r,t=!1){let{r:e,g:a,b:i,a:n}=Yr(r);return t?[e/255*n,a/255*n,i/255*n,n]:[e/255,a/255,i/255,n]}var Dt={};for(let r in sr)Dt[r]=se(sr[r]),Dt[sr[r]]=Dt[r];function ad(r,t,e,a,i){return Kr[0]=a<<24|e<<16|t<<8|r,i&&(Kr[0]=Kr[0]&4278190079),Jn[0]}function se(r){if(r=r.toLowerCase(),typeof Dt[r]<"u")return Dt[r];let t=Yr(r),{r:e,g:a,b:i}=t,{a:n}=t;n=n*255|0;let o=ad(e,a,i,n,!0);return Dt[r]=o,o}function je(r,t){Jn[0]=se(r);let e=Kr[0];t&&(e=e|16777216);let a=e&255,i=e>>8&255,n=e>>16&255,o=e>>24&255;return[a,i,n,o]}function dt(r){let t=r>>>8&255,e=r>>>16&255,a=r>>>24&255;return((r&255)<<24|a<<16|e<<8|t)>>>0}function Zr(r,t,e,a){return(e<<24|t<<16|r<<8|a)>>>0}function to(r,t,e,a,i,n){let[o,s]=jr(r,e,a,i,n),l=new Uint8Array(4);r.bindFramebuffer(r.FRAMEBUFFER,t),r.readPixels(o,s,1,1,r.RGBA,r.UNSIGNED_BYTE,l);let[d,c,f,u]=l;return[d,c,f,u]}function ro(r){let{r:t,g:e,b:a,a:i}=Yr(r),n=(t/255).toFixed(6),o=(e/255).toFixed(6),s=(a/255).toFixed(6),l=i.toFixed(6);return`vec4(${n}, ${o}, ${s}, ${l})`}function xi(r,t){let e=t.size;if(e===0)return;let a=r.length;r.length+=e;let i=0;t.forEach(n=>{r[a+i]=n,i++})}function ao(r,...t){r=r||{};for(let e=0,a=t.length;e<a;e++){let i=t[e];i&&Object.assign(r,i)}return r}function Lt(r,t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e]!==r[e])return!0;return!1}function io(r,t){let e=r,a=t;for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==a[i])return!1;for(let i in a)if(Object.prototype.hasOwnProperty.call(a,i)&&a[i]!==e[i])return!1;return!0}function ut(r,t,e){e?r.add(t):r.delete(t)}function ke(r){return r.labelVisibility==="visible"&&r.visibility!=="hidden"}function yi(r){return r.backdropVisibility==="visible"&&r.visibility!=="hidden"}function Qr(r){return[r.rotationAlignment==="graph"?1:0,r.labelRotationAlignment==="graph"?1:0]}function Si(r,t,e){let a=r[t];if(a)for(let i=0;i<a.length;i++){let n=a[i];if(!(e<n.offset||e>=n.offset+n.count)){if(n.count===1)a.splice(i,1);else if(e===n.offset)n.offset++,n.count--;else if(e===n.offset+n.count-1)n.count--;else{let o=e+1,s=n.offset+n.count-o;n.count=e-n.offset,a.splice(i+1,0,{offset:o,count:s})}return}}}function vi(r,t,e){if(!r[t]){r[t]=[{offset:e,count:1}];return}let a=r[t],i=a.length;for(let d=0;d<a.length;d++)if(e<a[d].offset){i=d;break}let n=i>0?a[i-1]:null,o=i<a.length?a[i]:null,s=n&&n.offset+n.count===e,l=o&&e+1===o.offset;s&&l?(n.count+=1+o.count,a.splice(i,1)):s?n.count++:l?(o.offset--,o.count++):a.splice(i,0,{offset:e,count:1})}var so=Mr(oo());function lo(r){if(!(0,so.default)(r))throw new Error("Sigma: invalid graph instance.")}var id=new Set(["italic","oblique"]),nd=new Set(["bold","bolder","lighter"]);function Jr(r){let t="normal",e="normal",a=r.trim(),i=a.split(/\s+/),n=0;for(let s=0;s<i.length;s++){let l=i[s].toLowerCase();if(id.has(l))e=l,n=s+1;else if(nd.has(l)||/^\d{3}$/.test(l))t=l,n=s+1;else if(l==="normal")n=s+1;else break}return{family:i.slice(n).join(" ")||a,weight:t,style:e}}function ct(r,t,e){let a=document.createElement(r);if(t)for(let i in t)a.style[i]=t[i];if(e)for(let i in e)a.setAttribute(i,e[i]);return a}function lr(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function dr(r){let{x:[t,e],y:[a,i]}=r,n=Math.max(e-t,i-a),o=(e+t)/2,s=(i+a)/2;(n===0||Math.abs(n)===1/0||isNaN(n))&&(n=1),isNaN(o)&&(o=0),isNaN(s)&&(s=0);let l=d=>({x:.5+(d.x-o)/n,y:.5+(d.y-s)/n});return l.applyTo=d=>{d.x=.5+(d.x-o)/n,d.y=.5+(d.y-s)/n},l.inverse=d=>({x:o+n*(d.x-.5),y:s+n*(d.y-.5)}),l.ratio=n,l}function uo(r,t,e,a=2){let{width:i,height:n}=t.canvas,{x:o,y:s,rowHeight:l,maxRowWidth:d}=e,c={},f=[];for(let u of r){let g=u.width+a,h=u.height+a;if(g>i||h>n||o+g>i&&s+l+h>n){f.push(u);continue}o+g>i&&(d=Math.max(d,o),o=0,s+=l,l=h),u.draw(t,o,s),c[u.key]={x:o,y:s,width:u.width,height:u.height},o+=g,l=Math.max(l,h)}return d=Math.max(d,o),{atlas:c,cursor:{x:o,y:s,rowHeight:l,maxRowWidth:d},remaining:f}}var od=1024,sd=1.5,ld=4096,ta=-1,Ke=class{constructor(t,e,a=od){this.texture=null;this.dirty=!1;this.dirtyRangeStart=1/0;this.dirtyRangeEnd=-1;this.indexMap=new Map;this.freeIndices=[];this.nextIndex=0;this.gl=t,this.TEXELS_PER_ITEM=e,this.capacity=this.roundUpToPowerOfTwo(a);let i=this.computeTextureDimensions(this.capacity);this.textureWidth=i.width,this.textureHeight=i.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}computeTextureDimensions(t){let e=t*this.TEXELS_PER_ITEM,a=Math.min(e,ld),i=Math.ceil(e/a);return{width:a,height:i}}roundUpToPowerOfTwo(t){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,t))))}createTexture(){let{gl:t}=this;this.texture=t.createTexture(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textureWidth,this.textureHeight,0,t.RGBA,t.FLOAT,this.data),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null)}resize(t){if(t<=this.capacity)return;let e=this.roundUpToPowerOfTwo(Math.ceil(t*sd)),{gl:a}=this,i=this.computeTextureDimensions(e),n=new Float32Array(i.width*i.height*4);n.set(this.data),this.texture&&a.deleteTexture(this.texture),this.data=n,this.capacity=e,this.textureWidth=i.width,this.textureHeight=i.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}allocate(t){let e=this.indexMap.get(t);if(e!==void 0)return e;let a;return this.freeIndices.length>0?a=this.freeIndices.pop():(a=this.nextIndex++,a>=this.capacity&&this.resize(a+1)),this.indexMap.set(t,a),a}free(t){let e=this.indexMap.get(t);if(e===void 0)return;this.indexMap.delete(t),this.freeIndices.push(e);let a=e*this.TEXELS_PER_ITEM*4;for(let i=0;i<this.TEXELS_PER_ITEM*4;i++)this.data[a+i]=0;this.markDirty(e)}getIndex(t){return this.indexMap.get(t)??-1}has(t){return this.indexMap.has(t)}markDirty(t){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,t),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,t+1)}upload(){if(!this.dirty||!this.texture)return;let{gl:t,textureWidth:e}=this;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture);let a=this.dirtyRangeStart*this.TEXELS_PER_ITEM,i=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(a<i){let n=Math.floor(a/e),o=Math.floor((i-1)/e);for(let s=n;s<=o;s++){let l=s*e,d=Math.min(l+e,this.capacity*this.TEXELS_PER_ITEM),c=Math.max(a,l),f=Math.min(i,d);if(c<f){let u=c-l,g=f-c,h=this.data.subarray(c*4,f*4);t.texSubImage2D(t.TEXTURE_2D,0,u,s,g,1,t.RGBA,t.FLOAT,h)}}}t.bindTexture(t.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}bind(t){let{gl:e}=this;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)}getTexture(){return this.texture}getCapacity(){return this.capacity}getTextureWidth(){return this.textureWidth}getTextureHeight(){return this.textureHeight}getTexelsPerItem(){return this.TEXELS_PER_ITEM}getCount(){return this.indexMap.size}getHighWaterMark(){return this.nextIndex}isDirty(){return this.dirty}clear(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}restore(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}kill(){this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.indexMap.clear(),this.freeIndices=[]}};function Z(r){let t={},e={},a=0;for(let i of r)for(let n of i.attributes){let o=n.name.replace(/^a_/,"");o in t||(t[o]=a,e[o]=n,a+=n.size)}return{floatsPerItem:a,texelsPerItem:Math.max(1,Math.ceil(a/4)),offsets:t,specs:e}}var Le=class extends Ke{constructor(t,e,a){super(t,e.texelsPerItem,a),this.floatsPerItem=e.floatsPerItem}updateAllAttributes(t,e){let a=this.indexMap.get(t);a===void 0&&(a=this.allocate(t));let i=a*this.TEXELS_PER_ITEM*4,n=Math.min(e.length,this.floatsPerItem);for(let o=0;o<n;o++)this.data[i+o]=e[o];this.markDirty(a)}updateAllAttributesAtRow(t,e){t>=this.capacity&&this.resize(t+1);let a=t*this.TEXELS_PER_ITEM*4,i=Math.min(e.length,this.floatsPerItem);for(let n=0;n<i;n++)this.data[a+n]=e[n];this.markDirty(t)}};function Ye(r,t,e){let a=[],i=new Set;for(let n=0;n<r.length;n++){let o=r[n];for(let s of o.attributes){let l=s.name.replace(/^a_/,"");if(i.has(l))continue;i.add(l);let d=t.offsets[l];if(d===void 0)continue;let c=e?.get(n);a.push({sourceKey:s.source||l,packedOffset:d,size:s.size,isColor:s.size===4&&!!s.normalized,defaultNum:typeof s.defaultValue=="number"?s.defaultValue:s.defaultValue===!0?1:0,defaultColor:typeof s.defaultValue=="string"?s.defaultValue:"",sourceIndex:n,hasLifecycleHook:!!c?.getAttributeData})}}return a}function Ze(r,t,e,a,i,n){e.fill(0);for(let o=0,s=r.length;o<s;o++){let l=r[o],d=l.packedOffset,c;if(l.hasLifecycleHook?(c=i.get(l.sourceIndex-n).getAttributeData(t,l.sourceKey),c===null&&(c=t[l.sourceKey])):c=t[l.sourceKey],l.isColor){let f=typeof c=="string"?c:l.defaultColor||a,[u,g,h,p]=je(f);e[d]=u/255,e[d+1]=g/255,e[d+2]=h/255,e[d+3]=p/255}else if(l.size===1)e[d]=typeof c=="number"?c:typeof c=="boolean"?c?1:0:l.defaultNum;else{let f=Array.isArray(c)?c:null;if(f)for(let u=0;u<l.size;u++)e[d+u]=f[u]??0}}}var ea=["r","g","b","a"];function ve(r,t){let{offsets:e,specs:a,texelsPerItem:i,floatsPerItem:n}=r,o=Object.keys(e);if(o.length===0||n===0)return{fetchCode:"",varyingAssignments:""};let{varPrefix:s,baseTexelExpr:l,textureWidthUniform:d,textureSamplerUniform:c,outputPrefix:f="v_"}=t,u=[];u.push(`  int ${s}BaseTexel = ${l};`),u.push("");for(let h=0;h<i;h++)u.push(`  ivec2 ${s}Coord${h} = ivec2((${s}BaseTexel + ${h}) % ${d}, (${s}BaseTexel + ${h}) / ${d});`),u.push(`  vec4 ${s}Texel${h} = texelFetch(${c}, ${s}Coord${h}, 0);`);u.push("");let g=[];for(let h of o){let p=a[h],b=e[h],x=Math.floor(b/4),m=b%4,y=`${s}Texel${x}`,S=`${s}Texel${x+1}`,v=`${s}Fetched_${h}`;if(p.size===1)u.push(`  float ${v} = ${y}.${ea[m]};`);else if(p.size===4&&m===0)u.push(`  vec4 ${v} = ${y};`);else{let E=m+p.size;if(E<=4){let _=`vec${p.size}`,A=ea.slice(m,E).join("");u.push(`  ${_} ${v} = ${y}.${A};`)}else{let _=p.size===4?"vec4":`vec${p.size}`,A=ea.slice(m).map(N=>`${y}.${N}`),L=ea.slice(0,E-4).map(N=>`${S}.${N}`),T=[...A,...L].join(", ");u.push(`  ${_} ${v} = ${_}(${T});`)}}g.push(`  ${f}${h} = ${v};`)}return{fetchCode:u.join(`
`),varyingAssignments:g.join(`
`)}}function ur(r,t,e){if(!(!t||e.type==="sampler2D"))switch(e.type){case"float":r.uniform1f(t,e.value);break;case"int":case"bool":r.uniform1i(t,e.value);break;case"vec2":r.uniform2fv(t,e.value);break;case"vec3":r.uniform3fv(t,e.value);break;case"vec4":r.uniform4fv(t,e.value);break;case"mat3":r.uniformMatrix3fv(t,!1,e.value);break;case"mat4":r.uniformMatrix4fv(t,!1,e.value);break}}var dd={[WebGL2RenderingContext.BOOL]:1,[WebGL2RenderingContext.BYTE]:1,[WebGL2RenderingContext.UNSIGNED_BYTE]:1,[WebGL2RenderingContext.SHORT]:2,[WebGL2RenderingContext.UNSIGNED_SHORT]:2,[WebGL2RenderingContext.INT]:4,[WebGL2RenderingContext.UNSIGNED_INT]:4,[WebGL2RenderingContext.FLOAT]:4};function ra(r){let t=r.match(/^(#version[^\n]*\n)/);return t?t[1]+`#define PICKING_MODE
`+r.slice(t[1].length):`#define PICKING_MODE
`+r}var re=class{constructor(t,e,a){this.floats=new Float32Array;this.ints=new Uint32Array;this.constantArray=new Float32Array;this.capacity=0;this.verticesCount=0;this.bufferGeneration=0;this.uploadedGeneration=new Map;this.constantBufferGeneration=0;this.uploadedConstantGeneration=new Map;this.renderOffset=0;this.renderCount=-1;this.debugStats={drawCalls:0,verticesDrawn:0,bufferUploadBytes:0};this.shadersLogged=!1;this.pickProgram=null;let i=this.getDefinition();if(this.VERTICES=i.VERTICES,this.VERTEX_SHADER_SOURCE=i.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=i.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=i.UNIFORMS,this.ATTRIBUTES=i.ATTRIBUTES,this.METHOD=i.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in i?i.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in i?i.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in i,this.ATTRIBUTES_ITEMS_COUNT=Ur(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=a,this.normalProgram=this.getProgramInfo("normal",t,i.VERTEX_SHADER_SOURCE,i.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo("pick",t,ra(i.VERTEX_SHADER_SOURCE),ra(i.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){let n=Ur(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error(`Program: error while getting constant data (expected ${this.VERTICES} items, received ${this.CONSTANT_DATA.length} instead)`);this.constantArray=new Float32Array(this.CONSTANT_DATA.length*n);for(let o=0;o<this.CONSTANT_DATA.length;o++){let s=this.CONSTANT_DATA[o];if(s.length!==n)throw new Error(`Program: error while getting constant data (one vector has ${s.length} items instead of ${n})`);for(let l=0;l<s.length;l++)this.constantArray[o*n+l]=s[l]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}kill(){si(this.normalProgram),this.pickProgram&&si(this.pickProgram)}resetDebugStats(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}getProgramInfo(t,e,a,i,n){let o=e.createBuffer();if(o===null)throw new Error("Program: error while creating the WebGL buffer.");let s=Tt(e,a),l=_t(e,i),d=At(e,[s,l]),c={};this.UNIFORMS.forEach(g=>{let h=e.getUniformLocation(d,g);h&&(c[g]=h)});let f={};this.ATTRIBUTES.forEach(g=>{f[g.name]=e.getAttribLocation(d,g.name)});let u;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(g=>{f[g.name]=e.getAttribLocation(d,g.name)}),u=e.createBuffer(),u===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:d,gl:e,frameBuffer:n,buffer:o,constantBuffer:u||{},uniformLocations:c,attributeLocations:f,isPicking:t==="pick",vertexShader:s,fragmentShader:l}}bindProgram(t){let e=0,{gl:a,buffer:i}=t;this.isInstanced?(a.bindBuffer(a.ARRAY_BUFFER,t.constantBuffer),e=0,this.CONSTANT_ATTRIBUTES.forEach(n=>e+=this.bindAttribute(n,t,e,!1)),this.uploadedConstantGeneration.get(t.constantBuffer)!==this.constantBufferGeneration&&(a.bufferData(a.ARRAY_BUFFER,this.constantArray,a.STATIC_DRAW),this.uploadedConstantGeneration.set(t.constantBuffer,this.constantBufferGeneration),this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)),a.bindBuffer(a.ARRAY_BUFFER,t.buffer),e=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(n=>e+=this.bindAttribute(n,t,e,!0)),this.uploadedGeneration.get(i)!==this.bufferGeneration&&(a.bufferData(a.ARRAY_BUFFER,this.floats,a.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength))):(a.bindBuffer(a.ARRAY_BUFFER,i),e=0,this.ATTRIBUTES.forEach(n=>e+=this.bindAttribute(n,t,e)),this.uploadedGeneration.get(i)!==this.bufferGeneration&&(a.bufferData(a.ARRAY_BUFFER,this.floats,a.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength))),a.bindBuffer(a.ARRAY_BUFFER,null)}unbindProgram(t){this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(e=>this.unbindAttribute(e,t,!1)),this.ATTRIBUTES.forEach(e=>this.unbindAttribute(e,t,!0))):this.ATTRIBUTES.forEach(e=>this.unbindAttribute(e,t))}bindAttribute(t,e,a,i){let n=dd[t.type];if(typeof n!="number")throw new Error(`Program.bind: yet unsupported attribute type "${t.type}"`);let o=e.attributeLocations[t.name],s=e.gl;if(o!==-1){s.enableVertexAttribArray(o);let l=this.isInstanced?(i?this.ATTRIBUTES_ITEMS_COUNT:Ur(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;s.vertexAttribPointer(o,t.size,t.type,t.normalized||!1,l,a),this.isInstanced&&i&&s.vertexAttribDivisor(o,1)}return t.size*n}unbindAttribute(t,e,a){let i=e.attributeLocations[t.name],n=e.gl;i!==-1&&(n.disableVertexAttribArray(i),this.isInstanced&&a&&n.vertexAttribDivisor(i,0))}reallocate(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}invalidateBuffers(){this.bufferGeneration++,this.constantBufferGeneration++}hasNothingToRender(){return this.verticesCount===0}setTypedUniform(t,e){ur(e.gl,e.uniformLocations[t.name]??null,t)}renderProgram(t,e){let{gl:a,program:i,isPicking:n}=e;n?a.disable(a.BLEND):a.enable(a.BLEND),a.useProgram(i),this.setUniforms(t,e),this.drawWebGL(this.METHOD,e)}render(t,e,a){if(!this.shadersLogged&&this.renderer?.getSetting("DEBUG_logShaders")&&(this.shadersLogged=!0,console.log(`[sigma] DEBUG_logShaders: ${this.constructor.name}`,{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:ra(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:ra(this.FRAGMENT_SHADER_SOURCE)}})),this.hasNothingToRender())return;this.renderOffset=e??0,this.renderCount=a??-1;let i=this.normalProgram.gl;if(i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&t.pickingFrameBuffer){let n=Math.ceil(t.width*t.pixelRatio/t.downSizingRatio),o=Math.ceil(t.height*t.pixelRatio/t.downSizingRatio);i.bindFramebuffer(i.FRAMEBUFFER,t.pickingFrameBuffer),i.viewport(0,0,n,o),this.bindProgram(this.pickProgram),this.renderProgram(t,this.pickProgram),this.unbindProgram(this.pickProgram),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio)}}drawWebGL(t,{gl:e}){let a=this.renderCount>=0?this.renderCount:this.capacity;this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=a*this.VERTICES),this.isInstanced?e.drawArraysInstanced(t,0,this.VERTICES,a):e.drawArrays(t,this.renderOffset*this.VERTICES,a*this.VERTICES)}};var aa=new Map,co=!1;function ud(r){return new Promise((t,e)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=e,a.readAsDataURL(r)})}function cd(r){if(!aa.has(r)){let t=fetch(r).then(e=>e.blob()).then(ud).catch(()=>(aa.delete(r),null));aa.set(r,t)}return aa.get(r)}async function ho(r){let t=document.createElement("div");t.innerHTML=r;let a=Array.from(t.querySelectorAll("img[src]")).filter(i=>!i.getAttribute("src").startsWith("data:"));return await Promise.all(a.map(async i=>{let n=await cd(i.getAttribute("src"));n&&i.setAttribute("src",n)})),t.innerHTML}async function Ei(r,t=1){let e=r instanceof SVGElement?new XMLSerializer().serializeToString(r):r,n=new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");if(!n)return null;let o=parseFloat(n.getAttribute("width")||""),s=parseFloat(n.getAttribute("height")||"");if(!(o>0)||!(s>0)){let u=n.getAttribute("viewBox");if(u){let g=u.trim().split(/[\s,]+/);o=parseFloat(g[2]),s=parseFloat(g[3])}}if(!(o>0)||!(s>0))return console.warn("Sigma: SVG label attachment has no parseable dimensions \u2014 skipped."),null;let l=Math.ceil(o*t),d=Math.ceil(s*t),c=new Blob([e],{type:"image/svg+xml"}),f=URL.createObjectURL(c);return new Promise(u=>{let g=new Image;g.onload=()=>{let h=document.createElement("canvas");h.width=l,h.height=d,h.getContext("2d").drawImage(g,0,0,l,d),URL.revokeObjectURL(f);try{h.getContext("2d").getImageData(0,0,1,1)}catch(p){if(p instanceof DOMException&&p.name==="SecurityError"){co||(co=!0,console.warn('Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.')),u(null);return}throw p}u(h)},g.onerror=()=>{URL.revokeObjectURL(f),u(null)},g.src=f})}function hd(r,t){let e=document.createElement("div");e.style.cssText="position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content",e.innerHTML=(t?`<style>${t}</style>`:"")+r,document.body.appendChild(e);let{width:a,height:i}=e.getBoundingClientRect();return document.body.removeChild(e),{width:Math.ceil(a),height:Math.ceil(i)}}async function gd(r,t,e,a,i=1){let n=r instanceof HTMLElement?r.outerHTML:r,o=await ho(n);if(e==null||a==null){let f=hd(o,t);e=e??f.width,a=a??f.height}let s=Math.ceil(e*i),l=Math.ceil(a*i),d=t?`<style>${t}</style>`:"",c=`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${l}" viewBox="0 0 ${e} ${a}"><foreignObject width="${e}" height="${a}"><body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${d}${o}</body></foreignObject></svg>`;return Ei(c,1)}async function Ti(r,t=1){switch(r.type){case"canvas":return r.canvas;case"svg":return Ei(r.svg,t);case"html":return gd(r.html,r.css,r.width,r.height,t)}}var Me=2,Rt=7,_i={below:0,above:1,left:2,right:3};function fd(){return`#version 300 es
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

${te}
${oe}
${fe}
${Xr}
${Ne}

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
  float gap = ${Me.toFixed(1)} * zoomScale * u_pixelRatio;
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
`}var pd=`#version 300 es
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
`;function Ai(r,t,e,a){let{label:i={}}=a,n=i.margin??Ge,o=i.zoomToLabelSizeRatioFunction??(()=>1),s=fd(),l=pd,c=class c extends re{constructor(){super(...arguments);this.totalCount=0;this.bufferCapacity=0}getDefinition(){let{FLOAT:g,TRIANGLE_STRIP:h}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:s,FRAGMENT_SHADER_SOURCE:l,METHOD:h,UNIFORMS:["u_matrix","u_resolution","u_labelPixelSnapping","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_atlasTexture"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:g},{name:"a_atlasRect",size:4,type:g},{name:"a_attachmentSize",size:2,type:g},{name:"a_positionMode",size:1,type:g},{name:"a_attachmentPlacement",size:1,type:g},{name:"a_labelWidth",size:1,type:g},{name:"a_labelHeight",size:1,type:g},{name:"a_textHeight",size:1,type:g},{name:"a_labelAngle",size:1,type:g}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:g}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}processAttachment(g,h){let{floats:p}=this,b=g*this.STRIDE;p[b++]=h.nodeIndex,p[b++]=h.atlasX,p[b++]=h.atlasY,p[b++]=h.atlasW,p[b++]=h.atlasH,p[b++]=h.attachWidth,p[b++]=h.attachHeight,p[b++]=h.positionMode,p[b++]=h.attachmentPlacement,p[b++]=h.labelWidth,p[b++]=h.labelHeight,p[b++]=h.textHeight,p[b++]=h.labelAngle}setUniforms(g,{gl:h,uniformLocations:p}){h.uniformMatrix3fv(p.u_matrix,!1,g.matrix),h.uniform2f(p.u_resolution,g.width*g.pixelRatio,g.height*g.pixelRatio),h.uniform1f(p.u_labelPixelSnapping,g.labelPixelSnapping),h.uniform1f(p.u_sizeRatio,g.sizeRatio),h.uniform1f(p.u_correctionRatio,g.correctionRatio),h.uniform1f(p.u_cameraAngle,g.cameraAngle),h.uniform1f(p.u_pixelRatio,g.pixelRatio),h.uniform1f(p.u_labelMargin,c.labelMargin),h.uniform1f(p.u_zoomLabelSizeRatio,1/o(g.zoomRatio)),h.uniform1i(p.u_nodeDataTexture,g.nodeDataTextureUnit),h.uniform1i(p.u_nodeDataTextureWidth,g.nodeDataTextureWidth),h.uniform1i(p.u_nodeFrameTexture,g.nodeFrameTextureUnit),h.uniform1i(p.u_nodeFrameTextureWidth,g.nodeFrameTextureWidth),h.uniform1i(p.u_atlasTexture,Rt)}reallocateAttachments(g){this.totalCount=g,g>this.bufferCapacity&&(this.bufferCapacity=Math.max(g,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}hasNothingToRender(){return this.totalCount===0}drawWebGL(g,{gl:h}){this.totalCount!==0&&h.drawArraysInstanced(g,0,this.VERTICES,this.totalCount)}};c.labelMargin=n;let d=c;return new d(r,t,e)}var Pt=2048,Ct=class{constructor(t,e,a){this.cache=new Map;this.pending=new Set;this.atlas={};this.glTexture=null;this.dirty=!0;this.gl=t,this.renderers=e,this.scheduleRender=a,this.packCanvas=document.createElement("canvas"),this.packCanvas.width=Pt,this.packCanvas.height=Pt,this.packCtx=this.packCanvas.getContext("2d")}renderAttachment(t,e,a){let i=`${t}:${e}`;if(this.cache.has(i)||this.pending.has(i))return;let n=this.renderers[e];if(!n)return;let o=n(a);if(!o)return;this.pending.add(i);let{pixelRatio:s}=a;Promise.resolve(o).then(async l=>{if(!this.pending.has(i)||(this.pending.delete(i),!l))return;let d=await Ti(l,s);!d||d.width===0||d.height===0||(this.cache.set(i,{image:d,width:d.width,height:d.height}),this.dirty=!0,this.scheduleRender())})}regenerateAtlas(){if(!this.dirty)return;this.dirty=!1;let t=[];if(this.cache.forEach((s,l)=>{t.push({key:l,width:s.width,height:s.height,draw:(d,c,f)=>{d.drawImage(s.image,c,f)}})}),t.length===0){this.atlas={},this.deleteGLTexture();return}let e={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,Pt,Pt);let{atlas:a,remaining:i}=uo(t,this.packCtx,e);this.atlas=a,i.length>0&&console.warn(`Sigma: ${i.length} label attachment(s) could not fit in the ${Pt}x${Pt} atlas and will not be rendered.`),this.deleteGLTexture();let n=this.gl,o=n.createTexture();n.activeTexture(n.TEXTURE0+Rt),n.bindTexture(n.TEXTURE_2D,o),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,this.packCanvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),this.glTexture=o}bindTexture(t){if(!this.glTexture)return;let e=this.gl;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.glTexture)}getEntry(t,e){let a=`${t}:${e}`;return this.atlas[a]||null}invalidateNode(t){let e=`${t}:`;for(let a of this.cache.keys())a.startsWith(e)&&(this.cache.delete(a),this.dirty=!0);for(let a of this.pending)a.startsWith(e)&&this.pending.delete(a)}restore(){this.glTexture=null,this.dirty=!0}clear(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}kill(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}deleteGLTexture(){this.glTexture&&(this.gl.deleteTexture(this.glTexture),this.glTexture=null)}};var pe=5;function cr(r,t){return[...t,...r.map(e=>({attributes:e.attributes??[]}))]}function Re(r,t){let e=Z(cr(r,t)),a=new Set(r.flatMap(o=>o.attributes??[]).map(o=>o.name.replace(/^a_/,""))),i={},n={};for(let o of a)i[o]=e.offsets[o],n[o]=e.specs[o];return{...e,offsets:i,specs:n}}function go(r,t){let e=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pickingPadding","u_nodeDataTexture","u_layerAttributeTexture"]),a=new Set,i=r.flatMap(u=>u.uniforms).filter(u=>e.has(u.name)||a.has(u.name)?!1:(a.add(u.name),!0)).map(u=>`uniform ${u.type} ${u.name};`).join(`
`),n=t.flatMap(u=>u.uniforms).filter(u=>e.has(u.name)||a.has(u.name)?!1:(a.add(u.name),!0)).map(u=>`uniform ${u.type} ${u.name};`).join(`
`),o=cr(r,t),s=new Set,l=o.flatMap(u=>u.attributes).filter(u=>{let g=u.name.replace(/^a_/,"");return s.has(g)?!1:(s.add(g),!0)}).map(u=>{let g=u.name.replace(/^a_/,"");return`out ${u.size===1?"float":`vec${u.size}`} v_${g};`}).join(`
`),{fetchCode:d,varyingAssignments:c}=ve(Z(o),{varPrefix:"layer",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"});return`#version 300 es

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

${i}
${n}

// Standard varyings
out vec2 v_uv;                    // Normalized coordinates [-1, 1]
out vec4 v_id;
out float v_opacity;
out float v_antialiasingWidth;    // Width for antialiasing in UV space
out float v_pixelSize;            // Node size in pixels (for pixel-mode borders)
out float v_pixelToUV;            // Conversion factor: multiply by this to convert screen pixels to UV units
out float v_shapeId;              // Shape ID for multi-shape programs

// Layer varyings
${l}

// Node-data fetch helpers (geometry texel + rotation-flags texel)
${te}
${oe}

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

${d}

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
${c}
}
`}function fo(r,t,e,a=!0){let i=t.map((h,p)=>{let b=`layer_${h.name}`,x=[...h.attributes.map(m=>`v_${m.name.replace(/^a_/,"")}`),...h.uniforms.map(m=>m.name)].join(", ");return`  // Layer ${p+1}: ${h.name}
  color = blendOver(color, ${b}(${x}));`}).join(`

`),n=new Set(["u_correctionRatio"]),o=new Set,s=r.flatMap(h=>h.uniforms).filter(h=>n.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)).map(h=>`uniform ${h.type} ${h.name};`).join(`
`),l=t.flatMap(h=>h.uniforms).filter(h=>n.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)).map(h=>`uniform ${h.type} ${h.name};`).join(`
`),d=new Set,c=cr(r,t).flatMap(h=>h.attributes).filter(h=>{let p=h.name.replace(/^a_/,"");return d.has(p)?!1:(d.add(p),!0)}).map(h=>{let p=h.name.replace(/^a_/,"");return`in ${h.size===1?"float":`vec${h.size}`} v_${p};`}).join(`
`),f=lt(r),u=hi(r,e);return`#version 300 es
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
${s}

// Layer uniforms
${l}

// Layer varyings
${c}

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
${f}

// Shape selector function (sets context.sdf and context.inradiusFactor)
${u}

// Layer functions
${t.map(h=>h.glsl).join(`

`)}

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

${i}

  #ifdef PICKING_MODE
    // Picking pass: output node ID for pixels within the picking area.
    if (context.sdf > u_pickingPadding * v_pixelToUV) discard;
    fragColor = v_id;
  #else
${a?`    // Visual pass: apply antialiasing at shape boundary, node opacity once
    // smoothstep provides smooth transition from opaque to transparent
    float alpha = smoothstep(context.aaWidth, -context.aaWidth, context.sdf) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) shape boundary, node opacity applied once
    float alpha = (context.sdf < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    // Mix with transparent to fade both color AND alpha together (avoids bright halo)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function po(r,t){let e=new Set;return e.add("u_matrix"),e.add("u_sizeRatio"),e.add("u_correctionRatio"),e.add("u_cameraAngle"),e.add("u_pickingPadding"),e.add("u_nodeDataTexture"),e.add("u_nodeDataTextureWidth"),e.add("u_layerAttributeTexture"),e.add("u_layerAttributeTextureWidth"),e.add("u_layerAttributeTexelsPerNode"),r.forEach(a=>{a.uniforms.forEach(i=>e.add(i.name))}),t.forEach(a=>{a.uniforms.forEach(i=>e.add(i.name))}),Array.from(e)}function mo(r){let{UNSIGNED_BYTE:t,FLOAT:e}=WebGL2RenderingContext;return[{name:"a_nodeIndex",size:1,type:e},{name:"a_id",size:4,type:t,normalized:!0},{name:"a_opacity",size:1,type:e}]}function ia(r){let{shapes:t,layers:e,shapeGlobalIds:a,antialias:i=!0}=r;return{vertexShader:go(t,e),fragmentShader:fo(t,e,a,i),uniforms:po(t,e),attributes:mo(e)}}function bo(r,t,e){let{specs:a}=Re(r,t);return Object.keys(a).map(i=>`flat ${e} ${a[i].size===1?"float":`vec${a[i].size}`} v_${i};`).join(`
`)}function xo(r){let{shapes:t,layers:e,shapeGlobalIds:a}=r,i=ve(Re(t,e),{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),n=t.length===1?`float inradiusFactor = ${$(t[0].inradiusFactor??1)};`:`float inradiusFactor = ${$(t[0].inradiusFactor??1)};
  switch (int(shapeId)) {
${t.map((s,l)=>`    case ${a?a[l]:l}: inradiusFactor = ${$(s.inradiusFactor??1)}; break;`).join(`
`)}
    default: break;
  }`;return`#version 300 es

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
${bo(t,e,"out")}

${te}
${oe}
${fe}

void main() {
  int nodeIdx = int(a_nodeIndex);
${i.fetchCode}
${i.varyingAssignments}

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

  ${Hr}
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
  ${n}
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
`}function yo(r){let{shapes:t,layers:e,shapeGlobalIds:a}=r,i=lt(t),n=we(t).map(c=>`uniform ${c.type} ${c.name};`).join(`
`),o=c=>ot(c,"nodeUV","1.0"),s;if(t.length===1)s=`float nodeSdfNormalized = ${o(t[0])};`;else{let c=t.map((u,g)=>`    case ${a?a[g]:g}: nodeSdfNormalized = ${o(u)}; break;`).join(`
`),f=o(t[0]);s=`float nodeSdfNormalized;
  int shapeId = int(v_shapeId);
  switch (shapeId) {
${c}
    default: nodeSdfNormalized = ${f};
  }`}return`#version 300 es
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
${bo(t,e,"in")}

uniform float u_cameraAngle;
${n}

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

${i}
${Hn}
${Vn}
${Xn}
${qn}

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
  float effectiveRadius = max(enlargedRadius - cornerRadius, 0.01);
  float ca = u_cameraAngle * v_nodeRotation;
  float ca_c = cos(ca);
  float ca_s = sin(ca);
  vec2 rotatedScreenUV = mat2(ca_c, -ca_s, ca_s, ca_c) * screenUV;
  vec2 nodeUV = vec2(rotatedScreenUV.x, -rotatedScreenUV.y) / effectiveRadius;

  // Query the correct shape SDF based on shapeId
  ${s}
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
`}function So(r){let t=["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"];for(let e of we(r))t.includes(e.name)||t.push(e.name);return t}function Di(r){return{vertexShader:xo(r),fragmentShader:yo(r),uniforms:So(r.shapes)}}function Li(r,t,e,a){let{label:i={},shapes:n,layers:o,getAttributeTexture:s,shapeGlobalIds:l}=a;if(n.length===0)throw new Error("createBackdropProgram: at least one shape must be provided in 'shapes'");let d=i.margin??5,c=i.zoomToLabelSizeRatioFunction??(()=>1),u=Di({shapes:n,layers:o,shapeGlobalIds:l}),h=class h extends re{constructor(){super(...arguments);this.totalBackdropCount=0;this.bufferCapacity=0}getDefinition(){let{FLOAT:x,TRIANGLE_STRIP:m}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:u.vertexShader,FRAGMENT_SHADER_SOURCE:u.fragmentShader,METHOD:m,UNIFORMS:u.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:x},{name:"a_labelWidth",size:1,type:x},{name:"a_labelHeight",size:1,type:x},{name:"a_textHeight",size:1,type:x},{name:"a_positionMode",size:1,type:x},{name:"a_labelAngle",size:1,type:x},{name:"a_backdropColor",size:4,type:x},{name:"a_backdropShadowColor",size:4,type:x},{name:"a_backdropShadowBlur",size:1,type:x},{name:"a_backdropPadding",size:1,type:x},{name:"a_backdropBorderColor",size:4,type:x},{name:"a_backdropExtra",size:4,type:x},{name:"a_labelBoxOffset",size:2,type:x}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:x}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}processBackdrop(x,m){let{floats:y,STRIDE:S}=this,v=x*S;y[v++]=m.nodeIndex,y[v++]=m.labelWidth,y[v++]=m.labelHeight,y[v++]=m.textHeight,y[v++]=qe[m.position],y[v++]=m.labelAngle,y[v++]=m.backdropColor[0],y[v++]=m.backdropColor[1],y[v++]=m.backdropColor[2],y[v++]=m.backdropColor[3],y[v++]=m.backdropShadowColor[0],y[v++]=m.backdropShadowColor[1],y[v++]=m.backdropShadowColor[2],y[v++]=m.backdropShadowColor[3],y[v++]=m.backdropShadowBlur,y[v++]=m.backdropPadding,y[v++]=m.backdropBorderColor[0],y[v++]=m.backdropBorderColor[1],y[v++]=m.backdropBorderColor[2],y[v++]=m.backdropBorderColor[3],y[v++]=m.backdropBorderWidth,y[v++]=m.backdropCornerRadius,y[v++]=m.backdropLabelPadding,y[v++]=m.backdropArea,y[v++]=m.labelBoxOffset[0],y[v++]=m.labelBoxOffset[1]}setUniforms(x,m){let{gl:y,uniformLocations:S}=m;y.uniformMatrix3fv(S.u_matrix,!1,x.matrix),y.uniform1f(S.u_sizeRatio,x.sizeRatio),y.uniform1f(S.u_correctionRatio,x.correctionRatio),y.uniform1f(S.u_cameraAngle,x.cameraAngle),y.uniform2f(S.u_resolution,x.width*x.pixelRatio,x.height*x.pixelRatio),y.uniform1f(S.u_pixelRatio,x.pixelRatio),y.uniform1f(S.u_labelMargin,h.labelMargin),y.uniform1f(S.u_zoomLabelSizeRatio,1/c(x.zoomRatio)),y.uniform1f(S.u_labelPixelSnapping,x.labelPixelSnapping),y.uniform1i(S.u_nodeDataTexture,x.nodeDataTextureUnit),y.uniform1i(S.u_nodeDataTextureWidth,x.nodeDataTextureWidth),y.uniform1i(S.u_nodeFrameTexture,x.nodeFrameTextureUnit),y.uniform1i(S.u_nodeFrameTextureWidth,x.nodeFrameTextureWidth);let v=s();S.u_layerAttributeTexture&&v&&(v.bind(pe),y.uniform1i(S.u_layerAttributeTexture,pe),y.uniform1i(S.u_layerAttributeTextureWidth,v.getTextureWidth()),y.uniform1i(S.u_layerAttributeTexelsPerNode,v.getTexelsPerItem()));for(let E of we(n))this.setTypedUniform(E,m)}hasNothingToRender(){return this.totalBackdropCount===0}drawWebGL(x,{gl:m}){this.totalBackdropCount!==0&&(this.isInstanced?m.drawArraysInstanced(x,0,this.VERTICES,this.totalBackdropCount):m.drawArrays(x,0,this.totalBackdropCount*this.VERTICES))}reallocate(x){this.totalBackdropCount=x,x>this.bufferCapacity&&(this.bufferCapacity=Math.max(x,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}};h.labelMargin=d;let g=h;return new g(r,t,e)}var Qe=class extends re{constructor(){super(...arguments);this.totalCharacterCount=0;this.bufferCapacity=0}processLabel(e,a,i){if(i.hidden||!i.text)return 0;let n=i.text,o=n.length;for(let s=0;s<o;s++){let l=n[s];this.processCharacter(a+s,i,l,s)}return o}hasNothingToRender(){return this.totalCharacterCount===0}drawWebGL(e,{gl:a}){this.totalCharacterCount!==0&&(this.isInstanced?a.drawArraysInstanced(e,0,this.VERTICES,this.totalCharacterCount):a.drawArrays(e,0,this.totalCharacterCount*this.VERTICES))}reallocate(e){this.totalCharacterCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||1e3),super.reallocate(this.bufferCapacity))}};function md(){return`#version 300 es

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

${te}
${oe}
${fe}
${Xr}

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

  ${Hr}

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
`}var bd=`#version 300 es
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
`;function Ri(r,t,e,a){let{label:i={}}=a,n=i.margin??Ge,o=i.zoomToLabelSizeRatioFunction??(()=>1),s=md(),d=class d extends re{constructor(){super(...arguments);this.totalCount=0;this.bufferCapacity=0}getDefinition(){let{FLOAT:u,UNSIGNED_BYTE:g,TRIANGLE_STRIP:h}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:s,FRAGMENT_SHADER_SOURCE:bd,METHOD:h,UNIFORMS:["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:u},{name:"a_id",size:4,type:g,normalized:!0},{name:"a_color",size:4,type:g,normalized:!0},{name:"a_labelWidth",size:1,type:u},{name:"a_labelHeight",size:1,type:u},{name:"a_textHeight",size:1,type:u},{name:"a_positionMode",size:1,type:u},{name:"a_labelAngle",size:1,type:u},{name:"a_padding",size:1,type:u}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:u}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}processLabelBackground(u,g){let{floats:h,ints:p}=this,b=u*this.STRIDE;h[b++]=g.nodeIndex,p[b++]=g.id,h[b++]=g.color,h[b++]=g.labelWidth,h[b++]=g.labelHeight,h[b++]=g.textHeight,h[b++]=g.positionMode,h[b++]=g.labelAngle,h[b++]=g.padding}setUniforms(u,{gl:g,uniformLocations:h}){g.uniformMatrix3fv(h.u_matrix,!1,u.matrix),g.uniform1f(h.u_sizeRatio,u.sizeRatio),g.uniform1f(h.u_correctionRatio,u.correctionRatio),g.uniform1f(h.u_cameraAngle,u.cameraAngle),g.uniform2f(h.u_resolution,u.width*u.pixelRatio,u.height*u.pixelRatio),g.uniform1f(h.u_pixelRatio,u.pixelRatio),g.uniform1f(h.u_labelMargin,d.labelMargin),g.uniform1f(h.u_zoomLabelSizeRatio,1/o(u.zoomRatio)),g.uniform1f(h.u_labelPixelSnapping,u.labelPixelSnapping),g.uniform1f(h.u_pickingPadding,u.labelPickingPadding),g.uniform1i(h.u_nodeDataTexture,u.nodeDataTextureUnit),g.uniform1i(h.u_nodeDataTextureWidth,u.nodeDataTextureWidth),g.uniform1i(h.u_nodeFrameTexture,u.nodeFrameTextureUnit),g.uniform1i(h.u_nodeFrameTextureWidth,u.nodeFrameTextureWidth)}hasNothingToRender(){return this.totalCount===0}drawWebGL(u,{gl:g}){this.totalCount!==0&&g.drawArraysInstanced(g.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}reallocate(u){this.totalCount=u,u>this.bufferCapacity&&(this.bufferCapacity=Math.max(u,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}};d.labelMargin=n;let l=d;return new l(r,t,e)}var To=Mr(Or()),ae={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},hr=2,gr=1e20;function xd(r,t,e,a,i){let n=r+i*4,o=document.createElement("canvas");o.width=n,o.height=n;let s=o.getContext("2d",{willReadFrequently:!0});return s.font=`${a} ${e} ${r}px ${t}`,s.textBaseline="alphabetic",s.textAlign="left",s.fillStyle="black",{ctx:s,canvasSize:n,gridOuter:new Float64Array(n*n),gridInner:new Float64Array(n*n),f:new Float64Array(n),z:new Float64Array(n+1),v:new Uint16Array(n)}}function yd(r,t,e,a,i){let{ctx:n,canvasSize:o}=r,s=n.measureText(t),l=s.width,{actualBoundingBoxAscent:d,actualBoundingBoxDescent:c,actualBoundingBoxLeft:f,actualBoundingBoxRight:u}=s,g=Math.ceil(d),h=Math.ceil(f),p=Math.max(0,Math.min(o-e,Math.ceil(f)+Math.ceil(u))),b=Math.min(o-e,g+Math.ceil(c)),x=p+2*e,m=b+2*e,y=Math.max(x*m,0),S=new Uint8ClampedArray(y),v={data:S,width:x,height:m,glyphWidth:p,glyphHeight:b,glyphTop:g,glyphLeft:h,glyphAdvance:l};if(p===0||b===0)return v;let{gridInner:E,gridOuter:_}=r;n.clearRect(e,e,p,b),n.fillText(t,e+h,e+g);let A=n.getImageData(e,e,p,b);_.fill(gr,0,y),E.fill(0,0,y);for(let L=0;L<b;L++)for(let T=0;T<p;T++){let N=A.data[4*(L*p+T)+3]/255;if(N===0)continue;let R=(L+e)*x+T+e;if(N===1)_[R]=0,E[R]=gr;else{let w=.5-N;_[R]=w>0?w*w:0,E[R]=w<0?w*w:0}}vo(_,0,0,x,m,x,r.f,r.v,r.z),vo(E,e,e,p,b,x,r.f,r.v,r.z);for(let L=0;L<y;L++){let T=Math.sqrt(_[L])-Math.sqrt(E[L]);S[L]=Math.round(255-255*(T/a+i))}return v}function vo(r,t,e,a,i,n,o,s,l){for(let d=t;d<t+a;d++)Eo(r,e*n+d,n,i,o,s,l);for(let d=e;d<e+i;d++)Eo(r,d*n+t,1,a,o,s,l)}function Eo(r,t,e,a,i,n,o){n[0]=0,o[0]=-gr,o[1]=gr,i[0]=r[t];for(let s=1,l=0,d=0;s<a;s++){i[s]=r[t+s*e];let c=s*s;do{let f=n[l];d=(i[s]-i[f]+c-f*f)/(s-f)/2}while(d<=o[l]&&--l>-1);l++,n[l]=s,o[l]=d,o[l+1]=gr}for(let s=0,l=0;s<a;s++){for(;o[l+1]<s;)l++;let d=n[l],c=s-d;r[t+s*e]=i[d]+c*c}}var na=class na extends To.EventEmitter{constructor(e={}){super();this.fonts=new Map;this.textures=[];this.cursor={x:0,y:0,rowHeight:0,atlasIndex:0};this.pendingGlyphs=[];this.debounceTimer=null;this.options={...ae,...e},this.canvas=document.createElement("canvas"),this.canvas.width=this.options.maxTextureSize,this.canvas.height=this.options.maxTextureSize,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.measureCanvas=document.createElement("canvas"),this.measureCtx=this.measureCanvas.getContext("2d"),this.textures.push(this.ctx.getImageData(0,0,1,1))}getFontKey(e){return`${e.family}-${e.weight}-${e.style}`}registerFont(e){let a=this.getFontKey(e);if(this.fonts.has(a))return a;let i=xd(this.options.fontSize,e.family,e.weight,e.style,this.options.buffer);return this.fonts.set(a,{descriptor:e,generator:i,glyphs:new Map}),a}ensureGlyphs(e,a){let i=this.fonts.get(a);if(!i)throw new Error(`Font "${a}" is not registered. Call registerFont() first.`);let n=!1;for(let o of e){let s=o.codePointAt(0);s!==void 0&&(i.glyphs.has(s)||(this.pendingGlyphs.push({fontKey:a,charCode:s}),n=!0))}n&&this.scheduleTextureGeneration()}measureText(e,a){let i=this.fonts.get(a);if(!i)throw new Error(`Font "${a}" is not registered.`);let{family:n,weight:o,style:s}=i.descriptor;return this.measureCtx.font=`${s} ${o} ${this.options.fontSize}px ${n}`,this.measureCtx.measureText(e).width}getGlyph(e,a){let i=this.fonts.get(a);if(i)return i.glyphs.get(e)}getTextures(){return this.textures}getFontCount(){return this.fonts.size}getGlyphCount(){let e=0;for(let a of this.fonts.values())e+=a.glyphs.size;return e}hasPendingGlyphs(){return this.pendingGlyphs.length>0}flush(){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null),this.generateTextures()}destroy(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}scheduleTextureGeneration(){this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(()=>{this.debounceTimer=null,this.generateTextures()},this.options.debounceTimeout))}generateTextures(){if(this.pendingGlyphs.length===0)return;let{maxTextureSize:e,buffer:a,radius:i,cutoff:n}=this.options;for(let{fontKey:o,charCode:s}of this.pendingGlyphs){let l=this.fonts.get(o);if(!l||l.glyphs.has(s))continue;let d=String.fromCodePoint(s),c=yd(l.generator,d,a,i,n),f=c.width,u=c.height;this.cursor.x+f+hr>e&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+hr,this.cursor.rowHeight=0),this.cursor.y+u+hr>e&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,e,e));let g=c.data,h=new Uint8ClampedArray(f*u*4);for(let x=0;x<g.length;x++){let m=x*4;h[m]=255,h[m+1]=255,h[m+2]=255,h[m+3]=g[x]}let p=new ImageData(h,f,u);this.ctx.putImageData(p,this.cursor.x,this.cursor.y);let b={charCode:s,width:c.glyphWidth,height:c.glyphHeight,bearingX:-c.glyphLeft-a,bearingY:c.glyphTop+a,advance:c.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:f,atlasHeight:u,atlasIndex:this.cursor.atlasIndex};l.glyphs.set(s,b),this.cursor.x+=f+hr,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,u)}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(na.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}finalizeCurrentTexture(){let{maxTextureSize:e}=this.options,a=this.cursor.y>0||this.cursor.rowHeight>0,i=Math.min(e,Math.max(this.cursor.x,a?e:1)),n=Math.min(e,this.cursor.y+this.cursor.rowHeight+hr),o=this.ctx.getImageData(0,0,i,n);this.cursor.atlasIndex>=this.textures.length?this.textures.push(o):this.textures[this.cursor.atlasIndex]=o}};na.ATLAS_UPDATED_EVENT="atlasUpdated";var Ee=na;var Sd=ae.fontSize;function Pi(){return`#version 300 es

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
const float ATLAS_FONT_SIZE = ${$(Sd)};

// ============================================================================
// Helper Functions
// ============================================================================

${te}
${oe}
${fe}
${Vr}

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

  // -------------------------------------------------------------------------
  // Step 3: Calculate position offset from the shared edge distance
  // -------------------------------------------------------------------------
  vec2 positionOffset = vec2(0.0);

  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    float boundaryDistPixels = nodeRadiusPixels * edgeDist;
    positionOffset = screenDir * (boundaryDistPixels + margin);
  }

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
`}function Ci(){return`#version 300 es
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
`}function wi(){return["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_pixelRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_zoomLabelSizeRatio","u_labelPixelSnapping"]}function oa(){return{vertexShader:Pi(),fragmentShader:Ci(),uniforms:wi()}}function sa(r,t,e,a){let{label:i={}}=a,n=i.margin??Ge,o=i.zoomToLabelSizeRatioFunction??(()=>1),s=oa(),d=class d extends Qe{constructor(u,g,h){super(u,g,h);this.atlasTexture=null;this.atlasNeedsUpdate=!1;this.labelGlyphCache=new Map;if(this.atlasFontSize=ae.fontSize*lr(),this.atlasManager=new Ee({fontSize:this.atlasFontSize}),this.gamma=.025,this.sdfBuffer=ae.cutoff,this.atlasTexture=u.createTexture(),!this.atlasTexture)throw new Error("NodeLabelProgram: failed to create atlas texture");u.bindTexture(u.TEXTURE_2D,this.atlasTexture),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.LINEAR),u.bindTexture(u.TEXTURE_2D,null),this.atlasManager.on(Ee.ATLAS_UPDATED_EVENT,()=>{this.atlasNeedsUpdate=!0});let p={family:i.font?.family||"sans-serif",weight:i.font?.weight||"normal",style:i.font?.style||"normal"};this.defaultFontKey=this.atlasManager.registerFont(p)}getDefinition(){let{FLOAT:u,UNSIGNED_BYTE:g,TRIANGLE_STRIP:h}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:s.vertexShader,FRAGMENT_SHADER_SOURCE:s.fragmentShader,METHOD:h,UNIFORMS:s.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:u},{name:"a_charOffset",size:2,type:u},{name:"a_charSize",size:2,type:u},{name:"a_texCoords",size:4,type:u},{name:"a_color",size:4,type:g,normalized:!0},{name:"a_margin",size:1,type:u},{name:"a_positionMode",size:1,type:u},{name:"a_labelWidth",size:1,type:u},{name:"a_labelHeight",size:1,type:u},{name:"a_verticalCenter",size:1,type:u},{name:"a_textHeight",size:1,type:u},{name:"a_labelAngle",size:1,type:u}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:u}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}prepareLabelGlyphs(u,g){if(g.hidden||!g.text){this.labelGlyphCache.delete(u);return}let h=g.text,p=g.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(h,p);let b=[],x=[],m=0,y=0,S=0;for(let v of h){let E=v.codePointAt(0);if(E===void 0){b.push(void 0),x.push(m);continue}let _=this.atlasManager.getGlyph(E,p);b.push(_),x.push(m),_&&(m+=_.advance,y=Math.max(y,_.bearingY),S=Math.max(S,_.atlasHeight-_.bearingY))}this.labelGlyphCache.set(u,{glyphs:b,xOffsets:x,totalWidth:m,totalHeight:y+S,verticalCenterOffset:(y-S)/2})}processCharacter(u,g,h,p){let{floats:b,STRIDE:x}=this,m=u*x,y=this.labelGlyphCache.get(g.parentKey);if(!y||!y.glyphs[p]){for(let L=0;L<x;L++)b[m+L]=0;return}let S=y.glyphs[p],v=y.xOffsets[p],E=g.size/this.atlasFontSize,_=se(g.color),A=m;b[A++]=g.nodeIndex,b[A++]=(v+S.bearingX)*E,b[A++]=-S.bearingY*E,b[A++]=S.atlasWidth*E,b[A++]=S.atlasHeight*E,b[A++]=S.atlasX,b[A++]=S.atlasY,b[A++]=S.atlasWidth,b[A++]=S.atlasHeight,b[A++]=_,b[A++]=g.margin,b[A++]=qe[g.position],b[A++]=y.totalWidth*E,b[A++]=g.size,b[A++]=y.verticalCenterOffset*E,b[A++]=y.totalHeight*E,b[A++]=g.labelAngle}processLabel(u,g,h){return this.prepareLabelGlyphs(u,h),super.processLabel(u,g,h)}updateAtlasTexture(){if(!this.atlasNeedsUpdate)return;let u=this.normalProgram.gl,g=this.atlasManager.getTextures();if(g.length===0)return;let h=g[0];u.bindTexture(u.TEXTURE_2D,this.atlasTexture),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,h.width,h.height,0,u.RGBA,u.UNSIGNED_BYTE,h.data),u.bindTexture(u.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}setUniforms(u,g){let{gl:h,uniformLocations:p}=g;h.uniformMatrix3fv(p.u_matrix,!1,u.matrix),h.uniform1f(p.u_sizeRatio,u.sizeRatio),h.uniform1f(p.u_correctionRatio,u.correctionRatio),h.uniform1f(p.u_cameraAngle,u.cameraAngle),h.uniform2f(p.u_resolution,u.width*u.pixelRatio,u.height*u.pixelRatio);let b=this.atlasManager.getTextures();b.length>0?h.uniform2f(p.u_atlasSize,b[0].width,b[0].height):h.uniform2f(p.u_atlasSize,1,1),h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,this.atlasTexture),h.uniform1i(p.u_atlas,0),p.u_nodeDataTexture!==void 0&&h.uniform1i(p.u_nodeDataTexture,u.nodeDataTextureUnit),p.u_nodeDataTextureWidth!==void 0&&h.uniform1i(p.u_nodeDataTextureWidth,u.nodeDataTextureWidth),h.uniform1i(p.u_nodeFrameTexture,u.nodeFrameTextureUnit),h.uniform1i(p.u_nodeFrameTextureWidth,u.nodeFrameTextureWidth),h.uniform1f(p.u_gamma,this.gamma),h.uniform1f(p.u_sdfBuffer,this.sdfBuffer),h.uniform1f(p.u_pixelRatio,u.pixelRatio),h.uniform1f(p.u_zoomLabelSizeRatio,1/d.zoomToLabelSizeRatioFunction(u.zoomRatio)),h.uniform1f(p.u_labelPixelSnapping,u.labelPixelSnapping)}renderProgram(u,g){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),super.renderProgram(u,g)}registerFont(u,g="normal",h="normal"){return this.atlasManager.registerFont({family:u,weight:g,style:h})}getAtlasManager(){return this.atlasManager}measureLabel(u,g,h){let p=h||this.defaultFontKey;this.atlasManager.ensureGlyphs(u,p),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();let b=0,x=0,m=0;for(let S of u){let v=S.codePointAt(0);if(v===void 0)continue;let E=this.atlasManager.getGlyph(v,p);E&&(b+=E.advance,x=Math.max(x,E.bearingY),m=Math.max(m,E.atlasHeight-E.bearingY))}let y=g/this.atlasFontSize;return{width:b*y,height:g,textHeight:(x+m)*y}}ensureGlyphsReady(u,g){let h=g||this.defaultFontKey;for(let p of u)this.atlasManager.ensureGlyphs(p,h);this.atlasManager.flush()}kill(){let u=this.normalProgram.gl;this.atlasTexture&&(u.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),super.kill()}};d.labelMargin=n,d.zoomToLabelSizeRatioFunction=o;let l=d;return new l(r,t,e)}var vd=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function Ed(r,t,e){let a=lt(r),i=we(r).map(u=>`uniform ${u.type} ${u.name};`).join(`
`),{code:n,multiShape:o}=Kn(r,e),s=Re(r,t),l=Object.keys(s.specs).map(u=>`float v_${u};`).join(`
`),{fetchCode:d,varyingAssignments:c}=ve(s,{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"});return`#version 300 es
precision highp float;

uniform float u_cameraAngle;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;
${i}

in float a_nodeIndex;     // node-data texture index (also the target frame texel)
in float a_positionMode;  // 0=right 1=left 2=above 3=below 4=over
in float a_labelAngle;    // intrinsic label angle (radians)

out float v_edgeDist;

// Shape attributes (plain globals: this pass is vertex-only)
${l}

${te}
${oe}
${a}
${n}
${Vr}

void main() {
  int nodeIdx = int(a_nodeIndex);
${d}
${c}
  ${o?`// Multi-shape: the shape id lives in the node-data texture's .w channel:
  g_shapeId = int(readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).w);`:"// Single-shape mode, shape id not needed"}

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
`}var fr=class fr{constructor(t,e){this.uniformLocations={};let{shapes:a,layers:i,shapeGlobalIds:n}=e;if(a.length===0)throw new Error("NodeLabelFramePass: at least one shape must be provided");this.gl=t,this.shapeUniforms=we(a),this.hasAttributeData=Object.keys(Re(a,i).offsets).length>0,this.vertexShader=Tt(t,Ed(a,i,n)),this.fragmentShader=_t(t,vd),this.program=At(t,[this.vertexShader,this.fragmentShader]);let o=["u_cameraAngle","u_nodeDataTexture","u_nodeDataTextureWidth","u_frameTextureWidth","u_frameTextureHeight","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode",...this.shapeUniforms.map(l=>l.name)];for(let l of o)this.uniformLocations[l]=t.getUniformLocation(this.program,l);let s=fr.FLOATS_PER_POINT*4;this.vao=t.createVertexArray(),this.buffer=t.createBuffer(),t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,this.buffer);for(let[l,d]of[["a_nodeIndex",0],["a_positionMode",4],["a_labelAngle",8]]){let c=t.getAttribLocation(this.program,l);c>=0&&(t.enableVertexAttribArray(c),t.vertexAttribPointer(c,1,t.FLOAT,!1,s,d))}t.bindVertexArray(null)}run(t,e,a,i,n){if(e===0)return;let{gl:o}=this;o.useProgram(this.program),o.bindVertexArray(this.vao),o.bindBuffer(o.ARRAY_BUFFER,this.buffer),o.bufferData(o.ARRAY_BUFFER,t.subarray(0,e*fr.FLOATS_PER_POINT),o.DYNAMIC_DRAW);let s=this.uniformLocations;o.uniform1f(s.u_cameraAngle,i.cameraAngle),o.uniform1i(s.u_nodeDataTexture,i.nodeDataTextureUnit),o.uniform1i(s.u_nodeDataTextureWidth,i.nodeDataTextureWidth),o.uniform1f(s.u_frameTextureWidth,a.getTextureWidth()),o.uniform1f(s.u_frameTextureHeight,a.getTextureHeight()),this.hasAttributeData&&n&&(n.bind(pe),s.u_layerAttributeTexture&&o.uniform1i(s.u_layerAttributeTexture,pe),s.u_layerAttributeTextureWidth&&o.uniform1i(s.u_layerAttributeTextureWidth,n.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&o.uniform1i(s.u_layerAttributeTexelsPerNode,n.getTexelsPerItem()));for(let l of this.shapeUniforms)ur(o,this.uniformLocations[l.name],l);a.bindAsRenderTarget(),o.disable(o.BLEND),o.disable(o.DEPTH_TEST),o.drawArrays(o.POINTS,0,e),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindVertexArray(null)}kill(){let{gl:t}=this;t.deleteProgram(this.program),t.deleteShader(this.vertexShader),t.deleteShader(this.fragmentShader),t.deleteBuffer(this.buffer),t.deleteVertexArray(this.vao)}};fr.FLOATS_PER_POINT=3;var wt=fr;function Gi(r,t,e,a,i){var v;let{label:n={},shapes:o}=a;if(o.length===0)throw new Error("createNodeProgram: at least one shape must be provided in 'shapes'");let s={},l=[],d;o.forEach((E,_)=>{let A=di(E);_===0&&(d=A),s[E.name]=_,l[_]=st(A)});let c=[...a.layers],f=ia({shapes:o,layers:c,shapeGlobalIds:o.length>1?l:void 0,antialias:i}),u=sa(r,null,e,{label:n}),g=Li(r,null,e,{shapes:o,layers:c,getAttributeTexture:()=>S.getAttributeTexture(),label:n,shapeGlobalIds:o.length>1?l:void 0}),h=Ri(r,t,e,{label:n}),p=a.labelAttachments&&Object.keys(a.labelAttachments).length>0?Ai(r,null,e,{label:n}):null,b=new wt(r,{shapes:o,layers:c,shapeGlobalIds:o.length>1?l:void 0}),x=cr(o,c),m=Z(x),y=(v=class extends re{constructor(_,A,L){super(_,A,L);this.layerLifecycles=new Map;this.layersNeedingRegeneration=new Set;this.attrDescriptors=[];this._pickingBuffer=A;let T=y.layerTextures.get(_);T||(T=new Le(_,m),y.layerTextures.set(_,T)),this.layerAttributeTexture=T;let N=y.textureRefCounts.get(_)||0;y.textureRefCounts.set(_,N+1),this.packedAttributeData=new Float32Array(m.floatsPerItem),c.forEach((w,G)=>{if(w.lifecycle){let D={gl:_,renderer:{refresh:()=>L.refresh()},getUniformLocation:O=>_.getUniformLocation(this.normalProgram.program,O),requestShaderRegeneration:()=>{this.layersNeedingRegeneration.add(G)},requestRefresh:()=>{L.refresh()}},z=w.lifecycle(D);this.layerLifecycles.set(G,z)}}),this.layerLifecycles.forEach(w=>{w.init?.()});let R=new Map;this.layerLifecycles.forEach((w,G)=>{w.getAttributeData&&R.set(G,w)}),this.attrDescriptors=Ye(x,m,R)}getDefinition(){let{FLOAT:_,TRIANGLE_STRIP:A}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:f.vertexShader,FRAGMENT_SHADER_SOURCE:f.fragmentShader,METHOD:A,UNIFORMS:f.uniforms,ATTRIBUTES:f.attributes,CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:_}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}maybeRegenerateShaders(){if(this.layersNeedingRegeneration.size===0)return;c=c.map((R,w)=>{if(this.layersNeedingRegeneration.has(w)){let G=this.layerLifecycles.get(w);if(G?.regenerate)return{...G.regenerate(),lifecycle:R.lifecycle}}return R}),this.layersNeedingRegeneration.clear(),f=ia({shapes:o,layers:c,shapeGlobalIds:o.length>1?l:void 0,antialias:this.renderer.getSetting("antialiasNodes")});let _=this.normalProgram.gl,{program:A,buffer:L,vertexShader:T,fragmentShader:N}=this.normalProgram;_.deleteProgram(A),_.deleteBuffer(L),_.deleteShader(T),_.deleteShader(N),this.normalProgram=this.getProgramInfo("normal",_,f.vertexShader,f.fragmentShader,this._pickingBuffer)}allocateNode(_){this.layerAttributeTexture.allocate(_)}freeNode(_){this.layerAttributeTexture.free(_)}getAttributeTexture(){return this.layerAttributeTexture}uploadLayerTexture(){this.layerAttributeTexture.upload()}process(_,A,L,T,N){let R=A*this.STRIDE;if(L.visibility==="hidden"){for(let w=R+this.STRIDE;R<w;R++)this.floats[R]=0;this.floats[A*this.STRIDE]=ta;return}this.processVisibleItem(dt(_),R,L,T,N)}processVisibleItem(_,A,L,T,N){let{floats:R,ints:w}=this;if(R[A++]=T,w[A++]=_,R[A++]=L.opacity??1,m.floatsPerItem===0)return;let G=this.packedAttributeData;Ze(this.attrDescriptors,L,G,L.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(N,G)}setUniforms(_,A){let{gl:L,uniformLocations:T}=A;T.u_matrix&&L.uniformMatrix3fv(T.u_matrix,!1,_.matrix),T.u_sizeRatio&&L.uniform1f(T.u_sizeRatio,_.sizeRatio),T.u_correctionRatio&&L.uniform1f(T.u_correctionRatio,_.correctionRatio),T.u_pickingPadding&&L.uniform1f(T.u_pickingPadding,_.nodePickingPadding),T.u_cameraAngle&&L.uniform1f(T.u_cameraAngle,_.cameraAngle),T.u_nodeDataTexture&&L.uniform1i(T.u_nodeDataTexture,_.nodeDataTextureUnit),T.u_nodeDataTextureWidth&&L.uniform1i(T.u_nodeDataTextureWidth,_.nodeDataTextureWidth),T.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(pe),L.uniform1i(T.u_layerAttributeTexture,pe)),T.u_layerAttributeTextureWidth&&L.uniform1i(T.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),T.u_layerAttributeTexelsPerNode&&L.uniform1i(T.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),o.forEach(N=>{N.uniforms.forEach(R=>{this.setTypedUniform(R,A)})}),c.forEach(N=>{N.uniforms.forEach(R=>{this.setTypedUniform(R,A)})})}render(_,A,L){this.maybeRegenerateShaders(),super.render(_,A,L)}renderProgram(_,A){let{gl:L,program:T}=A;L.useProgram(T),A===this.normalProgram&&this.layerLifecycles.forEach(N=>{N.beforeRender?.()}),super.renderProgram(_,A)}kill(){this.layerLifecycles.forEach(L=>{L.kill?.()}),this.layerLifecycles.clear();let _=this.normalProgram.gl,A=(y.textureRefCounts.get(_)||1)-1;A<=0?(this.layerAttributeTexture.kill(),y.layerTextures.delete(_),y.textureRefCounts.delete(_)):y.textureRefCounts.set(_,A),super.kill()}},v.layerTextures=new WeakMap,v.textureRefCounts=new WeakMap,v),S=new y(r,null,e);return{nodeProgram:S,labelProgram:u,backdropProgram:g,labelBackgroundProgram:h,attachmentProgram:p,framePass:b,shapeSlug:d,shapeNameToIndex:o.length>1?s:void 0,shapeGlobalIds:o.length>1?l:void 0}}function ue(r){return typeof r=="object"&&r!==null&&"attribute"in r}function Gt(){return{name:"circle",glsl:`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`,uniforms:[]}}function _o(r,t){return typeof r=="number"?r:(typeof r=="object"&&r!==null&&"attribute"in r,t)}function la(r){let{cornerRadius:t,rotation:e}=r??{},a=_o(t,0),i=_o(e,0);return{name:"square",glsl:`
${Ne}
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
`,uniforms:[{name:"u_cornerRadius",type:"float",value:a},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function Ao(r,t){return typeof r=="number"?r:(typeof r=="object"&&r!==null&&"attribute"in r,t)}function da(r){let{cornerRadius:t,rotation:e}=r??{},a=Ao(t,0),i=Ao(e,0);return{name:"triangle",glsl:`
${Ne}
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
`,uniforms:[{name:"u_cornerRadius",type:"float",value:a},{name:"u_rotation",type:"float",value:i}],inradiusFactor:.5}}function Do(r,t){return typeof r=="number"?r:(typeof r=="object"&&r!==null&&"attribute"in r,t)}function ua(r){let{cornerRadius:t,rotation:e}=r??{},a=Do(t,0),i=Do(e,0);return{name:"diamond",glsl:`
${Ne}
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
`,uniforms:[{name:"u_cornerRadius",type:"float",value:a},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function Nt(r){let{UNSIGNED_BYTE:t}=WebGL2RenderingContext,e=r?.color??{attribute:"color"};if(!ue(e)){let o=`
vec4 layer_fill() {
  return ${ro(e)};
}
`;return{name:"fill",uniforms:[],attributes:[],glsl:o}}let a=e.attribute;return{name:"fill",uniforms:[],attributes:[{name:"fillColor",size:4,type:t,normalized:!0,source:a}],glsl:`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`}}var me=6;function Je(r){let{offsets:t,specs:e,floatsPerItem:a}=r,i=Object.keys(t);if(i.length===0||a===0)return{uniformDeclarations:"",uniformNames:[],vertexVaryingDeclarations:"",fragmentVaryingDeclarations:"",fetchCode:"",varyingAssignments:""};let n=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=["u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"],s=i.map(u=>`${e[u].size===1?"float":`vec${e[u].size}`} v_${u};`),l=s.map(u=>`out ${u}`).join(`
`),d=s.map(u=>`in ${u}`).join(`
`),{fetchCode:c,varyingAssignments:f}=ve(r,{varPrefix:"attr",baseTexelExpr:"edgeIdx * u_edgeAttributeTexelsPerEdge",textureWidthUniform:"u_edgeAttributeTextureWidth",textureSamplerUniform:"u_edgeAttributeTexture"});return{uniformDeclarations:n,uniformNames:o,vertexVaryingDeclarations:l,fragmentVaryingDeclarations:d,fetchCode:c,varyingAssignments:f}}function Lo(r){return`
float findSourceClampT_${r}(vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
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
    vec2 pos = path_${r}_position(mid, source, target);
    vec2 localPos = rot * ((pos - source) / nodeExtent);
    float sdf = querySDF(sourceShapeId, localPos, effectiveSize);
    if (sdf < 0.0) lo = mid;
    else hi = mid;
  }

  float pathLen = path_${r}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 + marginT;
}
`}function Ro(r){return`
float findTargetClampT_${r}(vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  float lo = 0.5, hi = 1.0;
  float nodeExtent = targetSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // See findSourceClampT_ for the rotation rationale.
  float ca = u_cameraAngle * (1.0 - targetRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_${r}_position(mid, source, target);
    vec2 localPos = rot * ((pos - target) / nodeExtent);
    float sdf = querySDF(targetShapeId, localPos, effectiveSize);
    if (sdf < 0.0) hi = mid;
    else lo = mid;
  }

  float pathLen = path_${r}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 - marginT;
}
`}function ha(r){return`
// Auto-generated numerical tangent (from position via finite differences)
vec2 path_${r}_tangent(float t, vec2 source, vec2 target) {
  float epsilon = 0.001;
  float t1 = max(0.0, t - epsilon);
  float t2 = min(1.0, t + epsilon);
  vec2 p1 = path_${r}_position(t1, source, target);
  vec2 p2 = path_${r}_position(t2, source, target);
  return normalize(p2 - p1);
}

// Auto-generated normal (perpendicular to tangent)
vec2 path_${r}_normal(float t, vec2 source, vec2 target) {
  vec2 tangent = path_${r}_tangent(t, source, target);
  return vec2(-tangent.y, tangent.x);
}
`}function _d(r){return`
// Auto-generated path length (samples position 16 times)
float path_${r}_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_${r}_position(0.0, source, target);
  for (int i = 1; i <= 16; i++) {
    float t = float(i) / 16.0;
    vec2 curr = path_${r}_position(t, source, target);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}
`}function Ad(r){return`
// Auto-generated closest_t (coarse sample + ternary search)
float path_${r}_closest_t(vec2 p, vec2 source, vec2 target) {
  // Coarse search: find best among 10 samples
  float bestT = 0.0;
  float bestDist = 1e10;
  for (int i = 0; i <= 10; i++) {
    float t = float(i) / 10.0;
    vec2 pos = path_${r}_position(t, source, target);
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
    float d1 = length(p - path_${r}_position(mid1, source, target));
    float d2 = length(p - path_${r}_position(mid2, source, target));
    if (d1 < d2) {
      hi = mid2;
    } else {
      lo = mid1;
    }
  }
  return (lo + hi) * 0.5;
}
`}function Dd(r){return`
// Auto-generated signed distance (via closest_t + normal)
float path_${r}_distance(vec2 p, vec2 source, vec2 target) {
  float closestT = path_${r}_closest_t(p, source, target);
  vec2 closest = path_${r}_position(closestT, source, target);
  vec2 diff = p - closest;
  float dist = length(diff);
  if (dist < 0.0001) return 0.0;

  // Get normal at closest point
  vec2 normal = path_${r}_normal(closestT, source, target);
  return dist * sign(dot(diff, normal));
}
`}function Ld(r){return`
// Auto-generated t_at_distance (binary search)
float path_${r}_t_at_distance(float targetDist, vec2 source, vec2 target) {
  if (targetDist <= 0.0) return 0.0;

  float totalLen = path_${r}_length(source, target);
  if (targetDist >= totalLen) return 1.0;

  // Binary search for t
  float lo = 0.0, hi = 1.0;
  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;

    // Compute arc length from 0 to mid
    float arcLen = 0.0;
    vec2 prev = path_${r}_position(0.0, source, target);
    for (int j = 1; j <= 8; j++) {
      float t = mid * float(j) / 8.0;
      vec2 curr = path_${r}_position(t, source, target);
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
`}function ca(r,t){return new RegExp(`\\b(float|vec[234]|void|int|bool)\\s+${t}\\s*\\(`).test(r)}function ga(r,t){let e=[];return ca(t,`path_${r}_length`)||e.push(_d(r)),ca(t,`path_${r}_closest_t`)||e.push(Ad(r)),ca(t,`path_${r}_distance`)||e.push(Dd(r)),ca(t,`path_${r}_t_at_distance`)||e.push(Ld(r)),e.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
${e.join(`
`)}`:""}function fa(r){let{paths:t,layers:e}=r,a=r.extremities??[];if(t.length===0)throw new Error("At least one path is required in 'paths'");if(e.length===0)throw new Error("At least one layer is required in 'layers'");let i=r.defaultHead??"none",n=r.defaultTail??"none";return{paths:t,extremities:a,layers:e,path:t[0],layer:e[0],defaultHead:i,defaultTail:n}}var{FLOAT:pr,UNSIGNED_BYTE:Po}=WebGL2RenderingContext;function Rd(r,t,e){let a=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"]),i=new Set(a);return r.forEach(n=>n.uniforms.forEach(o=>i.add(o.name))),t.forEach(n=>n.uniforms.forEach(o=>i.add(o.name))),e.forEach(n=>n.uniforms.forEach(o=>i.add(o.name))),Array.from(i)}function Ni(r){let t=new Set,e=[];for(let a of r)t.has(a.name)||(t.add(a.name),e.push(`// Path: ${a.name}`),e.push(a.glsl),e.push(ha(a.name)),e.push(ga(a.name,a.glsl)));return e.join(`

`)}function Pd(r){let t=[];for(let e of r)t.push(`// Extremity: ${e.name}`),t.push(e.glsl);return t.join(`

`)}var Cd=[{queryName:"queryPathPosition",pathFunc:"position",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathTangent",pathFunc:"tangent",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathNormal",pathFunc:"normal",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathLength",pathFunc:"length",returnType:"float",params:"vec2 source, vec2 target",args:"source, target"},{queryName:"queryPathClosestT",pathFunc:"closest_t",returnType:"float",params:"vec2 p, vec2 source, vec2 target",args:"p, source, target"}];function wd(r,t){let{queryName:e,pathFunc:a,returnType:i,params:n,args:o}=t;if(r.length===1)return`${i} ${e}(int pathId, ${n}) {
  return path_${r[0].name}_${a}(${o});
}`;let s=r.map((l,d)=>`    case ${d}: return path_${l.name}_${a}(${o});`).join(`
`);return`${i} ${e}(int pathId, ${n}) {
  switch (pathId) {
${s}
    default: return path_${r[0].name}_${a}(${o});
  }
}`}function Fi(r){return Cd.map(t=>wd(r,t)).join(`

`)}function Gd(r){return r.length===1?`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_${r[0].name}(uv, lengthRatio, widthRatio);
}`:`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
${r.map((e,a)=>`    case ${a}: return extremity_${e.name}(uv, lengthRatio, widthRatio);`).join(`
`)}
    default: return extremity_${r[0].name}(uv, lengthRatio, widthRatio);
  }
}`}function Nd(r){let t=[];for(let e of r)t.push(Lo(e.name)),t.push(Ro(e.name));if(r.length===1)t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_${r[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_${r[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`);else{let e=r.map((i,n)=>`    case ${n}: return findSourceClampT_${i.name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);`).join(`
`),a=r.map((i,n)=>`    case ${n}: return findTargetClampT_${i.name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);`).join(`
`);t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  switch (pathId) {
${e}
    default: return findSourceClampT_${r[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
  }
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  switch (pathId) {
${a}
    default: return findTargetClampT_${r[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
  }
}`)}return t.join(`

`)}function wo(r,t,e,a,i){let n=Z([...r,...e]),o=Je(n),s=Re(a,i),l=Object.keys(s.offsets),d=E=>{let{size:_}=s.specs[E];return _===1?"float":`vec${_}`},c=l.map(E=>`${d(E)} v_source_${E};
${d(E)} v_target_${E};`).join(`
`),f=ve(s,{varPrefix:"srcNodeAttr",baseTexelExpr:"srcIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_source_"}),u=ve(s,{varPrefix:"tgtNodeAttr",baseTexelExpr:"tgtIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_target_"}),g=l.map(E=>`${d(E)} g_${E};`).join(`
`),h=l.map(E=>`  g_${E} = v_source_${E};`).join(`
`),p=l.map(E=>`  g_${E} = v_target_${E};`).join(`
`),b=new Set,x=[],m=E=>{b.has(E.name)||(b.add(E.name),x.push(`uniform ${E.type} ${E.name};`))};r.forEach(E=>E.uniforms.forEach(m)),t.forEach(E=>E.uniforms.forEach(m));let y=t.map(E=>$(E.widthFactor)).join(", "),S=Math.max(...r.map(E=>E.minBodyLengthRatio||0));return`#version 300 es

// Node and edge data textures
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;

// Edge attribute texture (for path-specific attributes like curvature)
${o.uniformDeclarations}

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
${x.join(`
`)}

// Path attribute varyings \u2014 assigned so path functions can read them as globals
${o.vertexVaryingDeclarations}

// Node size varyings \u2014 read by path functions like loop
out float v_sourceNodeSize;
out float v_targetNodeSize;

// Node shape attributes per endpoint, and the ones querySDF reads
${c}
${g}

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${y});

// Node-data fetch helpers (geometry texel + rotation-flags texel)
${te}
${oe}

// Shape SDFs for node boundary clamping
${ui()}
${ci(new Set(l))}

// Path functions
${Ni(r)}
${Fi(r)}
${Nd(r)}

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
${o.fetchCode}
${o.varyingAssignments}

  // Fetch node shape attributes for both endpoints
${f.fetchCode}
${f.varyingAssignments}
${u.fetchCode}
${u.varyingAssignments}

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
  float minBodyLengthRatio = ${$(S)};

  // Thickness in WebGL units (needed to compute clamping margin and extremity lengths)
  float pixelsThickness = max(a_thickness, u_minEdgeThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // SDF clamping: find where the edge body meets the node boundaries. Always
  // searched (ungated) so labels get a true boundary clamp; the body re-applies
  // its extremity gating in-shader.
${h}
  float tStart = queryFindSourceClampT(pathId, a_source, a_sourceSize, int(a_sourceShapeId), a_sourceRotateAlign, a_target, 0.0);
${p}
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
${h}
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
${p}
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
`}var pa=0,Co=1,ma=2;function Fd(r,t,e){let a=[];e&&(a.push([pa,0,-1],[pa,0,1]),a.push([pa,1,-1],[pa,1,1]));for(let i=0;i<=r;i++){let n=i/r;a.push([Co,n,-1],[Co,n,1])}return t&&(a.push([ma,0,-1],[ma,0,1]),a.push([ma,1,-1],[ma,1,1])),{data:a,attributes:[{name:"a_zone",size:1,type:pr},{name:"a_zoneT",size:1,type:pr},{name:"a_side",size:1,type:pr}],verticesPerEdge:a.length}}function Id(r,t,e,a){let i=Z([...r,...e]),n=Je(i),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture"]),s=new Set,l=[],d=b=>{!o.has(b.name)&&!s.has(b.name)&&(s.add(b.name),l.push(`uniform ${b.type} ${b.name};`))};r.forEach(b=>b.uniforms.forEach(d)),t.forEach(b=>b.uniforms.forEach(d)),e.forEach(b=>b.uniforms.forEach(d));let c=a.map(b=>`in ${b.size===1?"float":`vec${b.size}`} ${b.name};`).join(`
`),f=t.map(b=>$(b.widthFactor)).join(", "),u=Math.max(...r.map(b=>b.minBodyLengthRatio||0)),g=e.some(b=>b.needsNodeColors),h=r.some(b=>b.needsNodeSize);return`#version 300 es

// Constant attributes (per vertex)
${c}

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
${n.uniformDeclarations}

// Custom uniforms
${l.join(`
`)}

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
${h?`
out float v_sourceNodeSize;  // Source node size (mirrored in labels/generator.ts as plain float)
out float v_targetNodeSize;  // Target node size (mirrored in labels/generator.ts as plain float)`:""}
${g?`
out vec4 v_sourceColor;
out vec4 v_targetColor;`:""}
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
${n.vertexVaryingDeclarations}

const float bias = 255.0 / 254.0;

// Width factor array for extremities (shared pool for head/tail)
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${f});

// All path functions
${Ni(r)}

// Path selector functions
${Fi(r)}

// Node-data fetch helper (geometry texel of the two-texel node stride)
${te}
${g?jn:""}
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
${fe}

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
${n.fetchCode}

  // Assign path/layer attribute varyings
${n.varyingAssignments}

  // Fetch source and target node geometry (texel 0 of the two-texel node stride)
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
${h?`
  // Assign node size varyings early (path functions like loops need them during clamping)
  v_sourceNodeSize = srcNodeData.z;
  v_targetNodeSize = tgtNodeData.z;`:""}
${g?`
  v_sourceColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  v_targetColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);`:""}

  // Convert thickness to WebGL units
  float minThickness = u_minEdgeThickness;
  float pixelsThickness = max(a_thickness, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Extremity parameters from ID lookups (shared pool)
  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = ${$(u)};

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
`}function kd(r,t,e,a){let i=Z([...r,...e]),n=Je(i),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding"]),s=new Set,l=[],d=x=>{!o.has(x.name)&&!s.has(x.name)&&(s.add(x.name),l.push(`uniform ${x.type} ${x.name};`))};r.forEach(x=>x.uniforms.forEach(d)),t.forEach(x=>x.uniforms.forEach(d)),e.forEach(x=>x.uniforms.forEach(d));let c=t.map(x=>$(x.baseRatio??.5)).join(", "),f=x=>t.length>1?`EXTREMITY_BASE_RATIOS[${x}]`:$(t[0]?.baseRatio??.5),u=t.some(x=>ue(x.length)?!0:x.length>0),g=e.some(x=>x.needsNodeColors),h=r.some(x=>x.needsNodeSize),p=e.map((x,m)=>`  // Layer ${m+1}: ${x.name}
  color = blendOver(color, layer_${x.name}(context));`).join(`

`);return`#version 300 es
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
${h?`
in float v_sourceNodeSize;   // Source node size (mirrored in labels/generator.ts as plain float)
in float v_targetNodeSize;   // Target node size (mirrored in labels/generator.ts as plain float)`:""}
${g?`
in vec4 v_sourceColor;
in vec4 v_targetColor;`:""}
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
${n.fragmentVaryingDeclarations}

// Standard uniforms (needed by some path types)
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Custom uniforms
${l.join(`
`)}

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

${t.length>1?`// Base ratio array for extremities (shared pool for head/tail)
const float EXTREMITY_BASE_RATIOS[${t.length}] = float[](${c});`:""}

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
${Ni(r)}

// Path selector functions
${Fi(r)}

// All extremity functions
${Pd(t)}

// Extremity SDF selector (shared pool for head/tail)
${Gd(t)}

// Layer functions
${e.map(x=>x.glsl).join(`

`)}

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
${r.every(x=>x.linearParameterization)?`  // All paths have linear parameterization: t maps directly to arc distance
  context.distanceFromSource = pathTNorm * visibleLength;
  context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;`:r.every(x=>!x.linearParameterization)?`  // No paths have linear parameterization: use numerical integration
  context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
  context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);`:`  // Mixed parameterization: use analytical for linear paths, numerical for others
  if (${r.filter(x=>x.linearParameterization).map(x=>`v_pathId == ${r.indexOf(x)}`).join(" || ")}) {
    context.distanceFromSource = pathTNorm * visibleLength;
    context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;
  } else {
    context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
    context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);
  }`}

  // Compute SDF based on zone using extremity selector (shared pool)
  float bodySDF = distFromCenter - halfThickness;
  float finalSDF;

${u?`  // Base ratios, from baseRatioLookup
  float headBaseRatio = ${f("v_headId")};
  float tailBaseRatio = ${f("v_tailId")};

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
  }`:`  // No extremity draws tail/head geometry, so every vertex is body zone.
  finalSDF = bodySDF;`}

  #ifdef PICKING_MODE
    // Picking pass: output edge ID for pixels within the picking area
    if (finalSDF > u_pickingPadding * aaWidthWebGL) discard;
    fragColor = v_id;
  #else
${a?`    // Visual pass: anti-aliased edge with layers, edge opacity applied once
    float alpha = smoothstep(aaWidthWebGL, -aaWidthWebGL, finalSDF) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) edge with layers, edge opacity applied once
    float alpha = (finalSDF < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    if (alpha < 0.01) discard;

    // Apply layers sequentially with "over" compositing
    vec4 color = vec4(0.0);

${p}

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function Md(r,t,e){let a=ue(t.length)?!0:t.length>0,i=ue(e.length)?!0:e.length>0;if(r.generateConstantData){let n=r.generateConstantData();return{data:n.data,attributes:n.attributes,verticesPerEdge:n.verticesPerEdge}}return Fd(r.segments,a,i)}function ba(r){let{paths:t,extremities:e,layers:a}=fa(r),i=r.antialias??!0,n=new Map,o=new Map,s=new Map;for(let x of t)for(let m of e)for(let y of e){let S=`${x.name}:${m.name}:${y.name}`,v=Md(x,m,y);n.set(S,v.verticesPerEdge),o.set(S,v.data);for(let E of v.attributes)s.has(E.name)||s.set(E.name,E)}let l=Array.from(s.values()),d={};l.forEach((x,m)=>{d[x.name]=m});let c=0,f="";for(let[x,m]of n)m>c&&(c=m,f=x);let u=o.get(f)||[],[g]=f.split(":"),h=t.find(x=>x.name===g),p=[];h?.generateConstantData?p=h.generateConstantData().attributes:p=[{name:"a_zone"},{name:"a_zoneT"},{name:"a_side"}];let b=u.map(x=>{let m=new Array(l.length).fill(0);return p.forEach((y,S)=>{let v=d[y.name];v!==void 0&&S<x.length&&(m[v]=x[S])}),m});return{vertexShader:Id(t,e,a,l),fragmentShader:kd(t,e,a,i),uniforms:Rd(t,e,a),attributes:zd(t,e,a),verticesPerEdge:c,constantData:b,constantAttributes:l,vertexCountsPerCombination:n,constantDataPerCombination:o}}function zd(r,t,e){return[{name:"a_edgeIndex",size:1,type:pr},{name:"a_color",size:4,type:Po,normalized:!0},{name:"a_id",size:4,type:Po,normalized:!0},{name:"a_opacity",size:1,type:pr}]}var Bd=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,mr=class{constructor(t,e){this.uniformLocations={};let{paths:a,extremities:i,layers:n,nodeShapes:o,nodeLayers:s}=e;this.gl=t,this.hasAttributeData=Z([...a,...n]).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(Re(o,s).offsets).length>0,this.vertexShader=Tt(t,wo(a,i,n,o,s)),this.fragmentShader=_t(t,Bd),this.program=At(t,[this.vertexShader,this.fragmentShader]);let l=new Set;this.customUniforms=[];for(let c of[...a,...i])for(let f of c.uniforms)l.has(f.name)||(l.add(f.name),this.customUniforms.push(f));let d=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_minEdgeThickness","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode","u_frameTextureWidth","u_frameTextureHeight",...this.customUniforms.map(c=>c.name)];for(let c of d)this.uniformLocations[c]=t.getUniformLocation(this.program,c);this.vao=t.createVertexArray()}run(t,e,a,i,n){if(a===0)return;let{gl:o}=this,s=this.uniformLocations;o.useProgram(this.program),o.bindVertexArray(this.vao),s.u_sizeRatio&&o.uniform1f(s.u_sizeRatio,t.sizeRatio),s.u_correctionRatio&&o.uniform1f(s.u_correctionRatio,t.correctionRatio),s.u_cameraAngle&&o.uniform1f(s.u_cameraAngle,t.cameraAngle),s.u_minEdgeThickness&&o.uniform1f(s.u_minEdgeThickness,t.minEdgeThickness),s.u_nodeDataTexture&&o.uniform1i(s.u_nodeDataTexture,t.nodeDataTextureUnit),s.u_nodeDataTextureWidth&&o.uniform1i(s.u_nodeDataTextureWidth,t.nodeDataTextureWidth),s.u_edgeDataTexture&&o.uniform1i(s.u_edgeDataTexture,t.edgeDataTextureUnit),s.u_edgeDataTextureWidth&&o.uniform1i(s.u_edgeDataTextureWidth,t.edgeDataTextureWidth),s.u_frameTextureWidth&&o.uniform1f(s.u_frameTextureWidth,e.getTextureWidth()),s.u_frameTextureHeight&&o.uniform1f(s.u_frameTextureHeight,e.getTextureHeight()),this.hasAttributeData&&i&&(i.bind(me),s.u_edgeAttributeTexture&&o.uniform1i(s.u_edgeAttributeTexture,me),s.u_edgeAttributeTextureWidth&&o.uniform1i(s.u_edgeAttributeTextureWidth,i.getTextureWidth()),s.u_edgeAttributeTexelsPerEdge&&o.uniform1i(s.u_edgeAttributeTexelsPerEdge,i.getTexelsPerItem())),this.hasNodeAttributeData&&n&&(n.bind(pe),s.u_layerAttributeTexture&&o.uniform1i(s.u_layerAttributeTexture,pe),s.u_layerAttributeTextureWidth&&o.uniform1i(s.u_layerAttributeTextureWidth,n.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&o.uniform1i(s.u_layerAttributeTexelsPerNode,n.getTexelsPerItem()));for(let l of this.customUniforms)ur(o,this.uniformLocations[l.name],l);e.bindAsRenderTarget(),o.disable(o.BLEND),o.disable(o.DEPTH_TEST),o.drawArrays(o.POINTS,0,a),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindVertexArray(null)}kill(){let{gl:t}=this;t.deleteProgram(this.program),t.deleteShader(this.vertexShader),t.deleteShader(this.fragmentShader),t.deleteVertexArray(this.vao)}};function Ft(r,t){if(typeof r=="string"){let[a,i,n,o]=eo(r).map(s=>s.toFixed(6));return{glsl:`vec4(${a}, ${i}, ${n}, ${o})`,attributes:[],needsNodeColors:!1}}if("node"in r&&r.node)return{glsl:r.node==="source"?"v_sourceColor":"v_targetColor",attributes:[],needsNodeColors:!0};let e=r;return{glsl:`v_${t}`,attributes:[{name:`a_${t}`,size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:e.attribute,defaultValue:e.default}],needsNodeColors:!1}}function ce(r){let t=r?.color;if(t===void 0)return{name:"plain",glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`,uniforms:[],attributes:[]};let e=Ft(t,"plainColor");return{name:"plain",glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return ${e.glsl};
}
`,uniforms:[],attributes:e.attributes,needsNodeColors:e.needsNodeColors}}function br(r,t,e,a,i,n){if(r.length===1)return`${a} ${t}(int pathId, ${i}) {
  return path_${r[0].name}_${e}(${n});
}`;let o=r.map((s,l)=>`    case ${l}: return path_${s.name}_${e}(${n});`).join(`
`);return`${a} ${t}(int pathId, ${i}) {
  switch (pathId) {
${o}
    default: return path_${r[0].name}_${e}(${n});
  }
}`}var Ud=`
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
`;function $d(r,t){let e=$(r),a=$(t);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < ${e}) return 0.0;
  if (ratio < ${a}) return (ratio - ${e}) / (${a} - ${e});
  return 1.0;
}
`}var Hd=`
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
`;function xa(r){let{paths:t,minVisibilityThreshold:e,fullVisibilityThreshold:a}=r,i=t.some(s=>s.hasSharpCorners),n=t.map(s=>`// --- Path: ${s.name} ---
${s.glsl}

// Tangent/normal functions: analytical if provided, otherwise numerical
${s.analyticalTangentGlsl||ha(s.name)}

// Auto-generated fallbacks for any missing path functions
${ga(s.name,s.glsl)}

// Corner skip helpers (for paths with sharp corners like step/taxi)
${s.cornerSkipGlsl||""}
`).join(`
`),o=i?`// Corner function selectors (only some paths have sharp corners)
vec2 queryGetCornerTs(int pathId, vec2 source, vec2 target) {
  switch (pathId) {
${t.map((s,l)=>s.hasSharpCorners?`    case ${l}: return path_${s.name}_getCornerTs(source, target);`:`    case ${l}: return vec2(-1.0, -1.0); // No corners for ${s.name}`).join(`
`)}
    default: return vec2(-1.0, -1.0);
  }
}

vec2 queryGetCornerConcavity(int pathId, vec2 source, vec2 target, float perpOffset) {
  switch (pathId) {
${t.map((s,l)=>s.hasSharpCorners?`    case ${l}: return path_${s.name}_getCornerConcavity(source, target, perpOffset);`:`    case ${l}: return vec2(0.0, 0.0); // No corners for ${s.name}`).join(`
`)}
    default: return vec2(0.0, 0.0);
  }
}`:"";return`
// ============================================================================
// Node data fetch (geometry texel) and per-edge clamp fetch (edge-frame texture)
// ============================================================================

${te}
${fe}

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

${n}

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

${br(t,"queryPathPosition","position","vec2","float t, vec2 source, vec2 target","t, source, target")}

${br(t,"queryPathTangent","tangent","vec2","float t, vec2 source, vec2 target","t, source, target")}

${br(t,"queryPathNormal","normal","vec2","float t, vec2 source, vec2 target","t, source, target")}

${br(t,"queryPathLength","length","float","vec2 source, vec2 target","source, target")}

${br(t,"queryPathTAtDistance","t_at_distance","float","float dist, vec2 source, vec2 target","dist, source, target")}

${o}

// ============================================================================
// Shared helpers (body bounds, alpha ramp, perpendicular offset)
// ============================================================================

${Ud}
${$d(e,a)}
${Hd}
`}var Vd=ae.fontSize,Xd=new Map,No=24,Go=(No+1)*2;function qd(r){let{paths:t,fontSizeMode:e,headLengthRatio:a,tailLengthRatio:i,minVisibilityThreshold:n,fullVisibilityThreshold:o}=r,s=e==="scaled",l=ce(),d=Z([...t,l]),c=Je(d);return`#version 300 es

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
${s?"uniform float u_zoomSizeRatio;":""}

${c.uniformDeclarations}

out vec4 v_color;
out vec4 v_id;
out float v_alphaModifier;

const float ATLAS_FONT_SIZE = ${$(Vd)};
const float HEAD_RATIO = ${$(a)};
const float TAIL_RATIO = ${$(i)};
const int RIBBON_SEGMENTS = ${No};

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
${c.vertexVaryingDeclarations.replace(/out /g,"")}

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${xa({paths:t,minVisibilityThreshold:n,fullVisibilityThreshold:o})}

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
${c.fetchCode}
${c.varyingAssignments}
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
  ${s?`float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  float textWidthWebGL = a_totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float marginWebGL = a_margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  float textWidthWebGL = a_totalTextWidth * fontScale * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;
  float marginWebGL = a_margin * pixelToGraph;`}
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
`}var jd=`#version 300 es
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
`;function Ii(r,t,e,a){let{shaderConfig:i}=a,{paths:n,fontSizeMode:o}=i;if(n.length===0)throw new Error("createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path");let s=ce(),l=Z([...n,s]),d=Ye([...n,s],l),c=qd(i);class f extends re{constructor(h,p,b){super(h,p,b);this.totalCount=0;this.bufferCapacity=0;this.edgeAttributeTexture=null;this.edgeAttributeTexture=new Le(h,l),this.packedAttributeData=new Float32Array(l.floatsPerItem)}getDefinition(){let{FLOAT:h,UNSIGNED_BYTE:p,TRIANGLE_STRIP:b}=WebGL2RenderingContext,x=[];for(let y=0;y<Go;y++)x.push([y]);let m=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_resolution","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth"];return o==="scaled"&&m.push("u_zoomSizeRatio"),l.floatsPerItem>0&&m.push("u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"),{VERTICES:Go,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:jd,METHOD:b,UNIFORMS:m,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:h},{name:"a_edgeAttrIndex",size:1,type:h},{name:"a_baseFontSize",size:1,type:h},{name:"a_totalTextWidth",size:1,type:h},{name:"a_positionMode",size:1,type:h},{name:"a_margin",size:1,type:h},{name:"a_padding",size:1,type:h},{name:"a_color",size:4,type:p,normalized:!0},{name:"a_id",size:4,type:p,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_vertexIndex",size:1,type:h}],CONSTANT_DATA:x}}processEdgeLabelBackground(h,p,b){let x=0;if(this.edgeAttributeTexture&&l.floatsPerItem>0){x=this.edgeAttributeTexture.allocate(p);let v=this.packedAttributeData;Ze(d,b.edgeAttributes,v,"",Xd,0),this.edgeAttributeTexture.updateAllAttributes(p,v)}let{floats:m,ints:y}=this,S=h*this.STRIDE;m[S++]=b.edgeIndex,m[S++]=x,m[S++]=b.baseFontSize,m[S++]=b.totalTextWidth,m[S++]=b.positionMode,m[S++]=b.margin,m[S++]=b.padding,m[S++]=b.color,y[S++]=b.id}setUniforms(h,{gl:p,uniformLocations:b}){if(p.uniformMatrix3fv(b.u_matrix,!1,h.matrix),p.uniform1f(b.u_sizeRatio,h.sizeRatio),p.uniform1f(b.u_correctionRatio,h.correctionRatio),p.uniform1f(b.u_pixelRatio,h.pixelRatio),p.uniform1f(b.u_cameraAngle,h.cameraAngle),p.uniform2f(b.u_resolution,h.width,h.height),b.u_nodeDataTexture!==void 0&&p.uniform1i(b.u_nodeDataTexture,h.nodeDataTextureUnit),b.u_nodeDataTextureWidth!==void 0&&p.uniform1i(b.u_nodeDataTextureWidth,h.nodeDataTextureWidth),b.u_edgeDataTexture!==void 0&&p.uniform1i(b.u_edgeDataTexture,h.edgeDataTextureUnit),b.u_edgeDataTextureWidth!==void 0&&p.uniform1i(b.u_edgeDataTextureWidth,h.edgeDataTextureWidth),b.u_edgeFrameTexture!==void 0&&p.uniform1i(b.u_edgeFrameTexture,h.edgeFrameTextureUnit),b.u_edgeFrameTextureWidth!==void 0&&p.uniform1i(b.u_edgeFrameTextureWidth,h.edgeFrameTextureWidth),o==="scaled"&&b.u_zoomSizeRatio!==void 0){let x=this.renderer.getSetting("zoomToSizeRatioFunction");p.uniform1f(b.u_zoomSizeRatio,1/x(h.zoomRatio))}this.edgeAttributeTexture&&l.floatsPerItem>0&&b.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(me),p.uniform1i(b.u_edgeAttributeTexture,me),p.uniform1i(b.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),p.uniform1i(b.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}renderProgram(h,p){this.edgeAttributeTexture&&l.floatsPerItem>0&&this.edgeAttributeTexture.upload(),super.renderProgram(h,p)}kill(){this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),super.kill()}drawWebGL(h,{gl:p}){this.totalCount!==0&&p.drawArraysInstanced(p.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}reallocate(h){this.totalCount=h,h>this.bufferCapacity&&(this.bufferCapacity=Math.max(h,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}}return new f(r,t,e)}function ya(r){return{paths:r.paths,headLengthRatio:r.headLengthRatio??0,tailLengthRatio:r.tailLengthRatio??0,fontSizeMode:r.fontSizeMode??"fixed",minVisibilityThreshold:r.minVisibilityThreshold??.7,fullVisibilityThreshold:r.fullVisibilityThreshold??.8}}var Kd=ae.fontSize,Yd=17/64;function Zd(r){let{paths:t,hasBorder:e=!1,fontSizeMode:a="fixed",minVisibilityThreshold:i=.5,fullVisibilityThreshold:n=.6}=r,o=a==="scaled",s=t.some(u=>u.hasSharpCorners),l=ce(),d=Z([...t,l]),c=Je(d);return`#version 300 es

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
${e?"in vec4 a_borderColor;      // Border color (RGBA, normalized)":""}

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
${o?"uniform float u_zoomSizeRatio;  // Zoom-based size ratio from zoomToSizeRatioFunction":""}

// Edge path attribute texture uniforms (for curvature and other path attributes)
${c.uniformDeclarations}

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
${e?"out vec4 v_borderColor;":""}
out float v_edgeFade;  // 0 = fully visible, 1 = fully faded (outside body)
out float v_alphaModifier;  // 0-1 based on label visibility ratio
out float v_fontScale;  // Ratio of rendered font size to atlas font size
${e?"out float v_positionMode;  // Position mode for conditional border (0=over needs border)":""}

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float FADE_WIDTH_PIXELS = 15.0;  // Width of fade gradient in pixels
const float ATLAS_FONT_SIZE = ${$(Kd)};  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = ${$(Yd)};  // Baseline to visual center ratio

// ============================================================================
// Path Attribute Variables (set in main, used by path functions)
// ============================================================================
// Path attributes are fetched from the edge attribute texture and stored in
// variables with v_ prefix (e.g., v_curvature) for path functions to access.
${c.vertexVaryingDeclarations.replace(/out /g,"")}

// Node size variables (set in main, used by some path functions like loops).
// These mirror the v_sourceNodeSize / v_targetNodeSize varyings in generator.ts,
// but are plain floats here since the label shader is vertex-only.
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${xa({paths:t,minVisibilityThreshold:i,fullVisibilityThreshold:n})}

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
${c.fetchCode}
${c.varyingAssignments}
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
  ${o?`// Scaled mode: font scales with zoom
  float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  // Convert glyph-unit metrics to WebGL units (scales with zoom)
  float textWidthWebGL = totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float charOffsetWebGL = charTextOffset * fontScale * u_correctionRatio / u_sizeRatio;
  float charAdvanceWebGL = charAdvance * fontScale * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: font stays constant in screen pixels
  float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  // Convert glyph-unit metrics to graph units using pixelToGraph (zoom-independent)
  float textWidthWebGL = totalTextWidth * fontScale * pixelToGraph;
  float charOffsetWebGL = charTextOffset * fontScale * pixelToGraph;
  float charAdvanceWebGL = charAdvance * fontScale * pixelToGraph;`}

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
  ${o?`// Scaled mode: margin and text height scale with zoom (same factor as font)
  float marginWebGL = margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: margin and text height stay constant in screen pixels
  float marginWebGL = margin * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;`}
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

    ${s?`// -----------------------------------------------------------------------
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
    ${o?"float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;":"float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * pixelToGraph;"}

    // Corner t values for detecting crossings during traversal
    float corner1T = cornerTs.x;
    float corner2T = cornerTs.y;
    bool corner1IsConcave = concavity.x > 0.5;
    bool corner2IsConcave = concavity.y > 0.5;`:""}

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

      ${s?`// Track which concave corners we've crossed to add skip distance
      bool crossedCorner1 = false;
      bool crossedCorner2 = false;
      float effectiveTargetDist = targetOffsetDist;`:""}

      const int STEPS = 32;
      for (int i = 1; i <= STEPS; i++) {
        // Step along centerline t, from center toward target
        float stepT = centerT + searchDir * float(i) * abs(tSearchEnd - centerT) / float(STEPS);

        ${s?`// Check for concave corner crossings and add skip distance
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
        }`:""}

        // Compute offset position at this t
        vec2 stepPos = queryPathPosition(pathId, stepT, source, target);
        vec2 stepNormal = queryPathNormal(pathId, stepT, source, target);
        vec2 offsetPos = stepPos + stepNormal * perpOffset;

        // Distance along offset path
        float segDist = length(offsetPos - prevOffsetPos);

        ${s?`if (accumDist + segDist >= effectiveTargetDist) {
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
        }`}

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
  ${o?"vec2 quadPosWebGL = quadPos * u_correctionRatio / u_sizeRatio; // Scaled mode":"vec2 quadPosWebGL = quadPos * pixelToGraph; // Fixed mode: use pixelToGraph for zoom-independent size"}

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
${e?`  v_borderColor = a_borderColor;
  v_borderColor.a *= bias;
  v_positionMode = positionMode;`:""}
  v_alphaModifier = alphaModifier;

  // -------------------------------------------------------------------------
  // Step 13: Compute edge fade for soft truncation
  // -------------------------------------------------------------------------
  // Convert fade width from pixels to WebGL units
  ${o?"float fadeWidthWebGL = FADE_WIDTH_PIXELS * u_correctionRatio / u_sizeRatio;":"float fadeWidthWebGL = FADE_WIDTH_PIXELS * pixelToGraph;"}

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
`}function Qd(r={}){let{hasBorder:t=!1}=r;return`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
${t?"in vec4 v_borderColor;":""}
in float v_edgeFade;  // 0 = fully visible, 1 = fully faded
in float v_alphaModifier;  // 0-1 based on label visibility ratio
in float v_fontScale;  // Ratio of rendered font size to atlas font size
${t?"in float v_positionMode;  // Position mode (0=over, 1=above, 2=below, 3=auto)":""}

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;
${t?"uniform float u_borderWidth;  // Border width in SDF units (normalized)":""}

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

${t?`  // Fill alpha: fully opaque inside the glyph
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
  fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);`}
  #endif
}
`}function Jd(r,t=!1,e="fixed"){let a=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_sdfBufferPixels","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"];e==="scaled"&&a.push("u_zoomSizeRatio"),t&&a.push("u_borderWidth");for(let i of r)for(let n of i.uniforms)a.includes(n.name)||a.push(n.name);return a}function ki(r){let{hasBorder:t=!1,fontSizeMode:e="fixed"}=r;return{vertexShader:Zd(r),fragmentShader:Qd({hasBorder:t}),uniforms:Jd(r.paths,t,e)}}var eu=new Map;function tu(r){switch(r){case"over":return 0;case"above":return 1;case"below":return 2;case"auto":return 3;default:return 0}}function Mi(r,t,e,a){let{color:i,margin:n,textBorder:o}=a,s=ya(a),{paths:l,fontSizeMode:d,minVisibilityThreshold:c,fullVisibilityThreshold:f}=s,u=!!o,g=ki({paths:l,hasBorder:u,fontSizeMode:d,minVisibilityThreshold:c,fullVisibilityThreshold:f}),p=class p extends Qe{constructor(m,y,S){super(m,y,S);this.atlasTexture=null;this.atlasNeedsUpdate=!1;this.labelGlyphCache=new Map;this.edgeAttributeTexture=null;let v=ce();if(this.attributeLayout=Z([...l,v]),this.attrDescriptors=Ye([...l,v],this.attributeLayout),this.edgeAttributeTexture=new Le(m,this.attributeLayout),this.packedAttributeData=new Float32Array(this.attributeLayout.floatsPerItem),this.atlasManager=new Ee,this.gamma=.025,this.sdfBuffer=ae.cutoff,this.atlasTexture=m.createTexture(),!this.atlasTexture)throw new Error("EdgeLabelProgram: failed to create atlas texture");m.bindTexture(m.TEXTURE_2D,this.atlasTexture),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.LINEAR),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.LINEAR),m.bindTexture(m.TEXTURE_2D,null),this.atlasManager.on(Ee.ATLAS_UPDATED_EVENT,()=>{this.atlasNeedsUpdate=!0,setTimeout(()=>this.renderer.refresh(),0)});let E={family:"sans-serif",weight:"normal",style:"normal"};this.defaultFontKey=this.atlasManager.registerFont(E)}getDefinition(){let{FLOAT:m,UNSIGNED_BYTE:y,TRIANGLE_STRIP:S}=WebGL2RenderingContext,v=new Set,E=[];for(let _ of l)for(let A of _.attributes){let L=A.name.startsWith("a_")?A.name:`a_${A.name}`;v.has(L)||(v.add(L),E.push({name:L,size:A.size,type:A.type}))}return{VERTICES:4,VERTEX_SHADER_SOURCE:g.vertexShader,FRAGMENT_SHADER_SOURCE:g.fragmentShader,METHOD:S,UNIFORMS:g.uniforms,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:m},{name:"a_edgeAttrIndex",size:1,type:m},{name:"a_baseFontSize",size:1,type:m},{name:"a_charMetrics",size:4,type:m},{name:"a_charDims",size:4,type:m},{name:"a_texCoords",size:4,type:m},{name:"a_labelParams",size:2,type:m},{name:"a_color",size:4,type:y,normalized:!0},...u?[{name:"a_borderColor",size:4,type:y,normalized:!0}]:[],...E.filter(_=>!["a_curvature","curvature"].includes(_.name))],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:m}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}prepareLabelGlyphs(m,y){if(y.hidden||!y.text){this.labelGlyphCache.delete(m);return}let S=y.text,v=y.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(S,v);let E=[],_=[],A=0;for(let L of S){let T=L.codePointAt(0);if(T===void 0){E.push(void 0),_.push(A);continue}let N=this.atlasManager.getGlyph(T,v);E.push(N),_.push(A),N&&(A+=N.advance)}this.labelGlyphCache.set(m,{glyphs:E,xOffsets:_,totalWidth:A})}processCharacter(m,y,S,v){let{floats:E}=this,_=this.STRIDE,A=m*_,L=this.labelGlyphCache.get(y.parentKey);if(!L||!L.glyphs[v]){for(let k=0;k<_;k++)E[A+k]=0;return}let T=L.glyphs[v],N=L.xOffsets[v],R=p.labelColor,w=R&&typeof R=="object"&&"color"in R&&R.color?R.color:y.color,G=se(w),D=A;E[D++]=y.edgeIndex,E[D++]=this.edgeAttributeTexture?.getIndex(y.parentKey)??0,E[D++]=y.size,E[D++]=N,E[D++]=T.advance,E[D++]=L.totalWidth,E[D++]=tu(y.position),E[D++]=T.atlasWidth,E[D++]=T.atlasHeight,E[D++]=T.bearingX,E[D++]=-T.bearingY,E[D++]=T.atlasX,E[D++]=T.atlasY,E[D++]=T.atlasWidth,E[D++]=T.atlasHeight;let z=p.labelMargin??y.margin;if(E[D++]=z,E[D++]=0,E[D++]=G,u&&o){let k;typeof o.color=="string"?k=o.color:k=o.color.color||"#ffffff",E[D++]=se(k)}let O=new Set;for(let k of l)for(let U of k.attributes){let K=U.name.startsWith("a_")?U.name.slice(2):U.name;if(K!=="curvature"&&!O.has(K)){O.add(K);for(let ee=0;ee<U.size;ee++)E[D++]=0}}}processEdgeLabel(m,y,S){if(this.prepareLabelGlyphs(m,S),this.edgeAttributeTexture&&!S.hidden&&S.text){this.edgeAttributeTexture.allocate(m);let v=this.packedAttributeData;Ze(this.attrDescriptors,S.edgeAttributes,v,"",eu,0),this.edgeAttributeTexture.updateAllAttributes(m,v)}return super.processLabel(m,y,S)}updateAtlasTexture(){if(!this.atlasNeedsUpdate)return;let m=this.normalProgram.gl,y=this.atlasManager.getTextures();if(y.length===0)return;let S=y[0];m.bindTexture(m.TEXTURE_2D,this.atlasTexture),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,S.width,S.height,0,m.RGBA,m.UNSIGNED_BYTE,S.data),m.bindTexture(m.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}setUniforms(m,y){let{gl:S,uniformLocations:v}=y,E=this.atlasManager.getTextures(),_=E.length>0?[E[0].width,E[0].height]:[1,1];if(S.uniformMatrix3fv(v.u_matrix,!1,m.matrix),S.uniform1f(v.u_sizeRatio,m.sizeRatio),S.uniform1f(v.u_correctionRatio,m.correctionRatio),S.uniform1f(v.u_pixelRatio,m.pixelRatio),S.uniform1f(v.u_cameraAngle,m.cameraAngle),S.uniform1f(v.u_sdfBufferPixels,ae.buffer),S.uniform2f(v.u_resolution,m.width,m.height),S.uniform2f(v.u_atlasSize,_[0],_[1]),S.uniform1f(v.u_gamma,this.gamma),S.uniform1f(v.u_sdfBuffer,this.sdfBuffer),S.activeTexture(S.TEXTURE0),S.bindTexture(S.TEXTURE_2D,this.atlasTexture),S.uniform1i(v.u_atlas,0),v.u_nodeDataTexture!==void 0&&S.uniform1i(v.u_nodeDataTexture,m.nodeDataTextureUnit),v.u_nodeDataTextureWidth!==void 0&&S.uniform1i(v.u_nodeDataTextureWidth,m.nodeDataTextureWidth),v.u_edgeDataTexture!==void 0&&S.uniform1i(v.u_edgeDataTexture,m.edgeDataTextureUnit),v.u_edgeDataTextureWidth!==void 0&&S.uniform1i(v.u_edgeDataTextureWidth,m.edgeDataTextureWidth),v.u_edgeFrameTexture!==void 0&&S.uniform1i(v.u_edgeFrameTexture,m.edgeFrameTextureUnit),v.u_edgeFrameTextureWidth!==void 0&&S.uniform1i(v.u_edgeFrameTextureWidth,m.edgeFrameTextureWidth),u&&o&&v.u_borderWidth!==void 0){let A=o.width/ae.buffer*this.sdfBuffer;S.uniform1f(v.u_borderWidth,A)}if(this.edgeAttributeTexture&&v.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(me),S.uniform1i(v.u_edgeAttributeTexture,me),S.uniform1i(v.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),S.uniform1i(v.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),d==="scaled"&&v.u_zoomSizeRatio!==void 0){let L=1/this.renderer.getSetting("zoomToSizeRatioFunction")(m.zoomRatio);S.uniform1f(v.u_zoomSizeRatio,L)}}renderProgram(m,y){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),super.renderProgram(m,y)}registerFont(m,y="normal",S="normal"){return this.atlasManager.registerFont({family:m,weight:y,style:S})}getAtlasManager(){return this.atlasManager}ensureGlyphsReady(m,y){let S=y||this.defaultFontKey;for(let v of m)this.atlasManager.ensureGlyphs(v,S);this.atlasManager.flush()}measureLabelAtlasWidth(m,y){let S=y||this.defaultFontKey;this.atlasManager.ensureGlyphs(m,S),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();let v=0;for(let E of m){let _=E.codePointAt(0);if(_===void 0)continue;let A=this.atlasManager.getGlyph(_,S);A&&(v+=A.advance)}return v}measureLabel(m,y,S){let v=this.measureLabelAtlasWidth(m,S),E=y/ae.fontSize;return{width:v*E,height:y,textHeight:y}}kill(){let m=this.normalProgram.gl;this.atlasTexture&&(m.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),super.kill()}};p.labelColor=i,p.labelMargin=n;let h=p;return new h(r,t,e)}function ru(){return{name:"none",glsl:`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function zi(r,t,e,a,i,n,o){let s=fa(a),{paths:l,layers:d,defaultHead:c,defaultTail:f}=s,u=[ru(),...s.extremities],g={},h={};l.forEach((N,R)=>g[N.name]=R),u.forEach((N,R)=>h[N.name]=R);let p=h[c]??0,b=h[f]??0,x=null,m=Z([...l,...d]),y=class extends re{constructor(R,w,G){x||(x=ba({paths:l,extremities:u,layers:d,antialias:i}));super(R,w,G);this.layerLifecycles=new Map;this.needsShaderRegeneration=!1;this.edgeAttributeTexture=null;this.layout=m;this.attrDescriptors=[];this.lifecycleIndexOffset=l.length;this._pickingBuffer=w,this.edgeAttributeTexture=new Le(R,this.layout),this.packedAttributeData=new Float32Array(this.layout.floatsPerItem),d.forEach((z,O)=>{if(z.lifecycle){let k={gl:R,renderer:{refresh:()=>G.refresh()},getUniformLocation:U=>R.getUniformLocation(this.normalProgram.program,U),requestShaderRegeneration:()=>{this.needsShaderRegeneration=!0},requestRefresh:()=>{G.refresh()}};this.layerLifecycles.set(O,z.lifecycle(k))}}),this.layerLifecycles.forEach(z=>z.init?.());let D=new Map;this.layerLifecycles.forEach((z,O)=>{z.getAttributeData&&D.set(l.length+O,z)}),this.attrDescriptors=Ye([...l,...d],this.layout,D)}getAttributeTexture(){return this.edgeAttributeTexture}resolveEdgeIds(R,w,G){let D=R,z=0,O=p,k=b,U=w?D.selfLoopPath:G&&D.parallelPath?D.parallelPath:D.path;U&&g[U]!==void 0&&(z=g[U]),D.head&&D.head!=="none"&&h[D.head]!==void 0&&(O=h[D.head]),D.tail&&D.tail!=="none"&&h[D.tail]!==void 0&&(k=h[D.tail]);let K=u[O],ee=u[k];return{pathId:z,headId:O,tailId:k,headLengthRatio:ue(K.length)?0:K.length,tailLengthRatio:ue(ee.length)?0:ee.length}}getDefinition(){let{TRIANGLE_STRIP:R}=WebGL2RenderingContext,w=R,G=x;return{VERTICES:G.verticesPerEdge,VERTEX_SHADER_SOURCE:G.vertexShader,FRAGMENT_SHADER_SOURCE:G.fragmentShader,METHOD:w,UNIFORMS:G.uniforms,ATTRIBUTES:G.attributes,CONSTANT_ATTRIBUTES:G.constantAttributes,CONSTANT_DATA:G.constantData}}maybeRegenerateShaders(){if(!this.needsShaderRegeneration)return;this.needsShaderRegeneration=!1;let R=d.map((k,U)=>{let K=this.layerLifecycles.get(U);return K?.regenerate?K.regenerate():k});x=ba({paths:l,extremities:u,layers:R,antialias:this.renderer.getSetting("antialiasEdges")});let w=this.normalProgram.gl,{program:G,buffer:D,vertexShader:z,fragmentShader:O}=this.normalProgram;w.deleteProgram(G),w.deleteBuffer(D),w.deleteShader(z),w.deleteShader(O),this.normalProgram=this.getProgramInfo("normal",w,x.vertexShader,x.fragmentShader,this._pickingBuffer)}process(R,w,G,D,z,O){let k=w*this.STRIDE;if(z.visibility==="hidden"||G.visibility==="hidden"||D.visibility==="hidden"){for(let U=k+this.STRIDE;k<U;k++)this.floats[k]=0;this.floats[w*this.STRIDE]=ta;return}this.processVisibleItem(dt(R),k,G,D,z,O)}processVisibleItem(R,w,G,D,z,O){let{floats:k,ints:U}=this;k[w++]=O,k[w++]=se(z.color),U[w++]=R,k[w++]=z.opacity??1;let K=this.packedAttributeData;Ze(this.attrDescriptors,z,K,z.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(O,K)}setUniforms(R,w){let{gl:G,uniformLocations:D}=w;D.u_matrix&&G.uniformMatrix3fv(D.u_matrix,!1,R.matrix),D.u_sizeRatio&&G.uniform1f(D.u_sizeRatio,R.sizeRatio),D.u_correctionRatio&&G.uniform1f(D.u_correctionRatio,R.correctionRatio),D.u_zoomRatio&&G.uniform1f(D.u_zoomRatio,R.zoomRatio),D.u_pixelRatio&&G.uniform1f(D.u_pixelRatio,R.pixelRatio),D.u_cameraAngle&&G.uniform1f(D.u_cameraAngle,R.cameraAngle),D.u_feather&&G.uniform1f(D.u_feather,R.antiAliasingFeather),D.u_minEdgeThickness&&G.uniform1f(D.u_minEdgeThickness,R.minEdgeThickness),D.u_pickingPadding&&G.uniform1f(D.u_pickingPadding,R.edgePickingPadding),D.u_nodeDataTexture&&G.uniform1i(D.u_nodeDataTexture,R.nodeDataTextureUnit),D.u_nodeDataTextureWidth&&G.uniform1i(D.u_nodeDataTextureWidth,R.nodeDataTextureWidth),D.u_edgeDataTexture&&G.uniform1i(D.u_edgeDataTexture,R.edgeDataTextureUnit),D.u_edgeDataTextureWidth&&G.uniform1i(D.u_edgeDataTextureWidth,R.edgeDataTextureWidth),D.u_edgeFrameTexture&&G.uniform1i(D.u_edgeFrameTexture,R.edgeFrameTextureUnit),D.u_edgeFrameTextureWidth&&G.uniform1i(D.u_edgeFrameTextureWidth,R.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(me),D.u_edgeAttributeTexture&&G.uniform1i(D.u_edgeAttributeTexture,me),D.u_edgeAttributeTextureWidth&&G.uniform1i(D.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),D.u_edgeAttributeTexelsPerEdge&&G.uniform1i(D.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));let z=new Set;l.forEach(O=>{O.uniforms.forEach(k=>{z.has(k.name)||(z.add(k.name),this.setTypedUniform(k,w))})}),u.forEach(O=>{O.uniforms.forEach(k=>{z.has(k.name)||(z.add(k.name),this.setTypedUniform(k,w))})}),d.forEach(O=>{O.uniforms.forEach(k=>{z.has(k.name)||(z.add(k.name),this.setTypedUniform(k,w))})})}render(R,w,G){this.maybeRegenerateShaders(),super.render(R,w,G)}renderProgram(R,w){this.layerLifecycles.forEach(G=>G.beforeRender?.()),super.renderProgram(R,w)}uploadAttributeTexture(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}kill(){this.layerLifecycles.forEach(R=>R.kill?.()),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),super.kill()}},S=u[p],v=u[b],E={paths:l,headLengthRatio:ue(S.length)?0:S.length,tailLengthRatio:ue(v.length)?0:v.length,...a.label},_=ya(E),A=Mi(r,null,e,E),L=Ii(r,t,e,{shaderConfig:_}),T=new mr(r,{paths:l,extremities:u,layers:d,nodeShapes:n,nodeLayers:o});return{edgeProgram:new y(r,null,e),labelProgram:A,labelBackgroundProgram:L,framePass:T}}function It(){return{name:"straight",segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:`
// Position at parameter t \u2208 [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`,uniforms:[],attributes:[]}}function Sa(r){let{segments:t=16}=r??{};return{name:"curved",segments:t,glsl:`
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
`,uniforms:[],attributes:[{name:"curvature",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{curvature:{type:"number",default:0}},spread:{variable:"curvature",compute:(a,i,n)=>(a-(i-1)/2)*n}}}function va(r){let{segments:t=32}=r??{};return{name:"loop",segments:t,glsl:`
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
`,needsNodeSize:!0,uniforms:[],attributes:[{name:"loopRadius",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopAngle",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopSpread",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopFixedOrientation",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:"number",default:4},loopAngle:{type:"number",default:Math.PI/4},loopSpread:{type:"number",default:80*Math.PI/180},loopFixedOrientation:{type:"number",default:0}},spread:{variable:"loopRadius",compute:a=>a+4}}}function Ea(r){let{lengthRatio:t=5,widthRatio:e=4,margin:a=0}=r??{};return{name:"arrow",glsl:`
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
`,length:t,widthFactor:e,margin:a,uniforms:[],attributes:[]}}var kt=class{constructor(t){this.buckets=new Map;this.keyDepth=new Map;for(let e of t)this.buckets.set(e,new Set)}has(t){return this.keyDepth.has(t)}getBucket(t){return this.buckets.get(t)}set(t,e){let a=this.keyDepth.get(t);if(a===e)return;let i=this.buckets.get(e);if(!i)throw new Error(`Sigma: "${e}" is not a declared depth layer`);a!==void 0&&this.buckets.get(a)?.delete(t),i.add(t),this.keyDepth.set(t,e)}remove(t){let e=this.keyDepth.get(t);e!==void 0&&(this.buckets.get(e).delete(t),this.keyDepth.delete(t))}clearAll(){for(let t of this.buckets.values())t.clear();this.keyDepth.clear()}getSorted(t,e){let a=this.buckets.get(t);return!a||a.size===0?[]:[...a].sort((i,n)=>e(i)-e(n))}};var xr=class extends Ke{constructor(t,e){super(t,2,e)}updateNode(t,e,a,i,n,o,s,l){let d=this.indexMap.get(t);if(d===void 0)throw new Error(`Node "${t}" not allocated in NodeDataTexture`);let[c,f,u,g]=je(l),h=d*2*4;this.data[h]=e,this.data[h+1]=a,this.data[h+2]=i,this.data[h+3]=n,this.data[h+4]=o,this.data[h+5]=s,this.data[h+6]=c*65536+f*256+u,this.data[h+7]=g/255,this.markDirty(d)}};var Mt=class{constructor(t,e){this.texture=null;this.framebuffer=null;if(!t.getExtension("EXT_color_buffer_float"))throw new Error("sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.");this.gl=t,this.channels=e.channels,this.capacity=this.roundUpToPowerOfTwo(e.initialCapacity??1024);let a=this.computeDimensions(this.capacity);this.textureWidth=a.width,this.textureHeight=a.height,this.create()}roundUpToPowerOfTwo(t){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,t))))}computeDimensions(t){let e=Math.min(t,4096),a=Math.ceil(t/e);return{width:e,height:a}}create(){let{gl:t}=this,e=this.channels===1?t.R32F:t.RGBA32F,a=this.channels===1?t.RED:t.RGBA;if(this.texture=t.createTexture(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,e,this.textureWidth,this.textureHeight,0,a,t.FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.framebuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)throw new Error("sigma: float framebuffer for frame-pass placement is incomplete.");t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null)}ensureCapacity(t){if(t<=this.capacity)return;let{gl:e}=this;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(t*1.5));let a=this.computeDimensions(this.capacity);this.textureWidth=a.width,this.textureHeight=a.height,this.texture&&e.deleteTexture(this.texture),this.framebuffer&&e.deleteFramebuffer(this.framebuffer),this.create()}bindAsRenderTarget(){let{gl:t}=this;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),t.viewport(0,0,this.textureWidth,this.textureHeight)}bind(t){let{gl:e}=this;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)}getTexture(){return this.texture}getTextureWidth(){return this.textureWidth}getTextureHeight(){return this.textureHeight}restore(){this.gl.getExtension("EXT_color_buffer_float"),this.create()}kill(){let{gl:t}=this;this.texture&&(t.deleteTexture(this.texture),this.texture=null),this.framebuffer&&(t.deleteFramebuffer(this.framebuffer),this.framebuffer=null)}};var yr=class extends Ke{constructor(t,e){super(t,2,e)}updateEdge(t,e,a,i,n,o,s=0,l=0,d=0){let c=this.indexMap.get(t);if(c===void 0)throw new Error(`Edge "${t}" not allocated in EdgeDataTexture`);let f=c*this.TEXELS_PER_ITEM*4;this.data[f+0]=e,this.data[f+1]=a,this.data[f+2]=i,this.data[f+3]=0,this.data[f+4]=n,this.data[f+5]=o,this.data[f+6]=s,this.data[f+7]=(l&15)<<4|d&15,this.markDirty(c)}};function Fo(r){return typeof r=="object"&&"glsl"in r&&!("attributes"in r)}function Io(r){return typeof r=="object"&&"glsl"in r&&!("attributes"in r)}var Sr={shapes:[Gt()],variables:{},layers:[Nt()],label:{},backdrop:{},labelAttachments:{}},zt={paths:[It(),va()],extremities:[],variables:{},layers:[ce()],defaultHead:"none",defaultTail:"none",label:{}},vr=["nodes","topNodes"],Er=["edges","topEdges"],Tr=[...Er,...vr],ko={nodes:Sr,edges:zt,depthLayers:[...Tr]};function Ta(r){return typeof r=="object"&&r!==null&&"attribute"in r}function Bi(r){return typeof r=="function"}function _a(r){return typeof r=="object"&&r!==null&&"when"in r&&typeof r.when=="function"&&"then"in r}function Aa(r){return typeof r=="object"&&r!==null&&"whenState"in r&&"then"in r}function Da(r){return typeof r=="object"&&r!==null&&"whenData"in r&&"then"in r}var cu={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},hu={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},gu={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function Mo(r){return{...cu,...r}}function zo(r){return{...hu,...r}}function Oi(r){return{...gu,...r}}var fu={x:{attribute:"x"},y:{attribute:"y"},size:{whenState:"isHovered",then:{attribute:"size",defaultValue:12},else:{attribute:"size",defaultValue:10}},color:{attribute:"color",defaultValue:"#666"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"},labelVisibility:{whenState:"isHovered",then:"visible",else:"auto"},backdropVisibility:{whenState:"isHovered",then:"visible",else:"hidden"},backdropColor:"#ffffff",backdropShadowColor:"rgba(0, 0, 0, 0.5)",backdropShadowBlur:12,backdropPadding:6},pu={size:{attribute:"size",defaultValue:1},color:{attribute:"color",defaultValue:"#ccc"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"}};var ze={nodes:{...fu,depth:{whenState:"isHovered",then:"topNodes",else:"nodes"}},edges:{...pu,depth:{whenState:["isHighlighted","isHovered"],then:"topEdges",else:"edges"}}};function mu(r){return"min"in r||"max"in r||"minValue"in r||"maxValue"in r||"easing"in r}function bu(r){return"dict"in r}function Ar(r,t){return typeof r=="string"?t[r]===!0:Array.isArray(r)?r.every(e=>t[e]===!0):typeof r=="object"&&r!==null?Object.entries(r).every(([e,a])=>t[e]===a):!1}function xu(r,t){let e=t[r.attribute];return e===void 0?r.defaultValue:e}function yu(r,t,e){let a=t[r.attribute];if(a===void 0)return r.defaultValue;let i=Number(a);if(isNaN(i))return r.defaultValue;if(r.min===void 0&&r.max===void 0)return i;let n=r.minValue??i,o=r.maxValue??i;if(o===n)return r.min??i;let s=(i-n)/(o-n);s=Math.max(0,Math.min(1,s)),s=nr(r.easing)(s);let d=r.min??0,c=r.max??1;return d+s*(c-d)}function Su(r,t){let e=t[r.attribute];if(e===void 0)return r.defaultValue;let a=String(e);return a in r.dict?r.dict[a]:r.defaultValue}function vu(r,t,e){return bu(r)?Su(r,t):mu(r)?yu(r,t,e):xu(r,t)}function Ui(r,t){return typeof r=="string"?!!t[r]:Array.isArray(r)?r.every(e=>!!t[e]):typeof r=="object"&&r!==null?Object.entries(r).every(([e,a])=>t[e]===a):!1}function _r(r,t,e,a,i,n){if(r==null)return n;if(typeof r!="object"&&typeof r!="function")return r;if(_a(r)){let o=r.when(t,e,a,i)?r.then:r.else;return o===void 0?n:_r(o,t,e,a,i,n)}if(Aa(r)){let o=Ar(r.whenState,e)?r.then:r.else;return o===void 0?n:_r(o,t,e,a,i,n)}if(Da(r)){let o=Ui(r.whenData,t)?r.then:r.else;return o===void 0?n:_r(o,t,e,a,i,n)}return Bi(r)?r(t,e,a,i)??n:Ta(r)?vu(r,t,i)??n:r}function Te(r){if(r==null)return"static";if(_a(r))return"graph-state";if(Aa(r)){let t=Te(r.then),e=r.else!==void 0?Te(r.else):"static";return be("item-state",be(t,e))}if(Da(r)){let t=Te(r.then),e=r.else!==void 0?Te(r.else):"static";return be(t,e)}return Bi(r)?"graph-state":(Ta(r),"static")}function be(r,t){return r==="graph-state"||t==="graph-state"?"graph-state":r==="item-state"||t==="item-state"?"item-state":"static"}function La(r){if(!r)return{dependency:"static",xAttribute:null,yAttribute:null};let t=Array.isArray(r)?r:[r],e="static",a=null,i=null;for(let n of t)if("matchData"in n&&"cases"in n){let o=n.cases;for(let s of Object.values(o))for(let l of Object.values(s))e=be(e,Te(l))}else if("matchState"in n&&"cases"in n){e=be(e,"item-state");let o=n.cases;for(let s of Object.values(o))for(let l of Object.values(s))e=be(e,Te(l))}else if("when"in n&&"then"in n)e="graph-state";else if("whenState"in n){e=be(e,"item-state");let o=n.then;if(o&&typeof o=="object")for(let l of Object.values(o))e=be(e,Te(l));let s=n.else;if(s&&typeof s=="object")for(let l of Object.values(s))e=be(e,Te(l))}else if("whenData"in n){let o=n.then;if(o&&typeof o=="object")for(let l of Object.values(o))e=be(e,Te(l));let s=n.else;if(s&&typeof s=="object")for(let l of Object.values(s))e=be(e,Te(l))}else for(let[o,s]of Object.entries(n))if(!Hi.has(o)&&(e=be(e,Te(s)),(o==="x"||o==="y")&&Ta(s))){let l=s.attribute;o==="x"&&!a&&(a=l),o==="y"&&!i&&(i=l)}return{dependency:e,xAttribute:a,yAttribute:i}}var Be={size:10,color:"#666",opacity:1,shape:"circle",rotationAlignment:"viewport",labelRotationAlignment:"viewport",visibility:"visible",depth:"nodes",zIndex:0,label:"",labelColor:"#000",labelSize:12,labelFont:"sans-serif",labelVisibility:"auto",labelPosition:"right",labelAngle:0,labelDepth:"nodes",backdropVisibility:"hidden",backdropColor:"transparent",backdropShadowColor:"transparent",backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:"transparent",backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:"both",labelAttachment:null,labelAttachmentPlacement:"below"},$i={size:1,color:"#ccc",opacity:1,path:"straight",selfLoopPath:"loop",parallelSpread:.25,tail:"none",head:"none",visibility:"visible",depth:"edges",zIndex:0,label:"",labelColor:"#666",labelVisibility:"auto",labelDepth:"edges"},Hi=new Set(["when","whenState","whenData","then","else"]),Bo=Object.keys(Be),Eu=Object.values(Be),Oo=Object.keys($i),Tu=Object.values($i);function Bt(r,t,e,a,i,n,o){for(let s in t){if(Hi.has(s))continue;let l=r[s]??o[s];r[s]=_r(t[s],e,a,i,n,l)}"depth"in t&&!("labelDepth"in t)&&(r.labelDepth=r.depth)}function Wo(r,t,e,a,i,n,o){for(let s of t)if("matchData"in s&&"cases"in s){let l=String(e[s.matchData]??""),d=s.cases;l in d&&Bt(r,d[l],e,a,i,n,o)}else if("matchState"in s&&"cases"in s){let l=String(a[s.matchState]??""),d=s.cases;l in d&&Bt(r,d[l],e,a,i,n,o)}else if("when"in s&&"then"in s){let l=s.when;if(!l(e,a,i,n))continue;Bt(r,s.then,e,a,i,n,o)}else if("whenState"in s&&"then"in s){if(!Ar(s.whenState,a))continue;Bt(r,s.then,e,a,i,n,o)}else if("whenData"in s&&"then"in s){if(!Ui(s.whenData,e))continue;Bt(r,s.then,e,a,i,n,o)}else Bt(r,s,e,a,i,n,o)}function Ra(r,t,e,a,i,n){let o=n||{},s=o;for(let d=0,c=Bo.length;d<c;d++)s[Bo[d]]=Eu[d];if(s.x=void 0,s.y=void 0,s.labelBackgroundColor=void 0,s.labelBackgroundPadding=void 0,s.labelCursor=void 0,!r)return s.x=t.x??0,s.y=t.y??0,o.size=t.size??10,o.color=t.color??"#666",o.label=t.label??"",o;let l=Array.isArray(r)?r:[r];return Wo(s,l,t,e,a,i,Be),o}function Pa(r,t,e,a,i,n){let o=n||{},s=o;for(let d=0,c=Oo.length;d<c;d++)s[Oo[d]]=Tu[d];if(!r)return o.size=t.size??1,o.color=t.color??"#ccc",o.label=t.label??"",o;let l=Array.isArray(r)?r:[r];return Wo(s,l,t,e,a,i,$i),typeof s.labelPosition=="number"&&(s.labelPosition=void 0),o}function _u(r,t,e){if(r==null)return e;if(typeof r=="function")return r(t)??e;if(typeof r=="object"&&"when"in r){let a=r,n=a.when(t)?a.then:a.else;return n===void 0?e:typeof n=="function"?n(t)??e:n??e}if(typeof r=="object"&&"whenState"in r){let a=r,n=Ar(a.whenState,t)?a.then:a.else;return n===void 0?e:typeof n=="function"?n(t)??e:n??e}return r??e}function Vi(r,t){let e={};if(!r)return e;let a=Array.isArray(r)?r:[r];for(let i of a)if("when"in i&&"then"in i){let o=i.when(t)?i.then:i.else;o&&typeof o=="object"&&Wi(e,o,t)}else if("whenState"in i&&"then"in i){let o=Ar(i.whenState,t)?i.then:i.else;o&&typeof o=="object"&&Wi(e,o,t)}else Wi(e,i,t);return e}function Wi(r,t,e){for(let[a,i]of Object.entries(t))Hi.has(a)||(r[a]=_u(i,e))}var et=class extends Uo.EventEmitter{constructor(){super(),this.rawEmitter=this}};var $o=ko;var Ho=1.5,Ca={x:.5,y:.5,angle:0,ratio:1},ht=class r extends et{constructor(){super(...arguments);this.minRatio=null;this.maxRatio=null;this.enabled=!0;this.enabledZooming=!0;this.enabledPanning=!0;this.enabledRotation=!0;this.constrainState=null;this.state={...Ca};this.previousState={...Ca};this.nextFrame=null;this.currentAnimationFrom=null;this.currentAnimationTo=null;this.animationCallback=null}get x(){return this.state.x}get y(){return this.state.y}get angle(){return this.state.angle}get ratio(){return this.state.ratio}static from(e){return new r().setState(e)}getState(){return{...this.state}}getPreviousState(){return{...this.previousState}}getBoundedRatio(e){let a=e;return typeof this.minRatio=="number"&&(a=Math.max(a,this.minRatio)),typeof this.maxRatio=="number"&&(a=Math.min(a,this.maxRatio)),a}validateState(e){let a=this.getState();return this.enabledPanning&&typeof e.x=="number"&&(a.x=e.x),this.enabledPanning&&typeof e.y=="number"&&(a.y=e.y),this.enabledZooming&&typeof e.ratio=="number"&&(a.ratio=this.getBoundedRatio(e.ratio)),this.enabledRotation&&typeof e.angle=="number"&&(a.angle=e.angle),this.constrainState?this.constrainState(a):a}isAnimating(){return this.nextFrame!==null}setState(e){if(!this.enabled)return this;let a=this.validateState(e);return io(this.state,a)?this:(this.previousState=this.state,this.state=a,this.emit("updated",this.getState()),this)}updateState(e){return this.setState(e(this.getState())),this}animate(e,a){return this.enabled?new Promise(i=>this.runAnimation(e,{...Yn,...a},i)):Promise.resolve()}cancelAnimation(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}zoomIn({factor:e=Ho,...a}={}){return this.animate({ratio:this.ratio/e},a)}zoomOut({factor:e=Ho,...a}={}){return this.animate({ratio:this.ratio*e},a)}reset(e){return this.animate(Ca,e)}runAnimation(e,a,i){let n=nr(a.easing),o=Date.now(),s=this.getState(),l=this.validateState(e),d=()=>{if(!this.enabled){this.cancelAnimation();return}let c=a.duration>0?(Date.now()-o)/a.duration:1;if(c>=1){this.nextFrame=null,this.setState(l),this.resolveAnimation(),this.emitAnimationEnd(!0);return}let f=n(c);this.setState({x:s.x+(l.x-s.x)*f,y:s.y+(l.y-s.y)*f,angle:s.angle+(l.angle-s.angle)*f,ratio:s.ratio+(l.ratio-s.ratio)*f}),this.nextFrame=requestAnimationFrame(d)};this.cancelAnimation(),this.currentAnimationFrom=s,this.currentAnimationTo=l,this.animationCallback=i,this.emit("animationStart",{from:s,to:l}),d()}resolveAnimation(){let e=this.animationCallback;this.animationCallback=null,e&&e()}emitAnimationEnd(e){let a=this.currentAnimationFrom,i=this.currentAnimationTo;!a||!i||(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit("animationEnd",{from:a,to:i,completed:e}))}};var Dr={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:"nodeLabels",enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"positions",autoRescale:!0,autoRescaleContent:"positions",enableNodeDrag:!1,getDraggedNodes:r=>[r],dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:"graph",sharedGestureWheelMessage:"Use Ctrl + scroll to zoom the graph",sharedGestureAppleWheelMessage:"Use \u2318 + scroll to zoom the graph",sharedGestureTouchMessage:"Use two fingers to move the graph",allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function wa(r){if(typeof r.labelDensity!="number"||r.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");let{minCameraRatio:t,maxCameraRatio:e}=r;if(typeof t=="number"&&typeof e=="number"&&e<t)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function Vo(r){return ao({},Dr,r)}function ie(r,t){let e=t.getBoundingClientRect();return{x:r.clientX-e.left,y:r.clientY-e.top}}function _e(r,t){let e={...ie(r,t),sigmaDefaultPrevented:!1,preventSigmaDefault(){e.sigmaDefaultPrevented=!0},original:r};return e}function tt(r){let t="x"in r?r:{...r.touches[0]||r.previousTouches[0],original:r.original,sigmaDefaultPrevented:r.sigmaDefaultPrevented,preventSigmaDefault:()=>{r.sigmaDefaultPrevented=!0,t.sigmaDefaultPrevented=!0}};return t}function Xo(r,t){let e=_e(r,t);return e.delta=Xi(r),e}var Du=2;function Lr(r){let t=[];for(let e=0,a=Math.min(r.length,Du);e<a;e++)t.push(r[e]);return t}function Ot(r,t,e){let a={touches:Lr(r.touches).map(i=>ie(i,e)),previousTouches:t.map(i=>ie(i,e)),sigmaDefaultPrevented:!1,preventSigmaDefault(){a.sigmaDefaultPrevented=!0},original:r};return a}function Xi(r){if(typeof r.deltaY<"u")return r.deltaY*-3/360;if(typeof r.detail<"u")return r.detail/-9;throw new Error("Captor: could not extract delta from event.")}var gt=class extends et{constructor(t,e){super(),this.container=t,this.renderer=e}};var Lu=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","enableCameraMouseRotation","gestureTarget","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],Ru=Lu.reduce((r,t)=>({...r,[t]:Dr[t]}),{});function Rr(r){return r instanceof PointerEvent&&r.pointerType==="touch"}var Wt=class extends gt{constructor(e,a){super(e,a);this.enabled=!0;this.draggedEvents=0;this.downStartTime=null;this.lastMouseX=null;this.lastMouseY=null;this.isMouseDown=!1;this.isMoving=!1;this.isPanningStage=!1;this.movingTimeout=null;this.startCameraState=null;this.clicks=0;this.doubleClickTimeout=null;this.isRightMouseDown=!1;this.startRotationAngle=null;this.startCameraAngle=null;this.currentWheelDirection=0;this.lastWheelAnimationId=0;this.settings=Ru;this.handleRightClick=this.handleRightClick.bind(this),this.handleDown=this.handleDown.bind(this),this.handleUp=this.handleUp.bind(this),this.handleMove=this.handleMove.bind(this),this.handleWheel=this.handleWheel.bind(this),this.handleLeave=this.handleLeave.bind(this),this.handleEnter=this.handleEnter.bind(this),e.addEventListener("contextmenu",this.handleRightClick,{capture:!1}),e.addEventListener("pointerdown",this.handleDown,{capture:!1}),e.addEventListener("wheel",this.handleWheel,{capture:!1,passive:!1}),e.addEventListener("pointerleave",this.handleLeave,{capture:!1}),e.addEventListener("pointerenter",this.handleEnter,{capture:!1}),document.addEventListener("pointermove",this.handleMove,{capture:!1}),document.addEventListener("pointerup",this.handleUp,{capture:!1})}kill(){let e=this.container;e.removeEventListener("contextmenu",this.handleRightClick),e.removeEventListener("pointerdown",this.handleDown),e.removeEventListener("wheel",this.handleWheel),e.removeEventListener("pointerleave",this.handleLeave),e.removeEventListener("pointerenter",this.handleEnter),document.removeEventListener("pointermove",this.handleMove),document.removeEventListener("pointerup",this.handleUp)}handleClick(e){if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(e);setTimeout(()=>{this.clicks=0,this.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",_e(e,this.container))}}handleRightClick(e){this.enabled&&(this.settings.enableCameraMouseRotation&&e.preventDefault(),this.emit("rightClick",_e(e,this.container)))}handleDoubleClick(e){if(!this.enabled)return;e.preventDefault(),e.stopPropagation();let a=_e(e,this.container);if(this.emit("doubleClick",a),a.sigmaDefaultPrevented)return;let i=this.renderer.getCamera(),n=i.getBoundedRatio(i.getState().ratio/this.settings.doubleClickZoomingRatio);i.animate(this.renderer.getViewportZoomedState(ie(e,this.container),n),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}handleDown(e){if(!(!this.enabled||Rr(e))){if(e.button===0){this.startCameraState=this.renderer.getCamera().getState();let{x:a,y:i}=ie(e,this.container);this.lastMouseX=a,this.lastMouseY=i,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(e.button===2&&this.settings.enableCameraMouseRotation){let{x:a,y:i}=ie(e,this.container),n=this.container.offsetWidth/2,o=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(i-o,a-n),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit("mousedown",_e(e,this.container))}}handleUp(e){if(!this.enabled||Rr(e)||!this.isMouseDown&&!this.isRightMouseDown)return;if(this.isRightMouseDown){this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit("mouseup",_e(e,this.container));return}let a=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);let{x:i,y:n}=ie(e,this.container),o=a.getState(),s=a.getPreviousState();this.isMoving?a.animate({x:o.x+this.settings.inertiaRatio*(o.x-s.x),y:o.y+this.settings.inertiaRatio*(o.y-s.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==i||this.lastMouseY!==n)&&a.setState({x:o.x,y:o.y}),this.isMoving=!1,setTimeout(()=>{let l=this.draggedEvents>0;this.draggedEvents=0;let d=this.renderer.getSetting("hideEdgesOnMove")||this.renderer.getSetting("hideLabelsOnMove");l&&d&&this.renderer.refresh()},0),this.emit("mouseup",_e(e,this.container)),(e.target===this.container||e.composedPath()[0]===this.container)&&this.handleClick(e)}handleMove(e){if(!this.enabled||Rr(e))return;let a=_e(e,this.container);if(this.emit("mousemovebody",a),(e.target===this.container||e.composedPath()[0]===this.container)&&this.emit("mousemove",a),this.isMouseDown&&this.draggedEvents++,!a.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(()=>{this.movingTimeout=null,this.isMoving=!1},this.settings.dragTimeout);let i=this.renderer.getCamera(),{x:n,y:o}=ie(e,this.container),s=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),l=this.renderer.viewportToFramedGraph({x:n,y:o}),d=s.x-l.x,c=s.y-l.y,f=i.getState(),u=f.x+d,g=f.y+c;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),i.setState({x:u,y:g}),this.lastMouseX=n,this.lastMouseY=o,e.preventDefault(),e.stopPropagation()}if(this.isRightMouseDown){let{x:i,y:n}=ie(e,this.container),o=this.container.offsetWidth/2,s=this.container.offsetHeight/2,d=Math.atan2(n-s,i-o)-this.startRotationAngle;this.renderer.getCamera().setState({angle:this.startCameraAngle+d}),e.preventDefault(),e.stopPropagation()}}}handleLeave(e){Rr(e)||this.emit("mouseleave",_e(e,this.container))}handleEnter(e){Rr(e)||this.emit("mouseenter",_e(e,this.container))}handleWheel(e){let a=this.renderer.getCamera();if(!this.enabled||!a.enabledZooming)return;let i=Xo(e,this.container);if(this.emit("wheel",i),i.sigmaDefaultPrevented)return;let{gestureTarget:n}=this.settings;if(n==="page")return;if(n==="shared"&&!e.ctrlKey&&!e.metaKey){this.renderer._showGestureHint("wheel");return}let o=Xi(e);if(!o)return;e.preventDefault(),e.stopPropagation();let s=a.getState().ratio,l=o>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,d=a.getBoundedRatio(s*l),c=o>0?1:-1,f=Date.now();if(s===d||this.currentWheelDirection===c&&this.lastWheelTriggerTime&&f-this.lastWheelTriggerTime<this.settings.zoomDuration/5)return;let u=++this.lastWheelAnimationId;a.animate(this.renderer.getViewportZoomedState(ie(e,this.container),d),{easing:"quadraticOut",duration:this.settings.zoomDuration}).then(()=>{this.lastWheelAnimationId===u&&(this.currentWheelDirection=0)}),this.currentWheelDirection=c,this.lastWheelTriggerTime=f}setSettings(e){this.settings=e}};var Pu=["dragTimeout","gestureTarget","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],Cu=Pu.reduce((r,t)=>({...r,[t]:Dr[t]}),{}),Ut=class extends gt{constructor(e,a){super(e,a);this.enabled=!0;this.isMoving=!1;this.hasMoved=!1;this.isPanningStage=!1;this.isZoomingStage=!1;this.touchMode=0;this.startTouchesPositions=[];this.lastTouches=[];this.lastTap=null;this.settings=Cu;this.handleStart=this.handleStart.bind(this),this.handleLeave=this.handleLeave.bind(this),this.handleMove=this.handleMove.bind(this),e.addEventListener("touchstart",this.handleStart,{capture:!1}),e.addEventListener("touchcancel",this.handleLeave,{capture:!1}),document.addEventListener("touchend",this.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",this.handleMove,{capture:!1,passive:!1})}kill(){let e=this.container;e.removeEventListener("touchstart",this.handleStart),e.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}getDimensions(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}doesCapture(e){let{gestureTarget:a}=this.settings;return a==="graph"?!0:a==="page"?!1:e>=2}syncStageFlags(){let e=this.touchMode===1&&this.hasMoved,a=this.touchMode===2;e!==this.isPanningStage&&(this.isPanningStage=e,this.renderer._setPanning(e)),a!==this.isZoomingStage&&(this.isZoomingStage=a,this.renderer._setZooming(a))}handleStart(e){if(!this.enabled)return;let a=Lr(e.touches);if(this.touchMode=a.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=a.map(i=>ie(i,this.container)),this.touchMode===2){let[{x:i,y:n},{x:o,y:s}]=this.startTouchesPositions;this.startTouchesAngle=Math.atan2(s-n,o-i),this.startTouchesDistance=Math.sqrt(Math.pow(o-i,2)+Math.pow(s-n,2))}this.syncStageFlags(),this.emit("touchdown",Ot(e,this.lastTouches,this.container)),this.lastTouches=a,this.lastTouchesPositions=this.startTouchesPositions,e.cancelable&&(this.doesCapture(e.touches.length)||this.renderer._hasNodeDrag())&&e.preventDefault()}handleLeave(e){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(e.cancelable&&this.doesCapture(this.touchMode)&&e.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(e.touches.length===1){this.handleStart(e);break}case 1:if(this.isMoving){let a=this.renderer.getCamera(),i=a.getState(),n=a.getPreviousState();a.animate({x:i.x+this.settings.inertiaRatio*(i.x-n.x),y:i.y+this.settings.inertiaRatio*(i.y-n.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.syncStageFlags(),this.emit("touchup",Ot(e,this.lastTouches,this.container)),!e.touches.length){let a=ie(this.lastTouches[0],this.container),i=this.startTouchesPositions[0],n=(a.x-i.x)**2+(a.y-i.y)**2;if(!e.touches.length&&n<this.settings.tapMoveTolerance**2)if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){let o=Ot(e,this.lastTouches,this.container);if(this.emit("doubletap",o),this.lastTap=null,!o.sigmaDefaultPrevented&&this.settings.gestureTarget!=="page"){let s=this.renderer.getCamera(),l=s.getBoundedRatio(s.getState().ratio/this.settings.doubleClickZoomingRatio);s.animate(this.renderer.getViewportZoomedState(a,l),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{let o=Ot(e,this.lastTouches,this.container);this.emit("tap",o),this.lastTap={time:Date.now(),position:o.touches[0]||o.previousTouches[0]}}}this.lastTouches=Lr(e.touches),this.startTouchesPositions=[]}}handleMove(e){if(!this.enabled||!this.startTouchesPositions.length)return;let a=this.doesCapture(e.touches.length);a&&e.preventDefault();let i=Lr(e.touches),n=i.map(f=>ie(f,this.container)),o=this.lastTouches;this.lastTouches=i,this.lastTouchesPositions=n;let s=Ot(e,o,this.container);if(this.emit("touchmove",s),s.sigmaDefaultPrevented||(this.hasMoved||(this.hasMoved=n.some((f,u)=>{let g=this.startTouchesPositions[u];return g&&(f.x!==g.x||f.y!==g.y)})),!this.hasMoved))return;if(!a){this.settings.gestureTarget==="shared"&&this.renderer._showGestureHint("touch");return}this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(()=>{this.isMoving=!1},this.settings.dragTimeout);let l=this.renderer.getCamera(),d=this.startCameraState,c=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{let{x:f,y:u}=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),{x:g,y:h}=this.renderer.viewportToFramedGraph(n[0]);l.setState({x:d.x+f-g,y:d.y+u-h});break}case 2:{let f={x:.5,y:.5,angle:0,ratio:1},{x:u,y:g}=n[0],{x:h,y:p}=n[1],b=Math.atan2(p-g,h-u)-this.startTouchesAngle,x=Math.hypot(p-g,h-u)/this.startTouchesDistance,m=l.getBoundedRatio(d.ratio/x);f.ratio=m,f.angle=d.angle+b;let y=this.getDimensions(),S=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:d}),v=Math.min(y.width,y.height)-2*c,E=v/y.width,_=v/y.height,A=m/v,L=u-v/2/E,T=g-v/2/_;({x:L,y:T}=qr({x:L,y:T},f.angle)),f.x=S.x-L*A,f.y=S.y+T*A,l.setState(f);break}}}setSettings(e){this.settings=e}};var Ga=class{constructor(t,e,a,i){this.graph=t;this.viewportToGraph=e;this.setNodesState=a;this.emit=i;this.pendingNode=null;this.session=null}start(t,e,a,i,n){let o=a(t),s=!1;if(this.emit("nodeDragStart",{node:t,allDraggedNodes:o,event:e,preventSigmaDefault(){s=!0}}),s)return!1;let l=new Map;for(let d of o)l.set(d,{x:this.graph.getNodeAttribute(d,i),y:this.graph.getNodeAttribute(d,n)});return this.session={node:t,allNodes:o,startPosition:this.viewportToGraph(e),startNodePositions:l,xAttr:i,yAttr:n},this.setNodesState(o,{isDragged:!0}),!0}applyMove(t,e){let{allNodes:a,startNodePositions:i,startPosition:n,xAttr:o,yAttr:s}=this.session,l=this.viewportToGraph(t),d={x:l.x-n.x,y:l.y-n.y};for(let c of a){let f=i.get(c);if(!f||!this.graph.hasNode(c))continue;let u={x:f.x+d.x,y:f.y+d.y};e?this.graph.mergeNodeAttributes(c,e(u,c)):(this.graph.setNodeAttribute(c,o,u.x),this.graph.setNodeAttribute(c,s,u.y))}}end(){if(this.pendingNode=null,!this.session)return null;let{node:t,allNodes:e}=this.session;return this.setNodesState(e,{isDragged:!1}),this.session=null,{node:t,allNodes:e}}removeNode(t){t===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===t?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(t)&&(this.session.allNodes=this.session.allNodes.filter(e=>e!==t),this.session.startNodePositions.delete(t)))}clear(){this.pendingNode=null,this.session=null}};var Na=class{constructor(t,e){this.graph=t;this.onGroupChanged=e;this.groups=new Map;this.edgeToGroupKey=new Map}getGroupKey(t){let e=this.graph.source(t),a=this.graph.target(t);return e<a?`${e}\0${a}`:`${a}\0${e}`}sortGroup(t,e){let a=e.split("\0")[0];t.sort((i,n)=>{let o=this.graph.source(i)===a||!this.graph.isDirected(i)?0:1,s=this.graph.source(n)===a||!this.graph.isDirected(n)?0:1;return o-s})}register(t){let e=this.getGroupKey(t),a=this.groups.get(e);a||(a=[],this.groups.set(e,a)),a.includes(t)||a.push(t),this.edgeToGroupKey.set(t,e),this.sortGroup(a,e),this.onGroupChanged(a,a.length)}unregister(t){let e=this.edgeToGroupKey.get(t);if(!e)return;this.edgeToGroupKey.delete(t);let a=this.groups.get(e);if(!a)return;let i=a.indexOf(t);i!==-1&&a.splice(i,1),a.length===0?this.groups.delete(e):this.onGroupChanged(a,a.length)}getGroup(t){let e=this.edgeToGroupKey.get(t);return e?this.groups.get(e)??[]:[]}getSiblings(t){return this.getGroup(t).filter(e=>e!==t)}rebuild(){this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(t=>{let e=this.getGroupKey(t),a=this.groups.get(e);a||(a=[],this.groups.set(e,a)),a.push(t),this.edgeToGroupKey.set(t,e)});for(let[t,e]of this.groups)this.sortGroup(e,t),this.onGroupChanged(e,e.length)}clear(){this.groups.clear(),this.edgeToGroupKey.clear()}};function qi(r,t){if(r===!1||r==="extend"||r==="separate")return r;let e=r[t];return e!==void 0?e:r.default??!1}function ji(r){return r===!1?!1:r==="extend"||r==="separate"?!0:Object.values(r).some(t=>t==="extend"||t==="separate")}function Ki(r){return r==="separate"?!0:r===!1||r==="extend"?!1:r.default==="separate"?!0:Object.values(r).includes("separate")}var Q={node:{parent:null,eventSuffix:"Node",payloadKey:"node",isEnabled:()=>!0,writesPickingThisFrame:()=>!0,setHover:(r,t,e)=>r.setNodeState(t,{isHovered:e}),getCursor:(r,t)=>r.nodeDataCache[t]?.cursor,isHitValid:(r,t)=>r.nodeDataCache[t]?.visibility!=="hidden"},edge:{parent:null,eventSuffix:"Edge",payloadKey:"edge",isEnabled:r=>!!r.settings.enableEdgeEvents,writesPickingThisFrame:r=>!!r.settings.enableEdgeEvents,setHover:(r,t,e)=>r.setEdgeState(t,{isHovered:e}),getCursor:(r,t)=>r.edgeDataCache[t]?.cursor},nodeLabel:{parent:"node",eventSuffix:"NodeLabel",payloadKey:"node",isEnabled:r=>Ki(r.settings.nodeLabelEvents),writesPickingThisFrame:r=>ji(r.settings.nodeLabelEvents),setHover:(r,t,e)=>r.setNodeState(t,{isLabelHovered:e}),getCursor:(r,t)=>r.nodeDataCache[t]?.labelCursor,resolveForVerb:(r,t,e)=>{let a=qi(e.settings.nodeLabelEvents,t);return a===!1?null:a==="extend"?{kind:"node",key:r.key}:r}},edgeLabel:{parent:"edge",eventSuffix:"EdgeLabel",payloadKey:"edge",isEnabled:r=>Ki(r.settings.edgeLabelEvents),writesPickingThisFrame:r=>ji(r.settings.edgeLabelEvents),setHover:(r,t,e)=>r.setEdgeState(t,{isLabelHovered:e}),getCursor:(r,t)=>r.edgeDataCache[t]?.labelCursor,resolveForVerb:(r,t,e)=>{let a=qi(e.settings.edgeLabelEvents,t);return a===!1?null:a==="extend"?{kind:"edge",key:r.key}:r}}},ft=["node","edge","nodeLabel","edgeLabel"];function qo(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function Oe(r,t,e){return r.idsByKind[t].get(e)??0}function Fa(r,t){for(let a of ft)if(a===t||Q[a].parent===t){for(let i of r.idsByKind[a].values())r.lookup[i]=null;r.idsByKind[a]=new Map}let e=1;for(let a of ft){if(a===t)break;e+=r.idsByKind[a].size}r.nextId=e}function Yi(r,t,e){let a=r.nextId++;return r.idsByKind[t].set(e,a),r.lookup[a]={kind:t,key:e},a}function jo(r,t){for(let e of ft)if(Q[e].parent!==null){for(let a of r.idsByKind[e].values())r.lookup[a]=null;r.idsByKind[e]=new Map}r.nextId=1;for(let e of ft)if(Q[e].parent===null)for(let a of r.idsByKind[e].values())a>=r.nextId&&(r.nextId=a+1);for(let e of ft){let a=Q[e];if(!(a.parent===null||!a.isEnabled(t)))for(let i of r.idsByKind[a.parent].keys())r.idsByKind[e].set(i,r.nextId),r.lookup[r.nextId]={kind:e,key:i},r.nextId++}}function Ko(r,t){for(let e of ft){let a=r[e],i=t[e];if(a!==i){if(a.size!==i.size)return!1;for(let[n,o]of a)if(i.get(n)!==o)return!1}}return!0}function Zi(r,t,e){Q[t.kind].setHover(r,t.key,e)}function Yo(r,t){return Q[t.kind].getCursor(r,t.key)}function $t(r,t){return`${t}${Q[r].eventSuffix}`}function Ht(r,t){return{...t,[Q[r.kind].payloadKey]:r.key}}function Zo(r,t,e){let a=Q[t.kind].resolveForVerb;return a?a(t,e,r):t}function Qo(r,t){let e=Q[t.kind].isHitValid;return e?e(r,t.key):!0}function Ia(r){return ft.filter(t=>t===r||Q[t].parent===r)}function Jo(r,t,e){return t&&(t=Zo(r,t,e)),t&&!Qo(r,t)&&(t=null),t}function Qi(r,t,e){let a=e==="wheel"?r.stateManager.hovered:r.getHitAtPosition(t);return Jo(r,a,e)}function wu(r,t){return!r||!t?r===t:r.kind===t.kind&&r.key===t.key}function Ji(r,t,e){let a={event:e,preventSigmaDefault:()=>e.preventSigmaDefault()},i=r.dragManager.session,n=i?{kind:"node",key:i.node}:Jo(r,t,"enter"),{stateManager:o}=r,s=o.hovered;wu(s,n)||(s&&(Zi(r,s,!1),r.emit($t(s.kind,"leave"),Ht(s,a))),o.setHovered(n),n&&(Zi(r,n,!0),r.emit($t(n.kind,"enter"),Ht(n,a))),r.updateContainerCursor())}function es(r,t,e,a){a.handleResize=()=>r.scheduleRefresh(),window.addEventListener("resize",a.handleResize),a.handleMove=n=>{r.hoverResolver.pointerMoved(tt(n))},a.handleMoveBody=n=>{let o=tt(n),{dragManager:s}=r;if(s.pendingNode&&!s.session){let{xAttribute:l,yAttribute:d}=r.nodeStyleAnalysis,{settings:c}=r;s.start(s.pendingNode,o,c.getDraggedNodes,l||"x",d||"y"),s.pendingNode=null}s.session&&(s.applyMove(o,r.settings.dragPositionToAttributes),r.emit("nodeDrag",{node:s.session.node,allDraggedNodes:s.session.allNodes,event:o}),o.preventSigmaDefault()),r.emit("moveBody",{event:o,preventSigmaDefault:()=>o.preventSigmaDefault()})},a.handleLeave=n=>{let o=tt(n),s={event:o,preventSigmaDefault:()=>o.preventSigmaDefault()};r.hoverResolver.pointerLeft(),Ji(r,null,o),r.emit("leaveStage",s)},a.handleEnter=n=>{let o=tt(n);r.emit("enterStage",{event:o,preventSigmaDefault:()=>o.preventSigmaDefault()})};let i=n=>o=>{let s=tt(o),l={event:s,preventSigmaDefault:()=>s.preventSigmaDefault()},d=Qi(r,s,n);if(d){r.emit($t(d.kind,n),Ht(d,l));return}r.emit(`${n}Stage`,l)};a.handleClick=i("click"),a.handleRightClick=i("rightClick"),a.handleDoubleClick=i("doubleClick"),a.handleWheel=i("wheel"),a.handleDown=n=>{let o=tt(n),s={event:o,preventSigmaDefault:()=>o.preventSigmaDefault()},l=Qi(r,o,"down");if(l){l.kind==="node"&&r.settings.enableNodeDrag&&(r.dragManager.pendingNode=l.key),r.emit($t(l.kind,"down"),Ht(l,s));return}r.emit("downStage",s)},a.handleUp=n=>{let o=tt(n),s={event:o,preventSigmaDefault:()=>o.preventSigmaDefault()},l=r.dragManager.end();l&&r.emit("nodeDragEnd",{node:l.node,allDraggedNodes:l.allNodes,...s});let d=Qi(r,o,"up");if(d){r.emit($t(d.kind,"up"),Ht(d,s));return}r.emit("upStage",s)},t.on("mousemove",a.handleMove),t.on("mousemovebody",a.handleMoveBody),t.on("click",a.handleClick),t.on("rightClick",a.handleRightClick),t.on("doubleClick",a.handleDoubleClick),t.on("wheel",a.handleWheel),t.on("mousedown",a.handleDown),t.on("mouseup",a.handleUp),t.on("mouseleave",a.handleLeave),t.on("mouseenter",a.handleEnter),e.on("touchdown",a.handleDown),e.on("touchdown",a.handleMove),e.on("touchup",a.handleUp),e.on("touchmove",a.handleMove),e.on("tap",a.handleClick),e.on("doubletap",a.handleDoubleClick),e.on("touchmove",a.handleMoveBody)}function ts(r,t){let{graph:e}=r,a=new Set(["x","y","zIndex","type"]);t.eachNodeAttributesUpdatedGraphUpdate=i=>{let n=i.hints?.attributes,o=!n||n.some(s=>a.has(s));r.refresh({partialGraph:{nodes:e.nodes()},skipIndexation:!o,schedule:!0})},t.eachEdgeAttributesUpdatedGraphUpdate=i=>{let n=i.hints?.attributes,o=n&&["zIndex","type"].some(s=>n?.includes(s));r.refresh({partialGraph:{edges:e.edges()},skipIndexation:!o,schedule:!0})},t.addNodeGraphUpdate=i=>{r.addNode(i.key),r.refresh({partialGraph:{nodes:[i.key]},skipIndexation:!1,schedule:!0})},t.updateNodeGraphUpdate=i=>{r.refresh({partialGraph:{nodes:[i.key]},skipIndexation:!1,schedule:!0})},t.dropNodeGraphUpdate=i=>{r.removeNode(i.key),r.refresh({schedule:!0})},t.addEdgeGraphUpdate=i=>{let n=i.key;r.edgeGroups.register(n),r.addEdge(n);let o=r.edgeGroups.getSiblings(n);for(let s of o)r.addEdge(s);r.refresh({partialGraph:{edges:[n,...o]},schedule:!0})},t.updateEdgeGraphUpdate=i=>{r.refresh({partialGraph:{edges:[i.key]},skipIndexation:!1,schedule:!0})},t.dropEdgeGraphUpdate=i=>{let n=i.key,o=r.edgeGroups.getSiblings(n);r.edgeGroups.unregister(n),r.removeEdge(n);for(let s of o)r.addEdge(s);r.refresh({schedule:!0})},t.clearEdgesGraphUpdate=()=>{r.clearEdgeState(),r.clearEdgeIndices(),r.refresh({schedule:!0})},t.clearGraphUpdate=()=>{r.clearEdgeState(),r.clearNodeState(),r.clearEdgeIndices(),r.clearNodeIndices(),r.refresh({schedule:!0})},e.on("nodeAdded",t.addNodeGraphUpdate),e.on("nodeDropped",t.dropNodeGraphUpdate),e.on("nodeAttributesUpdated",t.updateNodeGraphUpdate),e.on("eachNodeAttributesUpdated",t.eachNodeAttributesUpdatedGraphUpdate),e.on("edgeAdded",t.addEdgeGraphUpdate),e.on("edgeDropped",t.dropEdgeGraphUpdate),e.on("edgeAttributesUpdated",t.updateEdgeGraphUpdate),e.on("eachEdgeAttributesUpdated",t.eachEdgeAttributesUpdatedGraphUpdate),e.on("edgesCleared",t.clearEdgesGraphUpdate),e.on("cleared",t.clearGraphUpdate)}function rs(r,t){r.removeListener("nodeAdded",t.addNodeGraphUpdate),r.removeListener("nodeDropped",t.dropNodeGraphUpdate),r.removeListener("nodeAttributesUpdated",t.updateNodeGraphUpdate),r.removeListener("eachNodeAttributesUpdated",t.eachNodeAttributesUpdatedGraphUpdate),r.removeListener("edgeAdded",t.addEdgeGraphUpdate),r.removeListener("edgeDropped",t.dropEdgeGraphUpdate),r.removeListener("edgeAttributesUpdated",t.updateEdgeGraphUpdate),r.removeListener("eachEdgeAttributesUpdated",t.eachEdgeAttributesUpdatedGraphUpdate),r.removeListener("edgesCleared",t.clearEdgesGraphUpdate),r.removeListener("cleared",t.clearGraphUpdate)}var Gu={x:.5,y:.5,angle:0,ratio:1},Nu=8,Fu=.001;function is(r){let{coords:t,nodeData:e,dimensions:a,stagePadding:i,zoomToSizeRatioFunction:n,itemSizesReference:o,fitLabels:s,nodeLabelBox:l}=r,d=Object.keys(t);if(!d.length)return r.extent;let c=n(1)||1,f=o==="positions",{width:u,height:g}=a,h=r.extent;for(let p=0;p<Nu;p++){let b=dr(h),x={width:h.x[1]-h.x[0]||1,height:h.y[1]-h.y[0]||1},m=De(Gu,a,x,i),y=as(m,b({x:0,y:0}),u,g),S=as(m,b({x:1,y:0}),u,g),v=Math.hypot(S.x-y.x,S.y-y.y)||1,E=1/0,_=-1/0,A=1/0,L=-1/0;for(let w=0,G=d.length;w<G;w++){let D=d[w],z=e[D],O=z.size/c*(f?v:1),k=-O,U=O,K=-O,ee=O;if(s){let Pe=l(z,O);Pe&&(Pe.minX<k&&(k=Pe.minX),Pe.maxX>U&&(U=Pe.maxX),Pe.minY<K&&(K=Pe.minY),Pe.maxY>ee&&(ee=Pe.maxY))}let{x:hn,y:gn}=t[D];E=Math.min(E,hn+k/v),_=Math.max(_,hn+U/v),A=Math.min(A,gn-ee/v),L=Math.max(L,gn-K/v)}let T={x:[E,_],y:[A,L]},N=Math.max(T.x[1]-T.x[0],T.y[1]-T.y[0])||1,R=Math.max(Math.abs(T.x[0]-h.x[0]),Math.abs(T.x[1]-h.x[1]),Math.abs(T.y[0]-h.y[0]),Math.abs(T.y[1]-h.y[1]));if(h=T,R/N<Fu)break}return h}function as(r,t,e,a){let i=Ie(r,t);return{x:(1+i.x)*e/2,y:(1-i.y)*a/2}}var Iu=typeof navigator<"u"&&/Mac|iP(hone|ad|od)/.test(navigator.platform),ku=1500,Mu=`.sigma-gesture-hint {
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
}`;function ns(r){let t=ct("style");t.textContent=r,document.head.appendChild(t);let e=(t.sheet?.cssRules.length??0)>0;return t.remove(),e}var pt=null;function zu(){return pt===null&&(pt=Mu,ns("@scope {}")&&(pt=`@scope {
${pt}
}`),ns("@layer sigma-gesture-hint {}")&&(pt=`@layer sigma-gesture-hint {
${pt}
}`)),pt}var Pr=class{constructor(t){this.hideTimeout=null;this.styleElement=ct("style"),this.styleElement.textContent=zu(),t.appendChild(this.styleElement),this.element=ct("div",{opacity:"0"},{class:"sigma-gesture-hint"}),t.appendChild(this.element)}show(t,e){let a=t==="touch"?e.sharedGestureTouchMessage:Iu?e.sharedGestureAppleWheelMessage:e.sharedGestureWheelMessage;a&&(this.element.textContent=a,this.element.style.opacity="1",typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>{this.hideTimeout=null,this.element.style.opacity="0"},ku))}kill(){typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}};var ka=class{constructor(t){this.readBuffer=null;this.fence=null;this.result=new Uint8Array(4);this.generation=0;this.readGeneration=0;this.lastEvent=null;this.active=!1;this.dirty=!1;this.rafId=null;this.killed=!1;this.options=t}pointerMoved(t){this.lastEvent=t,this.active=!0,!this.options.isRenderPending()&&this.request()}pointerLeft(){this.active=!1,this.dirty=!1}frameRendered(){this.request()}invalidate(){this.generation++}request(){if(!(this.killed||!this.active||!this.lastEvent)){if(this.fence){this.dirty=!0;return}this.startRead()}}startRead(){let{gl:t,getFrameBuffer:e,getPixelRatio:a,getDownSizingRatio:i}=this.options;this.readGeneration=this.generation;let n=this.lastEvent,[o,s]=jr(t,n.x,n.y,a(),i());this.readBuffer||(this.readBuffer=t.createBuffer()),t.bindFramebuffer(t.FRAMEBUFFER,e()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(o,s,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(n)}schedulePoll(t){this.rafId=requestAnimationFrame(()=>{this.rafId=null,this.poll(t)})}poll(t){let{gl:e,onIndex:a}=this.options;if(this.killed||!this.fence)return;let i=e.clientWaitSync(this.fence,0,0);if(i===e.TIMEOUT_EXPIRED){this.schedulePoll(t);return}if(e.deleteSync(this.fence),this.fence=null,i!==e.WAIT_FAILED&&this.readGeneration===this.generation){e.bindBuffer(e.PIXEL_PACK_BUFFER,this.readBuffer),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,this.result),e.bindBuffer(e.PIXEL_PACK_BUFFER,null);let[n,o,s,l]=this.result;this.active&&a(Zr(n,o,s,l),t)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}reset(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}kill(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;let{gl:t}=this.options;this.fence&&t.deleteSync(this.fence),this.fence=null,this.readBuffer&&t.deleteBuffer(this.readBuffer),this.readBuffer=null}};var Ma=class{constructor(t,e){this.key=t,this.size=e}static compare(t,e){return t.size>e.size?-1:t.size<e.size||t.key>e.key?1:-1}},mt=class{constructor(){this.width=0;this.height=0;this.cellSize=0;this.columns=0;this.rows=0;this.cells={}}resizeAndClear(t,e){this.width=t.width,this.height=t.height,this.cellSize=e,this.columns=Math.ceil(t.width/e),this.rows=Math.ceil(t.height/e),this.cells={}}getIndex(t){let e=Math.floor(t.x/this.cellSize);return Math.floor(t.y/this.cellSize)*this.columns+e}add(t,e,a){let i=new Ma(t,e),n=this.getIndex(a),o=this.cells[n];o||(o=[],this.cells[n]=o),o.push(i)}organize(){for(let t in this.cells)this.cells[t].sort(Ma.compare)}getLabelsToDisplay(t,e,a){let i=this.cellSize*this.cellSize,o=i/t/t*e/i,s=Math.ceil(o),l=[];if(a){let d=Math.max(0,Math.floor(a.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(a.x2/this.cellSize)),f=Math.max(0,Math.floor(a.y1/this.cellSize)),u=Math.min(this.rows-1,Math.floor(a.y2/this.cellSize));for(let g=f;g<=u;g++)for(let h=d;h<=c;h++){let p=g*this.columns+h,b=this.cells[p];if(b)for(let x=0;x<Math.min(s,b.length);x++)l.push(b[x].key)}}else for(let d in this.cells){let c=this.cells[d];for(let f=0;f<Math.min(s,c.length);f++)l.push(c[f].key)}return l}};function os(r){let{graph:t,hoveredNode:e,highlightedNodes:a,displayedNodeLabels:i}=r,n=new Set,o=new Set(a);e&&o.add(e);for(let s of o)t.hasNode(s)&&t.forEachEdge(s,l=>{n.add(l)});for(let s of i)o.has(s)||t.forEachEdge(s,(l,d,c,f)=>{let u=c===s?f:c;i.has(u)&&n.add(l)});return Array.from(n)}var Vt=150,Xt=50,Bu={both:0,node:1,label:2},Ou={over:0,above:1,below:2,auto:3},ss=12,Wu=3,za=class{constructor(t){this.internals=t;this.labelGrid=new mt;this.edgeAnchorGrid=new mt;this.displayedNodeLabels=new Set;this.displayedEdgeLabels=new Set;this.edgeLabelCandidates=[];this.renderedNodeLabels=new Set;this.labelSizeCache=new Map;this.framePassPoints=new Float32Array(0);this.labelsDirty=!0}resetFrame(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}clearEdgeLabels(){this.displayedEdgeLabels=new Set}resetLabelGrid(){this.labelGrid=new mt,this.edgeAnchorGrid=new mt}processWebGLLabels(t){let{labelProgram:e,primitives:a,nodeDataCache:i}=this.internals,n=a?.nodes?.label?.font?.family||"sans-serif",o=new Map;for(let s=0,l=t.length;s<l;s++){let d=t[s],c=i[d];if(c.visibility==="hidden"||!c.label)continue;let f=c.labelFont||n,u=o.get(f);u?u.push(c.label):o.set(f,[c.label])}for(let[s,l]of o){let{family:d,weight:c,style:f}=Jr(s),u=e.registerFont(d,c,f);e.ensureGlyphsReady(l,u)}}measureNodeLabel(t){if(!t.label)return{width:0,height:0,textHeight:0};let{labelProgram:e,primitives:a}=this.internals,i=t.labelSize??14,n=t.labelFont||a?.nodes?.label?.font?.family||"sans-serif",o=`${t.label}|${i}|${n}`;if(this.labelSizeCache.has(o))return this.labelSizeCache.get(o);let{family:s,weight:l,style:d}=Jr(n),c=e.registerFont(s,l,d),f=e.measureLabel(t.label,i,c);return this.labelSizeCache.set(o,f),f}nodeLabelBox(t,e){if(t.visibility==="hidden"||t.labelVisibility==="hidden")return null;let{width:a,height:i,textHeight:n}=this.measureNodeLabel(t);if(!a)return null;let o=this.internals.primitives?.nodes?.label?.margin??Ge,s=e+o,l=t.labelBackgroundColor?t.labelBackgroundPadding??gi:0,d=a/2,c=i/2,f=d+l,u=c+l,g=n/2,h=0,p=0;switch(t.labelPosition??"right"){case"left":h=-(s+d);break;case"above":p=-(s+g);break;case"below":p=s+g;break;case"over":break;default:h=s+d}let b=t.labelAngle??0,{x,y:m}=qr({x:h,y:p},b),y=Math.abs(Math.cos(b)),S=Math.abs(Math.sin(b)),v=y*f+S*u,E=S*f+y*u;return{minX:x-v,maxX:x+v,minY:m-E,maxY:m+E}}computeDisplayedNodeLabels(){let t=this.internals.getCameraState(),{width:e,height:a}=this.internals.getDimensions(),i=this.internals.viewportToFramedGraph({x:-Vt,y:-Xt}),n=this.internals.viewportToFramedGraph({x:e+Vt,y:-Xt}),o=this.internals.viewportToFramedGraph({x:-Vt,y:a+Xt}),s=this.internals.viewportToFramedGraph({x:e+Vt,y:a+Xt}),l=Math.min(i.x,n.x,o.x,s.x),d=Math.max(i.x,n.x,o.x,s.x),c=Math.min(i.y,n.y,o.y,s.y),f=Math.max(i.y,n.y,o.y,s.y),u=De({x:.5,y:.5,ratio:1,angle:0},{width:e,height:a},this.internals.getGraphDimensions(),this.internals.getStagePadding()),g=_=>{let A=Ie(u,_);return{x:(1+A.x)*e/2,y:(1-A.y)*a/2}},h=g({x:l,y:c}),p=g({x:d,y:c}),b=g({x:l,y:f}),x=g({x:d,y:f}),m={x1:Math.min(h.x,p.x,b.x,x.x),y1:Math.min(h.y,p.y,b.y,x.y),x2:Math.max(h.x,p.x,b.x,x.x),y2:Math.max(h.y,p.y,b.y,x.y)},{settings:y,nodeDataCache:S,nodesWithForcedLabels:v}=this.internals,E=this.labelGrid.getLabelsToDisplay(t.ratio,y.labelDensity,m);xi(E,v);for(let _=0,A=E.length;_<A;_++){let L=E[_],T=S[L];if(this.displayedNodeLabels.has(L)||T.visibility==="hidden"||T.labelVisibility==="hidden"||!T.label||T.x<l||T.x>d||T.y<c||T.y>f)continue;let{x:N,y:R}=this.internals.framedGraphToViewport(T),w=this.internals.scaleSize(T.size);!ke(T)&&w<y.labelRenderedSizeThreshold||N<-Vt-w||N>e+Vt+w||R<-Xt-w||R>a+Xt+w||this.displayedNodeLabels.add(L)}}buildFramePassPoints(){let{nodeDataCache:t,nodeDataTexture:e}=this.internals;if(!e)return{data:this.framePassPoints,count:0};let a=this.displayedNodeLabels.size*3;this.framePassPoints.length<a&&(this.framePassPoints=new Float32Array(a));let i=this.framePassPoints,n=0;for(let o of this.displayedNodeLabels){let s=t[o];if(!s)continue;let l=e.getIndex(o);l<0||(i[n*3]=l,i[n*3+1]=qe[s.labelPosition||Be.labelPosition]??0,i[n*3+2]=s.labelAngle??0,n++)}return{data:i,count:n}}renderWebGLLabels(t,e){let{nodeDataCache:a,labelProgram:i,primitives:n,nodeDataTexture:o}=this.internals,s=[];for(let l of this.displayedNodeLabels){if(this.renderedNodeLabels.has(l))continue;let d=a[l];e&&d.labelDepth!==e||(this.renderedNodeLabels.add(l),s.push(l))}if(s.length!==0){if(this.labelsDirty){let l=0;for(let p=0,b=s.length;p<b;p++){let x=a[s[p]];l+=x.label.length}i.reallocate(l);let d=14,c=n?.nodes?.label?.margin??Ge,f=Be.labelPosition,u=n?.nodes?.label?.font?.family||"sans-serif",g=new Map,h=0;for(let p=0,b=s.length;p<b;p++){let x=s[p],m=a[x],y=m.labelFont||u,S=g.get(y);if(S===void 0){let{family:_,weight:A,style:L}=Jr(y);S=i.registerFont(_,A,L),g.set(y,S)}let v={text:m.label,x:m.x,y:m.y,size:m.labelSize??d,color:m.labelColor,nodeSize:m.size,margin:c,position:m.labelPosition??f,hidden:!1,forceLabel:ke(m),type:"default",zIndex:m.zIndex??0,parentType:"node",parentKey:x,fontKey:S,labelAngle:m.labelAngle??0,nodeIndex:o.getIndex(x)},E=i.processLabel(x,h,v);h+=E}i.invalidateBuffers()}i.render(t)}}renderBackdrops(t,e){let{backdropProgram:a,nodeDataCache:i,nodesWithBackdrop:n,attachmentManager:o,pixelRatio:s,nodeDataTexture:l}=this.internals,d=[];for(let c of n){let f=i[c];if(!f||f.visibility==="hidden"||e&&f.depth!==e)continue;let u=l?.getIndex(c)??-1;u<0||d.push({key:c,nodeIndex:u})}if(d.length!==0){a.reallocate(d.length);for(let c=0;c<d.length;c++){let{key:f,nodeIndex:u}=d[c],g=i[f],h=this.displayedNodeLabels.has(f),p=h?this.measureNodeLabel(g):{width:0,height:0,textHeight:0},b=p.textHeight,x=p.width,m=p.height,y=0,S=0;if(h&&g.labelAttachment&&o){let U=o.getEntry(f,g.labelAttachment);if(U){let K=g.labelAttachmentPlacement||"below";if(K==="below"||K==="above"){let ee=U.height/s;m+=ee+Me,x=Math.max(x,U.width/s),S=K==="below"?(ee+Me)/2:-(ee+Me)/2}else{let ee=U.width/s;x+=ee+Me,m=Math.max(m,U.height/s),y=K==="right"?(ee+Me)/2:-(ee+Me)/2}}}let v=g.backdropColor?je(g.backdropColor):[255,255,255,255],E=g.backdropShadowColor?je(g.backdropShadowColor):[0,0,0,128],_=v.map(U=>U/255),A=E.map(U=>U/255),L=g.backdropShadowBlur??12,T=g.backdropPadding??6,R=(g.backdropBorderColor?je(g.backdropBorderColor):[0,0,0,0]).map(U=>U/255),w=g.backdropBorderWidth??0,G=g.backdropCornerRadius??0,D=g.backdropLabelPadding??-1,z=D<0?T:D,O=Bu[g.backdropArea??"both"]??0,k={key:f,nodeIndex:u,label:g.label,labelWidth:x,labelHeight:m,textHeight:b,type:"default",position:g.labelPosition||Be.labelPosition,labelAngle:g.labelAngle??0,backdropColor:_,backdropShadowColor:A,backdropShadowBlur:L,backdropPadding:T,backdropBorderColor:R,backdropBorderWidth:w,backdropCornerRadius:G,backdropLabelPadding:z,backdropArea:O,labelBoxOffset:[y,S]};a.processBackdrop(c,k)}a.invalidateBuffers(),a.render(t)}}renderLabelBackgrounds(t,e){let{labelBackgroundProgram:a,nodeDataCache:i,nodeDataTexture:n}=this.internals,o=Q.nodeLabel.writesPickingThisFrame(this.internals),s=[];for(let l of this.displayedNodeLabels){let d=i[l];!d||d.visibility==="hidden"||e&&d.labelDepth!==e||!o&&!d.labelBackgroundColor||s.push(l)}if(s.length!==0){a.reallocate(s.length);for(let l=0;l<s.length;l++){let d=s[l],c=i[d],f=n?.getIndex(d)??-1;if(f<0)continue;let{width:u,height:g,textHeight:h}=this.measureNodeLabel(c),p=Oe(this.internals.pickingState,"nodeLabel",d)||Oe(this.internals.pickingState,"node",d),b=c.labelBackgroundColor?se(c.labelBackgroundColor):se("transparent"),x={nodeIndex:f,id:dt(p),color:b,labelWidth:u,labelHeight:g,textHeight:h,positionMode:qe[c.labelPosition||Be.labelPosition]??0,labelAngle:c.labelAngle??0,padding:c.labelBackgroundPadding??gi};a.processLabelBackground(l,x)}a.invalidateBuffers(),a.render(t)}}cacheAttachments(t){let{attachmentManager:e,pixelRatio:a,nodeDataCache:i,nodesWithBackdrop:n,graph:o}=this.internals;if(e){for(let s of n){if(!this.displayedNodeLabels.has(s))continue;let l=i[s];if(!l||l.visibility==="hidden"||t&&l.depth!==t||!l.labelAttachment)continue;let d=o.getNodeAttributes(s),{width:c,height:f}=this.measureNodeLabel(l),u={node:s,attributes:d,pixelRatio:a,labelWidth:c,labelHeight:f};e.renderAttachment(s,l.labelAttachment,u)}e.regenerateAtlas()}}renderAttachments(t,e){let{attachmentManager:a,attachmentProgram:i,nodeDataCache:n,nodesWithBackdrop:o,pixelRatio:s,nodeDataTexture:l}=this.internals;if(!a||!i)return;let d=0;i.reallocateAttachments(o.size);for(let c of o){if(!this.displayedNodeLabels.has(c))continue;let f=n[c];if(!f||f.visibility==="hidden"||e&&f.labelDepth!==e||!f.labelAttachment)continue;let u=a.getEntry(c,f.labelAttachment);if(!u)continue;let g=l?.getIndex(c)??-1;if(g<0)continue;let{width:h,height:p,textHeight:b}=this.measureNodeLabel(f),x=_i[f.labelAttachmentPlacement||"below"]??0;i.processAttachment(d,{nodeIndex:g,atlasX:u.x,atlasY:u.y,atlasW:u.width,atlasH:u.height,attachWidth:u.width/s,attachHeight:u.height/s,positionMode:qe[f.labelPosition||Be.labelPosition]??0,attachmentPlacement:x,labelWidth:h,labelHeight:p,textHeight:b,labelAngle:f.labelAngle??0}),d++}d!==0&&(i.reallocateAttachments(d),a.bindTexture(Rt),i.invalidateBuffers(),i.render(t))}computeDisplayedEdgeLabels(){let{graph:t,stateManager:e,settings:a,edgesWithForcedLabels:i}=this.internals,n=e.getHighlightedNodes(),o=a.edgeLabelAnchors==="allNodes"?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,a.labelDensity)):this.displayedNodeLabels,s=e.hovered,l=os({graph:t,hoveredNode:s?.kind==="node"?s.key:null,displayedNodeLabels:o,highlightedNodes:n});xi(l,i),this.edgeLabelCandidates=l,this.displayedEdgeLabels=new Set}filterEdgeLabelsForDepth(t){let{graph:e,nodeDataCache:a,edgeDataCache:i}=this.internals,n=[],o=new Set;for(let s=0,l=this.edgeLabelCandidates.length;s<l;s++){let d=this.edgeLabelCandidates[s];if(o.has(d))continue;o.add(d);let c=e.extremities(d),f=a[c[0]],u=a[c[1]],g=i[d];!g||!f||!u||g.visibility==="hidden"||g.labelVisibility==="hidden"||f.visibility==="hidden"||u.visibility==="hidden"||t&&g.labelDepth!==t||g.label&&n.push(d)}return n}renderEdgeLabels(t,e){let{graph:a,nodeDataCache:i,edgeDataCache:n,primitives:o,edgeLabelProgram:s,nodeDataTexture:l,edgeDataTexture:d}=this.internals,c=this.filterEdgeLabelsForDepth(e);for(let f of c)this.displayedEdgeLabels.add(f);if(c.length!==0){if(this.labelsDirty){let f=0;for(let p of c)f+=n[p].label.length;s.reallocate(f);let u=o?.edges?.label?.margin??5,g="over",h=0;for(let p of c){let b=a.extremities(p),x=b[0],m=b[1],y=i[x],S=i[m],v=n[p],E=l.getIndex(x),_=l.getIndex(m),A=d.getIndex(p),L={text:v.label,x:(y.x+S.x)/2,y:(y.y+S.y)/2,size:ss,color:v.labelColor,nodeSize:0,nodeIndex:-1,margin:u,position:v.labelPosition??g,hidden:!1,forceLabel:ke(v),type:"default",zIndex:v.zIndex??0,parentType:"edge",parentKey:p,fontKey:"",labelAngle:0,sourceX:y.x,sourceY:y.y,targetX:S.x,targetY:S.y,sourceSize:y.size,targetSize:S.size,sourceShape:y.shape||"circle",targetShape:S.shape||"circle",edgeSize:v.size,offset:0,edgeAttributes:v,sourceNodeIndex:E,targetNodeIndex:_,edgeIndex:A},T=s.processEdgeLabel(p,h,L);h+=T}s.invalidateBuffers()}s.render(t)}}renderEdgeLabelBackgrounds(t,e){let{edgeLabelBackgroundProgram:a,edgeLabelProgram:i,edgeDataCache:n,primitives:o,edgeDataTexture:s}=this.internals;if(!s)return;let l=Q.edgeLabel.writesPickingThisFrame(this.internals),d=o?.edges?.label?.margin??5,c="over",f=this.filterEdgeLabelsForDepth(e),u=[];for(let g of f)!l&&!n[g].labelBackgroundColor||u.push(g);if(u.length!==0){a.reallocate(u.length);for(let g=0;g<u.length;g++){let h=u[g],p=n[h],b=p.label,x=i.measureLabelAtlasWidth(b),m=p.labelPosition??c,y=typeof m=="string"?Ou[m]??0:0,S=Oe(this.internals.pickingState,"edgeLabel",h)||Oe(this.internals.pickingState,"edge",h),v=p.labelBackgroundColor?se(p.labelBackgroundColor):se("transparent"),E={edgeIndex:s.getIndex(h),baseFontSize:ss,totalTextWidth:x,positionMode:y,margin:d,padding:p.labelBackgroundPadding??Wu,color:v,id:dt(S),edgeAttributes:p};a.processEdgeLabelBackground(g,h,E)}a.invalidateBuffers(),a.render(t)}}};var Ba=class{constructor(t,e,a,i){this.scheduleRefresh=t;this.customNodeStateDefaults=e;this.customEdgeStateDefaults=a;this.customGraphStateDefaults=i;this.nodeStates=new Map;this.edgeStates=new Map;this.hovered=null;this.dirtyNodes=new Set;this.dirtyEdges=new Set;this.graphStateChanged=!1;this.graphStateFlagsDirty=!1;this.graphState=Oi(i)}getNodeState(t){t=""+t;let e=this.nodeStates.get(t);return e||(e=Mo(this.customNodeStateDefaults),this.nodeStates.set(t,e)),e}getEdgeState(t){t=""+t;let e=this.edgeStates.get(t);return e||(e=zo(this.customEdgeStateDefaults),this.edgeStates.set(t,e)),e}getGraphState(){return this.flushGraphStateFlags(),this.graphState}getHighlightedNodes(){let t=new Set;for(let[e,a]of this.nodeStates)a.isHighlighted&&t.add(e);return t}setNodeState(t,e){t=""+t;let a=this.getNodeState(t);if(!Lt(a,e))return;let i={...a,...e};this.nodeStates.set(t,i),this.dirtyNodes.add(t),this.updateHoveredNodeTracking(t,a,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}setEdgeState(t,e){t=""+t;let a=this.getEdgeState(t);if(!Lt(a,e))return;let i={...a,...e};this.edgeStates.set(t,i),this.dirtyEdges.add(t),this.updateHoveredEdgeTracking(t,a,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}setGraphState(t){if(!Lt(this.graphState,t))return;let e={...this.graphState,...t};e.isIdle=!e.isPanning&&!e.isZooming&&!e.isDragging,this.graphState=e,this.graphStateChanged=!0,this.scheduleRefresh()}setNodesState(t,e){let a=!1;for(let i of t){i=""+i;let n=this.getNodeState(i);if(!Lt(n,e))continue;let o={...n,...e};this.nodeStates.set(i,o),this.dirtyNodes.add(i),this.updateHoveredNodeTracking(i,n,o),a=!0}a&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}setEdgesState(t,e){let a=!1;for(let i of t){i=""+i;let n=this.getEdgeState(i);if(!Lt(n,e))continue;let o={...n,...e};this.edgeStates.set(i,o),this.dirtyEdges.add(i),this.updateHoveredEdgeTracking(i,n,o),a=!0}a&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}removeNode(t){this.nodeStates.delete(t),this.dirtyNodes.delete(t),this.clearHoveredFor("node",t)}removeEdge(t){this.edgeStates.delete(t),this.dirtyEdges.delete(t),this.clearHoveredFor("edge",t)}pruneNodes(t){for(let e of this.nodeStates.keys())t(e)||this.removeNode(e)}pruneEdges(t){for(let e of this.edgeStates.keys())t(e)||this.removeEdge(e)}clearNodes(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(Ia("node"))}clearEdges(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(Ia("edge"))}resetGraphState(){this.graphState=Oi(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}clearDirtyTracking(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}setHovered(t){this.hovered=t}clearHoveredFor(t,e){this.hovered&&this.hovered.key===e&&Ia(t).includes(this.hovered.kind)&&(this.hovered=null)}clearHoveredForKinds(t){this.hovered&&t.includes(this.hovered.kind)&&(this.hovered=null)}updateGraphStateFromNodes(){let t=!1,e=!1,a=!1;for(let[,n]of this.nodeStates)if(n.isHovered&&(t=!0),n.isHighlighted&&(e=!0),n.isDragged&&(a=!0),t&&e&&a)break;!t&&this.hovered?.kind==="edge"&&(t=!0);let i=!this.graphState.isPanning&&!this.graphState.isZooming&&!a;(this.graphState.hasHovered!==t||this.graphState.hasHighlighted!==e||this.graphState.isDragging!==a||this.graphState.isIdle!==i)&&(this.graphStateChanged=!0),this.graphState={...this.graphState,hasHovered:t,hasHighlighted:e,isDragging:a,isIdle:i}}updateGraphStateFromEdges(){let t=this.hovered?.kind==="node";if(!t){for(let[,e]of this.edgeStates)if(e.isHovered){t=!0;break}}this.graphState.hasHovered!==t&&(this.graphStateChanged=!0),this.graphState={...this.graphState,hasHovered:t}}flushGraphStateFlags(){this.graphStateFlagsDirty&&(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),this.graphStateFlagsDirty=!1)}updateHoveredNodeTracking(t,e,a){if(e.isHovered!==a.isHovered)if(a.isHovered){if(this.hovered?.kind==="node"&&this.hovered.key!==t){let i=this.hovered.key,n=this.getNodeState(i);this.nodeStates.set(i,{...n,isHovered:!1}),this.dirtyNodes.add(i)}this.hovered={kind:"node",key:t}}else this.hovered?.kind==="node"&&this.hovered.key===t&&(this.hovered=null)}updateHoveredEdgeTracking(t,e,a){if(e.isHovered!==a.isHovered)if(a.isHovered){if(this.hovered?.kind==="edge"&&this.hovered.key!==t){let i=this.hovered.key,n=this.getEdgeState(i);this.edgeStates.set(i,{...n,isHovered:!1}),this.dirtyEdges.add(i)}this.hovered={kind:"edge",key:t}}else this.hovered?.kind==="edge"&&this.hovered.key===t&&(this.hovered=null)}};function Uu(r){return typeof r=="object"&&"uniforms"in r&&Array.isArray(r.uniforms)}function $u(r){return typeof r=="object"&&"uniforms"in r&&"attributes"in r&&"glsl"in r}function Hu(r){return typeof r=="object"&&"uniforms"in r&&"attributes"in r&&"segments"in r}function Vu(r){return typeof r=="object"&&"uniforms"in r&&"attributes"in r&&"length"in r}function Xu(r){return typeof r=="object"&&"uniforms"in r&&"attributes"in r&&"glsl"in r}function qu(r){return typeof r=="object"&&"glsl"in r&&"name"in r&&!("uniforms"in r)}function ju(r){return typeof r=="object"&&"glsl"in r&&"name"in r&&!("uniforms"in r)}function Ku(r){return typeof r=="object"&&"glsl"in r&&"name"in r&&!("uniforms"in r)}function Yu(r){if(Uu(r))return r;if(qu(r))return{name:r.name,glsl:r.glsl,inradiusFactor:r.inradiusFactor,uniforms:[]};throw new Error(`Invalid node shape specification: ${JSON.stringify(r)}`)}function Zu(r){if($u(r))return r;if(Fo(r))return{name:r.name,glsl:r.glsl,uniforms:[],attributes:[]};throw new Error(`Invalid node layer specification: ${JSON.stringify(r)}`)}function Qu(r){if(Hu(r))return r;if(ju(r))return{name:r.name,glsl:r.glsl,segments:r.segments,uniforms:[],attributes:[]};throw new Error(`Invalid edge path specification: ${JSON.stringify(r)}`)}function Ju(r){if(Xu(r))return r;if(Io(r))return{name:r.name,glsl:r.glsl,uniforms:[],attributes:[]};throw new Error(`Invalid edge layer specification: ${JSON.stringify(r)}`)}function ec(r){if(Vu(r))return r;if(Ku(r))return{name:r.name,glsl:r.glsl,length:r.length,widthFactor:r.widthFactor,margin:0,uniforms:[],attributes:[]};throw new Error(`Invalid edge extremity specification: ${JSON.stringify(r)}`)}function ls(r){let t=r?.shapes??Sr.shapes,e=r?.layers??Sr.layers,a=t.map(Yu),i=e.map(Zu);if(a.length===0)throw new Error("At least one node shape must be specified.");if(i.length===0)throw new Error("At least one node layer must be specified.");return{shapes:a,layers:i}}function tc(r){let t=r?.paths??zt.paths,e=r?.extremities??zt.extremities,a=r?.layers??zt.layers,i=t.map(Qu),n=e.map(ec).filter(s=>s!==null),o=a.map(Ju);if(i.length===0)throw new Error("At least one edge path must be specified.");if(o.length===0)throw new Error("At least one edge layer must be specified.");return{paths:i,extremities:n,layers:o}}function ds(r,t){let e={};for(let a of r)a.variables&&Object.assign(e,a.variables);return Object.assign(e,t||{}),e}function us(r,t,e,a,i){let{shapes:n,layers:o}=ls(a),s=ds(n,a?.variables);return{...Gi(r,t,e,{shapes:n,layers:o,label:a?.label,backdrop:a?.backdrop,labelAttachments:a?.labelAttachments},i),variables:s}}function cs(r,t,e,a,i,n){let{paths:o,extremities:s,layers:l}=tc(a),{shapes:d,layers:c}=ls(n),f=ds(o,a?.variables);return{...zi(r,t,e,{paths:o,extremities:s,layers:l,defaultHead:a?.defaultHead,defaultTail:a?.defaultTail,label:a?.label},i,d,c),variables:f,paths:o}}var hs=1,gs=2,fs=3,ps=4,Cr=class extends et{constructor(e,a,i={}){super();this.nodeReducer=null;this.edgeReducer=null;this.stageCanvas=null;this.mouseLayer=null;this.gestureHint=null;this.extraElements={};this.webGLContext=null;this.pickingFrameBuffer=null;this.pickingTexture=null;this.pickingDepthBuffer=null;this.activeListeners={};this.nodeVariableEntries=[];this.edgeVariableEntries=[];this.edgePathsByName=new Map;this.nodeProgramIndex={};this.edgeProgramIndex={};this.edgeTextureIndexCache={};this.nodeGraphCoords={};this.nodeExtent={x:[0,1],y:[0,1]};this.matrix=de();this.invMatrix=de();this.correctionRatio=1;this.frameId=0;this.customBBox=null;this.gpuTimerExt=void 0;this.activeGpuTimerQuery=null;this.pendingGpuTimerQueries=[];this.normalizationFunction=dr({x:[0,1],y:[0,1]});this.graphToViewportRatio=1;this.pickingState=qo();this.prevNodeVisibilities={};this.width=0;this.height=0;this.autoRescaleFrozen=!1;this.stylesDeclaration=null;this.resolvedStageStyle={};this.renderFrame=null;this.contextLost=!1;this.pendingProcess="full";this.needToRefreshState=!1;this.checkEdgesEventsFrame=null;this.edgeStyleAnalysis={dependency:"static",xAttribute:null,yAttribute:null};this.depthLayers=[...Tr];this.customLayerPrograms=new Map;this.nodeShapeSlug=null;this.sdfAtlas=null;this.depthRanges={nodes:{},edges:{}};this.nodeBaseDepth={};this.edgeBaseDepth={};let{primitives:n,styles:o,settings:s={},nodeReducer:l,edgeReducer:d,customNodeState:c,customEdgeState:f,customGraphState:u}=i;this.stateManager=new Ba(()=>this.scheduleStateRefresh(),c,f,u);let g=n??$o;this.stylesDeclaration=o?{nodes:o.nodes??ze.nodes,edges:o.edges??ze.edges,stage:o.stage}:ze,this.nodeReducer=l??null,this.edgeReducer=d??null;let h=La(this.stylesDeclaration.nodes);this.nodeReducer&&(h.dependency="graph-state"),this.edgeStyleAnalysis=La(this.stylesDeclaration.edges),this.edgeReducer&&(this.edgeStyleAnalysis.dependency="graph-state"),this.stylesDeclaration.stage&&(this.resolvedStageStyle=Vi(this.stylesDeclaration.stage,this.stateManager.graphState));let p=Vo(s);if(wa(p),p.enableNodeDrag){let{xAttribute:T,yAttribute:N}=h;if((!T||!N)&&!p.dragPositionToAttributes)throw new Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(lo(e),!(a instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");this.container=a,this.edgeGroups=new Na(e,(T,N)=>{for(let R=0;R<T.length;R++){let w=this.stateManager.getEdgeState(T[R]);w.parallelIndex=R,w.parallelCount=N}});let b=new Ga(e,this.viewportToGraph.bind(this),this.setNodesState.bind(this),(T,N)=>this.emit(T,N));if(this.depthLayers=g.depthLayers??[...Tr],!o?.nodes&&!vr.every(T=>this.depthLayers.includes(T)))throw new Error(`Sigma: depthLayers must include ${vr.join(", ")} for the built-in node styles.`);if(!o?.edges&&!Er.every(T=>this.depthLayers.includes(T)))throw new Error(`Sigma: depthLayers must include ${Er.join(", ")} for the built-in edge styles.`);this.itemBuckets={nodes:new kt(this.depthLayers),edges:new kt(this.depthLayers)},this.initWebGLContext(),this.mouseLayer=ct("div",{position:"absolute",touchAction:"none",userSelect:"none"},{class:"sigma-mouse"}),this.container.appendChild(this.mouseLayer),this.resolvedStageStyle.background&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.resolvedStageStyle.cursor&&(this.container.style.cursor=this.resolvedStageStyle.cursor);let x=new xr(this.webGLContext),m=new Mt(this.webGLContext,{channels:1}),y=new yr(this.webGLContext),S=new Mt(this.webGLContext,{channels:4}),v=this.webGLContext,E=new ka({gl:v,getFrameBuffer:()=>this.pickingFrameBuffer,getPixelRatio:()=>this.internals.pixelRatio,getDownSizingRatio:()=>this.internals.settings.pickingDownSizingRatio,isRenderPending:()=>this.renderFrame!==null,onIndex:(T,N)=>Ji(this.internals,this.pickingState.lookup[T]??null,N)}),_=this.initPrograms(g,p),A=g?.nodes?.labelAttachments,L=null;A&&Object.keys(A).length>0&&(L=new Ct(v,A,()=>this.scheduleRender())),this.internals={nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:p,primitives:g,pixelRatio:lr(),graph:e,stateManager:this.stateManager,dragManager:b,hoverResolver:E,nodeStyleAnalysis:h,pickingState:this.pickingState,..._,attachmentManager:L,nodeDataTexture:x,nodeFrameTexture:m,edgeDataTexture:y,edgeFrameTexture:S,getDimensions:()=>this.getDimensions(),getGraphDimensions:()=>this.getGraphDimensions(),getStagePadding:()=>this.getStagePadding(),getCameraState:()=>this.camera.getState(),getHitAtPosition:T=>this.getHitAtPosition(T),setNodeState:(T,N)=>this.setNodeState(T,N),setEdgeState:(T,N)=>this.setEdgeState(T,N),updateContainerCursor:()=>this.updateContainerCursor(),scheduleRefresh:()=>this.scheduleRefresh(),viewportToFramedGraph:T=>this.viewportToFramedGraph(T),viewportToGraph:T=>this.viewportToGraph(T),framedGraphToViewport:T=>this.framedGraphToViewport(T),scaleSize:T=>this.scaleSize(T),emit:(T,N)=>this.emit(T,N)},this.labelRenderer=new za(this.internals),this.resize(),this.initializeWebGLLabels(),this.camera=new ht,this.bindCameraHandlers(),this.mouseCaptor=new Wt(this.mouseLayer,this),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor=new Ut(this.mouseLayer,this),this.touchCaptor.setSettings(this.internals.settings),this.bindEventHandlers(),this.bindGraphHandlers(),this.handleSettingsUpdate(),this.refresh()}initializeWebGLLabels(){this.sdfAtlas=new Ee,this.sdfAtlas.registerFont({family:"sans-serif",weight:"normal",style:"normal"})}resetWebGLTexture(){let e=this.webGLContext;if(!this.pickingFrameBuffer)return this;let a=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),i=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);e.bindFramebuffer(e.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&e.deleteTexture(this.pickingTexture);let n=e.createTexture();n&&(e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,a,i,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),this.pickingTexture=n),this.pickingDepthBuffer&&e.deleteRenderbuffer(this.pickingDepthBuffer);let o=e.createRenderbuffer();return o&&(e.bindRenderbuffer(e.RENDERBUFFER,o),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,a,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,o),this.pickingDepthBuffer=o),e.bindFramebuffer(e.FRAMEBUFFER,null),this}bindCameraHandlers(){return this.activeListeners.camera=()=>{this.refreshMatrices(),this.labelRenderer.labelsDirty=!0,this.scheduleRender()},this.activeListeners.cameraAnimationStart=({from:e,to:a})=>{e.ratio!==a.ratio&&this.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=()=>{this.stateManager.setGraphState({isZooming:!1})},this.camera.on("updated",this.activeListeners.camera),this.camera.on("animationStart",this.activeListeners.cameraAnimationStart),this.camera.on("animationEnd",this.activeListeners.cameraAnimationEnd),this}unbindCameraHandlers(){return this.camera.removeListener("updated",this.activeListeners.camera),this.camera.removeListener("animationStart",this.activeListeners.cameraAnimationStart),this.camera.removeListener("animationEnd",this.activeListeners.cameraAnimationEnd),this}getHitAtPosition(e){if(this.contextLost)return null;let a=this.webGLContext;a.bindFramebuffer(a.FRAMEBUFFER,this.pickingFrameBuffer);let i=to(a,this.pickingFrameBuffer,e.x,e.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),n=Zr(...i);return this.pickingState.lookup[n]??null}bindEventHandlers(){return es(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}bindGraphHandlers(){return ts({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}unbindGraphHandlers(){rs(this.internals.graph,this.activeListeners)}getNodeShapeId(e){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&e.shape&&e.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[e.shape]]:st(e.shape||"circle")}processNodes(){let e=this.internals.graph,a=this.internals.settings,i=this.getDimensions(),{autoRescale:n,autoRescaleContent:o}=a,s=this.nodeExtent;if(n===!1){let{width:p,height:b}=i;s={x:[-p/2,p/2],y:[-b/2,b/2]}}else(n!=="once"||!this.autoRescaleFrozen)&&(s=this.computeNodeExtent(),o!=="positions"&&!this.customBBox&&(s=is({extent:s,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:i,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:a.zoomToSizeRatioFunction,itemSizesReference:a.itemSizesReference,fitLabels:o==="labels",nodeLabelBox:(p,b)=>this.labelRenderer.nodeLabelBox(p,b)})),n==="once"&&(this.autoRescaleFrozen=!0));this.nodeExtent=s,this.normalizationFunction=dr(this.customBBox||this.nodeExtent);let l=new ht,d=De(l.getState(),i,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(i,a.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(i,a.labelGridCellSize);let c=a.renderEdgeLabels&&a.edgeLabelAnchors==="allNodes",f=!1;Fa(this.pickingState,"node");let u=e.nodes();for(let p=0,b=u.length;p<b;p++){let x=u[p],m=this.internals.nodeDataCache[x],y=this.nodeGraphCoords[x];m.x=y.x,m.y=y.y,this.normalizationFunction.applyTo(m),m.visibility!==this.prevNodeVisibilities[x]&&(f=!0),typeof m.label=="string"&&m.visibility!=="hidden"&&m.labelVisibility!=="hidden"&&this.labelRenderer.labelGrid.add(x,m.size,this.framedGraphToViewport(m,{matrix:d})),c&&m.visibility!=="hidden"&&this.labelRenderer.edgeAnchorGrid.add(x,m.size,this.framedGraphToViewport(m,{matrix:d}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(u.length);let g=0;this.depthRanges.nodes={},this.nodeBaseDepth={};let h=this.internals.nodeDataCache;for(let p of this.depthLayers){let b=this.itemBuckets.nodes.getSorted(p,x=>h[x].zIndex);if(b.length!==0){this.depthRanges.nodes[p]=[{offset:g,count:b.length}];for(let x of b)this.nodeBaseDepth[x]=p,this.nodeProgram.allocateNode(x),Yi(this.pickingState,"node",x),this.addNodeToProgram(x,g++)}}this.nodeProgram.invalidateBuffers();for(let p=0,b=u.length;p<b;p++)this.prevNodeVisibilities[u[p]]=this.internals.nodeDataCache[u[p]].visibility;this.labelRenderer.processWebGLLabels(u);for(let{program:p}of this.customLayerPrograms.values())p.cacheData&&p.cacheData();return f}processEdges(){let a=this.internals.graph.edges();this.edgeProgram.reallocate(a.length);let i=0;Fa(this.pickingState,"edge"),this.depthRanges.edges={},this.edgeBaseDepth={};let n=this.internals.edgeDataCache;for(let o of this.depthLayers){let s=this.itemBuckets.edges.getSorted(o,l=>n[l].zIndex);if(s.length!==0){this.depthRanges.edges[o]=[{offset:i,count:s.length}];for(let l of s)this.edgeBaseDepth[l]=o,Yi(this.pickingState,"edge",l),this.addEdgeToProgram(l,i++)}}this.edgeProgram.invalidateBuffers()}updateNodeDepthRanges(e,a,i){let n=this.nodeProgramIndex[e];n!==void 0&&(Si(this.depthRanges.nodes,a,n),vi(this.depthRanges.nodes,i,n))}updateEdgeDepthRanges(e,a,i){let n=this.edgeProgramIndex[e];n!==void 0&&(Si(this.depthRanges.edges,a,n),vi(this.depthRanges.edges,i,n))}handleSettingsUpdate(){let e=this.internals.settings;return this.camera.minRatio=e.minCameraRatio,this.camera.maxRatio=e.maxCameraRatio,this.camera.enabledZooming=e.enableCameraZooming,this.camera.enabledPanning=e.enableCameraPanning,this.camera.enabledRotation=e.enableCameraRotation,e.cameraPanBoundaries?this.camera.constrainState=a=>this.cleanCameraState(a,e.cameraPanBoundaries&&typeof e.cameraPanBoundaries=="object"?e.cameraPanBoundaries:{}):this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=e.gestureTarget==="graph"?"none":e.gestureTarget==="shared"?"pan-x pan-y":"auto",e.gestureTarget!=="shared"&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}cleanCameraState(e,{tolerance:a=0,boundaries:i}={}){let n={...e},{x:[o,s],y:[l,d]}=i||this.nodeExtent,c=[this.graphToViewport({x:o,y:l},{cameraState:e}),this.graphToViewport({x:s,y:l},{cameraState:e}),this.graphToViewport({x:o,y:d},{cameraState:e}),this.graphToViewport({x:s,y:d},{cameraState:e})],f=1/0,u=-1/0,g=1/0,h=-1/0;c.forEach(({x:v,y:E})=>{f=Math.min(f,v),u=Math.max(u,v),g=Math.min(g,E),h=Math.max(h,E)});let p=u-f,b=h-g,{width:x,height:m}=this.getDimensions(),y=0,S=0;if(p>=x?u<x-a?y=u-(x-a):f>a&&(y=f-a):u>x+a?y=u-(x+a):f<-a&&(y=f+a),b>=m?h<m-a?S=h-(m-a):g>a&&(S=g-a):h>m+a?S=h-(m+a):g<-a&&(S=g+a),y||S){let v=this.viewportToFramedGraph({x:0,y:0},{cameraState:e}),E=this.viewportToFramedGraph({x:y,y:S},{cameraState:e});y=E.x-v.x,S=E.y-v.y,n.x+=y,n.y+=S}return n}refreshMatrices(){let e=this.camera.getState(),a=this.getDimensions(),i=this.getGraphDimensions(),n=this.getStagePadding();this.matrix=De(e,a,i,n),this.invMatrix=De(e,a,i,n,!0),this.correctionRatio=Zn(this.matrix,e,a),this.graphToViewportRatio=this.getGraphToViewportRatio()}processData(){this.emit("beforeProcess"),this.internals.attachmentManager?.clear();let e={...this.pickingState.idsByKind},a=this.processNodes();(this.pendingProcess==="full"||a)&&this.processEdges(),jo(this.pickingState,this.internals),Ko(e,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess="none",this.emit("afterProcess")}render(){if(this.contextLost)return this;this.emit("beforeRender");let e=()=>(this.internals.hoverResolver.frameRendered(),this.emit("afterRender"),this);if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),(this.pendingProcess!=="none"||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!=="none"&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!=="none"&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return e();let a=this.mouseCaptor,i=this.camera.isAnimating()||a.isMoving||a.draggedEvents||a.currentWheelDirection;this.refreshMatrices(),this.frameId++;let n=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;n&&n.forEach(u=>u.resetDebugStats()),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());let o=this.getRenderParams(),s=Q.edge.writesPickingThisFrame(this.internals)?o:{...o,pickingFrameBuffer:null};this.labelRenderer.resetFrame();let l=this.webGLContext,d=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),c=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(l.bindFramebuffer(l.FRAMEBUFFER,this.pickingFrameBuffer),l.viewport(0,0,d,c),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit("afterTexturesUpload"),this.internals.nodeDataTexture.bind(fs),this.internals.edgeDataTexture.bind(ps),this.edgeFramePass.run(o,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(hs),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();let{data:u,count:g}=this.labelRenderer.buildFramePassPoints();this.nodeFramePass.run(u,g,this.internals.nodeFrameTexture,o,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(gs)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();for(let{program:u}of this.customLayerPrograms.values())u.preRender&&u.preRender(o);l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA);let f=!this.internals.settings.hideLabelsOnMove||!i;for(let u of this.depthLayers){for(let p of this.customLayerPrograms.values())p.depth===u&&p.program.render(o);let g=this.depthRanges.edges[u];if(g&&(!this.internals.settings.hideEdgesOnMove||!i))for(let{offset:p,count:b}of g)b>0&&this.edgeProgram.render(s,p,b);this.internals.settings.renderEdgeLabels&&f&&(this.labelRenderer.renderEdgeLabelBackgrounds(Q.edgeLabel.writesPickingThisFrame(this.internals)?o:{...o,pickingFrameBuffer:null},u),this.labelRenderer.renderEdgeLabels(o,u)),this.labelRenderer.cacheAttachments(u),this.labelRenderer.renderBackdrops({...o,pickingFrameBuffer:null},u);let h=this.depthRanges.nodes[u];if(h)for(let{offset:p,count:b}of h)b>0&&this.nodeProgram.render(o,p,b);f&&(this.labelRenderer.renderAttachments({...o,pickingFrameBuffer:null},u),this.labelRenderer.renderLabelBackgrounds(Q.nodeLabel.writesPickingThisFrame(this.internals)?o:{...o,pickingFrameBuffer:null},u),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(o,u))}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(l.bindFramebuffer(l.READ_FRAMEBUFFER,this.pickingFrameBuffer),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.blitFramebuffer(0,0,d,c,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,l.COLOR_BUFFER_BIT,l.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),n&&this.logRenderStats(n),e()}getDebugPrograms(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(e=>e!==null)}logRenderStats(e){let a={};for(let i of e)a[i.constructor.name]={...i.debugStats};console.log(`[sigma] DEBUG_logRenderStats: frame #${this.frameId}`),console.table(a)}getGpuTimerExtension(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension("EXT_disjoint_timer_query_webgl2"),this.gpuTimerExt||console.warn("Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.")),this.gpuTimerExt}beginGpuTimerQuery(){let e=this.getGpuTimerExtension();if(!e)return;let a=this.webGLContext,i=a.createQuery();i&&(a.beginQuery(e.TIME_ELAPSED_EXT,i),this.activeGpuTimerQuery=i)}endGpuTimerQuery(){!this.gpuTimerExt||!this.activeGpuTimerQuery||(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}pollGpuTimerQueries(){if(this.pendingGpuTimerQueries.length===0)return;let e=this.webGLContext,a=this.gpuTimerExt;if(!a){this.pendingGpuTimerQueries.forEach(({query:o})=>e.deleteQuery(o)),this.pendingGpuTimerQueries=[];return}let i=e.getParameter(a.GPU_DISJOINT_EXT),n=[];for(let o of this.pendingGpuTimerQueries){if(!e.getQueryParameter(o.query,e.QUERY_RESULT_AVAILABLE)){n.push(o);continue}if(!i){let s=e.getQueryParameter(o.query,e.QUERY_RESULT);console.log(`[sigma] DEBUG_gpuTimerQueries: frame #${o.frameId} GPU time = ${(s/1e6).toFixed(2)}ms`)}e.deleteQuery(o.query)}this.pendingGpuTimerQueries=n}postEvaluateNode(e,a,i){let n=e;n.x===void 0&&(n.x=a.x),n.y===void 0&&(n.y=a.y),e.highlighted=i.isHighlighted;for(let o=0,s=this.nodeVariableEntries.length;o<s;o++){let[l,d]=this.nodeVariableEntries[o];n[l]=n[l]??a[l]??d.default}}addNode(e){let a=this.internals.graph.getNodeAttributes(e),i=this.stateManager.getNodeState(e),n=this.internals.nodeDataCache[e]||{};if(Ra(this.stylesDeclaration.nodes,a,i,this.stateManager.graphState,this.internals.graph,n),this.postEvaluateNode(n,a,i),this.nodeReducer){let o=this.nodeReducer(e,n,a,i,this.stateManager.graphState,this.internals.graph);n={...n,...o}}if(typeof n.x!="number"||typeof n.y!="number")throw new Error(`Sigma: could not find a valid position (x, y) for node "${e}". Provide coordinates via node attributes, styles, or a nodeReducer.`);this.internals.nodeShapeMap?(!n.shape||!(n.shape in this.internals.nodeShapeMap))&&(n.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(n.shape=this.nodeShapeSlug),this.internals.nodeDataCache[e]=n,this.nodeGraphCoords[e]={x:n.x,y:n.y},ut(this.internals.nodesWithForcedLabels,e,ke(n)),ut(this.internals.nodesWithBackdrop,e,yi(n)),this.itemBuckets.nodes.set(e,n.depth)}updateNode(e){this.addNode(e);let a=this.internals.nodeDataCache[e];this.normalizationFunction.applyTo(a)}removeNode(e){this.itemBuckets.nodes.remove(e),delete this.internals.nodeDataCache[e],delete this.nodeGraphCoords[e],delete this.nodeProgramIndex[e],this.internals.dragManager.removeNode(e),this.stateManager.removeNode(e),this.internals.nodesWithForcedLabels.delete(e),this.internals.nodesWithBackdrop.delete(e)}postEvaluateEdge(e,a){let i=e;for(let n=0,o=this.edgeVariableEntries.length;n<o;n++){let[s,l]=this.edgeVariableEntries[n];i[s]=i[s]??a[s]??l.default}}applyEdgeSpread(e,a,i){if(i.parallelCount<=1)return;let n=this.internals.graph.source(e),o=this.internals.graph.target(e),s=n===o,l=s?a.selfLoopPath||a.path:a.parallelPath||a.path,d=l?this.edgePathsByName.get(l):void 0;if(!d?.spread)return;let c=a.parallelSpread??.25,f=d.spread.compute(i.parallelIndex,i.parallelCount,c);!s&&this.internals.graph.isDirected(e)&&n>o&&(f=-f),a[d.spread.variable]=f}addEdge(e){let a=this.internals.graph.getEdgeAttributes(e),i=this.stateManager.getEdgeState(e),n={};if(Pa(this.stylesDeclaration.edges,a,i,this.stateManager.graphState,this.internals.graph,n),this.postEvaluateEdge(n,a),this.edgeReducer){let o=this.edgeReducer(e,n,a,i,this.stateManager.graphState,this.internals.graph);n={...n,...o}}this.applyEdgeSpread(e,n,i),this.internals.edgeDataCache[e]=n,ut(this.internals.edgesWithForcedLabels,e,ke(n)),this.itemBuckets.edges.set(e,n.depth)}updateEdge(e){this.addEdge(e)}removeEdge(e){this.itemBuckets.edges.remove(e),delete this.internals.edgeDataCache[e],delete this.edgeProgramIndex[e],delete this.edgeTextureIndexCache[e],this.internals.edgeDataTexture.free(e),this.stateManager.removeEdge(e),this.internals.edgesWithForcedLabels.delete(e)}clearNodeIndices(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}clearEdgeIndices(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),Fa(this.pickingState,"edge"),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}clearIndices(){this.clearEdgeIndices(),this.clearNodeIndices()}clearNodeState(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}clearEdgeState(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}clearState(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}addNodeToProgram(e,a){let i=this.internals.nodeDataCache[e];this.internals.nodeDataTexture.allocate(e),this.internals.nodeDataTexture.updateNode(e,i.x,i.y,i.size,this.getNodeShapeId(i),...Qr(i),i.color);let n=this.internals.nodeDataTexture.getIndex(e);this.nodeProgram.process(Oe(this.pickingState,"node",e),a,i,n,e),this.nodeProgramIndex[e]=a}addEdgeToProgram(e,a){let i=this.internals.edgeDataCache[e],n=this.internals.graph.source(e),o=this.internals.graph.target(e),s=this.internals.edgeDataTexture.allocate(e);this.edgeTextureIndexCache[e]=s;let l=n===o,d=!l&&(this.stateManager.getEdgeState(e)?.parallelCount??1)>1,{pathId:c,headId:f,tailId:u,headLengthRatio:g,tailLengthRatio:h}=this.edgeProgram.resolveEdgeIds(i,l,d);this.internals.edgeDataTexture.updateEdge(e,this.internals.nodeDataTexture.getIndex(n),this.internals.nodeDataTexture.getIndex(o),i.size,g,h,c,f,u),this.edgeProgram.process(Oe(this.pickingState,"edge",e),a,this.internals.nodeDataCache[n],this.internals.nodeDataCache[o],i,s),this.edgeProgramIndex[e]=a}getRenderParams(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:fs,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:gs,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:ps,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:hs,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:this.internals.settings.labelPixelSnapping?1:0}}getStagePadding(){let{stagePadding:e,autoRescale:a}=this.internals.settings;return a&&e||0}getLayerElement(e){if(e==="mouse")return this.mouseLayer;let a=this.extraElements[e];if(!a)throw new Error(`Sigma: layer "${e}" does not exist`);return a}initWebGLContext(){let e=this.createWebGLContext("stage");this.stageCanvas=this.extraElements.stage,this.webGLContext=e,this.stageCanvas.addEventListener("webglcontextlost",a=>{this.webGLContext&&(a.preventDefault(),this.contextLost=!0,this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.gpuTimerExt=void 0,this.activeGpuTimerQuery=null,this.pendingGpuTimerQueries=[],this.emit("webglContextLost"))}),this.stageCanvas.addEventListener("webglcontextrestored",()=>{requestAnimationFrame(()=>{this.webGLContext&&!this.webGLContext.isContextLost()&&this.restoreWebGLContext()})}),this.initPickingFramebuffer()}initPickingFramebuffer(){let e=this.webGLContext,a=e.createFramebuffer();if(!a)throw new Error("Sigma: cannot create picking frame buffer");e.bindFramebuffer(e.FRAMEBUFFER,a);let i=e.createTexture();if(!i)throw new Error("Sigma: cannot create picking texture");e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);let n=e.createRenderbuffer();if(!n)throw new Error("Sigma: cannot create picking depth buffer");if(e.bindRenderbuffer(e.RENDERBUFFER,n),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,1,1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,n),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw new Error("Sigma: picking framebuffer is not complete");e.bindFramebuffer(e.FRAMEBUFFER,null),this.pickingFrameBuffer=a,this.pickingTexture=i,this.pickingDepthBuffer=n}initPrograms(e,a){let i=this,n=this.webGLContext,{nodeProgram:o,labelProgram:s,backdropProgram:l,labelBackgroundProgram:d,attachmentProgram:c,framePass:f,shapeSlug:u,shapeNameToIndex:g,shapeGlobalIds:h,variables:p}=us(n,this.pickingFrameBuffer,i,e?.nodes,a.antialiasNodes);this.nodeProgram=o,this.nodeFramePass=f,this.nodeVariableEntries=Object.entries(p),u&&(this.nodeShapeSlug=u);let{edgeProgram:b,labelProgram:x,labelBackgroundProgram:m,framePass:y,variables:S,paths:v}=cs(n,this.pickingFrameBuffer,i,e?.edges,a.antialiasEdges,e?.nodes);return this.edgeProgram=b,this.edgeFramePass=y,this.edgeVariableEntries=Object.entries(S),this.edgePathsByName=new Map(v.map(E=>[E.name,E])),{labelProgram:s,edgeLabelProgram:x,edgeLabelBackgroundProgram:m,backdropProgram:l,labelBackgroundProgram:d,attachmentProgram:c,nodeShapeMap:g??null,nodeGlobalShapeIds:h??null}}restoreWebGLContext(){let e=this.internals;this.initPickingFramebuffer(),e.nodeDataTexture?.restore(),e.nodeFrameTexture?.restore(),e.edgeDataTexture?.restore(),e.edgeFrameTexture?.restore(),e.attachmentManager?.restore(),e.hoverResolver.reset(),Object.assign(e,this.initPrograms(e.primitives,e.settings));for(let a of this.customLayerPrograms.values())a.program.kill(),a.program=a.factory(this.webGLContext);this.contextLost=!1,this.emit("webglContextRestored"),this.refresh()}createLayer(e,a,i={}){if(this.extraElements[e])throw new Error(`Sigma: a layer named "${e}" already exists`);let n=ct(a,{position:"absolute"},{class:`sigma-${e}`});return i.style&&Object.assign(n.style,i.style),this.extraElements[e]=n,"beforeLayer"in i&&i.beforeLayer?this.getLayerElement(i.beforeLayer).before(n):"afterLayer"in i&&i.afterLayer?this.getLayerElement(i.afterLayer).after(n):this.container.appendChild(n),n}createCanvas(e,a={}){return this.createLayer(e,"canvas",a)}createWebGLContext(e,a={}){let i=this.createCanvas(e,a);a.hidden&&i.remove();let n=i.getContext("webgl2",{preserveDrawingBuffer:!1,antialias:!1,depth:!0,...a});if(!n)throw new Error("Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).");return n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n}killLayer(e){if(e==="stage"||e==="mouse")throw new Error(`Sigma: cannot kill built-in layer "${e}"`);let a=this.extraElements[e];if(!a)throw new Error(`Sigma: cannot kill layer ${e}, which does not exist`);return a.remove(),delete this.extraElements[e],this}getWebGLContext(){if(!this.webGLContext)throw new Error("Sigma: WebGL context is not available");return this.webGLContext}getNodeDataTexture(){if(!this.internals.nodeDataTexture)throw new Error("Sigma: node data texture is not available");return this.internals.nodeDataTexture}getNormalizationFunction(){return this.normalizationFunction}addCustomLayerProgram(e,a,i){if(!this.depthLayers.includes(a))throw new Error(`Sigma: cannot add custom layer program at depth "${a}", it must be declared in primitives.depthLayers. Current layers: ${this.depthLayers.join(", ")}`);return this.customLayerPrograms.get(e)?.program.kill(),this.customLayerPrograms.set(e,{depth:a,factory:i,program:i(this.webGLContext)}),this.refresh(),this}removeCustomLayerProgram(e){let a=this.customLayerPrograms.get(e);return a&&(a.program.kill(),this.customLayerPrograms.delete(e),this.scheduleRender()),this}getCamera(){return this.camera}setCamera(e){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=e,this.bindCameraHandlers(),this.scheduleRender(),this}getContainer(){return this.container}getGraph(){return this.internals.graph}setGraph(e){return e===this.internals.graph?this:(this.stateManager.pruneNodes(a=>e.hasNode(a)),this.stateManager.pruneEdges(a=>e.hasEdge(a)),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=e,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh(),this)}getMouseCaptor(){return this.mouseCaptor}getTouchCaptor(){return this.touchCaptor}getDimensions(){return{width:this.width,height:this.height}}getGraphDimensions(){let e=this.customBBox||this.nodeExtent;return{width:e.x[1]-e.x[0]||1,height:e.y[1]-e.y[0]||1}}getNodeDisplayData(e){let a=this.internals.nodeDataCache[e];return a?Object.assign({},a):void 0}getEdgeDisplayData(e){let a=this.internals.edgeDataCache[e];return a?Object.assign({},a):void 0}getNodeState(e){return this.stateManager.getNodeState(e)}getEdgeState(e){return this.stateManager.getEdgeState(e)}getGraphState(){return this.stateManager.getGraphState()}setNodeState(e,a){return this.stateManager.setNodeState(e,a),this}setEdgeState(e,a){return this.stateManager.setEdgeState(e,a),this}setGraphState(e){return this.stateManager.setGraphState(e),this}_setPanning(e){this.stateManager.setGraphState({isPanning:e})}_setZooming(e){this.stateManager.setGraphState({isZooming:e})}_hasNodeDrag(){let{dragManager:e}=this.internals;return!!(e.pendingNode||e.session)}_showGestureHint(e){let a=this.internals.settings;a.gestureTarget==="shared"&&(this.gestureHint=this.gestureHint||new Pr(this.container),this.gestureHint.show(e,a))}setNodesState(e,a){return this.stateManager.setNodesState(e,a),this}setEdgesState(e,a){return this.stateManager.setEdgesState(e,a),this}updateContainerCursor(){let e=this.stateManager.hovered,a=this.resolvedStageStyle.cursor||"";this.container.style.cursor=e&&Yo(this.internals,e)||a}refreshStageStyle(){this.resolvedStageStyle=Vi(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}getNodeDisplayedLabels(){return new Set(this.labelRenderer.displayedNodeLabels)}getEdgeDisplayedLabels(){return new Set(this.labelRenderer.displayedEdgeLabels)}getSettings(){return{...this.internals.settings}}getSetting(e){return this.internals.settings[e]}getStyles(){return{...this.stylesDeclaration}}getPrimitives(){return{...this.internals.primitives}}setSetting(e,a){return this.internals.settings[e]=a,wa(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}updateSetting(e,a){return this.setSetting(e,a(this.internals.settings[e])),this}setSettings(e){return this.internals.settings={...this.internals.settings,...e},wa(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}resize(e){let a=this.width,i=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=lr(),this.width===0)if(this.internals.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.internals.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!e&&a===this.width&&i===this.height)return this;this.labelRenderer.labelsDirty=!0;for(let n of[this.mouseLayer,...Object.values(this.extraElements)])n.style.width=this.width+"px",n.style.height=this.height+"px";return this.webGLContext&&(this.stageCanvas.setAttribute("width",this.width*this.internals.pixelRatio+"px"),this.stageCanvas.setAttribute("height",this.height*this.internals.pixelRatio+"px"),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit("resize"),this}clear(){return this.emit("beforeClear"),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit("afterClear"),this}scheduleStateRefresh(){this.needToRefreshState=!0,this.scheduleRender()}refreshState(){this.stateManager.flushGraphStateFlags();let e=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency==="graph-state",a=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency==="graph-state",i=!1;if(e)this.internals.graph.forEachNode(n=>{this.refreshNodeState(n)&&(i=!0)});else if(this.internals.nodeStyleAnalysis.dependency!=="static")for(let n of this.stateManager.dirtyNodes)this.refreshNodeState(n)&&(i=!0);if(a)this.internals.graph.forEachEdge(n=>{this.refreshEdgeState(n)&&(i=!0)});else if(this.edgeStyleAnalysis.dependency!=="static")for(let n of this.stateManager.dirtyEdges)this.refreshEdgeState(n)&&(i=!0);this.stateManager.graphStateChanged&&this.stylesDeclaration?.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),i&&(this.pendingProcess="full")}refreshNodeState(e){let a=this.internals.nodeDataCache[e];if(!a||this.nodeReducer){let x=this.internals.nodeDataCache[e]?.depth,m=this.internals.nodeDataCache[e]?.zIndex,y=this.internals.nodeDataCache[e]?.labelAttachment;this.updateNode(e);let S=this.internals.nodeDataCache[e];this.internals.attachmentManager&&S.labelAttachment!==y&&this.internals.attachmentManager.invalidateNode(e);let v;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&S.shape&&S.shape in this.internals.nodeShapeMap?v=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[S.shape]]:v=st(S.shape||"circle"),this.internals.nodeDataTexture.updateNode(e,S.x,S.y,S.size,v,...Qr(S),S.color),x&&S.depth!==x&&this.updateNodeDepthRanges(e,x,S.depth);let E=this.nodeProgramIndex[e];return E!==void 0&&(this.addNodeToProgram(e,E),this.nodeProgram.invalidateBuffers()),m!==void 0&&S.zIndex!==m}let i=this.internals.graph.getNodeAttributes(e),n=this.stateManager.getNodeState(e),o=a.size,s=a.shape,l=a.depth,d=a.zIndex,c=a.labelAttachment,f=a.rotationAlignment,u=a.labelRotationAlignment,g=a.color;Ra(this.stylesDeclaration.nodes,i,n,this.stateManager.graphState,this.internals.graph,a),this.postEvaluateNode(a,i,n);let h=this.nodeGraphCoords[e],p=a.x!==h.x||a.y!==h.y;if(p&&(h.x=a.x,h.y=a.y),this.normalizationFunction.applyTo(a),this.internals.nodeShapeMap?(!a.shape||!(a.shape in this.internals.nodeShapeMap))&&(a.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(a.shape=this.nodeShapeSlug),this.internals.attachmentManager&&a.labelAttachment!==c&&this.internals.attachmentManager.invalidateNode(e),ut(this.internals.nodesWithForcedLabels,e,ke(a)),ut(this.internals.nodesWithBackdrop,e,yi(a)),p||a.size!==o||a.shape!==s||a.rotationAlignment!==f||a.labelRotationAlignment!==u||a.color!==g){let x;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&a.shape&&a.shape in this.internals.nodeShapeMap?x=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[a.shape]]:x=st(a.shape||"circle"),this.internals.nodeDataTexture.updateNode(e,a.x,a.y,a.size,x,...Qr(a),a.color)}this.itemBuckets.nodes.set(e,a.depth),a.depth!==l&&this.updateNodeDepthRanges(e,l,a.depth);let b=this.nodeProgramIndex[e];return b!==void 0&&(this.addNodeToProgram(e,b),this.nodeProgram.invalidateBuffers()),a.zIndex!==d}refreshEdgeState(e){let a=this.internals.edgeDataCache[e];if(!a||this.edgeReducer){let p=a?.depth,b=a?.zIndex;this.updateEdge(e);let x=this.internals.edgeDataCache[e];p&&x.depth!==p&&this.updateEdgeDepthRanges(e,p,x.depth);let m=this.edgeProgramIndex[e];return m!==void 0&&(this.addEdgeToProgram(e,m),this.edgeProgram.invalidateBuffers()),b!==void 0&&x.zIndex!==b}let i=this.internals.graph.getEdgeAttributes(e),n=this.stateManager.getEdgeState(e),o=a.depth,s=a.zIndex,l=a.size,d=a.path,c=a.selfLoopPath,f=a.parallelPath,u=a.head,g=a.tail;Pa(this.stylesDeclaration.edges,i,n,this.stateManager.graphState,this.internals.graph,a),this.postEvaluateEdge(a,i),this.applyEdgeSpread(e,a,n),ut(this.internals.edgesWithForcedLabels,e,ke(a)),this.itemBuckets.edges.set(e,a.depth),a.depth!==o&&this.updateEdgeDepthRanges(e,o,a.depth);let h=this.edgeProgramIndex[e];if(h!==void 0)if(a.size!==l||a.path!==d||a.selfLoopPath!==c||a.parallelPath!==f||a.head!==u||a.tail!==g)this.addEdgeToProgram(e,h),this.edgeProgram.invalidateBuffers();else{let b=this.internals.graph.source(e),x=this.internals.graph.target(e),m=this.internals.nodeDataCache[b],y=this.internals.nodeDataCache[x],S=this.edgeTextureIndexCache[e];this.edgeProgram.process(Oe(this.pickingState,"edge",e),h,m,y,a,S),this.edgeProgram.invalidateBuffers()}return a.zIndex!==s}refresh(e){let a=e?.skipIndexation!==void 0?e?.skipIndexation:!1,i=e?.schedule!==void 0?e.schedule:!1;if(!e||!e.partialGraph)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(o=>this.addNode(o)),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(o=>this.addEdge(o)),this.pendingProcess="full";else{let o=e.partialGraph?.nodes||[];for(let l=0,d=o?.length||0;l<d;l++){let c=""+o[l],f=this.internals.nodeDataCache[c]?.labelAttachment;if(this.updateNode(c),this.internals.attachmentManager&&(this.internals.nodeDataCache[c]?.labelAttachment||f)&&this.internals.attachmentManager.invalidateNode(c),a){let u=this.nodeProgramIndex[c];if(u===void 0)throw new Error(`Sigma: node "${c}" can't be repaint`);this.addNodeToProgram(c,u)}}a&&o.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);let s=e?.partialGraph?.edges||[];for(let l=0,d=s.length;l<d;l++){let c=""+s[l];if(this.updateEdge(c),a){let f=this.edgeProgramIndex[c];if(f===void 0)throw new Error(`Sigma: edge "${c}" can't be repaint`);this.addEdgeToProgram(c,f)}}a&&s.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!a&&this.pendingProcess!=="full"&&(this.pendingProcess=s.length>0?"full":"nodes")}return i?this.scheduleRender():this.render(),this}scheduleRender(){return this.renderFrame||(this.renderFrame=requestAnimationFrame(()=>{this.render()})),this}scheduleRefresh(e){return this.refresh({...e,schedule:!0})}getViewportZoomedState(e,a){let{ratio:i,angle:n,x:o,y:s}=this.camera.getState(),{minCameraRatio:l,maxCameraRatio:d}=this.internals.settings;typeof d=="number"&&(a=Math.min(a,d)),typeof l=="number"&&(a=Math.max(a,l));let c=a/i,f={x:this.width/2,y:this.height/2},u=this.viewportToFramedGraph(e),g=this.viewportToFramedGraph(f);return{angle:n,x:(u.x-g.x)*(1-c)+o,y:(u.y-g.y)*(1-c)+s,ratio:a}}viewRectangle(){let e=this.viewportToFramedGraph({x:0,y:0}),a=this.viewportToFramedGraph({x:this.width,y:0}),i=this.viewportToFramedGraph({x:0,y:this.height});return{x1:e.x,y1:e.y,x2:a.x,y2:a.y,height:a.y-i.y}}framedGraphToViewport(e,a={}){let i=!!a.cameraState||!!a.viewportDimensions||!!a.graphDimensions||!!a.padding,n=a.matrix||(i?De(a.cameraState||this.camera.getState(),a.viewportDimensions||this.getDimensions(),a.graphDimensions||this.getGraphDimensions(),a.padding||this.getStagePadding()):this.matrix),o=Ie(n,e);return{x:(1+o.x)*this.width/2,y:(1-o.y)*this.height/2}}viewportToFramedGraph(e,a={}){let i=!!a.cameraState||!!a.viewportDimensions||!!a.graphDimensions||!!a.padding,n=a.matrix||(i?De(a.cameraState||this.camera.getState(),a.viewportDimensions||this.getDimensions(),a.graphDimensions||this.getGraphDimensions(),a.padding||this.getStagePadding(),!0):this.invMatrix),o=Ie(n,{x:e.x/this.width*2-1,y:1-e.y/this.height*2});return isNaN(o.x)&&(o.x=0),isNaN(o.y)&&(o.y=0),o}viewportToGraph(e,a={}){return this.normalizationFunction.inverse(this.viewportToFramedGraph(e,a))}graphToViewport(e,a={}){return this.framedGraphToViewport(this.normalizationFunction(e),a)}graphToFramedGraph(e){return this.normalizationFunction(e)}framedGraphToGraph(e){return this.normalizationFunction.inverse(e)}getGraphToViewportRatio(){let e={x:0,y:0},a={x:1,y:1},i=Math.sqrt(Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2)),n=this.graphToViewport(e),o=this.graphToViewport(a);return Math.sqrt(Math.pow(n.x-o.x,2)+Math.pow(n.y-o.y,2))/i}computeNodeExtent(){let e=this.nodeGraphCoords,a=Object.keys(e);if(!a.length)return{x:[0,1],y:[0,1]};let i=1/0,n=-1/0,o=1/0,s=-1/0;for(let l=0,d=a.length;l<d;l++){let{x:c,y:f}=e[a[l]];c<i&&(i=c),c>n&&(n=c),f<o&&(o=f),f>s&&(s=f)}return{x:[i,n],y:[o,s]}}getBBox(){return this.nodeExtent}getCustomBBox(){return this.customBBox}setCustomBBox(e){return this.customBBox=e,this.scheduleRender(),this}kill(){this.emit("kill"),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null);let e=this.container;for(;e.firstChild;)e.removeChild(e.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),this.internals.edgeLabelProgram.kill(),this.internals.edgeLabelBackgroundProgram.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),this.internals.attachmentProgram?.kill(),this.internals.attachmentManager?.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;for(let{program:a}of this.customLayerPrograms.values())a.kill();this.customLayerPrograms.clear(),this.sdfAtlas&&(this.sdfAtlas=null),this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext&&(this.webGLContext.getExtension("WEBGL_lose_context")?.loseContext(),this.webGLContext=null),this.gestureHint?.kill(),this.gestureHint=null,this.mouseLayer.remove();for(let a in this.extraElements)this.extraElements[a].remove();this.extraElements={}}scaleSize(e=1,a=this.camera.ratio){return e/this.internals.settings.zoomToSizeRatioFunction(a)*(this.getSetting("itemSizesReference")==="positions"?a*this.graphToViewportRatio:1)}getStageCanvas(){return this.stageCanvas}getMouseLayer(){return this.mouseLayer}};var ms=Cr;var rc=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function bt(r){let t=/^(\d{4})-(\d{2})-(\d{2})/.exec(r||"");return t?`${rc[Number(t[2])-1]} ${Number(t[3])}, ${t[1]}`:r||""}var ac=r=>r.canonical||r.url,ic=["#0b6b7a","#3d4fc4","#b5650f","#b2306b","#2d7a4c","#6a4c9c","#7a6400"],nc=["#5fd3e0","#93a2ff","#f5b360","#f584b8","#74d6a0","#c3a6f5","#e6cf5c"],sn={Theme:"circle",Essay:"circle",Initiative:"diamond",Playbook:"square",Source:"triangle"},ln=new Set(["Source"]),Ts=new Set(["source","extracted"]),bs={frontmatter:"Declared relations",link:"Links in text",folder:"Theme membership",source:"Sources",extracted:"Extracted (machine)"},oc={frontmatter:.85,link:.5,folder:.16,source:.32,extracted:.3},Fr=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,qt=r=>Fr?0:r,q=r=>document.getElementById(r),Wa=q("g-canvas"),he=q("g-panel"),xs=q("g-status"),it=q("g-list"),en=q("g-view"),J=q("g-search"),Ue=q("g-suggest"),He=q("g-legend"),sc=q("g-empty"),lc=q("g-announce"),tn=document.querySelector(".toolbar"),I=r=>String(r??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),dc=r=>/^https?:\/\//.test(r),uc=r=>r==="human-reviewed"?"Reviewed by Muthu":r==="machine-confirmed"?"Machine-confirmed":"Not yet reviewed",rn=r=>getComputedStyle(document.documentElement).getPropertyValue(r).trim(),wr=()=>document.documentElement.getAttribute("saved-theme")==="dark",dn=r=>1-Math.pow(1-r,3),ys=r=>1+(1.6+1)*Math.pow(r-1,3)+1.6*Math.pow(r-1,2),cc=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function Oa(r,t){let e=r.replace("#",""),a=parseInt(e.length===3?e.split("").map(i=>i+i).join(""):e,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${t})`}var $e=new Set(ln),at=new Set(Ts),ye=null,Ua=null,Ae=null,W=new Bn({multi:!0,type:"directed",allowSelfLoops:!1}),B=null,M={},X={},xe=[],Gr=new Map,jt=0;function Ss(r,t,e,a,i,n=dn,o){if(a<=0){i(e),Gr.delete(r),o?.();return}Gr.set(r,{from:t,to:e,dur:a,start:performance.now(),ease:n,set:i,done:o}),jt||(jt=requestAnimationFrame(un))}function un(r){jt=0;for(let[e,a]of Gr){let i=Math.min(1,(r-a.start)/a.dur);a.set(a.from+(a.to-a.from)*a.ease(i)),i>=1&&(Gr.delete(e),a.done?.())}let t=!!ye&&!Fr&&!document.hidden;t&&B?.setGraphState({pulse:(Math.sin(r/520)+1)/2}),B?.refresh({skipIndexation:!0}),(Gr.size||t)&&(jt=requestAnimationFrame(un))}var _s=()=>{jt||(jt=requestAnimationFrame(un))};function As(){let r=wr()?nc:ic,t=rn("--ink"),e=rn("--muted"),a=rn("--page"),i=n=>{let o=M[n]?.type==="Theme"?n:X[n];return o?r[xe.indexOf(o)%r.length]:e};W.updateEachNodeAttributes((n,o)=>({...o,color:o.kind==="Source"?e:i(n),labelColor:t,page:a,halo:Oa(i(n).startsWith("#")?i(n):"#888888",wr()?.75:.55),ring:Oa(i(n).startsWith("#")?i(n):"#888888",wr()?.35:.22),pill:Oa(a.startsWith("#")?a:"#ffffff",wr()?.82:.9),pillLine:wr()?"rgba(255,255,255,0.10)":"rgba(21,23,28,0.08)"})),W.updateEachEdgeAttributes((n,o,s)=>{let l=i(s);return{...o,color:l.startsWith("#")?Oa(l,oc[o.origin]??.4):l,activeColor:l}}),document.querySelectorAll("[data-theme-dot]").forEach(n=>n.style.background=i(n.dataset.themeDot)),B?.refresh()}var Nr=Math.min(1,Math.max(.6,Math.min(innerWidth,innerHeight)/850));function hc(r){return Nr*(r.type==="Theme"?16+Math.sqrt(r.degree||0)*2:(r.type==="Source"?4:6)+Math.sqrt(r.degree||0)*2.1)}function gc(r,t){let e={},i={};xe.forEach(g=>i[g]=[]),r.forEach(g=>{g.type!=="Theme"&&g.type!=="Source"&&X[g.id]&&i[X[g.id]].push(g.id)});let n={},o=(g,h)=>g<h?g+"|"+h:h+"|"+g;t.forEach(g=>{let h=X[g.source],p=X[g.target];h&&p&&h!==p&&g.origin!=="source"&&g.origin!=="folder"&&(n[o(h,p)]=(n[o(h,p)]||0)+1)});let s=xe.length?[xe[0]]:[];for(;s.length<xe.length;){let g=s[s.length-1],h=xe.filter(p=>!s.includes(p)).sort((p,b)=>(n[o(g,b)]||0)-(n[o(g,p)]||0))[0];s.push(h)}let l={};s.forEach((g,h)=>{let p=-Math.PI/2+h/Math.max(1,s.length)*Math.PI*2;l[g]={x:Math.cos(p)*100,y:Math.sin(p)*100},e[g]={...l[g],side:Math.cos(p)<0?"left":"right"}});let d={};t.forEach(g=>{var h,p;g.origin==="folder"||g.origin==="source"||((d[h=g.source]||(d[h]=[])).push(g.target),(d[p=g.target]||(d[p]=[])).push(g.source))});let c=Math.PI*2;for(let g of s){let h=l[g],p=i[g].sort((_,A)=>(M[A].degree||0)-(M[_].degree||0)||_.localeCompare(A)),b=_=>{let A=0,L=0;for(let T of d[_]||[]){let N=X[T];N&&N!==g&&l[N]&&(A+=l[N].x-h.x,L+=l[N].y-h.y)}return!A&&!L&&(A=h.x,L=h.y),Math.atan2(L,A)},x=.62,m=Math.PI/2+x,y=c-2*x,S=Math.max(30,19+1.15*p.length),v=Math.max(6,Math.floor(y*S/7.5)),E=_=>((_-m)%c+c)%c;for(let _=0,A=0;A<p.length;_++,A+=v){let L=p.slice(A,A+v).map(R=>({id:R,p:E(b(R))})).sort((R,w)=>R.p-w.p),T=S+_*9,N=y/L.length;L.forEach((R,w)=>{let G=m+(w+.5)*N;e[R.id]={x:h.x+Math.cos(G)*T,y:h.y+Math.sin(G)*T,side:Math.cos(G)<0?"left":"right"}})}}let f=r.filter(g=>g.type!=="Theme"&&g.type!=="Source"&&!e[g.id]);f.forEach((g,h)=>{let p=h/Math.max(1,f.length)*c;e[g.id]={x:Math.cos(p)*18,y:Math.sin(p)*18,side:Math.cos(p)<0?"left":"right"}});let u={};return t.filter(g=>g.origin==="source").forEach(g=>{let[h,p]=M[g.target].type==="Source"?[g.source,g.target]:[g.target,g.source];if(e[p]||!e[h])return;let b=X[h],x=b?l[b]:{x:0,y:0},m=Math.atan2(e[h].y-x.y,e[h].x-x.x)+((u[h]=(u[h]||0)+1)-1)*.35;e[p]={x:e[h].x+Math.cos(m)*9,y:e[h].y+Math.sin(m)*9,side:Math.cos(m)<0?"left":"right"}}),r.forEach((g,h)=>{e[g.id]||(e[g.id]={x:Math.cos(h)*140,y:Math.sin(h)*140,side:"right"})}),e}function Ir(){let r=Ua||ye,t=e=>!B.getNodeState(e).isHidden;if(r){let e=new Set([r]);return W.forEachNeighbor(r,a=>{t(a)&&e.add(a)}),e}if(Ae){let e=new Set([Ae]);return W.forEachNode(a=>{X[a]===Ae&&t(a)&&e.add(a)}),e}return null}var an=!1;function xt(){let r=Ir(),t=Ua||ye;W.forEachNode(a=>B.setNodeState(a,{isActive:!!r?.has(a),isHighlighted:a===ye})),W.forEachEdge((a,i,n,o)=>B.setEdgeState(a,{isActive:!!r&&(t?n===t||o===t:r.has(n)&&r.has(o))}));let e=!!r;e?(B.setGraphState({hasActive:!0}),an||Ss("fade",B.getGraphState().fade||0,1,qt(180),a=>B.setGraphState({fade:a}))):an&&Ss("fade",B.getGraphState().fade??1,0,qt(220),a=>B.setGraphState({fade:a}),dn,()=>{Ir()||B.setGraphState({hasActive:!1})}),an=e,He.querySelectorAll("[data-theme]").forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.theme===Ae))),B.refresh({skipIndexation:!0}),_s()}function kr(){W.forEachNode((r,t)=>B.setNodeState(r,{isHidden:$e.has(t.kind)})),W.forEachEdge((r,t,e,a)=>{let i=at.has(t.origin)||$e.has(W.getNodeAttribute(e,"kind"))||$e.has(W.getNodeAttribute(a,"kind"));B.setEdgeState(r,{isHidden:i})}),B.refresh({skipIndexation:!0}),document.querySelectorAll("#f-types input").forEach(r=>r.checked=!$e.has(r.value)),document.querySelectorAll("#f-origins input").forEach(r=>r.checked=!at.has(r.value)),Ve(),ws()}function Ds(){return W.filterNodes(r=>!B.getNodeState(r).isHidden)}function fc(){return W.filterEdges(r=>!B.getEdgeState(r).isHidden)}function Ve(r){if(!B){xs.textContent=r??"";return}let t=Ds().length;xs.textContent=r??`${t} nodes \xB7 ${fc().length} connections shown`,sc.hidden=t>0||!it.hidden}var Ls=r=>{lc.textContent=r};function $a(r){r.querySelectorAll("[data-bg]").forEach(t=>t.style.background=t.dataset.bg),r.querySelectorAll("[data-c]").forEach(t=>t.style.setProperty("--c",t.dataset.c))}function pc(r,t){let e={},a={};r.forEach(i=>e[i.type]=(e[i.type]||0)+1),t.forEach(i=>a[i.origin]=(a[i.origin]||0)+1),q("f-types").insertAdjacentHTML("beforeend",Object.keys(e).sort().map(i=>`<label><input type="checkbox" value="${I(i)}"> <span class="shape shape-${I(sn[i]||"circle")}" aria-hidden="true"></span>${I(i)} <span class="muted">${e[i]}</span></label>`).join("")),q("f-origins").insertAdjacentHTML("beforeend",Object.keys(bs).filter(i=>a[i]).map(i=>`<label><input type="checkbox" value="${I(i)}"> ${I(bs[i])} <span class="muted">${a[i]}</span></label>`).join("")),document.querySelectorAll("#f-types input").forEach(i=>i.addEventListener("change",()=>{i.checked?$e.delete(i.value):$e.add(i.value),i.value==="Source"&&(i.checked?at.delete("source"):at.add("source")),kr(),xt()})),document.querySelectorAll("#f-origins input").forEach(i=>i.addEventListener("change",()=>{i.checked?at.delete(i.value):at.add(i.value),kr()}))}function mc(){let r=t=>Object.keys(X).filter(e=>X[e]===t&&M[e].type!=="Source").length;He.innerHTML='<p class="legend-title">Themes</p><ul>'+xe.map(t=>`<li><button type="button" data-theme="${I(t)}" aria-pressed="false"><span class="dot" data-theme-dot="${I(t)}"></span>${I(M[t].label)}<span class="muted">${r(t)}</span></button></li>`).join("")+'</ul><p class="legend-shapes" aria-label="Shapes"><span><span class="shape shape-circle"></span>Essay</span><span><span class="shape shape-diamond"></span>Initiative</span><span><span class="shape shape-square"></span>Playbook</span></p>',He.hidden=!1,He.querySelectorAll("[data-theme]").forEach(t=>t.addEventListener("click",()=>{let e=t.dataset.theme;if(Ae===e){cn();return}Ae=e,ye&&Kt(!1),xt(),Rs([...Ir()||[]]),Ls(`Showing the ${M[e].label} theme. Escape to leave.`),Ve(`${M[e].label} \xB7 ${(Ir()?.size??1)-1} notes \xB7 Esc to leave`)}))}function cn(){Ae&&(Ae=null,xt(),Ve(),Ha())}function Ha(){B.getCamera().animate({x:.5,y:.5,ratio:1,angle:0},{duration:qt(650),easing:"cubicInOut"})}var bc=()=>window.innerWidth<=760,nn=document.createElement("canvas").getContext("2d");function on(r){let t=W.getNodeAttributes(r),e=String(t.label??"");if(!nn||!e)return{left:0,right:0};let a=t.kind==="Theme";nn.font=a?`${Math.round(15*Math.max(.8,Nr))}px Newsreader, Georgia, serif`:"12.5px Instrument Sans, system-ui, sans-serif";let i=nn.measureText(e).width+12+(Number(t.size)||6);return t.labelSide==="left"?{left:i,right:0}:t.labelSide==="right"?{left:0,right:i}:{left:i/2,right:i/2}}function Rs(r,t={}){let e=r.map(D=>B.getNodeDisplayData(D)).filter(Boolean);if(!e.length)return;let a=e.map(D=>D.x),i=e.map(D=>D.y),[n,o,s,l]=[Math.min(...a),Math.max(...a),Math.min(...i),Math.max(...i)],d=t.centre?B.getNodeDisplayData(t.centre):null,c=d?d.y:(s+l)/2,f=d?2*Math.max(d.x-n,o-d.x,c-s,l-c):Math.max(o-n,l-s),u=Wa.clientWidth||1,g=Wa.clientHeight||1,h=Math.max(1,Math.min(u,g)-96),p=!bc(),b=p&&t.besidePanel&&!he.hidden?he.offsetWidth+28:0,x=0,m=Math.max(120,u-b-x-32),y=(t.named??r).map(D=>({d:B.getNodeDisplayData(D),r:on(D)})).filter(D=>D.d),S=D=>[Math.min(n,...y.map(z=>z.d.x-z.r.left*D)),Math.max(o,...y.map(z=>z.d.x+z.r.right*D))],v=t.maxRatio??1.2,E=Math.min(v,Math.max(.25,f*1.25)),_=Math.max(120,g-(He.hidden||!He.offsetParent?0:He.offsetHeight+28)-56);for(let D=0;D<24&&E<v;D++){let[z,O]=S(E/h);if(O-z<=m*E/h&&2*Math.max(c-s,l-c)<=_*E/h)break;E=Math.min(v,E*1.12)}let A=E/h,L=D=>D*A,[T,N]=S(A),R=(T+N)/2;if(d){let D=on(t.centre),z=m*A/2,O=d.x+D.right*A-z+L(8),k=d.x-D.left*A+z-L(8);R=O<=k?Math.min(Math.max(R,O),k):D.left>D.right?k:D.right>D.left?O:d.x}let w=0,G=0;p?(w+=L(b/2)-L(x/2),G+=L((g-_)/2-28)):t.besidePanel&&!he.hidden&&(G-=L(he.offsetHeight/2)),B.getCamera().animate({x:R+w,y:c+G,ratio:E},{duration:qt(700),easing:"cubicInOut"})}var xc={links_to:"",builds_on:"builds on",refines:"refines",applies:"applies",contradicts:"contradicts",cites:"cites",part_of:"part of",supersedes:"supersedes",answers:"answers",about:"about",authored_by:"authored by",mentions:"mentions"};function vs(r){return xc[r]??String(r).replace(/_/g," ")}function We(r){let t=0;return W.forEachEdge(r,(e,a)=>{(a.origin==="link"||a.origin==="frontmatter")&&t++}),t}function yc(r){ye=r,Ae=null;let t=M[r],e=W.getNodeAttribute(r,"color"),a={link:"Linked notes",frontmatter:"Linked notes",source:t.type==="Source"?"Notes drawn from it":"Sources",folder:t.type==="Theme"?"Notes in this theme":"",extracted:"Mentions"},i={},n=(u,g,h,p)=>{let b=a[u.origin]??"Other connections";if(!b||B.getEdgeState(p).isHidden)return;let x=i[b]||(i[b]=new Map),m=x.get(g)||{out:!1,inn:!1,rel:new Set};h?m.out=!0:m.inn=!0,vs(u.rel)&&m.rel.add(vs(u.rel)),x.set(g,m)};W.forEachOutEdge(r,(u,g,h,p)=>n(g,p,!0,u)),W.forEachInEdge(r,(u,g,h)=>n(g,h,!1,u));let o=["Notes in this theme","Linked notes","Sources","Notes drawn from it","Mentions","Other connections"],s=u=>u.out&&u.inn?"\u21C4":u.out?"\u2192":"\u2190",l=u=>u.out&&u.inn?"Linked both ways":u.out?"This note links to it":"It links to this note",d=o.filter(u=>i[u]?.size).map(u=>{let g=[...i[u]].sort((h,p)=>M[h[0]].label.localeCompare(M[p[0]].label)).map(([h,p])=>`<li><a href="#" data-id="${I(h)}"><span class="dot" data-bg="${I(W.getNodeAttribute(h,"color"))}"></span><span class="t">${I(M[h].label)}</span>${p.rel.size?`<span class="rel muted">${I([...p.rel].join(", "))}</span>`:""}`+(u==="Linked notes"?`<span class="dir" title="${l(p)}" aria-label="${l(p)}">${s(p)}</span>`:"")+"</a></li>");return`<h3>${I(u)} <span class="muted">${g.length}</span></h3><ul>${g.join("")}</ul>`}),c=t.type!=="Source"&&t.type!=="Theme"?`<dl class="prov"><div><dt>Review</dt><dd class="${t.trust==="human-reviewed"?"ok":""}">${I(t.verified?`Reviewed ${bt(t.verified)}`:uc(t.trust))}</dd></div><div><dt>Connections</dt><dd>${We(r)}</dd></div>`+(t.source_date?`<div><dt>Source</dt><dd>${I(t.canonical?"muthub.org \xB7 ":"")}${I(bt(t.source_date))}</dd></div>`:"")+(t.stale_after?`<div><dt>Re-check by</dt><dd>${I(bt(t.stale_after))}</dd></div>`:"")+"</dl>":"";he.innerHTML=`<div class="accent" data-bg="${I(e)}"></div><button class="close" type="button" aria-label="Close">\xD7</button><div class="g-panel-body"><p class="kind"><span class="shape shape-${I(sn[t.type]||"circle")}" data-c="${I(e)}"></span>${I(t.type)}${X[r]?` \xB7 ${I(M[X[r]].label)}`:""}</p><h2 tabindex="-1">${I(t.label)}</h2>`+(t.summary?`<p class="summary">${I(t.summary)}</p>`:"")+c+(t.canonical?`<p class="actions"><a class="open" href="${I(t.url)}">Open the note</a><a class="wiki" href="${I(t.canonical)}">Read the essay</a></p>`:`<p class="actions"><a class="open" href="${I(t.url)}">${dc(t.url)?"Open source":t.type==="Theme"?"Open theme":"Open the note"}</a></p>`)+d.join("")+"</div>",$a(he),he.hidden=!1,he.classList.remove("in"),he.offsetWidth,he.classList.add("in"),Ls(`Selected ${t.type}: ${t.label}`);let f=new URL(location.href);f.searchParams.set("node",r),history.replaceState(null,"",f),xt()}function Kt(r=!0){ye=null,he.hidden=!0;let t=new URL(location.href);t.searchParams.delete("node"),history.replaceState(null,"",t),r&&xt()}function yt(r,t={}){let e=W.getNodeAttribute(r,"kind");$e.has(e)&&($e.delete(e),e==="Source"&&at.delete("source"),kr()),yc(r);let a=[...Ir()||[r]],i=X[r],n=a.length<4&&i?[...a,i,...W.filterNodes(o=>X[o]===i&&!B.getNodeState(o).isHidden)]:a;Rs(n,{maxRatio:a.length<4?.6:.85,besidePanel:!0,centre:r,named:a}),t.moveFocus&&he.querySelector("h2")?.focus({preventScroll:!0})}he.addEventListener("click",r=>{let t=r.target.closest("[data-id]");t?(r.preventDefault(),yt(t.getAttribute("data-id"))):r.target.closest(".close")&&Kt()});function Ps(r){if(r=r.trim().toLowerCase(),!r)return[];let t=Object.values(M),e=a=>(a.label.toLowerCase()===r?0:a.label.toLowerCase().startsWith(r)?1:2)+(a.type==="Source"?3:0);return t.filter(a=>a.label.toLowerCase().includes(r)).sort((a,i)=>e(a)-e(i)||a.label.localeCompare(i.label))}function Sc(r){return Ps(r)[0]?.id??null}var rt=-1;function Cs(){let r=Ps(J.value).slice(0,7);if(rt=-1,J.removeAttribute("aria-activedescendant"),!r.length||document.activeElement!==J){Ue.hidden=!0,J.setAttribute("aria-expanded","false");return}Ue.innerHTML=r.map((t,e)=>`<li role="option" id="g-opt-${e}" data-id="${I(t.id)}"><span class="dot" data-bg="${I(W.getNodeAttribute(t.id,"color"))}"></span>${I(t.label)}<span class="muted">${I(t.type)}</span></li>`).join(""),$a(Ue),Ue.hidden=!1,J.setAttribute("aria-expanded","true")}function Va(){Ue.hidden=!0,J.setAttribute("aria-expanded","false"),J.removeAttribute("aria-activedescendant")}function Es(r){let t=[...Ue.querySelectorAll("li")];t.length&&(rt=(rt+r+t.length)%t.length,t.forEach((e,a)=>{e.classList.toggle("on",a===rt),e.setAttribute("aria-selected",String(a===rt))}),J.setAttribute("aria-activedescendant",t[rt].id))}function vc(){let r=rt>=0?Ue.querySelectorAll("li")[rt]?.getAttribute("data-id"):Sc(J.value);Va(),r?(Ve(),yt(r,{moveFocus:!0})):Ve(`No note matches \u201C${J.value}\u201D.`)}J.addEventListener("input",Cs);J.addEventListener("focus",Cs);J.addEventListener("blur",()=>setTimeout(Va,120));J.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),vc()):r.key==="ArrowDown"?(r.preventDefault(),Es(1)):r.key==="ArrowUp"?(r.preventDefault(),Es(-1)):r.key==="Escape"&&!Ue.hidden&&(Va(),r.stopPropagation())});Ue.addEventListener("mousedown",r=>{let t=r.target.closest("li");t&&(r.preventDefault(),Va(),J.value=M[t.dataset.id].label,yt(t.dataset.id))});function ws(){if(it.hidden)return;let r=new Set(Ds()),t=o=>o.verified?bt(o.verified):o.trust==="human-reviewed"?"Reviewed":"Not yet",e=o=>`<tr><td><a href="${I(o.url)}">${I(o.label)}</a></td><td class="muted">${I(o.type)}</td><td class="muted">${I(bt(o.source_date)||"")}</td><td class="muted">${I(t(o))}</td><td class="muted">${I(bt(o.stale_after)||"")}</td><td class="n">${We(o.id)}</td></tr>`,a=xe.filter(o=>r.has(o)||Object.keys(X).some(s=>X[s]===o&&r.has(s))).map(o=>{let s=Object.keys(X).filter(l=>X[l]===o&&r.has(l)&&M[l].type!=="Source").sort((l,d)=>We(d)-We(l)||M[l].label.localeCompare(M[d].label));return`<tr><th scope="rowgroup" colspan="6"><span class="dot" data-bg="${I(W.getNodeAttribute(o,"color"))}" data-theme-dot="${I(o)}"></span>${I(M[o].label)} <span class="muted">\xB7 ${s.length} note${s.length===1?"":"s"}</span></th></tr>`+s.map(l=>e(M[l])).join("")}),i=[...r].filter(o=>!X[o]&&M[o].type!=="Theme").sort((o,s)=>M[o].label.localeCompare(M[s].label)),n=[...r].filter(o=>M[o].type==="Source").sort((o,s)=>M[o].label.localeCompare(M[s].label));it.innerHTML='<table><caption class="sr">Notes in the graph, with their provenance</caption><thead><tr><th>Note</th><th>Kind</th><th>Source dated</th><th>Review</th><th>Re-check by</th><th class="n">Links</th></tr></thead><tbody>'+a.join("")+(i.length?'<tr><th scope="rowgroup" colspan="6">Other</th></tr>'+i.map(o=>e(M[o])).join(""):"")+(n.length?`<tr><th scope="rowgroup" colspan="6">Sources <span class="muted">\xB7 ${n.length}</span></th></tr>`+n.map(o=>`<tr><td><a href="${I(M[o].url)}">${I(M[o].label)}</a></td><td class="muted">Source</td><td class="muted">${I(bt(M[o].updated))}</td><td></td><td></td><td class="n">${M[o].degree||0}</td></tr>`).join(""):"")+`</tbody></table><p class="foot muted">Every column comes from the note's own frontmatter: Open Knowledge Format, nothing hand-typed.</p>`,$a(it)}function Gs(){let r=tn.querySelector(".tools")??tn;it.style.top=`${tn.offsetTop+r.offsetHeight+10}px`}addEventListener("resize",()=>{it.hidden||Gs()});en.addEventListener("click",()=>{let r=it.hidden;r&&ye&&Kt(!1),it.hidden=!r,r&&Gs(),q("explorer").classList.toggle("listing",r),Wa.style.visibility=r?"hidden":"visible",He.style.visibility=r?"hidden":"visible",Ve(),en.setAttribute("aria-pressed",String(r)),en.textContent=r?"Graph":"List",ws()});q("g-reset").addEventListener("click",()=>{$e=new Set(ln),at=new Set(Ts),J.value="",Ae=null,Kt(),kr(),Ha()});q("g-zoom-in").addEventListener("click",()=>B.getCamera().zoomIn({duration:qt(220)}));q("g-zoom-out").addEventListener("click",()=>B.getCamera().zoomOut({duration:qt(220)}));q("g-fit").addEventListener("click",Ha);q("g-full")?.addEventListener("click",()=>{let r=q("explorer");document.fullscreenElement?document.exitFullscreen?.():r.requestFullscreen?.().catch(()=>r.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("fullscreenchange",()=>setTimeout(()=>{B?.resize(),Ha()},60));function Ec(r){let t=r.nodes.filter(c=>c.type!=="Source"&&c.type!=="Theme"),e=r.nodes.filter(c=>c.type==="Source").length,a=r.edges.filter(c=>c.origin!=="source").length,i=(c,f)=>document.querySelectorAll(`[data-stat="${c}"]`).forEach(u=>u.textContent=f);i("notes",String(t.length)),i("sources",String(e)),i("connections",String(a)),i("themes",String(xe.length));let n=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],o=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];i("notes-words",(c=>c<20?n[c]:c<100?o[Math.floor(c/10)]+(c%10?"-"+n[c%10].toLowerCase():""):String(c))(t.length));let l=q("theme-cards");l&&(l.innerHTML=xe.map(c=>{let f=t.filter(g=>X[g.id]===c).sort((g,h)=>We(h.id)-We(g.id)),u=f.slice(0,3).map(g=>I(g.label.split(":")[0])).join(" \xB7 ");return`<a class="theme-card" href="${I(M[c].url)}"><span class="name"><span class="dot" data-bg="${I(W.getNodeAttribute(c,"color"))}" data-theme-dot="${I(c)}"></span>${I(M[c].label)}</span><span class="count">${f.length} note${f.length===1?"":"s"}</span><span class="tops">${u}</span></a>`}).join(""),$a(l));let d=q("hubs");if(d){let c=t.slice().sort((f,u)=>We(u.id)-We(f.id)||f.label.localeCompare(u.label)).slice(0,5);d.innerHTML=c.map((f,u)=>`<li><span class="rank">${u+1}</span><a href="#explorer" data-id="${I(f.id)}">${I(f.label)}</a><span class="n">${We(f.id)} links</span></li>`).join(""),d.addEventListener("click",f=>{let u=f.target.closest("[data-id]");u&&(f.preventDefault(),q("explorer").scrollIntoView({behavior:Fr?"auto":"smooth",block:"center"}),yt(u.dataset.id))})}document.querySelectorAll("[data-note]").forEach(c=>{let f=M[c.dataset.note];f?c.href=f.url:c.closest("li")?.remove()}),document.querySelectorAll("[data-path-start]").forEach(c=>c.addEventListener("click",f=>{let u=c.dataset.pathStart;M[u]&&(f.preventDefault(),q("explorer").scrollIntoView({behavior:Fr?"auto":"smooth",block:"center"}),yt(u))}))}document.addEventListener("keydown",r=>{r.key==="Escape"&&ye?Kt():r.key==="Escape"&&Ae?cn():r.key==="/"&&document.activeElement!==J&&!r.target.closest("input,textarea")&&(r.preventDefault(),J.focus())});document.addEventListener("themechange",As);document.addEventListener("visibilitychange",_s);function Tc(r){let t={};if(W.forEachNode((d,c)=>{t[d]={x:c.x,y:c.y,size:c.size}}),Fr){B.setGraphState({reveal:1}),r();return}let e=xe.slice();W.forEachNode(d=>{let c=M[d].type==="Theme"?d:X[d],f=c?t[c]:{x:0,y:0};W.mergeNodeAttributes(d,{x:f.x,y:f.y,size:0})}),B.setGraphState({reveal:0});let a=performance.now(),i=0,n={};W.forEachNode(d=>{let c=M[d].type==="Theme"?d:X[d];n[d]=M[d].type==="Theme"?e.indexOf(d)*90:260+Math.max(0,e.indexOf(c))*110+i++%12*18});let o=900,s=620,l=d=>{let c=!1;W.forEachNode(u=>{let g=t[u],h=d-a-n[u];if(h<0){c=!0;return}let p=M[u].type==="Theme",b=Math.min(1,h/(p?s:o));b<1&&(c=!0);let x=p?u:X[u],m=x?t[x]:g,y=dn(b);W.mergeNodeAttributes(u,p?{size:g.size*ys(b)}:{x:m.x+(g.x-m.x)*y,y:m.y+(g.y-m.y)*y,size:g.size*Math.min(1,ys(b))})});let f=Math.min(1,Math.max(0,(d-a-700)/700));B.setGraphState({reveal:cc(f)}),c||f<1?requestAnimationFrame(l):(W.forEachNode(u=>W.mergeNodeAttributes(u,t[u])),r())};requestAnimationFrame(l)}Ve("Loading the map\u2026");q("g-empty-reset").addEventListener("click",()=>q("g-reset").click());fetch("/graph.json").then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json()}).then(r=>{let t=l=>l&&/^(https:\/\/|\/(?!\/))/.test(l)?l:void 0;r.nodes.forEach(l=>{l.url=t(l.url)??"#",l.canonical=t(l.canonical),M[l.id]=l});let e=r.edges.filter(l=>l.source!==l.target&&M[l.source]&&M[l.target]);e.filter(l=>l.origin==="folder").forEach(l=>{let[d,c]=M[l.target].type==="Theme"?[l.source,l.target]:[l.target,l.source];M[c].type==="Theme"&&(X[d]=c)}),xe=r.nodes.filter(l=>l.type==="Theme").sort((l,d)=>(d.degree||0)-(l.degree||0)).map(l=>l.id),e.filter(l=>l.origin==="source").forEach(l=>{let[d,c]=M[l.target].type==="Source"?[l.source,l.target]:[l.target,l.source];!X[c]&&X[d]&&(X[c]=X[d])});let a=gc(r.nodes,e);r.nodes.forEach(l=>{let d=a[l.id];W.addNode(l.id,{x:d.x,y:-d.y,size:hc(l),label:l.label,kind:l.type,community:l.community,shape:sn[l.type]||"circle",labelSide:l.type==="Theme"?"below":d.side})}),e.forEach(l=>W.addEdge(l.source,l.target,{rel:l.type,origin:l.origin,size:l.origin==="folder"?.7:l.origin==="frontmatter"?1.6:1.1})),mc(),As();let i=(l,d)=>d.hasActive&&!l.isActive&&!l.isHovered;B=new ms(W,Wa,{settings:{itemSizesReference:"screen",labelFont:"Instrument Sans, system-ui, sans-serif",labelDensity:.4,labelRenderedSizeThreshold:11,stagePadding:48,zIndex:!0,hideEdgesOnMove:!1,minCameraRatio:.12,maxCameraRatio:1.4},primitives:{nodes:{shapes:[Gt(),ua({cornerRadius:.12}),la({cornerRadius:.28}),da({cornerRadius:.15})],layers:[Nt()]},edges:{paths:[It(),Sa({curvature:.22})],extremities:[Ea({lengthRatio:4.5,widthRatio:3.2})],layers:[ce()]}},customNodeState:{isActive:!1},customEdgeState:{isActive:!1},customGraphState:{hasActive:!1,fade:0,reveal:0,pulse:0},styles:{nodes:[ze.nodes,{shape:{attribute:"shape"},labelColor:{attribute:"labelColor"},cursor:"pointer",labelSize:12.5,backdropColor:{attribute:"page"},backdropPadding:5,backdropCornerRadius:8,backdropShadowColor:"rgba(0,0,0,0.18)",backdropShadowBlur:10,opacity:(l,d,c)=>i(d,c)?1-.86*(c.fade??0):1},{labelPosition:{attribute:"labelSide"}},{when:l=>l.kind==="Theme",then:{labelVisibility:l=>(l.size||0)>8*Nr?"visible":"hidden",backdropVisibility:l=>(l.size||0)>8*Nr?"visible":"hidden",labelSize:Math.round(15*Math.max(.8,Nr)),labelFont:"Newsreader, Georgia, serif",backdropArea:"label",backdropLabelPadding:5,backdropShadowBlur:6,backdropCornerRadius:8,backdropColor:{attribute:"pill"},backdropBorderColor:{attribute:"pillLine"},backdropBorderWidth:1}},{when:(l,d,c)=>i(d,c)&&(c.fade??0)>.5,then:{labelVisibility:"hidden",backdropVisibility:"hidden"}},{whenState:"isActive",then:{labelVisibility:"visible",depth:"topNodes",backdropVisibility:"visible",backdropArea:"label",backdropLabelPadding:3,backdropColor:{attribute:"pill"},backdropShadowBlur:0}},{whenState:"isHovered",then:{backdropVisibility:"visible",backdropArea:"both",labelVisibility:"visible",backdropShadowBlur:10,size:l=>(l.size||6)*1.18}},{whenState:"isHighlighted",then:{backdropVisibility:"visible",backdropArea:"node",backdropPadding:3,labelVisibility:"visible",depth:"topNodes",backdropColor:{attribute:"ring"},backdropShadowColor:{attribute:"halo"},backdropShadowBlur:(l,d,c)=>14+16*(c.pulse??.5)}}],edges:[ze.edges,{path:{when:l=>l.origin==="folder",then:"line",else:"curved"}},{opacity:(l,d,c)=>(c.reveal??1)*(c.hasActive&&!d.isActive?1-.9*(c.fade??0):1)},{whenState:"isActive",then:{color:{attribute:"activeColor"},size:2.4,depth:"topEdges"}},{when:(l,d)=>d.isActive&&l.origin!=="folder",then:{head:"arrow"}},{when:(l,d)=>d.isActive&&l.origin==="folder",then:{size:1,opacity:.55}},{when:l=>l.origin==="frontmatter",then:{head:"arrow"}}]}}),B.on("enterNode",({node:l})=>{Ua=l,xt()}),B.on("leaveNode",()=>{Ua=null,xt()}),B.on("clickNode",({node:l})=>{if(M[l].type==="Theme"&&!ye){He.querySelector(`[data-theme="${CSS.escape(l)}"]`)?.click();return}yt(l)}),B.on("doubleClickNode",l=>{l.preventSigmaDefault?.(),location.href=ac(M[l.node])}),B.on("clickStage",()=>{ye?Kt():cn()}),pc(r.nodes,e),kr(),Ec(r);let n=r.nodes.filter(l=>!ln.has(l.type)).map(l=>a[l.id]);B.setCustomBBox({x:[Math.min(...n.map(l=>l.x)),Math.max(...n.map(l=>l.x))],y:[Math.min(...n.map(l=>-l.y)),Math.max(...n.map(l=>-l.y))]});let o=new URL(location.href).searchParams.get("node"),s=!!(o&&M[o]);if(o&&!s){let l=new URL(location.href);l.searchParams.delete("node"),history.replaceState(null,"",l)}(s?l=>{B.setGraphState({reveal:1}),B.refresh(),requestAnimationFrame(()=>requestAnimationFrame(l))}:Tc)(()=>{s?yt(o):o&&Ve("That note is not in the graph. Showing the whole map."),window.kfExplorer={screenPos:l=>{let d=B.getNodeDisplayData(l);if(!d)return null;let c=B.framedGraphToViewport({x:d.x,y:d.y});return[c.x,c.y]},labelBox:l=>{let d=B.getNodeDisplayData(l);if(!d)return null;let c=B.framedGraphToViewport({x:d.x,y:d.y}),f=on(l);return[c.x-Math.max(f.left,6),c.x+Math.max(f.right,6)]},selected:()=>ye,cameraRatio:()=>B.getCamera().ratio,renderer:B},q("explorer").dataset.ready="true"})}).catch(r=>{console.error(r),Ve("The graph could not be loaded.")});})();
