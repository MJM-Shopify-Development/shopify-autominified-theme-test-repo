"use strict";function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _createForOfIteratorHelper(t,e){var r,n,o,i,u="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(u)return n=!(r=!0),{s:function(){u=u.call(t)},n:function(){var t=u.next();return r=t.done,t},e:function(t){n=!0,o=t},f:function(){try{r||null==u.return||u.return()}finally{if(n)throw o}}};if(Array.isArray(t)||(u=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return u&&(t=u),i=0,{s:e=function(){},n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];return n.push.apply(n,e),e=new(Function.bind.apply(t,n)),r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);if("object"!==_typeof(r=r.call(t,e||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}customElements.get("price-per-item")||customElements.define("price-per-item",function(){_inherits(r,_wrapNativeSuper(HTMLElement));var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),_defineProperty(_assertThisInitialized(t=e.call(this)),"updatePricePerItemUnsubscriber",void 0),_defineProperty(_assertThisInitialized(t),"variantIdChangedUnsubscriber",void 0),t.variantId=t.dataset.variantId,t.input=document.getElementById("Quantity-".concat(t.dataset.sectionId||t.dataset.variantId)),t.input&&t.input.addEventListener("change",t.onInputChange.bind(_assertThisInitialized(t))),t.getVolumePricingArray(),t}return _createClass(r,[{key:"connectedCallback",value:function(){var e=this;this.variantIdChangedUnsubscriber=subscribe(PUB_SUB_EVENTS.variantChange,function(t){e.variantId=t.data.variant.id.toString(),e.getVolumePricingArray()}),this.updatePricePerItemUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,function(t){t.cartData&&(void 0!==t.cartData.variant_id?t.productVariantId===e.variantId&&e.updatePricePerItem(t.cartData.quantity):0!==t.cartData.item_count&&(t=t.cartData.items.find(function(t){return t.variant_id.toString()===e.variantId}))&&t.id.toString()===e.variantId?e.updatePricePerItem(t.quantity):e.updatePricePerItem(0))})}},{key:"disconnectedCallback",value:function(){this.updatePricePerItemUnsubscriber&&this.updatePricePerItemUnsubscriber(),this.variantIdChangedUnsubscriber&&this.variantIdChangedUnsubscriber()}},{key:"onInputChange",value:function(){this.updatePricePerItem()}},{key:"updatePricePerItem",value:function(t){this.input&&(this.enteredQty=parseInt(this.input.value),this.step=parseInt(this.input.step)),this.currentQtyForVolumePricing=void 0===t?this.getCartQuantity(t)+this.enteredQty:this.getCartQuantity(t)+parseInt(this.step),this.classList.contains("variant-item__price-per-item")&&(this.currentQtyForVolumePricing=this.getCartQuantity(t));var e,r=_createForOfIteratorHelper(this.qtyPricePairs);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(this.currentQtyForVolumePricing>=n[0]){var o=document.querySelector('price-per-item[id^="Price-Per-Item-'.concat(this.dataset.sectionId||this.dataset.variantId,'"] .price-per-item span'));this.classList.contains("variant-item__price-per-item")?o.innerHTML=window.quickOrderListStrings.each.replace("[money]",n[1]):o.innerHTML=n[1];break}}}catch(t){r.e(t)}finally{r.f()}}},{key:"getCartQuantity",value:function(t){return t||0===t?t:parseInt(this.input.dataset.cartQuantity)}},{key:"getVolumePricingArray",value:function(){var r=this,t=document.getElementById("Volume-".concat(this.dataset.sectionId||this.dataset.variantId));this.qtyPricePairs=[],t&&t.querySelectorAll("li").forEach(function(t){var e=parseInt(t.querySelector("span:first-child").textContent),t=t.querySelector("span:not(:first-child):last-child").dataset.text;r.qtyPricePairs.push([e,t])}),this.qtyPricePairs.reverse()}}]),r}());