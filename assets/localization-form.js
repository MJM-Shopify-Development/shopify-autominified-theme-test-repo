"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,n){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);e=new(Function.bind.apply(t,r));return n&&_setPrototypeOf(e,n.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("localization-form")||customElements.define("localization-form",function(){_inherits(n,_wrapNativeSuper(HTMLElement));var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.call(this)).elements={input:e.querySelector('input[name="locale_code"], input[name="country_code"]'),button:e.querySelector("button"),panel:e.querySelector(".disclosure__list-wrapper")},e.elements.button.addEventListener("click",e.openSelector.bind(_assertThisInitialized(e))),e.elements.button.addEventListener("focusout",e.closeSelector.bind(_assertThisInitialized(e))),e.addEventListener("keyup",e.onContainerKeyUp.bind(_assertThisInitialized(e))),e.querySelectorAll("a").forEach(function(t){return t.addEventListener("click",e.onItemClick.bind(_assertThisInitialized(e)))}),e}return _createClass(n,[{key:"hidePanel",value:function(){this.elements.button.setAttribute("aria-expanded","false"),this.elements.panel.setAttribute("hidden",!0)}},{key:"onContainerKeyUp",value:function(t){"ESCAPE"===t.code.toUpperCase()&&"false"!=this.elements.button.getAttribute("aria-expanded")&&(this.hidePanel(),t.stopPropagation(),this.elements.button.focus())}},{key:"onItemClick",value:function(t){t.preventDefault();var e=this.querySelector("form");this.elements.input.value=t.currentTarget.dataset.value,e&&e.submit()}},{key:"openSelector",value:function(){this.elements.button.focus(),this.elements.panel.toggleAttribute("hidden"),this.elements.button.setAttribute("aria-expanded",("false"===this.elements.button.getAttribute("aria-expanded")).toString())}},{key:"closeSelector",value:function(t){var e=this.elements.panel.contains(t.relatedTarget)||this.elements.button.contains(t.relatedTarget);t.relatedTarget&&e||this.hidePanel()}}]),n}());