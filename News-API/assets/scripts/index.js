(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(t,e,r){return(e=i(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function i(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function a(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=b(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},p.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}const h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(o){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return v(this,t)});function u(){return s(this,u),i.apply(this,arguments)}return e=u,(r=[{key:"getSources",value:function(t){p(d(u.prototype),"getResp",this).call(this,{endpoint:"sources"},t)}},{key:"getNews",value:function(t,e){for(var r=t.target,n=t.currentTarget;r!==n;){if(r.classList.contains("source__item")){var o=r.getAttribute("data-source-id");return void(n.getAttribute("data-source")!==o&&(n.setAttribute("data-source",o),p(d(u.prototype),"getResp",this).call(this,{endpoint:"everything",options:{sources:o}},e)))}r=r.parentNode}}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(r);if(n){var o=l(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return a(this,t)});function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"https://nodenews.up.railway.app/",{apiKey:"68bb878b73ff4f2490da8d8731a1aed5"})}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseLink=e,this.options=r}var e,n;return e=t,n=[{key:"getResp",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){console.error("No callback for GET response")};this.load("GET",t.endpoint,e,t.options)}},{key:"errorHandler",value:function(t){if(!t.ok)throw 401!==t.status&&404!==t.status||console.log("Sorry, but there is ".concat(t.status," error: ").concat(t.statusText)),Error(t.statusText);return t}},{key:"makeUrl",value:function(t,e){var n=r(r({},this.options),t),o="".concat(this.baseLink).concat(e,"?");return Object.keys(n).forEach((function(t,e){o+="".concat(t,"=").concat(e,"&")})),o.slice(0,-1)}},{key:"load",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};fetch(this.makeUrl(n,e),{method:t}).then(this.errorHandler).then((function(t){return t.json()})).then((function(t){return r(t)})).catch((function(t){return console.error(t)}))}}],n&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()));function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"draw",value:function(t){var e=t.length>=10?t.filter((function(t,e){return e<10})):t,r=document.createDocumentFragment(),n=document.querySelector("#newsItemTemp");e.forEach((function(t,e){var o,i=n.content.cloneNode(!0),u=i.querySelector(".news__meta-photo"),c=i.querySelector(".news__meta-author"),a=i.querySelector(".news__meta-date"),l=i.querySelector(".news__description-title"),f=i.querySelector(".news__description-source"),s=i.querySelector(".news__read-more a"),y=i.querySelector(".news__description-content");e%2&&(null===(o=i.querySelector(".news__item"))||void 0===o||o.classList.add("alt")),u.style.backgroundImage="url(".concat(t.urlToImage||"img/news_placeholder.jpg",")"),c.textContent=t.author||t.source.name,a.textContent=t.publishedAt.slice(0,10).split("-").reverse().join("-"),l.textContent=t.title,f.textContent=t.source.name,y.textContent=t.description,s.setAttribute("href",t.url),r.append(i)}));var o=document.querySelector(".news");o.innerHTML="",o.appendChild(r)}}],r&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const O=g;function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}const _=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,(r=[{key:"draw",value:function(t){var e,r=document.createDocumentFragment(),n=document.querySelector("#sourceItemTemp");t.forEach((function(t){var e=n.content.cloneNode(!0),o=e.querySelector(".source__item-name"),i=e.querySelector(".source__item");o.textContent=t.name,i.setAttribute("data-source-id",t.id),r.append(e)})),null===(e=document.querySelector(".sources"))||void 0===e||e.append(r)}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.news=new O,this.sources=new _}var e,r;return e=t,(r=[{key:"drawNews",value:function(t){var e=null!=t&&t.articles?null==t?void 0:t.articles:[];this.news.draw(e)}},{key:"drawSources",value:function(t){var e=null!=t&&t.sources?null==t?void 0:t.sources:[];this.sources.draw(e)}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.controller=new h,this.view=new T}var e,r;return e=t,(r=[{key:"start",value:function(){var t,e=this;null===(t=document.querySelector(".sources"))||void 0===t||t.addEventListener("click",(function(t){return e.controller.getNews(t,(function(t){return e.view.drawNews(t)}))})),this.controller.getSources((function(t){return e.view.drawSources(t)}))}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())).start()})();