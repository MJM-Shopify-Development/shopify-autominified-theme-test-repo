"use strict";function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!==_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(o){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(o);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,o){var n=[null];return n.push.apply(n,e),e=new(Function.bind.apply(t,n)),o&&_setPrototypeOf(e,o.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var CartNotification=function(){_inherits(o,_wrapNativeSuper(HTMLElement));var t=_createSuper(o);function o(){var e;return _classCallCheck(this,o),(e=t.call(this)).notification=document.getElementById("cart-notification"),e.header=document.querySelector("sticky-header"),e.onBodyClick=e.handleBodyClick.bind(_assertThisInitialized(e)),e.notification.addEventListener("keyup",function(t){return"Escape"===t.code&&e.close()}),e.querySelectorAll('button[type="button"]').forEach(function(t){return t.addEventListener("click",e.close.bind(_assertThisInitialized(e)))}),e}return _createClass(o,[{key:"open",value:function(){var t=this;this.notification.classList.add("animate","active"),this.notification.addEventListener("transitionend",function(){t.notification.focus(),trapFocus(t.notification)},{once:!0}),document.body.addEventListener("click",this.onBodyClick)}},{key:"close",value:function(){this.notification.classList.remove("active"),document.body.removeEventListener("click",this.onBodyClick),removeTrapFocus(this.activeElement)}},{key:"renderContents",value:function(e){var o=this;this.cartItemKey=e.key,this.getSectionsToRender().forEach(function(t){document.getElementById(t.id).innerHTML=o.getSectionInnerHTML(e.sections[t.id],t.selector)}),this.header&&this.header.reveal(),this.open()}},{key:"getSectionsToRender",value:function(){return[{id:"cart-notification-product",selector:'[id="cart-notification-product-'.concat(this.cartItemKey,'"]')},{id:"cart-notification-button"},{id:"cart-icon-bubble"}]}},{key:"getSectionInnerHTML",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:".shopify-section";return(new DOMParser).parseFromString(t,"text/html").querySelector(e).innerHTML}},{key:"handleBodyClick",value:function(t){(t=t.target)===this.notification||t.closest("cart-notification")||(t=t.closest("details-disclosure, header-menu"),this.activeElement=t?t.querySelector("summary"):null,this.close())}},{key:"setActiveElement",value:function(t){this.activeElement=t}}]),o}();customElements.define("cart-notification",CartNotification);