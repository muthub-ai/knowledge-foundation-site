/* Knowledge Foundation graph explorer. Includes sigma.js 4.0.3 (MIT), graphology 0.26.0 (MIT), events 3.3.0 (MIT). */
(()=>{var $s=Object.create;var zr=Object.defineProperty;var Vs=Object.getOwnPropertyDescriptor;var js=Object.getOwnPropertyNames;var qs=Object.getPrototypeOf,Xs=Object.prototype.hasOwnProperty;var Or=(a,n)=>()=>{try{return n||a((n={exports:{}}).exports,n),n.exports}catch(e){throw n=0,e}};var Ys=(a,n,e,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of js(n))!Xs.call(a,r)&&r!==e&&zr(a,r,{get:()=>n[r],enumerable:!(t=Vs(n,r))||t.enumerable});return a};var lt=(a,n,e)=>(e=a!=null?$s(qs(a)):{},Ys(n||!a||!a.__esModule?zr(e,"default",{value:a,enumerable:!0}):e,a));var Tt=Or((Rh,Aa)=>{"use strict";var _t=typeof Reflect=="object"?Reflect:null,Br=_t&&typeof _t.apply=="function"?_t.apply:function(n,e,t){return Function.prototype.apply.call(n,e,t)},Rn;_t&&typeof _t.ownKeys=="function"?Rn=_t.ownKeys:Object.getOwnPropertySymbols?Rn=function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Rn=function(n){return Object.getOwnPropertyNames(n)};function Ks(a){console&&console.warn&&console.warn(a)}var Ur=Number.isNaN||function(n){return n!==n};function ae(){ae.init.call(this)}Aa.exports=ae;Aa.exports.once=el;ae.EventEmitter=ae;ae.prototype._events=void 0;ae.prototype._eventsCount=0;ae.prototype._maxListeners=void 0;var Wr=10;function wn(a){if(typeof a!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}Object.defineProperty(ae,"defaultMaxListeners",{enumerable:!0,get:function(){return Wr},set:function(a){if(typeof a!="number"||a<0||Ur(a))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");Wr=a}});ae.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ae.prototype.setMaxListeners=function(n){if(typeof n!="number"||n<0||Ur(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this};function Hr(a){return a._maxListeners===void 0?ae.defaultMaxListeners:a._maxListeners}ae.prototype.getMaxListeners=function(){return Hr(this)};ae.prototype.emit=function(n){for(var e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);var r=n==="error",i=this._events;if(i!==void 0)r=r&&i.error===void 0;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var l=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw l.context=o,l}var s=i[n];if(s===void 0)return!1;if(typeof s=="function")Br(s,this,e);else for(var d=s.length,u=Xr(s,d),t=0;t<d;++t)Br(u[t],this,e);return!0};function $r(a,n,e,t){var r,i,o;if(wn(e),i=a._events,i===void 0?(i=a._events=Object.create(null),a._eventsCount=0):(i.newListener!==void 0&&(a.emit("newListener",n,e.listener?e.listener:e),i=a._events),o=i[n]),o===void 0)o=i[n]=e,++a._eventsCount;else if(typeof o=="function"?o=i[n]=t?[e,o]:[o,e]:t?o.unshift(e):o.push(e),r=Hr(a),r>0&&o.length>r&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(n)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=a,l.type=n,l.count=o.length,Ks(l)}return a}ae.prototype.addListener=function(n,e){return $r(this,n,e,!1)};ae.prototype.on=ae.prototype.addListener;ae.prototype.prependListener=function(n,e){return $r(this,n,e,!0)};function Zs(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Vr(a,n,e){var t={fired:!1,wrapFn:void 0,target:a,type:n,listener:e},r=Zs.bind(t);return r.listener=e,t.wrapFn=r,r}ae.prototype.once=function(n,e){return wn(e),this.on(n,Vr(this,n,e)),this};ae.prototype.prependOnceListener=function(n,e){return wn(e),this.prependListener(n,Vr(this,n,e)),this};ae.prototype.removeListener=function(n,e){var t,r,i,o,l;if(wn(e),r=this._events,r===void 0)return this;if(t=r[n],t===void 0)return this;if(t===e||t.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[n],r.removeListener&&this.emit("removeListener",n,t.listener||e));else if(typeof t!="function"){for(i=-1,o=t.length-1;o>=0;o--)if(t[o]===e||t[o].listener===e){l=t[o].listener,i=o;break}if(i<0)return this;i===0?t.shift():Qs(t,i),t.length===1&&(r[n]=t[0]),r.removeListener!==void 0&&this.emit("removeListener",n,l||e)}return this};ae.prototype.off=ae.prototype.removeListener;ae.prototype.removeAllListeners=function(n){var e,t,r;if(t=this._events,t===void 0)return this;if(t.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):t[n]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete t[n]),this;if(arguments.length===0){var i=Object.keys(t),o;for(r=0;r<i.length;++r)o=i[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=t[n],typeof e=="function")this.removeListener(n,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(n,e[r]);return this};function jr(a,n,e){var t=a._events;if(t===void 0)return[];var r=t[n];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?Js(r):Xr(r,r.length)}ae.prototype.listeners=function(n){return jr(this,n,!0)};ae.prototype.rawListeners=function(n){return jr(this,n,!1)};ae.listenerCount=function(a,n){return typeof a.listenerCount=="function"?a.listenerCount(n):qr.call(a,n)};ae.prototype.listenerCount=qr;function qr(a){var n=this._events;if(n!==void 0){var e=n[a];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}ae.prototype.eventNames=function(){return this._eventsCount>0?Rn(this._events):[]};function Xr(a,n){for(var e=new Array(n),t=0;t<n;++t)e[t]=a[t];return e}function Qs(a,n){for(;n+1<a.length;n++)a[n]=a[n+1];a.pop()}function Js(a){for(var n=new Array(a.length),e=0;e<n.length;++e)n[e]=a[e].listener||a[e];return n}function el(a,n){return new Promise(function(e,t){function r(o){a.removeListener(n,i),t(o)}function i(){typeof a.removeListener=="function"&&a.removeListener("error",r),e([].slice.call(arguments))}Yr(a,n,i,{once:!0}),n!=="error"&&tl(a,r,{once:!0})})}function tl(a,n,e){typeof a.on=="function"&&Yr(a,"error",n,e)}function Yr(a,n,e,t){if(typeof a.on=="function")t.once?a.once(n,e):a.on(n,e);else if(typeof a.addEventListener=="function")a.addEventListener(n,function r(i){t.once&&a.removeEventListener(n,r),e(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}});var Xa=Or((Bh,zi)=>{zi.exports=function(n){return n!==null&&typeof n=="object"&&typeof n.addUndirectedEdgeWithKey=="function"&&typeof n.dropNode=="function"&&typeof n.multi=="boolean"}});var Jr=lt(Tt(),1);function nl(){let a=arguments[0];for(let n=1,e=arguments.length;n<e;n++)if(arguments[n])for(let t in arguments[n])a[t]=arguments[n][t];return a}var ce=nl;typeof Object.assign=="function"&&(ce=Object.assign);function Te(a,n,e,t){let r=a._nodes.get(n),i=null;return r&&(t==="mixed"?i=r.out&&r.out[e]||r.undirected&&r.undirected[e]:t==="directed"?i=r.out&&r.out[e]:i=r.undirected&&r.undirected[e]),i}function ge(a){return typeof a=="object"&&a!==null}function ei(a){let n;for(n in a)return!1;return!0}function _e(a,n,e){Object.defineProperty(a,n,{enumerable:!1,configurable:!1,writable:!0,value:e})}function ke(a,n,e){let t={enumerable:!0,configurable:!0};typeof e=="function"?t.get=e:(t.value=e,t.writable=!1),Object.defineProperty(a,n,t)}function Kr(a){return!(!ge(a)||a.attributes&&!Array.isArray(a.attributes))}function al(){let a=Math.floor(Math.random()*256)&255;return()=>a++}function Be(){let a=arguments,n=null,e=-1;return{[Symbol.iterator](){return this},next(){let t=null;do{if(n===null){if(e++,e>=a.length)return{done:!0};n=a[e][Symbol.iterator]()}if(t=n.next(),t.done){n=null;continue}break}while(!0);return t}}}function St(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}var Kt=class extends Error{constructor(n){super(),this.name="GraphError",this.message=n}},W=class a extends Kt{constructor(n){super(n),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}},B=class a extends Kt{constructor(n){super(n),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}},X=class a extends Kt{constructor(n){super(n),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}};function ti(a,n){this.key=a,this.attributes=n,this.clear()}ti.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function ni(a,n){this.key=a,this.attributes=n,this.clear()}ni.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function ai(a,n){this.key=a,this.attributes=n,this.clear()}ai.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function At(a,n,e,t,r){this.key=n,this.attributes=r,this.undirected=a,this.source=e,this.target=t}At.prototype.attach=function(){let a="out",n="in";this.undirected&&(a=n="undirected");let e=this.source.key,t=this.target.key;this.source[a][t]=this,!(this.undirected&&e===t)&&(this.target[n][e]=this)};At.prototype.attachMulti=function(){let a="out",n="in",e=this.source.key,t=this.target.key;this.undirected&&(a=n="undirected");let r=this.source[a],i=r[t];if(typeof i>"u"){r[t]=this,this.undirected&&e===t||(this.target[n][e]=this);return}i.previous=this,this.next=i,r[t]=this,this.target[n][e]=this};At.prototype.detach=function(){let a=this.source.key,n=this.target.key,e="out",t="in";this.undirected&&(e=t="undirected"),delete this.source[e][n],delete this.target[t][a]};At.prototype.detachMulti=function(){let a=this.source.key,n=this.target.key,e="out",t="in";this.undirected&&(e=t="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][n],delete this.target[t][a]):(this.next.previous=void 0,this.source[e][n]=this.next,this.target[t][a]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};var ri=0,ii=1,rl=2,oi=3;function We(a,n,e,t,r,i,o){let l,s,d,u;if(t=""+t,e===ri){if(l=a._nodes.get(t),!l)throw new B(`Graph.${n}: could not find the "${t}" node in the graph.`);d=r,u=i}else if(e===oi){if(r=""+r,s=a._edges.get(r),!s)throw new B(`Graph.${n}: could not find the "${r}" edge in the graph.`);let c=s.source.key,f=s.target.key;if(t===c)l=s.target;else if(t===f)l=s.source;else throw new B(`Graph.${n}: the "${t}" node is not attached to the "${r}" edge (${c}, ${f}).`);d=i,u=o}else{if(s=a._edges.get(t),!s)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`);e===ii?l=s.source:l=s.target,d=r,u=i}return[l,d,u]}function il(a,n,e){a.prototype[n]=function(t,r,i){let[o,l]=We(this,n,e,t,r,i);return o.attributes[l]}}function ol(a,n,e){a.prototype[n]=function(t,r){let[i]=We(this,n,e,t,r);return i.attributes}}function sl(a,n,e){a.prototype[n]=function(t,r,i){let[o,l]=We(this,n,e,t,r,i);return o.attributes.hasOwnProperty(l)}}function ll(a,n,e){a.prototype[n]=function(t,r,i,o){let[l,s,d]=We(this,n,e,t,r,i,o);return l.attributes[s]=d,this.emit("nodeAttributesUpdated",{key:l.key,type:"set",attributes:l.attributes,name:s}),this}}function dl(a,n,e){a.prototype[n]=function(t,r,i,o){let[l,s,d]=We(this,n,e,t,r,i,o);if(typeof d!="function")throw new W(`Graph.${n}: updater should be a function.`);let u=l.attributes,c=d(u[s]);return u[s]=c,this.emit("nodeAttributesUpdated",{key:l.key,type:"set",attributes:l.attributes,name:s}),this}}function ul(a,n,e){a.prototype[n]=function(t,r,i){let[o,l]=We(this,n,e,t,r,i);return delete o.attributes[l],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:l}),this}}function cl(a,n,e){a.prototype[n]=function(t,r,i){let[o,l]=We(this,n,e,t,r,i);if(!ge(l))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return o.attributes=l,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function hl(a,n,e){a.prototype[n]=function(t,r,i){let[o,l]=We(this,n,e,t,r,i);if(!ge(l))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return ce(o.attributes,l),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:l}),this}}function fl(a,n,e){a.prototype[n]=function(t,r,i){let[o,l]=We(this,n,e,t,r,i);if(typeof l!="function")throw new W(`Graph.${n}: provided updater is not a function.`);return o.attributes=l(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}var gl=[{name:a=>`get${a}Attribute`,attacher:il},{name:a=>`get${a}Attributes`,attacher:ol},{name:a=>`has${a}Attribute`,attacher:sl},{name:a=>`set${a}Attribute`,attacher:ll},{name:a=>`update${a}Attribute`,attacher:dl},{name:a=>`remove${a}Attribute`,attacher:ul},{name:a=>`replace${a}Attributes`,attacher:cl},{name:a=>`merge${a}Attributes`,attacher:hl},{name:a=>`update${a}Attributes`,attacher:fl}];function pl(a){gl.forEach(function({name:n,attacher:e}){e(a,n("Node"),ri),e(a,n("Source"),ii),e(a,n("Target"),rl),e(a,n("Opposite"),oi)})}function vl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Te(this,o,l,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return i.attributes[r]}}function ml(a,n,e){a.prototype[n]=function(t){let r;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let i=""+t,o=""+arguments[1];if(r=Te(this,i,o,e),!r)throw new B(`Graph.${n}: could not find an edge for the given path ("${i}" - "${o}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,r=this._edges.get(t),!r)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return r.attributes}}function bl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Te(this,o,l,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return i.attributes.hasOwnProperty(r)}}function yl(a,n,e){a.prototype[n]=function(t,r,i){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let l=""+t,s=""+r;if(r=arguments[2],i=arguments[3],o=Te(this,l,s,e),!o)throw new B(`Graph.${n}: could not find an edge for the given path ("${l}" - "${s}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,o=this._edges.get(t),!o)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return o.attributes[r]=i,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function xl(a,n,e){a.prototype[n]=function(t,r,i){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let l=""+t,s=""+r;if(r=arguments[2],i=arguments[3],o=Te(this,l,s,e),!o)throw new B(`Graph.${n}: could not find an edge for the given path ("${l}" - "${s}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,o=this._edges.get(t),!o)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(typeof i!="function")throw new W(`Graph.${n}: updater should be a function.`);return o.attributes[r]=i(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function _l(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Te(this,o,l,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}return delete i.attributes[r],this.emit("edgeAttributesUpdated",{key:i.key,type:"remove",attributes:i.attributes,name:r}),this}}function Tl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Te(this,o,l,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(!ge(r))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return i.attributes=r,this.emit("edgeAttributesUpdated",{key:i.key,type:"replace",attributes:i.attributes}),this}}function El(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Te(this,o,l,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(!ge(r))throw new W(`Graph.${n}: provided attributes are not a plain object.`);return ce(i.attributes,r),this.emit("edgeAttributesUpdated",{key:i.key,type:"merge",attributes:i.attributes,data:r}),this}}function Sl(a,n,e){a.prototype[n]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Te(this,o,l,e),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${n}: could not find the "${t}" edge in the graph.`)}if(typeof r!="function")throw new W(`Graph.${n}: provided updater is not a function.`);return i.attributes=r(i.attributes),this.emit("edgeAttributesUpdated",{key:i.key,type:"update",attributes:i.attributes}),this}}var Al=[{name:a=>`get${a}Attribute`,attacher:vl},{name:a=>`get${a}Attributes`,attacher:ml},{name:a=>`has${a}Attribute`,attacher:bl},{name:a=>`set${a}Attribute`,attacher:yl},{name:a=>`update${a}Attribute`,attacher:xl},{name:a=>`remove${a}Attribute`,attacher:_l},{name:a=>`replace${a}Attributes`,attacher:Tl},{name:a=>`merge${a}Attributes`,attacher:El},{name:a=>`update${a}Attributes`,attacher:Sl}];function Rl(a){Al.forEach(function({name:n,attacher:e}){e(a,n("Edge"),"mixed"),e(a,n("DirectedEdge"),"directed"),e(a,n("UndirectedEdge"),"undirected")})}var wl=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function Dl(a,n,e,t){let r=!1;for(let i in n){if(i===t)continue;let o=n[i];if(r=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),a&&r)return o.key}}function Ll(a,n,e,t){let r,i,o,l=!1;for(let s in n)if(s!==t){r=n[s];do{if(i=r.source,o=r.target,l=e(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected),a&&l)return r.key;r=r.next}while(r!==void 0)}}function Ra(a,n){let e=Object.keys(a),t=e.length,r,i=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(i>=t)return{done:!0};let o=e[i++];if(o===n){r=void 0;continue}r=a[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function Cl(a,n,e,t){let r=n[e];if(!r)return;let i=r.source,o=r.target;if(t(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected)&&a)return r.key}function kl(a,n,e,t){let r=n[e];if(!r)return;let i=!1;do{if(i=t(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),a&&i)return r.key;r=r.next}while(r!==void 0)}function wa(a,n){let e=a[n];if(e.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!e)return{done:!0};let r={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:r}}};let t=!1;return{[Symbol.iterator](){return this},next(){return t===!0?{done:!0}:(t=!0,{done:!1,value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected}})}}}function Pl(a,n){if(a.size===0)return[];if(n==="mixed"||n===a.type)return Array.from(a._edges.keys());let e=n==="undirected"?a.undirectedSize:a.directedSize,t=new Array(e),r=n==="undirected",i=a._edges.values(),o=0,l,s;for(;l=i.next(),l.done!==!0;)s=l.value,s.undirected===r&&(t[o++]=s.key);return t}function si(a,n,e,t){if(n.size===0)return;let r=e!=="mixed"&&e!==n.type,i=e==="undirected",o,l,s=!1,d=n._edges.values();for(;o=d.next(),o.done!==!0;){if(l=o.value,r&&l.undirected!==i)continue;let{key:u,attributes:c,source:f,target:g}=l;if(s=t(u,c,f.key,g.key,f.attributes,g.attributes,l.undirected),a&&s)return u}}function Fl(a,n){if(a.size===0)return St();let e=n!=="mixed"&&n!==a.type,t=n==="undirected",r=a._edges.values();return{[Symbol.iterator](){return this},next(){let i,o;for(;;){if(i=r.next(),i.done)return i;if(o=i.value,!(e&&o.undirected!==t))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function Da(a,n,e,t,r,i){let o=n?Ll:Dl,l;if(e!=="undirected"&&(t!=="out"&&(l=o(a,r.in,i),a&&l)||t!=="in"&&(l=o(a,r.out,i,t?void 0:r.key),a&&l))||e!=="directed"&&(l=o(a,r.undirected,i),a&&l))return l}function Il(a,n,e,t){let r=[];return Da(!1,a,n,e,t,function(i){r.push(i)}),r}function Nl(a,n,e){let t=St();return a!=="undirected"&&(n!=="out"&&typeof e.in<"u"&&(t=Be(t,Ra(e.in))),n!=="in"&&typeof e.out<"u"&&(t=Be(t,Ra(e.out,n?void 0:e.key)))),a!=="directed"&&typeof e.undirected<"u"&&(t=Be(t,Ra(e.undirected))),t}function La(a,n,e,t,r,i,o){let l=e?kl:Cl,s;if(n!=="undirected"&&(typeof r.in<"u"&&t!=="out"&&(s=l(a,r.in,i,o),a&&s)||typeof r.out<"u"&&t!=="in"&&(t||r.key!==i)&&(s=l(a,r.out,i,o),a&&s))||n!=="directed"&&typeof r.undirected<"u"&&(s=l(a,r.undirected,i,o),a&&s))return s}function Gl(a,n,e,t,r){let i=[];return La(!1,a,n,e,t,r,function(o){i.push(o)}),i}function Ml(a,n,e,t){let r=St();return a!=="undirected"&&(typeof e.in<"u"&&n!=="out"&&t in e.in&&(r=Be(r,wa(e.in,t))),typeof e.out<"u"&&n!=="in"&&t in e.out&&(n||e.key!==t)&&(r=Be(r,wa(e.out,t)))),a!=="directed"&&typeof e.undirected<"u"&&t in e.undirected&&(r=Be(r,wa(e.undirected,t))),r}function zl(a,n){let{name:e,type:t,direction:r}=n;a.prototype[e]=function(i,o){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return[];if(!arguments.length)return Pl(this,t);if(arguments.length===1){i=""+i;let l=this._nodes.get(i);if(typeof l>"u")throw new B(`Graph.${e}: could not find the "${i}" node in the graph.`);return Il(this.multi,t==="mixed"?this.type:t,r,l)}if(arguments.length===2){i=""+i,o=""+o;let l=this._nodes.get(i);if(!l)throw new B(`Graph.${e}:  could not find the "${i}" source node in the graph.`);if(!this._nodes.has(o))throw new B(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return Gl(t,this.multi,r,l,o)}throw new W(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ol(a,n){let{name:e,type:t,direction:r}=n,i="forEach"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[i]=function(d,u,c){if(!(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)){if(arguments.length===1)return c=d,si(!1,this,t,c);if(arguments.length===2){d=""+d,c=u;let f=this._nodes.get(d);if(typeof f>"u")throw new B(`Graph.${i}: could not find the "${d}" node in the graph.`);return Da(!1,this.multi,t==="mixed"?this.type:t,r,f,c)}if(arguments.length===3){d=""+d,u=""+u;let f=this._nodes.get(d);if(!f)throw new B(`Graph.${i}:  could not find the "${d}" source node in the graph.`);if(!this._nodes.has(u))throw new B(`Graph.${i}:  could not find the "${u}" target node in the graph.`);return La(!1,t,this.multi,r,f,u,c)}throw new W(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};let o="map"+e[0].toUpperCase()+e.slice(1);a.prototype[o]=function(){let d=Array.prototype.slice.call(arguments),u=d.pop(),c;if(d.length===0){let f=0;t!=="directed"&&(f+=this.undirectedSize),t!=="undirected"&&(f+=this.directedSize),c=new Array(f);let g=0;d.push((h,m,v,p,b,y,x)=>{c[g++]=u(h,m,v,p,b,y,x)})}else c=[],d.push((f,g,h,m,v,p,b)=>{c.push(u(f,g,h,m,v,p,b))});return this[i].apply(this,d),c};let l="filter"+e[0].toUpperCase()+e.slice(1);a.prototype[l]=function(){let d=Array.prototype.slice.call(arguments),u=d.pop(),c=[];return d.push((f,g,h,m,v,p,b)=>{u(f,g,h,m,v,p,b)&&c.push(f)}),this[i].apply(this,d),c};let s="reduce"+e[0].toUpperCase()+e.slice(1);a.prototype[s]=function(){let d=Array.prototype.slice.call(arguments);if(d.length<2||d.length>4)throw new W(`Graph.${s}: invalid number of arguments (expecting 2, 3 or 4 and got ${d.length}).`);if(typeof d[d.length-1]=="function"&&typeof d[d.length-2]!="function")throw new W(`Graph.${s}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,c;d.length===2?(u=d[0],c=d[1],d=[]):d.length===3?(u=d[1],c=d[2],d=[d[0]]):d.length===4&&(u=d[2],c=d[3],d=[d[0],d[1]]);let f=c;return d.push((g,h,m,v,p,b,y)=>{f=u(f,g,h,m,v,p,b,y)}),this[i].apply(this,d),f}}function Bl(a,n){let{name:e,type:t,direction:r}=n,i="find"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[i]=function(s,d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return!1;if(arguments.length===1)return u=s,si(!0,this,t,u);if(arguments.length===2){s=""+s,u=d;let c=this._nodes.get(s);if(typeof c>"u")throw new B(`Graph.${i}: could not find the "${s}" node in the graph.`);return Da(!0,this.multi,t==="mixed"?this.type:t,r,c,u)}if(arguments.length===3){s=""+s,d=""+d;let c=this._nodes.get(s);if(!c)throw new B(`Graph.${i}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(d))throw new B(`Graph.${i}:  could not find the "${d}" target node in the graph.`);return La(!0,t,this.multi,r,c,d,u)}throw new W(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};let o="some"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[o]=function(){let s=Array.prototype.slice.call(arguments),d=s.pop();return s.push((c,f,g,h,m,v,p)=>d(c,f,g,h,m,v,p)),!!this[i].apply(this,s)};let l="every"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[l]=function(){let s=Array.prototype.slice.call(arguments),d=s.pop();return s.push((c,f,g,h,m,v,p)=>!d(c,f,g,h,m,v,p)),!this[i].apply(this,s)}}function Wl(a,n){let{name:e,type:t,direction:r}=n,i=e.slice(0,-1)+"Entries";a.prototype[i]=function(o,l){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return St();if(!arguments.length)return Fl(this,t);if(arguments.length===1){o=""+o;let s=this._nodes.get(o);if(!s)throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return Nl(t,r,s)}if(arguments.length===2){o=""+o,l=""+l;let s=this._nodes.get(o);if(!s)throw new B(`Graph.${i}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(l))throw new B(`Graph.${i}:  could not find the "${l}" target node in the graph.`);return Ml(t,r,s,l)}throw new W(`Graph.${i}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ul(a){wl.forEach(n=>{zl(a,n),Ol(a,n),Bl(a,n),Wl(a,n)})}var Hl=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function In(){this.A=null,this.B=null}In.prototype.wrap=function(a){this.A===null?this.A=a:this.B===null&&(this.B=a)};In.prototype.has=function(a){return this.A!==null&&a in this.A||this.B!==null&&a in this.B};function Xt(a,n,e,t,r){for(let i in t){let o=t[i],l=o.source,s=o.target,d=l===e?s:l;if(n&&n.has(d.key))continue;let u=r(d.key,d.attributes);if(a&&u)return d.key}}function Ca(a,n,e,t,r){if(n!=="mixed"){if(n==="undirected")return Xt(a,null,t,t.undirected,r);if(typeof e=="string")return Xt(a,null,t,t[e],r)}let i=new In,o;if(n!=="undirected"){if(e!=="out"){if(o=Xt(a,null,t,t.in,r),a&&o)return o;i.wrap(t.in)}if(e!=="in"){if(o=Xt(a,i,t,t.out,r),a&&o)return o;i.wrap(t.out)}}if(n!=="directed"&&(o=Xt(a,i,t,t.undirected,r),a&&o))return o}function $l(a,n,e){if(a!=="mixed"){if(a==="undirected")return Object.keys(e.undirected);if(typeof n=="string")return Object.keys(e[n])}let t=[];return Ca(!1,a,n,e,function(r){t.push(r)}),t}function Yt(a,n,e){let t=Object.keys(e),r=t.length,i=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(i>=r)return a&&a.wrap(e),{done:!0};let l=e[t[i++]],s=l.source,d=l.target;if(o=s===n?d:s,a&&a.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Vl(a,n,e){if(a!=="mixed"){if(a==="undirected")return Yt(null,e,e.undirected);if(typeof n=="string")return Yt(null,e,e[n])}let t=St(),r=new In;return a!=="undirected"&&(n!=="out"&&(t=Be(t,Yt(r,e,e.in))),n!=="in"&&(t=Be(t,Yt(r,e,e.out)))),a!=="directed"&&(t=Be(t,Yt(r,e,e.undirected))),t}function jl(a,n){let{name:e,type:t,direction:r}=n;a.prototype[e]=function(i){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return[];i=""+i;let o=this._nodes.get(i);if(typeof o>"u")throw new B(`Graph.${e}: could not find the "${i}" node in the graph.`);return $l(t==="mixed"?this.type:t,r,o)}}function ql(a,n){let{name:e,type:t,direction:r}=n,i="forEach"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[i]=function(d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return;d=""+d;let c=this._nodes.get(d);if(typeof c>"u")throw new B(`Graph.${i}: could not find the "${d}" node in the graph.`);Ca(!1,t==="mixed"?this.type:t,r,c,u)};let o="map"+e[0].toUpperCase()+e.slice(1);a.prototype[o]=function(d,u){let c=[];return this[i](d,(f,g)=>{c.push(u(f,g))}),c};let l="filter"+e[0].toUpperCase()+e.slice(1);a.prototype[l]=function(d,u){let c=[];return this[i](d,(f,g)=>{u(f,g)&&c.push(f)}),c};let s="reduce"+e[0].toUpperCase()+e.slice(1);a.prototype[s]=function(d,u,c){if(arguments.length<3)throw new W(`Graph.${s}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let f=c;return this[i](d,(g,h)=>{f=u(f,g,h)}),f}}function Xl(a,n){let{name:e,type:t,direction:r}=n,i=e[0].toUpperCase()+e.slice(1,-1),o="find"+i;a.prototype[o]=function(d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return;d=""+d;let c=this._nodes.get(d);if(typeof c>"u")throw new B(`Graph.${o}: could not find the "${d}" node in the graph.`);return Ca(!0,t==="mixed"?this.type:t,r,c,u)};let l="some"+i;a.prototype[l]=function(d,u){return!!this[o](d,u)};let s="every"+i;a.prototype[s]=function(d,u){return!this[o](d,(f,g)=>!u(f,g))}}function Yl(a,n){let{name:e,type:t,direction:r}=n,i=e.slice(0,-1)+"Entries";a.prototype[i]=function(o){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return St();o=""+o;let l=this._nodes.get(o);if(typeof l>"u")throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return Vl(t==="mixed"?this.type:t,r,l)}}function Kl(a){Hl.forEach(n=>{jl(a,n),ql(a,n),Xl(a,n),Yl(a,n)})}function Dn(a,n,e,t,r){let i=t._nodes.values(),o=t.type,l,s,d,u,c,f,g;for(;l=i.next(),l.done!==!0;){let h=!1;if(s=l.value,o!=="undirected"){u=s.out;for(d in u){c=u[d];do{if(f=c.target,h=!0,g=r(s.key,f.key,s.attributes,f.attributes,c.key,c.attributes,c.undirected),a&&g)return c;c=c.next}while(c)}}if(o!=="directed"){u=s.undirected;for(d in u)if(!(n&&s.key>d)){c=u[d];do{if(f=c.target,f.key!==d&&(f=c.source),h=!0,g=r(s.key,f.key,s.attributes,f.attributes,c.key,c.attributes,c.undirected),a&&g)return c;c=c.next}while(c)}}if(e&&!h&&(g=r(s.key,null,s.attributes,null,null,null,null),a&&g))return null}}function Zl(a,n){let e={key:a};return ei(n.attributes)||(e.attributes=ce({},n.attributes)),e}function Ql(a,n,e){let t={key:n,source:e.source.key,target:e.target.key};return ei(e.attributes)||(t.attributes=ce({},e.attributes)),a==="mixed"&&e.undirected&&(t.undirected=!0),t}function Jl(a){if(!ge(a))throw new W('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in a))throw new W("Graph.import: serialized node is missing its key.");if("attributes"in a&&(!ge(a.attributes)||a.attributes===null))throw new W("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function ed(a){if(!ge(a))throw new W('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in a))throw new W("Graph.import: serialized edge is missing its source.");if(!("target"in a))throw new W("Graph.import: serialized edge is missing its target.");if("attributes"in a&&(!ge(a.attributes)||a.attributes===null))throw new W("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in a&&typeof a.undirected!="boolean")throw new W("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}var td=al(),nd=new Set(["directed","undirected","mixed"]),Zr=new Set(["domain","_events","_eventsCount","_maxListeners"]),ad=[{name:a=>`${a}Edge`,generateKey:!0},{name:a=>`${a}DirectedEdge`,generateKey:!0,type:"directed"},{name:a=>`${a}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:a=>`${a}EdgeWithKey`},{name:a=>`${a}DirectedEdgeWithKey`,type:"directed"},{name:a=>`${a}UndirectedEdgeWithKey`,type:"undirected"}],rd={allowSelfLoops:!0,multi:!1,type:"mixed"};function id(a,n,e){if(e&&!ge(e))throw new W(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(n=""+n,e=e||{},a._nodes.has(n))throw new X(`Graph.addNode: the "${n}" node already exist in the graph.`);let t=new a.NodeDataClass(n,e);return a._nodes.set(n,t),a.emit("nodeAdded",{key:n,attributes:e}),t}function Qr(a,n,e){let t=new a.NodeDataClass(n,e);return a._nodes.set(n,t),a.emit("nodeAdded",{key:n,attributes:e}),t}function li(a,n,e,t,r,i,o,l){if(!t&&a.type==="undirected")throw new X(`Graph.${n}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(t&&a.type==="directed")throw new X(`Graph.${n}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(l&&!ge(l))throw new W(`Graph.${n}: invalid attributes. Expecting an object but got "${l}"`);if(i=""+i,o=""+o,l=l||{},!a.allowSelfLoops&&i===o)throw new X(`Graph.${n}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let s=a._nodes.get(i),d=a._nodes.get(o);if(!s)throw new B(`Graph.${n}: source node "${i}" not found.`);if(!d)throw new B(`Graph.${n}: target node "${o}" not found.`);let u={key:null,undirected:t,source:i,target:o,attributes:l};if(e)r=a._edgeKeyGenerator();else if(r=""+r,a._edges.has(r))throw new X(`Graph.${n}: the "${r}" edge already exists in the graph.`);if(!a.multi&&(t?typeof s.undirected[o]<"u":typeof s.out[o]<"u"))throw new X(`Graph.${n}: an edge linking "${i}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);let c=new At(t,r,s,d,l);a._edges.set(r,c);let f=i===o;return t?(s.undirectedDegree++,d.undirectedDegree++,f&&(s.undirectedLoops++,a._undirectedSelfLoopCount++)):(s.outDegree++,d.inDegree++,f&&(s.directedLoops++,a._directedSelfLoopCount++)),a.multi?c.attachMulti():c.attach(),t?a._undirectedSize++:a._directedSize++,u.key=r,a.emit("edgeAdded",u),r}function od(a,n,e,t,r,i,o,l,s){if(!t&&a.type==="undirected")throw new X(`Graph.${n}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(t&&a.type==="directed")throw new X(`Graph.${n}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(l){if(s){if(typeof l!="function")throw new W(`Graph.${n}: invalid updater function. Expecting a function but got "${l}"`)}else if(!ge(l))throw new W(`Graph.${n}: invalid attributes. Expecting an object but got "${l}"`)}i=""+i,o=""+o;let d;if(s&&(d=l,l=void 0),!a.allowSelfLoops&&i===o)throw new X(`Graph.${n}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=a._nodes.get(i),c=a._nodes.get(o),f,g;if(!e&&(f=a._edges.get(r),f)){if((f.source.key!==i||f.target.key!==o)&&(!t||f.source.key!==o||f.target.key!==i))throw new X(`Graph.${n}: inconsistency detected when attempting to merge the "${r}" edge with "${i}" source & "${o}" target vs. ("${f.source.key}", "${f.target.key}").`);g=f}if(!g&&!a.multi&&u&&(g=t?u.undirected[o]:u.out[o]),g){let b=[g.key,!1,!1,!1];if(s?!d:!l)return b;if(s){let y=g.attributes;g.attributes=d(y),a.emit("edgeAttributesUpdated",{type:"replace",key:g.key,attributes:g.attributes})}else ce(g.attributes,l),a.emit("edgeAttributesUpdated",{type:"merge",key:g.key,attributes:g.attributes,data:l});return b}l=l||{},s&&d&&(l=d(l));let h={key:null,undirected:t,source:i,target:o,attributes:l};if(e)r=a._edgeKeyGenerator();else if(r=""+r,a._edges.has(r))throw new X(`Graph.${n}: the "${r}" edge already exists in the graph.`);let m=!1,v=!1;u||(u=Qr(a,i,{}),m=!0,i===o&&(c=u,v=!0)),c||(c=Qr(a,o,{}),v=!0),f=new At(t,r,u,c,l),a._edges.set(r,f);let p=i===o;return t?(u.undirectedDegree++,c.undirectedDegree++,p&&(u.undirectedLoops++,a._undirectedSelfLoopCount++)):(u.outDegree++,c.inDegree++,p&&(u.directedLoops++,a._directedSelfLoopCount++)),a.multi?f.attachMulti():f.attach(),t?a._undirectedSize++:a._directedSize++,h.key=r,a.emit("edgeAdded",h),[r,!0,m,v]}function Et(a,n){a._edges.delete(n.key);let{source:e,target:t,attributes:r}=n,i=n.undirected,o=e===t;i?(e.undirectedDegree--,t.undirectedDegree--,o&&(e.undirectedLoops--,a._undirectedSelfLoopCount--)):(e.outDegree--,t.inDegree--,o&&(e.directedLoops--,a._directedSelfLoopCount--)),a.multi?n.detachMulti():n.detach(),i?a._undirectedSize--:a._directedSize--,a.emit("edgeDropped",{key:n.key,attributes:r,source:e.key,target:t.key,undirected:i})}var re=class a extends Jr.EventEmitter{constructor(n){if(super(),n=ce({},rd,n),typeof n.multi!="boolean")throw new W(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${n.multi}".`);if(!nd.has(n.type))throw new W(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${n.type}".`);if(typeof n.allowSelfLoops!="boolean")throw new W(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${n.allowSelfLoops}".`);let e=n.type==="mixed"?ti:n.type==="directed"?ni:ai;_e(this,"NodeDataClass",e);let t="geid_"+td()+"_",r=0,i=()=>{let o;do o=t+r++;while(this._edges.has(o));return o};_e(this,"_attributes",{}),_e(this,"_nodes",new Map),_e(this,"_edges",new Map),_e(this,"_directedSize",0),_e(this,"_undirectedSize",0),_e(this,"_directedSelfLoopCount",0),_e(this,"_undirectedSelfLoopCount",0),_e(this,"_edgeKeyGenerator",i),_e(this,"_options",n),Zr.forEach(o=>_e(this,o,this[o])),ke(this,"order",()=>this._nodes.size),ke(this,"size",()=>this._edges.size),ke(this,"directedSize",()=>this._directedSize),ke(this,"undirectedSize",()=>this._undirectedSize),ke(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),ke(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),ke(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),ke(this,"multi",this._options.multi),ke(this,"type",this._options.type),ke(this,"allowSelfLoops",this._options.allowSelfLoops),ke(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(n){return this._nodes.has(""+n)}hasDirectedEdge(n,e){if(this.type==="undirected")return!1;if(arguments.length===1){let t=""+n,r=this._edges.get(t);return!!r&&!r.undirected}else if(arguments.length===2){n=""+n,e=""+e;let t=this._nodes.get(n);return t?t.out.hasOwnProperty(e):!1}throw new W(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(n,e){if(this.type==="directed")return!1;if(arguments.length===1){let t=""+n,r=this._edges.get(t);return!!r&&r.undirected}else if(arguments.length===2){n=""+n,e=""+e;let t=this._nodes.get(n);return t?t.undirected.hasOwnProperty(e):!1}throw new W(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(n,e){if(arguments.length===1){let t=""+n;return this._edges.has(t)}else if(arguments.length===2){n=""+n,e=""+e;let t=this._nodes.get(n);return t?typeof t.out<"u"&&t.out.hasOwnProperty(e)||typeof t.undirected<"u"&&t.undirected.hasOwnProperty(e):!1}throw new W(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(n,e){if(this.type==="undirected")return;if(n=""+n,e=""+e,this.multi)throw new X("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");let t=this._nodes.get(n);if(!t)throw new B(`Graph.directedEdge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);let r=t.out&&t.out[e]||void 0;if(r)return r.key}undirectedEdge(n,e){if(this.type==="directed")return;if(n=""+n,e=""+e,this.multi)throw new X("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");let t=this._nodes.get(n);if(!t)throw new B(`Graph.undirectedEdge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);let r=t.undirected&&t.undirected[e]||void 0;if(r)return r.key}edge(n,e){if(this.multi)throw new X("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.edge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.edge: could not find the "${e}" target node in the graph.`);let r=t.out&&t.out[e]||t.undirected&&t.undirected[e]||void 0;if(r)return r.key}areDirectedNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areDirectedNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:e in t.in||e in t.out}areOutNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areOutNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:e in t.out}areInNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areInNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:e in t.in}areUndirectedNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areUndirectedNeighbors: could not find the "${n}" node in the graph.`);return this.type==="directed"?!1:e in t.undirected}areNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&(e in t.in||e in t.out)||this.type!=="directed"&&e in t.undirected}areInboundNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areInboundNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&e in t.in||this.type!=="directed"&&e in t.undirected}areOutboundNeighbors(n,e){n=""+n,e=""+e;let t=this._nodes.get(n);if(!t)throw new B(`Graph.areOutboundNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&e in t.out||this.type!=="directed"&&e in t.undirected}inDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.directedDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.undirectedDegree: could not find the "${n}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inboundDegree: could not find the "${n}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.inDegree),t}outboundDegree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outboundDegree: could not find the "${n}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.outDegree),t}degree(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.degree: could not find the "${n}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.inDegree+e.outDegree),t}inDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.directedDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.inDegree,r+=e.directedLoops),t-r}outboundDegreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.outDegree,r+=e.directedLoops),t-r}degreeWithoutSelfLoops(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.degreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.inDegree+e.outDegree,r+=e.directedLoops*2),t-r}source(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.source: could not find the "${n}" edge in the graph.`);return e.source.key}target(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.target: could not find the "${n}" edge in the graph.`);return e.target.key}extremities(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.extremities: could not find the "${n}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(n,e){n=""+n,e=""+e;let t=this._edges.get(e);if(!t)throw new B(`Graph.opposite: could not find the "${e}" edge in the graph.`);let r=t.source.key,i=t.target.key;if(n===r)return i;if(n===i)return r;throw new B(`Graph.opposite: the "${n}" node is not attached to the "${e}" edge (${r}, ${i}).`)}hasExtremity(n,e){n=""+n,e=""+e;let t=this._edges.get(n);if(!t)throw new B(`Graph.hasExtremity: could not find the "${n}" edge in the graph.`);return t.source.key===e||t.target.key===e}isUndirected(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.isUndirected: could not find the "${n}" edge in the graph.`);return e.undirected}isDirected(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.isDirected: could not find the "${n}" edge in the graph.`);return!e.undirected}isSelfLoop(n){n=""+n;let e=this._edges.get(n);if(!e)throw new B(`Graph.isSelfLoop: could not find the "${n}" edge in the graph.`);return e.source===e.target}addNode(n,e){return id(this,n,e).key}mergeNode(n,e){if(e&&!ge(e))throw new W(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);n=""+n,e=e||{};let t=this._nodes.get(n);return t?(e&&(ce(t.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:n,attributes:t.attributes,data:e})),[n,!1]):(t=new this.NodeDataClass(n,e),this._nodes.set(n,t),this.emit("nodeAdded",{key:n,attributes:e}),[n,!0])}updateNode(n,e){if(e&&typeof e!="function")throw new W(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);n=""+n;let t=this._nodes.get(n);if(t){if(e){let i=t.attributes;t.attributes=e(i),this.emit("nodeAttributesUpdated",{type:"replace",key:n,attributes:t.attributes})}return[n,!1]}let r=e?e({}):{};return t=new this.NodeDataClass(n,r),this._nodes.set(n,t),this.emit("nodeAdded",{key:n,attributes:r}),[n,!0]}dropNode(n){n=""+n;let e=this._nodes.get(n);if(!e)throw new B(`Graph.dropNode: could not find the "${n}" node in the graph.`);let t;if(this.type!=="undirected"){for(let r in e.out){t=e.out[r];do Et(this,t),t=t.next;while(t)}for(let r in e.in){t=e.in[r];do Et(this,t),t=t.next;while(t)}}if(this.type!=="directed")for(let r in e.undirected){t=e.undirected[r];do Et(this,t),t=t.next;while(t)}this._nodes.delete(n),this.emit("nodeDropped",{key:n,attributes:e.attributes})}dropEdge(n){let e;if(arguments.length>1){let t=""+arguments[0],r=""+arguments[1];if(e=Te(this,t,r,this.type),!e)throw new B(`Graph.dropEdge: could not find the "${t}" -> "${r}" edge in the graph.`)}else if(n=""+n,e=this._edges.get(n),!e)throw new B(`Graph.dropEdge: could not find the "${n}" edge in the graph.`);return Et(this,e),this}dropDirectedEdge(n,e){if(arguments.length<2)throw new X("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new X("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");n=""+n,e=""+e;let t=Te(this,n,e,"directed");if(!t)throw new B(`Graph.dropDirectedEdge: could not find a "${n}" -> "${e}" edge in the graph.`);return Et(this,t),this}dropUndirectedEdge(n,e){if(arguments.length<2)throw new X("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new X("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");let t=Te(this,n,e,"undirected");if(!t)throw new B(`Graph.dropUndirectedEdge: could not find a "${n}" -> "${e}" edge in the graph.`);return Et(this,t),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){let n=this._nodes.values(),e;for(;e=n.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(n){return this._attributes[n]}getAttributes(){return this._attributes}hasAttribute(n){return this._attributes.hasOwnProperty(n)}setAttribute(n,e){return this._attributes[n]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:n}),this}updateAttribute(n,e){if(typeof e!="function")throw new W("Graph.updateAttribute: updater should be a function.");let t=this._attributes[n];return this._attributes[n]=e(t),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:n}),this}removeAttribute(n){return delete this._attributes[n],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:n}),this}replaceAttributes(n){if(!ge(n))throw new W("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=n,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(n){if(!ge(n))throw new W("Graph.mergeAttributes: provided attributes are not a plain object.");return ce(this._attributes,n),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:n}),this}updateAttributes(n){if(typeof n!="function")throw new W("Graph.updateAttributes: provided updater is not a function.");return this._attributes=n(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(n,e){if(typeof n!="function")throw new W("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!Kr(e))throw new W("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let t=this._nodes.values(),r,i;for(;r=t.next(),r.done!==!0;)i=r.value,i.attributes=n(i.key,i.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(n,e){if(typeof n!="function")throw new W("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!Kr(e))throw new W("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let t=this._edges.values(),r,i,o,l;for(;r=t.next(),r.done!==!0;)i=r.value,o=i.source,l=i.target,i.attributes=n(i.key,i.attributes,o.key,l.key,o.attributes,l.attributes,i.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(n){if(typeof n!="function")throw new W("Graph.forEachAdjacencyEntry: expecting a callback.");Dn(!1,!1,!1,this,n)}forEachAdjacencyEntryWithOrphans(n){if(typeof n!="function")throw new W("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Dn(!1,!1,!0,this,n)}forEachAssymetricAdjacencyEntry(n){if(typeof n!="function")throw new W("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Dn(!1,!0,!1,this,n)}forEachAssymetricAdjacencyEntryWithOrphans(n){if(typeof n!="function")throw new W("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Dn(!1,!0,!0,this,n)}nodes(){return Array.from(this._nodes.keys())}forEachNode(n){if(typeof n!="function")throw new W("Graph.forEachNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)r=t.value,n(r.key,r.attributes)}findNode(n){if(typeof n!="function")throw new W("Graph.findNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,n(r.key,r.attributes))return r.key}mapNodes(n){if(typeof n!="function")throw new W("Graph.mapNode: expecting a callback.");let e=this._nodes.values(),t,r,i=new Array(this.order),o=0;for(;t=e.next(),t.done!==!0;)r=t.value,i[o++]=n(r.key,r.attributes);return i}someNode(n){if(typeof n!="function")throw new W("Graph.someNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,n(r.key,r.attributes))return!0;return!1}everyNode(n){if(typeof n!="function")throw new W("Graph.everyNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,!n(r.key,r.attributes))return!1;return!0}filterNodes(n){if(typeof n!="function")throw new W("Graph.filterNodes: expecting a callback.");let e=this._nodes.values(),t,r,i=[];for(;t=e.next(),t.done!==!0;)r=t.value,n(r.key,r.attributes)&&i.push(r.key);return i}reduceNodes(n,e){if(typeof n!="function")throw new W("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new W("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let t=e,r=this._nodes.values(),i,o;for(;i=r.next(),i.done!==!0;)o=i.value,t=n(t,o.key,o.attributes);return t}nodeEntries(){let n=this._nodes.values();return{[Symbol.iterator](){return this},next(){let e=n.next();if(e.done)return e;let t=e.value;return{value:{node:t.key,attributes:t.attributes},done:!1}}}}export(){let n=new Array(this._nodes.size),e=0;this._nodes.forEach((r,i)=>{n[e++]=Zl(i,r)});let t=new Array(this._edges.size);return e=0,this._edges.forEach((r,i)=>{t[e++]=Ql(this.type,i,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:n,edges:t}}import(n,e=!1){if(n instanceof a)return n.forEachNode((s,d)=>{e?this.mergeNode(s,d):this.addNode(s,d)}),n.forEachEdge((s,d,u,c,f,g,h)=>{e?h?this.mergeUndirectedEdgeWithKey(s,u,c,d):this.mergeDirectedEdgeWithKey(s,u,c,d):h?this.addUndirectedEdgeWithKey(s,u,c,d):this.addDirectedEdgeWithKey(s,u,c,d)}),this;if(!ge(n))throw new W("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(n.attributes){if(!ge(n.attributes))throw new W("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(n.attributes):this.replaceAttributes(n.attributes)}let t,r,i,o,l;if(n.nodes){if(i=n.nodes,!Array.isArray(i))throw new W("Graph.import: invalid nodes. Expecting an array.");for(t=0,r=i.length;t<r;t++){o=i[t],Jl(o);let{key:s,attributes:d}=o;e?this.mergeNode(s,d):this.addNode(s,d)}}if(n.edges){let s=!1;if(this.type==="undirected"&&(s=!0),i=n.edges,!Array.isArray(i))throw new W("Graph.import: invalid edges. Expecting an array.");for(t=0,r=i.length;t<r;t++){l=i[t],ed(l);let{source:d,target:u,attributes:c,undirected:f=s}=l,g;"key"in l?(g=e?f?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:f?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,g.call(this,l.key,d,u,c)):(g=e?f?this.mergeUndirectedEdge:this.mergeDirectedEdge:f?this.addUndirectedEdge:this.addDirectedEdge,g.call(this,d,u,c))}}return this}nullCopy(n){let e=new a(ce({},this._options,n));return e.replaceAttributes(ce({},this.getAttributes())),e}emptyCopy(n){let e=this.nullCopy(n);return this._nodes.forEach((t,r)=>{let i=ce({},t.attributes);t=new e.NodeDataClass(r,i),e._nodes.set(r,t)}),e}copy(n){if(n=n||{},typeof n.type=="string"&&n.type!==this.type&&n.type!=="mixed")throw new X(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${n.type}" because this would mean losing information about the current graph.`);if(typeof n.multi=="boolean"&&n.multi!==this.multi&&n.multi!==!0)throw new X("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof n.allowSelfLoops=="boolean"&&n.allowSelfLoops!==this.allowSelfLoops&&n.allowSelfLoops!==!0)throw new X("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");let e=this.emptyCopy(n),t=this._edges.values(),r,i;for(;r=t.next(),r.done!==!0;)i=r.value,li(e,"copy",!1,i.undirected,i.key,i.source.key,i.target.key,ce({},i.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){let n={};this._nodes.forEach((i,o)=>{n[o]=i.attributes});let e={},t={};this._edges.forEach((i,o)=>{let l=i.undirected?"--":"->",s="",d=i.source.key,u=i.target.key,c;i.undirected&&d>u&&(c=d,d=u,u=c);let f=`(${d})${l}(${u})`;o.startsWith("geid_")?this.multi&&(typeof t[f]>"u"?t[f]=0:t[f]++,s+=`${t[f]}. `):s+=`[${o}]: `,s+=f,e[s]=i.attributes});let r={};for(let i in this)this.hasOwnProperty(i)&&!Zr.has(i)&&typeof this[i]!="function"&&typeof i!="symbol"&&(r[i]=this[i]);return r.attributes=this._attributes,r.nodes=n,r.edges=e,_e(r,"constructor",this.constructor),r}};typeof Symbol<"u"&&(re.prototype[Symbol.for("nodejs.util.inspect.custom")]=re.prototype.inspect);ad.forEach(a=>{["add","merge","update"].forEach(n=>{let e=a.name(n),t=n==="add"?li:od;a.generateKey?re.prototype[e]=function(r,i,o){return t(this,e,!0,(a.type||this.type)==="undirected",null,r,i,o,n==="update")}:re.prototype[e]=function(r,i,o,l){return t(this,e,!1,(a.type||this.type)==="undirected",r,i,o,l,n==="update")}})});pl(re);Rl(re);Ul(re);Kl(re);var Ln=class extends re{constructor(n){let e=ce({type:"directed"},n);if("multi"in e&&e.multi!==!1)throw new W("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new W('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},Cn=class extends re{constructor(n){let e=ce({type:"undirected"},n);if("multi"in e&&e.multi!==!1)throw new W("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new W('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},kn=class extends re{constructor(n){let e=ce({multi:!0},n);if("multi"in e&&e.multi!==!0)throw new W("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}},Pn=class extends re{constructor(n){let e=ce({type:"directed",multi:!0},n);if("multi"in e&&e.multi!==!0)throw new W("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new W('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},Fn=class extends re{constructor(n){let e=ce({type:"undirected",multi:!0},n);if("multi"in e&&e.multi!==!0)throw new W("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new W('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}};function Rt(a){a.from=function(n,e){let t=ce({},n.options,e),r=new a(t);return r.import(n),r}}Rt(re);Rt(Ln);Rt(Cn);Rt(kn);Rt(Pn);Rt(Fn);re.Graph=re;re.DirectedGraph=Ln;re.UndirectedGraph=Cn;re.MultiGraph=kn;re.MultiDirectedGraph=Pn;re.MultiUndirectedGraph=Fn;re.InvalidArgumentsGraphError=W;re.NotFoundGraphError=B;re.UsageGraphError=X;function Mn(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}function zn(a,n){if(a){if(typeof a=="string")return Mn(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Mn(a,n):void 0}}function sd(a){if(Array.isArray(a))return a}function ld(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,r,i,o,l=[],s=!0,d=!1;try{if(i=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(t=i.call(e)).done)&&(l.push(t.value),l.length!==n);s=!0);}catch(u){d=!0,r=u}finally{try{if(!s&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}function dd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(a,n){return sd(a)||ld(a,n)||zn(a,n)||dd()}function z(a,n){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=zn(a))||n&&a&&typeof a.length=="number"){e&&(a=e);var t=0,r=function(){};return{s:r,n:function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}},e:function(s){throw s},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){e=e.call(a)},n:function(){var s=e.next();return o=s.done,s},e:function(s){l=!0,i=s},f:function(){try{o||e.return==null||e.return()}finally{if(l)throw i}}}}function Ee(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function Nn(a,n,e){return a[0]=n,a[4]=typeof e=="number"?e:n,a}function di(a,n){var e=Math.sin(n),t=Math.cos(n);return a[0]=t,a[1]=e,a[3]=-e,a[4]=t,a}function ui(a,n,e){return a[6]=n,a[7]=e,a}function qe(a,n){var e=a[0],t=a[1],r=a[2],i=a[3],o=a[4],l=a[5],s=a[6],d=a[7],u=a[8],c=n[0],f=n[1],g=n[2],h=n[3],m=n[4],v=n[5],p=n[6],b=n[7],y=n[8];return a[0]=c*e+f*i+g*s,a[1]=c*t+f*o+g*d,a[2]=c*r+f*l+g*u,a[3]=h*e+m*i+v*s,a[4]=h*t+m*o+v*d,a[5]=h*r+m*l+v*u,a[6]=p*e+b*i+y*s,a[7]=p*t+b*o+y*d,a[8]=p*r+b*l+y*u,a}function ka(a,n){var e=Math.cos(n),t=Math.sin(n);return{x:e*a.x+t*a.y,y:-t*a.x+e*a.y}}function Dt(a,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,t=a[0],r=a[1],i=a[3],o=a[4],l=a[6],s=a[7],d=n.x,u=n.y;return{x:d*t+u*i+l*e,y:d*r+u*o+s*e}}function ud(a,n){var e=a.height/a.width,t=n.height/n.width;return e<1&&t>1||e>1&&t<1?1:Math.min(Math.max(t,1/t),Math.max(1/e,e))}function Xe(a,n,e,t,r){var i=a.angle,o=a.ratio,l=a.x,s=a.y,d=n.width,u=n.height,c=Ee(),f=Math.min(d,u)-2*t,g=ud(n,e);return r?(qe(c,ui(Ee(),l,s)),qe(c,Nn(Ee(),o)),qe(c,di(Ee(),i)),qe(c,Nn(Ee(),d/f/2/g,u/f/2/g))):(qe(c,Nn(Ee(),2*(f/d)*g,2*(f/u)*g)),qe(c,di(Ee(),-i)),qe(c,Nn(Ee(),1/o)),qe(c,ui(Ee(),-l,-s))),c}function ci(a,n,e){var t=Dt(a,{x:Math.cos(n.angle),y:Math.sin(n.angle)},0),r=t.x,i=t.y;return 1/Math.sqrt(Math.pow(r,2)+Math.pow(i,2))/e.width}function Pa(a,n,e,t,r){var i=Math.floor(n/r*t),o=Math.floor(a.drawingBufferHeight/r-e/r*t);return[i,o]}var Qt={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},hi=new Int8Array(4),Gn=new Int32Array(hi.buffer,0,1),fi=new Float32Array(hi.buffer,0,1),cd=/^\s*rgba?\s*\(/,hd=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function On(a){var n=0,e=0,t=0,r=1,i=a.toLowerCase();if(i==="transparent")return{r:0,g:0,b:0,a:0};if(i in Qt)return On(Qt[i]);if(a[0]==="#")a.length===4?(n=parseInt(a.charAt(1)+a.charAt(1),16),e=parseInt(a.charAt(2)+a.charAt(2),16),t=parseInt(a.charAt(3)+a.charAt(3),16)):(n=parseInt(a.charAt(1)+a.charAt(2),16),e=parseInt(a.charAt(3)+a.charAt(4),16),t=parseInt(a.charAt(5)+a.charAt(6),16)),a.length===9&&(r=parseInt(a.charAt(7)+a.charAt(8),16)/255);else if(cd.test(a)){var o=a.match(hd);o&&(n=+o[1],e=+o[2],t=+o[3],o[4]&&(r=+o[4]))}return{r:n,g:e,b:t,a:r}}function gi(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=On(a),t=e.r,r=e.g,i=e.b,o=e.a;return n?[t/255*o,r/255*o,i/255*o,o]:[t/255,r/255,i/255,o]}var wt={};for(Zt in Qt)wt[Zt]=Se(Qt[Zt]),wt[Qt[Zt]]=wt[Zt];var Zt;function fd(a,n,e,t,r){return Gn[0]=t<<24|e<<16|n<<8|a,r&&(Gn[0]=Gn[0]&4278190079),fi[0]}function Se(a){if(a=a.toLowerCase(),typeof wt[a]<"u")return wt[a];var n=On(a),e=n.r,t=n.g,r=n.b,i=n.a;i=i*255|0;var o=fd(e,t,r,i,!0);return wt[a]=o,o}function Ye(a,n){fi[0]=Se(a);var e=Gn[0];n&&(e=e|16777216);var t=e&255,r=e>>8&255,i=e>>16&255,o=e>>24&255;return[t,r,i,o]}function Lt(a){var n=a>>>8&255,e=a>>>16&255,t=a>>>24&255,r=a&255;return(r<<24|t<<16|e<<8|n)>>>0}function Fa(a,n,e,t){return(e<<24|n<<16|a<<8|t)>>>0}function pi(a,n,e,t,r,i){var o=Pa(a,e,t,r,i),l=ne(o,2),s=l[0],d=l[1],u=new Uint8Array(4);a.bindFramebuffer(a.FRAMEBUFFER,n),a.readPixels(s,d,1,1,a.RGBA,a.UNSIGNED_BYTE,u);var c=ne(u,4),f=c[0],g=c[1],h=c[2],m=c[3];return[f,g,h,m]}function vi(a){var n=On(a),e=n.r,t=n.g,r=n.b,i=n.a,o=(e/255).toFixed(6),l=(t/255).toFixed(6),s=(r/255).toFixed(6),d=i.toFixed(6);return"vec4(".concat(o,", ").concat(l,", ").concat(s,", ").concat(d,")")}function gd(a,n){if(typeof a!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function yi(a){var n=gd(a,"string");return typeof n=="symbol"?n:n+""}function E(a,n,e){return(n=yi(n))in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function mi(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),e.push.apply(e,t)}return e}function O(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?mi(Object(e),!0).forEach(function(t){E(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):mi(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function Z(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function bi(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,yi(t.key),t)}}function Q(a,n,e){return n&&bi(a.prototype,n),e&&bi(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function dt(a){return dt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dt(a)}function xi(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xi=function(){return!!a})()}function pd(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function vd(a,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pd(a)}function se(a,n,e){return n=dt(n),vd(a,xi()?Reflect.construct(n,e||[],dt(a).constructor):n.apply(a,e))}function Ia(a,n){return Ia=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ia(a,n)}function le(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),n&&Ia(a,n)}function md(a){if(Array.isArray(a))return Mn(a)}function bd(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function yd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(a){return md(a)||bd(a)||zn(a)||yd()}function J(a){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},J(a)}function Pe(a){return J(a)==="object"&&a!==null&&"attribute"in a}function Jt(){var a=`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`;return{name:"circle",glsl:a,uniforms:[]}}function en(a){var n,e=WebGL2RenderingContext,t=e.UNSIGNED_BYTE,r=(n=a?.color)!==null&&n!==void 0?n:{attribute:"color"};if(!Pe(r)){var i=r,o=`
vec4 layer_fill() {
  return `.concat(vi(i),`;
}
`);return{name:"fill",uniforms:[],attributes:[],glsl:o}}var l=r.attribute,s=`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`;return{name:"fill",uniforms:[],attributes:[{name:"fillColor",size:4,type:t,normalized:!0,source:l}],glsl:s}}function Na(a,n){if(typeof a=="string"){var e=gi(a).map(function(d){return d.toFixed(6)}),t=ne(e,4),r=t[0],i=t[1],o=t[2],l=t[3];return{glsl:"vec4(".concat(r,", ").concat(i,", ").concat(o,", ").concat(l,")"),attributes:[],needsNodeColors:!1}}if("node"in a&&a.node)return{glsl:a.node==="source"?"v_sourceColor":"v_targetColor",attributes:[],needsNodeColors:!0};var s=a;return{glsl:"v_".concat(n),attributes:[{name:"a_".concat(n),size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:s.attribute,defaultValue:s.default}],needsNodeColors:!1}}function Ge(a){var n=a?.color;if(n===void 0){var e=`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`;return{name:"plain",glsl:e,uniforms:[],attributes:[]}}var t=Na(n,"plainColor"),r=`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return `.concat(t.glsl,`;
}
`);return{name:"plain",glsl:r,uniforms:[],attributes:t.attributes,needsNodeColors:t.needsNodeColors}}function tn(){var a=`
// Position at parameter t \u2208 [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`;return{name:"straight",segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:a,uniforms:[],attributes:[]}}function Ga(a){var n=a??{},e=n.segments,t=e===void 0?32:e,r=`
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
`;return{name:"loop",segments:t,glsl:r,needsNodeSize:!0,uniforms:[],attributes:[{name:"loopRadius",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopAngle",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopSpread",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopFixedOrientation",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:"number",default:4},loopAngle:{type:"number",default:Math.PI/4},loopSpread:{type:"number",default:80*Math.PI/180},loopFixedOrientation:{type:"number",default:0}},spread:{variable:"loopRadius",compute:function(o){return o+4}}}}var Ri=lt(Tt());function _i(a){return J(a)==="object"&&"glsl"in a&&!("attributes"in a)}function Ti(a){return J(a)==="object"&&"glsl"in a&&!("attributes"in a)}var nn={shapes:[Jt()],variables:{},layers:[en()],label:{},backdrop:{},labelAttachments:{}},Ct={paths:[tn(),Ga()],extremities:[],variables:{},layers:[Ge()],defaultHead:"none",defaultTail:"none",label:{}},Bn=["nodes","topNodes"],Wn=["edges","topEdges"],Un=[].concat(Wn,Bn),Ei={nodes:nn,edges:Ct,depthLayers:j(Un)};var xd=function(n){return n},_d=function(n){return n*n},Td=function(n){return n*(2-n)},Ed=function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)},Sd=function(n){return n*n*n},Ad=function(n){return--n*n*n+1},Rd=function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)},wd=function(n){return n===0?0:Math.pow(2,10*(n-1))},Dd=function(n){return n===1?1:1-Math.pow(2,-10*n)},Ld=function(n){return n===0?0:n===1?1:n<.5?Math.pow(2,10*(2*n-1))/2:(2-Math.pow(2,-10*(2*n-1)))/2},Ma={linear:xd,quadraticIn:_d,quadraticOut:Td,quadraticInOut:Ed,cubicIn:Sd,cubicOut:Ad,cubicInOut:Rd,exponentialIn:wd,exponentialOut:Dd,exponentialInOut:Ld};function an(a){return a?typeof a=="function"?a:Ma[a]:Ma.linear}function Oa(a){return J(a)==="object"&&a!==null&&"attribute"in a}function wi(a){return typeof a=="function"}function Di(a){return J(a)==="object"&&a!==null&&"when"in a&&typeof a.when=="function"&&"then"in a}function Li(a){return J(a)==="object"&&a!==null&&"whenState"in a&&"then"in a}function Ci(a){return J(a)==="object"&&a!==null&&"whenData"in a&&"then"in a}var Cd={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},kd={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},Pd={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function ki(a){return O(O({},Cd),a)}function Pi(a){return O(O({},kd),a)}function Ba(a){return O(O({},Pd),a)}var Fd={x:{attribute:"x"},y:{attribute:"y"},size:{whenState:"isHovered",then:{attribute:"size",defaultValue:12},else:{attribute:"size",defaultValue:10}},color:{attribute:"color",defaultValue:"#666"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"},labelVisibility:{whenState:"isHovered",then:"visible",else:"auto"},backdropVisibility:{whenState:"isHovered",then:"visible",else:"hidden"},backdropColor:"#ffffff",backdropShadowColor:"rgba(0, 0, 0, 0.5)",backdropShadowBlur:12,backdropPadding:6},Id={size:{attribute:"size",defaultValue:1},color:{attribute:"color",defaultValue:"#ccc"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"}};var Ke={nodes:O(O({},Fd),{},{depth:{whenState:"isHovered",then:"topNodes",else:"nodes"}}),edges:O(O({},Id),{},{depth:{whenState:["isHighlighted","isHovered"],then:"topEdges",else:"edges"}})};function Nd(a){return"min"in a||"max"in a||"minValue"in a||"maxValue"in a||"easing"in a}function Gd(a){return"dict"in a}function $n(a,n){return typeof a=="string"?n[a]===!0:Array.isArray(a)?a.every(function(e){return n[e]===!0}):J(a)==="object"&&a!==null?Object.entries(a).every(function(e){var t=ne(e,2),r=t[0],i=t[1];return n[r]===i}):!1}function Md(a,n){var e=n[a.attribute];return e===void 0?a.defaultValue:e}function zd(a,n,e){var t,r,i,o,l=n[a.attribute];if(l===void 0)return a.defaultValue;var s=Number(l);if(isNaN(s))return a.defaultValue;if(a.min===void 0&&a.max===void 0)return s;var d=(t=a.minValue)!==null&&t!==void 0?t:s,u=(r=a.maxValue)!==null&&r!==void 0?r:s;if(u===d){var c;return(c=a.min)!==null&&c!==void 0?c:s}var f=(s-d)/(u-d);f=Math.max(0,Math.min(1,f));var g=an(a.easing);f=g(f);var h=(i=a.min)!==null&&i!==void 0?i:0,m=(o=a.max)!==null&&o!==void 0?o:1;return h+f*(m-h)}function Od(a,n){var e=n[a.attribute];if(e===void 0)return a.defaultValue;var t=String(e);return t in a.dict?a.dict[t]:a.defaultValue}function Bd(a,n,e){return Gd(a)?Od(a,n):Nd(a)?zd(a,n):Md(a,n)}function Fi(a,n){return typeof a=="string"?!!n[a]:Array.isArray(a)?a.every(function(e){return!!n[e]}):J(a)==="object"&&a!==null?Object.entries(a).every(function(e){var t=ne(e,2),r=t[0],i=t[1];return n[r]===i}):!1}function Hn(a,n,e,t,r,i){if(a==null)return i;if(J(a)!=="object"&&typeof a!="function")return a;if(Di(a)){var o=a.when(n,e,t,r)?a.then:a.else;return o===void 0?i:Hn(o,n,e,t,r,i)}if(Li(a)){var l=$n(a.whenState,e)?a.then:a.else;return l===void 0?i:Hn(l,n,e,t,r,i)}if(Ci(a)){var s=Fi(a.whenData,n)?a.then:a.else;return s===void 0?i:Hn(s,n,e,t,r,i)}if(wi(a)){var d=a(n,e,t,r);return d??i}if(Oa(a)){var u=Bd(a,n);return u??i}return a}function Fe(a){if(a==null)return"static";if(Di(a))return"graph-state";if(Li(a)){var n=Fe(a.then),e=a.else!==void 0?Fe(a.else):"static";return Ae("item-state",Ae(n,e))}if(Ci(a)){var t=Fe(a.then),r=a.else!==void 0?Fe(a.else):"static";return Ae(t,r)}return wi(a)?"graph-state":(Oa(a),"static")}function Ae(a,n){return a==="graph-state"||n==="graph-state"?"graph-state":a==="item-state"||n==="item-state"?"item-state":"static"}function Wa(a){if(!a)return{dependency:"static",xAttribute:null,yAttribute:null};var n=Array.isArray(a)?a:[a],e="static",t=null,r=null,i=z(n),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;if("matchData"in l&&"cases"in l)for(var s=l.cases,d=0,u=Object.values(s);d<u.length;d++)for(var c=u[d],f=0,g=Object.values(c);f<g.length;f++){var h=g[f];e=Ae(e,Fe(h))}else if("matchState"in l&&"cases"in l){e=Ae(e,"item-state");for(var m=l.cases,v=0,p=Object.values(m);v<p.length;v++)for(var b=p[v],y=0,x=Object.values(b);y<x.length;y++){var _=x[y];e=Ae(e,Fe(_))}}else if("when"in l&&"then"in l)e="graph-state";else if("whenState"in l){e=Ae(e,"item-state");var T=l.then;if(T&&J(T)==="object")for(var R=0,S=Object.values(T);R<S.length;R++){var A=S[R];e=Ae(e,Fe(A))}var C=l.else;if(C&&J(C)==="object")for(var P=0,w=Object.values(C);P<w.length;P++){var I=w[P];e=Ae(e,Fe(I))}}else if("whenData"in l){var L=l.then;if(L&&J(L)==="object")for(var k=0,N=Object.values(L);k<N.length;k++){var M=N[k];e=Ae(e,Fe(M))}var F=l.else;if(F&&J(F)==="object")for(var D=0,G=Object.values(F);D<G.length;D++){var H=G[D];e=Ae(e,Fe(H))}}else for(var U=0,$=Object.entries(l);U<$.length;U++){var K=ne($[U],2),te=K[0],ue=K[1];if(!Ha.has(te)&&(e=Ae(e,Fe(ue)),(te==="x"||te==="y")&&Oa(ue))){var xe=ue.attribute;te==="x"&&!t&&(t=xe),te==="y"&&!r&&(r=xe)}}}}catch(Ce){i.e(Ce)}finally{i.f()}return{dependency:e,xAttribute:t,yAttribute:r}}var Ue={size:10,color:"#666",opacity:1,shape:"circle",rotationAlignment:"viewport",labelRotationAlignment:"viewport",visibility:"visible",depth:"nodes",zIndex:0,label:"",labelColor:"#000",labelSize:12,labelFont:"sans-serif",labelVisibility:"auto",labelPosition:"right",labelAngle:0,labelDepth:"nodes",backdropVisibility:"hidden",backdropColor:"transparent",backdropShadowColor:"transparent",backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:"transparent",backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:"both",labelAttachment:null,labelAttachmentPlacement:"below"},Ua={size:1,color:"#ccc",opacity:1,path:"straight",selfLoopPath:"loop",parallelSpread:.25,tail:"none",head:"none",visibility:"visible",depth:"edges",zIndex:0,label:"",labelColor:"#666",labelVisibility:"auto",labelDepth:"edges"},Ha=new Set(["when","whenState","whenData","then","else"]),Si=Object.keys(Ue),Wd=Object.values(Ue),Ai=Object.keys(Ua),Ud=Object.values(Ua);function kt(a,n,e,t,r,i,o){for(var l in n){var s;if(!Ha.has(l)){var d=(s=a[l])!==null&&s!==void 0?s:o[l];a[l]=Hn(n[l],e,t,r,i,d)}}"depth"in n&&!("labelDepth"in n)&&(a.labelDepth=a.depth)}function Ii(a,n,e,t,r,i,o){var l=z(n),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;if("matchData"in d&&"cases"in d){var u,c=String((u=e[d.matchData])!==null&&u!==void 0?u:""),f=d.cases;c in f&&kt(a,f[c],e,t,r,i,o)}else if("matchState"in d&&"cases"in d){var g,h=String((g=t[d.matchState])!==null&&g!==void 0?g:""),m=d.cases;h in m&&kt(a,m[h],e,t,r,i,o)}else if("when"in d&&"then"in d){var v=d.when;if(!v(e,t,r,i))continue;kt(a,d.then,e,t,r,i,o)}else if("whenState"in d&&"then"in d){if(!$n(d.whenState,t))continue;kt(a,d.then,e,t,r,i,o)}else if("whenData"in d&&"then"in d){if(!Fi(d.whenData,e))continue;kt(a,d.then,e,t,r,i,o)}else kt(a,d,e,t,r,i,o)}}catch(p){l.e(p)}finally{l.f()}}function $a(a,n,e,t,r,i){for(var o=i||{},l=o,s=0,d=Si.length;s<d;s++)l[Si[s]]=Wd[s];if(l.x=void 0,l.y=void 0,l.labelBackgroundColor=void 0,l.labelBackgroundPadding=void 0,l.labelCursor=void 0,!a){var u,c,f,g,h;return l.x=(u=n.x)!==null&&u!==void 0?u:0,l.y=(c=n.y)!==null&&c!==void 0?c:0,o.size=(f=n.size)!==null&&f!==void 0?f:10,o.color=(g=n.color)!==null&&g!==void 0?g:"#666",o.label=(h=n.label)!==null&&h!==void 0?h:"",o}var m=Array.isArray(a)?a:[a];return Ii(l,m,n,e,t,r,Ue),o}function Va(a,n,e,t,r,i){for(var o=i||{},l=o,s=0,d=Ai.length;s<d;s++)l[Ai[s]]=Ud[s];if(!a){var u,c,f;return o.size=(u=n.size)!==null&&u!==void 0?u:1,o.color=(c=n.color)!==null&&c!==void 0?c:"#ccc",o.label=(f=n.label)!==null&&f!==void 0?f:"",o}var g=Array.isArray(a)?a:[a];return Ii(l,g,n,e,t,r,Ua),typeof l.labelPosition=="number"&&(l.labelPosition=void 0),o}function Hd(a,n,e){var t,r;if(a==null)return e;if(typeof a=="function")return(t=a(n))!==null&&t!==void 0?t:e;if(J(a)==="object"&&"when"in a){var i,o=a,l=o.when(n),s=l?o.then:o.else;return s===void 0?e:typeof s=="function"?(i=s(n))!==null&&i!==void 0?i:e:s??e}if(J(a)==="object"&&"whenState"in a){var d,u=a,c=$n(u.whenState,n),f=c?u.then:u.else;return f===void 0?e:typeof f=="function"?(d=f(n))!==null&&d!==void 0?d:e:f??e}return(r=a)!==null&&r!==void 0?r:e}function ja(a,n){var e={};if(!a)return e;var t=Array.isArray(a)?a:[a],r=z(t),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if("when"in o&&"then"in o){var l=o.when(n),s=l?o.then:o.else;s&&J(s)==="object"&&za(e,s,n)}else if("whenState"in o&&"then"in o){var d=$n(o.whenState,n),u=d?o.then:o.else;u&&J(u)==="object"&&za(e,u,n)}else za(e,o,n)}}catch(c){r.e(c)}finally{r.f()}return e}function za(a,n,e){for(var t=0,r=Object.entries(n);t<r.length;t++){var i=ne(r[t],2),o=i[0],l=i[1];Ha.has(o)||(a[o]=Hd(l,e))}}var Vn=(function(a){function n(){var e;return Z(this,n),e=se(this,n),e.rawEmitter=e,e}return le(n,a),Q(n)})(Ri.EventEmitter);var Ni=Ei;function qa(a,n){var e=n.size;if(e!==0){var t=a.length;a.length+=e;var r=0;n.forEach(function(i){a[t+r]=i,r++})}}function Gi(a){a=a||{};for(var n=0,e=arguments.length<=1?0:arguments.length-1;n<e;n++){var t=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];t&&Object.assign(a,t)}return a}function Pt(a,n){for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&n[e]!==a[e])return!0;return!1}function Mi(a,n){var e=a,t=n;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&e[r]!==t[r])return!1;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&t[i]!==e[i])return!1;return!0}function ut(a,n,e){e?a.add(n):a.delete(n)}var Oi=lt(Xa());var Bi={easing:"quadraticInOut",duration:150};function Ze(a){return a.labelVisibility==="visible"&&a.visibility!=="hidden"}function Ya(a){return a.backdropVisibility==="visible"&&a.visibility!=="hidden"}function jn(a){return[a.rotationAlignment==="graph"?1:0,a.labelRotationAlignment==="graph"?1:0]}function Ka(a,n,e){var t=a[n];if(t)for(var r=0;r<t.length;r++){var i=t[r];if(!(e<i.offset||e>=i.offset+i.count)){if(i.count===1)t.splice(r,1);else if(e===i.offset)i.offset++,i.count--;else if(e===i.offset+i.count-1)i.count--;else{var o=e+1,l=i.offset+i.count-o;i.count=e-i.offset,t.splice(r+1,0,{offset:o,count:l})}return}}}function Za(a,n,e){if(!a[n]){a[n]=[{offset:e,count:1}];return}for(var t=a[n],r=t.length,i=0;i<t.length;i++)if(e<t[i].offset){r=i;break}var o=r>0?t[r-1]:null,l=r<t.length?t[r]:null,s=o&&o.offset+o.count===e,d=l&&e+1===l.offset;s&&d?(o.count+=1+l.count,t.splice(r,1)):s?o.count++:d?(l.offset--,l.count++):t.splice(r,0,{offset:e,count:1})}function Wi(a){if(!(0,Oi.default)(a))throw new Error("Sigma: invalid graph instance.")}function qn(a){var n=ne(a.x,2),e=n[0],t=n[1],r=ne(a.y,2),i=r[0],o=r[1],l=Math.max(t-e,o-i),s=(t+e)/2,d=(o+i)/2;(l===0||Math.abs(l)===1/0||isNaN(l))&&(l=1),isNaN(s)&&(s=0),isNaN(d)&&(d=0);var u=function(f){return{x:.5+(f.x-s)/l,y:.5+(f.y-d)/l}};return u.applyTo=function(c){c.x=.5+(c.x-s)/l,c.y=.5+(c.y-d)/l},u.inverse=function(c){return{x:s+l*(c.x-.5),y:d+l*(c.y-.5)}},u.ratio=l,u}var Xn={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:"nodeLabels",enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"positions",autoRescale:!0,autoRescaleContent:"positions",enableNodeDrag:!1,getDraggedNodes:function(n){return[n]},dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:"graph",sharedGestureWheelMessage:"Use Ctrl + scroll to zoom the graph",sharedGestureAppleWheelMessage:"Use \u2318 + scroll to zoom the graph",sharedGestureTouchMessage:"Use two fingers to move the graph",allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function Yn(a){if(typeof a.labelDensity!="number"||a.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var n=a.minCameraRatio,e=a.maxCameraRatio;if(typeof n=="number"&&typeof e=="number"&&e<n)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function Ui(a){return Gi({},Xn,a)}var $d=new Set(["italic","oblique"]),Vd=new Set(["bold","bolder","lighter"]);function Kn(a){for(var n="normal",e="normal",t=a.trim(),r=t.split(/\s+/),i=0,o=0;o<r.length;o++){var l=r[o].toLowerCase();if($d.has(l))e=l,i=o+1;else if(Vd.has(l)||/^\d{3}$/.test(l))n=l,i=o+1;else if(l==="normal")i=o+1;else break}var s=r.slice(i).join(" ");return{family:s||t,weight:n,style:e}}function Ft(a,n,e){var t=document.createElement(a);if(n)for(var r in n)t.style[r]=n[r];if(e)for(var i in e)t.setAttribute(i,e[i]);return t}function rn(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}var Yi=lt(Tt());function jd(a){var n=a.type===WebGL2RenderingContext.FLOAT&&!a.normalized,e=a.type===WebGL2RenderingContext.UNSIGNED_BYTE&&a.size===4&&a.normalized;if(!n&&!e)throw new Error('Attribute "'.concat(a.name,'" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.'));return a.normalized?1:a.size}function na(a){var n=0;return a.forEach(function(e){return n+=jd(e)}),n}function Ki(a,n,e){var t=a==="VERTEX"?n.VERTEX_SHADER:n.FRAGMENT_SHADER,r=n.createShader(t);if(r===null)throw new Error("loadShader: error while creating the shader");n.shaderSource(r,e),n.compileShader(r);var i=n.getShaderParameter(r,n.COMPILE_STATUS);if(!i){var o=n.getShaderInfoLog(r);throw n.deleteShader(r),new Error(`loadShader: error while compiling the shader:
`.concat(o,`
`).concat(e))}return r}function ra(a,n){return Ki("VERTEX",a,n)}function ia(a,n){return Ki("FRAGMENT",a,n)}function oa(a,n){var e=a.createProgram();if(e===null)throw new Error("loadProgram: error while creating the program.");var t,r;for(t=0,r=n.length;t<r;t++)a.attachShader(e,n[t]);a.linkProgram(e);var i=a.getProgramParameter(e,a.LINK_STATUS);if(!i){var o=a.getProgramInfoLog(e);throw a.deleteProgram(e),new Error("loadProgram: error while linking the program: ".concat(o))}return e}function Qa(a){var n=a.gl,e=a.buffer,t=a.program,r=a.vertexShader,i=a.fragmentShader;n.deleteShader(r),n.deleteShader(i),n.deleteProgram(t),n.deleteBuffer(e)}function de(a){return a%1===0?a.toFixed(1):a.toString()}var aa=new Map,Zi=new Map,qd=0;function nr(a,n){var e,t=(e=a.variables)===null||e===void 0||(e=e[n.source||n.name.replace(/^a_/,"")])===null||e===void 0?void 0:e.default,r=typeof t=="number"?t:typeof n.defaultValue=="number"?n.defaultValue:0;return de(r)}function un(a,n,e){var t,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(o){return"v_".concat(o.name.replace(/^a_/,""))},i=[n,e].concat(j(a.uniforms.filter(function(o){return o.type==="float"}).map(function(o){var l;return de((l=o.value)!==null&&l!==void 0?l:0)})),j(((t=a.attributes)!==null&&t!==void 0?t:[]).map(r)));return"sdf_".concat(a.name,"(").concat(i.join(", "),")")}function Xd(a){var n,e=a.name,t=a.uniforms.filter(function(o){return o.type==="float"&&o.value!==void 0&&o.value!==0}).map(function(o){return"".concat(o.name.replace("u_",""),"=").concat(o.value)}).sort(),r=((n=a.attributes)!==null&&n!==void 0?n:[]).map(function(o){var l;return"".concat(o.name,"@").concat((l=o.source)!==null&&l!==void 0?l:"","=").concat(nr(a,o))}),i=[].concat(j(t),j(r));return i.length>0&&(e+="#"+i.join("#")),e}function Qi(a){var n=Xd(a);if(!aa.has(n)){var e={},t=z(a.uniforms),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;i.type==="float"&&i.value!==void 0&&(e[i.name]=i.value)}}catch(o){t.e(o)}finally{t.f()}aa.set(n,{shape:a,uniformValues:e,slug:n}),Zi.set(n,qd++)}return n}function Nt(a){var n;return(n=Zi.get(a))!==null&&n!==void 0?n:-1}function Ji(a){var n=[],e=new Set,t=new Set,r=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/,i=z(a),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;if(!t.has(l.name)){t.add(l.name);var s=l.glsl;r.test(s)&&(e.has("rotate2D")?s=s.replace(r,""):e.add("rotate2D")),n.push(s)}}}catch(d){i.e(d)}finally{i.f()}return n.join(`
`)}function eo(){return Ji(Array.from(aa.values()).map(function(a){return a.shape}))}function to(a){var n=Array.from(aa.entries());if(n.length===0)return`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`;var e=n.map(function(t,r){var i=ne(t,2),o=i[0],l=i[1].shape,s=un(l,"uv","size",function(d){var u=d.name.replace(/^a_/,"");return a!=null&&a.has(u)?"g_".concat(u):nr(l,d)});return"    case ".concat(r,": return ").concat(s,"; // ").concat(o)}).join(`
`);return`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(e,`
    default: return length(uv) - size;
  }
}
`)}function sa(a){return Ji(a)}function Gt(a){return j(new Map(a.flatMap(function(n){return n.uniforms}).map(function(n){return[n.name,n]})).values())}function no(a,n){if(a.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;var e=function(c){return un(c,"uv","size")},t=function(c){var f,g;return(f=c.inradiusFactorGLSL)!==null&&f!==void 0?f:de((g=c.inradiusFactor)!==null&&g!==void 0?g:1)};if(a.length===1){var r=a[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = `.concat(e(r),`;
  context.inradiusFactor = `).concat(t(r),`;
}
`)}var i=a.map(function(u,c){return"    case ".concat(c,": // ").concat(u.name,`
      context.sdf = `).concat(e(u),`;
      context.inradiusFactor = `).concat(t(u),`;
      break;`)}).join(`
`),o=a[0],l="",s="shapeId";if(n&&n.length>1){var d=n.map(function(u,c){return"    case ".concat(u,": return ").concat(c,"; // ").concat(a[c].name)}).join(`
`);l=`
int globalToLocalShapeId(int globalId) {
  switch (globalId) {
`.concat(d,`
    default: return 0;
  }
}
`),s="globalToLocalShapeId(shapeId)"}return"".concat(l,`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  switch (`).concat(s,`) {
`).concat(i,`
    default:
      context.sdf = `).concat(e(o),`;
      context.inradiusFactor = `).concat(t(o),`;
  }
}
`)}var ct={right:0,left:1,above:2,below:3,over:4},ht=5,la=3,ar=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,Mt=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,rr=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,ao=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,ro=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,io=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,oo=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,ir=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,da=2,ze=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(da,`;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`),tt=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(da,` + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`),so=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(da,` + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`),ft=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`;function lo(a,n){var e=function(o){return un(o,"uv","size")};if(a.length===1)return{code:Hi(e(a[0])),multiShape:!1};var t=a.map(function(i,o){return"    case ".concat(n?n[o]:o,": return ").concat(e(i),";")}).join(`
`),r=`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(t,`
    default: return `).concat(e(a[0]),`;
  }
}
int g_shapeId;
`).concat(Hi("queryShapeSDF(g_shapeId, uv, size)"),`
`);return{code:r,multiShape:!0}}function Hi(a){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (`.concat(a,` < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`)}function Yd(a,n){for(;!{}.hasOwnProperty.call(a,n)&&(a=dt(a))!==null;);return a}function Ja(){return Ja=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(a,n,e){var t=Yd(a,n);if(t){var r=Object.getOwnPropertyDescriptor(t,n);return r.get?r.get.call(arguments.length<3?a:e):r.value}},Ja.apply(null,arguments)}function he(a,n,e,t){var r=Ja(dt(1&t?a.prototype:a),n,e);return 2&t&&typeof r=="function"?function(i){return r.apply(e,i)}:r}var Kd=1024,Zd=1.5,Qd=4096,uo=-1,cn=(function(){function a(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Kd;Z(this,a),E(this,"texture",null),E(this,"dirty",!1),E(this,"dirtyRangeStart",1/0),E(this,"dirtyRangeEnd",-1),E(this,"indexMap",new Map),E(this,"freeIndices",[]),E(this,"nextIndex",0),this.gl=n,this.TEXELS_PER_ITEM=e,this.capacity=this.roundUpToPowerOfTwo(t);var r=this.computeTextureDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}return Q(a,[{key:"computeTextureDimensions",value:function(e){var t=e*this.TEXELS_PER_ITEM,r=Math.min(t,Qd),i=Math.ceil(t/r);return{width:r,height:i}}},{key:"roundUpToPowerOfTwo",value:function(e){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,e))))}},{key:"createTexture",value:function(){var e=this.gl;this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textureWidth,this.textureHeight,0,e.RGBA,e.FLOAT,this.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null)}},{key:"resize",value:function(e){if(!(e<=this.capacity)){var t=this.roundUpToPowerOfTwo(Math.ceil(e*Zd)),r=this.gl,i=this.computeTextureDimensions(t),o=new Float32Array(i.width*i.height*4);o.set(this.data),this.texture&&r.deleteTexture(this.texture),this.data=o,this.capacity=t,this.textureWidth=i.width,this.textureHeight=i.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}}},{key:"allocate",value:function(e){var t=this.indexMap.get(e);if(t!==void 0)return t;var r;return this.freeIndices.length>0?r=this.freeIndices.pop():(r=this.nextIndex++,r>=this.capacity&&this.resize(r+1)),this.indexMap.set(e,r),r}},{key:"free",value:function(e){var t=this.indexMap.get(e);if(t!==void 0){this.indexMap.delete(e),this.freeIndices.push(t);for(var r=t*this.TEXELS_PER_ITEM*4,i=0;i<this.TEXELS_PER_ITEM*4;i++)this.data[r+i]=0;this.markDirty(t)}}},{key:"getIndex",value:function(e){var t;return(t=this.indexMap.get(e))!==null&&t!==void 0?t:-1}},{key:"has",value:function(e){return this.indexMap.has(e)}},{key:"markDirty",value:function(e){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,e),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,e+1)}},{key:"upload",value:function(){if(!(!this.dirty||!this.texture)){var e=this.gl,t=this.textureWidth;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture);var r=this.dirtyRangeStart*this.TEXELS_PER_ITEM,i=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(r<i)for(var o=Math.floor(r/t),l=Math.floor((i-1)/t),s=o;s<=l;s++){var d=s*t,u=Math.min(d+t,this.capacity*this.TEXELS_PER_ITEM),c=Math.max(r,d),f=Math.min(i,u);if(c<f){var g=c-d,h=f-c,m=this.data.subarray(c*4,f*4);e.texSubImage2D(e.TEXTURE_2D,0,g,s,h,1,e.RGBA,e.FLOAT,m)}}e.bindTexture(e.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}}},{key:"bind",value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getCapacity",value:function(){return this.capacity}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"getTexelsPerItem",value:function(){return this.TEXELS_PER_ITEM}},{key:"getCount",value:function(){return this.indexMap.size}},{key:"getHighWaterMark",value:function(){return this.nextIndex}},{key:"isDirty",value:function(){return this.dirty}},{key:"clear",value:function(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}},{key:"restore",value:function(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}},{key:"kill",value:function(){this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.indexMap.clear(),this.freeIndices=[]}}])})();function Re(a){var n={},e={},t=0,r=z(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,l=z(o.attributes),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=d.name.replace(/^a_/,"");u in n||(n[u]=t,e[u]=d,t+=d.size)}}catch(c){l.e(c)}finally{l.f()}}}catch(c){r.e(c)}finally{r.f()}return{floatsPerItem:t,texelsPerItem:Math.max(1,Math.ceil(t/4)),offsets:n,specs:e}}var ua=(function(a){function n(e,t,r){var i;return Z(this,n),i=se(this,n,[e,t.texelsPerItem,r]),i.floatsPerItem=t.floatsPerItem,i}return le(n,a),Q(n,[{key:"updateAllAttributes",value:function(t,r){var i=this.indexMap.get(t);i===void 0&&(i=this.allocate(t));for(var o=i*this.TEXELS_PER_ITEM*4,l=Math.min(r.length,this.floatsPerItem),s=0;s<l;s++)this.data[o+s]=r[s];this.markDirty(i)}},{key:"updateAllAttributesAtRow",value:function(t,r){t>=this.capacity&&this.resize(t+1);for(var i=t*this.TEXELS_PER_ITEM*4,o=Math.min(r.length,this.floatsPerItem),l=0;l<o;l++)this.data[i+l]=r[l];this.markDirty(t)}}])})(cn);function ca(a,n,e){for(var t=[],r=new Set,i=0;i<a.length;i++){var o=a[i],l=z(o.attributes),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=d.name.replace(/^a_/,"");if(!r.has(u)){r.add(u);var c=n.offsets[u];if(c!==void 0){var f=e?.get(i);t.push({sourceKey:d.source||u,packedOffset:c,size:d.size,isColor:d.size===4&&!!d.normalized,defaultNum:typeof d.defaultValue=="number"?d.defaultValue:d.defaultValue===!0?1:0,defaultColor:typeof d.defaultValue=="string"?d.defaultValue:"",sourceIndex:i,hasLifecycleHook:!!(f!=null&&f.getAttributeData)})}}}}catch(g){l.e(g)}finally{l.f()}}return t}function ha(a,n,e,t,r,i){e.fill(0);for(var o=0,l=a.length;o<l;o++){var s=a[o],d=s.packedOffset,u=void 0;if(s.hasLifecycleHook){var c=r.get(s.sourceIndex-i);u=c.getAttributeData(n,s.sourceKey),u===null&&(u=n[s.sourceKey])}else u=n[s.sourceKey];if(s.isColor){var f=typeof u=="string"?u:s.defaultColor||t,g=Ye(f),h=ne(g,4),m=h[0],v=h[1],p=h[2],b=h[3];e[d]=m/255,e[d+1]=v/255,e[d+2]=p/255,e[d+3]=b/255}else if(s.size===1)e[d]=typeof u=="number"?u:typeof u=="boolean"?u?1:0:s.defaultNum;else{var y=Array.isArray(u)?u:null;if(y)for(var x=0;x<s.size;x++){var _;e[d+x]=(_=y[x])!==null&&_!==void 0?_:0}}}}var Zn=["r","g","b","a"];function It(a,n){var e=a.offsets,t=a.specs,r=a.texelsPerItem,i=a.floatsPerItem,o=Object.keys(e);if(o.length===0||i===0)return{fetchCode:"",varyingAssignments:""};var l=n.varPrefix,s=n.baseTexelExpr,d=n.textureWidthUniform,u=n.textureSamplerUniform,c=n.outputPrefix,f=c===void 0?"v_":c,g=[];g.push("  int ".concat(l,"BaseTexel = ").concat(s,";")),g.push("");for(var h=0;h<r;h++)g.push("  ivec2 ".concat(l,"Coord").concat(h," = ivec2((").concat(l,"BaseTexel + ").concat(h,") % ").concat(d,", (").concat(l,"BaseTexel + ").concat(h,") / ").concat(d,");")),g.push("  vec4 ".concat(l,"Texel").concat(h," = texelFetch(").concat(u,", ").concat(l,"Coord").concat(h,", 0);"));g.push("");for(var m=[],v=function(){var x=b[p],_=t[x],T=e[x],R=Math.floor(T/4),S=T%4,A="".concat(l,"Texel").concat(R),C="".concat(l,"Texel").concat(R+1),P="".concat(l,"Fetched_").concat(x);if(_.size===1)g.push("  float ".concat(P," = ").concat(A,".").concat(Zn[S],";"));else if(_.size===4&&S===0)g.push("  vec4 ".concat(P," = ").concat(A,";"));else{var w=S+_.size;if(w<=4){var I="vec".concat(_.size),L=Zn.slice(S,w).join("");g.push("  ".concat(I," ").concat(P," = ").concat(A,".").concat(L,";"))}else{var k=_.size===4?"vec4":"vec".concat(_.size),N=Zn.slice(S).map(function(D){return"".concat(A,".").concat(D)}),M=Zn.slice(0,w-4).map(function(D){return"".concat(C,".").concat(D)}),F=[].concat(j(N),j(M)).join(", ");g.push("  ".concat(k," ").concat(P," = ").concat(k,"(").concat(F,");"))}}m.push("  ".concat(f).concat(x," = ").concat(P,";"))},p=0,b=o;p<b.length;p++)v();return{fetchCode:g.join(`
`),varyingAssignments:m.join(`
`)}}function or(a,n,e){if(!(!n||e.type==="sampler2D"))switch(e.type){case"float":a.uniform1f(n,e.value);break;case"int":case"bool":a.uniform1i(n,e.value);break;case"vec2":a.uniform2fv(n,e.value);break;case"vec3":a.uniform3fv(n,e.value);break;case"vec4":a.uniform4fv(n,e.value);break;case"mat3":a.uniformMatrix3fv(n,!1,e.value);break;case"mat4":a.uniformMatrix4fv(n,!1,e.value);break}}var Jd=E(E(E(E(E(E(E(E({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4);function Qn(a){var n=a.match(/^(#version[^\n]*\n)/);return n?n[1]+`#define PICKING_MODE
`+a.slice(n[1].length):`#define PICKING_MODE
`+a}var nt=(function(){function a(n,e,t){Z(this,a),E(this,"floats",new Float32Array),E(this,"ints",new Uint32Array),E(this,"constantArray",new Float32Array),E(this,"capacity",0),E(this,"verticesCount",0),E(this,"bufferGeneration",0),E(this,"uploadedGeneration",new Map),E(this,"constantBufferGeneration",0),E(this,"uploadedConstantGeneration",new Map),E(this,"renderOffset",0),E(this,"renderCount",-1),E(this,"debugStats",{drawCalls:0,verticesDrawn:0,bufferUploadBytes:0}),E(this,"shadersLogged",!1),E(this,"pickProgram",null);var r=this.getDefinition();if(this.VERTICES=r.VERTICES,this.VERTEX_SHADER_SOURCE=r.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=r.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=r.UNIFORMS,this.ATTRIBUTES=r.ATTRIBUTES,this.METHOD=r.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in r?r.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in r?r.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in r,this.ATTRIBUTES_ITEMS_COUNT=na(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=t,this.normalProgram=this.getProgramInfo("normal",n,r.VERTEX_SHADER_SOURCE,r.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo("pick",n,Qn(r.VERTEX_SHADER_SOURCE),Qn(r.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){var i=na(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*i);for(var o=0;o<this.CONSTANT_DATA.length;o++){var l=this.CONSTANT_DATA[o];if(l.length!==i)throw new Error("Program: error while getting constant data (one vector has ".concat(l.length," items instead of ").concat(i,")"));for(var s=0;s<l.length;s++)this.constantArray[o*i+s]=l[s]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return Q(a,[{key:"kill",value:function(){Qa(this.normalProgram),this.pickProgram&&Qa(this.pickProgram)}},{key:"resetDebugStats",value:function(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}},{key:"getProgramInfo",value:function(e,t,r,i,o){var l=t.createBuffer();if(l===null)throw new Error("Program: error while creating the WebGL buffer.");var s=ra(t,r),d=ia(t,i),u=oa(t,[s,d]),c={};this.UNIFORMS.forEach(function(h){var m=t.getUniformLocation(u,h);m&&(c[h]=m)});var f={};this.ATTRIBUTES.forEach(function(h){f[h.name]=t.getAttribLocation(u,h.name)});var g;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(function(h){f[h.name]=t.getAttribLocation(u,h.name)}),g=t.createBuffer(),g===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:e,program:u,gl:t,frameBuffer:o,buffer:l,constantBuffer:g||{},uniformLocations:c,attributeLocations:f,isPicking:e==="pick",vertexShader:s,fragmentShader:d}}},{key:"bindProgram",value:function(e){var t=this,r=0,i=e.gl,o=e.buffer;if(this.isInstanced){if(i.bindBuffer(i.ARRAY_BUFFER,e.constantBuffer),r=0,this.CONSTANT_ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r,!1)}),this.uploadedConstantGeneration.get(e.constantBuffer)!==this.constantBufferGeneration){var s;i.bufferData(i.ARRAY_BUFFER,this.constantArray,i.STATIC_DRAW),this.uploadedConstantGeneration.set(e.constantBuffer,this.constantBufferGeneration),(s=this.renderer)!==null&&s!==void 0&&s.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)}if(i.bindBuffer(i.ARRAY_BUFFER,e.buffer),r=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r,!0)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var d;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(d=this.renderer)!==null&&d!==void 0&&d.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}}else if(i.bindBuffer(i.ARRAY_BUFFER,o),r=0,this.ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var l;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(l=this.renderer)!==null&&l!==void 0&&l.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}i.bindBuffer(i.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(e){var t=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e,!1)}),this.ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e,!0)})):this.ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e)})}},{key:"bindAttribute",value:function(e,t,r,i){var o=Jd[e.type];if(typeof o!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(e.type,'"'));var l=t.attributeLocations[e.name],s=t.gl;if(l!==-1){s.enableVertexAttribArray(l);var d=this.isInstanced?(i?this.ATTRIBUTES_ITEMS_COUNT:na(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;s.vertexAttribPointer(l,e.size,e.type,e.normalized||!1,d,r),this.isInstanced&&i&&s.vertexAttribDivisor(l,1)}return e.size*o}},{key:"unbindAttribute",value:function(e,t,r){var i=t.attributeLocations[e.name],o=t.gl;i!==-1&&(o.disableVertexAttribArray(i),this.isInstanced&&r&&o.vertexAttribDivisor(i,0))}},{key:"reallocate",value:function(e){e!==this.capacity&&(this.capacity=e,this.verticesCount=this.VERTICES*e,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}},{key:"invalidateBuffers",value:function(){this.bufferGeneration++,this.constantBufferGeneration++}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"setTypedUniform",value:function(e,t){var r;or(t.gl,(r=t.uniformLocations[e.name])!==null&&r!==void 0?r:null,e)}},{key:"renderProgram",value:function(e,t){var r=t.gl,i=t.program,o=t.isPicking;o?r.disable(r.BLEND):r.enable(r.BLEND),r.useProgram(i),this.setUniforms(e,t),this.drawWebGL(this.METHOD,t)}},{key:"render",value:function(e,t,r){var i;if(!this.shadersLogged&&(i=this.renderer)!==null&&i!==void 0&&i.getSetting("DEBUG_logShaders")&&(this.shadersLogged=!0,console.log("[sigma] DEBUG_logShaders: ".concat(this.constructor.name),{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:Qn(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:Qn(this.FRAGMENT_SHADER_SOURCE)}})),!this.hasNothingToRender()){this.renderOffset=t??0,this.renderCount=r??-1;var o=this.normalProgram.gl;if(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(e,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&e.pickingFrameBuffer){var l=Math.ceil(e.width*e.pixelRatio/e.downSizingRatio),s=Math.ceil(e.height*e.pixelRatio/e.downSizingRatio);o.bindFramebuffer(o.FRAMEBUFFER,e.pickingFrameBuffer),o.viewport(0,0,l,s),this.bindProgram(this.pickProgram),this.renderProgram(e,this.pickProgram),this.unbindProgram(this.pickProgram),o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio)}}}},{key:"drawWebGL",value:function(e,t){var r,i=t.gl,o=this.renderCount>=0?this.renderCount:this.capacity;(r=this.renderer)!==null&&r!==void 0&&r.getSetting("DEBUG_logRenderStats")&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=o*this.VERTICES),this.isInstanced?i.drawArraysInstanced(e,0,this.VERTICES,o):i.drawArrays(e,this.renderOffset*this.VERTICES,o*this.VERTICES)}}])})(),at=2,hn=7,co={below:0,above:1,left:2,right:3};function eu(){var a=`#version 300 es
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

`.concat(ze,`
`).concat(tt,`
`).concat(ft,`
`).concat(ir,`
`).concat(Mt,`

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
  float gap = `).concat(at.toFixed(1),` * zoomScale * u_pixelRatio;
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
`);return a}var tu=`#version 300 es
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
`;function nu(a,n,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=(r=l.margin)!==null&&r!==void 0?r:ht,d=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=eu(),c=tu,f=(function(g){function h(){var m;Z(this,h);for(var v=arguments.length,p=new Array(v),b=0;b<v;b++)p[b]=arguments[b];return m=se(this,h,[].concat(p)),E(m,"totalCount",0),E(m,"bufferCapacity",0),m}return le(h,g),Q(h,[{key:"getDefinition",value:function(){var v=WebGL2RenderingContext,p=v.FLOAT,b=v.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:c,METHOD:b,UNIFORMS:["u_matrix","u_resolution","u_labelPixelSnapping","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_atlasTexture"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:p},{name:"a_atlasRect",size:4,type:p},{name:"a_attachmentSize",size:2,type:p},{name:"a_positionMode",size:1,type:p},{name:"a_attachmentPlacement",size:1,type:p},{name:"a_labelWidth",size:1,type:p},{name:"a_labelHeight",size:1,type:p},{name:"a_textHeight",size:1,type:p},{name:"a_labelAngle",size:1,type:p}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:p}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processAttachment",value:function(v,p){var b=this.floats,y=v*this.STRIDE;b[y++]=p.nodeIndex,b[y++]=p.atlasX,b[y++]=p.atlasY,b[y++]=p.atlasW,b[y++]=p.atlasH,b[y++]=p.attachWidth,b[y++]=p.attachHeight,b[y++]=p.positionMode,b[y++]=p.attachmentPlacement,b[y++]=p.labelWidth,b[y++]=p.labelHeight,b[y++]=p.textHeight,b[y++]=p.labelAngle}},{key:"setUniforms",value:function(v,p){var b=p.gl,y=p.uniformLocations;b.uniformMatrix3fv(y.u_matrix,!1,v.matrix),b.uniform2f(y.u_resolution,v.width*v.pixelRatio,v.height*v.pixelRatio),b.uniform1f(y.u_labelPixelSnapping,v.labelPixelSnapping),b.uniform1f(y.u_sizeRatio,v.sizeRatio),b.uniform1f(y.u_correctionRatio,v.correctionRatio),b.uniform1f(y.u_cameraAngle,v.cameraAngle),b.uniform1f(y.u_pixelRatio,v.pixelRatio),b.uniform1f(y.u_labelMargin,h.labelMargin),b.uniform1f(y.u_zoomLabelSizeRatio,1/d(v.zoomRatio)),b.uniform1i(y.u_nodeDataTexture,v.nodeDataTextureUnit),b.uniform1i(y.u_nodeDataTextureWidth,v.nodeDataTextureWidth),b.uniform1i(y.u_nodeFrameTexture,v.nodeFrameTextureUnit),b.uniform1i(y.u_nodeFrameTextureWidth,v.nodeFrameTextureWidth),b.uniform1i(y.u_atlasTexture,hn)}},{key:"reallocateAttachments",value:function(v){this.totalCount=v,v>this.bufferCapacity&&(this.bufferCapacity=Math.max(v,Math.ceil(this.bufferCapacity*1.5)||10),he(h,"reallocate",this,3)([this.bufferCapacity]))}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(v,p){var b=p.gl;this.totalCount!==0&&b.drawArraysInstanced(v,0,this.VERTICES,this.totalCount)}}])})(nt);return E(f,"labelMargin",s),new f(a,n,e)}var Qe=5;function fa(a,n){return[].concat(j(n),j(a.map(function(e){var t;return{attributes:(t=e.attributes)!==null&&t!==void 0?t:[]}})))}function zt(a,n){var e=Re(fa(a,n)),t=new Set(a.flatMap(function(d){var u;return(u=d.attributes)!==null&&u!==void 0?u:[]}).map(function(d){return d.name.replace(/^a_/,"")})),r={},i={},o=z(t),l;try{for(o.s();!(l=o.n()).done;){var s=l.value;r[s]=e.offsets[s],i[s]=e.specs[s]}}catch(d){o.e(d)}finally{o.f()}return O(O({},e),{},{offsets:r,specs:i})}function ho(a,n){var e=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pickingPadding","u_nodeDataTexture","u_layerAttributeTexture"]),t=new Set,r=a.flatMap(function(g){return g.uniforms}).filter(function(g){return e.has(g.name)||t.has(g.name)?!1:(t.add(g.name),!0)}).map(function(g){return"uniform ".concat(g.type," ").concat(g.name,";")}).join(`
`),i=n.flatMap(function(g){return g.uniforms}).filter(function(g){return e.has(g.name)||t.has(g.name)?!1:(t.add(g.name),!0)}).map(function(g){return"uniform ".concat(g.type," ").concat(g.name,";")}).join(`
`),o=fa(a,n),l=new Set,s=o.flatMap(function(g){return g.attributes}).filter(function(g){var h=g.name.replace(/^a_/,"");return l.has(h)?!1:(l.add(h),!0)}).map(function(g){var h=g.name.replace(/^a_/,""),m=g.size===1?"float":"vec".concat(g.size);return"out ".concat(m," v_").concat(h,";")}).join(`
`),d=It(Re(o),{varPrefix:"layer",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),u=d.fetchCode,c=d.varyingAssignments,f=`#version 300 es

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
`).concat(s,`

// Node-data fetch helpers (geometry texel + rotation-flags texel)
`).concat(ze,`
`).concat(tt,`

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
`);return f}function fo(a,n,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,r=n.map(function(h,m){var v="layer_".concat(h.name),p=[].concat(j(h.attributes.map(function(b){return"v_".concat(b.name.replace(/^a_/,""))})),j(h.uniforms.map(function(b){return b.name}))).join(", ");return"  // Layer ".concat(m+1,": ").concat(h.name,`
  color = blendOver(color, `).concat(v,"(").concat(p,"));")}).join(`

`),i=new Set(["u_correctionRatio"]),o=new Set,l=a.flatMap(function(h){return h.uniforms}).filter(function(h){return i.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)}).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),s=n.flatMap(function(h){return h.uniforms}).filter(function(h){return i.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)}).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),d=new Set,u=fa(a,n).flatMap(function(h){return h.attributes}).filter(function(h){var m=h.name.replace(/^a_/,"");return d.has(m)?!1:(d.add(m),!0)}).map(function(h){var m=h.name.replace(/^a_/,""),v=h.size===1?"float":"vec".concat(h.size);return"in ".concat(v," v_").concat(m,";")}).join(`
`),c=sa(a),f=no(a,e),g=`#version 300 es
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
`.concat(l,`

// Layer uniforms
`).concat(s,`

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
`).concat(n.map(function(h){return h.glsl}).join(`

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
`);return g}function go(a,n){var e=new Set;return e.add("u_matrix"),e.add("u_sizeRatio"),e.add("u_correctionRatio"),e.add("u_cameraAngle"),e.add("u_pickingPadding"),e.add("u_nodeDataTexture"),e.add("u_nodeDataTextureWidth"),e.add("u_layerAttributeTexture"),e.add("u_layerAttributeTextureWidth"),e.add("u_layerAttributeTexelsPerNode"),a.forEach(function(t){t.uniforms.forEach(function(r){return e.add(r.name)})}),n.forEach(function(t){t.uniforms.forEach(function(r){return e.add(r.name)})}),Array.from(e)}function po(a){var n=WebGL2RenderingContext,e=n.UNSIGNED_BYTE,t=n.FLOAT;return[{name:"a_nodeIndex",size:1,type:t},{name:"a_id",size:4,type:e,normalized:!0},{name:"a_opacity",size:1,type:t}]}function er(a){var n=a.shapes,e=a.layers,t=a.shapeGlobalIds,r=a.antialias,i=r===void 0?!0:r;return{vertexShader:ho(n,e),fragmentShader:fo(n,e,t,i),uniforms:go(n,e),attributes:po()}}function vo(a,n,e){var t=zt(a,n),r=t.specs;return Object.keys(r).map(function(i){return"flat ".concat(e," ").concat(r[i].size===1?"float":"vec".concat(r[i].size)," v_").concat(i,";")}).join(`
`)}function mo(a){var n,e,t=a.shapes,r=a.layers,i=a.shapeGlobalIds,o=It(zt(t,r),{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),l=t.length===1?"float inradiusFactor = ".concat(de((n=t[0].inradiusFactor)!==null&&n!==void 0?n:1),";"):"float inradiusFactor = ".concat(de((e=t[0].inradiusFactor)!==null&&e!==void 0?e:1),`;
  switch (int(shapeId)) {
`).concat(t.map(function(d,u){var c,f=i?i[u]:u;return"    case ".concat(f,": inradiusFactor = ").concat(de((c=d.inradiusFactor)!==null&&c!==void 0?c:1),"; break;")}).join(`
`),`
    default: break;
  }`),s=`#version 300 es

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
`.concat(vo(t,r,"out"),`

`).concat(ze,`
`).concat(tt,`
`).concat(ft,`

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

  `).concat(ar,`
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
  `).concat(l,`
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
`);return s}function bo(a){var n=a.shapes,e=a.layers,t=a.shapeGlobalIds,r=sa(n),i=Gt(n).map(function(f){return"uniform ".concat(f.type," ").concat(f.name,";")}).join(`
`),o=function(g){return un(g,"nodeUV","1.0")},l;if(n.length===1)l="float nodeSdfNormalized = ".concat(o(n[0]),";");else{var s=n.map(function(f,g){var h=t?t[g]:g;return"    case ".concat(h,": nodeSdfNormalized = ").concat(o(f),"; break;")}).join(`
`),d=o(n[0]);l=`float nodeSdfNormalized;
  int shapeId = int(v_shapeId);
  switch (shapeId) {
`.concat(s,`
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
`.concat(vo(n,e,"in"),`

uniform float u_cameraAngle;
`).concat(i,`

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

`).concat(r,`
`).concat(ao,`
`).concat(ro,`
`).concat(io,`
`).concat(oo,`

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
  `).concat(l,`
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
`);return c}function yo(a){var n=["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"],e=z(Gt(a)),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;n.includes(r.name)||n.push(r.name)}}catch(i){e.e(i)}finally{e.f()}return n}function xo(a){return{vertexShader:mo(a),fragmentShader:bo(a),uniforms:yo(a.shapes)}}function _o(a,n,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=t.shapes,d=t.layers,u=t.getAttributeTexture,c=t.shapeGlobalIds;if(s.length===0)throw new Error("createBackdropProgram: at least one shape must be provided in 'shapes'");var f=(r=l.margin)!==null&&r!==void 0?r:5,g=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},h={shapes:s,layers:d,shapeGlobalIds:c},m=xo(h),v=(function(p){function b(){var y;Z(this,b);for(var x=arguments.length,_=new Array(x),T=0;T<x;T++)_[T]=arguments[T];return y=se(this,b,[].concat(_)),E(y,"totalBackdropCount",0),E(y,"bufferCapacity",0),y}return le(b,p),Q(b,[{key:"getDefinition",value:function(){var x=WebGL2RenderingContext,_=x.FLOAT,T=x.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:m.vertexShader,FRAGMENT_SHADER_SOURCE:m.fragmentShader,METHOD:T,UNIFORMS:m.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:_},{name:"a_labelWidth",size:1,type:_},{name:"a_labelHeight",size:1,type:_},{name:"a_textHeight",size:1,type:_},{name:"a_positionMode",size:1,type:_},{name:"a_labelAngle",size:1,type:_},{name:"a_backdropColor",size:4,type:_},{name:"a_backdropShadowColor",size:4,type:_},{name:"a_backdropShadowBlur",size:1,type:_},{name:"a_backdropPadding",size:1,type:_},{name:"a_backdropBorderColor",size:4,type:_},{name:"a_backdropExtra",size:4,type:_},{name:"a_labelBoxOffset",size:2,type:_}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:_}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processBackdrop",value:function(x,_){var T=this.floats,R=this.STRIDE,S=x*R;T[S++]=_.nodeIndex,T[S++]=_.labelWidth,T[S++]=_.labelHeight,T[S++]=_.textHeight,T[S++]=ct[_.position],T[S++]=_.labelAngle,T[S++]=_.backdropColor[0],T[S++]=_.backdropColor[1],T[S++]=_.backdropColor[2],T[S++]=_.backdropColor[3],T[S++]=_.backdropShadowColor[0],T[S++]=_.backdropShadowColor[1],T[S++]=_.backdropShadowColor[2],T[S++]=_.backdropShadowColor[3],T[S++]=_.backdropShadowBlur,T[S++]=_.backdropPadding,T[S++]=_.backdropBorderColor[0],T[S++]=_.backdropBorderColor[1],T[S++]=_.backdropBorderColor[2],T[S++]=_.backdropBorderColor[3],T[S++]=_.backdropBorderWidth,T[S++]=_.backdropCornerRadius,T[S++]=_.backdropLabelPadding,T[S++]=_.backdropArea,T[S++]=_.labelBoxOffset[0],T[S++]=_.labelBoxOffset[1]}},{key:"setUniforms",value:function(x,_){var T=_.gl,R=_.uniformLocations;T.uniformMatrix3fv(R.u_matrix,!1,x.matrix),T.uniform1f(R.u_sizeRatio,x.sizeRatio),T.uniform1f(R.u_correctionRatio,x.correctionRatio),T.uniform1f(R.u_cameraAngle,x.cameraAngle),T.uniform2f(R.u_resolution,x.width*x.pixelRatio,x.height*x.pixelRatio),T.uniform1f(R.u_pixelRatio,x.pixelRatio),T.uniform1f(R.u_labelMargin,b.labelMargin),T.uniform1f(R.u_zoomLabelSizeRatio,1/g(x.zoomRatio)),T.uniform1f(R.u_labelPixelSnapping,x.labelPixelSnapping),T.uniform1i(R.u_nodeDataTexture,x.nodeDataTextureUnit),T.uniform1i(R.u_nodeDataTextureWidth,x.nodeDataTextureWidth),T.uniform1i(R.u_nodeFrameTexture,x.nodeFrameTextureUnit),T.uniform1i(R.u_nodeFrameTextureWidth,x.nodeFrameTextureWidth);var S=u();R.u_layerAttributeTexture&&S&&(S.bind(Qe),T.uniform1i(R.u_layerAttributeTexture,Qe),T.uniform1i(R.u_layerAttributeTextureWidth,S.getTextureWidth()),T.uniform1i(R.u_layerAttributeTexelsPerNode,S.getTexelsPerItem()));var A=z(Gt(s)),C;try{for(A.s();!(C=A.n()).done;){var P=C.value;this.setTypedUniform(P,_)}}catch(w){A.e(w)}finally{A.f()}}},{key:"hasNothingToRender",value:function(){return this.totalBackdropCount===0}},{key:"drawWebGL",value:function(x,_){var T=_.gl;this.totalBackdropCount!==0&&(this.isInstanced?T.drawArraysInstanced(x,0,this.VERTICES,this.totalBackdropCount):T.drawArrays(x,0,this.totalBackdropCount*this.VERTICES))}},{key:"reallocate",value:function(x){this.totalBackdropCount=x,x>this.bufferCapacity&&(this.bufferCapacity=Math.max(x,Math.ceil(this.bufferCapacity*1.5)||10),he(b,"reallocate",this,3)([this.bufferCapacity]))}}])})(nt);return E(v,"labelMargin",f),new v(a,n,e)}var sr=(function(a){function n(){var e;Z(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=se(this,n,[].concat(r)),E(e,"totalCharacterCount",0),E(e,"bufferCapacity",0),e}return le(n,a),Q(n,[{key:"processLabel",value:function(t,r,i){if(i.hidden||!i.text)return 0;for(var o=i.text,l=o.length,s=0;s<l;s++){var d=o[s];this.processCharacter(r+s,i,d,s)}return l}},{key:"hasNothingToRender",value:function(){return this.totalCharacterCount===0}},{key:"drawWebGL",value:function(t,r){var i=r.gl;this.totalCharacterCount!==0&&(this.isInstanced?i.drawArraysInstanced(t,0,this.VERTICES,this.totalCharacterCount):i.drawArrays(t,0,this.totalCharacterCount*this.VERTICES))}},{key:"reallocate",value:function(t){this.totalCharacterCount=t,t>this.bufferCapacity&&(this.bufferCapacity=Math.max(t,Math.ceil(this.bufferCapacity*1.5)||1e3),he(n,"reallocate",this,3)([this.bufferCapacity]))}}])})(nt);function au(){var a=`#version 300 es

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

`.concat(ze,`
`).concat(tt,`
`).concat(ft,`
`).concat(ir,`

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

  `).concat(ar,`

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
`);return a}var ru=`#version 300 es
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
`;function iu(a,n,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=(r=l.margin)!==null&&r!==void 0?r:ht,d=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=au(),c=(function(f){function g(){var h;Z(this,g);for(var m=arguments.length,v=new Array(m),p=0;p<m;p++)v[p]=arguments[p];return h=se(this,g,[].concat(v)),E(h,"totalCount",0),E(h,"bufferCapacity",0),h}return le(g,f),Q(g,[{key:"getDefinition",value:function(){var m=WebGL2RenderingContext,v=m.FLOAT,p=m.UNSIGNED_BYTE,b=m.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:ru,METHOD:b,UNIFORMS:["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:v},{name:"a_id",size:4,type:p,normalized:!0},{name:"a_color",size:4,type:p,normalized:!0},{name:"a_labelWidth",size:1,type:v},{name:"a_labelHeight",size:1,type:v},{name:"a_textHeight",size:1,type:v},{name:"a_positionMode",size:1,type:v},{name:"a_labelAngle",size:1,type:v},{name:"a_padding",size:1,type:v}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:v}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processLabelBackground",value:function(m,v){var p=this.floats,b=this.ints,y=m*this.STRIDE;p[y++]=v.nodeIndex,b[y++]=v.id,p[y++]=v.color,p[y++]=v.labelWidth,p[y++]=v.labelHeight,p[y++]=v.textHeight,p[y++]=v.positionMode,p[y++]=v.labelAngle,p[y++]=v.padding}},{key:"setUniforms",value:function(m,v){var p=v.gl,b=v.uniformLocations;p.uniformMatrix3fv(b.u_matrix,!1,m.matrix),p.uniform1f(b.u_sizeRatio,m.sizeRatio),p.uniform1f(b.u_correctionRatio,m.correctionRatio),p.uniform1f(b.u_cameraAngle,m.cameraAngle),p.uniform2f(b.u_resolution,m.width*m.pixelRatio,m.height*m.pixelRatio),p.uniform1f(b.u_pixelRatio,m.pixelRatio),p.uniform1f(b.u_labelMargin,g.labelMargin),p.uniform1f(b.u_zoomLabelSizeRatio,1/d(m.zoomRatio)),p.uniform1f(b.u_labelPixelSnapping,m.labelPixelSnapping),p.uniform1f(b.u_pickingPadding,m.labelPickingPadding),p.uniform1i(b.u_nodeDataTexture,m.nodeDataTextureUnit),p.uniform1i(b.u_nodeDataTextureWidth,m.nodeDataTextureWidth),p.uniform1i(b.u_nodeFrameTexture,m.nodeFrameTextureUnit),p.uniform1i(b.u_nodeFrameTextureWidth,m.nodeFrameTextureWidth)}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(m,v){var p=v.gl;this.totalCount!==0&&p.drawArraysInstanced(p.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(m){this.totalCount=m,m>this.bufferCapacity&&(this.bufferCapacity=Math.max(m,Math.ceil(this.bufferCapacity*1.5)||10),he(g,"reallocate",this,3)([this.bufferCapacity]))}}])})(nt);return E(c,"labelMargin",s),new c(a,n,e)}var Me={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},on=2,ln=1e20;function ou(a,n,e,t,r){var i=a+r*4,o=document.createElement("canvas");o.width=i,o.height=i;var l=o.getContext("2d",{willReadFrequently:!0});return l.font="".concat(t," ").concat(e," ").concat(a,"px ").concat(n),l.textBaseline="alphabetic",l.textAlign="left",l.fillStyle="black",{ctx:l,canvasSize:i,gridOuter:new Float64Array(i*i),gridInner:new Float64Array(i*i),f:new Float64Array(i),z:new Float64Array(i+1),v:new Uint16Array(i)}}function su(a,n,e,t,r){var i=a.ctx,o=a.canvasSize,l=i.measureText(n),s=l.width,d=l.actualBoundingBoxAscent,u=l.actualBoundingBoxDescent,c=l.actualBoundingBoxLeft,f=l.actualBoundingBoxRight,g=Math.ceil(d),h=Math.ceil(c),m=Math.max(0,Math.min(o-e,Math.ceil(c)+Math.ceil(f))),v=Math.min(o-e,g+Math.ceil(u)),p=m+2*e,b=v+2*e,y=Math.max(p*b,0),x=new Uint8ClampedArray(y),_={data:x,width:p,height:b,glyphWidth:m,glyphHeight:v,glyphTop:g,glyphLeft:h,glyphAdvance:s};if(m===0||v===0)return _;var T=a.gridInner,R=a.gridOuter;i.clearRect(e,e,m,v),i.fillText(n,e+h,e+g);var S=i.getImageData(e,e,m,v);R.fill(ln,0,y),T.fill(0,0,y);for(var A=0;A<v;A++)for(var C=0;C<m;C++){var P=S.data[4*(A*m+C)+3]/255;if(P!==0){var w=(A+e)*p+C+e;if(P===1)R[w]=0,T[w]=ln;else{var I=.5-P;R[w]=I>0?I*I:0,T[w]=I<0?I*I:0}}}$i(R,0,0,p,b,p,a.f,a.v,a.z),$i(T,e,e,m,v,p,a.f,a.v,a.z);for(var L=0;L<y;L++){var k=Math.sqrt(R[L])-Math.sqrt(T[L]);x[L]=Math.round(255-255*(k/t+r))}return _}function $i(a,n,e,t,r,i,o,l,s){for(var d=n;d<n+t;d++)Vi(a,e*i+d,i,r,o,l,s);for(var u=e;u<e+r;u++)Vi(a,u*i+n,1,t,o,l,s)}function Vi(a,n,e,t,r,i,o){i[0]=0,o[0]=-ln,o[1]=ln,r[0]=a[n];for(var l=1,s=0,d=0;l<t;l++){r[l]=a[n+l*e];var u=l*l;do{var c=i[s];d=(r[l]-r[c]+u-c*c)/(l-c)/2}while(d<=o[s]&&--s>-1);s++,i[s]=l,o[s]=d,o[s+1]=ln}for(var f=0,g=0;f<t;f++){for(;o[g+1]<f;)g++;var h=i[g],m=f-h;a[n+f*e]=r[h]+m*m}}var Je=(function(a){function n(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z(this,n),e=se(this,n),E(e,"fonts",new Map),E(e,"textures",[]),E(e,"cursor",{x:0,y:0,rowHeight:0,atlasIndex:0}),E(e,"pendingGlyphs",[]),E(e,"debounceTimer",null),e.options=O(O({},Me),t),e.canvas=document.createElement("canvas"),e.canvas.width=e.options.maxTextureSize,e.canvas.height=e.options.maxTextureSize,e.ctx=e.canvas.getContext("2d",{willReadFrequently:!0}),e.measureCanvas=document.createElement("canvas"),e.measureCtx=e.measureCanvas.getContext("2d"),e.textures.push(e.ctx.getImageData(0,0,1,1)),e}return le(n,a),Q(n,[{key:"getFontKey",value:function(t){return"".concat(t.family,"-").concat(t.weight,"-").concat(t.style)}},{key:"registerFont",value:function(t){var r=this.getFontKey(t);if(this.fonts.has(r))return r;var i=ou(this.options.fontSize,t.family,t.weight,t.style,this.options.buffer);return this.fonts.set(r,{descriptor:t,generator:i,glyphs:new Map}),r}},{key:"ensureGlyphs",value:function(t,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered. Call registerFont() first.'));var o=!1,l=z(t),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=d.codePointAt(0);u!==void 0&&(i.glyphs.has(u)||(this.pendingGlyphs.push({fontKey:r,charCode:u}),o=!0))}}catch(c){l.e(c)}finally{l.f()}o&&this.scheduleTextureGeneration()}},{key:"measureText",value:function(t,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered.'));var o=i.descriptor,l=o.family,s=o.weight,d=o.style;return this.measureCtx.font="".concat(d," ").concat(s," ").concat(this.options.fontSize,"px ").concat(l),this.measureCtx.measureText(t).width}},{key:"getGlyph",value:function(t,r){var i=this.fonts.get(r);if(i)return i.glyphs.get(t)}},{key:"getTextures",value:function(){return this.textures}},{key:"getFontCount",value:function(){return this.fonts.size}},{key:"getGlyphCount",value:function(){var t=0,r=z(this.fonts.values()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;t+=o.glyphs.size}}catch(l){r.e(l)}finally{r.f()}return t}},{key:"hasPendingGlyphs",value:function(){return this.pendingGlyphs.length>0}},{key:"flush",value:function(){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null),this.generateTextures()}},{key:"destroy",value:function(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}},{key:"scheduleTextureGeneration",value:function(){var t=this;this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(function(){t.debounceTimer=null,t.generateTextures()},this.options.debounceTimeout))}},{key:"generateTextures",value:function(){if(this.pendingGlyphs.length!==0){var t=this.options,r=t.maxTextureSize,i=t.buffer,o=t.radius,l=t.cutoff,s=z(this.pendingGlyphs),d;try{for(s.s();!(d=s.n()).done;){var u=d.value,c=u.fontKey,f=u.charCode,g=this.fonts.get(c);if(!(!g||g.glyphs.has(f))){var h=String.fromCodePoint(f),m=su(g.generator,h,i,o,l),v=m.width,p=m.height;this.cursor.x+v+on>r&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+on,this.cursor.rowHeight=0),this.cursor.y+p+on>r&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,r,r));for(var b=m.data,y=new Uint8ClampedArray(v*p*4),x=0;x<b.length;x++){var _=x*4;y[_]=255,y[_+1]=255,y[_+2]=255,y[_+3]=b[x]}var T=new ImageData(y,v,p);this.ctx.putImageData(T,this.cursor.x,this.cursor.y);var R={charCode:f,width:m.glyphWidth,height:m.glyphHeight,bearingX:-m.glyphLeft-i,bearingY:m.glyphTop+i,advance:m.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:v,atlasHeight:p,atlasIndex:this.cursor.atlasIndex};g.glyphs.set(f,R),this.cursor.x+=v+on,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,p)}}}catch(S){s.e(S)}finally{s.f()}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(n.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}}},{key:"finalizeCurrentTexture",value:function(){var t=this.options.maxTextureSize,r=this.cursor.y>0||this.cursor.rowHeight>0,i=Math.min(t,Math.max(this.cursor.x,r?t:1)),o=Math.min(t,this.cursor.y+this.cursor.rowHeight+on),l=this.ctx.getImageData(0,0,i,o);this.cursor.atlasIndex>=this.textures.length?this.textures.push(l):this.textures[this.cursor.atlasIndex]=l}}])})(Yi.EventEmitter);E(Je,"ATLAS_UPDATED_EVENT","atlasUpdated");var lu=Me.fontSize;function To(){var a=`  // -------------------------------------------------------------------------
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
const float ATLAS_FONT_SIZE = `.concat(de(lu),`;

// ============================================================================
// Helper Functions
// ============================================================================

`).concat(ze,`
`).concat(tt,`
`).concat(ft,`
`).concat(rr,`

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
`);return n}function Eo(){var a=`#version 300 es
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
`;return a}function So(){return["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_pixelRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_zoomLabelSizeRatio","u_labelPixelSnapping"]}function Ao(){return{vertexShader:To(),fragmentShader:Eo(),uniforms:So()}}function Ro(a,n,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=(r=l.margin)!==null&&r!==void 0?r:ht,d=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=Ao(),c=(function(f){function g(h,m,v){var p,b,y,x;if(Z(this,g),x=se(this,g,[h,m,v]),E(x,"atlasTexture",null),E(x,"atlasNeedsUpdate",!1),E(x,"labelGlyphCache",new Map),x.atlasFontSize=Me.fontSize*rn(),x.atlasManager=new Je({fontSize:x.atlasFontSize}),x.gamma=.025,x.sdfBuffer=Me.cutoff,x.atlasTexture=h.createTexture(),!x.atlasTexture)throw new Error("NodeLabelProgram: failed to create atlas texture");h.bindTexture(h.TEXTURE_2D,x.atlasTexture),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_S,h.CLAMP_TO_EDGE),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_T,h.CLAMP_TO_EDGE),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.LINEAR),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.LINEAR),h.bindTexture(h.TEXTURE_2D,null),x.atlasManager.on(Je.ATLAS_UPDATED_EVENT,function(){x.atlasNeedsUpdate=!0});var _={family:((p=l.font)===null||p===void 0?void 0:p.family)||"sans-serif",weight:((b=l.font)===null||b===void 0?void 0:b.weight)||"normal",style:((y=l.font)===null||y===void 0?void 0:y.style)||"normal"};return x.defaultFontKey=x.atlasManager.registerFont(_),x}return le(g,f),Q(g,[{key:"getDefinition",value:function(){var m=WebGL2RenderingContext,v=m.FLOAT,p=m.UNSIGNED_BYTE,b=m.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u.vertexShader,FRAGMENT_SHADER_SOURCE:u.fragmentShader,METHOD:b,UNIFORMS:u.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:v},{name:"a_charOffset",size:2,type:v},{name:"a_charSize",size:2,type:v},{name:"a_texCoords",size:4,type:v},{name:"a_color",size:4,type:p,normalized:!0},{name:"a_margin",size:1,type:v},{name:"a_positionMode",size:1,type:v},{name:"a_labelWidth",size:1,type:v},{name:"a_labelHeight",size:1,type:v},{name:"a_verticalCenter",size:1,type:v},{name:"a_textHeight",size:1,type:v},{name:"a_labelAngle",size:1,type:v}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:v}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(m,v){if(v.hidden||!v.text){this.labelGlyphCache.delete(m);return}var p=v.text,b=v.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(p,b);var y=[],x=[],_=0,T=0,R=0,S=z(p),A;try{for(S.s();!(A=S.n()).done;){var C=A.value,P=C.codePointAt(0);if(P===void 0){y.push(void 0),x.push(_);continue}var w=this.atlasManager.getGlyph(P,b);y.push(w),x.push(_),w&&(_+=w.advance,T=Math.max(T,w.bearingY),R=Math.max(R,w.atlasHeight-w.bearingY))}}catch(I){S.e(I)}finally{S.f()}this.labelGlyphCache.set(m,{glyphs:y,xOffsets:x,totalWidth:_,totalHeight:T+R,verticalCenterOffset:(T-R)/2})}},{key:"processCharacter",value:function(m,v,p,b){var y=this.floats,x=this.STRIDE,_=m*x,T=this.labelGlyphCache.get(v.parentKey);if(!T||!T.glyphs[b]){for(var R=0;R<x;R++)y[_+R]=0;return}var S=T.glyphs[b],A=T.xOffsets[b],C=v.size/this.atlasFontSize,P=Se(v.color),w=_;y[w++]=v.nodeIndex,y[w++]=(A+S.bearingX)*C,y[w++]=-S.bearingY*C,y[w++]=S.atlasWidth*C,y[w++]=S.atlasHeight*C,y[w++]=S.atlasX,y[w++]=S.atlasY,y[w++]=S.atlasWidth,y[w++]=S.atlasHeight,y[w++]=P,y[w++]=v.margin,y[w++]=ct[v.position],y[w++]=T.totalWidth*C,y[w++]=v.size,y[w++]=T.verticalCenterOffset*C,y[w++]=T.totalHeight*C,y[w++]=v.labelAngle}},{key:"processLabel",value:function(m,v,p){return this.prepareLabelGlyphs(m,p),he(g,"processLabel",this,3)([m,v,p])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var m=this.normalProgram.gl,v=this.atlasManager.getTextures();if(v.length!==0){var p=v[0];m.bindTexture(m.TEXTURE_2D,this.atlasTexture),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,p.width,p.height,0,m.RGBA,m.UNSIGNED_BYTE,p.data),m.bindTexture(m.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(m,v){var p=v.gl,b=v.uniformLocations;p.uniformMatrix3fv(b.u_matrix,!1,m.matrix),p.uniform1f(b.u_sizeRatio,m.sizeRatio),p.uniform1f(b.u_correctionRatio,m.correctionRatio),p.uniform1f(b.u_cameraAngle,m.cameraAngle),p.uniform2f(b.u_resolution,m.width*m.pixelRatio,m.height*m.pixelRatio);var y=this.atlasManager.getTextures();y.length>0?p.uniform2f(b.u_atlasSize,y[0].width,y[0].height):p.uniform2f(b.u_atlasSize,1,1),p.activeTexture(p.TEXTURE0),p.bindTexture(p.TEXTURE_2D,this.atlasTexture),p.uniform1i(b.u_atlas,0),b.u_nodeDataTexture!==void 0&&p.uniform1i(b.u_nodeDataTexture,m.nodeDataTextureUnit),b.u_nodeDataTextureWidth!==void 0&&p.uniform1i(b.u_nodeDataTextureWidth,m.nodeDataTextureWidth),p.uniform1i(b.u_nodeFrameTexture,m.nodeFrameTextureUnit),p.uniform1i(b.u_nodeFrameTextureWidth,m.nodeFrameTextureWidth),p.uniform1f(b.u_gamma,this.gamma),p.uniform1f(b.u_sdfBuffer,this.sdfBuffer),p.uniform1f(b.u_pixelRatio,m.pixelRatio),p.uniform1f(b.u_zoomLabelSizeRatio,1/g.zoomToLabelSizeRatioFunction(m.zoomRatio)),p.uniform1f(b.u_labelPixelSnapping,m.labelPixelSnapping)}},{key:"renderProgram",value:function(m,v){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),he(g,"renderProgram",this,3)([m,v])}},{key:"registerFont",value:function(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:m,weight:v,style:p})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"measureLabel",value:function(m,v,p){var b=p||this.defaultFontKey;this.atlasManager.ensureGlyphs(m,b),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var y=0,x=0,_=0,T=z(m),R;try{for(T.s();!(R=T.n()).done;){var S=R.value,A=S.codePointAt(0);if(A!==void 0){var C=this.atlasManager.getGlyph(A,b);C&&(y+=C.advance,x=Math.max(x,C.bearingY),_=Math.max(_,C.atlasHeight-C.bearingY))}}}catch(w){T.e(w)}finally{T.f()}var P=v/this.atlasFontSize;return{width:y*P,height:v,textHeight:(x+_)*P}}},{key:"ensureGlyphsReady",value:function(m,v){var p=v||this.defaultFontKey,b=z(m),y;try{for(b.s();!(y=b.n()).done;){var x=y.value;this.atlasManager.ensureGlyphs(x,p)}}catch(_){b.e(_)}finally{b.f()}this.atlasManager.flush()}},{key:"kill",value:function(){var m=this.normalProgram.gl;this.atlasTexture&&(m.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),he(g,"kill",this,3)([])}}])})(sr);return E(c,"labelMargin",s),E(c,"zoomToLabelSizeRatioFunction",d),new c(a,n,e)}var du=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function uu(a,n,e){var t=sa(a),r=Gt(a).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),i=lo(a,e),o=i.code,l=i.multiShape,s=zt(a,n),d=Object.keys(s.specs).map(function(h){return"float v_".concat(h,";")}).join(`
`),u=It(s,{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),c=u.fetchCode,f=u.varyingAssignments,g=`#version 300 es
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

`).concat(ze,`
`).concat(tt,`
`).concat(t,`
`).concat(o,`
`).concat(rr,`

void main() {
  int nodeIdx = int(a_nodeIndex);
`).concat(c,`
`).concat(f,`
  `).concat(l?`// Multi-shape: the shape id lives in the node-data texture's .w channel:
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
`);return g}var lr=(function(){function a(n,e){Z(this,a),E(this,"uniformLocations",{});var t=e.shapes,r=e.layers,i=e.shapeGlobalIds;if(t.length===0)throw new Error("NodeLabelFramePass: at least one shape must be provided");this.gl=n,this.shapeUniforms=Gt(t),this.hasAttributeData=Object.keys(zt(t,r).offsets).length>0,this.vertexShader=ra(n,uu(t,r,i)),this.fragmentShader=ia(n,du),this.program=oa(n,[this.vertexShader,this.fragmentShader]);var o=["u_cameraAngle","u_nodeDataTexture","u_nodeDataTextureWidth","u_frameTextureWidth","u_frameTextureHeight","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"].concat(j(this.shapeUniforms.map(function(p){return p.name}))),l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;this.uniformLocations[d]=n.getUniformLocation(this.program,d)}}catch(p){l.e(p)}finally{l.f()}var u=a.FLOATS_PER_POINT*4;this.vao=n.createVertexArray(),this.buffer=n.createBuffer(),n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,this.buffer);var c=z([["a_nodeIndex",0],["a_positionMode",4],["a_labelAngle",8]]),f;try{for(c.s();!(f=c.n()).done;){var g=ne(f.value,2),h=g[0],m=g[1],v=n.getAttribLocation(this.program,h);v>=0&&(n.enableVertexAttribArray(v),n.vertexAttribPointer(v,1,n.FLOAT,!1,u,m))}}catch(p){c.e(p)}finally{c.f()}n.bindVertexArray(null)}return Q(a,[{key:"run",value:function(e,t,r,i,o){if(t!==0){var l=this.gl;l.useProgram(this.program),l.bindVertexArray(this.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer),l.bufferData(l.ARRAY_BUFFER,e.subarray(0,t*a.FLOATS_PER_POINT),l.DYNAMIC_DRAW);var s=this.uniformLocations;l.uniform1f(s.u_cameraAngle,i.cameraAngle),l.uniform1i(s.u_nodeDataTexture,i.nodeDataTextureUnit),l.uniform1i(s.u_nodeDataTextureWidth,i.nodeDataTextureWidth),l.uniform1f(s.u_frameTextureWidth,r.getTextureWidth()),l.uniform1f(s.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&o&&(o.bind(Qe),s.u_layerAttributeTexture&&l.uniform1i(s.u_layerAttributeTexture,Qe),s.u_layerAttributeTextureWidth&&l.uniform1i(s.u_layerAttributeTextureWidth,o.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&l.uniform1i(s.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var d=z(this.shapeUniforms),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;or(l,this.uniformLocations[c.name],c)}}catch(f){d.e(f)}finally{d.f()}r.bindAsRenderTarget(),l.disable(l.BLEND),l.disable(l.DEPTH_TEST),l.drawArrays(l.POINTS,0,t),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindVertexArray(null)}}},{key:"kill",value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteBuffer(this.buffer),e.deleteVertexArray(this.vao)}}])})();E(lr,"FLOATS_PER_POINT",3);function dr(a,n,e,t,r){var i,o=t.label,l=o===void 0?{}:o,s=t.shapes;if(s.length===0)throw new Error("createNodeProgram: at least one shape must be provided in 'shapes'");var d={},u=[],c;s.forEach(function(R,S){var A=Qi(R);S===0&&(c=A),d[R.name]=S,u[S]=Nt(A)});var f=j(t.layers),g=er({shapes:s,layers:f,shapeGlobalIds:s.length>1?u:void 0,antialias:r}),h=Ro(a,null,e,{label:l}),m=_o(a,null,e,{shapes:s,layers:f,getAttributeTexture:function(){return T.getAttributeTexture()},label:l,shapeGlobalIds:s.length>1?u:void 0}),v=iu(a,n,e,{label:l}),p=t.labelAttachments&&Object.keys(t.labelAttachments).length>0?nu(a,null,e,{label:l}):null,b=new lr(a,{shapes:s,layers:f,shapeGlobalIds:s.length>1?u:void 0}),y=fa(s,f),x=Re(y),_=(i=(function(R){function S(A,C,P){var w;Z(this,S),w=se(this,S,[A,C,P]),E(w,"layerLifecycles",new Map),E(w,"layersNeedingRegeneration",new Set),E(w,"attrDescriptors",[]),w._pickingBuffer=C;var I=_.layerTextures.get(A);I||(I=new ua(A,x),_.layerTextures.set(A,I)),w.layerAttributeTexture=I;var L=_.textureRefCounts.get(A)||0;_.textureRefCounts.set(A,L+1),w.packedAttributeData=new Float32Array(x.floatsPerItem),f.forEach(function(N,M){if(N.lifecycle){var F={gl:A,renderer:{refresh:function(){return P.refresh()}},getUniformLocation:function(H){return A.getUniformLocation(w.normalProgram.program,H)},requestShaderRegeneration:function(){w.layersNeedingRegeneration.add(M)},requestRefresh:function(){P.refresh()}},D=N.lifecycle(F);w.layerLifecycles.set(M,D)}}),w.layerLifecycles.forEach(function(N){var M;(M=N.init)===null||M===void 0||M.call(N)});var k=new Map;return w.layerLifecycles.forEach(function(N,M){N.getAttributeData&&k.set(M,N)}),w.attrDescriptors=ca(y,x,k),w}return le(S,R),Q(S,[{key:"getDefinition",value:function(){var C=WebGL2RenderingContext,P=C.FLOAT,w=C.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:g.vertexShader,FRAGMENT_SHADER_SOURCE:g.fragmentShader,METHOD:w,UNIFORMS:g.uniforms,ATTRIBUTES:g.attributes,CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:P}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"maybeRegenerateShaders",value:function(){var C=this;if(this.layersNeedingRegeneration.size!==0){f=f.map(function(M,F){if(C.layersNeedingRegeneration.has(F)){var D=C.layerLifecycles.get(F);if(D!=null&&D.regenerate){var G=D.regenerate();return O(O({},G),{},{lifecycle:M.lifecycle})}}return M}),this.layersNeedingRegeneration.clear(),g=er({shapes:s,layers:f,shapeGlobalIds:s.length>1?u:void 0,antialias:this.renderer.getSetting("antialiasNodes")});var P=this.normalProgram.gl,w=this.normalProgram,I=w.program,L=w.buffer,k=w.vertexShader,N=w.fragmentShader;P.deleteProgram(I),P.deleteBuffer(L),P.deleteShader(k),P.deleteShader(N),this.normalProgram=this.getProgramInfo("normal",P,g.vertexShader,g.fragmentShader,this._pickingBuffer)}}},{key:"allocateNode",value:function(C){this.layerAttributeTexture.allocate(C)}},{key:"freeNode",value:function(C){this.layerAttributeTexture.free(C)}},{key:"getAttributeTexture",value:function(){return this.layerAttributeTexture}},{key:"uploadLayerTexture",value:function(){this.layerAttributeTexture.upload()}},{key:"process",value:function(C,P,w,I,L){var k=P*this.STRIDE;if(w.visibility==="hidden"){for(var N=k+this.STRIDE;k<N;k++)this.floats[k]=0;this.floats[P*this.STRIDE]=uo;return}this.processVisibleItem(Lt(C),k,w,I,L)}},{key:"processVisibleItem",value:function(C,P,w,I,L){var k,N=this.floats,M=this.ints;if(N[P++]=I,M[P++]=C,N[P++]=(k=w.opacity)!==null&&k!==void 0?k:1,x.floatsPerItem!==0){var F=this.packedAttributeData;ha(this.attrDescriptors,w,F,w.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(L,F)}}},{key:"setUniforms",value:function(C,P){var w=this,I=P.gl,L=P.uniformLocations;L.u_matrix&&I.uniformMatrix3fv(L.u_matrix,!1,C.matrix),L.u_sizeRatio&&I.uniform1f(L.u_sizeRatio,C.sizeRatio),L.u_correctionRatio&&I.uniform1f(L.u_correctionRatio,C.correctionRatio),L.u_pickingPadding&&I.uniform1f(L.u_pickingPadding,C.nodePickingPadding),L.u_cameraAngle&&I.uniform1f(L.u_cameraAngle,C.cameraAngle),L.u_nodeDataTexture&&I.uniform1i(L.u_nodeDataTexture,C.nodeDataTextureUnit),L.u_nodeDataTextureWidth&&I.uniform1i(L.u_nodeDataTextureWidth,C.nodeDataTextureWidth),L.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(Qe),I.uniform1i(L.u_layerAttributeTexture,Qe)),L.u_layerAttributeTextureWidth&&I.uniform1i(L.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),L.u_layerAttributeTexelsPerNode&&I.uniform1i(L.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),s.forEach(function(k){k.uniforms.forEach(function(N){w.setTypedUniform(N,P)})}),f.forEach(function(k){k.uniforms.forEach(function(N){w.setTypedUniform(N,P)})})}},{key:"render",value:function(C,P,w){this.maybeRegenerateShaders(),he(S,"render",this,3)([C,P,w])}},{key:"renderProgram",value:function(C,P){var w=P.gl,I=P.program;w.useProgram(I),P===this.normalProgram&&this.layerLifecycles.forEach(function(L){var k;(k=L.beforeRender)===null||k===void 0||k.call(L)}),he(S,"renderProgram",this,3)([C,P])}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(w){var I;(I=w.kill)===null||I===void 0||I.call(w)}),this.layerLifecycles.clear();var C=this.normalProgram.gl,P=(_.textureRefCounts.get(C)||1)-1;P<=0?(this.layerAttributeTexture.kill(),_.layerTextures.delete(C),_.textureRefCounts.delete(C)):_.textureRefCounts.set(C,P),he(S,"kill",this,3)([])}}])})(nt),E(i,"layerTextures",new WeakMap),E(i,"textureRefCounts",new WeakMap),i),T=new _(a,null,e);return{nodeProgram:T,labelProgram:h,backdropProgram:m,labelBackgroundProgram:v,attachmentProgram:p,framePass:b,shapeSlug:c,shapeNameToIndex:s.length>1?d:void 0,shapeGlobalIds:s.length>1?u:void 0}}var et=6;function fn(a){var n=a.offsets,e=a.specs,t=a.floatsPerItem,r=Object.keys(n);if(r.length===0||t===0)return{uniformDeclarations:"",uniformNames:[],vertexVaryingDeclarations:"",fragmentVaryingDeclarations:"",fetchCode:"",varyingAssignments:""};var i=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=["u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"],l=r.map(function(g){var h=e[g].size===1?"float":"vec".concat(e[g].size);return"".concat(h," v_").concat(g,";")}),s=l.map(function(g){return"out ".concat(g)}).join(`
`),d=l.map(function(g){return"in ".concat(g)}).join(`
`),u=It(a,{varPrefix:"attr",baseTexelExpr:"edgeIdx * u_edgeAttributeTexelsPerEdge",textureWidthUniform:"u_edgeAttributeTextureWidth",textureSamplerUniform:"u_edgeAttributeTexture"}),c=u.fetchCode,f=u.varyingAssignments;return{uniformDeclarations:i,uniformNames:o,vertexVaryingDeclarations:s,fragmentVaryingDeclarations:d,fetchCode:c,varyingAssignments:f}}function cu(a){return`
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
`)}function hu(a){return`
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
`)}function wo(a){return`
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
`)}function fu(a){return`
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
`)}function gu(a){return`
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
`)}function pu(a){return`
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
`)}function vu(a){return`
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
`)}function Jn(a,n){var e=new RegExp("\\b(float|vec[234]|void|int|bool)\\s+".concat(n,"\\s*\\("));return e.test(a)}function Do(a,n){var e=[];return Jn(n,"path_".concat(a,"_length"))||e.push(fu(a)),Jn(n,"path_".concat(a,"_closest_t"))||e.push(gu(a)),Jn(n,"path_".concat(a,"_distance"))||e.push(pu(a)),Jn(n,"path_".concat(a,"_t_at_distance"))||e.push(vu(a)),e.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
`.concat(e.join(`
`)):""}function Lo(a){var n,e,t,r=a.paths,i=a.layers,o=(n=a.extremities)!==null&&n!==void 0?n:[];if(r.length===0)throw new Error("At least one path is required in 'paths'");if(i.length===0)throw new Error("At least one layer is required in 'layers'");var l=(e=a.defaultHead)!==null&&e!==void 0?e:"none",s=(t=a.defaultTail)!==null&&t!==void 0?t:"none";return{paths:r,extremities:o,layers:i,path:r[0],layer:i[0],defaultHead:l,defaultTail:s}}var Co=WebGL2RenderingContext,dn=Co.FLOAT,ji=Co.UNSIGNED_BYTE;function mu(a,n,e){var t=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"]),r=new Set(t);return a.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),n.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),e.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),Array.from(r)}function ur(a){var n=new Set,e=[],t=z(a),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;n.has(i.name)||(n.add(i.name),e.push("// Path: ".concat(i.name)),e.push(i.glsl),e.push(wo(i.name)),e.push(Do(i.name,i.glsl)))}}catch(o){t.e(o)}finally{t.f()}return e.join(`

`)}function bu(a){var n=[],e=z(a),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;n.push("// Extremity: ".concat(r.name)),n.push(r.glsl)}}catch(i){e.e(i)}finally{e.f()}return n.join(`

`)}var yu=[{queryName:"queryPathPosition",pathFunc:"position",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathTangent",pathFunc:"tangent",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathNormal",pathFunc:"normal",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathLength",pathFunc:"length",returnType:"float",params:"vec2 source, vec2 target",args:"source, target"},{queryName:"queryPathClosestT",pathFunc:"closest_t",returnType:"float",params:"vec2 p, vec2 source, vec2 target",args:"p, source, target"}];function xu(a,n){var e=n.queryName,t=n.pathFunc,r=n.returnType,i=n.params,o=n.args;if(a.length===1)return"".concat(r," ").concat(e,"(int pathId, ").concat(i,`) {
  return path_`).concat(a[0].name,"_").concat(t,"(").concat(o,`);
}`);var l=a.map(function(s,d){return"    case ".concat(d,": return path_").concat(s.name,"_").concat(t,"(").concat(o,");")}).join(`
`);return"".concat(r," ").concat(e,"(int pathId, ").concat(i,`) {
  switch (pathId) {
`).concat(l,`
    default: return path_`).concat(a[0].name,"_").concat(t,"(").concat(o,`);
  }
}`)}function cr(a){return yu.map(function(n){return xu(a,n)}).join(`

`)}function _u(a){if(a.length===1)return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_`.concat(a[0].name,`(uv, lengthRatio, widthRatio);
}`);var n=a.map(function(e,t){return"    case ".concat(t,": return extremity_").concat(e.name,"(uv, lengthRatio, widthRatio);")}).join(`
`);return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
`.concat(n,`
    default: return extremity_`).concat(a[0].name,`(uv, lengthRatio, widthRatio);
  }
}`)}function Tu(a){var n=[],e=z(a),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;n.push(cu(r.name)),n.push(hu(r.name))}}catch(l){e.e(l)}finally{e.f()}if(a.length===1)n.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_`.concat(a[0].name,`(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_`).concat(a[0].name,`(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`));else{var i=a.map(function(l,s){return"    case ".concat(s,": return findSourceClampT_").concat(l.name,"(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);")}).join(`
`),o=a.map(function(l,s){return"    case ".concat(s,": return findTargetClampT_").concat(l.name,"(source, target, targetSize, targetShapeId, targetRotateAlign, margin);")}).join(`
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

`)}function Eu(a,n,e,t,r){var i=Re([].concat(j(a),j(e))),o=fn(i),l=zt(t,r),s=Object.keys(l.offsets),d=function(R){var S=l.specs[R].size;return S===1?"float":"vec".concat(S)},u=s.map(function(T){return"".concat(d(T)," v_source_").concat(T,`;
`).concat(d(T)," v_target_").concat(T,";")}).join(`
`),c=It(l,{varPrefix:"srcNodeAttr",baseTexelExpr:"srcIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_source_"}),f=It(l,{varPrefix:"tgtNodeAttr",baseTexelExpr:"tgtIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_target_"}),g=s.map(function(T){return"".concat(d(T)," g_").concat(T,";")}).join(`
`),h=s.map(function(T){return"  g_".concat(T," = v_source_").concat(T,";")}).join(`
`),m=s.map(function(T){return"  g_".concat(T," = v_target_").concat(T,";")}).join(`
`),v=new Set,p=[],b=function(R){v.has(R.name)||(v.add(R.name),p.push("uniform ".concat(R.type," ").concat(R.name,";")))};a.forEach(function(T){return T.uniforms.forEach(b)}),n.forEach(function(T){return T.uniforms.forEach(b)});var y=n.map(function(T){return de(T.widthFactor)}).join(", "),x=Math.max.apply(Math,j(a.map(function(T){return T.minBodyLengthRatio||0}))),_=`#version 300 es

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
`).concat(g,`

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[`).concat(n.length,"] = float[](").concat(y,`);

// Node-data fetch helpers (geometry texel + rotation-flags texel)
`).concat(ze,`
`).concat(tt,`

// Shape SDFs for node boundary clamping
`).concat(eo(),`
`).concat(to(new Set(s)),`

// Path functions
`).concat(ur(a),`
`).concat(cr(a),`
`).concat(Tu(a),`

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
  float minBodyLengthRatio = `).concat(de(x),`;

  // Thickness in WebGL units (needed to compute clamping margin and extremity lengths)
  float pixelsThickness = max(a_thickness, u_minEdgeThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // SDF clamping: find where the edge body meets the node boundaries. Always
  // searched (ungated) so labels get a true boundary clamp; the body re-applies
  // its extremity gating in-shader.
`).concat(h,`
  float tStart = queryFindSourceClampT(pathId, a_source, a_sourceSize, int(a_sourceShapeId), a_sourceRotateAlign, a_target, 0.0);
`).concat(m,`
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
`).concat(h,`
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
`).concat(m,`
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
`);return _}var ea=0,qi=1,ta=2;function Su(a,n,e){var t=[];e&&(t.push([ea,0,-1],[ea,0,1]),t.push([ea,1,-1],[ea,1,1]));for(var r=0;r<=a;r++){var i=r/a;t.push([qi,i,-1],[qi,i,1])}return n&&(t.push([ta,0,-1],[ta,0,1]),t.push([ta,1,-1],[ta,1,1])),{data:t,attributes:[{name:"a_zone",size:1,type:dn},{name:"a_zoneT",size:1,type:dn},{name:"a_side",size:1,type:dn}],verticesPerEdge:t.length}}function Au(a,n,e,t){var r=Re([].concat(j(a),j(e))),i=fn(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture"]),l=new Set,s=[],d=function(p){!o.has(p.name)&&!l.has(p.name)&&(l.add(p.name),s.push("uniform ".concat(p.type," ").concat(p.name,";")))};a.forEach(function(v){return v.uniforms.forEach(d)}),n.forEach(function(v){return v.uniforms.forEach(d)}),e.forEach(function(v){return v.uniforms.forEach(d)});var u=t.map(function(v){var p=v.size===1?"float":"vec".concat(v.size);return"in ".concat(p," ").concat(v.name,";")}).join(`
`),c=n.map(function(v){return de(v.widthFactor)}).join(", "),f=Math.max.apply(Math,j(a.map(function(v){return v.minBodyLengthRatio||0}))),g=e.some(function(v){return v.needsNodeColors}),h=a.some(function(v){return v.needsNodeSize}),m=`#version 300 es

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
`).concat(s.join(`
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
`).concat(h?`
out float v_sourceNodeSize;  // Source node size (mirrored in labels/generator.ts as plain float)
out float v_targetNodeSize;  // Target node size (mirrored in labels/generator.ts as plain float)`:"",`
`).concat(g?`
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
`).concat(ur(a),`

// Path selector functions
`).concat(cr(a),`

// Node-data fetch helper (geometry texel of the two-texel node stride)
`).concat(ze,`
`).concat(g?so:"",`
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
`).concat(ft,`

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
`).concat(h?`
  // Assign node size varyings early (path functions like loops need them during clamping)
  v_sourceNodeSize = srcNodeData.z;
  v_targetNodeSize = tgtNodeData.z;`:"",`
`).concat(g?`
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
  float minBodyLengthRatio = `).concat(de(f),`;

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
`);return m}function Ru(a,n,e,t){var r=Re([].concat(j(a),j(e))),i=fn(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding"]),l=new Set,s=[],d=function(b){!o.has(b.name)&&!l.has(b.name)&&(l.add(b.name),s.push("uniform ".concat(b.type," ").concat(b.name,";")))};a.forEach(function(p){return p.uniforms.forEach(d)}),n.forEach(function(p){return p.uniforms.forEach(d)}),e.forEach(function(p){return p.uniforms.forEach(d)});var u=n.map(function(p){var b;return de((b=p.baseRatio)!==null&&b!==void 0?b:.5)}).join(", "),c=function(b){var y,x;return n.length>1?"EXTREMITY_BASE_RATIOS[".concat(b,"]"):de((y=(x=n[0])===null||x===void 0?void 0:x.baseRatio)!==null&&y!==void 0?y:.5)},f=n.some(function(p){return Pe(p.length)?!0:p.length>0}),g=e.some(function(p){return p.needsNodeColors}),h=a.some(function(p){return p.needsNodeSize}),m=e.map(function(p,b){return"  // Layer ".concat(b+1,": ").concat(p.name,`
  color = blendOver(color, layer_`).concat(p.name,"(context));")}).join(`

`),v=`#version 300 es
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
`.concat(h?`
in float v_sourceNodeSize;   // Source node size (mirrored in labels/generator.ts as plain float)
in float v_targetNodeSize;   // Target node size (mirrored in labels/generator.ts as plain float)`:"",`
`).concat(g?`
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
`).concat(s.join(`
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
`).concat(ur(a),`

// Path selector functions
`).concat(cr(a),`

// All extremity functions
`).concat(bu(n),`

// Extremity SDF selector (shared pool for head/tail)
`).concat(_u(n),`

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

`).concat(m,`

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`);return v}function wu(a,n,e){var t=Pe(n.length)?!0:n.length>0,r=Pe(e.length)?!0:e.length>0;if(a.generateConstantData){var i=a.generateConstantData();return{data:i.data,attributes:i.attributes,verticesPerEdge:i.verticesPerEdge}}return Su(a.segments,t,r)}function tr(a){var n,e=Lo(a),t=e.paths,r=e.extremities,i=e.layers,o=(n=a.antialias)!==null&&n!==void 0?n:!0,l=new Map,s=new Map,d=new Map,u=z(t),c;try{for(u.s();!(c=u.n()).done;){var f=c.value,g=z(r),h;try{for(g.s();!(h=g.n()).done;){var m=h.value,v=z(r),p;try{for(v.s();!(p=v.n()).done;){var b=p.value,y="".concat(f.name,":").concat(m.name,":").concat(b.name),x=wu(f,m,b);l.set(y,x.verticesPerEdge),s.set(y,x.data);var _=z(x.attributes),T;try{for(_.s();!(T=_.n()).done;){var R=T.value;d.has(R.name)||d.set(R.name,R)}}catch(K){_.e(K)}finally{_.f()}}}catch(K){v.e(K)}finally{v.f()}}}catch(K){g.e(K)}finally{g.f()}}}catch(K){u.e(K)}finally{u.f()}var S=Array.from(d.values()),A={};S.forEach(function(K,te){A[K.name]=te});var C=0,P="",w=z(l),I;try{for(w.s();!(I=w.n()).done;){var L=ne(I.value,2),k=L[0],N=L[1];N>C&&(C=N,P=k)}}catch(K){w.e(K)}finally{w.f()}var M=s.get(P)||[],F=P.split(":"),D=ne(F,1),G=D[0],H=t.find(function(K){return K.name===G}),U=[];H!=null&&H.generateConstantData?U=H.generateConstantData().attributes:U=[{name:"a_zone"},{name:"a_zoneT"},{name:"a_side"}];var $=M.map(function(K){var te=new Array(S.length).fill(0);return U.forEach(function(ue,xe){var Ce=A[ue.name];Ce!==void 0&&xe<K.length&&(te[Ce]=K[xe])}),te});return{vertexShader:Au(t,r,i,S),fragmentShader:Ru(t,r,i,o),uniforms:mu(t,r,i),attributes:Du(),verticesPerEdge:C,constantData:$,constantAttributes:S,vertexCountsPerCombination:l,constantDataPerCombination:s}}function Du(a,n,e){return[{name:"a_edgeIndex",size:1,type:dn},{name:"a_color",size:4,type:ji,normalized:!0},{name:"a_id",size:4,type:ji,normalized:!0},{name:"a_opacity",size:1,type:dn}]}var Lu=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,ko=(function(){function a(n,e){Z(this,a),E(this,"uniformLocations",{});var t=e.paths,r=e.extremities,i=e.layers,o=e.nodeShapes,l=e.nodeLayers;this.gl=n,this.hasAttributeData=Re([].concat(j(t),j(i))).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(zt(o,l).offsets).length>0,this.vertexShader=ra(n,Eu(t,r,i,o,l)),this.fragmentShader=ia(n,Lu),this.program=oa(n,[this.vertexShader,this.fragmentShader]);var s=new Set;this.customUniforms=[];for(var d=0,u=[].concat(j(t),j(r));d<u.length;d++){var c=u[d],f=z(c.uniforms),g;try{for(f.s();!(g=f.n()).done;){var h=g.value;s.has(h.name)||(s.add(h.name),this.customUniforms.push(h))}}catch(y){f.e(y)}finally{f.f()}}var m=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_minEdgeThickness","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode","u_frameTextureWidth","u_frameTextureHeight"].concat(j(this.customUniforms.map(function(y){return y.name}))),v=z(m),p;try{for(v.s();!(p=v.n()).done;){var b=p.value;this.uniformLocations[b]=n.getUniformLocation(this.program,b)}}catch(y){v.e(y)}finally{v.f()}this.vao=n.createVertexArray()}return Q(a,[{key:"run",value:function(e,t,r,i,o){if(r!==0){var l=this.gl,s=this.uniformLocations;l.useProgram(this.program),l.bindVertexArray(this.vao),s.u_sizeRatio&&l.uniform1f(s.u_sizeRatio,e.sizeRatio),s.u_correctionRatio&&l.uniform1f(s.u_correctionRatio,e.correctionRatio),s.u_cameraAngle&&l.uniform1f(s.u_cameraAngle,e.cameraAngle),s.u_minEdgeThickness&&l.uniform1f(s.u_minEdgeThickness,e.minEdgeThickness),s.u_nodeDataTexture&&l.uniform1i(s.u_nodeDataTexture,e.nodeDataTextureUnit),s.u_nodeDataTextureWidth&&l.uniform1i(s.u_nodeDataTextureWidth,e.nodeDataTextureWidth),s.u_edgeDataTexture&&l.uniform1i(s.u_edgeDataTexture,e.edgeDataTextureUnit),s.u_edgeDataTextureWidth&&l.uniform1i(s.u_edgeDataTextureWidth,e.edgeDataTextureWidth),s.u_frameTextureWidth&&l.uniform1f(s.u_frameTextureWidth,t.getTextureWidth()),s.u_frameTextureHeight&&l.uniform1f(s.u_frameTextureHeight,t.getTextureHeight()),this.hasAttributeData&&i&&(i.bind(et),s.u_edgeAttributeTexture&&l.uniform1i(s.u_edgeAttributeTexture,et),s.u_edgeAttributeTextureWidth&&l.uniform1i(s.u_edgeAttributeTextureWidth,i.getTextureWidth()),s.u_edgeAttributeTexelsPerEdge&&l.uniform1i(s.u_edgeAttributeTexelsPerEdge,i.getTexelsPerItem())),this.hasNodeAttributeData&&o&&(o.bind(Qe),s.u_layerAttributeTexture&&l.uniform1i(s.u_layerAttributeTexture,Qe),s.u_layerAttributeTextureWidth&&l.uniform1i(s.u_layerAttributeTextureWidth,o.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&l.uniform1i(s.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var d=z(this.customUniforms),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;or(l,this.uniformLocations[c.name],c)}}catch(f){d.e(f)}finally{d.f()}t.bindAsRenderTarget(),l.disable(l.BLEND),l.disable(l.DEPTH_TEST),l.drawArrays(l.POINTS,0,r),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindVertexArray(null)}}},{key:"kill",value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteVertexArray(this.vao)}}])})();function sn(a,n,e,t,r,i){if(a.length===1)return"".concat(t," ").concat(n,"(int pathId, ").concat(r,`) {
  return path_`).concat(a[0].name,"_").concat(e,"(").concat(i,`);
}`);var o=a.map(function(l,s){return"    case ".concat(s,": return path_").concat(l.name,"_").concat(e,"(").concat(i,");")}).join(`
`);return"".concat(t," ").concat(n,"(int pathId, ").concat(r,`) {
  switch (pathId) {
`).concat(o,`
    default: return path_`).concat(a[0].name,"_").concat(e,"(").concat(i,`);
  }
}`)}var Cu=`
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
`;function ku(a,n){var e=de(a),t=de(n);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < `.concat(e,`) return 0.0;
  if (ratio < `).concat(t,") return (ratio - ").concat(e,") / (").concat(t," - ").concat(e,`);
  return 1.0;
}
`)}var Pu=`
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
`;function Po(a){var n=a.paths,e=a.minVisibilityThreshold,t=a.fullVisibilityThreshold,r=n.some(function(l){return l.hasSharpCorners}),i=n.map(function(l){return"// --- Path: ".concat(l.name,` ---
`).concat(l.glsl,`

// Tangent/normal functions: analytical if provided, otherwise numerical
`).concat(l.analyticalTangentGlsl||wo(l.name),`

// Auto-generated fallbacks for any missing path functions
`).concat(Do(l.name,l.glsl),`

// Corner skip helpers (for paths with sharp corners like step/taxi)
`).concat(l.cornerSkipGlsl||"",`
`)}).join(`
`),o=r?`// Corner function selectors (only some paths have sharp corners)
vec2 queryGetCornerTs(int pathId, vec2 source, vec2 target) {
  switch (pathId) {
`.concat(n.map(function(l,s){return l.hasSharpCorners?"    case ".concat(s,": return path_").concat(l.name,"_getCornerTs(source, target);"):"    case ".concat(s,": return vec2(-1.0, -1.0); // No corners for ").concat(l.name)}).join(`
`),`
    default: return vec2(-1.0, -1.0);
  }
}

vec2 queryGetCornerConcavity(int pathId, vec2 source, vec2 target, float perpOffset) {
  switch (pathId) {
`).concat(n.map(function(l,s){return l.hasSharpCorners?"    case ".concat(s,": return path_").concat(l.name,"_getCornerConcavity(source, target, perpOffset);"):"    case ".concat(s,": return vec2(0.0, 0.0); // No corners for ").concat(l.name)}).join(`
`),`
    default: return vec2(0.0, 0.0);
  }
}`):"";return`
// ============================================================================
// Node data fetch (geometry texel) and per-edge clamp fetch (edge-frame texture)
// ============================================================================

`.concat(ze,`
`).concat(ft,`

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

`).concat(i,`

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

`).concat(sn(n,"queryPathPosition","position","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(sn(n,"queryPathTangent","tangent","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(sn(n,"queryPathNormal","normal","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(sn(n,"queryPathLength","length","float","vec2 source, vec2 target","source, target"),`

`).concat(sn(n,"queryPathTAtDistance","t_at_distance","float","float dist, vec2 source, vec2 target","dist, source, target"),`

`).concat(o,`

// ============================================================================
// Shared helpers (body bounds, alpha ramp, perpendicular offset)
// ============================================================================

`).concat(Cu,`
`).concat(ku(e,t),`
`).concat(Pu,`
`)}var Fu=Me.fontSize,Iu=new Map,Fo=24,Xi=(Fo+1)*2;function Nu(a){var n=a.paths,e=a.fontSizeMode,t=a.headLengthRatio,r=a.tailLengthRatio,i=a.minVisibilityThreshold,o=a.fullVisibilityThreshold,l=e==="scaled",s=Ge(),d=Re([].concat(j(n),[s])),u=fn(d),c=`#version 300 es

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
`.concat(l?"uniform float u_zoomSizeRatio;":"",`

`).concat(u.uniformDeclarations,`

out vec4 v_color;
out vec4 v_id;
out float v_alphaModifier;

const float ATLAS_FONT_SIZE = `).concat(de(Fu),`;
const float HEAD_RATIO = `).concat(de(t),`;
const float TAIL_RATIO = `).concat(de(r),`;
const int RIBBON_SEGMENTS = `).concat(Fo,`;

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
`).concat(u.vertexVaryingDeclarations.replace(/out /g,""),`

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
`).concat(Po({paths:n,minVisibilityThreshold:i,fullVisibilityThreshold:o}),`

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
  `).concat(l?`float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
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
`);return c}var Gu=`#version 300 es
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
`;function Io(a,n,e,t){var r=t.shaderConfig,i=r.paths,o=r.fontSizeMode;if(i.length===0)throw new Error("createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path");var l=Ge(),s=Re([].concat(j(i),[l])),d=ca([].concat(j(i),[l]),s),u=Nu(r),c=(function(f){function g(h,m,v){var p;return Z(this,g),p=se(this,g,[h,m,v]),E(p,"totalCount",0),E(p,"bufferCapacity",0),E(p,"edgeAttributeTexture",null),p.edgeAttributeTexture=new ua(h,s),p.packedAttributeData=new Float32Array(s.floatsPerItem),p}return le(g,f),Q(g,[{key:"getDefinition",value:function(){for(var m=WebGL2RenderingContext,v=m.FLOAT,p=m.UNSIGNED_BYTE,b=m.TRIANGLE_STRIP,y=[],x=0;x<Xi;x++)y.push([x]);var _=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_resolution","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth"];return o==="scaled"&&_.push("u_zoomSizeRatio"),s.floatsPerItem>0&&_.push("u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"),{VERTICES:Xi,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:Gu,METHOD:b,UNIFORMS:_,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:v},{name:"a_edgeAttrIndex",size:1,type:v},{name:"a_baseFontSize",size:1,type:v},{name:"a_totalTextWidth",size:1,type:v},{name:"a_positionMode",size:1,type:v},{name:"a_margin",size:1,type:v},{name:"a_padding",size:1,type:v},{name:"a_color",size:4,type:p,normalized:!0},{name:"a_id",size:4,type:p,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_vertexIndex",size:1,type:v}],CONSTANT_DATA:y}}},{key:"processEdgeLabelBackground",value:function(m,v,p){var b=0;if(this.edgeAttributeTexture&&s.floatsPerItem>0){b=this.edgeAttributeTexture.allocate(v);var y=this.packedAttributeData;ha(d,p.edgeAttributes,y,"",Iu,0),this.edgeAttributeTexture.updateAllAttributes(v,y)}var x=this.floats,_=this.ints,T=m*this.STRIDE;x[T++]=p.edgeIndex,x[T++]=b,x[T++]=p.baseFontSize,x[T++]=p.totalTextWidth,x[T++]=p.positionMode,x[T++]=p.margin,x[T++]=p.padding,x[T++]=p.color,_[T++]=p.id}},{key:"setUniforms",value:function(m,v){var p=v.gl,b=v.uniformLocations;if(p.uniformMatrix3fv(b.u_matrix,!1,m.matrix),p.uniform1f(b.u_sizeRatio,m.sizeRatio),p.uniform1f(b.u_correctionRatio,m.correctionRatio),p.uniform1f(b.u_pixelRatio,m.pixelRatio),p.uniform1f(b.u_cameraAngle,m.cameraAngle),p.uniform2f(b.u_resolution,m.width,m.height),b.u_nodeDataTexture!==void 0&&p.uniform1i(b.u_nodeDataTexture,m.nodeDataTextureUnit),b.u_nodeDataTextureWidth!==void 0&&p.uniform1i(b.u_nodeDataTextureWidth,m.nodeDataTextureWidth),b.u_edgeDataTexture!==void 0&&p.uniform1i(b.u_edgeDataTexture,m.edgeDataTextureUnit),b.u_edgeDataTextureWidth!==void 0&&p.uniform1i(b.u_edgeDataTextureWidth,m.edgeDataTextureWidth),b.u_edgeFrameTexture!==void 0&&p.uniform1i(b.u_edgeFrameTexture,m.edgeFrameTextureUnit),b.u_edgeFrameTextureWidth!==void 0&&p.uniform1i(b.u_edgeFrameTextureWidth,m.edgeFrameTextureWidth),o==="scaled"&&b.u_zoomSizeRatio!==void 0){var y=this.renderer.getSetting("zoomToSizeRatioFunction");p.uniform1f(b.u_zoomSizeRatio,1/y(m.zoomRatio))}this.edgeAttributeTexture&&s.floatsPerItem>0&&b.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(et),p.uniform1i(b.u_edgeAttributeTexture,et),p.uniform1i(b.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),p.uniform1i(b.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}},{key:"renderProgram",value:function(m,v){this.edgeAttributeTexture&&s.floatsPerItem>0&&this.edgeAttributeTexture.upload(),he(g,"renderProgram",this,3)([m,v])}},{key:"kill",value:function(){this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),he(g,"kill",this,3)([])}},{key:"drawWebGL",value:function(m,v){var p=v.gl;this.totalCount!==0&&p.drawArraysInstanced(p.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(m){this.totalCount=m,m>this.bufferCapacity&&(this.bufferCapacity=Math.max(m,Math.ceil(this.bufferCapacity*1.5)||10),he(g,"reallocate",this,3)([this.bufferCapacity]))}}])})(nt);return new c(a,n,e)}function No(a){var n,e,t,r,i;return{paths:a.paths,headLengthRatio:(n=a.headLengthRatio)!==null&&n!==void 0?n:0,tailLengthRatio:(e=a.tailLengthRatio)!==null&&e!==void 0?e:0,fontSizeMode:(t=a.fontSizeMode)!==null&&t!==void 0?t:"fixed",minVisibilityThreshold:(r=a.minVisibilityThreshold)!==null&&r!==void 0?r:.7,fullVisibilityThreshold:(i=a.fullVisibilityThreshold)!==null&&i!==void 0?i:.8}}var Mu=Me.fontSize,zu=17/64;function Ou(a){var n=a.paths,e=a.hasBorder,t=e===void 0?!1:e,r=a.fontSizeMode,i=r===void 0?"fixed":r,o=a.minVisibilityThreshold,l=o===void 0?.5:o,s=a.fullVisibilityThreshold,d=s===void 0?.6:s,u=i==="scaled",c=n.some(function(v){return v.hasSharpCorners}),f=Ge(),g=Re([].concat(j(n),[f])),h=fn(g),m=`#version 300 es

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
`).concat(h.uniformDeclarations,`

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
const float ATLAS_FONT_SIZE = `).concat(de(Mu),`;  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = `).concat(de(zu),`;  // Baseline to visual center ratio

// ============================================================================
// Path Attribute Variables (set in main, used by path functions)
// ============================================================================
// Path attributes are fetched from the edge attribute texture and stored in
// variables with v_ prefix (e.g., v_curvature) for path functions to access.
`).concat(h.vertexVaryingDeclarations.replace(/out /g,""),`

// Node size variables (set in main, used by some path functions like loops).
// These mirror the v_sourceNodeSize / v_targetNodeSize varyings in generator.ts,
// but are plain floats here since the label shader is vertex-only.
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
`).concat(Po({paths:n,minVisibilityThreshold:l,fullVisibilityThreshold:d}),`

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
`).concat(h.fetchCode,`
`).concat(h.varyingAssignments,`
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
`);return m}function Bu(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.hasBorder,e=n===void 0?!1:n,t=`#version 300 es
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
`);return t}function Wu(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"fixed",t=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_sdfBufferPixels","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"];e==="scaled"&&t.push("u_zoomSizeRatio"),n&&t.push("u_borderWidth");var r=z(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,l=z(o.uniforms),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;t.includes(d.name)||t.push(d.name)}}catch(u){l.e(u)}finally{l.f()}}}catch(u){r.e(u)}finally{r.f()}return t}function Go(a){var n=a.hasBorder,e=n===void 0?!1:n,t=a.fontSizeMode,r=t===void 0?"fixed":t;return{vertexShader:Ou(a),fragmentShader:Bu({hasBorder:e}),uniforms:Wu(a.paths,e,r)}}var Uu=new Map;function Hu(a){switch(a){case"over":return 0;case"above":return 1;case"below":return 2;case"auto":return 3;default:return 0}}function Mo(a,n,e,t){var r=t.color,i=t.margin,o=t.textBorder,l=No(t),s=l.paths,d=l.fontSizeMode,u=l.minVisibilityThreshold,c=l.fullVisibilityThreshold,f=!!o,g=Go({paths:s,hasBorder:f,fontSizeMode:d,minVisibilityThreshold:u,fullVisibilityThreshold:c}),h=(function(m){function v(p,b,y){var x;Z(this,v),x=se(this,v,[p,b,y]),E(x,"atlasTexture",null),E(x,"atlasNeedsUpdate",!1),E(x,"labelGlyphCache",new Map),E(x,"edgeAttributeTexture",null);var _=Ge();if(x.attributeLayout=Re([].concat(j(s),[_])),x.attrDescriptors=ca([].concat(j(s),[_]),x.attributeLayout),x.edgeAttributeTexture=new ua(p,x.attributeLayout),x.packedAttributeData=new Float32Array(x.attributeLayout.floatsPerItem),x.atlasManager=new Je,x.gamma=.025,x.sdfBuffer=Me.cutoff,x.atlasTexture=p.createTexture(),!x.atlasTexture)throw new Error("EdgeLabelProgram: failed to create atlas texture");p.bindTexture(p.TEXTURE_2D,x.atlasTexture),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.LINEAR),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.LINEAR),p.bindTexture(p.TEXTURE_2D,null),x.atlasManager.on(Je.ATLAS_UPDATED_EVENT,function(){x.atlasNeedsUpdate=!0,setTimeout(function(){return x.renderer.refresh()},0)});var T={family:"sans-serif",weight:"normal",style:"normal"};return x.defaultFontKey=x.atlasManager.registerFont(T),x}return le(v,m),Q(v,[{key:"getDefinition",value:function(){var b=WebGL2RenderingContext,y=b.FLOAT,x=b.UNSIGNED_BYTE,_=b.TRIANGLE_STRIP,T=new Set,R=[],S=z(s),A;try{for(S.s();!(A=S.n()).done;){var C=A.value,P=z(C.attributes),w;try{for(P.s();!(w=P.n()).done;){var I=w.value,L=I.name.startsWith("a_")?I.name:"a_".concat(I.name);T.has(L)||(T.add(L),R.push({name:L,size:I.size,type:I.type}))}}catch(k){P.e(k)}finally{P.f()}}}catch(k){S.e(k)}finally{S.f()}return{VERTICES:4,VERTEX_SHADER_SOURCE:g.vertexShader,FRAGMENT_SHADER_SOURCE:g.fragmentShader,METHOD:_,UNIFORMS:g.uniforms,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:y},{name:"a_edgeAttrIndex",size:1,type:y},{name:"a_baseFontSize",size:1,type:y},{name:"a_charMetrics",size:4,type:y},{name:"a_charDims",size:4,type:y},{name:"a_texCoords",size:4,type:y},{name:"a_labelParams",size:2,type:y},{name:"a_color",size:4,type:x,normalized:!0}].concat(j(f?[{name:"a_borderColor",size:4,type:x,normalized:!0}]:[]),j(R.filter(function(k){return!["a_curvature","curvature"].includes(k.name)}))),CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:y}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(b,y){if(y.hidden||!y.text){this.labelGlyphCache.delete(b);return}var x=y.text,_=y.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(x,_);var T=[],R=[],S=0,A=z(x),C;try{for(A.s();!(C=A.n()).done;){var P=C.value,w=P.codePointAt(0);if(w===void 0){T.push(void 0),R.push(S);continue}var I=this.atlasManager.getGlyph(w,_);T.push(I),R.push(S),I&&(S+=I.advance)}}catch(L){A.e(L)}finally{A.f()}this.labelGlyphCache.set(b,{glyphs:T,xOffsets:R,totalWidth:S})}},{key:"processCharacter",value:function(b,y,x,_){var T,R,S,A=this.floats,C=this.STRIDE,P=b*C,w=this.labelGlyphCache.get(y.parentKey);if(!w||!w.glyphs[_]){for(var I=0;I<C;I++)A[P+I]=0;return}var L=w.glyphs[_],k=w.xOffsets[_],N=v.labelColor,M=N&&J(N)==="object"&&"color"in N&&N.color?N.color:y.color,F=Se(M),D=P;A[D++]=y.edgeIndex,A[D++]=(T=(R=this.edgeAttributeTexture)===null||R===void 0?void 0:R.getIndex(y.parentKey))!==null&&T!==void 0?T:0,A[D++]=y.size,A[D++]=k,A[D++]=L.advance,A[D++]=w.totalWidth,A[D++]=Hu(y.position),A[D++]=L.atlasWidth,A[D++]=L.atlasHeight,A[D++]=L.bearingX,A[D++]=-L.bearingY,A[D++]=L.atlasX,A[D++]=L.atlasY,A[D++]=L.atlasWidth,A[D++]=L.atlasHeight;var G=(S=v.labelMargin)!==null&&S!==void 0?S:y.margin;if(A[D++]=G,A[D++]=0,A[D++]=F,f&&o){var H;typeof o.color=="string"?H=o.color:H=o.color.color||"#ffffff",A[D++]=Se(H)}var U=new Set,$=z(s),K;try{for($.s();!(K=$.n()).done;){var te=K.value,ue=z(te.attributes),xe;try{for(ue.s();!(xe=ue.n()).done;){var Ce=xe.value,qt=Ce.name.startsWith("a_")?Ce.name.slice(2):Ce.name;if(qt!=="curvature"&&!U.has(qt)){U.add(qt);for(var An=0;An<Ce.size;An++)A[D++]=0}}}catch(xt){ue.e(xt)}finally{ue.f()}}}catch(xt){$.e(xt)}finally{$.f()}}},{key:"processEdgeLabel",value:function(b,y,x){if(this.prepareLabelGlyphs(b,x),this.edgeAttributeTexture&&!x.hidden&&x.text){this.edgeAttributeTexture.allocate(b);var _=this.packedAttributeData;ha(this.attrDescriptors,x.edgeAttributes,_,"",Uu,0),this.edgeAttributeTexture.updateAllAttributes(b,_)}return he(v,"processLabel",this,3)([b,y,x])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var b=this.normalProgram.gl,y=this.atlasManager.getTextures();if(y.length!==0){var x=y[0];b.bindTexture(b.TEXTURE_2D,this.atlasTexture),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,x.width,x.height,0,b.RGBA,b.UNSIGNED_BYTE,x.data),b.bindTexture(b.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(b,y){var x=y.gl,_=y.uniformLocations,T=this.atlasManager.getTextures(),R=T.length>0?[T[0].width,T[0].height]:[1,1];if(x.uniformMatrix3fv(_.u_matrix,!1,b.matrix),x.uniform1f(_.u_sizeRatio,b.sizeRatio),x.uniform1f(_.u_correctionRatio,b.correctionRatio),x.uniform1f(_.u_pixelRatio,b.pixelRatio),x.uniform1f(_.u_cameraAngle,b.cameraAngle),x.uniform1f(_.u_sdfBufferPixels,Me.buffer),x.uniform2f(_.u_resolution,b.width,b.height),x.uniform2f(_.u_atlasSize,R[0],R[1]),x.uniform1f(_.u_gamma,this.gamma),x.uniform1f(_.u_sdfBuffer,this.sdfBuffer),x.activeTexture(x.TEXTURE0),x.bindTexture(x.TEXTURE_2D,this.atlasTexture),x.uniform1i(_.u_atlas,0),_.u_nodeDataTexture!==void 0&&x.uniform1i(_.u_nodeDataTexture,b.nodeDataTextureUnit),_.u_nodeDataTextureWidth!==void 0&&x.uniform1i(_.u_nodeDataTextureWidth,b.nodeDataTextureWidth),_.u_edgeDataTexture!==void 0&&x.uniform1i(_.u_edgeDataTexture,b.edgeDataTextureUnit),_.u_edgeDataTextureWidth!==void 0&&x.uniform1i(_.u_edgeDataTextureWidth,b.edgeDataTextureWidth),_.u_edgeFrameTexture!==void 0&&x.uniform1i(_.u_edgeFrameTexture,b.edgeFrameTextureUnit),_.u_edgeFrameTextureWidth!==void 0&&x.uniform1i(_.u_edgeFrameTextureWidth,b.edgeFrameTextureWidth),f&&o&&_.u_borderWidth!==void 0){var S=o.width/Me.buffer*this.sdfBuffer;x.uniform1f(_.u_borderWidth,S)}if(this.edgeAttributeTexture&&_.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(et),x.uniform1i(_.u_edgeAttributeTexture,et),x.uniform1i(_.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),x.uniform1i(_.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),d==="scaled"&&_.u_zoomSizeRatio!==void 0){var A=this.renderer.getSetting("zoomToSizeRatioFunction"),C=1/A(b.zoomRatio);x.uniform1f(_.u_zoomSizeRatio,C)}}},{key:"renderProgram",value:function(b,y){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),he(v,"renderProgram",this,3)([b,y])}},{key:"registerFont",value:function(b){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:b,weight:y,style:x})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"ensureGlyphsReady",value:function(b,y){var x=y||this.defaultFontKey,_=z(b),T;try{for(_.s();!(T=_.n()).done;){var R=T.value;this.atlasManager.ensureGlyphs(R,x)}}catch(S){_.e(S)}finally{_.f()}this.atlasManager.flush()}},{key:"measureLabelAtlasWidth",value:function(b,y){var x=y||this.defaultFontKey;this.atlasManager.ensureGlyphs(b,x),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var _=0,T=z(b),R;try{for(T.s();!(R=T.n()).done;){var S=R.value,A=S.codePointAt(0);if(A!==void 0){var C=this.atlasManager.getGlyph(A,x);C&&(_+=C.advance)}}}catch(P){T.e(P)}finally{T.f()}return _}},{key:"measureLabel",value:function(b,y,x){var _=this.measureLabelAtlasWidth(b,x),T=y/Me.fontSize;return{width:_*T,height:y,textHeight:y}}},{key:"kill",value:function(){var b=this.normalProgram.gl;this.atlasTexture&&(b.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),he(v,"kill",this,3)([])}}])})(sr);return E(h,"labelColor",r),E(h,"labelMargin",i),new h(a,n,e)}function $u(){var a=`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`;return{name:"none",glsl:a,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function hr(a,n,e,t,r,i,o){var l,s,d=Lo(t),u=d.paths,c=d.layers,f=d.defaultHead,g=d.defaultTail,h=[$u()].concat(j(d.extremities)),m={},v={};u.forEach(function(I,L){return m[I.name]=L}),h.forEach(function(I,L){return v[I.name]=L});var p=(l=v[f])!==null&&l!==void 0?l:0,b=(s=v[g])!==null&&s!==void 0?s:0,y=null,x=Re([].concat(j(u),j(c))),_=(function(I){function L(k,N,M){var F;Z(this,L),y||(y=tr({paths:u,extremities:h,layers:c,antialias:r})),F=se(this,L,[k,N,M]),E(F,"layerLifecycles",new Map),E(F,"needsShaderRegeneration",!1),E(F,"edgeAttributeTexture",null),E(F,"layout",x),E(F,"attrDescriptors",[]),E(F,"lifecycleIndexOffset",u.length),F._pickingBuffer=N,F.edgeAttributeTexture=new ua(k,F.layout),F.packedAttributeData=new Float32Array(F.layout.floatsPerItem),c.forEach(function(G,H){if(G.lifecycle){var U={gl:k,renderer:{refresh:function(){return M.refresh()}},getUniformLocation:function(K){return k.getUniformLocation(F.normalProgram.program,K)},requestShaderRegeneration:function(){F.needsShaderRegeneration=!0},requestRefresh:function(){M.refresh()}};F.layerLifecycles.set(H,G.lifecycle(U))}}),F.layerLifecycles.forEach(function(G){var H;return(H=G.init)===null||H===void 0?void 0:H.call(G)});var D=new Map;return F.layerLifecycles.forEach(function(G,H){G.getAttributeData&&D.set(u.length+H,G)}),F.attrDescriptors=ca([].concat(j(u),j(c)),F.layout,D),F}return le(L,I),Q(L,[{key:"getAttributeTexture",value:function(){return this.edgeAttributeTexture}},{key:"resolveEdgeIds",value:function(N,M,F){var D=N,G=0,H=p,U=b,$=M?D.selfLoopPath:F&&D.parallelPath?D.parallelPath:D.path;$&&m[$]!==void 0&&(G=m[$]),D.head&&D.head!=="none"&&v[D.head]!==void 0&&(H=v[D.head]),D.tail&&D.tail!=="none"&&v[D.tail]!==void 0&&(U=v[D.tail]);var K=h[H],te=h[U];return{pathId:G,headId:H,tailId:U,headLengthRatio:Pe(K.length)?0:K.length,tailLengthRatio:Pe(te.length)?0:te.length}}},{key:"getDefinition",value:function(){var N=WebGL2RenderingContext,M=N.TRIANGLE_STRIP,F=M,D=y;return{VERTICES:D.verticesPerEdge,VERTEX_SHADER_SOURCE:D.vertexShader,FRAGMENT_SHADER_SOURCE:D.fragmentShader,METHOD:F,UNIFORMS:D.uniforms,ATTRIBUTES:D.attributes,CONSTANT_ATTRIBUTES:D.constantAttributes,CONSTANT_DATA:D.constantData}}},{key:"maybeRegenerateShaders",value:function(){var N=this;if(this.needsShaderRegeneration){this.needsShaderRegeneration=!1;var M=c.map(function(K,te){var ue=N.layerLifecycles.get(te);return ue!=null&&ue.regenerate?ue.regenerate():K});y=tr({paths:u,extremities:h,layers:M,antialias:this.renderer.getSetting("antialiasEdges")});var F=this.normalProgram.gl,D=this.normalProgram,G=D.program,H=D.buffer,U=D.vertexShader,$=D.fragmentShader;F.deleteProgram(G),F.deleteBuffer(H),F.deleteShader(U),F.deleteShader($),this.normalProgram=this.getProgramInfo("normal",F,y.vertexShader,y.fragmentShader,this._pickingBuffer)}}},{key:"process",value:function(N,M,F,D,G,H){var U=M*this.STRIDE;if(G.visibility==="hidden"||F.visibility==="hidden"||D.visibility==="hidden"){for(var $=U+this.STRIDE;U<$;U++)this.floats[U]=0;this.floats[M*this.STRIDE]=uo;return}this.processVisibleItem(Lt(N),U,F,D,G,H)}},{key:"processVisibleItem",value:function(N,M,F,D,G,H){var U,$=this.floats,K=this.ints;$[M++]=H,$[M++]=Se(G.color),K[M++]=N,$[M++]=(U=G.opacity)!==null&&U!==void 0?U:1;var te=this.packedAttributeData;ha(this.attrDescriptors,G,te,G.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(H,te)}},{key:"setUniforms",value:function(N,M){var F=this,D=M.gl,G=M.uniformLocations;G.u_matrix&&D.uniformMatrix3fv(G.u_matrix,!1,N.matrix),G.u_sizeRatio&&D.uniform1f(G.u_sizeRatio,N.sizeRatio),G.u_correctionRatio&&D.uniform1f(G.u_correctionRatio,N.correctionRatio),G.u_zoomRatio&&D.uniform1f(G.u_zoomRatio,N.zoomRatio),G.u_pixelRatio&&D.uniform1f(G.u_pixelRatio,N.pixelRatio),G.u_cameraAngle&&D.uniform1f(G.u_cameraAngle,N.cameraAngle),G.u_feather&&D.uniform1f(G.u_feather,N.antiAliasingFeather),G.u_minEdgeThickness&&D.uniform1f(G.u_minEdgeThickness,N.minEdgeThickness),G.u_pickingPadding&&D.uniform1f(G.u_pickingPadding,N.edgePickingPadding),G.u_nodeDataTexture&&D.uniform1i(G.u_nodeDataTexture,N.nodeDataTextureUnit),G.u_nodeDataTextureWidth&&D.uniform1i(G.u_nodeDataTextureWidth,N.nodeDataTextureWidth),G.u_edgeDataTexture&&D.uniform1i(G.u_edgeDataTexture,N.edgeDataTextureUnit),G.u_edgeDataTextureWidth&&D.uniform1i(G.u_edgeDataTextureWidth,N.edgeDataTextureWidth),G.u_edgeFrameTexture&&D.uniform1i(G.u_edgeFrameTexture,N.edgeFrameTextureUnit),G.u_edgeFrameTextureWidth&&D.uniform1i(G.u_edgeFrameTextureWidth,N.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(et),G.u_edgeAttributeTexture&&D.uniform1i(G.u_edgeAttributeTexture,et),G.u_edgeAttributeTextureWidth&&D.uniform1i(G.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),G.u_edgeAttributeTexelsPerEdge&&D.uniform1i(G.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));var H=new Set;u.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),F.setTypedUniform($,M))})}),h.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),F.setTypedUniform($,M))})}),c.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),F.setTypedUniform($,M))})})}},{key:"render",value:function(N,M,F){this.maybeRegenerateShaders(),he(L,"render",this,3)([N,M,F])}},{key:"renderProgram",value:function(N,M){this.layerLifecycles.forEach(function(F){var D;return(D=F.beforeRender)===null||D===void 0?void 0:D.call(F)}),he(L,"renderProgram",this,3)([N,M])}},{key:"uploadAttributeTexture",value:function(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(N){var M;return(M=N.kill)===null||M===void 0?void 0:M.call(N)}),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),he(L,"kill",this,3)([])}}])})(nt),T=h[p],R=h[b],S=O({paths:u,headLengthRatio:Pe(T.length)?0:T.length,tailLengthRatio:Pe(R.length)?0:R.length},t.label),A=No(S),C=Mo(a,null,e,S),P=Io(a,n,e,{shaderConfig:A}),w=new ko(a,{paths:u,extremities:h,layers:c,nodeShapes:i,nodeLayers:o});return{edgeProgram:new _(a,null,e),labelProgram:C,labelBackgroundProgram:P,framePass:w}}function Vu(a){return J(a)==="object"&&"uniforms"in a&&Array.isArray(a.uniforms)}function ju(a){return J(a)==="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function qu(a){return J(a)==="object"&&"uniforms"in a&&"attributes"in a&&"segments"in a}function Xu(a){return J(a)==="object"&&"uniforms"in a&&"attributes"in a&&"length"in a}function Yu(a){return J(a)==="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function Ku(a){return J(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function Zu(a){return J(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function Qu(a){return J(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function Ju(a){if(Vu(a))return a;if(Ku(a))return{name:a.name,glsl:a.glsl,inradiusFactor:a.inradiusFactor,uniforms:[]};throw new Error("Invalid node shape specification: ".concat(JSON.stringify(a)))}function ec(a){if(ju(a))return a;if(_i(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error("Invalid node layer specification: ".concat(JSON.stringify(a)))}function tc(a){if(qu(a))return a;if(Zu(a))return{name:a.name,glsl:a.glsl,segments:a.segments,uniforms:[],attributes:[]};throw new Error("Invalid edge path specification: ".concat(JSON.stringify(a)))}function nc(a){if(Yu(a))return a;if(Ti(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error("Invalid edge layer specification: ".concat(JSON.stringify(a)))}function ac(a){if(Xu(a))return a;if(Qu(a))return{name:a.name,glsl:a.glsl,length:a.length,widthFactor:a.widthFactor,margin:0,uniforms:[],attributes:[]};throw new Error("Invalid edge extremity specification: ".concat(JSON.stringify(a)))}function zo(a){var n,e,t=(n=a?.shapes)!==null&&n!==void 0?n:nn.shapes,r=(e=a?.layers)!==null&&e!==void 0?e:nn.layers,i=t.map(Ju),o=r.map(ec);if(i.length===0)throw new Error("At least one node shape must be specified.");if(o.length===0)throw new Error("At least one node layer must be specified.");return{shapes:i,layers:o}}function rc(a){var n,e,t,r=(n=a?.paths)!==null&&n!==void 0?n:Ct.paths,i=(e=a?.extremities)!==null&&e!==void 0?e:Ct.extremities,o=(t=a?.layers)!==null&&t!==void 0?t:Ct.layers,l=r.map(tc),s=i.map(ac).filter(function(u){return u!==null}),d=o.map(nc);if(l.length===0)throw new Error("At least one edge path must be specified.");if(d.length===0)throw new Error("At least one edge layer must be specified.");return{paths:l,extremities:s,layers:d}}function Oo(a,n){var e={},t=z(a),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;i.variables&&Object.assign(e,i.variables)}}catch(o){t.e(o)}finally{t.f()}return Object.assign(e,n||{}),e}function Bo(a,n,e,t,r){var i=zo(t),o=i.shapes,l=i.layers,s=Oo(o,t?.variables),d=dr(a,n,e,{shapes:o,layers:l,label:t?.label,backdrop:t?.backdrop,labelAttachments:t?.labelAttachments},r);return O(O({},d),{},{variables:s})}function Wo(a,n,e,t,r,i){var o=rc(t),l=o.paths,s=o.extremities,d=o.layers,u=zo(i),c=u.shapes,f=u.layers,g=Oo(l,t?.variables),h=hr(a,n,e,{paths:l,extremities:s,layers:d,defaultHead:t?.defaultHead,defaultTail:t?.defaultTail,label:t?.label},r,c,f);return O(O({},h),{},{variables:g,paths:l})}var ic=2;function Uo(a,n,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ic,r=n.canvas,i=r.width,o=r.height,l=e.x,s=e.y,d=e.rowHeight,u=e.maxRowWidth,c={},f=[],g=z(a),h;try{for(g.s();!(h=g.n()).done;){var m=h.value,v=m.width+t,p=m.height+t;if(v>i||p>o||l+v>i&&s+d+p>o){f.push(m);continue}l+v>i&&(u=Math.max(u,l),l=0,s+=d,d=p),m.draw(n,l,s),c[m.key]={x:l,y:s,width:m.width,height:m.height},l+=v,d=Math.max(d,p)}}catch(b){g.e(b)}finally{g.f()}return u=Math.max(u,l),{atlas:c,cursor:{x:l,y:s,rowHeight:d,maxRowWidth:u},remaining:f}}function ve(a,n,e,t){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}ve=function(i,o,l,s){function d(u,c){ve(i,u,function(f){return this._invoke(u,c,f)})}o?r?r(i,o,{value:l,enumerable:!s,configurable:!s,writable:!s}):i[o]=l:(d("next",0),d("throw",1),d("return",2))},ve(a,n,e,t)}function me(){var a,n,e=typeof Symbol=="function"?Symbol:{},t=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag";function i(g,h,m,v){var p=h&&h.prototype instanceof l?h:l,b=Object.create(p.prototype);return ve(b,"_invoke",(function(y,x,_){var T,R,S,A=0,C=_||[],P=!1,w={p:0,n:0,v:a,a:I,f:I.bind(a,4),d:function(L,k){return T=L,R=0,S=a,w.n=k,o}};function I(L,k){for(R=L,S=k,n=0;!P&&A&&!N&&n<C.length;n++){var N,M=C[n],F=w.p,D=M[2];L>3?(N=D===k)&&(S=M[(R=M[4])?5:(R=3,3)],M[4]=M[5]=a):M[0]<=F&&((N=L<2&&F<M[1])?(R=0,w.v=k,w.n=M[1]):F<D&&(N=L<3||M[0]>k||k>D)&&(M[4]=L,M[5]=k,w.n=D,R=0))}if(N||L>1)return o;throw P=!0,k}return function(L,k,N){if(A>1)throw TypeError("Generator is already running");for(P&&k===1&&I(k,N),R=k,S=N;(n=R<2?a:S)||!P;){T||(R?R<3?(R>1&&(w.n=-1),I(R,S)):w.n=S:w.v=S);try{if(A=2,T){if(R||(L="next"),n=T[L]){if(!(n=n.call(T,S)))throw TypeError("iterator result is not an object");if(!n.done)return n;S=n.value,R<2&&(R=0)}else R===1&&(n=T.return)&&n.call(T),R<2&&(S=TypeError("The iterator does not provide a '"+L+"' method"),R=1);T=a}else if((n=(P=w.n<0)?S:y.call(x,w))!==o)break}catch(M){T=a,R=1,S=M}finally{A=1}}return{value:n,done:P}}})(g,m,v),!0),b}var o={};function l(){}function s(){}function d(){}n=Object.getPrototypeOf;var u=[][t]?n(n([][t]())):(ve(n={},t,function(){return this}),n),c=d.prototype=l.prototype=Object.create(u);function f(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,d):(g.__proto__=d,ve(g,r,"GeneratorFunction")),g.prototype=Object.create(c),g}return s.prototype=d,ve(c,"constructor",d),ve(d,"constructor",s),s.displayName="GeneratorFunction",ve(d,r,"GeneratorFunction"),ve(c),ve(c,r,"Generator"),ve(c,t,function(){return this}),ve(c,"toString",function(){return"[object Generator]"}),(me=function(){return{w:i,m:f}})()}function Ho(a,n,e,t,r,i,o){try{var l=a[i](o),s=l.value}catch(d){return void e(d)}l.done?n(s):Promise.resolve(s).then(t,r)}function Bt(a){return function(){var n=this,e=arguments;return new Promise(function(t,r){var i=a.apply(n,e);function o(s){Ho(i,t,r,o,l,"next",s)}function l(s){Ho(i,t,r,o,l,"throw",s)}o(void 0)})}}var ga=new Map,$o=!1;function oc(a){return new Promise(function(n,e){var t=new FileReader;t.onload=function(){return n(t.result)},t.onerror=e,t.readAsDataURL(a)})}function sc(a){if(!ga.has(a)){var n=fetch(a).then(function(e){return e.blob()}).then(oc).catch(function(){return ga.delete(a),null});ga.set(a,n)}return ga.get(a)}function lc(a){return fr.apply(this,arguments)}function fr(){return fr=Bt(me().m(function a(n){var e,t,r;return me().w(function(i){for(;;)switch(i.n){case 0:return e=document.createElement("div"),e.innerHTML=n,t=Array.from(e.querySelectorAll("img[src]")),r=t.filter(function(o){return!o.getAttribute("src").startsWith("data:")}),i.n=1,Promise.all(r.map((function(){var o=Bt(me().m(function l(s){var d;return me().w(function(u){for(;;)switch(u.n){case 0:return u.n=1,sc(s.getAttribute("src"));case 1:d=u.v,d&&s.setAttribute("src",d);case 2:return u.a(2)}},l)}));return function(l){return o.apply(this,arguments)}})()));case 1:return i.a(2,e.innerHTML)}},a)})),fr.apply(this,arguments)}function Vo(a){return gr.apply(this,arguments)}function gr(){return gr=Bt(me().m(function a(n){var e,t,r,i,o,l,s,d,u,c,f,g,h,m=arguments;return me().w(function(v){for(;;)switch(v.n){case 0:if(e=m.length>1&&m[1]!==void 0?m[1]:1,t=n instanceof SVGElement?new XMLSerializer().serializeToString(n):n,r=new DOMParser,i=r.parseFromString(t,"image/svg+xml"),o=i.querySelector("svg"),o){v.n=1;break}return v.a(2,null);case 1:if(l=parseFloat(o.getAttribute("width")||""),s=parseFloat(o.getAttribute("height")||""),(!(l>0)||!(s>0))&&(d=o.getAttribute("viewBox"),d&&(u=d.trim().split(/[\s,]+/),l=parseFloat(u[2]),s=parseFloat(u[3]))),!(!(l>0)||!(s>0))){v.n=2;break}return console.warn("Sigma: SVG label attachment has no parseable dimensions \u2014 skipped."),v.a(2,null);case 2:return c=Math.ceil(l*e),f=Math.ceil(s*e),g=new Blob([t],{type:"image/svg+xml"}),h=URL.createObjectURL(g),v.a(2,new Promise(function(p){var b=new Image;b.onload=function(){var y=document.createElement("canvas");y.width=c,y.height=f,y.getContext("2d").drawImage(b,0,0,c,f),URL.revokeObjectURL(h);try{y.getContext("2d").getImageData(0,0,1,1)}catch(x){if(x instanceof DOMException&&x.name==="SecurityError"){$o||($o=!0,console.warn('Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.')),p(null);return}throw x}p(y)},b.onerror=function(){URL.revokeObjectURL(h),p(null)},b.src=h}))}},a)})),gr.apply(this,arguments)}function dc(a,n){var e=document.createElement("div");e.style.cssText="position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content",e.innerHTML=(n?"<style>".concat(n,"</style>"):"")+a,document.body.appendChild(e);var t=e.getBoundingClientRect(),r=t.width,i=t.height;return document.body.removeChild(e),{width:Math.ceil(r),height:Math.ceil(i)}}function uc(a,n,e,t){return pr.apply(this,arguments)}function pr(){return pr=Bt(me().m(function a(n,e,t,r){var i,o,l,s,d,u,c,f,g=arguments;return me().w(function(h){for(;;)switch(h.n){case 0:return i=g.length>4&&g[4]!==void 0?g[4]:1,o=n instanceof HTMLElement?n.outerHTML:n,h.n=1,lc(o);case 1:return l=h.v,(t==null||r==null)&&(s=dc(l,e),t=t??s.width,r=r??s.height),d=Math.ceil(t*i),u=Math.ceil(r*i),c=e?"<style>".concat(e,"</style>"):"",f='<svg xmlns="http://www.w3.org/2000/svg" '+'width="'.concat(d,'" height="').concat(u,'" viewBox="0 0 ').concat(t," ").concat(r,'">')+'<foreignObject width="'.concat(t,'" height="').concat(r,'">')+'<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">'.concat(c).concat(l,"</body>")+"</foreignObject></svg>",h.a(2,Vo(f,1))}},a)})),pr.apply(this,arguments)}function cc(a){return vr.apply(this,arguments)}function vr(){return vr=Bt(me().m(function a(n){var e,t=arguments,r;return me().w(function(i){for(;;)switch(i.n){case 0:e=t.length>1&&t[1]!==void 0?t[1]:1,r=n.type,i.n=r==="canvas"?1:r==="svg"?2:r==="html"?3:4;break;case 1:return i.a(2,n.canvas);case 2:return i.a(2,Vo(n.svg,e));case 3:return i.a(2,uc(n.html,n.css,n.width,n.height,e));case 4:return i.a(2)}},a)})),vr.apply(this,arguments)}var Ot=2048,mr=(function(){function a(n,e,t){Z(this,a),E(this,"cache",new Map),E(this,"pending",new Set),E(this,"atlas",{}),E(this,"glTexture",null),E(this,"dirty",!0),this.gl=n,this.renderers=e,this.scheduleRender=t,this.packCanvas=document.createElement("canvas"),this.packCanvas.width=Ot,this.packCanvas.height=Ot,this.packCtx=this.packCanvas.getContext("2d")}return Q(a,[{key:"renderAttachment",value:function(e,t,r){var i=this,o="".concat(e,":").concat(t);if(!(this.cache.has(o)||this.pending.has(o))){var l=this.renderers[t];if(l){var s=l(r);if(s){this.pending.add(o);var d=r.pixelRatio;Promise.resolve(s).then((function(){var u=Bt(me().m(function c(f){var g;return me().w(function(h){for(;;)switch(h.n){case 0:if(i.pending.has(o)){h.n=1;break}return h.a(2);case 1:if(i.pending.delete(o),f){h.n=2;break}return h.a(2);case 2:return h.n=3,cc(f,d);case 3:if(g=h.v,!(!g||g.width===0||g.height===0)){h.n=4;break}return h.a(2);case 4:i.cache.set(o,{image:g,width:g.width,height:g.height}),i.dirty=!0,i.scheduleRender();case 5:return h.a(2)}},c)}));return function(c){return u.apply(this,arguments)}})())}}}}},{key:"regenerateAtlas",value:function(){if(this.dirty){this.dirty=!1;var e=[];if(this.cache.forEach(function(d,u){e.push({key:u,width:d.width,height:d.height,draw:function(f,g,h){f.drawImage(d.image,g,h)}})}),e.length===0){this.atlas={},this.deleteGLTexture();return}var t={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,Ot,Ot);var r=Uo(e,this.packCtx,t),i=r.atlas,o=r.remaining;this.atlas=i,o.length>0&&console.warn("Sigma: ".concat(o.length," label attachment(s) could not fit in the ").concat(Ot,"x").concat(Ot," atlas and will not be rendered.")),this.deleteGLTexture();var l=this.gl,s=l.createTexture();l.activeTexture(l.TEXTURE0+hn),l.bindTexture(l.TEXTURE_2D,s),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,this.packCanvas),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),this.glTexture=s}}},{key:"bindTexture",value:function(e){if(this.glTexture){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.glTexture)}}},{key:"getEntry",value:function(e,t){var r="".concat(e,":").concat(t);return this.atlas[r]||null}},{key:"invalidateNode",value:function(e){var t="".concat(e,":"),r=z(this.cache.keys()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;o.startsWith(t)&&(this.cache.delete(o),this.dirty=!0)}}catch(u){r.e(u)}finally{r.f()}var l=z(this.pending),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;d.startsWith(t)&&this.pending.delete(d)}}catch(u){l.e(u)}finally{l.f()}}},{key:"restore",value:function(){this.glTexture=null,this.dirty=!0}},{key:"clear",value:function(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}},{key:"kill",value:function(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}},{key:"deleteGLTexture",value:function(){this.glTexture&&(this.gl.deleteTexture(this.glTexture),this.glTexture=null)}}])})(),pa=(function(){function a(n){Z(this,a),E(this,"buckets",new Map),E(this,"keyDepth",new Map);var e=z(n),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;this.buckets.set(r,new Set)}}catch(i){e.e(i)}finally{e.f()}}return Q(a,[{key:"has",value:function(e){return this.keyDepth.has(e)}},{key:"getBucket",value:function(e){return this.buckets.get(e)}},{key:"set",value:function(e,t){var r,i=this.keyDepth.get(e);if(i!==t){var o=this.buckets.get(t);if(!o)throw new Error('Sigma: "'.concat(t,'" is not a declared depth layer'));i!==void 0&&((r=this.buckets.get(i))===null||r===void 0||r.delete(e)),o.add(e),this.keyDepth.set(e,t)}}},{key:"remove",value:function(e){var t=this.keyDepth.get(e);t!==void 0&&(this.buckets.get(t).delete(e),this.keyDepth.delete(e))}},{key:"clearAll",value:function(){var e=z(this.buckets.values()),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;r.clear()}}catch(i){e.e(i)}finally{e.f()}this.keyDepth.clear()}},{key:"getSorted",value:function(e,t){var r=this.buckets.get(e);return!r||r.size===0?[]:j(r).sort(function(i,o){return t(i)-t(o)})}}])})(),br=(function(a){function n(e,t){return Z(this,n),se(this,n,[e,2,t])}return le(n,a),Q(n,[{key:"updateNode",value:function(t,r,i,o,l,s,d,u){var c=this.indexMap.get(t);if(c===void 0)throw new Error('Node "'.concat(t,'" not allocated in NodeDataTexture'));var f=Ye(u),g=ne(f,4),h=g[0],m=g[1],v=g[2],p=g[3],b=c*2*4;this.data[b]=r,this.data[b+1]=i,this.data[b+2]=o,this.data[b+3]=l,this.data[b+4]=s,this.data[b+5]=d,this.data[b+6]=h*65536+m*256+v,this.data[b+7]=p/255,this.markDirty(c)}}])})(cn),hc=1024,fc=1.5,gc=4096,va=(function(){function a(n,e){var t;if(Z(this,a),E(this,"texture",null),E(this,"framebuffer",null),!n.getExtension("EXT_color_buffer_float"))throw new Error("sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.");this.gl=n,this.channels=e.channels,this.capacity=this.roundUpToPowerOfTwo((t=e.initialCapacity)!==null&&t!==void 0?t:hc);var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}return Q(a,[{key:"roundUpToPowerOfTwo",value:function(e){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,e))))}},{key:"computeDimensions",value:function(e){var t=Math.min(e,gc),r=Math.ceil(e/t);return{width:t,height:r}}},{key:"create",value:function(){var e=this.gl,t=this.channels===1?e.R32F:e.RGBA32F,r=this.channels===1?e.RED:e.RGBA;if(this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,t,this.textureWidth,this.textureHeight,0,r,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw new Error("sigma: float framebuffer for frame-pass placement is incomplete.");e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}},{key:"ensureCapacity",value:function(e){if(!(e<=this.capacity)){var t=this.gl;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(e*fc));var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.texture&&t.deleteTexture(this.texture),this.framebuffer&&t.deleteFramebuffer(this.framebuffer),this.create()}}},{key:"bindAsRenderTarget",value:function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.viewport(0,0,this.textureWidth,this.textureHeight)}},{key:"bind",value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"restore",value:function(){this.gl.getExtension("EXT_color_buffer_float"),this.create()}},{key:"kill",value:function(){var e=this.gl;this.texture&&(e.deleteTexture(this.texture),this.texture=null),this.framebuffer&&(e.deleteFramebuffer(this.framebuffer),this.framebuffer=null)}}])})(),yr=(function(a){function n(e,t){return Z(this,n),se(this,n,[e,2,t])}return le(n,a),Q(n,[{key:"updateEdge",value:function(t,r,i,o,l,s){var d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,c=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,f=this.indexMap.get(t);if(f===void 0)throw new Error('Edge "'.concat(t,'" not allocated in EdgeDataTexture'));var g=f*this.TEXELS_PER_ITEM*4;this.data[g+0]=r,this.data[g+1]=i,this.data[g+2]=o,this.data[g+3]=0,this.data[g+4]=l,this.data[g+5]=s,this.data[g+6]=d,this.data[g+7]=(u&15)<<4|c&15,this.markDirty(f)}}])})(cn);var Ef=lt(Tt()),Sf=lt(Xa());function pc(a,n){if(a==null)return{};var e={};for(var t in a)if({}.hasOwnProperty.call(a,t)){if(n.indexOf(t)!==-1)continue;e[t]=a[t]}return e}function jo(a,n){if(a==null)return{};var e,t,r=pc(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)===-1&&{}.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var vc=["factor"],mc=["factor"],qo=1.5,xr={x:.5,y:.5,angle:0,ratio:1},Xo=(function(a){function n(){var e;Z(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=se(this,n,[].concat(r)),E(e,"minRatio",null),E(e,"maxRatio",null),E(e,"enabled",!0),E(e,"enabledZooming",!0),E(e,"enabledPanning",!0),E(e,"enabledRotation",!0),E(e,"constrainState",null),E(e,"state",O({},xr)),E(e,"previousState",O({},xr)),E(e,"nextFrame",null),E(e,"currentAnimationFrom",null),E(e,"currentAnimationTo",null),E(e,"animationCallback",null),e}return le(n,a),Q(n,[{key:"x",get:function(){return this.state.x}},{key:"y",get:function(){return this.state.y}},{key:"angle",get:function(){return this.state.angle}},{key:"ratio",get:function(){return this.state.ratio}},{key:"getState",value:function(){return O({},this.state)}},{key:"getPreviousState",value:function(){return O({},this.previousState)}},{key:"getBoundedRatio",value:function(t){var r=t;return typeof this.minRatio=="number"&&(r=Math.max(r,this.minRatio)),typeof this.maxRatio=="number"&&(r=Math.min(r,this.maxRatio)),r}},{key:"validateState",value:function(t){var r=this.getState();return this.enabledPanning&&typeof t.x=="number"&&(r.x=t.x),this.enabledPanning&&typeof t.y=="number"&&(r.y=t.y),this.enabledZooming&&typeof t.ratio=="number"&&(r.ratio=this.getBoundedRatio(t.ratio)),this.enabledRotation&&typeof t.angle=="number"&&(r.angle=t.angle),this.constrainState?this.constrainState(r):r}},{key:"isAnimating",value:function(){return this.nextFrame!==null}},{key:"setState",value:function(t){if(!this.enabled)return this;var r=this.validateState(t);return Mi(this.state,r)?this:(this.previousState=this.state,this.state=r,this.emit("updated",this.getState()),this)}},{key:"updateState",value:function(t){return this.setState(t(this.getState())),this}},{key:"animate",value:function(t,r){var i=this;return this.enabled?new Promise(function(o){return i.runAnimation(t,O(O({},Bi),r),o)}):Promise.resolve()}},{key:"cancelAnimation",value:function(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}},{key:"zoomIn",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.factor,i=r===void 0?qo:r,o=jo(t,vc);return this.animate({ratio:this.ratio/i},o)}},{key:"zoomOut",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.factor,i=r===void 0?qo:r,o=jo(t,mc);return this.animate({ratio:this.ratio*i},o)}},{key:"reset",value:function(t){return this.animate(xr,t)}},{key:"runAnimation",value:function(t,r,i){var o=this,l=an(r.easing),s=Date.now(),d=this.getState(),u=this.validateState(t),c=function(){if(!o.enabled){o.cancelAnimation();return}var g=r.duration>0?(Date.now()-s)/r.duration:1;if(g>=1){o.nextFrame=null,o.setState(u),o.resolveAnimation(),o.emitAnimationEnd(!0);return}var h=l(g);o.setState({x:d.x+(u.x-d.x)*h,y:d.y+(u.y-d.y)*h,angle:d.angle+(u.angle-d.angle)*h,ratio:d.ratio+(u.ratio-d.ratio)*h}),o.nextFrame=requestAnimationFrame(c)};this.cancelAnimation(),this.currentAnimationFrom=d,this.currentAnimationTo=u,this.animationCallback=i,this.emit("animationStart",{from:d,to:u}),c()}},{key:"resolveAnimation",value:function(){var t=this.animationCallback;this.animationCallback=null,t&&t()}},{key:"emitAnimationEnd",value:function(t){var r=this.currentAnimationFrom,i=this.currentAnimationTo;!r||!i||(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit("animationEnd",{from:r,to:i,completed:t}))}}],[{key:"from",value:function(t){var r=new n;return r.setState(t)}}])})(Vn);function be(a,n){var e=n.getBoundingClientRect();return{x:a.clientX-e.left,y:a.clientY-e.top}}function Oe(a,n){var e=O(O({},be(a,n)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){e.sigmaDefaultPrevented=!0},original:a});return e}function gt(a){var n="x"in a?a:O(O({},a.touches[0]||a.previousTouches[0]),{},{original:a.original,sigmaDefaultPrevented:a.sigmaDefaultPrevented,preventSigmaDefault:function(){a.sigmaDefaultPrevented=!0,n.sigmaDefaultPrevented=!0}});return n}function bc(a,n){var e=Oe(a,n);return e.delta=ls(a),e}var yc=2;function ba(a){for(var n=[],e=0,t=Math.min(a.length,yc);e<t;e++)n.push(a[e]);return n}function gn(a,n,e){var t={touches:ba(a.touches).map(function(r){return be(r,e)}),previousTouches:n.map(function(r){return be(r,e)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:a};return t}function ls(a){if(typeof a.deltaY<"u")return a.deltaY*-3/360;if(typeof a.detail<"u")return a.detail/-9;throw new Error("Captor: could not extract delta from event.")}var ds=(function(a){function n(e,t){var r;return Z(this,n),r=se(this,n),r.container=e,r.renderer=t,r}return le(n,a),Q(n)})(Vn),xc=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","enableCameraMouseRotation","gestureTarget","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],_c=xc.reduce(function(a,n){return O(O({},a),{},E({},n,Xn[n]))},{});function pn(a){return a instanceof PointerEvent&&a.pointerType==="touch"}var Tc=(function(a){function n(e,t){var r;return Z(this,n),r=se(this,n,[e,t]),E(r,"enabled",!0),E(r,"draggedEvents",0),E(r,"downStartTime",null),E(r,"lastMouseX",null),E(r,"lastMouseY",null),E(r,"isMouseDown",!1),E(r,"isMoving",!1),E(r,"isPanningStage",!1),E(r,"movingTimeout",null),E(r,"startCameraState",null),E(r,"clicks",0),E(r,"doubleClickTimeout",null),E(r,"isRightMouseDown",!1),E(r,"startRotationAngle",null),E(r,"startCameraAngle",null),E(r,"currentWheelDirection",0),E(r,"lastWheelAnimationId",0),E(r,"settings",_c),r.handleRightClick=r.handleRightClick.bind(r),r.handleDown=r.handleDown.bind(r),r.handleUp=r.handleUp.bind(r),r.handleMove=r.handleMove.bind(r),r.handleWheel=r.handleWheel.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleEnter=r.handleEnter.bind(r),e.addEventListener("contextmenu",r.handleRightClick,{capture:!1}),e.addEventListener("pointerdown",r.handleDown,{capture:!1}),e.addEventListener("wheel",r.handleWheel,{capture:!1,passive:!1}),e.addEventListener("pointerleave",r.handleLeave,{capture:!1}),e.addEventListener("pointerenter",r.handleEnter,{capture:!1}),document.addEventListener("pointermove",r.handleMove,{capture:!1}),document.addEventListener("pointerup",r.handleUp,{capture:!1}),r}return le(n,a),Q(n,[{key:"kill",value:function(){var t=this.container;t.removeEventListener("contextmenu",this.handleRightClick),t.removeEventListener("pointerdown",this.handleDown),t.removeEventListener("wheel",this.handleWheel),t.removeEventListener("pointerleave",this.handleLeave),t.removeEventListener("pointerenter",this.handleEnter),document.removeEventListener("pointermove",this.handleMove),document.removeEventListener("pointerup",this.handleUp)}},{key:"handleClick",value:function(t){var r=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(t);setTimeout(function(){r.clicks=0,r.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",Oe(t,this.container))}}},{key:"handleRightClick",value:function(t){this.enabled&&(this.settings.enableCameraMouseRotation&&t.preventDefault(),this.emit("rightClick",Oe(t,this.container)))}},{key:"handleDoubleClick",value:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var r=Oe(t,this.container);if(this.emit("doubleClick",r),!r.sigmaDefaultPrevented){var i=this.renderer.getCamera(),o=i.getBoundedRatio(i.getState().ratio/this.settings.doubleClickZoomingRatio);i.animate(this.renderer.getViewportZoomedState(be(t,this.container),o),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(t){if(!(!this.enabled||pn(t))){if(t.button===0){this.startCameraState=this.renderer.getCamera().getState();var r=be(t,this.container),i=r.x,o=r.y;this.lastMouseX=i,this.lastMouseY=o,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(t.button===2&&this.settings.enableCameraMouseRotation){var l=be(t,this.container),s=l.x,d=l.y,u=this.container.offsetWidth/2,c=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(d-c,s-u),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit("mousedown",Oe(t,this.container))}}},{key:"handleUp",value:function(t){var r=this;if(!(!this.enabled||pn(t)||!this.isMouseDown&&!this.isRightMouseDown)){if(this.isRightMouseDown){this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit("mouseup",Oe(t,this.container));return}var i=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var o=be(t,this.container),l=o.x,s=o.y,d=i.getState(),u=i.getPreviousState();this.isMoving?i.animate({x:d.x+this.settings.inertiaRatio*(d.x-u.x),y:d.y+this.settings.inertiaRatio*(d.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==l||this.lastMouseY!==s)&&i.setState({x:d.x,y:d.y}),this.isMoving=!1,setTimeout(function(){var c=r.draggedEvents>0;r.draggedEvents=0;var f=r.renderer.getSetting("hideEdgesOnMove")||r.renderer.getSetting("hideLabelsOnMove");c&&f&&r.renderer.refresh()},0),this.emit("mouseup",Oe(t,this.container)),(t.target===this.container||t.composedPath()[0]===this.container)&&this.handleClick(t)}}},{key:"handleMove",value:function(t){var r=this;if(!(!this.enabled||pn(t))){var i=Oe(t,this.container);if(this.emit("mousemovebody",i),(t.target===this.container||t.composedPath()[0]===this.container)&&this.emit("mousemove",i),this.isMouseDown&&this.draggedEvents++,!i.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.movingTimeout=null,r.isMoving=!1},this.settings.dragTimeout);var o=this.renderer.getCamera(),l=be(t,this.container),s=l.x,d=l.y,u=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),c=this.renderer.viewportToFramedGraph({x:s,y:d}),f=u.x-c.x,g=u.y-c.y,h=o.getState(),m=h.x+f,v=h.y+g;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),o.setState({x:m,y:v}),this.lastMouseX=s,this.lastMouseY=d,t.preventDefault(),t.stopPropagation()}if(this.isRightMouseDown){var p=be(t,this.container),b=p.x,y=p.y,x=this.container.offsetWidth/2,_=this.container.offsetHeight/2,T=Math.atan2(y-_,b-x),R=T-this.startRotationAngle,S=this.renderer.getCamera();S.setState({angle:this.startCameraAngle+R}),t.preventDefault(),t.stopPropagation()}}}}},{key:"handleLeave",value:function(t){pn(t)||this.emit("mouseleave",Oe(t,this.container))}},{key:"handleEnter",value:function(t){pn(t)||this.emit("mouseenter",Oe(t,this.container))}},{key:"handleWheel",value:function(t){var r=this,i=this.renderer.getCamera();if(!(!this.enabled||!i.enabledZooming)){var o=bc(t,this.container);if(this.emit("wheel",o),!o.sigmaDefaultPrevented){var l=this.settings.gestureTarget;if(l!=="page"){if(l==="shared"&&!t.ctrlKey&&!t.metaKey){this.renderer._showGestureHint("wheel");return}var s=ls(t);if(s){t.preventDefault(),t.stopPropagation();var d=i.getState().ratio,u=s>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,c=i.getBoundedRatio(d*u),f=s>0?1:-1,g=Date.now();if(d!==c&&!(this.currentWheelDirection===f&&this.lastWheelTriggerTime&&g-this.lastWheelTriggerTime<this.settings.zoomDuration/5)){var h=++this.lastWheelAnimationId;i.animate(this.renderer.getViewportZoomedState(be(t,this.container),c),{easing:"quadraticOut",duration:this.settings.zoomDuration}).then(function(){r.lastWheelAnimationId===h&&(r.currentWheelDirection=0)}),this.currentWheelDirection=f,this.lastWheelTriggerTime=g}}}}}}},{key:"setSettings",value:function(t){this.settings=t}}])})(ds),Ec=["dragTimeout","gestureTarget","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],Sc=Ec.reduce(function(a,n){return O(O({},a),{},E({},n,Xn[n]))},{}),Ac=(function(a){function n(e,t){var r;return Z(this,n),r=se(this,n,[e,t]),E(r,"enabled",!0),E(r,"isMoving",!1),E(r,"hasMoved",!1),E(r,"isPanningStage",!1),E(r,"isZoomingStage",!1),E(r,"touchMode",0),E(r,"startTouchesPositions",[]),E(r,"lastTouches",[]),E(r,"lastTap",null),E(r,"settings",Sc),r.handleStart=r.handleStart.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleMove=r.handleMove.bind(r),e.addEventListener("touchstart",r.handleStart,{capture:!1}),e.addEventListener("touchcancel",r.handleLeave,{capture:!1}),document.addEventListener("touchend",r.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",r.handleMove,{capture:!1,passive:!1}),r}return le(n,a),Q(n,[{key:"kill",value:function(){var t=this.container;t.removeEventListener("touchstart",this.handleStart),t.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"doesCapture",value:function(t){var r=this.settings.gestureTarget;return r==="graph"?!0:r==="page"?!1:t>=2}},{key:"syncStageFlags",value:function(){var t=this.touchMode===1&&this.hasMoved,r=this.touchMode===2;t!==this.isPanningStage&&(this.isPanningStage=t,this.renderer._setPanning(t)),r!==this.isZoomingStage&&(this.isZoomingStage=r,this.renderer._setZooming(r))}},{key:"handleStart",value:function(t){var r=this;if(this.enabled){var i=ba(t.touches);if(this.touchMode=i.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=i.map(function(g){return be(g,r.container)}),this.touchMode===2){var o=ne(this.startTouchesPositions,2),l=o[0],s=l.x,d=l.y,u=o[1],c=u.x,f=u.y;this.startTouchesAngle=Math.atan2(f-d,c-s),this.startTouchesDistance=Math.sqrt(Math.pow(c-s,2)+Math.pow(f-d,2))}this.syncStageFlags(),this.emit("touchdown",gn(t,this.lastTouches,this.container)),this.lastTouches=i,this.lastTouchesPositions=this.startTouchesPositions,t.cancelable&&(this.doesCapture(t.touches.length)||this.renderer._hasNodeDrag())&&t.preventDefault()}}},{key:"handleLeave",value:function(t){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(t.cancelable&&this.doesCapture(this.touchMode)&&t.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(t.touches.length===1){this.handleStart(t);break}case 1:if(this.isMoving){var r=this.renderer.getCamera(),i=r.getState(),o=r.getPreviousState();r.animate({x:i.x+this.settings.inertiaRatio*(i.x-o.x),y:i.y+this.settings.inertiaRatio*(i.y-o.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.syncStageFlags(),this.emit("touchup",gn(t,this.lastTouches,this.container)),!t.touches.length){var l=be(this.lastTouches[0],this.container),s=this.startTouchesPositions[0],d=Math.pow(l.x-s.x,2)+Math.pow(l.y-s.y,2);if(!t.touches.length&&d<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var u=gn(t,this.lastTouches,this.container);if(this.emit("doubletap",u),this.lastTap=null,!u.sigmaDefaultPrevented&&this.settings.gestureTarget!=="page"){var c=this.renderer.getCamera(),f=c.getBoundedRatio(c.getState().ratio/this.settings.doubleClickZoomingRatio);c.animate(this.renderer.getViewportZoomedState(l,f),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var g=gn(t,this.lastTouches,this.container);this.emit("tap",g),this.lastTap={time:Date.now(),position:g.touches[0]||g.previousTouches[0]}}}this.lastTouches=ba(t.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(t){var r=this;if(!(!this.enabled||!this.startTouchesPositions.length)){var i=this.doesCapture(t.touches.length);i&&t.preventDefault();var o=ba(t.touches),l=o.map(function(U){return be(U,r.container)}),s=this.lastTouches;this.lastTouches=o,this.lastTouchesPositions=l;var d=gn(t,s,this.container);if(this.emit("touchmove",d),!d.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=l.some(function(U,$){var K=r.startTouchesPositions[$];return K&&(U.x!==K.x||U.y!==K.y)})),!!this.hasMoved)){if(!i){this.settings.gestureTarget==="shared"&&this.renderer._showGestureHint("touch");return}this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=this.startCameraState,f=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var g=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),h=g.x,m=g.y,v=this.renderer.viewportToFramedGraph(l[0]),p=v.x,b=v.y;u.setState({x:c.x+h-p,y:c.y+m-b});break}case 2:{var y={x:.5,y:.5,angle:0,ratio:1},x=l[0],_=x.x,T=x.y,R=l[1],S=R.x,A=R.y,C=Math.atan2(A-T,S-_)-this.startTouchesAngle,P=Math.hypot(A-T,S-_)/this.startTouchesDistance,w=u.getBoundedRatio(c.ratio/P);y.ratio=w,y.angle=c.angle+C;var I=this.getDimensions(),L=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:c}),k=Math.min(I.width,I.height)-2*f,N=k/I.width,M=k/I.height,F=w/k,D=_-k/2/N,G=T-k/2/M,H=ka({x:D,y:G},y.angle);D=H.x,G=H.y,y.x=L.x-D*F,y.y=L.y+G*F,u.setState(y);break}}}}}},{key:"setSettings",value:function(t){this.settings=t}}])})(ds),Rc=(function(){function a(n,e,t,r){Z(this,a),E(this,"pendingNode",null),E(this,"session",null),this.graph=n,this.viewportToGraph=e,this.setNodesState=t,this.emit=r}return Q(a,[{key:"start",value:function(e,t,r,i,o){var l=r(e),s=!1;if(this.emit("nodeDragStart",{node:e,allDraggedNodes:l,event:t,preventSigmaDefault:function(){s=!0}}),s)return!1;var d=new Map,u=z(l),c;try{for(u.s();!(c=u.n()).done;){var f=c.value;d.set(f,{x:this.graph.getNodeAttribute(f,i),y:this.graph.getNodeAttribute(f,o)})}}catch(g){u.e(g)}finally{u.f()}return this.session={node:e,allNodes:l,startPosition:this.viewportToGraph(t),startNodePositions:d,xAttr:i,yAttr:o},this.setNodesState(l,{isDragged:!0}),!0}},{key:"applyMove",value:function(e,t){var r=this.session,i=r.allNodes,o=r.startNodePositions,l=r.startPosition,s=r.xAttr,d=r.yAttr,u=this.viewportToGraph(e),c={x:u.x-l.x,y:u.y-l.y},f=z(i),g;try{for(f.s();!(g=f.n()).done;){var h=g.value,m=o.get(h);if(!(!m||!this.graph.hasNode(h))){var v={x:m.x+c.x,y:m.y+c.y};t?this.graph.mergeNodeAttributes(h,t(v,h)):(this.graph.setNodeAttribute(h,s,v.x),this.graph.setNodeAttribute(h,d,v.y))}}}catch(p){f.e(p)}finally{f.f()}}},{key:"end",value:function(){if(this.pendingNode=null,!this.session)return null;var e=this.session,t=e.node,r=e.allNodes;return this.setNodesState(r,{isDragged:!1}),this.session=null,{node:t,allNodes:r}}},{key:"removeNode",value:function(e){e===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===e?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(e)&&(this.session.allNodes=this.session.allNodes.filter(function(t){return t!==e}),this.session.startNodePositions.delete(e)))}},{key:"clear",value:function(){this.pendingNode=null,this.session=null}}])})(),wc=(function(){function a(n,e){Z(this,a),E(this,"groups",new Map),E(this,"edgeToGroupKey",new Map),this.graph=n,this.onGroupChanged=e}return Q(a,[{key:"getGroupKey",value:function(e){var t=this.graph.source(e),r=this.graph.target(e);return t<r?"".concat(t,"\0").concat(r):"".concat(r,"\0").concat(t)}},{key:"sortGroup",value:function(e,t){var r=this,i=t.split("\0")[0];e.sort(function(o,l){var s=r.graph.source(o)===i||!r.graph.isDirected(o)?0:1,d=r.graph.source(l)===i||!r.graph.isDirected(l)?0:1;return s-d})}},{key:"register",value:function(e){var t=this.getGroupKey(e),r=this.groups.get(t);r||(r=[],this.groups.set(t,r)),r.includes(e)||r.push(e),this.edgeToGroupKey.set(e,t),this.sortGroup(r,t),this.onGroupChanged(r,r.length)}},{key:"unregister",value:function(e){var t=this.edgeToGroupKey.get(e);if(t){this.edgeToGroupKey.delete(e);var r=this.groups.get(t);if(r){var i=r.indexOf(e);i!==-1&&r.splice(i,1),r.length===0?this.groups.delete(t):this.onGroupChanged(r,r.length)}}}},{key:"getGroup",value:function(e){var t,r=this.edgeToGroupKey.get(e);return r?(t=this.groups.get(r))!==null&&t!==void 0?t:[]:[]}},{key:"getSiblings",value:function(e){return this.getGroup(e).filter(function(t){return t!==e})}},{key:"rebuild",value:function(){var e=this;this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(function(s){var d=e.getGroupKey(s),u=e.groups.get(d);u||(u=[],e.groups.set(d,u)),u.push(s),e.edgeToGroupKey.set(s,d)});var t=z(this.groups),r;try{for(t.s();!(r=t.n()).done;){var i=ne(r.value,2),o=i[0],l=i[1];this.sortGroup(l,o),this.onGroupChanged(l,l.length)}}catch(s){t.e(s)}finally{t.f()}}},{key:"clear",value:function(){this.groups.clear(),this.edgeToGroupKey.clear()}}])})();function Yo(a,n){var e;if(a===!1||a==="extend"||a==="separate")return a;var t=a[n];return t!==void 0?t:(e=a.default)!==null&&e!==void 0?e:!1}function Ko(a){return a===!1?!1:a==="extend"||a==="separate"?!0:Object.values(a).some(function(n){return n==="extend"||n==="separate"})}function Zo(a){return a==="separate"?!0:a===!1||a==="extend"?!1:a.default==="separate"?!0:Object.values(a).includes("separate")}var pe={node:{parent:null,eventSuffix:"Node",payloadKey:"node",isEnabled:function(){return!0},writesPickingThisFrame:function(){return!0},setHover:function(n,e,t){return n.setNodeState(e,{isHovered:t})},getCursor:function(n,e){var t;return(t=n.nodeDataCache[e])===null||t===void 0?void 0:t.cursor},isHitValid:function(n,e){var t;return((t=n.nodeDataCache[e])===null||t===void 0?void 0:t.visibility)!=="hidden"}},edge:{parent:null,eventSuffix:"Edge",payloadKey:"edge",isEnabled:function(n){return!!n.settings.enableEdgeEvents},writesPickingThisFrame:function(n){return!!n.settings.enableEdgeEvents},setHover:function(n,e,t){return n.setEdgeState(e,{isHovered:t})},getCursor:function(n,e){var t;return(t=n.edgeDataCache[e])===null||t===void 0?void 0:t.cursor}},nodeLabel:{parent:"node",eventSuffix:"NodeLabel",payloadKey:"node",isEnabled:function(n){return Zo(n.settings.nodeLabelEvents)},writesPickingThisFrame:function(n){return Ko(n.settings.nodeLabelEvents)},setHover:function(n,e,t){return n.setNodeState(e,{isLabelHovered:t})},getCursor:function(n,e){var t;return(t=n.nodeDataCache[e])===null||t===void 0?void 0:t.labelCursor},resolveForVerb:function(n,e,t){var r=Yo(t.settings.nodeLabelEvents,e);return r===!1?null:r==="extend"?{kind:"node",key:n.key}:n}},edgeLabel:{parent:"edge",eventSuffix:"EdgeLabel",payloadKey:"edge",isEnabled:function(n){return Zo(n.settings.edgeLabelEvents)},writesPickingThisFrame:function(n){return Ko(n.settings.edgeLabelEvents)},setHover:function(n,e,t){return n.setEdgeState(e,{isLabelHovered:t})},getCursor:function(n,e){var t;return(t=n.edgeDataCache[e])===null||t===void 0?void 0:t.labelCursor},resolveForVerb:function(n,e,t){var r=Yo(t.settings.edgeLabelEvents,e);return r===!1?null:r==="extend"?{kind:"edge",key:n.key}:n}}},mt=["node","edge","nodeLabel","edgeLabel"];function Dc(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function vt(a,n,e){var t;return(t=a.idsByKind[n].get(e))!==null&&t!==void 0?t:0}function _r(a,n){var e=z(mt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;if(r===n||pe[r].parent===n){var i=z(a.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;a.lookup[l]=null}}catch(f){i.e(f)}finally{i.f()}a.idsByKind[r]=new Map}}}catch(f){e.e(f)}finally{e.f()}var s=1,d=z(mt),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;if(c===n)break;s+=a.idsByKind[c].size}}catch(f){d.e(f)}finally{d.f()}a.nextId=s}function Qo(a,n,e){var t=a.nextId++;return a.idsByKind[n].set(e,t),a.lookup[t]={kind:n,key:e},t}function Lc(a,n){var e=z(mt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;if(pe[r].parent!==null){var i=z(a.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;a.lookup[l]=null}}catch(_){i.e(_)}finally{i.f()}a.idsByKind[r]=new Map}}}catch(_){e.e(_)}finally{e.f()}a.nextId=1;var s=z(mt),d;try{for(s.s();!(d=s.n()).done;){var u=d.value;if(pe[u].parent===null){var c=z(a.idsByKind[u].values()),f;try{for(c.s();!(f=c.n()).done;){var g=f.value;g>=a.nextId&&(a.nextId=g+1)}}catch(_){c.e(_)}finally{c.f()}}}}catch(_){s.e(_)}finally{s.f()}var h=z(mt),m;try{for(h.s();!(m=h.n()).done;){var v=m.value,p=pe[v];if(!(p.parent===null||!p.isEnabled(n))){var b=z(a.idsByKind[p.parent].keys()),y;try{for(b.s();!(y=b.n()).done;){var x=y.value;a.idsByKind[v].set(x,a.nextId),a.lookup[a.nextId]={kind:v,key:x},a.nextId++}}catch(_){b.e(_)}finally{b.f()}}}}catch(_){h.e(_)}finally{h.f()}}function Cc(a,n){var e=z(mt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value,i=a[r],o=n[r];if(i!==o){if(i.size!==o.size)return!1;var l=z(i),s;try{for(l.s();!(s=l.n()).done;){var d=ne(s.value,2),u=d[0],c=d[1];if(o.get(u)!==c)return!1}}catch(f){l.e(f)}finally{l.f()}}}}catch(f){e.e(f)}finally{e.f()}return!0}function Jo(a,n,e){pe[n.kind].setHover(a,n.key,e)}function kc(a,n){return pe[n.kind].getCursor(a,n.key)}function vn(a,n){return"".concat(n).concat(pe[a].eventSuffix)}function mn(a,n){return O(O({},n),{},E({},pe[a.kind].payloadKey,a.key))}function Pc(a,n,e){var t=pe[n.kind].resolveForVerb;return t?t(n,e,a):n}function Fc(a,n){var e=pe[n.kind].isHitValid;return e?e(a,n.key):!0}function Tr(a){return mt.filter(function(n){return n===a||pe[n].parent===a})}function us(a,n,e){return n&&(n=Pc(a,n,e)),n&&!Fc(a,n)&&(n=null),n}function Er(a,n,e){var t=e==="wheel"?a.stateManager.hovered:a.getHitAtPosition(n);return us(a,t,e)}function Ic(a,n){return!a||!n?a===n:a.kind===n.kind&&a.key===n.key}function cs(a,n,e){var t={event:e,preventSigmaDefault:function(){return e.preventSigmaDefault()}},r=a.dragManager.session,i=r?{kind:"node",key:r.node}:us(a,n,"enter"),o=a.stateManager,l=o.hovered;Ic(l,i)||(l&&(Jo(a,l,!1),a.emit(vn(l.kind,"leave"),mn(l,t))),o.setHovered(i),i&&(Jo(a,i,!0),a.emit(vn(i.kind,"enter"),mn(i,t))),a.updateContainerCursor())}function Nc(a,n,e,t){t.handleResize=function(){return a.scheduleRefresh()},window.addEventListener("resize",t.handleResize),t.handleMove=function(i){a.hoverResolver.pointerMoved(gt(i))},t.handleMoveBody=function(i){var o=gt(i),l=a.dragManager;if(l.pendingNode&&!l.session){var s=a.nodeStyleAnalysis,d=s.xAttribute,u=s.yAttribute,c=a.settings;l.start(l.pendingNode,o,c.getDraggedNodes,d||"x",u||"y"),l.pendingNode=null}l.session&&(l.applyMove(o,a.settings.dragPositionToAttributes),a.emit("nodeDrag",{node:l.session.node,allDraggedNodes:l.session.allNodes,event:o}),o.preventSigmaDefault()),a.emit("moveBody",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})},t.handleLeave=function(i){var o=gt(i),l={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}};a.hoverResolver.pointerLeft(),cs(a,null,o),a.emit("leaveStage",l)},t.handleEnter=function(i){var o=gt(i);a.emit("enterStage",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})};var r=function(o){return function(l){var s=gt(l),d={event:s,preventSigmaDefault:function(){return s.preventSigmaDefault()}},u=Er(a,s,o);if(u){a.emit(vn(u.kind,o),mn(u,d));return}a.emit("".concat(o,"Stage"),d)}};t.handleClick=r("click"),t.handleRightClick=r("rightClick"),t.handleDoubleClick=r("doubleClick"),t.handleWheel=r("wheel"),t.handleDown=function(i){var o=gt(i),l={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},s=Er(a,o,"down");if(s){s.kind==="node"&&a.settings.enableNodeDrag&&(a.dragManager.pendingNode=s.key),a.emit(vn(s.kind,"down"),mn(s,l));return}a.emit("downStage",l)},t.handleUp=function(i){var o=gt(i),l={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},s=a.dragManager.end();s&&a.emit("nodeDragEnd",O({node:s.node,allDraggedNodes:s.allNodes},l));var d=Er(a,o,"up");if(d){a.emit(vn(d.kind,"up"),mn(d,l));return}a.emit("upStage",l)},n.on("mousemove",t.handleMove),n.on("mousemovebody",t.handleMoveBody),n.on("click",t.handleClick),n.on("rightClick",t.handleRightClick),n.on("doubleClick",t.handleDoubleClick),n.on("wheel",t.handleWheel),n.on("mousedown",t.handleDown),n.on("mouseup",t.handleUp),n.on("mouseleave",t.handleLeave),n.on("mouseenter",t.handleEnter),e.on("touchdown",t.handleDown),e.on("touchdown",t.handleMove),e.on("touchup",t.handleUp),e.on("touchmove",t.handleMove),e.on("tap",t.handleClick),e.on("doubletap",t.handleDoubleClick),e.on("touchmove",t.handleMoveBody)}function Gc(a,n){var e=a.graph,t=new Set(["x","y","zIndex","type"]);n.eachNodeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,l=!o||o.some(function(s){return t.has(s)});a.refresh({partialGraph:{nodes:e.nodes()},skipIndexation:!l,schedule:!0})},n.eachEdgeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,l=o&&["zIndex","type"].some(function(s){return o?.includes(s)});a.refresh({partialGraph:{edges:e.edges()},skipIndexation:!l,schedule:!0})},n.addNodeGraphUpdate=function(r){a.addNode(r.key),a.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},n.updateNodeGraphUpdate=function(r){a.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},n.dropNodeGraphUpdate=function(r){a.removeNode(r.key),a.refresh({schedule:!0})},n.addEdgeGraphUpdate=function(r){var i=r.key;a.edgeGroups.register(i),a.addEdge(i);var o=a.edgeGroups.getSiblings(i),l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;a.addEdge(d)}}catch(u){l.e(u)}finally{l.f()}a.refresh({partialGraph:{edges:[i].concat(j(o))},schedule:!0})},n.updateEdgeGraphUpdate=function(r){a.refresh({partialGraph:{edges:[r.key]},skipIndexation:!1,schedule:!0})},n.dropEdgeGraphUpdate=function(r){var i=r.key,o=a.edgeGroups.getSiblings(i);a.edgeGroups.unregister(i),a.removeEdge(i);var l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;a.addEdge(d)}}catch(u){l.e(u)}finally{l.f()}a.refresh({schedule:!0})},n.clearEdgesGraphUpdate=function(){a.clearEdgeState(),a.clearEdgeIndices(),a.refresh({schedule:!0})},n.clearGraphUpdate=function(){a.clearEdgeState(),a.clearNodeState(),a.clearEdgeIndices(),a.clearNodeIndices(),a.refresh({schedule:!0})},e.on("nodeAdded",n.addNodeGraphUpdate),e.on("nodeDropped",n.dropNodeGraphUpdate),e.on("nodeAttributesUpdated",n.updateNodeGraphUpdate),e.on("eachNodeAttributesUpdated",n.eachNodeAttributesUpdatedGraphUpdate),e.on("edgeAdded",n.addEdgeGraphUpdate),e.on("edgeDropped",n.dropEdgeGraphUpdate),e.on("edgeAttributesUpdated",n.updateEdgeGraphUpdate),e.on("eachEdgeAttributesUpdated",n.eachEdgeAttributesUpdatedGraphUpdate),e.on("edgesCleared",n.clearEdgesGraphUpdate),e.on("cleared",n.clearGraphUpdate)}function Mc(a,n){a.removeListener("nodeAdded",n.addNodeGraphUpdate),a.removeListener("nodeDropped",n.dropNodeGraphUpdate),a.removeListener("nodeAttributesUpdated",n.updateNodeGraphUpdate),a.removeListener("eachNodeAttributesUpdated",n.eachNodeAttributesUpdatedGraphUpdate),a.removeListener("edgeAdded",n.addEdgeGraphUpdate),a.removeListener("edgeDropped",n.dropEdgeGraphUpdate),a.removeListener("edgeAttributesUpdated",n.updateEdgeGraphUpdate),a.removeListener("eachEdgeAttributesUpdated",n.eachEdgeAttributesUpdatedGraphUpdate),a.removeListener("edgesCleared",n.clearEdgesGraphUpdate),a.removeListener("cleared",n.clearGraphUpdate)}var zc={x:.5,y:.5,angle:0,ratio:1},Oc=8,Bc=.001;function Wc(a){var n=a.coords,e=a.nodeData,t=a.dimensions,r=a.stagePadding,i=a.zoomToSizeRatioFunction,o=a.itemSizesReference,l=a.fitLabels,s=a.nodeLabelBox,d=Object.keys(n);if(!d.length)return a.extent;for(var u=i(1)||1,c=o==="positions",f=t.width,g=t.height,h=a.extent,m=0;m<Oc;m++){for(var v=qn(h),p={width:h.x[1]-h.x[0]||1,height:h.y[1]-h.y[0]||1},b=Xe(zc,t,p,r),y=es(b,v({x:0,y:0}),f,g),x=es(b,v({x:1,y:0}),f,g),_=Math.hypot(x.x-y.x,x.y-y.y)||1,T=1/0,R=-1/0,S=1/0,A=-1/0,C=0,P=d.length;C<P;C++){var w=d[C],I=e[w],L=I.size/u*(c?_:1),k=-L,N=L,M=-L,F=L;if(l){var D=s(I,L);D&&(D.minX<k&&(k=D.minX),D.maxX>N&&(N=D.maxX),D.minY<M&&(M=D.minY),D.maxY>F&&(F=D.maxY))}var G=n[w],H=G.x,U=G.y;T=Math.min(T,H+k/_),R=Math.max(R,H+N/_),S=Math.min(S,U-F/_),A=Math.max(A,U-M/_)}var $={x:[T,R],y:[S,A]},K=Math.max($.x[1]-$.x[0],$.y[1]-$.y[0])||1,te=Math.max(Math.abs($.x[0]-h.x[0]),Math.abs($.x[1]-h.x[1]),Math.abs($.y[0]-h.y[0]),Math.abs($.y[1]-h.y[1]));if(h=$,te/K<Bc)break}return h}function es(a,n,e,t){var r=Dt(a,n);return{x:(1+r.x)*e/2,y:(1-r.y)*t/2}}var Uc=typeof navigator<"u"&&/Mac|iP(hone|ad|od)/.test(navigator.platform),Hc=1500,$c=`.sigma-gesture-hint {
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
}`;function ts(a){var n,e,t=Ft("style");t.textContent=a,document.head.appendChild(t);var r=((n=(e=t.sheet)===null||e===void 0?void 0:e.cssRules.length)!==null&&n!==void 0?n:0)>0;return t.remove(),r}var pt=null;function Vc(){return pt===null&&(pt=$c,ts("@scope {}")&&(pt=`@scope {
`.concat(pt,`
}`)),ts("@layer sigma-gesture-hint {}")&&(pt=`@layer sigma-gesture-hint {
`.concat(pt,`
}`))),pt}var jc=(function(){function a(n){Z(this,a),E(this,"hideTimeout",null),this.styleElement=Ft("style"),this.styleElement.textContent=Vc(),n.appendChild(this.styleElement),this.element=Ft("div",{opacity:"0"},{class:"sigma-gesture-hint"}),n.appendChild(this.element)}return Q(a,[{key:"show",value:function(e,t){var r=this,i=e==="touch"?t.sharedGestureTouchMessage:Uc?t.sharedGestureAppleWheelMessage:t.sharedGestureWheelMessage;i&&(this.element.textContent=i,this.element.style.opacity="1",typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(function(){r.hideTimeout=null,r.element.style.opacity="0"},Hc))}},{key:"kill",value:function(){typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}}])})(),qc=(function(){function a(n){Z(this,a),E(this,"readBuffer",null),E(this,"fence",null),E(this,"result",new Uint8Array(4)),E(this,"generation",0),E(this,"readGeneration",0),E(this,"lastEvent",null),E(this,"active",!1),E(this,"dirty",!1),E(this,"rafId",null),E(this,"killed",!1),this.options=n}return Q(a,[{key:"pointerMoved",value:function(e){this.lastEvent=e,this.active=!0,!this.options.isRenderPending()&&this.request()}},{key:"pointerLeft",value:function(){this.active=!1,this.dirty=!1}},{key:"frameRendered",value:function(){this.request()}},{key:"invalidate",value:function(){this.generation++}},{key:"request",value:function(){if(!(this.killed||!this.active||!this.lastEvent)){if(this.fence){this.dirty=!0;return}this.startRead()}}},{key:"startRead",value:function(){var e=this.options,t=e.gl,r=e.getFrameBuffer,i=e.getPixelRatio,o=e.getDownSizingRatio;this.readGeneration=this.generation;var l=this.lastEvent,s=Pa(t,l.x,l.y,i(),o()),d=ne(s,2),u=d[0],c=d[1];this.readBuffer||(this.readBuffer=t.createBuffer()),t.bindFramebuffer(t.FRAMEBUFFER,r()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(u,c,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(l)}},{key:"schedulePoll",value:function(e){var t=this;this.rafId=requestAnimationFrame(function(){t.rafId=null,t.poll(e)})}},{key:"poll",value:function(e){var t=this.options,r=t.gl,i=t.onIndex;if(!(this.killed||!this.fence)){var o=r.clientWaitSync(this.fence,0,0);if(o===r.TIMEOUT_EXPIRED){this.schedulePoll(e);return}if(r.deleteSync(this.fence),this.fence=null,o!==r.WAIT_FAILED&&this.readGeneration===this.generation){r.bindBuffer(r.PIXEL_PACK_BUFFER,this.readBuffer),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,this.result),r.bindBuffer(r.PIXEL_PACK_BUFFER,null);var l=ne(this.result,4),s=l[0],d=l[1],u=l[2],c=l[3];this.active&&i(Fa(s,d,u,c),e)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}}},{key:"reset",value:function(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}},{key:"kill",value:function(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;var e=this.options.gl;this.fence&&e.deleteSync(this.fence),this.fence=null,this.readBuffer&&e.deleteBuffer(this.readBuffer),this.readBuffer=null}}])})(),ns=(function(){function a(n,e){Z(this,a),this.key=n,this.size=e}return Q(a,null,[{key:"compare",value:function(e,t){return e.size>t.size?-1:e.size<t.size||e.key>t.key?1:-1}}])})(),ma=(function(){function a(){Z(this,a),E(this,"width",0),E(this,"height",0),E(this,"cellSize",0),E(this,"columns",0),E(this,"rows",0),E(this,"cells",{})}return Q(a,[{key:"resizeAndClear",value:function(e,t){this.width=e.width,this.height=e.height,this.cellSize=t,this.columns=Math.ceil(e.width/t),this.rows=Math.ceil(e.height/t),this.cells={}}},{key:"getIndex",value:function(e){var t=Math.floor(e.x/this.cellSize),r=Math.floor(e.y/this.cellSize);return r*this.columns+t}},{key:"add",value:function(e,t,r){var i=new ns(e,t),o=this.getIndex(r),l=this.cells[o];l||(l=[],this.cells[o]=l),l.push(i)}},{key:"organize",value:function(){for(var e in this.cells){var t=this.cells[e];t.sort(ns.compare)}}},{key:"getLabelsToDisplay",value:function(e,t,r){var i=this.cellSize*this.cellSize,o=i/e/e,l=o*t/i,s=Math.ceil(l),d=[];if(r)for(var u=Math.max(0,Math.floor(r.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(r.x2/this.cellSize)),f=Math.max(0,Math.floor(r.y1/this.cellSize)),g=Math.min(this.rows-1,Math.floor(r.y2/this.cellSize)),h=f;h<=g;h++)for(var m=u;m<=c;m++){var v=h*this.columns+m,p=this.cells[v];if(p)for(var b=0;b<Math.min(s,p.length);b++)d.push(p[b].key)}else for(var y in this.cells)for(var x=this.cells[y],_=0;_<Math.min(s,x.length);_++)d.push(x[_].key);return d}}])})();function Xc(a){var n=a.graph,e=a.hoveredNode,t=a.highlightedNodes,r=a.displayedNodeLabels,i=new Set,o=new Set(t);e&&o.add(e);var l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;n.hasNode(d)&&n.forEachEdge(d,function(g){i.add(g)})}}catch(g){l.e(g)}finally{l.f()}var u=z(r),c;try{var f=function(){var h=c.value;if(o.has(h))return 1;n.forEachEdge(h,function(m,v,p,b){var y=p===h?b:p;r.has(y)&&i.add(m)})};for(u.s();!(c=u.n()).done;)f()}catch(g){u.e(g)}finally{u.f()}return Array.from(i)}var Wt=150,Ut=50,Yc={both:0,node:1,label:2},Kc={over:0,above:1,below:2,auto:3},as=12,Zc=3,Qc=(function(){function a(n){Z(this,a),E(this,"labelGrid",new ma),E(this,"edgeAnchorGrid",new ma),E(this,"displayedNodeLabels",new Set),E(this,"displayedEdgeLabels",new Set),E(this,"edgeLabelCandidates",[]),E(this,"renderedNodeLabels",new Set),E(this,"labelSizeCache",new Map),E(this,"framePassPoints",new Float32Array(0)),E(this,"labelsDirty",!0),this.internals=n}return Q(a,[{key:"resetFrame",value:function(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}},{key:"clearEdgeLabels",value:function(){this.displayedEdgeLabels=new Set}},{key:"resetLabelGrid",value:function(){this.labelGrid=new ma,this.edgeAnchorGrid=new ma}},{key:"processWebGLLabels",value:function(e){for(var t,r=this.internals,i=r.labelProgram,o=r.primitives,l=r.nodeDataCache,s=(o==null||(t=o.nodes)===null||t===void 0||(t=t.label)===null||t===void 0||(t=t.font)===null||t===void 0?void 0:t.family)||"sans-serif",d=new Map,u=0,c=e.length;u<c;u++){var f=e[u],g=l[f];if(!(g.visibility==="hidden"||!g.label)){var h=g.labelFont||s,m=d.get(h);m?m.push(g.label):d.set(h,[g.label])}}var v=z(d),p;try{for(v.s();!(p=v.n()).done;){var b=ne(p.value,2),y=b[0],x=b[1],_=Kn(y),T=_.family,R=_.weight,S=_.style,A=i.registerFont(T,R,S);i.ensureGlyphsReady(x,A)}}catch(C){v.e(C)}finally{v.f()}}},{key:"measureNodeLabel",value:function(e){var t,r;if(!e.label)return{width:0,height:0,textHeight:0};var i=this.internals,o=i.labelProgram,l=i.primitives,s=(t=e.labelSize)!==null&&t!==void 0?t:14,d=e.labelFont||(l==null||(r=l.nodes)===null||r===void 0||(r=r.label)===null||r===void 0||(r=r.font)===null||r===void 0?void 0:r.family)||"sans-serif",u="".concat(e.label,"|").concat(s,"|").concat(d);if(this.labelSizeCache.has(u))return this.labelSizeCache.get(u);var c=Kn(d),f=c.family,g=c.weight,h=c.style,m=o.registerFont(f,g,h),v=o.measureLabel(e.label,s,m);return this.labelSizeCache.set(u,v),v}},{key:"nodeLabelBox",value:function(e,t){var r,i,o,l,s;if(e.visibility==="hidden"||e.labelVisibility==="hidden")return null;var d=this.measureNodeLabel(e),u=d.width,c=d.height,f=d.textHeight;if(!u)return null;var g=(r=(i=this.internals.primitives)===null||i===void 0||(i=i.nodes)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:ht,h=t+g,m=e.labelBackgroundColor?(o=e.labelBackgroundPadding)!==null&&o!==void 0?o:la:0,v=u/2,p=c/2,b=v+m,y=p+m,x=f/2,_=0,T=0;switch((l=e.labelPosition)!==null&&l!==void 0?l:"right"){case"left":_=-(h+v);break;case"above":T=-(h+x);break;case"below":T=h+x;break;case"over":break;default:_=h+v}var R=(s=e.labelAngle)!==null&&s!==void 0?s:0,S=ka({x:_,y:T},R),A=S.x,C=S.y,P=Math.abs(Math.cos(R)),w=Math.abs(Math.sin(R)),I=P*b+w*y,L=w*b+P*y;return{minX:A-I,maxX:A+I,minY:C-L,maxY:C+L}}},{key:"computeDisplayedNodeLabels",value:function(){var e=this.internals.getCameraState(),t=this.internals.getDimensions(),r=t.width,i=t.height,o=this.internals.viewportToFramedGraph({x:-Wt,y:-Ut}),l=this.internals.viewportToFramedGraph({x:r+Wt,y:-Ut}),s=this.internals.viewportToFramedGraph({x:-Wt,y:i+Ut}),d=this.internals.viewportToFramedGraph({x:r+Wt,y:i+Ut}),u=Math.min(o.x,l.x,s.x,d.x),c=Math.max(o.x,l.x,s.x,d.x),f=Math.min(o.y,l.y,s.y,d.y),g=Math.max(o.y,l.y,s.y,d.y),h=Xe({x:.5,y:.5,ratio:1,angle:0},{width:r,height:i},this.internals.getGraphDimensions(),this.internals.getStagePadding()),m=function(D){var G=Dt(h,D);return{x:(1+G.x)*r/2,y:(1-G.y)*i/2}},v=m({x:u,y:f}),p=m({x:c,y:f}),b=m({x:u,y:g}),y=m({x:c,y:g}),x={x1:Math.min(v.x,p.x,b.x,y.x),y1:Math.min(v.y,p.y,b.y,y.y),x2:Math.max(v.x,p.x,b.x,y.x),y2:Math.max(v.y,p.y,b.y,y.y)},_=this.internals,T=_.settings,R=_.nodeDataCache,S=_.nodesWithForcedLabels,A=this.labelGrid.getLabelsToDisplay(e.ratio,T.labelDensity,x);qa(A,S);for(var C=0,P=A.length;C<P;C++){var w=A[C],I=R[w];if(!this.displayedNodeLabels.has(w)&&!(I.visibility==="hidden"||I.labelVisibility==="hidden")&&I.label&&!(I.x<u||I.x>c||I.y<f||I.y>g)){var L=this.internals.framedGraphToViewport(I),k=L.x,N=L.y,M=this.internals.scaleSize(I.size);!Ze(I)&&M<T.labelRenderedSizeThreshold||k<-Wt-M||k>r+Wt+M||N<-Ut-M||N>i+Ut+M||this.displayedNodeLabels.add(w)}}}},{key:"buildFramePassPoints",value:function(){var e=this.internals,t=e.nodeDataCache,r=e.nodeDataTexture;if(!r)return{data:this.framePassPoints,count:0};var i=this.displayedNodeLabels.size*3;this.framePassPoints.length<i&&(this.framePassPoints=new Float32Array(i));var o=this.framePassPoints,l=0,s=z(this.displayedNodeLabels),d;try{for(s.s();!(d=s.n()).done;){var u,c,f=d.value,g=t[f];if(g){var h=r.getIndex(f);h<0||(o[l*3]=h,o[l*3+1]=(u=ct[g.labelPosition||Ue.labelPosition])!==null&&u!==void 0?u:0,o[l*3+2]=(c=g.labelAngle)!==null&&c!==void 0?c:0,l++)}}}catch(m){s.e(m)}finally{s.f()}return{data:o,count:l}}},{key:"renderWebGLLabels",value:function(e,t){var r=this.internals,i=r.nodeDataCache,o=r.labelProgram,l=r.primitives,s=r.nodeDataTexture,d=[],u=z(this.displayedNodeLabels),c;try{for(u.s();!(c=u.n()).done;){var f=c.value;if(!this.renderedNodeLabels.has(f)){var g=i[f];t&&g.labelDepth!==t||(this.renderedNodeLabels.add(f),d.push(f))}}}catch(xe){u.e(xe)}finally{u.f()}if(d.length!==0){if(this.labelsDirty){for(var h,m,v,p=0,b=0,y=d.length;b<y;b++){var x=i[d[b]];p+=x.label.length}o.reallocate(p);for(var _=14,T=(h=l==null||(m=l.nodes)===null||m===void 0||(m=m.label)===null||m===void 0?void 0:m.margin)!==null&&h!==void 0?h:ht,R=Ue.labelPosition,S=(l==null||(v=l.nodes)===null||v===void 0||(v=v.label)===null||v===void 0||(v=v.font)===null||v===void 0?void 0:v.family)||"sans-serif",A=new Map,C=0,P=0,w=d.length;P<w;P++){var I,L,k,N,M=d[P],F=i[M],D=F.labelFont||S,G=A.get(D);if(G===void 0){var H=Kn(D),U=H.family,$=H.weight,K=H.style;G=o.registerFont(U,$,K),A.set(D,G)}var te={text:F.label,x:F.x,y:F.y,size:(I=F.labelSize)!==null&&I!==void 0?I:_,color:F.labelColor,nodeSize:F.size,margin:T,position:(L=F.labelPosition)!==null&&L!==void 0?L:R,hidden:!1,forceLabel:Ze(F),type:"default",zIndex:(k=F.zIndex)!==null&&k!==void 0?k:0,parentType:"node",parentKey:M,fontKey:G,labelAngle:(N=F.labelAngle)!==null&&N!==void 0?N:0,nodeIndex:s.getIndex(M)},ue=o.processLabel(M,C,te);C+=ue}o.invalidateBuffers()}o.render(e)}}},{key:"renderBackdrops",value:function(e,t){var r=this.internals,i=r.backdropProgram,o=r.nodeDataCache,l=r.nodesWithBackdrop,s=r.attachmentManager,d=r.pixelRatio,u=r.nodeDataTexture,c=[],f=z(l),g;try{for(f.s();!(g=f.n()).done;){var h,m=g.value,v=o[m];if(!(!v||v.visibility==="hidden")&&!(t&&v.depth!==t)){var p=(h=u?.getIndex(m))!==null&&h!==void 0?h:-1;p<0||c.push({key:m,nodeIndex:p})}}}catch(st){f.e(st)}finally{f.f()}if(c.length!==0){i.reallocate(c.length);for(var b=0;b<c.length;b++){var y,x,_,T,R,S,A,C,P=c[b],w=P.key,I=P.nodeIndex,L=o[w],k=this.displayedNodeLabels.has(w),N=k?this.measureNodeLabel(L):{width:0,height:0,textHeight:0},M=N.textHeight,F=N.width,D=N.height,G=0,H=0;if(k&&L.labelAttachment&&s){var U=s.getEntry(w,L.labelAttachment);if(U){var $=L.labelAttachmentPlacement||"below";if($==="below"||$==="above"){var K=U.height/d;D+=K+at,F=Math.max(F,U.width/d),H=$==="below"?(K+at)/2:-(K+at)/2}else{var te=U.width/d;F+=te+at,D=Math.max(D,U.height/d),G=$==="right"?(te+at)/2:-(te+at)/2}}}var ue=L.backdropColor?Ye(L.backdropColor):[255,255,255,255],xe=L.backdropShadowColor?Ye(L.backdropShadowColor):[0,0,0,128],Ce=ue.map(function(st){return st/255}),qt=xe.map(function(st){return st/255}),An=(y=L.backdropShadowBlur)!==null&&y!==void 0?y:12,xt=(x=L.backdropPadding)!==null&&x!==void 0?x:6,Ms=L.backdropBorderColor?Ye(L.backdropBorderColor):[0,0,0,0],zs=Ms.map(function(st){return st/255}),Os=(_=L.backdropBorderWidth)!==null&&_!==void 0?_:0,Bs=(T=L.backdropCornerRadius)!==null&&T!==void 0?T:0,Mr=(R=L.backdropLabelPadding)!==null&&R!==void 0?R:-1,Ws=Mr<0?xt:Mr,Us=(S=Yc[(A=L.backdropArea)!==null&&A!==void 0?A:"both"])!==null&&S!==void 0?S:0,Hs={key:w,nodeIndex:I,label:L.label,labelWidth:F,labelHeight:D,textHeight:M,type:"default",position:L.labelPosition||Ue.labelPosition,labelAngle:(C=L.labelAngle)!==null&&C!==void 0?C:0,backdropColor:Ce,backdropShadowColor:qt,backdropShadowBlur:An,backdropPadding:xt,backdropBorderColor:zs,backdropBorderWidth:Os,backdropCornerRadius:Bs,backdropLabelPadding:Ws,backdropArea:Us,labelBoxOffset:[G,H]};i.processBackdrop(b,Hs)}i.invalidateBuffers(),i.render(e)}}},{key:"renderLabelBackgrounds",value:function(e,t){var r=this.internals,i=r.labelBackgroundProgram,o=r.nodeDataCache,l=r.nodeDataTexture,s=pe.nodeLabel.writesPickingThisFrame(this.internals),d=[],u=z(this.displayedNodeLabels),c;try{for(u.s();!(c=u.n()).done;){var f=c.value,g=o[f];!g||g.visibility==="hidden"||t&&g.labelDepth!==t||!s&&!g.labelBackgroundColor||d.push(f)}}catch(I){u.e(I)}finally{u.f()}if(d.length!==0){i.reallocate(d.length);for(var h=0;h<d.length;h++){var m,v,p,b,y=d[h],x=o[y],_=(m=l?.getIndex(y))!==null&&m!==void 0?m:-1;if(!(_<0)){var T=this.measureNodeLabel(x),R=T.width,S=T.height,A=T.textHeight,C=vt(this.internals.pickingState,"nodeLabel",y)||vt(this.internals.pickingState,"node",y),P=x.labelBackgroundColor?Se(x.labelBackgroundColor):Se("transparent"),w={nodeIndex:_,id:Lt(C),color:P,labelWidth:R,labelHeight:S,textHeight:A,positionMode:(v=ct[x.labelPosition||Ue.labelPosition])!==null&&v!==void 0?v:0,labelAngle:(p=x.labelAngle)!==null&&p!==void 0?p:0,padding:(b=x.labelBackgroundPadding)!==null&&b!==void 0?b:la};i.processLabelBackground(h,w)}}i.invalidateBuffers(),i.render(e)}}},{key:"cacheAttachments",value:function(e){var t=this.internals,r=t.attachmentManager,i=t.pixelRatio,o=t.nodeDataCache,l=t.nodesWithBackdrop,s=t.graph;if(r){var d=z(l),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;if(this.displayedNodeLabels.has(c)){var f=o[c];if(!(!f||f.visibility==="hidden")&&!(e&&f.depth!==e)&&f.labelAttachment){var g=s.getNodeAttributes(c),h=this.measureNodeLabel(f),m=h.width,v=h.height,p={node:c,attributes:g,pixelRatio:i,labelWidth:m,labelHeight:v};r.renderAttachment(c,f.labelAttachment,p)}}}}catch(b){d.e(b)}finally{d.f()}r.regenerateAtlas()}}},{key:"renderAttachments",value:function(e,t){var r=this.internals,i=r.attachmentManager,o=r.attachmentProgram,l=r.nodeDataCache,s=r.nodesWithBackdrop,d=r.pixelRatio,u=r.nodeDataTexture;if(!(!i||!o)){var c=0;o.reallocateAttachments(s.size);var f=z(s),g;try{for(f.s();!(g=f.n()).done;){var h,m,v,p,b=g.value;if(this.displayedNodeLabels.has(b)){var y=l[b];if(!(!y||y.visibility==="hidden")&&!(t&&y.labelDepth!==t)&&y.labelAttachment){var x=i.getEntry(b,y.labelAttachment);if(x){var _=(h=u?.getIndex(b))!==null&&h!==void 0?h:-1;if(!(_<0)){var T=this.measureNodeLabel(y),R=T.width,S=T.height,A=T.textHeight,C=(m=co[y.labelAttachmentPlacement||"below"])!==null&&m!==void 0?m:0;o.processAttachment(c,{nodeIndex:_,atlasX:x.x,atlasY:x.y,atlasW:x.width,atlasH:x.height,attachWidth:x.width/d,attachHeight:x.height/d,positionMode:(v=ct[y.labelPosition||Ue.labelPosition])!==null&&v!==void 0?v:0,attachmentPlacement:C,labelWidth:R,labelHeight:S,textHeight:A,labelAngle:(p=y.labelAngle)!==null&&p!==void 0?p:0}),c++}}}}}}catch(P){f.e(P)}finally{f.f()}c!==0&&(o.reallocateAttachments(c),i.bindTexture(hn),o.invalidateBuffers(),o.render(e))}}},{key:"computeDisplayedEdgeLabels",value:function(){var e=this.internals,t=e.graph,r=e.stateManager,i=e.settings,o=e.edgesWithForcedLabels,l=r.getHighlightedNodes(),s=i.edgeLabelAnchors==="allNodes"?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,i.labelDensity)):this.displayedNodeLabels,d=r.hovered,u=Xc({graph:t,hoveredNode:d?.kind==="node"?d.key:null,displayedNodeLabels:s,highlightedNodes:l});qa(u,o),this.edgeLabelCandidates=u,this.displayedEdgeLabels=new Set}},{key:"filterEdgeLabelsForDepth",value:function(e){for(var t=this.internals,r=t.graph,i=t.nodeDataCache,o=t.edgeDataCache,l=[],s=new Set,d=0,u=this.edgeLabelCandidates.length;d<u;d++){var c=this.edgeLabelCandidates[d];if(!s.has(c)){s.add(c);var f=r.extremities(c),g=i[f[0]],h=i[f[1]],m=o[c];!m||!g||!h||m.visibility==="hidden"||m.labelVisibility==="hidden"||g.visibility==="hidden"||h.visibility==="hidden"||e&&m.labelDepth!==e||m.label&&l.push(c)}}return l}},{key:"renderEdgeLabels",value:function(e,t){var r=this.internals,i=r.graph,o=r.nodeDataCache,l=r.edgeDataCache,s=r.primitives,d=r.edgeLabelProgram,u=r.nodeDataTexture,c=r.edgeDataTexture,f=this.filterEdgeLabelsForDepth(t),g=z(f),h;try{for(g.s();!(h=g.n()).done;){var m=h.value;this.displayedEdgeLabels.add(m)}}catch(te){g.e(te)}finally{g.f()}if(f.length!==0){if(this.labelsDirty){var v,p,b=0,y=z(f),x;try{for(y.s();!(x=y.n()).done;){var _=x.value;b+=l[_].label.length}}catch(te){y.e(te)}finally{y.f()}d.reallocate(b);var T=(v=s==null||(p=s.edges)===null||p===void 0||(p=p.label)===null||p===void 0?void 0:p.margin)!==null&&v!==void 0?v:5,R="over",S=0,A=z(f),C;try{for(A.s();!(C=A.n()).done;){var P,w,I=C.value,L=i.extremities(I),k=L[0],N=L[1],M=o[k],F=o[N],D=l[I],G=u.getIndex(k),H=u.getIndex(N),U=c.getIndex(I),$={text:D.label,x:(M.x+F.x)/2,y:(M.y+F.y)/2,size:as,color:D.labelColor,nodeSize:0,nodeIndex:-1,margin:T,position:(P=D.labelPosition)!==null&&P!==void 0?P:R,hidden:!1,forceLabel:Ze(D),type:"default",zIndex:(w=D.zIndex)!==null&&w!==void 0?w:0,parentType:"edge",parentKey:I,fontKey:"",labelAngle:0,sourceX:M.x,sourceY:M.y,targetX:F.x,targetY:F.y,sourceSize:M.size,targetSize:F.size,sourceShape:M.shape||"circle",targetShape:F.shape||"circle",edgeSize:D.size,offset:0,edgeAttributes:D,sourceNodeIndex:G,targetNodeIndex:H,edgeIndex:U},K=d.processEdgeLabel(I,S,$);S+=K}}catch(te){A.e(te)}finally{A.f()}d.invalidateBuffers()}d.render(e)}}},{key:"renderEdgeLabelBackgrounds",value:function(e,t){var r,i,o=this.internals,l=o.edgeLabelBackgroundProgram,s=o.edgeLabelProgram,d=o.edgeDataCache,u=o.primitives,c=o.edgeDataTexture;if(c){var f=pe.edgeLabel.writesPickingThisFrame(this.internals),g=(r=u==null||(i=u.edges)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:5,h="over",m=this.filterEdgeLabelsForDepth(t),v=[],p=z(m),b;try{for(p.s();!(b=p.n()).done;){var y=b.value;!f&&!d[y].labelBackgroundColor||v.push(y)}}catch(M){p.e(M)}finally{p.f()}if(v.length!==0){l.reallocate(v.length);for(var x=0;x<v.length;x++){var _,T,R,S=v[x],A=d[S],C=A.label,P=s.measureLabelAtlasWidth(C),w=(_=A.labelPosition)!==null&&_!==void 0?_:h,I=typeof w=="string"&&(T=Kc[w])!==null&&T!==void 0?T:0,L=vt(this.internals.pickingState,"edgeLabel",S)||vt(this.internals.pickingState,"edge",S),k=A.labelBackgroundColor?Se(A.labelBackgroundColor):Se("transparent"),N={edgeIndex:c.getIndex(S),baseFontSize:as,totalTextWidth:P,positionMode:I,margin:g,padding:(R=A.labelBackgroundPadding)!==null&&R!==void 0?R:Zc,color:k,id:Lt(L),edgeAttributes:A};l.processEdgeLabelBackground(x,S,N)}l.invalidateBuffers(),l.render(e)}}}}])})(),Jc=(function(){function a(n,e,t,r){Z(this,a),E(this,"nodeStates",new Map),E(this,"edgeStates",new Map),E(this,"hovered",null),E(this,"dirtyNodes",new Set),E(this,"dirtyEdges",new Set),E(this,"graphStateChanged",!1),E(this,"graphStateFlagsDirty",!1),this.scheduleRefresh=n,this.customNodeStateDefaults=e,this.customEdgeStateDefaults=t,this.customGraphStateDefaults=r,this.graphState=Ba(r)}return Q(a,[{key:"getNodeState",value:function(e){e=""+e;var t=this.nodeStates.get(e);return t||(t=ki(this.customNodeStateDefaults),this.nodeStates.set(e,t)),t}},{key:"getEdgeState",value:function(e){e=""+e;var t=this.edgeStates.get(e);return t||(t=Pi(this.customEdgeStateDefaults),this.edgeStates.set(e,t)),t}},{key:"getGraphState",value:function(){return this.flushGraphStateFlags(),this.graphState}},{key:"getHighlightedNodes",value:function(){var e=new Set,t=z(this.nodeStates),r;try{for(t.s();!(r=t.n()).done;){var i=ne(r.value,2),o=i[0],l=i[1];l.isHighlighted&&e.add(o)}}catch(s){t.e(s)}finally{t.f()}return e}},{key:"setNodeState",value:function(e,t){e=""+e;var r=this.getNodeState(e);if(Pt(r,t)){var i=O(O({},r),t);this.nodeStates.set(e,i),this.dirtyNodes.add(e),this.updateHoveredNodeTracking(e,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setEdgeState",value:function(e,t){e=""+e;var r=this.getEdgeState(e);if(Pt(r,t)){var i=O(O({},r),t);this.edgeStates.set(e,i),this.dirtyEdges.add(e),this.updateHoveredEdgeTracking(e,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setGraphState",value:function(e){if(Pt(this.graphState,e)){var t=O(O({},this.graphState),e);t.isIdle=!t.isPanning&&!t.isZooming&&!t.isDragging,this.graphState=t,this.graphStateChanged=!0,this.scheduleRefresh()}}},{key:"setNodesState",value:function(e,t){var r=!1,i=z(e),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;l=""+l;var s=this.getNodeState(l);if(Pt(s,t)){var d=O(O({},s),t);this.nodeStates.set(l,d),this.dirtyNodes.add(l),this.updateHoveredNodeTracking(l,s,d),r=!0}}}catch(u){i.e(u)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"setEdgesState",value:function(e,t){var r=!1,i=z(e),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;l=""+l;var s=this.getEdgeState(l);if(Pt(s,t)){var d=O(O({},s),t);this.edgeStates.set(l,d),this.dirtyEdges.add(l),this.updateHoveredEdgeTracking(l,s,d),r=!0}}}catch(u){i.e(u)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"removeNode",value:function(e){this.nodeStates.delete(e),this.dirtyNodes.delete(e),this.clearHoveredFor("node",e)}},{key:"removeEdge",value:function(e){this.edgeStates.delete(e),this.dirtyEdges.delete(e),this.clearHoveredFor("edge",e)}},{key:"pruneNodes",value:function(e){var t=z(this.nodeStates.keys()),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;e(i)||this.removeNode(i)}}catch(o){t.e(o)}finally{t.f()}}},{key:"pruneEdges",value:function(e){var t=z(this.edgeStates.keys()),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;e(i)||this.removeEdge(i)}}catch(o){t.e(o)}finally{t.f()}}},{key:"clearNodes",value:function(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(Tr("node"))}},{key:"clearEdges",value:function(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(Tr("edge"))}},{key:"resetGraphState",value:function(){this.graphState=Ba(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}},{key:"clearDirtyTracking",value:function(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}},{key:"setHovered",value:function(e){this.hovered=e}},{key:"clearHoveredFor",value:function(e,t){this.hovered&&this.hovered.key===t&&Tr(e).includes(this.hovered.kind)&&(this.hovered=null)}},{key:"clearHoveredForKinds",value:function(e){this.hovered&&e.includes(this.hovered.kind)&&(this.hovered=null)}},{key:"updateGraphStateFromNodes",value:function(){var e,t=!1,r=!1,i=!1,o=z(this.nodeStates),l;try{for(o.s();!(l=o.n()).done;){var s=ne(l.value,2),d=s[1];if(d.isHovered&&(t=!0),d.isHighlighted&&(r=!0),d.isDragged&&(i=!0),t&&r&&i)break}}catch(c){o.e(c)}finally{o.f()}!t&&((e=this.hovered)===null||e===void 0?void 0:e.kind)==="edge"&&(t=!0);var u=!this.graphState.isPanning&&!this.graphState.isZooming&&!i;(this.graphState.hasHovered!==t||this.graphState.hasHighlighted!==r||this.graphState.isDragging!==i||this.graphState.isIdle!==u)&&(this.graphStateChanged=!0),this.graphState=O(O({},this.graphState),{},{hasHovered:t,hasHighlighted:r,isDragging:i,isIdle:u})}},{key:"updateGraphStateFromEdges",value:function(){var e,t=((e=this.hovered)===null||e===void 0?void 0:e.kind)==="node";if(!t){var r=z(this.edgeStates),i;try{for(r.s();!(i=r.n()).done;){var o=ne(i.value,2),l=o[1];if(l.isHovered){t=!0;break}}}catch(s){r.e(s)}finally{r.f()}}this.graphState.hasHovered!==t&&(this.graphStateChanged=!0),this.graphState=O(O({},this.graphState),{},{hasHovered:t})}},{key:"flushGraphStateFlags",value:function(){this.graphStateFlagsDirty&&(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),this.graphStateFlagsDirty=!1)}},{key:"updateHoveredNodeTracking",value:function(e,t,r){var i;if(t.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="node"&&this.hovered.key!==e){var l=this.hovered.key,s=this.getNodeState(l);this.nodeStates.set(l,O(O({},s),{},{isHovered:!1})),this.dirtyNodes.add(l)}this.hovered={kind:"node",key:e}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="node"&&this.hovered.key===e&&(this.hovered=null)}},{key:"updateHoveredEdgeTracking",value:function(e,t,r){var i;if(t.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="edge"&&this.hovered.key!==e){var l=this.hovered.key,s=this.getEdgeState(l);this.edgeStates.set(l,O(O({},s),{},{isHovered:!1})),this.dirtyEdges.add(l)}this.hovered={kind:"edge",key:e}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="edge"&&this.hovered.key===e&&(this.hovered=null)}}])})(),rs=1,is=2,os=3,ss=4,eh=(function(a){function n(e,t){var r,i,o,l,s,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Z(this,n),s=se(this,n),E(s,"nodeReducer",null),E(s,"edgeReducer",null),E(s,"stageCanvas",null),E(s,"mouseLayer",null),E(s,"gestureHint",null),E(s,"extraElements",{}),E(s,"webGLContext",null),E(s,"pickingFrameBuffer",null),E(s,"pickingTexture",null),E(s,"pickingDepthBuffer",null),E(s,"activeListeners",{}),E(s,"nodeVariableEntries",[]),E(s,"edgeVariableEntries",[]),E(s,"edgePathsByName",new Map),E(s,"nodeProgramIndex",{}),E(s,"edgeProgramIndex",{}),E(s,"edgeTextureIndexCache",{}),E(s,"nodeGraphCoords",{}),E(s,"nodeExtent",{x:[0,1],y:[0,1]}),E(s,"matrix",Ee()),E(s,"invMatrix",Ee()),E(s,"correctionRatio",1),E(s,"frameId",0),E(s,"customBBox",null),E(s,"gpuTimerExt",void 0),E(s,"activeGpuTimerQuery",null),E(s,"pendingGpuTimerQueries",[]),E(s,"normalizationFunction",qn({x:[0,1],y:[0,1]})),E(s,"graphToViewportRatio",1),E(s,"pickingState",Dc()),E(s,"prevNodeVisibilities",{}),E(s,"width",0),E(s,"height",0),E(s,"autoRescaleFrozen",!1),E(s,"stylesDeclaration",null),E(s,"resolvedStageStyle",{}),E(s,"renderFrame",null),E(s,"contextLost",!1),E(s,"pendingProcess","full"),E(s,"needToRefreshState",!1),E(s,"checkEdgesEventsFrame",null),E(s,"edgeStyleAnalysis",{dependency:"static",xAttribute:null,yAttribute:null}),E(s,"depthLayers",j(Un)),E(s,"customLayerPrograms",new Map),E(s,"nodeShapeSlug",null),E(s,"sdfAtlas",null),E(s,"depthRanges",{nodes:{},edges:{}}),E(s,"nodeBaseDepth",{}),E(s,"edgeBaseDepth",{});var u=d.primitives,c=d.styles,f=d.settings,g=f===void 0?{}:f,h=d.nodeReducer,m=d.edgeReducer,v=d.customNodeState,p=d.customEdgeState,b=d.customGraphState;s.stateManager=new Jc(function(){return s.scheduleStateRefresh()},v,p,b);var y=u??Ni;s.stylesDeclaration=c?{nodes:(r=c.nodes)!==null&&r!==void 0?r:Ke.nodes,edges:(i=c.edges)!==null&&i!==void 0?i:Ke.edges,stage:c.stage}:Ke,s.nodeReducer=h??null,s.edgeReducer=m??null;var x=Wa(s.stylesDeclaration.nodes);s.nodeReducer&&(x.dependency="graph-state"),s.edgeStyleAnalysis=Wa(s.stylesDeclaration.edges),s.edgeReducer&&(s.edgeStyleAnalysis.dependency="graph-state"),s.stylesDeclaration.stage&&(s.resolvedStageStyle=ja(s.stylesDeclaration.stage,s.stateManager.graphState));var _=Ui(g);if(Yn(_),_.enableNodeDrag){var T=x.xAttribute,R=x.yAttribute;if((!T||!R)&&!_.dragPositionToAttributes)throw new Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(Wi(e),!(t instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");s.container=t,s.edgeGroups=new wc(e,function(F,D){for(var G=0;G<F.length;G++){var H=s.stateManager.getEdgeState(F[G]);H.parallelIndex=G,H.parallelCount=D}});var S=new Rc(e,s.viewportToGraph.bind(s),s.setNodesState.bind(s),function(F,D){return s.emit(F,D)});if(s.depthLayers=(o=y.depthLayers)!==null&&o!==void 0?o:j(Un),!(c!=null&&c.nodes)&&!Bn.every(function(F){return s.depthLayers.includes(F)}))throw new Error("Sigma: depthLayers must include ".concat(Bn.join(", ")," for the built-in node styles."));if(!(c!=null&&c.edges)&&!Wn.every(function(F){return s.depthLayers.includes(F)}))throw new Error("Sigma: depthLayers must include ".concat(Wn.join(", ")," for the built-in edge styles."));s.itemBuckets={nodes:new pa(s.depthLayers),edges:new pa(s.depthLayers)},s.initWebGLContext(),s.mouseLayer=Ft("div",{position:"absolute",touchAction:"none",userSelect:"none"},{class:"sigma-mouse"}),s.container.appendChild(s.mouseLayer),s.resolvedStageStyle.background&&(s.container.style.backgroundColor=s.resolvedStageStyle.background),s.resolvedStageStyle.cursor&&(s.container.style.cursor=s.resolvedStageStyle.cursor);var A=new br(s.webGLContext),C=new va(s.webGLContext,{channels:1}),P=new yr(s.webGLContext),w=new va(s.webGLContext,{channels:4}),I=s.webGLContext,L=new qc({gl:I,getFrameBuffer:function(){return s.pickingFrameBuffer},getPixelRatio:function(){return s.internals.pixelRatio},getDownSizingRatio:function(){return s.internals.settings.pickingDownSizingRatio},isRenderPending:function(){return s.renderFrame!==null},onIndex:function(D,G){var H;return cs(s.internals,(H=s.pickingState.lookup[D])!==null&&H!==void 0?H:null,G)}}),k=s.initPrograms(y,_),N=y==null||(l=y.nodes)===null||l===void 0?void 0:l.labelAttachments,M=null;return N&&Object.keys(N).length>0&&(M=new mr(I,N,function(){return s.scheduleRender()})),s.internals=O(O({nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:_,primitives:y,pixelRatio:rn(),graph:e,stateManager:s.stateManager,dragManager:S,hoverResolver:L,nodeStyleAnalysis:x,pickingState:s.pickingState},k),{},{attachmentManager:M,nodeDataTexture:A,nodeFrameTexture:C,edgeDataTexture:P,edgeFrameTexture:w,getDimensions:function(){return s.getDimensions()},getGraphDimensions:function(){return s.getGraphDimensions()},getStagePadding:function(){return s.getStagePadding()},getCameraState:function(){return s.camera.getState()},getHitAtPosition:function(D){return s.getHitAtPosition(D)},setNodeState:function(D,G){return s.setNodeState(D,G)},setEdgeState:function(D,G){return s.setEdgeState(D,G)},updateContainerCursor:function(){return s.updateContainerCursor()},scheduleRefresh:function(){return s.scheduleRefresh()},viewportToFramedGraph:function(D){return s.viewportToFramedGraph(D)},viewportToGraph:function(D){return s.viewportToGraph(D)},framedGraphToViewport:function(D){return s.framedGraphToViewport(D)},scaleSize:function(D){return s.scaleSize(D)},emit:function(D,G){return s.emit(D,G)}}),s.labelRenderer=new Qc(s.internals),s.resize(),s.initializeWebGLLabels(),s.camera=new Xo,s.bindCameraHandlers(),s.mouseCaptor=new Tc(s.mouseLayer,s),s.mouseCaptor.setSettings(s.internals.settings),s.touchCaptor=new Ac(s.mouseLayer,s),s.touchCaptor.setSettings(s.internals.settings),s.bindEventHandlers(),s.bindGraphHandlers(),s.handleSettingsUpdate(),s.refresh(),s}return le(n,a),Q(n,[{key:"initializeWebGLLabels",value:function(){this.sdfAtlas=new Je,this.sdfAtlas.registerFont({family:"sans-serif",weight:"normal",style:"normal"})}},{key:"resetWebGLTexture",value:function(){var t=this.webGLContext;if(!this.pickingFrameBuffer)return this;var r=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),i=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);t.bindFramebuffer(t.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&t.deleteTexture(this.pickingTexture);var o=t.createTexture();o&&(t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r,i,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),this.pickingTexture=o),this.pickingDepthBuffer&&t.deleteRenderbuffer(this.pickingDepthBuffer);var l=t.createRenderbuffer();return l&&(t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,l),this.pickingDepthBuffer=l),t.bindFramebuffer(t.FRAMEBUFFER,null),this}},{key:"bindCameraHandlers",value:function(){var t=this;return this.activeListeners.camera=function(){t.refreshMatrices(),t.labelRenderer.labelsDirty=!0,t.scheduleRender()},this.activeListeners.cameraAnimationStart=function(r){var i=r.from,o=r.to;i.ratio!==o.ratio&&t.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=function(){t.stateManager.setGraphState({isZooming:!1})},this.camera.on("updated",this.activeListeners.camera),this.camera.on("animationStart",this.activeListeners.cameraAnimationStart),this.camera.on("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this.camera.removeListener("animationStart",this.activeListeners.cameraAnimationStart),this.camera.removeListener("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"getHitAtPosition",value:function(t){var r;if(this.contextLost)return null;var i=this.webGLContext;i.bindFramebuffer(i.FRAMEBUFFER,this.pickingFrameBuffer);var o=pi(i,this.pickingFrameBuffer,t.x,t.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),l=Fa.apply(void 0,j(o));return(r=this.pickingState.lookup[l])!==null&&r!==void 0?r:null}},{key:"bindEventHandlers",value:function(){return Nc(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}},{key:"bindGraphHandlers",value:function(){return Gc({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}},{key:"unbindGraphHandlers",value:function(){Mc(this.internals.graph,this.activeListeners)}},{key:"getNodeShapeId",value:function(t){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&t.shape&&t.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[t.shape]]:Nt(t.shape||"circle")}},{key:"processNodes",value:function(){var t=this,r=this.internals.graph,i=this.internals.settings,o=this.getDimensions(),l=i.autoRescale,s=i.autoRescaleContent,d=this.nodeExtent;if(l===!1){var u=o.width,c=o.height;d={x:[-u/2,u/2],y:[-c/2,c/2]}}else(l!=="once"||!this.autoRescaleFrozen)&&(d=this.computeNodeExtent(),s!=="positions"&&!this.customBBox&&(d=Wc({extent:d,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:o,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:i.zoomToSizeRatioFunction,itemSizesReference:i.itemSizesReference,fitLabels:s==="labels",nodeLabelBox:function(H,U){return t.labelRenderer.nodeLabelBox(H,U)}})),l==="once"&&(this.autoRescaleFrozen=!0));this.nodeExtent=d,this.normalizationFunction=qn(this.customBBox||this.nodeExtent);var f=new Xo,g=Xe(f.getState(),o,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(o,i.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(o,i.labelGridCellSize);var h=i.renderEdgeLabels&&i.edgeLabelAnchors==="allNodes",m=!1;_r(this.pickingState,"node");for(var v=r.nodes(),p=0,b=v.length;p<b;p++){var y=v[p],x=this.internals.nodeDataCache[y],_=this.nodeGraphCoords[y];x.x=_.x,x.y=_.y,this.normalizationFunction.applyTo(x),x.visibility!==this.prevNodeVisibilities[y]&&(m=!0),typeof x.label=="string"&&x.visibility!=="hidden"&&x.labelVisibility!=="hidden"&&this.labelRenderer.labelGrid.add(y,x.size,this.framedGraphToViewport(x,{matrix:g})),h&&x.visibility!=="hidden"&&this.labelRenderer.edgeAnchorGrid.add(y,x.size,this.framedGraphToViewport(x,{matrix:g}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(v.length);var T=0;this.depthRanges.nodes={},this.nodeBaseDepth={};var R=this.internals.nodeDataCache,S=z(this.depthLayers),A;try{for(S.s();!(A=S.n()).done;){var C=A.value,P=this.itemBuckets.nodes.getSorted(C,function(G){return R[G].zIndex});if(P.length!==0){this.depthRanges.nodes[C]=[{offset:T,count:P.length}];var w=z(P),I;try{for(w.s();!(I=w.n()).done;){var L=I.value;this.nodeBaseDepth[L]=C,this.nodeProgram.allocateNode(L),Qo(this.pickingState,"node",L),this.addNodeToProgram(L,T++)}}catch(G){w.e(G)}finally{w.f()}}}}catch(G){S.e(G)}finally{S.f()}this.nodeProgram.invalidateBuffers();for(var k=0,N=v.length;k<N;k++)this.prevNodeVisibilities[v[k]]=this.internals.nodeDataCache[v[k]].visibility;this.labelRenderer.processWebGLLabels(v);var M=z(this.customLayerPrograms.values()),F;try{for(M.s();!(F=M.n()).done;){var D=F.value.program;D.cacheData&&D.cacheData()}}catch(G){M.e(G)}finally{M.f()}return m}},{key:"processEdges",value:function(){var t=this.internals.graph,r=t.edges();this.edgeProgram.reallocate(r.length);var i=0;_r(this.pickingState,"edge"),this.depthRanges.edges={},this.edgeBaseDepth={};var o=this.internals.edgeDataCache,l=z(this.depthLayers),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=this.itemBuckets.edges.getSorted(d,function(h){return o[h].zIndex});if(u.length!==0){this.depthRanges.edges[d]=[{offset:i,count:u.length}];var c=z(u),f;try{for(c.s();!(f=c.n()).done;){var g=f.value;this.edgeBaseDepth[g]=d,Qo(this.pickingState,"edge",g),this.addEdgeToProgram(g,i++)}}catch(h){c.e(h)}finally{c.f()}}}}catch(h){l.e(h)}finally{l.f()}this.edgeProgram.invalidateBuffers()}},{key:"updateNodeDepthRanges",value:function(t,r,i){var o=this.nodeProgramIndex[t];o!==void 0&&(Ka(this.depthRanges.nodes,r,o),Za(this.depthRanges.nodes,i,o))}},{key:"updateEdgeDepthRanges",value:function(t,r,i){var o=this.edgeProgramIndex[t];o!==void 0&&(Ka(this.depthRanges.edges,r,o),Za(this.depthRanges.edges,i,o))}},{key:"handleSettingsUpdate",value:function(){var t=this,r=this.internals.settings;return this.camera.minRatio=r.minCameraRatio,this.camera.maxRatio=r.maxCameraRatio,this.camera.enabledZooming=r.enableCameraZooming,this.camera.enabledPanning=r.enableCameraPanning,this.camera.enabledRotation=r.enableCameraRotation,r.cameraPanBoundaries?this.camera.constrainState=function(i){return t.cleanCameraState(i,r.cameraPanBoundaries&&J(r.cameraPanBoundaries)==="object"?r.cameraPanBoundaries:{})}:this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=r.gestureTarget==="graph"?"none":r.gestureTarget==="shared"?"pan-x pan-y":"auto",r.gestureTarget!=="shared"&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}},{key:"cleanCameraState",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.tolerance,o=i===void 0?0:i,l=r.boundaries,s=O({},t),d=l||this.nodeExtent,u=ne(d.x,2),c=u[0],f=u[1],g=ne(d.y,2),h=g[0],m=g[1],v=[this.graphToViewport({x:c,y:h},{cameraState:t}),this.graphToViewport({x:f,y:h},{cameraState:t}),this.graphToViewport({x:c,y:m},{cameraState:t}),this.graphToViewport({x:f,y:m},{cameraState:t})],p=1/0,b=-1/0,y=1/0,x=-1/0;v.forEach(function(L){var k=L.x,N=L.y;p=Math.min(p,k),b=Math.max(b,k),y=Math.min(y,N),x=Math.max(x,N)});var _=b-p,T=x-y,R=this.getDimensions(),S=R.width,A=R.height,C=0,P=0;if(_>=S?b<S-o?C=b-(S-o):p>o&&(C=p-o):b>S+o?C=b-(S+o):p<-o&&(C=p+o),T>=A?x<A-o?P=x-(A-o):y>o&&(P=y-o):x>A+o?P=x-(A+o):y<-o&&(P=y+o),C||P){var w=this.viewportToFramedGraph({x:0,y:0},{cameraState:t}),I=this.viewportToFramedGraph({x:C,y:P},{cameraState:t});C=I.x-w.x,P=I.y-w.y,s.x+=C,s.y+=P}return s}},{key:"refreshMatrices",value:function(){var t=this.camera.getState(),r=this.getDimensions(),i=this.getGraphDimensions(),o=this.getStagePadding();this.matrix=Xe(t,r,i,o),this.invMatrix=Xe(t,r,i,o,!0),this.correctionRatio=ci(this.matrix,t,r),this.graphToViewportRatio=this.getGraphToViewportRatio()}},{key:"processData",value:function(){var t;this.emit("beforeProcess"),(t=this.internals.attachmentManager)===null||t===void 0||t.clear();var r=O({},this.pickingState.idsByKind),i=this.processNodes();(this.pendingProcess==="full"||i)&&this.processEdges(),Lc(this.pickingState,this.internals),Cc(r,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess="none",this.emit("afterProcess")}},{key:"render",value:function(){var t=this;if(this.contextLost)return this;this.emit("beforeRender");var r=function(){return t.internals.hoverResolver.frameRendered(),t.emit("afterRender"),t};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),(this.pendingProcess!=="none"||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!=="none"&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!=="none"&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return r();var i=this.mouseCaptor,o=this.camera.isAnimating()||i.isMoving||i.draggedEvents||i.currentWheelDirection;this.refreshMatrices(),this.frameId++;var l=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;l&&l.forEach(function(U){return U.resetDebugStats()}),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());var s=this.getRenderParams(),d=pe.edge.writesPickingThisFrame(this.internals)?s:O(O({},s),{},{pickingFrameBuffer:null});this.labelRenderer.resetFrame();var u=this.webGLContext,c=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),f=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(u.bindFramebuffer(u.FRAMEBUFFER,this.pickingFrameBuffer),u.viewport(0,0,c,f),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit("afterTexturesUpload"),this.internals.nodeDataTexture.bind(os),this.internals.edgeDataTexture.bind(ss),this.edgeFramePass.run(s,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(rs),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();var g=this.labelRenderer.buildFramePassPoints(),h=g.data,m=g.count;this.nodeFramePass.run(h,m,this.internals.nodeFrameTexture,s,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(is)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();var v=z(this.customLayerPrograms.values()),p;try{for(v.s();!(p=v.n()).done;){var b=p.value.program;b.preRender&&b.preRender(s)}}catch(U){v.e(U)}finally{v.f()}u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA);var y=!this.internals.settings.hideLabelsOnMove||!o,x=z(this.depthLayers),_;try{for(x.s();!(_=x.n()).done;){var T=_.value,R=z(this.customLayerPrograms.values()),S;try{for(R.s();!(S=R.n()).done;){var A=S.value;A.depth===T&&A.program.render(s)}}catch(U){R.e(U)}finally{R.f()}var C=this.depthRanges.edges[T];if(C&&(!this.internals.settings.hideEdgesOnMove||!o)){var P=z(C),w;try{for(P.s();!(w=P.n()).done;){var I=w.value,L=I.offset,k=I.count;k>0&&this.edgeProgram.render(d,L,k)}}catch(U){P.e(U)}finally{P.f()}}this.internals.settings.renderEdgeLabels&&y&&(this.labelRenderer.renderEdgeLabelBackgrounds(pe.edgeLabel.writesPickingThisFrame(this.internals)?s:O(O({},s),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderEdgeLabels(s,T)),this.labelRenderer.cacheAttachments(T),this.labelRenderer.renderBackdrops(O(O({},s),{},{pickingFrameBuffer:null}),T);var N=this.depthRanges.nodes[T];if(N){var M=z(N),F;try{for(M.s();!(F=M.n()).done;){var D=F.value,G=D.offset,H=D.count;H>0&&this.nodeProgram.render(s,G,H)}}catch(U){M.e(U)}finally{M.f()}}y&&(this.labelRenderer.renderAttachments(O(O({},s),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderLabelBackgrounds(pe.nodeLabel.writesPickingThisFrame(this.internals)?s:O(O({},s),{},{pickingFrameBuffer:null}),T),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(s,T))}}catch(U){x.e(U)}finally{x.f()}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(u.bindFramebuffer(u.READ_FRAMEBUFFER,this.pickingFrameBuffer),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.blitFramebuffer(0,0,c,f,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,u.COLOR_BUFFER_BIT,u.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),l&&this.logRenderStats(l),r()}},{key:"getDebugPrograms",value:function(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(function(t){return t!==null})}},{key:"logRenderStats",value:function(t){var r={},i=z(t),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;r[l.constructor.name]=O({},l.debugStats)}}catch(s){i.e(s)}finally{i.f()}console.log("[sigma] DEBUG_logRenderStats: frame #".concat(this.frameId)),console.table(r)}},{key:"getGpuTimerExtension",value:function(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension("EXT_disjoint_timer_query_webgl2"),this.gpuTimerExt||console.warn("Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.")),this.gpuTimerExt}},{key:"beginGpuTimerQuery",value:function(){var t=this.getGpuTimerExtension();if(t){var r=this.webGLContext,i=r.createQuery();i&&(r.beginQuery(t.TIME_ELAPSED_EXT,i),this.activeGpuTimerQuery=i)}}},{key:"endGpuTimerQuery",value:function(){!this.gpuTimerExt||!this.activeGpuTimerQuery||(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}},{key:"pollGpuTimerQueries",value:function(){if(this.pendingGpuTimerQueries.length!==0){var t=this.webGLContext,r=this.gpuTimerExt;if(!r){this.pendingGpuTimerQueries.forEach(function(c){var f=c.query;return t.deleteQuery(f)}),this.pendingGpuTimerQueries=[];return}var i=t.getParameter(r.GPU_DISJOINT_EXT),o=[],l=z(this.pendingGpuTimerQueries),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;if(!t.getQueryParameter(d.query,t.QUERY_RESULT_AVAILABLE)){o.push(d);continue}if(!i){var u=t.getQueryParameter(d.query,t.QUERY_RESULT);console.log("[sigma] DEBUG_gpuTimerQueries: frame #".concat(d.frameId," GPU time = ").concat((u/1e6).toFixed(2),"ms"))}t.deleteQuery(d.query)}}catch(c){l.e(c)}finally{l.f()}this.pendingGpuTimerQueries=o}}},{key:"postEvaluateNode",value:function(t,r,i){var o=t;o.x===void 0&&(o.x=r.x),o.y===void 0&&(o.y=r.y),t.highlighted=i.isHighlighted;for(var l=0,s=this.nodeVariableEntries.length;l<s;l++){var d,u,c=ne(this.nodeVariableEntries[l],2),f=c[0],g=c[1];o[f]=(d=(u=o[f])!==null&&u!==void 0?u:r[f])!==null&&d!==void 0?d:g.default}}},{key:"addNode",value:function(t){var r=this.internals.graph.getNodeAttributes(t),i=this.stateManager.getNodeState(t),o=this.internals.nodeDataCache[t]||{};if($a(this.stylesDeclaration.nodes,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateNode(o,r,i),this.nodeReducer){var l=this.nodeReducer(t,o,r,i,this.stateManager.graphState,this.internals.graph);o=O(O({},o),l)}if(typeof o.x!="number"||typeof o.y!="number")throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(t,'". ')+"Provide coordinates via node attributes, styles, or a nodeReducer.");this.internals.nodeShapeMap?(!o.shape||!(o.shape in this.internals.nodeShapeMap))&&(o.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(o.shape=this.nodeShapeSlug),this.internals.nodeDataCache[t]=o,this.nodeGraphCoords[t]={x:o.x,y:o.y},ut(this.internals.nodesWithForcedLabels,t,Ze(o)),ut(this.internals.nodesWithBackdrop,t,Ya(o)),this.itemBuckets.nodes.set(t,o.depth)}},{key:"updateNode",value:function(t){this.addNode(t);var r=this.internals.nodeDataCache[t];this.normalizationFunction.applyTo(r)}},{key:"removeNode",value:function(t){this.itemBuckets.nodes.remove(t),delete this.internals.nodeDataCache[t],delete this.nodeGraphCoords[t],delete this.nodeProgramIndex[t],this.internals.dragManager.removeNode(t),this.stateManager.removeNode(t),this.internals.nodesWithForcedLabels.delete(t),this.internals.nodesWithBackdrop.delete(t)}},{key:"postEvaluateEdge",value:function(t,r){for(var i=t,o=0,l=this.edgeVariableEntries.length;o<l;o++){var s,d,u=ne(this.edgeVariableEntries[o],2),c=u[0],f=u[1];i[c]=(s=(d=i[c])!==null&&d!==void 0?d:r[c])!==null&&s!==void 0?s:f.default}}},{key:"applyEdgeSpread",value:function(t,r,i){var o;if(!(i.parallelCount<=1)){var l=this.internals.graph.source(t),s=this.internals.graph.target(t),d=l===s,u=d?r.selfLoopPath||r.path:r.parallelPath||r.path,c=u?this.edgePathsByName.get(u):void 0;if(c!=null&&c.spread){var f=(o=r.parallelSpread)!==null&&o!==void 0?o:.25,g=c.spread.compute(i.parallelIndex,i.parallelCount,f);!d&&this.internals.graph.isDirected(t)&&l>s&&(g=-g),r[c.spread.variable]=g}}}},{key:"addEdge",value:function(t){var r=this.internals.graph.getEdgeAttributes(t),i=this.stateManager.getEdgeState(t),o={};if(Va(this.stylesDeclaration.edges,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateEdge(o,r),this.edgeReducer){var l=this.edgeReducer(t,o,r,i,this.stateManager.graphState,this.internals.graph);o=O(O({},o),l)}this.applyEdgeSpread(t,o,i),this.internals.edgeDataCache[t]=o,ut(this.internals.edgesWithForcedLabels,t,Ze(o)),this.itemBuckets.edges.set(t,o.depth)}},{key:"updateEdge",value:function(t){this.addEdge(t)}},{key:"removeEdge",value:function(t){this.itemBuckets.edges.remove(t),delete this.internals.edgeDataCache[t],delete this.edgeProgramIndex[t],delete this.edgeTextureIndexCache[t],this.internals.edgeDataTexture.free(t),this.stateManager.removeEdge(t),this.internals.edgesWithForcedLabels.delete(t)}},{key:"clearNodeIndices",value:function(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}},{key:"clearEdgeIndices",value:function(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),_r(this.pickingState,"edge"),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}},{key:"clearEdgeState",value:function(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}},{key:"addNodeToProgram",value:function(t,r){var i,o=this.internals.nodeDataCache[t];this.internals.nodeDataTexture.allocate(t),(i=this.internals.nodeDataTexture).updateNode.apply(i,[t,o.x,o.y,o.size,this.getNodeShapeId(o)].concat(j(jn(o)),[o.color]));var l=this.internals.nodeDataTexture.getIndex(t);this.nodeProgram.process(vt(this.pickingState,"node",t),r,o,l,t),this.nodeProgramIndex[t]=r}},{key:"addEdgeToProgram",value:function(t,r){var i,o,l=this.internals.edgeDataCache[t],s=this.internals.graph.source(t),d=this.internals.graph.target(t),u=this.internals.edgeDataTexture.allocate(t);this.edgeTextureIndexCache[t]=u;var c=s===d,f=!c&&((i=(o=this.stateManager.getEdgeState(t))===null||o===void 0?void 0:o.parallelCount)!==null&&i!==void 0?i:1)>1,g=this.edgeProgram.resolveEdgeIds(l,c,f),h=g.pathId,m=g.headId,v=g.tailId,p=g.headLengthRatio,b=g.tailLengthRatio;this.internals.edgeDataTexture.updateEdge(t,this.internals.nodeDataTexture.getIndex(s),this.internals.nodeDataTexture.getIndex(d),l.size,p,b,h,m,v),this.edgeProgram.process(vt(this.pickingState,"edge",t),r,this.internals.nodeDataCache[s],this.internals.nodeDataCache[d],l,u),this.edgeProgramIndex[t]=r}},{key:"getRenderParams",value:function(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:os,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:is,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:ss,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:rs,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:this.internals.settings.labelPixelSnapping?1:0}}},{key:"getStagePadding",value:function(){var t=this.internals.settings,r=t.stagePadding,i=t.autoRescale;return i&&r||0}},{key:"getLayerElement",value:function(t){if(t==="mouse")return this.mouseLayer;var r=this.extraElements[t];if(!r)throw new Error('Sigma: layer "'.concat(t,'" does not exist'));return r}},{key:"initWebGLContext",value:function(){var t=this,r=this.createWebGLContext("stage");this.stageCanvas=this.extraElements.stage,this.webGLContext=r,this.stageCanvas.addEventListener("webglcontextlost",function(i){t.webGLContext&&(i.preventDefault(),t.contextLost=!0,t.renderFrame&&(cancelAnimationFrame(t.renderFrame),t.renderFrame=null),t.gpuTimerExt=void 0,t.activeGpuTimerQuery=null,t.pendingGpuTimerQueries=[],t.emit("webglContextLost"))}),this.stageCanvas.addEventListener("webglcontextrestored",function(){requestAnimationFrame(function(){t.webGLContext&&!t.webGLContext.isContextLost()&&t.restoreWebGLContext()})}),this.initPickingFramebuffer()}},{key:"initPickingFramebuffer",value:function(){var t=this.webGLContext,r=t.createFramebuffer();if(!r)throw new Error("Sigma: cannot create picking frame buffer");t.bindFramebuffer(t.FRAMEBUFFER,r);var i=t.createTexture();if(!i)throw new Error("Sigma: cannot create picking texture");t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0);var o=t.createRenderbuffer();if(!o)throw new Error("Sigma: cannot create picking depth buffer");if(t.bindRenderbuffer(t.RENDERBUFFER,o),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,1,1),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,o),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)throw new Error("Sigma: picking framebuffer is not complete");t.bindFramebuffer(t.FRAMEBUFFER,null),this.pickingFrameBuffer=r,this.pickingTexture=i,this.pickingDepthBuffer=o}},{key:"initPrograms",value:function(t,r){var i=this,o=this.webGLContext,l=Bo(o,this.pickingFrameBuffer,i,t?.nodes,r.antialiasNodes),s=l.nodeProgram,d=l.labelProgram,u=l.backdropProgram,c=l.labelBackgroundProgram,f=l.attachmentProgram,g=l.framePass,h=l.shapeSlug,m=l.shapeNameToIndex,v=l.shapeGlobalIds,p=l.variables;this.nodeProgram=s,this.nodeFramePass=g,this.nodeVariableEntries=Object.entries(p),h&&(this.nodeShapeSlug=h);var b=Wo(o,this.pickingFrameBuffer,i,t?.edges,r.antialiasEdges,t?.nodes),y=b.edgeProgram,x=b.labelProgram,_=b.labelBackgroundProgram,T=b.framePass,R=b.variables,S=b.paths;return this.edgeProgram=y,this.edgeFramePass=T,this.edgeVariableEntries=Object.entries(R),this.edgePathsByName=new Map(S.map(function(A){return[A.name,A]})),{labelProgram:d,edgeLabelProgram:x,edgeLabelBackgroundProgram:_,backdropProgram:u,labelBackgroundProgram:c,attachmentProgram:f,nodeShapeMap:m??null,nodeGlobalShapeIds:v??null}}},{key:"restoreWebGLContext",value:function(){var t,r,i,o,l,s=this.internals;this.initPickingFramebuffer(),(t=s.nodeDataTexture)===null||t===void 0||t.restore(),(r=s.nodeFrameTexture)===null||r===void 0||r.restore(),(i=s.edgeDataTexture)===null||i===void 0||i.restore(),(o=s.edgeFrameTexture)===null||o===void 0||o.restore(),(l=s.attachmentManager)===null||l===void 0||l.restore(),s.hoverResolver.reset(),Object.assign(s,this.initPrograms(s.primitives,s.settings));var d=z(this.customLayerPrograms.values()),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;c.program.kill(),c.program=c.factory(this.webGLContext)}}catch(f){d.e(f)}finally{d.f()}this.contextLost=!1,this.emit("webglContextRestored"),this.refresh()}},{key:"createLayer",value:function(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.extraElements[t])throw new Error('Sigma: a layer named "'.concat(t,'" already exists'));var o=Ft(r,{position:"absolute"},{class:"sigma-".concat(t)});return i.style&&Object.assign(o.style,i.style),this.extraElements[t]=o,"beforeLayer"in i&&i.beforeLayer?this.getLayerElement(i.beforeLayer).before(o):"afterLayer"in i&&i.afterLayer?this.getLayerElement(i.afterLayer).after(o):this.container.appendChild(o),o}},{key:"createCanvas",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(t,"canvas",r)}},{key:"createWebGLContext",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.createCanvas(t,r);r.hidden&&i.remove();var o=i.getContext("webgl2",O({preserveDrawingBuffer:!1,antialias:!1,depth:!0},r));if(!o)throw new Error("Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).");return o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o}},{key:"killLayer",value:function(t){if(t==="stage"||t==="mouse")throw new Error('Sigma: cannot kill built-in layer "'.concat(t,'"'));var r=this.extraElements[t];if(!r)throw new Error("Sigma: cannot kill layer ".concat(t,", which does not exist"));return r.remove(),delete this.extraElements[t],this}},{key:"getWebGLContext",value:function(){if(!this.webGLContext)throw new Error("Sigma: WebGL context is not available");return this.webGLContext}},{key:"getNodeDataTexture",value:function(){if(!this.internals.nodeDataTexture)throw new Error("Sigma: node data texture is not available");return this.internals.nodeDataTexture}},{key:"getNormalizationFunction",value:function(){return this.normalizationFunction}},{key:"addCustomLayerProgram",value:function(t,r,i){var o;if(!this.depthLayers.includes(r))throw new Error('Sigma: cannot add custom layer program at depth "'.concat(r,'", ')+"it must be declared in primitives.depthLayers. Current layers: ".concat(this.depthLayers.join(", ")));return(o=this.customLayerPrograms.get(t))===null||o===void 0||o.program.kill(),this.customLayerPrograms.set(t,{depth:r,factory:i,program:i(this.webGLContext)}),this.refresh(),this}},{key:"removeCustomLayerProgram",value:function(t){var r=this.customLayerPrograms.get(t);return r&&(r.program.kill(),this.customLayerPrograms.delete(t),this.scheduleRender()),this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(t){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=t,this.bindCameraHandlers(),this.scheduleRender(),this}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.internals.graph}},{key:"setGraph",value:function(t){return t===this.internals.graph?this:(this.stateManager.pruneNodes(function(r){return t.hasNode(r)}),this.stateManager.pruneEdges(function(r){return t.hasEdge(r)}),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=t,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh(),this)}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var t=this.customBBox||this.nodeExtent;return{width:t.x[1]-t.x[0]||1,height:t.y[1]-t.y[0]||1}}},{key:"getNodeDisplayData",value:function(t){var r=this.internals.nodeDataCache[t];return r?Object.assign({},r):void 0}},{key:"getEdgeDisplayData",value:function(t){var r=this.internals.edgeDataCache[t];return r?Object.assign({},r):void 0}},{key:"getNodeState",value:function(t){return this.stateManager.getNodeState(t)}},{key:"getEdgeState",value:function(t){return this.stateManager.getEdgeState(t)}},{key:"getGraphState",value:function(){return this.stateManager.getGraphState()}},{key:"setNodeState",value:function(t,r){return this.stateManager.setNodeState(t,r),this}},{key:"setEdgeState",value:function(t,r){return this.stateManager.setEdgeState(t,r),this}},{key:"setGraphState",value:function(t){return this.stateManager.setGraphState(t),this}},{key:"_setPanning",value:function(t){this.stateManager.setGraphState({isPanning:t})}},{key:"_setZooming",value:function(t){this.stateManager.setGraphState({isZooming:t})}},{key:"_hasNodeDrag",value:function(){var t=this.internals.dragManager;return!!(t.pendingNode||t.session)}},{key:"_showGestureHint",value:function(t){var r=this.internals.settings;r.gestureTarget==="shared"&&(this.gestureHint=this.gestureHint||new jc(this.container),this.gestureHint.show(t,r))}},{key:"setNodesState",value:function(t,r){return this.stateManager.setNodesState(t,r),this}},{key:"setEdgesState",value:function(t,r){return this.stateManager.setEdgesState(t,r),this}},{key:"updateContainerCursor",value:function(){var t=this.stateManager.hovered,r=this.resolvedStageStyle.cursor||"";this.container.style.cursor=t&&kc(this.internals,t)||r}},{key:"refreshStageStyle",value:function(){this.resolvedStageStyle=ja(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedEdgeLabels)}},{key:"getSettings",value:function(){return O({},this.internals.settings)}},{key:"getSetting",value:function(t){return this.internals.settings[t]}},{key:"getStyles",value:function(){return O({},this.stylesDeclaration)}},{key:"getPrimitives",value:function(){return O({},this.internals.primitives)}},{key:"setSetting",value:function(t,r){return this.internals.settings[t]=r,Yn(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(t,r){return this.setSetting(t,r(this.internals.settings[t])),this}},{key:"setSettings",value:function(t){return this.internals.settings=O(O({},this.internals.settings),t),Yn(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"resize",value:function(t){var r=this.width,i=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=rn(),this.width===0)if(this.internals.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.internals.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!t&&r===this.width&&i===this.height)return this;this.labelRenderer.labelsDirty=!0;for(var o=0,l=[this.mouseLayer].concat(j(Object.values(this.extraElements)));o<l.length;o++){var s=l[o];s.style.width=this.width+"px",s.style.height=this.height+"px"}return this.webGLContext&&(this.stageCanvas.setAttribute("width",this.width*this.internals.pixelRatio+"px"),this.stageCanvas.setAttribute("height",this.height*this.internals.pixelRatio+"px"),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit("afterClear"),this}},{key:"scheduleStateRefresh",value:function(){this.needToRefreshState=!0,this.scheduleRender()}},{key:"refreshState",value:function(){var t=this,r;this.stateManager.flushGraphStateFlags();var i=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency==="graph-state",o=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency==="graph-state",l=!1;if(i)this.internals.graph.forEachNode(function(h){t.refreshNodeState(h)&&(l=!0)});else if(this.internals.nodeStyleAnalysis.dependency!=="static"){var s=z(this.stateManager.dirtyNodes),d;try{for(s.s();!(d=s.n()).done;){var u=d.value;this.refreshNodeState(u)&&(l=!0)}}catch(h){s.e(h)}finally{s.f()}}if(o)this.internals.graph.forEachEdge(function(h){t.refreshEdgeState(h)&&(l=!0)});else if(this.edgeStyleAnalysis.dependency!=="static"){var c=z(this.stateManager.dirtyEdges),f;try{for(c.s();!(f=c.n()).done;){var g=f.value;this.refreshEdgeState(g)&&(l=!0)}}catch(h){c.e(h)}finally{c.f()}}this.stateManager.graphStateChanged&&(r=this.stylesDeclaration)!==null&&r!==void 0&&r.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),l&&(this.pendingProcess="full")}},{key:"refreshNodeState",value:function(t){var r=this.internals.nodeDataCache[t];if(!r||this.nodeReducer){var i,o,l,s,d=(i=this.internals.nodeDataCache[t])===null||i===void 0?void 0:i.depth,u=(o=this.internals.nodeDataCache[t])===null||o===void 0?void 0:o.zIndex,c=(l=this.internals.nodeDataCache[t])===null||l===void 0?void 0:l.labelAttachment;this.updateNode(t);var f=this.internals.nodeDataCache[t];this.internals.attachmentManager&&f.labelAttachment!==c&&this.internals.attachmentManager.invalidateNode(t);var g;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&f.shape&&f.shape in this.internals.nodeShapeMap?g=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[f.shape]]:g=Nt(f.shape||"circle"),(s=this.internals.nodeDataTexture).updateNode.apply(s,[t,f.x,f.y,f.size,g].concat(j(jn(f)),[f.color])),d&&f.depth!==d&&this.updateNodeDepthRanges(t,d,f.depth);var h=this.nodeProgramIndex[t];return h!==void 0&&(this.addNodeToProgram(t,h),this.nodeProgram.invalidateBuffers()),u!==void 0&&f.zIndex!==u}var m=this.internals.graph.getNodeAttributes(t),v=this.stateManager.getNodeState(t),p=r.size,b=r.shape,y=r.depth,x=r.zIndex,_=r.labelAttachment,T=r.rotationAlignment,R=r.labelRotationAlignment,S=r.color;$a(this.stylesDeclaration.nodes,m,v,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,m,v);var A=this.nodeGraphCoords[t],C=r.x!==A.x||r.y!==A.y;if(C&&(A.x=r.x,A.y=r.y),this.normalizationFunction.applyTo(r),this.internals.nodeShapeMap?(!r.shape||!(r.shape in this.internals.nodeShapeMap))&&(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.attachmentManager&&r.labelAttachment!==_&&this.internals.attachmentManager.invalidateNode(t),ut(this.internals.nodesWithForcedLabels,t,Ze(r)),ut(this.internals.nodesWithBackdrop,t,Ya(r)),C||r.size!==p||r.shape!==b||r.rotationAlignment!==T||r.labelRotationAlignment!==R||r.color!==S){var P,w;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&r.shape&&r.shape in this.internals.nodeShapeMap?w=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[r.shape]]:w=Nt(r.shape||"circle"),(P=this.internals.nodeDataTexture).updateNode.apply(P,[t,r.x,r.y,r.size,w].concat(j(jn(r)),[r.color]))}this.itemBuckets.nodes.set(t,r.depth),r.depth!==y&&this.updateNodeDepthRanges(t,y,r.depth);var I=this.nodeProgramIndex[t];return I!==void 0&&(this.addNodeToProgram(t,I),this.nodeProgram.invalidateBuffers()),r.zIndex!==x}},{key:"refreshEdgeState",value:function(t){var r=this.internals.edgeDataCache[t];if(!r||this.edgeReducer){var i=r?.depth,o=r?.zIndex;this.updateEdge(t);var l=this.internals.edgeDataCache[t];i&&l.depth!==i&&this.updateEdgeDepthRanges(t,i,l.depth);var s=this.edgeProgramIndex[t];return s!==void 0&&(this.addEdgeToProgram(t,s),this.edgeProgram.invalidateBuffers()),o!==void 0&&l.zIndex!==o}var d=this.internals.graph.getEdgeAttributes(t),u=this.stateManager.getEdgeState(t),c=r.depth,f=r.zIndex,g=r.size,h=r.path,m=r.selfLoopPath,v=r.parallelPath,p=r.head,b=r.tail;Va(this.stylesDeclaration.edges,d,u,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,d),this.applyEdgeSpread(t,r,u),ut(this.internals.edgesWithForcedLabels,t,Ze(r)),this.itemBuckets.edges.set(t,r.depth),r.depth!==c&&this.updateEdgeDepthRanges(t,c,r.depth);var y=this.edgeProgramIndex[t];if(y!==void 0){var x=r.size!==g||r.path!==h||r.selfLoopPath!==m||r.parallelPath!==v||r.head!==p||r.tail!==b;if(x)this.addEdgeToProgram(t,y),this.edgeProgram.invalidateBuffers();else{var _=this.internals.graph.source(t),T=this.internals.graph.target(t),R=this.internals.nodeDataCache[_],S=this.internals.nodeDataCache[T],A=this.edgeTextureIndexCache[t];this.edgeProgram.process(vt(this.pickingState,"edge",t),y,R,S,r,A),this.edgeProgram.invalidateBuffers()}}return r.zIndex!==f}},{key:"refresh",value:function(t){var r=this,i=t?.skipIndexation!==void 0?t?.skipIndexation:!1,o=t?.schedule!==void 0?t.schedule:!1,l=!t||!t.partialGraph;if(l)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(function(R){return r.addNode(R)}),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(function(R){return r.addEdge(R)}),this.pendingProcess="full";else{for(var s,d,u=((s=t.partialGraph)===null||s===void 0?void 0:s.nodes)||[],c=0,f=u?.length||0;c<f;c++){var g,h,m=""+u[c],v=(g=this.internals.nodeDataCache[m])===null||g===void 0?void 0:g.labelAttachment;if(this.updateNode(m),this.internals.attachmentManager&&((h=this.internals.nodeDataCache[m])!==null&&h!==void 0&&h.labelAttachment||v)&&this.internals.attachmentManager.invalidateNode(m),i){var p=this.nodeProgramIndex[m];if(p===void 0)throw new Error('Sigma: node "'.concat(m,`" can't be repaint`));this.addNodeToProgram(m,p)}}i&&u.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);for(var b=(t==null||(d=t.partialGraph)===null||d===void 0?void 0:d.edges)||[],y=0,x=b.length;y<x;y++){var _=""+b[y];if(this.updateEdge(_),i){var T=this.edgeProgramIndex[_];if(T===void 0)throw new Error('Sigma: edge "'.concat(_,`" can't be repaint`));this.addEdgeToProgram(_,T)}}i&&b.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!i&&this.pendingProcess!=="full"&&(this.pendingProcess=b.length>0?"full":"nodes")}return o?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var t=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){t.render()})),this}},{key:"scheduleRefresh",value:function(t){return this.refresh(O(O({},t),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(t,r){var i=this.camera.getState(),o=i.ratio,l=i.angle,s=i.x,d=i.y,u=this.internals.settings,c=u.minCameraRatio,f=u.maxCameraRatio;typeof f=="number"&&(r=Math.min(r,f)),typeof c=="number"&&(r=Math.max(r,c));var g=r/o,h={x:this.width/2,y:this.height/2},m=this.viewportToFramedGraph(t),v=this.viewportToFramedGraph(h);return{angle:l,x:(m.x-v.x)*(1-g)+s,y:(m.y-v.y)*(1-g)+d,ratio:r}}},{key:"viewRectangle",value:function(){var t=this.viewportToFramedGraph({x:0,y:0}),r=this.viewportToFramedGraph({x:this.width,y:0}),i=this.viewportToFramedGraph({x:0,y:this.height});return{x1:t.x,y1:t.y,x2:r.x,y2:r.y,height:r.y-i.y}}},{key:"framedGraphToViewport",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?Xe(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding()):this.matrix),l=Dt(o,t);return{x:(1+l.x)*this.width/2,y:(1-l.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?Xe(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding(),!0):this.invMatrix),l=Dt(o,{x:t.x/this.width*2-1,y:1-t.y/this.height*2});return isNaN(l.x)&&(l.x=0),isNaN(l.y)&&(l.y=0),l}},{key:"viewportToGraph",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(t,r))}},{key:"graphToViewport",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(t),r)}},{key:"graphToFramedGraph",value:function(t){return this.normalizationFunction(t)}},{key:"framedGraphToGraph",value:function(t){return this.normalizationFunction.inverse(t)}},{key:"getGraphToViewportRatio",value:function(){var t={x:0,y:0},r={x:1,y:1},i=Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2)),o=this.graphToViewport(t),l=this.graphToViewport(r),s=Math.sqrt(Math.pow(o.x-l.x,2)+Math.pow(o.y-l.y,2));return s/i}},{key:"computeNodeExtent",value:function(){var t=this.nodeGraphCoords,r=Object.keys(t);if(!r.length)return{x:[0,1],y:[0,1]};for(var i=1/0,o=-1/0,l=1/0,s=-1/0,d=0,u=r.length;d<u;d++){var c=t[r[d]],f=c.x,g=c.y;f<i&&(i=f),f>o&&(o=f),g<l&&(l=g),g>s&&(s=g)}return{x:[i,o],y:[l,s]}}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(t){return this.customBBox=t,this.scheduleRender(),this}},{key:"kill",value:function(){var t,r,i;this.emit("kill"),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null);for(var o=this.container;o.firstChild;)o.removeChild(o.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),this.internals.edgeLabelProgram.kill(),this.internals.edgeLabelBackgroundProgram.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),(t=this.internals.attachmentProgram)===null||t===void 0||t.kill(),(r=this.internals.attachmentManager)===null||r===void 0||r.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;var l=z(this.customLayerPrograms.values()),s;try{for(l.s();!(s=l.n()).done;){var d=s.value.program;d.kill()}}catch(f){l.e(f)}finally{l.f()}if(this.customLayerPrograms.clear(),this.sdfAtlas&&(this.sdfAtlas=null),this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext){var u;(u=this.webGLContext.getExtension("WEBGL_lose_context"))===null||u===void 0||u.loseContext(),this.webGLContext=null}(i=this.gestureHint)===null||i===void 0||i.kill(),this.gestureHint=null,this.mouseLayer.remove();for(var c in this.extraElements)this.extraElements[c].remove();this.extraElements={}}},{key:"scaleSize",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return t/this.internals.settings.zoomToSizeRatioFunction(r)*(this.getSetting("itemSizesReference")==="positions"?r*this.graphToViewportRatio:1)}},{key:"getStageCanvas",value:function(){return this.stageCanvas}},{key:"getMouseLayer",value:function(){return this.mouseLayer}}])})(Vn),hs=eh;var Of=lt(Tt());function fs(a,n){return typeof a=="number"?a:(J(a)==="object"&&a!==null&&"attribute"in a,n)}function ms(a){var n=a??{},e=n.cornerRadius,t=n.rotation,r=fs(e,0),i=fs(t,0),o=`
`.concat(Mt,`
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
`);return{name:"square",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function gs(a,n){return typeof a=="number"?a:(J(a)==="object"&&a!==null&&"attribute"in a,n)}function bs(a){var n=a??{},e=n.cornerRadius,t=n.rotation,r=gs(e,0),i=gs(t,0),o=`
`.concat(Mt,`
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
`);return{name:"triangle",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:.5}}function ps(a,n){return typeof a=="number"?a:(J(a)==="object"&&a!==null&&"attribute"in a,n)}function ys(a){var n=a??{},e=n.cornerRadius,t=n.rotation,r=ps(e,0),i=ps(t,0),o=`
`.concat(Mt,`
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
`);return{name:"diamond",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function xs(a){var n=a??{},e=n.segments,t=e===void 0?16:e,r=`
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
`;return{name:"curved",segments:t,glsl:r,uniforms:[],attributes:[{name:"curvature",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{curvature:{type:"number",default:0}},spread:{variable:"curvature",compute:function(o,l,s){return(o-(l-1)/2)*s}}}}function _s(a){var n=a??{},e=n.lengthRatio,t=e===void 0?5:e,r=n.widthRatio,i=r===void 0?4:r,o=n.margin,l=o===void 0?0:o,s=`
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
`;return{name:"arrow",glsl:s,length:t,widthFactor:i,margin:l,uniforms:[],attributes:[]}}var vs=8,Wf=(function(){function a(n){Z(this,a),E(this,"program",null),E(this,"vao",null),E(this,"drawFramebuffer",null),E(this,"readFramebuffer",null),E(this,"viewport",new Int32Array(4)),E(this,"blend",!1),E(this,"blendSrcRGB",WebGL2RenderingContext.ONE),E(this,"blendDstRGB",WebGL2RenderingContext.ZERO),E(this,"blendSrcAlpha",WebGL2RenderingContext.ONE),E(this,"blendDstAlpha",WebGL2RenderingContext.ZERO),E(this,"blendEquationRGB",WebGL2RenderingContext.FUNC_ADD),E(this,"blendEquationAlpha",WebGL2RenderingContext.FUNC_ADD),E(this,"colorMask",[!0,!0,!0,!0]),E(this,"activeTexture",WebGL2RenderingContext.TEXTURE0),E(this,"textures",[]),this.gl=n}return Q(a,[{key:"save",value:function(){var e=this.gl;this.program=e.getParameter(e.CURRENT_PROGRAM),this.vao=e.getParameter(e.VERTEX_ARRAY_BINDING),this.drawFramebuffer=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING),this.readFramebuffer=e.getParameter(e.READ_FRAMEBUFFER_BINDING),this.viewport=e.getParameter(e.VIEWPORT),this.blend=e.isEnabled(e.BLEND),this.blendSrcRGB=e.getParameter(e.BLEND_SRC_RGB),this.blendDstRGB=e.getParameter(e.BLEND_DST_RGB),this.blendSrcAlpha=e.getParameter(e.BLEND_SRC_ALPHA),this.blendDstAlpha=e.getParameter(e.BLEND_DST_ALPHA),this.blendEquationRGB=e.getParameter(e.BLEND_EQUATION_RGB),this.blendEquationAlpha=e.getParameter(e.BLEND_EQUATION_ALPHA),this.colorMask=e.getParameter(e.COLOR_WRITEMASK),this.activeTexture=e.getParameter(e.ACTIVE_TEXTURE);for(var t=0;t<vs;t++)e.activeTexture(e.TEXTURE0+t),this.textures[t]=e.getParameter(e.TEXTURE_BINDING_2D);e.activeTexture(this.activeTexture)}},{key:"restore",value:function(){for(var e=this.gl,t=0;t<vs;t++)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.textures[t]);e.activeTexture(this.activeTexture),e.useProgram(this.program),e.bindVertexArray(this.vao),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.drawFramebuffer),e.bindFramebuffer(e.READ_FRAMEBUFFER,this.readFramebuffer),e.viewport(this.viewport[0],this.viewport[1],this.viewport[2],this.viewport[3]),this.blend?e.enable(e.BLEND):e.disable(e.BLEND),e.blendFuncSeparate(this.blendSrcRGB,this.blendDstRGB,this.blendSrcAlpha,this.blendDstAlpha),e.blendEquationSeparate(this.blendEquationRGB,this.blendEquationAlpha),e.colorMask(this.colorMask[0],this.colorMask[1],this.colorMask[2],this.colorMask[3]),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}}])})();var th=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function bt(a){let n=/^(\d{4})-(\d{2})-(\d{2})/.exec(a||"");return n?`${th[Number(n[2])-1]} ${Number(n[3])}, ${n[1]}`:a||""}var nh=a=>a.canonical||a.url,ah=["#0b6b7a","#3d4fc4","#b5650f","#b2306b","#2d7a4c","#6a4c9c","#7a6400"],rh=["#5fd3e0","#93a2ff","#f5b360","#f584b8","#74d6a0","#c3a6f5","#e6cf5c"],kr={Theme:"circle",Essay:"circle",Initiative:"diamond",Playbook:"square",Source:"triangle",Entity:"circle"},Pr=new Set(["Source","Entity"]),ih=new Set(["Source","Theme","Entity"]),Ht=a=>!ih.has(a.type),yn={Source:"source",Entity:"extracted"},Fr=new Set(["source","extracted"]),Ts={frontmatter:"Declared relations",link:"Links in text",folder:"Theme membership",source:"Sources",extracted:"Extracted (machine)"},oh={frontmatter:.85,link:.5,folder:.16,source:.32,extracted:.3},Tn=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,$t=a=>Tn?0:a,oe=a=>document.getElementById(a),xa=oe("g-canvas"),ye=oe("g-panel"),Es=oe("g-status"),it=oe("g-list"),Sr=oe("g-view"),fe=oe("g-search"),He=oe("g-suggest"),Ve=oe("g-legend"),sh=oe("g-empty"),lh=oe("g-announce"),Ar=document.querySelector(".toolbar"),q=a=>String(a??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n]),dh=a=>/^https?:\/\//.test(a),uh=a=>a==="human-reviewed"?"Reviewed by Muthu":a==="machine-confirmed"?"Machine-confirmed":"Not yet reviewed",Rr=a=>getComputedStyle(document.documentElement).getPropertyValue(a).trim(),bn=()=>document.documentElement.getAttribute("saved-theme")==="dark",Ir=a=>1-Math.pow(1-a,3),Ss=a=>1+(1.6+1)*Math.pow(a-1,3)+1.6*Math.pow(a-1,2),ch=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2;function ya(a,n){let e=a.replace("#",""),t=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${n})`}var De=new Set(Pr),$e=new Set(Fr),Le=null,_a=null,Ne=null,ee=new re({multi:!0,type:"directed",allowSelfLoops:!1}),Y=null,V={},ie={},we=[],xn=new Map,Vt=0;function As(a,n,e,t,r,i=Ir,o){if(t<=0){r(e),xn.delete(a),o?.();return}xn.set(a,{from:n,to:e,dur:t,start:performance.now(),ease:i,set:r,done:o}),Vt||(Vt=requestAnimationFrame(Nr))}function Nr(a){Vt=0;for(let[e,t]of xn){let r=Math.min(1,(a-t.start)/t.dur);t.set(t.from+(t.to-t.from)*t.ease(r)),r>=1&&(xn.delete(e),t.done?.())}let n=!!Le&&!Tn&&!document.hidden;n&&Y?.setGraphState({pulse:(Math.sin(a/520)+1)/2}),Y?.refresh({skipIndexation:!0}),(xn.size||n)&&(Vt=requestAnimationFrame(Nr))}var Ds=()=>{Vt||(Vt=requestAnimationFrame(Nr))};function Ls(){let a=bn()?rh:ah,n=Rr("--ink"),e=Rr("--muted"),t=Rr("--page"),r=i=>{let o=V[i]?.type==="Theme"?i:ie[i];return o?a[we.indexOf(o)%a.length]:e};ee.updateEachNodeAttributes((i,o)=>({...o,color:o.kind==="Source"||o.kind==="Entity"?e:r(i),labelColor:n,page:t,halo:ya(r(i).startsWith("#")?r(i):"#888888",bn()?.75:.55),ring:ya(r(i).startsWith("#")?r(i):"#888888",bn()?.35:.22),pill:ya(t.startsWith("#")?t:"#ffffff",bn()?.82:.9),pillLine:bn()?"rgba(255,255,255,0.10)":"rgba(21,23,28,0.08)"})),ee.updateEachEdgeAttributes((i,o,l)=>{let s=o.origin==="extracted"?e:r(l);return{...o,color:s.startsWith("#")?ya(s,oh[o.origin]??.4):s,activeColor:s}}),document.querySelectorAll("[data-theme-dot]").forEach(i=>i.style.background=r(i.dataset.themeDot)),Y?.refresh()}var _n=Math.min(1,Math.max(.6,Math.min(innerWidth,innerHeight)/850));function hh(a){return _n*(a.type==="Theme"?16+Math.sqrt(a.degree||0)*2:(a.type==="Source"||a.type==="Entity"?4:6)+Math.sqrt(a.degree||0)*2.1)}function fh(a,n){let e={},r={};we.forEach(h=>r[h]=[]),a.forEach(h=>{Ht(h)&&ie[h.id]&&r[ie[h.id]].push(h.id)});let i={},o=(h,m)=>h<m?h+"|"+m:m+"|"+h;n.forEach(h=>{let m=ie[h.source],v=ie[h.target];m&&v&&m!==v&&h.origin!=="source"&&h.origin!=="folder"&&(i[o(m,v)]=(i[o(m,v)]||0)+1)});let l=we.length?[we[0]]:[];for(;l.length<we.length;){let h=l[l.length-1],m=we.filter(v=>!l.includes(v)).sort((v,p)=>(i[o(h,p)]||0)-(i[o(h,v)]||0))[0];l.push(m)}let s={};l.forEach((h,m)=>{let v=-Math.PI/2+m/Math.max(1,l.length)*Math.PI*2;s[h]={x:Math.cos(v)*100,y:Math.sin(v)*100},e[h]={...s[h],side:Math.cos(v)<0?"left":"right"}});let d={};n.forEach(h=>{var m,v;h.origin==="folder"||h.origin==="source"||((d[m=h.source]||(d[m]=[])).push(h.target),(d[v=h.target]||(d[v]=[])).push(h.source))});let u=Math.PI*2;for(let h of l){let m=s[h],v=r[h].sort((S,A)=>(V[A].degree||0)-(V[S].degree||0)||S.localeCompare(A)),p=S=>{let A=0,C=0;for(let P of d[S]||[]){let w=ie[P];w&&w!==h&&s[w]&&(A+=s[w].x-m.x,C+=s[w].y-m.y)}return!A&&!C&&(A=m.x,C=m.y),Math.atan2(C,A)},b=.62,y=Math.PI/2+b,x=u-2*b,_=Math.max(30,19+1.15*v.length),T=Math.max(6,Math.floor(x*_/7.5)),R=S=>((S-y)%u+u)%u;for(let S=0,A=0;A<v.length;S++,A+=T){let C=v.slice(A,A+T).map(I=>({id:I,p:R(p(I))})).sort((I,L)=>I.p-L.p),P=_+S*9,w=x/C.length;C.forEach((I,L)=>{let k=y+(L+.5)*w;e[I.id]={x:m.x+Math.cos(k)*P,y:m.y+Math.sin(k)*P,side:Math.cos(k)<0?"left":"right"}})}}let c=a.filter(h=>Ht(h)&&!e[h.id]);c.forEach((h,m)=>{let v=m/Math.max(1,c.length)*u;e[h.id]={x:Math.cos(v)*18,y:Math.sin(v)*18,side:Math.cos(v)<0?"left":"right"}});let f={};n.filter(h=>h.origin==="source").forEach(h=>{let[m,v]=V[h.target].type==="Source"?[h.source,h.target]:[h.target,h.source];if(e[v]||!e[m])return;let p=ie[m],b=p?s[p]:{x:0,y:0},y=Math.atan2(e[m].y-b.y,e[m].x-b.x)+((f[m]=(f[m]||0)+1)-1)*.35;e[v]={x:e[m].x+Math.cos(y)*9,y:e[m].y+Math.sin(y)*9,side:Math.cos(y)<0?"left":"right"}});let g={};return n.filter(h=>h.origin==="extracted").forEach(h=>{let[m,v]=V[h.target].type==="Entity"?[h.target,h.source]:[h.source,h.target];e[v]&&(g[m]||(g[m]=[])).push(v)}),a.filter(h=>h.type==="Entity").forEach((h,m)=>{let v=g[h.id]||[];if(!v.length)return;let p=v.reduce((S,A)=>S+e[A].x,0)/v.length,b=v.reduce((S,A)=>S+e[A].y,0)/v.length,y=v.length>1?.8:1.08,x=m*2.399963,_=5+m%4*2.5,T=p*y+Math.cos(x)*_,R=b*y+Math.sin(x)*_;e[h.id]={x:T,y:R,side:T<0?"left":"right"}}),a.forEach((h,m)=>{e[h.id]||(e[h.id]={x:Math.cos(m)*140,y:Math.sin(m)*140,side:"right"})}),e}function En(){let a=_a||Le,n=e=>!Y.getNodeState(e).isHidden;if(a){let e=new Set([a]);return ee.forEachNeighbor(a,t=>{n(t)&&e.add(t)}),e}if(Ne){let e=new Set([Ne]);return ee.forEachNode(t=>{ie[t]===Ne&&n(t)&&e.add(t)}),e}return null}var wr=!1;function ot(){let a=En(),n=_a||Le;ee.forEachNode(t=>Y.setNodeState(t,{isActive:!!a?.has(t),isHighlighted:t===Le})),ee.forEachEdge((t,r,i,o)=>Y.setEdgeState(t,{isActive:!!a&&(n?i===n||o===n:a.has(i)&&a.has(o))}));let e=!!a;e?(Y.setGraphState({hasActive:!0}),wr||As("fade",Y.getGraphState().fade||0,1,$t(180),t=>Y.setGraphState({fade:t}))):wr&&As("fade",Y.getGraphState().fade??1,0,$t(220),t=>Y.setGraphState({fade:t}),Ir,()=>{En()||Y.setGraphState({hasActive:!1})}),wr=e,Ve.querySelectorAll("[data-theme]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.theme===Ne))),Y.refresh({skipIndexation:!0}),Ds()}function Sn(){ee.forEachNode((a,n)=>Y.setNodeState(a,{isHidden:De.has(n.kind)})),ee.forEachEdge((a,n,e,t)=>{let r=$e.has(n.origin)||De.has(ee.getNodeAttribute(e,"kind"))||De.has(ee.getNodeAttribute(t,"kind"));Y.setEdgeState(a,{isHidden:r})}),Y.refresh({skipIndexation:!0}),document.querySelectorAll("#f-types input").forEach(a=>a.checked=!De.has(a.value)),document.querySelectorAll("#f-origins input").forEach(a=>a.checked=!$e.has(a.value)),je(),Ns()}function Cs(){return ee.filterNodes(a=>!Y.getNodeState(a).isHidden)}function gh(){return ee.filterEdges(a=>!Y.getEdgeState(a).isHidden)}function je(a){if(!Y){Es.textContent=a??"";return}let n=Cs().length;Es.textContent=a??`${n} nodes \xB7 ${gh().length} connections shown`,sh.hidden=n>0||!it.hidden}var ks=a=>{lh.textContent=a};function Ta(a){a.querySelectorAll("[data-bg]").forEach(n=>n.style.background=n.dataset.bg),a.querySelectorAll("[data-c]").forEach(n=>n.style.setProperty("--c",n.dataset.c))}function ph(a,n){let e={},t={};a.forEach(r=>e[r.type]=(e[r.type]||0)+1),n.forEach(r=>t[r.origin]=(t[r.origin]||0)+1),oe("f-types").insertAdjacentHTML("beforeend",Object.keys(e).sort().map(r=>`<label><input type="checkbox" value="${q(r)}"> <span class="shape shape-${q(kr[r]||"circle")}" aria-hidden="true"></span>${q(r)} <span class="muted">${e[r]}</span></label>`).join("")),oe("f-origins").insertAdjacentHTML("beforeend",Object.keys(Ts).filter(r=>t[r]).map(r=>`<label><input type="checkbox" value="${q(r)}"> ${q(Ts[r])} <span class="muted">${t[r]}</span></label>`).join("")),document.querySelectorAll("#f-types input").forEach(r=>r.addEventListener("change",()=>{r.checked?De.delete(r.value):De.add(r.value);let i=yn[r.value];i&&(r.checked?$e.delete(i):$e.add(i),Lr()),Sn(),ot()})),document.querySelectorAll("#f-origins input").forEach(r=>r.addEventListener("change",()=>{r.checked?$e.delete(r.value):$e.add(r.value);let i=Object.keys(yn).find(o=>yn[o]===r.value);i&&(r.checked?De.delete(i):De.add(i),Lr()),Sn(),ot()}))}function Lr(){document.querySelectorAll("#f-types input").forEach(a=>a.checked=!De.has(a.value)),document.querySelectorAll("#f-origins input").forEach(a=>a.checked=!$e.has(a.value))}function vh(){let a=n=>Object.keys(ie).filter(e=>ie[e]===n&&V[e].type!=="Source").length;Ve.innerHTML='<p class="legend-title">Themes</p><ul>'+we.map(n=>`<li><button type="button" data-theme="${q(n)}" aria-pressed="false"><span class="dot" data-theme-dot="${q(n)}"></span>${q(V[n].label)}<span class="muted">${a(n)}</span></button></li>`).join("")+'</ul><p class="legend-shapes" aria-label="Shapes"><span><span class="shape shape-circle"></span>Essay</span><span><span class="shape shape-diamond"></span>Initiative</span><span><span class="shape shape-square"></span>Playbook</span></p>',Ve.hidden=!1,Ve.querySelectorAll("[data-theme]").forEach(n=>n.addEventListener("click",()=>{let e=n.dataset.theme;if(Ne===e){Gr();return}Ne=e,Le&&jt(!1),ot(),Ps([...En()||[]]),ks(`Showing the ${V[e].label} theme. Escape to leave.`),je(`${V[e].label} \xB7 ${(En()?.size??1)-1} notes \xB7 Esc to leave`)}))}function Gr(){Ne&&(Ne=null,ot(),je(),Ea())}function Ea(){Y.getCamera().animate({x:.5,y:.5,ratio:1,angle:0},{duration:$t(650),easing:"cubicInOut"})}var mh=()=>window.innerWidth<=760,Dr=document.createElement("canvas").getContext("2d");function Cr(a){let n=ee.getNodeAttributes(a),e=String(n.label??"");if(!Dr||!e)return{left:0,right:0};let t=n.kind==="Theme";Dr.font=t?`${Math.round(15*Math.max(.8,_n))}px Newsreader, Georgia, serif`:"12.5px Instrument Sans, system-ui, sans-serif";let r=Dr.measureText(e).width+12+(Number(n.size)||6);return n.labelSide==="left"?{left:r,right:0}:n.labelSide==="right"?{left:0,right:r}:{left:r/2,right:r/2}}function Ps(a,n={}){let e=a.map(k=>Y.getNodeDisplayData(k)).filter(Boolean);if(!e.length)return;let t=e.map(k=>k.x),r=e.map(k=>k.y),[i,o,l,s]=[Math.min(...t),Math.max(...t),Math.min(...r),Math.max(...r)],d=n.centre?Y.getNodeDisplayData(n.centre):null,u=d?d.y:(l+s)/2,c=d?2*Math.max(d.x-i,o-d.x,u-l,s-u):Math.max(o-i,s-l),f=xa.clientWidth||1,g=xa.clientHeight||1,h=Math.max(1,Math.min(f,g)-96),m=!mh(),v=m&&n.besidePanel&&!ye.hidden?ye.offsetWidth+28:0,p=0,b=Math.max(120,f-v-p-32),y=(n.named??a).map(k=>({d:Y.getNodeDisplayData(k),r:Cr(k)})).filter(k=>k.d),x=k=>[Math.min(i,...y.map(N=>N.d.x-N.r.left*k)),Math.max(o,...y.map(N=>N.d.x+N.r.right*k))],_=n.maxRatio??1.2,T=Math.min(_,Math.max(.25,c*1.25)),R=Math.max(120,g-(Ve.hidden||!Ve.offsetParent?0:Ve.offsetHeight+28)-56);for(let k=0;k<24&&T<_;k++){let[N,M]=x(T/h);if(M-N<=b*T/h&&2*Math.max(u-l,s-u)<=R*T/h)break;T=Math.min(_,T*1.12)}let S=T/h,A=k=>k*S,[C,P]=x(S),w=(C+P)/2;if(d){let k=Cr(n.centre),N=b*S/2,M=d.x+k.right*S-N+A(8),F=d.x-k.left*S+N-A(8);w=M<=F?Math.min(Math.max(w,M),F):k.left>k.right?F:k.right>k.left?M:d.x}let I=0,L=0;m?(I+=A(v/2)-A(p/2),L+=A((g-R)/2-28)):n.besidePanel&&!ye.hidden&&(L-=A(ye.offsetHeight/2)),Y.getCamera().animate({x:w+I,y:u+L,ratio:T},{duration:$t(700),easing:"cubicInOut"})}var bh={links_to:"",builds_on:"builds on",refines:"refines",applies:"applies",contradicts:"contradicts",cites:"cites",part_of:"part of",supersedes:"supersedes",answers:"answers",about:"about",authored_by:"authored by",mentions:"mentions"};function Rs(a){return bh[a]??String(a).replace(/_/g," ")}function yh(a){let n=0;return ee.forEachEdge(a,(e,t)=>{t.origin==="extracted"&&n++}),n}function Ie(a){let n=0;return ee.forEachEdge(a,(e,t)=>{(t.origin==="link"||t.origin==="frontmatter")&&n++}),n}function xh(a){Le=a,Ne=null;let n=V[a],e=ee.getNodeAttribute(a,"color"),t={link:"Linked notes",frontmatter:"Linked notes",source:n.type==="Source"?"Notes drawn from it":"Sources",folder:n.type==="Theme"?"Notes in this theme":"",extracted:n.type==="Entity"?"Mentioned in":"Mentions (machine-extracted)"},r={},i=(f,g,h,m)=>{let v=t[f.origin]??"Other connections";if(!v||Y.getEdgeState(m).isHidden)return;let p=r[v]||(r[v]=new Map),b=p.get(g)||{out:!1,inn:!1,rel:new Set};h?b.out=!0:b.inn=!0,Rs(f.rel)&&b.rel.add(Rs(f.rel)),p.set(g,b)};ee.forEachOutEdge(a,(f,g,h,m)=>i(g,m,!0,f)),ee.forEachInEdge(a,(f,g,h)=>i(g,h,!1,f));let o=["Notes in this theme","Linked notes","Sources","Notes drawn from it","Mentions","Other connections"],l=f=>f.out&&f.inn?"\u21C4":f.out?"\u2192":"\u2190",s=f=>f.out&&f.inn?"Linked both ways":f.out?"This note links to it":"It links to this note",d=o.filter(f=>r[f]?.size).map(f=>{let g=[...r[f]].sort((h,m)=>V[h[0]].label.localeCompare(V[m[0]].label)).map(([h,m])=>`<li><a href="#" data-id="${q(h)}"><span class="dot" data-bg="${q(ee.getNodeAttribute(h,"color"))}"></span><span class="t">${q(V[h].label)}</span>${m.rel.size?`<span class="rel muted">${q([...m.rel].join(", "))}</span>`:""}`+(f==="Linked notes"?`<span class="dir" title="${s(m)}" aria-label="${s(m)}">${l(m)}</span>`:"")+"</a></li>");return`<h3>${q(f)} <span class="muted">${g.length}</span></h3><ul>${g.join("")}</ul>`}),u=Ht(n)?`<dl class="prov"><div><dt>Review</dt><dd class="${n.trust==="human-reviewed"?"ok":""}">${q(n.verified?`Reviewed ${bt(n.verified)}`:uh(n.trust))}</dd></div><div><dt>Connections</dt><dd>${Ie(a)}</dd></div>`+(n.source_date?`<div><dt>Source</dt><dd>${q(n.canonical?"muthub.org \xB7 ":"")}${q(bt(n.source_date))}</dd></div>`:"")+(n.stale_after?`<div><dt>Re-check by</dt><dd>${q(bt(n.stale_after))}</dd></div>`:"")+"</dl>":"";ye.innerHTML=`<div class="accent" data-bg="${q(e)}"></div><button class="close" type="button" aria-label="Close">\xD7</button><div class="g-panel-body"><p class="kind"><span class="shape shape-${q(kr[n.type]||"circle")}" data-c="${q(e)}"></span>${q(n.type)}${ie[a]?` \xB7 ${q(V[ie[a]].label)}`:""}</p><h2 tabindex="-1">${q(n.label)}</h2>`+(n.summary?`<p class="summary">${q(n.summary)}</p>`:"")+u+(n.type==="Entity"?"":n.canonical?`<p class="actions"><a class="open" href="${q(n.url)}">Open the note</a><a class="wiki" href="${q(n.canonical)}">Read the essay</a></p>`:`<p class="actions"><a class="open" href="${q(n.url)}">${dh(n.url)?"Open source":n.type==="Theme"?"Open theme":"Open the note"}</a></p>`)+d.join("")+"</div>",Ta(ye),ye.hidden=!1,ye.classList.remove("in"),ye.offsetWidth,ye.classList.add("in"),ks(`Selected ${n.type}: ${n.label}`);let c=new URL(location.href);c.searchParams.set("node",a),history.replaceState(null,"",c),ot()}function jt(a=!0){Le=null,ye.hidden=!0;let n=new URL(location.href);n.searchParams.delete("node"),history.replaceState(null,"",n),a&&ot()}function yt(a,n={}){let e=ee.getNodeAttribute(a,"kind");De.has(e)&&(De.delete(e),yn[e]&&$e.delete(yn[e]),Lr(),Sn()),xh(a);let t=[...En()||[a]],r=ie[a],i=t.length<4&&r?[...t,r,...ee.filterNodes(o=>ie[o]===r&&!Y.getNodeState(o).isHidden)]:t;Ps(i,{maxRatio:t.length<4?.6:.85,besidePanel:!0,centre:a,named:t}),n.moveFocus&&ye.querySelector("h2")?.focus({preventScroll:!0})}ye.addEventListener("click",a=>{let n=a.target.closest("[data-id]");n?(a.preventDefault(),yt(n.getAttribute("data-id"))):a.target.closest(".close")&&jt()});function Fs(a){if(a=a.trim().toLowerCase(),!a)return[];let n=Object.values(V),e=t=>(t.label.toLowerCase()===a?0:t.label.toLowerCase().startsWith(a)?1:2)+(t.type==="Source"?3:0);return n.filter(t=>t.label.toLowerCase().includes(a)).sort((t,r)=>e(t)-e(r)||t.label.localeCompare(r.label))}function _h(a){return Fs(a)[0]?.id??null}var rt=-1;function Is(){let a=Fs(fe.value).slice(0,7);if(rt=-1,fe.removeAttribute("aria-activedescendant"),!a.length||document.activeElement!==fe){He.hidden=!0,fe.setAttribute("aria-expanded","false");return}He.innerHTML=a.map((n,e)=>`<li role="option" id="g-opt-${e}" data-id="${q(n.id)}"><span class="dot" data-bg="${q(ee.getNodeAttribute(n.id,"color"))}"></span>${q(n.label)}<span class="muted">${q(n.type)}</span></li>`).join(""),Ta(He),He.hidden=!1,fe.setAttribute("aria-expanded","true")}function Sa(){He.hidden=!0,fe.setAttribute("aria-expanded","false"),fe.removeAttribute("aria-activedescendant")}function ws(a){let n=[...He.querySelectorAll("li")];n.length&&(rt=(rt+a+n.length)%n.length,n.forEach((e,t)=>{e.classList.toggle("on",t===rt),e.setAttribute("aria-selected",String(t===rt))}),fe.setAttribute("aria-activedescendant",n[rt].id))}function Th(){let a=rt>=0?He.querySelectorAll("li")[rt]?.getAttribute("data-id"):_h(fe.value);Sa(),a?(je(),yt(a,{moveFocus:!0})):je(`No note matches \u201C${fe.value}\u201D.`)}fe.addEventListener("input",Is);fe.addEventListener("focus",Is);fe.addEventListener("blur",()=>setTimeout(Sa,120));fe.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),Th()):a.key==="ArrowDown"?(a.preventDefault(),ws(1)):a.key==="ArrowUp"?(a.preventDefault(),ws(-1)):a.key==="Escape"&&!He.hidden&&(Sa(),a.stopPropagation())});He.addEventListener("mousedown",a=>{let n=a.target.closest("li");n&&(a.preventDefault(),Sa(),fe.value=V[n.dataset.id].label,yt(n.dataset.id))});function Ns(){if(it.hidden)return;let a=new Set(Cs()),n=l=>l.verified?bt(l.verified):l.trust==="human-reviewed"?"Reviewed":"Not yet",e=l=>`<tr><td><a href="${q(l.url)}">${q(l.label)}</a></td><td class="muted">${q(l.type)}</td><td class="muted">${q(bt(l.source_date)||"")}</td><td class="muted">${q(n(l))}</td><td class="muted">${q(bt(l.stale_after)||"")}</td><td class="n">${Ie(l.id)}</td></tr>`,t=we.filter(l=>a.has(l)||Object.keys(ie).some(s=>ie[s]===l&&a.has(s))).map(l=>{let s=Object.keys(ie).filter(d=>ie[d]===l&&a.has(d)&&Ht(V[d])).sort((d,u)=>Ie(u)-Ie(d)||V[d].label.localeCompare(V[u].label));return`<tr><th scope="rowgroup" colspan="6"><span class="dot" data-bg="${q(ee.getNodeAttribute(l,"color"))}" data-theme-dot="${q(l)}"></span>${q(V[l].label)} <span class="muted">\xB7 ${s.length} note${s.length===1?"":"s"}</span></th></tr>`+s.map(d=>e(V[d])).join("")}),r=[...a].filter(l=>V[l].type==="Entity").sort((l,s)=>Ie(s)-Ie(l)||V[l].label.localeCompare(V[s].label)),i=[...a].filter(l=>!ie[l]&&Ht(V[l])).sort((l,s)=>V[l].label.localeCompare(V[s].label)),o=[...a].filter(l=>V[l].type==="Source").sort((l,s)=>V[l].label.localeCompare(V[s].label));it.innerHTML='<table><caption class="sr">Notes in the graph, with their provenance</caption><thead><tr><th>Note</th><th>Kind</th><th>Source dated</th><th>Review</th><th>Re-check by</th><th class="n">Links</th></tr></thead><tbody>'+t.join("")+(i.length?'<tr><th scope="rowgroup" colspan="6">Other</th></tr>'+i.map(l=>e(V[l])).join(""):"")+(o.length?`<tr><th scope="rowgroup" colspan="6">Sources <span class="muted">\xB7 ${o.length}</span></th></tr>`+o.map(l=>`<tr><td><a href="${q(V[l].url)}">${q(V[l].label)}</a></td><td class="muted">Source</td><td class="muted">${q(bt(V[l].updated))}</td><td></td><td></td><td class="n">${V[l].degree||0}</td></tr>`).join(""):"")+(r.length?`<tr><th scope="rowgroup" colspan="6">Extracted entities <span class="muted">\xB7 ${r.length} \xB7 found by Semantica, not reviewed</span></th></tr>`+r.map(l=>`<tr><td>${q(V[l].label)}</td><td class="muted">${q(V[l].entityKind||"Entity")}</td><td></td><td class="muted">Machine</td><td></td><td class="n">${yh(l)}</td></tr>`).join(""):"")+`</tbody></table><p class="foot muted">Every column comes from the note's own frontmatter: Open Knowledge Format, nothing hand-typed.</p>`,Ta(it)}function Gs(){let a=Ar.querySelector(".tools")??Ar;it.style.top=`${Ar.offsetTop+a.offsetHeight+10}px`}addEventListener("resize",()=>{it.hidden||Gs()});Sr.addEventListener("click",()=>{let a=it.hidden;a&&Le&&jt(!1),it.hidden=!a,a&&Gs(),oe("explorer").classList.toggle("listing",a),xa.style.visibility=a?"hidden":"visible",Ve.style.visibility=a?"hidden":"visible",je(),Sr.setAttribute("aria-pressed",String(a)),Sr.textContent=a?"Graph":"List",Ns()});oe("g-reset").addEventListener("click",()=>{De=new Set(Pr),$e=new Set(Fr),fe.value="",Ne=null,jt(),Sn(),Ea()});oe("g-zoom-in").addEventListener("click",()=>Y.getCamera().zoomIn({duration:$t(220)}));oe("g-zoom-out").addEventListener("click",()=>Y.getCamera().zoomOut({duration:$t(220)}));oe("g-fit").addEventListener("click",Ea);oe("g-full")?.addEventListener("click",()=>{let a=oe("explorer");document.fullscreenElement?document.exitFullscreen?.():a.requestFullscreen?.().catch(()=>a.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("fullscreenchange",()=>setTimeout(()=>{Y?.resize(),Ea()},60));function Eh(a){let n=a.nodes.filter(Ht),e=a.nodes.filter(u=>u.type==="Source").length,t=a.edges.filter(u=>!Fr.has(u.origin)).length,r=(u,c)=>document.querySelectorAll(`[data-stat="${u}"]`).forEach(f=>f.textContent=c);r("notes",String(n.length)),r("sources",String(e)),r("connections",String(t)),r("themes",String(we.length));let i=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],o=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];r("notes-words",(u=>u<20?i[u]:u<100?o[Math.floor(u/10)]+(u%10?"-"+i[u%10].toLowerCase():""):String(u))(n.length));let s=oe("theme-cards");s&&(s.innerHTML=we.map(u=>{let c=n.filter(g=>ie[g.id]===u).sort((g,h)=>Ie(h.id)-Ie(g.id)),f=c.slice(0,3).map(g=>q(g.label.split(":")[0])).join(" \xB7 ");return`<a class="theme-card" href="${q(V[u].url)}"><span class="name"><span class="dot" data-bg="${q(ee.getNodeAttribute(u,"color"))}" data-theme-dot="${q(u)}"></span>${q(V[u].label)}</span><span class="count">${c.length} note${c.length===1?"":"s"}</span><span class="tops">${f}</span></a>`}).join(""),Ta(s));let d=oe("hubs");if(d){let u=n.slice().sort((c,f)=>Ie(f.id)-Ie(c.id)||c.label.localeCompare(f.label)).slice(0,5);d.innerHTML=u.map((c,f)=>`<li><span class="rank">${f+1}</span><a href="#explorer" data-id="${q(c.id)}">${q(c.label)}</a><span class="n">${Ie(c.id)} links</span></li>`).join(""),d.addEventListener("click",c=>{let f=c.target.closest("[data-id]");f&&(c.preventDefault(),oe("explorer").scrollIntoView({behavior:Tn?"auto":"smooth",block:"center"}),yt(f.dataset.id))})}document.querySelectorAll("[data-note]").forEach(u=>{let c=V[u.dataset.note];c?u.href=c.url:u.closest("li")?.remove()}),document.querySelectorAll("[data-path-start]").forEach(u=>u.addEventListener("click",c=>{let f=u.dataset.pathStart;V[f]&&(c.preventDefault(),oe("explorer").scrollIntoView({behavior:Tn?"auto":"smooth",block:"center"}),yt(f))}))}document.addEventListener("keydown",a=>{a.key==="Escape"&&Le?jt():a.key==="Escape"&&Ne?Gr():a.key==="/"&&document.activeElement!==fe&&!a.target.closest("input,textarea")&&(a.preventDefault(),fe.focus())});document.addEventListener("themechange",Ls);document.addEventListener("visibilitychange",Ds);function Sh(a){let n={};if(ee.forEachNode((d,u)=>{n[d]={x:u.x,y:u.y,size:u.size}}),Tn){Y.setGraphState({reveal:1}),a();return}let e=we.slice();ee.forEachNode(d=>{let u=V[d].type==="Theme"?d:ie[d],c=u?n[u]:{x:0,y:0};ee.mergeNodeAttributes(d,{x:c.x,y:c.y,size:0})}),Y.setGraphState({reveal:0});let t=performance.now(),r=0,i={};ee.forEachNode(d=>{let u=V[d].type==="Theme"?d:ie[d];i[d]=V[d].type==="Theme"?e.indexOf(d)*90:260+Math.max(0,e.indexOf(u))*110+r++%12*18});let o=900,l=620,s=d=>{let u=!1;ee.forEachNode(f=>{let g=n[f],h=d-t-i[f];if(h<0){u=!0;return}let m=V[f].type==="Theme",v=Math.min(1,h/(m?l:o));v<1&&(u=!0);let p=m?f:ie[f],b=p?n[p]:g,y=Ir(v);ee.mergeNodeAttributes(f,m?{size:g.size*Ss(v)}:{x:b.x+(g.x-b.x)*y,y:b.y+(g.y-b.y)*y,size:g.size*Math.min(1,Ss(v))})});let c=Math.min(1,Math.max(0,(d-t-700)/700));Y.setGraphState({reveal:ch(c)}),u||c<1?requestAnimationFrame(s):(ee.forEachNode(f=>ee.mergeNodeAttributes(f,n[f])),a())};requestAnimationFrame(s)}je("Loading the map\u2026");oe("g-empty-reset").addEventListener("click",()=>oe("g-reset").click());fetch("/graph.json").then(a=>{if(!a.ok)throw new Error(String(a.status));return a.json()}).then(a=>{let n=s=>s&&/^(https:\/\/|\/(?!\/))/.test(s)?s:void 0;a.nodes.forEach(s=>{s.id.startsWith("ext:")&&(s.entityKind=s.type,s.type="Entity",s.summary=`${s.entityKind}. Found by Semantica in ${s.degree||0} note${s.degree===1?"":"s"}; machine-extracted, not reviewed.`),s.url=n(s.url)??"#",s.canonical=n(s.canonical),V[s.id]=s});let e=a.edges.filter(s=>s.source!==s.target&&V[s.source]&&V[s.target]);e.filter(s=>s.origin==="folder").forEach(s=>{let[d,u]=V[s.target].type==="Theme"?[s.source,s.target]:[s.target,s.source];V[u].type==="Theme"&&(ie[d]=u)}),we=a.nodes.filter(s=>s.type==="Theme").sort((s,d)=>(d.degree||0)-(s.degree||0)).map(s=>s.id),e.filter(s=>s.origin==="source").forEach(s=>{let[d,u]=V[s.target].type==="Source"?[s.source,s.target]:[s.target,s.source];!ie[u]&&ie[d]&&(ie[u]=ie[d])});let t=fh(a.nodes,e);a.nodes.forEach(s=>{let d=t[s.id];ee.addNode(s.id,{x:d.x,y:-d.y,size:hh(s),label:s.label,kind:s.type,community:s.community,shape:kr[s.type]||"circle",labelSide:s.type==="Theme"?"below":d.side})}),e.forEach(s=>ee.addEdge(s.source,s.target,{rel:s.type,origin:s.origin,size:s.origin==="folder"?.7:s.origin==="frontmatter"?1.6:1.1})),vh(),Ls();let r=(s,d)=>d.hasActive&&!s.isActive&&!s.isHovered;Y=new hs(ee,xa,{settings:{itemSizesReference:"screen",labelFont:"Instrument Sans, system-ui, sans-serif",labelDensity:.4,labelRenderedSizeThreshold:11,stagePadding:48,zIndex:!0,hideEdgesOnMove:!1,minCameraRatio:.12,maxCameraRatio:1.4},primitives:{nodes:{shapes:[Jt(),ys({cornerRadius:.12}),ms({cornerRadius:.28}),bs({cornerRadius:.15})],layers:[en()]},edges:{paths:[tn(),xs({curvature:.22})],extremities:[_s({lengthRatio:4.5,widthRatio:3.2})],layers:[Ge()]}},customNodeState:{isActive:!1},customEdgeState:{isActive:!1},customGraphState:{hasActive:!1,fade:0,reveal:0,pulse:0},styles:{nodes:[Ke.nodes,{shape:{attribute:"shape"},labelColor:{attribute:"labelColor"},cursor:"pointer",labelSize:12.5,backdropColor:{attribute:"page"},backdropPadding:5,backdropCornerRadius:8,backdropShadowColor:"rgba(0,0,0,0.18)",backdropShadowBlur:10,opacity:(s,d,u)=>r(d,u)?1-.86*(u.fade??0):1},{labelPosition:{attribute:"labelSide"}},{when:s=>s.kind==="Theme",then:{labelVisibility:s=>(s.size||0)>8*_n?"visible":"hidden",backdropVisibility:s=>(s.size||0)>8*_n?"visible":"hidden",labelSize:Math.round(15*Math.max(.8,_n)),labelFont:"Newsreader, Georgia, serif",backdropArea:"label",backdropLabelPadding:5,backdropShadowBlur:6,backdropCornerRadius:8,backdropColor:{attribute:"pill"},backdropBorderColor:{attribute:"pillLine"},backdropBorderWidth:1}},{when:(s,d,u)=>r(d,u)&&(u.fade??0)>.5,then:{labelVisibility:"hidden",backdropVisibility:"hidden"}},{whenState:"isActive",then:{labelVisibility:"visible",depth:"topNodes",backdropVisibility:"visible",backdropArea:"label",backdropLabelPadding:3,backdropColor:{attribute:"pill"},backdropShadowBlur:0}},{whenState:"isHovered",then:{backdropVisibility:"visible",backdropArea:"both",labelVisibility:"visible",backdropShadowBlur:10,size:s=>(s.size||6)*1.18}},{whenState:"isHighlighted",then:{backdropVisibility:"visible",backdropArea:"node",backdropPadding:3,labelVisibility:"visible",depth:"topNodes",backdropColor:{attribute:"ring"},backdropShadowColor:{attribute:"halo"},backdropShadowBlur:(s,d,u)=>14+16*(u.pulse??.5)}}],edges:[Ke.edges,{path:{when:s=>s.origin==="folder",then:"line",else:"curved"}},{opacity:(s,d,u)=>(u.reveal??1)*(u.hasActive&&!d.isActive?1-.9*(u.fade??0):1)},{whenState:"isActive",then:{color:{attribute:"activeColor"},size:2.4,depth:"topEdges"}},{when:(s,d)=>d.isActive&&s.origin!=="folder",then:{head:"arrow"}},{when:(s,d)=>d.isActive&&s.origin==="folder",then:{size:1,opacity:.55}},{when:s=>s.origin==="frontmatter",then:{head:"arrow"}}]}}),Y.on("enterNode",({node:s})=>{_a=s,ot()}),Y.on("leaveNode",()=>{_a=null,ot()}),Y.on("clickNode",({node:s})=>{if(V[s].type==="Theme"&&!Le){Ve.querySelector(`[data-theme="${CSS.escape(s)}"]`)?.click();return}yt(s)}),Y.on("doubleClickNode",s=>{s.preventSigmaDefault?.(),V[s.node].type!=="Entity"&&(location.href=nh(V[s.node]))}),Y.on("clickStage",()=>{Le?jt():Gr()}),ph(a.nodes,e),Sn(),Eh(a);let i=a.nodes.filter(s=>!Pr.has(s.type)).map(s=>t[s.id]);Y.setCustomBBox({x:[Math.min(...i.map(s=>s.x)),Math.max(...i.map(s=>s.x))],y:[Math.min(...i.map(s=>-s.y)),Math.max(...i.map(s=>-s.y))]});let o=new URL(location.href).searchParams.get("node"),l=!!(o&&V[o]);if(o&&!l){let s=new URL(location.href);s.searchParams.delete("node"),history.replaceState(null,"",s)}(l?s=>{Y.setGraphState({reveal:1}),Y.refresh(),requestAnimationFrame(()=>requestAnimationFrame(s))}:Sh)(()=>{l?yt(o):o&&je("That note is not in the graph. Showing the whole map."),window.kfExplorer={screenPos:s=>{let d=Y.getNodeDisplayData(s);if(!d)return null;let u=Y.framedGraphToViewport({x:d.x,y:d.y});return[u.x,u.y]},labelBox:s=>{let d=Y.getNodeDisplayData(s);if(!d)return null;let u=Y.framedGraphToViewport({x:d.x,y:d.y}),c=Cr(s);return[u.x-Math.max(c.left,6),u.x+Math.max(c.right,6)]},selected:()=>Le,cameraRatio:()=>Y.getCamera().ratio,renderer:Y},oe("explorer").dataset.ready="true"})}).catch(a=>{console.error(a),je("The graph could not be loaded.")});})();
/*! Bundled license information:

sigma/dist/edge-data-texture-f60aad70.esm.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
