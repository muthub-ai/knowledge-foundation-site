/* Knowledge Foundation graph explorer. Includes sigma.js 4.0.3 (MIT), graphology 0.26.0 (MIT), events 3.3.0 (MIT). */
(()=>{var $s=Object.create;var Br=Object.defineProperty;var Vs=Object.getOwnPropertyDescriptor;var js=Object.getOwnPropertyNames;var qs=Object.getPrototypeOf,Xs=Object.prototype.hasOwnProperty;var Wr=(n,a)=>()=>{try{return a||n((a={exports:{}}).exports,a),a.exports}catch(e){throw a=0,e}};var Ys=(n,a,e,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of js(a))!Xs.call(n,r)&&r!==e&&Br(n,r,{get:()=>a[r],enumerable:!(t=Vs(a,r))||t.enumerable});return n};var lt=(n,a,e)=>(e=n!=null?$s(qs(n)):{},Ys(a||!n||!n.__esModule?Br(e,"default",{value:n,enumerable:!0}):e,n));var Et=Wr((Rh,wa)=>{"use strict";var Tt=typeof Reflect=="object"?Reflect:null,Ur=Tt&&typeof Tt.apply=="function"?Tt.apply:function(a,e,t){return Function.prototype.apply.call(a,e,t)},Rn;Tt&&typeof Tt.ownKeys=="function"?Rn=Tt.ownKeys:Object.getOwnPropertySymbols?Rn=function(a){return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a))}:Rn=function(a){return Object.getOwnPropertyNames(a)};function Ks(n){console&&console.warn&&console.warn(n)}var $r=Number.isNaN||function(a){return a!==a};function ae(){ae.init.call(this)}wa.exports=ae;wa.exports.once=el;ae.EventEmitter=ae;ae.prototype._events=void 0;ae.prototype._eventsCount=0;ae.prototype._maxListeners=void 0;var Hr=10;function wn(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(ae,"defaultMaxListeners",{enumerable:!0,get:function(){return Hr},set:function(n){if(typeof n!="number"||n<0||$r(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");Hr=n}});ae.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ae.prototype.setMaxListeners=function(a){if(typeof a!="number"||a<0||$r(a))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+a+".");return this._maxListeners=a,this};function Vr(n){return n._maxListeners===void 0?ae.defaultMaxListeners:n._maxListeners}ae.prototype.getMaxListeners=function(){return Vr(this)};ae.prototype.emit=function(a){for(var e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);var r=a==="error",i=this._events;if(i!==void 0)r=r&&i.error===void 0;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var l=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw l.context=o,l}var s=i[a];if(s===void 0)return!1;if(typeof s=="function")Ur(s,this,e);else for(var d=s.length,u=Kr(s,d),t=0;t<d;++t)Ur(u[t],this,e);return!0};function jr(n,a,e,t){var r,i,o;if(wn(e),i=n._events,i===void 0?(i=n._events=Object.create(null),n._eventsCount=0):(i.newListener!==void 0&&(n.emit("newListener",a,e.listener?e.listener:e),i=n._events),o=i[a]),o===void 0)o=i[a]=e,++n._eventsCount;else if(typeof o=="function"?o=i[a]=t?[e,o]:[o,e]:t?o.unshift(e):o.push(e),r=Vr(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(a)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=n,l.type=a,l.count=o.length,Ks(l)}return n}ae.prototype.addListener=function(a,e){return jr(this,a,e,!1)};ae.prototype.on=ae.prototype.addListener;ae.prototype.prependListener=function(a,e){return jr(this,a,e,!0)};function Zs(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function qr(n,a,e){var t={fired:!1,wrapFn:void 0,target:n,type:a,listener:e},r=Zs.bind(t);return r.listener=e,t.wrapFn=r,r}ae.prototype.once=function(a,e){return wn(e),this.on(a,qr(this,a,e)),this};ae.prototype.prependOnceListener=function(a,e){return wn(e),this.prependListener(a,qr(this,a,e)),this};ae.prototype.removeListener=function(a,e){var t,r,i,o,l;if(wn(e),r=this._events,r===void 0)return this;if(t=r[a],t===void 0)return this;if(t===e||t.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[a],r.removeListener&&this.emit("removeListener",a,t.listener||e));else if(typeof t!="function"){for(i=-1,o=t.length-1;o>=0;o--)if(t[o]===e||t[o].listener===e){l=t[o].listener,i=o;break}if(i<0)return this;i===0?t.shift():Qs(t,i),t.length===1&&(r[a]=t[0]),r.removeListener!==void 0&&this.emit("removeListener",a,l||e)}return this};ae.prototype.off=ae.prototype.removeListener;ae.prototype.removeAllListeners=function(a){var e,t,r;if(t=this._events,t===void 0)return this;if(t.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):t[a]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete t[a]),this;if(arguments.length===0){var i=Object.keys(t),o;for(r=0;r<i.length;++r)o=i[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=t[a],typeof e=="function")this.removeListener(a,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(a,e[r]);return this};function Xr(n,a,e){var t=n._events;if(t===void 0)return[];var r=t[a];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?Js(r):Kr(r,r.length)}ae.prototype.listeners=function(a){return Xr(this,a,!0)};ae.prototype.rawListeners=function(a){return Xr(this,a,!1)};ae.listenerCount=function(n,a){return typeof n.listenerCount=="function"?n.listenerCount(a):Yr.call(n,a)};ae.prototype.listenerCount=Yr;function Yr(n){var a=this._events;if(a!==void 0){var e=a[n];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}ae.prototype.eventNames=function(){return this._eventsCount>0?Rn(this._events):[]};function Kr(n,a){for(var e=new Array(a),t=0;t<a;++t)e[t]=n[t];return e}function Qs(n,a){for(;a+1<n.length;a++)n[a]=n[a+1];n.pop()}function Js(n){for(var a=new Array(n.length),e=0;e<a.length;++e)a[e]=n[e].listener||n[e];return a}function el(n,a){return new Promise(function(e,t){function r(o){n.removeListener(a,i),t(o)}function i(){typeof n.removeListener=="function"&&n.removeListener("error",r),e([].slice.call(arguments))}Zr(n,a,i,{once:!0}),a!=="error"&&tl(n,r,{once:!0})})}function tl(n,a,e){typeof n.on=="function"&&Zr(n,"error",a,e)}function Zr(n,a,e,t){if(typeof n.on=="function")t.once?n.once(a,e):n.on(a,e);else if(typeof n.addEventListener=="function")n.addEventListener(a,function r(i){t.once&&n.removeEventListener(a,r),e(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}});var Ka=Wr((Bh,Bi)=>{Bi.exports=function(a){return a!==null&&typeof a=="object"&&typeof a.addUndirectedEdgeWithKey=="function"&&typeof a.dropNode=="function"&&typeof a.multi=="boolean"}});var ti=lt(Et(),1);function nl(){let n=arguments[0];for(let a=1,e=arguments.length;a<e;a++)if(arguments[a])for(let t in arguments[a])n[t]=arguments[a][t];return n}var ce=nl;typeof Object.assign=="function"&&(ce=Object.assign);function Ee(n,a,e,t){let r=n._nodes.get(a),i=null;return r&&(t==="mixed"?i=r.out&&r.out[e]||r.undirected&&r.undirected[e]:t==="directed"?i=r.out&&r.out[e]:i=r.undirected&&r.undirected[e]),i}function ge(n){return typeof n=="object"&&n!==null}function ni(n){let a;for(a in n)return!1;return!0}function Te(n,a,e){Object.defineProperty(n,a,{enumerable:!1,configurable:!1,writable:!0,value:e})}function ke(n,a,e){let t={enumerable:!0,configurable:!0};typeof e=="function"?t.get=e:(t.value=e,t.writable=!1),Object.defineProperty(n,a,t)}function Qr(n){return!(!ge(n)||n.attributes&&!Array.isArray(n.attributes))}function al(){let n=Math.floor(Math.random()*256)&255;return()=>n++}function We(){let n=arguments,a=null,e=-1;return{[Symbol.iterator](){return this},next(){let t=null;do{if(a===null){if(e++,e>=n.length)return{done:!0};a=n[e][Symbol.iterator]()}if(t=a.next(),t.done){a=null;continue}break}while(!0);return t}}}function At(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}var Jt=class extends Error{constructor(a){super(),this.name="GraphError",this.message=a}},W=class n extends Jt{constructor(a){super(a),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,n.prototype.constructor)}},B=class n extends Jt{constructor(a){super(a),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,n.prototype.constructor)}},X=class n extends Jt{constructor(a){super(a),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,n.prototype.constructor)}};function ai(n,a){this.key=n,this.attributes=a,this.clear()}ai.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function ri(n,a){this.key=n,this.attributes=a,this.clear()}ri.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function ii(n,a){this.key=n,this.attributes=a,this.clear()}ii.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function Rt(n,a,e,t,r){this.key=a,this.attributes=r,this.undirected=n,this.source=e,this.target=t}Rt.prototype.attach=function(){let n="out",a="in";this.undirected&&(n=a="undirected");let e=this.source.key,t=this.target.key;this.source[n][t]=this,!(this.undirected&&e===t)&&(this.target[a][e]=this)};Rt.prototype.attachMulti=function(){let n="out",a="in",e=this.source.key,t=this.target.key;this.undirected&&(n=a="undirected");let r=this.source[n],i=r[t];if(typeof i>"u"){r[t]=this,this.undirected&&e===t||(this.target[a][e]=this);return}i.previous=this,this.next=i,r[t]=this,this.target[a][e]=this};Rt.prototype.detach=function(){let n=this.source.key,a=this.target.key,e="out",t="in";this.undirected&&(e=t="undirected"),delete this.source[e][a],delete this.target[t][n]};Rt.prototype.detachMulti=function(){let n=this.source.key,a=this.target.key,e="out",t="in";this.undirected&&(e=t="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][a],delete this.target[t][n]):(this.next.previous=void 0,this.source[e][a]=this.next,this.target[t][n]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};var oi=0,si=1,rl=2,li=3;function Ue(n,a,e,t,r,i,o){let l,s,d,u;if(t=""+t,e===oi){if(l=n._nodes.get(t),!l)throw new B(`Graph.${a}: could not find the "${t}" node in the graph.`);d=r,u=i}else if(e===li){if(r=""+r,s=n._edges.get(r),!s)throw new B(`Graph.${a}: could not find the "${r}" edge in the graph.`);let c=s.source.key,p=s.target.key;if(t===c)l=s.target;else if(t===p)l=s.source;else throw new B(`Graph.${a}: the "${t}" node is not attached to the "${r}" edge (${c}, ${p}).`);d=i,u=o}else{if(s=n._edges.get(t),!s)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`);e===si?l=s.source:l=s.target,d=r,u=i}return[l,d,u]}function il(n,a,e){n.prototype[a]=function(t,r,i){let[o,l]=Ue(this,a,e,t,r,i);return o.attributes[l]}}function ol(n,a,e){n.prototype[a]=function(t,r){let[i]=Ue(this,a,e,t,r);return i.attributes}}function sl(n,a,e){n.prototype[a]=function(t,r,i){let[o,l]=Ue(this,a,e,t,r,i);return o.attributes.hasOwnProperty(l)}}function ll(n,a,e){n.prototype[a]=function(t,r,i,o){let[l,s,d]=Ue(this,a,e,t,r,i,o);return l.attributes[s]=d,this.emit("nodeAttributesUpdated",{key:l.key,type:"set",attributes:l.attributes,name:s}),this}}function dl(n,a,e){n.prototype[a]=function(t,r,i,o){let[l,s,d]=Ue(this,a,e,t,r,i,o);if(typeof d!="function")throw new W(`Graph.${a}: updater should be a function.`);let u=l.attributes,c=d(u[s]);return u[s]=c,this.emit("nodeAttributesUpdated",{key:l.key,type:"set",attributes:l.attributes,name:s}),this}}function ul(n,a,e){n.prototype[a]=function(t,r,i){let[o,l]=Ue(this,a,e,t,r,i);return delete o.attributes[l],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:l}),this}}function cl(n,a,e){n.prototype[a]=function(t,r,i){let[o,l]=Ue(this,a,e,t,r,i);if(!ge(l))throw new W(`Graph.${a}: provided attributes are not a plain object.`);return o.attributes=l,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function hl(n,a,e){n.prototype[a]=function(t,r,i){let[o,l]=Ue(this,a,e,t,r,i);if(!ge(l))throw new W(`Graph.${a}: provided attributes are not a plain object.`);return ce(o.attributes,l),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:l}),this}}function fl(n,a,e){n.prototype[a]=function(t,r,i){let[o,l]=Ue(this,a,e,t,r,i);if(typeof l!="function")throw new W(`Graph.${a}: provided updater is not a function.`);return o.attributes=l(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}var gl=[{name:n=>`get${n}Attribute`,attacher:il},{name:n=>`get${n}Attributes`,attacher:ol},{name:n=>`has${n}Attribute`,attacher:sl},{name:n=>`set${n}Attribute`,attacher:ll},{name:n=>`update${n}Attribute`,attacher:dl},{name:n=>`remove${n}Attribute`,attacher:ul},{name:n=>`replace${n}Attributes`,attacher:cl},{name:n=>`merge${n}Attributes`,attacher:hl},{name:n=>`update${n}Attributes`,attacher:fl}];function pl(n){gl.forEach(function({name:a,attacher:e}){e(n,a("Node"),oi),e(n,a("Source"),si),e(n,a("Target"),rl),e(n,a("Opposite"),li)})}function vl(n,a,e){n.prototype[a]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Ee(this,o,l,e),!i)throw new B(`Graph.${a}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}return i.attributes[r]}}function ml(n,a,e){n.prototype[a]=function(t){let r;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let i=""+t,o=""+arguments[1];if(r=Ee(this,i,o,e),!r)throw new B(`Graph.${a}: could not find an edge for the given path ("${i}" - "${o}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,r=this._edges.get(t),!r)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}return r.attributes}}function bl(n,a,e){n.prototype[a]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Ee(this,o,l,e),!i)throw new B(`Graph.${a}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}return i.attributes.hasOwnProperty(r)}}function yl(n,a,e){n.prototype[a]=function(t,r,i){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let l=""+t,s=""+r;if(r=arguments[2],i=arguments[3],o=Ee(this,l,s,e),!o)throw new B(`Graph.${a}: could not find an edge for the given path ("${l}" - "${s}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,o=this._edges.get(t),!o)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}return o.attributes[r]=i,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function xl(n,a,e){n.prototype[a]=function(t,r,i){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let l=""+t,s=""+r;if(r=arguments[2],i=arguments[3],o=Ee(this,l,s,e),!o)throw new B(`Graph.${a}: could not find an edge for the given path ("${l}" - "${s}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,o=this._edges.get(t),!o)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}if(typeof i!="function")throw new W(`Graph.${a}: updater should be a function.`);return o.attributes[r]=i(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function _l(n,a,e){n.prototype[a]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Ee(this,o,l,e),!i)throw new B(`Graph.${a}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}return delete i.attributes[r],this.emit("edgeAttributesUpdated",{key:i.key,type:"remove",attributes:i.attributes,name:r}),this}}function Tl(n,a,e){n.prototype[a]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Ee(this,o,l,e),!i)throw new B(`Graph.${a}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}if(!ge(r))throw new W(`Graph.${a}: provided attributes are not a plain object.`);return i.attributes=r,this.emit("edgeAttributesUpdated",{key:i.key,type:"replace",attributes:i.attributes}),this}}function El(n,a,e){n.prototype[a]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Ee(this,o,l,e),!i)throw new B(`Graph.${a}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}if(!ge(r))throw new W(`Graph.${a}: provided attributes are not a plain object.`);return ce(i.attributes,r),this.emit("edgeAttributesUpdated",{key:i.key,type:"merge",attributes:i.attributes,data:r}),this}}function Sl(n,a,e){n.prototype[a]=function(t,r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new X(`Graph.${a}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new X(`Graph.${a}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+t,l=""+r;if(r=arguments[2],i=Ee(this,o,l,e),!i)throw new B(`Graph.${a}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(e!=="mixed")throw new X(`Graph.${a}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(t=""+t,i=this._edges.get(t),!i)throw new B(`Graph.${a}: could not find the "${t}" edge in the graph.`)}if(typeof r!="function")throw new W(`Graph.${a}: provided updater is not a function.`);return i.attributes=r(i.attributes),this.emit("edgeAttributesUpdated",{key:i.key,type:"update",attributes:i.attributes}),this}}var Al=[{name:n=>`get${n}Attribute`,attacher:vl},{name:n=>`get${n}Attributes`,attacher:ml},{name:n=>`has${n}Attribute`,attacher:bl},{name:n=>`set${n}Attribute`,attacher:yl},{name:n=>`update${n}Attribute`,attacher:xl},{name:n=>`remove${n}Attribute`,attacher:_l},{name:n=>`replace${n}Attributes`,attacher:Tl},{name:n=>`merge${n}Attributes`,attacher:El},{name:n=>`update${n}Attributes`,attacher:Sl}];function Rl(n){Al.forEach(function({name:a,attacher:e}){e(n,a("Edge"),"mixed"),e(n,a("DirectedEdge"),"directed"),e(n,a("UndirectedEdge"),"undirected")})}var wl=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function Dl(n,a,e,t){let r=!1;for(let i in a){if(i===t)continue;let o=a[i];if(r=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),n&&r)return o.key}}function Ll(n,a,e,t){let r,i,o,l=!1;for(let s in a)if(s!==t){r=a[s];do{if(i=r.source,o=r.target,l=e(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected),n&&l)return r.key;r=r.next}while(r!==void 0)}}function Da(n,a){let e=Object.keys(n),t=e.length,r,i=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(i>=t)return{done:!0};let o=e[i++];if(o===a){r=void 0;continue}r=n[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function Cl(n,a,e,t){let r=a[e];if(!r)return;let i=r.source,o=r.target;if(t(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected)&&n)return r.key}function kl(n,a,e,t){let r=a[e];if(!r)return;let i=!1;do{if(i=t(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),n&&i)return r.key;r=r.next}while(r!==void 0)}function La(n,a){let e=n[a];if(e.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!e)return{done:!0};let r={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:r}}};let t=!1;return{[Symbol.iterator](){return this},next(){return t===!0?{done:!0}:(t=!0,{done:!1,value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected}})}}}function Pl(n,a){if(n.size===0)return[];if(a==="mixed"||a===n.type)return Array.from(n._edges.keys());let e=a==="undirected"?n.undirectedSize:n.directedSize,t=new Array(e),r=a==="undirected",i=n._edges.values(),o=0,l,s;for(;l=i.next(),l.done!==!0;)s=l.value,s.undirected===r&&(t[o++]=s.key);return t}function di(n,a,e,t){if(a.size===0)return;let r=e!=="mixed"&&e!==a.type,i=e==="undirected",o,l,s=!1,d=a._edges.values();for(;o=d.next(),o.done!==!0;){if(l=o.value,r&&l.undirected!==i)continue;let{key:u,attributes:c,source:p,target:f}=l;if(s=t(u,c,p.key,f.key,p.attributes,f.attributes,l.undirected),n&&s)return u}}function Fl(n,a){if(n.size===0)return At();let e=a!=="mixed"&&a!==n.type,t=a==="undirected",r=n._edges.values();return{[Symbol.iterator](){return this},next(){let i,o;for(;;){if(i=r.next(),i.done)return i;if(o=i.value,!(e&&o.undirected!==t))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function Ca(n,a,e,t,r,i){let o=a?Ll:Dl,l;if(e!=="undirected"&&(t!=="out"&&(l=o(n,r.in,i),n&&l)||t!=="in"&&(l=o(n,r.out,i,t?void 0:r.key),n&&l))||e!=="directed"&&(l=o(n,r.undirected,i),n&&l))return l}function Il(n,a,e,t){let r=[];return Ca(!1,n,a,e,t,function(i){r.push(i)}),r}function Nl(n,a,e){let t=At();return n!=="undirected"&&(a!=="out"&&typeof e.in<"u"&&(t=We(t,Da(e.in))),a!=="in"&&typeof e.out<"u"&&(t=We(t,Da(e.out,a?void 0:e.key)))),n!=="directed"&&typeof e.undirected<"u"&&(t=We(t,Da(e.undirected))),t}function ka(n,a,e,t,r,i,o){let l=e?kl:Cl,s;if(a!=="undirected"&&(typeof r.in<"u"&&t!=="out"&&(s=l(n,r.in,i,o),n&&s)||typeof r.out<"u"&&t!=="in"&&(t||r.key!==i)&&(s=l(n,r.out,i,o),n&&s))||a!=="directed"&&typeof r.undirected<"u"&&(s=l(n,r.undirected,i,o),n&&s))return s}function Gl(n,a,e,t,r){let i=[];return ka(!1,n,a,e,t,r,function(o){i.push(o)}),i}function Ml(n,a,e,t){let r=At();return n!=="undirected"&&(typeof e.in<"u"&&a!=="out"&&t in e.in&&(r=We(r,La(e.in,t))),typeof e.out<"u"&&a!=="in"&&t in e.out&&(a||e.key!==t)&&(r=We(r,La(e.out,t)))),n!=="directed"&&typeof e.undirected<"u"&&t in e.undirected&&(r=We(r,La(e.undirected,t))),r}function zl(n,a){let{name:e,type:t,direction:r}=a;n.prototype[e]=function(i,o){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return[];if(!arguments.length)return Pl(this,t);if(arguments.length===1){i=""+i;let l=this._nodes.get(i);if(typeof l>"u")throw new B(`Graph.${e}: could not find the "${i}" node in the graph.`);return Il(this.multi,t==="mixed"?this.type:t,r,l)}if(arguments.length===2){i=""+i,o=""+o;let l=this._nodes.get(i);if(!l)throw new B(`Graph.${e}:  could not find the "${i}" source node in the graph.`);if(!this._nodes.has(o))throw new B(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return Gl(t,this.multi,r,l,o)}throw new W(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ol(n,a){let{name:e,type:t,direction:r}=a,i="forEach"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[i]=function(d,u,c){if(!(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)){if(arguments.length===1)return c=d,di(!1,this,t,c);if(arguments.length===2){d=""+d,c=u;let p=this._nodes.get(d);if(typeof p>"u")throw new B(`Graph.${i}: could not find the "${d}" node in the graph.`);return Ca(!1,this.multi,t==="mixed"?this.type:t,r,p,c)}if(arguments.length===3){d=""+d,u=""+u;let p=this._nodes.get(d);if(!p)throw new B(`Graph.${i}:  could not find the "${d}" source node in the graph.`);if(!this._nodes.has(u))throw new B(`Graph.${i}:  could not find the "${u}" target node in the graph.`);return ka(!1,t,this.multi,r,p,u,c)}throw new W(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};let o="map"+e[0].toUpperCase()+e.slice(1);n.prototype[o]=function(){let d=Array.prototype.slice.call(arguments),u=d.pop(),c;if(d.length===0){let p=0;t!=="directed"&&(p+=this.undirectedSize),t!=="undirected"&&(p+=this.directedSize),c=new Array(p);let f=0;d.push((h,b,m,v,g,y,x)=>{c[f++]=u(h,b,m,v,g,y,x)})}else c=[],d.push((p,f,h,b,m,v,g)=>{c.push(u(p,f,h,b,m,v,g))});return this[i].apply(this,d),c};let l="filter"+e[0].toUpperCase()+e.slice(1);n.prototype[l]=function(){let d=Array.prototype.slice.call(arguments),u=d.pop(),c=[];return d.push((p,f,h,b,m,v,g)=>{u(p,f,h,b,m,v,g)&&c.push(p)}),this[i].apply(this,d),c};let s="reduce"+e[0].toUpperCase()+e.slice(1);n.prototype[s]=function(){let d=Array.prototype.slice.call(arguments);if(d.length<2||d.length>4)throw new W(`Graph.${s}: invalid number of arguments (expecting 2, 3 or 4 and got ${d.length}).`);if(typeof d[d.length-1]=="function"&&typeof d[d.length-2]!="function")throw new W(`Graph.${s}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,c;d.length===2?(u=d[0],c=d[1],d=[]):d.length===3?(u=d[1],c=d[2],d=[d[0]]):d.length===4&&(u=d[2],c=d[3],d=[d[0],d[1]]);let p=c;return d.push((f,h,b,m,v,g,y)=>{p=u(p,f,h,b,m,v,g,y)}),this[i].apply(this,d),p}}function Bl(n,a){let{name:e,type:t,direction:r}=a,i="find"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[i]=function(s,d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return!1;if(arguments.length===1)return u=s,di(!0,this,t,u);if(arguments.length===2){s=""+s,u=d;let c=this._nodes.get(s);if(typeof c>"u")throw new B(`Graph.${i}: could not find the "${s}" node in the graph.`);return Ca(!0,this.multi,t==="mixed"?this.type:t,r,c,u)}if(arguments.length===3){s=""+s,d=""+d;let c=this._nodes.get(s);if(!c)throw new B(`Graph.${i}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(d))throw new B(`Graph.${i}:  could not find the "${d}" target node in the graph.`);return ka(!0,t,this.multi,r,c,d,u)}throw new W(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};let o="some"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[o]=function(){let s=Array.prototype.slice.call(arguments),d=s.pop();return s.push((c,p,f,h,b,m,v)=>d(c,p,f,h,b,m,v)),!!this[i].apply(this,s)};let l="every"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[l]=function(){let s=Array.prototype.slice.call(arguments),d=s.pop();return s.push((c,p,f,h,b,m,v)=>!d(c,p,f,h,b,m,v)),!this[i].apply(this,s)}}function Wl(n,a){let{name:e,type:t,direction:r}=a,i=e.slice(0,-1)+"Entries";n.prototype[i]=function(o,l){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return At();if(!arguments.length)return Fl(this,t);if(arguments.length===1){o=""+o;let s=this._nodes.get(o);if(!s)throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return Nl(t,r,s)}if(arguments.length===2){o=""+o,l=""+l;let s=this._nodes.get(o);if(!s)throw new B(`Graph.${i}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(l))throw new B(`Graph.${i}:  could not find the "${l}" target node in the graph.`);return Ml(t,r,s,l)}throw new W(`Graph.${i}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ul(n){wl.forEach(a=>{zl(n,a),Ol(n,a),Bl(n,a),Wl(n,a)})}var Hl=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function In(){this.A=null,this.B=null}In.prototype.wrap=function(n){this.A===null?this.A=n:this.B===null&&(this.B=n)};In.prototype.has=function(n){return this.A!==null&&n in this.A||this.B!==null&&n in this.B};function Zt(n,a,e,t,r){for(let i in t){let o=t[i],l=o.source,s=o.target,d=l===e?s:l;if(a&&a.has(d.key))continue;let u=r(d.key,d.attributes);if(n&&u)return d.key}}function Pa(n,a,e,t,r){if(a!=="mixed"){if(a==="undirected")return Zt(n,null,t,t.undirected,r);if(typeof e=="string")return Zt(n,null,t,t[e],r)}let i=new In,o;if(a!=="undirected"){if(e!=="out"){if(o=Zt(n,null,t,t.in,r),n&&o)return o;i.wrap(t.in)}if(e!=="in"){if(o=Zt(n,i,t,t.out,r),n&&o)return o;i.wrap(t.out)}}if(a!=="directed"&&(o=Zt(n,i,t,t.undirected,r),n&&o))return o}function $l(n,a,e){if(n!=="mixed"){if(n==="undirected")return Object.keys(e.undirected);if(typeof a=="string")return Object.keys(e[a])}let t=[];return Pa(!1,n,a,e,function(r){t.push(r)}),t}function Qt(n,a,e){let t=Object.keys(e),r=t.length,i=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(i>=r)return n&&n.wrap(e),{done:!0};let l=e[t[i++]],s=l.source,d=l.target;if(o=s===a?d:s,n&&n.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Vl(n,a,e){if(n!=="mixed"){if(n==="undirected")return Qt(null,e,e.undirected);if(typeof a=="string")return Qt(null,e,e[a])}let t=At(),r=new In;return n!=="undirected"&&(a!=="out"&&(t=We(t,Qt(r,e,e.in))),a!=="in"&&(t=We(t,Qt(r,e,e.out)))),n!=="directed"&&(t=We(t,Qt(r,e,e.undirected))),t}function jl(n,a){let{name:e,type:t,direction:r}=a;n.prototype[e]=function(i){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return[];i=""+i;let o=this._nodes.get(i);if(typeof o>"u")throw new B(`Graph.${e}: could not find the "${i}" node in the graph.`);return $l(t==="mixed"?this.type:t,r,o)}}function ql(n,a){let{name:e,type:t,direction:r}=a,i="forEach"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[i]=function(d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return;d=""+d;let c=this._nodes.get(d);if(typeof c>"u")throw new B(`Graph.${i}: could not find the "${d}" node in the graph.`);Pa(!1,t==="mixed"?this.type:t,r,c,u)};let o="map"+e[0].toUpperCase()+e.slice(1);n.prototype[o]=function(d,u){let c=[];return this[i](d,(p,f)=>{c.push(u(p,f))}),c};let l="filter"+e[0].toUpperCase()+e.slice(1);n.prototype[l]=function(d,u){let c=[];return this[i](d,(p,f)=>{u(p,f)&&c.push(p)}),c};let s="reduce"+e[0].toUpperCase()+e.slice(1);n.prototype[s]=function(d,u,c){if(arguments.length<3)throw new W(`Graph.${s}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let p=c;return this[i](d,(f,h)=>{p=u(p,f,h)}),p}}function Xl(n,a){let{name:e,type:t,direction:r}=a,i=e[0].toUpperCase()+e.slice(1,-1),o="find"+i;n.prototype[o]=function(d,u){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return;d=""+d;let c=this._nodes.get(d);if(typeof c>"u")throw new B(`Graph.${o}: could not find the "${d}" node in the graph.`);return Pa(!0,t==="mixed"?this.type:t,r,c,u)};let l="some"+i;n.prototype[l]=function(d,u){return!!this[o](d,u)};let s="every"+i;n.prototype[s]=function(d,u){return!this[o](d,(p,f)=>!u(p,f))}}function Yl(n,a){let{name:e,type:t,direction:r}=a,i=e.slice(0,-1)+"Entries";n.prototype[i]=function(o){if(t!=="mixed"&&this.type!=="mixed"&&t!==this.type)return At();o=""+o;let l=this._nodes.get(o);if(typeof l>"u")throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return Vl(t==="mixed"?this.type:t,r,l)}}function Kl(n){Hl.forEach(a=>{jl(n,a),ql(n,a),Xl(n,a),Yl(n,a)})}function Dn(n,a,e,t,r){let i=t._nodes.values(),o=t.type,l,s,d,u,c,p,f;for(;l=i.next(),l.done!==!0;){let h=!1;if(s=l.value,o!=="undirected"){u=s.out;for(d in u){c=u[d];do{if(p=c.target,h=!0,f=r(s.key,p.key,s.attributes,p.attributes,c.key,c.attributes,c.undirected),n&&f)return c;c=c.next}while(c)}}if(o!=="directed"){u=s.undirected;for(d in u)if(!(a&&s.key>d)){c=u[d];do{if(p=c.target,p.key!==d&&(p=c.source),h=!0,f=r(s.key,p.key,s.attributes,p.attributes,c.key,c.attributes,c.undirected),n&&f)return c;c=c.next}while(c)}}if(e&&!h&&(f=r(s.key,null,s.attributes,null,null,null,null),n&&f))return null}}function Zl(n,a){let e={key:n};return ni(a.attributes)||(e.attributes=ce({},a.attributes)),e}function Ql(n,a,e){let t={key:a,source:e.source.key,target:e.target.key};return ni(e.attributes)||(t.attributes=ce({},e.attributes)),n==="mixed"&&e.undirected&&(t.undirected=!0),t}function Jl(n){if(!ge(n))throw new W('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in n))throw new W("Graph.import: serialized node is missing its key.");if("attributes"in n&&(!ge(n.attributes)||n.attributes===null))throw new W("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function ed(n){if(!ge(n))throw new W('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in n))throw new W("Graph.import: serialized edge is missing its source.");if(!("target"in n))throw new W("Graph.import: serialized edge is missing its target.");if("attributes"in n&&(!ge(n.attributes)||n.attributes===null))throw new W("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in n&&typeof n.undirected!="boolean")throw new W("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}var td=al(),nd=new Set(["directed","undirected","mixed"]),Jr=new Set(["domain","_events","_eventsCount","_maxListeners"]),ad=[{name:n=>`${n}Edge`,generateKey:!0},{name:n=>`${n}DirectedEdge`,generateKey:!0,type:"directed"},{name:n=>`${n}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:n=>`${n}EdgeWithKey`},{name:n=>`${n}DirectedEdgeWithKey`,type:"directed"},{name:n=>`${n}UndirectedEdgeWithKey`,type:"undirected"}],rd={allowSelfLoops:!0,multi:!1,type:"mixed"};function id(n,a,e){if(e&&!ge(e))throw new W(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(a=""+a,e=e||{},n._nodes.has(a))throw new X(`Graph.addNode: the "${a}" node already exist in the graph.`);let t=new n.NodeDataClass(a,e);return n._nodes.set(a,t),n.emit("nodeAdded",{key:a,attributes:e}),t}function ei(n,a,e){let t=new n.NodeDataClass(a,e);return n._nodes.set(a,t),n.emit("nodeAdded",{key:a,attributes:e}),t}function ui(n,a,e,t,r,i,o,l){if(!t&&n.type==="undirected")throw new X(`Graph.${a}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(t&&n.type==="directed")throw new X(`Graph.${a}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(l&&!ge(l))throw new W(`Graph.${a}: invalid attributes. Expecting an object but got "${l}"`);if(i=""+i,o=""+o,l=l||{},!n.allowSelfLoops&&i===o)throw new X(`Graph.${a}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let s=n._nodes.get(i),d=n._nodes.get(o);if(!s)throw new B(`Graph.${a}: source node "${i}" not found.`);if(!d)throw new B(`Graph.${a}: target node "${o}" not found.`);let u={key:null,undirected:t,source:i,target:o,attributes:l};if(e)r=n._edgeKeyGenerator();else if(r=""+r,n._edges.has(r))throw new X(`Graph.${a}: the "${r}" edge already exists in the graph.`);if(!n.multi&&(t?typeof s.undirected[o]<"u":typeof s.out[o]<"u"))throw new X(`Graph.${a}: an edge linking "${i}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);let c=new Rt(t,r,s,d,l);n._edges.set(r,c);let p=i===o;return t?(s.undirectedDegree++,d.undirectedDegree++,p&&(s.undirectedLoops++,n._undirectedSelfLoopCount++)):(s.outDegree++,d.inDegree++,p&&(s.directedLoops++,n._directedSelfLoopCount++)),n.multi?c.attachMulti():c.attach(),t?n._undirectedSize++:n._directedSize++,u.key=r,n.emit("edgeAdded",u),r}function od(n,a,e,t,r,i,o,l,s){if(!t&&n.type==="undirected")throw new X(`Graph.${a}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(t&&n.type==="directed")throw new X(`Graph.${a}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(l){if(s){if(typeof l!="function")throw new W(`Graph.${a}: invalid updater function. Expecting a function but got "${l}"`)}else if(!ge(l))throw new W(`Graph.${a}: invalid attributes. Expecting an object but got "${l}"`)}i=""+i,o=""+o;let d;if(s&&(d=l,l=void 0),!n.allowSelfLoops&&i===o)throw new X(`Graph.${a}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=n._nodes.get(i),c=n._nodes.get(o),p,f;if(!e&&(p=n._edges.get(r),p)){if((p.source.key!==i||p.target.key!==o)&&(!t||p.source.key!==o||p.target.key!==i))throw new X(`Graph.${a}: inconsistency detected when attempting to merge the "${r}" edge with "${i}" source & "${o}" target vs. ("${p.source.key}", "${p.target.key}").`);f=p}if(!f&&!n.multi&&u&&(f=t?u.undirected[o]:u.out[o]),f){let g=[f.key,!1,!1,!1];if(s?!d:!l)return g;if(s){let y=f.attributes;f.attributes=d(y),n.emit("edgeAttributesUpdated",{type:"replace",key:f.key,attributes:f.attributes})}else ce(f.attributes,l),n.emit("edgeAttributesUpdated",{type:"merge",key:f.key,attributes:f.attributes,data:l});return g}l=l||{},s&&d&&(l=d(l));let h={key:null,undirected:t,source:i,target:o,attributes:l};if(e)r=n._edgeKeyGenerator();else if(r=""+r,n._edges.has(r))throw new X(`Graph.${a}: the "${r}" edge already exists in the graph.`);let b=!1,m=!1;u||(u=ei(n,i,{}),b=!0,i===o&&(c=u,m=!0)),c||(c=ei(n,o,{}),m=!0),p=new Rt(t,r,u,c,l),n._edges.set(r,p);let v=i===o;return t?(u.undirectedDegree++,c.undirectedDegree++,v&&(u.undirectedLoops++,n._undirectedSelfLoopCount++)):(u.outDegree++,c.inDegree++,v&&(u.directedLoops++,n._directedSelfLoopCount++)),n.multi?p.attachMulti():p.attach(),t?n._undirectedSize++:n._directedSize++,h.key=r,n.emit("edgeAdded",h),[r,!0,b,m]}function St(n,a){n._edges.delete(a.key);let{source:e,target:t,attributes:r}=a,i=a.undirected,o=e===t;i?(e.undirectedDegree--,t.undirectedDegree--,o&&(e.undirectedLoops--,n._undirectedSelfLoopCount--)):(e.outDegree--,t.inDegree--,o&&(e.directedLoops--,n._directedSelfLoopCount--)),n.multi?a.detachMulti():a.detach(),i?n._undirectedSize--:n._directedSize--,n.emit("edgeDropped",{key:a.key,attributes:r,source:e.key,target:t.key,undirected:i})}var re=class n extends ti.EventEmitter{constructor(a){if(super(),a=ce({},rd,a),typeof a.multi!="boolean")throw new W(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${a.multi}".`);if(!nd.has(a.type))throw new W(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${a.type}".`);if(typeof a.allowSelfLoops!="boolean")throw new W(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${a.allowSelfLoops}".`);let e=a.type==="mixed"?ai:a.type==="directed"?ri:ii;Te(this,"NodeDataClass",e);let t="geid_"+td()+"_",r=0,i=()=>{let o;do o=t+r++;while(this._edges.has(o));return o};Te(this,"_attributes",{}),Te(this,"_nodes",new Map),Te(this,"_edges",new Map),Te(this,"_directedSize",0),Te(this,"_undirectedSize",0),Te(this,"_directedSelfLoopCount",0),Te(this,"_undirectedSelfLoopCount",0),Te(this,"_edgeKeyGenerator",i),Te(this,"_options",a),Jr.forEach(o=>Te(this,o,this[o])),ke(this,"order",()=>this._nodes.size),ke(this,"size",()=>this._edges.size),ke(this,"directedSize",()=>this._directedSize),ke(this,"undirectedSize",()=>this._undirectedSize),ke(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),ke(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),ke(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),ke(this,"multi",this._options.multi),ke(this,"type",this._options.type),ke(this,"allowSelfLoops",this._options.allowSelfLoops),ke(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(a){return this._nodes.has(""+a)}hasDirectedEdge(a,e){if(this.type==="undirected")return!1;if(arguments.length===1){let t=""+a,r=this._edges.get(t);return!!r&&!r.undirected}else if(arguments.length===2){a=""+a,e=""+e;let t=this._nodes.get(a);return t?t.out.hasOwnProperty(e):!1}throw new W(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(a,e){if(this.type==="directed")return!1;if(arguments.length===1){let t=""+a,r=this._edges.get(t);return!!r&&r.undirected}else if(arguments.length===2){a=""+a,e=""+e;let t=this._nodes.get(a);return t?t.undirected.hasOwnProperty(e):!1}throw new W(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(a,e){if(arguments.length===1){let t=""+a;return this._edges.has(t)}else if(arguments.length===2){a=""+a,e=""+e;let t=this._nodes.get(a);return t?typeof t.out<"u"&&t.out.hasOwnProperty(e)||typeof t.undirected<"u"&&t.undirected.hasOwnProperty(e):!1}throw new W(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(a,e){if(this.type==="undirected")return;if(a=""+a,e=""+e,this.multi)throw new X("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");let t=this._nodes.get(a);if(!t)throw new B(`Graph.directedEdge: could not find the "${a}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);let r=t.out&&t.out[e]||void 0;if(r)return r.key}undirectedEdge(a,e){if(this.type==="directed")return;if(a=""+a,e=""+e,this.multi)throw new X("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");let t=this._nodes.get(a);if(!t)throw new B(`Graph.undirectedEdge: could not find the "${a}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);let r=t.undirected&&t.undirected[e]||void 0;if(r)return r.key}edge(a,e){if(this.multi)throw new X("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.edge: could not find the "${a}" source node in the graph.`);if(!this._nodes.has(e))throw new B(`Graph.edge: could not find the "${e}" target node in the graph.`);let r=t.out&&t.out[e]||t.undirected&&t.undirected[e]||void 0;if(r)return r.key}areDirectedNeighbors(a,e){a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.areDirectedNeighbors: could not find the "${a}" node in the graph.`);return this.type==="undirected"?!1:e in t.in||e in t.out}areOutNeighbors(a,e){a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.areOutNeighbors: could not find the "${a}" node in the graph.`);return this.type==="undirected"?!1:e in t.out}areInNeighbors(a,e){a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.areInNeighbors: could not find the "${a}" node in the graph.`);return this.type==="undirected"?!1:e in t.in}areUndirectedNeighbors(a,e){a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.areUndirectedNeighbors: could not find the "${a}" node in the graph.`);return this.type==="directed"?!1:e in t.undirected}areNeighbors(a,e){a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.areNeighbors: could not find the "${a}" node in the graph.`);return this.type!=="undirected"&&(e in t.in||e in t.out)||this.type!=="directed"&&e in t.undirected}areInboundNeighbors(a,e){a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.areInboundNeighbors: could not find the "${a}" node in the graph.`);return this.type!=="undirected"&&e in t.in||this.type!=="directed"&&e in t.undirected}areOutboundNeighbors(a,e){a=""+a,e=""+e;let t=this._nodes.get(a);if(!t)throw new B(`Graph.areOutboundNeighbors: could not find the "${a}" node in the graph.`);return this.type!=="undirected"&&e in t.out||this.type!=="directed"&&e in t.undirected}inDegree(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.inDegree: could not find the "${a}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.outDegree: could not find the "${a}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.directedDegree: could not find the "${a}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.undirectedDegree: could not find the "${a}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.inboundDegree: could not find the "${a}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.inDegree),t}outboundDegree(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.outboundDegree: could not find the "${a}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.outDegree),t}degree(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.degree: could not find the "${a}" node in the graph.`);let t=0;return this.type!=="directed"&&(t+=e.undirectedDegree),this.type!=="undirected"&&(t+=e.inDegree+e.outDegree),t}inDegreeWithoutSelfLoops(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.inDegreeWithoutSelfLoops: could not find the "${a}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.outDegreeWithoutSelfLoops: could not find the "${a}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.directedDegreeWithoutSelfLoops: could not find the "${a}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${a}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${a}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.inDegree,r+=e.directedLoops),t-r}outboundDegreeWithoutSelfLoops(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${a}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.outDegree,r+=e.directedLoops),t-r}degreeWithoutSelfLoops(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.degreeWithoutSelfLoops: could not find the "${a}" node in the graph.`);let t=0,r=0;return this.type!=="directed"&&(t+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(t+=e.inDegree+e.outDegree,r+=e.directedLoops*2),t-r}source(a){a=""+a;let e=this._edges.get(a);if(!e)throw new B(`Graph.source: could not find the "${a}" edge in the graph.`);return e.source.key}target(a){a=""+a;let e=this._edges.get(a);if(!e)throw new B(`Graph.target: could not find the "${a}" edge in the graph.`);return e.target.key}extremities(a){a=""+a;let e=this._edges.get(a);if(!e)throw new B(`Graph.extremities: could not find the "${a}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(a,e){a=""+a,e=""+e;let t=this._edges.get(e);if(!t)throw new B(`Graph.opposite: could not find the "${e}" edge in the graph.`);let r=t.source.key,i=t.target.key;if(a===r)return i;if(a===i)return r;throw new B(`Graph.opposite: the "${a}" node is not attached to the "${e}" edge (${r}, ${i}).`)}hasExtremity(a,e){a=""+a,e=""+e;let t=this._edges.get(a);if(!t)throw new B(`Graph.hasExtremity: could not find the "${a}" edge in the graph.`);return t.source.key===e||t.target.key===e}isUndirected(a){a=""+a;let e=this._edges.get(a);if(!e)throw new B(`Graph.isUndirected: could not find the "${a}" edge in the graph.`);return e.undirected}isDirected(a){a=""+a;let e=this._edges.get(a);if(!e)throw new B(`Graph.isDirected: could not find the "${a}" edge in the graph.`);return!e.undirected}isSelfLoop(a){a=""+a;let e=this._edges.get(a);if(!e)throw new B(`Graph.isSelfLoop: could not find the "${a}" edge in the graph.`);return e.source===e.target}addNode(a,e){return id(this,a,e).key}mergeNode(a,e){if(e&&!ge(e))throw new W(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);a=""+a,e=e||{};let t=this._nodes.get(a);return t?(e&&(ce(t.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:a,attributes:t.attributes,data:e})),[a,!1]):(t=new this.NodeDataClass(a,e),this._nodes.set(a,t),this.emit("nodeAdded",{key:a,attributes:e}),[a,!0])}updateNode(a,e){if(e&&typeof e!="function")throw new W(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);a=""+a;let t=this._nodes.get(a);if(t){if(e){let i=t.attributes;t.attributes=e(i),this.emit("nodeAttributesUpdated",{type:"replace",key:a,attributes:t.attributes})}return[a,!1]}let r=e?e({}):{};return t=new this.NodeDataClass(a,r),this._nodes.set(a,t),this.emit("nodeAdded",{key:a,attributes:r}),[a,!0]}dropNode(a){a=""+a;let e=this._nodes.get(a);if(!e)throw new B(`Graph.dropNode: could not find the "${a}" node in the graph.`);let t;if(this.type!=="undirected"){for(let r in e.out){t=e.out[r];do St(this,t),t=t.next;while(t)}for(let r in e.in){t=e.in[r];do St(this,t),t=t.next;while(t)}}if(this.type!=="directed")for(let r in e.undirected){t=e.undirected[r];do St(this,t),t=t.next;while(t)}this._nodes.delete(a),this.emit("nodeDropped",{key:a,attributes:e.attributes})}dropEdge(a){let e;if(arguments.length>1){let t=""+arguments[0],r=""+arguments[1];if(e=Ee(this,t,r,this.type),!e)throw new B(`Graph.dropEdge: could not find the "${t}" -> "${r}" edge in the graph.`)}else if(a=""+a,e=this._edges.get(a),!e)throw new B(`Graph.dropEdge: could not find the "${a}" edge in the graph.`);return St(this,e),this}dropDirectedEdge(a,e){if(arguments.length<2)throw new X("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new X("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");a=""+a,e=""+e;let t=Ee(this,a,e,"directed");if(!t)throw new B(`Graph.dropDirectedEdge: could not find a "${a}" -> "${e}" edge in the graph.`);return St(this,t),this}dropUndirectedEdge(a,e){if(arguments.length<2)throw new X("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new X("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");let t=Ee(this,a,e,"undirected");if(!t)throw new B(`Graph.dropUndirectedEdge: could not find a "${a}" -> "${e}" edge in the graph.`);return St(this,t),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){let a=this._nodes.values(),e;for(;e=a.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(a){return this._attributes[a]}getAttributes(){return this._attributes}hasAttribute(a){return this._attributes.hasOwnProperty(a)}setAttribute(a,e){return this._attributes[a]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:a}),this}updateAttribute(a,e){if(typeof e!="function")throw new W("Graph.updateAttribute: updater should be a function.");let t=this._attributes[a];return this._attributes[a]=e(t),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:a}),this}removeAttribute(a){return delete this._attributes[a],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:a}),this}replaceAttributes(a){if(!ge(a))throw new W("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=a,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(a){if(!ge(a))throw new W("Graph.mergeAttributes: provided attributes are not a plain object.");return ce(this._attributes,a),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:a}),this}updateAttributes(a){if(typeof a!="function")throw new W("Graph.updateAttributes: provided updater is not a function.");return this._attributes=a(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(a,e){if(typeof a!="function")throw new W("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!Qr(e))throw new W("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let t=this._nodes.values(),r,i;for(;r=t.next(),r.done!==!0;)i=r.value,i.attributes=a(i.key,i.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(a,e){if(typeof a!="function")throw new W("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!Qr(e))throw new W("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let t=this._edges.values(),r,i,o,l;for(;r=t.next(),r.done!==!0;)i=r.value,o=i.source,l=i.target,i.attributes=a(i.key,i.attributes,o.key,l.key,o.attributes,l.attributes,i.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(a){if(typeof a!="function")throw new W("Graph.forEachAdjacencyEntry: expecting a callback.");Dn(!1,!1,!1,this,a)}forEachAdjacencyEntryWithOrphans(a){if(typeof a!="function")throw new W("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Dn(!1,!1,!0,this,a)}forEachAssymetricAdjacencyEntry(a){if(typeof a!="function")throw new W("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Dn(!1,!0,!1,this,a)}forEachAssymetricAdjacencyEntryWithOrphans(a){if(typeof a!="function")throw new W("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Dn(!1,!0,!0,this,a)}nodes(){return Array.from(this._nodes.keys())}forEachNode(a){if(typeof a!="function")throw new W("Graph.forEachNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)r=t.value,a(r.key,r.attributes)}findNode(a){if(typeof a!="function")throw new W("Graph.findNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,a(r.key,r.attributes))return r.key}mapNodes(a){if(typeof a!="function")throw new W("Graph.mapNode: expecting a callback.");let e=this._nodes.values(),t,r,i=new Array(this.order),o=0;for(;t=e.next(),t.done!==!0;)r=t.value,i[o++]=a(r.key,r.attributes);return i}someNode(a){if(typeof a!="function")throw new W("Graph.someNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,a(r.key,r.attributes))return!0;return!1}everyNode(a){if(typeof a!="function")throw new W("Graph.everyNode: expecting a callback.");let e=this._nodes.values(),t,r;for(;t=e.next(),t.done!==!0;)if(r=t.value,!a(r.key,r.attributes))return!1;return!0}filterNodes(a){if(typeof a!="function")throw new W("Graph.filterNodes: expecting a callback.");let e=this._nodes.values(),t,r,i=[];for(;t=e.next(),t.done!==!0;)r=t.value,a(r.key,r.attributes)&&i.push(r.key);return i}reduceNodes(a,e){if(typeof a!="function")throw new W("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new W("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let t=e,r=this._nodes.values(),i,o;for(;i=r.next(),i.done!==!0;)o=i.value,t=a(t,o.key,o.attributes);return t}nodeEntries(){let a=this._nodes.values();return{[Symbol.iterator](){return this},next(){let e=a.next();if(e.done)return e;let t=e.value;return{value:{node:t.key,attributes:t.attributes},done:!1}}}}export(){let a=new Array(this._nodes.size),e=0;this._nodes.forEach((r,i)=>{a[e++]=Zl(i,r)});let t=new Array(this._edges.size);return e=0,this._edges.forEach((r,i)=>{t[e++]=Ql(this.type,i,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:a,edges:t}}import(a,e=!1){if(a instanceof n)return a.forEachNode((s,d)=>{e?this.mergeNode(s,d):this.addNode(s,d)}),a.forEachEdge((s,d,u,c,p,f,h)=>{e?h?this.mergeUndirectedEdgeWithKey(s,u,c,d):this.mergeDirectedEdgeWithKey(s,u,c,d):h?this.addUndirectedEdgeWithKey(s,u,c,d):this.addDirectedEdgeWithKey(s,u,c,d)}),this;if(!ge(a))throw new W("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(a.attributes){if(!ge(a.attributes))throw new W("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(a.attributes):this.replaceAttributes(a.attributes)}let t,r,i,o,l;if(a.nodes){if(i=a.nodes,!Array.isArray(i))throw new W("Graph.import: invalid nodes. Expecting an array.");for(t=0,r=i.length;t<r;t++){o=i[t],Jl(o);let{key:s,attributes:d}=o;e?this.mergeNode(s,d):this.addNode(s,d)}}if(a.edges){let s=!1;if(this.type==="undirected"&&(s=!0),i=a.edges,!Array.isArray(i))throw new W("Graph.import: invalid edges. Expecting an array.");for(t=0,r=i.length;t<r;t++){l=i[t],ed(l);let{source:d,target:u,attributes:c,undirected:p=s}=l,f;"key"in l?(f=e?p?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:p?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,f.call(this,l.key,d,u,c)):(f=e?p?this.mergeUndirectedEdge:this.mergeDirectedEdge:p?this.addUndirectedEdge:this.addDirectedEdge,f.call(this,d,u,c))}}return this}nullCopy(a){let e=new n(ce({},this._options,a));return e.replaceAttributes(ce({},this.getAttributes())),e}emptyCopy(a){let e=this.nullCopy(a);return this._nodes.forEach((t,r)=>{let i=ce({},t.attributes);t=new e.NodeDataClass(r,i),e._nodes.set(r,t)}),e}copy(a){if(a=a||{},typeof a.type=="string"&&a.type!==this.type&&a.type!=="mixed")throw new X(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${a.type}" because this would mean losing information about the current graph.`);if(typeof a.multi=="boolean"&&a.multi!==this.multi&&a.multi!==!0)throw new X("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof a.allowSelfLoops=="boolean"&&a.allowSelfLoops!==this.allowSelfLoops&&a.allowSelfLoops!==!0)throw new X("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");let e=this.emptyCopy(a),t=this._edges.values(),r,i;for(;r=t.next(),r.done!==!0;)i=r.value,ui(e,"copy",!1,i.undirected,i.key,i.source.key,i.target.key,ce({},i.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){let a={};this._nodes.forEach((i,o)=>{a[o]=i.attributes});let e={},t={};this._edges.forEach((i,o)=>{let l=i.undirected?"--":"->",s="",d=i.source.key,u=i.target.key,c;i.undirected&&d>u&&(c=d,d=u,u=c);let p=`(${d})${l}(${u})`;o.startsWith("geid_")?this.multi&&(typeof t[p]>"u"?t[p]=0:t[p]++,s+=`${t[p]}. `):s+=`[${o}]: `,s+=p,e[s]=i.attributes});let r={};for(let i in this)this.hasOwnProperty(i)&&!Jr.has(i)&&typeof this[i]!="function"&&typeof i!="symbol"&&(r[i]=this[i]);return r.attributes=this._attributes,r.nodes=a,r.edges=e,Te(r,"constructor",this.constructor),r}};typeof Symbol<"u"&&(re.prototype[Symbol.for("nodejs.util.inspect.custom")]=re.prototype.inspect);ad.forEach(n=>{["add","merge","update"].forEach(a=>{let e=n.name(a),t=a==="add"?ui:od;n.generateKey?re.prototype[e]=function(r,i,o){return t(this,e,!0,(n.type||this.type)==="undirected",null,r,i,o,a==="update")}:re.prototype[e]=function(r,i,o,l){return t(this,e,!1,(n.type||this.type)==="undirected",r,i,o,l,a==="update")}})});pl(re);Rl(re);Ul(re);Kl(re);var Ln=class extends re{constructor(a){let e=ce({type:"directed"},a);if("multi"in e&&e.multi!==!1)throw new W("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new W('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},Cn=class extends re{constructor(a){let e=ce({type:"undirected"},a);if("multi"in e&&e.multi!==!1)throw new W("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new W('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},kn=class extends re{constructor(a){let e=ce({multi:!0},a);if("multi"in e&&e.multi!==!0)throw new W("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}},Pn=class extends re{constructor(a){let e=ce({type:"directed",multi:!0},a);if("multi"in e&&e.multi!==!0)throw new W("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new W('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},Fn=class extends re{constructor(a){let e=ce({type:"undirected",multi:!0},a);if("multi"in e&&e.multi!==!0)throw new W("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new W('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}};function wt(n){n.from=function(a,e){let t=ce({},a.options,e),r=new n(t);return r.import(a),r}}wt(re);wt(Ln);wt(Cn);wt(kn);wt(Pn);wt(Fn);re.Graph=re;re.DirectedGraph=Ln;re.UndirectedGraph=Cn;re.MultiGraph=kn;re.MultiDirectedGraph=Pn;re.MultiUndirectedGraph=Fn;re.InvalidArgumentsGraphError=W;re.NotFoundGraphError=B;re.UsageGraphError=X;function Mn(n,a){(a==null||a>n.length)&&(a=n.length);for(var e=0,t=Array(a);e<a;e++)t[e]=n[e];return t}function zn(n,a){if(n){if(typeof n=="string")return Mn(n,a);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Mn(n,a):void 0}}function sd(n){if(Array.isArray(n))return n}function ld(n,a){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var t,r,i,o,l=[],s=!0,d=!1;try{if(i=(e=e.call(n)).next,a===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(t=i.call(e)).done)&&(l.push(t.value),l.length!==a);s=!0);}catch(u){d=!0,r=u}finally{try{if(!s&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}function dd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(n,a){return sd(n)||ld(n,a)||zn(n,a)||dd()}function z(n,a){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=zn(n))||a&&n&&typeof n.length=="number"){e&&(n=e);var t=0,r=function(){};return{s:r,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(s){throw s},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){e=e.call(n)},n:function(){var s=e.next();return o=s.done,s},e:function(s){l=!0,i=s},f:function(){try{o||e.return==null||e.return()}finally{if(l)throw i}}}}function Se(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function Nn(n,a,e){return n[0]=a,n[4]=typeof e=="number"?e:a,n}function ci(n,a){var e=Math.sin(a),t=Math.cos(a);return n[0]=t,n[1]=e,n[3]=-e,n[4]=t,n}function hi(n,a,e){return n[6]=a,n[7]=e,n}function Xe(n,a){var e=n[0],t=n[1],r=n[2],i=n[3],o=n[4],l=n[5],s=n[6],d=n[7],u=n[8],c=a[0],p=a[1],f=a[2],h=a[3],b=a[4],m=a[5],v=a[6],g=a[7],y=a[8];return n[0]=c*e+p*i+f*s,n[1]=c*t+p*o+f*d,n[2]=c*r+p*l+f*u,n[3]=h*e+b*i+m*s,n[4]=h*t+b*o+m*d,n[5]=h*r+b*l+m*u,n[6]=v*e+g*i+y*s,n[7]=v*t+g*o+y*d,n[8]=v*r+g*l+y*u,n}function Fa(n,a){var e=Math.cos(a),t=Math.sin(a);return{x:e*n.x+t*n.y,y:-t*n.x+e*n.y}}function Lt(n,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,t=n[0],r=n[1],i=n[3],o=n[4],l=n[6],s=n[7],d=a.x,u=a.y;return{x:d*t+u*i+l*e,y:d*r+u*o+s*e}}function ud(n,a){var e=n.height/n.width,t=a.height/a.width;return e<1&&t>1||e>1&&t<1?1:Math.min(Math.max(t,1/t),Math.max(1/e,e))}function Ye(n,a,e,t,r){var i=n.angle,o=n.ratio,l=n.x,s=n.y,d=a.width,u=a.height,c=Se(),p=Math.min(d,u)-2*t,f=ud(a,e);return r?(Xe(c,hi(Se(),l,s)),Xe(c,Nn(Se(),o)),Xe(c,ci(Se(),i)),Xe(c,Nn(Se(),d/p/2/f,u/p/2/f))):(Xe(c,Nn(Se(),2*(p/d)*f,2*(p/u)*f)),Xe(c,ci(Se(),-i)),Xe(c,Nn(Se(),1/o)),Xe(c,hi(Se(),-l,-s))),c}function fi(n,a,e){var t=Lt(n,{x:Math.cos(a.angle),y:Math.sin(a.angle)},0),r=t.x,i=t.y;return 1/Math.sqrt(Math.pow(r,2)+Math.pow(i,2))/e.width}function Ia(n,a,e,t,r){var i=Math.floor(a/r*t),o=Math.floor(n.drawingBufferHeight/r-e/r*t);return[i,o]}var tn={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},gi=new Int8Array(4),Gn=new Int32Array(gi.buffer,0,1),pi=new Float32Array(gi.buffer,0,1),cd=/^\s*rgba?\s*\(/,hd=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function On(n){var a=0,e=0,t=0,r=1,i=n.toLowerCase();if(i==="transparent")return{r:0,g:0,b:0,a:0};if(i in tn)return On(tn[i]);if(n[0]==="#")n.length===4?(a=parseInt(n.charAt(1)+n.charAt(1),16),e=parseInt(n.charAt(2)+n.charAt(2),16),t=parseInt(n.charAt(3)+n.charAt(3),16)):(a=parseInt(n.charAt(1)+n.charAt(2),16),e=parseInt(n.charAt(3)+n.charAt(4),16),t=parseInt(n.charAt(5)+n.charAt(6),16)),n.length===9&&(r=parseInt(n.charAt(7)+n.charAt(8),16)/255);else if(cd.test(n)){var o=n.match(hd);o&&(a=+o[1],e=+o[2],t=+o[3],o[4]&&(r=+o[4]))}return{r:a,g:e,b:t,a:r}}function vi(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=On(n),t=e.r,r=e.g,i=e.b,o=e.a;return a?[t/255*o,r/255*o,i/255*o,o]:[t/255,r/255,i/255,o]}var Dt={};for(en in tn)Dt[en]=Ae(tn[en]),Dt[tn[en]]=Dt[en];var en;function fd(n,a,e,t,r){return Gn[0]=t<<24|e<<16|a<<8|n,r&&(Gn[0]=Gn[0]&4278190079),pi[0]}function Ae(n){if(n=n.toLowerCase(),typeof Dt[n]<"u")return Dt[n];var a=On(n),e=a.r,t=a.g,r=a.b,i=a.a;i=i*255|0;var o=fd(e,t,r,i,!0);return Dt[n]=o,o}function Ke(n,a){pi[0]=Ae(n);var e=Gn[0];a&&(e=e|16777216);var t=e&255,r=e>>8&255,i=e>>16&255,o=e>>24&255;return[t,r,i,o]}function Ct(n){var a=n>>>8&255,e=n>>>16&255,t=n>>>24&255,r=n&255;return(r<<24|t<<16|e<<8|a)>>>0}function Na(n,a,e,t){return(e<<24|a<<16|n<<8|t)>>>0}function mi(n,a,e,t,r,i){var o=Ia(n,e,t,r,i),l=ne(o,2),s=l[0],d=l[1],u=new Uint8Array(4);n.bindFramebuffer(n.FRAMEBUFFER,a),n.readPixels(s,d,1,1,n.RGBA,n.UNSIGNED_BYTE,u);var c=ne(u,4),p=c[0],f=c[1],h=c[2],b=c[3];return[p,f,h,b]}function bi(n){var a=On(n),e=a.r,t=a.g,r=a.b,i=a.a,o=(e/255).toFixed(6),l=(t/255).toFixed(6),s=(r/255).toFixed(6),d=i.toFixed(6);return"vec4(".concat(o,", ").concat(l,", ").concat(s,", ").concat(d,")")}function gd(n,a){if(typeof n!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,a||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function _i(n){var a=gd(n,"string");return typeof a=="symbol"?a:a+""}function E(n,a,e){return(a=_i(a))in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function yi(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,t)}return e}function O(n){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?yi(Object(e),!0).forEach(function(t){E(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):yi(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function Z(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function xi(n,a){for(var e=0;e<a.length;e++){var t=a[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,_i(t.key),t)}}function Q(n,a,e){return a&&xi(n.prototype,a),e&&xi(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function dt(n){return dt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},dt(n)}function Ti(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ti=function(){return!!n})()}function pd(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function vd(n,a){if(a&&(typeof a=="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pd(n)}function se(n,a,e){return a=dt(a),vd(n,Ti()?Reflect.construct(a,e||[],dt(n).constructor):a.apply(n,e))}function Ga(n,a){return Ga=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ga(n,a)}function le(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&Ga(n,a)}function md(n){if(Array.isArray(n))return Mn(n)}function bd(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(n){return md(n)||bd(n)||zn(n)||yd()}function J(n){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},J(n)}function Pe(n){return J(n)==="object"&&n!==null&&"attribute"in n}function nn(){var n=`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`;return{name:"circle",glsl:n,uniforms:[]}}function an(n){var a,e=WebGL2RenderingContext,t=e.UNSIGNED_BYTE,r=(a=n?.color)!==null&&a!==void 0?a:{attribute:"color"};if(!Pe(r)){var i=r,o=`
vec4 layer_fill() {
  return `.concat(bi(i),`;
}
`);return{name:"fill",uniforms:[],attributes:[],glsl:o}}var l=r.attribute,s=`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`;return{name:"fill",uniforms:[],attributes:[{name:"fillColor",size:4,type:t,normalized:!0,source:l}],glsl:s}}function Ma(n,a){if(typeof n=="string"){var e=vi(n).map(function(d){return d.toFixed(6)}),t=ne(e,4),r=t[0],i=t[1],o=t[2],l=t[3];return{glsl:"vec4(".concat(r,", ").concat(i,", ").concat(o,", ").concat(l,")"),attributes:[],needsNodeColors:!1}}if("node"in n&&n.node)return{glsl:n.node==="source"?"v_sourceColor":"v_targetColor",attributes:[],needsNodeColors:!0};var s=n;return{glsl:"v_".concat(a),attributes:[{name:"a_".concat(a),size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:s.attribute,defaultValue:s.default}],needsNodeColors:!1}}function Ge(n){var a=n?.color;if(a===void 0){var e=`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`;return{name:"plain",glsl:e,uniforms:[],attributes:[]}}var t=Ma(a,"plainColor"),r=`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return `.concat(t.glsl,`;
}
`);return{name:"plain",glsl:r,uniforms:[],attributes:t.attributes,needsNodeColors:t.needsNodeColors}}function rn(){var n=`
// Position at parameter t \u2208 [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`;return{name:"straight",segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:n,uniforms:[],attributes:[]}}function za(n){var a=n??{},e=a.segments,t=e===void 0?32:e,r=`
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
`;return{name:"loop",segments:t,glsl:r,needsNodeSize:!0,uniforms:[],attributes:[{name:"loopRadius",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopAngle",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopSpread",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopFixedOrientation",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:"number",default:4},loopAngle:{type:"number",default:Math.PI/4},loopSpread:{type:"number",default:80*Math.PI/180},loopFixedOrientation:{type:"number",default:0}},spread:{variable:"loopRadius",compute:function(o){return o+4}}}}var Di=lt(Et());function Ei(n){return J(n)==="object"&&"glsl"in n&&!("attributes"in n)}function Si(n){return J(n)==="object"&&"glsl"in n&&!("attributes"in n)}var on={shapes:[nn()],variables:{},layers:[an()],label:{},backdrop:{},labelAttachments:{}},kt={paths:[rn(),za()],extremities:[],variables:{},layers:[Ge()],defaultHead:"none",defaultTail:"none",label:{}},Bn=["nodes","topNodes"],Wn=["edges","topEdges"],Un=[].concat(Wn,Bn),Ai={nodes:on,edges:kt,depthLayers:j(Un)};var xd=function(a){return a},_d=function(a){return a*a},Td=function(a){return a*(2-a)},Ed=function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)},Sd=function(a){return a*a*a},Ad=function(a){return--a*a*a+1},Rd=function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)},wd=function(a){return a===0?0:Math.pow(2,10*(a-1))},Dd=function(a){return a===1?1:1-Math.pow(2,-10*a)},Ld=function(a){return a===0?0:a===1?1:a<.5?Math.pow(2,10*(2*a-1))/2:(2-Math.pow(2,-10*(2*a-1)))/2},Oa={linear:xd,quadraticIn:_d,quadraticOut:Td,quadraticInOut:Ed,cubicIn:Sd,cubicOut:Ad,cubicInOut:Rd,exponentialIn:wd,exponentialOut:Dd,exponentialInOut:Ld};function sn(n){return n?typeof n=="function"?n:Oa[n]:Oa.linear}function Wa(n){return J(n)==="object"&&n!==null&&"attribute"in n}function Li(n){return typeof n=="function"}function Ci(n){return J(n)==="object"&&n!==null&&"when"in n&&typeof n.when=="function"&&"then"in n}function ki(n){return J(n)==="object"&&n!==null&&"whenState"in n&&"then"in n}function Pi(n){return J(n)==="object"&&n!==null&&"whenData"in n&&"then"in n}var Cd={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},kd={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},Pd={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function Fi(n){return O(O({},Cd),n)}function Ii(n){return O(O({},kd),n)}function Ua(n){return O(O({},Pd),n)}var Fd={x:{attribute:"x"},y:{attribute:"y"},size:{whenState:"isHovered",then:{attribute:"size",defaultValue:12},else:{attribute:"size",defaultValue:10}},color:{attribute:"color",defaultValue:"#666"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"},labelVisibility:{whenState:"isHovered",then:"visible",else:"auto"},backdropVisibility:{whenState:"isHovered",then:"visible",else:"hidden"},backdropColor:"#ffffff",backdropShadowColor:"rgba(0, 0, 0, 0.5)",backdropShadowBlur:12,backdropPadding:6},Id={size:{attribute:"size",defaultValue:1},color:{attribute:"color",defaultValue:"#ccc"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"}};var Ze={nodes:O(O({},Fd),{},{depth:{whenState:"isHovered",then:"topNodes",else:"nodes"}}),edges:O(O({},Id),{},{depth:{whenState:["isHighlighted","isHovered"],then:"topEdges",else:"edges"}})};function Nd(n){return"min"in n||"max"in n||"minValue"in n||"maxValue"in n||"easing"in n}function Gd(n){return"dict"in n}function $n(n,a){return typeof n=="string"?a[n]===!0:Array.isArray(n)?n.every(function(e){return a[e]===!0}):J(n)==="object"&&n!==null?Object.entries(n).every(function(e){var t=ne(e,2),r=t[0],i=t[1];return a[r]===i}):!1}function Md(n,a){var e=a[n.attribute];return e===void 0?n.defaultValue:e}function zd(n,a,e){var t,r,i,o,l=a[n.attribute];if(l===void 0)return n.defaultValue;var s=Number(l);if(isNaN(s))return n.defaultValue;if(n.min===void 0&&n.max===void 0)return s;var d=(t=n.minValue)!==null&&t!==void 0?t:s,u=(r=n.maxValue)!==null&&r!==void 0?r:s;if(u===d){var c;return(c=n.min)!==null&&c!==void 0?c:s}var p=(s-d)/(u-d);p=Math.max(0,Math.min(1,p));var f=sn(n.easing);p=f(p);var h=(i=n.min)!==null&&i!==void 0?i:0,b=(o=n.max)!==null&&o!==void 0?o:1;return h+p*(b-h)}function Od(n,a){var e=a[n.attribute];if(e===void 0)return n.defaultValue;var t=String(e);return t in n.dict?n.dict[t]:n.defaultValue}function Bd(n,a,e){return Gd(n)?Od(n,a):Nd(n)?zd(n,a):Md(n,a)}function Ni(n,a){return typeof n=="string"?!!a[n]:Array.isArray(n)?n.every(function(e){return!!a[e]}):J(n)==="object"&&n!==null?Object.entries(n).every(function(e){var t=ne(e,2),r=t[0],i=t[1];return a[r]===i}):!1}function Hn(n,a,e,t,r,i){if(n==null)return i;if(J(n)!=="object"&&typeof n!="function")return n;if(Ci(n)){var o=n.when(a,e,t,r)?n.then:n.else;return o===void 0?i:Hn(o,a,e,t,r,i)}if(ki(n)){var l=$n(n.whenState,e)?n.then:n.else;return l===void 0?i:Hn(l,a,e,t,r,i)}if(Pi(n)){var s=Ni(n.whenData,a)?n.then:n.else;return s===void 0?i:Hn(s,a,e,t,r,i)}if(Li(n)){var d=n(a,e,t,r);return d??i}if(Wa(n)){var u=Bd(n,a);return u??i}return n}function Fe(n){if(n==null)return"static";if(Ci(n))return"graph-state";if(ki(n)){var a=Fe(n.then),e=n.else!==void 0?Fe(n.else):"static";return Re("item-state",Re(a,e))}if(Pi(n)){var t=Fe(n.then),r=n.else!==void 0?Fe(n.else):"static";return Re(t,r)}return Li(n)?"graph-state":(Wa(n),"static")}function Re(n,a){return n==="graph-state"||a==="graph-state"?"graph-state":n==="item-state"||a==="item-state"?"item-state":"static"}function Ha(n){if(!n)return{dependency:"static",xAttribute:null,yAttribute:null};var a=Array.isArray(n)?n:[n],e="static",t=null,r=null,i=z(a),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;if("matchData"in l&&"cases"in l)for(var s=l.cases,d=0,u=Object.values(s);d<u.length;d++)for(var c=u[d],p=0,f=Object.values(c);p<f.length;p++){var h=f[p];e=Re(e,Fe(h))}else if("matchState"in l&&"cases"in l){e=Re(e,"item-state");for(var b=l.cases,m=0,v=Object.values(b);m<v.length;m++)for(var g=v[m],y=0,x=Object.values(g);y<x.length;y++){var _=x[y];e=Re(e,Fe(_))}}else if("when"in l&&"then"in l)e="graph-state";else if("whenState"in l){e=Re(e,"item-state");var T=l.then;if(T&&J(T)==="object")for(var R=0,S=Object.values(T);R<S.length;R++){var A=S[R];e=Re(e,Fe(A))}var C=l.else;if(C&&J(C)==="object")for(var P=0,w=Object.values(C);P<w.length;P++){var I=w[P];e=Re(e,Fe(I))}}else if("whenData"in l){var L=l.then;if(L&&J(L)==="object")for(var k=0,N=Object.values(L);k<N.length;k++){var M=N[k];e=Re(e,Fe(M))}var F=l.else;if(F&&J(F)==="object")for(var D=0,G=Object.values(F);D<G.length;D++){var H=G[D];e=Re(e,Fe(H))}}else for(var U=0,$=Object.entries(l);U<$.length;U++){var K=ne($[U],2),te=K[0],ue=K[1];if(!Va.has(te)&&(e=Re(e,Fe(ue)),(te==="x"||te==="y")&&Wa(ue))){var _e=ue.attribute;te==="x"&&!t&&(t=_e),te==="y"&&!r&&(r=_e)}}}}catch(Ce){i.e(Ce)}finally{i.f()}return{dependency:e,xAttribute:t,yAttribute:r}}var He={size:10,color:"#666",opacity:1,shape:"circle",rotationAlignment:"viewport",labelRotationAlignment:"viewport",visibility:"visible",depth:"nodes",zIndex:0,label:"",labelColor:"#000",labelSize:12,labelFont:"sans-serif",labelVisibility:"auto",labelPosition:"right",labelAngle:0,labelDepth:"nodes",backdropVisibility:"hidden",backdropColor:"transparent",backdropShadowColor:"transparent",backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:"transparent",backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:"both",labelAttachment:null,labelAttachmentPlacement:"below"},$a={size:1,color:"#ccc",opacity:1,path:"straight",selfLoopPath:"loop",parallelSpread:.25,tail:"none",head:"none",visibility:"visible",depth:"edges",zIndex:0,label:"",labelColor:"#666",labelVisibility:"auto",labelDepth:"edges"},Va=new Set(["when","whenState","whenData","then","else"]),Ri=Object.keys(He),Wd=Object.values(He),wi=Object.keys($a),Ud=Object.values($a);function Pt(n,a,e,t,r,i,o){for(var l in a){var s;if(!Va.has(l)){var d=(s=n[l])!==null&&s!==void 0?s:o[l];n[l]=Hn(a[l],e,t,r,i,d)}}"depth"in a&&!("labelDepth"in a)&&(n.labelDepth=n.depth)}function Gi(n,a,e,t,r,i,o){var l=z(a),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;if("matchData"in d&&"cases"in d){var u,c=String((u=e[d.matchData])!==null&&u!==void 0?u:""),p=d.cases;c in p&&Pt(n,p[c],e,t,r,i,o)}else if("matchState"in d&&"cases"in d){var f,h=String((f=t[d.matchState])!==null&&f!==void 0?f:""),b=d.cases;h in b&&Pt(n,b[h],e,t,r,i,o)}else if("when"in d&&"then"in d){var m=d.when;if(!m(e,t,r,i))continue;Pt(n,d.then,e,t,r,i,o)}else if("whenState"in d&&"then"in d){if(!$n(d.whenState,t))continue;Pt(n,d.then,e,t,r,i,o)}else if("whenData"in d&&"then"in d){if(!Ni(d.whenData,e))continue;Pt(n,d.then,e,t,r,i,o)}else Pt(n,d,e,t,r,i,o)}}catch(v){l.e(v)}finally{l.f()}}function ja(n,a,e,t,r,i){for(var o=i||{},l=o,s=0,d=Ri.length;s<d;s++)l[Ri[s]]=Wd[s];if(l.x=void 0,l.y=void 0,l.labelBackgroundColor=void 0,l.labelBackgroundPadding=void 0,l.labelCursor=void 0,!n){var u,c,p,f,h;return l.x=(u=a.x)!==null&&u!==void 0?u:0,l.y=(c=a.y)!==null&&c!==void 0?c:0,o.size=(p=a.size)!==null&&p!==void 0?p:10,o.color=(f=a.color)!==null&&f!==void 0?f:"#666",o.label=(h=a.label)!==null&&h!==void 0?h:"",o}var b=Array.isArray(n)?n:[n];return Gi(l,b,a,e,t,r,He),o}function qa(n,a,e,t,r,i){for(var o=i||{},l=o,s=0,d=wi.length;s<d;s++)l[wi[s]]=Ud[s];if(!n){var u,c,p;return o.size=(u=a.size)!==null&&u!==void 0?u:1,o.color=(c=a.color)!==null&&c!==void 0?c:"#ccc",o.label=(p=a.label)!==null&&p!==void 0?p:"",o}var f=Array.isArray(n)?n:[n];return Gi(l,f,a,e,t,r,$a),typeof l.labelPosition=="number"&&(l.labelPosition=void 0),o}function Hd(n,a,e){var t,r;if(n==null)return e;if(typeof n=="function")return(t=n(a))!==null&&t!==void 0?t:e;if(J(n)==="object"&&"when"in n){var i,o=n,l=o.when(a),s=l?o.then:o.else;return s===void 0?e:typeof s=="function"?(i=s(a))!==null&&i!==void 0?i:e:s??e}if(J(n)==="object"&&"whenState"in n){var d,u=n,c=$n(u.whenState,a),p=c?u.then:u.else;return p===void 0?e:typeof p=="function"?(d=p(a))!==null&&d!==void 0?d:e:p??e}return(r=n)!==null&&r!==void 0?r:e}function Xa(n,a){var e={};if(!n)return e;var t=Array.isArray(n)?n:[n],r=z(t),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if("when"in o&&"then"in o){var l=o.when(a),s=l?o.then:o.else;s&&J(s)==="object"&&Ba(e,s,a)}else if("whenState"in o&&"then"in o){var d=$n(o.whenState,a),u=d?o.then:o.else;u&&J(u)==="object"&&Ba(e,u,a)}else Ba(e,o,a)}}catch(c){r.e(c)}finally{r.f()}return e}function Ba(n,a,e){for(var t=0,r=Object.entries(a);t<r.length;t++){var i=ne(r[t],2),o=i[0],l=i[1];Va.has(o)||(n[o]=Hd(l,e))}}var Vn=(function(n){function a(){var e;return Z(this,a),e=se(this,a),e.rawEmitter=e,e}return le(a,n),Q(a)})(Di.EventEmitter);var Mi=Ai;function Ya(n,a){var e=a.size;if(e!==0){var t=n.length;n.length+=e;var r=0;a.forEach(function(i){n[t+r]=i,r++})}}function zi(n){n=n||{};for(var a=0,e=arguments.length<=1?0:arguments.length-1;a<e;a++){var t=a+1<1||arguments.length<=a+1?void 0:arguments[a+1];t&&Object.assign(n,t)}return n}function Ft(n,a){for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)&&a[e]!==n[e])return!0;return!1}function Oi(n,a){var e=n,t=a;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&e[r]!==t[r])return!1;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&t[i]!==e[i])return!1;return!0}function ut(n,a,e){e?n.add(a):n.delete(a)}var Wi=lt(Ka());var Ui={easing:"quadraticInOut",duration:150};function Qe(n){return n.labelVisibility==="visible"&&n.visibility!=="hidden"}function Za(n){return n.backdropVisibility==="visible"&&n.visibility!=="hidden"}function jn(n){return[n.rotationAlignment==="graph"?1:0,n.labelRotationAlignment==="graph"?1:0]}function Qa(n,a,e){var t=n[a];if(t)for(var r=0;r<t.length;r++){var i=t[r];if(!(e<i.offset||e>=i.offset+i.count)){if(i.count===1)t.splice(r,1);else if(e===i.offset)i.offset++,i.count--;else if(e===i.offset+i.count-1)i.count--;else{var o=e+1,l=i.offset+i.count-o;i.count=e-i.offset,t.splice(r+1,0,{offset:o,count:l})}return}}}function Ja(n,a,e){if(!n[a]){n[a]=[{offset:e,count:1}];return}for(var t=n[a],r=t.length,i=0;i<t.length;i++)if(e<t[i].offset){r=i;break}var o=r>0?t[r-1]:null,l=r<t.length?t[r]:null,s=o&&o.offset+o.count===e,d=l&&e+1===l.offset;s&&d?(o.count+=1+l.count,t.splice(r,1)):s?o.count++:d?(l.offset--,l.count++):t.splice(r,0,{offset:e,count:1})}function Hi(n){if(!(0,Wi.default)(n))throw new Error("Sigma: invalid graph instance.")}function qn(n){var a=ne(n.x,2),e=a[0],t=a[1],r=ne(n.y,2),i=r[0],o=r[1],l=Math.max(t-e,o-i),s=(t+e)/2,d=(o+i)/2;(l===0||Math.abs(l)===1/0||isNaN(l))&&(l=1),isNaN(s)&&(s=0),isNaN(d)&&(d=0);var u=function(p){return{x:.5+(p.x-s)/l,y:.5+(p.y-d)/l}};return u.applyTo=function(c){c.x=.5+(c.x-s)/l,c.y=.5+(c.y-d)/l},u.inverse=function(c){return{x:s+l*(c.x-.5),y:d+l*(c.y-.5)}},u.ratio=l,u}var Xn={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:"nodeLabels",enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"positions",autoRescale:!0,autoRescaleContent:"positions",enableNodeDrag:!1,getDraggedNodes:function(a){return[a]},dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:"graph",sharedGestureWheelMessage:"Use Ctrl + scroll to zoom the graph",sharedGestureAppleWheelMessage:"Use \u2318 + scroll to zoom the graph",sharedGestureTouchMessage:"Use two fingers to move the graph",allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function Yn(n){if(typeof n.labelDensity!="number"||n.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var a=n.minCameraRatio,e=n.maxCameraRatio;if(typeof a=="number"&&typeof e=="number"&&e<a)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function $i(n){return zi({},Xn,n)}var $d=new Set(["italic","oblique"]),Vd=new Set(["bold","bolder","lighter"]);function Kn(n){for(var a="normal",e="normal",t=n.trim(),r=t.split(/\s+/),i=0,o=0;o<r.length;o++){var l=r[o].toLowerCase();if($d.has(l))e=l,i=o+1;else if(Vd.has(l)||/^\d{3}$/.test(l))a=l,i=o+1;else if(l==="normal")i=o+1;else break}var s=r.slice(i).join(" ");return{family:s||t,weight:a,style:e}}function It(n,a,e){var t=document.createElement(n);if(a)for(var r in a)t.style[r]=a[r];if(e)for(var i in e)t.setAttribute(i,e[i]);return t}function ln(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}var Zi=lt(Et());function jd(n){var a=n.type===WebGL2RenderingContext.FLOAT&&!n.normalized,e=n.type===WebGL2RenderingContext.UNSIGNED_BYTE&&n.size===4&&n.normalized;if(!a&&!e)throw new Error('Attribute "'.concat(n.name,'" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.'));return n.normalized?1:n.size}function na(n){var a=0;return n.forEach(function(e){return a+=jd(e)}),a}function Qi(n,a,e){var t=n==="VERTEX"?a.VERTEX_SHADER:a.FRAGMENT_SHADER,r=a.createShader(t);if(r===null)throw new Error("loadShader: error while creating the shader");a.shaderSource(r,e),a.compileShader(r);var i=a.getShaderParameter(r,a.COMPILE_STATUS);if(!i){var o=a.getShaderInfoLog(r);throw a.deleteShader(r),new Error(`loadShader: error while compiling the shader:
`.concat(o,`
`).concat(e))}return r}function ra(n,a){return Qi("VERTEX",n,a)}function ia(n,a){return Qi("FRAGMENT",n,a)}function oa(n,a){var e=n.createProgram();if(e===null)throw new Error("loadProgram: error while creating the program.");var t,r;for(t=0,r=a.length;t<r;t++)n.attachShader(e,a[t]);n.linkProgram(e);var i=n.getProgramParameter(e,n.LINK_STATUS);if(!i){var o=n.getProgramInfoLog(e);throw n.deleteProgram(e),new Error("loadProgram: error while linking the program: ".concat(o))}return e}function er(n){var a=n.gl,e=n.buffer,t=n.program,r=n.vertexShader,i=n.fragmentShader;a.deleteShader(r),a.deleteShader(i),a.deleteProgram(t),a.deleteBuffer(e)}function de(n){return n%1===0?n.toFixed(1):n.toString()}var aa=new Map,Ji=new Map,qd=0;function rr(n,a){var e,t=(e=n.variables)===null||e===void 0||(e=e[a.source||a.name.replace(/^a_/,"")])===null||e===void 0?void 0:e.default,r=typeof t=="number"?t:typeof a.defaultValue=="number"?a.defaultValue:0;return de(r)}function fn(n,a,e){var t,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(o){return"v_".concat(o.name.replace(/^a_/,""))},i=[a,e].concat(j(n.uniforms.filter(function(o){return o.type==="float"}).map(function(o){var l;return de((l=o.value)!==null&&l!==void 0?l:0)})),j(((t=n.attributes)!==null&&t!==void 0?t:[]).map(r)));return"sdf_".concat(n.name,"(").concat(i.join(", "),")")}function Xd(n){var a,e=n.name,t=n.uniforms.filter(function(o){return o.type==="float"&&o.value!==void 0&&o.value!==0}).map(function(o){return"".concat(o.name.replace("u_",""),"=").concat(o.value)}).sort(),r=((a=n.attributes)!==null&&a!==void 0?a:[]).map(function(o){var l;return"".concat(o.name,"@").concat((l=o.source)!==null&&l!==void 0?l:"","=").concat(rr(n,o))}),i=[].concat(j(t),j(r));return i.length>0&&(e+="#"+i.join("#")),e}function eo(n){var a=Xd(n);if(!aa.has(a)){var e={},t=z(n.uniforms),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;i.type==="float"&&i.value!==void 0&&(e[i.name]=i.value)}}catch(o){t.e(o)}finally{t.f()}aa.set(a,{shape:n,uniformValues:e,slug:a}),Ji.set(a,qd++)}return a}function Gt(n){var a;return(a=Ji.get(n))!==null&&a!==void 0?a:-1}function to(n){var a=[],e=new Set,t=new Set,r=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/,i=z(n),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;if(!t.has(l.name)){t.add(l.name);var s=l.glsl;r.test(s)&&(e.has("rotate2D")?s=s.replace(r,""):e.add("rotate2D")),a.push(s)}}}catch(d){i.e(d)}finally{i.f()}return a.join(`
`)}function no(){return to(Array.from(aa.values()).map(function(n){return n.shape}))}function ao(n){var a=Array.from(aa.entries());if(a.length===0)return`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`;var e=a.map(function(t,r){var i=ne(t,2),o=i[0],l=i[1].shape,s=fn(l,"uv","size",function(d){var u=d.name.replace(/^a_/,"");return n!=null&&n.has(u)?"g_".concat(u):rr(l,d)});return"    case ".concat(r,": return ").concat(s,"; // ").concat(o)}).join(`
`);return`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(e,`
    default: return length(uv) - size;
  }
}
`)}function sa(n){return to(n)}function Mt(n){return j(new Map(n.flatMap(function(a){return a.uniforms}).map(function(a){return[a.name,a]})).values())}function ro(n,a){if(n.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;var e=function(c){return fn(c,"uv","size")},t=function(c){var p,f;return(p=c.inradiusFactorGLSL)!==null&&p!==void 0?p:de((f=c.inradiusFactor)!==null&&f!==void 0?f:1)};if(n.length===1){var r=n[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = `.concat(e(r),`;
  context.inradiusFactor = `).concat(t(r),`;
}
`)}var i=n.map(function(u,c){return"    case ".concat(c,": // ").concat(u.name,`
      context.sdf = `).concat(e(u),`;
      context.inradiusFactor = `).concat(t(u),`;
      break;`)}).join(`
`),o=n[0],l="",s="shapeId";if(a&&a.length>1){var d=a.map(function(u,c){return"    case ".concat(u,": return ").concat(c,"; // ").concat(n[c].name)}).join(`
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
`)}var ct={right:0,left:1,above:2,below:3,over:4},ht=5,la=3,ir=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,zt=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,or=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,io=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,oo=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,so=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,lo=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,sr=`
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
`),nt=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(da,` + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`),uo=`
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
`;function co(n,a){var e=function(o){return fn(o,"uv","size")};if(n.length===1)return{code:Vi(e(n[0])),multiShape:!1};var t=n.map(function(i,o){return"    case ".concat(a?a[o]:o,": return ").concat(e(i),";")}).join(`
`),r=`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(t,`
    default: return `).concat(e(n[0]),`;
  }
}
int g_shapeId;
`).concat(Vi("queryShapeSDF(g_shapeId, uv, size)"),`
`);return{code:r,multiShape:!0}}function Vi(n){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (`.concat(n,` < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`)}function Yd(n,a){for(;!{}.hasOwnProperty.call(n,a)&&(n=dt(n))!==null;);return n}function tr(){return tr=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(n,a,e){var t=Yd(n,a);if(t){var r=Object.getOwnPropertyDescriptor(t,a);return r.get?r.get.call(arguments.length<3?n:e):r.value}},tr.apply(null,arguments)}function he(n,a,e,t){var r=tr(dt(1&t?n.prototype:n),a,e);return 2&t&&typeof r=="function"?function(i){return r.apply(e,i)}:r}var Kd=1024,Zd=1.5,Qd=4096,ho=-1,gn=(function(){function n(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Kd;Z(this,n),E(this,"texture",null),E(this,"dirty",!1),E(this,"dirtyRangeStart",1/0),E(this,"dirtyRangeEnd",-1),E(this,"indexMap",new Map),E(this,"freeIndices",[]),E(this,"nextIndex",0),this.gl=a,this.TEXELS_PER_ITEM=e,this.capacity=this.roundUpToPowerOfTwo(t);var r=this.computeTextureDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}return Q(n,[{key:"computeTextureDimensions",value:function(e){var t=e*this.TEXELS_PER_ITEM,r=Math.min(t,Qd),i=Math.ceil(t/r);return{width:r,height:i}}},{key:"roundUpToPowerOfTwo",value:function(e){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,e))))}},{key:"createTexture",value:function(){var e=this.gl;this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textureWidth,this.textureHeight,0,e.RGBA,e.FLOAT,this.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null)}},{key:"resize",value:function(e){if(!(e<=this.capacity)){var t=this.roundUpToPowerOfTwo(Math.ceil(e*Zd)),r=this.gl,i=this.computeTextureDimensions(t),o=new Float32Array(i.width*i.height*4);o.set(this.data),this.texture&&r.deleteTexture(this.texture),this.data=o,this.capacity=t,this.textureWidth=i.width,this.textureHeight=i.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}}},{key:"allocate",value:function(e){var t=this.indexMap.get(e);if(t!==void 0)return t;var r;return this.freeIndices.length>0?r=this.freeIndices.pop():(r=this.nextIndex++,r>=this.capacity&&this.resize(r+1)),this.indexMap.set(e,r),r}},{key:"free",value:function(e){var t=this.indexMap.get(e);if(t!==void 0){this.indexMap.delete(e),this.freeIndices.push(t);for(var r=t*this.TEXELS_PER_ITEM*4,i=0;i<this.TEXELS_PER_ITEM*4;i++)this.data[r+i]=0;this.markDirty(t)}}},{key:"getIndex",value:function(e){var t;return(t=this.indexMap.get(e))!==null&&t!==void 0?t:-1}},{key:"has",value:function(e){return this.indexMap.has(e)}},{key:"markDirty",value:function(e){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,e),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,e+1)}},{key:"upload",value:function(){if(!(!this.dirty||!this.texture)){var e=this.gl,t=this.textureWidth;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture);var r=this.dirtyRangeStart*this.TEXELS_PER_ITEM,i=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(r<i)for(var o=Math.floor(r/t),l=Math.floor((i-1)/t),s=o;s<=l;s++){var d=s*t,u=Math.min(d+t,this.capacity*this.TEXELS_PER_ITEM),c=Math.max(r,d),p=Math.min(i,u);if(c<p){var f=c-d,h=p-c,b=this.data.subarray(c*4,p*4);e.texSubImage2D(e.TEXTURE_2D,0,f,s,h,1,e.RGBA,e.FLOAT,b)}}e.bindTexture(e.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}}},{key:"bind",value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getCapacity",value:function(){return this.capacity}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"getTexelsPerItem",value:function(){return this.TEXELS_PER_ITEM}},{key:"getCount",value:function(){return this.indexMap.size}},{key:"getHighWaterMark",value:function(){return this.nextIndex}},{key:"isDirty",value:function(){return this.dirty}},{key:"clear",value:function(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}},{key:"restore",value:function(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}},{key:"kill",value:function(){this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.indexMap.clear(),this.freeIndices=[]}}])})();function we(n){var a={},e={},t=0,r=z(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,l=z(o.attributes),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=d.name.replace(/^a_/,"");u in a||(a[u]=t,e[u]=d,t+=d.size)}}catch(c){l.e(c)}finally{l.f()}}}catch(c){r.e(c)}finally{r.f()}return{floatsPerItem:t,texelsPerItem:Math.max(1,Math.ceil(t/4)),offsets:a,specs:e}}var ua=(function(n){function a(e,t,r){var i;return Z(this,a),i=se(this,a,[e,t.texelsPerItem,r]),i.floatsPerItem=t.floatsPerItem,i}return le(a,n),Q(a,[{key:"updateAllAttributes",value:function(t,r){var i=this.indexMap.get(t);i===void 0&&(i=this.allocate(t));for(var o=i*this.TEXELS_PER_ITEM*4,l=Math.min(r.length,this.floatsPerItem),s=0;s<l;s++)this.data[o+s]=r[s];this.markDirty(i)}},{key:"updateAllAttributesAtRow",value:function(t,r){t>=this.capacity&&this.resize(t+1);for(var i=t*this.TEXELS_PER_ITEM*4,o=Math.min(r.length,this.floatsPerItem),l=0;l<o;l++)this.data[i+l]=r[l];this.markDirty(t)}}])})(gn);function ca(n,a,e){for(var t=[],r=new Set,i=0;i<n.length;i++){var o=n[i],l=z(o.attributes),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=d.name.replace(/^a_/,"");if(!r.has(u)){r.add(u);var c=a.offsets[u];if(c!==void 0){var p=e?.get(i);t.push({sourceKey:d.source||u,packedOffset:c,size:d.size,isColor:d.size===4&&!!d.normalized,defaultNum:typeof d.defaultValue=="number"?d.defaultValue:d.defaultValue===!0?1:0,defaultColor:typeof d.defaultValue=="string"?d.defaultValue:"",sourceIndex:i,hasLifecycleHook:!!(p!=null&&p.getAttributeData)})}}}}catch(f){l.e(f)}finally{l.f()}}return t}function ha(n,a,e,t,r,i){e.fill(0);for(var o=0,l=n.length;o<l;o++){var s=n[o],d=s.packedOffset,u=void 0;if(s.hasLifecycleHook){var c=r.get(s.sourceIndex-i);u=c.getAttributeData(a,s.sourceKey),u===null&&(u=a[s.sourceKey])}else u=a[s.sourceKey];if(s.isColor){var p=typeof u=="string"?u:s.defaultColor||t,f=Ke(p),h=ne(f,4),b=h[0],m=h[1],v=h[2],g=h[3];e[d]=b/255,e[d+1]=m/255,e[d+2]=v/255,e[d+3]=g/255}else if(s.size===1)e[d]=typeof u=="number"?u:typeof u=="boolean"?u?1:0:s.defaultNum;else{var y=Array.isArray(u)?u:null;if(y)for(var x=0;x<s.size;x++){var _;e[d+x]=(_=y[x])!==null&&_!==void 0?_:0}}}}var Zn=["r","g","b","a"];function Nt(n,a){var e=n.offsets,t=n.specs,r=n.texelsPerItem,i=n.floatsPerItem,o=Object.keys(e);if(o.length===0||i===0)return{fetchCode:"",varyingAssignments:""};var l=a.varPrefix,s=a.baseTexelExpr,d=a.textureWidthUniform,u=a.textureSamplerUniform,c=a.outputPrefix,p=c===void 0?"v_":c,f=[];f.push("  int ".concat(l,"BaseTexel = ").concat(s,";")),f.push("");for(var h=0;h<r;h++)f.push("  ivec2 ".concat(l,"Coord").concat(h," = ivec2((").concat(l,"BaseTexel + ").concat(h,") % ").concat(d,", (").concat(l,"BaseTexel + ").concat(h,") / ").concat(d,");")),f.push("  vec4 ".concat(l,"Texel").concat(h," = texelFetch(").concat(u,", ").concat(l,"Coord").concat(h,", 0);"));f.push("");for(var b=[],m=function(){var x=g[v],_=t[x],T=e[x],R=Math.floor(T/4),S=T%4,A="".concat(l,"Texel").concat(R),C="".concat(l,"Texel").concat(R+1),P="".concat(l,"Fetched_").concat(x);if(_.size===1)f.push("  float ".concat(P," = ").concat(A,".").concat(Zn[S],";"));else if(_.size===4&&S===0)f.push("  vec4 ".concat(P," = ").concat(A,";"));else{var w=S+_.size;if(w<=4){var I="vec".concat(_.size),L=Zn.slice(S,w).join("");f.push("  ".concat(I," ").concat(P," = ").concat(A,".").concat(L,";"))}else{var k=_.size===4?"vec4":"vec".concat(_.size),N=Zn.slice(S).map(function(D){return"".concat(A,".").concat(D)}),M=Zn.slice(0,w-4).map(function(D){return"".concat(C,".").concat(D)}),F=[].concat(j(N),j(M)).join(", ");f.push("  ".concat(k," ").concat(P," = ").concat(k,"(").concat(F,");"))}}b.push("  ".concat(p).concat(x," = ").concat(P,";"))},v=0,g=o;v<g.length;v++)m();return{fetchCode:f.join(`
`),varyingAssignments:b.join(`
`)}}function lr(n,a,e){if(!(!a||e.type==="sampler2D"))switch(e.type){case"float":n.uniform1f(a,e.value);break;case"int":case"bool":n.uniform1i(a,e.value);break;case"vec2":n.uniform2fv(a,e.value);break;case"vec3":n.uniform3fv(a,e.value);break;case"vec4":n.uniform4fv(a,e.value);break;case"mat3":n.uniformMatrix3fv(a,!1,e.value);break;case"mat4":n.uniformMatrix4fv(a,!1,e.value);break}}var Jd=E(E(E(E(E(E(E(E({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4);function Qn(n){var a=n.match(/^(#version[^\n]*\n)/);return a?a[1]+`#define PICKING_MODE
`+n.slice(a[1].length):`#define PICKING_MODE
`+n}var at=(function(){function n(a,e,t){Z(this,n),E(this,"floats",new Float32Array),E(this,"ints",new Uint32Array),E(this,"constantArray",new Float32Array),E(this,"capacity",0),E(this,"verticesCount",0),E(this,"bufferGeneration",0),E(this,"uploadedGeneration",new Map),E(this,"constantBufferGeneration",0),E(this,"uploadedConstantGeneration",new Map),E(this,"renderOffset",0),E(this,"renderCount",-1),E(this,"debugStats",{drawCalls:0,verticesDrawn:0,bufferUploadBytes:0}),E(this,"shadersLogged",!1),E(this,"pickProgram",null);var r=this.getDefinition();if(this.VERTICES=r.VERTICES,this.VERTEX_SHADER_SOURCE=r.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=r.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=r.UNIFORMS,this.ATTRIBUTES=r.ATTRIBUTES,this.METHOD=r.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in r?r.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in r?r.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in r,this.ATTRIBUTES_ITEMS_COUNT=na(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=t,this.normalProgram=this.getProgramInfo("normal",a,r.VERTEX_SHADER_SOURCE,r.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo("pick",a,Qn(r.VERTEX_SHADER_SOURCE),Qn(r.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){var i=na(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*i);for(var o=0;o<this.CONSTANT_DATA.length;o++){var l=this.CONSTANT_DATA[o];if(l.length!==i)throw new Error("Program: error while getting constant data (one vector has ".concat(l.length," items instead of ").concat(i,")"));for(var s=0;s<l.length;s++)this.constantArray[o*i+s]=l[s]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return Q(n,[{key:"kill",value:function(){er(this.normalProgram),this.pickProgram&&er(this.pickProgram)}},{key:"resetDebugStats",value:function(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}},{key:"getProgramInfo",value:function(e,t,r,i,o){var l=t.createBuffer();if(l===null)throw new Error("Program: error while creating the WebGL buffer.");var s=ra(t,r),d=ia(t,i),u=oa(t,[s,d]),c={};this.UNIFORMS.forEach(function(h){var b=t.getUniformLocation(u,h);b&&(c[h]=b)});var p={};this.ATTRIBUTES.forEach(function(h){p[h.name]=t.getAttribLocation(u,h.name)});var f;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(function(h){p[h.name]=t.getAttribLocation(u,h.name)}),f=t.createBuffer(),f===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:e,program:u,gl:t,frameBuffer:o,buffer:l,constantBuffer:f||{},uniformLocations:c,attributeLocations:p,isPicking:e==="pick",vertexShader:s,fragmentShader:d}}},{key:"bindProgram",value:function(e){var t=this,r=0,i=e.gl,o=e.buffer;if(this.isInstanced){if(i.bindBuffer(i.ARRAY_BUFFER,e.constantBuffer),r=0,this.CONSTANT_ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r,!1)}),this.uploadedConstantGeneration.get(e.constantBuffer)!==this.constantBufferGeneration){var s;i.bufferData(i.ARRAY_BUFFER,this.constantArray,i.STATIC_DRAW),this.uploadedConstantGeneration.set(e.constantBuffer,this.constantBufferGeneration),(s=this.renderer)!==null&&s!==void 0&&s.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)}if(i.bindBuffer(i.ARRAY_BUFFER,e.buffer),r=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r,!0)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var d;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(d=this.renderer)!==null&&d!==void 0&&d.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}}else if(i.bindBuffer(i.ARRAY_BUFFER,o),r=0,this.ATTRIBUTES.forEach(function(u){return r+=t.bindAttribute(u,e,r)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var l;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(l=this.renderer)!==null&&l!==void 0&&l.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}i.bindBuffer(i.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(e){var t=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e,!1)}),this.ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e,!0)})):this.ATTRIBUTES.forEach(function(r){return t.unbindAttribute(r,e)})}},{key:"bindAttribute",value:function(e,t,r,i){var o=Jd[e.type];if(typeof o!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(e.type,'"'));var l=t.attributeLocations[e.name],s=t.gl;if(l!==-1){s.enableVertexAttribArray(l);var d=this.isInstanced?(i?this.ATTRIBUTES_ITEMS_COUNT:na(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;s.vertexAttribPointer(l,e.size,e.type,e.normalized||!1,d,r),this.isInstanced&&i&&s.vertexAttribDivisor(l,1)}return e.size*o}},{key:"unbindAttribute",value:function(e,t,r){var i=t.attributeLocations[e.name],o=t.gl;i!==-1&&(o.disableVertexAttribArray(i),this.isInstanced&&r&&o.vertexAttribDivisor(i,0))}},{key:"reallocate",value:function(e){e!==this.capacity&&(this.capacity=e,this.verticesCount=this.VERTICES*e,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}},{key:"invalidateBuffers",value:function(){this.bufferGeneration++,this.constantBufferGeneration++}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"setTypedUniform",value:function(e,t){var r;lr(t.gl,(r=t.uniformLocations[e.name])!==null&&r!==void 0?r:null,e)}},{key:"renderProgram",value:function(e,t){var r=t.gl,i=t.program,o=t.isPicking;o?r.disable(r.BLEND):r.enable(r.BLEND),r.useProgram(i),this.setUniforms(e,t),this.drawWebGL(this.METHOD,t)}},{key:"render",value:function(e,t,r){var i;if(!this.shadersLogged&&(i=this.renderer)!==null&&i!==void 0&&i.getSetting("DEBUG_logShaders")&&(this.shadersLogged=!0,console.log("[sigma] DEBUG_logShaders: ".concat(this.constructor.name),{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:Qn(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:Qn(this.FRAGMENT_SHADER_SOURCE)}})),!this.hasNothingToRender()){this.renderOffset=t??0,this.renderCount=r??-1;var o=this.normalProgram.gl;if(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(e,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&e.pickingFrameBuffer){var l=Math.ceil(e.width*e.pixelRatio/e.downSizingRatio),s=Math.ceil(e.height*e.pixelRatio/e.downSizingRatio);o.bindFramebuffer(o.FRAMEBUFFER,e.pickingFrameBuffer),o.viewport(0,0,l,s),this.bindProgram(this.pickProgram),this.renderProgram(e,this.pickProgram),this.unbindProgram(this.pickProgram),o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio)}}}},{key:"drawWebGL",value:function(e,t){var r,i=t.gl,o=this.renderCount>=0?this.renderCount:this.capacity;(r=this.renderer)!==null&&r!==void 0&&r.getSetting("DEBUG_logRenderStats")&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=o*this.VERTICES),this.isInstanced?i.drawArraysInstanced(e,0,this.VERTICES,o):i.drawArrays(e,this.renderOffset*this.VERTICES,o*this.VERTICES)}}])})(),rt=2,pn=7,fo={below:0,above:1,left:2,right:3};function eu(){var n=`#version 300 es
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
`).concat(nt,`
`).concat(ft,`
`).concat(sr,`
`).concat(zt,`

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
  float gap = `).concat(rt.toFixed(1),` * zoomScale * u_pixelRatio;
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
`);return n}var tu=`#version 300 es
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
`;function nu(n,a,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=(r=l.margin)!==null&&r!==void 0?r:ht,d=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=eu(),c=tu,p=(function(f){function h(){var b;Z(this,h);for(var m=arguments.length,v=new Array(m),g=0;g<m;g++)v[g]=arguments[g];return b=se(this,h,[].concat(v)),E(b,"totalCount",0),E(b,"bufferCapacity",0),b}return le(h,f),Q(h,[{key:"getDefinition",value:function(){var m=WebGL2RenderingContext,v=m.FLOAT,g=m.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:c,METHOD:g,UNIFORMS:["u_matrix","u_resolution","u_labelPixelSnapping","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_atlasTexture"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:v},{name:"a_atlasRect",size:4,type:v},{name:"a_attachmentSize",size:2,type:v},{name:"a_positionMode",size:1,type:v},{name:"a_attachmentPlacement",size:1,type:v},{name:"a_labelWidth",size:1,type:v},{name:"a_labelHeight",size:1,type:v},{name:"a_textHeight",size:1,type:v},{name:"a_labelAngle",size:1,type:v}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:v}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processAttachment",value:function(m,v){var g=this.floats,y=m*this.STRIDE;g[y++]=v.nodeIndex,g[y++]=v.atlasX,g[y++]=v.atlasY,g[y++]=v.atlasW,g[y++]=v.atlasH,g[y++]=v.attachWidth,g[y++]=v.attachHeight,g[y++]=v.positionMode,g[y++]=v.attachmentPlacement,g[y++]=v.labelWidth,g[y++]=v.labelHeight,g[y++]=v.textHeight,g[y++]=v.labelAngle}},{key:"setUniforms",value:function(m,v){var g=v.gl,y=v.uniformLocations;g.uniformMatrix3fv(y.u_matrix,!1,m.matrix),g.uniform2f(y.u_resolution,m.width*m.pixelRatio,m.height*m.pixelRatio),g.uniform1f(y.u_labelPixelSnapping,m.labelPixelSnapping),g.uniform1f(y.u_sizeRatio,m.sizeRatio),g.uniform1f(y.u_correctionRatio,m.correctionRatio),g.uniform1f(y.u_cameraAngle,m.cameraAngle),g.uniform1f(y.u_pixelRatio,m.pixelRatio),g.uniform1f(y.u_labelMargin,h.labelMargin),g.uniform1f(y.u_zoomLabelSizeRatio,1/d(m.zoomRatio)),g.uniform1i(y.u_nodeDataTexture,m.nodeDataTextureUnit),g.uniform1i(y.u_nodeDataTextureWidth,m.nodeDataTextureWidth),g.uniform1i(y.u_nodeFrameTexture,m.nodeFrameTextureUnit),g.uniform1i(y.u_nodeFrameTextureWidth,m.nodeFrameTextureWidth),g.uniform1i(y.u_atlasTexture,pn)}},{key:"reallocateAttachments",value:function(m){this.totalCount=m,m>this.bufferCapacity&&(this.bufferCapacity=Math.max(m,Math.ceil(this.bufferCapacity*1.5)||10),he(h,"reallocate",this,3)([this.bufferCapacity]))}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(m,v){var g=v.gl;this.totalCount!==0&&g.drawArraysInstanced(m,0,this.VERTICES,this.totalCount)}}])})(at);return E(p,"labelMargin",s),new p(n,a,e)}var Je=5;function fa(n,a){return[].concat(j(a),j(n.map(function(e){var t;return{attributes:(t=e.attributes)!==null&&t!==void 0?t:[]}})))}function Ot(n,a){var e=we(fa(n,a)),t=new Set(n.flatMap(function(d){var u;return(u=d.attributes)!==null&&u!==void 0?u:[]}).map(function(d){return d.name.replace(/^a_/,"")})),r={},i={},o=z(t),l;try{for(o.s();!(l=o.n()).done;){var s=l.value;r[s]=e.offsets[s],i[s]=e.specs[s]}}catch(d){o.e(d)}finally{o.f()}return O(O({},e),{},{offsets:r,specs:i})}function go(n,a){var e=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pickingPadding","u_nodeDataTexture","u_layerAttributeTexture"]),t=new Set,r=n.flatMap(function(f){return f.uniforms}).filter(function(f){return e.has(f.name)||t.has(f.name)?!1:(t.add(f.name),!0)}).map(function(f){return"uniform ".concat(f.type," ").concat(f.name,";")}).join(`
`),i=a.flatMap(function(f){return f.uniforms}).filter(function(f){return e.has(f.name)||t.has(f.name)?!1:(t.add(f.name),!0)}).map(function(f){return"uniform ".concat(f.type," ").concat(f.name,";")}).join(`
`),o=fa(n,a),l=new Set,s=o.flatMap(function(f){return f.attributes}).filter(function(f){var h=f.name.replace(/^a_/,"");return l.has(h)?!1:(l.add(h),!0)}).map(function(f){var h=f.name.replace(/^a_/,""),b=f.size===1?"float":"vec".concat(f.size);return"out ".concat(b," v_").concat(h,";")}).join(`
`),d=Nt(we(o),{varPrefix:"layer",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),u=d.fetchCode,c=d.varyingAssignments,p=`#version 300 es

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
`).concat(nt,`

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
`);return p}function po(n,a,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,r=a.map(function(h,b){var m="layer_".concat(h.name),v=[].concat(j(h.attributes.map(function(g){return"v_".concat(g.name.replace(/^a_/,""))})),j(h.uniforms.map(function(g){return g.name}))).join(", ");return"  // Layer ".concat(b+1,": ").concat(h.name,`
  color = blendOver(color, `).concat(m,"(").concat(v,"));")}).join(`

`),i=new Set(["u_correctionRatio"]),o=new Set,l=n.flatMap(function(h){return h.uniforms}).filter(function(h){return i.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)}).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),s=a.flatMap(function(h){return h.uniforms}).filter(function(h){return i.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)}).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),d=new Set,u=fa(n,a).flatMap(function(h){return h.attributes}).filter(function(h){var b=h.name.replace(/^a_/,"");return d.has(b)?!1:(d.add(b),!0)}).map(function(h){var b=h.name.replace(/^a_/,""),m=h.size===1?"float":"vec".concat(h.size);return"in ".concat(m," v_").concat(b,";")}).join(`
`),c=sa(n),p=ro(n,e),f=`#version 300 es
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
`).concat(p,`

// Layer functions
`).concat(a.map(function(h){return h.glsl}).join(`

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
`);return f}function vo(n,a){var e=new Set;return e.add("u_matrix"),e.add("u_sizeRatio"),e.add("u_correctionRatio"),e.add("u_cameraAngle"),e.add("u_pickingPadding"),e.add("u_nodeDataTexture"),e.add("u_nodeDataTextureWidth"),e.add("u_layerAttributeTexture"),e.add("u_layerAttributeTextureWidth"),e.add("u_layerAttributeTexelsPerNode"),n.forEach(function(t){t.uniforms.forEach(function(r){return e.add(r.name)})}),a.forEach(function(t){t.uniforms.forEach(function(r){return e.add(r.name)})}),Array.from(e)}function mo(n){var a=WebGL2RenderingContext,e=a.UNSIGNED_BYTE,t=a.FLOAT;return[{name:"a_nodeIndex",size:1,type:t},{name:"a_id",size:4,type:e,normalized:!0},{name:"a_opacity",size:1,type:t}]}function nr(n){var a=n.shapes,e=n.layers,t=n.shapeGlobalIds,r=n.antialias,i=r===void 0?!0:r;return{vertexShader:go(a,e),fragmentShader:po(a,e,t,i),uniforms:vo(a,e),attributes:mo()}}function bo(n,a,e){var t=Ot(n,a),r=t.specs;return Object.keys(r).map(function(i){return"flat ".concat(e," ").concat(r[i].size===1?"float":"vec".concat(r[i].size)," v_").concat(i,";")}).join(`
`)}function yo(n){var a,e,t=n.shapes,r=n.layers,i=n.shapeGlobalIds,o=Nt(Ot(t,r),{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),l=t.length===1?"float inradiusFactor = ".concat(de((a=t[0].inradiusFactor)!==null&&a!==void 0?a:1),";"):"float inradiusFactor = ".concat(de((e=t[0].inradiusFactor)!==null&&e!==void 0?e:1),`;
  switch (int(shapeId)) {
`).concat(t.map(function(d,u){var c,p=i?i[u]:u;return"    case ".concat(p,": inradiusFactor = ").concat(de((c=d.inradiusFactor)!==null&&c!==void 0?c:1),"; break;")}).join(`
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
`.concat(bo(t,r,"out"),`

`).concat(ze,`
`).concat(nt,`
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

  `).concat(ir,`
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
`);return s}function xo(n){var a=n.shapes,e=n.layers,t=n.shapeGlobalIds,r=sa(a),i=Mt(a).map(function(p){return"uniform ".concat(p.type," ").concat(p.name,";")}).join(`
`),o=function(f){return fn(f,"nodeUV","1.0")},l;if(a.length===1)l="float nodeSdfNormalized = ".concat(o(a[0]),";");else{var s=a.map(function(p,f){var h=t?t[f]:f;return"    case ".concat(h,": nodeSdfNormalized = ").concat(o(p),"; break;")}).join(`
`),d=o(a[0]);l=`float nodeSdfNormalized;
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
`.concat(bo(a,e,"in"),`

uniform float u_cameraAngle;
`).concat(i,`

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

`).concat(r,`
`).concat(io,`
`).concat(oo,`
`).concat(so,`
`).concat(lo,`

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
`);return c}function _o(n){var a=["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"],e=z(Mt(n)),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;a.includes(r.name)||a.push(r.name)}}catch(i){e.e(i)}finally{e.f()}return a}function To(n){return{vertexShader:yo(n),fragmentShader:xo(n),uniforms:_o(n.shapes)}}function Eo(n,a,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=t.shapes,d=t.layers,u=t.getAttributeTexture,c=t.shapeGlobalIds;if(s.length===0)throw new Error("createBackdropProgram: at least one shape must be provided in 'shapes'");var p=(r=l.margin)!==null&&r!==void 0?r:5,f=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},h={shapes:s,layers:d,shapeGlobalIds:c},b=To(h),m=(function(v){function g(){var y;Z(this,g);for(var x=arguments.length,_=new Array(x),T=0;T<x;T++)_[T]=arguments[T];return y=se(this,g,[].concat(_)),E(y,"totalBackdropCount",0),E(y,"bufferCapacity",0),y}return le(g,v),Q(g,[{key:"getDefinition",value:function(){var x=WebGL2RenderingContext,_=x.FLOAT,T=x.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:b.vertexShader,FRAGMENT_SHADER_SOURCE:b.fragmentShader,METHOD:T,UNIFORMS:b.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:_},{name:"a_labelWidth",size:1,type:_},{name:"a_labelHeight",size:1,type:_},{name:"a_textHeight",size:1,type:_},{name:"a_positionMode",size:1,type:_},{name:"a_labelAngle",size:1,type:_},{name:"a_backdropColor",size:4,type:_},{name:"a_backdropShadowColor",size:4,type:_},{name:"a_backdropShadowBlur",size:1,type:_},{name:"a_backdropPadding",size:1,type:_},{name:"a_backdropBorderColor",size:4,type:_},{name:"a_backdropExtra",size:4,type:_},{name:"a_labelBoxOffset",size:2,type:_}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:_}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processBackdrop",value:function(x,_){var T=this.floats,R=this.STRIDE,S=x*R;T[S++]=_.nodeIndex,T[S++]=_.labelWidth,T[S++]=_.labelHeight,T[S++]=_.textHeight,T[S++]=ct[_.position],T[S++]=_.labelAngle,T[S++]=_.backdropColor[0],T[S++]=_.backdropColor[1],T[S++]=_.backdropColor[2],T[S++]=_.backdropColor[3],T[S++]=_.backdropShadowColor[0],T[S++]=_.backdropShadowColor[1],T[S++]=_.backdropShadowColor[2],T[S++]=_.backdropShadowColor[3],T[S++]=_.backdropShadowBlur,T[S++]=_.backdropPadding,T[S++]=_.backdropBorderColor[0],T[S++]=_.backdropBorderColor[1],T[S++]=_.backdropBorderColor[2],T[S++]=_.backdropBorderColor[3],T[S++]=_.backdropBorderWidth,T[S++]=_.backdropCornerRadius,T[S++]=_.backdropLabelPadding,T[S++]=_.backdropArea,T[S++]=_.labelBoxOffset[0],T[S++]=_.labelBoxOffset[1]}},{key:"setUniforms",value:function(x,_){var T=_.gl,R=_.uniformLocations;T.uniformMatrix3fv(R.u_matrix,!1,x.matrix),T.uniform1f(R.u_sizeRatio,x.sizeRatio),T.uniform1f(R.u_correctionRatio,x.correctionRatio),T.uniform1f(R.u_cameraAngle,x.cameraAngle),T.uniform2f(R.u_resolution,x.width*x.pixelRatio,x.height*x.pixelRatio),T.uniform1f(R.u_pixelRatio,x.pixelRatio),T.uniform1f(R.u_labelMargin,g.labelMargin),T.uniform1f(R.u_zoomLabelSizeRatio,1/f(x.zoomRatio)),T.uniform1f(R.u_labelPixelSnapping,x.labelPixelSnapping),T.uniform1i(R.u_nodeDataTexture,x.nodeDataTextureUnit),T.uniform1i(R.u_nodeDataTextureWidth,x.nodeDataTextureWidth),T.uniform1i(R.u_nodeFrameTexture,x.nodeFrameTextureUnit),T.uniform1i(R.u_nodeFrameTextureWidth,x.nodeFrameTextureWidth);var S=u();R.u_layerAttributeTexture&&S&&(S.bind(Je),T.uniform1i(R.u_layerAttributeTexture,Je),T.uniform1i(R.u_layerAttributeTextureWidth,S.getTextureWidth()),T.uniform1i(R.u_layerAttributeTexelsPerNode,S.getTexelsPerItem()));var A=z(Mt(s)),C;try{for(A.s();!(C=A.n()).done;){var P=C.value;this.setTypedUniform(P,_)}}catch(w){A.e(w)}finally{A.f()}}},{key:"hasNothingToRender",value:function(){return this.totalBackdropCount===0}},{key:"drawWebGL",value:function(x,_){var T=_.gl;this.totalBackdropCount!==0&&(this.isInstanced?T.drawArraysInstanced(x,0,this.VERTICES,this.totalBackdropCount):T.drawArrays(x,0,this.totalBackdropCount*this.VERTICES))}},{key:"reallocate",value:function(x){this.totalBackdropCount=x,x>this.bufferCapacity&&(this.bufferCapacity=Math.max(x,Math.ceil(this.bufferCapacity*1.5)||10),he(g,"reallocate",this,3)([this.bufferCapacity]))}}])})(at);return E(m,"labelMargin",p),new m(n,a,e)}var dr=(function(n){function a(){var e;Z(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=se(this,a,[].concat(r)),E(e,"totalCharacterCount",0),E(e,"bufferCapacity",0),e}return le(a,n),Q(a,[{key:"processLabel",value:function(t,r,i){if(i.hidden||!i.text)return 0;for(var o=i.text,l=o.length,s=0;s<l;s++){var d=o[s];this.processCharacter(r+s,i,d,s)}return l}},{key:"hasNothingToRender",value:function(){return this.totalCharacterCount===0}},{key:"drawWebGL",value:function(t,r){var i=r.gl;this.totalCharacterCount!==0&&(this.isInstanced?i.drawArraysInstanced(t,0,this.VERTICES,this.totalCharacterCount):i.drawArrays(t,0,this.totalCharacterCount*this.VERTICES))}},{key:"reallocate",value:function(t){this.totalCharacterCount=t,t>this.bufferCapacity&&(this.bufferCapacity=Math.max(t,Math.ceil(this.bufferCapacity*1.5)||1e3),he(a,"reallocate",this,3)([this.bufferCapacity]))}}])})(at);function au(){var n=`#version 300 es

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
`).concat(nt,`
`).concat(ft,`
`).concat(sr,`

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

  `).concat(ir,`

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
`);return n}var ru=`#version 300 es
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
`;function iu(n,a,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=(r=l.margin)!==null&&r!==void 0?r:ht,d=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=au(),c=(function(p){function f(){var h;Z(this,f);for(var b=arguments.length,m=new Array(b),v=0;v<b;v++)m[v]=arguments[v];return h=se(this,f,[].concat(m)),E(h,"totalCount",0),E(h,"bufferCapacity",0),h}return le(f,p),Q(f,[{key:"getDefinition",value:function(){var b=WebGL2RenderingContext,m=b.FLOAT,v=b.UNSIGNED_BYTE,g=b.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:ru,METHOD:g,UNIFORMS:["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:m},{name:"a_id",size:4,type:v,normalized:!0},{name:"a_color",size:4,type:v,normalized:!0},{name:"a_labelWidth",size:1,type:m},{name:"a_labelHeight",size:1,type:m},{name:"a_textHeight",size:1,type:m},{name:"a_positionMode",size:1,type:m},{name:"a_labelAngle",size:1,type:m},{name:"a_padding",size:1,type:m}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:m}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processLabelBackground",value:function(b,m){var v=this.floats,g=this.ints,y=b*this.STRIDE;v[y++]=m.nodeIndex,g[y++]=m.id,v[y++]=m.color,v[y++]=m.labelWidth,v[y++]=m.labelHeight,v[y++]=m.textHeight,v[y++]=m.positionMode,v[y++]=m.labelAngle,v[y++]=m.padding}},{key:"setUniforms",value:function(b,m){var v=m.gl,g=m.uniformLocations;v.uniformMatrix3fv(g.u_matrix,!1,b.matrix),v.uniform1f(g.u_sizeRatio,b.sizeRatio),v.uniform1f(g.u_correctionRatio,b.correctionRatio),v.uniform1f(g.u_cameraAngle,b.cameraAngle),v.uniform2f(g.u_resolution,b.width*b.pixelRatio,b.height*b.pixelRatio),v.uniform1f(g.u_pixelRatio,b.pixelRatio),v.uniform1f(g.u_labelMargin,f.labelMargin),v.uniform1f(g.u_zoomLabelSizeRatio,1/d(b.zoomRatio)),v.uniform1f(g.u_labelPixelSnapping,b.labelPixelSnapping),v.uniform1f(g.u_pickingPadding,b.labelPickingPadding),v.uniform1i(g.u_nodeDataTexture,b.nodeDataTextureUnit),v.uniform1i(g.u_nodeDataTextureWidth,b.nodeDataTextureWidth),v.uniform1i(g.u_nodeFrameTexture,b.nodeFrameTextureUnit),v.uniform1i(g.u_nodeFrameTextureWidth,b.nodeFrameTextureWidth)}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(b,m){var v=m.gl;this.totalCount!==0&&v.drawArraysInstanced(v.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(b){this.totalCount=b,b>this.bufferCapacity&&(this.bufferCapacity=Math.max(b,Math.ceil(this.bufferCapacity*1.5)||10),he(f,"reallocate",this,3)([this.bufferCapacity]))}}])})(at);return E(c,"labelMargin",s),new c(n,a,e)}var Me={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},dn=2,cn=1e20;function ou(n,a,e,t,r){var i=n+r*4,o=document.createElement("canvas");o.width=i,o.height=i;var l=o.getContext("2d",{willReadFrequently:!0});return l.font="".concat(t," ").concat(e," ").concat(n,"px ").concat(a),l.textBaseline="alphabetic",l.textAlign="left",l.fillStyle="black",{ctx:l,canvasSize:i,gridOuter:new Float64Array(i*i),gridInner:new Float64Array(i*i),f:new Float64Array(i),z:new Float64Array(i+1),v:new Uint16Array(i)}}function su(n,a,e,t,r){var i=n.ctx,o=n.canvasSize,l=i.measureText(a),s=l.width,d=l.actualBoundingBoxAscent,u=l.actualBoundingBoxDescent,c=l.actualBoundingBoxLeft,p=l.actualBoundingBoxRight,f=Math.ceil(d),h=Math.ceil(c),b=Math.max(0,Math.min(o-e,Math.ceil(c)+Math.ceil(p))),m=Math.min(o-e,f+Math.ceil(u)),v=b+2*e,g=m+2*e,y=Math.max(v*g,0),x=new Uint8ClampedArray(y),_={data:x,width:v,height:g,glyphWidth:b,glyphHeight:m,glyphTop:f,glyphLeft:h,glyphAdvance:s};if(b===0||m===0)return _;var T=n.gridInner,R=n.gridOuter;i.clearRect(e,e,b,m),i.fillText(a,e+h,e+f);var S=i.getImageData(e,e,b,m);R.fill(cn,0,y),T.fill(0,0,y);for(var A=0;A<m;A++)for(var C=0;C<b;C++){var P=S.data[4*(A*b+C)+3]/255;if(P!==0){var w=(A+e)*v+C+e;if(P===1)R[w]=0,T[w]=cn;else{var I=.5-P;R[w]=I>0?I*I:0,T[w]=I<0?I*I:0}}}ji(R,0,0,v,g,v,n.f,n.v,n.z),ji(T,e,e,b,m,v,n.f,n.v,n.z);for(var L=0;L<y;L++){var k=Math.sqrt(R[L])-Math.sqrt(T[L]);x[L]=Math.round(255-255*(k/t+r))}return _}function ji(n,a,e,t,r,i,o,l,s){for(var d=a;d<a+t;d++)qi(n,e*i+d,i,r,o,l,s);for(var u=e;u<e+r;u++)qi(n,u*i+a,1,t,o,l,s)}function qi(n,a,e,t,r,i,o){i[0]=0,o[0]=-cn,o[1]=cn,r[0]=n[a];for(var l=1,s=0,d=0;l<t;l++){r[l]=n[a+l*e];var u=l*l;do{var c=i[s];d=(r[l]-r[c]+u-c*c)/(l-c)/2}while(d<=o[s]&&--s>-1);s++,i[s]=l,o[s]=d,o[s+1]=cn}for(var p=0,f=0;p<t;p++){for(;o[f+1]<p;)f++;var h=i[f],b=p-h;n[a+p*e]=r[h]+b*b}}var et=(function(n){function a(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z(this,a),e=se(this,a),E(e,"fonts",new Map),E(e,"textures",[]),E(e,"cursor",{x:0,y:0,rowHeight:0,atlasIndex:0}),E(e,"pendingGlyphs",[]),E(e,"debounceTimer",null),e.options=O(O({},Me),t),e.canvas=document.createElement("canvas"),e.canvas.width=e.options.maxTextureSize,e.canvas.height=e.options.maxTextureSize,e.ctx=e.canvas.getContext("2d",{willReadFrequently:!0}),e.measureCanvas=document.createElement("canvas"),e.measureCtx=e.measureCanvas.getContext("2d"),e.textures.push(e.ctx.getImageData(0,0,1,1)),e}return le(a,n),Q(a,[{key:"getFontKey",value:function(t){return"".concat(t.family,"-").concat(t.weight,"-").concat(t.style)}},{key:"registerFont",value:function(t){var r=this.getFontKey(t);if(this.fonts.has(r))return r;var i=ou(this.options.fontSize,t.family,t.weight,t.style,this.options.buffer);return this.fonts.set(r,{descriptor:t,generator:i,glyphs:new Map}),r}},{key:"ensureGlyphs",value:function(t,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered. Call registerFont() first.'));var o=!1,l=z(t),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=d.codePointAt(0);u!==void 0&&(i.glyphs.has(u)||(this.pendingGlyphs.push({fontKey:r,charCode:u}),o=!0))}}catch(c){l.e(c)}finally{l.f()}o&&this.scheduleTextureGeneration()}},{key:"measureText",value:function(t,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered.'));var o=i.descriptor,l=o.family,s=o.weight,d=o.style;return this.measureCtx.font="".concat(d," ").concat(s," ").concat(this.options.fontSize,"px ").concat(l),this.measureCtx.measureText(t).width}},{key:"getGlyph",value:function(t,r){var i=this.fonts.get(r);if(i)return i.glyphs.get(t)}},{key:"getTextures",value:function(){return this.textures}},{key:"getFontCount",value:function(){return this.fonts.size}},{key:"getGlyphCount",value:function(){var t=0,r=z(this.fonts.values()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;t+=o.glyphs.size}}catch(l){r.e(l)}finally{r.f()}return t}},{key:"hasPendingGlyphs",value:function(){return this.pendingGlyphs.length>0}},{key:"flush",value:function(){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null),this.generateTextures()}},{key:"destroy",value:function(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}},{key:"scheduleTextureGeneration",value:function(){var t=this;this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(function(){t.debounceTimer=null,t.generateTextures()},this.options.debounceTimeout))}},{key:"generateTextures",value:function(){if(this.pendingGlyphs.length!==0){var t=this.options,r=t.maxTextureSize,i=t.buffer,o=t.radius,l=t.cutoff,s=z(this.pendingGlyphs),d;try{for(s.s();!(d=s.n()).done;){var u=d.value,c=u.fontKey,p=u.charCode,f=this.fonts.get(c);if(!(!f||f.glyphs.has(p))){var h=String.fromCodePoint(p),b=su(f.generator,h,i,o,l),m=b.width,v=b.height;this.cursor.x+m+dn>r&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+dn,this.cursor.rowHeight=0),this.cursor.y+v+dn>r&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,r,r));for(var g=b.data,y=new Uint8ClampedArray(m*v*4),x=0;x<g.length;x++){var _=x*4;y[_]=255,y[_+1]=255,y[_+2]=255,y[_+3]=g[x]}var T=new ImageData(y,m,v);this.ctx.putImageData(T,this.cursor.x,this.cursor.y);var R={charCode:p,width:b.glyphWidth,height:b.glyphHeight,bearingX:-b.glyphLeft-i,bearingY:b.glyphTop+i,advance:b.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:m,atlasHeight:v,atlasIndex:this.cursor.atlasIndex};f.glyphs.set(p,R),this.cursor.x+=m+dn,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,v)}}}catch(S){s.e(S)}finally{s.f()}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(a.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}}},{key:"finalizeCurrentTexture",value:function(){var t=this.options.maxTextureSize,r=this.cursor.y>0||this.cursor.rowHeight>0,i=Math.min(t,Math.max(this.cursor.x,r?t:1)),o=Math.min(t,this.cursor.y+this.cursor.rowHeight+dn),l=this.ctx.getImageData(0,0,i,o);this.cursor.atlasIndex>=this.textures.length?this.textures.push(l):this.textures[this.cursor.atlasIndex]=l}}])})(Zi.EventEmitter);E(et,"ATLAS_UPDATED_EVENT","atlasUpdated");var lu=Me.fontSize;function So(){var n=`  // -------------------------------------------------------------------------
  // Step 3: Calculate position offset from the shared edge distance
  // -------------------------------------------------------------------------
  vec2 positionOffset = vec2(0.0);

  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    float boundaryDistPixels = nodeRadiusPixels * edgeDist;
    positionOffset = screenDir * (boundaryDistPixels + margin);
  }`,a=`#version 300 es

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
`).concat(nt,`
`).concat(ft,`
`).concat(or,`

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

`).concat(n,`

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
`);return a}function Ao(){var n=`#version 300 es
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
`;return n}function Ro(){return["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_pixelRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_zoomLabelSizeRatio","u_labelPixelSnapping"]}function wo(){return{vertexShader:So(),fragmentShader:Ao(),uniforms:Ro()}}function Do(n,a,e,t){var r,i,o=t.label,l=o===void 0?{}:o,s=(r=l.margin)!==null&&r!==void 0?r:ht,d=(i=l.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},u=wo(),c=(function(p){function f(h,b,m){var v,g,y,x;if(Z(this,f),x=se(this,f,[h,b,m]),E(x,"atlasTexture",null),E(x,"atlasNeedsUpdate",!1),E(x,"labelGlyphCache",new Map),x.atlasFontSize=Me.fontSize*ln(),x.atlasManager=new et({fontSize:x.atlasFontSize}),x.gamma=.025,x.sdfBuffer=Me.cutoff,x.atlasTexture=h.createTexture(),!x.atlasTexture)throw new Error("NodeLabelProgram: failed to create atlas texture");h.bindTexture(h.TEXTURE_2D,x.atlasTexture),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_S,h.CLAMP_TO_EDGE),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_T,h.CLAMP_TO_EDGE),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.LINEAR),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.LINEAR),h.bindTexture(h.TEXTURE_2D,null),x.atlasManager.on(et.ATLAS_UPDATED_EVENT,function(){x.atlasNeedsUpdate=!0});var _={family:((v=l.font)===null||v===void 0?void 0:v.family)||"sans-serif",weight:((g=l.font)===null||g===void 0?void 0:g.weight)||"normal",style:((y=l.font)===null||y===void 0?void 0:y.style)||"normal"};return x.defaultFontKey=x.atlasManager.registerFont(_),x}return le(f,p),Q(f,[{key:"getDefinition",value:function(){var b=WebGL2RenderingContext,m=b.FLOAT,v=b.UNSIGNED_BYTE,g=b.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:u.vertexShader,FRAGMENT_SHADER_SOURCE:u.fragmentShader,METHOD:g,UNIFORMS:u.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:m},{name:"a_charOffset",size:2,type:m},{name:"a_charSize",size:2,type:m},{name:"a_texCoords",size:4,type:m},{name:"a_color",size:4,type:v,normalized:!0},{name:"a_margin",size:1,type:m},{name:"a_positionMode",size:1,type:m},{name:"a_labelWidth",size:1,type:m},{name:"a_labelHeight",size:1,type:m},{name:"a_verticalCenter",size:1,type:m},{name:"a_textHeight",size:1,type:m},{name:"a_labelAngle",size:1,type:m}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:m}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(b,m){if(m.hidden||!m.text){this.labelGlyphCache.delete(b);return}var v=m.text,g=m.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(v,g);var y=[],x=[],_=0,T=0,R=0,S=z(v),A;try{for(S.s();!(A=S.n()).done;){var C=A.value,P=C.codePointAt(0);if(P===void 0){y.push(void 0),x.push(_);continue}var w=this.atlasManager.getGlyph(P,g);y.push(w),x.push(_),w&&(_+=w.advance,T=Math.max(T,w.bearingY),R=Math.max(R,w.atlasHeight-w.bearingY))}}catch(I){S.e(I)}finally{S.f()}this.labelGlyphCache.set(b,{glyphs:y,xOffsets:x,totalWidth:_,totalHeight:T+R,verticalCenterOffset:(T-R)/2})}},{key:"processCharacter",value:function(b,m,v,g){var y=this.floats,x=this.STRIDE,_=b*x,T=this.labelGlyphCache.get(m.parentKey);if(!T||!T.glyphs[g]){for(var R=0;R<x;R++)y[_+R]=0;return}var S=T.glyphs[g],A=T.xOffsets[g],C=m.size/this.atlasFontSize,P=Ae(m.color),w=_;y[w++]=m.nodeIndex,y[w++]=(A+S.bearingX)*C,y[w++]=-S.bearingY*C,y[w++]=S.atlasWidth*C,y[w++]=S.atlasHeight*C,y[w++]=S.atlasX,y[w++]=S.atlasY,y[w++]=S.atlasWidth,y[w++]=S.atlasHeight,y[w++]=P,y[w++]=m.margin,y[w++]=ct[m.position],y[w++]=T.totalWidth*C,y[w++]=m.size,y[w++]=T.verticalCenterOffset*C,y[w++]=T.totalHeight*C,y[w++]=m.labelAngle}},{key:"processLabel",value:function(b,m,v){return this.prepareLabelGlyphs(b,v),he(f,"processLabel",this,3)([b,m,v])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var b=this.normalProgram.gl,m=this.atlasManager.getTextures();if(m.length!==0){var v=m[0];b.bindTexture(b.TEXTURE_2D,this.atlasTexture),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,v.width,v.height,0,b.RGBA,b.UNSIGNED_BYTE,v.data),b.bindTexture(b.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(b,m){var v=m.gl,g=m.uniformLocations;v.uniformMatrix3fv(g.u_matrix,!1,b.matrix),v.uniform1f(g.u_sizeRatio,b.sizeRatio),v.uniform1f(g.u_correctionRatio,b.correctionRatio),v.uniform1f(g.u_cameraAngle,b.cameraAngle),v.uniform2f(g.u_resolution,b.width*b.pixelRatio,b.height*b.pixelRatio);var y=this.atlasManager.getTextures();y.length>0?v.uniform2f(g.u_atlasSize,y[0].width,y[0].height):v.uniform2f(g.u_atlasSize,1,1),v.activeTexture(v.TEXTURE0),v.bindTexture(v.TEXTURE_2D,this.atlasTexture),v.uniform1i(g.u_atlas,0),g.u_nodeDataTexture!==void 0&&v.uniform1i(g.u_nodeDataTexture,b.nodeDataTextureUnit),g.u_nodeDataTextureWidth!==void 0&&v.uniform1i(g.u_nodeDataTextureWidth,b.nodeDataTextureWidth),v.uniform1i(g.u_nodeFrameTexture,b.nodeFrameTextureUnit),v.uniform1i(g.u_nodeFrameTextureWidth,b.nodeFrameTextureWidth),v.uniform1f(g.u_gamma,this.gamma),v.uniform1f(g.u_sdfBuffer,this.sdfBuffer),v.uniform1f(g.u_pixelRatio,b.pixelRatio),v.uniform1f(g.u_zoomLabelSizeRatio,1/f.zoomToLabelSizeRatioFunction(b.zoomRatio)),v.uniform1f(g.u_labelPixelSnapping,b.labelPixelSnapping)}},{key:"renderProgram",value:function(b,m){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),he(f,"renderProgram",this,3)([b,m])}},{key:"registerFont",value:function(b){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:b,weight:m,style:v})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"measureLabel",value:function(b,m,v){var g=v||this.defaultFontKey;this.atlasManager.ensureGlyphs(b,g),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var y=0,x=0,_=0,T=z(b),R;try{for(T.s();!(R=T.n()).done;){var S=R.value,A=S.codePointAt(0);if(A!==void 0){var C=this.atlasManager.getGlyph(A,g);C&&(y+=C.advance,x=Math.max(x,C.bearingY),_=Math.max(_,C.atlasHeight-C.bearingY))}}}catch(w){T.e(w)}finally{T.f()}var P=m/this.atlasFontSize;return{width:y*P,height:m,textHeight:(x+_)*P}}},{key:"ensureGlyphsReady",value:function(b,m){var v=m||this.defaultFontKey,g=z(b),y;try{for(g.s();!(y=g.n()).done;){var x=y.value;this.atlasManager.ensureGlyphs(x,v)}}catch(_){g.e(_)}finally{g.f()}this.atlasManager.flush()}},{key:"kill",value:function(){var b=this.normalProgram.gl;this.atlasTexture&&(b.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),he(f,"kill",this,3)([])}}])})(dr);return E(c,"labelMargin",s),E(c,"zoomToLabelSizeRatioFunction",d),new c(n,a,e)}var du=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function uu(n,a,e){var t=sa(n),r=Mt(n).map(function(h){return"uniform ".concat(h.type," ").concat(h.name,";")}).join(`
`),i=co(n,e),o=i.code,l=i.multiShape,s=Ot(n,a),d=Object.keys(s.specs).map(function(h){return"float v_".concat(h,";")}).join(`
`),u=Nt(s,{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),c=u.fetchCode,p=u.varyingAssignments,f=`#version 300 es
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
`).concat(nt,`
`).concat(t,`
`).concat(o,`
`).concat(or,`

void main() {
  int nodeIdx = int(a_nodeIndex);
`).concat(c,`
`).concat(p,`
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
`);return f}var ur=(function(){function n(a,e){Z(this,n),E(this,"uniformLocations",{});var t=e.shapes,r=e.layers,i=e.shapeGlobalIds;if(t.length===0)throw new Error("NodeLabelFramePass: at least one shape must be provided");this.gl=a,this.shapeUniforms=Mt(t),this.hasAttributeData=Object.keys(Ot(t,r).offsets).length>0,this.vertexShader=ra(a,uu(t,r,i)),this.fragmentShader=ia(a,du),this.program=oa(a,[this.vertexShader,this.fragmentShader]);var o=["u_cameraAngle","u_nodeDataTexture","u_nodeDataTextureWidth","u_frameTextureWidth","u_frameTextureHeight","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"].concat(j(this.shapeUniforms.map(function(v){return v.name}))),l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;this.uniformLocations[d]=a.getUniformLocation(this.program,d)}}catch(v){l.e(v)}finally{l.f()}var u=n.FLOATS_PER_POINT*4;this.vao=a.createVertexArray(),this.buffer=a.createBuffer(),a.bindVertexArray(this.vao),a.bindBuffer(a.ARRAY_BUFFER,this.buffer);var c=z([["a_nodeIndex",0],["a_positionMode",4],["a_labelAngle",8]]),p;try{for(c.s();!(p=c.n()).done;){var f=ne(p.value,2),h=f[0],b=f[1],m=a.getAttribLocation(this.program,h);m>=0&&(a.enableVertexAttribArray(m),a.vertexAttribPointer(m,1,a.FLOAT,!1,u,b))}}catch(v){c.e(v)}finally{c.f()}a.bindVertexArray(null)}return Q(n,[{key:"run",value:function(e,t,r,i,o){if(t!==0){var l=this.gl;l.useProgram(this.program),l.bindVertexArray(this.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer),l.bufferData(l.ARRAY_BUFFER,e.subarray(0,t*n.FLOATS_PER_POINT),l.DYNAMIC_DRAW);var s=this.uniformLocations;l.uniform1f(s.u_cameraAngle,i.cameraAngle),l.uniform1i(s.u_nodeDataTexture,i.nodeDataTextureUnit),l.uniform1i(s.u_nodeDataTextureWidth,i.nodeDataTextureWidth),l.uniform1f(s.u_frameTextureWidth,r.getTextureWidth()),l.uniform1f(s.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&o&&(o.bind(Je),s.u_layerAttributeTexture&&l.uniform1i(s.u_layerAttributeTexture,Je),s.u_layerAttributeTextureWidth&&l.uniform1i(s.u_layerAttributeTextureWidth,o.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&l.uniform1i(s.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var d=z(this.shapeUniforms),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;lr(l,this.uniformLocations[c.name],c)}}catch(p){d.e(p)}finally{d.f()}r.bindAsRenderTarget(),l.disable(l.BLEND),l.disable(l.DEPTH_TEST),l.drawArrays(l.POINTS,0,t),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindVertexArray(null)}}},{key:"kill",value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteBuffer(this.buffer),e.deleteVertexArray(this.vao)}}])})();E(ur,"FLOATS_PER_POINT",3);function cr(n,a,e,t,r){var i,o=t.label,l=o===void 0?{}:o,s=t.shapes;if(s.length===0)throw new Error("createNodeProgram: at least one shape must be provided in 'shapes'");var d={},u=[],c;s.forEach(function(R,S){var A=eo(R);S===0&&(c=A),d[R.name]=S,u[S]=Gt(A)});var p=j(t.layers),f=nr({shapes:s,layers:p,shapeGlobalIds:s.length>1?u:void 0,antialias:r}),h=Do(n,null,e,{label:l}),b=Eo(n,null,e,{shapes:s,layers:p,getAttributeTexture:function(){return T.getAttributeTexture()},label:l,shapeGlobalIds:s.length>1?u:void 0}),m=iu(n,a,e,{label:l}),v=t.labelAttachments&&Object.keys(t.labelAttachments).length>0?nu(n,null,e,{label:l}):null,g=new ur(n,{shapes:s,layers:p,shapeGlobalIds:s.length>1?u:void 0}),y=fa(s,p),x=we(y),_=(i=(function(R){function S(A,C,P){var w;Z(this,S),w=se(this,S,[A,C,P]),E(w,"layerLifecycles",new Map),E(w,"layersNeedingRegeneration",new Set),E(w,"attrDescriptors",[]),w._pickingBuffer=C;var I=_.layerTextures.get(A);I||(I=new ua(A,x),_.layerTextures.set(A,I)),w.layerAttributeTexture=I;var L=_.textureRefCounts.get(A)||0;_.textureRefCounts.set(A,L+1),w.packedAttributeData=new Float32Array(x.floatsPerItem),p.forEach(function(N,M){if(N.lifecycle){var F={gl:A,renderer:{refresh:function(){return P.refresh()}},getUniformLocation:function(H){return A.getUniformLocation(w.normalProgram.program,H)},requestShaderRegeneration:function(){w.layersNeedingRegeneration.add(M)},requestRefresh:function(){P.refresh()}},D=N.lifecycle(F);w.layerLifecycles.set(M,D)}}),w.layerLifecycles.forEach(function(N){var M;(M=N.init)===null||M===void 0||M.call(N)});var k=new Map;return w.layerLifecycles.forEach(function(N,M){N.getAttributeData&&k.set(M,N)}),w.attrDescriptors=ca(y,x,k),w}return le(S,R),Q(S,[{key:"getDefinition",value:function(){var C=WebGL2RenderingContext,P=C.FLOAT,w=C.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:f.vertexShader,FRAGMENT_SHADER_SOURCE:f.fragmentShader,METHOD:w,UNIFORMS:f.uniforms,ATTRIBUTES:f.attributes,CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:P}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"maybeRegenerateShaders",value:function(){var C=this;if(this.layersNeedingRegeneration.size!==0){p=p.map(function(M,F){if(C.layersNeedingRegeneration.has(F)){var D=C.layerLifecycles.get(F);if(D!=null&&D.regenerate){var G=D.regenerate();return O(O({},G),{},{lifecycle:M.lifecycle})}}return M}),this.layersNeedingRegeneration.clear(),f=nr({shapes:s,layers:p,shapeGlobalIds:s.length>1?u:void 0,antialias:this.renderer.getSetting("antialiasNodes")});var P=this.normalProgram.gl,w=this.normalProgram,I=w.program,L=w.buffer,k=w.vertexShader,N=w.fragmentShader;P.deleteProgram(I),P.deleteBuffer(L),P.deleteShader(k),P.deleteShader(N),this.normalProgram=this.getProgramInfo("normal",P,f.vertexShader,f.fragmentShader,this._pickingBuffer)}}},{key:"allocateNode",value:function(C){this.layerAttributeTexture.allocate(C)}},{key:"freeNode",value:function(C){this.layerAttributeTexture.free(C)}},{key:"getAttributeTexture",value:function(){return this.layerAttributeTexture}},{key:"uploadLayerTexture",value:function(){this.layerAttributeTexture.upload()}},{key:"process",value:function(C,P,w,I,L){var k=P*this.STRIDE;if(w.visibility==="hidden"){for(var N=k+this.STRIDE;k<N;k++)this.floats[k]=0;this.floats[P*this.STRIDE]=ho;return}this.processVisibleItem(Ct(C),k,w,I,L)}},{key:"processVisibleItem",value:function(C,P,w,I,L){var k,N=this.floats,M=this.ints;if(N[P++]=I,M[P++]=C,N[P++]=(k=w.opacity)!==null&&k!==void 0?k:1,x.floatsPerItem!==0){var F=this.packedAttributeData;ha(this.attrDescriptors,w,F,w.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(L,F)}}},{key:"setUniforms",value:function(C,P){var w=this,I=P.gl,L=P.uniformLocations;L.u_matrix&&I.uniformMatrix3fv(L.u_matrix,!1,C.matrix),L.u_sizeRatio&&I.uniform1f(L.u_sizeRatio,C.sizeRatio),L.u_correctionRatio&&I.uniform1f(L.u_correctionRatio,C.correctionRatio),L.u_pickingPadding&&I.uniform1f(L.u_pickingPadding,C.nodePickingPadding),L.u_cameraAngle&&I.uniform1f(L.u_cameraAngle,C.cameraAngle),L.u_nodeDataTexture&&I.uniform1i(L.u_nodeDataTexture,C.nodeDataTextureUnit),L.u_nodeDataTextureWidth&&I.uniform1i(L.u_nodeDataTextureWidth,C.nodeDataTextureWidth),L.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(Je),I.uniform1i(L.u_layerAttributeTexture,Je)),L.u_layerAttributeTextureWidth&&I.uniform1i(L.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),L.u_layerAttributeTexelsPerNode&&I.uniform1i(L.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),s.forEach(function(k){k.uniforms.forEach(function(N){w.setTypedUniform(N,P)})}),p.forEach(function(k){k.uniforms.forEach(function(N){w.setTypedUniform(N,P)})})}},{key:"render",value:function(C,P,w){this.maybeRegenerateShaders(),he(S,"render",this,3)([C,P,w])}},{key:"renderProgram",value:function(C,P){var w=P.gl,I=P.program;w.useProgram(I),P===this.normalProgram&&this.layerLifecycles.forEach(function(L){var k;(k=L.beforeRender)===null||k===void 0||k.call(L)}),he(S,"renderProgram",this,3)([C,P])}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(w){var I;(I=w.kill)===null||I===void 0||I.call(w)}),this.layerLifecycles.clear();var C=this.normalProgram.gl,P=(_.textureRefCounts.get(C)||1)-1;P<=0?(this.layerAttributeTexture.kill(),_.layerTextures.delete(C),_.textureRefCounts.delete(C)):_.textureRefCounts.set(C,P),he(S,"kill",this,3)([])}}])})(at),E(i,"layerTextures",new WeakMap),E(i,"textureRefCounts",new WeakMap),i),T=new _(n,null,e);return{nodeProgram:T,labelProgram:h,backdropProgram:b,labelBackgroundProgram:m,attachmentProgram:v,framePass:g,shapeSlug:c,shapeNameToIndex:s.length>1?d:void 0,shapeGlobalIds:s.length>1?u:void 0}}var tt=6;function vn(n){var a=n.offsets,e=n.specs,t=n.floatsPerItem,r=Object.keys(a);if(r.length===0||t===0)return{uniformDeclarations:"",uniformNames:[],vertexVaryingDeclarations:"",fragmentVaryingDeclarations:"",fetchCode:"",varyingAssignments:""};var i=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=["u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"],l=r.map(function(f){var h=e[f].size===1?"float":"vec".concat(e[f].size);return"".concat(h," v_").concat(f,";")}),s=l.map(function(f){return"out ".concat(f)}).join(`
`),d=l.map(function(f){return"in ".concat(f)}).join(`
`),u=Nt(n,{varPrefix:"attr",baseTexelExpr:"edgeIdx * u_edgeAttributeTexelsPerEdge",textureWidthUniform:"u_edgeAttributeTextureWidth",textureSamplerUniform:"u_edgeAttributeTexture"}),c=u.fetchCode,p=u.varyingAssignments;return{uniformDeclarations:i,uniformNames:o,vertexVaryingDeclarations:s,fragmentVaryingDeclarations:d,fetchCode:c,varyingAssignments:p}}function cu(n){return`
float findSourceClampT_`.concat(n,`(vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
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
    vec2 pos = path_`).concat(n,`_position(mid, source, target);
    vec2 localPos = rot * ((pos - source) / nodeExtent);
    float sdf = querySDF(sourceShapeId, localPos, effectiveSize);
    if (sdf < 0.0) lo = mid;
    else hi = mid;
  }

  float pathLen = path_`).concat(n,`_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 + marginT;
}
`)}function hu(n){return`
float findTargetClampT_`.concat(n,`(vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  float lo = 0.5, hi = 1.0;
  float nodeExtent = targetSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // See findSourceClampT_ for the rotation rationale.
  float ca = u_cameraAngle * (1.0 - targetRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_`).concat(n,`_position(mid, source, target);
    vec2 localPos = rot * ((pos - target) / nodeExtent);
    float sdf = querySDF(targetShapeId, localPos, effectiveSize);
    if (sdf < 0.0) hi = mid;
    else lo = mid;
  }

  float pathLen = path_`).concat(n,`_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 - marginT;
}
`)}function Lo(n){return`
// Auto-generated numerical tangent (from position via finite differences)
vec2 path_`.concat(n,`_tangent(float t, vec2 source, vec2 target) {
  float epsilon = 0.001;
  float t1 = max(0.0, t - epsilon);
  float t2 = min(1.0, t + epsilon);
  vec2 p1 = path_`).concat(n,`_position(t1, source, target);
  vec2 p2 = path_`).concat(n,`_position(t2, source, target);
  return normalize(p2 - p1);
}

// Auto-generated normal (perpendicular to tangent)
vec2 path_`).concat(n,`_normal(float t, vec2 source, vec2 target) {
  vec2 tangent = path_`).concat(n,`_tangent(t, source, target);
  return vec2(-tangent.y, tangent.x);
}
`)}function fu(n){return`
// Auto-generated path length (samples position 16 times)
float path_`.concat(n,`_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_`).concat(n,`_position(0.0, source, target);
  for (int i = 1; i <= 16; i++) {
    float t = float(i) / 16.0;
    vec2 curr = path_`).concat(n,`_position(t, source, target);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}
`)}function gu(n){return`
// Auto-generated closest_t (coarse sample + ternary search)
float path_`.concat(n,`_closest_t(vec2 p, vec2 source, vec2 target) {
  // Coarse search: find best among 10 samples
  float bestT = 0.0;
  float bestDist = 1e10;
  for (int i = 0; i <= 10; i++) {
    float t = float(i) / 10.0;
    vec2 pos = path_`).concat(n,`_position(t, source, target);
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
    float d1 = length(p - path_`).concat(n,`_position(mid1, source, target));
    float d2 = length(p - path_`).concat(n,`_position(mid2, source, target));
    if (d1 < d2) {
      hi = mid2;
    } else {
      lo = mid1;
    }
  }
  return (lo + hi) * 0.5;
}
`)}function pu(n){return`
// Auto-generated signed distance (via closest_t + normal)
float path_`.concat(n,`_distance(vec2 p, vec2 source, vec2 target) {
  float closestT = path_`).concat(n,`_closest_t(p, source, target);
  vec2 closest = path_`).concat(n,`_position(closestT, source, target);
  vec2 diff = p - closest;
  float dist = length(diff);
  if (dist < 0.0001) return 0.0;

  // Get normal at closest point
  vec2 normal = path_`).concat(n,`_normal(closestT, source, target);
  return dist * sign(dot(diff, normal));
}
`)}function vu(n){return`
// Auto-generated t_at_distance (binary search)
float path_`.concat(n,`_t_at_distance(float targetDist, vec2 source, vec2 target) {
  if (targetDist <= 0.0) return 0.0;

  float totalLen = path_`).concat(n,`_length(source, target);
  if (targetDist >= totalLen) return 1.0;

  // Binary search for t
  float lo = 0.0, hi = 1.0;
  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;

    // Compute arc length from 0 to mid
    float arcLen = 0.0;
    vec2 prev = path_`).concat(n,`_position(0.0, source, target);
    for (int j = 1; j <= 8; j++) {
      float t = mid * float(j) / 8.0;
      vec2 curr = path_`).concat(n,`_position(t, source, target);
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
`)}function Jn(n,a){var e=new RegExp("\\b(float|vec[234]|void|int|bool)\\s+".concat(a,"\\s*\\("));return e.test(n)}function Co(n,a){var e=[];return Jn(a,"path_".concat(n,"_length"))||e.push(fu(n)),Jn(a,"path_".concat(n,"_closest_t"))||e.push(gu(n)),Jn(a,"path_".concat(n,"_distance"))||e.push(pu(n)),Jn(a,"path_".concat(n,"_t_at_distance"))||e.push(vu(n)),e.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
`.concat(e.join(`
`)):""}function ko(n){var a,e,t,r=n.paths,i=n.layers,o=(a=n.extremities)!==null&&a!==void 0?a:[];if(r.length===0)throw new Error("At least one path is required in 'paths'");if(i.length===0)throw new Error("At least one layer is required in 'layers'");var l=(e=n.defaultHead)!==null&&e!==void 0?e:"none",s=(t=n.defaultTail)!==null&&t!==void 0?t:"none";return{paths:r,extremities:o,layers:i,path:r[0],layer:i[0],defaultHead:l,defaultTail:s}}var Po=WebGL2RenderingContext,hn=Po.FLOAT,Xi=Po.UNSIGNED_BYTE;function mu(n,a,e){var t=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"]),r=new Set(t);return n.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),a.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),e.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),Array.from(r)}function hr(n){var a=new Set,e=[],t=z(n),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;a.has(i.name)||(a.add(i.name),e.push("// Path: ".concat(i.name)),e.push(i.glsl),e.push(Lo(i.name)),e.push(Co(i.name,i.glsl)))}}catch(o){t.e(o)}finally{t.f()}return e.join(`

`)}function bu(n){var a=[],e=z(n),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;a.push("// Extremity: ".concat(r.name)),a.push(r.glsl)}}catch(i){e.e(i)}finally{e.f()}return a.join(`

`)}var yu=[{queryName:"queryPathPosition",pathFunc:"position",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathTangent",pathFunc:"tangent",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathNormal",pathFunc:"normal",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathLength",pathFunc:"length",returnType:"float",params:"vec2 source, vec2 target",args:"source, target"},{queryName:"queryPathClosestT",pathFunc:"closest_t",returnType:"float",params:"vec2 p, vec2 source, vec2 target",args:"p, source, target"}];function xu(n,a){var e=a.queryName,t=a.pathFunc,r=a.returnType,i=a.params,o=a.args;if(n.length===1)return"".concat(r," ").concat(e,"(int pathId, ").concat(i,`) {
  return path_`).concat(n[0].name,"_").concat(t,"(").concat(o,`);
}`);var l=n.map(function(s,d){return"    case ".concat(d,": return path_").concat(s.name,"_").concat(t,"(").concat(o,");")}).join(`
`);return"".concat(r," ").concat(e,"(int pathId, ").concat(i,`) {
  switch (pathId) {
`).concat(l,`
    default: return path_`).concat(n[0].name,"_").concat(t,"(").concat(o,`);
  }
}`)}function fr(n){return yu.map(function(a){return xu(n,a)}).join(`

`)}function _u(n){if(n.length===1)return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_`.concat(n[0].name,`(uv, lengthRatio, widthRatio);
}`);var a=n.map(function(e,t){return"    case ".concat(t,": return extremity_").concat(e.name,"(uv, lengthRatio, widthRatio);")}).join(`
`);return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
`.concat(a,`
    default: return extremity_`).concat(n[0].name,`(uv, lengthRatio, widthRatio);
  }
}`)}function Tu(n){var a=[],e=z(n),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;a.push(cu(r.name)),a.push(hu(r.name))}}catch(l){e.e(l)}finally{e.f()}if(n.length===1)a.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_`.concat(n[0].name,`(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_`).concat(n[0].name,`(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`));else{var i=n.map(function(l,s){return"    case ".concat(s,": return findSourceClampT_").concat(l.name,"(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);")}).join(`
`),o=n.map(function(l,s){return"    case ".concat(s,": return findTargetClampT_").concat(l.name,"(source, target, targetSize, targetShapeId, targetRotateAlign, margin);")}).join(`
`);a.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  switch (pathId) {
`.concat(i,`
    default: return findSourceClampT_`).concat(n[0].name,`(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
  }
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  switch (pathId) {
`).concat(o,`
    default: return findTargetClampT_`).concat(n[0].name,`(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
  }
}`))}return a.join(`

`)}function Eu(n,a,e,t,r){var i=we([].concat(j(n),j(e))),o=vn(i),l=Ot(t,r),s=Object.keys(l.offsets),d=function(R){var S=l.specs[R].size;return S===1?"float":"vec".concat(S)},u=s.map(function(T){return"".concat(d(T)," v_source_").concat(T,`;
`).concat(d(T)," v_target_").concat(T,";")}).join(`
`),c=Nt(l,{varPrefix:"srcNodeAttr",baseTexelExpr:"srcIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_source_"}),p=Nt(l,{varPrefix:"tgtNodeAttr",baseTexelExpr:"tgtIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_target_"}),f=s.map(function(T){return"".concat(d(T)," g_").concat(T,";")}).join(`
`),h=s.map(function(T){return"  g_".concat(T," = v_source_").concat(T,";")}).join(`
`),b=s.map(function(T){return"  g_".concat(T," = v_target_").concat(T,";")}).join(`
`),m=new Set,v=[],g=function(R){m.has(R.name)||(m.add(R.name),v.push("uniform ".concat(R.type," ").concat(R.name,";")))};n.forEach(function(T){return T.uniforms.forEach(g)}),a.forEach(function(T){return T.uniforms.forEach(g)});var y=a.map(function(T){return de(T.widthFactor)}).join(", "),x=Math.max.apply(Math,j(n.map(function(T){return T.minBodyLengthRatio||0}))),_=`#version 300 es

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
`).concat(v.join(`
`),`

// Path attribute varyings \u2014 assigned so path functions can read them as globals
`).concat(o.vertexVaryingDeclarations,`

// Node size varyings \u2014 read by path functions like loop
out float v_sourceNodeSize;
out float v_targetNodeSize;

// Node shape attributes per endpoint, and the ones querySDF reads
`).concat(u,`
`).concat(f,`

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[`).concat(a.length,"] = float[](").concat(y,`);

// Node-data fetch helpers (geometry texel + rotation-flags texel)
`).concat(ze,`
`).concat(nt,`

// Shape SDFs for node boundary clamping
`).concat(no(),`
`).concat(ao(new Set(s)),`

// Path functions
`).concat(hr(n),`
`).concat(fr(n),`
`).concat(Tu(n),`

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
`).concat(p.fetchCode,`
`).concat(p.varyingAssignments,`

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
`).concat(b,`
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
`).concat(b,`
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
`);return _}var ea=0,Yi=1,ta=2;function Su(n,a,e){var t=[];e&&(t.push([ea,0,-1],[ea,0,1]),t.push([ea,1,-1],[ea,1,1]));for(var r=0;r<=n;r++){var i=r/n;t.push([Yi,i,-1],[Yi,i,1])}return a&&(t.push([ta,0,-1],[ta,0,1]),t.push([ta,1,-1],[ta,1,1])),{data:t,attributes:[{name:"a_zone",size:1,type:hn},{name:"a_zoneT",size:1,type:hn},{name:"a_side",size:1,type:hn}],verticesPerEdge:t.length}}function Au(n,a,e,t){var r=we([].concat(j(n),j(e))),i=vn(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture"]),l=new Set,s=[],d=function(v){!o.has(v.name)&&!l.has(v.name)&&(l.add(v.name),s.push("uniform ".concat(v.type," ").concat(v.name,";")))};n.forEach(function(m){return m.uniforms.forEach(d)}),a.forEach(function(m){return m.uniforms.forEach(d)}),e.forEach(function(m){return m.uniforms.forEach(d)});var u=t.map(function(m){var v=m.size===1?"float":"vec".concat(m.size);return"in ".concat(v," ").concat(m.name,";")}).join(`
`),c=a.map(function(m){return de(m.widthFactor)}).join(", "),p=Math.max.apply(Math,j(n.map(function(m){return m.minBodyLengthRatio||0}))),f=e.some(function(m){return m.needsNodeColors}),h=n.some(function(m){return m.needsNodeSize}),b=`#version 300 es

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
`).concat(f?`
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
const float EXTREMITY_WIDTH_FACTORS[`).concat(a.length,"] = float[](").concat(c,`);

// All path functions
`).concat(hr(n),`

// Path selector functions
`).concat(fr(n),`

// Node-data fetch helper (geometry texel of the two-texel node stride)
`).concat(ze,`
`).concat(f?uo:"",`
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
`).concat(f?`
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
  float minBodyLengthRatio = `).concat(de(p),`;

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
`);return b}function Ru(n,a,e,t){var r=we([].concat(j(n),j(e))),i=vn(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding"]),l=new Set,s=[],d=function(g){!o.has(g.name)&&!l.has(g.name)&&(l.add(g.name),s.push("uniform ".concat(g.type," ").concat(g.name,";")))};n.forEach(function(v){return v.uniforms.forEach(d)}),a.forEach(function(v){return v.uniforms.forEach(d)}),e.forEach(function(v){return v.uniforms.forEach(d)});var u=a.map(function(v){var g;return de((g=v.baseRatio)!==null&&g!==void 0?g:.5)}).join(", "),c=function(g){var y,x;return a.length>1?"EXTREMITY_BASE_RATIOS[".concat(g,"]"):de((y=(x=a[0])===null||x===void 0?void 0:x.baseRatio)!==null&&y!==void 0?y:.5)},p=a.some(function(v){return Pe(v.length)?!0:v.length>0}),f=e.some(function(v){return v.needsNodeColors}),h=n.some(function(v){return v.needsNodeSize}),b=e.map(function(v,g){return"  // Layer ".concat(g+1,": ").concat(v.name,`
  color = blendOver(color, layer_`).concat(v.name,"(context));")}).join(`

`),m=`#version 300 es
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
`).concat(f?`
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

`).concat(a.length>1?`// Base ratio array for extremities (shared pool for head/tail)
const float EXTREMITY_BASE_RATIOS[`.concat(a.length,"] = float[](").concat(u,");"):"",`

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
`).concat(hr(n),`

// Path selector functions
`).concat(fr(n),`

// All extremity functions
`).concat(bu(a),`

// Extremity SDF selector (shared pool for head/tail)
`).concat(_u(a),`

// Layer functions
`).concat(e.map(function(v){return v.glsl}).join(`

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
`).concat(n.every(function(v){return v.linearParameterization})?`  // All paths have linear parameterization: t maps directly to arc distance
  context.distanceFromSource = pathTNorm * visibleLength;
  context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;`:n.every(function(v){return!v.linearParameterization})?`  // No paths have linear parameterization: use numerical integration
  context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
  context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);`:`  // Mixed parameterization: use analytical for linear paths, numerical for others
  if (`.concat(n.filter(function(v){return v.linearParameterization}).map(function(v){return"v_pathId == ".concat(n.indexOf(v))}).join(" || "),`) {
    context.distanceFromSource = pathTNorm * visibleLength;
    context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;
  } else {
    context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
    context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);
  }`),`

  // Compute SDF based on zone using extremity selector (shared pool)
  float bodySDF = distFromCenter - halfThickness;
  float finalSDF;

`).concat(p?`  // Base ratios, from baseRatioLookup
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

`).concat(b,`

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`);return m}function wu(n,a,e){var t=Pe(a.length)?!0:a.length>0,r=Pe(e.length)?!0:e.length>0;if(n.generateConstantData){var i=n.generateConstantData();return{data:i.data,attributes:i.attributes,verticesPerEdge:i.verticesPerEdge}}return Su(n.segments,t,r)}function ar(n){var a,e=ko(n),t=e.paths,r=e.extremities,i=e.layers,o=(a=n.antialias)!==null&&a!==void 0?a:!0,l=new Map,s=new Map,d=new Map,u=z(t),c;try{for(u.s();!(c=u.n()).done;){var p=c.value,f=z(r),h;try{for(f.s();!(h=f.n()).done;){var b=h.value,m=z(r),v;try{for(m.s();!(v=m.n()).done;){var g=v.value,y="".concat(p.name,":").concat(b.name,":").concat(g.name),x=wu(p,b,g);l.set(y,x.verticesPerEdge),s.set(y,x.data);var _=z(x.attributes),T;try{for(_.s();!(T=_.n()).done;){var R=T.value;d.has(R.name)||d.set(R.name,R)}}catch(K){_.e(K)}finally{_.f()}}}catch(K){m.e(K)}finally{m.f()}}}catch(K){f.e(K)}finally{f.f()}}}catch(K){u.e(K)}finally{u.f()}var S=Array.from(d.values()),A={};S.forEach(function(K,te){A[K.name]=te});var C=0,P="",w=z(l),I;try{for(w.s();!(I=w.n()).done;){var L=ne(I.value,2),k=L[0],N=L[1];N>C&&(C=N,P=k)}}catch(K){w.e(K)}finally{w.f()}var M=s.get(P)||[],F=P.split(":"),D=ne(F,1),G=D[0],H=t.find(function(K){return K.name===G}),U=[];H!=null&&H.generateConstantData?U=H.generateConstantData().attributes:U=[{name:"a_zone"},{name:"a_zoneT"},{name:"a_side"}];var $=M.map(function(K){var te=new Array(S.length).fill(0);return U.forEach(function(ue,_e){var Ce=A[ue.name];Ce!==void 0&&_e<K.length&&(te[Ce]=K[_e])}),te});return{vertexShader:Au(t,r,i,S),fragmentShader:Ru(t,r,i,o),uniforms:mu(t,r,i),attributes:Du(),verticesPerEdge:C,constantData:$,constantAttributes:S,vertexCountsPerCombination:l,constantDataPerCombination:s}}function Du(n,a,e){return[{name:"a_edgeIndex",size:1,type:hn},{name:"a_color",size:4,type:Xi,normalized:!0},{name:"a_id",size:4,type:Xi,normalized:!0},{name:"a_opacity",size:1,type:hn}]}var Lu=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,Fo=(function(){function n(a,e){Z(this,n),E(this,"uniformLocations",{});var t=e.paths,r=e.extremities,i=e.layers,o=e.nodeShapes,l=e.nodeLayers;this.gl=a,this.hasAttributeData=we([].concat(j(t),j(i))).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(Ot(o,l).offsets).length>0,this.vertexShader=ra(a,Eu(t,r,i,o,l)),this.fragmentShader=ia(a,Lu),this.program=oa(a,[this.vertexShader,this.fragmentShader]);var s=new Set;this.customUniforms=[];for(var d=0,u=[].concat(j(t),j(r));d<u.length;d++){var c=u[d],p=z(c.uniforms),f;try{for(p.s();!(f=p.n()).done;){var h=f.value;s.has(h.name)||(s.add(h.name),this.customUniforms.push(h))}}catch(y){p.e(y)}finally{p.f()}}var b=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_minEdgeThickness","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode","u_frameTextureWidth","u_frameTextureHeight"].concat(j(this.customUniforms.map(function(y){return y.name}))),m=z(b),v;try{for(m.s();!(v=m.n()).done;){var g=v.value;this.uniformLocations[g]=a.getUniformLocation(this.program,g)}}catch(y){m.e(y)}finally{m.f()}this.vao=a.createVertexArray()}return Q(n,[{key:"run",value:function(e,t,r,i,o){if(r!==0){var l=this.gl,s=this.uniformLocations;l.useProgram(this.program),l.bindVertexArray(this.vao),s.u_sizeRatio&&l.uniform1f(s.u_sizeRatio,e.sizeRatio),s.u_correctionRatio&&l.uniform1f(s.u_correctionRatio,e.correctionRatio),s.u_cameraAngle&&l.uniform1f(s.u_cameraAngle,e.cameraAngle),s.u_minEdgeThickness&&l.uniform1f(s.u_minEdgeThickness,e.minEdgeThickness),s.u_nodeDataTexture&&l.uniform1i(s.u_nodeDataTexture,e.nodeDataTextureUnit),s.u_nodeDataTextureWidth&&l.uniform1i(s.u_nodeDataTextureWidth,e.nodeDataTextureWidth),s.u_edgeDataTexture&&l.uniform1i(s.u_edgeDataTexture,e.edgeDataTextureUnit),s.u_edgeDataTextureWidth&&l.uniform1i(s.u_edgeDataTextureWidth,e.edgeDataTextureWidth),s.u_frameTextureWidth&&l.uniform1f(s.u_frameTextureWidth,t.getTextureWidth()),s.u_frameTextureHeight&&l.uniform1f(s.u_frameTextureHeight,t.getTextureHeight()),this.hasAttributeData&&i&&(i.bind(tt),s.u_edgeAttributeTexture&&l.uniform1i(s.u_edgeAttributeTexture,tt),s.u_edgeAttributeTextureWidth&&l.uniform1i(s.u_edgeAttributeTextureWidth,i.getTextureWidth()),s.u_edgeAttributeTexelsPerEdge&&l.uniform1i(s.u_edgeAttributeTexelsPerEdge,i.getTexelsPerItem())),this.hasNodeAttributeData&&o&&(o.bind(Je),s.u_layerAttributeTexture&&l.uniform1i(s.u_layerAttributeTexture,Je),s.u_layerAttributeTextureWidth&&l.uniform1i(s.u_layerAttributeTextureWidth,o.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&l.uniform1i(s.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var d=z(this.customUniforms),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;lr(l,this.uniformLocations[c.name],c)}}catch(p){d.e(p)}finally{d.f()}t.bindAsRenderTarget(),l.disable(l.BLEND),l.disable(l.DEPTH_TEST),l.drawArrays(l.POINTS,0,r),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindVertexArray(null)}}},{key:"kill",value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteVertexArray(this.vao)}}])})();function un(n,a,e,t,r,i){if(n.length===1)return"".concat(t," ").concat(a,"(int pathId, ").concat(r,`) {
  return path_`).concat(n[0].name,"_").concat(e,"(").concat(i,`);
}`);var o=n.map(function(l,s){return"    case ".concat(s,": return path_").concat(l.name,"_").concat(e,"(").concat(i,");")}).join(`
`);return"".concat(t," ").concat(a,"(int pathId, ").concat(r,`) {
  switch (pathId) {
`).concat(o,`
    default: return path_`).concat(n[0].name,"_").concat(e,"(").concat(i,`);
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
`;function ku(n,a){var e=de(n),t=de(a);return`
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
`;function Io(n){var a=n.paths,e=n.minVisibilityThreshold,t=n.fullVisibilityThreshold,r=a.some(function(l){return l.hasSharpCorners}),i=a.map(function(l){return"// --- Path: ".concat(l.name,` ---
`).concat(l.glsl,`

// Tangent/normal functions: analytical if provided, otherwise numerical
`).concat(l.analyticalTangentGlsl||Lo(l.name),`

// Auto-generated fallbacks for any missing path functions
`).concat(Co(l.name,l.glsl),`

// Corner skip helpers (for paths with sharp corners like step/taxi)
`).concat(l.cornerSkipGlsl||"",`
`)}).join(`
`),o=r?`// Corner function selectors (only some paths have sharp corners)
vec2 queryGetCornerTs(int pathId, vec2 source, vec2 target) {
  switch (pathId) {
`.concat(a.map(function(l,s){return l.hasSharpCorners?"    case ".concat(s,": return path_").concat(l.name,"_getCornerTs(source, target);"):"    case ".concat(s,": return vec2(-1.0, -1.0); // No corners for ").concat(l.name)}).join(`
`),`
    default: return vec2(-1.0, -1.0);
  }
}

vec2 queryGetCornerConcavity(int pathId, vec2 source, vec2 target, float perpOffset) {
  switch (pathId) {
`).concat(a.map(function(l,s){return l.hasSharpCorners?"    case ".concat(s,": return path_").concat(l.name,"_getCornerConcavity(source, target, perpOffset);"):"    case ".concat(s,": return vec2(0.0, 0.0); // No corners for ").concat(l.name)}).join(`
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

`).concat(un(a,"queryPathPosition","position","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(un(a,"queryPathTangent","tangent","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(un(a,"queryPathNormal","normal","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(un(a,"queryPathLength","length","float","vec2 source, vec2 target","source, target"),`

`).concat(un(a,"queryPathTAtDistance","t_at_distance","float","float dist, vec2 source, vec2 target","dist, source, target"),`

`).concat(o,`

// ============================================================================
// Shared helpers (body bounds, alpha ramp, perpendicular offset)
// ============================================================================

`).concat(Cu,`
`).concat(ku(e,t),`
`).concat(Pu,`
`)}var Fu=Me.fontSize,Iu=new Map,No=24,Ki=(No+1)*2;function Nu(n){var a=n.paths,e=n.fontSizeMode,t=n.headLengthRatio,r=n.tailLengthRatio,i=n.minVisibilityThreshold,o=n.fullVisibilityThreshold,l=e==="scaled",s=Ge(),d=we([].concat(j(a),[s])),u=vn(d),c=`#version 300 es

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
const int RIBBON_SEGMENTS = `).concat(No,`;

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
`).concat(u.vertexVaryingDeclarations.replace(/out /g,""),`

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
`).concat(Io({paths:a,minVisibilityThreshold:i,fullVisibilityThreshold:o}),`

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
`;function Go(n,a,e,t){var r=t.shaderConfig,i=r.paths,o=r.fontSizeMode;if(i.length===0)throw new Error("createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path");var l=Ge(),s=we([].concat(j(i),[l])),d=ca([].concat(j(i),[l]),s),u=Nu(r),c=(function(p){function f(h,b,m){var v;return Z(this,f),v=se(this,f,[h,b,m]),E(v,"totalCount",0),E(v,"bufferCapacity",0),E(v,"edgeAttributeTexture",null),v.edgeAttributeTexture=new ua(h,s),v.packedAttributeData=new Float32Array(s.floatsPerItem),v}return le(f,p),Q(f,[{key:"getDefinition",value:function(){for(var b=WebGL2RenderingContext,m=b.FLOAT,v=b.UNSIGNED_BYTE,g=b.TRIANGLE_STRIP,y=[],x=0;x<Ki;x++)y.push([x]);var _=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_resolution","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth"];return o==="scaled"&&_.push("u_zoomSizeRatio"),s.floatsPerItem>0&&_.push("u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"),{VERTICES:Ki,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:Gu,METHOD:g,UNIFORMS:_,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:m},{name:"a_edgeAttrIndex",size:1,type:m},{name:"a_baseFontSize",size:1,type:m},{name:"a_totalTextWidth",size:1,type:m},{name:"a_positionMode",size:1,type:m},{name:"a_margin",size:1,type:m},{name:"a_padding",size:1,type:m},{name:"a_color",size:4,type:v,normalized:!0},{name:"a_id",size:4,type:v,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_vertexIndex",size:1,type:m}],CONSTANT_DATA:y}}},{key:"processEdgeLabelBackground",value:function(b,m,v){var g=0;if(this.edgeAttributeTexture&&s.floatsPerItem>0){g=this.edgeAttributeTexture.allocate(m);var y=this.packedAttributeData;ha(d,v.edgeAttributes,y,"",Iu,0),this.edgeAttributeTexture.updateAllAttributes(m,y)}var x=this.floats,_=this.ints,T=b*this.STRIDE;x[T++]=v.edgeIndex,x[T++]=g,x[T++]=v.baseFontSize,x[T++]=v.totalTextWidth,x[T++]=v.positionMode,x[T++]=v.margin,x[T++]=v.padding,x[T++]=v.color,_[T++]=v.id}},{key:"setUniforms",value:function(b,m){var v=m.gl,g=m.uniformLocations;if(v.uniformMatrix3fv(g.u_matrix,!1,b.matrix),v.uniform1f(g.u_sizeRatio,b.sizeRatio),v.uniform1f(g.u_correctionRatio,b.correctionRatio),v.uniform1f(g.u_pixelRatio,b.pixelRatio),v.uniform1f(g.u_cameraAngle,b.cameraAngle),v.uniform2f(g.u_resolution,b.width,b.height),g.u_nodeDataTexture!==void 0&&v.uniform1i(g.u_nodeDataTexture,b.nodeDataTextureUnit),g.u_nodeDataTextureWidth!==void 0&&v.uniform1i(g.u_nodeDataTextureWidth,b.nodeDataTextureWidth),g.u_edgeDataTexture!==void 0&&v.uniform1i(g.u_edgeDataTexture,b.edgeDataTextureUnit),g.u_edgeDataTextureWidth!==void 0&&v.uniform1i(g.u_edgeDataTextureWidth,b.edgeDataTextureWidth),g.u_edgeFrameTexture!==void 0&&v.uniform1i(g.u_edgeFrameTexture,b.edgeFrameTextureUnit),g.u_edgeFrameTextureWidth!==void 0&&v.uniform1i(g.u_edgeFrameTextureWidth,b.edgeFrameTextureWidth),o==="scaled"&&g.u_zoomSizeRatio!==void 0){var y=this.renderer.getSetting("zoomToSizeRatioFunction");v.uniform1f(g.u_zoomSizeRatio,1/y(b.zoomRatio))}this.edgeAttributeTexture&&s.floatsPerItem>0&&g.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(tt),v.uniform1i(g.u_edgeAttributeTexture,tt),v.uniform1i(g.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),v.uniform1i(g.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}},{key:"renderProgram",value:function(b,m){this.edgeAttributeTexture&&s.floatsPerItem>0&&this.edgeAttributeTexture.upload(),he(f,"renderProgram",this,3)([b,m])}},{key:"kill",value:function(){this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),he(f,"kill",this,3)([])}},{key:"drawWebGL",value:function(b,m){var v=m.gl;this.totalCount!==0&&v.drawArraysInstanced(v.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(b){this.totalCount=b,b>this.bufferCapacity&&(this.bufferCapacity=Math.max(b,Math.ceil(this.bufferCapacity*1.5)||10),he(f,"reallocate",this,3)([this.bufferCapacity]))}}])})(at);return new c(n,a,e)}function Mo(n){var a,e,t,r,i;return{paths:n.paths,headLengthRatio:(a=n.headLengthRatio)!==null&&a!==void 0?a:0,tailLengthRatio:(e=n.tailLengthRatio)!==null&&e!==void 0?e:0,fontSizeMode:(t=n.fontSizeMode)!==null&&t!==void 0?t:"fixed",minVisibilityThreshold:(r=n.minVisibilityThreshold)!==null&&r!==void 0?r:.7,fullVisibilityThreshold:(i=n.fullVisibilityThreshold)!==null&&i!==void 0?i:.8}}var Mu=Me.fontSize,zu=17/64;function Ou(n){var a=n.paths,e=n.hasBorder,t=e===void 0?!1:e,r=n.fontSizeMode,i=r===void 0?"fixed":r,o=n.minVisibilityThreshold,l=o===void 0?.5:o,s=n.fullVisibilityThreshold,d=s===void 0?.6:s,u=i==="scaled",c=a.some(function(m){return m.hasSharpCorners}),p=Ge(),f=we([].concat(j(a),[p])),h=vn(f),b=`#version 300 es

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
`).concat(Io({paths:a,minVisibilityThreshold:l,fullVisibilityThreshold:d}),`

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
`);return b}function Bu(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.hasBorder,e=a===void 0?!1:a,t=`#version 300 es
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
`);return t}function Wu(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"fixed",t=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_sdfBufferPixels","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"];e==="scaled"&&t.push("u_zoomSizeRatio"),a&&t.push("u_borderWidth");var r=z(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,l=z(o.uniforms),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;t.includes(d.name)||t.push(d.name)}}catch(u){l.e(u)}finally{l.f()}}}catch(u){r.e(u)}finally{r.f()}return t}function zo(n){var a=n.hasBorder,e=a===void 0?!1:a,t=n.fontSizeMode,r=t===void 0?"fixed":t;return{vertexShader:Ou(n),fragmentShader:Bu({hasBorder:e}),uniforms:Wu(n.paths,e,r)}}var Uu=new Map;function Hu(n){switch(n){case"over":return 0;case"above":return 1;case"below":return 2;case"auto":return 3;default:return 0}}function Oo(n,a,e,t){var r=t.color,i=t.margin,o=t.textBorder,l=Mo(t),s=l.paths,d=l.fontSizeMode,u=l.minVisibilityThreshold,c=l.fullVisibilityThreshold,p=!!o,f=zo({paths:s,hasBorder:p,fontSizeMode:d,minVisibilityThreshold:u,fullVisibilityThreshold:c}),h=(function(b){function m(v,g,y){var x;Z(this,m),x=se(this,m,[v,g,y]),E(x,"atlasTexture",null),E(x,"atlasNeedsUpdate",!1),E(x,"labelGlyphCache",new Map),E(x,"edgeAttributeTexture",null);var _=Ge();if(x.attributeLayout=we([].concat(j(s),[_])),x.attrDescriptors=ca([].concat(j(s),[_]),x.attributeLayout),x.edgeAttributeTexture=new ua(v,x.attributeLayout),x.packedAttributeData=new Float32Array(x.attributeLayout.floatsPerItem),x.atlasManager=new et,x.gamma=.025,x.sdfBuffer=Me.cutoff,x.atlasTexture=v.createTexture(),!x.atlasTexture)throw new Error("EdgeLabelProgram: failed to create atlas texture");v.bindTexture(v.TEXTURE_2D,x.atlasTexture),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.LINEAR),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.LINEAR),v.bindTexture(v.TEXTURE_2D,null),x.atlasManager.on(et.ATLAS_UPDATED_EVENT,function(){x.atlasNeedsUpdate=!0,setTimeout(function(){return x.renderer.refresh()},0)});var T={family:"sans-serif",weight:"normal",style:"normal"};return x.defaultFontKey=x.atlasManager.registerFont(T),x}return le(m,b),Q(m,[{key:"getDefinition",value:function(){var g=WebGL2RenderingContext,y=g.FLOAT,x=g.UNSIGNED_BYTE,_=g.TRIANGLE_STRIP,T=new Set,R=[],S=z(s),A;try{for(S.s();!(A=S.n()).done;){var C=A.value,P=z(C.attributes),w;try{for(P.s();!(w=P.n()).done;){var I=w.value,L=I.name.startsWith("a_")?I.name:"a_".concat(I.name);T.has(L)||(T.add(L),R.push({name:L,size:I.size,type:I.type}))}}catch(k){P.e(k)}finally{P.f()}}}catch(k){S.e(k)}finally{S.f()}return{VERTICES:4,VERTEX_SHADER_SOURCE:f.vertexShader,FRAGMENT_SHADER_SOURCE:f.fragmentShader,METHOD:_,UNIFORMS:f.uniforms,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:y},{name:"a_edgeAttrIndex",size:1,type:y},{name:"a_baseFontSize",size:1,type:y},{name:"a_charMetrics",size:4,type:y},{name:"a_charDims",size:4,type:y},{name:"a_texCoords",size:4,type:y},{name:"a_labelParams",size:2,type:y},{name:"a_color",size:4,type:x,normalized:!0}].concat(j(p?[{name:"a_borderColor",size:4,type:x,normalized:!0}]:[]),j(R.filter(function(k){return!["a_curvature","curvature"].includes(k.name)}))),CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:y}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(g,y){if(y.hidden||!y.text){this.labelGlyphCache.delete(g);return}var x=y.text,_=y.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(x,_);var T=[],R=[],S=0,A=z(x),C;try{for(A.s();!(C=A.n()).done;){var P=C.value,w=P.codePointAt(0);if(w===void 0){T.push(void 0),R.push(S);continue}var I=this.atlasManager.getGlyph(w,_);T.push(I),R.push(S),I&&(S+=I.advance)}}catch(L){A.e(L)}finally{A.f()}this.labelGlyphCache.set(g,{glyphs:T,xOffsets:R,totalWidth:S})}},{key:"processCharacter",value:function(g,y,x,_){var T,R,S,A=this.floats,C=this.STRIDE,P=g*C,w=this.labelGlyphCache.get(y.parentKey);if(!w||!w.glyphs[_]){for(var I=0;I<C;I++)A[P+I]=0;return}var L=w.glyphs[_],k=w.xOffsets[_],N=m.labelColor,M=N&&J(N)==="object"&&"color"in N&&N.color?N.color:y.color,F=Ae(M),D=P;A[D++]=y.edgeIndex,A[D++]=(T=(R=this.edgeAttributeTexture)===null||R===void 0?void 0:R.getIndex(y.parentKey))!==null&&T!==void 0?T:0,A[D++]=y.size,A[D++]=k,A[D++]=L.advance,A[D++]=w.totalWidth,A[D++]=Hu(y.position),A[D++]=L.atlasWidth,A[D++]=L.atlasHeight,A[D++]=L.bearingX,A[D++]=-L.bearingY,A[D++]=L.atlasX,A[D++]=L.atlasY,A[D++]=L.atlasWidth,A[D++]=L.atlasHeight;var G=(S=m.labelMargin)!==null&&S!==void 0?S:y.margin;if(A[D++]=G,A[D++]=0,A[D++]=F,p&&o){var H;typeof o.color=="string"?H=o.color:H=o.color.color||"#ffffff",A[D++]=Ae(H)}var U=new Set,$=z(s),K;try{for($.s();!(K=$.n()).done;){var te=K.value,ue=z(te.attributes),_e;try{for(ue.s();!(_e=ue.n()).done;){var Ce=_e.value,Kt=Ce.name.startsWith("a_")?Ce.name.slice(2):Ce.name;if(Kt!=="curvature"&&!U.has(Kt)){U.add(Kt);for(var An=0;An<Ce.size;An++)A[D++]=0}}}catch(_t){ue.e(_t)}finally{ue.f()}}}catch(_t){$.e(_t)}finally{$.f()}}},{key:"processEdgeLabel",value:function(g,y,x){if(this.prepareLabelGlyphs(g,x),this.edgeAttributeTexture&&!x.hidden&&x.text){this.edgeAttributeTexture.allocate(g);var _=this.packedAttributeData;ha(this.attrDescriptors,x.edgeAttributes,_,"",Uu,0),this.edgeAttributeTexture.updateAllAttributes(g,_)}return he(m,"processLabel",this,3)([g,y,x])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var g=this.normalProgram.gl,y=this.atlasManager.getTextures();if(y.length!==0){var x=y[0];g.bindTexture(g.TEXTURE_2D,this.atlasTexture),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,x.width,x.height,0,g.RGBA,g.UNSIGNED_BYTE,x.data),g.bindTexture(g.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(g,y){var x=y.gl,_=y.uniformLocations,T=this.atlasManager.getTextures(),R=T.length>0?[T[0].width,T[0].height]:[1,1];if(x.uniformMatrix3fv(_.u_matrix,!1,g.matrix),x.uniform1f(_.u_sizeRatio,g.sizeRatio),x.uniform1f(_.u_correctionRatio,g.correctionRatio),x.uniform1f(_.u_pixelRatio,g.pixelRatio),x.uniform1f(_.u_cameraAngle,g.cameraAngle),x.uniform1f(_.u_sdfBufferPixels,Me.buffer),x.uniform2f(_.u_resolution,g.width,g.height),x.uniform2f(_.u_atlasSize,R[0],R[1]),x.uniform1f(_.u_gamma,this.gamma),x.uniform1f(_.u_sdfBuffer,this.sdfBuffer),x.activeTexture(x.TEXTURE0),x.bindTexture(x.TEXTURE_2D,this.atlasTexture),x.uniform1i(_.u_atlas,0),_.u_nodeDataTexture!==void 0&&x.uniform1i(_.u_nodeDataTexture,g.nodeDataTextureUnit),_.u_nodeDataTextureWidth!==void 0&&x.uniform1i(_.u_nodeDataTextureWidth,g.nodeDataTextureWidth),_.u_edgeDataTexture!==void 0&&x.uniform1i(_.u_edgeDataTexture,g.edgeDataTextureUnit),_.u_edgeDataTextureWidth!==void 0&&x.uniform1i(_.u_edgeDataTextureWidth,g.edgeDataTextureWidth),_.u_edgeFrameTexture!==void 0&&x.uniform1i(_.u_edgeFrameTexture,g.edgeFrameTextureUnit),_.u_edgeFrameTextureWidth!==void 0&&x.uniform1i(_.u_edgeFrameTextureWidth,g.edgeFrameTextureWidth),p&&o&&_.u_borderWidth!==void 0){var S=o.width/Me.buffer*this.sdfBuffer;x.uniform1f(_.u_borderWidth,S)}if(this.edgeAttributeTexture&&_.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(tt),x.uniform1i(_.u_edgeAttributeTexture,tt),x.uniform1i(_.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),x.uniform1i(_.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),d==="scaled"&&_.u_zoomSizeRatio!==void 0){var A=this.renderer.getSetting("zoomToSizeRatioFunction"),C=1/A(g.zoomRatio);x.uniform1f(_.u_zoomSizeRatio,C)}}},{key:"renderProgram",value:function(g,y){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),he(m,"renderProgram",this,3)([g,y])}},{key:"registerFont",value:function(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:g,weight:y,style:x})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"ensureGlyphsReady",value:function(g,y){var x=y||this.defaultFontKey,_=z(g),T;try{for(_.s();!(T=_.n()).done;){var R=T.value;this.atlasManager.ensureGlyphs(R,x)}}catch(S){_.e(S)}finally{_.f()}this.atlasManager.flush()}},{key:"measureLabelAtlasWidth",value:function(g,y){var x=y||this.defaultFontKey;this.atlasManager.ensureGlyphs(g,x),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var _=0,T=z(g),R;try{for(T.s();!(R=T.n()).done;){var S=R.value,A=S.codePointAt(0);if(A!==void 0){var C=this.atlasManager.getGlyph(A,x);C&&(_+=C.advance)}}}catch(P){T.e(P)}finally{T.f()}return _}},{key:"measureLabel",value:function(g,y,x){var _=this.measureLabelAtlasWidth(g,x),T=y/Me.fontSize;return{width:_*T,height:y,textHeight:y}}},{key:"kill",value:function(){var g=this.normalProgram.gl;this.atlasTexture&&(g.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),he(m,"kill",this,3)([])}}])})(dr);return E(h,"labelColor",r),E(h,"labelMargin",i),new h(n,a,e)}function $u(){var n=`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`;return{name:"none",glsl:n,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function gr(n,a,e,t,r,i,o){var l,s,d=ko(t),u=d.paths,c=d.layers,p=d.defaultHead,f=d.defaultTail,h=[$u()].concat(j(d.extremities)),b={},m={};u.forEach(function(I,L){return b[I.name]=L}),h.forEach(function(I,L){return m[I.name]=L});var v=(l=m[p])!==null&&l!==void 0?l:0,g=(s=m[f])!==null&&s!==void 0?s:0,y=null,x=we([].concat(j(u),j(c))),_=(function(I){function L(k,N,M){var F;Z(this,L),y||(y=ar({paths:u,extremities:h,layers:c,antialias:r})),F=se(this,L,[k,N,M]),E(F,"layerLifecycles",new Map),E(F,"needsShaderRegeneration",!1),E(F,"edgeAttributeTexture",null),E(F,"layout",x),E(F,"attrDescriptors",[]),E(F,"lifecycleIndexOffset",u.length),F._pickingBuffer=N,F.edgeAttributeTexture=new ua(k,F.layout),F.packedAttributeData=new Float32Array(F.layout.floatsPerItem),c.forEach(function(G,H){if(G.lifecycle){var U={gl:k,renderer:{refresh:function(){return M.refresh()}},getUniformLocation:function(K){return k.getUniformLocation(F.normalProgram.program,K)},requestShaderRegeneration:function(){F.needsShaderRegeneration=!0},requestRefresh:function(){M.refresh()}};F.layerLifecycles.set(H,G.lifecycle(U))}}),F.layerLifecycles.forEach(function(G){var H;return(H=G.init)===null||H===void 0?void 0:H.call(G)});var D=new Map;return F.layerLifecycles.forEach(function(G,H){G.getAttributeData&&D.set(u.length+H,G)}),F.attrDescriptors=ca([].concat(j(u),j(c)),F.layout,D),F}return le(L,I),Q(L,[{key:"getAttributeTexture",value:function(){return this.edgeAttributeTexture}},{key:"resolveEdgeIds",value:function(N,M,F){var D=N,G=0,H=v,U=g,$=M?D.selfLoopPath:F&&D.parallelPath?D.parallelPath:D.path;$&&b[$]!==void 0&&(G=b[$]),D.head&&D.head!=="none"&&m[D.head]!==void 0&&(H=m[D.head]),D.tail&&D.tail!=="none"&&m[D.tail]!==void 0&&(U=m[D.tail]);var K=h[H],te=h[U];return{pathId:G,headId:H,tailId:U,headLengthRatio:Pe(K.length)?0:K.length,tailLengthRatio:Pe(te.length)?0:te.length}}},{key:"getDefinition",value:function(){var N=WebGL2RenderingContext,M=N.TRIANGLE_STRIP,F=M,D=y;return{VERTICES:D.verticesPerEdge,VERTEX_SHADER_SOURCE:D.vertexShader,FRAGMENT_SHADER_SOURCE:D.fragmentShader,METHOD:F,UNIFORMS:D.uniforms,ATTRIBUTES:D.attributes,CONSTANT_ATTRIBUTES:D.constantAttributes,CONSTANT_DATA:D.constantData}}},{key:"maybeRegenerateShaders",value:function(){var N=this;if(this.needsShaderRegeneration){this.needsShaderRegeneration=!1;var M=c.map(function(K,te){var ue=N.layerLifecycles.get(te);return ue!=null&&ue.regenerate?ue.regenerate():K});y=ar({paths:u,extremities:h,layers:M,antialias:this.renderer.getSetting("antialiasEdges")});var F=this.normalProgram.gl,D=this.normalProgram,G=D.program,H=D.buffer,U=D.vertexShader,$=D.fragmentShader;F.deleteProgram(G),F.deleteBuffer(H),F.deleteShader(U),F.deleteShader($),this.normalProgram=this.getProgramInfo("normal",F,y.vertexShader,y.fragmentShader,this._pickingBuffer)}}},{key:"process",value:function(N,M,F,D,G,H){var U=M*this.STRIDE;if(G.visibility==="hidden"||F.visibility==="hidden"||D.visibility==="hidden"){for(var $=U+this.STRIDE;U<$;U++)this.floats[U]=0;this.floats[M*this.STRIDE]=ho;return}this.processVisibleItem(Ct(N),U,F,D,G,H)}},{key:"processVisibleItem",value:function(N,M,F,D,G,H){var U,$=this.floats,K=this.ints;$[M++]=H,$[M++]=Ae(G.color),K[M++]=N,$[M++]=(U=G.opacity)!==null&&U!==void 0?U:1;var te=this.packedAttributeData;ha(this.attrDescriptors,G,te,G.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(H,te)}},{key:"setUniforms",value:function(N,M){var F=this,D=M.gl,G=M.uniformLocations;G.u_matrix&&D.uniformMatrix3fv(G.u_matrix,!1,N.matrix),G.u_sizeRatio&&D.uniform1f(G.u_sizeRatio,N.sizeRatio),G.u_correctionRatio&&D.uniform1f(G.u_correctionRatio,N.correctionRatio),G.u_zoomRatio&&D.uniform1f(G.u_zoomRatio,N.zoomRatio),G.u_pixelRatio&&D.uniform1f(G.u_pixelRatio,N.pixelRatio),G.u_cameraAngle&&D.uniform1f(G.u_cameraAngle,N.cameraAngle),G.u_feather&&D.uniform1f(G.u_feather,N.antiAliasingFeather),G.u_minEdgeThickness&&D.uniform1f(G.u_minEdgeThickness,N.minEdgeThickness),G.u_pickingPadding&&D.uniform1f(G.u_pickingPadding,N.edgePickingPadding),G.u_nodeDataTexture&&D.uniform1i(G.u_nodeDataTexture,N.nodeDataTextureUnit),G.u_nodeDataTextureWidth&&D.uniform1i(G.u_nodeDataTextureWidth,N.nodeDataTextureWidth),G.u_edgeDataTexture&&D.uniform1i(G.u_edgeDataTexture,N.edgeDataTextureUnit),G.u_edgeDataTextureWidth&&D.uniform1i(G.u_edgeDataTextureWidth,N.edgeDataTextureWidth),G.u_edgeFrameTexture&&D.uniform1i(G.u_edgeFrameTexture,N.edgeFrameTextureUnit),G.u_edgeFrameTextureWidth&&D.uniform1i(G.u_edgeFrameTextureWidth,N.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(tt),G.u_edgeAttributeTexture&&D.uniform1i(G.u_edgeAttributeTexture,tt),G.u_edgeAttributeTextureWidth&&D.uniform1i(G.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),G.u_edgeAttributeTexelsPerEdge&&D.uniform1i(G.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));var H=new Set;u.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),F.setTypedUniform($,M))})}),h.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),F.setTypedUniform($,M))})}),c.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),F.setTypedUniform($,M))})})}},{key:"render",value:function(N,M,F){this.maybeRegenerateShaders(),he(L,"render",this,3)([N,M,F])}},{key:"renderProgram",value:function(N,M){this.layerLifecycles.forEach(function(F){var D;return(D=F.beforeRender)===null||D===void 0?void 0:D.call(F)}),he(L,"renderProgram",this,3)([N,M])}},{key:"uploadAttributeTexture",value:function(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(N){var M;return(M=N.kill)===null||M===void 0?void 0:M.call(N)}),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),he(L,"kill",this,3)([])}}])})(at),T=h[v],R=h[g],S=O({paths:u,headLengthRatio:Pe(T.length)?0:T.length,tailLengthRatio:Pe(R.length)?0:R.length},t.label),A=Mo(S),C=Oo(n,null,e,S),P=Go(n,a,e,{shaderConfig:A}),w=new Fo(n,{paths:u,extremities:h,layers:c,nodeShapes:i,nodeLayers:o});return{edgeProgram:new _(n,null,e),labelProgram:C,labelBackgroundProgram:P,framePass:w}}function Vu(n){return J(n)==="object"&&"uniforms"in n&&Array.isArray(n.uniforms)}function ju(n){return J(n)==="object"&&"uniforms"in n&&"attributes"in n&&"glsl"in n}function qu(n){return J(n)==="object"&&"uniforms"in n&&"attributes"in n&&"segments"in n}function Xu(n){return J(n)==="object"&&"uniforms"in n&&"attributes"in n&&"length"in n}function Yu(n){return J(n)==="object"&&"uniforms"in n&&"attributes"in n&&"glsl"in n}function Ku(n){return J(n)==="object"&&"glsl"in n&&"name"in n&&!("uniforms"in n)}function Zu(n){return J(n)==="object"&&"glsl"in n&&"name"in n&&!("uniforms"in n)}function Qu(n){return J(n)==="object"&&"glsl"in n&&"name"in n&&!("uniforms"in n)}function Ju(n){if(Vu(n))return n;if(Ku(n))return{name:n.name,glsl:n.glsl,inradiusFactor:n.inradiusFactor,uniforms:[]};throw new Error("Invalid node shape specification: ".concat(JSON.stringify(n)))}function ec(n){if(ju(n))return n;if(Ei(n))return{name:n.name,glsl:n.glsl,uniforms:[],attributes:[]};throw new Error("Invalid node layer specification: ".concat(JSON.stringify(n)))}function tc(n){if(qu(n))return n;if(Zu(n))return{name:n.name,glsl:n.glsl,segments:n.segments,uniforms:[],attributes:[]};throw new Error("Invalid edge path specification: ".concat(JSON.stringify(n)))}function nc(n){if(Yu(n))return n;if(Si(n))return{name:n.name,glsl:n.glsl,uniforms:[],attributes:[]};throw new Error("Invalid edge layer specification: ".concat(JSON.stringify(n)))}function ac(n){if(Xu(n))return n;if(Qu(n))return{name:n.name,glsl:n.glsl,length:n.length,widthFactor:n.widthFactor,margin:0,uniforms:[],attributes:[]};throw new Error("Invalid edge extremity specification: ".concat(JSON.stringify(n)))}function Bo(n){var a,e,t=(a=n?.shapes)!==null&&a!==void 0?a:on.shapes,r=(e=n?.layers)!==null&&e!==void 0?e:on.layers,i=t.map(Ju),o=r.map(ec);if(i.length===0)throw new Error("At least one node shape must be specified.");if(o.length===0)throw new Error("At least one node layer must be specified.");return{shapes:i,layers:o}}function rc(n){var a,e,t,r=(a=n?.paths)!==null&&a!==void 0?a:kt.paths,i=(e=n?.extremities)!==null&&e!==void 0?e:kt.extremities,o=(t=n?.layers)!==null&&t!==void 0?t:kt.layers,l=r.map(tc),s=i.map(ac).filter(function(u){return u!==null}),d=o.map(nc);if(l.length===0)throw new Error("At least one edge path must be specified.");if(d.length===0)throw new Error("At least one edge layer must be specified.");return{paths:l,extremities:s,layers:d}}function Wo(n,a){var e={},t=z(n),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;i.variables&&Object.assign(e,i.variables)}}catch(o){t.e(o)}finally{t.f()}return Object.assign(e,a||{}),e}function Uo(n,a,e,t,r){var i=Bo(t),o=i.shapes,l=i.layers,s=Wo(o,t?.variables),d=cr(n,a,e,{shapes:o,layers:l,label:t?.label,backdrop:t?.backdrop,labelAttachments:t?.labelAttachments},r);return O(O({},d),{},{variables:s})}function Ho(n,a,e,t,r,i){var o=rc(t),l=o.paths,s=o.extremities,d=o.layers,u=Bo(i),c=u.shapes,p=u.layers,f=Wo(l,t?.variables),h=gr(n,a,e,{paths:l,extremities:s,layers:d,defaultHead:t?.defaultHead,defaultTail:t?.defaultTail,label:t?.label},r,c,p);return O(O({},h),{},{variables:f,paths:l})}var ic=2;function $o(n,a,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ic,r=a.canvas,i=r.width,o=r.height,l=e.x,s=e.y,d=e.rowHeight,u=e.maxRowWidth,c={},p=[],f=z(n),h;try{for(f.s();!(h=f.n()).done;){var b=h.value,m=b.width+t,v=b.height+t;if(m>i||v>o||l+m>i&&s+d+v>o){p.push(b);continue}l+m>i&&(u=Math.max(u,l),l=0,s+=d,d=v),b.draw(a,l,s),c[b.key]={x:l,y:s,width:b.width,height:b.height},l+=m,d=Math.max(d,v)}}catch(g){f.e(g)}finally{f.f()}return u=Math.max(u,l),{atlas:c,cursor:{x:l,y:s,rowHeight:d,maxRowWidth:u},remaining:p}}function ve(n,a,e,t){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}ve=function(i,o,l,s){function d(u,c){ve(i,u,function(p){return this._invoke(u,c,p)})}o?r?r(i,o,{value:l,enumerable:!s,configurable:!s,writable:!s}):i[o]=l:(d("next",0),d("throw",1),d("return",2))},ve(n,a,e,t)}function me(){var n,a,e=typeof Symbol=="function"?Symbol:{},t=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag";function i(f,h,b,m){var v=h&&h.prototype instanceof l?h:l,g=Object.create(v.prototype);return ve(g,"_invoke",(function(y,x,_){var T,R,S,A=0,C=_||[],P=!1,w={p:0,n:0,v:n,a:I,f:I.bind(n,4),d:function(L,k){return T=L,R=0,S=n,w.n=k,o}};function I(L,k){for(R=L,S=k,a=0;!P&&A&&!N&&a<C.length;a++){var N,M=C[a],F=w.p,D=M[2];L>3?(N=D===k)&&(S=M[(R=M[4])?5:(R=3,3)],M[4]=M[5]=n):M[0]<=F&&((N=L<2&&F<M[1])?(R=0,w.v=k,w.n=M[1]):F<D&&(N=L<3||M[0]>k||k>D)&&(M[4]=L,M[5]=k,w.n=D,R=0))}if(N||L>1)return o;throw P=!0,k}return function(L,k,N){if(A>1)throw TypeError("Generator is already running");for(P&&k===1&&I(k,N),R=k,S=N;(a=R<2?n:S)||!P;){T||(R?R<3?(R>1&&(w.n=-1),I(R,S)):w.n=S:w.v=S);try{if(A=2,T){if(R||(L="next"),a=T[L]){if(!(a=a.call(T,S)))throw TypeError("iterator result is not an object");if(!a.done)return a;S=a.value,R<2&&(R=0)}else R===1&&(a=T.return)&&a.call(T),R<2&&(S=TypeError("The iterator does not provide a '"+L+"' method"),R=1);T=n}else if((a=(P=w.n<0)?S:y.call(x,w))!==o)break}catch(M){T=n,R=1,S=M}finally{A=1}}return{value:a,done:P}}})(f,b,m),!0),g}var o={};function l(){}function s(){}function d(){}a=Object.getPrototypeOf;var u=[][t]?a(a([][t]())):(ve(a={},t,function(){return this}),a),c=d.prototype=l.prototype=Object.create(u);function p(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,d):(f.__proto__=d,ve(f,r,"GeneratorFunction")),f.prototype=Object.create(c),f}return s.prototype=d,ve(c,"constructor",d),ve(d,"constructor",s),s.displayName="GeneratorFunction",ve(d,r,"GeneratorFunction"),ve(c),ve(c,r,"Generator"),ve(c,t,function(){return this}),ve(c,"toString",function(){return"[object Generator]"}),(me=function(){return{w:i,m:p}})()}function Vo(n,a,e,t,r,i,o){try{var l=n[i](o),s=l.value}catch(d){return void e(d)}l.done?a(s):Promise.resolve(s).then(t,r)}function Wt(n){return function(){var a=this,e=arguments;return new Promise(function(t,r){var i=n.apply(a,e);function o(s){Vo(i,t,r,o,l,"next",s)}function l(s){Vo(i,t,r,o,l,"throw",s)}o(void 0)})}}var ga=new Map,jo=!1;function oc(n){return new Promise(function(a,e){var t=new FileReader;t.onload=function(){return a(t.result)},t.onerror=e,t.readAsDataURL(n)})}function sc(n){if(!ga.has(n)){var a=fetch(n).then(function(e){return e.blob()}).then(oc).catch(function(){return ga.delete(n),null});ga.set(n,a)}return ga.get(n)}function lc(n){return pr.apply(this,arguments)}function pr(){return pr=Wt(me().m(function n(a){var e,t,r;return me().w(function(i){for(;;)switch(i.n){case 0:return e=document.createElement("div"),e.innerHTML=a,t=Array.from(e.querySelectorAll("img[src]")),r=t.filter(function(o){return!o.getAttribute("src").startsWith("data:")}),i.n=1,Promise.all(r.map((function(){var o=Wt(me().m(function l(s){var d;return me().w(function(u){for(;;)switch(u.n){case 0:return u.n=1,sc(s.getAttribute("src"));case 1:d=u.v,d&&s.setAttribute("src",d);case 2:return u.a(2)}},l)}));return function(l){return o.apply(this,arguments)}})()));case 1:return i.a(2,e.innerHTML)}},n)})),pr.apply(this,arguments)}function qo(n){return vr.apply(this,arguments)}function vr(){return vr=Wt(me().m(function n(a){var e,t,r,i,o,l,s,d,u,c,p,f,h,b=arguments;return me().w(function(m){for(;;)switch(m.n){case 0:if(e=b.length>1&&b[1]!==void 0?b[1]:1,t=a instanceof SVGElement?new XMLSerializer().serializeToString(a):a,r=new DOMParser,i=r.parseFromString(t,"image/svg+xml"),o=i.querySelector("svg"),o){m.n=1;break}return m.a(2,null);case 1:if(l=parseFloat(o.getAttribute("width")||""),s=parseFloat(o.getAttribute("height")||""),(!(l>0)||!(s>0))&&(d=o.getAttribute("viewBox"),d&&(u=d.trim().split(/[\s,]+/),l=parseFloat(u[2]),s=parseFloat(u[3]))),!(!(l>0)||!(s>0))){m.n=2;break}return console.warn("Sigma: SVG label attachment has no parseable dimensions \u2014 skipped."),m.a(2,null);case 2:return c=Math.ceil(l*e),p=Math.ceil(s*e),f=new Blob([t],{type:"image/svg+xml"}),h=URL.createObjectURL(f),m.a(2,new Promise(function(v){var g=new Image;g.onload=function(){var y=document.createElement("canvas");y.width=c,y.height=p,y.getContext("2d").drawImage(g,0,0,c,p),URL.revokeObjectURL(h);try{y.getContext("2d").getImageData(0,0,1,1)}catch(x){if(x instanceof DOMException&&x.name==="SecurityError"){jo||(jo=!0,console.warn('Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.')),v(null);return}throw x}v(y)},g.onerror=function(){URL.revokeObjectURL(h),v(null)},g.src=h}))}},n)})),vr.apply(this,arguments)}function dc(n,a){var e=document.createElement("div");e.style.cssText="position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content",e.innerHTML=(a?"<style>".concat(a,"</style>"):"")+n,document.body.appendChild(e);var t=e.getBoundingClientRect(),r=t.width,i=t.height;return document.body.removeChild(e),{width:Math.ceil(r),height:Math.ceil(i)}}function uc(n,a,e,t){return mr.apply(this,arguments)}function mr(){return mr=Wt(me().m(function n(a,e,t,r){var i,o,l,s,d,u,c,p,f=arguments;return me().w(function(h){for(;;)switch(h.n){case 0:return i=f.length>4&&f[4]!==void 0?f[4]:1,o=a instanceof HTMLElement?a.outerHTML:a,h.n=1,lc(o);case 1:return l=h.v,(t==null||r==null)&&(s=dc(l,e),t=t??s.width,r=r??s.height),d=Math.ceil(t*i),u=Math.ceil(r*i),c=e?"<style>".concat(e,"</style>"):"",p='<svg xmlns="http://www.w3.org/2000/svg" '+'width="'.concat(d,'" height="').concat(u,'" viewBox="0 0 ').concat(t," ").concat(r,'">')+'<foreignObject width="'.concat(t,'" height="').concat(r,'">')+'<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">'.concat(c).concat(l,"</body>")+"</foreignObject></svg>",h.a(2,qo(p,1))}},n)})),mr.apply(this,arguments)}function cc(n){return br.apply(this,arguments)}function br(){return br=Wt(me().m(function n(a){var e,t=arguments,r;return me().w(function(i){for(;;)switch(i.n){case 0:e=t.length>1&&t[1]!==void 0?t[1]:1,r=a.type,i.n=r==="canvas"?1:r==="svg"?2:r==="html"?3:4;break;case 1:return i.a(2,a.canvas);case 2:return i.a(2,qo(a.svg,e));case 3:return i.a(2,uc(a.html,a.css,a.width,a.height,e));case 4:return i.a(2)}},n)})),br.apply(this,arguments)}var Bt=2048,yr=(function(){function n(a,e,t){Z(this,n),E(this,"cache",new Map),E(this,"pending",new Set),E(this,"atlas",{}),E(this,"glTexture",null),E(this,"dirty",!0),this.gl=a,this.renderers=e,this.scheduleRender=t,this.packCanvas=document.createElement("canvas"),this.packCanvas.width=Bt,this.packCanvas.height=Bt,this.packCtx=this.packCanvas.getContext("2d")}return Q(n,[{key:"renderAttachment",value:function(e,t,r){var i=this,o="".concat(e,":").concat(t);if(!(this.cache.has(o)||this.pending.has(o))){var l=this.renderers[t];if(l){var s=l(r);if(s){this.pending.add(o);var d=r.pixelRatio;Promise.resolve(s).then((function(){var u=Wt(me().m(function c(p){var f;return me().w(function(h){for(;;)switch(h.n){case 0:if(i.pending.has(o)){h.n=1;break}return h.a(2);case 1:if(i.pending.delete(o),p){h.n=2;break}return h.a(2);case 2:return h.n=3,cc(p,d);case 3:if(f=h.v,!(!f||f.width===0||f.height===0)){h.n=4;break}return h.a(2);case 4:i.cache.set(o,{image:f,width:f.width,height:f.height}),i.dirty=!0,i.scheduleRender();case 5:return h.a(2)}},c)}));return function(c){return u.apply(this,arguments)}})())}}}}},{key:"regenerateAtlas",value:function(){if(this.dirty){this.dirty=!1;var e=[];if(this.cache.forEach(function(d,u){e.push({key:u,width:d.width,height:d.height,draw:function(p,f,h){p.drawImage(d.image,f,h)}})}),e.length===0){this.atlas={},this.deleteGLTexture();return}var t={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,Bt,Bt);var r=$o(e,this.packCtx,t),i=r.atlas,o=r.remaining;this.atlas=i,o.length>0&&console.warn("Sigma: ".concat(o.length," label attachment(s) could not fit in the ").concat(Bt,"x").concat(Bt," atlas and will not be rendered.")),this.deleteGLTexture();var l=this.gl,s=l.createTexture();l.activeTexture(l.TEXTURE0+pn),l.bindTexture(l.TEXTURE_2D,s),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,this.packCanvas),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),this.glTexture=s}}},{key:"bindTexture",value:function(e){if(this.glTexture){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.glTexture)}}},{key:"getEntry",value:function(e,t){var r="".concat(e,":").concat(t);return this.atlas[r]||null}},{key:"invalidateNode",value:function(e){var t="".concat(e,":"),r=z(this.cache.keys()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;o.startsWith(t)&&(this.cache.delete(o),this.dirty=!0)}}catch(u){r.e(u)}finally{r.f()}var l=z(this.pending),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;d.startsWith(t)&&this.pending.delete(d)}}catch(u){l.e(u)}finally{l.f()}}},{key:"restore",value:function(){this.glTexture=null,this.dirty=!0}},{key:"clear",value:function(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}},{key:"kill",value:function(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}},{key:"deleteGLTexture",value:function(){this.glTexture&&(this.gl.deleteTexture(this.glTexture),this.glTexture=null)}}])})(),pa=(function(){function n(a){Z(this,n),E(this,"buckets",new Map),E(this,"keyDepth",new Map);var e=z(a),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;this.buckets.set(r,new Set)}}catch(i){e.e(i)}finally{e.f()}}return Q(n,[{key:"has",value:function(e){return this.keyDepth.has(e)}},{key:"getBucket",value:function(e){return this.buckets.get(e)}},{key:"set",value:function(e,t){var r,i=this.keyDepth.get(e);if(i!==t){var o=this.buckets.get(t);if(!o)throw new Error('Sigma: "'.concat(t,'" is not a declared depth layer'));i!==void 0&&((r=this.buckets.get(i))===null||r===void 0||r.delete(e)),o.add(e),this.keyDepth.set(e,t)}}},{key:"remove",value:function(e){var t=this.keyDepth.get(e);t!==void 0&&(this.buckets.get(t).delete(e),this.keyDepth.delete(e))}},{key:"clearAll",value:function(){var e=z(this.buckets.values()),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;r.clear()}}catch(i){e.e(i)}finally{e.f()}this.keyDepth.clear()}},{key:"getSorted",value:function(e,t){var r=this.buckets.get(e);return!r||r.size===0?[]:j(r).sort(function(i,o){return t(i)-t(o)})}}])})(),xr=(function(n){function a(e,t){return Z(this,a),se(this,a,[e,2,t])}return le(a,n),Q(a,[{key:"updateNode",value:function(t,r,i,o,l,s,d,u){var c=this.indexMap.get(t);if(c===void 0)throw new Error('Node "'.concat(t,'" not allocated in NodeDataTexture'));var p=Ke(u),f=ne(p,4),h=f[0],b=f[1],m=f[2],v=f[3],g=c*2*4;this.data[g]=r,this.data[g+1]=i,this.data[g+2]=o,this.data[g+3]=l,this.data[g+4]=s,this.data[g+5]=d,this.data[g+6]=h*65536+b*256+m,this.data[g+7]=v/255,this.markDirty(c)}}])})(gn),hc=1024,fc=1.5,gc=4096,va=(function(){function n(a,e){var t;if(Z(this,n),E(this,"texture",null),E(this,"framebuffer",null),!a.getExtension("EXT_color_buffer_float"))throw new Error("sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.");this.gl=a,this.channels=e.channels,this.capacity=this.roundUpToPowerOfTwo((t=e.initialCapacity)!==null&&t!==void 0?t:hc);var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}return Q(n,[{key:"roundUpToPowerOfTwo",value:function(e){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,e))))}},{key:"computeDimensions",value:function(e){var t=Math.min(e,gc),r=Math.ceil(e/t);return{width:t,height:r}}},{key:"create",value:function(){var e=this.gl,t=this.channels===1?e.R32F:e.RGBA32F,r=this.channels===1?e.RED:e.RGBA;if(this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,t,this.textureWidth,this.textureHeight,0,r,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw new Error("sigma: float framebuffer for frame-pass placement is incomplete.");e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}},{key:"ensureCapacity",value:function(e){if(!(e<=this.capacity)){var t=this.gl;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(e*fc));var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.texture&&t.deleteTexture(this.texture),this.framebuffer&&t.deleteFramebuffer(this.framebuffer),this.create()}}},{key:"bindAsRenderTarget",value:function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.viewport(0,0,this.textureWidth,this.textureHeight)}},{key:"bind",value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"restore",value:function(){this.gl.getExtension("EXT_color_buffer_float"),this.create()}},{key:"kill",value:function(){var e=this.gl;this.texture&&(e.deleteTexture(this.texture),this.texture=null),this.framebuffer&&(e.deleteFramebuffer(this.framebuffer),this.framebuffer=null)}}])})(),_r=(function(n){function a(e,t){return Z(this,a),se(this,a,[e,2,t])}return le(a,n),Q(a,[{key:"updateEdge",value:function(t,r,i,o,l,s){var d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,c=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,p=this.indexMap.get(t);if(p===void 0)throw new Error('Edge "'.concat(t,'" not allocated in EdgeDataTexture'));var f=p*this.TEXELS_PER_ITEM*4;this.data[f+0]=r,this.data[f+1]=i,this.data[f+2]=o,this.data[f+3]=0,this.data[f+4]=l,this.data[f+5]=s,this.data[f+6]=d,this.data[f+7]=(u&15)<<4|c&15,this.markDirty(p)}}])})(gn);var Ef=lt(Et()),Sf=lt(Ka());function pc(n,a){if(n==null)return{};var e={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(a.indexOf(t)!==-1)continue;e[t]=n[t]}return e}function Xo(n,a){if(n==null)return{};var e,t,r=pc(n,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)e=i[t],a.indexOf(e)===-1&&{}.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var vc=["factor"],mc=["factor"],Yo=1.5,Tr={x:.5,y:.5,angle:0,ratio:1},Ko=(function(n){function a(){var e;Z(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=se(this,a,[].concat(r)),E(e,"minRatio",null),E(e,"maxRatio",null),E(e,"enabled",!0),E(e,"enabledZooming",!0),E(e,"enabledPanning",!0),E(e,"enabledRotation",!0),E(e,"constrainState",null),E(e,"state",O({},Tr)),E(e,"previousState",O({},Tr)),E(e,"nextFrame",null),E(e,"currentAnimationFrom",null),E(e,"currentAnimationTo",null),E(e,"animationCallback",null),e}return le(a,n),Q(a,[{key:"x",get:function(){return this.state.x}},{key:"y",get:function(){return this.state.y}},{key:"angle",get:function(){return this.state.angle}},{key:"ratio",get:function(){return this.state.ratio}},{key:"getState",value:function(){return O({},this.state)}},{key:"getPreviousState",value:function(){return O({},this.previousState)}},{key:"getBoundedRatio",value:function(t){var r=t;return typeof this.minRatio=="number"&&(r=Math.max(r,this.minRatio)),typeof this.maxRatio=="number"&&(r=Math.min(r,this.maxRatio)),r}},{key:"validateState",value:function(t){var r=this.getState();return this.enabledPanning&&typeof t.x=="number"&&(r.x=t.x),this.enabledPanning&&typeof t.y=="number"&&(r.y=t.y),this.enabledZooming&&typeof t.ratio=="number"&&(r.ratio=this.getBoundedRatio(t.ratio)),this.enabledRotation&&typeof t.angle=="number"&&(r.angle=t.angle),this.constrainState?this.constrainState(r):r}},{key:"isAnimating",value:function(){return this.nextFrame!==null}},{key:"setState",value:function(t){if(!this.enabled)return this;var r=this.validateState(t);return Oi(this.state,r)?this:(this.previousState=this.state,this.state=r,this.emit("updated",this.getState()),this)}},{key:"updateState",value:function(t){return this.setState(t(this.getState())),this}},{key:"animate",value:function(t,r){var i=this;return this.enabled?new Promise(function(o){return i.runAnimation(t,O(O({},Ui),r),o)}):Promise.resolve()}},{key:"cancelAnimation",value:function(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}},{key:"zoomIn",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.factor,i=r===void 0?Yo:r,o=Xo(t,vc);return this.animate({ratio:this.ratio/i},o)}},{key:"zoomOut",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.factor,i=r===void 0?Yo:r,o=Xo(t,mc);return this.animate({ratio:this.ratio*i},o)}},{key:"reset",value:function(t){return this.animate(Tr,t)}},{key:"runAnimation",value:function(t,r,i){var o=this,l=sn(r.easing),s=Date.now(),d=this.getState(),u=this.validateState(t),c=function(){if(!o.enabled){o.cancelAnimation();return}var f=r.duration>0?(Date.now()-s)/r.duration:1;if(f>=1){o.nextFrame=null,o.setState(u),o.resolveAnimation(),o.emitAnimationEnd(!0);return}var h=l(f);o.setState({x:d.x+(u.x-d.x)*h,y:d.y+(u.y-d.y)*h,angle:d.angle+(u.angle-d.angle)*h,ratio:d.ratio+(u.ratio-d.ratio)*h}),o.nextFrame=requestAnimationFrame(c)};this.cancelAnimation(),this.currentAnimationFrom=d,this.currentAnimationTo=u,this.animationCallback=i,this.emit("animationStart",{from:d,to:u}),c()}},{key:"resolveAnimation",value:function(){var t=this.animationCallback;this.animationCallback=null,t&&t()}},{key:"emitAnimationEnd",value:function(t){var r=this.currentAnimationFrom,i=this.currentAnimationTo;!r||!i||(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit("animationEnd",{from:r,to:i,completed:t}))}}],[{key:"from",value:function(t){var r=new a;return r.setState(t)}}])})(Vn);function be(n,a){var e=a.getBoundingClientRect();return{x:n.clientX-e.left,y:n.clientY-e.top}}function Oe(n,a){var e=O(O({},be(n,a)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){e.sigmaDefaultPrevented=!0},original:n});return e}function gt(n){var a="x"in n?n:O(O({},n.touches[0]||n.previousTouches[0]),{},{original:n.original,sigmaDefaultPrevented:n.sigmaDefaultPrevented,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0,a.sigmaDefaultPrevented=!0}});return a}function bc(n,a){var e=Oe(n,a);return e.delta=us(n),e}var yc=2;function ba(n){for(var a=[],e=0,t=Math.min(n.length,yc);e<t;e++)a.push(n[e]);return a}function mn(n,a,e){var t={touches:ba(n.touches).map(function(r){return be(r,e)}),previousTouches:a.map(function(r){return be(r,e)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:n};return t}function us(n){if(typeof n.deltaY<"u")return n.deltaY*-3/360;if(typeof n.detail<"u")return n.detail/-9;throw new Error("Captor: could not extract delta from event.")}var cs=(function(n){function a(e,t){var r;return Z(this,a),r=se(this,a),r.container=e,r.renderer=t,r}return le(a,n),Q(a)})(Vn),xc=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","enableCameraMouseRotation","gestureTarget","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],_c=xc.reduce(function(n,a){return O(O({},n),{},E({},a,Xn[a]))},{});function bn(n){return n instanceof PointerEvent&&n.pointerType==="touch"}var Tc=(function(n){function a(e,t){var r;return Z(this,a),r=se(this,a,[e,t]),E(r,"enabled",!0),E(r,"draggedEvents",0),E(r,"downStartTime",null),E(r,"lastMouseX",null),E(r,"lastMouseY",null),E(r,"isMouseDown",!1),E(r,"isMoving",!1),E(r,"isPanningStage",!1),E(r,"movingTimeout",null),E(r,"startCameraState",null),E(r,"clicks",0),E(r,"doubleClickTimeout",null),E(r,"isRightMouseDown",!1),E(r,"startRotationAngle",null),E(r,"startCameraAngle",null),E(r,"currentWheelDirection",0),E(r,"lastWheelAnimationId",0),E(r,"settings",_c),r.handleRightClick=r.handleRightClick.bind(r),r.handleDown=r.handleDown.bind(r),r.handleUp=r.handleUp.bind(r),r.handleMove=r.handleMove.bind(r),r.handleWheel=r.handleWheel.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleEnter=r.handleEnter.bind(r),e.addEventListener("contextmenu",r.handleRightClick,{capture:!1}),e.addEventListener("pointerdown",r.handleDown,{capture:!1}),e.addEventListener("wheel",r.handleWheel,{capture:!1,passive:!1}),e.addEventListener("pointerleave",r.handleLeave,{capture:!1}),e.addEventListener("pointerenter",r.handleEnter,{capture:!1}),document.addEventListener("pointermove",r.handleMove,{capture:!1}),document.addEventListener("pointerup",r.handleUp,{capture:!1}),r}return le(a,n),Q(a,[{key:"kill",value:function(){var t=this.container;t.removeEventListener("contextmenu",this.handleRightClick),t.removeEventListener("pointerdown",this.handleDown),t.removeEventListener("wheel",this.handleWheel),t.removeEventListener("pointerleave",this.handleLeave),t.removeEventListener("pointerenter",this.handleEnter),document.removeEventListener("pointermove",this.handleMove),document.removeEventListener("pointerup",this.handleUp)}},{key:"handleClick",value:function(t){var r=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(t);setTimeout(function(){r.clicks=0,r.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",Oe(t,this.container))}}},{key:"handleRightClick",value:function(t){this.enabled&&(this.settings.enableCameraMouseRotation&&t.preventDefault(),this.emit("rightClick",Oe(t,this.container)))}},{key:"handleDoubleClick",value:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var r=Oe(t,this.container);if(this.emit("doubleClick",r),!r.sigmaDefaultPrevented){var i=this.renderer.getCamera(),o=i.getBoundedRatio(i.getState().ratio/this.settings.doubleClickZoomingRatio);i.animate(this.renderer.getViewportZoomedState(be(t,this.container),o),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(t){if(!(!this.enabled||bn(t))){if(t.button===0){this.startCameraState=this.renderer.getCamera().getState();var r=be(t,this.container),i=r.x,o=r.y;this.lastMouseX=i,this.lastMouseY=o,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(t.button===2&&this.settings.enableCameraMouseRotation){var l=be(t,this.container),s=l.x,d=l.y,u=this.container.offsetWidth/2,c=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(d-c,s-u),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit("mousedown",Oe(t,this.container))}}},{key:"handleUp",value:function(t){var r=this;if(!(!this.enabled||bn(t)||!this.isMouseDown&&!this.isRightMouseDown)){if(this.isRightMouseDown){this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit("mouseup",Oe(t,this.container));return}var i=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var o=be(t,this.container),l=o.x,s=o.y,d=i.getState(),u=i.getPreviousState();this.isMoving?i.animate({x:d.x+this.settings.inertiaRatio*(d.x-u.x),y:d.y+this.settings.inertiaRatio*(d.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==l||this.lastMouseY!==s)&&i.setState({x:d.x,y:d.y}),this.isMoving=!1,setTimeout(function(){var c=r.draggedEvents>0;r.draggedEvents=0;var p=r.renderer.getSetting("hideEdgesOnMove")||r.renderer.getSetting("hideLabelsOnMove");c&&p&&r.renderer.refresh()},0),this.emit("mouseup",Oe(t,this.container)),(t.target===this.container||t.composedPath()[0]===this.container)&&this.handleClick(t)}}},{key:"handleMove",value:function(t){var r=this;if(!(!this.enabled||bn(t))){var i=Oe(t,this.container);if(this.emit("mousemovebody",i),(t.target===this.container||t.composedPath()[0]===this.container)&&this.emit("mousemove",i),this.isMouseDown&&this.draggedEvents++,!i.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.movingTimeout=null,r.isMoving=!1},this.settings.dragTimeout);var o=this.renderer.getCamera(),l=be(t,this.container),s=l.x,d=l.y,u=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),c=this.renderer.viewportToFramedGraph({x:s,y:d}),p=u.x-c.x,f=u.y-c.y,h=o.getState(),b=h.x+p,m=h.y+f;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),o.setState({x:b,y:m}),this.lastMouseX=s,this.lastMouseY=d,t.preventDefault(),t.stopPropagation()}if(this.isRightMouseDown){var v=be(t,this.container),g=v.x,y=v.y,x=this.container.offsetWidth/2,_=this.container.offsetHeight/2,T=Math.atan2(y-_,g-x),R=T-this.startRotationAngle,S=this.renderer.getCamera();S.setState({angle:this.startCameraAngle+R}),t.preventDefault(),t.stopPropagation()}}}}},{key:"handleLeave",value:function(t){bn(t)||this.emit("mouseleave",Oe(t,this.container))}},{key:"handleEnter",value:function(t){bn(t)||this.emit("mouseenter",Oe(t,this.container))}},{key:"handleWheel",value:function(t){var r=this,i=this.renderer.getCamera();if(!(!this.enabled||!i.enabledZooming)){var o=bc(t,this.container);if(this.emit("wheel",o),!o.sigmaDefaultPrevented){var l=this.settings.gestureTarget;if(l!=="page"){if(l==="shared"&&!t.ctrlKey&&!t.metaKey){this.renderer._showGestureHint("wheel");return}var s=us(t);if(s){t.preventDefault(),t.stopPropagation();var d=i.getState().ratio,u=s>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,c=i.getBoundedRatio(d*u),p=s>0?1:-1,f=Date.now();if(d!==c&&!(this.currentWheelDirection===p&&this.lastWheelTriggerTime&&f-this.lastWheelTriggerTime<this.settings.zoomDuration/5)){var h=++this.lastWheelAnimationId;i.animate(this.renderer.getViewportZoomedState(be(t,this.container),c),{easing:"quadraticOut",duration:this.settings.zoomDuration}).then(function(){r.lastWheelAnimationId===h&&(r.currentWheelDirection=0)}),this.currentWheelDirection=p,this.lastWheelTriggerTime=f}}}}}}},{key:"setSettings",value:function(t){this.settings=t}}])})(cs),Ec=["dragTimeout","gestureTarget","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],Sc=Ec.reduce(function(n,a){return O(O({},n),{},E({},a,Xn[a]))},{}),Ac=(function(n){function a(e,t){var r;return Z(this,a),r=se(this,a,[e,t]),E(r,"enabled",!0),E(r,"isMoving",!1),E(r,"hasMoved",!1),E(r,"isPanningStage",!1),E(r,"isZoomingStage",!1),E(r,"touchMode",0),E(r,"startTouchesPositions",[]),E(r,"lastTouches",[]),E(r,"lastTap",null),E(r,"settings",Sc),r.handleStart=r.handleStart.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleMove=r.handleMove.bind(r),e.addEventListener("touchstart",r.handleStart,{capture:!1}),e.addEventListener("touchcancel",r.handleLeave,{capture:!1}),document.addEventListener("touchend",r.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",r.handleMove,{capture:!1,passive:!1}),r}return le(a,n),Q(a,[{key:"kill",value:function(){var t=this.container;t.removeEventListener("touchstart",this.handleStart),t.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"doesCapture",value:function(t){var r=this.settings.gestureTarget;return r==="graph"?!0:r==="page"?!1:t>=2}},{key:"syncStageFlags",value:function(){var t=this.touchMode===1&&this.hasMoved,r=this.touchMode===2;t!==this.isPanningStage&&(this.isPanningStage=t,this.renderer._setPanning(t)),r!==this.isZoomingStage&&(this.isZoomingStage=r,this.renderer._setZooming(r))}},{key:"handleStart",value:function(t){var r=this;if(this.enabled){var i=ba(t.touches);if(this.touchMode=i.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=i.map(function(f){return be(f,r.container)}),this.touchMode===2){var o=ne(this.startTouchesPositions,2),l=o[0],s=l.x,d=l.y,u=o[1],c=u.x,p=u.y;this.startTouchesAngle=Math.atan2(p-d,c-s),this.startTouchesDistance=Math.sqrt(Math.pow(c-s,2)+Math.pow(p-d,2))}this.syncStageFlags(),this.emit("touchdown",mn(t,this.lastTouches,this.container)),this.lastTouches=i,this.lastTouchesPositions=this.startTouchesPositions,t.cancelable&&(this.doesCapture(t.touches.length)||this.renderer._hasNodeDrag())&&t.preventDefault()}}},{key:"handleLeave",value:function(t){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(t.cancelable&&this.doesCapture(this.touchMode)&&t.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(t.touches.length===1){this.handleStart(t);break}case 1:if(this.isMoving){var r=this.renderer.getCamera(),i=r.getState(),o=r.getPreviousState();r.animate({x:i.x+this.settings.inertiaRatio*(i.x-o.x),y:i.y+this.settings.inertiaRatio*(i.y-o.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.syncStageFlags(),this.emit("touchup",mn(t,this.lastTouches,this.container)),!t.touches.length){var l=be(this.lastTouches[0],this.container),s=this.startTouchesPositions[0],d=Math.pow(l.x-s.x,2)+Math.pow(l.y-s.y,2);if(!t.touches.length&&d<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var u=mn(t,this.lastTouches,this.container);if(this.emit("doubletap",u),this.lastTap=null,!u.sigmaDefaultPrevented&&this.settings.gestureTarget!=="page"){var c=this.renderer.getCamera(),p=c.getBoundedRatio(c.getState().ratio/this.settings.doubleClickZoomingRatio);c.animate(this.renderer.getViewportZoomedState(l,p),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var f=mn(t,this.lastTouches,this.container);this.emit("tap",f),this.lastTap={time:Date.now(),position:f.touches[0]||f.previousTouches[0]}}}this.lastTouches=ba(t.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(t){var r=this;if(!(!this.enabled||!this.startTouchesPositions.length)){var i=this.doesCapture(t.touches.length);i&&t.preventDefault();var o=ba(t.touches),l=o.map(function(U){return be(U,r.container)}),s=this.lastTouches;this.lastTouches=o,this.lastTouchesPositions=l;var d=mn(t,s,this.container);if(this.emit("touchmove",d),!d.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=l.some(function(U,$){var K=r.startTouchesPositions[$];return K&&(U.x!==K.x||U.y!==K.y)})),!!this.hasMoved)){if(!i){this.settings.gestureTarget==="shared"&&this.renderer._showGestureHint("touch");return}this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=this.startCameraState,p=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var f=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),h=f.x,b=f.y,m=this.renderer.viewportToFramedGraph(l[0]),v=m.x,g=m.y;u.setState({x:c.x+h-v,y:c.y+b-g});break}case 2:{var y={x:.5,y:.5,angle:0,ratio:1},x=l[0],_=x.x,T=x.y,R=l[1],S=R.x,A=R.y,C=Math.atan2(A-T,S-_)-this.startTouchesAngle,P=Math.hypot(A-T,S-_)/this.startTouchesDistance,w=u.getBoundedRatio(c.ratio/P);y.ratio=w,y.angle=c.angle+C;var I=this.getDimensions(),L=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:c}),k=Math.min(I.width,I.height)-2*p,N=k/I.width,M=k/I.height,F=w/k,D=_-k/2/N,G=T-k/2/M,H=Fa({x:D,y:G},y.angle);D=H.x,G=H.y,y.x=L.x-D*F,y.y=L.y+G*F,u.setState(y);break}}}}}},{key:"setSettings",value:function(t){this.settings=t}}])})(cs),Rc=(function(){function n(a,e,t,r){Z(this,n),E(this,"pendingNode",null),E(this,"session",null),this.graph=a,this.viewportToGraph=e,this.setNodesState=t,this.emit=r}return Q(n,[{key:"start",value:function(e,t,r,i,o){var l=r(e),s=!1;if(this.emit("nodeDragStart",{node:e,allDraggedNodes:l,event:t,preventSigmaDefault:function(){s=!0}}),s)return!1;var d=new Map,u=z(l),c;try{for(u.s();!(c=u.n()).done;){var p=c.value;d.set(p,{x:this.graph.getNodeAttribute(p,i),y:this.graph.getNodeAttribute(p,o)})}}catch(f){u.e(f)}finally{u.f()}return this.session={node:e,allNodes:l,startPosition:this.viewportToGraph(t),startNodePositions:d,xAttr:i,yAttr:o},this.setNodesState(l,{isDragged:!0}),!0}},{key:"applyMove",value:function(e,t){var r=this.session,i=r.allNodes,o=r.startNodePositions,l=r.startPosition,s=r.xAttr,d=r.yAttr,u=this.viewportToGraph(e),c={x:u.x-l.x,y:u.y-l.y},p=z(i),f;try{for(p.s();!(f=p.n()).done;){var h=f.value,b=o.get(h);if(!(!b||!this.graph.hasNode(h))){var m={x:b.x+c.x,y:b.y+c.y};t?this.graph.mergeNodeAttributes(h,t(m,h)):(this.graph.setNodeAttribute(h,s,m.x),this.graph.setNodeAttribute(h,d,m.y))}}}catch(v){p.e(v)}finally{p.f()}}},{key:"end",value:function(){if(this.pendingNode=null,!this.session)return null;var e=this.session,t=e.node,r=e.allNodes;return this.setNodesState(r,{isDragged:!1}),this.session=null,{node:t,allNodes:r}}},{key:"removeNode",value:function(e){e===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===e?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(e)&&(this.session.allNodes=this.session.allNodes.filter(function(t){return t!==e}),this.session.startNodePositions.delete(e)))}},{key:"clear",value:function(){this.pendingNode=null,this.session=null}}])})(),wc=(function(){function n(a,e){Z(this,n),E(this,"groups",new Map),E(this,"edgeToGroupKey",new Map),this.graph=a,this.onGroupChanged=e}return Q(n,[{key:"getGroupKey",value:function(e){var t=this.graph.source(e),r=this.graph.target(e);return t<r?"".concat(t,"\0").concat(r):"".concat(r,"\0").concat(t)}},{key:"sortGroup",value:function(e,t){var r=this,i=t.split("\0")[0];e.sort(function(o,l){var s=r.graph.source(o)===i||!r.graph.isDirected(o)?0:1,d=r.graph.source(l)===i||!r.graph.isDirected(l)?0:1;return s-d})}},{key:"register",value:function(e){var t=this.getGroupKey(e),r=this.groups.get(t);r||(r=[],this.groups.set(t,r)),r.includes(e)||r.push(e),this.edgeToGroupKey.set(e,t),this.sortGroup(r,t),this.onGroupChanged(r,r.length)}},{key:"unregister",value:function(e){var t=this.edgeToGroupKey.get(e);if(t){this.edgeToGroupKey.delete(e);var r=this.groups.get(t);if(r){var i=r.indexOf(e);i!==-1&&r.splice(i,1),r.length===0?this.groups.delete(t):this.onGroupChanged(r,r.length)}}}},{key:"getGroup",value:function(e){var t,r=this.edgeToGroupKey.get(e);return r?(t=this.groups.get(r))!==null&&t!==void 0?t:[]:[]}},{key:"getSiblings",value:function(e){return this.getGroup(e).filter(function(t){return t!==e})}},{key:"rebuild",value:function(){var e=this;this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(function(s){var d=e.getGroupKey(s),u=e.groups.get(d);u||(u=[],e.groups.set(d,u)),u.push(s),e.edgeToGroupKey.set(s,d)});var t=z(this.groups),r;try{for(t.s();!(r=t.n()).done;){var i=ne(r.value,2),o=i[0],l=i[1];this.sortGroup(l,o),this.onGroupChanged(l,l.length)}}catch(s){t.e(s)}finally{t.f()}}},{key:"clear",value:function(){this.groups.clear(),this.edgeToGroupKey.clear()}}])})();function Zo(n,a){var e;if(n===!1||n==="extend"||n==="separate")return n;var t=n[a];return t!==void 0?t:(e=n.default)!==null&&e!==void 0?e:!1}function Qo(n){return n===!1?!1:n==="extend"||n==="separate"?!0:Object.values(n).some(function(a){return a==="extend"||a==="separate"})}function Jo(n){return n==="separate"?!0:n===!1||n==="extend"?!1:n.default==="separate"?!0:Object.values(n).includes("separate")}var pe={node:{parent:null,eventSuffix:"Node",payloadKey:"node",isEnabled:function(){return!0},writesPickingThisFrame:function(){return!0},setHover:function(a,e,t){return a.setNodeState(e,{isHovered:t})},getCursor:function(a,e){var t;return(t=a.nodeDataCache[e])===null||t===void 0?void 0:t.cursor},isHitValid:function(a,e){var t;return((t=a.nodeDataCache[e])===null||t===void 0?void 0:t.visibility)!=="hidden"}},edge:{parent:null,eventSuffix:"Edge",payloadKey:"edge",isEnabled:function(a){return!!a.settings.enableEdgeEvents},writesPickingThisFrame:function(a){return!!a.settings.enableEdgeEvents},setHover:function(a,e,t){return a.setEdgeState(e,{isHovered:t})},getCursor:function(a,e){var t;return(t=a.edgeDataCache[e])===null||t===void 0?void 0:t.cursor}},nodeLabel:{parent:"node",eventSuffix:"NodeLabel",payloadKey:"node",isEnabled:function(a){return Jo(a.settings.nodeLabelEvents)},writesPickingThisFrame:function(a){return Qo(a.settings.nodeLabelEvents)},setHover:function(a,e,t){return a.setNodeState(e,{isLabelHovered:t})},getCursor:function(a,e){var t;return(t=a.nodeDataCache[e])===null||t===void 0?void 0:t.labelCursor},resolveForVerb:function(a,e,t){var r=Zo(t.settings.nodeLabelEvents,e);return r===!1?null:r==="extend"?{kind:"node",key:a.key}:a}},edgeLabel:{parent:"edge",eventSuffix:"EdgeLabel",payloadKey:"edge",isEnabled:function(a){return Jo(a.settings.edgeLabelEvents)},writesPickingThisFrame:function(a){return Qo(a.settings.edgeLabelEvents)},setHover:function(a,e,t){return a.setEdgeState(e,{isLabelHovered:t})},getCursor:function(a,e){var t;return(t=a.edgeDataCache[e])===null||t===void 0?void 0:t.labelCursor},resolveForVerb:function(a,e,t){var r=Zo(t.settings.edgeLabelEvents,e);return r===!1?null:r==="extend"?{kind:"edge",key:a.key}:a}}},mt=["node","edge","nodeLabel","edgeLabel"];function Dc(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function vt(n,a,e){var t;return(t=n.idsByKind[a].get(e))!==null&&t!==void 0?t:0}function Er(n,a){var e=z(mt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;if(r===a||pe[r].parent===a){var i=z(n.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;n.lookup[l]=null}}catch(p){i.e(p)}finally{i.f()}n.idsByKind[r]=new Map}}}catch(p){e.e(p)}finally{e.f()}var s=1,d=z(mt),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;if(c===a)break;s+=n.idsByKind[c].size}}catch(p){d.e(p)}finally{d.f()}n.nextId=s}function es(n,a,e){var t=n.nextId++;return n.idsByKind[a].set(e,t),n.lookup[t]={kind:a,key:e},t}function Lc(n,a){var e=z(mt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value;if(pe[r].parent!==null){var i=z(n.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;n.lookup[l]=null}}catch(_){i.e(_)}finally{i.f()}n.idsByKind[r]=new Map}}}catch(_){e.e(_)}finally{e.f()}n.nextId=1;var s=z(mt),d;try{for(s.s();!(d=s.n()).done;){var u=d.value;if(pe[u].parent===null){var c=z(n.idsByKind[u].values()),p;try{for(c.s();!(p=c.n()).done;){var f=p.value;f>=n.nextId&&(n.nextId=f+1)}}catch(_){c.e(_)}finally{c.f()}}}}catch(_){s.e(_)}finally{s.f()}var h=z(mt),b;try{for(h.s();!(b=h.n()).done;){var m=b.value,v=pe[m];if(!(v.parent===null||!v.isEnabled(a))){var g=z(n.idsByKind[v.parent].keys()),y;try{for(g.s();!(y=g.n()).done;){var x=y.value;n.idsByKind[m].set(x,n.nextId),n.lookup[n.nextId]={kind:m,key:x},n.nextId++}}catch(_){g.e(_)}finally{g.f()}}}}catch(_){h.e(_)}finally{h.f()}}function Cc(n,a){var e=z(mt),t;try{for(e.s();!(t=e.n()).done;){var r=t.value,i=n[r],o=a[r];if(i!==o){if(i.size!==o.size)return!1;var l=z(i),s;try{for(l.s();!(s=l.n()).done;){var d=ne(s.value,2),u=d[0],c=d[1];if(o.get(u)!==c)return!1}}catch(p){l.e(p)}finally{l.f()}}}}catch(p){e.e(p)}finally{e.f()}return!0}function ts(n,a,e){pe[a.kind].setHover(n,a.key,e)}function kc(n,a){return pe[a.kind].getCursor(n,a.key)}function yn(n,a){return"".concat(a).concat(pe[n].eventSuffix)}function xn(n,a){return O(O({},a),{},E({},pe[n.kind].payloadKey,n.key))}function Pc(n,a,e){var t=pe[a.kind].resolveForVerb;return t?t(a,e,n):a}function Fc(n,a){var e=pe[a.kind].isHitValid;return e?e(n,a.key):!0}function Sr(n){return mt.filter(function(a){return a===n||pe[a].parent===n})}function hs(n,a,e){return a&&(a=Pc(n,a,e)),a&&!Fc(n,a)&&(a=null),a}function Ar(n,a,e){var t=e==="wheel"?n.stateManager.hovered:n.getHitAtPosition(a);return hs(n,t,e)}function Ic(n,a){return!n||!a?n===a:n.kind===a.kind&&n.key===a.key}function fs(n,a,e){var t={event:e,preventSigmaDefault:function(){return e.preventSigmaDefault()}},r=n.dragManager.session,i=r?{kind:"node",key:r.node}:hs(n,a,"enter"),o=n.stateManager,l=o.hovered;Ic(l,i)||(l&&(ts(n,l,!1),n.emit(yn(l.kind,"leave"),xn(l,t))),o.setHovered(i),i&&(ts(n,i,!0),n.emit(yn(i.kind,"enter"),xn(i,t))),n.updateContainerCursor())}function Nc(n,a,e,t){t.handleResize=function(){return n.scheduleRefresh()},window.addEventListener("resize",t.handleResize),t.handleMove=function(i){n.hoverResolver.pointerMoved(gt(i))},t.handleMoveBody=function(i){var o=gt(i),l=n.dragManager;if(l.pendingNode&&!l.session){var s=n.nodeStyleAnalysis,d=s.xAttribute,u=s.yAttribute,c=n.settings;l.start(l.pendingNode,o,c.getDraggedNodes,d||"x",u||"y"),l.pendingNode=null}l.session&&(l.applyMove(o,n.settings.dragPositionToAttributes),n.emit("nodeDrag",{node:l.session.node,allDraggedNodes:l.session.allNodes,event:o}),o.preventSigmaDefault()),n.emit("moveBody",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})},t.handleLeave=function(i){var o=gt(i),l={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}};n.hoverResolver.pointerLeft(),fs(n,null,o),n.emit("leaveStage",l)},t.handleEnter=function(i){var o=gt(i);n.emit("enterStage",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})};var r=function(o){return function(l){var s=gt(l),d={event:s,preventSigmaDefault:function(){return s.preventSigmaDefault()}},u=Ar(n,s,o);if(u){n.emit(yn(u.kind,o),xn(u,d));return}n.emit("".concat(o,"Stage"),d)}};t.handleClick=r("click"),t.handleRightClick=r("rightClick"),t.handleDoubleClick=r("doubleClick"),t.handleWheel=r("wheel"),t.handleDown=function(i){var o=gt(i),l={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},s=Ar(n,o,"down");if(s){s.kind==="node"&&n.settings.enableNodeDrag&&(n.dragManager.pendingNode=s.key),n.emit(yn(s.kind,"down"),xn(s,l));return}n.emit("downStage",l)},t.handleUp=function(i){var o=gt(i),l={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},s=n.dragManager.end();s&&n.emit("nodeDragEnd",O({node:s.node,allDraggedNodes:s.allNodes},l));var d=Ar(n,o,"up");if(d){n.emit(yn(d.kind,"up"),xn(d,l));return}n.emit("upStage",l)},a.on("mousemove",t.handleMove),a.on("mousemovebody",t.handleMoveBody),a.on("click",t.handleClick),a.on("rightClick",t.handleRightClick),a.on("doubleClick",t.handleDoubleClick),a.on("wheel",t.handleWheel),a.on("mousedown",t.handleDown),a.on("mouseup",t.handleUp),a.on("mouseleave",t.handleLeave),a.on("mouseenter",t.handleEnter),e.on("touchdown",t.handleDown),e.on("touchdown",t.handleMove),e.on("touchup",t.handleUp),e.on("touchmove",t.handleMove),e.on("tap",t.handleClick),e.on("doubletap",t.handleDoubleClick),e.on("touchmove",t.handleMoveBody)}function Gc(n,a){var e=n.graph,t=new Set(["x","y","zIndex","type"]);a.eachNodeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,l=!o||o.some(function(s){return t.has(s)});n.refresh({partialGraph:{nodes:e.nodes()},skipIndexation:!l,schedule:!0})},a.eachEdgeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,l=o&&["zIndex","type"].some(function(s){return o?.includes(s)});n.refresh({partialGraph:{edges:e.edges()},skipIndexation:!l,schedule:!0})},a.addNodeGraphUpdate=function(r){n.addNode(r.key),n.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},a.updateNodeGraphUpdate=function(r){n.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},a.dropNodeGraphUpdate=function(r){n.removeNode(r.key),n.refresh({schedule:!0})},a.addEdgeGraphUpdate=function(r){var i=r.key;n.edgeGroups.register(i),n.addEdge(i);var o=n.edgeGroups.getSiblings(i),l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;n.addEdge(d)}}catch(u){l.e(u)}finally{l.f()}n.refresh({partialGraph:{edges:[i].concat(j(o))},schedule:!0})},a.updateEdgeGraphUpdate=function(r){n.refresh({partialGraph:{edges:[r.key]},skipIndexation:!1,schedule:!0})},a.dropEdgeGraphUpdate=function(r){var i=r.key,o=n.edgeGroups.getSiblings(i);n.edgeGroups.unregister(i),n.removeEdge(i);var l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;n.addEdge(d)}}catch(u){l.e(u)}finally{l.f()}n.refresh({schedule:!0})},a.clearEdgesGraphUpdate=function(){n.clearEdgeState(),n.clearEdgeIndices(),n.refresh({schedule:!0})},a.clearGraphUpdate=function(){n.clearEdgeState(),n.clearNodeState(),n.clearEdgeIndices(),n.clearNodeIndices(),n.refresh({schedule:!0})},e.on("nodeAdded",a.addNodeGraphUpdate),e.on("nodeDropped",a.dropNodeGraphUpdate),e.on("nodeAttributesUpdated",a.updateNodeGraphUpdate),e.on("eachNodeAttributesUpdated",a.eachNodeAttributesUpdatedGraphUpdate),e.on("edgeAdded",a.addEdgeGraphUpdate),e.on("edgeDropped",a.dropEdgeGraphUpdate),e.on("edgeAttributesUpdated",a.updateEdgeGraphUpdate),e.on("eachEdgeAttributesUpdated",a.eachEdgeAttributesUpdatedGraphUpdate),e.on("edgesCleared",a.clearEdgesGraphUpdate),e.on("cleared",a.clearGraphUpdate)}function Mc(n,a){n.removeListener("nodeAdded",a.addNodeGraphUpdate),n.removeListener("nodeDropped",a.dropNodeGraphUpdate),n.removeListener("nodeAttributesUpdated",a.updateNodeGraphUpdate),n.removeListener("eachNodeAttributesUpdated",a.eachNodeAttributesUpdatedGraphUpdate),n.removeListener("edgeAdded",a.addEdgeGraphUpdate),n.removeListener("edgeDropped",a.dropEdgeGraphUpdate),n.removeListener("edgeAttributesUpdated",a.updateEdgeGraphUpdate),n.removeListener("eachEdgeAttributesUpdated",a.eachEdgeAttributesUpdatedGraphUpdate),n.removeListener("edgesCleared",a.clearEdgesGraphUpdate),n.removeListener("cleared",a.clearGraphUpdate)}var zc={x:.5,y:.5,angle:0,ratio:1},Oc=8,Bc=.001;function Wc(n){var a=n.coords,e=n.nodeData,t=n.dimensions,r=n.stagePadding,i=n.zoomToSizeRatioFunction,o=n.itemSizesReference,l=n.fitLabels,s=n.nodeLabelBox,d=Object.keys(a);if(!d.length)return n.extent;for(var u=i(1)||1,c=o==="positions",p=t.width,f=t.height,h=n.extent,b=0;b<Oc;b++){for(var m=qn(h),v={width:h.x[1]-h.x[0]||1,height:h.y[1]-h.y[0]||1},g=Ye(zc,t,v,r),y=ns(g,m({x:0,y:0}),p,f),x=ns(g,m({x:1,y:0}),p,f),_=Math.hypot(x.x-y.x,x.y-y.y)||1,T=1/0,R=-1/0,S=1/0,A=-1/0,C=0,P=d.length;C<P;C++){var w=d[C],I=e[w],L=I.size/u*(c?_:1),k=-L,N=L,M=-L,F=L;if(l){var D=s(I,L);D&&(D.minX<k&&(k=D.minX),D.maxX>N&&(N=D.maxX),D.minY<M&&(M=D.minY),D.maxY>F&&(F=D.maxY))}var G=a[w],H=G.x,U=G.y;T=Math.min(T,H+k/_),R=Math.max(R,H+N/_),S=Math.min(S,U-F/_),A=Math.max(A,U-M/_)}var $={x:[T,R],y:[S,A]},K=Math.max($.x[1]-$.x[0],$.y[1]-$.y[0])||1,te=Math.max(Math.abs($.x[0]-h.x[0]),Math.abs($.x[1]-h.x[1]),Math.abs($.y[0]-h.y[0]),Math.abs($.y[1]-h.y[1]));if(h=$,te/K<Bc)break}return h}function ns(n,a,e,t){var r=Lt(n,a);return{x:(1+r.x)*e/2,y:(1-r.y)*t/2}}var Uc=typeof navigator<"u"&&/Mac|iP(hone|ad|od)/.test(navigator.platform),Hc=1500,$c=`.sigma-gesture-hint {
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
}`;function as(n){var a,e,t=It("style");t.textContent=n,document.head.appendChild(t);var r=((a=(e=t.sheet)===null||e===void 0?void 0:e.cssRules.length)!==null&&a!==void 0?a:0)>0;return t.remove(),r}var pt=null;function Vc(){return pt===null&&(pt=$c,as("@scope {}")&&(pt=`@scope {
`.concat(pt,`
}`)),as("@layer sigma-gesture-hint {}")&&(pt=`@layer sigma-gesture-hint {
`.concat(pt,`
}`))),pt}var jc=(function(){function n(a){Z(this,n),E(this,"hideTimeout",null),this.styleElement=It("style"),this.styleElement.textContent=Vc(),a.appendChild(this.styleElement),this.element=It("div",{opacity:"0"},{class:"sigma-gesture-hint"}),a.appendChild(this.element)}return Q(n,[{key:"show",value:function(e,t){var r=this,i=e==="touch"?t.sharedGestureTouchMessage:Uc?t.sharedGestureAppleWheelMessage:t.sharedGestureWheelMessage;i&&(this.element.textContent=i,this.element.style.opacity="1",typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(function(){r.hideTimeout=null,r.element.style.opacity="0"},Hc))}},{key:"kill",value:function(){typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}}])})(),qc=(function(){function n(a){Z(this,n),E(this,"readBuffer",null),E(this,"fence",null),E(this,"result",new Uint8Array(4)),E(this,"generation",0),E(this,"readGeneration",0),E(this,"lastEvent",null),E(this,"active",!1),E(this,"dirty",!1),E(this,"rafId",null),E(this,"killed",!1),this.options=a}return Q(n,[{key:"pointerMoved",value:function(e){this.lastEvent=e,this.active=!0,!this.options.isRenderPending()&&this.request()}},{key:"pointerLeft",value:function(){this.active=!1,this.dirty=!1}},{key:"frameRendered",value:function(){this.request()}},{key:"invalidate",value:function(){this.generation++}},{key:"request",value:function(){if(!(this.killed||!this.active||!this.lastEvent)){if(this.fence){this.dirty=!0;return}this.startRead()}}},{key:"startRead",value:function(){var e=this.options,t=e.gl,r=e.getFrameBuffer,i=e.getPixelRatio,o=e.getDownSizingRatio;this.readGeneration=this.generation;var l=this.lastEvent,s=Ia(t,l.x,l.y,i(),o()),d=ne(s,2),u=d[0],c=d[1];this.readBuffer||(this.readBuffer=t.createBuffer()),t.bindFramebuffer(t.FRAMEBUFFER,r()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(u,c,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(l)}},{key:"schedulePoll",value:function(e){var t=this;this.rafId=requestAnimationFrame(function(){t.rafId=null,t.poll(e)})}},{key:"poll",value:function(e){var t=this.options,r=t.gl,i=t.onIndex;if(!(this.killed||!this.fence)){var o=r.clientWaitSync(this.fence,0,0);if(o===r.TIMEOUT_EXPIRED){this.schedulePoll(e);return}if(r.deleteSync(this.fence),this.fence=null,o!==r.WAIT_FAILED&&this.readGeneration===this.generation){r.bindBuffer(r.PIXEL_PACK_BUFFER,this.readBuffer),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,this.result),r.bindBuffer(r.PIXEL_PACK_BUFFER,null);var l=ne(this.result,4),s=l[0],d=l[1],u=l[2],c=l[3];this.active&&i(Na(s,d,u,c),e)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}}},{key:"reset",value:function(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}},{key:"kill",value:function(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;var e=this.options.gl;this.fence&&e.deleteSync(this.fence),this.fence=null,this.readBuffer&&e.deleteBuffer(this.readBuffer),this.readBuffer=null}}])})(),rs=(function(){function n(a,e){Z(this,n),this.key=a,this.size=e}return Q(n,null,[{key:"compare",value:function(e,t){return e.size>t.size?-1:e.size<t.size||e.key>t.key?1:-1}}])})(),ma=(function(){function n(){Z(this,n),E(this,"width",0),E(this,"height",0),E(this,"cellSize",0),E(this,"columns",0),E(this,"rows",0),E(this,"cells",{})}return Q(n,[{key:"resizeAndClear",value:function(e,t){this.width=e.width,this.height=e.height,this.cellSize=t,this.columns=Math.ceil(e.width/t),this.rows=Math.ceil(e.height/t),this.cells={}}},{key:"getIndex",value:function(e){var t=Math.floor(e.x/this.cellSize),r=Math.floor(e.y/this.cellSize);return r*this.columns+t}},{key:"add",value:function(e,t,r){var i=new rs(e,t),o=this.getIndex(r),l=this.cells[o];l||(l=[],this.cells[o]=l),l.push(i)}},{key:"organize",value:function(){for(var e in this.cells){var t=this.cells[e];t.sort(rs.compare)}}},{key:"getLabelsToDisplay",value:function(e,t,r){var i=this.cellSize*this.cellSize,o=i/e/e,l=o*t/i,s=Math.ceil(l),d=[];if(r)for(var u=Math.max(0,Math.floor(r.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(r.x2/this.cellSize)),p=Math.max(0,Math.floor(r.y1/this.cellSize)),f=Math.min(this.rows-1,Math.floor(r.y2/this.cellSize)),h=p;h<=f;h++)for(var b=u;b<=c;b++){var m=h*this.columns+b,v=this.cells[m];if(v)for(var g=0;g<Math.min(s,v.length);g++)d.push(v[g].key)}else for(var y in this.cells)for(var x=this.cells[y],_=0;_<Math.min(s,x.length);_++)d.push(x[_].key);return d}}])})();function Xc(n){var a=n.graph,e=n.hoveredNode,t=n.highlightedNodes,r=n.displayedNodeLabels,i=new Set,o=new Set(t);e&&o.add(e);var l=z(o),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;a.hasNode(d)&&a.forEachEdge(d,function(f){i.add(f)})}}catch(f){l.e(f)}finally{l.f()}var u=z(r),c;try{var p=function(){var h=c.value;if(o.has(h))return 1;a.forEachEdge(h,function(b,m,v,g){var y=v===h?g:v;r.has(y)&&i.add(b)})};for(u.s();!(c=u.n()).done;)p()}catch(f){u.e(f)}finally{u.f()}return Array.from(i)}var Ut=150,Ht=50,Yc={both:0,node:1,label:2},Kc={over:0,above:1,below:2,auto:3},is=12,Zc=3,Qc=(function(){function n(a){Z(this,n),E(this,"labelGrid",new ma),E(this,"edgeAnchorGrid",new ma),E(this,"displayedNodeLabels",new Set),E(this,"displayedEdgeLabels",new Set),E(this,"edgeLabelCandidates",[]),E(this,"renderedNodeLabels",new Set),E(this,"labelSizeCache",new Map),E(this,"framePassPoints",new Float32Array(0)),E(this,"labelsDirty",!0),this.internals=a}return Q(n,[{key:"resetFrame",value:function(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}},{key:"clearEdgeLabels",value:function(){this.displayedEdgeLabels=new Set}},{key:"resetLabelGrid",value:function(){this.labelGrid=new ma,this.edgeAnchorGrid=new ma}},{key:"processWebGLLabels",value:function(e){for(var t,r=this.internals,i=r.labelProgram,o=r.primitives,l=r.nodeDataCache,s=(o==null||(t=o.nodes)===null||t===void 0||(t=t.label)===null||t===void 0||(t=t.font)===null||t===void 0?void 0:t.family)||"sans-serif",d=new Map,u=0,c=e.length;u<c;u++){var p=e[u],f=l[p];if(!(f.visibility==="hidden"||!f.label)){var h=f.labelFont||s,b=d.get(h);b?b.push(f.label):d.set(h,[f.label])}}var m=z(d),v;try{for(m.s();!(v=m.n()).done;){var g=ne(v.value,2),y=g[0],x=g[1],_=Kn(y),T=_.family,R=_.weight,S=_.style,A=i.registerFont(T,R,S);i.ensureGlyphsReady(x,A)}}catch(C){m.e(C)}finally{m.f()}}},{key:"measureNodeLabel",value:function(e){var t,r;if(!e.label)return{width:0,height:0,textHeight:0};var i=this.internals,o=i.labelProgram,l=i.primitives,s=(t=e.labelSize)!==null&&t!==void 0?t:14,d=e.labelFont||(l==null||(r=l.nodes)===null||r===void 0||(r=r.label)===null||r===void 0||(r=r.font)===null||r===void 0?void 0:r.family)||"sans-serif",u="".concat(e.label,"|").concat(s,"|").concat(d);if(this.labelSizeCache.has(u))return this.labelSizeCache.get(u);var c=Kn(d),p=c.family,f=c.weight,h=c.style,b=o.registerFont(p,f,h),m=o.measureLabel(e.label,s,b);return this.labelSizeCache.set(u,m),m}},{key:"nodeLabelBox",value:function(e,t){var r,i,o,l,s;if(e.visibility==="hidden"||e.labelVisibility==="hidden")return null;var d=this.measureNodeLabel(e),u=d.width,c=d.height,p=d.textHeight;if(!u)return null;var f=(r=(i=this.internals.primitives)===null||i===void 0||(i=i.nodes)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:ht,h=t+f,b=e.labelBackgroundColor?(o=e.labelBackgroundPadding)!==null&&o!==void 0?o:la:0,m=u/2,v=c/2,g=m+b,y=v+b,x=p/2,_=0,T=0;switch((l=e.labelPosition)!==null&&l!==void 0?l:"right"){case"left":_=-(h+m);break;case"above":T=-(h+x);break;case"below":T=h+x;break;case"over":break;default:_=h+m}var R=(s=e.labelAngle)!==null&&s!==void 0?s:0,S=Fa({x:_,y:T},R),A=S.x,C=S.y,P=Math.abs(Math.cos(R)),w=Math.abs(Math.sin(R)),I=P*g+w*y,L=w*g+P*y;return{minX:A-I,maxX:A+I,minY:C-L,maxY:C+L}}},{key:"computeDisplayedNodeLabels",value:function(){var e=this.internals.getCameraState(),t=this.internals.getDimensions(),r=t.width,i=t.height,o=this.internals.viewportToFramedGraph({x:-Ut,y:-Ht}),l=this.internals.viewportToFramedGraph({x:r+Ut,y:-Ht}),s=this.internals.viewportToFramedGraph({x:-Ut,y:i+Ht}),d=this.internals.viewportToFramedGraph({x:r+Ut,y:i+Ht}),u=Math.min(o.x,l.x,s.x,d.x),c=Math.max(o.x,l.x,s.x,d.x),p=Math.min(o.y,l.y,s.y,d.y),f=Math.max(o.y,l.y,s.y,d.y),h=Ye({x:.5,y:.5,ratio:1,angle:0},{width:r,height:i},this.internals.getGraphDimensions(),this.internals.getStagePadding()),b=function(D){var G=Lt(h,D);return{x:(1+G.x)*r/2,y:(1-G.y)*i/2}},m=b({x:u,y:p}),v=b({x:c,y:p}),g=b({x:u,y:f}),y=b({x:c,y:f}),x={x1:Math.min(m.x,v.x,g.x,y.x),y1:Math.min(m.y,v.y,g.y,y.y),x2:Math.max(m.x,v.x,g.x,y.x),y2:Math.max(m.y,v.y,g.y,y.y)},_=this.internals,T=_.settings,R=_.nodeDataCache,S=_.nodesWithForcedLabels,A=this.labelGrid.getLabelsToDisplay(e.ratio,T.labelDensity,x);Ya(A,S);for(var C=0,P=A.length;C<P;C++){var w=A[C],I=R[w];if(!this.displayedNodeLabels.has(w)&&!(I.visibility==="hidden"||I.labelVisibility==="hidden")&&I.label&&!(I.x<u||I.x>c||I.y<p||I.y>f)){var L=this.internals.framedGraphToViewport(I),k=L.x,N=L.y,M=this.internals.scaleSize(I.size);!Qe(I)&&M<T.labelRenderedSizeThreshold||k<-Ut-M||k>r+Ut+M||N<-Ht-M||N>i+Ht+M||this.displayedNodeLabels.add(w)}}}},{key:"buildFramePassPoints",value:function(){var e=this.internals,t=e.nodeDataCache,r=e.nodeDataTexture;if(!r)return{data:this.framePassPoints,count:0};var i=this.displayedNodeLabels.size*3;this.framePassPoints.length<i&&(this.framePassPoints=new Float32Array(i));var o=this.framePassPoints,l=0,s=z(this.displayedNodeLabels),d;try{for(s.s();!(d=s.n()).done;){var u,c,p=d.value,f=t[p];if(f){var h=r.getIndex(p);h<0||(o[l*3]=h,o[l*3+1]=(u=ct[f.labelPosition||He.labelPosition])!==null&&u!==void 0?u:0,o[l*3+2]=(c=f.labelAngle)!==null&&c!==void 0?c:0,l++)}}}catch(b){s.e(b)}finally{s.f()}return{data:o,count:l}}},{key:"renderWebGLLabels",value:function(e,t){var r=this.internals,i=r.nodeDataCache,o=r.labelProgram,l=r.primitives,s=r.nodeDataTexture,d=[],u=z(this.displayedNodeLabels),c;try{for(u.s();!(c=u.n()).done;){var p=c.value;if(!this.renderedNodeLabels.has(p)){var f=i[p];t&&f.labelDepth!==t||(this.renderedNodeLabels.add(p),d.push(p))}}}catch(_e){u.e(_e)}finally{u.f()}if(d.length!==0){if(this.labelsDirty){for(var h,b,m,v=0,g=0,y=d.length;g<y;g++){var x=i[d[g]];v+=x.label.length}o.reallocate(v);for(var _=14,T=(h=l==null||(b=l.nodes)===null||b===void 0||(b=b.label)===null||b===void 0?void 0:b.margin)!==null&&h!==void 0?h:ht,R=He.labelPosition,S=(l==null||(m=l.nodes)===null||m===void 0||(m=m.label)===null||m===void 0||(m=m.font)===null||m===void 0?void 0:m.family)||"sans-serif",A=new Map,C=0,P=0,w=d.length;P<w;P++){var I,L,k,N,M=d[P],F=i[M],D=F.labelFont||S,G=A.get(D);if(G===void 0){var H=Kn(D),U=H.family,$=H.weight,K=H.style;G=o.registerFont(U,$,K),A.set(D,G)}var te={text:F.label,x:F.x,y:F.y,size:(I=F.labelSize)!==null&&I!==void 0?I:_,color:F.labelColor,nodeSize:F.size,margin:T,position:(L=F.labelPosition)!==null&&L!==void 0?L:R,hidden:!1,forceLabel:Qe(F),type:"default",zIndex:(k=F.zIndex)!==null&&k!==void 0?k:0,parentType:"node",parentKey:M,fontKey:G,labelAngle:(N=F.labelAngle)!==null&&N!==void 0?N:0,nodeIndex:s.getIndex(M)},ue=o.processLabel(M,C,te);C+=ue}o.invalidateBuffers()}o.render(e)}}},{key:"renderBackdrops",value:function(e,t){var r=this.internals,i=r.backdropProgram,o=r.nodeDataCache,l=r.nodesWithBackdrop,s=r.attachmentManager,d=r.pixelRatio,u=r.nodeDataTexture,c=[],p=z(l),f;try{for(p.s();!(f=p.n()).done;){var h,b=f.value,m=o[b];if(!(!m||m.visibility==="hidden")&&!(t&&m.depth!==t)){var v=(h=u?.getIndex(b))!==null&&h!==void 0?h:-1;v<0||c.push({key:b,nodeIndex:v})}}}catch(st){p.e(st)}finally{p.f()}if(c.length!==0){i.reallocate(c.length);for(var g=0;g<c.length;g++){var y,x,_,T,R,S,A,C,P=c[g],w=P.key,I=P.nodeIndex,L=o[w],k=this.displayedNodeLabels.has(w),N=k?this.measureNodeLabel(L):{width:0,height:0,textHeight:0},M=N.textHeight,F=N.width,D=N.height,G=0,H=0;if(k&&L.labelAttachment&&s){var U=s.getEntry(w,L.labelAttachment);if(U){var $=L.labelAttachmentPlacement||"below";if($==="below"||$==="above"){var K=U.height/d;D+=K+rt,F=Math.max(F,U.width/d),H=$==="below"?(K+rt)/2:-(K+rt)/2}else{var te=U.width/d;F+=te+rt,D=Math.max(D,U.height/d),G=$==="right"?(te+rt)/2:-(te+rt)/2}}}var ue=L.backdropColor?Ke(L.backdropColor):[255,255,255,255],_e=L.backdropShadowColor?Ke(L.backdropShadowColor):[0,0,0,128],Ce=ue.map(function(st){return st/255}),Kt=_e.map(function(st){return st/255}),An=(y=L.backdropShadowBlur)!==null&&y!==void 0?y:12,_t=(x=L.backdropPadding)!==null&&x!==void 0?x:6,Ms=L.backdropBorderColor?Ke(L.backdropBorderColor):[0,0,0,0],zs=Ms.map(function(st){return st/255}),Os=(_=L.backdropBorderWidth)!==null&&_!==void 0?_:0,Bs=(T=L.backdropCornerRadius)!==null&&T!==void 0?T:0,Or=(R=L.backdropLabelPadding)!==null&&R!==void 0?R:-1,Ws=Or<0?_t:Or,Us=(S=Yc[(A=L.backdropArea)!==null&&A!==void 0?A:"both"])!==null&&S!==void 0?S:0,Hs={key:w,nodeIndex:I,label:L.label,labelWidth:F,labelHeight:D,textHeight:M,type:"default",position:L.labelPosition||He.labelPosition,labelAngle:(C=L.labelAngle)!==null&&C!==void 0?C:0,backdropColor:Ce,backdropShadowColor:Kt,backdropShadowBlur:An,backdropPadding:_t,backdropBorderColor:zs,backdropBorderWidth:Os,backdropCornerRadius:Bs,backdropLabelPadding:Ws,backdropArea:Us,labelBoxOffset:[G,H]};i.processBackdrop(g,Hs)}i.invalidateBuffers(),i.render(e)}}},{key:"renderLabelBackgrounds",value:function(e,t){var r=this.internals,i=r.labelBackgroundProgram,o=r.nodeDataCache,l=r.nodeDataTexture,s=pe.nodeLabel.writesPickingThisFrame(this.internals),d=[],u=z(this.displayedNodeLabels),c;try{for(u.s();!(c=u.n()).done;){var p=c.value,f=o[p];!f||f.visibility==="hidden"||t&&f.labelDepth!==t||!s&&!f.labelBackgroundColor||d.push(p)}}catch(I){u.e(I)}finally{u.f()}if(d.length!==0){i.reallocate(d.length);for(var h=0;h<d.length;h++){var b,m,v,g,y=d[h],x=o[y],_=(b=l?.getIndex(y))!==null&&b!==void 0?b:-1;if(!(_<0)){var T=this.measureNodeLabel(x),R=T.width,S=T.height,A=T.textHeight,C=vt(this.internals.pickingState,"nodeLabel",y)||vt(this.internals.pickingState,"node",y),P=x.labelBackgroundColor?Ae(x.labelBackgroundColor):Ae("transparent"),w={nodeIndex:_,id:Ct(C),color:P,labelWidth:R,labelHeight:S,textHeight:A,positionMode:(m=ct[x.labelPosition||He.labelPosition])!==null&&m!==void 0?m:0,labelAngle:(v=x.labelAngle)!==null&&v!==void 0?v:0,padding:(g=x.labelBackgroundPadding)!==null&&g!==void 0?g:la};i.processLabelBackground(h,w)}}i.invalidateBuffers(),i.render(e)}}},{key:"cacheAttachments",value:function(e){var t=this.internals,r=t.attachmentManager,i=t.pixelRatio,o=t.nodeDataCache,l=t.nodesWithBackdrop,s=t.graph;if(r){var d=z(l),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;if(this.displayedNodeLabels.has(c)){var p=o[c];if(!(!p||p.visibility==="hidden")&&!(e&&p.depth!==e)&&p.labelAttachment){var f=s.getNodeAttributes(c),h=this.measureNodeLabel(p),b=h.width,m=h.height,v={node:c,attributes:f,pixelRatio:i,labelWidth:b,labelHeight:m};r.renderAttachment(c,p.labelAttachment,v)}}}}catch(g){d.e(g)}finally{d.f()}r.regenerateAtlas()}}},{key:"renderAttachments",value:function(e,t){var r=this.internals,i=r.attachmentManager,o=r.attachmentProgram,l=r.nodeDataCache,s=r.nodesWithBackdrop,d=r.pixelRatio,u=r.nodeDataTexture;if(!(!i||!o)){var c=0;o.reallocateAttachments(s.size);var p=z(s),f;try{for(p.s();!(f=p.n()).done;){var h,b,m,v,g=f.value;if(this.displayedNodeLabels.has(g)){var y=l[g];if(!(!y||y.visibility==="hidden")&&!(t&&y.labelDepth!==t)&&y.labelAttachment){var x=i.getEntry(g,y.labelAttachment);if(x){var _=(h=u?.getIndex(g))!==null&&h!==void 0?h:-1;if(!(_<0)){var T=this.measureNodeLabel(y),R=T.width,S=T.height,A=T.textHeight,C=(b=fo[y.labelAttachmentPlacement||"below"])!==null&&b!==void 0?b:0;o.processAttachment(c,{nodeIndex:_,atlasX:x.x,atlasY:x.y,atlasW:x.width,atlasH:x.height,attachWidth:x.width/d,attachHeight:x.height/d,positionMode:(m=ct[y.labelPosition||He.labelPosition])!==null&&m!==void 0?m:0,attachmentPlacement:C,labelWidth:R,labelHeight:S,textHeight:A,labelAngle:(v=y.labelAngle)!==null&&v!==void 0?v:0}),c++}}}}}}catch(P){p.e(P)}finally{p.f()}c!==0&&(o.reallocateAttachments(c),i.bindTexture(pn),o.invalidateBuffers(),o.render(e))}}},{key:"computeDisplayedEdgeLabels",value:function(){var e=this.internals,t=e.graph,r=e.stateManager,i=e.settings,o=e.edgesWithForcedLabels,l=r.getHighlightedNodes(),s=i.edgeLabelAnchors==="allNodes"?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,i.labelDensity)):this.displayedNodeLabels,d=r.hovered,u=Xc({graph:t,hoveredNode:d?.kind==="node"?d.key:null,displayedNodeLabels:s,highlightedNodes:l});Ya(u,o),this.edgeLabelCandidates=u,this.displayedEdgeLabels=new Set}},{key:"filterEdgeLabelsForDepth",value:function(e){for(var t=this.internals,r=t.graph,i=t.nodeDataCache,o=t.edgeDataCache,l=[],s=new Set,d=0,u=this.edgeLabelCandidates.length;d<u;d++){var c=this.edgeLabelCandidates[d];if(!s.has(c)){s.add(c);var p=r.extremities(c),f=i[p[0]],h=i[p[1]],b=o[c];!b||!f||!h||b.visibility==="hidden"||b.labelVisibility==="hidden"||f.visibility==="hidden"||h.visibility==="hidden"||e&&b.labelDepth!==e||b.label&&l.push(c)}}return l}},{key:"renderEdgeLabels",value:function(e,t){var r=this.internals,i=r.graph,o=r.nodeDataCache,l=r.edgeDataCache,s=r.primitives,d=r.edgeLabelProgram,u=r.nodeDataTexture,c=r.edgeDataTexture,p=this.filterEdgeLabelsForDepth(t),f=z(p),h;try{for(f.s();!(h=f.n()).done;){var b=h.value;this.displayedEdgeLabels.add(b)}}catch(te){f.e(te)}finally{f.f()}if(p.length!==0){if(this.labelsDirty){var m,v,g=0,y=z(p),x;try{for(y.s();!(x=y.n()).done;){var _=x.value;g+=l[_].label.length}}catch(te){y.e(te)}finally{y.f()}d.reallocate(g);var T=(m=s==null||(v=s.edges)===null||v===void 0||(v=v.label)===null||v===void 0?void 0:v.margin)!==null&&m!==void 0?m:5,R="over",S=0,A=z(p),C;try{for(A.s();!(C=A.n()).done;){var P,w,I=C.value,L=i.extremities(I),k=L[0],N=L[1],M=o[k],F=o[N],D=l[I],G=u.getIndex(k),H=u.getIndex(N),U=c.getIndex(I),$={text:D.label,x:(M.x+F.x)/2,y:(M.y+F.y)/2,size:is,color:D.labelColor,nodeSize:0,nodeIndex:-1,margin:T,position:(P=D.labelPosition)!==null&&P!==void 0?P:R,hidden:!1,forceLabel:Qe(D),type:"default",zIndex:(w=D.zIndex)!==null&&w!==void 0?w:0,parentType:"edge",parentKey:I,fontKey:"",labelAngle:0,sourceX:M.x,sourceY:M.y,targetX:F.x,targetY:F.y,sourceSize:M.size,targetSize:F.size,sourceShape:M.shape||"circle",targetShape:F.shape||"circle",edgeSize:D.size,offset:0,edgeAttributes:D,sourceNodeIndex:G,targetNodeIndex:H,edgeIndex:U},K=d.processEdgeLabel(I,S,$);S+=K}}catch(te){A.e(te)}finally{A.f()}d.invalidateBuffers()}d.render(e)}}},{key:"renderEdgeLabelBackgrounds",value:function(e,t){var r,i,o=this.internals,l=o.edgeLabelBackgroundProgram,s=o.edgeLabelProgram,d=o.edgeDataCache,u=o.primitives,c=o.edgeDataTexture;if(c){var p=pe.edgeLabel.writesPickingThisFrame(this.internals),f=(r=u==null||(i=u.edges)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:5,h="over",b=this.filterEdgeLabelsForDepth(t),m=[],v=z(b),g;try{for(v.s();!(g=v.n()).done;){var y=g.value;!p&&!d[y].labelBackgroundColor||m.push(y)}}catch(M){v.e(M)}finally{v.f()}if(m.length!==0){l.reallocate(m.length);for(var x=0;x<m.length;x++){var _,T,R,S=m[x],A=d[S],C=A.label,P=s.measureLabelAtlasWidth(C),w=(_=A.labelPosition)!==null&&_!==void 0?_:h,I=typeof w=="string"&&(T=Kc[w])!==null&&T!==void 0?T:0,L=vt(this.internals.pickingState,"edgeLabel",S)||vt(this.internals.pickingState,"edge",S),k=A.labelBackgroundColor?Ae(A.labelBackgroundColor):Ae("transparent"),N={edgeIndex:c.getIndex(S),baseFontSize:is,totalTextWidth:P,positionMode:I,margin:f,padding:(R=A.labelBackgroundPadding)!==null&&R!==void 0?R:Zc,color:k,id:Ct(L),edgeAttributes:A};l.processEdgeLabelBackground(x,S,N)}l.invalidateBuffers(),l.render(e)}}}}])})(),Jc=(function(){function n(a,e,t,r){Z(this,n),E(this,"nodeStates",new Map),E(this,"edgeStates",new Map),E(this,"hovered",null),E(this,"dirtyNodes",new Set),E(this,"dirtyEdges",new Set),E(this,"graphStateChanged",!1),E(this,"graphStateFlagsDirty",!1),this.scheduleRefresh=a,this.customNodeStateDefaults=e,this.customEdgeStateDefaults=t,this.customGraphStateDefaults=r,this.graphState=Ua(r)}return Q(n,[{key:"getNodeState",value:function(e){e=""+e;var t=this.nodeStates.get(e);return t||(t=Fi(this.customNodeStateDefaults),this.nodeStates.set(e,t)),t}},{key:"getEdgeState",value:function(e){e=""+e;var t=this.edgeStates.get(e);return t||(t=Ii(this.customEdgeStateDefaults),this.edgeStates.set(e,t)),t}},{key:"getGraphState",value:function(){return this.flushGraphStateFlags(),this.graphState}},{key:"getHighlightedNodes",value:function(){var e=new Set,t=z(this.nodeStates),r;try{for(t.s();!(r=t.n()).done;){var i=ne(r.value,2),o=i[0],l=i[1];l.isHighlighted&&e.add(o)}}catch(s){t.e(s)}finally{t.f()}return e}},{key:"setNodeState",value:function(e,t){e=""+e;var r=this.getNodeState(e);if(Ft(r,t)){var i=O(O({},r),t);this.nodeStates.set(e,i),this.dirtyNodes.add(e),this.updateHoveredNodeTracking(e,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setEdgeState",value:function(e,t){e=""+e;var r=this.getEdgeState(e);if(Ft(r,t)){var i=O(O({},r),t);this.edgeStates.set(e,i),this.dirtyEdges.add(e),this.updateHoveredEdgeTracking(e,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setGraphState",value:function(e){if(Ft(this.graphState,e)){var t=O(O({},this.graphState),e);t.isIdle=!t.isPanning&&!t.isZooming&&!t.isDragging,this.graphState=t,this.graphStateChanged=!0,this.scheduleRefresh()}}},{key:"setNodesState",value:function(e,t){var r=!1,i=z(e),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;l=""+l;var s=this.getNodeState(l);if(Ft(s,t)){var d=O(O({},s),t);this.nodeStates.set(l,d),this.dirtyNodes.add(l),this.updateHoveredNodeTracking(l,s,d),r=!0}}}catch(u){i.e(u)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"setEdgesState",value:function(e,t){var r=!1,i=z(e),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;l=""+l;var s=this.getEdgeState(l);if(Ft(s,t)){var d=O(O({},s),t);this.edgeStates.set(l,d),this.dirtyEdges.add(l),this.updateHoveredEdgeTracking(l,s,d),r=!0}}}catch(u){i.e(u)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"removeNode",value:function(e){this.nodeStates.delete(e),this.dirtyNodes.delete(e),this.clearHoveredFor("node",e)}},{key:"removeEdge",value:function(e){this.edgeStates.delete(e),this.dirtyEdges.delete(e),this.clearHoveredFor("edge",e)}},{key:"pruneNodes",value:function(e){var t=z(this.nodeStates.keys()),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;e(i)||this.removeNode(i)}}catch(o){t.e(o)}finally{t.f()}}},{key:"pruneEdges",value:function(e){var t=z(this.edgeStates.keys()),r;try{for(t.s();!(r=t.n()).done;){var i=r.value;e(i)||this.removeEdge(i)}}catch(o){t.e(o)}finally{t.f()}}},{key:"clearNodes",value:function(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(Sr("node"))}},{key:"clearEdges",value:function(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(Sr("edge"))}},{key:"resetGraphState",value:function(){this.graphState=Ua(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}},{key:"clearDirtyTracking",value:function(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}},{key:"setHovered",value:function(e){this.hovered=e}},{key:"clearHoveredFor",value:function(e,t){this.hovered&&this.hovered.key===t&&Sr(e).includes(this.hovered.kind)&&(this.hovered=null)}},{key:"clearHoveredForKinds",value:function(e){this.hovered&&e.includes(this.hovered.kind)&&(this.hovered=null)}},{key:"updateGraphStateFromNodes",value:function(){var e,t=!1,r=!1,i=!1,o=z(this.nodeStates),l;try{for(o.s();!(l=o.n()).done;){var s=ne(l.value,2),d=s[1];if(d.isHovered&&(t=!0),d.isHighlighted&&(r=!0),d.isDragged&&(i=!0),t&&r&&i)break}}catch(c){o.e(c)}finally{o.f()}!t&&((e=this.hovered)===null||e===void 0?void 0:e.kind)==="edge"&&(t=!0);var u=!this.graphState.isPanning&&!this.graphState.isZooming&&!i;(this.graphState.hasHovered!==t||this.graphState.hasHighlighted!==r||this.graphState.isDragging!==i||this.graphState.isIdle!==u)&&(this.graphStateChanged=!0),this.graphState=O(O({},this.graphState),{},{hasHovered:t,hasHighlighted:r,isDragging:i,isIdle:u})}},{key:"updateGraphStateFromEdges",value:function(){var e,t=((e=this.hovered)===null||e===void 0?void 0:e.kind)==="node";if(!t){var r=z(this.edgeStates),i;try{for(r.s();!(i=r.n()).done;){var o=ne(i.value,2),l=o[1];if(l.isHovered){t=!0;break}}}catch(s){r.e(s)}finally{r.f()}}this.graphState.hasHovered!==t&&(this.graphStateChanged=!0),this.graphState=O(O({},this.graphState),{},{hasHovered:t})}},{key:"flushGraphStateFlags",value:function(){this.graphStateFlagsDirty&&(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),this.graphStateFlagsDirty=!1)}},{key:"updateHoveredNodeTracking",value:function(e,t,r){var i;if(t.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="node"&&this.hovered.key!==e){var l=this.hovered.key,s=this.getNodeState(l);this.nodeStates.set(l,O(O({},s),{},{isHovered:!1})),this.dirtyNodes.add(l)}this.hovered={kind:"node",key:e}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="node"&&this.hovered.key===e&&(this.hovered=null)}},{key:"updateHoveredEdgeTracking",value:function(e,t,r){var i;if(t.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="edge"&&this.hovered.key!==e){var l=this.hovered.key,s=this.getEdgeState(l);this.edgeStates.set(l,O(O({},s),{},{isHovered:!1})),this.dirtyEdges.add(l)}this.hovered={kind:"edge",key:e}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="edge"&&this.hovered.key===e&&(this.hovered=null)}}])})(),os=1,ss=2,ls=3,ds=4,eh=(function(n){function a(e,t){var r,i,o,l,s,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Z(this,a),s=se(this,a),E(s,"nodeReducer",null),E(s,"edgeReducer",null),E(s,"stageCanvas",null),E(s,"mouseLayer",null),E(s,"gestureHint",null),E(s,"extraElements",{}),E(s,"webGLContext",null),E(s,"pickingFrameBuffer",null),E(s,"pickingTexture",null),E(s,"pickingDepthBuffer",null),E(s,"activeListeners",{}),E(s,"nodeVariableEntries",[]),E(s,"edgeVariableEntries",[]),E(s,"edgePathsByName",new Map),E(s,"nodeProgramIndex",{}),E(s,"edgeProgramIndex",{}),E(s,"edgeTextureIndexCache",{}),E(s,"nodeGraphCoords",{}),E(s,"nodeExtent",{x:[0,1],y:[0,1]}),E(s,"matrix",Se()),E(s,"invMatrix",Se()),E(s,"correctionRatio",1),E(s,"frameId",0),E(s,"customBBox",null),E(s,"gpuTimerExt",void 0),E(s,"activeGpuTimerQuery",null),E(s,"pendingGpuTimerQueries",[]),E(s,"normalizationFunction",qn({x:[0,1],y:[0,1]})),E(s,"graphToViewportRatio",1),E(s,"pickingState",Dc()),E(s,"prevNodeVisibilities",{}),E(s,"width",0),E(s,"height",0),E(s,"autoRescaleFrozen",!1),E(s,"stylesDeclaration",null),E(s,"resolvedStageStyle",{}),E(s,"renderFrame",null),E(s,"contextLost",!1),E(s,"pendingProcess","full"),E(s,"needToRefreshState",!1),E(s,"checkEdgesEventsFrame",null),E(s,"edgeStyleAnalysis",{dependency:"static",xAttribute:null,yAttribute:null}),E(s,"depthLayers",j(Un)),E(s,"customLayerPrograms",new Map),E(s,"nodeShapeSlug",null),E(s,"sdfAtlas",null),E(s,"depthRanges",{nodes:{},edges:{}}),E(s,"nodeBaseDepth",{}),E(s,"edgeBaseDepth",{});var u=d.primitives,c=d.styles,p=d.settings,f=p===void 0?{}:p,h=d.nodeReducer,b=d.edgeReducer,m=d.customNodeState,v=d.customEdgeState,g=d.customGraphState;s.stateManager=new Jc(function(){return s.scheduleStateRefresh()},m,v,g);var y=u??Mi;s.stylesDeclaration=c?{nodes:(r=c.nodes)!==null&&r!==void 0?r:Ze.nodes,edges:(i=c.edges)!==null&&i!==void 0?i:Ze.edges,stage:c.stage}:Ze,s.nodeReducer=h??null,s.edgeReducer=b??null;var x=Ha(s.stylesDeclaration.nodes);s.nodeReducer&&(x.dependency="graph-state"),s.edgeStyleAnalysis=Ha(s.stylesDeclaration.edges),s.edgeReducer&&(s.edgeStyleAnalysis.dependency="graph-state"),s.stylesDeclaration.stage&&(s.resolvedStageStyle=Xa(s.stylesDeclaration.stage,s.stateManager.graphState));var _=$i(f);if(Yn(_),_.enableNodeDrag){var T=x.xAttribute,R=x.yAttribute;if((!T||!R)&&!_.dragPositionToAttributes)throw new Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(Hi(e),!(t instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");s.container=t,s.edgeGroups=new wc(e,function(F,D){for(var G=0;G<F.length;G++){var H=s.stateManager.getEdgeState(F[G]);H.parallelIndex=G,H.parallelCount=D}});var S=new Rc(e,s.viewportToGraph.bind(s),s.setNodesState.bind(s),function(F,D){return s.emit(F,D)});if(s.depthLayers=(o=y.depthLayers)!==null&&o!==void 0?o:j(Un),!(c!=null&&c.nodes)&&!Bn.every(function(F){return s.depthLayers.includes(F)}))throw new Error("Sigma: depthLayers must include ".concat(Bn.join(", ")," for the built-in node styles."));if(!(c!=null&&c.edges)&&!Wn.every(function(F){return s.depthLayers.includes(F)}))throw new Error("Sigma: depthLayers must include ".concat(Wn.join(", ")," for the built-in edge styles."));s.itemBuckets={nodes:new pa(s.depthLayers),edges:new pa(s.depthLayers)},s.initWebGLContext(),s.mouseLayer=It("div",{position:"absolute",touchAction:"none",userSelect:"none"},{class:"sigma-mouse"}),s.container.appendChild(s.mouseLayer),s.resolvedStageStyle.background&&(s.container.style.backgroundColor=s.resolvedStageStyle.background),s.resolvedStageStyle.cursor&&(s.container.style.cursor=s.resolvedStageStyle.cursor);var A=new xr(s.webGLContext),C=new va(s.webGLContext,{channels:1}),P=new _r(s.webGLContext),w=new va(s.webGLContext,{channels:4}),I=s.webGLContext,L=new qc({gl:I,getFrameBuffer:function(){return s.pickingFrameBuffer},getPixelRatio:function(){return s.internals.pixelRatio},getDownSizingRatio:function(){return s.internals.settings.pickingDownSizingRatio},isRenderPending:function(){return s.renderFrame!==null},onIndex:function(D,G){var H;return fs(s.internals,(H=s.pickingState.lookup[D])!==null&&H!==void 0?H:null,G)}}),k=s.initPrograms(y,_),N=y==null||(l=y.nodes)===null||l===void 0?void 0:l.labelAttachments,M=null;return N&&Object.keys(N).length>0&&(M=new yr(I,N,function(){return s.scheduleRender()})),s.internals=O(O({nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:_,primitives:y,pixelRatio:ln(),graph:e,stateManager:s.stateManager,dragManager:S,hoverResolver:L,nodeStyleAnalysis:x,pickingState:s.pickingState},k),{},{attachmentManager:M,nodeDataTexture:A,nodeFrameTexture:C,edgeDataTexture:P,edgeFrameTexture:w,getDimensions:function(){return s.getDimensions()},getGraphDimensions:function(){return s.getGraphDimensions()},getStagePadding:function(){return s.getStagePadding()},getCameraState:function(){return s.camera.getState()},getHitAtPosition:function(D){return s.getHitAtPosition(D)},setNodeState:function(D,G){return s.setNodeState(D,G)},setEdgeState:function(D,G){return s.setEdgeState(D,G)},updateContainerCursor:function(){return s.updateContainerCursor()},scheduleRefresh:function(){return s.scheduleRefresh()},viewportToFramedGraph:function(D){return s.viewportToFramedGraph(D)},viewportToGraph:function(D){return s.viewportToGraph(D)},framedGraphToViewport:function(D){return s.framedGraphToViewport(D)},scaleSize:function(D){return s.scaleSize(D)},emit:function(D,G){return s.emit(D,G)}}),s.labelRenderer=new Qc(s.internals),s.resize(),s.initializeWebGLLabels(),s.camera=new Ko,s.bindCameraHandlers(),s.mouseCaptor=new Tc(s.mouseLayer,s),s.mouseCaptor.setSettings(s.internals.settings),s.touchCaptor=new Ac(s.mouseLayer,s),s.touchCaptor.setSettings(s.internals.settings),s.bindEventHandlers(),s.bindGraphHandlers(),s.handleSettingsUpdate(),s.refresh(),s}return le(a,n),Q(a,[{key:"initializeWebGLLabels",value:function(){this.sdfAtlas=new et,this.sdfAtlas.registerFont({family:"sans-serif",weight:"normal",style:"normal"})}},{key:"resetWebGLTexture",value:function(){var t=this.webGLContext;if(!this.pickingFrameBuffer)return this;var r=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),i=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);t.bindFramebuffer(t.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&t.deleteTexture(this.pickingTexture);var o=t.createTexture();o&&(t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r,i,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),this.pickingTexture=o),this.pickingDepthBuffer&&t.deleteRenderbuffer(this.pickingDepthBuffer);var l=t.createRenderbuffer();return l&&(t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,l),this.pickingDepthBuffer=l),t.bindFramebuffer(t.FRAMEBUFFER,null),this}},{key:"bindCameraHandlers",value:function(){var t=this;return this.activeListeners.camera=function(){t.refreshMatrices(),t.labelRenderer.labelsDirty=!0,t.scheduleRender()},this.activeListeners.cameraAnimationStart=function(r){var i=r.from,o=r.to;i.ratio!==o.ratio&&t.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=function(){t.stateManager.setGraphState({isZooming:!1})},this.camera.on("updated",this.activeListeners.camera),this.camera.on("animationStart",this.activeListeners.cameraAnimationStart),this.camera.on("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this.camera.removeListener("animationStart",this.activeListeners.cameraAnimationStart),this.camera.removeListener("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"getHitAtPosition",value:function(t){var r;if(this.contextLost)return null;var i=this.webGLContext;i.bindFramebuffer(i.FRAMEBUFFER,this.pickingFrameBuffer);var o=mi(i,this.pickingFrameBuffer,t.x,t.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),l=Na.apply(void 0,j(o));return(r=this.pickingState.lookup[l])!==null&&r!==void 0?r:null}},{key:"bindEventHandlers",value:function(){return Nc(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}},{key:"bindGraphHandlers",value:function(){return Gc({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}},{key:"unbindGraphHandlers",value:function(){Mc(this.internals.graph,this.activeListeners)}},{key:"getNodeShapeId",value:function(t){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&t.shape&&t.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[t.shape]]:Gt(t.shape||"circle")}},{key:"processNodes",value:function(){var t=this,r=this.internals.graph,i=this.internals.settings,o=this.getDimensions(),l=i.autoRescale,s=i.autoRescaleContent,d=this.nodeExtent;if(l===!1){var u=o.width,c=o.height;d={x:[-u/2,u/2],y:[-c/2,c/2]}}else(l!=="once"||!this.autoRescaleFrozen)&&(d=this.computeNodeExtent(),s!=="positions"&&!this.customBBox&&(d=Wc({extent:d,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:o,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:i.zoomToSizeRatioFunction,itemSizesReference:i.itemSizesReference,fitLabels:s==="labels",nodeLabelBox:function(H,U){return t.labelRenderer.nodeLabelBox(H,U)}})),l==="once"&&(this.autoRescaleFrozen=!0));this.nodeExtent=d,this.normalizationFunction=qn(this.customBBox||this.nodeExtent);var p=new Ko,f=Ye(p.getState(),o,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(o,i.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(o,i.labelGridCellSize);var h=i.renderEdgeLabels&&i.edgeLabelAnchors==="allNodes",b=!1;Er(this.pickingState,"node");for(var m=r.nodes(),v=0,g=m.length;v<g;v++){var y=m[v],x=this.internals.nodeDataCache[y],_=this.nodeGraphCoords[y];x.x=_.x,x.y=_.y,this.normalizationFunction.applyTo(x),x.visibility!==this.prevNodeVisibilities[y]&&(b=!0),typeof x.label=="string"&&x.visibility!=="hidden"&&x.labelVisibility!=="hidden"&&this.labelRenderer.labelGrid.add(y,x.size,this.framedGraphToViewport(x,{matrix:f})),h&&x.visibility!=="hidden"&&this.labelRenderer.edgeAnchorGrid.add(y,x.size,this.framedGraphToViewport(x,{matrix:f}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(m.length);var T=0;this.depthRanges.nodes={},this.nodeBaseDepth={};var R=this.internals.nodeDataCache,S=z(this.depthLayers),A;try{for(S.s();!(A=S.n()).done;){var C=A.value,P=this.itemBuckets.nodes.getSorted(C,function(G){return R[G].zIndex});if(P.length!==0){this.depthRanges.nodes[C]=[{offset:T,count:P.length}];var w=z(P),I;try{for(w.s();!(I=w.n()).done;){var L=I.value;this.nodeBaseDepth[L]=C,this.nodeProgram.allocateNode(L),es(this.pickingState,"node",L),this.addNodeToProgram(L,T++)}}catch(G){w.e(G)}finally{w.f()}}}}catch(G){S.e(G)}finally{S.f()}this.nodeProgram.invalidateBuffers();for(var k=0,N=m.length;k<N;k++)this.prevNodeVisibilities[m[k]]=this.internals.nodeDataCache[m[k]].visibility;this.labelRenderer.processWebGLLabels(m);var M=z(this.customLayerPrograms.values()),F;try{for(M.s();!(F=M.n()).done;){var D=F.value.program;D.cacheData&&D.cacheData()}}catch(G){M.e(G)}finally{M.f()}return b}},{key:"processEdges",value:function(){var t=this.internals.graph,r=t.edges();this.edgeProgram.reallocate(r.length);var i=0;Er(this.pickingState,"edge"),this.depthRanges.edges={},this.edgeBaseDepth={};var o=this.internals.edgeDataCache,l=z(this.depthLayers),s;try{for(l.s();!(s=l.n()).done;){var d=s.value,u=this.itemBuckets.edges.getSorted(d,function(h){return o[h].zIndex});if(u.length!==0){this.depthRanges.edges[d]=[{offset:i,count:u.length}];var c=z(u),p;try{for(c.s();!(p=c.n()).done;){var f=p.value;this.edgeBaseDepth[f]=d,es(this.pickingState,"edge",f),this.addEdgeToProgram(f,i++)}}catch(h){c.e(h)}finally{c.f()}}}}catch(h){l.e(h)}finally{l.f()}this.edgeProgram.invalidateBuffers()}},{key:"updateNodeDepthRanges",value:function(t,r,i){var o=this.nodeProgramIndex[t];o!==void 0&&(Qa(this.depthRanges.nodes,r,o),Ja(this.depthRanges.nodes,i,o))}},{key:"updateEdgeDepthRanges",value:function(t,r,i){var o=this.edgeProgramIndex[t];o!==void 0&&(Qa(this.depthRanges.edges,r,o),Ja(this.depthRanges.edges,i,o))}},{key:"handleSettingsUpdate",value:function(){var t=this,r=this.internals.settings;return this.camera.minRatio=r.minCameraRatio,this.camera.maxRatio=r.maxCameraRatio,this.camera.enabledZooming=r.enableCameraZooming,this.camera.enabledPanning=r.enableCameraPanning,this.camera.enabledRotation=r.enableCameraRotation,r.cameraPanBoundaries?this.camera.constrainState=function(i){return t.cleanCameraState(i,r.cameraPanBoundaries&&J(r.cameraPanBoundaries)==="object"?r.cameraPanBoundaries:{})}:this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=r.gestureTarget==="graph"?"none":r.gestureTarget==="shared"?"pan-x pan-y":"auto",r.gestureTarget!=="shared"&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}},{key:"cleanCameraState",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.tolerance,o=i===void 0?0:i,l=r.boundaries,s=O({},t),d=l||this.nodeExtent,u=ne(d.x,2),c=u[0],p=u[1],f=ne(d.y,2),h=f[0],b=f[1],m=[this.graphToViewport({x:c,y:h},{cameraState:t}),this.graphToViewport({x:p,y:h},{cameraState:t}),this.graphToViewport({x:c,y:b},{cameraState:t}),this.graphToViewport({x:p,y:b},{cameraState:t})],v=1/0,g=-1/0,y=1/0,x=-1/0;m.forEach(function(L){var k=L.x,N=L.y;v=Math.min(v,k),g=Math.max(g,k),y=Math.min(y,N),x=Math.max(x,N)});var _=g-v,T=x-y,R=this.getDimensions(),S=R.width,A=R.height,C=0,P=0;if(_>=S?g<S-o?C=g-(S-o):v>o&&(C=v-o):g>S+o?C=g-(S+o):v<-o&&(C=v+o),T>=A?x<A-o?P=x-(A-o):y>o&&(P=y-o):x>A+o?P=x-(A+o):y<-o&&(P=y+o),C||P){var w=this.viewportToFramedGraph({x:0,y:0},{cameraState:t}),I=this.viewportToFramedGraph({x:C,y:P},{cameraState:t});C=I.x-w.x,P=I.y-w.y,s.x+=C,s.y+=P}return s}},{key:"refreshMatrices",value:function(){var t=this.camera.getState(),r=this.getDimensions(),i=this.getGraphDimensions(),o=this.getStagePadding();this.matrix=Ye(t,r,i,o),this.invMatrix=Ye(t,r,i,o,!0),this.correctionRatio=fi(this.matrix,t,r),this.graphToViewportRatio=this.getGraphToViewportRatio()}},{key:"processData",value:function(){var t;this.emit("beforeProcess"),(t=this.internals.attachmentManager)===null||t===void 0||t.clear();var r=O({},this.pickingState.idsByKind),i=this.processNodes();(this.pendingProcess==="full"||i)&&this.processEdges(),Lc(this.pickingState,this.internals),Cc(r,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess="none",this.emit("afterProcess")}},{key:"render",value:function(){var t=this;if(this.contextLost)return this;this.emit("beforeRender");var r=function(){return t.internals.hoverResolver.frameRendered(),t.emit("afterRender"),t};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),(this.pendingProcess!=="none"||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!=="none"&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!=="none"&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return r();var i=this.mouseCaptor,o=this.camera.isAnimating()||i.isMoving||i.draggedEvents||i.currentWheelDirection;this.refreshMatrices(),this.frameId++;var l=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;l&&l.forEach(function(U){return U.resetDebugStats()}),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());var s=this.getRenderParams(),d=pe.edge.writesPickingThisFrame(this.internals)?s:O(O({},s),{},{pickingFrameBuffer:null});this.labelRenderer.resetFrame();var u=this.webGLContext,c=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),p=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(u.bindFramebuffer(u.FRAMEBUFFER,this.pickingFrameBuffer),u.viewport(0,0,c,p),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit("afterTexturesUpload"),this.internals.nodeDataTexture.bind(ls),this.internals.edgeDataTexture.bind(ds),this.edgeFramePass.run(s,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(os),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();var f=this.labelRenderer.buildFramePassPoints(),h=f.data,b=f.count;this.nodeFramePass.run(h,b,this.internals.nodeFrameTexture,s,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(ss)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();var m=z(this.customLayerPrograms.values()),v;try{for(m.s();!(v=m.n()).done;){var g=v.value.program;g.preRender&&g.preRender(s)}}catch(U){m.e(U)}finally{m.f()}u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA);var y=!this.internals.settings.hideLabelsOnMove||!o,x=z(this.depthLayers),_;try{for(x.s();!(_=x.n()).done;){var T=_.value,R=z(this.customLayerPrograms.values()),S;try{for(R.s();!(S=R.n()).done;){var A=S.value;A.depth===T&&A.program.render(s)}}catch(U){R.e(U)}finally{R.f()}var C=this.depthRanges.edges[T];if(C&&(!this.internals.settings.hideEdgesOnMove||!o)){var P=z(C),w;try{for(P.s();!(w=P.n()).done;){var I=w.value,L=I.offset,k=I.count;k>0&&this.edgeProgram.render(d,L,k)}}catch(U){P.e(U)}finally{P.f()}}this.internals.settings.renderEdgeLabels&&y&&(this.labelRenderer.renderEdgeLabelBackgrounds(pe.edgeLabel.writesPickingThisFrame(this.internals)?s:O(O({},s),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderEdgeLabels(s,T)),this.labelRenderer.cacheAttachments(T),this.labelRenderer.renderBackdrops(O(O({},s),{},{pickingFrameBuffer:null}),T);var N=this.depthRanges.nodes[T];if(N){var M=z(N),F;try{for(M.s();!(F=M.n()).done;){var D=F.value,G=D.offset,H=D.count;H>0&&this.nodeProgram.render(s,G,H)}}catch(U){M.e(U)}finally{M.f()}}y&&(this.labelRenderer.renderAttachments(O(O({},s),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderLabelBackgrounds(pe.nodeLabel.writesPickingThisFrame(this.internals)?s:O(O({},s),{},{pickingFrameBuffer:null}),T),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(s,T))}}catch(U){x.e(U)}finally{x.f()}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(u.bindFramebuffer(u.READ_FRAMEBUFFER,this.pickingFrameBuffer),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.blitFramebuffer(0,0,c,p,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,u.COLOR_BUFFER_BIT,u.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),l&&this.logRenderStats(l),r()}},{key:"getDebugPrograms",value:function(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(function(t){return t!==null})}},{key:"logRenderStats",value:function(t){var r={},i=z(t),o;try{for(i.s();!(o=i.n()).done;){var l=o.value;r[l.constructor.name]=O({},l.debugStats)}}catch(s){i.e(s)}finally{i.f()}console.log("[sigma] DEBUG_logRenderStats: frame #".concat(this.frameId)),console.table(r)}},{key:"getGpuTimerExtension",value:function(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension("EXT_disjoint_timer_query_webgl2"),this.gpuTimerExt||console.warn("Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.")),this.gpuTimerExt}},{key:"beginGpuTimerQuery",value:function(){var t=this.getGpuTimerExtension();if(t){var r=this.webGLContext,i=r.createQuery();i&&(r.beginQuery(t.TIME_ELAPSED_EXT,i),this.activeGpuTimerQuery=i)}}},{key:"endGpuTimerQuery",value:function(){!this.gpuTimerExt||!this.activeGpuTimerQuery||(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}},{key:"pollGpuTimerQueries",value:function(){if(this.pendingGpuTimerQueries.length!==0){var t=this.webGLContext,r=this.gpuTimerExt;if(!r){this.pendingGpuTimerQueries.forEach(function(c){var p=c.query;return t.deleteQuery(p)}),this.pendingGpuTimerQueries=[];return}var i=t.getParameter(r.GPU_DISJOINT_EXT),o=[],l=z(this.pendingGpuTimerQueries),s;try{for(l.s();!(s=l.n()).done;){var d=s.value;if(!t.getQueryParameter(d.query,t.QUERY_RESULT_AVAILABLE)){o.push(d);continue}if(!i){var u=t.getQueryParameter(d.query,t.QUERY_RESULT);console.log("[sigma] DEBUG_gpuTimerQueries: frame #".concat(d.frameId," GPU time = ").concat((u/1e6).toFixed(2),"ms"))}t.deleteQuery(d.query)}}catch(c){l.e(c)}finally{l.f()}this.pendingGpuTimerQueries=o}}},{key:"postEvaluateNode",value:function(t,r,i){var o=t;o.x===void 0&&(o.x=r.x),o.y===void 0&&(o.y=r.y),t.highlighted=i.isHighlighted;for(var l=0,s=this.nodeVariableEntries.length;l<s;l++){var d,u,c=ne(this.nodeVariableEntries[l],2),p=c[0],f=c[1];o[p]=(d=(u=o[p])!==null&&u!==void 0?u:r[p])!==null&&d!==void 0?d:f.default}}},{key:"addNode",value:function(t){var r=this.internals.graph.getNodeAttributes(t),i=this.stateManager.getNodeState(t),o=this.internals.nodeDataCache[t]||{};if(ja(this.stylesDeclaration.nodes,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateNode(o,r,i),this.nodeReducer){var l=this.nodeReducer(t,o,r,i,this.stateManager.graphState,this.internals.graph);o=O(O({},o),l)}if(typeof o.x!="number"||typeof o.y!="number")throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(t,'". ')+"Provide coordinates via node attributes, styles, or a nodeReducer.");this.internals.nodeShapeMap?(!o.shape||!(o.shape in this.internals.nodeShapeMap))&&(o.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(o.shape=this.nodeShapeSlug),this.internals.nodeDataCache[t]=o,this.nodeGraphCoords[t]={x:o.x,y:o.y},ut(this.internals.nodesWithForcedLabels,t,Qe(o)),ut(this.internals.nodesWithBackdrop,t,Za(o)),this.itemBuckets.nodes.set(t,o.depth)}},{key:"updateNode",value:function(t){this.addNode(t);var r=this.internals.nodeDataCache[t];this.normalizationFunction.applyTo(r)}},{key:"removeNode",value:function(t){this.itemBuckets.nodes.remove(t),delete this.internals.nodeDataCache[t],delete this.nodeGraphCoords[t],delete this.nodeProgramIndex[t],this.internals.dragManager.removeNode(t),this.stateManager.removeNode(t),this.internals.nodesWithForcedLabels.delete(t),this.internals.nodesWithBackdrop.delete(t)}},{key:"postEvaluateEdge",value:function(t,r){for(var i=t,o=0,l=this.edgeVariableEntries.length;o<l;o++){var s,d,u=ne(this.edgeVariableEntries[o],2),c=u[0],p=u[1];i[c]=(s=(d=i[c])!==null&&d!==void 0?d:r[c])!==null&&s!==void 0?s:p.default}}},{key:"applyEdgeSpread",value:function(t,r,i){var o;if(!(i.parallelCount<=1)){var l=this.internals.graph.source(t),s=this.internals.graph.target(t),d=l===s,u=d?r.selfLoopPath||r.path:r.parallelPath||r.path,c=u?this.edgePathsByName.get(u):void 0;if(c!=null&&c.spread){var p=(o=r.parallelSpread)!==null&&o!==void 0?o:.25,f=c.spread.compute(i.parallelIndex,i.parallelCount,p);!d&&this.internals.graph.isDirected(t)&&l>s&&(f=-f),r[c.spread.variable]=f}}}},{key:"addEdge",value:function(t){var r=this.internals.graph.getEdgeAttributes(t),i=this.stateManager.getEdgeState(t),o={};if(qa(this.stylesDeclaration.edges,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateEdge(o,r),this.edgeReducer){var l=this.edgeReducer(t,o,r,i,this.stateManager.graphState,this.internals.graph);o=O(O({},o),l)}this.applyEdgeSpread(t,o,i),this.internals.edgeDataCache[t]=o,ut(this.internals.edgesWithForcedLabels,t,Qe(o)),this.itemBuckets.edges.set(t,o.depth)}},{key:"updateEdge",value:function(t){this.addEdge(t)}},{key:"removeEdge",value:function(t){this.itemBuckets.edges.remove(t),delete this.internals.edgeDataCache[t],delete this.edgeProgramIndex[t],delete this.edgeTextureIndexCache[t],this.internals.edgeDataTexture.free(t),this.stateManager.removeEdge(t),this.internals.edgesWithForcedLabels.delete(t)}},{key:"clearNodeIndices",value:function(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}},{key:"clearEdgeIndices",value:function(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),Er(this.pickingState,"edge"),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}},{key:"clearEdgeState",value:function(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}},{key:"addNodeToProgram",value:function(t,r){var i,o=this.internals.nodeDataCache[t];this.internals.nodeDataTexture.allocate(t),(i=this.internals.nodeDataTexture).updateNode.apply(i,[t,o.x,o.y,o.size,this.getNodeShapeId(o)].concat(j(jn(o)),[o.color]));var l=this.internals.nodeDataTexture.getIndex(t);this.nodeProgram.process(vt(this.pickingState,"node",t),r,o,l,t),this.nodeProgramIndex[t]=r}},{key:"addEdgeToProgram",value:function(t,r){var i,o,l=this.internals.edgeDataCache[t],s=this.internals.graph.source(t),d=this.internals.graph.target(t),u=this.internals.edgeDataTexture.allocate(t);this.edgeTextureIndexCache[t]=u;var c=s===d,p=!c&&((i=(o=this.stateManager.getEdgeState(t))===null||o===void 0?void 0:o.parallelCount)!==null&&i!==void 0?i:1)>1,f=this.edgeProgram.resolveEdgeIds(l,c,p),h=f.pathId,b=f.headId,m=f.tailId,v=f.headLengthRatio,g=f.tailLengthRatio;this.internals.edgeDataTexture.updateEdge(t,this.internals.nodeDataTexture.getIndex(s),this.internals.nodeDataTexture.getIndex(d),l.size,v,g,h,b,m),this.edgeProgram.process(vt(this.pickingState,"edge",t),r,this.internals.nodeDataCache[s],this.internals.nodeDataCache[d],l,u),this.edgeProgramIndex[t]=r}},{key:"getRenderParams",value:function(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:ls,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:ss,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:ds,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:os,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:this.internals.settings.labelPixelSnapping?1:0}}},{key:"getStagePadding",value:function(){var t=this.internals.settings,r=t.stagePadding,i=t.autoRescale;return i&&r||0}},{key:"getLayerElement",value:function(t){if(t==="mouse")return this.mouseLayer;var r=this.extraElements[t];if(!r)throw new Error('Sigma: layer "'.concat(t,'" does not exist'));return r}},{key:"initWebGLContext",value:function(){var t=this,r=this.createWebGLContext("stage");this.stageCanvas=this.extraElements.stage,this.webGLContext=r,this.stageCanvas.addEventListener("webglcontextlost",function(i){t.webGLContext&&(i.preventDefault(),t.contextLost=!0,t.renderFrame&&(cancelAnimationFrame(t.renderFrame),t.renderFrame=null),t.gpuTimerExt=void 0,t.activeGpuTimerQuery=null,t.pendingGpuTimerQueries=[],t.emit("webglContextLost"))}),this.stageCanvas.addEventListener("webglcontextrestored",function(){requestAnimationFrame(function(){t.webGLContext&&!t.webGLContext.isContextLost()&&t.restoreWebGLContext()})}),this.initPickingFramebuffer()}},{key:"initPickingFramebuffer",value:function(){var t=this.webGLContext,r=t.createFramebuffer();if(!r)throw new Error("Sigma: cannot create picking frame buffer");t.bindFramebuffer(t.FRAMEBUFFER,r);var i=t.createTexture();if(!i)throw new Error("Sigma: cannot create picking texture");t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0);var o=t.createRenderbuffer();if(!o)throw new Error("Sigma: cannot create picking depth buffer");if(t.bindRenderbuffer(t.RENDERBUFFER,o),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,1,1),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,o),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)throw new Error("Sigma: picking framebuffer is not complete");t.bindFramebuffer(t.FRAMEBUFFER,null),this.pickingFrameBuffer=r,this.pickingTexture=i,this.pickingDepthBuffer=o}},{key:"initPrograms",value:function(t,r){var i=this,o=this.webGLContext,l=Uo(o,this.pickingFrameBuffer,i,t?.nodes,r.antialiasNodes),s=l.nodeProgram,d=l.labelProgram,u=l.backdropProgram,c=l.labelBackgroundProgram,p=l.attachmentProgram,f=l.framePass,h=l.shapeSlug,b=l.shapeNameToIndex,m=l.shapeGlobalIds,v=l.variables;this.nodeProgram=s,this.nodeFramePass=f,this.nodeVariableEntries=Object.entries(v),h&&(this.nodeShapeSlug=h);var g=Ho(o,this.pickingFrameBuffer,i,t?.edges,r.antialiasEdges,t?.nodes),y=g.edgeProgram,x=g.labelProgram,_=g.labelBackgroundProgram,T=g.framePass,R=g.variables,S=g.paths;return this.edgeProgram=y,this.edgeFramePass=T,this.edgeVariableEntries=Object.entries(R),this.edgePathsByName=new Map(S.map(function(A){return[A.name,A]})),{labelProgram:d,edgeLabelProgram:x,edgeLabelBackgroundProgram:_,backdropProgram:u,labelBackgroundProgram:c,attachmentProgram:p,nodeShapeMap:b??null,nodeGlobalShapeIds:m??null}}},{key:"restoreWebGLContext",value:function(){var t,r,i,o,l,s=this.internals;this.initPickingFramebuffer(),(t=s.nodeDataTexture)===null||t===void 0||t.restore(),(r=s.nodeFrameTexture)===null||r===void 0||r.restore(),(i=s.edgeDataTexture)===null||i===void 0||i.restore(),(o=s.edgeFrameTexture)===null||o===void 0||o.restore(),(l=s.attachmentManager)===null||l===void 0||l.restore(),s.hoverResolver.reset(),Object.assign(s,this.initPrograms(s.primitives,s.settings));var d=z(this.customLayerPrograms.values()),u;try{for(d.s();!(u=d.n()).done;){var c=u.value;c.program.kill(),c.program=c.factory(this.webGLContext)}}catch(p){d.e(p)}finally{d.f()}this.contextLost=!1,this.emit("webglContextRestored"),this.refresh()}},{key:"createLayer",value:function(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.extraElements[t])throw new Error('Sigma: a layer named "'.concat(t,'" already exists'));var o=It(r,{position:"absolute"},{class:"sigma-".concat(t)});return i.style&&Object.assign(o.style,i.style),this.extraElements[t]=o,"beforeLayer"in i&&i.beforeLayer?this.getLayerElement(i.beforeLayer).before(o):"afterLayer"in i&&i.afterLayer?this.getLayerElement(i.afterLayer).after(o):this.container.appendChild(o),o}},{key:"createCanvas",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(t,"canvas",r)}},{key:"createWebGLContext",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.createCanvas(t,r);r.hidden&&i.remove();var o=i.getContext("webgl2",O({preserveDrawingBuffer:!1,antialias:!1,depth:!0},r));if(!o)throw new Error("Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).");return o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o}},{key:"killLayer",value:function(t){if(t==="stage"||t==="mouse")throw new Error('Sigma: cannot kill built-in layer "'.concat(t,'"'));var r=this.extraElements[t];if(!r)throw new Error("Sigma: cannot kill layer ".concat(t,", which does not exist"));return r.remove(),delete this.extraElements[t],this}},{key:"getWebGLContext",value:function(){if(!this.webGLContext)throw new Error("Sigma: WebGL context is not available");return this.webGLContext}},{key:"getNodeDataTexture",value:function(){if(!this.internals.nodeDataTexture)throw new Error("Sigma: node data texture is not available");return this.internals.nodeDataTexture}},{key:"getNormalizationFunction",value:function(){return this.normalizationFunction}},{key:"addCustomLayerProgram",value:function(t,r,i){var o;if(!this.depthLayers.includes(r))throw new Error('Sigma: cannot add custom layer program at depth "'.concat(r,'", ')+"it must be declared in primitives.depthLayers. Current layers: ".concat(this.depthLayers.join(", ")));return(o=this.customLayerPrograms.get(t))===null||o===void 0||o.program.kill(),this.customLayerPrograms.set(t,{depth:r,factory:i,program:i(this.webGLContext)}),this.refresh(),this}},{key:"removeCustomLayerProgram",value:function(t){var r=this.customLayerPrograms.get(t);return r&&(r.program.kill(),this.customLayerPrograms.delete(t),this.scheduleRender()),this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(t){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=t,this.bindCameraHandlers(),this.scheduleRender(),this}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.internals.graph}},{key:"setGraph",value:function(t){return t===this.internals.graph?this:(this.stateManager.pruneNodes(function(r){return t.hasNode(r)}),this.stateManager.pruneEdges(function(r){return t.hasEdge(r)}),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=t,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh(),this)}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var t=this.customBBox||this.nodeExtent;return{width:t.x[1]-t.x[0]||1,height:t.y[1]-t.y[0]||1}}},{key:"getNodeDisplayData",value:function(t){var r=this.internals.nodeDataCache[t];return r?Object.assign({},r):void 0}},{key:"getEdgeDisplayData",value:function(t){var r=this.internals.edgeDataCache[t];return r?Object.assign({},r):void 0}},{key:"getNodeState",value:function(t){return this.stateManager.getNodeState(t)}},{key:"getEdgeState",value:function(t){return this.stateManager.getEdgeState(t)}},{key:"getGraphState",value:function(){return this.stateManager.getGraphState()}},{key:"setNodeState",value:function(t,r){return this.stateManager.setNodeState(t,r),this}},{key:"setEdgeState",value:function(t,r){return this.stateManager.setEdgeState(t,r),this}},{key:"setGraphState",value:function(t){return this.stateManager.setGraphState(t),this}},{key:"_setPanning",value:function(t){this.stateManager.setGraphState({isPanning:t})}},{key:"_setZooming",value:function(t){this.stateManager.setGraphState({isZooming:t})}},{key:"_hasNodeDrag",value:function(){var t=this.internals.dragManager;return!!(t.pendingNode||t.session)}},{key:"_showGestureHint",value:function(t){var r=this.internals.settings;r.gestureTarget==="shared"&&(this.gestureHint=this.gestureHint||new jc(this.container),this.gestureHint.show(t,r))}},{key:"setNodesState",value:function(t,r){return this.stateManager.setNodesState(t,r),this}},{key:"setEdgesState",value:function(t,r){return this.stateManager.setEdgesState(t,r),this}},{key:"updateContainerCursor",value:function(){var t=this.stateManager.hovered,r=this.resolvedStageStyle.cursor||"";this.container.style.cursor=t&&kc(this.internals,t)||r}},{key:"refreshStageStyle",value:function(){this.resolvedStageStyle=Xa(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedEdgeLabels)}},{key:"getSettings",value:function(){return O({},this.internals.settings)}},{key:"getSetting",value:function(t){return this.internals.settings[t]}},{key:"getStyles",value:function(){return O({},this.stylesDeclaration)}},{key:"getPrimitives",value:function(){return O({},this.internals.primitives)}},{key:"setSetting",value:function(t,r){return this.internals.settings[t]=r,Yn(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(t,r){return this.setSetting(t,r(this.internals.settings[t])),this}},{key:"setSettings",value:function(t){return this.internals.settings=O(O({},this.internals.settings),t),Yn(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"resize",value:function(t){var r=this.width,i=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=ln(),this.width===0)if(this.internals.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.internals.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!t&&r===this.width&&i===this.height)return this;this.labelRenderer.labelsDirty=!0;for(var o=0,l=[this.mouseLayer].concat(j(Object.values(this.extraElements)));o<l.length;o++){var s=l[o];s.style.width=this.width+"px",s.style.height=this.height+"px"}return this.webGLContext&&(this.stageCanvas.setAttribute("width",this.width*this.internals.pixelRatio+"px"),this.stageCanvas.setAttribute("height",this.height*this.internals.pixelRatio+"px"),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit("afterClear"),this}},{key:"scheduleStateRefresh",value:function(){this.needToRefreshState=!0,this.scheduleRender()}},{key:"refreshState",value:function(){var t=this,r;this.stateManager.flushGraphStateFlags();var i=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency==="graph-state",o=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency==="graph-state",l=!1;if(i)this.internals.graph.forEachNode(function(h){t.refreshNodeState(h)&&(l=!0)});else if(this.internals.nodeStyleAnalysis.dependency!=="static"){var s=z(this.stateManager.dirtyNodes),d;try{for(s.s();!(d=s.n()).done;){var u=d.value;this.refreshNodeState(u)&&(l=!0)}}catch(h){s.e(h)}finally{s.f()}}if(o)this.internals.graph.forEachEdge(function(h){t.refreshEdgeState(h)&&(l=!0)});else if(this.edgeStyleAnalysis.dependency!=="static"){var c=z(this.stateManager.dirtyEdges),p;try{for(c.s();!(p=c.n()).done;){var f=p.value;this.refreshEdgeState(f)&&(l=!0)}}catch(h){c.e(h)}finally{c.f()}}this.stateManager.graphStateChanged&&(r=this.stylesDeclaration)!==null&&r!==void 0&&r.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),l&&(this.pendingProcess="full")}},{key:"refreshNodeState",value:function(t){var r=this.internals.nodeDataCache[t];if(!r||this.nodeReducer){var i,o,l,s,d=(i=this.internals.nodeDataCache[t])===null||i===void 0?void 0:i.depth,u=(o=this.internals.nodeDataCache[t])===null||o===void 0?void 0:o.zIndex,c=(l=this.internals.nodeDataCache[t])===null||l===void 0?void 0:l.labelAttachment;this.updateNode(t);var p=this.internals.nodeDataCache[t];this.internals.attachmentManager&&p.labelAttachment!==c&&this.internals.attachmentManager.invalidateNode(t);var f;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&p.shape&&p.shape in this.internals.nodeShapeMap?f=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[p.shape]]:f=Gt(p.shape||"circle"),(s=this.internals.nodeDataTexture).updateNode.apply(s,[t,p.x,p.y,p.size,f].concat(j(jn(p)),[p.color])),d&&p.depth!==d&&this.updateNodeDepthRanges(t,d,p.depth);var h=this.nodeProgramIndex[t];return h!==void 0&&(this.addNodeToProgram(t,h),this.nodeProgram.invalidateBuffers()),u!==void 0&&p.zIndex!==u}var b=this.internals.graph.getNodeAttributes(t),m=this.stateManager.getNodeState(t),v=r.size,g=r.shape,y=r.depth,x=r.zIndex,_=r.labelAttachment,T=r.rotationAlignment,R=r.labelRotationAlignment,S=r.color;ja(this.stylesDeclaration.nodes,b,m,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,b,m);var A=this.nodeGraphCoords[t],C=r.x!==A.x||r.y!==A.y;if(C&&(A.x=r.x,A.y=r.y),this.normalizationFunction.applyTo(r),this.internals.nodeShapeMap?(!r.shape||!(r.shape in this.internals.nodeShapeMap))&&(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.attachmentManager&&r.labelAttachment!==_&&this.internals.attachmentManager.invalidateNode(t),ut(this.internals.nodesWithForcedLabels,t,Qe(r)),ut(this.internals.nodesWithBackdrop,t,Za(r)),C||r.size!==v||r.shape!==g||r.rotationAlignment!==T||r.labelRotationAlignment!==R||r.color!==S){var P,w;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&r.shape&&r.shape in this.internals.nodeShapeMap?w=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[r.shape]]:w=Gt(r.shape||"circle"),(P=this.internals.nodeDataTexture).updateNode.apply(P,[t,r.x,r.y,r.size,w].concat(j(jn(r)),[r.color]))}this.itemBuckets.nodes.set(t,r.depth),r.depth!==y&&this.updateNodeDepthRanges(t,y,r.depth);var I=this.nodeProgramIndex[t];return I!==void 0&&(this.addNodeToProgram(t,I),this.nodeProgram.invalidateBuffers()),r.zIndex!==x}},{key:"refreshEdgeState",value:function(t){var r=this.internals.edgeDataCache[t];if(!r||this.edgeReducer){var i=r?.depth,o=r?.zIndex;this.updateEdge(t);var l=this.internals.edgeDataCache[t];i&&l.depth!==i&&this.updateEdgeDepthRanges(t,i,l.depth);var s=this.edgeProgramIndex[t];return s!==void 0&&(this.addEdgeToProgram(t,s),this.edgeProgram.invalidateBuffers()),o!==void 0&&l.zIndex!==o}var d=this.internals.graph.getEdgeAttributes(t),u=this.stateManager.getEdgeState(t),c=r.depth,p=r.zIndex,f=r.size,h=r.path,b=r.selfLoopPath,m=r.parallelPath,v=r.head,g=r.tail;qa(this.stylesDeclaration.edges,d,u,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,d),this.applyEdgeSpread(t,r,u),ut(this.internals.edgesWithForcedLabels,t,Qe(r)),this.itemBuckets.edges.set(t,r.depth),r.depth!==c&&this.updateEdgeDepthRanges(t,c,r.depth);var y=this.edgeProgramIndex[t];if(y!==void 0){var x=r.size!==f||r.path!==h||r.selfLoopPath!==b||r.parallelPath!==m||r.head!==v||r.tail!==g;if(x)this.addEdgeToProgram(t,y),this.edgeProgram.invalidateBuffers();else{var _=this.internals.graph.source(t),T=this.internals.graph.target(t),R=this.internals.nodeDataCache[_],S=this.internals.nodeDataCache[T],A=this.edgeTextureIndexCache[t];this.edgeProgram.process(vt(this.pickingState,"edge",t),y,R,S,r,A),this.edgeProgram.invalidateBuffers()}}return r.zIndex!==p}},{key:"refresh",value:function(t){var r=this,i=t?.skipIndexation!==void 0?t?.skipIndexation:!1,o=t?.schedule!==void 0?t.schedule:!1,l=!t||!t.partialGraph;if(l)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(function(R){return r.addNode(R)}),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(function(R){return r.addEdge(R)}),this.pendingProcess="full";else{for(var s,d,u=((s=t.partialGraph)===null||s===void 0?void 0:s.nodes)||[],c=0,p=u?.length||0;c<p;c++){var f,h,b=""+u[c],m=(f=this.internals.nodeDataCache[b])===null||f===void 0?void 0:f.labelAttachment;if(this.updateNode(b),this.internals.attachmentManager&&((h=this.internals.nodeDataCache[b])!==null&&h!==void 0&&h.labelAttachment||m)&&this.internals.attachmentManager.invalidateNode(b),i){var v=this.nodeProgramIndex[b];if(v===void 0)throw new Error('Sigma: node "'.concat(b,`" can't be repaint`));this.addNodeToProgram(b,v)}}i&&u.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);for(var g=(t==null||(d=t.partialGraph)===null||d===void 0?void 0:d.edges)||[],y=0,x=g.length;y<x;y++){var _=""+g[y];if(this.updateEdge(_),i){var T=this.edgeProgramIndex[_];if(T===void 0)throw new Error('Sigma: edge "'.concat(_,`" can't be repaint`));this.addEdgeToProgram(_,T)}}i&&g.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!i&&this.pendingProcess!=="full"&&(this.pendingProcess=g.length>0?"full":"nodes")}return o?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var t=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){t.render()})),this}},{key:"scheduleRefresh",value:function(t){return this.refresh(O(O({},t),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(t,r){var i=this.camera.getState(),o=i.ratio,l=i.angle,s=i.x,d=i.y,u=this.internals.settings,c=u.minCameraRatio,p=u.maxCameraRatio;typeof p=="number"&&(r=Math.min(r,p)),typeof c=="number"&&(r=Math.max(r,c));var f=r/o,h={x:this.width/2,y:this.height/2},b=this.viewportToFramedGraph(t),m=this.viewportToFramedGraph(h);return{angle:l,x:(b.x-m.x)*(1-f)+s,y:(b.y-m.y)*(1-f)+d,ratio:r}}},{key:"viewRectangle",value:function(){var t=this.viewportToFramedGraph({x:0,y:0}),r=this.viewportToFramedGraph({x:this.width,y:0}),i=this.viewportToFramedGraph({x:0,y:this.height});return{x1:t.x,y1:t.y,x2:r.x,y2:r.y,height:r.y-i.y}}},{key:"framedGraphToViewport",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?Ye(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding()):this.matrix),l=Lt(o,t);return{x:(1+l.x)*this.width/2,y:(1-l.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?Ye(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding(),!0):this.invMatrix),l=Lt(o,{x:t.x/this.width*2-1,y:1-t.y/this.height*2});return isNaN(l.x)&&(l.x=0),isNaN(l.y)&&(l.y=0),l}},{key:"viewportToGraph",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(t,r))}},{key:"graphToViewport",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(t),r)}},{key:"graphToFramedGraph",value:function(t){return this.normalizationFunction(t)}},{key:"framedGraphToGraph",value:function(t){return this.normalizationFunction.inverse(t)}},{key:"getGraphToViewportRatio",value:function(){var t={x:0,y:0},r={x:1,y:1},i=Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2)),o=this.graphToViewport(t),l=this.graphToViewport(r),s=Math.sqrt(Math.pow(o.x-l.x,2)+Math.pow(o.y-l.y,2));return s/i}},{key:"computeNodeExtent",value:function(){var t=this.nodeGraphCoords,r=Object.keys(t);if(!r.length)return{x:[0,1],y:[0,1]};for(var i=1/0,o=-1/0,l=1/0,s=-1/0,d=0,u=r.length;d<u;d++){var c=t[r[d]],p=c.x,f=c.y;p<i&&(i=p),p>o&&(o=p),f<l&&(l=f),f>s&&(s=f)}return{x:[i,o],y:[l,s]}}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(t){return this.customBBox=t,this.scheduleRender(),this}},{key:"kill",value:function(){var t,r,i;this.emit("kill"),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null);for(var o=this.container;o.firstChild;)o.removeChild(o.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),this.internals.edgeLabelProgram.kill(),this.internals.edgeLabelBackgroundProgram.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),(t=this.internals.attachmentProgram)===null||t===void 0||t.kill(),(r=this.internals.attachmentManager)===null||r===void 0||r.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;var l=z(this.customLayerPrograms.values()),s;try{for(l.s();!(s=l.n()).done;){var d=s.value.program;d.kill()}}catch(p){l.e(p)}finally{l.f()}if(this.customLayerPrograms.clear(),this.sdfAtlas&&(this.sdfAtlas=null),this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext){var u;(u=this.webGLContext.getExtension("WEBGL_lose_context"))===null||u===void 0||u.loseContext(),this.webGLContext=null}(i=this.gestureHint)===null||i===void 0||i.kill(),this.gestureHint=null,this.mouseLayer.remove();for(var c in this.extraElements)this.extraElements[c].remove();this.extraElements={}}},{key:"scaleSize",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return t/this.internals.settings.zoomToSizeRatioFunction(r)*(this.getSetting("itemSizesReference")==="positions"?r*this.graphToViewportRatio:1)}},{key:"getStageCanvas",value:function(){return this.stageCanvas}},{key:"getMouseLayer",value:function(){return this.mouseLayer}}])})(Vn),gs=eh;var Of=lt(Et());function ps(n,a){return typeof n=="number"?n:(J(n)==="object"&&n!==null&&"attribute"in n,a)}function ys(n){var a=n??{},e=a.cornerRadius,t=a.rotation,r=ps(e,0),i=ps(t,0),o=`
`.concat(zt,`
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
`);return{name:"square",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function vs(n,a){return typeof n=="number"?n:(J(n)==="object"&&n!==null&&"attribute"in n,a)}function xs(n){var a=n??{},e=a.cornerRadius,t=a.rotation,r=vs(e,0),i=vs(t,0),o=`
`.concat(zt,`
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
`);return{name:"triangle",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:.5}}function ms(n,a){return typeof n=="number"?n:(J(n)==="object"&&n!==null&&"attribute"in n,a)}function _s(n){var a=n??{},e=a.cornerRadius,t=a.rotation,r=ms(e,0),i=ms(t,0),o=`
`.concat(zt,`
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
`);return{name:"diamond",glsl:o,uniforms:[{name:"u_cornerRadius",type:"float",value:r},{name:"u_rotation",type:"float",value:i}],inradiusFactor:Math.SQRT1_2}}function Ts(n){var a=n??{},e=a.segments,t=e===void 0?16:e,r=`
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
`;return{name:"curved",segments:t,glsl:r,uniforms:[],attributes:[{name:"curvature",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{curvature:{type:"number",default:0}},spread:{variable:"curvature",compute:function(o,l,s){return(o-(l-1)/2)*s}}}}function Es(n){var a=n??{},e=a.lengthRatio,t=e===void 0?5:e,r=a.widthRatio,i=r===void 0?4:r,o=a.margin,l=o===void 0?0:o,s=`
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
`;return{name:"arrow",glsl:s,length:t,widthFactor:i,margin:l,uniforms:[],attributes:[]}}var bs=8,Wf=(function(){function n(a){Z(this,n),E(this,"program",null),E(this,"vao",null),E(this,"drawFramebuffer",null),E(this,"readFramebuffer",null),E(this,"viewport",new Int32Array(4)),E(this,"blend",!1),E(this,"blendSrcRGB",WebGL2RenderingContext.ONE),E(this,"blendDstRGB",WebGL2RenderingContext.ZERO),E(this,"blendSrcAlpha",WebGL2RenderingContext.ONE),E(this,"blendDstAlpha",WebGL2RenderingContext.ZERO),E(this,"blendEquationRGB",WebGL2RenderingContext.FUNC_ADD),E(this,"blendEquationAlpha",WebGL2RenderingContext.FUNC_ADD),E(this,"colorMask",[!0,!0,!0,!0]),E(this,"activeTexture",WebGL2RenderingContext.TEXTURE0),E(this,"textures",[]),this.gl=a}return Q(n,[{key:"save",value:function(){var e=this.gl;this.program=e.getParameter(e.CURRENT_PROGRAM),this.vao=e.getParameter(e.VERTEX_ARRAY_BINDING),this.drawFramebuffer=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING),this.readFramebuffer=e.getParameter(e.READ_FRAMEBUFFER_BINDING),this.viewport=e.getParameter(e.VIEWPORT),this.blend=e.isEnabled(e.BLEND),this.blendSrcRGB=e.getParameter(e.BLEND_SRC_RGB),this.blendDstRGB=e.getParameter(e.BLEND_DST_RGB),this.blendSrcAlpha=e.getParameter(e.BLEND_SRC_ALPHA),this.blendDstAlpha=e.getParameter(e.BLEND_DST_ALPHA),this.blendEquationRGB=e.getParameter(e.BLEND_EQUATION_RGB),this.blendEquationAlpha=e.getParameter(e.BLEND_EQUATION_ALPHA),this.colorMask=e.getParameter(e.COLOR_WRITEMASK),this.activeTexture=e.getParameter(e.ACTIVE_TEXTURE);for(var t=0;t<bs;t++)e.activeTexture(e.TEXTURE0+t),this.textures[t]=e.getParameter(e.TEXTURE_BINDING_2D);e.activeTexture(this.activeTexture)}},{key:"restore",value:function(){for(var e=this.gl,t=0;t<bs;t++)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.textures[t]);e.activeTexture(this.activeTexture),e.useProgram(this.program),e.bindVertexArray(this.vao),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.drawFramebuffer),e.bindFramebuffer(e.READ_FRAMEBUFFER,this.readFramebuffer),e.viewport(this.viewport[0],this.viewport[1],this.viewport[2],this.viewport[3]),this.blend?e.enable(e.BLEND):e.disable(e.BLEND),e.blendFuncSeparate(this.blendSrcRGB,this.blendDstRGB,this.blendSrcAlpha,this.blendDstAlpha),e.blendEquationSeparate(this.blendEquationRGB,this.blendEquationAlpha),e.colorMask(this.colorMask[0],this.colorMask[1],this.colorMask[2],this.colorMask[3]),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}}])})();var th=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function bt(n){let a=/^(\d{4})-(\d{2})-(\d{2})/.exec(n||"");return a?`${th[Number(a[2])-1]} ${Number(a[3])}, ${a[1]}`:n||""}var nh=n=>n.canonical||n.url,ah=["#0b6b7a","#3d4fc4","#b5650f","#b2306b","#2d7a4c","#6a4c9c","#7a6400"],rh=["#5fd3e0","#93a2ff","#f5b360","#f584b8","#74d6a0","#c3a6f5","#e6cf5c"],Pr={Theme:"circle",Essay:"circle",Initiative:"diamond",Playbook:"square",Source:"triangle",Entity:"circle"},Fr=new Set(["Source","Entity"]),ih=new Set(["Source","Theme","Entity"]),Vt=n=>!ih.has(n.type),yt={Source:"source",Entity:"extracted"},Ir=new Set(["source","extracted"]),Ss={frontmatter:"Declared relations",link:"Links in text",folder:"Theme membership",source:"Sources",extracted:"Extracted (machine)"},oh={frontmatter:.85,link:.5,folder:.16,source:.32,extracted:.3},$t=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,jt=n=>$t?0:n,oe=n=>document.getElementById(n),_a=oe("g-canvas"),ye=oe("g-panel"),As=oe("g-status"),ot=oe("g-list"),Rr=oe("g-view"),fe=oe("g-search"),$e=oe("g-suggest"),Ve=oe("g-legend"),sh=oe("g-empty"),lh=oe("g-announce"),wr=document.querySelector(".toolbar"),q=n=>String(n??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),dh=n=>/^https?:\/\//.test(n),uh=n=>n==="human-reviewed"?"Reviewed by Muthu":n==="machine-confirmed"?"Machine-confirmed":"Not yet reviewed",Dr=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim(),_n=()=>document.documentElement.getAttribute("saved-theme")==="dark",Nr=n=>1-Math.pow(1-n,3),Rs=n=>1+(1.6+1)*Math.pow(n-1,3)+1.6*Math.pow(n-1,2),ch=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function ya(n,a){let e=n.replace("#",""),t=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${a})`}var xe=new Set(Fr),Be=new Set(Ir),Le=null,Ta=null,Ne=null,ee=new re({multi:!0,type:"directed",allowSelfLoops:!1}),Y=null,V={},ie={},De=[],Tn=new Map,qt=0;function ws(n,a,e,t,r,i=Nr,o){if(t<=0){r(e),Tn.delete(n),o?.();return}Tn.set(n,{from:a,to:e,dur:t,start:performance.now(),ease:i,set:r,done:o}),qt||(qt=requestAnimationFrame(Gr))}function Gr(n){qt=0;for(let[e,t]of Tn){let r=Math.min(1,(n-t.start)/t.dur);t.set(t.from+(t.to-t.from)*t.ease(r)),r>=1&&(Tn.delete(e),t.done?.())}let a=!!Le&&!$t&&!document.hidden;a&&Y?.setGraphState({pulse:(Math.sin(n/520)+1)/2}),Y?.refresh({skipIndexation:!0}),(Tn.size||a)&&(qt=requestAnimationFrame(Gr))}var Ls=()=>{qt||(qt=requestAnimationFrame(Gr))};function Cs(){let n=_n()?rh:ah,a=Dr("--ink"),e=Dr("--muted"),t=Dr("--page"),r=i=>{let o=V[i]?.type==="Theme"?i:ie[i];return o?n[De.indexOf(o)%n.length]:e};ee.updateEachNodeAttributes((i,o)=>({...o,color:o.kind==="Source"||o.kind==="Entity"?e:r(i),labelColor:a,page:t,halo:ya(r(i).startsWith("#")?r(i):"#888888",_n()?.75:.55),ring:ya(r(i).startsWith("#")?r(i):"#888888",_n()?.35:.22),pill:ya(t.startsWith("#")?t:"#ffffff",_n()?.82:.9),pillLine:_n()?"rgba(255,255,255,0.10)":"rgba(21,23,28,0.08)"})),ee.updateEachEdgeAttributes((i,o,l)=>{let s=o.origin==="extracted"?e:r(l);return{...o,color:s.startsWith("#")?ya(s,oh[o.origin]??.4):s,activeColor:s}}),document.querySelectorAll("[data-theme-dot]").forEach(i=>i.style.background=r(i.dataset.themeDot)),Y?.refresh()}var En=Math.min(1,Math.max(.6,Math.min(innerWidth,innerHeight)/850));function hh(n){return En*(n.type==="Theme"?16+Math.sqrt(n.degree||0)*2:(n.type==="Source"||n.type==="Entity"?4:6)+Math.sqrt(n.degree||0)*2.1)}function fh(n,a){let e={},r={};De.forEach(h=>r[h]=[]),n.forEach(h=>{Vt(h)&&ie[h.id]&&r[ie[h.id]].push(h.id)});let i={},o=(h,b)=>h<b?h+"|"+b:b+"|"+h;a.forEach(h=>{let b=ie[h.source],m=ie[h.target];b&&m&&b!==m&&h.origin!=="source"&&h.origin!=="folder"&&(i[o(b,m)]=(i[o(b,m)]||0)+1)});let l=De.length?[De[0]]:[];for(;l.length<De.length;){let h=l[l.length-1],b=De.filter(m=>!l.includes(m)).sort((m,v)=>(i[o(h,v)]||0)-(i[o(h,m)]||0))[0];l.push(b)}let s={};l.forEach((h,b)=>{let m=-Math.PI/2+b/Math.max(1,l.length)*Math.PI*2;s[h]={x:Math.cos(m)*100,y:Math.sin(m)*100},e[h]={...s[h],side:Math.cos(m)<0?"left":"right"}});let d={};a.forEach(h=>{var b,m;h.origin==="folder"||h.origin==="source"||((d[b=h.source]||(d[b]=[])).push(h.target),(d[m=h.target]||(d[m]=[])).push(h.source))});let u=Math.PI*2;for(let h of l){let b=s[h],m=r[h].sort((S,A)=>(V[A].degree||0)-(V[S].degree||0)||S.localeCompare(A)),v=S=>{let A=0,C=0;for(let P of d[S]||[]){let w=ie[P];w&&w!==h&&s[w]&&(A+=s[w].x-b.x,C+=s[w].y-b.y)}return!A&&!C&&(A=b.x,C=b.y),Math.atan2(C,A)},g=.62,y=Math.PI/2+g,x=u-2*g,_=Math.max(30,19+1.15*m.length),T=Math.max(6,Math.floor(x*_/7.5)),R=S=>((S-y)%u+u)%u;for(let S=0,A=0;A<m.length;S++,A+=T){let C=m.slice(A,A+T).map(I=>({id:I,p:R(v(I))})).sort((I,L)=>I.p-L.p),P=_+S*9,w=x/C.length;C.forEach((I,L)=>{let k=y+(L+.5)*w;e[I.id]={x:b.x+Math.cos(k)*P,y:b.y+Math.sin(k)*P,side:Math.cos(k)<0?"left":"right"}})}}let c=n.filter(h=>Vt(h)&&!e[h.id]);c.forEach((h,b)=>{let m=b/Math.max(1,c.length)*u;e[h.id]={x:Math.cos(m)*18,y:Math.sin(m)*18,side:Math.cos(m)<0?"left":"right"}});let p={};a.filter(h=>h.origin==="source").forEach(h=>{let[b,m]=V[h.target].type==="Source"?[h.source,h.target]:[h.target,h.source];if(e[m]||!e[b])return;let v=ie[b],g=v?s[v]:{x:0,y:0},y=Math.atan2(e[b].y-g.y,e[b].x-g.x)+((p[b]=(p[b]||0)+1)-1)*.35;e[m]={x:e[b].x+Math.cos(y)*9,y:e[b].y+Math.sin(y)*9,side:Math.cos(y)<0?"left":"right"}});let f={};return a.filter(h=>h.origin==="extracted").forEach(h=>{let[b,m]=V[h.target].type==="Entity"?[h.target,h.source]:[h.source,h.target];e[m]&&(f[b]||(f[b]=[])).push(m)}),n.filter(h=>h.type==="Entity").forEach((h,b)=>{let m=f[h.id]||[];if(!m.length)return;let v=m.reduce((S,A)=>S+e[A].x,0)/m.length,g=m.reduce((S,A)=>S+e[A].y,0)/m.length,y=m.length>1?.8:1.08,x=b*2.399963,_=5+b%4*2.5,T=v*y+Math.cos(x)*_,R=g*y+Math.sin(x)*_;e[h.id]={x:T,y:R,side:T<0?"left":"right"}}),n.forEach((h,b)=>{e[h.id]||(e[h.id]={x:Math.cos(b)*140,y:Math.sin(b)*140,side:"right"})}),e}function Sn(){let n=Ta||Le,a=e=>!Y.getNodeState(e).isHidden;if(n){let e=new Set([n]);return ee.forEachNeighbor(n,t=>{a(t)&&e.add(t)}),e}if(Ne){let e=new Set([Ne]);return ee.forEachNode(t=>{ie[t]===Ne&&a(t)&&e.add(t)}),e}return null}var Lr=!1;function je(){let n=Sn(),a=Ta||Le;ee.forEachNode(t=>Y.setNodeState(t,{isActive:!!n?.has(t),isHighlighted:t===Le})),ee.forEachEdge((t,r,i,o)=>Y.setEdgeState(t,{isActive:!!n&&(a?i===a||o===a:n.has(i)&&n.has(o))}));let e=!!n;e?(Y.setGraphState({hasActive:!0}),Lr||ws("fade",Y.getGraphState().fade||0,1,jt(180),t=>Y.setGraphState({fade:t}))):Lr&&ws("fade",Y.getGraphState().fade??1,0,jt(220),t=>Y.setGraphState({fade:t}),Nr,()=>{Sn()||Y.setGraphState({hasActive:!1})}),Lr=e,Ve.querySelectorAll("[data-theme]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.theme===Ne))),Y.refresh({skipIndexation:!0}),Ls()}function Xt(){ee.forEachNode((n,a)=>Y.setNodeState(n,{isHidden:xe.has(a.kind)})),ee.forEachEdge((n,a,e,t)=>{let r=Be.has(a.origin)||xe.has(ee.getNodeAttribute(e,"kind"))||xe.has(ee.getNodeAttribute(t,"kind"));Y.setEdgeState(n,{isHidden:r})}),Y.refresh({skipIndexation:!0}),document.querySelectorAll("#f-types input").forEach(n=>n.checked=!xe.has(n.value)),document.querySelectorAll("#f-origins input").forEach(n=>n.checked=!Be.has(n.value)),qe(),Ns()}function ks(){return ee.filterNodes(n=>!Y.getNodeState(n).isHidden)}function gh(){return ee.filterEdges(n=>!Y.getEdgeState(n).isHidden)}function qe(n){if(!Y){As.textContent=n??"";return}let a=ks().length;As.textContent=n??`${a} nodes \xB7 ${gh().length} connections shown`,sh.hidden=a>0||!ot.hidden}var Mr=n=>{lh.textContent=n};function Sa(n){n.querySelectorAll("[data-bg]").forEach(a=>a.style.background=a.dataset.bg),n.querySelectorAll("[data-c]").forEach(a=>a.style.setProperty("--c",a.dataset.c))}function ph(n,a){let e={},t={};n.forEach(r=>e[r.type]=(e[r.type]||0)+1),a.forEach(r=>t[r.origin]=(t[r.origin]||0)+1),oe("f-types").insertAdjacentHTML("beforeend",Object.keys(e).sort().map(r=>`<label><input type="checkbox" value="${q(r)}"> <span class="shape shape-${q(Pr[r]||"circle")}" aria-hidden="true"></span>${q(r)} <span class="muted">${e[r]}</span></label>`).join("")),oe("f-origins").insertAdjacentHTML("beforeend",Object.keys(Ss).filter(r=>t[r]).map(r=>`<label><input type="checkbox" value="${q(r)}"> ${q(Ss[r])} <span class="muted">${t[r]}</span></label>`).join("")),document.querySelectorAll("#f-types input").forEach(r=>r.addEventListener("change",()=>{r.checked?xe.delete(r.value):xe.add(r.value);let i=yt[r.value];i&&(r.checked?Be.delete(i):Be.add(i),Ea()),Xt(),je()})),document.querySelectorAll("#f-origins input").forEach(r=>r.addEventListener("change",()=>{r.checked?Be.delete(r.value):Be.add(r.value);let i=Object.keys(yt).find(o=>yt[o]===r.value);i&&(r.checked?xe.delete(i):xe.add(i),Ea()),Xt(),je()}))}function Ea(){document.querySelectorAll("#f-types input").forEach(n=>n.checked=!xe.has(n.value)),document.querySelectorAll("#f-origins input").forEach(n=>n.checked=!Be.has(n.value))}function vh(){let n=a=>Object.keys(ie).filter(e=>ie[e]===a&&V[e].type!=="Source").length;Ve.innerHTML='<p class="legend-title">Themes</p><ul>'+De.map(a=>`<li><button type="button" data-theme="${q(a)}" aria-pressed="false"><span class="dot" data-theme-dot="${q(a)}"></span>${q(V[a].label)}<span class="muted">${n(a)}</span></button></li>`).join("")+'</ul><p class="legend-shapes" aria-label="Shapes"><span><span class="shape shape-circle"></span>Essay</span><span><span class="shape shape-diamond"></span>Initiative</span><span><span class="shape shape-square"></span>Playbook</span></p>',Ve.hidden=!1,Ve.querySelectorAll("[data-theme]").forEach(a=>a.addEventListener("click",()=>{let e=a.dataset.theme;if(Ne===e){zr();return}Ne=e,Le&&Yt(!1),je(),Ps([...Sn()||[]]),Mr(`Showing the ${V[e].label} theme. Escape to leave.`),qe(`${V[e].label} \xB7 ${(Sn()?.size??1)-1} notes \xB7 Esc to leave`)}))}function zr(){Ne&&(Ne=null,je(),qe(),Aa())}function Aa(){Y.getCamera().animate({x:.5,y:.5,ratio:1,angle:0},{duration:jt(650),easing:"cubicInOut"})}var mh=()=>window.innerWidth<=760,Cr=document.createElement("canvas").getContext("2d");function kr(n){let a=ee.getNodeAttributes(n),e=String(a.label??"");if(!Cr||!e)return{left:0,right:0};let t=a.kind==="Theme";Cr.font=t?`${Math.round(15*Math.max(.8,En))}px Newsreader, Georgia, serif`:"12.5px Instrument Sans, system-ui, sans-serif";let r=Cr.measureText(e).width+12+(Number(a.size)||6);return a.labelSide==="left"?{left:r,right:0}:a.labelSide==="right"?{left:0,right:r}:{left:r/2,right:r/2}}function Ps(n,a={}){let e=n.map(k=>Y.getNodeDisplayData(k)).filter(Boolean);if(!e.length)return;let t=e.map(k=>k.x),r=e.map(k=>k.y),[i,o,l,s]=[Math.min(...t),Math.max(...t),Math.min(...r),Math.max(...r)],d=a.centre?Y.getNodeDisplayData(a.centre):null,u=d?d.y:(l+s)/2,c=d?2*Math.max(d.x-i,o-d.x,u-l,s-u):Math.max(o-i,s-l),p=_a.clientWidth||1,f=_a.clientHeight||1,h=Math.max(1,Math.min(p,f)-96),b=!mh(),m=b&&a.besidePanel&&!ye.hidden?ye.offsetWidth+28:0,v=0,g=Math.max(120,p-m-v-32),y=(a.named??n).map(k=>({d:Y.getNodeDisplayData(k),r:kr(k)})).filter(k=>k.d),x=k=>[Math.min(i,...y.map(N=>N.d.x-N.r.left*k)),Math.max(o,...y.map(N=>N.d.x+N.r.right*k))],_=a.maxRatio??1.2,T=Math.min(_,Math.max(.25,c*1.25)),R=Math.max(120,f-(Ve.hidden||!Ve.offsetParent?0:Ve.offsetHeight+28)-56);for(let k=0;k<24&&T<_;k++){let[N,M]=x(T/h);if(M-N<=g*T/h&&2*Math.max(u-l,s-u)<=R*T/h)break;T=Math.min(_,T*1.12)}let S=T/h,A=k=>k*S,[C,P]=x(S),w=(C+P)/2;if(d){let k=kr(a.centre),N=g*S/2,M=d.x+k.right*S-N+A(8),F=d.x-k.left*S+N-A(8);w=M<=F?Math.min(Math.max(w,M),F):k.left>k.right?F:k.right>k.left?M:d.x}let I=0,L=0;b?(I+=A(m/2)-A(v/2),L+=A((f-R)/2-28)):a.besidePanel&&!ye.hidden&&(L-=A(ye.offsetHeight/2)),Y.getCamera().animate({x:w+I,y:u+L,ratio:T},{duration:jt(700),easing:"cubicInOut"})}var bh={links_to:"",builds_on:"builds on",refines:"refines",applies:"applies",contradicts:"contradicts",cites:"cites",part_of:"part of",supersedes:"supersedes",answers:"answers",about:"about",authored_by:"authored by",mentions:"mentions"};function xa(n){return bh[n]??String(n).replace(/_/g," ")}function yh(n){let a=0;return ee.forEachEdge(n,(e,t)=>{t.origin==="extracted"&&a++}),a}function Ie(n){let a=0;return ee.forEachEdge(n,(e,t)=>{(t.origin==="link"||t.origin==="frontmatter")&&a++}),a}function xh(n){Le=n,Ne=null;let a=V[n],e=ee.getNodeAttribute(n,"color"),t={link:"Linked notes",frontmatter:"Linked notes",source:a.type==="Source"?"Notes drawn from it":"Sources",folder:a.type==="Theme"?"Notes in this theme":"",extracted:a.type==="Entity"?"Mentioned in":"Mentions (machine-extracted)"},r="Suggested relations (machine, not reviewed)",i={},o=(f,h,b,m)=>{let v=f.origin==="extracted"&&f.rel!=="mentions"?r:t[f.origin]??"Other connections";if(!v||Y.getEdgeState(m).isHidden)return;let g=i[v]||(i[v]=new Map),y=g.get(h)||{out:!1,inn:!1,rel:new Set};b?y.out=!0:y.inn=!0,xa(f.rel)&&y.rel.add(v===r?b?xa(f.rel):`${xa(f.rel)} (from it)`:xa(f.rel)),f.evidence&&v===r&&(y.ev=f.evidence),g.set(h,y)};ee.forEachOutEdge(n,(f,h,b,m)=>o(h,m,!0,f)),ee.forEachInEdge(n,(f,h,b)=>o(h,b,!1,f));let l=["Notes in this theme","Linked notes",r,"Sources","Notes drawn from it","Mentioned in","Mentions (machine-extracted)","Other connections"],s=f=>f.out&&f.inn?"\u21C4":f.out?"\u2192":"\u2190",d=f=>f.out&&f.inn?"Linked both ways":f.out?"This note links to it":"It links to this note",u=l.filter(f=>i[f]?.size).map(f=>{let h=[...i[f]].sort((b,m)=>V[b[0]].label.localeCompare(V[m[0]].label)).map(([b,m])=>`<li><a href="#" data-id="${q(b)}"${m.ev?` title="${q(`\u201C${m.ev}\u201D`)}"`:""}><span class="dot" data-bg="${q(ee.getNodeAttribute(b,"color"))}"></span><span class="t">${q(V[b].label)}</span>${m.rel.size?`<span class="rel muted">${q([...m.rel].join(", "))}</span>`:""}`+(f==="Linked notes"?`<span class="dir" title="${d(m)}" aria-label="${d(m)}">${s(m)}</span>`:"")+"</a></li>");return`<h3>${q(f)} <span class="muted">${h.length}</span></h3><ul>${h.join("")}</ul>`}),c=Vt(a)?`<dl class="prov"><div><dt>Review</dt><dd class="${a.trust==="human-reviewed"?"ok":""}">${q(a.verified?`Reviewed ${bt(a.verified)}`:uh(a.trust))}</dd></div><div><dt>Connections</dt><dd>${Ie(n)}</dd></div>`+(a.source_date?`<div><dt>Source</dt><dd>${q(a.canonical?"muthub.org \xB7 ":"")}${q(bt(a.source_date))}</dd></div>`:"")+(a.stale_after?`<div><dt>Re-check by</dt><dd>${q(bt(a.stale_after))}</dd></div>`:"")+"</dl>":"";ye.innerHTML=`<div class="accent" data-bg="${q(e)}"></div><button class="close" type="button" aria-label="Close">\xD7</button><div class="g-panel-body"><p class="kind"><span class="shape shape-${q(Pr[a.type]||"circle")}" data-c="${q(e)}"></span>${q(a.type)}${ie[n]?` \xB7 ${q(V[ie[n]].label)}`:""}</p><h2 tabindex="-1">${q(a.label)}</h2>`+(a.summary?`<p class="summary">${q(a.summary)}</p>`:"")+c+(a.type==="Entity"?"":a.canonical?`<p class="actions"><a class="open" href="${q(a.url)}">Open the note</a><a class="wiki" href="${q(a.canonical)}">Read the essay</a></p>`:`<p class="actions"><a class="open" href="${q(a.url)}">${dh(a.url)?"Open source":a.type==="Theme"?"Open theme":"Open the note"}</a></p>`)+u.join("")+"</div>",Sa(ye),ye.hidden=!1,ye.classList.remove("in"),ye.offsetWidth,ye.classList.add("in"),Mr(`Selected ${a.type}: ${a.label}`);let p=new URL(location.href);p.searchParams.set("node",n),history.replaceState(null,"",p),je()}function Yt(n=!0){Le=null,ye.hidden=!0;let a=new URL(location.href);a.searchParams.delete("node"),history.replaceState(null,"",a),n&&je()}function xt(n,a={}){let e=ee.getNodeAttribute(n,"kind");xe.has(e)&&(xe.delete(e),yt[e]&&Be.delete(yt[e]),Ea(),Xt()),xh(n);let t=[...Sn()||[n]],r=ie[n],i=t.length<4&&r?[...t,r,...ee.filterNodes(o=>ie[o]===r&&!Y.getNodeState(o).isHidden)]:t;Ps(i,{maxRatio:t.length<4?.6:.85,besidePanel:!0,centre:n,named:t}),a.moveFocus&&ye.querySelector("h2")?.focus({preventScroll:!0})}ye.addEventListener("click",n=>{let a=n.target.closest("[data-id]");a?(n.preventDefault(),xt(a.getAttribute("data-id"))):n.target.closest(".close")&&Yt()});function Fs(n){if(n=n.trim().toLowerCase(),!n)return[];let a=Object.values(V),e=i=>i.label.toLowerCase()===n||(i.aliases||[]).some(o=>o.toLowerCase()===n),t=i=>(e(i)?0:i.label.toLowerCase().startsWith(n)?1:2)+(i.type==="Source"?3:0),r=i=>i.label.toLowerCase().includes(n)||(i.aliases||[]).some(o=>o.toLowerCase().includes(n));return a.filter(r).sort((i,o)=>t(i)-t(o)||i.label.localeCompare(o.label))}function _h(n){return Fs(n)[0]?.id??null}var it=-1;function Is(){let n=Fs(fe.value).slice(0,7);if(it=-1,fe.removeAttribute("aria-activedescendant"),!n.length||document.activeElement!==fe){$e.hidden=!0,fe.setAttribute("aria-expanded","false");return}$e.innerHTML=n.map((a,e)=>`<li role="option" id="g-opt-${e}" data-id="${q(a.id)}"><span class="dot" data-bg="${q(ee.getNodeAttribute(a.id,"color"))}"></span>${q(a.label)}<span class="muted">${q(a.type)}</span></li>`).join(""),Sa($e),$e.hidden=!1,fe.setAttribute("aria-expanded","true")}function Ra(){$e.hidden=!0,fe.setAttribute("aria-expanded","false"),fe.removeAttribute("aria-activedescendant")}function Ds(n){let a=[...$e.querySelectorAll("li")];a.length&&(it=(it+n+a.length)%a.length,a.forEach((e,t)=>{e.classList.toggle("on",t===it),e.setAttribute("aria-selected",String(t===it))}),fe.setAttribute("aria-activedescendant",a[it].id))}function Th(){let n=it>=0?$e.querySelectorAll("li")[it]?.getAttribute("data-id"):_h(fe.value);Ra(),n?(qe(),xt(n,{moveFocus:!0})):qe(`No note matches \u201C${fe.value}\u201D.`)}fe.addEventListener("input",Is);fe.addEventListener("focus",Is);fe.addEventListener("blur",()=>setTimeout(Ra,120));fe.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),Th()):n.key==="ArrowDown"?(n.preventDefault(),Ds(1)):n.key==="ArrowUp"?(n.preventDefault(),Ds(-1)):n.key==="Escape"&&!$e.hidden&&(Ra(),n.stopPropagation())});$e.addEventListener("mousedown",n=>{let a=n.target.closest("li");a&&(n.preventDefault(),Ra(),fe.value=V[a.dataset.id].label,xt(a.dataset.id))});function Ns(){if(ot.hidden)return;let n=new Set(ks()),a=l=>l.verified?bt(l.verified):l.trust==="human-reviewed"?"Reviewed":"Not yet",e=l=>`<tr><td><a href="${q(l.url)}">${q(l.label)}</a></td><td class="muted">${q(l.type)}</td><td class="muted">${q(bt(l.source_date)||"")}</td><td class="muted">${q(a(l))}</td><td class="muted">${q(bt(l.stale_after)||"")}</td><td class="n">${Ie(l.id)}</td></tr>`,t=De.filter(l=>n.has(l)||Object.keys(ie).some(s=>ie[s]===l&&n.has(s))).map(l=>{let s=Object.keys(ie).filter(d=>ie[d]===l&&n.has(d)&&Vt(V[d])).sort((d,u)=>Ie(u)-Ie(d)||V[d].label.localeCompare(V[u].label));return`<tr><th scope="rowgroup" colspan="6"><span class="dot" data-bg="${q(ee.getNodeAttribute(l,"color"))}" data-theme-dot="${q(l)}"></span>${q(V[l].label)} <span class="muted">\xB7 ${s.length} note${s.length===1?"":"s"}</span></th></tr>`+s.map(d=>e(V[d])).join("")}),r=[...n].filter(l=>V[l].type==="Entity").sort((l,s)=>Ie(s)-Ie(l)||V[l].label.localeCompare(V[s].label)),i=[...n].filter(l=>!ie[l]&&Vt(V[l])).sort((l,s)=>V[l].label.localeCompare(V[s].label)),o=[...n].filter(l=>V[l].type==="Source").sort((l,s)=>V[l].label.localeCompare(V[s].label));ot.innerHTML='<table><caption class="sr">Notes in the graph, with their provenance</caption><thead><tr><th>Note</th><th>Kind</th><th>Source dated</th><th>Review</th><th>Re-check by</th><th class="n">Links</th></tr></thead><tbody>'+t.join("")+(i.length?'<tr><th scope="rowgroup" colspan="6">Other</th></tr>'+i.map(l=>e(V[l])).join(""):"")+(o.length?`<tr><th scope="rowgroup" colspan="6">Sources <span class="muted">\xB7 ${o.length}</span></th></tr>`+o.map(l=>`<tr><td><a href="${q(V[l].url)}">${q(V[l].label)}</a></td><td class="muted">Source</td><td class="muted">${q(bt(V[l].updated))}</td><td></td><td></td><td class="n">${V[l].degree||0}</td></tr>`).join(""):"")+(r.length?`<tr><th scope="rowgroup" colspan="6">Extracted entities <span class="muted">\xB7 ${r.length} \xB7 found by Semantica, not reviewed</span></th></tr>`+r.map(l=>`<tr><td>${q(V[l].label)}</td><td class="muted">${q(V[l].entityKind||"Entity")}</td><td></td><td class="muted">Machine</td><td></td><td class="n">${yh(l)}</td></tr>`).join(""):"")+`</tbody></table><p class="foot muted">Every column comes from the note's own frontmatter: Open Knowledge Format, nothing hand-typed.</p>`,Sa(ot)}function Gs(){let n=wr.querySelector(".tools")??wr;ot.style.top=`${wr.offsetTop+n.offsetHeight+10}px`}addEventListener("resize",()=>{ot.hidden||Gs()});Rr.addEventListener("click",()=>{let n=ot.hidden;n&&Le&&Yt(!1),ot.hidden=!n,n&&Gs(),oe("explorer").classList.toggle("listing",n),_a.style.visibility=n?"hidden":"visible",Ve.style.visibility=n?"hidden":"visible",qe(),Rr.setAttribute("aria-pressed",String(n)),Rr.textContent=n?"Graph":"List",Ns()});oe("g-reset").addEventListener("click",()=>{xe=new Set(Fr),Be=new Set(Ir),fe.value="",Ne=null,Yt(),Xt(),Aa()});oe("g-zoom-in").addEventListener("click",()=>Y.getCamera().zoomIn({duration:jt(220)}));oe("g-zoom-out").addEventListener("click",()=>Y.getCamera().zoomOut({duration:jt(220)}));oe("g-fit").addEventListener("click",Aa);oe("g-full")?.addEventListener("click",()=>{let n=oe("explorer");document.fullscreenElement?document.exitFullscreen?.():n.requestFullscreen?.().catch(()=>n.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("fullscreenchange",()=>setTimeout(()=>{Y?.resize(),Aa()},60));function Eh(n){let a=n.nodes.filter(Vt),e=n.nodes.filter(g=>g.type==="Source").length,t=n.edges.filter(g=>!Ir.has(g.origin)).length,r=(g,y)=>document.querySelectorAll(`[data-stat="${g}"]`).forEach(x=>x.textContent=y);r("notes",String(a.length)),r("sources",String(e)),r("connections",String(t)),r("themes",String(De.length));let i=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],o=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];r("notes-words",(g=>g<20?i[g]:g<100?o[Math.floor(g/10)]+(g%10?"-"+i[g%10].toLowerCase():""):String(g))(a.length));let s=n.nodes.filter(g=>g.type==="Entity").length,d=n.edges.filter(g=>g.origin==="extracted"&&g.type==="mentions").length,u=n.edges.filter(g=>g.origin==="extracted"&&g.type!=="mentions").length,c=(g,y)=>`${g} ${y}${g===1?"":"s"}`,p=[c(s,"entity").replace(/entitys$/,"entities"),c(d,"mention")].concat(u?[c(u,"suggested relation")]:[]),f=g=>g.length>1?`${g.slice(0,-1).join(", ")} and ${g[g.length-1]}`:g[0],h=document.querySelector("[data-semantic]");h&&s&&(h.querySelector(".what").textContent=`+ ${f(p)} found by Semantica`,h.hidden=!1,h.querySelector("button")?.addEventListener("click",()=>{Object.keys(yt).filter(g=>g==="Entity").forEach(g=>{xe.delete(g),Be.delete(yt[g])}),Ea(),Xt(),je(),oe("explorer").scrollIntoView({behavior:$t?"auto":"smooth",block:"center"}),Mr(`Showing ${f(p)} found by Semantica`)}));let b=document.querySelector('[data-stat="semantic-step"]');b&&s&&(b.textContent=` In this release: ${f(p)}.`);let m=oe("theme-cards");m&&(m.innerHTML=De.map(g=>{let y=a.filter(_=>ie[_.id]===g).sort((_,T)=>Ie(T.id)-Ie(_.id)),x=y.slice(0,3).map(_=>q(_.label.split(":")[0])).join(" \xB7 ");return`<a class="theme-card" href="${q(V[g].url)}"><span class="name"><span class="dot" data-bg="${q(ee.getNodeAttribute(g,"color"))}" data-theme-dot="${q(g)}"></span>${q(V[g].label)}</span><span class="count">${y.length} note${y.length===1?"":"s"}</span><span class="tops">${x}</span></a>`}).join(""),Sa(m));let v=oe("hubs");if(v){let g=a.slice().sort((y,x)=>Ie(x.id)-Ie(y.id)||y.label.localeCompare(x.label)).slice(0,5);v.innerHTML=g.map((y,x)=>`<li><span class="rank">${x+1}</span><a href="#explorer" data-id="${q(y.id)}">${q(y.label)}</a><span class="n">${Ie(y.id)} links</span></li>`).join(""),v.addEventListener("click",y=>{let x=y.target.closest("[data-id]");x&&(y.preventDefault(),oe("explorer").scrollIntoView({behavior:$t?"auto":"smooth",block:"center"}),xt(x.dataset.id))})}document.querySelectorAll("[data-note]").forEach(g=>{let y=V[g.dataset.note];y?g.href=y.url:g.closest("li")?.remove()}),document.querySelectorAll("[data-path-start]").forEach(g=>g.addEventListener("click",y=>{let x=g.dataset.pathStart;V[x]&&(y.preventDefault(),oe("explorer").scrollIntoView({behavior:$t?"auto":"smooth",block:"center"}),xt(x))}))}document.addEventListener("keydown",n=>{n.key==="Escape"&&Le?Yt():n.key==="Escape"&&Ne?zr():n.key==="/"&&document.activeElement!==fe&&!n.target.closest("input,textarea")&&(n.preventDefault(),fe.focus())});document.addEventListener("themechange",Cs);document.addEventListener("visibilitychange",Ls);function Sh(n){let a={};if(ee.forEachNode((d,u)=>{a[d]={x:u.x,y:u.y,size:u.size}}),$t){Y.setGraphState({reveal:1}),n();return}let e=De.slice();ee.forEachNode(d=>{let u=V[d].type==="Theme"?d:ie[d],c=u?a[u]:{x:0,y:0};ee.mergeNodeAttributes(d,{x:c.x,y:c.y,size:0})}),Y.setGraphState({reveal:0});let t=performance.now(),r=0,i={};ee.forEachNode(d=>{let u=V[d].type==="Theme"?d:ie[d];i[d]=V[d].type==="Theme"?e.indexOf(d)*90:260+Math.max(0,e.indexOf(u))*110+r++%12*18});let o=900,l=620,s=d=>{let u=!1;ee.forEachNode(p=>{let f=a[p],h=d-t-i[p];if(h<0){u=!0;return}let b=V[p].type==="Theme",m=Math.min(1,h/(b?l:o));m<1&&(u=!0);let v=b?p:ie[p],g=v?a[v]:f,y=Nr(m);ee.mergeNodeAttributes(p,b?{size:f.size*Rs(m)}:{x:g.x+(f.x-g.x)*y,y:g.y+(f.y-g.y)*y,size:f.size*Math.min(1,Rs(m))})});let c=Math.min(1,Math.max(0,(d-t-700)/700));Y.setGraphState({reveal:ch(c)}),u||c<1?requestAnimationFrame(s):(ee.forEachNode(p=>ee.mergeNodeAttributes(p,a[p])),n())};requestAnimationFrame(s)}qe("Loading the map\u2026");oe("g-empty-reset").addEventListener("click",()=>oe("g-reset").click());fetch("/graph.json").then(n=>{if(!n.ok)throw new Error(String(n.status));return n.json()}).then(n=>{let a=s=>s&&/^(https:\/\/|\/(?!\/))/.test(s)?s:void 0;n.nodes.forEach(s=>{s.id.startsWith("ext:")&&(s.entityKind=s.type,s.type="Entity",s.summary=`${s.entityKind}${s.aliases?.length?`, also called ${s.aliases.slice(0,4).join(", ")}`:""}. Found by Semantica in ${s.degree||0} note${s.degree===1?"":"s"}; machine-extracted, not reviewed.`),s.url=a(s.url)??"#",s.canonical=a(s.canonical),V[s.id]=s});let e=n.edges.filter(s=>s.source!==s.target&&V[s.source]&&V[s.target]);e.filter(s=>s.origin==="folder").forEach(s=>{let[d,u]=V[s.target].type==="Theme"?[s.source,s.target]:[s.target,s.source];V[u].type==="Theme"&&(ie[d]=u)}),De=n.nodes.filter(s=>s.type==="Theme").sort((s,d)=>(d.degree||0)-(s.degree||0)).map(s=>s.id),e.filter(s=>s.origin==="source").forEach(s=>{let[d,u]=V[s.target].type==="Source"?[s.source,s.target]:[s.target,s.source];!ie[u]&&ie[d]&&(ie[u]=ie[d])});let t=fh(n.nodes,e);n.nodes.forEach(s=>{let d=t[s.id];ee.addNode(s.id,{x:d.x,y:-d.y,size:hh(s),label:s.label,kind:s.type,community:s.community,shape:Pr[s.type]||"circle",labelSide:s.type==="Theme"?"below":d.side})}),e.forEach(s=>ee.addEdge(s.source,s.target,{rel:s.type,origin:s.origin,evidence:s.origin==="extracted"&&s.type!=="mentions"?s.evidence:void 0,size:s.origin==="folder"?.7:s.origin==="frontmatter"?1.6:1.1})),vh(),Cs();let r=(s,d)=>d.hasActive&&!s.isActive&&!s.isHovered;Y=new gs(ee,_a,{settings:{itemSizesReference:"screen",labelFont:"Instrument Sans, system-ui, sans-serif",labelDensity:.4,labelRenderedSizeThreshold:11,stagePadding:48,zIndex:!0,hideEdgesOnMove:!1,minCameraRatio:.12,maxCameraRatio:1.4},primitives:{nodes:{shapes:[nn(),_s({cornerRadius:.12}),ys({cornerRadius:.28}),xs({cornerRadius:.15})],layers:[an()]},edges:{paths:[rn(),Ts({curvature:.22})],extremities:[Es({lengthRatio:4.5,widthRatio:3.2})],layers:[Ge()]}},customNodeState:{isActive:!1},customEdgeState:{isActive:!1},customGraphState:{hasActive:!1,fade:0,reveal:0,pulse:0},styles:{nodes:[Ze.nodes,{shape:{attribute:"shape"},labelColor:{attribute:"labelColor"},cursor:"pointer",labelSize:12.5,backdropColor:{attribute:"page"},backdropPadding:5,backdropCornerRadius:8,backdropShadowColor:"rgba(0,0,0,0.18)",backdropShadowBlur:10,opacity:(s,d,u)=>r(d,u)?1-.86*(u.fade??0):1},{labelPosition:{attribute:"labelSide"}},{when:s=>s.kind==="Theme",then:{labelVisibility:s=>(s.size||0)>8*En?"visible":"hidden",backdropVisibility:s=>(s.size||0)>8*En?"visible":"hidden",labelSize:Math.round(15*Math.max(.8,En)),labelFont:"Newsreader, Georgia, serif",backdropArea:"label",backdropLabelPadding:5,backdropShadowBlur:6,backdropCornerRadius:8,backdropColor:{attribute:"pill"},backdropBorderColor:{attribute:"pillLine"},backdropBorderWidth:1}},{when:(s,d,u)=>r(d,u)&&(u.fade??0)>.5,then:{labelVisibility:"hidden",backdropVisibility:"hidden"}},{whenState:"isActive",then:{labelVisibility:"visible",depth:"topNodes",backdropVisibility:"visible",backdropArea:"label",backdropLabelPadding:3,backdropColor:{attribute:"pill"},backdropShadowBlur:0}},{whenState:"isHovered",then:{backdropVisibility:"visible",backdropArea:"both",labelVisibility:"visible",backdropShadowBlur:10,size:s=>(s.size||6)*1.18}},{whenState:"isHighlighted",then:{backdropVisibility:"visible",backdropArea:"node",backdropPadding:3,labelVisibility:"visible",depth:"topNodes",backdropColor:{attribute:"ring"},backdropShadowColor:{attribute:"halo"},backdropShadowBlur:(s,d,u)=>14+16*(u.pulse??.5)}}],edges:[Ze.edges,{path:{when:s=>s.origin==="folder",then:"line",else:"curved"}},{opacity:(s,d,u)=>(u.reveal??1)*(u.hasActive&&!d.isActive?1-.9*(u.fade??0):1)},{whenState:"isActive",then:{color:{attribute:"activeColor"},size:2.4,depth:"topEdges"}},{when:(s,d)=>d.isActive&&s.origin!=="folder",then:{head:"arrow"}},{when:(s,d)=>d.isActive&&s.origin==="folder",then:{size:1,opacity:.55}},{when:s=>s.origin==="frontmatter",then:{head:"arrow"}}]}}),Y.on("enterNode",({node:s})=>{Ta=s,je()}),Y.on("leaveNode",()=>{Ta=null,je()}),Y.on("clickNode",({node:s})=>{if(V[s].type==="Theme"&&!Le){Ve.querySelector(`[data-theme="${CSS.escape(s)}"]`)?.click();return}xt(s)}),Y.on("doubleClickNode",s=>{s.preventSigmaDefault?.(),V[s.node].type!=="Entity"&&(location.href=nh(V[s.node]))}),Y.on("clickStage",()=>{Le?Yt():zr()}),ph(n.nodes,e),Xt(),Eh(n);let i=n.nodes.filter(s=>!Fr.has(s.type)).map(s=>t[s.id]);Y.setCustomBBox({x:[Math.min(...i.map(s=>s.x)),Math.max(...i.map(s=>s.x))],y:[Math.min(...i.map(s=>-s.y)),Math.max(...i.map(s=>-s.y))]});let o=new URL(location.href).searchParams.get("node"),l=!!(o&&V[o]);if(o&&!l){let s=new URL(location.href);s.searchParams.delete("node"),history.replaceState(null,"",s)}(l?s=>{Y.setGraphState({reveal:1}),Y.refresh(),requestAnimationFrame(()=>requestAnimationFrame(s))}:Sh)(()=>{l?xt(o):o&&qe("That note is not in the graph. Showing the whole map."),window.kfExplorer={screenPos:s=>{let d=Y.getNodeDisplayData(s);if(!d)return null;let u=Y.framedGraphToViewport({x:d.x,y:d.y});return[u.x,u.y]},labelBox:s=>{let d=Y.getNodeDisplayData(s);if(!d)return null;let u=Y.framedGraphToViewport({x:d.x,y:d.y}),c=kr(s);return[u.x-Math.max(c.left,6),u.x+Math.max(c.right,6)]},selected:()=>Le,cameraRatio:()=>Y.getCamera().ratio,renderer:Y},oe("explorer").dataset.ready="true"})}).catch(n=>{console.error(n),qe("The graph could not be loaded.")});})();
/*! Bundled license information:

sigma/dist/edge-data-texture-f60aad70.esm.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
