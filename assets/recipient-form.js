"use strict";function _typeof15(t){return(_typeof15="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==_typeof15(Symbol.iterator)?function(t){return _typeof15(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof15(t)})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var o,n,i,c,u=[],a=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=i.call(r)).done)&&(u.push(o.value),u.length!==e);a=!0);}catch(t){s=!0,n=t}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw n}}return u}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var o=[null];return o.push.apply(o,e),e=new(Function.bind.apply(t,o)),r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);if("object"!==_typeof(r=r.call(t,e||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}customElements.get("recipient-form")||customElements.define("recipient-form",function(){_inherits(o,_wrapNativeSuper(HTMLElement));var r=_createSuper(o);function o(){var t,e;return _classCallCheck(this,o),_defineProperty(_assertThisInitialized(e=r.call(this)),"cartUpdateUnsubscriber",void 0),_defineProperty(_assertThisInitialized(e),"variantChangeUnsubscriber",void 0),_defineProperty(_assertThisInitialized(e),"cartErrorUnsubscriber",void 0),e.recipientFieldsLiveRegion=e.querySelector("#Recipient-fields-live-region-".concat(e.dataset.sectionId)),e.checkboxInput=e.querySelector("#Recipient-checkbox-".concat(e.dataset.sectionId)),e.checkboxInput.disabled=!1,e.hiddenControlField=e.querySelector("#Recipient-control-".concat(e.dataset.sectionId)),e.hiddenControlField.disabled=!0,e.emailInput=e.querySelector("#Recipient-email-".concat(e.dataset.sectionId)),e.nameInput=e.querySelector("#Recipient-name-".concat(e.dataset.sectionId)),e.messageInput=e.querySelector("#Recipient-message-".concat(e.dataset.sectionId)),e.sendonInput=e.querySelector("#Recipient-send-on-".concat(e.dataset.sectionId)),e.offsetProperty=e.querySelector("#Recipient-timezone-offset-".concat(e.dataset.sectionId)),e.offsetProperty&&(e.offsetProperty.value=(new Date).getTimezoneOffset().toString()),e.errorMessageWrapper=e.querySelector(".product-form__recipient-error-message-wrapper"),e.errorMessageList=null==(t=e.errorMessageWrapper)?void 0:t.querySelector("ul"),e.errorMessage=null==(t=e.errorMessageWrapper)?void 0:t.querySelector(".error-message"),e.defaultErrorHeader=null==(t=e.errorMessage)?void 0:t.innerText,e.currentProductVariantId=e.dataset.productVariantId,e.addEventListener("change",e.onChange.bind(_assertThisInitialized(e))),e.onChange(),e}return _createClass(o,[{key:"connectedCallback",value:function(){var e=this;this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,function(t){"product-form"===t.source&&t.productVariantId.toString()===e.currentProductVariantId&&e.resetRecipientForm()}),this.variantChangeUnsubscriber=subscribe(PUB_SUB_EVENTS.variantChange,function(t){t.data.sectionId===e.dataset.sectionId&&(e.currentProductVariantId=t.data.variant.id.toString())}),this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartError,function(t){"product-form"===t.source&&t.productVariantId.toString()===e.currentProductVariantId&&e.displayErrorMessage(t.message,t.errors)})}},{key:"disconnectedCallback",value:function(){this.cartUpdateUnsubscriber&&this.cartUpdateUnsubscriber(),this.variantChangeUnsubscriber&&this.variantChangeUnsubscriber(),this.cartErrorUnsubscriber&&this.cartErrorUnsubscriber()}},{key:"onChange",value:function(){this.checkboxInput.checked?(this.enableInputFields(),this.recipientFieldsLiveRegion.innerText=window.accessibilityStrings.recipientFormExpanded):(this.clearInputFields(),this.disableInputFields(),this.clearErrorMessage(),this.recipientFieldsLiveRegion.innerText=window.accessibilityStrings.recipientFormCollapsed)}},{key:"inputFields",value:function(){return[this.emailInput,this.nameInput,this.messageInput,this.sendonInput]}},{key:"disableableFields",value:function(){return[].concat(_toConsumableArray(this.inputFields()),[this.offsetProperty])}},{key:"clearInputFields",value:function(){this.inputFields().forEach(function(t){return t.value=""})}},{key:"enableInputFields",value:function(){this.disableableFields().forEach(function(t){return t.disabled=!1})}},{key:"disableInputFields",value:function(){this.disableableFields().forEach(function(t){return t.disabled=!0})}},{key:"displayErrorMessage",value:function(t,e){var c=this;if(this.clearErrorMessage(),this.errorMessageWrapper.hidden=!1,"object"===_typeof(e))return this.errorMessage.innerText=this.defaultErrorHeader,Object.entries(e).forEach(function(t){var e=(t=_slicedToArray(t,2))[0],t=t[1],r="RecipientForm-".concat(e,"-error-").concat(c.dataset.sectionId),o="#Recipient-".concat(e,"-").concat(c.dataset.sectionId),t="".concat(t.join(", ")),n=c.querySelector("#".concat(r)),i=null==n?void 0:n.querySelector(".error-message");i&&(c.errorMessageList&&c.errorMessageList.appendChild(c.createErrorListItem(o,t)),i.innerText="".concat(t,"."),n.classList.remove("hidden"),o=c["".concat(e,"Input")])&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedby",r))});this.errorMessage.innerText=e}},{key:"createErrorListItem",value:function(t,e){var r=document.createElement("li"),o=document.createElement("a");return o.setAttribute("href",t),o.innerText=e,r.appendChild(o),r.className="error-message",r}},{key:"clearErrorMessage",value:function(){this.errorMessageWrapper.hidden=!0,this.errorMessageList&&(this.errorMessageList.innerHTML=""),this.querySelectorAll(".recipient-fields .form__message").forEach(function(t){t.classList.add("hidden"),(t=t.querySelector(".error-message"))&&(t.innerText="")}),[this.emailInput,this.messageInput,this.nameInput,this.sendonInput].forEach(function(t){t.setAttribute("aria-invalid",!1),t.removeAttribute("aria-describedby")})}},{key:"resetRecipientForm",value:function(){this.checkboxInput.checked&&(this.checkboxInput.checked=!1,this.clearInputFields(),this.clearErrorMessage())}}]),o}());