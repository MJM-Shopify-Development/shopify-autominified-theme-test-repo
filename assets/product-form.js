"use strict";function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);if("object"!==_typeof(r=r.call(t,e||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var o=[null];return o.push.apply(o,e),e=new(Function.bind.apply(t,o)),r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("product-form")||customElements.define("product-form",function(){_inherits(r,_wrapNativeSuper(HTMLElement));var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.call(this)).form=t.querySelector("form"),t.form.querySelector("[name=id]").disabled=!1,t.form.addEventListener("submit",t.onSubmitHandler.bind(_assertThisInitialized(t))),t.cart=document.querySelector("cart-notification")||document.querySelector("cart-drawer"),t.submitButton=t.querySelector('[type="submit"]'),document.querySelector("cart-drawer")&&t.submitButton.setAttribute("aria-haspopup","dialog"),t.hideErrors="true"===t.dataset.hideErrors,t}return _createClass(r,[{key:"onSubmitHandler",value:function(t){var r,o=this;t.preventDefault(),"true"!==this.submitButton.getAttribute("aria-disabled")&&(this.handleErrorMessage(),this.submitButton.setAttribute("aria-disabled",!0),this.submitButton.classList.add("loading"),this.querySelector(".loading__spinner").classList.remove("hidden"),(t=fetchConfig("javascript")).headers["X-Requested-With"]="XMLHttpRequest",delete t.headers["Content-Type"],r=new FormData(this.form),this.cart&&(r.append("sections",this.cart.getSectionsToRender().map(function(t){return t.id})),r.append("sections_url",window.location.pathname),this.cart.setActiveElement(document.activeElement)),t.body=r,fetch("".concat(routes.cart_add_url),t).then(function(t){return t.json()}).then(function(t){var e;if(t.status)return publish(PUB_SUB_EVENTS.cartError,{source:"product-form",productVariantId:r.get("id"),errors:t.errors||t.description,message:t.message}),o.handleErrorMessage(t.description),(e=o.submitButton.querySelector(".sold-out-message"))?(o.submitButton.setAttribute("aria-disabled",!0),o.submitButton.querySelector("span").classList.add("hidden"),e.classList.remove("hidden"),void(o.error=!0)):void 0;o.cart?(o.error||publish(PUB_SUB_EVENTS.cartUpdate,{source:"product-form",productVariantId:r.get("id"),cartData:t}),o.error=!1,(e=o.closest("quick-add-modal"))?(document.body.addEventListener("modalClosed",function(){setTimeout(function(){o.cart.renderContents(t)})},{once:!0}),e.hide(!0)):o.cart.renderContents(t)):window.location=window.routes.cart_url}).catch(function(t){console.error(t)}).finally(function(){o.submitButton.classList.remove("loading"),o.cart&&o.cart.classList.contains("is-empty")&&o.cart.classList.remove("is-empty"),o.error||o.submitButton.removeAttribute("aria-disabled"),o.querySelector(".loading__spinner").classList.add("hidden")}))}},{key:"handleErrorMessage",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];this.hideErrors||(this.errorMessageWrapper=this.errorMessageWrapper||this.querySelector(".product-form__error-message-wrapper"),this.errorMessageWrapper&&(this.errorMessage=this.errorMessage||this.errorMessageWrapper.querySelector(".product-form__error-message"),this.errorMessageWrapper.toggleAttribute("hidden",!t),t)&&(this.errorMessage.textContent=t))}}]),r}());