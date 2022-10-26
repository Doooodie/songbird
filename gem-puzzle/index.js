(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}};function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.d({},{Z:()=>Nt});var r=n((function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"div",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";o(this,t),this.root=document.createElement(r),this.root.classList.add(e),this.root.textContent=n,this.root.href=i}));function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function a(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}const s=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(s,t);var e,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(o);if(r){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function s(){var t;c(this,s);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))).movesCount=0,t.root.textContent="Moves: ".concat(t.movesCount),t}return e=s,(n=[{key:"updateText",value:function(){this.root.textContent="Moves: ".concat(this.movesCount)}},{key:"resetMoves",value:function(){this.movesCount=0,this.updateText()}},{key:"countMove",value:function(){this.movesCount+=1,this.updateText()}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(r))("dynamic-info","","span");function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function b(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}const v=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(o);if(r){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return b(this,t)});function c(){var t;y(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))).minutes="0",t.seconds="00",t.root.textContent="Time: ".concat(t.minutes,":").concat(t.seconds),t.interval=null,t.startTime=0,t.nowTime=0,t}return e=c,(n=[{key:"startTimer",value:function(){var t=this;this.resetTimer();var e=(new Date).getTime();this.startTime=e,this.interval=setInterval((function(){var n=(new Date).getTime();t.nowTime=n;var o=(n-e)/1e3;t.seconds=parseInt(o%60,10),t.minutes=parseInt(o/60%60,10),t.seconds<10&&(t.seconds="0".concat(t.seconds)),t.root.textContent="Time: ".concat(t.minutes,":").concat(t.seconds)}),1e3)}},{key:"continueTimer",value:function(){var t=this;this.resetTimer();var e=(new Date).getTime()+this.startTime,n=Number(this.nowTime);this.startTime=e,this.interval=setInterval((function(){var o=(new Date).getTime()+n;t.nowTime=o;var r=(o-e)/1e3;t.seconds=parseInt(r%60,10),t.minutes=parseInt(r/60%60,10),t.seconds<10&&(t.seconds="0".concat(t.seconds)),t.root.textContent="Time: ".concat(t.minutes,":").concat(t.seconds)}),1e3)}},{key:"stopTimer",value:function(){clearInterval(this.interval)}},{key:"resetTimer",value:function(){this.stopTimer(),this.minutes="0",this.seconds="00",this.root.textContent="Time: ".concat(this.minutes,":").concat(this.seconds)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(r))("dynamic-info","","span"),w=t.p+"pop.mp3";function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function C(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(o);if(r){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return C(this,t)});function c(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"checkbox";O(this,c);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(t=i.call.apply(i,[this].concat(o))).root.type=e,t.root.checked=!0,t.audio=new Audio(w),t}return e=c,(n=[{key:"playSound",value:function(){this.root.checked&&this.audio.play()}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(r),x=new r("sound-container"),_=new r("sound-text","Sound: ","span"),R=new T("checkbox","sound-switcher","","input");function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function A(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}x.root.append(_.root,R.root);var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(l,t);var e,n,o,i,c=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(o);if(i){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function l(t){var e;E(this,l);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return L(M(e=c.call.apply(c,[this].concat(o))),"close",(function(){e.root.remove(),e.container.root.remove()})),e.container=new r("overlay-container"),e.container.root.append(t),e.root.onclick=e.close,e}return e=l,(n=[{key:"open",value:function(){Nt.prepend(this.root),this.root.after(this.container.root)}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(r);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function q(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}const J=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(o);if(r){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function c(t){var e;N(this,c);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(e=i.call.apply(i,[this].concat(o))).fieldSize=Math.sqrt(t),e.root.textContent="Frame size: ".concat(e.fieldSize,"x").concat(e.fieldSize),e}return e=c,(n=[{key:"update",value:function(t){this.fieldSize=Math.sqrt(t),this.root.textContent="Frame size: ".concat(this.fieldSize,"x").concat(this.fieldSize)}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(r))(9,"frame-size");function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function U(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Z(t,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Z(t,e)}function K(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Q(t)}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const et=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Z(t,e)}(l,t);var e,n,o,i,c=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(o);if(i){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return K(this,t)});function l(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;U(this,l);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return tt(Q(t=c.call.apply(c,[this].concat(o))),"enableCells",(function(){t.top&&t.top.root.addEventListener("click",t.moveBottom),t.right&&t.right.root.addEventListener("click",t.moveLeft),t.bottom&&t.bottom.root.addEventListener("click",t.moveTop),t.left&&t.left.root.addEventListener("click",t.moveRight)})),tt(Q(t),"moveBottom",(function(e){t.cellHeight=getComputedStyle(t.emptyCell.root).height;var n=e;n.target.style.transform="translateY(".concat(t.cellHeight,")"),R.playSound(),s.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]-1][t.emptyCellIndex[1]]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),tt(Q(t),"moveLeft",(function(e){t.cellWidth=getComputedStyle(t.emptyCell.root).width;var n=e;n.target.style.transform="translateX(-".concat(t.cellWidth,")"),R.playSound(),s.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]+1]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),tt(Q(t),"moveTop",(function(e){t.cellHeight=getComputedStyle(t.emptyCell.root).height;var n=e;n.target.style.transform="translateY(-".concat(t.cellHeight,")"),R.playSound(),s.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]+1][t.emptyCellIndex[1]]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),tt(Q(t),"moveRight",(function(e){t.cellWidth=getComputedStyle(t.emptyCell.root).width;var n=e;n.target.style.transform="translateX(".concat(t.cellWidth,")"),R.playSound(),s.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]-1]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),tt(Q(t),"saveGame",(function(){for(var e=[],n=0;n<t.field.length;n+=1)for(var o=0;o<t.field[0].length;o+=1)e.push(t.field[n][o].root.textContent);var r={minutes:v.minutes,seconds:v.seconds,startTime:v.startTime,nowTime:v.nowTime,moves:s.movesCount,range:e,field:t.field,fieldSize:t.fieldSize,soundStatus:R.root.checked};localStorage.setItem("savedGame",JSON.stringify(r))})),t.root.classList.add("game-container"),t.winState=!1,t.fieldSize=e,t.savedRange=null,t.range=Array.from(Array(t.fieldSize).keys(),(function(t){return t+1})),t.field=Array(Math.sqrt(t.fieldSize)).fill(null).map((function(){return Array(Math.sqrt(t.fieldSize)).fill(0)})),t.cellWidth="",t.cellHeight="",t.emptyCell=null,t.emptyCellIndex=null,t.top=null,t.right=null,t.bottom=null,t.left=null,t}return e=l,(n=[{key:"startGame",value:function(){var t=JSON.parse(localStorage.getItem("savedGame"));if(t)if(confirm("Saved game detected! Do you want to load game?")){v.startTime=t.startTime,v.nowTime=t.nowTime,v.minutes=t.minutes,v.seconds=t.seconds,v.continueTimer(),s.movesCount=t.moves,s.updateText(),R.root.checked=t.soundStatus,this.fieldSize=t.fieldSize,this.field=t.field,this.savedRange=t.range;var e=Math.sqrt(this.fieldSize);this.root.className="game-".concat(e,"x").concat(e," game-container"),this.loadField()}else s.resetMoves(),v.startTimer(),this.generateField();else s.resetMoves(),v.startTimer(),this.generateField();J.update(this.fieldSize),ut.enable()}},{key:"stopGame",value:function(){v.stopTimer(),this.disableCells(),this.saveResult(),ut.disable(),new F("Hooray! You solved the puzzle in ".concat(v.minutes,":").concat(v.seconds," and ").concat(s.movesCount," moves!"),"overlay").open()}},{key:"generateField",value:function(){this.root.innerHTML=null;for(var t=this.shuffle(),e=0,n=0;n<this.field.length;n+=1)for(var o=0;o<this.field[0].length;o+=1)t[e]===this.fieldSize?this.field[n][o]=new r("cell"):this.field[n][o]=new r("cell",t[e]),this.root.append(this.field[n][o].root),e+=1;this.hasSolution(t)||this.generateField(),this.makeCellsActive(),this.checkForWin(),this.winState&&this.stopGame()}},{key:"newSize",value:function(t){var e=this;this.root.innerHTML=null,v.resetTimer(),s.resetMoves(),ut.disable(),this.fieldSize=t*t,this.range=Array.from(Array(this.fieldSize).keys(),(function(t){return t+1})),this.field=Array(Math.sqrt(this.fieldSize)).fill(null).map((function(){return Array(Math.sqrt(e.fieldSize)).fill(0)})),this.root.className="game-".concat(t,"x").concat(t," game-container"),J.update(this.fieldSize)}},{key:"loadField",value:function(){this.root.innerHTML=null;for(var t=0,e=0;e<this.field.length;e+=1)for(var n=0;n<this.field[0].length;n+=1)this.field[e][n]=new r("cell",this.savedRange[t]),this.root.append(this.field[e][n].root),t+=1;this.makeCellsActive(),this.checkForWin(),this.winState&&this.stopGame()}},{key:"hasSolution",value:function(t){for(var e=this,n=t.filter((function(t){return t!==e.fieldSize})),o=Math.sqrt(this.fieldSize),r=this.returnEmptyCell()[0],i=0,c=0;c<this.fieldSize;c+=1)for(var l=c+1;l<this.fieldSize;l+=1)n[l]<n[c]&&(i+=1);return o%2!=0?i%2==0:(i+r)%2!=0}},{key:"refreshField",value:function(){this.root.innerHTML=null;for(var t=0;t<this.field.length;t+=1)for(var e=0;e<this.field[0].length;e+=1)this.root.append(this.field[t][e].root);this.makeCellsActive(),this.checkForWin(),this.winState&&this.stopGame()}},{key:"makeCellsActive",value:function(){this.top=this.findActiveCell("top"),this.right=this.findActiveCell("right"),this.left=this.findActiveCell("left"),this.bottom=this.findActiveCell("bottom"),this.enableCells()}},{key:"disableCells",value:function(){this.top&&this.top.root.removeEventListener("click",this.moveBottom),this.right&&this.right.root.removeEventListener("click",this.moveLeft),this.bottom&&this.bottom.root.removeEventListener("click",this.moveTop),this.left&&this.left.root.removeEventListener("click",this.moveRight)}},{key:"findActiveCell",value:function(t){if(this.emptyCellIndex=this.returnEmptyCell(),this.emptyCell=this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]],"top"===t)try{return this.field[this.emptyCellIndex[0]-1][this.emptyCellIndex[1]]}catch(t){return null}if("right"===t)try{return this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]+1]}catch(t){return null}if("bottom"===t)try{return this.field[this.emptyCellIndex[0]+1][this.emptyCellIndex[1]]}catch(t){return null}if("left"===t)try{return this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]-1]}catch(t){return null}return null}},{key:"returnEmptyCell",value:function(){for(var t=0;t<this.field.length;t+=1)for(var e=0;e<this.field[0].length;e+=1)if(""===this.field[t][e].root.textContent)return[t,e];return null}},{key:"checkForWin",value:function(){for(var t=this,e=[],n=this.range.map((function(e){return e===t.fieldSize?"":"".concat(e)})),o=0;o<this.field.length;o+=1)for(var r=0;r<this.field[0].length;r+=1)e.push(this.field[o][r].root.textContent);n.every((function(t,n){return t===e[n]}))?this.winState=!0:this.winState=!1}},{key:"saveResult",value:function(){var t=JSON.parse(localStorage.getItem("results"));t||(localStorage.setItem("results",JSON.stringify([])),t=JSON.parse(localStorage.getItem("results")));var e,n={fieldSize:"".concat(Math.pow(this.fieldSize,.5),"x").concat(Math.pow(this.fieldSize,.5)),time:"".concat(v.minutes,":").concat(v.seconds),moves:s.movesCount};t.length<10&&localStorage.setItem("results",JSON.stringify([].concat(function(t){if(Array.isArray(t))return Y(t)}(e=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[n])))}},{key:"shuffle",value:function(){for(var t=Array.from(this.range),e=t.length-1;e>0;e-=1){var n=Math.floor(Math.random()*e),o=t[e];t[e]=t[n],t[n]=o}return t}}])&&X(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(r))(9,"game-3x3");function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function it(t,e){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},it(t,e)}function ct(t,e){if(e&&("object"===nt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function lt(t){return lt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},lt(t)}const ut=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&it(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=lt(o);if(r){var n=lt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ct(this,t)});function c(){var t;ot(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))).root.disabled=!0,t.root.onclick=et.saveGame,t}return e=c,(n=[{key:"enable",value:function(){this.root.disabled=!1}},{key:"disable",value:function(){this.root.disabled=!0}}])&&rt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(r))("button","Save","button");function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function ft(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function st(t,e){return st=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},st(t,e)}function pt(t,e){if(e&&("object"===at(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function yt(t){return yt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},yt(t)}const ht=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&st(t,e)}(i,t);var e,n,o,r=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=yt(n);if(o){var r=yt(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return pt(this,t)});function i(){var t;ft(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=r.call.apply(r,[this].concat(n))).root.addEventListener("click",(function(){et.startGame()})),t}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(r))("button","Start","button");function dt(t){return dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dt(t)}function bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(t,e){return mt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},mt(t,e)}function vt(t,e){if(e&&("object"===dt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return wt(t)}function wt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gt(t){return gt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},gt(t)}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var St=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&mt(t,e)}(c,t);var e,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=gt(n);if(o){var r=gt(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return vt(this,t)});function c(){var t;bt(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return Ot(wt(t=i.call.apply(i,[this].concat(n))),"showResults",(function(){t.container.root.innerHTML=null;var e=new F(t.container.root,"overlay"),n=JSON.parse(localStorage.getItem("results"));n?n.forEach((function(e,n){var o=new r("result-container"),i=new r("result-place","".concat(n+1,"."),"span"),c=new r("result-size","field size: ".concat(e.fieldSize),"span"),l=new r("result-time","time: ".concat(e.time),"span"),u=new r("result-moves","moves: ".concat(e.moves),"span");o.root.append(i.root,c.root,l.root,u.root),t.container.root.append(o.root)})):t.container.root.textContent="No leaders! Solve the puzzle to become one.",e.open()})),t.container=new r("results-container"),t.results=null,t.root.onclick=t.showResults,t}return e=c,Object.defineProperty(e,"prototype",{writable:!1}),e}(r);const jt=new St("button","Results","button");var Ct=new r("buttons-container").root;Ct.append(ut.root,ht.root,jt.root);const Pt=Ct;var Tt=new r("game-info").root,xt=[new r("moves-container").root,new r("time-container").root];xt[0].append(s.root),xt[1].append(v.root),Tt.append.apply(Tt,xt);const _t=Tt;function Rt(t){return Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rt(t)}function kt(t){return function(t){if(Array.isArray(t))return Et(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return Et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Et(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function zt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function It(t,e){return It=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},It(t,e)}function At(t,e){if(e&&("object"===Rt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Mt(t){return Mt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Mt(t)}const Bt=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&It(t,e)}(c,t);var e,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Mt(n);if(o){var r=Mt(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return At(this,t)});function c(){var t,e;zt(this,c);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];(e=i.call.apply(i,[this].concat(o))).text=new r("other-sizes-text","Other sizes:","span"),e.sizes=[];for(var u=function(t){var n=new r("other-sizes-link","".concat(t,"x").concat(t),"a","#");n.root.onclick=function(){et.newSize(t)},e.sizes.push(n.root)},a=3;a<=8;a+=1)u(a);return(t=e.root).append.apply(t,[e.text.root].concat(kt(e.sizes))),e}return e=c,Object.defineProperty(e,"prototype",{writable:!1}),e}(r))("other-sizes");var Lt=new r("container").root;Lt.append(Pt,_t,et.root,J.root,Bt.root,x.root);const Ft=Lt;var Dt=document.querySelector(".wrapper");Dt.append(Ft);const Nt=Dt})();