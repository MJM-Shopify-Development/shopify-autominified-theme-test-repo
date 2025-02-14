"use strict";function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){return"symbol"===_typeof(e=_toPrimitive(e,"string"))?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!==_typeof(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}var selectors={customerAddresses:"[data-customer-addresses]",addressCountrySelect:"[data-address-country-select]",addressContainer:"[data-address]",toggleAddressButton:"button[aria-expanded]",cancelAddressButton:'button[type="reset"]',deleteAddressButton:"button[data-confirm-message]"},attributes={expanded:"aria-expanded",confirmMessage:"data-confirm-message"},CustomerAddresses=function(){function e(){var t=this;_classCallCheck(this,e),_defineProperty(this,"_handleAddEditButtonClick",function(e){e=e.currentTarget,t._toggleExpanded(e)}),_defineProperty(this,"_handleCancelButtonClick",function(e){e=e.currentTarget,t._toggleExpanded(e.closest(selectors.addressContainer).querySelector("[".concat(attributes.expanded,"]")))}),_defineProperty(this,"_handleDeleteButtonClick",function(e){e=e.currentTarget,confirm(e.getAttribute(attributes.confirmMessage))&&Shopify.postLink(e.dataset.target,{parameters:{_method:"delete"}})}),this.elements=this._getElements(),0!==Object.keys(this.elements).length&&(this._setupCountries(),this._setupEventListeners())}return _createClass(e,[{key:"_getElements",value:function(){var e=document.querySelector(selectors.customerAddresses);return e?{container:e,addressContainer:e.querySelector(selectors.addressContainer),toggleButtons:document.querySelectorAll(selectors.toggleAddressButton),cancelButtons:e.querySelectorAll(selectors.cancelAddressButton),deleteButtons:e.querySelectorAll(selectors.deleteAddressButton),countrySelects:e.querySelectorAll(selectors.addressCountrySelect)}:{}}},{key:"_setupCountries",value:function(){Shopify&&Shopify.CountryProvinceSelector&&(new Shopify.CountryProvinceSelector("AddressCountryNew","AddressProvinceNew",{hideElement:"AddressProvinceContainerNew"}),this.elements.countrySelects.forEach(function(e){e=e.dataset.formId,new Shopify.CountryProvinceSelector("AddressCountry_".concat(e),"AddressProvince_".concat(e),{hideElement:"AddressProvinceContainer_".concat(e)})}))}},{key:"_setupEventListeners",value:function(){var t=this;this.elements.toggleButtons.forEach(function(e){e.addEventListener("click",t._handleAddEditButtonClick)}),this.elements.cancelButtons.forEach(function(e){e.addEventListener("click",t._handleCancelButtonClick)}),this.elements.deleteButtons.forEach(function(e){e.addEventListener("click",t._handleDeleteButtonClick)})}},{key:"_toggleExpanded",value:function(e){e.setAttribute(attributes.expanded,("false"===e.getAttribute(attributes.expanded)).toString())}}]),e}();