"use strict";function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,o,e){return o&&_defineProperties(t.prototype,o),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,o){if("object"!==_typeof(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0===e)return("string"===o?String:Number)(t);if("object"!==_typeof(e=e.call(t,o||"default")))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),o&&_setPrototypeOf(t,o)}function _createSuper(e){var n=_isNativeReflectConstruct();return function(){var t,o=_getPrototypeOf(e);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments))}}function _possibleConstructorReturn(t,o){if(o&&("object"===_typeof(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(o,t)})(t)}function _construct(t,o,e){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,o,e){var n=[null];return n.push.apply(n,o),o=new(Function.bind.apply(t,n)),e&&_setPrototypeOf(o,e.prototype),o}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(o){try{return-1!==Function.toString.call(o).indexOf("[native code]")}catch(t){return"function"==typeof o}}function _setPrototypeOf(t,o){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t})(t,o)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var DetailsDisclosure=function(){_inherits(e,_wrapNativeSuper(HTMLElement));var o=_createSuper(e);function e(){var t;return _classCallCheck(this,e),(t=o.call(this)).mainDetailsToggle=t.querySelector("details"),t.content=t.mainDetailsToggle.querySelector("summary").nextElementSibling,t.mainDetailsToggle.addEventListener("focusout",t.onFocusOut.bind(_assertThisInitialized(t))),t.mainDetailsToggle.addEventListener("toggle",t.onToggle.bind(_assertThisInitialized(t))),t}return _createClass(e,[{key:"onFocusOut",value:function(){var t=this;setTimeout(function(){t.contains(document.activeElement)||t.close()})}},{key:"onToggle",value:function(){this.animations||(this.animations=this.content.getAnimations()),this.mainDetailsToggle.hasAttribute("open")?this.animations.forEach(function(t){return t.play()}):this.animations.forEach(function(t){return t.cancel()})}},{key:"close",value:function(){this.mainDetailsToggle.removeAttribute("open"),this.mainDetailsToggle.querySelector("summary").setAttribute("aria-expanded",!1)}}]),e}(),HeaderMenu=(customElements.define("details-disclosure",DetailsDisclosure),function(){_inherits(e,DetailsDisclosure);var o=_createSuper(e);function e(){var t;return _classCallCheck(this,e),(t=o.call(this)).header=document.querySelector(".header-wrapper"),t}return _createClass(e,[{key:"onToggle",value:function(){this.header&&(this.header.preventHide=this.mainDetailsToggle.open,""===document.documentElement.style.getPropertyValue("--header-bottom-position-desktop"))&&document.documentElement.style.setProperty("--header-bottom-position-desktop","".concat(Math.floor(this.header.getBoundingClientRect().bottom),"px"))}}]),e}());customElements.define("header-menu",HeaderMenu);