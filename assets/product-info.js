"use strict";function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(o){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(o);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,o){var n=[null];return n.push.apply(n,e),e=new(Function.bind.apply(t,n)),o&&_setPrototypeOf(e,o.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperty(t,e,o){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!==_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}customElements.get("product-info")||customElements.define("product-info",function(){_inherits(o,_wrapNativeSuper(HTMLElement));var e=_createSuper(o);function o(){var t;return _classCallCheck(this,o),_defineProperty(_assertThisInitialized(t=e.call(this)),"cartUpdateUnsubscriber",void 0),_defineProperty(_assertThisInitialized(t),"variantChangeUnsubscriber",void 0),t.input=t.querySelector(".quantity__input"),t.currentVariant=t.querySelector(".product-variant-id"),t.variantSelects=t.querySelector("variant-radios"),t.submitButton=t.querySelector('[type="submit"]'),t}return _createClass(o,[{key:"connectedCallback",value:function(){var o=this;this.input&&(this.quantityForm=this.querySelector(".product-form__quantity"),this.quantityForm)&&(this.setQuantityBoundries(),this.dataset.originalSection||(this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,this.fetchQuantityRules.bind(this))),this.variantChangeUnsubscriber=subscribe(PUB_SUB_EVENTS.variantChange,function(t){var e=o.dataset.originalSection||o.dataset.section;t.data.sectionId===e&&(o.updateQuantityRules(t.data.sectionId,t.data.html),o.setQuantityBoundries())}))}},{key:"disconnectedCallback",value:function(){this.cartUpdateUnsubscriber&&this.cartUpdateUnsubscriber(),this.variantChangeUnsubscriber&&this.variantChangeUnsubscriber()}},{key:"setQuantityBoundries",value:function(){var t={cartQuantity:this.input.dataset.cartQuantity?parseInt(this.input.dataset.cartQuantity):0,min:this.input.dataset.min?parseInt(this.input.dataset.min):1,max:this.input.dataset.max?parseInt(this.input.dataset.max):null,step:this.input.step?parseInt(this.input.step):1},e=t.min,o=null===t.max?t.max:t.max-t.cartQuantity;null!==o&&(e=Math.min(e,o)),t.min<=t.cartQuantity&&(e=Math.min(e,t.step)),this.input.min=e,this.input.max=o,this.input.value=e,publish(PUB_SUB_EVENTS.quantityUpdate,void 0)}},{key:"fetchQuantityRules",value:function(){var e=this;this.currentVariant&&this.currentVariant.value&&(this.querySelector(".quantity__rules-cart .loading__spinner").classList.remove("hidden"),fetch("".concat(this.dataset.url,"?variant=").concat(this.currentVariant.value,"&section_id=").concat(this.dataset.section)).then(function(t){return t.text()}).then(function(t){t=(new DOMParser).parseFromString(t,"text/html"),e.updateQuantityRules(e.dataset.section,t),e.setQuantityBoundries()}).catch(function(t){console.error(t)}).finally(function(){e.querySelector(".quantity__rules-cart .loading__spinner").classList.add("hidden")}))}},{key:"updateQuantityRules",value:function(t,e){for(var o=e.getElementById("Quantity-Form-".concat(t)),n=0,r=[".quantity__input",".quantity__rules",".quantity__label"];n<r.length;n++){var i=r[n],u=this.quantityForm.querySelector(i),c=o.querySelector(i);if(u&&c)if(".quantity__input"===i)for(var y=0,a=["data-cart-quantity","data-min","data-max","step"];y<a.length;y++){var f=a[y],s=c.getAttribute(f);null!==s&&u.setAttribute(f,s)}else u.innerHTML=c.innerHTML}}}]),o}());