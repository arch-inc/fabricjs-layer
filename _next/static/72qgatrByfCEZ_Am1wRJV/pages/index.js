(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+IV6":function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},"23aj":function(e,t,r){"use strict";r.r(t);var n=r("YIwv"),s=r.n(n),i=r("mXGw"),o=r.n(i),a=r("9fEB"),c=r.n(a),u=o.a.createElement,l="/fabricjs-layer".replace(/\/$/,"");t.default=function(){var e=Object(i.useRef)(),t=Object(i.useMemo)((function(){return u("canvas",{ref:e,width:"720",height:"480"})}),[]);return Object(i.useEffect)((function(){e.current&&window.initialize(e.current)}),[e.current]),u(o.a.Fragment,null,u(c.a,null,u("title",{key:"title",className:"jsx-273242210"},"fabricjs-layer | A lightweight pressure-sensitive brush implementation for Fabric.js"),u("link",{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.4/dist/semantic.min.css",className:"jsx-273242210"})),u(s.a,{id:"273242210"},["html,body{background:#eee;}","div.hero.jsx-273242210{padding:3em 0;}","div.main.content.jsx-273242210{background:#fff;padding:2em 0 0 0;}","div.canvas-wrapper.jsx-273242210{background:#f5f5f5;margin:2em auto 0 auto;padding:2em 0;}","div.canvas-wrapper.jsx-273242210>div.canvas.jsx-273242210{text-align:center;overflow:hidden;}","div.canvas-wrapper.jsx-273242210>div.canvas.jsx-273242210 .canvas-container{margin:auto;border:1px solid #eee;background:#fff;}","footer.jsx-273242210{padding:2em 0;}"]),u("div",{className:"jsx-273242210 hero"},u("div",{className:"jsx-273242210 ui container"},u("h1",{className:"jsx-273242210 ui header"},u("div",{className:"jsx-273242210 content"},"fabricjs-layer",u("div",{className:"jsx-273242210 sub header"},"A simple layer implementation for Fabric.js"))))),u("div",{className:"jsx-273242210 main content"},u("div",{className:"jsx-273242210 ui container"},u("div",{className:"jsx-273242210 ui message"},u("div",{className:"jsx-273242210 header"},"How to install"),u("pre",{className:"jsx-273242210"},"npm i @arch-inc/fabricjs-layer"),u("p",{className:"jsx-273242210"},"For more details on how to use this library, please refer to the following documents.")),u("div",{className:"jsx-273242210 ui selection divided list"},u("a",{href:"https://www.npmjs.com/package/@arch-inc/fabricjs-layer",className:"jsx-273242210 item"},u("i",{className:"jsx-273242210 npm icon"}),u("div",{className:"jsx-273242210 content"},u("div",{className:"jsx-273242210 header"},"NPM package registry"),u("div",{className:"jsx-273242210 description"},"@arch-inc/fabricjs-layer"))),u("a",{href:"https://github.com/arch-inc/fabricjs-layer",className:"jsx-273242210 item"},u("i",{className:"jsx-273242210 github icon"}),u("div",{className:"jsx-273242210 content"},u("div",{className:"jsx-273242210 header"},"GitHub repository"),u("div",{className:"jsx-273242210 description"},"@arch-inc/fabricjs-layer"))),u("a",{href:"https://arch-inc.github.io/fabricjs-layer/api/globals.html",className:"jsx-273242210 item"},u("i",{className:"jsx-273242210 file alternate outline icon"}),u("div",{className:"jsx-273242210 content"},u("div",{className:"jsx-273242210 header"},"API document"),u("div",{className:"jsx-273242210 description"},"automatically generated with TypeDoc"))),u("a",{href:"https://arch-inc.github.io/fabricjs-layer/index.js",className:"jsx-273242210 item"},u("i",{className:"jsx-273242210 file code outline icon"}),u("div",{className:"jsx-273242210 content"},u("div",{className:"jsx-273242210 header"},"index.js"),u("div",{className:"jsx-273242210 description"},"example code loaded in this page"))))),u("div",{className:"jsx-273242210 canvas-wrapper"},u("div",{className:"jsx-273242210 ui container"},u("h3",{className:"jsx-273242210 ui header"},"Live demo"),u("p",{className:"jsx-273242210"},"Draw anything on the white blank canvas shown below; tested on iPad Pro and Surface Go."),u("div",{className:"jsx-273242210 ui divider"})),u("div",{className:"jsx-273242210 ui basic segment center aligned"},u("div",{className:"jsx-273242210 ui horizontal list"},u("div",{className:"jsx-273242210 item"},u("button",{id:"brush",className:"jsx-273242210 ui primary button"},u("i",{className:"jsx-273242210 paint brush icon"}),"brush")),u("div",{className:"jsx-273242210 item"},u("button",{id:"eraser",className:"jsx-273242210 ui button"},u("i",{className:"jsx-273242210 eraser icon"}),"eraser")),u("div",{className:"jsx-273242210 item"},u("button",{id:"undo",disabled:!0,className:"jsx-273242210 ui button"},u("i",{className:"jsx-273242210 undo icon"}),"undo last erase")))),u("div",{className:"jsx-273242210 canvas"},t))),u("footer",{className:"jsx-273242210"},u("div",{className:"jsx-273242210 ui container"},u("div",{className:"jsx-273242210 ui horizontal divided list"},u("div",{className:"jsx-273242210 item"},"\xa9 ",u("a",{href:"//research.archinc.jp",className:"jsx-273242210"},"Arch Inc.")," 2020"),u("div",{className:"jsx-273242210 item"},u("a",{href:"https://github.com/arch-inc/fabricjs-layer",className:"jsx-273242210"},u("i",{className:"jsx-273242210 github icon"})," arch-inc/fabricjs-layer"))))),u("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js",className:"jsx-273242210"}),u("script",{src:"https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-psbrush@0.0.15/dist/index.js",className:"jsx-273242210"}),u("script",{src:"".concat(l,"/lib.js"),className:"jsx-273242210"}),u("script",{src:"".concat(l,"/index.js"),className:"jsx-273242210"}))}},"5IsQ":function(e,t){var r,n,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},"5WRv":function(e,t,r){var n=r("iNmH"),s=r("Qatm"),i=r("kluZ");e.exports=function(e){return n(e)||s(e)||i()}},"9fEB":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r("mXGw")),i=n(r("GlZI")),o=r("9rrO"),a=r("bxxT"),c=r("vI6Y");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(s){var i=!0;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){var o=s.key.slice(s.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(var a=0,c=d.length;a<c;a++){var u=d[a];if(s.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?i=!1:r.add(u);else{var l=s.props[u],h=n[u]||new Set;h.has(l)?i=!1:(h.add(l),n[u]=h)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return s.default.cloneElement(e,{key:r})}))}var f=i.default();function p(e){var t=e.children;return s.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return s.default.createElement(a.HeadManagerContext.Consumer,null,(function(r){return s.default.createElement(f,{reduceComponentsToState:h,handleStateChange:r,inAmpMode:c.isInAmpMode(e)},t)}))}))}p.rewind=f.rewind,t.default=p},"9rrO":function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r("mXGw"));t.AmpStateContext=s.createContext({})},GlZI:function(e,t,r){"use strict";var n=r("SDJZ"),s=r("T1e2"),i=r("NToG"),o=r("K4DB"),a=r("+IV6"),c=r("eef+"),u=r("5WRv");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var d=r("mXGw"),h=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(u(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(u){c(p,u);var d,f=(d=p,function(){var e,t=a(d);if(l()){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return o(this,e)});function p(e){var i;return n(this,p),i=f.call(this,e),h&&(t.add(s(i)),r(s(i))),i}return i(p,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),i(p,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),p}(d.Component)}},HrG8:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,c=void 0===a?n:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,i,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("5IsQ"))},K4DB:function(e,t,r){var n=r("e+GP"),s=r("T1e2");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?s(e):t}},NToG:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},Qatm:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},SDJZ:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},T1e2:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},WI9V:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},WjHl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},YIwv:function(e,t,r){e.exports=r("s1G/")},bxxT:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r("mXGw"));t.HeadManagerContext=s.createContext(null)},"e+GP":function(e,t){function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},"eef+":function(e,t,r){var n=r("WI9V");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},iNmH:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"s1G/":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,s=r("mXGw");var i=new(((n=r("uVoP"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var s=n.prototype;return s.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},s.componentWillUnmount=function(){i.remove(this.props)},s.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(s.Component);t.default=o},uVoP:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r("zcKR")),s=i(r("HrG8"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var s=String(r),i=t+s;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+s)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var s=r+n;return t[s]||(t[s]=n.replace(e,r)),t[s]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,s=e.id;if(n){var i=this.computeId(s,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(s),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},vI6Y:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r("mXGw")),i=r("9rrO");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,i=e.hasQuery;return r||s&&(void 0!==i&&i)}t.isInAmpMode=o,t.useAmp=function(){return o(s.default.useContext(i.AmpStateContext))}},x9yg:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},zcKR:function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}}},[["WjHl",0,1]]]);