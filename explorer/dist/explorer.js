/* Knowledge Foundation graph explorer. Includes sigma.js 4.0.3 (MIT), graphology 0.26.0 (MIT), events 3.3.0 (MIT). */
(()=>{var Vo=Object.create;var Fi=Object.defineProperty;var Ho=Object.getOwnPropertyDescriptor;var Xo=Object.getOwnPropertyNames;var jo=Object.getPrototypeOf,Ko=Object.prototype.hasOwnProperty;var Ni=(a,t)=>()=>{try{return t||a((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var qo=(a,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Xo(t))!Ko.call(a,i)&&i!==e&&Fi(a,i,{get:()=>t[i],enumerable:!(r=Ho(t,i))||r.enumerable});return a};var pr=(a,t,e)=>(e=a!=null?Vo(jo(a)):{},qo(t||!a||!a.__esModule?Fi(e,"default",{value:a,enumerable:!0}):e,a));var xr=Ni((Pu,Ea)=>{"use strict";var it=typeof Reflect=="object"?Reflect:null,ki=it&&typeof it.apply=="function"?it.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)},mr;it&&typeof it.ownKeys=="function"?mr=it.ownKeys:Object.getOwnPropertySymbols?mr=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:mr=function(t){return Object.getOwnPropertyNames(t)};function Zo(a){console&&console.warn&&console.warn(a)}var zi=Number.isNaN||function(t){return t!==t};function U(){U.init.call(this)}Ea.exports=U;Ea.exports.once=ts;U.EventEmitter=U;U.prototype._events=void 0;U.prototype._eventsCount=0;U.prototype._maxListeners=void 0;var Mi=10;function br(a){if(typeof a!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}Object.defineProperty(U,"defaultMaxListeners",{enumerable:!0,get:function(){return Mi},set:function(a){if(typeof a!="number"||a<0||zi(a))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");Mi=a}});U.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};U.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||zi(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function Bi(a){return a._maxListeners===void 0?U.defaultMaxListeners:a._maxListeners}U.prototype.getMaxListeners=function(){return Bi(this)};U.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i=t==="error",n=this._events;if(n!==void 0)i=i&&n.error===void 0;else if(!i)return!1;if(i){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var l=n[t];if(l===void 0)return!1;if(typeof l=="function")ki(l,this,e);else for(var d=l.length,c=Vi(l,d),r=0;r<d;++r)ki(c[r],this,e);return!0};function Oi(a,t,e,r){var i,n,o;if(br(e),n=a._events,n===void 0?(n=a._events=Object.create(null),a._eventsCount=0):(n.newListener!==void 0&&(a.emit("newListener",t,e.listener?e.listener:e),n=a._events),o=n[t]),o===void 0)o=n[t]=e,++a._eventsCount;else if(typeof o=="function"?o=n[t]=r?[e,o]:[o,e]:r?o.unshift(e):o.push(e),i=Bi(a),i>0&&o.length>i&&!o.warned){o.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=a,s.type=t,s.count=o.length,Zo(s)}return a}U.prototype.addListener=function(t,e){return Oi(this,t,e,!1)};U.prototype.on=U.prototype.addListener;U.prototype.prependListener=function(t,e){return Oi(this,t,e,!0)};function Qo(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Wi(a,t,e){var r={fired:!1,wrapFn:void 0,target:a,type:t,listener:e},i=Qo.bind(r);return i.listener=e,r.wrapFn=i,i}U.prototype.once=function(t,e){return br(e),this.on(t,Wi(this,t,e)),this};U.prototype.prependOnceListener=function(t,e){return br(e),this.prependListener(t,Wi(this,t,e)),this};U.prototype.removeListener=function(t,e){var r,i,n,o,s;if(br(e),i=this._events,i===void 0)return this;if(r=i[t],r===void 0)return this;if(r===e||r.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,r.listener||e));else if(typeof r!="function"){for(n=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){s=r[o].listener,n=o;break}if(n<0)return this;n===0?r.shift():Jo(r,n),r.length===1&&(i[t]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",t,s||e)}return this};U.prototype.off=U.prototype.removeListener;U.prototype.removeAllListeners=function(t){var e,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[t]),this;if(arguments.length===0){var n=Object.keys(r),o;for(i=0;i<n.length;++i)o=n[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=r[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this};function Ui(a,t,e){var r=a._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i=="function"?e?[i.listener||i]:[i]:e?es(i):Vi(i,i.length)}U.prototype.listeners=function(t){return Ui(this,t,!0)};U.prototype.rawListeners=function(t){return Ui(this,t,!1)};U.listenerCount=function(a,t){return typeof a.listenerCount=="function"?a.listenerCount(t):$i.call(a,t)};U.prototype.listenerCount=$i;function $i(a){var t=this._events;if(t!==void 0){var e=t[a];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}U.prototype.eventNames=function(){return this._eventsCount>0?mr(this._events):[]};function Vi(a,t){for(var e=new Array(t),r=0;r<t;++r)e[r]=a[r];return e}function Jo(a,t){for(;t+1<a.length;t++)a[t]=a[t+1];a.pop()}function es(a){for(var t=new Array(a.length),e=0;e<t.length;++e)t[e]=a[e].listener||a[e];return t}function ts(a,t){return new Promise(function(e,r){function i(o){a.removeListener(t,n),r(o)}function n(){typeof a.removeListener=="function"&&a.removeListener("error",i),e([].slice.call(arguments))}Hi(a,t,n,{once:!0}),t!=="error"&&rs(a,i,{once:!0})})}function rs(a,t,e){typeof a.on=="function"&&Hi(a,"error",t,e)}function Hi(a,t,e,r){if(typeof a.on=="function")r.once?a.once(t,e):a.on(t,e);else if(typeof a.addEventListener=="function")a.addEventListener(t,function i(n){r.once&&a.removeEventListener(t,i),e(n)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}});var Dn=Ni((Ic,An)=>{An.exports=function(t){return t!==null&&typeof t=="object"&&typeof t.addUndirectedEdgeWithKey=="function"&&typeof t.dropNode=="function"&&typeof t.multi=="boolean"}});function Yo(){let a=arguments[0];for(let t=1,e=arguments.length;t<e;t++)if(arguments[t])for(let r in arguments[t])a[r]=arguments[t][r];return a}var $=Yo;typeof Object.assign=="function"&&($=Object.assign);function te(a,t,e,r){let i=a._nodes.get(t),n=null;return i&&(r==="mixed"?n=i.out&&i.out[e]||i.undirected&&i.undirected[e]:r==="directed"?n=i.out&&i.out[e]:n=i.undirected&&i.undirected[e]),n}function H(a){return typeof a=="object"&&a!==null}function Sa(a){let t;for(t in a)return!1;return!0}function ne(a,t,e){Object.defineProperty(a,t,{enumerable:!1,configurable:!1,writable:!0,value:e})}function le(a,t,e){let r={enumerable:!0,configurable:!0};typeof e=="function"?r.get=e:(r.value=e,r.writable=!1),Object.defineProperty(a,t,r)}function va(a){return!(!H(a)||a.attributes&&!Array.isArray(a.attributes))}function Ii(){let a=Math.floor(Math.random()*256)&255;return()=>a++}function ge(){let a=arguments,t=null,e=-1;return{[Symbol.iterator](){return this},next(){let r=null;do{if(t===null){if(e++,e>=a.length)return{done:!0};t=a[e][Symbol.iterator]()}if(r=t.next(),r.done){t=null;continue}break}while(!0);return r}}}function Ie(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}var rn=pr(xr());var Ct=class extends Error{constructor(t){super(),this.name="GraphError",this.message=t}},C=class a extends Ct{constructor(t){super(t),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}},D=class a extends Ct{constructor(t){super(t),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}},F=class a extends Ct{constructor(t){super(t),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,a.prototype.constructor)}};function Ta(a,t){this.key=a,this.attributes=t,this.clear()}Ta.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function _a(a,t){this.key=a,this.attributes=t,this.clear()}_a.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function Aa(a,t){this.key=a,this.attributes=t,this.clear()}Aa.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function He(a,t,e,r,i){this.key=t,this.attributes=i,this.undirected=a,this.source=e,this.target=r}He.prototype.attach=function(){let a="out",t="in";this.undirected&&(a=t="undirected");let e=this.source.key,r=this.target.key;this.source[a][r]=this,!(this.undirected&&e===r)&&(this.target[t][e]=this)};He.prototype.attachMulti=function(){let a="out",t="in",e=this.source.key,r=this.target.key;this.undirected&&(a=t="undirected");let i=this.source[a],n=i[r];if(typeof n>"u"){i[r]=this,this.undirected&&e===r||(this.target[t][e]=this);return}n.previous=this,this.next=n,i[r]=this,this.target[t][e]=this};He.prototype.detach=function(){let a=this.source.key,t=this.target.key,e="out",r="in";this.undirected&&(e=r="undirected"),delete this.source[e][t],delete this.target[r][a]};He.prototype.detachMulti=function(){let a=this.source.key,t=this.target.key,e="out",r="in";this.undirected&&(e=r="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][t],delete this.target[r][a]):(this.next.previous=void 0,this.source[e][t]=this.next,this.target[r][a]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};var Xi=0,ji=1,as=2,Ki=3;function _e(a,t,e,r,i,n,o){let s,l,d,c;if(r=""+r,e===Xi){if(s=a._nodes.get(r),!s)throw new D(`Graph.${t}: could not find the "${r}" node in the graph.`);d=i,c=n}else if(e===Ki){if(i=""+i,l=a._edges.get(i),!l)throw new D(`Graph.${t}: could not find the "${i}" edge in the graph.`);let g=l.source.key,u=l.target.key;if(r===g)s=l.target;else if(r===u)s=l.source;else throw new D(`Graph.${t}: the "${r}" node is not attached to the "${i}" edge (${g}, ${u}).`);d=n,c=o}else{if(l=a._edges.get(r),!l)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`);e===ji?s=l.source:s=l.target,d=i,c=n}return[s,d,c]}function is(a,t,e){a.prototype[t]=function(r,i,n){let[o,s]=_e(this,t,e,r,i,n);return o.attributes[s]}}function ns(a,t,e){a.prototype[t]=function(r,i){let[n]=_e(this,t,e,r,i);return n.attributes}}function os(a,t,e){a.prototype[t]=function(r,i,n){let[o,s]=_e(this,t,e,r,i,n);return o.attributes.hasOwnProperty(s)}}function ss(a,t,e){a.prototype[t]=function(r,i,n,o){let[s,l,d]=_e(this,t,e,r,i,n,o);return s.attributes[l]=d,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function ls(a,t,e){a.prototype[t]=function(r,i,n,o){let[s,l,d]=_e(this,t,e,r,i,n,o);if(typeof d!="function")throw new C(`Graph.${t}: updater should be a function.`);let c=s.attributes,g=d(c[l]);return c[l]=g,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function ds(a,t,e){a.prototype[t]=function(r,i,n){let[o,s]=_e(this,t,e,r,i,n);return delete o.attributes[s],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:s}),this}}function us(a,t,e){a.prototype[t]=function(r,i,n){let[o,s]=_e(this,t,e,r,i,n);if(!H(s))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return o.attributes=s,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function cs(a,t,e){a.prototype[t]=function(r,i,n){let[o,s]=_e(this,t,e,r,i,n);if(!H(s))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return $(o.attributes,s),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:s}),this}}function hs(a,t,e){a.prototype[t]=function(r,i,n){let[o,s]=_e(this,t,e,r,i,n);if(typeof s!="function")throw new C(`Graph.${t}: provided updater is not a function.`);return o.attributes=s(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}var gs=[{name:a=>`get${a}Attribute`,attacher:is},{name:a=>`get${a}Attributes`,attacher:ns},{name:a=>`has${a}Attribute`,attacher:os},{name:a=>`set${a}Attribute`,attacher:ss},{name:a=>`update${a}Attribute`,attacher:ls},{name:a=>`remove${a}Attribute`,attacher:ds},{name:a=>`replace${a}Attributes`,attacher:us},{name:a=>`merge${a}Attributes`,attacher:cs},{name:a=>`update${a}Attributes`,attacher:hs}];function Da(a){gs.forEach(function({name:t,attacher:e}){e(a,t("Node"),Xi),e(a,t("Source"),ji),e(a,t("Target"),as),e(a,t("Opposite"),Ki)})}function fs(a,t,e){a.prototype[t]=function(r,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+r,s=""+i;if(i=arguments[2],n=te(this,o,s,e),!n)throw new D(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,n=this._edges.get(r),!n)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}return n.attributes[i]}}function ps(a,t,e){a.prototype[t]=function(r){let i;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let n=""+r,o=""+arguments[1];if(i=te(this,n,o,e),!i)throw new D(`Graph.${t}: could not find an edge for the given path ("${n}" - "${o}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,i=this._edges.get(r),!i)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}return i.attributes}}function ms(a,t,e){a.prototype[t]=function(r,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+r,s=""+i;if(i=arguments[2],n=te(this,o,s,e),!n)throw new D(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,n=this._edges.get(r),!n)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}return n.attributes.hasOwnProperty(i)}}function bs(a,t,e){a.prototype[t]=function(r,i,n){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let s=""+r,l=""+i;if(i=arguments[2],n=arguments[3],o=te(this,s,l,e),!o)throw new D(`Graph.${t}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,o=this._edges.get(r),!o)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}return o.attributes[i]=n,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:i}),this}}function xs(a,t,e){a.prototype[t]=function(r,i,n){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let s=""+r,l=""+i;if(i=arguments[2],n=arguments[3],o=te(this,s,l,e),!o)throw new D(`Graph.${t}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,o=this._edges.get(r),!o)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}if(typeof n!="function")throw new C(`Graph.${t}: updater should be a function.`);return o.attributes[i]=n(o.attributes[i]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:i}),this}}function ys(a,t,e){a.prototype[t]=function(r,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+r,s=""+i;if(i=arguments[2],n=te(this,o,s,e),!n)throw new D(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,n=this._edges.get(r),!n)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}return delete n.attributes[i],this.emit("edgeAttributesUpdated",{key:n.key,type:"remove",attributes:n.attributes,name:i}),this}}function Ss(a,t,e){a.prototype[t]=function(r,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+r,s=""+i;if(i=arguments[2],n=te(this,o,s,e),!n)throw new D(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,n=this._edges.get(r),!n)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}if(!H(i))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return n.attributes=i,this.emit("edgeAttributesUpdated",{key:n.key,type:"replace",attributes:n.attributes}),this}}function vs(a,t,e){a.prototype[t]=function(r,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+r,s=""+i;if(i=arguments[2],n=te(this,o,s,e),!n)throw new D(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,n=this._edges.get(r),!n)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}if(!H(i))throw new C(`Graph.${t}: provided attributes are not a plain object.`);return $(n.attributes,i),this.emit("edgeAttributesUpdated",{key:n.key,type:"merge",attributes:n.attributes,data:i}),this}}function Es(a,t,e){a.prototype[t]=function(r,i){let n;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new F(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new F(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=""+r,s=""+i;if(i=arguments[2],n=te(this,o,s,e),!n)throw new D(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(e!=="mixed")throw new F(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(r=""+r,n=this._edges.get(r),!n)throw new D(`Graph.${t}: could not find the "${r}" edge in the graph.`)}if(typeof i!="function")throw new C(`Graph.${t}: provided updater is not a function.`);return n.attributes=i(n.attributes),this.emit("edgeAttributesUpdated",{key:n.key,type:"update",attributes:n.attributes}),this}}var Ts=[{name:a=>`get${a}Attribute`,attacher:fs},{name:a=>`get${a}Attributes`,attacher:ps},{name:a=>`has${a}Attribute`,attacher:ms},{name:a=>`set${a}Attribute`,attacher:bs},{name:a=>`update${a}Attribute`,attacher:xs},{name:a=>`remove${a}Attribute`,attacher:ys},{name:a=>`replace${a}Attributes`,attacher:Ss},{name:a=>`merge${a}Attributes`,attacher:vs},{name:a=>`update${a}Attributes`,attacher:Es}];function La(a){Ts.forEach(function({name:t,attacher:e}){e(a,t("Edge"),"mixed"),e(a,t("DirectedEdge"),"directed"),e(a,t("UndirectedEdge"),"undirected")})}var _s=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function As(a,t,e,r){let i=!1;for(let n in t){if(n===r)continue;let o=t[n];if(i=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),a&&i)return o.key}}function Ds(a,t,e,r){let i,n,o,s=!1;for(let l in t)if(l!==r){i=t[l];do{if(n=i.source,o=i.target,s=e(i.key,i.attributes,n.key,o.key,n.attributes,o.attributes,i.undirected),a&&s)return i.key;i=i.next}while(i!==void 0)}}function Ra(a,t){let e=Object.keys(a),r=e.length,i,n=0;return{[Symbol.iterator](){return this},next(){do if(i)i=i.next;else{if(n>=r)return{done:!0};let o=e[n++];if(o===t){i=void 0;continue}i=a[o]}while(!i);return{done:!1,value:{edge:i.key,attributes:i.attributes,source:i.source.key,target:i.target.key,sourceAttributes:i.source.attributes,targetAttributes:i.target.attributes,undirected:i.undirected}}}}}function Ls(a,t,e,r){let i=t[e];if(!i)return;let n=i.source,o=i.target;if(r(i.key,i.attributes,n.key,o.key,n.attributes,o.attributes,i.undirected)&&a)return i.key}function Rs(a,t,e,r){let i=t[e];if(!i)return;let n=!1;do{if(n=r(i.key,i.attributes,i.source.key,i.target.key,i.source.attributes,i.target.attributes,i.undirected),a&&n)return i.key;i=i.next}while(i!==void 0)}function Pa(a,t){let e=a[t];if(e.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!e)return{done:!0};let i={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:i}}};let r=!1;return{[Symbol.iterator](){return this},next(){return r===!0?{done:!0}:(r=!0,{done:!1,value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected}})}}}function Ps(a,t){if(a.size===0)return[];if(t==="mixed"||t===a.type)return Array.from(a._edges.keys());let e=t==="undirected"?a.undirectedSize:a.directedSize,r=new Array(e),i=t==="undirected",n=a._edges.values(),o=0,s,l;for(;s=n.next(),s.done!==!0;)l=s.value,l.undirected===i&&(r[o++]=l.key);return r}function qi(a,t,e,r){if(t.size===0)return;let i=e!=="mixed"&&e!==t.type,n=e==="undirected",o,s,l=!1,d=t._edges.values();for(;o=d.next(),o.done!==!0;){if(s=o.value,i&&s.undirected!==n)continue;let{key:c,attributes:g,source:u,target:f}=s;if(l=r(c,g,u.key,f.key,u.attributes,f.attributes,s.undirected),a&&l)return c}}function Cs(a,t){if(a.size===0)return Ie();let e=t!=="mixed"&&t!==a.type,r=t==="undirected",i=a._edges.values();return{[Symbol.iterator](){return this},next(){let n,o;for(;;){if(n=i.next(),n.done)return n;if(o=n.value,!(e&&o.undirected!==r))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function Ca(a,t,e,r,i,n){let o=t?Ds:As,s;if(e!=="undirected"&&(r!=="out"&&(s=o(a,i.in,n),a&&s)||r!=="in"&&(s=o(a,i.out,n,r?void 0:i.key),a&&s))||e!=="directed"&&(s=o(a,i.undirected,n),a&&s))return s}function ws(a,t,e,r){let i=[];return Ca(!1,a,t,e,r,function(n){i.push(n)}),i}function Gs(a,t,e){let r=Ie();return a!=="undirected"&&(t!=="out"&&typeof e.in<"u"&&(r=ge(r,Ra(e.in))),t!=="in"&&typeof e.out<"u"&&(r=ge(r,Ra(e.out,t?void 0:e.key)))),a!=="directed"&&typeof e.undirected<"u"&&(r=ge(r,Ra(e.undirected))),r}function wa(a,t,e,r,i,n,o){let s=e?Rs:Ls,l;if(t!=="undirected"&&(typeof i.in<"u"&&r!=="out"&&(l=s(a,i.in,n,o),a&&l)||typeof i.out<"u"&&r!=="in"&&(r||i.key!==n)&&(l=s(a,i.out,n,o),a&&l))||t!=="directed"&&typeof i.undirected<"u"&&(l=s(a,i.undirected,n,o),a&&l))return l}function Fs(a,t,e,r,i){let n=[];return wa(!1,a,t,e,r,i,function(o){n.push(o)}),n}function Ns(a,t,e,r){let i=Ie();return a!=="undirected"&&(typeof e.in<"u"&&t!=="out"&&r in e.in&&(i=ge(i,Pa(e.in,r))),typeof e.out<"u"&&t!=="in"&&r in e.out&&(t||e.key!==r)&&(i=ge(i,Pa(e.out,r)))),a!=="directed"&&typeof e.undirected<"u"&&r in e.undirected&&(i=ge(i,Pa(e.undirected,r))),i}function Is(a,t){let{name:e,type:r,direction:i}=t;a.prototype[e]=function(n,o){if(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)return[];if(!arguments.length)return Ps(this,r);if(arguments.length===1){n=""+n;let s=this._nodes.get(n);if(typeof s>"u")throw new D(`Graph.${e}: could not find the "${n}" node in the graph.`);return ws(this.multi,r==="mixed"?this.type:r,i,s)}if(arguments.length===2){n=""+n,o=""+o;let s=this._nodes.get(n);if(!s)throw new D(`Graph.${e}:  could not find the "${n}" source node in the graph.`);if(!this._nodes.has(o))throw new D(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return Fs(r,this.multi,i,s,o)}throw new C(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function ks(a,t){let{name:e,type:r,direction:i}=t,n="forEach"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[n]=function(d,c,g){if(!(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)){if(arguments.length===1)return g=d,qi(!1,this,r,g);if(arguments.length===2){d=""+d,g=c;let u=this._nodes.get(d);if(typeof u>"u")throw new D(`Graph.${n}: could not find the "${d}" node in the graph.`);return Ca(!1,this.multi,r==="mixed"?this.type:r,i,u,g)}if(arguments.length===3){d=""+d,c=""+c;let u=this._nodes.get(d);if(!u)throw new D(`Graph.${n}:  could not find the "${d}" source node in the graph.`);if(!this._nodes.has(c))throw new D(`Graph.${n}:  could not find the "${c}" target node in the graph.`);return wa(!1,r,this.multi,i,u,c,g)}throw new C(`Graph.${n}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};let o="map"+e[0].toUpperCase()+e.slice(1);a.prototype[o]=function(){let d=Array.prototype.slice.call(arguments),c=d.pop(),g;if(d.length===0){let u=0;r!=="directed"&&(u+=this.undirectedSize),r!=="undirected"&&(u+=this.directedSize),g=new Array(u);let f=0;d.push((h,m,x,b,p,y,S)=>{g[f++]=c(h,m,x,b,p,y,S)})}else g=[],d.push((u,f,h,m,x,b,p)=>{g.push(c(u,f,h,m,x,b,p))});return this[n].apply(this,d),g};let s="filter"+e[0].toUpperCase()+e.slice(1);a.prototype[s]=function(){let d=Array.prototype.slice.call(arguments),c=d.pop(),g=[];return d.push((u,f,h,m,x,b,p)=>{c(u,f,h,m,x,b,p)&&g.push(u)}),this[n].apply(this,d),g};let l="reduce"+e[0].toUpperCase()+e.slice(1);a.prototype[l]=function(){let d=Array.prototype.slice.call(arguments);if(d.length<2||d.length>4)throw new C(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${d.length}).`);if(typeof d[d.length-1]=="function"&&typeof d[d.length-2]!="function")throw new C(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let c,g;d.length===2?(c=d[0],g=d[1],d=[]):d.length===3?(c=d[1],g=d[2],d=[d[0]]):d.length===4&&(c=d[2],g=d[3],d=[d[0],d[1]]);let u=g;return d.push((f,h,m,x,b,p,y)=>{u=c(u,f,h,m,x,b,p,y)}),this[n].apply(this,d),u}}function Ms(a,t){let{name:e,type:r,direction:i}=t,n="find"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[n]=function(l,d,c){if(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)return!1;if(arguments.length===1)return c=l,qi(!0,this,r,c);if(arguments.length===2){l=""+l,c=d;let g=this._nodes.get(l);if(typeof g>"u")throw new D(`Graph.${n}: could not find the "${l}" node in the graph.`);return Ca(!0,this.multi,r==="mixed"?this.type:r,i,g,c)}if(arguments.length===3){l=""+l,d=""+d;let g=this._nodes.get(l);if(!g)throw new D(`Graph.${n}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(d))throw new D(`Graph.${n}:  could not find the "${d}" target node in the graph.`);return wa(!0,r,this.multi,i,g,d,c)}throw new C(`Graph.${n}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};let o="some"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[o]=function(){let l=Array.prototype.slice.call(arguments),d=l.pop();return l.push((g,u,f,h,m,x,b)=>d(g,u,f,h,m,x,b)),!!this[n].apply(this,l)};let s="every"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[s]=function(){let l=Array.prototype.slice.call(arguments),d=l.pop();return l.push((g,u,f,h,m,x,b)=>!d(g,u,f,h,m,x,b)),!this[n].apply(this,l)}}function zs(a,t){let{name:e,type:r,direction:i}=t,n=e.slice(0,-1)+"Entries";a.prototype[n]=function(o,s){if(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)return Ie();if(!arguments.length)return Cs(this,r);if(arguments.length===1){o=""+o;let l=this._nodes.get(o);if(!l)throw new D(`Graph.${n}: could not find the "${o}" node in the graph.`);return Gs(r,i,l)}if(arguments.length===2){o=""+o,s=""+s;let l=this._nodes.get(o);if(!l)throw new D(`Graph.${n}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(s))throw new D(`Graph.${n}:  could not find the "${s}" target node in the graph.`);return Ns(r,i,l,s)}throw new C(`Graph.${n}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ga(a){_s.forEach(t=>{Is(a,t),ks(a,t),Ms(a,t),zs(a,t)})}var Bs=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function yr(){this.A=null,this.B=null}yr.prototype.wrap=function(a){this.A===null?this.A=a:this.B===null&&(this.B=a)};yr.prototype.has=function(a){return this.A!==null&&a in this.A||this.B!==null&&a in this.B};function wt(a,t,e,r,i){for(let n in r){let o=r[n],s=o.source,l=o.target,d=s===e?l:s;if(t&&t.has(d.key))continue;let c=i(d.key,d.attributes);if(a&&c)return d.key}}function Fa(a,t,e,r,i){if(t!=="mixed"){if(t==="undirected")return wt(a,null,r,r.undirected,i);if(typeof e=="string")return wt(a,null,r,r[e],i)}let n=new yr,o;if(t!=="undirected"){if(e!=="out"){if(o=wt(a,null,r,r.in,i),a&&o)return o;n.wrap(r.in)}if(e!=="in"){if(o=wt(a,n,r,r.out,i),a&&o)return o;n.wrap(r.out)}}if(t!=="directed"&&(o=wt(a,n,r,r.undirected,i),a&&o))return o}function Os(a,t,e){if(a!=="mixed"){if(a==="undirected")return Object.keys(e.undirected);if(typeof t=="string")return Object.keys(e[t])}let r=[];return Fa(!1,a,t,e,function(i){r.push(i)}),r}function Gt(a,t,e){let r=Object.keys(e),i=r.length,n=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(n>=i)return a&&a.wrap(e),{done:!0};let s=e[r[n++]],l=s.source,d=s.target;if(o=l===t?d:l,a&&a.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Ws(a,t,e){if(a!=="mixed"){if(a==="undirected")return Gt(null,e,e.undirected);if(typeof t=="string")return Gt(null,e,e[t])}let r=Ie(),i=new yr;return a!=="undirected"&&(t!=="out"&&(r=ge(r,Gt(i,e,e.in))),t!=="in"&&(r=ge(r,Gt(i,e,e.out)))),a!=="directed"&&(r=ge(r,Gt(i,e,e.undirected))),r}function Us(a,t){let{name:e,type:r,direction:i}=t;a.prototype[e]=function(n){if(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)return[];n=""+n;let o=this._nodes.get(n);if(typeof o>"u")throw new D(`Graph.${e}: could not find the "${n}" node in the graph.`);return Os(r==="mixed"?this.type:r,i,o)}}function $s(a,t){let{name:e,type:r,direction:i}=t,n="forEach"+e[0].toUpperCase()+e.slice(1,-1);a.prototype[n]=function(d,c){if(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)return;d=""+d;let g=this._nodes.get(d);if(typeof g>"u")throw new D(`Graph.${n}: could not find the "${d}" node in the graph.`);Fa(!1,r==="mixed"?this.type:r,i,g,c)};let o="map"+e[0].toUpperCase()+e.slice(1);a.prototype[o]=function(d,c){let g=[];return this[n](d,(u,f)=>{g.push(c(u,f))}),g};let s="filter"+e[0].toUpperCase()+e.slice(1);a.prototype[s]=function(d,c){let g=[];return this[n](d,(u,f)=>{c(u,f)&&g.push(u)}),g};let l="reduce"+e[0].toUpperCase()+e.slice(1);a.prototype[l]=function(d,c,g){if(arguments.length<3)throw new C(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u=g;return this[n](d,(f,h)=>{u=c(u,f,h)}),u}}function Vs(a,t){let{name:e,type:r,direction:i}=t,n=e[0].toUpperCase()+e.slice(1,-1),o="find"+n;a.prototype[o]=function(d,c){if(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)return;d=""+d;let g=this._nodes.get(d);if(typeof g>"u")throw new D(`Graph.${o}: could not find the "${d}" node in the graph.`);return Fa(!0,r==="mixed"?this.type:r,i,g,c)};let s="some"+n;a.prototype[s]=function(d,c){return!!this[o](d,c)};let l="every"+n;a.prototype[l]=function(d,c){return!this[o](d,(u,f)=>!c(u,f))}}function Hs(a,t){let{name:e,type:r,direction:i}=t,n=e.slice(0,-1)+"Entries";a.prototype[n]=function(o){if(r!=="mixed"&&this.type!=="mixed"&&r!==this.type)return Ie();o=""+o;let s=this._nodes.get(o);if(typeof s>"u")throw new D(`Graph.${n}: could not find the "${o}" node in the graph.`);return Ws(r==="mixed"?this.type:r,i,s)}}function Na(a){Bs.forEach(t=>{Us(a,t),$s(a,t),Vs(a,t),Hs(a,t)})}function Ft(a,t,e,r,i){let n=r._nodes.values(),o=r.type,s,l,d,c,g,u,f;for(;s=n.next(),s.done!==!0;){let h=!1;if(l=s.value,o!=="undirected"){c=l.out;for(d in c){g=c[d];do{if(u=g.target,h=!0,f=i(l.key,u.key,l.attributes,u.attributes,g.key,g.attributes,g.undirected),a&&f)return g;g=g.next}while(g)}}if(o!=="directed"){c=l.undirected;for(d in c)if(!(t&&l.key>d)){g=c[d];do{if(u=g.target,u.key!==d&&(u=g.source),h=!0,f=i(l.key,u.key,l.attributes,u.attributes,g.key,g.attributes,g.undirected),a&&f)return g;g=g.next}while(g)}}if(e&&!h&&(f=i(l.key,null,l.attributes,null,null,null,null),a&&f))return null}}function Yi(a,t){let e={key:a};return Sa(t.attributes)||(e.attributes=$({},t.attributes)),e}function Zi(a,t,e){let r={key:t,source:e.source.key,target:e.target.key};return Sa(e.attributes)||(r.attributes=$({},e.attributes)),a==="mixed"&&e.undirected&&(r.undirected=!0),r}function Qi(a){if(!H(a))throw new C('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in a))throw new C("Graph.import: serialized node is missing its key.");if("attributes"in a&&(!H(a.attributes)||a.attributes===null))throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Ji(a){if(!H(a))throw new C('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in a))throw new C("Graph.import: serialized edge is missing its source.");if(!("target"in a))throw new C("Graph.import: serialized edge is missing its target.");if("attributes"in a&&(!H(a.attributes)||a.attributes===null))throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in a&&typeof a.undirected!="boolean")throw new C("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}var Xs=Ii(),js=new Set(["directed","undirected","mixed"]),en=new Set(["domain","_events","_eventsCount","_maxListeners"]),Ks=[{name:a=>`${a}Edge`,generateKey:!0},{name:a=>`${a}DirectedEdge`,generateKey:!0,type:"directed"},{name:a=>`${a}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:a=>`${a}EdgeWithKey`},{name:a=>`${a}DirectedEdgeWithKey`,type:"directed"},{name:a=>`${a}UndirectedEdgeWithKey`,type:"undirected"}],qs={allowSelfLoops:!0,multi:!1,type:"mixed"};function Ys(a,t,e){if(e&&!H(e))throw new C(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(t=""+t,e=e||{},a._nodes.has(t))throw new F(`Graph.addNode: the "${t}" node already exist in the graph.`);let r=new a.NodeDataClass(t,e);return a._nodes.set(t,r),a.emit("nodeAdded",{key:t,attributes:e}),r}function tn(a,t,e){let r=new a.NodeDataClass(t,e);return a._nodes.set(t,r),a.emit("nodeAdded",{key:t,attributes:e}),r}function an(a,t,e,r,i,n,o,s){if(!r&&a.type==="undirected")throw new F(`Graph.${t}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(r&&a.type==="directed")throw new F(`Graph.${t}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(s&&!H(s))throw new C(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`);if(n=""+n,o=""+o,s=s||{},!a.allowSelfLoops&&n===o)throw new F(`Graph.${t}: source & target are the same ("${n}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let l=a._nodes.get(n),d=a._nodes.get(o);if(!l)throw new D(`Graph.${t}: source node "${n}" not found.`);if(!d)throw new D(`Graph.${t}: target node "${o}" not found.`);let c={key:null,undirected:r,source:n,target:o,attributes:s};if(e)i=a._edgeKeyGenerator();else if(i=""+i,a._edges.has(i))throw new F(`Graph.${t}: the "${i}" edge already exists in the graph.`);if(!a.multi&&(r?typeof l.undirected[o]<"u":typeof l.out[o]<"u"))throw new F(`Graph.${t}: an edge linking "${n}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);let g=new He(r,i,l,d,s);a._edges.set(i,g);let u=n===o;return r?(l.undirectedDegree++,d.undirectedDegree++,u&&(l.undirectedLoops++,a._undirectedSelfLoopCount++)):(l.outDegree++,d.inDegree++,u&&(l.directedLoops++,a._directedSelfLoopCount++)),a.multi?g.attachMulti():g.attach(),r?a._undirectedSize++:a._directedSize++,c.key=i,a.emit("edgeAdded",c),i}function Zs(a,t,e,r,i,n,o,s,l){if(!r&&a.type==="undirected")throw new F(`Graph.${t}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(r&&a.type==="directed")throw new F(`Graph.${t}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(s){if(l){if(typeof s!="function")throw new C(`Graph.${t}: invalid updater function. Expecting a function but got "${s}"`)}else if(!H(s))throw new C(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`)}n=""+n,o=""+o;let d;if(l&&(d=s,s=void 0),!a.allowSelfLoops&&n===o)throw new F(`Graph.${t}: source & target are the same ("${n}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let c=a._nodes.get(n),g=a._nodes.get(o),u,f;if(!e&&(u=a._edges.get(i),u)){if((u.source.key!==n||u.target.key!==o)&&(!r||u.source.key!==o||u.target.key!==n))throw new F(`Graph.${t}: inconsistency detected when attempting to merge the "${i}" edge with "${n}" source & "${o}" target vs. ("${u.source.key}", "${u.target.key}").`);f=u}if(!f&&!a.multi&&c&&(f=r?c.undirected[o]:c.out[o]),f){let p=[f.key,!1,!1,!1];if(l?!d:!s)return p;if(l){let y=f.attributes;f.attributes=d(y),a.emit("edgeAttributesUpdated",{type:"replace",key:f.key,attributes:f.attributes})}else $(f.attributes,s),a.emit("edgeAttributesUpdated",{type:"merge",key:f.key,attributes:f.attributes,data:s});return p}s=s||{},l&&d&&(s=d(s));let h={key:null,undirected:r,source:n,target:o,attributes:s};if(e)i=a._edgeKeyGenerator();else if(i=""+i,a._edges.has(i))throw new F(`Graph.${t}: the "${i}" edge already exists in the graph.`);let m=!1,x=!1;c||(c=tn(a,n,{}),m=!0,n===o&&(g=c,x=!0)),g||(g=tn(a,o,{}),x=!0),u=new He(r,i,c,g,s),a._edges.set(i,u);let b=n===o;return r?(c.undirectedDegree++,g.undirectedDegree++,b&&(c.undirectedLoops++,a._undirectedSelfLoopCount++)):(c.outDegree++,g.inDegree++,b&&(c.directedLoops++,a._directedSelfLoopCount++)),a.multi?u.attachMulti():u.attach(),r?a._undirectedSize++:a._directedSize++,h.key=i,a.emit("edgeAdded",h),[i,!0,m,x]}function nt(a,t){a._edges.delete(t.key);let{source:e,target:r,attributes:i}=t,n=t.undirected,o=e===r;n?(e.undirectedDegree--,r.undirectedDegree--,o&&(e.undirectedLoops--,a._undirectedSelfLoopCount--)):(e.outDegree--,r.inDegree--,o&&(e.directedLoops--,a._directedSelfLoopCount--)),a.multi?t.detachMulti():t.detach(),n?a._undirectedSize--:a._directedSize--,a.emit("edgeDropped",{key:t.key,attributes:i,source:e.key,target:r.key,undirected:n})}var O=class a extends rn.EventEmitter{constructor(t){if(super(),t=$({},qs,t),typeof t.multi!="boolean")throw new C(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${t.multi}".`);if(!js.has(t.type))throw new C(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${t.type}".`);if(typeof t.allowSelfLoops!="boolean")throw new C(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${t.allowSelfLoops}".`);let e=t.type==="mixed"?Ta:t.type==="directed"?_a:Aa;ne(this,"NodeDataClass",e);let r="geid_"+Xs()+"_",i=0,n=()=>{let o;do o=r+i++;while(this._edges.has(o));return o};ne(this,"_attributes",{}),ne(this,"_nodes",new Map),ne(this,"_edges",new Map),ne(this,"_directedSize",0),ne(this,"_undirectedSize",0),ne(this,"_directedSelfLoopCount",0),ne(this,"_undirectedSelfLoopCount",0),ne(this,"_edgeKeyGenerator",n),ne(this,"_options",t),en.forEach(o=>ne(this,o,this[o])),le(this,"order",()=>this._nodes.size),le(this,"size",()=>this._edges.size),le(this,"directedSize",()=>this._directedSize),le(this,"undirectedSize",()=>this._undirectedSize),le(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),le(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),le(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),le(this,"multi",this._options.multi),le(this,"type",this._options.type),le(this,"allowSelfLoops",this._options.allowSelfLoops),le(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(t){return this._nodes.has(""+t)}hasDirectedEdge(t,e){if(this.type==="undirected")return!1;if(arguments.length===1){let r=""+t,i=this._edges.get(r);return!!i&&!i.undirected}else if(arguments.length===2){t=""+t,e=""+e;let r=this._nodes.get(t);return r?r.out.hasOwnProperty(e):!1}throw new C(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(t,e){if(this.type==="directed")return!1;if(arguments.length===1){let r=""+t,i=this._edges.get(r);return!!i&&i.undirected}else if(arguments.length===2){t=""+t,e=""+e;let r=this._nodes.get(t);return r?r.undirected.hasOwnProperty(e):!1}throw new C(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(t,e){if(arguments.length===1){let r=""+t;return this._edges.has(r)}else if(arguments.length===2){t=""+t,e=""+e;let r=this._nodes.get(t);return r?typeof r.out<"u"&&r.out.hasOwnProperty(e)||typeof r.undirected<"u"&&r.undirected.hasOwnProperty(e):!1}throw new C(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(t,e){if(this.type==="undirected")return;if(t=""+t,e=""+e,this.multi)throw new F("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");let r=this._nodes.get(t);if(!r)throw new D(`Graph.directedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new D(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);let i=r.out&&r.out[e]||void 0;if(i)return i.key}undirectedEdge(t,e){if(this.type==="directed")return;if(t=""+t,e=""+e,this.multi)throw new F("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");let r=this._nodes.get(t);if(!r)throw new D(`Graph.undirectedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new D(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);let i=r.undirected&&r.undirected[e]||void 0;if(i)return i.key}edge(t,e){if(this.multi)throw new F("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.edge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new D(`Graph.edge: could not find the "${e}" target node in the graph.`);let i=r.out&&r.out[e]||r.undirected&&r.undirected[e]||void 0;if(i)return i.key}areDirectedNeighbors(t,e){t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.areDirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in r.in||e in r.out}areOutNeighbors(t,e){t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.areOutNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in r.out}areInNeighbors(t,e){t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.areInNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in r.in}areUndirectedNeighbors(t,e){t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.areUndirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="directed"?!1:e in r.undirected}areNeighbors(t,e){t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.areNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&(e in r.in||e in r.out)||this.type!=="directed"&&e in r.undirected}areInboundNeighbors(t,e){t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.areInboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in r.in||this.type!=="directed"&&e in r.undirected}areOutboundNeighbors(t,e){t=""+t,e=""+e;let r=this._nodes.get(t);if(!r)throw new D(`Graph.areOutboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in r.out||this.type!=="directed"&&e in r.undirected}inDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.inDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.outDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.directedDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.undirectedDegree: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.inboundDegree: could not find the "${t}" node in the graph.`);let r=0;return this.type!=="directed"&&(r+=e.undirectedDegree),this.type!=="undirected"&&(r+=e.inDegree),r}outboundDegree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.outboundDegree: could not find the "${t}" node in the graph.`);let r=0;return this.type!=="directed"&&(r+=e.undirectedDegree),this.type!=="undirected"&&(r+=e.outDegree),r}degree(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.degree: could not find the "${t}" node in the graph.`);let r=0;return this.type!=="directed"&&(r+=e.undirectedDegree),this.type!=="undirected"&&(r+=e.inDegree+e.outDegree),r}inDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.inDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.outDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.directedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let r=0,i=0;return this.type!=="directed"&&(r+=e.undirectedDegree,i+=e.undirectedLoops*2),this.type!=="undirected"&&(r+=e.inDegree,i+=e.directedLoops),r-i}outboundDegreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let r=0,i=0;return this.type!=="directed"&&(r+=e.undirectedDegree,i+=e.undirectedLoops*2),this.type!=="undirected"&&(r+=e.outDegree,i+=e.directedLoops),r-i}degreeWithoutSelfLoops(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.degreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let r=0,i=0;return this.type!=="directed"&&(r+=e.undirectedDegree,i+=e.undirectedLoops*2),this.type!=="undirected"&&(r+=e.inDegree+e.outDegree,i+=e.directedLoops*2),r-i}source(t){t=""+t;let e=this._edges.get(t);if(!e)throw new D(`Graph.source: could not find the "${t}" edge in the graph.`);return e.source.key}target(t){t=""+t;let e=this._edges.get(t);if(!e)throw new D(`Graph.target: could not find the "${t}" edge in the graph.`);return e.target.key}extremities(t){t=""+t;let e=this._edges.get(t);if(!e)throw new D(`Graph.extremities: could not find the "${t}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(t,e){t=""+t,e=""+e;let r=this._edges.get(e);if(!r)throw new D(`Graph.opposite: could not find the "${e}" edge in the graph.`);let i=r.source.key,n=r.target.key;if(t===i)return n;if(t===n)return i;throw new D(`Graph.opposite: the "${t}" node is not attached to the "${e}" edge (${i}, ${n}).`)}hasExtremity(t,e){t=""+t,e=""+e;let r=this._edges.get(t);if(!r)throw new D(`Graph.hasExtremity: could not find the "${t}" edge in the graph.`);return r.source.key===e||r.target.key===e}isUndirected(t){t=""+t;let e=this._edges.get(t);if(!e)throw new D(`Graph.isUndirected: could not find the "${t}" edge in the graph.`);return e.undirected}isDirected(t){t=""+t;let e=this._edges.get(t);if(!e)throw new D(`Graph.isDirected: could not find the "${t}" edge in the graph.`);return!e.undirected}isSelfLoop(t){t=""+t;let e=this._edges.get(t);if(!e)throw new D(`Graph.isSelfLoop: could not find the "${t}" edge in the graph.`);return e.source===e.target}addNode(t,e){return Ys(this,t,e).key}mergeNode(t,e){if(e&&!H(e))throw new C(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);t=""+t,e=e||{};let r=this._nodes.get(t);return r?(e&&($(r.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:t,attributes:r.attributes,data:e})),[t,!1]):(r=new this.NodeDataClass(t,e),this._nodes.set(t,r),this.emit("nodeAdded",{key:t,attributes:e}),[t,!0])}updateNode(t,e){if(e&&typeof e!="function")throw new C(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);t=""+t;let r=this._nodes.get(t);if(r){if(e){let n=r.attributes;r.attributes=e(n),this.emit("nodeAttributesUpdated",{type:"replace",key:t,attributes:r.attributes})}return[t,!1]}let i=e?e({}):{};return r=new this.NodeDataClass(t,i),this._nodes.set(t,r),this.emit("nodeAdded",{key:t,attributes:i}),[t,!0]}dropNode(t){t=""+t;let e=this._nodes.get(t);if(!e)throw new D(`Graph.dropNode: could not find the "${t}" node in the graph.`);let r;if(this.type!=="undirected"){for(let i in e.out){r=e.out[i];do nt(this,r),r=r.next;while(r)}for(let i in e.in){r=e.in[i];do nt(this,r),r=r.next;while(r)}}if(this.type!=="directed")for(let i in e.undirected){r=e.undirected[i];do nt(this,r),r=r.next;while(r)}this._nodes.delete(t),this.emit("nodeDropped",{key:t,attributes:e.attributes})}dropEdge(t){let e;if(arguments.length>1){let r=""+arguments[0],i=""+arguments[1];if(e=te(this,r,i,this.type),!e)throw new D(`Graph.dropEdge: could not find the "${r}" -> "${i}" edge in the graph.`)}else if(t=""+t,e=this._edges.get(t),!e)throw new D(`Graph.dropEdge: could not find the "${t}" edge in the graph.`);return nt(this,e),this}dropDirectedEdge(t,e){if(arguments.length<2)throw new F("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new F("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");t=""+t,e=""+e;let r=te(this,t,e,"directed");if(!r)throw new D(`Graph.dropDirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return nt(this,r),this}dropUndirectedEdge(t,e){if(arguments.length<2)throw new F("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new F("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");let r=te(this,t,e,"undirected");if(!r)throw new D(`Graph.dropUndirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return nt(this,r),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){let t=this._nodes.values(),e;for(;e=t.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(t){return this._attributes[t]}getAttributes(){return this._attributes}hasAttribute(t){return this._attributes.hasOwnProperty(t)}setAttribute(t,e){return this._attributes[t]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}updateAttribute(t,e){if(typeof e!="function")throw new C("Graph.updateAttribute: updater should be a function.");let r=this._attributes[t];return this._attributes[t]=e(r),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}removeAttribute(t){return delete this._attributes[t],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:t}),this}replaceAttributes(t){if(!H(t))throw new C("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=t,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(t){if(!H(t))throw new C("Graph.mergeAttributes: provided attributes are not a plain object.");return $(this._attributes,t),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:t}),this}updateAttributes(t){if(typeof t!="function")throw new C("Graph.updateAttributes: provided updater is not a function.");return this._attributes=t(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(t,e){if(typeof t!="function")throw new C("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!va(e))throw new C("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let r=this._nodes.values(),i,n;for(;i=r.next(),i.done!==!0;)n=i.value,n.attributes=t(n.key,n.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(t,e){if(typeof t!="function")throw new C("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!va(e))throw new C("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");let r=this._edges.values(),i,n,o,s;for(;i=r.next(),i.done!==!0;)n=i.value,o=n.source,s=n.target,n.attributes=t(n.key,n.attributes,o.key,s.key,o.attributes,s.attributes,n.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(t){if(typeof t!="function")throw new C("Graph.forEachAdjacencyEntry: expecting a callback.");Ft(!1,!1,!1,this,t)}forEachAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new C("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Ft(!1,!1,!0,this,t)}forEachAssymetricAdjacencyEntry(t){if(typeof t!="function")throw new C("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Ft(!1,!0,!1,this,t)}forEachAssymetricAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new C("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Ft(!1,!0,!0,this,t)}nodes(){return Array.from(this._nodes.keys())}forEachNode(t){if(typeof t!="function")throw new C("Graph.forEachNode: expecting a callback.");let e=this._nodes.values(),r,i;for(;r=e.next(),r.done!==!0;)i=r.value,t(i.key,i.attributes)}findNode(t){if(typeof t!="function")throw new C("Graph.findNode: expecting a callback.");let e=this._nodes.values(),r,i;for(;r=e.next(),r.done!==!0;)if(i=r.value,t(i.key,i.attributes))return i.key}mapNodes(t){if(typeof t!="function")throw new C("Graph.mapNode: expecting a callback.");let e=this._nodes.values(),r,i,n=new Array(this.order),o=0;for(;r=e.next(),r.done!==!0;)i=r.value,n[o++]=t(i.key,i.attributes);return n}someNode(t){if(typeof t!="function")throw new C("Graph.someNode: expecting a callback.");let e=this._nodes.values(),r,i;for(;r=e.next(),r.done!==!0;)if(i=r.value,t(i.key,i.attributes))return!0;return!1}everyNode(t){if(typeof t!="function")throw new C("Graph.everyNode: expecting a callback.");let e=this._nodes.values(),r,i;for(;r=e.next(),r.done!==!0;)if(i=r.value,!t(i.key,i.attributes))return!1;return!0}filterNodes(t){if(typeof t!="function")throw new C("Graph.filterNodes: expecting a callback.");let e=this._nodes.values(),r,i,n=[];for(;r=e.next(),r.done!==!0;)i=r.value,t(i.key,i.attributes)&&n.push(i.key);return n}reduceNodes(t,e){if(typeof t!="function")throw new C("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new C("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let r=e,i=this._nodes.values(),n,o;for(;n=i.next(),n.done!==!0;)o=n.value,r=t(r,o.key,o.attributes);return r}nodeEntries(){let t=this._nodes.values();return{[Symbol.iterator](){return this},next(){let e=t.next();if(e.done)return e;let r=e.value;return{value:{node:r.key,attributes:r.attributes},done:!1}}}}export(){let t=new Array(this._nodes.size),e=0;this._nodes.forEach((i,n)=>{t[e++]=Yi(n,i)});let r=new Array(this._edges.size);return e=0,this._edges.forEach((i,n)=>{r[e++]=Zi(this.type,n,i)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:t,edges:r}}import(t,e=!1){if(t instanceof a)return t.forEachNode((l,d)=>{e?this.mergeNode(l,d):this.addNode(l,d)}),t.forEachEdge((l,d,c,g,u,f,h)=>{e?h?this.mergeUndirectedEdgeWithKey(l,c,g,d):this.mergeDirectedEdgeWithKey(l,c,g,d):h?this.addUndirectedEdgeWithKey(l,c,g,d):this.addDirectedEdgeWithKey(l,c,g,d)}),this;if(!H(t))throw new C("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(t.attributes){if(!H(t.attributes))throw new C("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}let r,i,n,o,s;if(t.nodes){if(n=t.nodes,!Array.isArray(n))throw new C("Graph.import: invalid nodes. Expecting an array.");for(r=0,i=n.length;r<i;r++){o=n[r],Qi(o);let{key:l,attributes:d}=o;e?this.mergeNode(l,d):this.addNode(l,d)}}if(t.edges){let l=!1;if(this.type==="undirected"&&(l=!0),n=t.edges,!Array.isArray(n))throw new C("Graph.import: invalid edges. Expecting an array.");for(r=0,i=n.length;r<i;r++){s=n[r],Ji(s);let{source:d,target:c,attributes:g,undirected:u=l}=s,f;"key"in s?(f=e?u?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:u?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,f.call(this,s.key,d,c,g)):(f=e?u?this.mergeUndirectedEdge:this.mergeDirectedEdge:u?this.addUndirectedEdge:this.addDirectedEdge,f.call(this,d,c,g))}}return this}nullCopy(t){let e=new a($({},this._options,t));return e.replaceAttributes($({},this.getAttributes())),e}emptyCopy(t){let e=this.nullCopy(t);return this._nodes.forEach((r,i)=>{let n=$({},r.attributes);r=new e.NodeDataClass(i,n),e._nodes.set(i,r)}),e}copy(t){if(t=t||{},typeof t.type=="string"&&t.type!==this.type&&t.type!=="mixed")throw new F(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${t.type}" because this would mean losing information about the current graph.`);if(typeof t.multi=="boolean"&&t.multi!==this.multi&&t.multi!==!0)throw new F("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof t.allowSelfLoops=="boolean"&&t.allowSelfLoops!==this.allowSelfLoops&&t.allowSelfLoops!==!0)throw new F("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");let e=this.emptyCopy(t),r=this._edges.values(),i,n;for(;i=r.next(),i.done!==!0;)n=i.value,an(e,"copy",!1,n.undirected,n.key,n.source.key,n.target.key,$({},n.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){let t={};this._nodes.forEach((n,o)=>{t[o]=n.attributes});let e={},r={};this._edges.forEach((n,o)=>{let s=n.undirected?"--":"->",l="",d=n.source.key,c=n.target.key,g;n.undirected&&d>c&&(g=d,d=c,c=g);let u=`(${d})${s}(${c})`;o.startsWith("geid_")?this.multi&&(typeof r[u]>"u"?r[u]=0:r[u]++,l+=`${r[u]}. `):l+=`[${o}]: `,l+=u,e[l]=n.attributes});let i={};for(let n in this)this.hasOwnProperty(n)&&!en.has(n)&&typeof this[n]!="function"&&typeof n!="symbol"&&(i[n]=this[n]);return i.attributes=this._attributes,i.nodes=t,i.edges=e,ne(i,"constructor",this.constructor),i}};typeof Symbol<"u"&&(O.prototype[Symbol.for("nodejs.util.inspect.custom")]=O.prototype.inspect);Ks.forEach(a=>{["add","merge","update"].forEach(t=>{let e=a.name(t),r=t==="add"?an:Zs;a.generateKey?O.prototype[e]=function(i,n,o){return r(this,e,!0,(a.type||this.type)==="undirected",null,i,n,o,t==="update")}:O.prototype[e]=function(i,n,o,s){return r(this,e,!1,(a.type||this.type)==="undirected",i,n,o,s,t==="update")}})});Da(O);La(O);Ga(O);Na(O);var Nt=class extends O{constructor(t){let e=$({type:"directed"},t);if("multi"in e&&e.multi!==!1)throw new C("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new C('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},It=class extends O{constructor(t){let e=$({type:"undirected"},t);if("multi"in e&&e.multi!==!1)throw new C("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new C('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},kt=class extends O{constructor(t){let e=$({multi:!0},t);if("multi"in e&&e.multi!==!0)throw new C("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}},Mt=class extends O{constructor(t){let e=$({type:"directed",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new C("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new C('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}},zt=class extends O{constructor(t){let e=$({type:"undirected",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new C("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new C('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}};function ot(a){a.from=function(t,e){let r=$({},t.options,e),i=new a(r);return i.import(t),i}}ot(O);ot(Nt);ot(It);ot(kt);ot(Mt);ot(zt);O.Graph=O;O.DirectedGraph=Nt;O.UndirectedGraph=It;O.MultiGraph=kt;O.MultiDirectedGraph=Mt;O.MultiUndirectedGraph=zt;O.InvalidArgumentsGraphError=C;O.NotFoundGraphError=D;O.UsageGraphError=F;var nn=O;var io=pr(xr());function Qs(a){let t=a.type===WebGL2RenderingContext.FLOAT&&!a.normalized,e=a.type===WebGL2RenderingContext.UNSIGNED_BYTE&&a.size===4&&a.normalized;if(!t&&!e)throw new Error(`Attribute "${a.name}" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.`);return a.normalized?1:a.size}function Sr(a){let t=0;return a.forEach(e=>t+=Qs(e)),t}function on(a,t,e){let r=a==="VERTEX"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,i=t.createShader(r);if(i===null)throw new Error("loadShader: error while creating the shader");if(t.shaderSource(i,e),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){let o=t.getShaderInfoLog(i);throw t.deleteShader(i),new Error(`loadShader: error while compiling the shader:
${o}
${e}`)}return i}function st(a,t){return on("VERTEX",a,t)}function lt(a,t){return on("FRAGMENT",a,t)}function dt(a,t){let e=a.createProgram();if(e===null)throw new Error("loadProgram: error while creating the program.");let r,i;for(r=0,i=t.length;r<i;r++)a.attachShader(e,t[r]);if(a.linkProgram(e),!a.getProgramParameter(e,a.LINK_STATUS)){let o=a.getProgramInfoLog(e);throw a.deleteProgram(e),new Error(`loadProgram: error while linking the program: ${o}`)}return e}function Ia({gl:a,buffer:t,program:e,vertexShader:r,fragmentShader:i}){a.deleteShader(r),a.deleteShader(i),a.deleteProgram(e),a.deleteBuffer(t)}function B(a){return a%1===0?a.toFixed(1):a.toString()}var vr=new Map,sn=new Map,Js=0;function ka(a,t){let e=a.variables?.[t.source||t.name.replace(/^a_/,"")]?.default,r=typeof e=="number"?e:typeof t.defaultValue=="number"?t.defaultValue:0;return B(r)}function Xe(a,t,e,r=i=>`v_${i.name.replace(/^a_/,"")}`){let i=[t,e,...a.uniforms.filter(n=>n.type==="float").map(n=>B(n.value??0)),...(a.attributes??[]).map(r)];return`sdf_${a.name}(${i.join(", ")})`}function el(a){let t=a.name,e=a.uniforms.filter(n=>n.type==="float"&&n.value!==void 0&&n.value!==0).map(n=>`${n.name.replace("u_","")}=${n.value}`).sort(),r=(a.attributes??[]).map(n=>`${n.name}@${n.source??""}=${ka(a,n)}`),i=[...e,...r];return i.length>0&&(t+="#"+i.join("#")),t}function Ma(a){let t=el(a);if(!vr.has(t)){let e={};for(let r of a.uniforms)r.type==="float"&&r.value!==void 0&&(e[r.name]=r.value);vr.set(t,{shape:a,uniformValues:e,slug:t}),sn.set(t,Js++)}return t}function je(a){return sn.get(a)??-1}function ln(a){let t=[],e=new Set,r=new Set,i=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/;for(let n of a){if(r.has(n.name))continue;r.add(n.name);let o=n.glsl;i.test(o)&&(e.has("rotate2D")?o=o.replace(i,""):e.add("rotate2D")),t.push(o)}return t.join(`
`)}function za(){return ln(Array.from(vr.values()).map(a=>a.shape))}function Ba(a){let t=Array.from(vr.entries());return t.length===0?`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`:`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${t.map(([r,{shape:i}],n)=>{let o=Xe(i,"uv","size",s=>{let l=s.name.replace(/^a_/,"");return a?.has(l)?`g_${l}`:ka(i,s)});return`    case ${n}: return ${o}; // ${r}`}).join(`
`)}
    default: return length(uv) - size;
  }
}
`}function Ke(a){return ln(a)}function Ae(a){return[...new Map(a.flatMap(t=>t.uniforms).map(t=>[t.name,t])).values()]}function Oa(a,t){if(a.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;let e=l=>Xe(l,"uv","size"),r=l=>l.inradiusFactorGLSL??B(l.inradiusFactor??1);if(a.length===1){let l=a[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = ${e(l)};
  context.inradiusFactor = ${r(l)};
}
`}let i=a.map((l,d)=>`    case ${d}: // ${l.name}
      context.sdf = ${e(l)};
      context.inradiusFactor = ${r(l)};
      break;`).join(`
`),n=a[0],o="",s="shapeId";return t&&t.length>1&&(o=`
int globalToLocalShapeId(int globalId) {
  switch (globalId) {
${t.map((d,c)=>`    case ${d}: return ${c}; // ${a[c].name}`).join(`
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
      context.inradiusFactor = ${r(n)};
  }
}
`}var ke={right:0,left:1,above:2,below:3,over:4},De=5,Wa=3,Er=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,ut=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,Tr=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,un=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,cn=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,hn=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,gn=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,_r=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,Ua=2,Y=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * ${Ua};
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,re=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * ${Ua} + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,fn=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * ${Ua} + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`,de=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`;function pn(a,t){let e=n=>Xe(n,"uv","size");return a.length===1?{code:dn(e(a[0])),multiShape:!1}:{code:`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${a.map((n,o)=>`    case ${t?t[o]:o}: return ${e(n)};`).join(`
`)}
    default: return ${e(a[0])};
  }
}
int g_shapeId;
${dn("queryShapeSDF(g_shapeId, uv, size)")}
`,multiShape:!0}}function dn(a){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (${a} < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`}var tl=a=>a,rl=a=>a*a,al=a=>a*(2-a),il=a=>(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1),nl=a=>a*a*a,ol=a=>--a*a*a+1,sl=a=>(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2),ll=a=>a===0?0:Math.pow(2,10*(a-1)),dl=a=>a===1?1:1-Math.pow(2,-10*a),ul=a=>a===0?0:a===1?1:a<.5?Math.pow(2,10*(2*a-1))/2:(2-Math.pow(2,-10*(2*a-1)))/2,$a={linear:tl,quadraticIn:rl,quadraticOut:al,quadraticInOut:il,cubicIn:nl,cubicOut:ol,cubicInOut:sl,exponentialIn:ll,exponentialOut:dl,exponentialInOut:ul};function Bt(a){return a?typeof a=="function"?a:$a[a]:$a.linear}var mn={easing:"quadraticInOut",duration:150};function oe(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function Ot(a,t,e){return a[0]=t,a[4]=typeof e=="number"?e:t,a}function Va(a,t){let e=Math.sin(t),r=Math.cos(t);return a[0]=r,a[1]=e,a[3]=-e,a[4]=r,a}function Ha(a,t,e){return a[6]=t,a[7]=e,a}function Le(a,t){let e=a[0],r=a[1],i=a[2],n=a[3],o=a[4],s=a[5],l=a[6],d=a[7],c=a[8],g=t[0],u=t[1],f=t[2],h=t[3],m=t[4],x=t[5],b=t[6],p=t[7],y=t[8];return a[0]=g*e+u*n+f*l,a[1]=g*r+u*o+f*d,a[2]=g*i+u*s+f*c,a[3]=h*e+m*n+x*l,a[4]=h*r+m*o+x*d,a[5]=h*i+m*s+x*c,a[6]=b*e+p*n+y*l,a[7]=b*r+p*o+y*d,a[8]=b*i+p*s+y*c,a}function Ar(a,t){let e=Math.cos(t),r=Math.sin(t);return{x:e*a.x+r*a.y,y:-r*a.x+e*a.y}}function Re(a,t,e=1){let r=a[0],i=a[1],n=a[3],o=a[4],s=a[6],l=a[7],d=t.x,c=t.y;return{x:d*r+c*n+s*e,y:d*i+c*o+l*e}}function cl(a,t){let e=a.height/a.width,r=t.height/t.width;return e<1&&r>1||e>1&&r<1?1:Math.min(Math.max(r,1/r),Math.max(1/e,e))}function ye(a,t,e,r,i){let{angle:n,ratio:o,x:s,y:l}=a,{width:d,height:c}=t,g=oe(),u=Math.min(d,c)-2*r,f=cl(t,e);return i?(Le(g,Ha(oe(),s,l)),Le(g,Ot(oe(),o)),Le(g,Va(oe(),n)),Le(g,Ot(oe(),d/u/2/f,c/u/2/f))):(Le(g,Ot(oe(),2*(u/d)*f,2*(u/c)*f)),Le(g,Va(oe(),-n)),Le(g,Ot(oe(),1/o)),Le(g,Ha(oe(),-s,-l))),g}function bn(a,t,e){let{x:r,y:i}=Re(a,{x:Math.cos(t.angle),y:Math.sin(t.angle)},0);return 1/Math.sqrt(Math.pow(r,2)+Math.pow(i,2))/e.width}function Dr(a,t,e,r,i){let n=Math.floor(t/i*r),o=Math.floor(a.drawingBufferHeight/i-e/i*r);return[n,o]}var Wt={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},xn=new Int8Array(4),Lr=new Int32Array(xn.buffer,0,1),yn=new Float32Array(xn.buffer,0,1),hl=/^\s*rgba?\s*\(/,gl=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function Rr(a){let t=0,e=0,r=0,i=1,n=a.toLowerCase();if(n==="transparent")return{r:0,g:0,b:0,a:0};if(n in Wt)return Rr(Wt[n]);if(a[0]==="#")a.length===4?(t=parseInt(a.charAt(1)+a.charAt(1),16),e=parseInt(a.charAt(2)+a.charAt(2),16),r=parseInt(a.charAt(3)+a.charAt(3),16)):(t=parseInt(a.charAt(1)+a.charAt(2),16),e=parseInt(a.charAt(3)+a.charAt(4),16),r=parseInt(a.charAt(5)+a.charAt(6),16)),a.length===9&&(i=parseInt(a.charAt(7)+a.charAt(8),16)/255);else if(hl.test(a)){let o=a.match(gl);o&&(t=+o[1],e=+o[2],r=+o[3],o[4]&&(i=+o[4]))}return{r:t,g:e,b:r,a:i}}function Sn(a,t=!1){let{r:e,g:r,b:i,a:n}=Rr(a);return t?[e/255*n,r/255*n,i/255*n,n]:[e/255,r/255,i/255,n]}var ct={};for(let a in Wt)ct[a]=ae(Wt[a]),ct[Wt[a]]=ct[a];function fl(a,t,e,r,i){return Lr[0]=r<<24|e<<16|t<<8|a,i&&(Lr[0]=Lr[0]&4278190079),yn[0]}function ae(a){if(a=a.toLowerCase(),typeof ct[a]<"u")return ct[a];let t=Rr(a),{r:e,g:r,b:i}=t,{a:n}=t;n=n*255|0;let o=fl(e,r,i,n,!0);return ct[a]=o,o}function Me(a,t){yn[0]=ae(a);let e=Lr[0];t&&(e=e|16777216);let r=e&255,i=e>>8&255,n=e>>16&255,o=e>>24&255;return[r,i,n,o]}function qe(a){let t=a>>>8&255,e=a>>>16&255,r=a>>>24&255;return((a&255)<<24|r<<16|e<<8|t)>>>0}function Pr(a,t,e,r){return(e<<24|t<<16|a<<8|r)>>>0}function vn(a,t,e,r,i,n){let[o,s]=Dr(a,e,r,i,n),l=new Uint8Array(4);a.bindFramebuffer(a.FRAMEBUFFER,t),a.readPixels(o,s,1,1,a.RGBA,a.UNSIGNED_BYTE,l);let[d,c,g,u]=l;return[d,c,g,u]}function En(a){let{r:t,g:e,b:r,a:i}=Rr(a),n=(t/255).toFixed(6),o=(e/255).toFixed(6),s=(r/255).toFixed(6),l=i.toFixed(6);return`vec4(${n}, ${o}, ${s}, ${l})`}function Xa(a,t){let e=t.size;if(e===0)return;let r=a.length;a.length+=e;let i=0;t.forEach(n=>{a[r+i]=n,i++})}function Tn(a,...t){a=a||{};for(let e=0,r=t.length;e<r;e++){let i=t[e];i&&Object.assign(a,i)}return a}function ht(a,t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e]!==a[e])return!0;return!1}function _n(a,t){let e=a,r=t;for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==r[i])return!1;for(let i in r)if(Object.prototype.hasOwnProperty.call(r,i)&&r[i]!==e[i])return!1;return!0}function Ye(a,t,e){e?a.add(t):a.delete(t)}function Pe(a){return a.labelVisibility==="visible"&&a.visibility!=="hidden"}function ja(a){return a.backdropVisibility==="visible"&&a.visibility!=="hidden"}function Cr(a){return[a.rotationAlignment==="graph"?1:0,a.labelRotationAlignment==="graph"?1:0]}function Ka(a,t,e){let r=a[t];if(r)for(let i=0;i<r.length;i++){let n=r[i];if(!(e<n.offset||e>=n.offset+n.count)){if(n.count===1)r.splice(i,1);else if(e===n.offset)n.offset++,n.count--;else if(e===n.offset+n.count-1)n.count--;else{let o=e+1,s=n.offset+n.count-o;n.count=e-n.offset,r.splice(i+1,0,{offset:o,count:s})}return}}}function qa(a,t,e){if(!a[t]){a[t]=[{offset:e,count:1}];return}let r=a[t],i=r.length;for(let d=0;d<r.length;d++)if(e<r[d].offset){i=d;break}let n=i>0?r[i-1]:null,o=i<r.length?r[i]:null,s=n&&n.offset+n.count===e,l=o&&e+1===o.offset;s&&l?(n.count+=1+o.count,r.splice(i,1)):s?n.count++:l?(o.offset--,o.count++):r.splice(i,0,{offset:e,count:1})}var Ln=pr(Dn());function Rn(a){if(!(0,Ln.default)(a))throw new Error("Sigma: invalid graph instance.")}var pl=new Set(["italic","oblique"]),ml=new Set(["bold","bolder","lighter"]);function wr(a){let t="normal",e="normal",r=a.trim(),i=r.split(/\s+/),n=0;for(let s=0;s<i.length;s++){let l=i[s].toLowerCase();if(pl.has(l))e=l,n=s+1;else if(ml.has(l)||/^\d{3}$/.test(l))t=l,n=s+1;else if(l==="normal")n=s+1;else break}return{family:i.slice(n).join(" ")||r,weight:t,style:e}}function Ze(a,t,e){let r=document.createElement(a);if(t)for(let i in t)r.style[i]=t[i];if(e)for(let i in e)r.setAttribute(i,e[i]);return r}function Ut(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function $t(a){let{x:[t,e],y:[r,i]}=a,n=Math.max(e-t,i-r),o=(e+t)/2,s=(i+r)/2;(n===0||Math.abs(n)===1/0||isNaN(n))&&(n=1),isNaN(o)&&(o=0),isNaN(s)&&(s=0);let l=d=>({x:.5+(d.x-o)/n,y:.5+(d.y-s)/n});return l.applyTo=d=>{d.x=.5+(d.x-o)/n,d.y=.5+(d.y-s)/n},l.inverse=d=>({x:o+n*(d.x-.5),y:s+n*(d.y-.5)}),l.ratio=n,l}function Pn(a,t,e,r=2){let{width:i,height:n}=t.canvas,{x:o,y:s,rowHeight:l,maxRowWidth:d}=e,c={},g=[];for(let u of a){let f=u.width+r,h=u.height+r;if(f>i||h>n||o+f>i&&s+l+h>n){g.push(u);continue}o+f>i&&(d=Math.max(d,o),o=0,s+=l,l=h),u.draw(t,o,s),c[u.key]={x:o,y:s,width:u.width,height:u.height},o+=f,l=Math.max(l,h)}return d=Math.max(d,o),{atlas:c,cursor:{x:o,y:s,rowHeight:l,maxRowWidth:d},remaining:g}}var bl=1024,xl=1.5,yl=4096,Fr=-1,ze=class{constructor(t,e,r=bl){this.texture=null;this.dirty=!1;this.dirtyRangeStart=1/0;this.dirtyRangeEnd=-1;this.indexMap=new Map;this.freeIndices=[];this.nextIndex=0;this.gl=t,this.TEXELS_PER_ITEM=e,this.capacity=this.roundUpToPowerOfTwo(r);let i=this.computeTextureDimensions(this.capacity);this.textureWidth=i.width,this.textureHeight=i.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}computeTextureDimensions(t){let e=t*this.TEXELS_PER_ITEM,r=Math.min(e,yl),i=Math.ceil(e/r);return{width:r,height:i}}roundUpToPowerOfTwo(t){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,t))))}createTexture(){let{gl:t}=this;this.texture=t.createTexture(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textureWidth,this.textureHeight,0,t.RGBA,t.FLOAT,this.data),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null)}resize(t){if(t<=this.capacity)return;let e=this.roundUpToPowerOfTwo(Math.ceil(t*xl)),{gl:r}=this,i=this.computeTextureDimensions(e),n=new Float32Array(i.width*i.height*4);n.set(this.data),this.texture&&r.deleteTexture(this.texture),this.data=n,this.capacity=e,this.textureWidth=i.width,this.textureHeight=i.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}allocate(t){let e=this.indexMap.get(t);if(e!==void 0)return e;let r;return this.freeIndices.length>0?r=this.freeIndices.pop():(r=this.nextIndex++,r>=this.capacity&&this.resize(r+1)),this.indexMap.set(t,r),r}free(t){let e=this.indexMap.get(t);if(e===void 0)return;this.indexMap.delete(t),this.freeIndices.push(e);let r=e*this.TEXELS_PER_ITEM*4;for(let i=0;i<this.TEXELS_PER_ITEM*4;i++)this.data[r+i]=0;this.markDirty(e)}getIndex(t){return this.indexMap.get(t)??-1}has(t){return this.indexMap.has(t)}markDirty(t){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,t),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,t+1)}upload(){if(!this.dirty||!this.texture)return;let{gl:t,textureWidth:e}=this;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture);let r=this.dirtyRangeStart*this.TEXELS_PER_ITEM,i=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(r<i){let n=Math.floor(r/e),o=Math.floor((i-1)/e);for(let s=n;s<=o;s++){let l=s*e,d=Math.min(l+e,this.capacity*this.TEXELS_PER_ITEM),c=Math.max(r,l),g=Math.min(i,d);if(c<g){let u=c-l,f=g-c,h=this.data.subarray(c*4,g*4);t.texSubImage2D(t.TEXTURE_2D,0,u,s,f,1,t.RGBA,t.FLOAT,h)}}}t.bindTexture(t.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}bind(t){let{gl:e}=this;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)}getTexture(){return this.texture}getCapacity(){return this.capacity}getTextureWidth(){return this.textureWidth}getTextureHeight(){return this.textureHeight}getTexelsPerItem(){return this.TEXELS_PER_ITEM}getCount(){return this.indexMap.size}getHighWaterMark(){return this.nextIndex}isDirty(){return this.dirty}clear(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}restore(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}kill(){this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.indexMap.clear(),this.freeIndices=[]}};function j(a){let t={},e={},r=0;for(let i of a)for(let n of i.attributes){let o=n.name.replace(/^a_/,"");o in t||(t[o]=r,e[o]=n,r+=n.size)}return{floatsPerItem:r,texelsPerItem:Math.max(1,Math.ceil(r/4)),offsets:t,specs:e}}var Se=class extends ze{constructor(t,e,r){super(t,e.texelsPerItem,r),this.floatsPerItem=e.floatsPerItem}updateAllAttributes(t,e){let r=this.indexMap.get(t);r===void 0&&(r=this.allocate(t));let i=r*this.TEXELS_PER_ITEM*4,n=Math.min(e.length,this.floatsPerItem);for(let o=0;o<n;o++)this.data[i+o]=e[o];this.markDirty(r)}updateAllAttributesAtRow(t,e){t>=this.capacity&&this.resize(t+1);let r=t*this.TEXELS_PER_ITEM*4,i=Math.min(e.length,this.floatsPerItem);for(let n=0;n<i;n++)this.data[r+n]=e[n];this.markDirty(t)}};function Be(a,t,e){let r=[],i=new Set;for(let n=0;n<a.length;n++){let o=a[n];for(let s of o.attributes){let l=s.name.replace(/^a_/,"");if(i.has(l))continue;i.add(l);let d=t.offsets[l];if(d===void 0)continue;let c=e?.get(n);r.push({sourceKey:s.source||l,packedOffset:d,size:s.size,isColor:s.size===4&&!!s.normalized,defaultNum:typeof s.defaultValue=="number"?s.defaultValue:s.defaultValue===!0?1:0,defaultColor:typeof s.defaultValue=="string"?s.defaultValue:"",sourceIndex:n,hasLifecycleHook:!!c?.getAttributeData})}}return r}function Oe(a,t,e,r,i,n){e.fill(0);for(let o=0,s=a.length;o<s;o++){let l=a[o],d=l.packedOffset,c;if(l.hasLifecycleHook?(c=i.get(l.sourceIndex-n).getAttributeData(t,l.sourceKey),c===null&&(c=t[l.sourceKey])):c=t[l.sourceKey],l.isColor){let g=typeof c=="string"?c:l.defaultColor||r,[u,f,h,m]=Me(g);e[d]=u/255,e[d+1]=f/255,e[d+2]=h/255,e[d+3]=m/255}else if(l.size===1)e[d]=typeof c=="number"?c:typeof c=="boolean"?c?1:0:l.defaultNum;else{let g=Array.isArray(c)?c:null;if(g)for(let u=0;u<l.size;u++)e[d+u]=g[u]??0}}}var Gr=["r","g","b","a"];function fe(a,t){let{offsets:e,specs:r,texelsPerItem:i,floatsPerItem:n}=a,o=Object.keys(e);if(o.length===0||n===0)return{fetchCode:"",varyingAssignments:""};let{varPrefix:s,baseTexelExpr:l,textureWidthUniform:d,textureSamplerUniform:c,outputPrefix:g="v_"}=t,u=[];u.push(`  int ${s}BaseTexel = ${l};`),u.push("");for(let h=0;h<i;h++)u.push(`  ivec2 ${s}Coord${h} = ivec2((${s}BaseTexel + ${h}) % ${d}, (${s}BaseTexel + ${h}) / ${d});`),u.push(`  vec4 ${s}Texel${h} = texelFetch(${c}, ${s}Coord${h}, 0);`);u.push("");let f=[];for(let h of o){let m=r[h],x=e[h],b=Math.floor(x/4),p=x%4,y=`${s}Texel${b}`,S=`${s}Texel${b+1}`,v=`${s}Fetched_${h}`;if(m.size===1)u.push(`  float ${v} = ${y}.${Gr[p]};`);else if(m.size===4&&p===0)u.push(`  vec4 ${v} = ${y};`);else{let E=p+m.size;if(E<=4){let _=`vec${m.size}`,A=Gr.slice(p,E).join("");u.push(`  ${_} ${v} = ${y}.${A};`)}else{let _=m.size===4?"vec4":`vec${m.size}`,A=Gr.slice(p).map(N=>`${y}.${N}`),R=Gr.slice(0,E-4).map(N=>`${S}.${N}`),T=[...A,...R].join(", ");u.push(`  ${_} ${v} = ${_}(${T});`)}}f.push(`  ${g}${h} = ${v};`)}return{fetchCode:u.join(`
`),varyingAssignments:f.join(`
`)}}function Vt(a,t,e){if(!(!t||e.type==="sampler2D"))switch(e.type){case"float":a.uniform1f(t,e.value);break;case"int":case"bool":a.uniform1i(t,e.value);break;case"vec2":a.uniform2fv(t,e.value);break;case"vec3":a.uniform3fv(t,e.value);break;case"vec4":a.uniform4fv(t,e.value);break;case"mat3":a.uniformMatrix3fv(t,!1,e.value);break;case"mat4":a.uniformMatrix4fv(t,!1,e.value);break}}var Sl={[WebGL2RenderingContext.BOOL]:1,[WebGL2RenderingContext.BYTE]:1,[WebGL2RenderingContext.UNSIGNED_BYTE]:1,[WebGL2RenderingContext.SHORT]:2,[WebGL2RenderingContext.UNSIGNED_SHORT]:2,[WebGL2RenderingContext.INT]:4,[WebGL2RenderingContext.UNSIGNED_INT]:4,[WebGL2RenderingContext.FLOAT]:4};function Nr(a){let t=a.match(/^(#version[^\n]*\n)/);return t?t[1]+`#define PICKING_MODE
`+a.slice(t[1].length):`#define PICKING_MODE
`+a}var Z=class{constructor(t,e,r){this.floats=new Float32Array;this.ints=new Uint32Array;this.constantArray=new Float32Array;this.capacity=0;this.verticesCount=0;this.bufferGeneration=0;this.uploadedGeneration=new Map;this.constantBufferGeneration=0;this.uploadedConstantGeneration=new Map;this.renderOffset=0;this.renderCount=-1;this.debugStats={drawCalls:0,verticesDrawn:0,bufferUploadBytes:0};this.shadersLogged=!1;this.pickProgram=null;let i=this.getDefinition();if(this.VERTICES=i.VERTICES,this.VERTEX_SHADER_SOURCE=i.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=i.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=i.UNIFORMS,this.ATTRIBUTES=i.ATTRIBUTES,this.METHOD=i.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in i?i.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in i?i.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in i,this.ATTRIBUTES_ITEMS_COUNT=Sr(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=r,this.normalProgram=this.getProgramInfo("normal",t,i.VERTEX_SHADER_SOURCE,i.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo("pick",t,Nr(i.VERTEX_SHADER_SOURCE),Nr(i.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){let n=Sr(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error(`Program: error while getting constant data (expected ${this.VERTICES} items, received ${this.CONSTANT_DATA.length} instead)`);this.constantArray=new Float32Array(this.CONSTANT_DATA.length*n);for(let o=0;o<this.CONSTANT_DATA.length;o++){let s=this.CONSTANT_DATA[o];if(s.length!==n)throw new Error(`Program: error while getting constant data (one vector has ${s.length} items instead of ${n})`);for(let l=0;l<s.length;l++)this.constantArray[o*n+l]=s[l]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}kill(){Ia(this.normalProgram),this.pickProgram&&Ia(this.pickProgram)}resetDebugStats(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}getProgramInfo(t,e,r,i,n){let o=e.createBuffer();if(o===null)throw new Error("Program: error while creating the WebGL buffer.");let s=st(e,r),l=lt(e,i),d=dt(e,[s,l]),c={};this.UNIFORMS.forEach(f=>{let h=e.getUniformLocation(d,f);h&&(c[f]=h)});let g={};this.ATTRIBUTES.forEach(f=>{g[f.name]=e.getAttribLocation(d,f.name)});let u;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(f=>{g[f.name]=e.getAttribLocation(d,f.name)}),u=e.createBuffer(),u===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:d,gl:e,frameBuffer:n,buffer:o,constantBuffer:u||{},uniformLocations:c,attributeLocations:g,isPicking:t==="pick",vertexShader:s,fragmentShader:l}}bindProgram(t){let e=0,{gl:r,buffer:i}=t;this.isInstanced?(r.bindBuffer(r.ARRAY_BUFFER,t.constantBuffer),e=0,this.CONSTANT_ATTRIBUTES.forEach(n=>e+=this.bindAttribute(n,t,e,!1)),this.uploadedConstantGeneration.get(t.constantBuffer)!==this.constantBufferGeneration&&(r.bufferData(r.ARRAY_BUFFER,this.constantArray,r.STATIC_DRAW),this.uploadedConstantGeneration.set(t.constantBuffer,this.constantBufferGeneration),this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)),r.bindBuffer(r.ARRAY_BUFFER,t.buffer),e=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(n=>e+=this.bindAttribute(n,t,e,!0)),this.uploadedGeneration.get(i)!==this.bufferGeneration&&(r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength))):(r.bindBuffer(r.ARRAY_BUFFER,i),e=0,this.ATTRIBUTES.forEach(n=>e+=this.bindAttribute(n,t,e)),this.uploadedGeneration.get(i)!==this.bufferGeneration&&(r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength))),r.bindBuffer(r.ARRAY_BUFFER,null)}unbindProgram(t){this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(e=>this.unbindAttribute(e,t,!1)),this.ATTRIBUTES.forEach(e=>this.unbindAttribute(e,t,!0))):this.ATTRIBUTES.forEach(e=>this.unbindAttribute(e,t))}bindAttribute(t,e,r,i){let n=Sl[t.type];if(typeof n!="number")throw new Error(`Program.bind: yet unsupported attribute type "${t.type}"`);let o=e.attributeLocations[t.name],s=e.gl;if(o!==-1){s.enableVertexAttribArray(o);let l=this.isInstanced?(i?this.ATTRIBUTES_ITEMS_COUNT:Sr(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;s.vertexAttribPointer(o,t.size,t.type,t.normalized||!1,l,r),this.isInstanced&&i&&s.vertexAttribDivisor(o,1)}return t.size*n}unbindAttribute(t,e,r){let i=e.attributeLocations[t.name],n=e.gl;i!==-1&&(n.disableVertexAttribArray(i),this.isInstanced&&r&&n.vertexAttribDivisor(i,0))}reallocate(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}invalidateBuffers(){this.bufferGeneration++,this.constantBufferGeneration++}hasNothingToRender(){return this.verticesCount===0}setTypedUniform(t,e){Vt(e.gl,e.uniformLocations[t.name]??null,t)}renderProgram(t,e){let{gl:r,program:i,isPicking:n}=e;n?r.disable(r.BLEND):r.enable(r.BLEND),r.useProgram(i),this.setUniforms(t,e),this.drawWebGL(this.METHOD,e)}render(t,e,r){if(!this.shadersLogged&&this.renderer?.getSetting("DEBUG_logShaders")&&(this.shadersLogged=!0,console.log(`[sigma] DEBUG_logShaders: ${this.constructor.name}`,{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:Nr(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:Nr(this.FRAGMENT_SHADER_SOURCE)}})),this.hasNothingToRender())return;this.renderOffset=e??0,this.renderCount=r??-1;let i=this.normalProgram.gl;if(i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&t.pickingFrameBuffer){let n=Math.ceil(t.width*t.pixelRatio/t.downSizingRatio),o=Math.ceil(t.height*t.pixelRatio/t.downSizingRatio);i.bindFramebuffer(i.FRAMEBUFFER,t.pickingFrameBuffer),i.viewport(0,0,n,o),this.bindProgram(this.pickProgram),this.renderProgram(t,this.pickProgram),this.unbindProgram(this.pickProgram),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio)}}drawWebGL(t,{gl:e}){let r=this.renderCount>=0?this.renderCount:this.capacity;this.renderer?.getSetting("DEBUG_logRenderStats")&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=r*this.VERTICES),this.isInstanced?e.drawArraysInstanced(t,0,this.VERTICES,r):e.drawArrays(t,this.renderOffset*this.VERTICES,r*this.VERTICES)}};var Ir=new Map,Cn=!1;function vl(a){return new Promise((t,e)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=e,r.readAsDataURL(a)})}function El(a){if(!Ir.has(a)){let t=fetch(a).then(e=>e.blob()).then(vl).catch(()=>(Ir.delete(a),null));Ir.set(a,t)}return Ir.get(a)}async function wn(a){let t=document.createElement("div");t.innerHTML=a;let r=Array.from(t.querySelectorAll("img[src]")).filter(i=>!i.getAttribute("src").startsWith("data:"));return await Promise.all(r.map(async i=>{let n=await El(i.getAttribute("src"));n&&i.setAttribute("src",n)})),t.innerHTML}async function Ya(a,t=1){let e=a instanceof SVGElement?new XMLSerializer().serializeToString(a):a,n=new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");if(!n)return null;let o=parseFloat(n.getAttribute("width")||""),s=parseFloat(n.getAttribute("height")||"");if(!(o>0)||!(s>0)){let u=n.getAttribute("viewBox");if(u){let f=u.trim().split(/[\s,]+/);o=parseFloat(f[2]),s=parseFloat(f[3])}}if(!(o>0)||!(s>0))return console.warn("Sigma: SVG label attachment has no parseable dimensions \u2014 skipped."),null;let l=Math.ceil(o*t),d=Math.ceil(s*t),c=new Blob([e],{type:"image/svg+xml"}),g=URL.createObjectURL(c);return new Promise(u=>{let f=new Image;f.onload=()=>{let h=document.createElement("canvas");h.width=l,h.height=d,h.getContext("2d").drawImage(f,0,0,l,d),URL.revokeObjectURL(g);try{h.getContext("2d").getImageData(0,0,1,1)}catch(m){if(m instanceof DOMException&&m.name==="SecurityError"){Cn||(Cn=!0,console.warn('Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.')),u(null);return}throw m}u(h)},f.onerror=()=>{URL.revokeObjectURL(g),u(null)},f.src=g})}function Tl(a,t){let e=document.createElement("div");e.style.cssText="position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content",e.innerHTML=(t?`<style>${t}</style>`:"")+a,document.body.appendChild(e);let{width:r,height:i}=e.getBoundingClientRect();return document.body.removeChild(e),{width:Math.ceil(r),height:Math.ceil(i)}}async function _l(a,t,e,r,i=1){let n=a instanceof HTMLElement?a.outerHTML:a,o=await wn(n);if(e==null||r==null){let g=Tl(o,t);e=e??g.width,r=r??g.height}let s=Math.ceil(e*i),l=Math.ceil(r*i),d=t?`<style>${t}</style>`:"",c=`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${l}" viewBox="0 0 ${e} ${r}"><foreignObject width="${e}" height="${r}"><body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${d}${o}</body></foreignObject></svg>`;return Ya(c,1)}async function Za(a,t=1){switch(a.type){case"canvas":return a.canvas;case"svg":return Ya(a.svg,t);case"html":return _l(a.html,a.css,a.width,a.height,t)}}var Ce=2,gt=7,Qa={below:0,above:1,left:2,right:3};function Al(){return`#version 300 es
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

${Y}
${re}
${de}
${_r}
${ut}

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
  float gap = ${Ce.toFixed(1)} * zoomScale * u_pixelRatio;
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
`}var Dl=`#version 300 es
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
`;function Ja(a,t,e,r){let{label:i={}}=r,n=i.margin??De,o=i.zoomToLabelSizeRatioFunction??(()=>1),s=Al(),l=Dl,c=class c extends Z{constructor(){super(...arguments);this.totalCount=0;this.bufferCapacity=0}getDefinition(){let{FLOAT:f,TRIANGLE_STRIP:h}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:s,FRAGMENT_SHADER_SOURCE:l,METHOD:h,UNIFORMS:["u_matrix","u_resolution","u_labelPixelSnapping","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_atlasTexture"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:f},{name:"a_atlasRect",size:4,type:f},{name:"a_attachmentSize",size:2,type:f},{name:"a_positionMode",size:1,type:f},{name:"a_attachmentPlacement",size:1,type:f},{name:"a_labelWidth",size:1,type:f},{name:"a_labelHeight",size:1,type:f},{name:"a_textHeight",size:1,type:f},{name:"a_labelAngle",size:1,type:f}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:f}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}processAttachment(f,h){let{floats:m}=this,x=f*this.STRIDE;m[x++]=h.nodeIndex,m[x++]=h.atlasX,m[x++]=h.atlasY,m[x++]=h.atlasW,m[x++]=h.atlasH,m[x++]=h.attachWidth,m[x++]=h.attachHeight,m[x++]=h.positionMode,m[x++]=h.attachmentPlacement,m[x++]=h.labelWidth,m[x++]=h.labelHeight,m[x++]=h.textHeight,m[x++]=h.labelAngle}setUniforms(f,{gl:h,uniformLocations:m}){h.uniformMatrix3fv(m.u_matrix,!1,f.matrix),h.uniform2f(m.u_resolution,f.width*f.pixelRatio,f.height*f.pixelRatio),h.uniform1f(m.u_labelPixelSnapping,f.labelPixelSnapping),h.uniform1f(m.u_sizeRatio,f.sizeRatio),h.uniform1f(m.u_correctionRatio,f.correctionRatio),h.uniform1f(m.u_cameraAngle,f.cameraAngle),h.uniform1f(m.u_pixelRatio,f.pixelRatio),h.uniform1f(m.u_labelMargin,c.labelMargin),h.uniform1f(m.u_zoomLabelSizeRatio,1/o(f.zoomRatio)),h.uniform1i(m.u_nodeDataTexture,f.nodeDataTextureUnit),h.uniform1i(m.u_nodeDataTextureWidth,f.nodeDataTextureWidth),h.uniform1i(m.u_nodeFrameTexture,f.nodeFrameTextureUnit),h.uniform1i(m.u_nodeFrameTextureWidth,f.nodeFrameTextureWidth),h.uniform1i(m.u_atlasTexture,gt)}reallocateAttachments(f){this.totalCount=f,f>this.bufferCapacity&&(this.bufferCapacity=Math.max(f,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}hasNothingToRender(){return this.totalCount===0}drawWebGL(f,{gl:h}){this.totalCount!==0&&h.drawArraysInstanced(f,0,this.VERTICES,this.totalCount)}};c.labelMargin=n;let d=c;return new d(a,t,e)}var ft=2048,pt=class{constructor(t,e,r){this.cache=new Map;this.pending=new Set;this.atlas={};this.glTexture=null;this.dirty=!0;this.gl=t,this.renderers=e,this.scheduleRender=r,this.packCanvas=document.createElement("canvas"),this.packCanvas.width=ft,this.packCanvas.height=ft,this.packCtx=this.packCanvas.getContext("2d")}renderAttachment(t,e,r){let i=`${t}:${e}`;if(this.cache.has(i)||this.pending.has(i))return;let n=this.renderers[e];if(!n)return;let o=n(r);if(!o)return;this.pending.add(i);let{pixelRatio:s}=r;Promise.resolve(o).then(async l=>{if(!this.pending.has(i)||(this.pending.delete(i),!l))return;let d=await Za(l,s);!d||d.width===0||d.height===0||(this.cache.set(i,{image:d,width:d.width,height:d.height}),this.dirty=!0,this.scheduleRender())})}regenerateAtlas(){if(!this.dirty)return;this.dirty=!1;let t=[];if(this.cache.forEach((s,l)=>{t.push({key:l,width:s.width,height:s.height,draw:(d,c,g)=>{d.drawImage(s.image,c,g)}})}),t.length===0){this.atlas={},this.deleteGLTexture();return}let e={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,ft,ft);let{atlas:r,remaining:i}=Pn(t,this.packCtx,e);this.atlas=r,i.length>0&&console.warn(`Sigma: ${i.length} label attachment(s) could not fit in the ${ft}x${ft} atlas and will not be rendered.`),this.deleteGLTexture();let n=this.gl,o=n.createTexture();n.activeTexture(n.TEXTURE0+gt),n.bindTexture(n.TEXTURE_2D,o),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,this.packCanvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),this.glTexture=o}bindTexture(t){if(!this.glTexture)return;let e=this.gl;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.glTexture)}getEntry(t,e){let r=`${t}:${e}`;return this.atlas[r]||null}invalidateNode(t){let e=`${t}:`;for(let r of this.cache.keys())r.startsWith(e)&&(this.cache.delete(r),this.dirty=!0);for(let r of this.pending)r.startsWith(e)&&this.pending.delete(r)}restore(){this.glTexture=null,this.dirty=!0}clear(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}kill(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}deleteGLTexture(){this.glTexture&&(this.gl.deleteTexture(this.glTexture),this.glTexture=null)}};var ue=5;function Ht(a,t){return[...t,...a.map(e=>({attributes:e.attributes??[]}))]}function ve(a,t){let e=j(Ht(a,t)),r=new Set(a.flatMap(o=>o.attributes??[]).map(o=>o.name.replace(/^a_/,""))),i={},n={};for(let o of r)i[o]=e.offsets[o],n[o]=e.specs[o];return{...e,offsets:i,specs:n}}function Gn(a,t){let e=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pickingPadding","u_nodeDataTexture","u_layerAttributeTexture"]),r=new Set,i=a.flatMap(u=>u.uniforms).filter(u=>e.has(u.name)||r.has(u.name)?!1:(r.add(u.name),!0)).map(u=>`uniform ${u.type} ${u.name};`).join(`
`),n=t.flatMap(u=>u.uniforms).filter(u=>e.has(u.name)||r.has(u.name)?!1:(r.add(u.name),!0)).map(u=>`uniform ${u.type} ${u.name};`).join(`
`),o=Ht(a,t),s=new Set,l=o.flatMap(u=>u.attributes).filter(u=>{let f=u.name.replace(/^a_/,"");return s.has(f)?!1:(s.add(f),!0)}).map(u=>{let f=u.name.replace(/^a_/,"");return`out ${u.size===1?"float":`vec${u.size}`} v_${f};`}).join(`
`),{fetchCode:d,varyingAssignments:c}=fe(j(o),{varPrefix:"layer",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"});return`#version 300 es

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
${Y}
${re}

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
`}function Fn(a,t,e,r=!0){let i=t.map((h,m)=>{let x=`layer_${h.name}`,b=[...h.attributes.map(p=>`v_${p.name.replace(/^a_/,"")}`),...h.uniforms.map(p=>p.name)].join(", ");return`  // Layer ${m+1}: ${h.name}
  color = blendOver(color, ${x}(${b}));`}).join(`

`),n=new Set(["u_correctionRatio"]),o=new Set,s=a.flatMap(h=>h.uniforms).filter(h=>n.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)).map(h=>`uniform ${h.type} ${h.name};`).join(`
`),l=t.flatMap(h=>h.uniforms).filter(h=>n.has(h.name)||o.has(h.name)?!1:(o.add(h.name),!0)).map(h=>`uniform ${h.type} ${h.name};`).join(`
`),d=new Set,c=Ht(a,t).flatMap(h=>h.attributes).filter(h=>{let m=h.name.replace(/^a_/,"");return d.has(m)?!1:(d.add(m),!0)}).map(h=>{let m=h.name.replace(/^a_/,"");return`in ${h.size===1?"float":`vec${h.size}`} v_${m};`}).join(`
`),g=Ke(a),u=Oa(a,e);return`#version 300 es
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
${g}

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
${r?`    // Visual pass: apply antialiasing at shape boundary, node opacity once
    // smoothstep provides smooth transition from opaque to transparent
    float alpha = smoothstep(context.aaWidth, -context.aaWidth, context.sdf) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) shape boundary, node opacity applied once
    float alpha = (context.sdf < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    // Mix with transparent to fade both color AND alpha together (avoids bright halo)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function Nn(a,t){let e=new Set;return e.add("u_matrix"),e.add("u_sizeRatio"),e.add("u_correctionRatio"),e.add("u_cameraAngle"),e.add("u_pickingPadding"),e.add("u_nodeDataTexture"),e.add("u_nodeDataTextureWidth"),e.add("u_layerAttributeTexture"),e.add("u_layerAttributeTextureWidth"),e.add("u_layerAttributeTexelsPerNode"),a.forEach(r=>{r.uniforms.forEach(i=>e.add(i.name))}),t.forEach(r=>{r.uniforms.forEach(i=>e.add(i.name))}),Array.from(e)}function In(a){let{UNSIGNED_BYTE:t,FLOAT:e}=WebGL2RenderingContext;return[{name:"a_nodeIndex",size:1,type:e},{name:"a_id",size:4,type:t,normalized:!0},{name:"a_opacity",size:1,type:e}]}function kr(a){let{shapes:t,layers:e,shapeGlobalIds:r,antialias:i=!0}=a;return{vertexShader:Gn(t,e),fragmentShader:Fn(t,e,r,i),uniforms:Nn(t,e),attributes:In(e)}}function kn(a,t,e){let{specs:r}=ve(a,t);return Object.keys(r).map(i=>`flat ${e} ${r[i].size===1?"float":`vec${r[i].size}`} v_${i};`).join(`
`)}function Mn(a){let{shapes:t,layers:e,shapeGlobalIds:r}=a,i=fe(ve(t,e),{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),n=t.length===1?`float inradiusFactor = ${B(t[0].inradiusFactor??1)};`:`float inradiusFactor = ${B(t[0].inradiusFactor??1)};
  switch (int(shapeId)) {
${t.map((s,l)=>`    case ${r?r[l]:l}: inradiusFactor = ${B(s.inradiusFactor??1)}; break;`).join(`
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
${kn(t,e,"out")}

${Y}
${re}
${de}

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

  ${Er}
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
`}function zn(a){let{shapes:t,layers:e,shapeGlobalIds:r}=a,i=Ke(t),n=Ae(t).map(c=>`uniform ${c.type} ${c.name};`).join(`
`),o=c=>Xe(c,"nodeUV","1.0"),s;if(t.length===1)s=`float nodeSdfNormalized = ${o(t[0])};`;else{let c=t.map((u,f)=>`    case ${r?r[f]:f}: nodeSdfNormalized = ${o(u)}; break;`).join(`
`),g=o(t[0]);s=`float nodeSdfNormalized;
  int shapeId = int(v_shapeId);
  switch (shapeId) {
${c}
    default: nodeSdfNormalized = ${g};
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
${kn(t,e,"in")}

uniform float u_cameraAngle;
${n}

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

${i}
${un}
${cn}
${hn}
${gn}

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
`}function Bn(a){let t=["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"];for(let e of Ae(a))t.includes(e.name)||t.push(e.name);return t}function ei(a){return{vertexShader:Mn(a),fragmentShader:zn(a),uniforms:Bn(a.shapes)}}function ti(a,t,e,r){let{label:i={},shapes:n,layers:o,getAttributeTexture:s,shapeGlobalIds:l}=r;if(n.length===0)throw new Error("createBackdropProgram: at least one shape must be provided in 'shapes'");let d=i.margin??5,c=i.zoomToLabelSizeRatioFunction??(()=>1),u=ei({shapes:n,layers:o,shapeGlobalIds:l}),h=class h extends Z{constructor(){super(...arguments);this.totalBackdropCount=0;this.bufferCapacity=0}getDefinition(){let{FLOAT:b,TRIANGLE_STRIP:p}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:u.vertexShader,FRAGMENT_SHADER_SOURCE:u.fragmentShader,METHOD:p,UNIFORMS:u.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:b},{name:"a_labelWidth",size:1,type:b},{name:"a_labelHeight",size:1,type:b},{name:"a_textHeight",size:1,type:b},{name:"a_positionMode",size:1,type:b},{name:"a_labelAngle",size:1,type:b},{name:"a_backdropColor",size:4,type:b},{name:"a_backdropShadowColor",size:4,type:b},{name:"a_backdropShadowBlur",size:1,type:b},{name:"a_backdropPadding",size:1,type:b},{name:"a_backdropBorderColor",size:4,type:b},{name:"a_backdropExtra",size:4,type:b},{name:"a_labelBoxOffset",size:2,type:b}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:b}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}processBackdrop(b,p){let{floats:y,STRIDE:S}=this,v=b*S;y[v++]=p.nodeIndex,y[v++]=p.labelWidth,y[v++]=p.labelHeight,y[v++]=p.textHeight,y[v++]=ke[p.position],y[v++]=p.labelAngle,y[v++]=p.backdropColor[0],y[v++]=p.backdropColor[1],y[v++]=p.backdropColor[2],y[v++]=p.backdropColor[3],y[v++]=p.backdropShadowColor[0],y[v++]=p.backdropShadowColor[1],y[v++]=p.backdropShadowColor[2],y[v++]=p.backdropShadowColor[3],y[v++]=p.backdropShadowBlur,y[v++]=p.backdropPadding,y[v++]=p.backdropBorderColor[0],y[v++]=p.backdropBorderColor[1],y[v++]=p.backdropBorderColor[2],y[v++]=p.backdropBorderColor[3],y[v++]=p.backdropBorderWidth,y[v++]=p.backdropCornerRadius,y[v++]=p.backdropLabelPadding,y[v++]=p.backdropArea,y[v++]=p.labelBoxOffset[0],y[v++]=p.labelBoxOffset[1]}setUniforms(b,p){let{gl:y,uniformLocations:S}=p;y.uniformMatrix3fv(S.u_matrix,!1,b.matrix),y.uniform1f(S.u_sizeRatio,b.sizeRatio),y.uniform1f(S.u_correctionRatio,b.correctionRatio),y.uniform1f(S.u_cameraAngle,b.cameraAngle),y.uniform2f(S.u_resolution,b.width*b.pixelRatio,b.height*b.pixelRatio),y.uniform1f(S.u_pixelRatio,b.pixelRatio),y.uniform1f(S.u_labelMargin,h.labelMargin),y.uniform1f(S.u_zoomLabelSizeRatio,1/c(b.zoomRatio)),y.uniform1f(S.u_labelPixelSnapping,b.labelPixelSnapping),y.uniform1i(S.u_nodeDataTexture,b.nodeDataTextureUnit),y.uniform1i(S.u_nodeDataTextureWidth,b.nodeDataTextureWidth),y.uniform1i(S.u_nodeFrameTexture,b.nodeFrameTextureUnit),y.uniform1i(S.u_nodeFrameTextureWidth,b.nodeFrameTextureWidth);let v=s();S.u_layerAttributeTexture&&v&&(v.bind(ue),y.uniform1i(S.u_layerAttributeTexture,ue),y.uniform1i(S.u_layerAttributeTextureWidth,v.getTextureWidth()),y.uniform1i(S.u_layerAttributeTexelsPerNode,v.getTexelsPerItem()));for(let E of Ae(n))this.setTypedUniform(E,p)}hasNothingToRender(){return this.totalBackdropCount===0}drawWebGL(b,{gl:p}){this.totalBackdropCount!==0&&(this.isInstanced?p.drawArraysInstanced(b,0,this.VERTICES,this.totalBackdropCount):p.drawArrays(b,0,this.totalBackdropCount*this.VERTICES))}reallocate(b){this.totalBackdropCount=b,b>this.bufferCapacity&&(this.bufferCapacity=Math.max(b,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}};h.labelMargin=d;let f=h;return new f(a,t,e)}var We=class extends Z{constructor(){super(...arguments);this.totalCharacterCount=0;this.bufferCapacity=0}processLabel(e,r,i){if(i.hidden||!i.text)return 0;let n=i.text,o=n.length;for(let s=0;s<o;s++){let l=n[s];this.processCharacter(r+s,i,l,s)}return o}hasNothingToRender(){return this.totalCharacterCount===0}drawWebGL(e,{gl:r}){this.totalCharacterCount!==0&&(this.isInstanced?r.drawArraysInstanced(e,0,this.VERTICES,this.totalCharacterCount):r.drawArrays(e,0,this.totalCharacterCount*this.VERTICES))}reallocate(e){this.totalCharacterCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||1e3),super.reallocate(this.bufferCapacity))}};function Ll(){return`#version 300 es

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

${Y}
${re}
${de}
${_r}

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

  ${Er}

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
`}var Rl=`#version 300 es
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
`;function ri(a,t,e,r){let{label:i={}}=r,n=i.margin??De,o=i.zoomToLabelSizeRatioFunction??(()=>1),s=Ll(),d=class d extends Z{constructor(){super(...arguments);this.totalCount=0;this.bufferCapacity=0}getDefinition(){let{FLOAT:u,UNSIGNED_BYTE:f,TRIANGLE_STRIP:h}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:s,FRAGMENT_SHADER_SOURCE:Rl,METHOD:h,UNIFORMS:["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:u},{name:"a_id",size:4,type:f,normalized:!0},{name:"a_color",size:4,type:f,normalized:!0},{name:"a_labelWidth",size:1,type:u},{name:"a_labelHeight",size:1,type:u},{name:"a_textHeight",size:1,type:u},{name:"a_positionMode",size:1,type:u},{name:"a_labelAngle",size:1,type:u},{name:"a_padding",size:1,type:u}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:u}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}processLabelBackground(u,f){let{floats:h,ints:m}=this,x=u*this.STRIDE;h[x++]=f.nodeIndex,m[x++]=f.id,h[x++]=f.color,h[x++]=f.labelWidth,h[x++]=f.labelHeight,h[x++]=f.textHeight,h[x++]=f.positionMode,h[x++]=f.labelAngle,h[x++]=f.padding}setUniforms(u,{gl:f,uniformLocations:h}){f.uniformMatrix3fv(h.u_matrix,!1,u.matrix),f.uniform1f(h.u_sizeRatio,u.sizeRatio),f.uniform1f(h.u_correctionRatio,u.correctionRatio),f.uniform1f(h.u_cameraAngle,u.cameraAngle),f.uniform2f(h.u_resolution,u.width*u.pixelRatio,u.height*u.pixelRatio),f.uniform1f(h.u_pixelRatio,u.pixelRatio),f.uniform1f(h.u_labelMargin,d.labelMargin),f.uniform1f(h.u_zoomLabelSizeRatio,1/o(u.zoomRatio)),f.uniform1f(h.u_labelPixelSnapping,u.labelPixelSnapping),f.uniform1f(h.u_pickingPadding,u.labelPickingPadding),f.uniform1i(h.u_nodeDataTexture,u.nodeDataTextureUnit),f.uniform1i(h.u_nodeDataTextureWidth,u.nodeDataTextureWidth),f.uniform1i(h.u_nodeFrameTexture,u.nodeFrameTextureUnit),f.uniform1i(h.u_nodeFrameTextureWidth,u.nodeFrameTextureWidth)}hasNothingToRender(){return this.totalCount===0}drawWebGL(u,{gl:f}){this.totalCount!==0&&f.drawArraysInstanced(f.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}reallocate(u){this.totalCount=u,u>this.bufferCapacity&&(this.bufferCapacity=Math.max(u,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}};d.labelMargin=n;let l=d;return new l(a,t,e)}var Un=pr(xr()),J={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},Xt=2,jt=1e20;function Pl(a,t,e,r,i){let n=a+i*4,o=document.createElement("canvas");o.width=n,o.height=n;let s=o.getContext("2d",{willReadFrequently:!0});return s.font=`${r} ${e} ${a}px ${t}`,s.textBaseline="alphabetic",s.textAlign="left",s.fillStyle="black",{ctx:s,canvasSize:n,gridOuter:new Float64Array(n*n),gridInner:new Float64Array(n*n),f:new Float64Array(n),z:new Float64Array(n+1),v:new Uint16Array(n)}}function Cl(a,t,e,r,i){let{ctx:n,canvasSize:o}=a,s=n.measureText(t),l=s.width,{actualBoundingBoxAscent:d,actualBoundingBoxDescent:c,actualBoundingBoxLeft:g,actualBoundingBoxRight:u}=s,f=Math.ceil(d),h=Math.ceil(g),m=Math.max(0,Math.min(o-e,Math.ceil(g)+Math.ceil(u))),x=Math.min(o-e,f+Math.ceil(c)),b=m+2*e,p=x+2*e,y=Math.max(b*p,0),S=new Uint8ClampedArray(y),v={data:S,width:b,height:p,glyphWidth:m,glyphHeight:x,glyphTop:f,glyphLeft:h,glyphAdvance:l};if(m===0||x===0)return v;let{gridInner:E,gridOuter:_}=a;n.clearRect(e,e,m,x),n.fillText(t,e+h,e+f);let A=n.getImageData(e,e,m,x);_.fill(jt,0,y),E.fill(0,0,y);for(let R=0;R<x;R++)for(let T=0;T<m;T++){let N=A.data[4*(R*m+T)+3]/255;if(N===0)continue;let P=(R+e)*b+T+e;if(N===1)_[P]=0,E[P]=jt;else{let w=.5-N;_[P]=w>0?w*w:0,E[P]=w<0?w*w:0}}On(_,0,0,b,p,b,a.f,a.v,a.z),On(E,e,e,m,x,b,a.f,a.v,a.z);for(let R=0;R<y;R++){let T=Math.sqrt(_[R])-Math.sqrt(E[R]);S[R]=Math.round(255-255*(T/r+i))}return v}function On(a,t,e,r,i,n,o,s,l){for(let d=t;d<t+r;d++)Wn(a,e*n+d,n,i,o,s,l);for(let d=e;d<e+i;d++)Wn(a,d*n+t,1,r,o,s,l)}function Wn(a,t,e,r,i,n,o){n[0]=0,o[0]=-jt,o[1]=jt,i[0]=a[t];for(let s=1,l=0,d=0;s<r;s++){i[s]=a[t+s*e];let c=s*s;do{let g=n[l];d=(i[s]-i[g]+c-g*g)/(s-g)/2}while(d<=o[l]&&--l>-1);l++,n[l]=s,o[l]=d,o[l+1]=jt}for(let s=0,l=0;s<r;s++){for(;o[l+1]<s;)l++;let d=n[l],c=s-d;a[t+s*e]=i[d]+c*c}}var Mr=class Mr extends Un.EventEmitter{constructor(e={}){super();this.fonts=new Map;this.textures=[];this.cursor={x:0,y:0,rowHeight:0,atlasIndex:0};this.pendingGlyphs=[];this.debounceTimer=null;this.options={...J,...e},this.canvas=document.createElement("canvas"),this.canvas.width=this.options.maxTextureSize,this.canvas.height=this.options.maxTextureSize,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.measureCanvas=document.createElement("canvas"),this.measureCtx=this.measureCanvas.getContext("2d"),this.textures.push(this.ctx.getImageData(0,0,1,1))}getFontKey(e){return`${e.family}-${e.weight}-${e.style}`}registerFont(e){let r=this.getFontKey(e);if(this.fonts.has(r))return r;let i=Pl(this.options.fontSize,e.family,e.weight,e.style,this.options.buffer);return this.fonts.set(r,{descriptor:e,generator:i,glyphs:new Map}),r}ensureGlyphs(e,r){let i=this.fonts.get(r);if(!i)throw new Error(`Font "${r}" is not registered. Call registerFont() first.`);let n=!1;for(let o of e){let s=o.codePointAt(0);s!==void 0&&(i.glyphs.has(s)||(this.pendingGlyphs.push({fontKey:r,charCode:s}),n=!0))}n&&this.scheduleTextureGeneration()}measureText(e,r){let i=this.fonts.get(r);if(!i)throw new Error(`Font "${r}" is not registered.`);let{family:n,weight:o,style:s}=i.descriptor;return this.measureCtx.font=`${s} ${o} ${this.options.fontSize}px ${n}`,this.measureCtx.measureText(e).width}getGlyph(e,r){let i=this.fonts.get(r);if(i)return i.glyphs.get(e)}getTextures(){return this.textures}getFontCount(){return this.fonts.size}getGlyphCount(){let e=0;for(let r of this.fonts.values())e+=r.glyphs.size;return e}hasPendingGlyphs(){return this.pendingGlyphs.length>0}flush(){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null),this.generateTextures()}destroy(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}scheduleTextureGeneration(){this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(()=>{this.debounceTimer=null,this.generateTextures()},this.options.debounceTimeout))}generateTextures(){if(this.pendingGlyphs.length===0)return;let{maxTextureSize:e,buffer:r,radius:i,cutoff:n}=this.options;for(let{fontKey:o,charCode:s}of this.pendingGlyphs){let l=this.fonts.get(o);if(!l||l.glyphs.has(s))continue;let d=String.fromCodePoint(s),c=Cl(l.generator,d,r,i,n),g=c.width,u=c.height;this.cursor.x+g+Xt>e&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+Xt,this.cursor.rowHeight=0),this.cursor.y+u+Xt>e&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,e,e));let f=c.data,h=new Uint8ClampedArray(g*u*4);for(let b=0;b<f.length;b++){let p=b*4;h[p]=255,h[p+1]=255,h[p+2]=255,h[p+3]=f[b]}let m=new ImageData(h,g,u);this.ctx.putImageData(m,this.cursor.x,this.cursor.y);let x={charCode:s,width:c.glyphWidth,height:c.glyphHeight,bearingX:-c.glyphLeft-r,bearingY:c.glyphTop+r,advance:c.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:g,atlasHeight:u,atlasIndex:this.cursor.atlasIndex};l.glyphs.set(s,x),this.cursor.x+=g+Xt,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,u)}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(Mr.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}finalizeCurrentTexture(){let{maxTextureSize:e}=this.options,r=this.cursor.y>0||this.cursor.rowHeight>0,i=Math.min(e,Math.max(this.cursor.x,r?e:1)),n=Math.min(e,this.cursor.y+this.cursor.rowHeight+Xt),o=this.ctx.getImageData(0,0,i,n);this.cursor.atlasIndex>=this.textures.length?this.textures.push(o):this.textures[this.cursor.atlasIndex]=o}};Mr.ATLAS_UPDATED_EVENT="atlasUpdated";var pe=Mr;var wl=J.fontSize;function ai(){return`#version 300 es

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
const float ATLAS_FONT_SIZE = ${B(wl)};

// ============================================================================
// Helper Functions
// ============================================================================

${Y}
${re}
${de}
${Tr}

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
`}function ii(){return`#version 300 es
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
`}function ni(){return["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_pixelRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_zoomLabelSizeRatio","u_labelPixelSnapping"]}function zr(){return{vertexShader:ai(),fragmentShader:ii(),uniforms:ni()}}function Br(a,t,e,r){let{label:i={}}=r,n=i.margin??De,o=i.zoomToLabelSizeRatioFunction??(()=>1),s=zr(),d=class d extends We{constructor(u,f,h){super(u,f,h);this.atlasTexture=null;this.atlasNeedsUpdate=!1;this.labelGlyphCache=new Map;if(this.atlasFontSize=J.fontSize*Ut(),this.atlasManager=new pe({fontSize:this.atlasFontSize}),this.gamma=.025,this.sdfBuffer=J.cutoff,this.atlasTexture=u.createTexture(),!this.atlasTexture)throw new Error("NodeLabelProgram: failed to create atlas texture");u.bindTexture(u.TEXTURE_2D,this.atlasTexture),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.LINEAR),u.bindTexture(u.TEXTURE_2D,null),this.atlasManager.on(pe.ATLAS_UPDATED_EVENT,()=>{this.atlasNeedsUpdate=!0});let m={family:i.font?.family||"sans-serif",weight:i.font?.weight||"normal",style:i.font?.style||"normal"};this.defaultFontKey=this.atlasManager.registerFont(m)}getDefinition(){let{FLOAT:u,UNSIGNED_BYTE:f,TRIANGLE_STRIP:h}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:s.vertexShader,FRAGMENT_SHADER_SOURCE:s.fragmentShader,METHOD:h,UNIFORMS:s.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:u},{name:"a_charOffset",size:2,type:u},{name:"a_charSize",size:2,type:u},{name:"a_texCoords",size:4,type:u},{name:"a_color",size:4,type:f,normalized:!0},{name:"a_margin",size:1,type:u},{name:"a_positionMode",size:1,type:u},{name:"a_labelWidth",size:1,type:u},{name:"a_labelHeight",size:1,type:u},{name:"a_verticalCenter",size:1,type:u},{name:"a_textHeight",size:1,type:u},{name:"a_labelAngle",size:1,type:u}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:u}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}prepareLabelGlyphs(u,f){if(f.hidden||!f.text){this.labelGlyphCache.delete(u);return}let h=f.text,m=f.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(h,m);let x=[],b=[],p=0,y=0,S=0;for(let v of h){let E=v.codePointAt(0);if(E===void 0){x.push(void 0),b.push(p);continue}let _=this.atlasManager.getGlyph(E,m);x.push(_),b.push(p),_&&(p+=_.advance,y=Math.max(y,_.bearingY),S=Math.max(S,_.atlasHeight-_.bearingY))}this.labelGlyphCache.set(u,{glyphs:x,xOffsets:b,totalWidth:p,totalHeight:y+S,verticalCenterOffset:(y-S)/2})}processCharacter(u,f,h,m){let{floats:x,STRIDE:b}=this,p=u*b,y=this.labelGlyphCache.get(f.parentKey);if(!y||!y.glyphs[m]){for(let R=0;R<b;R++)x[p+R]=0;return}let S=y.glyphs[m],v=y.xOffsets[m],E=f.size/this.atlasFontSize,_=ae(f.color),A=p;x[A++]=f.nodeIndex,x[A++]=(v+S.bearingX)*E,x[A++]=-S.bearingY*E,x[A++]=S.atlasWidth*E,x[A++]=S.atlasHeight*E,x[A++]=S.atlasX,x[A++]=S.atlasY,x[A++]=S.atlasWidth,x[A++]=S.atlasHeight,x[A++]=_,x[A++]=f.margin,x[A++]=ke[f.position],x[A++]=y.totalWidth*E,x[A++]=f.size,x[A++]=y.verticalCenterOffset*E,x[A++]=y.totalHeight*E,x[A++]=f.labelAngle}processLabel(u,f,h){return this.prepareLabelGlyphs(u,h),super.processLabel(u,f,h)}updateAtlasTexture(){if(!this.atlasNeedsUpdate)return;let u=this.normalProgram.gl,f=this.atlasManager.getTextures();if(f.length===0)return;let h=f[0];u.bindTexture(u.TEXTURE_2D,this.atlasTexture),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,h.width,h.height,0,u.RGBA,u.UNSIGNED_BYTE,h.data),u.bindTexture(u.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}setUniforms(u,f){let{gl:h,uniformLocations:m}=f;h.uniformMatrix3fv(m.u_matrix,!1,u.matrix),h.uniform1f(m.u_sizeRatio,u.sizeRatio),h.uniform1f(m.u_correctionRatio,u.correctionRatio),h.uniform1f(m.u_cameraAngle,u.cameraAngle),h.uniform2f(m.u_resolution,u.width*u.pixelRatio,u.height*u.pixelRatio);let x=this.atlasManager.getTextures();x.length>0?h.uniform2f(m.u_atlasSize,x[0].width,x[0].height):h.uniform2f(m.u_atlasSize,1,1),h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,this.atlasTexture),h.uniform1i(m.u_atlas,0),m.u_nodeDataTexture!==void 0&&h.uniform1i(m.u_nodeDataTexture,u.nodeDataTextureUnit),m.u_nodeDataTextureWidth!==void 0&&h.uniform1i(m.u_nodeDataTextureWidth,u.nodeDataTextureWidth),h.uniform1i(m.u_nodeFrameTexture,u.nodeFrameTextureUnit),h.uniform1i(m.u_nodeFrameTextureWidth,u.nodeFrameTextureWidth),h.uniform1f(m.u_gamma,this.gamma),h.uniform1f(m.u_sdfBuffer,this.sdfBuffer),h.uniform1f(m.u_pixelRatio,u.pixelRatio),h.uniform1f(m.u_zoomLabelSizeRatio,1/d.zoomToLabelSizeRatioFunction(u.zoomRatio)),h.uniform1f(m.u_labelPixelSnapping,u.labelPixelSnapping)}renderProgram(u,f){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),super.renderProgram(u,f)}registerFont(u,f="normal",h="normal"){return this.atlasManager.registerFont({family:u,weight:f,style:h})}getAtlasManager(){return this.atlasManager}measureLabel(u,f,h){let m=h||this.defaultFontKey;this.atlasManager.ensureGlyphs(u,m),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();let x=0,b=0,p=0;for(let S of u){let v=S.codePointAt(0);if(v===void 0)continue;let E=this.atlasManager.getGlyph(v,m);E&&(x+=E.advance,b=Math.max(b,E.bearingY),p=Math.max(p,E.atlasHeight-E.bearingY))}let y=f/this.atlasFontSize;return{width:x*y,height:f,textHeight:(b+p)*y}}ensureGlyphsReady(u,f){let h=f||this.defaultFontKey;for(let m of u)this.atlasManager.ensureGlyphs(m,h);this.atlasManager.flush()}kill(){let u=this.normalProgram.gl;this.atlasTexture&&(u.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),super.kill()}};d.labelMargin=n,d.zoomToLabelSizeRatioFunction=o;let l=d;return new l(a,t,e)}var Gl=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function Fl(a,t,e){let r=Ke(a),i=Ae(a).map(u=>`uniform ${u.type} ${u.name};`).join(`
`),{code:n,multiShape:o}=pn(a,e),s=ve(a,t),l=Object.keys(s.specs).map(u=>`float v_${u};`).join(`
`),{fetchCode:d,varyingAssignments:c}=fe(s,{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"});return`#version 300 es
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

${Y}
${re}
${r}
${n}
${Tr}

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
`}var Kt=class Kt{constructor(t,e){this.uniformLocations={};let{shapes:r,layers:i,shapeGlobalIds:n}=e;if(r.length===0)throw new Error("NodeLabelFramePass: at least one shape must be provided");this.gl=t,this.shapeUniforms=Ae(r),this.hasAttributeData=Object.keys(ve(r,i).offsets).length>0,this.vertexShader=st(t,Fl(r,i,n)),this.fragmentShader=lt(t,Gl),this.program=dt(t,[this.vertexShader,this.fragmentShader]);let o=["u_cameraAngle","u_nodeDataTexture","u_nodeDataTextureWidth","u_frameTextureWidth","u_frameTextureHeight","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode",...this.shapeUniforms.map(l=>l.name)];for(let l of o)this.uniformLocations[l]=t.getUniformLocation(this.program,l);let s=Kt.FLOATS_PER_POINT*4;this.vao=t.createVertexArray(),this.buffer=t.createBuffer(),t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,this.buffer);for(let[l,d]of[["a_nodeIndex",0],["a_positionMode",4],["a_labelAngle",8]]){let c=t.getAttribLocation(this.program,l);c>=0&&(t.enableVertexAttribArray(c),t.vertexAttribPointer(c,1,t.FLOAT,!1,s,d))}t.bindVertexArray(null)}run(t,e,r,i,n){if(e===0)return;let{gl:o}=this;o.useProgram(this.program),o.bindVertexArray(this.vao),o.bindBuffer(o.ARRAY_BUFFER,this.buffer),o.bufferData(o.ARRAY_BUFFER,t.subarray(0,e*Kt.FLOATS_PER_POINT),o.DYNAMIC_DRAW);let s=this.uniformLocations;o.uniform1f(s.u_cameraAngle,i.cameraAngle),o.uniform1i(s.u_nodeDataTexture,i.nodeDataTextureUnit),o.uniform1i(s.u_nodeDataTextureWidth,i.nodeDataTextureWidth),o.uniform1f(s.u_frameTextureWidth,r.getTextureWidth()),o.uniform1f(s.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&n&&(n.bind(ue),s.u_layerAttributeTexture&&o.uniform1i(s.u_layerAttributeTexture,ue),s.u_layerAttributeTextureWidth&&o.uniform1i(s.u_layerAttributeTextureWidth,n.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&o.uniform1i(s.u_layerAttributeTexelsPerNode,n.getTexelsPerItem()));for(let l of this.shapeUniforms)Vt(o,this.uniformLocations[l.name],l);r.bindAsRenderTarget(),o.disable(o.BLEND),o.disable(o.DEPTH_TEST),o.drawArrays(o.POINTS,0,e),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindVertexArray(null)}kill(){let{gl:t}=this;t.deleteProgram(this.program),t.deleteShader(this.vertexShader),t.deleteShader(this.fragmentShader),t.deleteBuffer(this.buffer),t.deleteVertexArray(this.vao)}};Kt.FLOATS_PER_POINT=3;var mt=Kt;function oi(a,t,e,r,i){var v;let{label:n={},shapes:o}=r;if(o.length===0)throw new Error("createNodeProgram: at least one shape must be provided in 'shapes'");let s={},l=[],d;o.forEach((E,_)=>{let A=Ma(E);_===0&&(d=A),s[E.name]=_,l[_]=je(A)});let c=[...r.layers],g=kr({shapes:o,layers:c,shapeGlobalIds:o.length>1?l:void 0,antialias:i}),u=Br(a,null,e,{label:n}),f=ti(a,null,e,{shapes:o,layers:c,getAttributeTexture:()=>S.getAttributeTexture(),label:n,shapeGlobalIds:o.length>1?l:void 0}),h=ri(a,t,e,{label:n}),m=r.labelAttachments&&Object.keys(r.labelAttachments).length>0?Ja(a,null,e,{label:n}):null,x=new mt(a,{shapes:o,layers:c,shapeGlobalIds:o.length>1?l:void 0}),b=Ht(o,c),p=j(b),y=(v=class extends Z{constructor(_,A,R){super(_,A,R);this.layerLifecycles=new Map;this.layersNeedingRegeneration=new Set;this.attrDescriptors=[];this._pickingBuffer=A;let T=y.layerTextures.get(_);T||(T=new Se(_,p),y.layerTextures.set(_,T)),this.layerAttributeTexture=T;let N=y.textureRefCounts.get(_)||0;y.textureRefCounts.set(_,N+1),this.packedAttributeData=new Float32Array(p.floatsPerItem),c.forEach((w,G)=>{if(w.lifecycle){let L={gl:_,renderer:{refresh:()=>R.refresh()},getUniformLocation:M=>_.getUniformLocation(this.normalProgram.program,M),requestShaderRegeneration:()=>{this.layersNeedingRegeneration.add(G)},requestRefresh:()=>{R.refresh()}},k=w.lifecycle(L);this.layerLifecycles.set(G,k)}}),this.layerLifecycles.forEach(w=>{w.init?.()});let P=new Map;this.layerLifecycles.forEach((w,G)=>{w.getAttributeData&&P.set(G,w)}),this.attrDescriptors=Be(b,p,P)}getDefinition(){let{FLOAT:_,TRIANGLE_STRIP:A}=WebGL2RenderingContext;return{VERTICES:4,VERTEX_SHADER_SOURCE:g.vertexShader,FRAGMENT_SHADER_SOURCE:g.fragmentShader,METHOD:A,UNIFORMS:g.uniforms,ATTRIBUTES:g.attributes,CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:_}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}maybeRegenerateShaders(){if(this.layersNeedingRegeneration.size===0)return;c=c.map((P,w)=>{if(this.layersNeedingRegeneration.has(w)){let G=this.layerLifecycles.get(w);if(G?.regenerate)return{...G.regenerate(),lifecycle:P.lifecycle}}return P}),this.layersNeedingRegeneration.clear(),g=kr({shapes:o,layers:c,shapeGlobalIds:o.length>1?l:void 0,antialias:this.renderer.getSetting("antialiasNodes")});let _=this.normalProgram.gl,{program:A,buffer:R,vertexShader:T,fragmentShader:N}=this.normalProgram;_.deleteProgram(A),_.deleteBuffer(R),_.deleteShader(T),_.deleteShader(N),this.normalProgram=this.getProgramInfo("normal",_,g.vertexShader,g.fragmentShader,this._pickingBuffer)}allocateNode(_){this.layerAttributeTexture.allocate(_)}freeNode(_){this.layerAttributeTexture.free(_)}getAttributeTexture(){return this.layerAttributeTexture}uploadLayerTexture(){this.layerAttributeTexture.upload()}process(_,A,R,T,N){let P=A*this.STRIDE;if(R.visibility==="hidden"){for(let w=P+this.STRIDE;P<w;P++)this.floats[P]=0;this.floats[A*this.STRIDE]=Fr;return}this.processVisibleItem(qe(_),P,R,T,N)}processVisibleItem(_,A,R,T,N){let{floats:P,ints:w}=this;if(P[A++]=T,w[A++]=_,P[A++]=R.opacity??1,p.floatsPerItem===0)return;let G=this.packedAttributeData;Oe(this.attrDescriptors,R,G,R.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(N,G)}setUniforms(_,A){let{gl:R,uniformLocations:T}=A;T.u_matrix&&R.uniformMatrix3fv(T.u_matrix,!1,_.matrix),T.u_sizeRatio&&R.uniform1f(T.u_sizeRatio,_.sizeRatio),T.u_correctionRatio&&R.uniform1f(T.u_correctionRatio,_.correctionRatio),T.u_pickingPadding&&R.uniform1f(T.u_pickingPadding,_.nodePickingPadding),T.u_cameraAngle&&R.uniform1f(T.u_cameraAngle,_.cameraAngle),T.u_nodeDataTexture&&R.uniform1i(T.u_nodeDataTexture,_.nodeDataTextureUnit),T.u_nodeDataTextureWidth&&R.uniform1i(T.u_nodeDataTextureWidth,_.nodeDataTextureWidth),T.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(ue),R.uniform1i(T.u_layerAttributeTexture,ue)),T.u_layerAttributeTextureWidth&&R.uniform1i(T.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),T.u_layerAttributeTexelsPerNode&&R.uniform1i(T.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),o.forEach(N=>{N.uniforms.forEach(P=>{this.setTypedUniform(P,A)})}),c.forEach(N=>{N.uniforms.forEach(P=>{this.setTypedUniform(P,A)})})}render(_,A,R){this.maybeRegenerateShaders(),super.render(_,A,R)}renderProgram(_,A){let{gl:R,program:T}=A;R.useProgram(T),A===this.normalProgram&&this.layerLifecycles.forEach(N=>{N.beforeRender?.()}),super.renderProgram(_,A)}kill(){this.layerLifecycles.forEach(R=>{R.kill?.()}),this.layerLifecycles.clear();let _=this.normalProgram.gl,A=(y.textureRefCounts.get(_)||1)-1;A<=0?(this.layerAttributeTexture.kill(),y.layerTextures.delete(_),y.textureRefCounts.delete(_)):y.textureRefCounts.set(_,A),super.kill()}},v.layerTextures=new WeakMap,v.textureRefCounts=new WeakMap,v),S=new y(a,null,e);return{nodeProgram:S,labelProgram:u,backdropProgram:f,labelBackgroundProgram:h,attachmentProgram:m,framePass:x,shapeSlug:d,shapeNameToIndex:o.length>1?s:void 0,shapeGlobalIds:o.length>1?l:void 0}}function se(a){return typeof a=="object"&&a!==null&&"attribute"in a}function Or(){return{name:"circle",glsl:`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`,uniforms:[]}}function Wr(a){let{UNSIGNED_BYTE:t}=WebGL2RenderingContext,e=a?.color??{attribute:"color"};if(!se(e)){let o=`
vec4 layer_fill() {
  return ${En(e)};
}
`;return{name:"fill",uniforms:[],attributes:[],glsl:o}}let r=e.attribute;return{name:"fill",uniforms:[],attributes:[{name:"fillColor",size:4,type:t,normalized:!0,source:r}],glsl:`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`}}var ce=6;function Ue(a){let{offsets:t,specs:e,floatsPerItem:r}=a,i=Object.keys(t);if(i.length===0||r===0)return{uniformDeclarations:"",uniformNames:[],vertexVaryingDeclarations:"",fragmentVaryingDeclarations:"",fetchCode:"",varyingAssignments:""};let n=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=["u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"],s=i.map(u=>`${e[u].size===1?"float":`vec${e[u].size}`} v_${u};`),l=s.map(u=>`out ${u}`).join(`
`),d=s.map(u=>`in ${u}`).join(`
`),{fetchCode:c,varyingAssignments:g}=fe(a,{varPrefix:"attr",baseTexelExpr:"edgeIdx * u_edgeAttributeTexelsPerEdge",textureWidthUniform:"u_edgeAttributeTextureWidth",textureSamplerUniform:"u_edgeAttributeTexture"});return{uniformDeclarations:n,uniformNames:o,vertexVaryingDeclarations:l,fragmentVaryingDeclarations:d,fetchCode:c,varyingAssignments:g}}function $n(a){return`
float findSourceClampT_${a}(vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
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
    vec2 pos = path_${a}_position(mid, source, target);
    vec2 localPos = rot * ((pos - source) / nodeExtent);
    float sdf = querySDF(sourceShapeId, localPos, effectiveSize);
    if (sdf < 0.0) lo = mid;
    else hi = mid;
  }

  float pathLen = path_${a}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 + marginT;
}
`}function Vn(a){return`
float findTargetClampT_${a}(vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  float lo = 0.5, hi = 1.0;
  float nodeExtent = targetSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // See findSourceClampT_ for the rotation rationale.
  float ca = u_cameraAngle * (1.0 - targetRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_${a}_position(mid, source, target);
    vec2 localPos = rot * ((pos - target) / nodeExtent);
    float sdf = querySDF(targetShapeId, localPos, effectiveSize);
    if (sdf < 0.0) hi = mid;
    else lo = mid;
  }

  float pathLen = path_${a}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 - marginT;
}
`}function $r(a){return`
// Auto-generated numerical tangent (from position via finite differences)
vec2 path_${a}_tangent(float t, vec2 source, vec2 target) {
  float epsilon = 0.001;
  float t1 = max(0.0, t - epsilon);
  float t2 = min(1.0, t + epsilon);
  vec2 p1 = path_${a}_position(t1, source, target);
  vec2 p2 = path_${a}_position(t2, source, target);
  return normalize(p2 - p1);
}

// Auto-generated normal (perpendicular to tangent)
vec2 path_${a}_normal(float t, vec2 source, vec2 target) {
  vec2 tangent = path_${a}_tangent(t, source, target);
  return vec2(-tangent.y, tangent.x);
}
`}function zl(a){return`
// Auto-generated path length (samples position 16 times)
float path_${a}_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_${a}_position(0.0, source, target);
  for (int i = 1; i <= 16; i++) {
    float t = float(i) / 16.0;
    vec2 curr = path_${a}_position(t, source, target);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}
`}function Bl(a){return`
// Auto-generated closest_t (coarse sample + ternary search)
float path_${a}_closest_t(vec2 p, vec2 source, vec2 target) {
  // Coarse search: find best among 10 samples
  float bestT = 0.0;
  float bestDist = 1e10;
  for (int i = 0; i <= 10; i++) {
    float t = float(i) / 10.0;
    vec2 pos = path_${a}_position(t, source, target);
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
    float d1 = length(p - path_${a}_position(mid1, source, target));
    float d2 = length(p - path_${a}_position(mid2, source, target));
    if (d1 < d2) {
      hi = mid2;
    } else {
      lo = mid1;
    }
  }
  return (lo + hi) * 0.5;
}
`}function Ol(a){return`
// Auto-generated signed distance (via closest_t + normal)
float path_${a}_distance(vec2 p, vec2 source, vec2 target) {
  float closestT = path_${a}_closest_t(p, source, target);
  vec2 closest = path_${a}_position(closestT, source, target);
  vec2 diff = p - closest;
  float dist = length(diff);
  if (dist < 0.0001) return 0.0;

  // Get normal at closest point
  vec2 normal = path_${a}_normal(closestT, source, target);
  return dist * sign(dot(diff, normal));
}
`}function Wl(a){return`
// Auto-generated t_at_distance (binary search)
float path_${a}_t_at_distance(float targetDist, vec2 source, vec2 target) {
  if (targetDist <= 0.0) return 0.0;

  float totalLen = path_${a}_length(source, target);
  if (targetDist >= totalLen) return 1.0;

  // Binary search for t
  float lo = 0.0, hi = 1.0;
  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;

    // Compute arc length from 0 to mid
    float arcLen = 0.0;
    vec2 prev = path_${a}_position(0.0, source, target);
    for (int j = 1; j <= 8; j++) {
      float t = mid * float(j) / 8.0;
      vec2 curr = path_${a}_position(t, source, target);
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
`}function Ur(a,t){return new RegExp(`\\b(float|vec[234]|void|int|bool)\\s+${t}\\s*\\(`).test(a)}function Vr(a,t){let e=[];return Ur(t,`path_${a}_length`)||e.push(zl(a)),Ur(t,`path_${a}_closest_t`)||e.push(Bl(a)),Ur(t,`path_${a}_distance`)||e.push(Ol(a)),Ur(t,`path_${a}_t_at_distance`)||e.push(Wl(a)),e.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
${e.join(`
`)}`:""}function Hr(a){let{paths:t,layers:e}=a,r=a.extremities??[];if(t.length===0)throw new Error("At least one path is required in 'paths'");if(e.length===0)throw new Error("At least one layer is required in 'layers'");let i=a.defaultHead??"none",n=a.defaultTail??"none";return{paths:t,extremities:r,layers:e,path:t[0],layer:e[0],defaultHead:i,defaultTail:n}}var{FLOAT:qt,UNSIGNED_BYTE:Hn}=WebGL2RenderingContext;function Ul(a,t,e){let r=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"]),i=new Set(r);return a.forEach(n=>n.uniforms.forEach(o=>i.add(o.name))),t.forEach(n=>n.uniforms.forEach(o=>i.add(o.name))),e.forEach(n=>n.uniforms.forEach(o=>i.add(o.name))),Array.from(i)}function si(a){let t=new Set,e=[];for(let r of a)t.has(r.name)||(t.add(r.name),e.push(`// Path: ${r.name}`),e.push(r.glsl),e.push($r(r.name)),e.push(Vr(r.name,r.glsl)));return e.join(`

`)}function $l(a){let t=[];for(let e of a)t.push(`// Extremity: ${e.name}`),t.push(e.glsl);return t.join(`

`)}var Vl=[{queryName:"queryPathPosition",pathFunc:"position",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathTangent",pathFunc:"tangent",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathNormal",pathFunc:"normal",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathLength",pathFunc:"length",returnType:"float",params:"vec2 source, vec2 target",args:"source, target"},{queryName:"queryPathClosestT",pathFunc:"closest_t",returnType:"float",params:"vec2 p, vec2 source, vec2 target",args:"p, source, target"}];function Hl(a,t){let{queryName:e,pathFunc:r,returnType:i,params:n,args:o}=t;if(a.length===1)return`${i} ${e}(int pathId, ${n}) {
  return path_${a[0].name}_${r}(${o});
}`;let s=a.map((l,d)=>`    case ${d}: return path_${l.name}_${r}(${o});`).join(`
`);return`${i} ${e}(int pathId, ${n}) {
  switch (pathId) {
${s}
    default: return path_${a[0].name}_${r}(${o});
  }
}`}function li(a){return Vl.map(t=>Hl(a,t)).join(`

`)}function Xl(a){return a.length===1?`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_${a[0].name}(uv, lengthRatio, widthRatio);
}`:`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
${a.map((e,r)=>`    case ${r}: return extremity_${e.name}(uv, lengthRatio, widthRatio);`).join(`
`)}
    default: return extremity_${a[0].name}(uv, lengthRatio, widthRatio);
  }
}`}function jl(a){let t=[];for(let e of a)t.push($n(e.name)),t.push(Vn(e.name));if(a.length===1)t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_${a[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_${a[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`);else{let e=a.map((i,n)=>`    case ${n}: return findSourceClampT_${i.name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);`).join(`
`),r=a.map((i,n)=>`    case ${n}: return findTargetClampT_${i.name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);`).join(`
`);t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  switch (pathId) {
${e}
    default: return findSourceClampT_${a[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
  }
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  switch (pathId) {
${r}
    default: return findTargetClampT_${a[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
  }
}`)}return t.join(`

`)}function jn(a,t,e,r,i){let n=j([...a,...e]),o=Ue(n),s=ve(r,i),l=Object.keys(s.offsets),d=E=>{let{size:_}=s.specs[E];return _===1?"float":`vec${_}`},c=l.map(E=>`${d(E)} v_source_${E};
${d(E)} v_target_${E};`).join(`
`),g=fe(s,{varPrefix:"srcNodeAttr",baseTexelExpr:"srcIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_source_"}),u=fe(s,{varPrefix:"tgtNodeAttr",baseTexelExpr:"tgtIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_target_"}),f=l.map(E=>`${d(E)} g_${E};`).join(`
`),h=l.map(E=>`  g_${E} = v_source_${E};`).join(`
`),m=l.map(E=>`  g_${E} = v_target_${E};`).join(`
`),x=new Set,b=[],p=E=>{x.has(E.name)||(x.add(E.name),b.push(`uniform ${E.type} ${E.name};`))};a.forEach(E=>E.uniforms.forEach(p)),t.forEach(E=>E.uniforms.forEach(p));let y=t.map(E=>B(E.widthFactor)).join(", "),S=Math.max(...a.map(E=>E.minBodyLengthRatio||0));return`#version 300 es

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
${b.join(`
`)}

// Path attribute varyings \u2014 assigned so path functions can read them as globals
${o.vertexVaryingDeclarations}

// Node size varyings \u2014 read by path functions like loop
out float v_sourceNodeSize;
out float v_targetNodeSize;

// Node shape attributes per endpoint, and the ones querySDF reads
${c}
${f}

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${y});

// Node-data fetch helpers (geometry texel + rotation-flags texel)
${Y}
${re}

// Shape SDFs for node boundary clamping
${za()}
${Ba(new Set(l))}

// Path functions
${si(a)}
${li(a)}
${jl(a)}

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
${g.fetchCode}
${g.varyingAssignments}
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
  float minBodyLengthRatio = ${B(S)};

  // Thickness in WebGL units (needed to compute clamping margin and extremity lengths)
  float pixelsThickness = max(a_thickness, u_minEdgeThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // SDF clamping: find where the edge body meets the node boundaries. Always
  // searched (ungated) so labels get a true boundary clamp; the body re-applies
  // its extremity gating in-shader.
${h}
  float tStart = queryFindSourceClampT(pathId, a_source, a_sourceSize, int(a_sourceShapeId), a_sourceRotateAlign, a_target, 0.0);
${m}
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
${m}
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
`}var Xr=0,Xn=1,jr=2;function Kl(a,t,e){let r=[];e&&(r.push([Xr,0,-1],[Xr,0,1]),r.push([Xr,1,-1],[Xr,1,1]));for(let i=0;i<=a;i++){let n=i/a;r.push([Xn,n,-1],[Xn,n,1])}return t&&(r.push([jr,0,-1],[jr,0,1]),r.push([jr,1,-1],[jr,1,1])),{data:r,attributes:[{name:"a_zone",size:1,type:qt},{name:"a_zoneT",size:1,type:qt},{name:"a_side",size:1,type:qt}],verticesPerEdge:r.length}}function ql(a,t,e,r){let i=j([...a,...e]),n=Ue(i),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture"]),s=new Set,l=[],d=x=>{!o.has(x.name)&&!s.has(x.name)&&(s.add(x.name),l.push(`uniform ${x.type} ${x.name};`))};a.forEach(x=>x.uniforms.forEach(d)),t.forEach(x=>x.uniforms.forEach(d)),e.forEach(x=>x.uniforms.forEach(d));let c=r.map(x=>`in ${x.size===1?"float":`vec${x.size}`} ${x.name};`).join(`
`),g=t.map(x=>B(x.widthFactor)).join(", "),u=Math.max(...a.map(x=>x.minBodyLengthRatio||0)),f=e.some(x=>x.needsNodeColors),h=a.some(x=>x.needsNodeSize);return`#version 300 es

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
${f?`
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
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${g});

// All path functions
${si(a)}

// Path selector functions
${li(a)}

// Node-data fetch helper (geometry texel of the two-texel node stride)
${Y}
${f?fn:""}
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
${de}

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
${f?`
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
  float minBodyLengthRatio = ${B(u)};

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
`}function Yl(a,t,e,r){let i=j([...a,...e]),n=Ue(i),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding"]),s=new Set,l=[],d=b=>{!o.has(b.name)&&!s.has(b.name)&&(s.add(b.name),l.push(`uniform ${b.type} ${b.name};`))};a.forEach(b=>b.uniforms.forEach(d)),t.forEach(b=>b.uniforms.forEach(d)),e.forEach(b=>b.uniforms.forEach(d));let c=t.map(b=>B(b.baseRatio??.5)).join(", "),g=b=>t.length>1?`EXTREMITY_BASE_RATIOS[${b}]`:B(t[0]?.baseRatio??.5),u=t.some(b=>se(b.length)?!0:b.length>0),f=e.some(b=>b.needsNodeColors),h=a.some(b=>b.needsNodeSize),m=e.map((b,p)=>`  // Layer ${p+1}: ${b.name}
  color = blendOver(color, layer_${b.name}(context));`).join(`

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
${f?`
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
${si(a)}

// Path selector functions
${li(a)}

// All extremity functions
${$l(t)}

// Extremity SDF selector (shared pool for head/tail)
${Xl(t)}

// Layer functions
${e.map(b=>b.glsl).join(`

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
${a.every(b=>b.linearParameterization)?`  // All paths have linear parameterization: t maps directly to arc distance
  context.distanceFromSource = pathTNorm * visibleLength;
  context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;`:a.every(b=>!b.linearParameterization)?`  // No paths have linear parameterization: use numerical integration
  context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
  context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);`:`  // Mixed parameterization: use analytical for linear paths, numerical for others
  if (${a.filter(b=>b.linearParameterization).map(b=>`v_pathId == ${a.indexOf(b)}`).join(" || ")}) {
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
  float headBaseRatio = ${g("v_headId")};
  float tailBaseRatio = ${g("v_tailId")};

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
${r?`    // Visual pass: anti-aliased edge with layers, edge opacity applied once
    float alpha = smoothstep(aaWidthWebGL, -aaWidthWebGL, finalSDF) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) edge with layers, edge opacity applied once
    float alpha = (finalSDF < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    if (alpha < 0.01) discard;

    // Apply layers sequentially with "over" compositing
    vec4 color = vec4(0.0);

${m}

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function Zl(a,t,e){let r=se(t.length)?!0:t.length>0,i=se(e.length)?!0:e.length>0;if(a.generateConstantData){let n=a.generateConstantData();return{data:n.data,attributes:n.attributes,verticesPerEdge:n.verticesPerEdge}}return Kl(a.segments,r,i)}function Kr(a){let{paths:t,extremities:e,layers:r}=Hr(a),i=a.antialias??!0,n=new Map,o=new Map,s=new Map;for(let b of t)for(let p of e)for(let y of e){let S=`${b.name}:${p.name}:${y.name}`,v=Zl(b,p,y);n.set(S,v.verticesPerEdge),o.set(S,v.data);for(let E of v.attributes)s.has(E.name)||s.set(E.name,E)}let l=Array.from(s.values()),d={};l.forEach((b,p)=>{d[b.name]=p});let c=0,g="";for(let[b,p]of n)p>c&&(c=p,g=b);let u=o.get(g)||[],[f]=g.split(":"),h=t.find(b=>b.name===f),m=[];h?.generateConstantData?m=h.generateConstantData().attributes:m=[{name:"a_zone"},{name:"a_zoneT"},{name:"a_side"}];let x=u.map(b=>{let p=new Array(l.length).fill(0);return m.forEach((y,S)=>{let v=d[y.name];v!==void 0&&S<b.length&&(p[v]=b[S])}),p});return{vertexShader:ql(t,e,r,l),fragmentShader:Yl(t,e,r,i),uniforms:Ul(t,e,r),attributes:Ql(t,e,r),verticesPerEdge:c,constantData:x,constantAttributes:l,vertexCountsPerCombination:n,constantDataPerCombination:o}}function Ql(a,t,e){return[{name:"a_edgeIndex",size:1,type:qt},{name:"a_color",size:4,type:Hn,normalized:!0},{name:"a_id",size:4,type:Hn,normalized:!0},{name:"a_opacity",size:1,type:qt}]}var Jl=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,Yt=class{constructor(t,e){this.uniformLocations={};let{paths:r,extremities:i,layers:n,nodeShapes:o,nodeLayers:s}=e;this.gl=t,this.hasAttributeData=j([...r,...n]).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(ve(o,s).offsets).length>0,this.vertexShader=st(t,jn(r,i,n,o,s)),this.fragmentShader=lt(t,Jl),this.program=dt(t,[this.vertexShader,this.fragmentShader]);let l=new Set;this.customUniforms=[];for(let c of[...r,...i])for(let g of c.uniforms)l.has(g.name)||(l.add(g.name),this.customUniforms.push(g));let d=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_minEdgeThickness","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode","u_frameTextureWidth","u_frameTextureHeight",...this.customUniforms.map(c=>c.name)];for(let c of d)this.uniformLocations[c]=t.getUniformLocation(this.program,c);this.vao=t.createVertexArray()}run(t,e,r,i,n){if(r===0)return;let{gl:o}=this,s=this.uniformLocations;o.useProgram(this.program),o.bindVertexArray(this.vao),s.u_sizeRatio&&o.uniform1f(s.u_sizeRatio,t.sizeRatio),s.u_correctionRatio&&o.uniform1f(s.u_correctionRatio,t.correctionRatio),s.u_cameraAngle&&o.uniform1f(s.u_cameraAngle,t.cameraAngle),s.u_minEdgeThickness&&o.uniform1f(s.u_minEdgeThickness,t.minEdgeThickness),s.u_nodeDataTexture&&o.uniform1i(s.u_nodeDataTexture,t.nodeDataTextureUnit),s.u_nodeDataTextureWidth&&o.uniform1i(s.u_nodeDataTextureWidth,t.nodeDataTextureWidth),s.u_edgeDataTexture&&o.uniform1i(s.u_edgeDataTexture,t.edgeDataTextureUnit),s.u_edgeDataTextureWidth&&o.uniform1i(s.u_edgeDataTextureWidth,t.edgeDataTextureWidth),s.u_frameTextureWidth&&o.uniform1f(s.u_frameTextureWidth,e.getTextureWidth()),s.u_frameTextureHeight&&o.uniform1f(s.u_frameTextureHeight,e.getTextureHeight()),this.hasAttributeData&&i&&(i.bind(ce),s.u_edgeAttributeTexture&&o.uniform1i(s.u_edgeAttributeTexture,ce),s.u_edgeAttributeTextureWidth&&o.uniform1i(s.u_edgeAttributeTextureWidth,i.getTextureWidth()),s.u_edgeAttributeTexelsPerEdge&&o.uniform1i(s.u_edgeAttributeTexelsPerEdge,i.getTexelsPerItem())),this.hasNodeAttributeData&&n&&(n.bind(ue),s.u_layerAttributeTexture&&o.uniform1i(s.u_layerAttributeTexture,ue),s.u_layerAttributeTextureWidth&&o.uniform1i(s.u_layerAttributeTextureWidth,n.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&o.uniform1i(s.u_layerAttributeTexelsPerNode,n.getTexelsPerItem()));for(let l of this.customUniforms)Vt(o,this.uniformLocations[l.name],l);e.bindAsRenderTarget(),o.disable(o.BLEND),o.disable(o.DEPTH_TEST),o.drawArrays(o.POINTS,0,r),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindVertexArray(null)}kill(){let{gl:t}=this;t.deleteProgram(this.program),t.deleteShader(this.vertexShader),t.deleteShader(this.fragmentShader),t.deleteVertexArray(this.vao)}};function bt(a,t){if(typeof a=="string"){let[r,i,n,o]=Sn(a).map(s=>s.toFixed(6));return{glsl:`vec4(${r}, ${i}, ${n}, ${o})`,attributes:[],needsNodeColors:!1}}if("node"in a&&a.node)return{glsl:a.node==="source"?"v_sourceColor":"v_targetColor",attributes:[],needsNodeColors:!0};let e=a;return{glsl:`v_${t}`,attributes:[{name:`a_${t}`,size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:e.attribute,defaultValue:e.default}],needsNodeColors:!1}}function me(a){let t=a?.color;if(t===void 0)return{name:"plain",glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`,uniforms:[],attributes:[]};let e=bt(t,"plainColor");return{name:"plain",glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return ${e.glsl};
}
`,uniforms:[],attributes:e.attributes,needsNodeColors:e.needsNodeColors}}function Zt(a,t,e,r,i,n){if(a.length===1)return`${r} ${t}(int pathId, ${i}) {
  return path_${a[0].name}_${e}(${n});
}`;let o=a.map((s,l)=>`    case ${l}: return path_${s.name}_${e}(${n});`).join(`
`);return`${r} ${t}(int pathId, ${i}) {
  switch (pathId) {
${o}
    default: return path_${a[0].name}_${e}(${n});
  }
}`}var rd=`
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
`;function ad(a,t){let e=B(a),r=B(t);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < ${e}) return 0.0;
  if (ratio < ${r}) return (ratio - ${e}) / (${r} - ${e});
  return 1.0;
}
`}var id=`
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
`;function qr(a){let{paths:t,minVisibilityThreshold:e,fullVisibilityThreshold:r}=a,i=t.some(s=>s.hasSharpCorners),n=t.map(s=>`// --- Path: ${s.name} ---
${s.glsl}

// Tangent/normal functions: analytical if provided, otherwise numerical
${s.analyticalTangentGlsl||$r(s.name)}

// Auto-generated fallbacks for any missing path functions
${Vr(s.name,s.glsl)}

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

${Y}
${de}

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

${n}

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

${Zt(t,"queryPathPosition","position","vec2","float t, vec2 source, vec2 target","t, source, target")}

${Zt(t,"queryPathTangent","tangent","vec2","float t, vec2 source, vec2 target","t, source, target")}

${Zt(t,"queryPathNormal","normal","vec2","float t, vec2 source, vec2 target","t, source, target")}

${Zt(t,"queryPathLength","length","float","vec2 source, vec2 target","source, target")}

${Zt(t,"queryPathTAtDistance","t_at_distance","float","float dist, vec2 source, vec2 target","dist, source, target")}

${o}

// ============================================================================
// Shared helpers (body bounds, alpha ramp, perpendicular offset)
// ============================================================================

${rd}
${ad(e,r)}
${id}
`}var nd=J.fontSize,od=new Map,qn=24,Kn=(qn+1)*2;function sd(a){let{paths:t,fontSizeMode:e,headLengthRatio:r,tailLengthRatio:i,minVisibilityThreshold:n,fullVisibilityThreshold:o}=a,s=e==="scaled",l=me(),d=j([...t,l]),c=Ue(d);return`#version 300 es

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

const float ATLAS_FONT_SIZE = ${B(nd)};
const float HEAD_RATIO = ${B(r)};
const float TAIL_RATIO = ${B(i)};
const int RIBBON_SEGMENTS = ${qn};

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
${c.vertexVaryingDeclarations.replace(/out /g,"")}

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${qr({paths:t,minVisibilityThreshold:n,fullVisibilityThreshold:o})}

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
`}var ld=`#version 300 es
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
`;function di(a,t,e,r){let{shaderConfig:i}=r,{paths:n,fontSizeMode:o}=i;if(n.length===0)throw new Error("createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path");let s=me(),l=j([...n,s]),d=Be([...n,s],l),c=sd(i);class g extends Z{constructor(h,m,x){super(h,m,x);this.totalCount=0;this.bufferCapacity=0;this.edgeAttributeTexture=null;this.edgeAttributeTexture=new Se(h,l),this.packedAttributeData=new Float32Array(l.floatsPerItem)}getDefinition(){let{FLOAT:h,UNSIGNED_BYTE:m,TRIANGLE_STRIP:x}=WebGL2RenderingContext,b=[];for(let y=0;y<Kn;y++)b.push([y]);let p=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_resolution","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth"];return o==="scaled"&&p.push("u_zoomSizeRatio"),l.floatsPerItem>0&&p.push("u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"),{VERTICES:Kn,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:ld,METHOD:x,UNIFORMS:p,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:h},{name:"a_edgeAttrIndex",size:1,type:h},{name:"a_baseFontSize",size:1,type:h},{name:"a_totalTextWidth",size:1,type:h},{name:"a_positionMode",size:1,type:h},{name:"a_margin",size:1,type:h},{name:"a_padding",size:1,type:h},{name:"a_color",size:4,type:m,normalized:!0},{name:"a_id",size:4,type:m,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_vertexIndex",size:1,type:h}],CONSTANT_DATA:b}}processEdgeLabelBackground(h,m,x){let b=0;if(this.edgeAttributeTexture&&l.floatsPerItem>0){b=this.edgeAttributeTexture.allocate(m);let v=this.packedAttributeData;Oe(d,x.edgeAttributes,v,"",od,0),this.edgeAttributeTexture.updateAllAttributes(m,v)}let{floats:p,ints:y}=this,S=h*this.STRIDE;p[S++]=x.edgeIndex,p[S++]=b,p[S++]=x.baseFontSize,p[S++]=x.totalTextWidth,p[S++]=x.positionMode,p[S++]=x.margin,p[S++]=x.padding,p[S++]=x.color,y[S++]=x.id}setUniforms(h,{gl:m,uniformLocations:x}){if(m.uniformMatrix3fv(x.u_matrix,!1,h.matrix),m.uniform1f(x.u_sizeRatio,h.sizeRatio),m.uniform1f(x.u_correctionRatio,h.correctionRatio),m.uniform1f(x.u_pixelRatio,h.pixelRatio),m.uniform1f(x.u_cameraAngle,h.cameraAngle),m.uniform2f(x.u_resolution,h.width,h.height),x.u_nodeDataTexture!==void 0&&m.uniform1i(x.u_nodeDataTexture,h.nodeDataTextureUnit),x.u_nodeDataTextureWidth!==void 0&&m.uniform1i(x.u_nodeDataTextureWidth,h.nodeDataTextureWidth),x.u_edgeDataTexture!==void 0&&m.uniform1i(x.u_edgeDataTexture,h.edgeDataTextureUnit),x.u_edgeDataTextureWidth!==void 0&&m.uniform1i(x.u_edgeDataTextureWidth,h.edgeDataTextureWidth),x.u_edgeFrameTexture!==void 0&&m.uniform1i(x.u_edgeFrameTexture,h.edgeFrameTextureUnit),x.u_edgeFrameTextureWidth!==void 0&&m.uniform1i(x.u_edgeFrameTextureWidth,h.edgeFrameTextureWidth),o==="scaled"&&x.u_zoomSizeRatio!==void 0){let b=this.renderer.getSetting("zoomToSizeRatioFunction");m.uniform1f(x.u_zoomSizeRatio,1/b(h.zoomRatio))}this.edgeAttributeTexture&&l.floatsPerItem>0&&x.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(ce),m.uniform1i(x.u_edgeAttributeTexture,ce),m.uniform1i(x.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),m.uniform1i(x.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}renderProgram(h,m){this.edgeAttributeTexture&&l.floatsPerItem>0&&this.edgeAttributeTexture.upload(),super.renderProgram(h,m)}kill(){this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),super.kill()}drawWebGL(h,{gl:m}){this.totalCount!==0&&m.drawArraysInstanced(m.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}reallocate(h){this.totalCount=h,h>this.bufferCapacity&&(this.bufferCapacity=Math.max(h,Math.ceil(this.bufferCapacity*1.5)||10),super.reallocate(this.bufferCapacity))}}return new g(a,t,e)}function Yr(a){return{paths:a.paths,headLengthRatio:a.headLengthRatio??0,tailLengthRatio:a.tailLengthRatio??0,fontSizeMode:a.fontSizeMode??"fixed",minVisibilityThreshold:a.minVisibilityThreshold??.7,fullVisibilityThreshold:a.fullVisibilityThreshold??.8}}var dd=J.fontSize,ud=17/64;function cd(a){let{paths:t,hasBorder:e=!1,fontSizeMode:r="fixed",minVisibilityThreshold:i=.5,fullVisibilityThreshold:n=.6}=a,o=r==="scaled",s=t.some(u=>u.hasSharpCorners),l=me(),d=j([...t,l]),c=Ue(d);return`#version 300 es

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
const float ATLAS_FONT_SIZE = ${B(dd)};  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = ${B(ud)};  // Baseline to visual center ratio

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
${qr({paths:t,minVisibilityThreshold:i,fullVisibilityThreshold:n})}

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
`}function hd(a={}){let{hasBorder:t=!1}=a;return`#version 300 es
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
`}function gd(a,t=!1,e="fixed"){let r=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_sdfBufferPixels","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"];e==="scaled"&&r.push("u_zoomSizeRatio"),t&&r.push("u_borderWidth");for(let i of a)for(let n of i.uniforms)r.includes(n.name)||r.push(n.name);return r}function ui(a){let{hasBorder:t=!1,fontSizeMode:e="fixed"}=a;return{vertexShader:cd(a),fragmentShader:hd({hasBorder:t}),uniforms:gd(a.paths,t,e)}}var fd=new Map;function pd(a){switch(a){case"over":return 0;case"above":return 1;case"below":return 2;case"auto":return 3;default:return 0}}function ci(a,t,e,r){let{color:i,margin:n,textBorder:o}=r,s=Yr(r),{paths:l,fontSizeMode:d,minVisibilityThreshold:c,fullVisibilityThreshold:g}=s,u=!!o,f=ui({paths:l,hasBorder:u,fontSizeMode:d,minVisibilityThreshold:c,fullVisibilityThreshold:g}),m=class m extends We{constructor(p,y,S){super(p,y,S);this.atlasTexture=null;this.atlasNeedsUpdate=!1;this.labelGlyphCache=new Map;this.edgeAttributeTexture=null;let v=me();if(this.attributeLayout=j([...l,v]),this.attrDescriptors=Be([...l,v],this.attributeLayout),this.edgeAttributeTexture=new Se(p,this.attributeLayout),this.packedAttributeData=new Float32Array(this.attributeLayout.floatsPerItem),this.atlasManager=new pe,this.gamma=.025,this.sdfBuffer=J.cutoff,this.atlasTexture=p.createTexture(),!this.atlasTexture)throw new Error("EdgeLabelProgram: failed to create atlas texture");p.bindTexture(p.TEXTURE_2D,this.atlasTexture),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.LINEAR),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.LINEAR),p.bindTexture(p.TEXTURE_2D,null),this.atlasManager.on(pe.ATLAS_UPDATED_EVENT,()=>{this.atlasNeedsUpdate=!0,setTimeout(()=>this.renderer.refresh(),0)});let E={family:"sans-serif",weight:"normal",style:"normal"};this.defaultFontKey=this.atlasManager.registerFont(E)}getDefinition(){let{FLOAT:p,UNSIGNED_BYTE:y,TRIANGLE_STRIP:S}=WebGL2RenderingContext,v=new Set,E=[];for(let _ of l)for(let A of _.attributes){let R=A.name.startsWith("a_")?A.name:`a_${A.name}`;v.has(R)||(v.add(R),E.push({name:R,size:A.size,type:A.type}))}return{VERTICES:4,VERTEX_SHADER_SOURCE:f.vertexShader,FRAGMENT_SHADER_SOURCE:f.fragmentShader,METHOD:S,UNIFORMS:f.uniforms,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:p},{name:"a_edgeAttrIndex",size:1,type:p},{name:"a_baseFontSize",size:1,type:p},{name:"a_charMetrics",size:4,type:p},{name:"a_charDims",size:4,type:p},{name:"a_texCoords",size:4,type:p},{name:"a_labelParams",size:2,type:p},{name:"a_color",size:4,type:y,normalized:!0},...u?[{name:"a_borderColor",size:4,type:y,normalized:!0}]:[],...E.filter(_=>!["a_curvature","curvature"].includes(_.name))],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:p}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}prepareLabelGlyphs(p,y){if(y.hidden||!y.text){this.labelGlyphCache.delete(p);return}let S=y.text,v=y.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(S,v);let E=[],_=[],A=0;for(let R of S){let T=R.codePointAt(0);if(T===void 0){E.push(void 0),_.push(A);continue}let N=this.atlasManager.getGlyph(T,v);E.push(N),_.push(A),N&&(A+=N.advance)}this.labelGlyphCache.set(p,{glyphs:E,xOffsets:_,totalWidth:A})}processCharacter(p,y,S,v){let{floats:E}=this,_=this.STRIDE,A=p*_,R=this.labelGlyphCache.get(y.parentKey);if(!R||!R.glyphs[v]){for(let I=0;I<_;I++)E[A+I]=0;return}let T=R.glyphs[v],N=R.xOffsets[v],P=m.labelColor,w=P&&typeof P=="object"&&"color"in P&&P.color?P.color:y.color,G=ae(w),L=A;E[L++]=y.edgeIndex,E[L++]=this.edgeAttributeTexture?.getIndex(y.parentKey)??0,E[L++]=y.size,E[L++]=N,E[L++]=T.advance,E[L++]=R.totalWidth,E[L++]=pd(y.position),E[L++]=T.atlasWidth,E[L++]=T.atlasHeight,E[L++]=T.bearingX,E[L++]=-T.bearingY,E[L++]=T.atlasX,E[L++]=T.atlasY,E[L++]=T.atlasWidth,E[L++]=T.atlasHeight;let k=m.labelMargin??y.margin;if(E[L++]=k,E[L++]=0,E[L++]=G,u&&o){let I;typeof o.color=="string"?I=o.color:I=o.color.color||"#ffffff",E[L++]=ae(I)}let M=new Set;for(let I of l)for(let z of I.attributes){let V=z.name.startsWith("a_")?z.name.slice(2):z.name;if(V!=="curvature"&&!M.has(V)){M.add(V);for(let q=0;q<z.size;q++)E[L++]=0}}}processEdgeLabel(p,y,S){if(this.prepareLabelGlyphs(p,S),this.edgeAttributeTexture&&!S.hidden&&S.text){this.edgeAttributeTexture.allocate(p);let v=this.packedAttributeData;Oe(this.attrDescriptors,S.edgeAttributes,v,"",fd,0),this.edgeAttributeTexture.updateAllAttributes(p,v)}return super.processLabel(p,y,S)}updateAtlasTexture(){if(!this.atlasNeedsUpdate)return;let p=this.normalProgram.gl,y=this.atlasManager.getTextures();if(y.length===0)return;let S=y[0];p.bindTexture(p.TEXTURE_2D,this.atlasTexture),p.texImage2D(p.TEXTURE_2D,0,p.RGBA,S.width,S.height,0,p.RGBA,p.UNSIGNED_BYTE,S.data),p.bindTexture(p.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}setUniforms(p,y){let{gl:S,uniformLocations:v}=y,E=this.atlasManager.getTextures(),_=E.length>0?[E[0].width,E[0].height]:[1,1];if(S.uniformMatrix3fv(v.u_matrix,!1,p.matrix),S.uniform1f(v.u_sizeRatio,p.sizeRatio),S.uniform1f(v.u_correctionRatio,p.correctionRatio),S.uniform1f(v.u_pixelRatio,p.pixelRatio),S.uniform1f(v.u_cameraAngle,p.cameraAngle),S.uniform1f(v.u_sdfBufferPixels,J.buffer),S.uniform2f(v.u_resolution,p.width,p.height),S.uniform2f(v.u_atlasSize,_[0],_[1]),S.uniform1f(v.u_gamma,this.gamma),S.uniform1f(v.u_sdfBuffer,this.sdfBuffer),S.activeTexture(S.TEXTURE0),S.bindTexture(S.TEXTURE_2D,this.atlasTexture),S.uniform1i(v.u_atlas,0),v.u_nodeDataTexture!==void 0&&S.uniform1i(v.u_nodeDataTexture,p.nodeDataTextureUnit),v.u_nodeDataTextureWidth!==void 0&&S.uniform1i(v.u_nodeDataTextureWidth,p.nodeDataTextureWidth),v.u_edgeDataTexture!==void 0&&S.uniform1i(v.u_edgeDataTexture,p.edgeDataTextureUnit),v.u_edgeDataTextureWidth!==void 0&&S.uniform1i(v.u_edgeDataTextureWidth,p.edgeDataTextureWidth),v.u_edgeFrameTexture!==void 0&&S.uniform1i(v.u_edgeFrameTexture,p.edgeFrameTextureUnit),v.u_edgeFrameTextureWidth!==void 0&&S.uniform1i(v.u_edgeFrameTextureWidth,p.edgeFrameTextureWidth),u&&o&&v.u_borderWidth!==void 0){let A=o.width/J.buffer*this.sdfBuffer;S.uniform1f(v.u_borderWidth,A)}if(this.edgeAttributeTexture&&v.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(ce),S.uniform1i(v.u_edgeAttributeTexture,ce),S.uniform1i(v.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),S.uniform1i(v.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),d==="scaled"&&v.u_zoomSizeRatio!==void 0){let R=1/this.renderer.getSetting("zoomToSizeRatioFunction")(p.zoomRatio);S.uniform1f(v.u_zoomSizeRatio,R)}}renderProgram(p,y){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),super.renderProgram(p,y)}registerFont(p,y="normal",S="normal"){return this.atlasManager.registerFont({family:p,weight:y,style:S})}getAtlasManager(){return this.atlasManager}ensureGlyphsReady(p,y){let S=y||this.defaultFontKey;for(let v of p)this.atlasManager.ensureGlyphs(v,S);this.atlasManager.flush()}measureLabelAtlasWidth(p,y){let S=y||this.defaultFontKey;this.atlasManager.ensureGlyphs(p,S),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();let v=0;for(let E of p){let _=E.codePointAt(0);if(_===void 0)continue;let A=this.atlasManager.getGlyph(_,S);A&&(v+=A.advance)}return v}measureLabel(p,y,S){let v=this.measureLabelAtlasWidth(p,S),E=y/J.fontSize;return{width:v*E,height:y,textHeight:y}}kill(){let p=this.normalProgram.gl;this.atlasTexture&&(p.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),super.kill()}};m.labelColor=i,m.labelMargin=n;let h=m;return new h(a,t,e)}function md(){return{name:"none",glsl:`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function hi(a,t,e,r,i,n,o){let s=Hr(r),{paths:l,layers:d,defaultHead:c,defaultTail:g}=s,u=[md(),...s.extremities],f={},h={};l.forEach((N,P)=>f[N.name]=P),u.forEach((N,P)=>h[N.name]=P);let m=h[c]??0,x=h[g]??0,b=null,p=j([...l,...d]),y=class extends Z{constructor(P,w,G){b||(b=Kr({paths:l,extremities:u,layers:d,antialias:i}));super(P,w,G);this.layerLifecycles=new Map;this.needsShaderRegeneration=!1;this.edgeAttributeTexture=null;this.layout=p;this.attrDescriptors=[];this.lifecycleIndexOffset=l.length;this._pickingBuffer=w,this.edgeAttributeTexture=new Se(P,this.layout),this.packedAttributeData=new Float32Array(this.layout.floatsPerItem),d.forEach((k,M)=>{if(k.lifecycle){let I={gl:P,renderer:{refresh:()=>G.refresh()},getUniformLocation:z=>P.getUniformLocation(this.normalProgram.program,z),requestShaderRegeneration:()=>{this.needsShaderRegeneration=!0},requestRefresh:()=>{G.refresh()}};this.layerLifecycles.set(M,k.lifecycle(I))}}),this.layerLifecycles.forEach(k=>k.init?.());let L=new Map;this.layerLifecycles.forEach((k,M)=>{k.getAttributeData&&L.set(l.length+M,k)}),this.attrDescriptors=Be([...l,...d],this.layout,L)}getAttributeTexture(){return this.edgeAttributeTexture}resolveEdgeIds(P,w,G){let L=P,k=0,M=m,I=x,z=w?L.selfLoopPath:G&&L.parallelPath?L.parallelPath:L.path;z&&f[z]!==void 0&&(k=f[z]),L.head&&L.head!=="none"&&h[L.head]!==void 0&&(M=h[L.head]),L.tail&&L.tail!=="none"&&h[L.tail]!==void 0&&(I=h[L.tail]);let V=u[M],q=u[I];return{pathId:k,headId:M,tailId:I,headLengthRatio:se(V.length)?0:V.length,tailLengthRatio:se(q.length)?0:q.length}}getDefinition(){let{TRIANGLE_STRIP:P}=WebGL2RenderingContext,w=P,G=b;return{VERTICES:G.verticesPerEdge,VERTEX_SHADER_SOURCE:G.vertexShader,FRAGMENT_SHADER_SOURCE:G.fragmentShader,METHOD:w,UNIFORMS:G.uniforms,ATTRIBUTES:G.attributes,CONSTANT_ATTRIBUTES:G.constantAttributes,CONSTANT_DATA:G.constantData}}maybeRegenerateShaders(){if(!this.needsShaderRegeneration)return;this.needsShaderRegeneration=!1;let P=d.map((I,z)=>{let V=this.layerLifecycles.get(z);return V?.regenerate?V.regenerate():I});b=Kr({paths:l,extremities:u,layers:P,antialias:this.renderer.getSetting("antialiasEdges")});let w=this.normalProgram.gl,{program:G,buffer:L,vertexShader:k,fragmentShader:M}=this.normalProgram;w.deleteProgram(G),w.deleteBuffer(L),w.deleteShader(k),w.deleteShader(M),this.normalProgram=this.getProgramInfo("normal",w,b.vertexShader,b.fragmentShader,this._pickingBuffer)}process(P,w,G,L,k,M){let I=w*this.STRIDE;if(k.visibility==="hidden"||G.visibility==="hidden"||L.visibility==="hidden"){for(let z=I+this.STRIDE;I<z;I++)this.floats[I]=0;this.floats[w*this.STRIDE]=Fr;return}this.processVisibleItem(qe(P),I,G,L,k,M)}processVisibleItem(P,w,G,L,k,M){let{floats:I,ints:z}=this;I[w++]=M,I[w++]=ae(k.color),z[w++]=P,I[w++]=k.opacity??1;let V=this.packedAttributeData;Oe(this.attrDescriptors,k,V,k.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(M,V)}setUniforms(P,w){let{gl:G,uniformLocations:L}=w;L.u_matrix&&G.uniformMatrix3fv(L.u_matrix,!1,P.matrix),L.u_sizeRatio&&G.uniform1f(L.u_sizeRatio,P.sizeRatio),L.u_correctionRatio&&G.uniform1f(L.u_correctionRatio,P.correctionRatio),L.u_zoomRatio&&G.uniform1f(L.u_zoomRatio,P.zoomRatio),L.u_pixelRatio&&G.uniform1f(L.u_pixelRatio,P.pixelRatio),L.u_cameraAngle&&G.uniform1f(L.u_cameraAngle,P.cameraAngle),L.u_feather&&G.uniform1f(L.u_feather,P.antiAliasingFeather),L.u_minEdgeThickness&&G.uniform1f(L.u_minEdgeThickness,P.minEdgeThickness),L.u_pickingPadding&&G.uniform1f(L.u_pickingPadding,P.edgePickingPadding),L.u_nodeDataTexture&&G.uniform1i(L.u_nodeDataTexture,P.nodeDataTextureUnit),L.u_nodeDataTextureWidth&&G.uniform1i(L.u_nodeDataTextureWidth,P.nodeDataTextureWidth),L.u_edgeDataTexture&&G.uniform1i(L.u_edgeDataTexture,P.edgeDataTextureUnit),L.u_edgeDataTextureWidth&&G.uniform1i(L.u_edgeDataTextureWidth,P.edgeDataTextureWidth),L.u_edgeFrameTexture&&G.uniform1i(L.u_edgeFrameTexture,P.edgeFrameTextureUnit),L.u_edgeFrameTextureWidth&&G.uniform1i(L.u_edgeFrameTextureWidth,P.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(ce),L.u_edgeAttributeTexture&&G.uniform1i(L.u_edgeAttributeTexture,ce),L.u_edgeAttributeTextureWidth&&G.uniform1i(L.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),L.u_edgeAttributeTexelsPerEdge&&G.uniform1i(L.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));let k=new Set;l.forEach(M=>{M.uniforms.forEach(I=>{k.has(I.name)||(k.add(I.name),this.setTypedUniform(I,w))})}),u.forEach(M=>{M.uniforms.forEach(I=>{k.has(I.name)||(k.add(I.name),this.setTypedUniform(I,w))})}),d.forEach(M=>{M.uniforms.forEach(I=>{k.has(I.name)||(k.add(I.name),this.setTypedUniform(I,w))})})}render(P,w,G){this.maybeRegenerateShaders(),super.render(P,w,G)}renderProgram(P,w){this.layerLifecycles.forEach(G=>G.beforeRender?.()),super.renderProgram(P,w)}uploadAttributeTexture(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}kill(){this.layerLifecycles.forEach(P=>P.kill?.()),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),super.kill()}},S=u[m],v=u[x],E={paths:l,headLengthRatio:se(S.length)?0:S.length,tailLengthRatio:se(v.length)?0:v.length,...r.label},_=Yr(E),A=ci(a,null,e,E),R=di(a,t,e,{shaderConfig:_}),T=new Yt(a,{paths:l,extremities:u,layers:d,nodeShapes:n,nodeLayers:o});return{edgeProgram:new y(a,null,e),labelProgram:A,labelBackgroundProgram:R,framePass:T}}function Zr(){return{name:"straight",segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:`
// Position at parameter t \u2208 [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`,uniforms:[],attributes:[]}}function Qr(a){let{segments:t=32}=a??{};return{name:"loop",segments:t,glsl:`
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
`,needsNodeSize:!0,uniforms:[],attributes:[{name:"loopRadius",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopAngle",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopSpread",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopFixedOrientation",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:"number",default:4},loopAngle:{type:"number",default:Math.PI/4},loopSpread:{type:"number",default:80*Math.PI/180},loopFixedOrientation:{type:"number",default:0}},spread:{variable:"loopRadius",compute:r=>r+4}}}var xt=class{constructor(t){this.buckets=new Map;this.keyDepth=new Map;for(let e of t)this.buckets.set(e,new Set)}has(t){return this.keyDepth.has(t)}getBucket(t){return this.buckets.get(t)}set(t,e){let r=this.keyDepth.get(t);if(r===e)return;let i=this.buckets.get(e);if(!i)throw new Error(`Sigma: "${e}" is not a declared depth layer`);r!==void 0&&this.buckets.get(r)?.delete(t),i.add(t),this.keyDepth.set(t,e)}remove(t){let e=this.keyDepth.get(t);e!==void 0&&(this.buckets.get(e).delete(t),this.keyDepth.delete(t))}clearAll(){for(let t of this.buckets.values())t.clear();this.keyDepth.clear()}getSorted(t,e){let r=this.buckets.get(t);return!r||r.size===0?[]:[...r].sort((i,n)=>e(i)-e(n))}};var Qt=class extends ze{constructor(t,e){super(t,2,e)}updateNode(t,e,r,i,n,o,s,l){let d=this.indexMap.get(t);if(d===void 0)throw new Error(`Node "${t}" not allocated in NodeDataTexture`);let[c,g,u,f]=Me(l),h=d*2*4;this.data[h]=e,this.data[h+1]=r,this.data[h+2]=i,this.data[h+3]=n,this.data[h+4]=o,this.data[h+5]=s,this.data[h+6]=c*65536+g*256+u,this.data[h+7]=f/255,this.markDirty(d)}};var yt=class{constructor(t,e){this.texture=null;this.framebuffer=null;if(!t.getExtension("EXT_color_buffer_float"))throw new Error("sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.");this.gl=t,this.channels=e.channels,this.capacity=this.roundUpToPowerOfTwo(e.initialCapacity??1024);let r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}roundUpToPowerOfTwo(t){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,t))))}computeDimensions(t){let e=Math.min(t,4096),r=Math.ceil(t/e);return{width:e,height:r}}create(){let{gl:t}=this,e=this.channels===1?t.R32F:t.RGBA32F,r=this.channels===1?t.RED:t.RGBA;if(this.texture=t.createTexture(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,e,this.textureWidth,this.textureHeight,0,r,t.FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.framebuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)throw new Error("sigma: float framebuffer for frame-pass placement is incomplete.");t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null)}ensureCapacity(t){if(t<=this.capacity)return;let{gl:e}=this;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(t*1.5));let r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.texture&&e.deleteTexture(this.texture),this.framebuffer&&e.deleteFramebuffer(this.framebuffer),this.create()}bindAsRenderTarget(){let{gl:t}=this;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),t.viewport(0,0,this.textureWidth,this.textureHeight)}bind(t){let{gl:e}=this;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)}getTexture(){return this.texture}getTextureWidth(){return this.textureWidth}getTextureHeight(){return this.textureHeight}restore(){this.gl.getExtension("EXT_color_buffer_float"),this.create()}kill(){let{gl:t}=this;this.texture&&(t.deleteTexture(this.texture),this.texture=null),this.framebuffer&&(t.deleteFramebuffer(this.framebuffer),this.framebuffer=null)}};var Jt=class extends ze{constructor(t,e){super(t,2,e)}updateEdge(t,e,r,i,n,o,s=0,l=0,d=0){let c=this.indexMap.get(t);if(c===void 0)throw new Error(`Edge "${t}" not allocated in EdgeDataTexture`);let g=c*this.TEXELS_PER_ITEM*4;this.data[g+0]=e,this.data[g+1]=r,this.data[g+2]=i,this.data[g+3]=0,this.data[g+4]=n,this.data[g+5]=o,this.data[g+6]=s,this.data[g+7]=(l&15)<<4|d&15,this.markDirty(c)}};function Yn(a){return typeof a=="object"&&"glsl"in a&&!("attributes"in a)}function Zn(a){return typeof a=="object"&&"glsl"in a&&!("attributes"in a)}var er={shapes:[Or()],variables:{},layers:[Wr()],label:{},backdrop:{},labelAttachments:{}},St={paths:[Zr(),Qr()],extremities:[],variables:{},layers:[me()],defaultHead:"none",defaultTail:"none",label:{}},tr=["nodes","topNodes"],rr=["edges","topEdges"],ar=[...rr,...tr],Qn={nodes:er,edges:St,depthLayers:[...ar]};function Jr(a){return typeof a=="object"&&a!==null&&"attribute"in a}function gi(a){return typeof a=="function"}function ea(a){return typeof a=="object"&&a!==null&&"when"in a&&typeof a.when=="function"&&"then"in a}function ta(a){return typeof a=="object"&&a!==null&&"whenState"in a&&"then"in a}function ra(a){return typeof a=="object"&&a!==null&&"whenData"in a&&"then"in a}var Ld={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},Rd={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},Pd={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function Jn(a){return{...Ld,...a}}function eo(a){return{...Rd,...a}}function fi(a){return{...Pd,...a}}var Cd={x:{attribute:"x"},y:{attribute:"y"},size:{whenState:"isHovered",then:{attribute:"size",defaultValue:12},else:{attribute:"size",defaultValue:10}},color:{attribute:"color",defaultValue:"#666"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"},labelVisibility:{whenState:"isHovered",then:"visible",else:"auto"},backdropVisibility:{whenState:"isHovered",then:"visible",else:"hidden"},backdropColor:"#ffffff",backdropShadowColor:"rgba(0, 0, 0, 0.5)",backdropShadowBlur:12,backdropPadding:6},wd={size:{attribute:"size",defaultValue:1},color:{attribute:"color",defaultValue:"#ccc"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"}};var we={nodes:{...Cd,depth:{whenState:"isHovered",then:"topNodes",else:"nodes"}},edges:{...wd,depth:{whenState:["isHighlighted","isHovered"],then:"topEdges",else:"edges"}}};function Gd(a){return"min"in a||"max"in a||"minValue"in a||"maxValue"in a||"easing"in a}function Fd(a){return"dict"in a}function nr(a,t){return typeof a=="string"?t[a]===!0:Array.isArray(a)?a.every(e=>t[e]===!0):typeof a=="object"&&a!==null?Object.entries(a).every(([e,r])=>t[e]===r):!1}function Nd(a,t){let e=t[a.attribute];return e===void 0?a.defaultValue:e}function Id(a,t,e){let r=t[a.attribute];if(r===void 0)return a.defaultValue;let i=Number(r);if(isNaN(i))return a.defaultValue;if(a.min===void 0&&a.max===void 0)return i;let n=a.minValue??i,o=a.maxValue??i;if(o===n)return a.min??i;let s=(i-n)/(o-n);s=Math.max(0,Math.min(1,s)),s=Bt(a.easing)(s);let d=a.min??0,c=a.max??1;return d+s*(c-d)}function kd(a,t){let e=t[a.attribute];if(e===void 0)return a.defaultValue;let r=String(e);return r in a.dict?a.dict[r]:a.defaultValue}function Md(a,t,e){return Fd(a)?kd(a,t):Gd(a)?Id(a,t,e):Nd(a,t)}function mi(a,t){return typeof a=="string"?!!t[a]:Array.isArray(a)?a.every(e=>!!t[e]):typeof a=="object"&&a!==null?Object.entries(a).every(([e,r])=>t[e]===r):!1}function ir(a,t,e,r,i,n){if(a==null)return n;if(typeof a!="object"&&typeof a!="function")return a;if(ea(a)){let o=a.when(t,e,r,i)?a.then:a.else;return o===void 0?n:ir(o,t,e,r,i,n)}if(ta(a)){let o=nr(a.whenState,e)?a.then:a.else;return o===void 0?n:ir(o,t,e,r,i,n)}if(ra(a)){let o=mi(a.whenData,t)?a.then:a.else;return o===void 0?n:ir(o,t,e,r,i,n)}return gi(a)?a(t,e,r,i)??n:Jr(a)?Md(a,t,i)??n:a}function be(a){if(a==null)return"static";if(ea(a))return"graph-state";if(ta(a)){let t=be(a.then),e=a.else!==void 0?be(a.else):"static";return he("item-state",he(t,e))}if(ra(a)){let t=be(a.then),e=a.else!==void 0?be(a.else):"static";return he(t,e)}return gi(a)?"graph-state":(Jr(a),"static")}function he(a,t){return a==="graph-state"||t==="graph-state"?"graph-state":a==="item-state"||t==="item-state"?"item-state":"static"}function aa(a){if(!a)return{dependency:"static",xAttribute:null,yAttribute:null};let t=Array.isArray(a)?a:[a],e="static",r=null,i=null;for(let n of t)if("matchData"in n&&"cases"in n){let o=n.cases;for(let s of Object.values(o))for(let l of Object.values(s))e=he(e,be(l))}else if("matchState"in n&&"cases"in n){e=he(e,"item-state");let o=n.cases;for(let s of Object.values(o))for(let l of Object.values(s))e=he(e,be(l))}else if("when"in n&&"then"in n)e="graph-state";else if("whenState"in n){e=he(e,"item-state");let o=n.then;if(o&&typeof o=="object")for(let l of Object.values(o))e=he(e,be(l));let s=n.else;if(s&&typeof s=="object")for(let l of Object.values(s))e=he(e,be(l))}else if("whenData"in n){let o=n.then;if(o&&typeof o=="object")for(let l of Object.values(o))e=he(e,be(l));let s=n.else;if(s&&typeof s=="object")for(let l of Object.values(s))e=he(e,be(l))}else for(let[o,s]of Object.entries(n))if(!xi.has(o)&&(e=he(e,be(s)),(o==="x"||o==="y")&&Jr(s))){let l=s.attribute;o==="x"&&!r&&(r=l),o==="y"&&!i&&(i=l)}return{dependency:e,xAttribute:r,yAttribute:i}}var Ge={size:10,color:"#666",opacity:1,shape:"circle",rotationAlignment:"viewport",labelRotationAlignment:"viewport",visibility:"visible",depth:"nodes",zIndex:0,label:"",labelColor:"#000",labelSize:12,labelFont:"sans-serif",labelVisibility:"auto",labelPosition:"right",labelAngle:0,labelDepth:"nodes",backdropVisibility:"hidden",backdropColor:"transparent",backdropShadowColor:"transparent",backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:"transparent",backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:"both",labelAttachment:null,labelAttachmentPlacement:"below"},bi={size:1,color:"#ccc",opacity:1,path:"straight",selfLoopPath:"loop",parallelSpread:.25,tail:"none",head:"none",visibility:"visible",depth:"edges",zIndex:0,label:"",labelColor:"#666",labelVisibility:"auto",labelDepth:"edges"},xi=new Set(["when","whenState","whenData","then","else"]),to=Object.keys(Ge),zd=Object.values(Ge),ro=Object.keys(bi),Bd=Object.values(bi);function vt(a,t,e,r,i,n,o){for(let s in t){if(xi.has(s))continue;let l=a[s]??o[s];a[s]=ir(t[s],e,r,i,n,l)}"depth"in t&&!("labelDepth"in t)&&(a.labelDepth=a.depth)}function ao(a,t,e,r,i,n,o){for(let s of t)if("matchData"in s&&"cases"in s){let l=String(e[s.matchData]??""),d=s.cases;l in d&&vt(a,d[l],e,r,i,n,o)}else if("matchState"in s&&"cases"in s){let l=String(r[s.matchState]??""),d=s.cases;l in d&&vt(a,d[l],e,r,i,n,o)}else if("when"in s&&"then"in s){let l=s.when;if(!l(e,r,i,n))continue;vt(a,s.then,e,r,i,n,o)}else if("whenState"in s&&"then"in s){if(!nr(s.whenState,r))continue;vt(a,s.then,e,r,i,n,o)}else if("whenData"in s&&"then"in s){if(!mi(s.whenData,e))continue;vt(a,s.then,e,r,i,n,o)}else vt(a,s,e,r,i,n,o)}function ia(a,t,e,r,i,n){let o=n||{},s=o;for(let d=0,c=to.length;d<c;d++)s[to[d]]=zd[d];if(s.x=void 0,s.y=void 0,s.labelBackgroundColor=void 0,s.labelBackgroundPadding=void 0,s.labelCursor=void 0,!a)return s.x=t.x??0,s.y=t.y??0,o.size=t.size??10,o.color=t.color??"#666",o.label=t.label??"",o;let l=Array.isArray(a)?a:[a];return ao(s,l,t,e,r,i,Ge),o}function na(a,t,e,r,i,n){let o=n||{},s=o;for(let d=0,c=ro.length;d<c;d++)s[ro[d]]=Bd[d];if(!a)return o.size=t.size??1,o.color=t.color??"#ccc",o.label=t.label??"",o;let l=Array.isArray(a)?a:[a];return ao(s,l,t,e,r,i,bi),typeof s.labelPosition=="number"&&(s.labelPosition=void 0),o}function Od(a,t,e){if(a==null)return e;if(typeof a=="function")return a(t)??e;if(typeof a=="object"&&"when"in a){let r=a,n=r.when(t)?r.then:r.else;return n===void 0?e:typeof n=="function"?n(t)??e:n??e}if(typeof a=="object"&&"whenState"in a){let r=a,n=nr(r.whenState,t)?r.then:r.else;return n===void 0?e:typeof n=="function"?n(t)??e:n??e}return a??e}function yi(a,t){let e={};if(!a)return e;let r=Array.isArray(a)?a:[a];for(let i of r)if("when"in i&&"then"in i){let o=i.when(t)?i.then:i.else;o&&typeof o=="object"&&pi(e,o,t)}else if("whenState"in i&&"then"in i){let o=nr(i.whenState,t)?i.then:i.else;o&&typeof o=="object"&&pi(e,o,t)}else pi(e,i,t);return e}function pi(a,t,e){for(let[r,i]of Object.entries(t))xi.has(r)||(a[r]=Od(i,e))}var $e=class extends io.EventEmitter{constructor(){super(),this.rawEmitter=this}};var no=Qn;var oo=1.5,oa={x:.5,y:.5,angle:0,ratio:1},Qe=class a extends $e{constructor(){super(...arguments);this.minRatio=null;this.maxRatio=null;this.enabled=!0;this.enabledZooming=!0;this.enabledPanning=!0;this.enabledRotation=!0;this.constrainState=null;this.state={...oa};this.previousState={...oa};this.nextFrame=null;this.currentAnimationFrom=null;this.currentAnimationTo=null;this.animationCallback=null}get x(){return this.state.x}get y(){return this.state.y}get angle(){return this.state.angle}get ratio(){return this.state.ratio}static from(e){return new a().setState(e)}getState(){return{...this.state}}getPreviousState(){return{...this.previousState}}getBoundedRatio(e){let r=e;return typeof this.minRatio=="number"&&(r=Math.max(r,this.minRatio)),typeof this.maxRatio=="number"&&(r=Math.min(r,this.maxRatio)),r}validateState(e){let r=this.getState();return this.enabledPanning&&typeof e.x=="number"&&(r.x=e.x),this.enabledPanning&&typeof e.y=="number"&&(r.y=e.y),this.enabledZooming&&typeof e.ratio=="number"&&(r.ratio=this.getBoundedRatio(e.ratio)),this.enabledRotation&&typeof e.angle=="number"&&(r.angle=e.angle),this.constrainState?this.constrainState(r):r}isAnimating(){return this.nextFrame!==null}setState(e){if(!this.enabled)return this;let r=this.validateState(e);return _n(this.state,r)?this:(this.previousState=this.state,this.state=r,this.emit("updated",this.getState()),this)}updateState(e){return this.setState(e(this.getState())),this}animate(e,r){return this.enabled?new Promise(i=>this.runAnimation(e,{...mn,...r},i)):Promise.resolve()}cancelAnimation(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}zoomIn({factor:e=oo,...r}={}){return this.animate({ratio:this.ratio/e},r)}zoomOut({factor:e=oo,...r}={}){return this.animate({ratio:this.ratio*e},r)}reset(e){return this.animate(oa,e)}runAnimation(e,r,i){let n=Bt(r.easing),o=Date.now(),s=this.getState(),l=this.validateState(e),d=()=>{if(!this.enabled){this.cancelAnimation();return}let c=r.duration>0?(Date.now()-o)/r.duration:1;if(c>=1){this.nextFrame=null,this.setState(l),this.resolveAnimation(),this.emitAnimationEnd(!0);return}let g=n(c);this.setState({x:s.x+(l.x-s.x)*g,y:s.y+(l.y-s.y)*g,angle:s.angle+(l.angle-s.angle)*g,ratio:s.ratio+(l.ratio-s.ratio)*g}),this.nextFrame=requestAnimationFrame(d)};this.cancelAnimation(),this.currentAnimationFrom=s,this.currentAnimationTo=l,this.animationCallback=i,this.emit("animationStart",{from:s,to:l}),d()}resolveAnimation(){let e=this.animationCallback;this.animationCallback=null,e&&e()}emitAnimationEnd(e){let r=this.currentAnimationFrom,i=this.currentAnimationTo;!r||!i||(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit("animationEnd",{from:r,to:i,completed:e}))}};var or={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:"nodeLabels",enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"positions",autoRescale:!0,autoRescaleContent:"positions",enableNodeDrag:!1,getDraggedNodes:a=>[a],dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:"graph",sharedGestureWheelMessage:"Use Ctrl + scroll to zoom the graph",sharedGestureAppleWheelMessage:"Use \u2318 + scroll to zoom the graph",sharedGestureTouchMessage:"Use two fingers to move the graph",allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function sa(a){if(typeof a.labelDensity!="number"||a.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");let{minCameraRatio:t,maxCameraRatio:e}=a;if(typeof t=="number"&&typeof e=="number"&&e<t)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function so(a){return Tn({},or,a)}function ee(a,t){let e=t.getBoundingClientRect();return{x:a.clientX-e.left,y:a.clientY-e.top}}function xe(a,t){let e={...ee(a,t),sigmaDefaultPrevented:!1,preventSigmaDefault(){e.sigmaDefaultPrevented=!0},original:a};return e}function Ve(a){let t="x"in a?a:{...a.touches[0]||a.previousTouches[0],original:a.original,sigmaDefaultPrevented:a.sigmaDefaultPrevented,preventSigmaDefault:()=>{a.sigmaDefaultPrevented=!0,t.sigmaDefaultPrevented=!0}};return t}function lo(a,t){let e=xe(a,t);return e.delta=Si(a),e}var Ud=2;function sr(a){let t=[];for(let e=0,r=Math.min(a.length,Ud);e<r;e++)t.push(a[e]);return t}function Et(a,t,e){let r={touches:sr(a.touches).map(i=>ee(i,e)),previousTouches:t.map(i=>ee(i,e)),sigmaDefaultPrevented:!1,preventSigmaDefault(){r.sigmaDefaultPrevented=!0},original:a};return r}function Si(a){if(typeof a.deltaY<"u")return a.deltaY*-3/360;if(typeof a.detail<"u")return a.detail/-9;throw new Error("Captor: could not extract delta from event.")}var Je=class extends $e{constructor(t,e){super(),this.container=t,this.renderer=e}};var $d=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","enableCameraMouseRotation","gestureTarget","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],Vd=$d.reduce((a,t)=>({...a,[t]:or[t]}),{});function lr(a){return a instanceof PointerEvent&&a.pointerType==="touch"}var Tt=class extends Je{constructor(e,r){super(e,r);this.enabled=!0;this.draggedEvents=0;this.downStartTime=null;this.lastMouseX=null;this.lastMouseY=null;this.isMouseDown=!1;this.isMoving=!1;this.isPanningStage=!1;this.movingTimeout=null;this.startCameraState=null;this.clicks=0;this.doubleClickTimeout=null;this.isRightMouseDown=!1;this.startRotationAngle=null;this.startCameraAngle=null;this.currentWheelDirection=0;this.lastWheelAnimationId=0;this.settings=Vd;this.handleRightClick=this.handleRightClick.bind(this),this.handleDown=this.handleDown.bind(this),this.handleUp=this.handleUp.bind(this),this.handleMove=this.handleMove.bind(this),this.handleWheel=this.handleWheel.bind(this),this.handleLeave=this.handleLeave.bind(this),this.handleEnter=this.handleEnter.bind(this),e.addEventListener("contextmenu",this.handleRightClick,{capture:!1}),e.addEventListener("pointerdown",this.handleDown,{capture:!1}),e.addEventListener("wheel",this.handleWheel,{capture:!1,passive:!1}),e.addEventListener("pointerleave",this.handleLeave,{capture:!1}),e.addEventListener("pointerenter",this.handleEnter,{capture:!1}),document.addEventListener("pointermove",this.handleMove,{capture:!1}),document.addEventListener("pointerup",this.handleUp,{capture:!1})}kill(){let e=this.container;e.removeEventListener("contextmenu",this.handleRightClick),e.removeEventListener("pointerdown",this.handleDown),e.removeEventListener("wheel",this.handleWheel),e.removeEventListener("pointerleave",this.handleLeave),e.removeEventListener("pointerenter",this.handleEnter),document.removeEventListener("pointermove",this.handleMove),document.removeEventListener("pointerup",this.handleUp)}handleClick(e){if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(e);setTimeout(()=>{this.clicks=0,this.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",xe(e,this.container))}}handleRightClick(e){this.enabled&&(this.settings.enableCameraMouseRotation&&e.preventDefault(),this.emit("rightClick",xe(e,this.container)))}handleDoubleClick(e){if(!this.enabled)return;e.preventDefault(),e.stopPropagation();let r=xe(e,this.container);if(this.emit("doubleClick",r),r.sigmaDefaultPrevented)return;let i=this.renderer.getCamera(),n=i.getBoundedRatio(i.getState().ratio/this.settings.doubleClickZoomingRatio);i.animate(this.renderer.getViewportZoomedState(ee(e,this.container),n),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}handleDown(e){if(!(!this.enabled||lr(e))){if(e.button===0){this.startCameraState=this.renderer.getCamera().getState();let{x:r,y:i}=ee(e,this.container);this.lastMouseX=r,this.lastMouseY=i,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(e.button===2&&this.settings.enableCameraMouseRotation){let{x:r,y:i}=ee(e,this.container),n=this.container.offsetWidth/2,o=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(i-o,r-n),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit("mousedown",xe(e,this.container))}}handleUp(e){if(!this.enabled||lr(e)||!this.isMouseDown&&!this.isRightMouseDown)return;if(this.isRightMouseDown){this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit("mouseup",xe(e,this.container));return}let r=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);let{x:i,y:n}=ee(e,this.container),o=r.getState(),s=r.getPreviousState();this.isMoving?r.animate({x:o.x+this.settings.inertiaRatio*(o.x-s.x),y:o.y+this.settings.inertiaRatio*(o.y-s.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==i||this.lastMouseY!==n)&&r.setState({x:o.x,y:o.y}),this.isMoving=!1,setTimeout(()=>{let l=this.draggedEvents>0;this.draggedEvents=0;let d=this.renderer.getSetting("hideEdgesOnMove")||this.renderer.getSetting("hideLabelsOnMove");l&&d&&this.renderer.refresh()},0),this.emit("mouseup",xe(e,this.container)),(e.target===this.container||e.composedPath()[0]===this.container)&&this.handleClick(e)}handleMove(e){if(!this.enabled||lr(e))return;let r=xe(e,this.container);if(this.emit("mousemovebody",r),(e.target===this.container||e.composedPath()[0]===this.container)&&this.emit("mousemove",r),this.isMouseDown&&this.draggedEvents++,!r.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(()=>{this.movingTimeout=null,this.isMoving=!1},this.settings.dragTimeout);let i=this.renderer.getCamera(),{x:n,y:o}=ee(e,this.container),s=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),l=this.renderer.viewportToFramedGraph({x:n,y:o}),d=s.x-l.x,c=s.y-l.y,g=i.getState(),u=g.x+d,f=g.y+c;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),i.setState({x:u,y:f}),this.lastMouseX=n,this.lastMouseY=o,e.preventDefault(),e.stopPropagation()}if(this.isRightMouseDown){let{x:i,y:n}=ee(e,this.container),o=this.container.offsetWidth/2,s=this.container.offsetHeight/2,d=Math.atan2(n-s,i-o)-this.startRotationAngle;this.renderer.getCamera().setState({angle:this.startCameraAngle+d}),e.preventDefault(),e.stopPropagation()}}}handleLeave(e){lr(e)||this.emit("mouseleave",xe(e,this.container))}handleEnter(e){lr(e)||this.emit("mouseenter",xe(e,this.container))}handleWheel(e){let r=this.renderer.getCamera();if(!this.enabled||!r.enabledZooming)return;let i=lo(e,this.container);if(this.emit("wheel",i),i.sigmaDefaultPrevented)return;let{gestureTarget:n}=this.settings;if(n==="page")return;if(n==="shared"&&!e.ctrlKey&&!e.metaKey){this.renderer._showGestureHint("wheel");return}let o=Si(e);if(!o)return;e.preventDefault(),e.stopPropagation();let s=r.getState().ratio,l=o>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,d=r.getBoundedRatio(s*l),c=o>0?1:-1,g=Date.now();if(s===d||this.currentWheelDirection===c&&this.lastWheelTriggerTime&&g-this.lastWheelTriggerTime<this.settings.zoomDuration/5)return;let u=++this.lastWheelAnimationId;r.animate(this.renderer.getViewportZoomedState(ee(e,this.container),d),{easing:"quadraticOut",duration:this.settings.zoomDuration}).then(()=>{this.lastWheelAnimationId===u&&(this.currentWheelDirection=0)}),this.currentWheelDirection=c,this.lastWheelTriggerTime=g}setSettings(e){this.settings=e}};var Hd=["dragTimeout","gestureTarget","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],Xd=Hd.reduce((a,t)=>({...a,[t]:or[t]}),{}),_t=class extends Je{constructor(e,r){super(e,r);this.enabled=!0;this.isMoving=!1;this.hasMoved=!1;this.isPanningStage=!1;this.isZoomingStage=!1;this.touchMode=0;this.startTouchesPositions=[];this.lastTouches=[];this.lastTap=null;this.settings=Xd;this.handleStart=this.handleStart.bind(this),this.handleLeave=this.handleLeave.bind(this),this.handleMove=this.handleMove.bind(this),e.addEventListener("touchstart",this.handleStart,{capture:!1}),e.addEventListener("touchcancel",this.handleLeave,{capture:!1}),document.addEventListener("touchend",this.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",this.handleMove,{capture:!1,passive:!1})}kill(){let e=this.container;e.removeEventListener("touchstart",this.handleStart),e.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}getDimensions(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}doesCapture(e){let{gestureTarget:r}=this.settings;return r==="graph"?!0:r==="page"?!1:e>=2}syncStageFlags(){let e=this.touchMode===1&&this.hasMoved,r=this.touchMode===2;e!==this.isPanningStage&&(this.isPanningStage=e,this.renderer._setPanning(e)),r!==this.isZoomingStage&&(this.isZoomingStage=r,this.renderer._setZooming(r))}handleStart(e){if(!this.enabled)return;let r=sr(e.touches);if(this.touchMode=r.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=r.map(i=>ee(i,this.container)),this.touchMode===2){let[{x:i,y:n},{x:o,y:s}]=this.startTouchesPositions;this.startTouchesAngle=Math.atan2(s-n,o-i),this.startTouchesDistance=Math.sqrt(Math.pow(o-i,2)+Math.pow(s-n,2))}this.syncStageFlags(),this.emit("touchdown",Et(e,this.lastTouches,this.container)),this.lastTouches=r,this.lastTouchesPositions=this.startTouchesPositions,e.cancelable&&(this.doesCapture(e.touches.length)||this.renderer._hasNodeDrag())&&e.preventDefault()}handleLeave(e){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(e.cancelable&&this.doesCapture(this.touchMode)&&e.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(e.touches.length===1){this.handleStart(e);break}case 1:if(this.isMoving){let r=this.renderer.getCamera(),i=r.getState(),n=r.getPreviousState();r.animate({x:i.x+this.settings.inertiaRatio*(i.x-n.x),y:i.y+this.settings.inertiaRatio*(i.y-n.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.syncStageFlags(),this.emit("touchup",Et(e,this.lastTouches,this.container)),!e.touches.length){let r=ee(this.lastTouches[0],this.container),i=this.startTouchesPositions[0],n=(r.x-i.x)**2+(r.y-i.y)**2;if(!e.touches.length&&n<this.settings.tapMoveTolerance**2)if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){let o=Et(e,this.lastTouches,this.container);if(this.emit("doubletap",o),this.lastTap=null,!o.sigmaDefaultPrevented&&this.settings.gestureTarget!=="page"){let s=this.renderer.getCamera(),l=s.getBoundedRatio(s.getState().ratio/this.settings.doubleClickZoomingRatio);s.animate(this.renderer.getViewportZoomedState(r,l),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{let o=Et(e,this.lastTouches,this.container);this.emit("tap",o),this.lastTap={time:Date.now(),position:o.touches[0]||o.previousTouches[0]}}}this.lastTouches=sr(e.touches),this.startTouchesPositions=[]}}handleMove(e){if(!this.enabled||!this.startTouchesPositions.length)return;let r=this.doesCapture(e.touches.length);r&&e.preventDefault();let i=sr(e.touches),n=i.map(g=>ee(g,this.container)),o=this.lastTouches;this.lastTouches=i,this.lastTouchesPositions=n;let s=Et(e,o,this.container);if(this.emit("touchmove",s),s.sigmaDefaultPrevented||(this.hasMoved||(this.hasMoved=n.some((g,u)=>{let f=this.startTouchesPositions[u];return f&&(g.x!==f.x||g.y!==f.y)})),!this.hasMoved))return;if(!r){this.settings.gestureTarget==="shared"&&this.renderer._showGestureHint("touch");return}this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(()=>{this.isMoving=!1},this.settings.dragTimeout);let l=this.renderer.getCamera(),d=this.startCameraState,c=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{let{x:g,y:u}=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),{x:f,y:h}=this.renderer.viewportToFramedGraph(n[0]);l.setState({x:d.x+g-f,y:d.y+u-h});break}case 2:{let g={x:.5,y:.5,angle:0,ratio:1},{x:u,y:f}=n[0],{x:h,y:m}=n[1],x=Math.atan2(m-f,h-u)-this.startTouchesAngle,b=Math.hypot(m-f,h-u)/this.startTouchesDistance,p=l.getBoundedRatio(d.ratio/b);g.ratio=p,g.angle=d.angle+x;let y=this.getDimensions(),S=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:d}),v=Math.min(y.width,y.height)-2*c,E=v/y.width,_=v/y.height,A=p/v,R=u-v/2/E,T=f-v/2/_;({x:R,y:T}=Ar({x:R,y:T},g.angle)),g.x=S.x-R*A,g.y=S.y+T*A,l.setState(g);break}}}setSettings(e){this.settings=e}};var la=class{constructor(t,e,r,i){this.graph=t;this.viewportToGraph=e;this.setNodesState=r;this.emit=i;this.pendingNode=null;this.session=null}start(t,e,r,i,n){let o=r(t),s=!1;if(this.emit("nodeDragStart",{node:t,allDraggedNodes:o,event:e,preventSigmaDefault(){s=!0}}),s)return!1;let l=new Map;for(let d of o)l.set(d,{x:this.graph.getNodeAttribute(d,i),y:this.graph.getNodeAttribute(d,n)});return this.session={node:t,allNodes:o,startPosition:this.viewportToGraph(e),startNodePositions:l,xAttr:i,yAttr:n},this.setNodesState(o,{isDragged:!0}),!0}applyMove(t,e){let{allNodes:r,startNodePositions:i,startPosition:n,xAttr:o,yAttr:s}=this.session,l=this.viewportToGraph(t),d={x:l.x-n.x,y:l.y-n.y};for(let c of r){let g=i.get(c);if(!g||!this.graph.hasNode(c))continue;let u={x:g.x+d.x,y:g.y+d.y};e?this.graph.mergeNodeAttributes(c,e(u,c)):(this.graph.setNodeAttribute(c,o,u.x),this.graph.setNodeAttribute(c,s,u.y))}}end(){if(this.pendingNode=null,!this.session)return null;let{node:t,allNodes:e}=this.session;return this.setNodesState(e,{isDragged:!1}),this.session=null,{node:t,allNodes:e}}removeNode(t){t===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===t?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(t)&&(this.session.allNodes=this.session.allNodes.filter(e=>e!==t),this.session.startNodePositions.delete(t)))}clear(){this.pendingNode=null,this.session=null}};var da=class{constructor(t,e){this.graph=t;this.onGroupChanged=e;this.groups=new Map;this.edgeToGroupKey=new Map}getGroupKey(t){let e=this.graph.source(t),r=this.graph.target(t);return e<r?`${e}\0${r}`:`${r}\0${e}`}sortGroup(t,e){let r=e.split("\0")[0];t.sort((i,n)=>{let o=this.graph.source(i)===r||!this.graph.isDirected(i)?0:1,s=this.graph.source(n)===r||!this.graph.isDirected(n)?0:1;return o-s})}register(t){let e=this.getGroupKey(t),r=this.groups.get(e);r||(r=[],this.groups.set(e,r)),r.includes(t)||r.push(t),this.edgeToGroupKey.set(t,e),this.sortGroup(r,e),this.onGroupChanged(r,r.length)}unregister(t){let e=this.edgeToGroupKey.get(t);if(!e)return;this.edgeToGroupKey.delete(t);let r=this.groups.get(e);if(!r)return;let i=r.indexOf(t);i!==-1&&r.splice(i,1),r.length===0?this.groups.delete(e):this.onGroupChanged(r,r.length)}getGroup(t){let e=this.edgeToGroupKey.get(t);return e?this.groups.get(e)??[]:[]}getSiblings(t){return this.getGroup(t).filter(e=>e!==t)}rebuild(){this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(t=>{let e=this.getGroupKey(t),r=this.groups.get(e);r||(r=[],this.groups.set(e,r)),r.push(t),this.edgeToGroupKey.set(t,e)});for(let[t,e]of this.groups)this.sortGroup(e,t),this.onGroupChanged(e,e.length)}clear(){this.groups.clear(),this.edgeToGroupKey.clear()}};function vi(a,t){if(a===!1||a==="extend"||a==="separate")return a;let e=a[t];return e!==void 0?e:a.default??!1}function Ei(a){return a===!1?!1:a==="extend"||a==="separate"?!0:Object.values(a).some(t=>t==="extend"||t==="separate")}function Ti(a){return a==="separate"?!0:a===!1||a==="extend"?!1:a.default==="separate"?!0:Object.values(a).includes("separate")}var K={node:{parent:null,eventSuffix:"Node",payloadKey:"node",isEnabled:()=>!0,writesPickingThisFrame:()=>!0,setHover:(a,t,e)=>a.setNodeState(t,{isHovered:e}),getCursor:(a,t)=>a.nodeDataCache[t]?.cursor,isHitValid:(a,t)=>a.nodeDataCache[t]?.visibility!=="hidden"},edge:{parent:null,eventSuffix:"Edge",payloadKey:"edge",isEnabled:a=>!!a.settings.enableEdgeEvents,writesPickingThisFrame:a=>!!a.settings.enableEdgeEvents,setHover:(a,t,e)=>a.setEdgeState(t,{isHovered:e}),getCursor:(a,t)=>a.edgeDataCache[t]?.cursor},nodeLabel:{parent:"node",eventSuffix:"NodeLabel",payloadKey:"node",isEnabled:a=>Ti(a.settings.nodeLabelEvents),writesPickingThisFrame:a=>Ei(a.settings.nodeLabelEvents),setHover:(a,t,e)=>a.setNodeState(t,{isLabelHovered:e}),getCursor:(a,t)=>a.nodeDataCache[t]?.labelCursor,resolveForVerb:(a,t,e)=>{let r=vi(e.settings.nodeLabelEvents,t);return r===!1?null:r==="extend"?{kind:"node",key:a.key}:a}},edgeLabel:{parent:"edge",eventSuffix:"EdgeLabel",payloadKey:"edge",isEnabled:a=>Ti(a.settings.edgeLabelEvents),writesPickingThisFrame:a=>Ei(a.settings.edgeLabelEvents),setHover:(a,t,e)=>a.setEdgeState(t,{isLabelHovered:e}),getCursor:(a,t)=>a.edgeDataCache[t]?.labelCursor,resolveForVerb:(a,t,e)=>{let r=vi(e.settings.edgeLabelEvents,t);return r===!1?null:r==="extend"?{kind:"edge",key:a.key}:a}}},et=["node","edge","nodeLabel","edgeLabel"];function uo(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function Fe(a,t,e){return a.idsByKind[t].get(e)??0}function ua(a,t){for(let r of et)if(r===t||K[r].parent===t){for(let i of a.idsByKind[r].values())a.lookup[i]=null;a.idsByKind[r]=new Map}let e=1;for(let r of et){if(r===t)break;e+=a.idsByKind[r].size}a.nextId=e}function _i(a,t,e){let r=a.nextId++;return a.idsByKind[t].set(e,r),a.lookup[r]={kind:t,key:e},r}function co(a,t){for(let e of et)if(K[e].parent!==null){for(let r of a.idsByKind[e].values())a.lookup[r]=null;a.idsByKind[e]=new Map}a.nextId=1;for(let e of et)if(K[e].parent===null)for(let r of a.idsByKind[e].values())r>=a.nextId&&(a.nextId=r+1);for(let e of et){let r=K[e];if(!(r.parent===null||!r.isEnabled(t)))for(let i of a.idsByKind[r.parent].keys())a.idsByKind[e].set(i,a.nextId),a.lookup[a.nextId]={kind:e,key:i},a.nextId++}}function ho(a,t){for(let e of et){let r=a[e],i=t[e];if(r!==i){if(r.size!==i.size)return!1;for(let[n,o]of r)if(i.get(n)!==o)return!1}}return!0}function Ai(a,t,e){K[t.kind].setHover(a,t.key,e)}function go(a,t){return K[t.kind].getCursor(a,t.key)}function At(a,t){return`${t}${K[a].eventSuffix}`}function Dt(a,t){return{...t,[K[a.kind].payloadKey]:a.key}}function fo(a,t,e){let r=K[t.kind].resolveForVerb;return r?r(t,e,a):t}function po(a,t){let e=K[t.kind].isHitValid;return e?e(a,t.key):!0}function ca(a){return et.filter(t=>t===a||K[t].parent===a)}function mo(a,t,e){return t&&(t=fo(a,t,e)),t&&!po(a,t)&&(t=null),t}function Di(a,t,e){let r=e==="wheel"?a.stateManager.hovered:a.getHitAtPosition(t);return mo(a,r,e)}function jd(a,t){return!a||!t?a===t:a.kind===t.kind&&a.key===t.key}function Li(a,t,e){let r={event:e,preventSigmaDefault:()=>e.preventSigmaDefault()},i=a.dragManager.session,n=i?{kind:"node",key:i.node}:mo(a,t,"enter"),{stateManager:o}=a,s=o.hovered;jd(s,n)||(s&&(Ai(a,s,!1),a.emit(At(s.kind,"leave"),Dt(s,r))),o.setHovered(n),n&&(Ai(a,n,!0),a.emit(At(n.kind,"enter"),Dt(n,r))),a.updateContainerCursor())}function bo(a,t,e,r){r.handleResize=()=>a.scheduleRefresh(),window.addEventListener("resize",r.handleResize),r.handleMove=n=>{a.hoverResolver.pointerMoved(Ve(n))},r.handleMoveBody=n=>{let o=Ve(n),{dragManager:s}=a;if(s.pendingNode&&!s.session){let{xAttribute:l,yAttribute:d}=a.nodeStyleAnalysis,{settings:c}=a;s.start(s.pendingNode,o,c.getDraggedNodes,l||"x",d||"y"),s.pendingNode=null}s.session&&(s.applyMove(o,a.settings.dragPositionToAttributes),a.emit("nodeDrag",{node:s.session.node,allDraggedNodes:s.session.allNodes,event:o}),o.preventSigmaDefault()),a.emit("moveBody",{event:o,preventSigmaDefault:()=>o.preventSigmaDefault()})},r.handleLeave=n=>{let o=Ve(n),s={event:o,preventSigmaDefault:()=>o.preventSigmaDefault()};a.hoverResolver.pointerLeft(),Li(a,null,o),a.emit("leaveStage",s)},r.handleEnter=n=>{let o=Ve(n);a.emit("enterStage",{event:o,preventSigmaDefault:()=>o.preventSigmaDefault()})};let i=n=>o=>{let s=Ve(o),l={event:s,preventSigmaDefault:()=>s.preventSigmaDefault()},d=Di(a,s,n);if(d){a.emit(At(d.kind,n),Dt(d,l));return}a.emit(`${n}Stage`,l)};r.handleClick=i("click"),r.handleRightClick=i("rightClick"),r.handleDoubleClick=i("doubleClick"),r.handleWheel=i("wheel"),r.handleDown=n=>{let o=Ve(n),s={event:o,preventSigmaDefault:()=>o.preventSigmaDefault()},l=Di(a,o,"down");if(l){l.kind==="node"&&a.settings.enableNodeDrag&&(a.dragManager.pendingNode=l.key),a.emit(At(l.kind,"down"),Dt(l,s));return}a.emit("downStage",s)},r.handleUp=n=>{let o=Ve(n),s={event:o,preventSigmaDefault:()=>o.preventSigmaDefault()},l=a.dragManager.end();l&&a.emit("nodeDragEnd",{node:l.node,allDraggedNodes:l.allNodes,...s});let d=Di(a,o,"up");if(d){a.emit(At(d.kind,"up"),Dt(d,s));return}a.emit("upStage",s)},t.on("mousemove",r.handleMove),t.on("mousemovebody",r.handleMoveBody),t.on("click",r.handleClick),t.on("rightClick",r.handleRightClick),t.on("doubleClick",r.handleDoubleClick),t.on("wheel",r.handleWheel),t.on("mousedown",r.handleDown),t.on("mouseup",r.handleUp),t.on("mouseleave",r.handleLeave),t.on("mouseenter",r.handleEnter),e.on("touchdown",r.handleDown),e.on("touchdown",r.handleMove),e.on("touchup",r.handleUp),e.on("touchmove",r.handleMove),e.on("tap",r.handleClick),e.on("doubletap",r.handleDoubleClick),e.on("touchmove",r.handleMoveBody)}function xo(a,t){let{graph:e}=a,r=new Set(["x","y","zIndex","type"]);t.eachNodeAttributesUpdatedGraphUpdate=i=>{let n=i.hints?.attributes,o=!n||n.some(s=>r.has(s));a.refresh({partialGraph:{nodes:e.nodes()},skipIndexation:!o,schedule:!0})},t.eachEdgeAttributesUpdatedGraphUpdate=i=>{let n=i.hints?.attributes,o=n&&["zIndex","type"].some(s=>n?.includes(s));a.refresh({partialGraph:{edges:e.edges()},skipIndexation:!o,schedule:!0})},t.addNodeGraphUpdate=i=>{a.addNode(i.key),a.refresh({partialGraph:{nodes:[i.key]},skipIndexation:!1,schedule:!0})},t.updateNodeGraphUpdate=i=>{a.refresh({partialGraph:{nodes:[i.key]},skipIndexation:!1,schedule:!0})},t.dropNodeGraphUpdate=i=>{a.removeNode(i.key),a.refresh({schedule:!0})},t.addEdgeGraphUpdate=i=>{let n=i.key;a.edgeGroups.register(n),a.addEdge(n);let o=a.edgeGroups.getSiblings(n);for(let s of o)a.addEdge(s);a.refresh({partialGraph:{edges:[n,...o]},schedule:!0})},t.updateEdgeGraphUpdate=i=>{a.refresh({partialGraph:{edges:[i.key]},skipIndexation:!1,schedule:!0})},t.dropEdgeGraphUpdate=i=>{let n=i.key,o=a.edgeGroups.getSiblings(n);a.edgeGroups.unregister(n),a.removeEdge(n);for(let s of o)a.addEdge(s);a.refresh({schedule:!0})},t.clearEdgesGraphUpdate=()=>{a.clearEdgeState(),a.clearEdgeIndices(),a.refresh({schedule:!0})},t.clearGraphUpdate=()=>{a.clearEdgeState(),a.clearNodeState(),a.clearEdgeIndices(),a.clearNodeIndices(),a.refresh({schedule:!0})},e.on("nodeAdded",t.addNodeGraphUpdate),e.on("nodeDropped",t.dropNodeGraphUpdate),e.on("nodeAttributesUpdated",t.updateNodeGraphUpdate),e.on("eachNodeAttributesUpdated",t.eachNodeAttributesUpdatedGraphUpdate),e.on("edgeAdded",t.addEdgeGraphUpdate),e.on("edgeDropped",t.dropEdgeGraphUpdate),e.on("edgeAttributesUpdated",t.updateEdgeGraphUpdate),e.on("eachEdgeAttributesUpdated",t.eachEdgeAttributesUpdatedGraphUpdate),e.on("edgesCleared",t.clearEdgesGraphUpdate),e.on("cleared",t.clearGraphUpdate)}function yo(a,t){a.removeListener("nodeAdded",t.addNodeGraphUpdate),a.removeListener("nodeDropped",t.dropNodeGraphUpdate),a.removeListener("nodeAttributesUpdated",t.updateNodeGraphUpdate),a.removeListener("eachNodeAttributesUpdated",t.eachNodeAttributesUpdatedGraphUpdate),a.removeListener("edgeAdded",t.addEdgeGraphUpdate),a.removeListener("edgeDropped",t.dropEdgeGraphUpdate),a.removeListener("edgeAttributesUpdated",t.updateEdgeGraphUpdate),a.removeListener("eachEdgeAttributesUpdated",t.eachEdgeAttributesUpdatedGraphUpdate),a.removeListener("edgesCleared",t.clearEdgesGraphUpdate),a.removeListener("cleared",t.clearGraphUpdate)}var Kd={x:.5,y:.5,angle:0,ratio:1},qd=8,Yd=.001;function vo(a){let{coords:t,nodeData:e,dimensions:r,stagePadding:i,zoomToSizeRatioFunction:n,itemSizesReference:o,fitLabels:s,nodeLabelBox:l}=a,d=Object.keys(t);if(!d.length)return a.extent;let c=n(1)||1,g=o==="positions",{width:u,height:f}=r,h=a.extent;for(let m=0;m<qd;m++){let x=$t(h),b={width:h.x[1]-h.x[0]||1,height:h.y[1]-h.y[0]||1},p=ye(Kd,r,b,i),y=So(p,x({x:0,y:0}),u,f),S=So(p,x({x:1,y:0}),u,f),v=Math.hypot(S.x-y.x,S.y-y.y)||1,E=1/0,_=-1/0,A=1/0,R=-1/0;for(let w=0,G=d.length;w<G;w++){let L=d[w],k=e[L],M=k.size/c*(g?v:1),I=-M,z=M,V=-M,q=M;if(s){let Te=l(k,M);Te&&(Te.minX<I&&(I=Te.minX),Te.maxX>z&&(z=Te.maxX),Te.minY<V&&(V=Te.minY),Te.maxY>q&&(q=Te.maxY))}let{x:wi,y:Gi}=t[L];E=Math.min(E,wi+I/v),_=Math.max(_,wi+z/v),A=Math.min(A,Gi-q/v),R=Math.max(R,Gi-V/v)}let T={x:[E,_],y:[A,R]},N=Math.max(T.x[1]-T.x[0],T.y[1]-T.y[0])||1,P=Math.max(Math.abs(T.x[0]-h.x[0]),Math.abs(T.x[1]-h.x[1]),Math.abs(T.y[0]-h.y[0]),Math.abs(T.y[1]-h.y[1]));if(h=T,P/N<Yd)break}return h}function So(a,t,e,r){let i=Re(a,t);return{x:(1+i.x)*e/2,y:(1-i.y)*r/2}}var Zd=typeof navigator<"u"&&/Mac|iP(hone|ad|od)/.test(navigator.platform),Qd=1500,Jd=`.sigma-gesture-hint {
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
}`;function Eo(a){let t=Ze("style");t.textContent=a,document.head.appendChild(t);let e=(t.sheet?.cssRules.length??0)>0;return t.remove(),e}var tt=null;function eu(){return tt===null&&(tt=Jd,Eo("@scope {}")&&(tt=`@scope {
${tt}
}`),Eo("@layer sigma-gesture-hint {}")&&(tt=`@layer sigma-gesture-hint {
${tt}
}`)),tt}var dr=class{constructor(t){this.hideTimeout=null;this.styleElement=Ze("style"),this.styleElement.textContent=eu(),t.appendChild(this.styleElement),this.element=Ze("div",{opacity:"0"},{class:"sigma-gesture-hint"}),t.appendChild(this.element)}show(t,e){let r=t==="touch"?e.sharedGestureTouchMessage:Zd?e.sharedGestureAppleWheelMessage:e.sharedGestureWheelMessage;r&&(this.element.textContent=r,this.element.style.opacity="1",typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>{this.hideTimeout=null,this.element.style.opacity="0"},Qd))}kill(){typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}};var ha=class{constructor(t){this.readBuffer=null;this.fence=null;this.result=new Uint8Array(4);this.generation=0;this.readGeneration=0;this.lastEvent=null;this.active=!1;this.dirty=!1;this.rafId=null;this.killed=!1;this.options=t}pointerMoved(t){this.lastEvent=t,this.active=!0,!this.options.isRenderPending()&&this.request()}pointerLeft(){this.active=!1,this.dirty=!1}frameRendered(){this.request()}invalidate(){this.generation++}request(){if(!(this.killed||!this.active||!this.lastEvent)){if(this.fence){this.dirty=!0;return}this.startRead()}}startRead(){let{gl:t,getFrameBuffer:e,getPixelRatio:r,getDownSizingRatio:i}=this.options;this.readGeneration=this.generation;let n=this.lastEvent,[o,s]=Dr(t,n.x,n.y,r(),i());this.readBuffer||(this.readBuffer=t.createBuffer()),t.bindFramebuffer(t.FRAMEBUFFER,e()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(o,s,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(n)}schedulePoll(t){this.rafId=requestAnimationFrame(()=>{this.rafId=null,this.poll(t)})}poll(t){let{gl:e,onIndex:r}=this.options;if(this.killed||!this.fence)return;let i=e.clientWaitSync(this.fence,0,0);if(i===e.TIMEOUT_EXPIRED){this.schedulePoll(t);return}if(e.deleteSync(this.fence),this.fence=null,i!==e.WAIT_FAILED&&this.readGeneration===this.generation){e.bindBuffer(e.PIXEL_PACK_BUFFER,this.readBuffer),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,this.result),e.bindBuffer(e.PIXEL_PACK_BUFFER,null);let[n,o,s,l]=this.result;this.active&&r(Pr(n,o,s,l),t)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}reset(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}kill(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;let{gl:t}=this.options;this.fence&&t.deleteSync(this.fence),this.fence=null,this.readBuffer&&t.deleteBuffer(this.readBuffer),this.readBuffer=null}};var ga=class{constructor(t,e){this.key=t,this.size=e}static compare(t,e){return t.size>e.size?-1:t.size<e.size||t.key>e.key?1:-1}},rt=class{constructor(){this.width=0;this.height=0;this.cellSize=0;this.columns=0;this.rows=0;this.cells={}}resizeAndClear(t,e){this.width=t.width,this.height=t.height,this.cellSize=e,this.columns=Math.ceil(t.width/e),this.rows=Math.ceil(t.height/e),this.cells={}}getIndex(t){let e=Math.floor(t.x/this.cellSize);return Math.floor(t.y/this.cellSize)*this.columns+e}add(t,e,r){let i=new ga(t,e),n=this.getIndex(r),o=this.cells[n];o||(o=[],this.cells[n]=o),o.push(i)}organize(){for(let t in this.cells)this.cells[t].sort(ga.compare)}getLabelsToDisplay(t,e,r){let i=this.cellSize*this.cellSize,o=i/t/t*e/i,s=Math.ceil(o),l=[];if(r){let d=Math.max(0,Math.floor(r.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(r.x2/this.cellSize)),g=Math.max(0,Math.floor(r.y1/this.cellSize)),u=Math.min(this.rows-1,Math.floor(r.y2/this.cellSize));for(let f=g;f<=u;f++)for(let h=d;h<=c;h++){let m=f*this.columns+h,x=this.cells[m];if(x)for(let b=0;b<Math.min(s,x.length);b++)l.push(x[b].key)}}else for(let d in this.cells){let c=this.cells[d];for(let g=0;g<Math.min(s,c.length);g++)l.push(c[g].key)}return l}};function To(a){let{graph:t,hoveredNode:e,highlightedNodes:r,displayedNodeLabels:i}=a,n=new Set,o=new Set(r);e&&o.add(e);for(let s of o)t.hasNode(s)&&t.forEachEdge(s,l=>{n.add(l)});for(let s of i)o.has(s)||t.forEachEdge(s,(l,d,c,g)=>{let u=c===s?g:c;i.has(u)&&n.add(l)});return Array.from(n)}var Lt=150,Rt=50,tu={both:0,node:1,label:2},ru={over:0,above:1,below:2,auto:3},_o=12,au=3,fa=class{constructor(t){this.internals=t;this.labelGrid=new rt;this.edgeAnchorGrid=new rt;this.displayedNodeLabels=new Set;this.displayedEdgeLabels=new Set;this.edgeLabelCandidates=[];this.renderedNodeLabels=new Set;this.labelSizeCache=new Map;this.framePassPoints=new Float32Array(0);this.labelsDirty=!0}resetFrame(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}clearEdgeLabels(){this.displayedEdgeLabels=new Set}resetLabelGrid(){this.labelGrid=new rt,this.edgeAnchorGrid=new rt}processWebGLLabels(t){let{labelProgram:e,primitives:r,nodeDataCache:i}=this.internals,n=r?.nodes?.label?.font?.family||"sans-serif",o=new Map;for(let s=0,l=t.length;s<l;s++){let d=t[s],c=i[d];if(c.visibility==="hidden"||!c.label)continue;let g=c.labelFont||n,u=o.get(g);u?u.push(c.label):o.set(g,[c.label])}for(let[s,l]of o){let{family:d,weight:c,style:g}=wr(s),u=e.registerFont(d,c,g);e.ensureGlyphsReady(l,u)}}measureNodeLabel(t){if(!t.label)return{width:0,height:0,textHeight:0};let{labelProgram:e,primitives:r}=this.internals,i=t.labelSize??14,n=t.labelFont||r?.nodes?.label?.font?.family||"sans-serif",o=`${t.label}|${i}|${n}`;if(this.labelSizeCache.has(o))return this.labelSizeCache.get(o);let{family:s,weight:l,style:d}=wr(n),c=e.registerFont(s,l,d),g=e.measureLabel(t.label,i,c);return this.labelSizeCache.set(o,g),g}nodeLabelBox(t,e){if(t.visibility==="hidden"||t.labelVisibility==="hidden")return null;let{width:r,height:i,textHeight:n}=this.measureNodeLabel(t);if(!r)return null;let o=this.internals.primitives?.nodes?.label?.margin??De,s=e+o,l=t.labelBackgroundColor?t.labelBackgroundPadding??Wa:0,d=r/2,c=i/2,g=d+l,u=c+l,f=n/2,h=0,m=0;switch(t.labelPosition??"right"){case"left":h=-(s+d);break;case"above":m=-(s+f);break;case"below":m=s+f;break;case"over":break;default:h=s+d}let x=t.labelAngle??0,{x:b,y:p}=Ar({x:h,y:m},x),y=Math.abs(Math.cos(x)),S=Math.abs(Math.sin(x)),v=y*g+S*u,E=S*g+y*u;return{minX:b-v,maxX:b+v,minY:p-E,maxY:p+E}}computeDisplayedNodeLabels(){let t=this.internals.getCameraState(),{width:e,height:r}=this.internals.getDimensions(),i=this.internals.viewportToFramedGraph({x:-Lt,y:-Rt}),n=this.internals.viewportToFramedGraph({x:e+Lt,y:-Rt}),o=this.internals.viewportToFramedGraph({x:-Lt,y:r+Rt}),s=this.internals.viewportToFramedGraph({x:e+Lt,y:r+Rt}),l=Math.min(i.x,n.x,o.x,s.x),d=Math.max(i.x,n.x,o.x,s.x),c=Math.min(i.y,n.y,o.y,s.y),g=Math.max(i.y,n.y,o.y,s.y),u=ye({x:.5,y:.5,ratio:1,angle:0},{width:e,height:r},this.internals.getGraphDimensions(),this.internals.getStagePadding()),f=_=>{let A=Re(u,_);return{x:(1+A.x)*e/2,y:(1-A.y)*r/2}},h=f({x:l,y:c}),m=f({x:d,y:c}),x=f({x:l,y:g}),b=f({x:d,y:g}),p={x1:Math.min(h.x,m.x,x.x,b.x),y1:Math.min(h.y,m.y,x.y,b.y),x2:Math.max(h.x,m.x,x.x,b.x),y2:Math.max(h.y,m.y,x.y,b.y)},{settings:y,nodeDataCache:S,nodesWithForcedLabels:v}=this.internals,E=this.labelGrid.getLabelsToDisplay(t.ratio,y.labelDensity,p);Xa(E,v);for(let _=0,A=E.length;_<A;_++){let R=E[_],T=S[R];if(this.displayedNodeLabels.has(R)||T.visibility==="hidden"||T.labelVisibility==="hidden"||!T.label||T.x<l||T.x>d||T.y<c||T.y>g)continue;let{x:N,y:P}=this.internals.framedGraphToViewport(T),w=this.internals.scaleSize(T.size);!Pe(T)&&w<y.labelRenderedSizeThreshold||N<-Lt-w||N>e+Lt+w||P<-Rt-w||P>r+Rt+w||this.displayedNodeLabels.add(R)}}buildFramePassPoints(){let{nodeDataCache:t,nodeDataTexture:e}=this.internals;if(!e)return{data:this.framePassPoints,count:0};let r=this.displayedNodeLabels.size*3;this.framePassPoints.length<r&&(this.framePassPoints=new Float32Array(r));let i=this.framePassPoints,n=0;for(let o of this.displayedNodeLabels){let s=t[o];if(!s)continue;let l=e.getIndex(o);l<0||(i[n*3]=l,i[n*3+1]=ke[s.labelPosition||Ge.labelPosition]??0,i[n*3+2]=s.labelAngle??0,n++)}return{data:i,count:n}}renderWebGLLabels(t,e){let{nodeDataCache:r,labelProgram:i,primitives:n,nodeDataTexture:o}=this.internals,s=[];for(let l of this.displayedNodeLabels){if(this.renderedNodeLabels.has(l))continue;let d=r[l];e&&d.labelDepth!==e||(this.renderedNodeLabels.add(l),s.push(l))}if(s.length!==0){if(this.labelsDirty){let l=0;for(let m=0,x=s.length;m<x;m++){let b=r[s[m]];l+=b.label.length}i.reallocate(l);let d=14,c=n?.nodes?.label?.margin??De,g=Ge.labelPosition,u=n?.nodes?.label?.font?.family||"sans-serif",f=new Map,h=0;for(let m=0,x=s.length;m<x;m++){let b=s[m],p=r[b],y=p.labelFont||u,S=f.get(y);if(S===void 0){let{family:_,weight:A,style:R}=wr(y);S=i.registerFont(_,A,R),f.set(y,S)}let v={text:p.label,x:p.x,y:p.y,size:p.labelSize??d,color:p.labelColor,nodeSize:p.size,margin:c,position:p.labelPosition??g,hidden:!1,forceLabel:Pe(p),type:"default",zIndex:p.zIndex??0,parentType:"node",parentKey:b,fontKey:S,labelAngle:p.labelAngle??0,nodeIndex:o.getIndex(b)},E=i.processLabel(b,h,v);h+=E}i.invalidateBuffers()}i.render(t)}}renderBackdrops(t,e){let{backdropProgram:r,nodeDataCache:i,nodesWithBackdrop:n,attachmentManager:o,pixelRatio:s,nodeDataTexture:l}=this.internals,d=[];for(let c of n){let g=i[c];if(!g||g.visibility==="hidden"||e&&g.depth!==e)continue;let u=l?.getIndex(c)??-1;u<0||d.push({key:c,nodeIndex:u})}if(d.length!==0){r.reallocate(d.length);for(let c=0;c<d.length;c++){let{key:g,nodeIndex:u}=d[c],f=i[g],h=this.displayedNodeLabels.has(g),m=h?this.measureNodeLabel(f):{width:0,height:0,textHeight:0},x=m.textHeight,b=m.width,p=m.height,y=0,S=0;if(h&&f.labelAttachment&&o){let z=o.getEntry(g,f.labelAttachment);if(z){let V=f.labelAttachmentPlacement||"below";if(V==="below"||V==="above"){let q=z.height/s;p+=q+Ce,b=Math.max(b,z.width/s),S=V==="below"?(q+Ce)/2:-(q+Ce)/2}else{let q=z.width/s;b+=q+Ce,p=Math.max(p,z.height/s),y=V==="right"?(q+Ce)/2:-(q+Ce)/2}}}let v=f.backdropColor?Me(f.backdropColor):[255,255,255,255],E=f.backdropShadowColor?Me(f.backdropShadowColor):[0,0,0,128],_=v.map(z=>z/255),A=E.map(z=>z/255),R=f.backdropShadowBlur??12,T=f.backdropPadding??6,P=(f.backdropBorderColor?Me(f.backdropBorderColor):[0,0,0,0]).map(z=>z/255),w=f.backdropBorderWidth??0,G=f.backdropCornerRadius??0,L=f.backdropLabelPadding??-1,k=L<0?T:L,M=tu[f.backdropArea??"both"]??0,I={key:g,nodeIndex:u,label:f.label,labelWidth:b,labelHeight:p,textHeight:x,type:"default",position:f.labelPosition||Ge.labelPosition,labelAngle:f.labelAngle??0,backdropColor:_,backdropShadowColor:A,backdropShadowBlur:R,backdropPadding:T,backdropBorderColor:P,backdropBorderWidth:w,backdropCornerRadius:G,backdropLabelPadding:k,backdropArea:M,labelBoxOffset:[y,S]};r.processBackdrop(c,I)}r.invalidateBuffers(),r.render(t)}}renderLabelBackgrounds(t,e){let{labelBackgroundProgram:r,nodeDataCache:i,nodeDataTexture:n}=this.internals,o=K.nodeLabel.writesPickingThisFrame(this.internals),s=[];for(let l of this.displayedNodeLabels){let d=i[l];!d||d.visibility==="hidden"||e&&d.labelDepth!==e||!o&&!d.labelBackgroundColor||s.push(l)}if(s.length!==0){r.reallocate(s.length);for(let l=0;l<s.length;l++){let d=s[l],c=i[d],g=n?.getIndex(d)??-1;if(g<0)continue;let{width:u,height:f,textHeight:h}=this.measureNodeLabel(c),m=Fe(this.internals.pickingState,"nodeLabel",d)||Fe(this.internals.pickingState,"node",d),x=c.labelBackgroundColor?ae(c.labelBackgroundColor):ae("transparent"),b={nodeIndex:g,id:qe(m),color:x,labelWidth:u,labelHeight:f,textHeight:h,positionMode:ke[c.labelPosition||Ge.labelPosition]??0,labelAngle:c.labelAngle??0,padding:c.labelBackgroundPadding??Wa};r.processLabelBackground(l,b)}r.invalidateBuffers(),r.render(t)}}cacheAttachments(t){let{attachmentManager:e,pixelRatio:r,nodeDataCache:i,nodesWithBackdrop:n,graph:o}=this.internals;if(e){for(let s of n){if(!this.displayedNodeLabels.has(s))continue;let l=i[s];if(!l||l.visibility==="hidden"||t&&l.depth!==t||!l.labelAttachment)continue;let d=o.getNodeAttributes(s),{width:c,height:g}=this.measureNodeLabel(l),u={node:s,attributes:d,pixelRatio:r,labelWidth:c,labelHeight:g};e.renderAttachment(s,l.labelAttachment,u)}e.regenerateAtlas()}}renderAttachments(t,e){let{attachmentManager:r,attachmentProgram:i,nodeDataCache:n,nodesWithBackdrop:o,pixelRatio:s,nodeDataTexture:l}=this.internals;if(!r||!i)return;let d=0;i.reallocateAttachments(o.size);for(let c of o){if(!this.displayedNodeLabels.has(c))continue;let g=n[c];if(!g||g.visibility==="hidden"||e&&g.labelDepth!==e||!g.labelAttachment)continue;let u=r.getEntry(c,g.labelAttachment);if(!u)continue;let f=l?.getIndex(c)??-1;if(f<0)continue;let{width:h,height:m,textHeight:x}=this.measureNodeLabel(g),b=Qa[g.labelAttachmentPlacement||"below"]??0;i.processAttachment(d,{nodeIndex:f,atlasX:u.x,atlasY:u.y,atlasW:u.width,atlasH:u.height,attachWidth:u.width/s,attachHeight:u.height/s,positionMode:ke[g.labelPosition||Ge.labelPosition]??0,attachmentPlacement:b,labelWidth:h,labelHeight:m,textHeight:x,labelAngle:g.labelAngle??0}),d++}d!==0&&(i.reallocateAttachments(d),r.bindTexture(gt),i.invalidateBuffers(),i.render(t))}computeDisplayedEdgeLabels(){let{graph:t,stateManager:e,settings:r,edgesWithForcedLabels:i}=this.internals,n=e.getHighlightedNodes(),o=r.edgeLabelAnchors==="allNodes"?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,r.labelDensity)):this.displayedNodeLabels,s=e.hovered,l=To({graph:t,hoveredNode:s?.kind==="node"?s.key:null,displayedNodeLabels:o,highlightedNodes:n});Xa(l,i),this.edgeLabelCandidates=l,this.displayedEdgeLabels=new Set}filterEdgeLabelsForDepth(t){let{graph:e,nodeDataCache:r,edgeDataCache:i}=this.internals,n=[],o=new Set;for(let s=0,l=this.edgeLabelCandidates.length;s<l;s++){let d=this.edgeLabelCandidates[s];if(o.has(d))continue;o.add(d);let c=e.extremities(d),g=r[c[0]],u=r[c[1]],f=i[d];!f||!g||!u||f.visibility==="hidden"||f.labelVisibility==="hidden"||g.visibility==="hidden"||u.visibility==="hidden"||t&&f.labelDepth!==t||f.label&&n.push(d)}return n}renderEdgeLabels(t,e){let{graph:r,nodeDataCache:i,edgeDataCache:n,primitives:o,edgeLabelProgram:s,nodeDataTexture:l,edgeDataTexture:d}=this.internals,c=this.filterEdgeLabelsForDepth(e);for(let g of c)this.displayedEdgeLabels.add(g);if(c.length!==0){if(this.labelsDirty){let g=0;for(let m of c)g+=n[m].label.length;s.reallocate(g);let u=o?.edges?.label?.margin??5,f="over",h=0;for(let m of c){let x=r.extremities(m),b=x[0],p=x[1],y=i[b],S=i[p],v=n[m],E=l.getIndex(b),_=l.getIndex(p),A=d.getIndex(m),R={text:v.label,x:(y.x+S.x)/2,y:(y.y+S.y)/2,size:_o,color:v.labelColor,nodeSize:0,nodeIndex:-1,margin:u,position:v.labelPosition??f,hidden:!1,forceLabel:Pe(v),type:"default",zIndex:v.zIndex??0,parentType:"edge",parentKey:m,fontKey:"",labelAngle:0,sourceX:y.x,sourceY:y.y,targetX:S.x,targetY:S.y,sourceSize:y.size,targetSize:S.size,sourceShape:y.shape||"circle",targetShape:S.shape||"circle",edgeSize:v.size,offset:0,edgeAttributes:v,sourceNodeIndex:E,targetNodeIndex:_,edgeIndex:A},T=s.processEdgeLabel(m,h,R);h+=T}s.invalidateBuffers()}s.render(t)}}renderEdgeLabelBackgrounds(t,e){let{edgeLabelBackgroundProgram:r,edgeLabelProgram:i,edgeDataCache:n,primitives:o,edgeDataTexture:s}=this.internals;if(!s)return;let l=K.edgeLabel.writesPickingThisFrame(this.internals),d=o?.edges?.label?.margin??5,c="over",g=this.filterEdgeLabelsForDepth(e),u=[];for(let f of g)!l&&!n[f].labelBackgroundColor||u.push(f);if(u.length!==0){r.reallocate(u.length);for(let f=0;f<u.length;f++){let h=u[f],m=n[h],x=m.label,b=i.measureLabelAtlasWidth(x),p=m.labelPosition??c,y=typeof p=="string"?ru[p]??0:0,S=Fe(this.internals.pickingState,"edgeLabel",h)||Fe(this.internals.pickingState,"edge",h),v=m.labelBackgroundColor?ae(m.labelBackgroundColor):ae("transparent"),E={edgeIndex:s.getIndex(h),baseFontSize:_o,totalTextWidth:b,positionMode:y,margin:d,padding:m.labelBackgroundPadding??au,color:v,id:qe(S),edgeAttributes:m};r.processEdgeLabelBackground(f,h,E)}r.invalidateBuffers(),r.render(t)}}};var pa=class{constructor(t,e,r,i){this.scheduleRefresh=t;this.customNodeStateDefaults=e;this.customEdgeStateDefaults=r;this.customGraphStateDefaults=i;this.nodeStates=new Map;this.edgeStates=new Map;this.hovered=null;this.dirtyNodes=new Set;this.dirtyEdges=new Set;this.graphStateChanged=!1;this.graphStateFlagsDirty=!1;this.graphState=fi(i)}getNodeState(t){t=""+t;let e=this.nodeStates.get(t);return e||(e=Jn(this.customNodeStateDefaults),this.nodeStates.set(t,e)),e}getEdgeState(t){t=""+t;let e=this.edgeStates.get(t);return e||(e=eo(this.customEdgeStateDefaults),this.edgeStates.set(t,e)),e}getGraphState(){return this.flushGraphStateFlags(),this.graphState}getHighlightedNodes(){let t=new Set;for(let[e,r]of this.nodeStates)r.isHighlighted&&t.add(e);return t}setNodeState(t,e){t=""+t;let r=this.getNodeState(t);if(!ht(r,e))return;let i={...r,...e};this.nodeStates.set(t,i),this.dirtyNodes.add(t),this.updateHoveredNodeTracking(t,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}setEdgeState(t,e){t=""+t;let r=this.getEdgeState(t);if(!ht(r,e))return;let i={...r,...e};this.edgeStates.set(t,i),this.dirtyEdges.add(t),this.updateHoveredEdgeTracking(t,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}setGraphState(t){if(!ht(this.graphState,t))return;let e={...this.graphState,...t};e.isIdle=!e.isPanning&&!e.isZooming&&!e.isDragging,this.graphState=e,this.graphStateChanged=!0,this.scheduleRefresh()}setNodesState(t,e){let r=!1;for(let i of t){i=""+i;let n=this.getNodeState(i);if(!ht(n,e))continue;let o={...n,...e};this.nodeStates.set(i,o),this.dirtyNodes.add(i),this.updateHoveredNodeTracking(i,n,o),r=!0}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}setEdgesState(t,e){let r=!1;for(let i of t){i=""+i;let n=this.getEdgeState(i);if(!ht(n,e))continue;let o={...n,...e};this.edgeStates.set(i,o),this.dirtyEdges.add(i),this.updateHoveredEdgeTracking(i,n,o),r=!0}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}removeNode(t){this.nodeStates.delete(t),this.dirtyNodes.delete(t),this.clearHoveredFor("node",t)}removeEdge(t){this.edgeStates.delete(t),this.dirtyEdges.delete(t),this.clearHoveredFor("edge",t)}pruneNodes(t){for(let e of this.nodeStates.keys())t(e)||this.removeNode(e)}pruneEdges(t){for(let e of this.edgeStates.keys())t(e)||this.removeEdge(e)}clearNodes(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(ca("node"))}clearEdges(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(ca("edge"))}resetGraphState(){this.graphState=fi(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}clearDirtyTracking(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}setHovered(t){this.hovered=t}clearHoveredFor(t,e){this.hovered&&this.hovered.key===e&&ca(t).includes(this.hovered.kind)&&(this.hovered=null)}clearHoveredForKinds(t){this.hovered&&t.includes(this.hovered.kind)&&(this.hovered=null)}updateGraphStateFromNodes(){let t=!1,e=!1,r=!1;for(let[,n]of this.nodeStates)if(n.isHovered&&(t=!0),n.isHighlighted&&(e=!0),n.isDragged&&(r=!0),t&&e&&r)break;!t&&this.hovered?.kind==="edge"&&(t=!0);let i=!this.graphState.isPanning&&!this.graphState.isZooming&&!r;(this.graphState.hasHovered!==t||this.graphState.hasHighlighted!==e||this.graphState.isDragging!==r||this.graphState.isIdle!==i)&&(this.graphStateChanged=!0),this.graphState={...this.graphState,hasHovered:t,hasHighlighted:e,isDragging:r,isIdle:i}}updateGraphStateFromEdges(){let t=this.hovered?.kind==="node";if(!t){for(let[,e]of this.edgeStates)if(e.isHovered){t=!0;break}}this.graphState.hasHovered!==t&&(this.graphStateChanged=!0),this.graphState={...this.graphState,hasHovered:t}}flushGraphStateFlags(){this.graphStateFlagsDirty&&(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),this.graphStateFlagsDirty=!1)}updateHoveredNodeTracking(t,e,r){if(e.isHovered!==r.isHovered)if(r.isHovered){if(this.hovered?.kind==="node"&&this.hovered.key!==t){let i=this.hovered.key,n=this.getNodeState(i);this.nodeStates.set(i,{...n,isHovered:!1}),this.dirtyNodes.add(i)}this.hovered={kind:"node",key:t}}else this.hovered?.kind==="node"&&this.hovered.key===t&&(this.hovered=null)}updateHoveredEdgeTracking(t,e,r){if(e.isHovered!==r.isHovered)if(r.isHovered){if(this.hovered?.kind==="edge"&&this.hovered.key!==t){let i=this.hovered.key,n=this.getEdgeState(i);this.edgeStates.set(i,{...n,isHovered:!1}),this.dirtyEdges.add(i)}this.hovered={kind:"edge",key:t}}else this.hovered?.kind==="edge"&&this.hovered.key===t&&(this.hovered=null)}};function iu(a){return typeof a=="object"&&"uniforms"in a&&Array.isArray(a.uniforms)}function nu(a){return typeof a=="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function ou(a){return typeof a=="object"&&"uniforms"in a&&"attributes"in a&&"segments"in a}function su(a){return typeof a=="object"&&"uniforms"in a&&"attributes"in a&&"length"in a}function lu(a){return typeof a=="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function du(a){return typeof a=="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function uu(a){return typeof a=="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function cu(a){return typeof a=="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function hu(a){if(iu(a))return a;if(du(a))return{name:a.name,glsl:a.glsl,inradiusFactor:a.inradiusFactor,uniforms:[]};throw new Error(`Invalid node shape specification: ${JSON.stringify(a)}`)}function gu(a){if(nu(a))return a;if(Yn(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error(`Invalid node layer specification: ${JSON.stringify(a)}`)}function fu(a){if(ou(a))return a;if(uu(a))return{name:a.name,glsl:a.glsl,segments:a.segments,uniforms:[],attributes:[]};throw new Error(`Invalid edge path specification: ${JSON.stringify(a)}`)}function pu(a){if(lu(a))return a;if(Zn(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error(`Invalid edge layer specification: ${JSON.stringify(a)}`)}function mu(a){if(su(a))return a;if(cu(a))return{name:a.name,glsl:a.glsl,length:a.length,widthFactor:a.widthFactor,margin:0,uniforms:[],attributes:[]};throw new Error(`Invalid edge extremity specification: ${JSON.stringify(a)}`)}function Ao(a){let t=a?.shapes??er.shapes,e=a?.layers??er.layers,r=t.map(hu),i=e.map(gu);if(r.length===0)throw new Error("At least one node shape must be specified.");if(i.length===0)throw new Error("At least one node layer must be specified.");return{shapes:r,layers:i}}function bu(a){let t=a?.paths??St.paths,e=a?.extremities??St.extremities,r=a?.layers??St.layers,i=t.map(fu),n=e.map(mu).filter(s=>s!==null),o=r.map(pu);if(i.length===0)throw new Error("At least one edge path must be specified.");if(o.length===0)throw new Error("At least one edge layer must be specified.");return{paths:i,extremities:n,layers:o}}function Do(a,t){let e={};for(let r of a)r.variables&&Object.assign(e,r.variables);return Object.assign(e,t||{}),e}function Lo(a,t,e,r,i){let{shapes:n,layers:o}=Ao(r),s=Do(n,r?.variables);return{...oi(a,t,e,{shapes:n,layers:o,label:r?.label,backdrop:r?.backdrop,labelAttachments:r?.labelAttachments},i),variables:s}}function Ro(a,t,e,r,i,n){let{paths:o,extremities:s,layers:l}=bu(r),{shapes:d,layers:c}=Ao(n),g=Do(o,r?.variables);return{...hi(a,t,e,{paths:o,extremities:s,layers:l,defaultHead:r?.defaultHead,defaultTail:r?.defaultTail,label:r?.label},i,d,c),variables:g,paths:o}}var Po=1,Co=2,wo=3,Go=4,ur=class extends $e{constructor(e,r,i={}){super();this.nodeReducer=null;this.edgeReducer=null;this.stageCanvas=null;this.mouseLayer=null;this.gestureHint=null;this.extraElements={};this.webGLContext=null;this.pickingFrameBuffer=null;this.pickingTexture=null;this.pickingDepthBuffer=null;this.activeListeners={};this.nodeVariableEntries=[];this.edgeVariableEntries=[];this.edgePathsByName=new Map;this.nodeProgramIndex={};this.edgeProgramIndex={};this.edgeTextureIndexCache={};this.nodeGraphCoords={};this.nodeExtent={x:[0,1],y:[0,1]};this.matrix=oe();this.invMatrix=oe();this.correctionRatio=1;this.frameId=0;this.customBBox=null;this.gpuTimerExt=void 0;this.activeGpuTimerQuery=null;this.pendingGpuTimerQueries=[];this.normalizationFunction=$t({x:[0,1],y:[0,1]});this.graphToViewportRatio=1;this.pickingState=uo();this.prevNodeVisibilities={};this.width=0;this.height=0;this.autoRescaleFrozen=!1;this.stylesDeclaration=null;this.resolvedStageStyle={};this.renderFrame=null;this.contextLost=!1;this.pendingProcess="full";this.needToRefreshState=!1;this.checkEdgesEventsFrame=null;this.edgeStyleAnalysis={dependency:"static",xAttribute:null,yAttribute:null};this.depthLayers=[...ar];this.customLayerPrograms=new Map;this.nodeShapeSlug=null;this.sdfAtlas=null;this.depthRanges={nodes:{},edges:{}};this.nodeBaseDepth={};this.edgeBaseDepth={};let{primitives:n,styles:o,settings:s={},nodeReducer:l,edgeReducer:d,customNodeState:c,customEdgeState:g,customGraphState:u}=i;this.stateManager=new pa(()=>this.scheduleStateRefresh(),c,g,u);let f=n??no;this.stylesDeclaration=o?{nodes:o.nodes??we.nodes,edges:o.edges??we.edges,stage:o.stage}:we,this.nodeReducer=l??null,this.edgeReducer=d??null;let h=aa(this.stylesDeclaration.nodes);this.nodeReducer&&(h.dependency="graph-state"),this.edgeStyleAnalysis=aa(this.stylesDeclaration.edges),this.edgeReducer&&(this.edgeStyleAnalysis.dependency="graph-state"),this.stylesDeclaration.stage&&(this.resolvedStageStyle=yi(this.stylesDeclaration.stage,this.stateManager.graphState));let m=so(s);if(sa(m),m.enableNodeDrag){let{xAttribute:T,yAttribute:N}=h;if((!T||!N)&&!m.dragPositionToAttributes)throw new Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(Rn(e),!(r instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");this.container=r,this.edgeGroups=new da(e,(T,N)=>{for(let P=0;P<T.length;P++){let w=this.stateManager.getEdgeState(T[P]);w.parallelIndex=P,w.parallelCount=N}});let x=new la(e,this.viewportToGraph.bind(this),this.setNodesState.bind(this),(T,N)=>this.emit(T,N));if(this.depthLayers=f.depthLayers??[...ar],!o?.nodes&&!tr.every(T=>this.depthLayers.includes(T)))throw new Error(`Sigma: depthLayers must include ${tr.join(", ")} for the built-in node styles.`);if(!o?.edges&&!rr.every(T=>this.depthLayers.includes(T)))throw new Error(`Sigma: depthLayers must include ${rr.join(", ")} for the built-in edge styles.`);this.itemBuckets={nodes:new xt(this.depthLayers),edges:new xt(this.depthLayers)},this.initWebGLContext(),this.mouseLayer=Ze("div",{position:"absolute",touchAction:"none",userSelect:"none"},{class:"sigma-mouse"}),this.container.appendChild(this.mouseLayer),this.resolvedStageStyle.background&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.resolvedStageStyle.cursor&&(this.container.style.cursor=this.resolvedStageStyle.cursor);let b=new Qt(this.webGLContext),p=new yt(this.webGLContext,{channels:1}),y=new Jt(this.webGLContext),S=new yt(this.webGLContext,{channels:4}),v=this.webGLContext,E=new ha({gl:v,getFrameBuffer:()=>this.pickingFrameBuffer,getPixelRatio:()=>this.internals.pixelRatio,getDownSizingRatio:()=>this.internals.settings.pickingDownSizingRatio,isRenderPending:()=>this.renderFrame!==null,onIndex:(T,N)=>Li(this.internals,this.pickingState.lookup[T]??null,N)}),_=this.initPrograms(f,m),A=f?.nodes?.labelAttachments,R=null;A&&Object.keys(A).length>0&&(R=new pt(v,A,()=>this.scheduleRender())),this.internals={nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:m,primitives:f,pixelRatio:Ut(),graph:e,stateManager:this.stateManager,dragManager:x,hoverResolver:E,nodeStyleAnalysis:h,pickingState:this.pickingState,..._,attachmentManager:R,nodeDataTexture:b,nodeFrameTexture:p,edgeDataTexture:y,edgeFrameTexture:S,getDimensions:()=>this.getDimensions(),getGraphDimensions:()=>this.getGraphDimensions(),getStagePadding:()=>this.getStagePadding(),getCameraState:()=>this.camera.getState(),getHitAtPosition:T=>this.getHitAtPosition(T),setNodeState:(T,N)=>this.setNodeState(T,N),setEdgeState:(T,N)=>this.setEdgeState(T,N),updateContainerCursor:()=>this.updateContainerCursor(),scheduleRefresh:()=>this.scheduleRefresh(),viewportToFramedGraph:T=>this.viewportToFramedGraph(T),viewportToGraph:T=>this.viewportToGraph(T),framedGraphToViewport:T=>this.framedGraphToViewport(T),scaleSize:T=>this.scaleSize(T),emit:(T,N)=>this.emit(T,N)},this.labelRenderer=new fa(this.internals),this.resize(),this.initializeWebGLLabels(),this.camera=new Qe,this.bindCameraHandlers(),this.mouseCaptor=new Tt(this.mouseLayer,this),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor=new _t(this.mouseLayer,this),this.touchCaptor.setSettings(this.internals.settings),this.bindEventHandlers(),this.bindGraphHandlers(),this.handleSettingsUpdate(),this.refresh()}initializeWebGLLabels(){this.sdfAtlas=new pe,this.sdfAtlas.registerFont({family:"sans-serif",weight:"normal",style:"normal"})}resetWebGLTexture(){let e=this.webGLContext;if(!this.pickingFrameBuffer)return this;let r=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),i=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);e.bindFramebuffer(e.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&e.deleteTexture(this.pickingTexture);let n=e.createTexture();n&&(e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,i,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),this.pickingTexture=n),this.pickingDepthBuffer&&e.deleteRenderbuffer(this.pickingDepthBuffer);let o=e.createRenderbuffer();return o&&(e.bindRenderbuffer(e.RENDERBUFFER,o),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,r,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,o),this.pickingDepthBuffer=o),e.bindFramebuffer(e.FRAMEBUFFER,null),this}bindCameraHandlers(){return this.activeListeners.camera=()=>{this.refreshMatrices(),this.labelRenderer.labelsDirty=!0,this.scheduleRender()},this.activeListeners.cameraAnimationStart=({from:e,to:r})=>{e.ratio!==r.ratio&&this.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=()=>{this.stateManager.setGraphState({isZooming:!1})},this.camera.on("updated",this.activeListeners.camera),this.camera.on("animationStart",this.activeListeners.cameraAnimationStart),this.camera.on("animationEnd",this.activeListeners.cameraAnimationEnd),this}unbindCameraHandlers(){return this.camera.removeListener("updated",this.activeListeners.camera),this.camera.removeListener("animationStart",this.activeListeners.cameraAnimationStart),this.camera.removeListener("animationEnd",this.activeListeners.cameraAnimationEnd),this}getHitAtPosition(e){if(this.contextLost)return null;let r=this.webGLContext;r.bindFramebuffer(r.FRAMEBUFFER,this.pickingFrameBuffer);let i=vn(r,this.pickingFrameBuffer,e.x,e.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),n=Pr(...i);return this.pickingState.lookup[n]??null}bindEventHandlers(){return bo(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}bindGraphHandlers(){return xo({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}unbindGraphHandlers(){yo(this.internals.graph,this.activeListeners)}getNodeShapeId(e){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&e.shape&&e.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[e.shape]]:je(e.shape||"circle")}processNodes(){let e=this.internals.graph,r=this.internals.settings,i=this.getDimensions(),{autoRescale:n,autoRescaleContent:o}=r,s=this.nodeExtent;if(n===!1){let{width:m,height:x}=i;s={x:[-m/2,m/2],y:[-x/2,x/2]}}else(n!=="once"||!this.autoRescaleFrozen)&&(s=this.computeNodeExtent(),o!=="positions"&&!this.customBBox&&(s=vo({extent:s,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:i,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:r.zoomToSizeRatioFunction,itemSizesReference:r.itemSizesReference,fitLabels:o==="labels",nodeLabelBox:(m,x)=>this.labelRenderer.nodeLabelBox(m,x)})),n==="once"&&(this.autoRescaleFrozen=!0));this.nodeExtent=s,this.normalizationFunction=$t(this.customBBox||this.nodeExtent);let l=new Qe,d=ye(l.getState(),i,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(i,r.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(i,r.labelGridCellSize);let c=r.renderEdgeLabels&&r.edgeLabelAnchors==="allNodes",g=!1;ua(this.pickingState,"node");let u=e.nodes();for(let m=0,x=u.length;m<x;m++){let b=u[m],p=this.internals.nodeDataCache[b],y=this.nodeGraphCoords[b];p.x=y.x,p.y=y.y,this.normalizationFunction.applyTo(p),p.visibility!==this.prevNodeVisibilities[b]&&(g=!0),typeof p.label=="string"&&p.visibility!=="hidden"&&p.labelVisibility!=="hidden"&&this.labelRenderer.labelGrid.add(b,p.size,this.framedGraphToViewport(p,{matrix:d})),c&&p.visibility!=="hidden"&&this.labelRenderer.edgeAnchorGrid.add(b,p.size,this.framedGraphToViewport(p,{matrix:d}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(u.length);let f=0;this.depthRanges.nodes={},this.nodeBaseDepth={};let h=this.internals.nodeDataCache;for(let m of this.depthLayers){let x=this.itemBuckets.nodes.getSorted(m,b=>h[b].zIndex);if(x.length!==0){this.depthRanges.nodes[m]=[{offset:f,count:x.length}];for(let b of x)this.nodeBaseDepth[b]=m,this.nodeProgram.allocateNode(b),_i(this.pickingState,"node",b),this.addNodeToProgram(b,f++)}}this.nodeProgram.invalidateBuffers();for(let m=0,x=u.length;m<x;m++)this.prevNodeVisibilities[u[m]]=this.internals.nodeDataCache[u[m]].visibility;this.labelRenderer.processWebGLLabels(u);for(let{program:m}of this.customLayerPrograms.values())m.cacheData&&m.cacheData();return g}processEdges(){let r=this.internals.graph.edges();this.edgeProgram.reallocate(r.length);let i=0;ua(this.pickingState,"edge"),this.depthRanges.edges={},this.edgeBaseDepth={};let n=this.internals.edgeDataCache;for(let o of this.depthLayers){let s=this.itemBuckets.edges.getSorted(o,l=>n[l].zIndex);if(s.length!==0){this.depthRanges.edges[o]=[{offset:i,count:s.length}];for(let l of s)this.edgeBaseDepth[l]=o,_i(this.pickingState,"edge",l),this.addEdgeToProgram(l,i++)}}this.edgeProgram.invalidateBuffers()}updateNodeDepthRanges(e,r,i){let n=this.nodeProgramIndex[e];n!==void 0&&(Ka(this.depthRanges.nodes,r,n),qa(this.depthRanges.nodes,i,n))}updateEdgeDepthRanges(e,r,i){let n=this.edgeProgramIndex[e];n!==void 0&&(Ka(this.depthRanges.edges,r,n),qa(this.depthRanges.edges,i,n))}handleSettingsUpdate(){let e=this.internals.settings;return this.camera.minRatio=e.minCameraRatio,this.camera.maxRatio=e.maxCameraRatio,this.camera.enabledZooming=e.enableCameraZooming,this.camera.enabledPanning=e.enableCameraPanning,this.camera.enabledRotation=e.enableCameraRotation,e.cameraPanBoundaries?this.camera.constrainState=r=>this.cleanCameraState(r,e.cameraPanBoundaries&&typeof e.cameraPanBoundaries=="object"?e.cameraPanBoundaries:{}):this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=e.gestureTarget==="graph"?"none":e.gestureTarget==="shared"?"pan-x pan-y":"auto",e.gestureTarget!=="shared"&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}cleanCameraState(e,{tolerance:r=0,boundaries:i}={}){let n={...e},{x:[o,s],y:[l,d]}=i||this.nodeExtent,c=[this.graphToViewport({x:o,y:l},{cameraState:e}),this.graphToViewport({x:s,y:l},{cameraState:e}),this.graphToViewport({x:o,y:d},{cameraState:e}),this.graphToViewport({x:s,y:d},{cameraState:e})],g=1/0,u=-1/0,f=1/0,h=-1/0;c.forEach(({x:v,y:E})=>{g=Math.min(g,v),u=Math.max(u,v),f=Math.min(f,E),h=Math.max(h,E)});let m=u-g,x=h-f,{width:b,height:p}=this.getDimensions(),y=0,S=0;if(m>=b?u<b-r?y=u-(b-r):g>r&&(y=g-r):u>b+r?y=u-(b+r):g<-r&&(y=g+r),x>=p?h<p-r?S=h-(p-r):f>r&&(S=f-r):h>p+r?S=h-(p+r):f<-r&&(S=f+r),y||S){let v=this.viewportToFramedGraph({x:0,y:0},{cameraState:e}),E=this.viewportToFramedGraph({x:y,y:S},{cameraState:e});y=E.x-v.x,S=E.y-v.y,n.x+=y,n.y+=S}return n}refreshMatrices(){let e=this.camera.getState(),r=this.getDimensions(),i=this.getGraphDimensions(),n=this.getStagePadding();this.matrix=ye(e,r,i,n),this.invMatrix=ye(e,r,i,n,!0),this.correctionRatio=bn(this.matrix,e,r),this.graphToViewportRatio=this.getGraphToViewportRatio()}processData(){this.emit("beforeProcess"),this.internals.attachmentManager?.clear();let e={...this.pickingState.idsByKind},r=this.processNodes();(this.pendingProcess==="full"||r)&&this.processEdges(),co(this.pickingState,this.internals),ho(e,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess="none",this.emit("afterProcess")}render(){if(this.contextLost)return this;this.emit("beforeRender");let e=()=>(this.internals.hoverResolver.frameRendered(),this.emit("afterRender"),this);if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),(this.pendingProcess!=="none"||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!=="none"&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!=="none"&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return e();let r=this.mouseCaptor,i=this.camera.isAnimating()||r.isMoving||r.draggedEvents||r.currentWheelDirection;this.refreshMatrices(),this.frameId++;let n=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;n&&n.forEach(u=>u.resetDebugStats()),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());let o=this.getRenderParams(),s=K.edge.writesPickingThisFrame(this.internals)?o:{...o,pickingFrameBuffer:null};this.labelRenderer.resetFrame();let l=this.webGLContext,d=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),c=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(l.bindFramebuffer(l.FRAMEBUFFER,this.pickingFrameBuffer),l.viewport(0,0,d,c),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit("afterTexturesUpload"),this.internals.nodeDataTexture.bind(wo),this.internals.edgeDataTexture.bind(Go),this.edgeFramePass.run(o,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(Po),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();let{data:u,count:f}=this.labelRenderer.buildFramePassPoints();this.nodeFramePass.run(u,f,this.internals.nodeFrameTexture,o,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(Co)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();for(let{program:u}of this.customLayerPrograms.values())u.preRender&&u.preRender(o);l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA);let g=!this.internals.settings.hideLabelsOnMove||!i;for(let u of this.depthLayers){for(let m of this.customLayerPrograms.values())m.depth===u&&m.program.render(o);let f=this.depthRanges.edges[u];if(f&&(!this.internals.settings.hideEdgesOnMove||!i))for(let{offset:m,count:x}of f)x>0&&this.edgeProgram.render(s,m,x);this.internals.settings.renderEdgeLabels&&g&&(this.labelRenderer.renderEdgeLabelBackgrounds(K.edgeLabel.writesPickingThisFrame(this.internals)?o:{...o,pickingFrameBuffer:null},u),this.labelRenderer.renderEdgeLabels(o,u)),this.labelRenderer.cacheAttachments(u),this.labelRenderer.renderBackdrops({...o,pickingFrameBuffer:null},u);let h=this.depthRanges.nodes[u];if(h)for(let{offset:m,count:x}of h)x>0&&this.nodeProgram.render(o,m,x);g&&(this.labelRenderer.renderAttachments({...o,pickingFrameBuffer:null},u),this.labelRenderer.renderLabelBackgrounds(K.nodeLabel.writesPickingThisFrame(this.internals)?o:{...o,pickingFrameBuffer:null},u),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(o,u))}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(l.bindFramebuffer(l.READ_FRAMEBUFFER,this.pickingFrameBuffer),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.blitFramebuffer(0,0,d,c,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,l.COLOR_BUFFER_BIT,l.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),n&&this.logRenderStats(n),e()}getDebugPrograms(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(e=>e!==null)}logRenderStats(e){let r={};for(let i of e)r[i.constructor.name]={...i.debugStats};console.log(`[sigma] DEBUG_logRenderStats: frame #${this.frameId}`),console.table(r)}getGpuTimerExtension(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension("EXT_disjoint_timer_query_webgl2"),this.gpuTimerExt||console.warn("Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.")),this.gpuTimerExt}beginGpuTimerQuery(){let e=this.getGpuTimerExtension();if(!e)return;let r=this.webGLContext,i=r.createQuery();i&&(r.beginQuery(e.TIME_ELAPSED_EXT,i),this.activeGpuTimerQuery=i)}endGpuTimerQuery(){!this.gpuTimerExt||!this.activeGpuTimerQuery||(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}pollGpuTimerQueries(){if(this.pendingGpuTimerQueries.length===0)return;let e=this.webGLContext,r=this.gpuTimerExt;if(!r){this.pendingGpuTimerQueries.forEach(({query:o})=>e.deleteQuery(o)),this.pendingGpuTimerQueries=[];return}let i=e.getParameter(r.GPU_DISJOINT_EXT),n=[];for(let o of this.pendingGpuTimerQueries){if(!e.getQueryParameter(o.query,e.QUERY_RESULT_AVAILABLE)){n.push(o);continue}if(!i){let s=e.getQueryParameter(o.query,e.QUERY_RESULT);console.log(`[sigma] DEBUG_gpuTimerQueries: frame #${o.frameId} GPU time = ${(s/1e6).toFixed(2)}ms`)}e.deleteQuery(o.query)}this.pendingGpuTimerQueries=n}postEvaluateNode(e,r,i){let n=e;n.x===void 0&&(n.x=r.x),n.y===void 0&&(n.y=r.y),e.highlighted=i.isHighlighted;for(let o=0,s=this.nodeVariableEntries.length;o<s;o++){let[l,d]=this.nodeVariableEntries[o];n[l]=n[l]??r[l]??d.default}}addNode(e){let r=this.internals.graph.getNodeAttributes(e),i=this.stateManager.getNodeState(e),n=this.internals.nodeDataCache[e]||{};if(ia(this.stylesDeclaration.nodes,r,i,this.stateManager.graphState,this.internals.graph,n),this.postEvaluateNode(n,r,i),this.nodeReducer){let o=this.nodeReducer(e,n,r,i,this.stateManager.graphState,this.internals.graph);n={...n,...o}}if(typeof n.x!="number"||typeof n.y!="number")throw new Error(`Sigma: could not find a valid position (x, y) for node "${e}". Provide coordinates via node attributes, styles, or a nodeReducer.`);this.internals.nodeShapeMap?(!n.shape||!(n.shape in this.internals.nodeShapeMap))&&(n.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(n.shape=this.nodeShapeSlug),this.internals.nodeDataCache[e]=n,this.nodeGraphCoords[e]={x:n.x,y:n.y},Ye(this.internals.nodesWithForcedLabels,e,Pe(n)),Ye(this.internals.nodesWithBackdrop,e,ja(n)),this.itemBuckets.nodes.set(e,n.depth)}updateNode(e){this.addNode(e);let r=this.internals.nodeDataCache[e];this.normalizationFunction.applyTo(r)}removeNode(e){this.itemBuckets.nodes.remove(e),delete this.internals.nodeDataCache[e],delete this.nodeGraphCoords[e],delete this.nodeProgramIndex[e],this.internals.dragManager.removeNode(e),this.stateManager.removeNode(e),this.internals.nodesWithForcedLabels.delete(e),this.internals.nodesWithBackdrop.delete(e)}postEvaluateEdge(e,r){let i=e;for(let n=0,o=this.edgeVariableEntries.length;n<o;n++){let[s,l]=this.edgeVariableEntries[n];i[s]=i[s]??r[s]??l.default}}applyEdgeSpread(e,r,i){if(i.parallelCount<=1)return;let n=this.internals.graph.source(e),o=this.internals.graph.target(e),s=n===o,l=s?r.selfLoopPath||r.path:r.parallelPath||r.path,d=l?this.edgePathsByName.get(l):void 0;if(!d?.spread)return;let c=r.parallelSpread??.25,g=d.spread.compute(i.parallelIndex,i.parallelCount,c);!s&&this.internals.graph.isDirected(e)&&n>o&&(g=-g),r[d.spread.variable]=g}addEdge(e){let r=this.internals.graph.getEdgeAttributes(e),i=this.stateManager.getEdgeState(e),n={};if(na(this.stylesDeclaration.edges,r,i,this.stateManager.graphState,this.internals.graph,n),this.postEvaluateEdge(n,r),this.edgeReducer){let o=this.edgeReducer(e,n,r,i,this.stateManager.graphState,this.internals.graph);n={...n,...o}}this.applyEdgeSpread(e,n,i),this.internals.edgeDataCache[e]=n,Ye(this.internals.edgesWithForcedLabels,e,Pe(n)),this.itemBuckets.edges.set(e,n.depth)}updateEdge(e){this.addEdge(e)}removeEdge(e){this.itemBuckets.edges.remove(e),delete this.internals.edgeDataCache[e],delete this.edgeProgramIndex[e],delete this.edgeTextureIndexCache[e],this.internals.edgeDataTexture.free(e),this.stateManager.removeEdge(e),this.internals.edgesWithForcedLabels.delete(e)}clearNodeIndices(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}clearEdgeIndices(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),ua(this.pickingState,"edge"),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}clearIndices(){this.clearEdgeIndices(),this.clearNodeIndices()}clearNodeState(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}clearEdgeState(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}clearState(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}addNodeToProgram(e,r){let i=this.internals.nodeDataCache[e];this.internals.nodeDataTexture.allocate(e),this.internals.nodeDataTexture.updateNode(e,i.x,i.y,i.size,this.getNodeShapeId(i),...Cr(i),i.color);let n=this.internals.nodeDataTexture.getIndex(e);this.nodeProgram.process(Fe(this.pickingState,"node",e),r,i,n,e),this.nodeProgramIndex[e]=r}addEdgeToProgram(e,r){let i=this.internals.edgeDataCache[e],n=this.internals.graph.source(e),o=this.internals.graph.target(e),s=this.internals.edgeDataTexture.allocate(e);this.edgeTextureIndexCache[e]=s;let l=n===o,d=!l&&(this.stateManager.getEdgeState(e)?.parallelCount??1)>1,{pathId:c,headId:g,tailId:u,headLengthRatio:f,tailLengthRatio:h}=this.edgeProgram.resolveEdgeIds(i,l,d);this.internals.edgeDataTexture.updateEdge(e,this.internals.nodeDataTexture.getIndex(n),this.internals.nodeDataTexture.getIndex(o),i.size,f,h,c,g,u),this.edgeProgram.process(Fe(this.pickingState,"edge",e),r,this.internals.nodeDataCache[n],this.internals.nodeDataCache[o],i,s),this.edgeProgramIndex[e]=r}getRenderParams(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:wo,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:Co,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:Go,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:Po,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:this.internals.settings.labelPixelSnapping?1:0}}getStagePadding(){let{stagePadding:e,autoRescale:r}=this.internals.settings;return r&&e||0}getLayerElement(e){if(e==="mouse")return this.mouseLayer;let r=this.extraElements[e];if(!r)throw new Error(`Sigma: layer "${e}" does not exist`);return r}initWebGLContext(){let e=this.createWebGLContext("stage");this.stageCanvas=this.extraElements.stage,this.webGLContext=e,this.stageCanvas.addEventListener("webglcontextlost",r=>{this.webGLContext&&(r.preventDefault(),this.contextLost=!0,this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.gpuTimerExt=void 0,this.activeGpuTimerQuery=null,this.pendingGpuTimerQueries=[],this.emit("webglContextLost"))}),this.stageCanvas.addEventListener("webglcontextrestored",()=>{requestAnimationFrame(()=>{this.webGLContext&&!this.webGLContext.isContextLost()&&this.restoreWebGLContext()})}),this.initPickingFramebuffer()}initPickingFramebuffer(){let e=this.webGLContext,r=e.createFramebuffer();if(!r)throw new Error("Sigma: cannot create picking frame buffer");e.bindFramebuffer(e.FRAMEBUFFER,r);let i=e.createTexture();if(!i)throw new Error("Sigma: cannot create picking texture");e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);let n=e.createRenderbuffer();if(!n)throw new Error("Sigma: cannot create picking depth buffer");if(e.bindRenderbuffer(e.RENDERBUFFER,n),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,1,1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,n),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw new Error("Sigma: picking framebuffer is not complete");e.bindFramebuffer(e.FRAMEBUFFER,null),this.pickingFrameBuffer=r,this.pickingTexture=i,this.pickingDepthBuffer=n}initPrograms(e,r){let i=this,n=this.webGLContext,{nodeProgram:o,labelProgram:s,backdropProgram:l,labelBackgroundProgram:d,attachmentProgram:c,framePass:g,shapeSlug:u,shapeNameToIndex:f,shapeGlobalIds:h,variables:m}=Lo(n,this.pickingFrameBuffer,i,e?.nodes,r.antialiasNodes);this.nodeProgram=o,this.nodeFramePass=g,this.nodeVariableEntries=Object.entries(m),u&&(this.nodeShapeSlug=u);let{edgeProgram:x,labelProgram:b,labelBackgroundProgram:p,framePass:y,variables:S,paths:v}=Ro(n,this.pickingFrameBuffer,i,e?.edges,r.antialiasEdges,e?.nodes);return this.edgeProgram=x,this.edgeFramePass=y,this.edgeVariableEntries=Object.entries(S),this.edgePathsByName=new Map(v.map(E=>[E.name,E])),{labelProgram:s,edgeLabelProgram:b,edgeLabelBackgroundProgram:p,backdropProgram:l,labelBackgroundProgram:d,attachmentProgram:c,nodeShapeMap:f??null,nodeGlobalShapeIds:h??null}}restoreWebGLContext(){let e=this.internals;this.initPickingFramebuffer(),e.nodeDataTexture?.restore(),e.nodeFrameTexture?.restore(),e.edgeDataTexture?.restore(),e.edgeFrameTexture?.restore(),e.attachmentManager?.restore(),e.hoverResolver.reset(),Object.assign(e,this.initPrograms(e.primitives,e.settings));for(let r of this.customLayerPrograms.values())r.program.kill(),r.program=r.factory(this.webGLContext);this.contextLost=!1,this.emit("webglContextRestored"),this.refresh()}createLayer(e,r,i={}){if(this.extraElements[e])throw new Error(`Sigma: a layer named "${e}" already exists`);let n=Ze(r,{position:"absolute"},{class:`sigma-${e}`});return i.style&&Object.assign(n.style,i.style),this.extraElements[e]=n,"beforeLayer"in i&&i.beforeLayer?this.getLayerElement(i.beforeLayer).before(n):"afterLayer"in i&&i.afterLayer?this.getLayerElement(i.afterLayer).after(n):this.container.appendChild(n),n}createCanvas(e,r={}){return this.createLayer(e,"canvas",r)}createWebGLContext(e,r={}){let i=this.createCanvas(e,r);r.hidden&&i.remove();let n=i.getContext("webgl2",{preserveDrawingBuffer:!1,antialias:!1,depth:!0,...r});if(!n)throw new Error("Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).");return n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n}killLayer(e){if(e==="stage"||e==="mouse")throw new Error(`Sigma: cannot kill built-in layer "${e}"`);let r=this.extraElements[e];if(!r)throw new Error(`Sigma: cannot kill layer ${e}, which does not exist`);return r.remove(),delete this.extraElements[e],this}getWebGLContext(){if(!this.webGLContext)throw new Error("Sigma: WebGL context is not available");return this.webGLContext}getNodeDataTexture(){if(!this.internals.nodeDataTexture)throw new Error("Sigma: node data texture is not available");return this.internals.nodeDataTexture}getNormalizationFunction(){return this.normalizationFunction}addCustomLayerProgram(e,r,i){if(!this.depthLayers.includes(r))throw new Error(`Sigma: cannot add custom layer program at depth "${r}", it must be declared in primitives.depthLayers. Current layers: ${this.depthLayers.join(", ")}`);return this.customLayerPrograms.get(e)?.program.kill(),this.customLayerPrograms.set(e,{depth:r,factory:i,program:i(this.webGLContext)}),this.refresh(),this}removeCustomLayerProgram(e){let r=this.customLayerPrograms.get(e);return r&&(r.program.kill(),this.customLayerPrograms.delete(e),this.scheduleRender()),this}getCamera(){return this.camera}setCamera(e){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=e,this.bindCameraHandlers(),this.scheduleRender(),this}getContainer(){return this.container}getGraph(){return this.internals.graph}setGraph(e){return e===this.internals.graph?this:(this.stateManager.pruneNodes(r=>e.hasNode(r)),this.stateManager.pruneEdges(r=>e.hasEdge(r)),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=e,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh(),this)}getMouseCaptor(){return this.mouseCaptor}getTouchCaptor(){return this.touchCaptor}getDimensions(){return{width:this.width,height:this.height}}getGraphDimensions(){let e=this.customBBox||this.nodeExtent;return{width:e.x[1]-e.x[0]||1,height:e.y[1]-e.y[0]||1}}getNodeDisplayData(e){let r=this.internals.nodeDataCache[e];return r?Object.assign({},r):void 0}getEdgeDisplayData(e){let r=this.internals.edgeDataCache[e];return r?Object.assign({},r):void 0}getNodeState(e){return this.stateManager.getNodeState(e)}getEdgeState(e){return this.stateManager.getEdgeState(e)}getGraphState(){return this.stateManager.getGraphState()}setNodeState(e,r){return this.stateManager.setNodeState(e,r),this}setEdgeState(e,r){return this.stateManager.setEdgeState(e,r),this}setGraphState(e){return this.stateManager.setGraphState(e),this}_setPanning(e){this.stateManager.setGraphState({isPanning:e})}_setZooming(e){this.stateManager.setGraphState({isZooming:e})}_hasNodeDrag(){let{dragManager:e}=this.internals;return!!(e.pendingNode||e.session)}_showGestureHint(e){let r=this.internals.settings;r.gestureTarget==="shared"&&(this.gestureHint=this.gestureHint||new dr(this.container),this.gestureHint.show(e,r))}setNodesState(e,r){return this.stateManager.setNodesState(e,r),this}setEdgesState(e,r){return this.stateManager.setEdgesState(e,r),this}updateContainerCursor(){let e=this.stateManager.hovered,r=this.resolvedStageStyle.cursor||"";this.container.style.cursor=e&&go(this.internals,e)||r}refreshStageStyle(){this.resolvedStageStyle=yi(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}getNodeDisplayedLabels(){return new Set(this.labelRenderer.displayedNodeLabels)}getEdgeDisplayedLabels(){return new Set(this.labelRenderer.displayedEdgeLabels)}getSettings(){return{...this.internals.settings}}getSetting(e){return this.internals.settings[e]}getStyles(){return{...this.stylesDeclaration}}getPrimitives(){return{...this.internals.primitives}}setSetting(e,r){return this.internals.settings[e]=r,sa(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}updateSetting(e,r){return this.setSetting(e,r(this.internals.settings[e])),this}setSettings(e){return this.internals.settings={...this.internals.settings,...e},sa(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}resize(e){let r=this.width,i=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=Ut(),this.width===0)if(this.internals.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.internals.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!e&&r===this.width&&i===this.height)return this;this.labelRenderer.labelsDirty=!0;for(let n of[this.mouseLayer,...Object.values(this.extraElements)])n.style.width=this.width+"px",n.style.height=this.height+"px";return this.webGLContext&&(this.stageCanvas.setAttribute("width",this.width*this.internals.pixelRatio+"px"),this.stageCanvas.setAttribute("height",this.height*this.internals.pixelRatio+"px"),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit("resize"),this}clear(){return this.emit("beforeClear"),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit("afterClear"),this}scheduleStateRefresh(){this.needToRefreshState=!0,this.scheduleRender()}refreshState(){this.stateManager.flushGraphStateFlags();let e=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency==="graph-state",r=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency==="graph-state",i=!1;if(e)this.internals.graph.forEachNode(n=>{this.refreshNodeState(n)&&(i=!0)});else if(this.internals.nodeStyleAnalysis.dependency!=="static")for(let n of this.stateManager.dirtyNodes)this.refreshNodeState(n)&&(i=!0);if(r)this.internals.graph.forEachEdge(n=>{this.refreshEdgeState(n)&&(i=!0)});else if(this.edgeStyleAnalysis.dependency!=="static")for(let n of this.stateManager.dirtyEdges)this.refreshEdgeState(n)&&(i=!0);this.stateManager.graphStateChanged&&this.stylesDeclaration?.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),i&&(this.pendingProcess="full")}refreshNodeState(e){let r=this.internals.nodeDataCache[e];if(!r||this.nodeReducer){let b=this.internals.nodeDataCache[e]?.depth,p=this.internals.nodeDataCache[e]?.zIndex,y=this.internals.nodeDataCache[e]?.labelAttachment;this.updateNode(e);let S=this.internals.nodeDataCache[e];this.internals.attachmentManager&&S.labelAttachment!==y&&this.internals.attachmentManager.invalidateNode(e);let v;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&S.shape&&S.shape in this.internals.nodeShapeMap?v=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[S.shape]]:v=je(S.shape||"circle"),this.internals.nodeDataTexture.updateNode(e,S.x,S.y,S.size,v,...Cr(S),S.color),b&&S.depth!==b&&this.updateNodeDepthRanges(e,b,S.depth);let E=this.nodeProgramIndex[e];return E!==void 0&&(this.addNodeToProgram(e,E),this.nodeProgram.invalidateBuffers()),p!==void 0&&S.zIndex!==p}let i=this.internals.graph.getNodeAttributes(e),n=this.stateManager.getNodeState(e),o=r.size,s=r.shape,l=r.depth,d=r.zIndex,c=r.labelAttachment,g=r.rotationAlignment,u=r.labelRotationAlignment,f=r.color;ia(this.stylesDeclaration.nodes,i,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,i,n);let h=this.nodeGraphCoords[e],m=r.x!==h.x||r.y!==h.y;if(m&&(h.x=r.x,h.y=r.y),this.normalizationFunction.applyTo(r),this.internals.nodeShapeMap?(!r.shape||!(r.shape in this.internals.nodeShapeMap))&&(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.attachmentManager&&r.labelAttachment!==c&&this.internals.attachmentManager.invalidateNode(e),Ye(this.internals.nodesWithForcedLabels,e,Pe(r)),Ye(this.internals.nodesWithBackdrop,e,ja(r)),m||r.size!==o||r.shape!==s||r.rotationAlignment!==g||r.labelRotationAlignment!==u||r.color!==f){let b;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&r.shape&&r.shape in this.internals.nodeShapeMap?b=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[r.shape]]:b=je(r.shape||"circle"),this.internals.nodeDataTexture.updateNode(e,r.x,r.y,r.size,b,...Cr(r),r.color)}this.itemBuckets.nodes.set(e,r.depth),r.depth!==l&&this.updateNodeDepthRanges(e,l,r.depth);let x=this.nodeProgramIndex[e];return x!==void 0&&(this.addNodeToProgram(e,x),this.nodeProgram.invalidateBuffers()),r.zIndex!==d}refreshEdgeState(e){let r=this.internals.edgeDataCache[e];if(!r||this.edgeReducer){let m=r?.depth,x=r?.zIndex;this.updateEdge(e);let b=this.internals.edgeDataCache[e];m&&b.depth!==m&&this.updateEdgeDepthRanges(e,m,b.depth);let p=this.edgeProgramIndex[e];return p!==void 0&&(this.addEdgeToProgram(e,p),this.edgeProgram.invalidateBuffers()),x!==void 0&&b.zIndex!==x}let i=this.internals.graph.getEdgeAttributes(e),n=this.stateManager.getEdgeState(e),o=r.depth,s=r.zIndex,l=r.size,d=r.path,c=r.selfLoopPath,g=r.parallelPath,u=r.head,f=r.tail;na(this.stylesDeclaration.edges,i,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,i),this.applyEdgeSpread(e,r,n),Ye(this.internals.edgesWithForcedLabels,e,Pe(r)),this.itemBuckets.edges.set(e,r.depth),r.depth!==o&&this.updateEdgeDepthRanges(e,o,r.depth);let h=this.edgeProgramIndex[e];if(h!==void 0)if(r.size!==l||r.path!==d||r.selfLoopPath!==c||r.parallelPath!==g||r.head!==u||r.tail!==f)this.addEdgeToProgram(e,h),this.edgeProgram.invalidateBuffers();else{let x=this.internals.graph.source(e),b=this.internals.graph.target(e),p=this.internals.nodeDataCache[x],y=this.internals.nodeDataCache[b],S=this.edgeTextureIndexCache[e];this.edgeProgram.process(Fe(this.pickingState,"edge",e),h,p,y,r,S),this.edgeProgram.invalidateBuffers()}return r.zIndex!==s}refresh(e){let r=e?.skipIndexation!==void 0?e?.skipIndexation:!1,i=e?.schedule!==void 0?e.schedule:!1;if(!e||!e.partialGraph)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(o=>this.addNode(o)),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(o=>this.addEdge(o)),this.pendingProcess="full";else{let o=e.partialGraph?.nodes||[];for(let l=0,d=o?.length||0;l<d;l++){let c=""+o[l],g=this.internals.nodeDataCache[c]?.labelAttachment;if(this.updateNode(c),this.internals.attachmentManager&&(this.internals.nodeDataCache[c]?.labelAttachment||g)&&this.internals.attachmentManager.invalidateNode(c),r){let u=this.nodeProgramIndex[c];if(u===void 0)throw new Error(`Sigma: node "${c}" can't be repaint`);this.addNodeToProgram(c,u)}}r&&o.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);let s=e?.partialGraph?.edges||[];for(let l=0,d=s.length;l<d;l++){let c=""+s[l];if(this.updateEdge(c),r){let g=this.edgeProgramIndex[c];if(g===void 0)throw new Error(`Sigma: edge "${c}" can't be repaint`);this.addEdgeToProgram(c,g)}}r&&s.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!r&&this.pendingProcess!=="full"&&(this.pendingProcess=s.length>0?"full":"nodes")}return i?this.scheduleRender():this.render(),this}scheduleRender(){return this.renderFrame||(this.renderFrame=requestAnimationFrame(()=>{this.render()})),this}scheduleRefresh(e){return this.refresh({...e,schedule:!0})}getViewportZoomedState(e,r){let{ratio:i,angle:n,x:o,y:s}=this.camera.getState(),{minCameraRatio:l,maxCameraRatio:d}=this.internals.settings;typeof d=="number"&&(r=Math.min(r,d)),typeof l=="number"&&(r=Math.max(r,l));let c=r/i,g={x:this.width/2,y:this.height/2},u=this.viewportToFramedGraph(e),f=this.viewportToFramedGraph(g);return{angle:n,x:(u.x-f.x)*(1-c)+o,y:(u.y-f.y)*(1-c)+s,ratio:r}}viewRectangle(){let e=this.viewportToFramedGraph({x:0,y:0}),r=this.viewportToFramedGraph({x:this.width,y:0}),i=this.viewportToFramedGraph({x:0,y:this.height});return{x1:e.x,y1:e.y,x2:r.x,y2:r.y,height:r.y-i.y}}framedGraphToViewport(e,r={}){let i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,n=r.matrix||(i?ye(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding()):this.matrix),o=Re(n,e);return{x:(1+o.x)*this.width/2,y:(1-o.y)*this.height/2}}viewportToFramedGraph(e,r={}){let i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,n=r.matrix||(i?ye(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding(),!0):this.invMatrix),o=Re(n,{x:e.x/this.width*2-1,y:1-e.y/this.height*2});return isNaN(o.x)&&(o.x=0),isNaN(o.y)&&(o.y=0),o}viewportToGraph(e,r={}){return this.normalizationFunction.inverse(this.viewportToFramedGraph(e,r))}graphToViewport(e,r={}){return this.framedGraphToViewport(this.normalizationFunction(e),r)}graphToFramedGraph(e){return this.normalizationFunction(e)}framedGraphToGraph(e){return this.normalizationFunction.inverse(e)}getGraphToViewportRatio(){let e={x:0,y:0},r={x:1,y:1},i=Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2)),n=this.graphToViewport(e),o=this.graphToViewport(r);return Math.sqrt(Math.pow(n.x-o.x,2)+Math.pow(n.y-o.y,2))/i}computeNodeExtent(){let e=this.nodeGraphCoords,r=Object.keys(e);if(!r.length)return{x:[0,1],y:[0,1]};let i=1/0,n=-1/0,o=1/0,s=-1/0;for(let l=0,d=r.length;l<d;l++){let{x:c,y:g}=e[r[l]];c<i&&(i=c),c>n&&(n=c),g<o&&(o=g),g>s&&(s=g)}return{x:[i,n],y:[o,s]}}getBBox(){return this.nodeExtent}getCustomBBox(){return this.customBBox}setCustomBBox(e){return this.customBBox=e,this.scheduleRender(),this}kill(){this.emit("kill"),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null);let e=this.container;for(;e.firstChild;)e.removeChild(e.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),this.internals.edgeLabelProgram.kill(),this.internals.edgeLabelBackgroundProgram.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),this.internals.attachmentProgram?.kill(),this.internals.attachmentManager?.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;for(let{program:r}of this.customLayerPrograms.values())r.kill();this.customLayerPrograms.clear(),this.sdfAtlas&&(this.sdfAtlas=null),this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext&&(this.webGLContext.getExtension("WEBGL_lose_context")?.loseContext(),this.webGLContext=null),this.gestureHint?.kill(),this.gestureHint=null,this.mouseLayer.remove();for(let r in this.extraElements)this.extraElements[r].remove();this.extraElements={}}scaleSize(e=1,r=this.camera.ratio){return e/this.internals.settings.zoomToSizeRatioFunction(r)*(this.getSetting("itemSizesReference")==="positions"?r*this.graphToViewportRatio:1)}getStageCanvas(){return this.stageCanvas}getMouseLayer(){return this.mouseLayer}};var Fo=ur;var xu=["#0b5c6b","#b5651d","#6b4c9a","#2e7d32","#ad1457","#455a64","#8d6e00","#00838f","#5d4037","#3949ab"],yu=["#6ec4d2","#e0a060","#b49ae0","#7cc47f","#f06292","#a7b8c2","#e0c050","#4dd0e1","#bcaaa4","#9fa8da"],Io=new Set(["Source"]),ko=new Set(["source","extracted"]),No={frontmatter:"Declared relations",link:"Links in text",folder:"Theme membership",source:"Sources",extracted:"Extracted (machine)"},ie=a=>document.getElementById(a),Mo=ie("g-canvas"),ma=ie("g-panel"),Su=ie("g-status"),ba=ie("g-list"),Ri=ie("g-view"),Pt=ie("g-search"),vu=ie("g-names"),X=a=>String(a??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Eu=a=>/^https?:\/\//.test(a),Tu=a=>a==="human-reviewed"?"Reviewed by Muthu":a==="machine-confirmed"?"Machine-confirmed":"Not yet reviewed",cr=a=>getComputedStyle(document.documentElement).getPropertyValue(a).trim(),Ne=new Set(Io),hr=new Set(ko),at=null,Pi=null,Q=new nn({multi:!0,type:"directed",allowSelfLoops:!1}),W=null,Ee={};function zo(){let a=document.documentElement.getAttribute("saved-theme")==="dark",t=a?yu:xu,e=cr("--ink"),r=cr("--muted"),i=cr("--page"),n=cr("--strong"),o=cr("--accent"),s=a?"#2a2d33":"#e4e2dc";Q.updateEachNodeAttributes((l,d)=>({...d,color:d.kind==="Theme"?e:d.kind==="Source"?r:t[(d.community||0)%t.length],dimColor:s,labelColor:e,backdrop:i})),Q.updateEachEdgeAttributes((l,d)=>({...d,color:n,dimColor:a?"#202328":"#efeee9",activeColor:o})),W?.refresh()}function _u(a){return(a.type==="Theme"?8:a.type==="Source"?3:4.5)+Math.sqrt(a.degree||0)*1.6}function gr(){let a=Pi||at,t=new Set;a&&(t.add(a),Q.forEachNeighbor(a,e=>{W.getNodeState(e).isHidden||t.add(e)})),Q.forEachNode(e=>W.setNodeState(e,{isActive:t.has(e),isHighlighted:e===at})),Q.forEachEdge((e,r,i,n)=>W.setEdgeState(e,{isActive:!!a&&(i===a||n===a)})),W.setGraphState({hasActive:!!a}),W.refresh({skipIndexation:!0})}function fr(){Q.forEachNode((a,t)=>W.setNodeState(a,{isHidden:Ne.has(t.kind)})),Q.forEachEdge((a,t,e,r)=>{let i=hr.has(t.origin)||Ne.has(Q.getNodeAttribute(e,"kind"))||Ne.has(Q.getNodeAttribute(r,"kind"));W.setEdgeState(a,{isHidden:i})}),W.refresh({skipIndexation:!0}),document.querySelectorAll("#f-types input").forEach(a=>a.checked=!Ne.has(a.value)),document.querySelectorAll("#f-origins input").forEach(a=>a.checked=!hr.has(a.value)),xa(),$o()}function Bo(){return Q.filterNodes(a=>!W.getNodeState(a).isHidden)}function Au(){return Q.filterEdges(a=>!W.getEdgeState(a).isHidden)}function xa(a){Su.textContent=a??`${Bo().length} nodes \xB7 ${Au().length} connections shown`}function Du(a,t){let e={},r={};a.forEach(i=>e[i.type]=(e[i.type]||0)+1),t.forEach(i=>r[i.origin]=(r[i.origin]||0)+1),ie("f-types").insertAdjacentHTML("beforeend",Object.keys(e).sort().map(i=>`<label><input type="checkbox" value="${X(i)}"> ${X(i)} <span class="muted">${e[i]}</span></label>`).join("")),ie("f-origins").insertAdjacentHTML("beforeend",Object.keys(No).filter(i=>r[i]).map(i=>`<label><input type="checkbox" value="${X(i)}"> ${X(No[i])} <span class="muted">${r[i]}</span></label>`).join("")),document.querySelectorAll("#f-types input").forEach(i=>i.addEventListener("change",()=>{i.checked?Ne.delete(i.value):Ne.add(i.value),fr(),gr()})),document.querySelectorAll("#f-origins input").forEach(i=>i.addEventListener("change",()=>{i.checked?hr.delete(i.value):hr.add(i.value),fr()}))}function Oo(a){at=a;let t=Ee[a],e=[],r=[];Q.forEachOutEdge(a,(n,o,s,l)=>{W.getEdgeState(n).isHidden||e.push(`<li><a href="#" data-id="${X(l)}">${X(Ee[l].label)}</a> <span class="muted">${X(String(o.rel).replace(/_/g," "))}</span></li>`)}),Q.forEachInEdge(a,(n,o,s)=>{W.getEdgeState(n).isHidden||r.push(`<li><a href="#" data-id="${X(s)}">${X(Ee[s].label)}</a> <span class="muted">${X(String(o.rel).replace(/_/g," "))}</span></li>`)}),ma.innerHTML=`<button class="close" type="button" aria-label="Close">\xD7</button><p class="kind">${X(t.type)}</p><h2>${X(t.label)}</h2>`+(t.summary?`<p>${X(t.summary)}</p>`:"")+(t.type!=="Source"&&t.type!=="Theme"?`<p class="muted">${X(Tu(t.trust))}${t.updated?` \xB7 updated ${X(t.updated)}`:""}</p>`:"")+`<p><a class="open" href="${X(t.url)}">${Eu(t.url)?"Open source":"Open note"} \u2192</a></p>`+(e.length?`<h3>Points to</h3><ul>${e.join("")}</ul>`:"")+(r.length?`<h3>Pointed to by</h3><ul>${r.join("")}</ul>`:""),ma.hidden=!1;let i=new URL(location.href);i.searchParams.set("node",a),history.replaceState(null,"",i),gr()}function ya(){at=null,ma.hidden=!0;let a=new URL(location.href);a.searchParams.delete("node"),history.replaceState(null,"",a),gr()}function Ci(a){let t=Q.getNodeAttribute(a,"kind");Ne.has(t)&&(Ne.delete(t),fr()),Oo(a);let e=W.getNodeDisplayData(a);e&&W.getCamera().animate({x:e.x,y:e.y,ratio:Math.min(W.getCamera().ratio,.45)},{duration:400})}ma.addEventListener("click",a=>{let t=a.target.closest("[data-id]");t?(a.preventDefault(),Ci(t.getAttribute("data-id"))):a.target.closest(".close")&&ya()});function Wo(a){if(a=a.trim().toLowerCase(),!a)return null;let t=Object.values(Ee),e=t.find(r=>r.label.toLowerCase()===a)||t.find(r=>r.type!=="Source"&&r.label.toLowerCase().includes(a))||t.find(r=>r.label.toLowerCase().includes(a));return e?e.id:null}function Uo(){let a=Wo(Pt.value);a?(xa(),Ci(a)):xa(`No note matches \u201C${Pt.value}\u201D.`)}Pt.addEventListener("change",()=>{Wo(Pt.value)&&Uo()});Pt.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),Uo())});function $o(){if(ba.hidden)return;let a=Bo().map(t=>Ee[t]).sort((t,e)=>t.label.localeCompare(e.label)).map(t=>`<tr><td><a href="${X(t.url)}">${X(t.label)}</a></td><td>${X(t.type)}</td><td>${t.degree||0}</td><td>${X(t.summary)}</td></tr>`);ba.innerHTML=`<table><caption class="sr">Nodes in the graph</caption><thead><tr><th>Name</th><th>Type</th><th>Connections</th><th>Summary</th></tr></thead><tbody>${a.join("")}</tbody></table>`}Ri.addEventListener("click",()=>{let a=ba.hidden;ba.hidden=!a,Mo.style.visibility=a?"hidden":"visible",Ri.setAttribute("aria-pressed",String(a)),Ri.textContent=a?"Graph view":"List view",$o()});ie("g-reset").addEventListener("click",()=>{Ne=new Set(Io),hr=new Set(ko),Pt.value="",ya(),fr(),W.getCamera().animate({x:.5,y:.5,ratio:1,angle:0},{duration:300})});ie("g-zoom-in").addEventListener("click",()=>W.getCamera().zoomIn({duration:200}));ie("g-zoom-out").addEventListener("click",()=>W.getCamera().zoomOut({duration:200}));ie("g-fit").addEventListener("click",()=>W.getCamera().animate({x:.5,y:.5,ratio:1,angle:0},{duration:300}));document.addEventListener("keydown",a=>{a.key==="Escape"&&at&&ya()});document.addEventListener("themechange",zo);fetch("/graph.json").then(a=>{if(!a.ok)throw new Error(String(a.status));return a.json()}).then(a=>{a.nodes.forEach(r=>{Ee[r.id]=r,Q.addNode(r.id,{x:r.x,y:-r.y,size:_u(r),label:r.label,kind:r.type,community:r.community})});let t=a.edges.filter(r=>r.source!==r.target&&Ee[r.source]&&Ee[r.target]);t.forEach(r=>Q.addEdge(r.source,r.target,{rel:r.type,origin:r.origin,size:r.origin==="folder"?.6:1})),zo(),W=new Fo(Q,Mo,{settings:{itemSizesReference:"screen",labelFont:"Instrument Sans, system-ui, sans-serif",labelDensity:.35,labelRenderedSizeThreshold:9,stagePadding:40,zIndex:!0},customNodeState:{isActive:!1},customEdgeState:{isActive:!1},customGraphState:{hasActive:!1},styles:{nodes:[we.nodes,{labelColor:{attribute:"labelColor"},backdropColor:{attribute:"backdrop"},cursor:"pointer",labelSize:12},{when:r=>r.kind==="Theme",then:{labelVisibility:"visible",labelSize:13}},{when:(r,i,n)=>n.hasActive&&!i.isActive&&!i.isHovered,then:{color:{attribute:"dimColor"},labelVisibility:"hidden"}},{whenState:"isActive",then:{labelVisibility:"visible",depth:"topNodes"}},{whenState:"isHighlighted",then:{backdropVisibility:"visible"}}],edges:[we.edges,{when:(r,i,n)=>n.hasActive&&!i.isActive,then:{color:{attribute:"dimColor"}}},{whenState:"isActive",then:{color:{attribute:"activeColor"},size:1.6,depth:"topEdges"}}]}}),W.on("enterNode",({node:r})=>{Pi=r,gr()}),W.on("leaveNode",()=>{Pi=null,gr()}),W.on("clickNode",({node:r})=>Oo(r)),W.on("doubleClickNode",r=>{r.preventSigmaDefault?.(),location.href=Ee[r.node].url}),W.on("clickStage",()=>{at&&ya()}),vu.innerHTML=a.nodes.filter(r=>r.type!=="Source").map(r=>`<option value="${X(r.label)}">`).join(""),Du(a.nodes,t),fr();let e=new URL(location.href).searchParams.get("node");e&&Ee[e]&&Ci(e),window.kfExplorer={screenPos:r=>{let i=W.getNodeDisplayData(r);if(!i)return null;let n=W.framedGraphToViewport({x:i.x,y:i.y});return[n.x,n.y]},selected:()=>at,cameraRatio:()=>W.getCamera().ratio,renderer:W},ie("explorer").dataset.ready="true"}).catch(a=>{console.error(a),xa("The graph could not be loaded.")});})();
