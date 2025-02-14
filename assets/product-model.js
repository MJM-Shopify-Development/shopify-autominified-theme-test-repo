"use strict";function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!==_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var r=_superPropBase(t,e);if(r)return(r=Object.getOwnPropertyDescriptor(r,e)).get?r.get.call(arguments.length<3?t:o):r.value}).apply(this,arguments)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(o){var r=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(o);return _possibleConstructorReturn(this,r?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("product-model")||customElements.define("product-model",function(){_inherits(e,DeferredMedia);var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"loadContent",value:function(){_get(_getPrototypeOf(e.prototype),"loadContent",this).call(this),Shopify.loadFeatures([{name:"model-viewer-ui",version:"1.0",onLoad:this.setupModelViewerUI.bind(this)}])}},{key:"setupModelViewerUI",value:function(t){t||(this.modelViewerUI=new Shopify.ModelViewerUI(this.querySelector("model-viewer")))}}]),e}()),window.ProductModel={loadShopifyXR:function(){Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:this.setupShopifyXR.bind(this)}])},setupShopifyXR:function(t){var e=this;t||(window.ShopifyXR?(document.querySelectorAll('[id^="ProductJSON-"]').forEach(function(t){window.ShopifyXR.addModels(JSON.parse(t.textContent)),t.remove()}),window.ShopifyXR.setupXRElements()):document.addEventListener("shopify_xr_initialized",function(){return e.setupShopifyXR()}))}},window.addEventListener("DOMContentLoaded",function(){window.ProductModel&&window.ProductModel.loadShopifyXR()});