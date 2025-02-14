"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function ownKeys(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);if("object"!==_typeof(r=r.call(t,e||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];return n.push.apply(n,e),e=new(Function.bind.apply(t,n)),r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var QuickOrderListRemoveButton=function(){_inherits(r,_wrapNativeSuper(HTMLElement));var t=_createSuper(r);function r(){var e;return _classCallCheck(this,r),(e=t.call(this)).addEventListener("click",function(t){t.preventDefault(),e.closest("quick-order-list").updateQuantity(e.dataset.index,0)}),e}return _createClass(r)}(),QuickOrderListRemoveAllButton=(customElements.define("quick-order-list-remove-button",QuickOrderListRemoveButton),function(){_inherits(o,_wrapNativeSuper(HTMLElement));var i=_createSuper(o);function o(){_classCallCheck(this,o);var e,e=i.call(this),t=Array.from(document.querySelectorAll("[data-variant-id]")),r={},n=!1;return e.quickOrderList=e.closest("quick-order-list"),t.forEach(function(t){0<parseInt(t.dataset.cartQty)&&(n=!0,r[parseInt(t.dataset.variantId)]=0)}),n||e.classList.add("hidden"),e.actions={confirm:"confirm",remove:"remove",cancel:"cancel"},e.addEventListener("click",function(t){t.preventDefault(),e.dataset.action===e.actions.confirm?e.toggleConfirmation(!1,!0):e.dataset.action===e.actions.remove?(e.quickOrderList.updateMultipleQty(r),e.toggleConfirmation(!0,!1)):e.dataset.action===e.actions.cancel&&e.toggleConfirmation(!0,!1)}),e}return _createClass(o,[{key:"toggleConfirmation",value:function(t,e){this.quickOrderList.querySelector(".quick-order-list-total__confirmation").classList.toggle("hidden",t),this.quickOrderList.querySelector(".quick-order-list-total__info").classList.toggle("hidden",e)}}]),o}()),QuickOrderList=(customElements.define("quick-order-list-remove-all-button",QuickOrderListRemoveAllButton),function(){_inherits(n,_wrapNativeSuper(HTMLElement));var r=_createSuper(n);function n(){_classCallCheck(this,n),_defineProperty(_assertThisInitialized(e=r.call(this)),"cartUpdateUnsubscriber",void 0),e.cart=document.querySelector("cart-drawer"),e.actions={add:"ADD",update:"UPDATE"},e.quickOrderListId="quick-order-list",e.variantItemStatusElement=document.getElementById("shopping-cart-variant-item-status"),e.querySelector("form").addEventListener("submit",e.onSubmit.bind(_assertThisInitialized(e)));var e,t=debounce(function(t){e.onChange(t)},ON_CHANGE_DEBOUNCE_TIMER);return e.addEventListener("change",t.bind(_assertThisInitialized(e))),e}return _createClass(n,[{key:"onSubmit",value:function(t){t.preventDefault()}},{key:"connectedCallback",value:function(){var e=this;this.cartUpdateUnsubscriber=subscribe(PUB_SUB_EVENTS.cartUpdate,function(t){t.source!==e.quickOrderListId&&e.onCartUpdate()}),this.sectionId=this.dataset.id}},{key:"disconnectedCallback",value:function(){this.cartUpdateUnsubscriber&&this.cartUpdateUnsubscriber()}},{key:"onChange",value:function(t){var e=parseInt(t.target.value),r=parseInt(t.target.dataset.cartQuantity),t=t.target.dataset.index,n=document.activeElement.getAttribute("name"),i=e-r;0<r?this.updateQuantity(t,e,n,this.actions.update):this.updateQuantity(t,i,n,this.actions.add)}},{key:"onCartUpdate",value:function(){var e=this;fetch("".concat(window.location.pathname,"?section_id=").concat(this.sectionId)).then(function(t){return t.text()}).then(function(t){t=(new DOMParser).parseFromString(t,"text/html").querySelector(e.quickOrderListId),e.innerHTML=t.innerHTML}).catch(function(t){console.error(t)})}},{key:"getSectionsToRender",value:function(){return[{id:this.quickOrderListId,section:document.getElementById(this.quickOrderListId).dataset.id,selector:".js-contents"},{id:"cart-icon-bubble",section:"cart-icon-bubble",selector:".shopify-section"},{id:"quick-order-list-live-region-text",section:"cart-live-region-text",selector:".shopify-section"},{id:"quick-order-list-total",section:document.getElementById(this.quickOrderListId).dataset.id,selector:".quick-order-list__total"},{id:"CartDrawer",selector:"#CartDrawer",section:"cart-drawer"}]}},{key:"renderSections",value:function(r){var n=this;this.getSectionsToRender().forEach(function(t){var e=document.getElementById(t.id);e&&e.parentElement&&e.parentElement.classList.contains("drawer")&&(0<r.items.length?e.parentElement.classList.remove("is-empty"):e.parentElement.classList.add("is-empty"),setTimeout(function(){document.querySelector("#CartDrawer-Overlay").addEventListener("click",n.cart.close.bind(n.cart))})),(e=e&&e.querySelector(t.selector)?e.querySelector(t.selector):e)&&(e.innerHTML=n.getSectionInnerHTML(r.sections[t.section],t.selector))})}},{key:"updateMultipleQty",value:function(t){var e=this,t=(this.querySelector(".variant-remove-total .loading__spinner").classList.remove("hidden"),JSON.stringify({updates:t,sections:this.getSectionsToRender().map(function(t){return t.section}),sections_url:window.location.pathname}));this.updateMessage(),this.setErrorMessage(),fetch("".concat(routes.cart_update_url),_objectSpread(_objectSpread({},fetchConfig()),{body:t})).then(function(t){return t.text()}).then(function(t){t=JSON.parse(t),e.renderSections(t)}).catch(function(){e.setErrorMessage(window.cartStrings.error)}).finally(function(){e.querySelector(".variant-remove-total .loading__spinner").classList.add("hidden")})}},{key:"updateQuantity",value:function(i,o,a,c){var t,s=this,e=(this.toggleLoading(i,!0),routes.cart_change_url),r=JSON.stringify({quantity:o,id:i,sections:this.getSectionsToRender().map(function(t){return t.section}),sections_url:window.location.pathname});c===this.actions.add&&(t="javascript",e=routes.cart_add_url,r=JSON.stringify({items:[{quantity:parseInt(o),id:parseInt(i)}],sections:this.getSectionsToRender().map(function(t){return t.section}),sections_url:window.location.pathname})),this.updateMessage(),this.setErrorMessage(),fetch("".concat(e),_objectSpread(_objectSpread({},fetchConfig(t)),{body:r})).then(function(t){return t.text()}).then(function(t){var e,r,t=JSON.parse(t),n=document.getElementById("Quantity-".concat(i));document.querySelectorAll(".variant-item"),t.description||t.errors?(document.querySelector('[id^="Variant-'.concat(i,'"] .variant-item__totals.small-hide .loading__spinner')).classList.add("loading__spinner--error"),s.resetQuantityInput(i,n),t.errors?s.updateLiveRegions(i,t.errors):s.updateLiveRegions(i,t.description)):(s.classList.toggle("is-empty",0===t.item_count),s.renderSections(t),e=!1,(r=(r=t.items.find(function(t){return t.variant_id===parseInt(i)}))?r.quantity:void 0)&&r!==o&&(s.updateError(r,i),e=!0),(r=document.getElementById("Variant-".concat(i)))&&r.querySelector('[name="'.concat(a,'"]'))&&r.querySelector('[name="'.concat(a,'"]')).focus(),publish(PUB_SUB_EVENTS.cartUpdate,{source:s.quickOrderListId,cartData:t}),e?s.updateMessage():c===s.actions.add?s.updateMessage(parseInt(o)):c===s.actions.update?s.updateMessage(parseInt(o-n.dataset.cartQuantity)):s.updateMessage(-parseInt(n.dataset.cartQuantity)))}).catch(function(t){s.querySelectorAll(".loading__spinner").forEach(function(t){return t.classList.add("hidden")}),s.resetQuantityInput(i),console.error(t),s.setErrorMessage(window.cartStrings.error)}).finally(function(){s.toggleLoading(i)})}},{key:"resetQuantityInput",value:function(t,e){(e=null!=e?e:document.getElementById("Quantity-".concat(t))).value=e.getAttribute("value")}},{key:"setErrorMessage",value:function(){var t,r=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;this.errorMessageTemplate=null!=(t=this.errorMessageTemplate)?t:document.getElementById("QuickOrderListErrorTemplate-".concat(this.sectionId)).cloneNode(!0),document.querySelectorAll(".quick-order-list-error").forEach(function(t){var e;t.innerHTML="",n&&((e=r.errorMessageTemplate.cloneNode(!0)).content.querySelector(".quick-order-list-error-message").innerText=n,t.appendChild(e.content))})}},{key:"updateMessage",value:function(){var t,e,r,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,i=this.querySelectorAll(".quick-order-list__message-text"),o=this.querySelectorAll(".quick-order-list__message-icon");null===n||isNaN(n)?(i.forEach(function(t){return t.innerHTML=""}),o.forEach(function(t){return t.classList.add("hidden")})):(t=n<0,e=Math.abs(n),r=t?1===e?window.quickOrderListStrings.itemRemoved:window.quickOrderListStrings.itemsRemoved:1===n?window.quickOrderListStrings.itemAdded:window.quickOrderListStrings.itemsAdded,i.forEach(function(t){return t.innerHTML=r.replace("[quantity]",e)}),t||o.forEach(function(t){return t.classList.remove("hidden")}))}},{key:"updateError",value:function(t,e){t=void 0===t?window.cartStrings.error:window.cartStrings.quantityError.replace("[quantity]",t);this.updateLiveRegions(e,t)}},{key:"updateLiveRegions",value:function(t,e){var r=document.getElementById("Quick-order-list-item-error-desktop-".concat(t)),t=document.getElementById("Quick-order-list-item-error-mobile-".concat(t)),n=(r&&(r.querySelector(".variant-item__error-text").innerHTML=e,r.closest("tr").classList.remove("hidden")),t&&(t.querySelector(".variant-item__error-text").innerHTML=e),this.variantItemStatusElement.setAttribute("aria-hidden",!0),document.getElementById("quick-order-list-live-region-text"));n.setAttribute("aria-hidden",!1),setTimeout(function(){n.setAttribute("aria-hidden",!0)},1e3)}},{key:"getSectionInnerHTML",value:function(t,e){return(new DOMParser).parseFromString(t,"text/html").querySelector(e).innerHTML}},{key:"toggleLoading",value:function(t,e){var r=document.getElementById(this.quickOrderListId),t=this.querySelectorAll("#Variant-".concat(t," .loading__spinner"));e?(r.classList.add("quick-order-list__container--disabled"),_toConsumableArray(t).forEach(function(t){return t.classList.remove("hidden")}),document.activeElement.blur(),this.variantItemStatusElement.setAttribute("aria-hidden",!1)):(r.classList.remove("quick-order-list__container--disabled"),t.forEach(function(t){return t.classList.add("hidden")}))}}]),n}());customElements.define("quick-order-list",QuickOrderList);