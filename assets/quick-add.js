"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);if("object"!==_typeof(r=r.call(t,e||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var o=_superPropBase(t,e);if(o)return(o=Object.getOwnPropertyDescriptor(o,e)).get?o.get.call(arguments.length<3?t:r):o.value}).apply(this,arguments)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("quick-add-modal")||customElements.define("quick-add-modal",function(){_inherits(o,ModalDialog);var e=_createSuper(o);function o(){var t;return _classCallCheck(this,o),(t=e.call(this)).modalContent=t.querySelector('[id^="QuickAddInfo-"]'),t}return _createClass(o,[{key:"hide",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=document.querySelector("cart-notification")||document.querySelector("cart-drawer");e&&e.setActiveElement(this.openedBy),this.modalContent.innerHTML="",t&&(this.openedBy=null),_get(_getPrototypeOf(o.prototype),"hide",this).call(this)}},{key:"show",value:function(e){var r=this;e.setAttribute("aria-disabled",!0),e.classList.add("loading"),e.querySelector(".loading__spinner").classList.remove("hidden"),fetch(e.getAttribute("data-product-url")).then(function(t){return t.text()}).then(function(t){t=(new DOMParser).parseFromString(t,"text/html"),r.productElement=t.querySelector('section[id^="MainProduct-"]'),r.productElement.classList.forEach(function(t){!t.startsWith("color-")&&"gradient"!==t||r.modalContent.classList.add(t)}),r.preventDuplicatedIDs(),r.removeDOMElements(),r.setInnerHTML(r.modalContent,r.productElement.innerHTML),window.Shopify&&Shopify.PaymentButton&&Shopify.PaymentButton.init(),window.ProductModel&&window.ProductModel.loadShopifyXR(),r.removeGalleryListSemantic(),r.updateImageSizes(),r.preventVariantURLSwitching(),_get(_getPrototypeOf(o.prototype),"show",r).call(r,e)}).finally(function(){e.removeAttribute("aria-disabled"),e.classList.remove("loading"),e.querySelector(".loading__spinner").classList.add("hidden")})}},{key:"setInnerHTML",value:function(t,e){t.innerHTML=e,t.querySelectorAll("script").forEach(function(t){var e=document.createElement("script");Array.from(t.attributes).forEach(function(t){e.setAttribute(t.name,t.value)}),e.appendChild(document.createTextNode(t.innerHTML)),t.parentNode.replaceChild(e,t)})}},{key:"preventVariantURLSwitching",value:function(){var t=this.modalContent.querySelector("variant-radios,variant-selects");t&&t.setAttribute("data-update-url","false")}},{key:"removeDOMElements",value:function(){var t=this.productElement.querySelector("pickup-availability");t&&t.remove(),(t=this.productElement.querySelector("product-modal"))&&t.remove(),(t=this.productElement.querySelectorAll("modal-dialog"))&&t.forEach(function(t){return t.remove()})}},{key:"preventDuplicatedIDs",value:function(){var e=this.productElement.dataset.section;this.productElement.innerHTML=this.productElement.innerHTML.replaceAll(e,"quickadd-".concat(e)),this.productElement.querySelectorAll("variant-selects, variant-radios, product-info").forEach(function(t){t.dataset.originalSection=e})}},{key:"removeGalleryListSemantic",value:function(){var t=this.modalContent.querySelector('[id^="Slider-Gallery"]');t&&(t.setAttribute("role","presentation"),t.querySelectorAll('[id^="Slide-"]').forEach(function(t){return t.setAttribute("role","presentation")}))}},{key:"updateImageSizes",value:function(){var t,e,r=this.modalContent.querySelector(".product");r.classList.contains("product--columns")&&(t=r.querySelectorAll(".product__media img")).length&&(e="(min-width: 1000px) 715px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)",r.classList.contains("product--medium")?e=e.replace("715px","605px"):r.classList.contains("product--small")&&(e=e.replace("715px","495px")),t.forEach(function(t){return t.setAttribute("sizes",e)}))}}]),o}());