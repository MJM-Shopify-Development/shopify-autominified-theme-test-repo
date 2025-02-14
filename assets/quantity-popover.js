"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(o){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(o);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,o){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return o&&_setPrototypeOf(e,o.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("quantity-popover")||customElements.define("quantity-popover",function(){_inherits(o,_wrapNativeSuper(HTMLElement));var e=_createSuper(o);function o(){var t;return _classCallCheck(this,o),(t=e.call(this)).mql=window.matchMedia("(min-width: 990px)"),t.mqlTablet=window.matchMedia("(min-width: 750px)"),t.infoButtonDesktop=t.querySelector(".quantity-popover__info-button--icon-only"),t.infoButtonMobile=t.querySelector(".quantity-popover__info-button--icon-with-label"),t.popoverInfo=t.querySelector(".quantity-popover__info"),t.closeButton=t.querySelector(".button-close"),t.variantInfo=t.querySelector(".quantity-popover-container"),t.eventMouseEnterHappened=!1,t.closeButton&&t.closeButton.addEventListener("click",t.closePopover.bind(_assertThisInitialized(t))),t.popoverInfo&&t.infoButtonDesktop&&t.mql.matches&&t.popoverInfo.addEventListener("mouseenter",t.closePopover.bind(_assertThisInitialized(t))),t.infoButtonDesktop&&(t.infoButtonDesktop.addEventListener("click",t.togglePopover.bind(_assertThisInitialized(t))),t.infoButtonDesktop.addEventListener("focusout",t.closePopover.bind(_assertThisInitialized(t)))),t.infoButtonMobile&&(t.infoButtonMobile.addEventListener("click",t.togglePopover.bind(_assertThisInitialized(t))),t.infoButtonMobile.addEventListener("focusout",t.closePopover.bind(_assertThisInitialized(t)))),t.infoButtonDesktop&&t.mqlTablet.matches&&(t.variantInfo.addEventListener("mouseenter",t.togglePopover.bind(_assertThisInitialized(t))),t.variantInfo.addEventListener("mouseleave",t.closePopover.bind(_assertThisInitialized(t)))),t}return _createClass(o,[{key:"togglePopover",value:function(t){var e,o;t.preventDefault(),"mouseenter"===t.type&&(this.eventMouseEnterHappened=!0),"click"===t.type&&this.eventMouseEnterHappened||(o="true"===(e=this.infoButtonDesktop&&this.mql.matches?this.infoButtonDesktop:this.infoButtonMobile).getAttribute("aria-expanded"),e.setAttribute("aria-expanded",!o),this.popoverInfo.toggleAttribute("hidden"),o="true"===e.getAttribute("aria-expanded"),e.classList.toggle("quantity-popover__info-button--open"),o&&"mouseenter"!==t.type&&e.focus())}},{key:"closePopover",value:function(t){t.preventDefault();var e=this.variantInfo.contains(t.relatedTarget),o=this.infoButtonDesktop&&this.mql.matches?this.infoButtonDesktop:this.infoButtonMobile;t.relatedTarget&&e||(o.setAttribute("aria-expanded","false"),o.classList.remove("quantity-popover__info-button--open"),this.popoverInfo.setAttribute("hidden","")),this.eventMouseEnterHappened=!1}}]),o}());