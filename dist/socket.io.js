!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).io=e()}(this,function(){"use strict";function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"==typeof t?t:String(t)}(r.key),r)}}function a(t,e,n){return e&&q(t.prototype,e),n&&q(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function D(t,e,n){return(D=I()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);e=new(Function.bind.apply(t,r));return n&&i(e,n.prototype),e}).apply(null,arguments)}function F(t){var n="function"==typeof Map?new Map:void 0;return function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return D(t,arguments,f(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)}(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(n){var r=I();return function(){var t,e=f(n),e=(t=r?(t=f(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}}function d(){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r)return(r=Object.getOwnPropertyDescriptor(r,e)).get?r.get.call(arguments.length<3?t:n):r.value}).apply(this,arguments)}function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function M(t,e){var n,r,i,o,s="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(s)return r=!(n=!0),{s:function(){s=s.call(t)},n:function(){var t=s.next();return n=t.done,t},e:function(t){r=!0,i=t},f:function(){try{n||null==s.return||s.return()}finally{if(r)throw i}}};if(Array.isArray(t)||(s=function(t,e){var n;if(t)return"string"==typeof t?U(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(t,e):void 0}(t))||e&&t&&"number"==typeof t.length)return s&&(t=s),o=0,{s:e=function(){},n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var y,o=Object.create(null),r=(o.open="0",o.close="1",o.ping="2",o.pong="3",o.message="4",o.upgrade="5",o.noop="6",Object.create(null)),V=(Object.keys(o).forEach(function(t){r[o[t]]=t}),{type:"error",data:"parser error"}),H="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),K="function"==typeof ArrayBuffer,Y=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer},v=function(t,e,n){var r=t.type,t=t.data;return H&&t instanceof Blob?e?n(t):W(t,n):K&&(t instanceof ArrayBuffer||Y(t))?e?n(t):W(new Blob([t]),n):n(o[r]+(t||""))},W=function(t,e){var n=new FileReader;return n.onload=function(){var t=n.result.split(",")[1];e("b"+(t||""))},n.readAsDataURL(t)};function z(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}for(var J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g="undefined"==typeof Uint8Array?[]:new Uint8Array(256),t=0;t<J.length;t++)g[J.charCodeAt(t)]=t;function $(t,e){var n;return X?(n=Q(t),G(n,e)):{base64:!0,data:t}}var m,Q=function(t){for(var e,n,r,i,o=.75*t.length,s=t.length,a=0,o=("="===t[t.length-1]&&(o--,"="===t[t.length-2])&&o--,new ArrayBuffer(o)),c=new Uint8Array(o),u=0;u<s;u+=4)e=g[t.charCodeAt(u)],n=g[t.charCodeAt(u+1)],r=g[t.charCodeAt(u+2)],i=g[t.charCodeAt(u+3)],c[a++]=e<<2|n>>4,c[a++]=(15&n)<<4|r>>2,c[a++]=(3&r)<<6|63&i;return o},X="function"==typeof ArrayBuffer,b=function(t,e){var n;return"string"!=typeof t?{type:"message",data:G(t,e)}:"b"===(n=t.charAt(0))?{type:"message",data:$(t.substring(1),e)}:r[n]?1<t.length?{type:r[n],data:t.substring(1)}:{type:r[n]}:V},G=function(t,e){return"blob"!==e?t instanceof ArrayBuffer?t:t.buffer:t instanceof Blob?t:new Blob([t])},Z=String.fromCharCode(30);function k(t){if(t){var e,n=t;for(e in k.prototype)n[e]=k.prototype[e];return n}}k.prototype.on=k.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},k.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},k.prototype.off=k.prototype.removeListener=k.prototype.removeAllListeners=k.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)this._callbacks={};else{var n=this._callbacks["$"+t];if(n)if(1==arguments.length)delete this._callbacks["$"+t];else{for(var r,i=0;i<n.length;i++)if((r=n[i])===e||r.fn===e){n.splice(i,1);break}0===n.length&&delete this._callbacks["$"+t]}}return this},k.prototype.emitReserved=k.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n)for(var r=0,i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,e);return this},k.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},k.prototype.hasListeners=function(t){return!!this.listeners(t).length};var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function tt(n){for(var t=arguments.length,e=new Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return e.reduce(function(t,e){return n.hasOwnProperty(e)&&(t[e]=n[e]),t},{})}var et=n.setTimeout,nt=n.clearTimeout;function w(t,e){e.useNativeTimers?(t.setTimeoutFn=et.bind(n),t.clearTimeoutFn=nt.bind(n)):(t.setTimeoutFn=n.setTimeout.bind(n),t.clearTimeoutFn=n.clearTimeout.bind(n))}var rt,it=function(){h(i,F(Error));var r=p(i);function i(t,e,n){return s(this,i),(t=r.call(this,t)).description=e,t.context=n,t.type="TransportError",t}return a(i)}(),_=function(){h(r,k);var n=p(r);function r(t){var e;return s(this,r),(e=n.call(this)).writable=!1,w(l(e),t),e.opts=t,e.query=t.query,e.socket=t.socket,e}return a(r,[{key:"onError",value:function(t,e,n){return d(f(r.prototype),"emitReserved",this).call(this,"error",new it(t,e,n)),this}},{key:"open",value:function(){return this.readyState="opening",this.doOpen(),this}},{key:"close",value:function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}},{key:"send",value:function(t){"open"===this.readyState&&this.write(t)}},{key:"onOpen",value:function(){this.readyState="open",this.writable=!0,d(f(r.prototype),"emitReserved",this).call(this,"open")}},{key:"onData",value:function(t){t=b(t,this.socket.binaryType);this.onPacket(t)}},{key:"onPacket",value:function(t){d(f(r.prototype),"emitReserved",this).call(this,"packet",t)}},{key:"onClose",value:function(t){this.readyState="closed",d(f(r.prototype),"emitReserved",this).call(this,"close",t)}},{key:"pause",value:function(t){}},{key:"createUri",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}},{key:"_hostname",value:function(){var t=this.opts.hostname;return-1===t.indexOf(":")?t:"["+t+"]"}},{key:"_port",value:function(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}},{key:"_query",value:function(t){t=function(t){var e,n="";for(e in t)t.hasOwnProperty(e)&&(n.length&&(n+="&"),n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return n}(t);return t.length?"?"+t:""}}]),r}(),ot="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),O=64,st=0,e=0;function at(t){for(var e="";e=ot[t%O]+e,0<(t=Math.floor(t/O)););return e}function ct(){var t=at(+new Date);return t!==rt?(st=0,rt=t):t+"."+at(st++)}for(;e<O;e++)ot[e],e;var A=!1;try{A="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}var ut=A;function ht(t){t=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!t||ut))return new XMLHttpRequest}catch(t){}if(!t)try{return new n[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(t){}}function ft(){}var lt=null!=new ht({xdomain:!1}).responseType,A=function(){h(i,_);var r=p(i);function i(t){s(this,i),(e=r.call(this,t)).polling=!1,"undefined"!=typeof location&&(n=(n=location.port)||("https:"===location.protocol?"443":"80"),e.xd="undefined"!=typeof location&&t.hostname!==location.hostname||n!==t.port);var e,n=t&&t.forceBase64;return e.supportsBinary=lt&&!n,e.opts.withCredentials&&(e.cookieJar=void 0),e}return a(i,[{key:"name",get:function(){return"polling"}},{key:"doOpen",value:function(){this.poll()}},{key:"pause",value:function(t){function e(){r.readyState="paused",t()}var n,r=this;this.readyState="pausing";this.polling||!this.writable?(n=0,this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))):e()}},{key:"poll",value:function(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}},{key:"onData",value:function(t){var e=this;!function(t,e){for(var n=t.split(Z),r=[],i=0;i<n.length;i++){var o=b(n[i],e);if(r.push(o),"error"===o.type)break}return r}(t,this.socket.binaryType).forEach(function(t){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose({description:"transport closed by the server"}),!1;e.onPacket(t)}),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState)&&this.poll()}},{key:"doClose",value:function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)}},{key:"write",value:function(t){var n,r,i,o,e=this;this.writable=!1,n=function(t){e.doWrite(t,function(){e.writable=!0,e.emitReserved("drain")})},r=(t=t).length,i=new Array(r),o=0,t.forEach(function(t,e){v(t,!1,function(t){i[e]=t,++o===r&&n(i.join(Z))})})}},{key:"uri",value:function(){var t=this.opts.secure?"https":"http",e=this.query||{};return!1!==this.opts.timestampRequests&&(e[this.opts.timestampParam]=ct()),this.supportsBinary||e.sid||(e.b64=1),this.createUri(t,e)}},{key:"request",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return u(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new E(this.uri(),t)}},{key:"doWrite",value:function(t,e){var n=this,t=this.request({method:"POST",data:t});t.on("success",e),t.on("error",function(t,e){n.onError("xhr post error",t,e)})}},{key:"doPoll",value:function(){var n=this,t=this.request();t.on("data",this.onData.bind(this)),t.on("error",function(t,e){n.onError("xhr poll error",t,e)}),this.pollXhr=t}}]),i}(),E=function(){h(o,k);var r=p(o);function o(t,e){var n;return s(this,o),w(l(n=r.call(this)),e),n.opts=e,n.method=e.method||"GET",n.uri=t,n.data=void 0!==e.data?e.data:null,n.create(),n}return a(o,[{key:"create",value:function(){var t,e=this,n=tt(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref"),r=(n.xdomain=!!this.opts.xd,this.xhr=new ht(n));try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders)for(var i in r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this.opts.extraHeaders[i])}catch(t){}if("POST"===this.method)try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}null!=(t=this.opts.cookieJar)&&t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=function(){var t;3===r.readyState&&null!=(t=e.opts.cookieJar)&&t.parseCookies(r),4===r.readyState&&(200===r.status||1223===r.status?e.onLoad():e.setTimeoutFn(function(){e.onError("number"==typeof r.status?r.status:0)},0))},r.send(this.data)}catch(t){return void this.setTimeoutFn(function(){e.onError(t)},0)}"undefined"!=typeof document&&(this.index=o.requestsCount++,o.requests[this.index]=this)}},{key:"onError",value:function(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}},{key:"cleanup",value:function(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=ft,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete o.requests[this.index],this.xhr=null}}},{key:"onLoad",value:function(){var t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}},{key:"abort",value:function(){this.cleanup()}}]),o}();function pt(){for(var t in E.requests)E.requests.hasOwnProperty(t)&&E.requests[t].abort()}E.requestsCount=0,E.requests={},"undefined"!=typeof document&&("function"==typeof attachEvent?attachEvent("onunload",pt):"function"==typeof addEventListener&&(S="onpagehide"in n?"pagehide":"unload",addEventListener(S,pt,!1)));var R="function"==typeof Promise&&"function"==typeof Promise.resolve?function(t){return Promise.resolve().then(t)}:function(t,e){return e(t,0)},T=n.WebSocket||n.MozWebSocket,dt="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();var yt={websocket:function(){h(r,_);var n=p(r);function r(t){var e;return s(this,r),(e=n.call(this,t)).supportsBinary=!t.forceBase64,e}return a(r,[{key:"name",get:function(){return"websocket"}},{key:"doOpen",value:function(){if(this.check()){var t=this.uri(),e=this.opts.protocols,n=dt?{}:tt(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=dt?new T(t,e,n):e?new T(t,e):new T(t)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}}},{key:"addEventListeners",value:function(){var e=this;this.ws.onopen=function(){e.opts.autoUnref&&e.ws._socket.unref(),e.onOpen()},this.ws.onclose=function(t){return e.onClose({description:"websocket connection closed",context:t})},this.ws.onmessage=function(t){return e.onData(t.data)},this.ws.onerror=function(t){return e.onError("websocket error",t)}}},{key:"write",value:function(n){for(var r=this,i=(this.writable=!1,0);i<n.length;i++)!function(){var t=n[i],e=i===n.length-1;v(t,r.supportsBinary,function(t){try{r.ws.send(t)}catch(t){}e&&R(function(){r.writable=!0,r.emitReserved("drain")},r.setTimeoutFn)})}()}},{key:"doClose",value:function(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}},{key:"uri",value:function(){var t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=ct()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}},{key:"check",value:function(){return!!T}}]),r}(),webtransport:function(){h(e,_);var t=p(e);function e(){return s(this,e),t.apply(this,arguments)}return a(e,[{key:"name",get:function(){return"webtransport"}},{key:"doOpen",value:function(){var o=this;"function"==typeof WebTransport&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(function(){o.onClose()}).catch(function(t){o.onError("webtransport error",t)}),this.transport.ready.then(function(){o.transport.createBidirectionalStream().then(function(t){var i,e=t.readable.getReader();o.writer=t.writable.getWriter();(function r(){e.read().then(function(t){var e,n=t.done,t=t.value;n||(i=!i&&1===t.byteLength&&54===t[0]||(o.onPacket((n=t,t=i,e="arraybuffer",m=m||new TextDecoder,t=t||n[0]<48||54<n[0],b(t?n:m.decode(n),e))),!1),r())}).catch(function(t){})})();t=o.query.sid?'0{"sid":"'.concat(o.query.sid,'"}'):"0";o.writer.write((new TextEncoder).encode(t)).then(function(){return o.onOpen()})})}))}},{key:"write",value:function(n){for(var o=this,t=(this.writable=!1,function(){var t,e,r=n[s],i=s===n.length-1;t=r,e=function(t){var e,n;n=t,"message"===(e=r).type&&"string"!=typeof e.data&&48<=n[0]&&n[0]<=54&&o.writer.write(Uint8Array.of(54)),o.writer.write(t).then(function(){i&&R(function(){o.writable=!0,o.emitReserved("drain")},o.setTimeoutFn)})},H&&t.data instanceof Blob?t.data.arrayBuffer().then(z).then(e):K&&(t.data instanceof ArrayBuffer||Y(t.data))?e(z(t.data)):v(t,!1,function(t){y=y||new TextEncoder,e(y.encode(t))})}),s=0;s<n.length;s++)t()}},{key:"doClose",value:function(){var t;null!=(t=this.transport)&&t.close()}}]),e}(),polling:A},vt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,gt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function C(t){for(var r,e=t,n=t.indexOf("["),i=t.indexOf("]"),o=(-1!=n&&-1!=i&&(t=t.substring(0,n)+t.substring(n,i).replace(/:/g,";")+t.substring(i,t.length)),vt.exec(t||"")),s={},a=14;a--;)s[gt[a]]=o[a]||"";return-1!=n&&-1!=i&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=function(t){var e=t.replace(/\/{2,9}/g,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||e.splice(0,1);"/"==t.slice(-1)&&e.splice(e.length-1,1);return e}(s.path),s.queryKey=(r={},s.query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(t,e,n){e&&(r[e]=n)}),r),s}var B=function(){h(f,k);var r=p(f);function f(t){var e,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return s(this,f),(e=r.call(this)).writeBuffer=[],t&&"object"===c(t)&&(n=t,t=null),t?(t=C(t),n.hostname=t.host,n.secure="https"===t.protocol||"wss"===t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=C(n.host).host),w(l(e),n),e.secure=null!=n.secure?n.secure:"undefined"!=typeof location&&"https:"===location.protocol,n.hostname&&!n.port&&(n.port=e.secure?"443":"80"),e.hostname=n.hostname||("undefined"!=typeof location?location.hostname:"localhost"),e.port=n.port||("undefined"!=typeof location&&location.port?location.port:e.secure?"443":"80"),e.transports=n.transports||["polling","websocket","webtransport"],e.writeBuffer=[],e.prevBufferLen=0,e.opts=u({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),e.opts.path=e.opts.path.replace(/\/$/,"")+(e.opts.addTrailingSlash?"/":""),"string"==typeof e.opts.query&&(e.opts.query=function(t){for(var e={},n=t.split("&"),r=0,i=n.length;r<i;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}(e.opts.query)),e.id=null,e.upgrades=null,e.pingInterval=null,e.pingTimeout=null,e.pingTimeoutTimer=null,"function"==typeof addEventListener&&(e.opts.closeOnBeforeunload&&(e.beforeunloadEventListener=function(){e.transport&&(e.transport.removeAllListeners(),e.transport.close())},addEventListener("beforeunload",e.beforeunloadEventListener,!1)),"localhost"!==e.hostname)&&(e.offlineEventListener=function(){e.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",e.offlineEventListener,!1)),e.open(),e}return a(f,[{key:"createTransport",value:function(t){var e=u({},this.opts.query),e=(e.EIO=4,e.transport=t,this.id&&(e.sid=this.id),u({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]));return new yt[t](e)}},{key:"open",value:function(){var t,e=this;if(this.opts.rememberUpgrade&&f.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn(function(){e.emitReserved("error","No transports available")},0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}},{key:"setTransport",value:function(t){var e=this;this.transport&&this.transport.removeAllListeners(),(this.transport=t).on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",function(t){return e.onClose("transport close",t)})}},{key:"probe",value:function(t){var e=this,n=this.createTransport(t),r=!1,i=(f.priorWebsocketSuccess=!1,function(){r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",function(t){r||("pong"===t.type&&"probe"===t.data?(e.upgrading=!0,e.emitReserved("upgrading",n),n&&(f.priorWebsocketSuccess="websocket"===n.name,e.transport.pause(function(){r||"closed"!==e.readyState&&(h(),e.setTransport(n),n.send([{type:"upgrade"}]),e.emitReserved("upgrade",n),n=null,e.upgrading=!1,e.flush())}))):((t=new Error("probe error")).transport=n.name,e.emitReserved("upgradeError",t)))}))});function o(){r||(r=!0,h(),n.close(),n=null)}var s=function(t){t=new Error("probe error: "+t);t.transport=n.name,o(),e.emitReserved("upgradeError",t)};function a(){s("transport closed")}function c(){s("socket closed")}function u(t){n&&t.name!==n.name&&o()}var h=function(){n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",a),e.off("close",c),e.off("upgrading",u)};n.once("open",i),n.once("error",s),n.once("close",a),this.once("close",c),this.once("upgrading",u),-1!==this.upgrades.indexOf("webtransport")&&"webtransport"!==t?this.setTimeoutFn(function(){r||n.open()},200):n.open()}},{key:"onOpen",value:function(){if(this.readyState="open",f.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},{key:"onPacket",value:function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}},{key:"onHandshake",value:function(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}},{key:"resetPingTimeout",value:function(){var t=this;this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(function(){t.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}},{key:"onDrain",value:function(){this.writeBuffer.splice(0,this.prevBufferLen),(this.prevBufferLen=0)===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}},{key:"flush",value:function(){var t;"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(t=this.getWritablePackets(),this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush"))}},{key:"getWritablePackets",value:function(){if(this.maxPayload&&"polling"===this.transport.name&&1<this.writeBuffer.length)for(var t=1,e=0;e<this.writeBuffer.length;e++){var n=this.writeBuffer[e].data;if(n&&(t+=function(t){if("string"!=typeof t)return Math.ceil(1.33*(t.byteLength||t.size));for(var e=t,n=0,r=0,i=0,o=e.length;i<o;i++)(n=e.charCodeAt(i))<128?r+=1:n<2048?r+=2:n<55296||57344<=n?r+=3:(i++,r+=4);return r}(n)),0<e&&t>this.maxPayload)return this.writeBuffer.slice(0,e);t+=2}return this.writeBuffer}},{key:"write",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"send",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"sendPacket",value:function(t,e,n,r){"function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState&&((n=n||{}).compress=!1!==n.compress,this.emitReserved("packetCreate",t={type:t,data:e,options:n}),this.writeBuffer.push(t),r&&this.once("flush",r),this.flush())}},{key:"close",value:function(){function t(){n.off("upgrade",t),n.off("upgradeError",t),r()}function e(){n.once("upgrade",t),n.once("upgradeError",t)}var n=this,r=function(){n.onClose("forced close"),n.transport.close()};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",function(){(n.upgrading?e:r)()}):(this.upgrading?e:r)()),this}},{key:"onError",value:function(t){f.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}},{key:"onClose",value:function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}},{key:"filterUpgrades",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}]),f}();B.protocol=4,B.protocol;var mt="function"==typeof ArrayBuffer,bt=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer},S=Object.prototype.toString,kt="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===S.call(Blob),wt="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===S.call(File);function _t(t){return mt&&(t instanceof ArrayBuffer||bt(t))||kt&&t instanceof Blob||wt&&t instanceof File}function Ot(t){var e=[],n=t.data;return t.data=function t(e,n){if(!e)return e;{var r;if(_t(e))return r={_placeholder:!0,num:n.length},n.push(e),r;if(Array.isArray(e)){for(var i=new Array(e.length),o=0;o<e.length;o++)i[o]=t(e[o],n);return i}if("object"===c(e)&&!(e instanceof Date)){var s,a={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&(a[s]=t(e[s],n));return a}}return e}(n,e),t.attachments=e.length,{packet:t,buffers:e}}function At(t,e){return t.data=function t(e,n){if(!e)return e;{if(e&&!0===e._placeholder){var r="number"==typeof e.num&&0<=e.num&&e.num<n.length;if(r)return n[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(var i=0;i<e.length;i++)e[i]=t(e[i],n);else if("object"===c(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(e[o]=t(e[o],n))}return e}(t.data,e),delete t.attachments,t}var N,Et=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],S=((A=N=N||{})[A.CONNECT=0]="CONNECT",A[A.DISCONNECT=1]="DISCONNECT",A[A.EVENT=2]="EVENT",A[A.ACK=3]="ACK",A[A.CONNECT_ERROR=4]="CONNECT_ERROR",A[A.BINARY_EVENT=5]="BINARY_EVENT",A[A.BINARY_ACK=6]="BINARY_ACK",function(){function e(t){s(this,e),this.replacer=t}return a(e,[{key:"encode",value:function(t){return t.type!==N.EVENT&&t.type!==N.ACK||!function t(e){if(e&&"object"===c(e))if(Array.isArray(e)){for(var n=0,r=e.length;n<r;n++)if(t(e[n]))return!0}else{if(_t(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return t(e.toJSON(),!0);for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t(e[i]))return!0}return!1}(t)?[this.encodeAsString(t)]:this.encodeAsBinary({type:t.type===N.EVENT?N.BINARY_EVENT:N.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id})}},{key:"encodeAsString",value:function(t){var e=""+t.type;return t.type!==N.BINARY_EVENT&&t.type!==N.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}},{key:"encodeAsBinary",value:function(t){var t=Ot(t),e=this.encodeAsString(t.packet),t=t.buffers;return t.unshift(e),t}}]),e}());function Rt(t){return"[object Object]"===Object.prototype.toString.call(t)}var A=function(){h(o,k);var n=p(o);function o(t){var e;return s(this,o),(e=n.call(this)).reviver=t,e}return a(o,[{key:"add",value:function(t){if("string"==typeof t){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");var e,n=(e=this.decodeString(t)).type===N.BINARY_EVENT;(!n&&e.type!==N.BINARY_ACK||(e.type=n?N.EVENT:N.ACK,this.reconstructor=new Tt(e),0===e.attachments))&&d(f(o.prototype),"emitReserved",this).call(this,"decoded",e)}else{if(!_t(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(e=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,d(f(o.prototype),"emitReserved",this).call(this,"decoded",e))}}},{key:"decodeString",value:function(t){var e=0,n={type:Number(t.charAt(0))};if(void 0===N[n.type])throw new Error("unknown packet type "+n.type);if(n.type===N.BINARY_EVENT||n.type===N.BINARY_ACK){for(var r=e+1;"-"!==t.charAt(++e)&&e!=t.length;);r=t.substring(r,e);if(r!=Number(r)||"-"!==t.charAt(e))throw new Error("Illegal attachments");n.attachments=Number(r)}if("/"===t.charAt(e+1)){for(r=e+1;++e;){if(","===t.charAt(e))break;if(e===t.length)break}n.nsp=t.substring(r,e)}else n.nsp="/";r=t.charAt(e+1);if(""!==r&&Number(r)==r){for(r=e+1;++e;){var i=t.charAt(e);if(null==i||Number(i)!=i){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){r=this.tryParse(t.substr(e));if(!o.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}},{key:"tryParse",value:function(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}}},{key:"destroy",value:function(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}],[{key:"isPayloadValid",value:function(t,e){switch(t){case N.CONNECT:return Rt(e);case N.DISCONNECT:return void 0===e;case N.CONNECT_ERROR:return"string"==typeof e||Rt(e);case N.EVENT:case N.BINARY_EVENT:return Array.isArray(e)&&("number"==typeof e[0]||"string"==typeof e[0]&&-1===Et.indexOf(e[0]));case N.ACK:case N.BINARY_ACK:return Array.isArray(e)}}}]),o}(),Tt=function(){function e(t){s(this,e),this.packet=t,this.buffers=[],this.reconPack=t}return a(e,[{key:"takeBinaryData",value:function(t){return this.buffers.push(t),this.buffers.length===this.reconPack.attachments?(t=At(this.reconPack,this.buffers),this.finishedReconstruction(),t):null}},{key:"finishedReconstruction",value:function(){this.reconPack=null,this.buffers=[]}}]),e}(),Ct=Object.freeze({__proto__:null,protocol:5,get PacketType(){return N},Encoder:S,Decoder:A});function L(t,e,n){return t.on(e,n),function(){t.off(e,n)}}var Bt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),St=function(){h(o,k);var i=p(o);function o(t,e,n){var r;return s(this,o),(r=i.call(this)).connected=!1,r.recovered=!1,r.receiveBuffer=[],r.sendBuffer=[],r._queue=[],r._queueSeq=0,r.ids=0,r.acks={},r.flags={},r.io=t,r.nsp=e,n&&n.auth&&(r.auth=n.auth),r._opts=u({},n),r.io._autoConnect&&r.open(),r}return a(o,[{key:"disconnected",get:function(){return!this.connected}},{key:"subEvents",value:function(){var t;this.subs||(t=this.io,this.subs=[L(t,"open",this.onopen.bind(this)),L(t,"packet",this.onpacket.bind(this)),L(t,"error",this.onerror.bind(this)),L(t,"close",this.onclose.bind(this))])}},{key:"active",get:function(){return!!this.subs}},{key:"connect",value:function(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}},{key:"open",value:function(){return this.connect()}},{key:"send",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.unshift("message"),this.emit.apply(this,e),this}},{key:"emit",value:function(t){if(Bt.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');for(var e,n,r=arguments.length,i=new Array(1<r?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.unshift(t),!this._opts.retries||this.flags.fromQueue||this.flags.volatile?(n=((t={type:N.EVENT,data:i,options:{}}).options.compress=!1!==this.flags.compress,"function"==typeof i[i.length-1]&&(e=this.ids++,n=i.pop(),this._registerAckCallback(e,n),t.id=e),this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable),(!this.flags.volatile||n&&this.connected)&&(this.connected?(this.notifyOutgoingListeners(t),this.packet(t)):this.sendBuffer.push(t)),this.flags={}):this._addToQueue(i),this}},{key:"_registerAckCallback",value:function(e,r){var i,o=this,t=null!=(t=this.flags.timeout)?t:this._opts.ackTimeout;void 0===t?this.acks[e]=r:(i=this.io.setTimeoutFn(function(){delete o.acks[e];for(var t=0;t<o.sendBuffer.length;t++)o.sendBuffer[t].id===e&&o.sendBuffer.splice(t,1);r.call(o,new Error("operation has timed out"))},t),this.acks[e]=function(){o.io.clearTimeoutFn(i);for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r.apply(o,[null].concat(e))})}},{key:"emitWithAck",value:function(t){for(var e=this,n=arguments.length,i=new Array(1<n?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o=void 0!==this.flags.timeout||void 0!==this._opts.ackTimeout;return new Promise(function(n,r){i.push(function(t,e){return o?t?r(t):n(e):n(t)}),e.emit.apply(e,[t].concat(i))})}},{key:"_addToQueue",value:function(t){var i,o=this,s=("function"==typeof t[t.length-1]&&(i=t.pop()),{id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:u({fromQueue:!0},this.flags)});t.push(function(t){if(s===o._queue[0]){if(null!==t)s.tryCount>o._opts.retries&&(o._queue.shift(),i)&&i(t);else if(o._queue.shift(),i){for(var e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];i.apply(void 0,[null].concat(n))}return s.pending=!1,o._drainQueue()}}),this._queue.push(s),this._drainQueue()}},{key:"_drainQueue",value:function(){var t;!this.connected||0===this._queue.length||(!(t=this._queue[0]).pending||0<arguments.length&&void 0!==arguments[0]&&arguments[0])&&(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}},{key:"packet",value:function(t){t.nsp=this.nsp,this.io._packet(t)}},{key:"onopen",value:function(){var e=this;"function"==typeof this.auth?this.auth(function(t){e._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}},{key:"_sendConnectPacket",value:function(t){this.packet({type:N.CONNECT,data:this._pid?u({pid:this._pid,offset:this._lastOffset},t):t})}},{key:"onerror",value:function(t){this.connected||this.emitReserved("connect_error",t)}},{key:"onclose",value:function(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}},{key:"onpacket",value:function(t){if(t.nsp===this.nsp)switch(t.type){case N.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case N.EVENT:case N.BINARY_EVENT:this.onevent(t);break;case N.ACK:case N.BINARY_ACK:this.onack(t);break;case N.DISCONNECT:this.ondisconnect();break;case N.CONNECT_ERROR:this.destroy();var e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e)}}},{key:"onevent",value:function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}},{key:"emitEvent",value:function(t){if(this._anyListeners&&this._anyListeners.length){var e,n=M(this._anyListeners.slice());try{for(n.s();!(e=n.n()).done;)e.value.apply(this,t)}catch(t){n.e(t)}finally{n.f()}}d(f(o.prototype),"emit",this).apply(this,t),this._pid&&t.length&&"string"==typeof t[t.length-1]&&(this._lastOffset=t[t.length-1])}},{key:"ack",value:function(r){var i=this,o=!1;return function(){if(!o){o=!0;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];i.packet({type:N.ACK,id:r,data:e})}}}},{key:"onack",value:function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}},{key:"onconnect",value:function(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}},{key:"emitBuffered",value:function(){var e=this;this.receiveBuffer.forEach(function(t){return e.emitEvent(t)}),this.receiveBuffer=[],this.sendBuffer.forEach(function(t){e.notifyOutgoingListeners(t),e.packet(t)}),this.sendBuffer=[]}},{key:"ondisconnect",value:function(){this.destroy(),this.onclose("io server disconnect")}},{key:"destroy",value:function(){this.subs&&(this.subs.forEach(function(t){return t()}),this.subs=void 0),this.io._destroy(this)}},{key:"disconnect",value:function(){return this.connected&&this.packet({type:N.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}},{key:"close",value:function(){return this.disconnect()}},{key:"compress",value:function(t){return this.flags.compress=t,this}},{key:"volatile",get:function(){return this.flags.volatile=!0,this}},{key:"timeout",value:function(t){return this.flags.timeout=t,this}},{key:"onAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}},{key:"prependAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}},{key:"offAny",value:function(t){if(this._anyListeners)if(t){for(var e=this._anyListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}},{key:"listenersAny",value:function(){return this._anyListeners||[]}},{key:"onAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}},{key:"prependAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}},{key:"offAnyOutgoing",value:function(t){if(this._anyOutgoingListeners)if(t){for(var e=this._anyOutgoingListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}},{key:"listenersAnyOutgoing",value:function(){return this._anyOutgoingListeners||[]}},{key:"notifyOutgoingListeners",value:function(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){var e,n=M(this._anyOutgoingListeners.slice());try{for(n.s();!(e=n.n()).done;)e.value.apply(this,t.data)}catch(t){n.e(t)}finally{n.f()}}}}]),o}();function x(t){this.ms=(t=t||{}).min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=0<t.jitter&&t.jitter<=1?t.jitter:0,this.attempts=0}x.prototype.duration=function(){var t,e,n=this.ms*Math.pow(this.factor,this.attempts++);return this.jitter&&(t=Math.random(),e=Math.floor(t*this.jitter*n),n=0==(1&Math.floor(10*t))?n-e:n+e),0|Math.min(n,this.max)},x.prototype.reset=function(){this.attempts=0},x.prototype.setMin=function(t){this.ms=t},x.prototype.setMax=function(t){this.max=t},x.prototype.setJitter=function(t){this.jitter=t};var Nt=function(){h(o,k);var i=p(o);function o(t,e){s(this,o),(n=i.call(this)).nsps={},n.subs=[],t&&"object"===c(t)&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",n.opts=e,w(l(n),e),n.reconnection(!1!==e.reconnection),n.reconnectionAttempts(e.reconnectionAttempts||1/0),n.reconnectionDelay(e.reconnectionDelay||1e3),n.reconnectionDelayMax(e.reconnectionDelayMax||5e3),n.randomizationFactor(null!=(r=e.randomizationFactor)?r:.5),n.backoff=new x({min:n.reconnectionDelay(),max:n.reconnectionDelayMax(),jitter:n.randomizationFactor()}),n.timeout(null==e.timeout?2e4:e.timeout),n._readyState="closed",n.uri=t;var n,r=e.parser||Ct;return n.encoder=new r.Encoder,n.decoder=new r.Decoder,n._autoConnect=!1!==e.autoConnect,n._autoConnect&&n.open(),n}return a(o,[{key:"reconnection",value:function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}},{key:"reconnectionAttempts",value:function(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}},{key:"reconnectionDelay",value:function(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null!=(e=this.backoff)&&e.setMin(t),this)}},{key:"randomizationFactor",value:function(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null!=(e=this.backoff)&&e.setJitter(t),this)}},{key:"reconnectionDelayMax",value:function(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null!=(e=this.backoff)&&e.setMax(t),this)}},{key:"timeout",value:function(t){return arguments.length?(this._timeout=t,this):this._timeout}},{key:"maybeReconnectOnOpen",value:function(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}},{key:"open",value:function(e){var t,n,r,i,o,s,a,c=this;return~this._readyState.indexOf("open")||(this.engine=new B(this.uri,this.opts),t=this.engine,(n=this)._readyState="opening",this.skipReconnect=!1,r=L(t,"open",function(){n.onopen(),e&&e()}),o=L(t,"error",i=function(t){c.cleanup(),c._readyState="closed",c.emitReserved("error",t),e?e(t):c.maybeReconnectOnOpen()}),!1!==this._timeout&&(s=this._timeout,a=this.setTimeoutFn(function(){r(),i(new Error("timeout")),t.close()},s),this.opts.autoUnref&&a.unref(),this.subs.push(function(){c.clearTimeoutFn(a)})),this.subs.push(r),this.subs.push(o)),this}},{key:"connect",value:function(t){return this.open(t)}},{key:"onopen",value:function(){this.cleanup(),this._readyState="open",this.emitReserved("open");var t=this.engine;this.subs.push(L(t,"ping",this.onping.bind(this)),L(t,"data",this.ondata.bind(this)),L(t,"error",this.onerror.bind(this)),L(t,"close",this.onclose.bind(this)),L(this.decoder,"decoded",this.ondecoded.bind(this)))}},{key:"onping",value:function(){this.emitReserved("ping")}},{key:"ondata",value:function(t){try{this.decoder.add(t)}catch(t){this.onclose("parse error",t)}}},{key:"ondecoded",value:function(t){var e=this;R(function(){e.emitReserved("packet",t)},this.setTimeoutFn)}},{key:"onerror",value:function(t){this.emitReserved("error",t)}},{key:"socket",value:function(t,e){var n;return(n=this.nsps[t])?this._autoConnect&&!n.active&&n.connect():(n=new St(this,t,e),this.nsps[t]=n),n}},{key:"_destroy",value:function(t){for(var e=0,n=Object.keys(this.nsps);e<n.length;e++){var r=n[e];if(this.nsps[r].active)return}this._close()}},{key:"_packet",value:function(t){for(var e=this.encoder.encode(t),n=0;n<e.length;n++)this.engine.write(e[n],t.options)}},{key:"cleanup",value:function(){this.subs.forEach(function(t){return t()}),this.subs.length=0,this.decoder.destroy()}},{key:"_close",value:function(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}},{key:"disconnect",value:function(){return this._close()}},{key:"onclose",value:function(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}},{key:"reconnect",value:function(){var e=this;if(this._reconnecting||this.skipReconnect)return this;var t,n,r=this;this.backoff.attempts>=this._reconnectionAttempts?(this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1):(t=this.backoff.duration(),this._reconnecting=!0,n=this.setTimeoutFn(function(){r.skipReconnect||(e.emitReserved("reconnect_attempt",r.backoff.attempts),r.skipReconnect)||r.open(function(t){t?(r._reconnecting=!1,r.reconnect(),e.emitReserved("reconnect_error",t)):r.onreconnect()})},t),this.opts.autoUnref&&n.unref(),this.subs.push(function(){e.clearTimeoutFn(n)}))}},{key:"onreconnect",value:function(){var t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}]),o}(),P={};function j(t,e){"object"===c(t)&&(e=t,t=void 0);var t=function(t,e,n){var e=1<arguments.length&&void 0!==e?e:"",r=t,n=(2<arguments.length?n:void 0)||"undefined"!=typeof location&&location;return"string"==typeof(t=null==t?n.protocol+"//"+n.host:t)&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),r=C(t=/^(https?|wss?):\/\//.test(t)?t:void 0!==n?n.protocol+"//"+t:"https://"+t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/",t=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host,r.id=r.protocol+"://"+t+":"+r.port+e,r.href=r.protocol+"://"+t+(n&&n.port===r.port?"":":"+r.port),r}(t,(e=e||{}).path||"/socket.io"),n=t.source,r=t.id,i=t.path,i=P[r]&&i in P[r].nsps,i=e.forceNew||e["force new connection"]||!1===e.multiplex||i?new Nt(n,e):(P[r]||(P[r]=new Nt(n,e)),P[r]);return t.query&&!e.query&&(e.query=t.queryKey),i.socket(t.path,e)}return u(j,{Manager:Nt,Socket:St,io:j,connect:j}),j});tion WT() {
      _classCallCheck(this, WT);
      return _super.apply(this, arguments);
    }
    _createClass(WT, [{
      key: "name",
      get: function get() {
        return "webtransport";
      }
    }, {
      key: "doOpen",
      value: function doOpen() {
        var _this = this;
        // @ts-ignore
        if (typeof WebTransport !== "function") {
          return;
        }
        // @ts-ignore
        this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        this.transport.closed.then(function () {
          _this.onClose();
        })["catch"](function (err) {
          _this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this.transport.ready.then(function () {
          _this.transport.createBidirectionalStream().then(function (stream) {
            var reader = stream.readable.getReader();
            _this.writer = stream.writable.getWriter();
            var binaryFlag;
            var read = function read() {
              reader.read().then(function (_ref) {
                var done = _ref.done,
                  value = _ref.value;
                if (done) {
                  return;
                }
                if (!binaryFlag && value.byteLength === 1 && value[0] === 54) {
                  binaryFlag = true;
                } else {
                  // TODO expose binarytype
                  _this.onPacket(decodePacketFromBinary(value, binaryFlag, "arraybuffer"));
                  binaryFlag = false;
                }
                read();
              })["catch"](function (err) {});
            };
            read();
            var handshake = _this.query.sid ? "0{\"sid\":\"".concat(_this.query.sid, "\"}") : "0";
            _this.writer.write(new TextEncoder().encode(handshake)).then(function () {
              return _this.onOpen();
            });
          });
        });
      }
    }, {
      key: "write",
      value: function write(packets) {
        var _this2 = this;
        this.writable = false;
        var _loop = function _loop() {
          var packet = packets[i];
          var lastPacket = i === packets.length - 1;
          encodePacketToBinary(packet, function (data) {
            if (shouldIncludeBinaryHeader(packet, data)) {
              _this2.writer.write(Uint8Array.of(54));
            }
            _this2.writer.write(data).then(function () {
              if (lastPacket) {
                nextTick(function () {
                  _this2.writable = true;
                  _this2.emitReserved("drain");
                }, _this2.setTimeoutFn);
              }
            });
          });
        };
        for (var i = 0; i < packets.length; i++) {
          _loop();
        }
      }
    }, {
      key: "doClose",
      value: function doClose() {
        var _a;
        (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
      }
    }]);
    return WT;
  }(Transport);

  var transports = {
    websocket: WS,
    webtransport: WT,
    polling: Polling
  };

  // imported from https://github.com/galkn/parseuri
  /**
   * Parses a URI
   *
   * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
   *
   * See:
   * - https://developer.mozilla.org/en-US/docs/Web/API/URL
   * - https://caniuse.com/url
   * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
   *
   * History of the parse() method:
   * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
   * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
   * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */
  var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  function parse(str) {
    var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');
    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    var m = re.exec(str || ''),
      uri = {},
      i = 14;
    while (i--) {
      uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
      uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
  }
  function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    var data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  var Socket$1 = /*#__PURE__*/function (_Emitter) {
    _inherits(Socket, _Emitter);
    var _super = _createSuper(Socket);
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    function Socket(uri) {
      var _this;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Socket);
      _this = _super.call(this);
      _this.writeBuffer = [];
      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        uri = parse(uri);
        opts.hostname = uri.host;
        opts.secure = uri.protocol === "https" || uri.protocol === "wss";
        opts.port = uri.port;
        if (uri.query) opts.query = uri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(_assertThisInitialized(_this), opts);
      _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        // if no port is specified manually, use the protocol default
        opts.port = _this.secure ? "443" : "80";
      }
      _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
      _this.transports = opts.transports || ["polling", "websocket", "webtransport"];
      _this.writeBuffer = [];
      _this.prevBufferLen = 0;
      _this.opts = _extends({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: false
      }, opts);
      _this.opts.path = _this.opts.path.replace(/\/$/, "") + (_this.opts.addTrailingSlash ? "/" : "");
      if (typeof _this.opts.query === "string") {
        _this.opts.query = decode(_this.opts.query);
      }
      // set on handshake
      _this.id = null;
      _this.upgrades = null;
      _this.pingInterval = null;
      _this.pingTimeout = null;
      // set on heartbeat
      _this.pingTimeoutTimer = null;
      if (typeof addEventListener === "function") {
        if (_this.opts.closeOnBeforeunload) {
          // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
          // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
          // closed/reloaded)
          _this.beforeunloadEventListener = function () {
            if (_this.transport) {
              // silently close the transport
              _this.transport.removeAllListeners();
              _this.transport.close();
            }
          };
          addEventListener("beforeunload", _this.beforeunloadEventListener, false);
        }
        if (_this.hostname !== "localhost") {
          _this.offlineEventListener = function () {
            _this.onClose("transport close", {
              description: "network connection lost"
            });
          };
          addEventListener("offline", _this.offlineEventListener, false);
        }
      }
      _this.open();
      return _this;
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    _createClass(Socket, [{
      key: "createTransport",
      value: function createTransport(name) {
        var query = _extends({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = protocol$1;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        var opts = _extends({}, this.opts, {
          query: query,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        }, this.opts.transportOptions[name]);
        return new transports[name](opts);
      }
      /**
       * Initializes transport to use and starts probe.
       *
       * @private
       */
    }, {
      key: "open",
      value: function open() {
        var _this2 = this;
        var transport;
        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
          transport = "websocket";
        } else if (0 === this.transports.length) {
          // Emit error on next tick so it can be listened to
          this.setTimeoutFn(function () {
            _this2.emitReserved("error", "No transports available");
          }, 0);
          return;
        } else {
          transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
          transport = this.createTransport(transport);
        } catch (e) {
          this.transports.shift();
          this.open();
          return;
        }
        transport.open();
        this.setTransport(transport);
      }
      /**
       * Sets the current transport. Disables the existing one (if any).
       *
       * @private
       */
    }, {
      key: "setTransport",
      value: function setTransport(transport) {
        var _this3 = this;
        if (this.transport) {
          this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function (reason) {
          return _this3.onClose("transport close", reason);
        });
      }
      /**
       * Probes a transport.
       *
       * @param {String} name - transport name
       * @private
       */
    }, {
      key: "probe",
      value: function probe(name) {
        var _this4 = this;
        var transport = this.createTransport(name);
        var failed = false;
        Socket.priorWebsocketSuccess = false;
        var onTransportOpen = function onTransportOpen() {
          if (failed) return;
          transport.send([{
            type: "ping",
            data: "probe"
          }]);
          transport.once("packet", function (msg) {
            if (failed) return;
            if ("pong" === msg.type && "probe" === msg.data) {
              _this4.upgrading = true;
              _this4.emitReserved("upgrading", transport);
              if (!transport) return;
              Socket.priorWebsocketSuccess = "websocket" === transport.name;
              _this4.transport.pause(function () {
                if (failed) return;
                if ("closed" === _this4.readyState) return;
                cleanup();
                _this4.setTransport(transport);
                transport.send([{
                  type: "upgrade"
                }]);
                _this4.emitReserved("upgrade", transport);
                transport = null;
                _this4.upgrading = false;
                _this4.flush();
              });
            } else {
              var err = new Error("probe error");
              // @ts-ignore
              err.transport = transport.name;
              _this4.emitReserved("upgradeError", err);
            }
          });
        };
        function freezeTransport() {
          if (failed) return;
          // Any callback called by transport should be ignored since now
          failed = true;
          cleanup();
          transport.close();
          transport = null;
        }
        // Handle any error that happens while probing
        var onerror = function onerror(err) {
          var error = new Error("probe error: " + err);
          // @ts-ignore
          error.transport = transport.name;
          freezeTransport();
          _this4.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
          onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
          onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
          if (transport && to.name !== transport.name) {
            freezeTransport();
          }
        }
        // Remove all listeners on the transport and on self
        var cleanup = function cleanup() {
          transport.removeListener("open", onTransportOpen);
          transport.removeListener("error", onerror);
          transport.removeListener("close", onTransportClose);
          _this4.off("close", onclose);
          _this4.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
          // favor WebTransport
          this.setTimeoutFn(function () {
            if (!failed) {
              transport.open();
            }
          }, 200);
        } else {
          transport.open();
        }
      }
      /**
       * Called when connection is deemed open.
       *
       * @private
       */
    }, {
      key: "onOpen",
      value: function onOpen() {
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade) {
          var i = 0;
          var l = this.upgrades.length;
          for (; i < l; i++) {
            this.probe(this.upgrades[i]);
          }
        }
      }
      /**
       * Handles a packet.
       *
       * @private
       */
    }, {
      key: "onPacket",
      value: function onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          this.emitReserved("packet", packet);
          // Socket is live - any packet counts
          this.emitReserved("heartbeat");
          switch (packet.type) {
            case "open":
              this.onHandshake(JSON.parse(packet.data));
              break;
            case "ping":
              this.resetPingTimeout();
              this.sendPacket("pong");
              this.emitReserved("ping");
              this.emitReserved("pong");
              break;
            case "error":
              var err = new Error("server error");
              // @ts-ignore
              err.code = packet.data;
              this.onError(err);
              break;
            case "message":
              this.emitReserved("data", packet.data);
              this.emitReserved("message", packet.data);
              break;
          }
        }
      }
      /**
       * Called upon handshake completion.
       *
       * @param {Object} data - handshake obj
       * @private
       */
    }, {
      key: "onHandshake",
      value: function onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this.resetPingTimeout();
      }
      /**
       * Sets and resets ping timeout timer based on server pings.
       *
       * @private
       */
    }, {
      key: "resetPingTimeout",
      value: function resetPingTimeout() {
        var _this5 = this;
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(function () {
          _this5.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
          this.pingTimeoutTimer.unref();
        }
      }
      /**
       * Called on `drain` event
       *
       * @private
       */
    }, {
      key: "onDrain",
      value: function onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
          this.emitReserved("drain");
        } else {
          this.flush();
        }
      }
      /**
       * Flush write buffers.
       *
       * @private
       */
    }, {
      key: "flush",
      value: function flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          var packets = this.getWritablePackets();
          this.transport.send(packets);
          // keep track of current length of writeBuffer
          // splice writeBuffer and callbackBuffer on `drain`
          this.prevBufferLen = packets.length;
          this.emitReserved("flush");
        }
      }
      /**
       * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
       * long-polling)
       *
       * @private
       */
    }, {
      key: "getWritablePackets",
      value: function getWritablePackets() {
        var shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
          return this.writeBuffer;
        }
        var payloadSize = 1; // first packet type
        for (var i = 0; i < this.writeBuffer.length; i++) {
          var data = this.writeBuffer[i].data;
          if (data) {
            payloadSize += byteLength(data);
          }
          if (i > 0 && payloadSize > this.maxPayload) {
            return this.writeBuffer.slice(0, i);
          }
          payloadSize += 2; // separator + packet type
        }

        return this.writeBuffer;
      }
      /**
       * Sends a message.
       *
       * @param {String} msg - message.
       * @param {Object} options.
       * @param {Function} callback function.
       * @return {Socket} for chaining.
       */
    }, {
      key: "write",
      value: function write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
    }, {
      key: "send",
      value: function send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      /**
       * Sends a packet.
       *
       * @param {String} type: packet type.
       * @param {String} data.
       * @param {Object} options.
       * @param {Function} fn - callback function.
       * @private
       */
    }, {
      key: "sendPacket",
      value: function sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
          fn = data;
          data = undefined;
        }
        if ("function" === typeof options) {
          fn = options;
          options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
          return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        var packet = {
          type: type,
          data: data,
          options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
      }
      /**
       * Closes the connection.
       */
    }, {
      key: "close",
      value: function close() {
        var _this6 = this;
        var close = function close() {
          _this6.onClose("forced close");
          _this6.transport.close();
        };
        var cleanupAndClose = function cleanupAndClose() {
          _this6.off("upgrade", cleanupAndClose);
          _this6.off("upgradeError", cleanupAndClose);
          close();
        };
        var waitForUpgrade = function waitForUpgrade() {
          // wait for upgrade to finish since we can't send packets while pausing a transport
          _this6.once("upgrade", cleanupAndClose);
          _this6.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          if (this.writeBuffer.length) {
            this.once("drain", function () {
              if (_this6.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            });
          } else if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        }
        return this;
      }
      /**
       * Called upon transport error
       *
       * @private
       */
    }, {
      key: "onError",
      value: function onError(err) {
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
      }
      /**
       * Called upon transport close.
       *
       * @private
       */
    }, {
      key: "onClose",
      value: function onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          // clear timers
          this.clearTimeoutFn(this.pingTimeoutTimer);
          // stop event from firing again for transport
          this.transport.removeAllListeners("close");
          // ensure transport won't stay open
          this.transport.close();
          // ignore further transport communication
          this.transport.removeAllListeners();
          if (typeof removeEventListener === "function") {
            removeEventListener("beforeunload", this.beforeunloadEventListener, false);
            removeEventListener("offline", this.offlineEventListener, false);
          }
          // set ready state
          this.readyState = "closed";
          // clear session id
          this.id = null;
          // emit close event
          this.emitReserved("close", reason, description);
          // clean buffers after, so users can still
          // grab the buffers on `close` event
          this.writeBuffer = [];
          this.prevBufferLen = 0;
        }
      }
      /**
       * Filters upgrades, returning only those matching client transports.
       *
       * @param {Array} upgrades - server upgrades
       * @private
       */
    }, {
      key: "filterUpgrades",
      value: function filterUpgrades(upgrades) {
        var filteredUpgrades = [];
        var i = 0;
        var j = upgrades.length;
        for (; i < j; i++) {
          if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
      }
    }]);
    return Socket;
  }(Emitter);
  Socket$1.protocol = protocol$1;

  Socket$1.protocol;

  /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */
  function url(uri) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var loc = arguments.length > 2 ? arguments[2] : undefined;
    var obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      // parse
      obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    var ipv6 = obj.host.indexOf(":") !== -1;
    var host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  var isView = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  var toString = Object.prototype.toString;
  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */
  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || _typeof(obj) !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }

  /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */
  function deconstructPacket(packet) {
    var buffers = [];
    var packetData = packet.data;
    var pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
      packet: pack,
      buffers: buffers
    };
  }
  function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (isBinary(data)) {
      var placeholder = {
        _placeholder: true,
        num: buffers.length
      };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i], buffers);
      }
      return newData;
    } else if (_typeof(data) === "object" && !(data instanceof Date)) {
      var _newData = {};
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          _newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return _newData;
    }
    return data;
  }
  /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @public
   */
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
      var isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i], buffers);
      }
    } else if (_typeof(data) === "object") {
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }

  /**
   * These strings must not be used as event names, as they have a special meaning.
   */
  var RESERVED_EVENTS$1 = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener" // used by the Node.js EventEmitter
  ];
  /**
   * Protocol version.
   *
   * @public
   */
  var protocol = 5;
  var PacketType;
  (function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  /**
   * A socket.io Encoder instance
   */
  var Encoder = /*#__PURE__*/function () {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    function Encoder(replacer) {
      _classCallCheck(this, Encoder);
      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    _createClass(Encoder, [{
      key: "encode",
      value: function encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
          if (hasBinary(obj)) {
            return this.encodeAsBinary({
              type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
              nsp: obj.nsp,
              data: obj.data,
              id: obj.id
            });
          }
        }
        return [this.encodeAsString(obj)];
      }
      /**
       * Encode packet as string.
       */
    }, {
      key: "encodeAsString",
      value: function encodeAsString(obj) {
        // first is type
        var str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
          str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
          str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
          str += obj.id;
        }
        // json data
        if (null != obj.data) {
          str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
      }
      /**
       * Encode packet as 'buffer sequence' by removing blobs, and
       * deconstructing packet into object with placeholders and
       * a list of buffers.
       */
    }, {
      key: "encodeAsBinary",
      value: function encodeAsBinary(obj) {
        var deconstruction = deconstructPacket(obj);
        var pack = this.encodeAsString(deconstruction.packet);
        var buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
      }
    }]);
    return Encoder;
  }();
  // see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
  function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */
  var Decoder = /*#__PURE__*/function (_Emitter) {
    _inherits(Decoder, _Emitter);
    var _super = _createSuper(Decoder);
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    function Decoder(reviver) {
      var _this;
      _classCallCheck(this, Decoder);
      _this = _super.call(this);
      _this.reviver = reviver;
      return _this;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    _createClass(Decoder, [{
      key: "add",
      value: function add(obj) {
        var packet;
        if (typeof obj === "string") {
          if (this.reconstructor) {
            throw new Error("got plaintext data when reconstructing a packet");
          }
          packet = this.decodeString(obj);
          var isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
          if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
            packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
            // binary packet's json
            this.reconstructor = new BinaryReconstructor(packet);
            // no attachments, labeled binary but no binary data to follow
            if (packet.attachments === 0) {
              _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
            }
          } else {
            // non-binary full packet
            _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
          }
        } else if (isBinary(obj) || obj.base64) {
          // raw binary data
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              // received final buffer
              this.reconstructor = null;
              _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
            }
          }
        } else {
          throw new Error("Unknown type: " + obj);
        }
      }
      /**
       * Decode a packet String (JSON data)
       *
       * @param {String} str
       * @return {Object} packet
       */
    }, {
      key: "decodeString",
      value: function decodeString(str) {
        var i = 0;
        // look up type
        var p = {
          type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) {
          throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
          var start = i + 1;
          while (str.charAt(++i) !== "-" && i != str.length) {}
          var buf = str.substring(start, i);
          if (buf != Number(buf) || str.charAt(i) !== "-") {
            throw new Error("Illegal attachments");
          }
          p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
          var _start = i + 1;
          while (++i) {
            var c = str.charAt(i);
            if ("," === c) break;
            if (i === str.length) break;
          }
          p.nsp = str.substring(_start, i);
        } else {
          p.nsp = "/";
        }
        // look up id
        var next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
          var _start2 = i + 1;
          while (++i) {
            var _c = str.charAt(i);
            if (null == _c || Number(_c) != _c) {
              --i;
              break;
            }
            if (i === str.length) break;
          }
          p.id = Number(str.substring(_start2, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
          var payload = this.tryParse(str.substr(i));
          if (Decoder.isPayloadValid(p.type, payload)) {
            p.data = payload;
          } else {
            throw new Error("invalid payload");
          }
        }
        return p;
      }
    }, {
      key: "tryParse",
      value: function tryParse(str) {
        try {
          return JSON.parse(str, this.reviver);
        } catch (e) {
          return false;
        }
      }
    }, {
      key: "destroy",
      value:
      /**
       * Deallocates a parser's resources
       */
      function destroy() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
          this.reconstructor = null;
        }
      }
    }], [{
      key: "isPayloadValid",
      value: function isPayloadValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return isObject(payload);
          case PacketType.DISCONNECT:
            return payload === undefined;
          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || isObject(payload);
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
        }
      }
    }]);
    return Decoder;
  }(Emitter);
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */
  var BinaryReconstructor = /*#__PURE__*/function () {
    function BinaryReconstructor(packet) {
      _classCallCheck(this, BinaryReconstructor);
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    _createClass(BinaryReconstructor, [{
      key: "takeBinaryData",
      value: function takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
          // done with buffer list
          var packet = reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      }
      /**
       * Cleans up binary packet reconstruction variables.
       */
    }, {
      key: "finishedReconstruction",
      value: function finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }
    }]);
    return BinaryReconstructor;
  }();

  var parser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    protocol: protocol,
    get PacketType () { return PacketType; },
    Encoder: Encoder,
    Decoder: Decoder
  });

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  /**
   * Internal events.
   * These events can't be emitted by the user.
   */
  var RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  /**
   * A Socket is the fundamental class for interacting with the server.
   *
   * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log("connected");
   * });
   *
   * // send an event to the server
   * socket.emit("foo", "bar");
   *
   * socket.on("foobar", () => {
   *   // an event was received from the server
   * });
   *
   * // upon disconnection
   * socket.on("disconnect", (reason) => {
   *   console.log(`disconnected due to ${reason}`);
   * });
   */
  var Socket = /*#__PURE__*/function (_Emitter) {
    _inherits(Socket, _Emitter);
    var _super = _createSuper(Socket);
    /**
     * `Socket` constructor.
     */
    function Socket(io, nsp, opts) {
      var _this;
      _classCallCheck(this, Socket);
      _this = _super.call(this);
      /**
       * Whether the socket is currently connected to the server.
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.connected); // true
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.connected); // false
       * });
       */
      _this.connected = false;
      /**
       * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
       * be transmitted by the server.
       */
      _this.recovered = false;
      /**
       * Buffer for packets received before the CONNECT packet
       */
      _this.receiveBuffer = [];
      /**
       * Buffer for packets that will be sent once the socket is connected
       */
      _this.sendBuffer = [];
      /**
       * The queue of packets to be sent with retry in case of failure.
       *
       * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
       * @private
       */
      _this._queue = [];
      /**
       * A sequence to generate the ID of the {@link QueuedPacket}.
       * @private
       */
      _this._queueSeq = 0;
      _this.ids = 0;
      _this.acks = {};
      _this.flags = {};
      _this.io = io;
      _this.nsp = nsp;
      if (opts && opts.auth) {
        _this.auth = opts.auth;
      }
      _this._opts = _extends({}, opts);
      if (_this.io._autoConnect) _this.open();
      return _this;
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    _createClass(Socket, [{
      key: "disconnected",
      get: function get() {
        return !this.connected;
      }
      /**
       * Subscribe to open, close and packet events
       *
       * @private
       */
    }, {
      key: "subEvents",
      value: function subEvents() {
        if (this.subs) return;
        var io = this.io;
        this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
      }
      /**
       * Whether the Socket will try to reconnect when its Manager connects or reconnects.
       *
       * @example
       * const socket = io();
       *
       * console.log(socket.active); // true
       *
       * socket.on("disconnect", (reason) => {
       *   if (reason === "io server disconnect") {
       *     // the disconnection was initiated by the server, you need to manually reconnect
       *     console.log(socket.active); // false
       *   }
       *   // else the socket will automatically try to reconnect
       *   console.log(socket.active); // true
       * });
       */
    }, {
      key: "active",
      get: function get() {
        return !!this.subs;
      }
      /**
       * "Opens" the socket.
       *
       * @example
       * const socket = io({
       *   autoConnect: false
       * });
       *
       * socket.connect();
       */
    }, {
      key: "connect",
      value: function connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
      }
      /**
       * Alias for {@link connect()}.
       */
    }, {
      key: "open",
      value: function open() {
        return this.connect();
      }
      /**
       * Sends a `message` event.
       *
       * This method mimics the WebSocket.send() method.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
       *
       * @example
       * socket.send("hello");
       *
       * // this is equivalent to
       * socket.emit("message", "hello");
       *
       * @return self
       */
    }, {
      key: "send",
      value: function send() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
      }
      /**
       * Override `emit`.
       * If the event is in `events`, it's emitted normally.
       *
       * @example
       * socket.emit("hello", "world");
       *
       * // all serializable datastructures are supported (no need to call JSON.stringify)
       * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
       *
       * // with an acknowledgement from the server
       * socket.emit("hello", "world", (val) => {
       *   // ...
       * });
       *
       * @return self
       */
    }, {
      key: "emit",
      value: function emit(ev) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
          throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags["volatile"]) {
          this._addToQueue(args);
          return this;
        }
        var packet = {
          type: PacketType.EVENT,
          data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
          var id = this.ids++;
          var ack = args.pop();
          this._registerAckCallback(id, ack);
          packet.id = id;
        }
        var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);
        if (discardPacket) ; else if (this.connected) {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
      }
      /**
       * @private
       */
    }, {
      key: "_registerAckCallback",
      value: function _registerAckCallback(id, ack) {
        var _this2 = this;
        var _a;
        var timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
          this.acks[id] = ack;
          return;
        }
        // @ts-ignore
        var timer = this.io.setTimeoutFn(function () {
          delete _this2.acks[id];
          for (var i = 0; i < _this2.sendBuffer.length; i++) {
            if (_this2.sendBuffer[i].id === id) {
              _this2.sendBuffer.splice(i, 1);
            }
          }
          ack.call(_this2, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = function () {
          // @ts-ignore
          _this2.io.clearTimeoutFn(timer);
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          ack.apply(_this2, [null].concat(args));
        };
      }
      /**
       * Emits an event and waits for an acknowledgement
       *
       * @example
       * // without timeout
       * const response = await socket.emitWithAck("hello", "world");
       *
       * // with a specific timeout
       * try {
       *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
       * } catch (err) {
       *   // the server did not acknowledge the event in the given delay
       * }
       *
       * @return a Promise that will be fulfilled when the server acknowledges the event
       */
    }, {
      key: "emitWithAck",
      value: function emitWithAck(ev) {
        var _this3 = this;
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        // the timeout flag is optional
        var withErr = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
        return new Promise(function (resolve, reject) {
          args.push(function (arg1, arg2) {
            if (withErr) {
              return arg1 ? reject(arg1) : resolve(arg2);
            } else {
              return resolve(arg1);
            }
          });
          _this3.emit.apply(_this3, [ev].concat(args));
        });
      }
      /**
       * Add the packet to the queue.
       * @param args
       * @private
       */
    }, {
      key: "_addToQueue",
      value: function _addToQueue(args) {
        var _this4 = this;
        var ack;
        if (typeof args[args.length - 1] === "function") {
          ack = args.pop();
        }
        var packet = {
          id: this._queueSeq++,
          tryCount: 0,
          pending: false,
          args: args,
          flags: _extends({
            fromQueue: true
          }, this.flags)
        };
        args.push(function (err) {
          if (packet !== _this4._queue[0]) {
            // the packet has already been acknowledged
            return;
          }
          var hasError = err !== null;
          if (hasError) {
            if (packet.tryCount > _this4._opts.retries) {
              _this4._queue.shift();
              if (ack) {
                ack(err);
              }
            }
          } else {
            _this4._queue.shift();
            if (ack) {
              for (var _len5 = arguments.length, responseArgs = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                responseArgs[_key5 - 1] = arguments[_key5];
              }
              ack.apply(void 0, [null].concat(responseArgs));
            }
          }
          packet.pending = false;
          return _this4._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
      }
      /**
       * Send the first packet of the queue, and wait for an acknowledgement from the server.
       * @param force - whether to resend a packet that has not been acknowledged yet
       *
       * @private
       */
    }, {
      key: "_drainQueue",
      value: function _drainQueue() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!this.connected || this._queue.length === 0) {
          return;
        }
        var packet = this._queue[0];
        if (packet.pending && !force) {
          return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
      }
      /**
       * Sends a packet.
       *
       * @param packet
       * @private
       */
    }, {
      key: "packet",
      value: function packet(_packet) {
        _packet.nsp = this.nsp;
        this.io._packet(_packet);
      }
      /**
       * Called upon engine `open`.
       *
       * @private
       */
    }, {
      key: "onopen",
      value: function onopen() {
        var _this5 = this;
        if (typeof this.auth == "function") {
          this.auth(function (data) {
            _this5._sendConnectPacket(data);
          });
        } else {
          this._sendConnectPacket(this.auth);
        }
      }
      /**
       * Sends a CONNECT packet to initiate the Socket.IO session.
       *
       * @param data
       * @private
       */
    }, {
      key: "_sendConnectPacket",
      value: function _sendConnectPacket(data) {
        this.packet({
          type: PacketType.CONNECT,
          data: this._pid ? _extends({
            pid: this._pid,
            offset: this._lastOffset
          }, data) : data
        });
      }
      /**
       * Called upon engine or manager `error`.
       *
       * @param err
       * @private
       */
    }, {
      key: "onerror",
      value: function onerror(err) {
        if (!this.connected) {
          this.emitReserved("connect_error", err);
        }
      }
      /**
       * Called upon engine `close`.
       *
       * @param reason
       * @param description
       * @private
       */
    }, {
      key: "onclose",
      value: function onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
      }
      /**
       * Called with socket packet.
       *
       * @param packet
       * @private
       */
    }, {
      key: "onpacket",
      value: function onpacket(packet) {
        var sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch (packet.type) {
          case PacketType.CONNECT:
            if (packet.data && packet.data.sid) {
              this.onconnect(packet.data.sid, packet.data.pid);
            } else {
              this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            }
            break;
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            this.onevent(packet);
            break;
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            this.onack(packet);
            break;
          case PacketType.DISCONNECT:
            this.ondisconnect();
            break;
          case PacketType.CONNECT_ERROR:
            this.destroy();
            var err = new Error(packet.data.message);
            // @ts-ignore
            err.data = packet.data.data;
            this.emitReserved("connect_error", err);
            break;
        }
      }
      /**
       * Called upon a server event.
       *
       * @param packet
       * @private
       */
    }, {
      key: "onevent",
      value: function onevent(packet) {
        var args = packet.data || [];
        if (null != packet.id) {
          args.push(this.ack(packet.id));
        }
        if (this.connected) {
          this.emitEvent(args);
        } else {
          this.receiveBuffer.push(Object.freeze(args));
        }
      }
    }, {
      key: "emitEvent",
      value: function emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
          var listeners = this._anyListeners.slice();
          var _iterator = _createForOfIteratorHelper(listeners),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var listener = _step.value;
              listener.apply(this, args);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
          this._lastOffset = args[args.length - 1];
        }
      }
      /**
       * Produces an ack callback to emit with an event.
       *
       * @private
       */
    }, {
      key: "ack",
      value: function ack(id) {
        var self = this;
        var sent = false;
        return function () {
          // prevent double callbacks
          if (sent) return;
          sent = true;
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          self.packet({
            type: PacketType.ACK,
            id: id,
            data: args
          });
        };
      }
      /**
       * Called upon a server acknowlegement.
       *
       * @param packet
       * @private
       */
    }, {
      key: "onack",
      value: function onack(packet) {
        var ack = this.acks[packet.id];
        if ("function" === typeof ack) {
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        }
      }
      /**
       * Called upon server connect.
       *
       * @private
       */
    }, {
      key: "onconnect",
      value: function onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
      }
      /**
       * Emit buffered events (received and emitted).
       *
       * @private
       */
    }, {
      key: "emitBuffered",
      value: function emitBuffered() {
        var _this6 = this;
        this.receiveBuffer.forEach(function (args) {
          return _this6.emitEvent(args);
        });
        this.receiveBuffer = [];
        this.sendBuffer.forEach(function (packet) {
          _this6.notifyOutgoingListeners(packet);
          _this6.packet(packet);
        });
        this.sendBuffer = [];
      }
      /**
       * Called upon server disconnect.
       *
       * @private
       */
    }, {
      key: "ondisconnect",
      value: function ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
      }
      /**
       * Called upon forced client/server side disconnections,
       * this method ensures the manager stops tracking us and
       * that reconnections don't get triggered for this.
       *
       * @private
       */
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.subs) {
          // clean subscriptions to avoid reconnections
          this.subs.forEach(function (subDestroy) {
            return subDestroy();
          });
          this.subs = undefined;
        }
        this.io["_destroy"](this);
      }
      /**
       * Disconnects the socket manually. In that case, the socket will not try to reconnect.
       *
       * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
       *
       * @example
       * const socket = io();
       *
       * socket.on("disconnect", (reason) => {
       *   // console.log(reason); prints "io client disconnect"
       * });
       *
       * socket.disconnect();
       *
       * @return self
       */
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.connected) {
          this.packet({
            type: PacketType.DISCONNECT
          });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
          // fire events
          this.onclose("io client disconnect");
        }
        return this;
      }
      /**
       * Alias for {@link disconnect()}.
       *
       * @return self
       */
    }, {
      key: "close",
      value: function close() {
        return this.disconnect();
      }
      /**
       * Sets the compress flag.
       *
       * @example
       * socket.compress(false).emit("hello");
       *
       * @param compress - if `true`, compresses the sending data
       * @return self
       */
    }, {
      key: "compress",
      value: function compress(_compress) {
        this.flags.compress = _compress;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
       * ready to send messages.
       *
       * @example
       * socket.volatile.emit("hello"); // the server may or may not receive it
       *
       * @returns self
       */
    }, {
      key: "volatile",
      get: function get() {
        this.flags["volatile"] = true;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
       * given number of milliseconds have elapsed without an acknowledgement from the server:
       *
       * @example
       * socket.timeout(5000).emit("my-event", (err) => {
       *   if (err) {
       *     // the server did not acknowledge the event in the given delay
       *   }
       * });
       *
       * @returns self
       */
    }, {
      key: "timeout",
      value: function timeout(_timeout) {
        this.flags.timeout = _timeout;
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * @example
       * socket.onAny((event, ...args) => {
       *   console.log(`got ${event}`);
       * });
       *
       * @param listener
       */
    }, {
      key: "onAny",
      value: function onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * @example
       * socket.prependAny((event, ...args) => {
       *   console.log(`got event ${event}`);
       * });
       *
       * @param listener
       */
    }, {
      key: "prependAny",
      value: function prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`got event ${event}`);
       * }
       *
       * socket.onAny(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAny(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAny();
       *
       * @param listener
       */
    }, {
      key: "offAny",
      value: function offAny(listener) {
        if (!this._anyListeners) {
          return this;
        }
        if (listener) {
          var listeners = this._anyListeners;
          for (var i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
    }, {
      key: "listenersAny",
      value: function listenersAny() {
        return this._anyListeners || [];
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.onAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
    }, {
      key: "onAnyOutgoing",
      value: function onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.prependAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
    }, {
      key: "prependAnyOutgoing",
      value: function prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`sent event ${event}`);
       * }
       *
       * socket.onAnyOutgoing(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAnyOutgoing(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAnyOutgoing();
       *
       * @param [listener] - the catch-all listener (optional)
       */
    }, {
      key: "offAnyOutgoing",
      value: function offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
          return this;
        }
        if (listener) {
          var listeners = this._anyOutgoingListeners;
          for (var i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyOutgoingListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
    }, {
      key: "listenersAnyOutgoing",
      value: function listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
      }
      /**
       * Notify the listeners for each packet sent
       *
       * @param packet
       *
       * @private
       */
    }, {
      key: "notifyOutgoingListeners",
      value: function notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
          var listeners = this._anyOutgoingListeners.slice();
          var _iterator2 = _createForOfIteratorHelper(listeners),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var listener = _step2.value;
              listener.apply(this, packet.data);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }]);
    return Socket;
  }(Emitter);

  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */
  Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  /**
   * Reset the number of attempts.
   *
   * @api public
   */
  Backoff.prototype.reset = function () {
    this.attempts = 0;
  };
  /**
   * Set the minimum duration
   *
   * @api public
   */
  Backoff.prototype.setMin = function (min) {
    this.ms = min;
  };
  /**
   * Set the maximum duration
   *
   * @api public
   */
  Backoff.prototype.setMax = function (max) {
    this.max = max;
  };
  /**
   * Set the jitter
   *
   * @api public
   */
  Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
  };

  var Manager = /*#__PURE__*/function (_Emitter) {
    _inherits(Manager, _Emitter);
    var _super = _createSuper(Manager);
    function Manager(uri, opts) {
      var _this;
      _classCallCheck(this, Manager);
      var _a;
      _this = _super.call(this);
      _this.nsps = {};
      _this.subs = [];
      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = undefined;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      _this.opts = opts;
      installTimerFunctions(_assertThisInitialized(_this), opts);
      _this.reconnection(opts.reconnection !== false);
      _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      _this.reconnectionDelay(opts.reconnectionDelay || 1000);
      _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
      _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
      _this.backoff = new Backoff({
        min: _this.reconnectionDelay(),
        max: _this.reconnectionDelayMax(),
        jitter: _this.randomizationFactor()
      });
      _this.timeout(null == opts.timeout ? 20000 : opts.timeout);
      _this._readyState = "closed";
      _this.uri = uri;
      var _parser = opts.parser || parser;
      _this.encoder = new _parser.Encoder();
      _this.decoder = new _parser.Decoder();
      _this._autoConnect = opts.autoConnect !== false;
      if (_this._autoConnect) _this.open();
      return _this;
    }
    _createClass(Manager, [{
      key: "reconnection",
      value: function reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
      }
    }, {
      key: "reconnectionAttempts",
      value: function reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      }
    }, {
      key: "reconnectionDelay",
      value: function reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
      }
    }, {
      key: "randomizationFactor",
      value: function randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
      }
    }, {
      key: "reconnectionDelayMax",
      value: function reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
      }
    }, {
      key: "timeout",
      value: function timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
      }
      /**
       * Starts trying to reconnect if reconnection is enabled and we have not
       * started reconnecting yet
       *
       * @private
       */
    }, {
      key: "maybeReconnectOnOpen",
      value: function maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
          // keeps reconnection from firing twice for the same reconnection loop
          this.reconnect();
        }
      }
      /**
       * Sets the current transport `socket`.
       *
       * @param {Function} fn - optional, callback
       * @return self
       * @public
       */
    }, {
      key: "open",
      value: function open(fn) {
        var _this2 = this;
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new Socket$1(this.uri, this.opts);
        var socket = this.engine;
        var self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        var openSubDestroy = on(socket, "open", function () {
          self.onopen();
          fn && fn();
        });
        var onError = function onError(err) {
          _this2.cleanup();
          _this2._readyState = "closed";
          _this2.emitReserved("error", err);
          if (fn) {
            fn(err);
          } else {
            // Only do this if there is no fn to handle the error
            _this2.maybeReconnectOnOpen();
          }
        };
        // emit `error`
        var errorSub = on(socket, "error", onError);
        if (false !== this._timeout) {
          var timeout = this._timeout;
          // set timer
          var timer = this.setTimeoutFn(function () {
            openSubDestroy();
            onError(new Error("timeout"));
            socket.close();
          }, timeout);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(function () {
            _this2.clearTimeoutFn(timer);
          });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
      }
      /**
       * Alias for open()
       *
       * @return self
       * @public
       */
    }, {
      key: "connect",
      value: function connect(fn) {
        return this.open(fn);
      }
      /**
       * Called upon transport open.
       *
       * @private
       */
    }, {
      key: "onopen",
      value: function onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        var socket = this.engine;
        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
      }
      /**
       * Called upon a ping.
       *
       * @private
       */
    }, {
      key: "onping",
      value: function onping() {
        this.emitReserved("ping");
      }
      /**
       * Called with data.
       *
       * @private
       */
    }, {
      key: "ondata",
      value: function ondata(data) {
        try {
          this.decoder.add(data);
        } catch (e) {
          this.onclose("parse error", e);
        }
      }
      /**
       * Called when parser fully decodes a packet.
       *
       * @private
       */
    }, {
      key: "ondecoded",
      value: function ondecoded(packet) {
        var _this3 = this;
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        nextTick(function () {
          _this3.emitReserved("packet", packet);
        }, this.setTimeoutFn);
      }
      /**
       * Called upon socket error.
       *
       * @private
       */
    }, {
      key: "onerror",
      value: function onerror(err) {
        this.emitReserved("error", err);
      }
      /**
       * Creates a new socket for the given `nsp`.
       *
       * @return {Socket}
       * @public
       */
    }, {
      key: "socket",
      value: function socket(nsp, opts) {
        var socket = this.nsps[nsp];
        if (!socket) {
          socket = new Socket(this, nsp, opts);
          this.nsps[nsp] = socket;
        } else if (this._autoConnect && !socket.active) {
          socket.connect();
        }
        return socket;
      }
      /**
       * Called upon a socket close.
       *
       * @param socket
       * @private
       */
    }, {
      key: "_destroy",
      value: function _destroy(socket) {
        var nsps = Object.keys(this.nsps);
        for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
          var nsp = _nsps[_i];
          var _socket = this.nsps[nsp];
          if (_socket.active) {
            return;
          }
        }
        this._close();
      }
      /**
       * Writes a packet.
       *
       * @param packet
       * @private
       */
    }, {
      key: "_packet",
      value: function _packet(packet) {
        var encodedPackets = this.encoder.encode(packet);
        for (var i = 0; i < encodedPackets.length; i++) {
          this.engine.write(encodedPackets[i], packet.options);
        }
      }
      /**
       * Clean up transport subscriptions and packet buffer.
       *
       * @private
       */
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs.length = 0;
        this.decoder.destroy();
      }
      /**
       * Close the current socket.
       *
       * @private
       */
    }, {
      key: "_close",
      value: function _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine) this.engine.close();
      }
      /**
       * Alias for close()
       *
       * @private
       */
    }, {
      key: "disconnect",
      value: function disconnect() {
        return this._close();
      }
      /**
       * Called upon engine close.
       *
       * @private
       */
    }, {
      key: "onclose",
      value: function onclose(reason, description) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      }
      /**
       * Attempt a reconnection.
       *
       * @private
       */
    }, {
      key: "reconnect",
      value: function reconnect() {
        var _this4 = this;
        if (this._reconnecting || this.skipReconnect) return this;
        var self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          this.backoff.reset();
          this.emitReserved("reconnect_failed");
          this._reconnecting = false;
        } else {
          var delay = this.backoff.duration();
          this._reconnecting = true;
          var timer = this.setTimeoutFn(function () {
            if (self.skipReconnect) return;
            _this4.emitReserved("reconnect_attempt", self.backoff.attempts);
            // check again for the case socket closed in above events
            if (self.skipReconnect) return;
            self.open(function (err) {
              if (err) {
                self._reconnecting = false;
                self.reconnect();
                _this4.emitReserved("reconnect_error", err);
              } else {
                self.onreconnect();
              }
            });
          }, delay);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(function () {
            _this4.clearTimeoutFn(timer);
          });
        }
      }
      /**
       * Called upon successful reconnect.
       *
       * @private
       */
    }, {
      key: "onreconnect",
      value: function onreconnect() {
        var attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
      }
    }]);
    return Manager;
  }(Emitter);

  /**
   * Managers cache.
   */
  var cache = {};
  function lookup(uri, opts) {
    if (_typeof(uri) === "object") {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    var parsed = url(uri, opts.path || "/socket.io");
    var source = parsed.source;
    var id = parsed.id;
    var path = parsed.path;
    var sameNamespace = cache[id] && path in cache[id]["nsps"];
    var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    var io;
    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
  // namespace (e.g. `io.connect(...)`), for backward compatibility
  _extends(lookup, {
    Manager: Manager,
    Socket: Socket,
    io: lookup,
    connect: lookup
  });

  return lookup;

}));
//# sourceMappingURL=socket.io.js.map
