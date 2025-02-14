"use strict";function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);if("object"!==_typeof(r=r.call(t,e||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var o=_superPropBase(t,e);if(o)return(o=Object.getOwnPropertyDescriptor(o,e)).get?o.get.call(arguments.length<3?t:r):o.value}).apply(this,arguments)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var PredictiveSearch=function(){_inherits(r,SearchForm);var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.call(this)).cachedResults={},t.predictiveSearchResults=t.querySelector("[data-predictive-search]"),t.allPredictiveSearchInstances=document.querySelectorAll("predictive-search"),t.isOpen=!1,t.abortController=new AbortController,t.searchTerm="",t.setupEventListeners(),t}return _createClass(r,[{key:"setupEventListeners",value:function(){this.input.form.addEventListener("submit",this.onFormSubmit.bind(this)),this.input.addEventListener("focus",this.onFocus.bind(this)),this.addEventListener("focusout",this.onFocusOut.bind(this)),this.addEventListener("keyup",this.onKeyup.bind(this)),this.addEventListener("keydown",this.onKeydown.bind(this))}},{key:"getQuery",value:function(){return this.input.value.trim()}},{key:"onChange",value:function(){_get(_getPrototypeOf(r.prototype),"onChange",this).call(this);var t,e=this.getQuery();this.searchTerm&&e.startsWith(this.searchTerm)||null!=(t=this.querySelector("#predictive-search-results-groups-wrapper"))&&t.remove(),this.updateSearchForTerm(this.searchTerm,e),this.searchTerm=e,this.searchTerm.length?this.getSearchResults(this.searchTerm):this.close(!0)}},{key:"onFormSubmit",value:function(t){this.getQuery().length&&!this.querySelector('[aria-selected="true"] a')||t.preventDefault()}},{key:"onFormReset",value:function(t){_get(_getPrototypeOf(r.prototype),"onFormReset",this).call(this,t),_get(_getPrototypeOf(r.prototype),"shouldResetForm",this).call(this)&&(this.searchTerm="",this.abortController.abort(),this.abortController=new AbortController,this.closeResults(!0))}},{key:"onFocus",value:function(){var t=this.getQuery();t.length&&(this.searchTerm!==t?this.onChange():"true"===this.getAttribute("results")?this.open():this.getSearchResults(this.searchTerm))}},{key:"onFocusOut",value:function(){var t=this;setTimeout(function(){t.contains(document.activeElement)||t.close()})}},{key:"onKeyup",value:function(t){switch(this.getQuery().length||this.close(!0),t.preventDefault(),t.code){case"ArrowUp":this.switchOption("up");break;case"ArrowDown":this.switchOption("down");break;case"Enter":this.selectOption()}}},{key:"onKeydown",value:function(t){"ArrowUp"!==t.code&&"ArrowDown"!==t.code||t.preventDefault()}},{key:"updateSearchForTerm",value:function(t,e){var r=this.querySelector("[data-predictive-search-search-for-text]"),o=null==r?void 0:r.innerText;!o||1<o.match(new RegExp(t,"g")).length||(o=o.replace(t,e),r.innerText=o)}},{key:"switchOption",value:function(t){if(this.getAttribute("open")){var t="up"===t,e=this.querySelector('[aria-selected="true"]'),r=Array.from(this.querySelectorAll("li, button.predictive-search__item")).filter(function(t){return null!==t.offsetParent}),o=0;if(!t||e){for(var n=-1,i=0;-1===n&&i<=r.length;)r[i]===e&&(n=i),i++;this.statusElement.textContent="",!t&&e?o=n===r.length-1?0:n+1:t&&(o=0===n?r.length-1:n-1),o!==n&&((t=r[o]).setAttribute("aria-selected",!0),e&&e.setAttribute("aria-selected",!1),this.input.setAttribute("aria-activedescendant",t.id))}}}},{key:"selectOption",value:function(){var t=this.querySelector('[aria-selected="true"] a, button[aria-selected="true"]');t&&t.click()}},{key:"getSearchResults",value:function(t){var r=this,o=t.replace(" ","-").toLowerCase();this.setLiveRegionLoadingState(),this.cachedResults[o]?this.renderSearchResults(this.cachedResults[o]):fetch("".concat(routes.predictive_search_url,"?q=").concat(encodeURIComponent(t),"&section_id=predictive-search"),{signal:this.abortController.signal}).then(function(t){if(t.ok)return t.text();throw t=new Error(t.status),r.close(),t}).then(function(t){var e=(new DOMParser).parseFromString(t,"text/html").querySelector("#shopify-section-predictive-search").innerHTML;r.allPredictiveSearchInstances.forEach(function(t){t.cachedResults[o]=e}),r.renderSearchResults(e)}).catch(function(t){if(20!==(null==t?void 0:t.code))throw r.close(),t})}},{key:"setLiveRegionLoadingState",value:function(){this.statusElement=this.statusElement||this.querySelector(".predictive-search-status"),this.loadingText=this.loadingText||this.getAttribute("data-loading-text"),this.setLiveRegionText(this.loadingText),this.setAttribute("loading",!0)}},{key:"setLiveRegionText",value:function(t){var e=this;this.statusElement.setAttribute("aria-hidden","false"),this.statusElement.textContent=t,setTimeout(function(){e.statusElement.setAttribute("aria-hidden","true")},1e3)}},{key:"renderSearchResults",value:function(t){this.predictiveSearchResults.innerHTML=t,this.setAttribute("results",!0),this.setLiveRegionResults(),this.open()}},{key:"setLiveRegionResults",value:function(){this.removeAttribute("loading"),this.setLiveRegionText(this.querySelector("[data-predictive-search-live-region-count-value]").textContent)}},{key:"getResultsMaxHeight",value:function(){return this.resultsMaxHeight=window.innerHeight-document.querySelector(".section-header").getBoundingClientRect().bottom,this.resultsMaxHeight}},{key:"open",value:function(){this.predictiveSearchResults.style.maxHeight=this.resultsMaxHeight||"".concat(this.getResultsMaxHeight(),"px"),this.setAttribute("open",!0),this.input.setAttribute("aria-expanded",!0),this.isOpen=!0}},{key:"close",value:function(){this.closeResults(0<arguments.length&&void 0!==arguments[0]&&arguments[0]),this.isOpen=!1}},{key:"closeResults",value:function(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(this.input.value="",this.removeAttribute("results"));var t=this.querySelector('[aria-selected="true"]');t&&t.setAttribute("aria-selected",!1),this.input.setAttribute("aria-activedescendant",""),this.removeAttribute("loading"),this.removeAttribute("open"),this.input.setAttribute("aria-expanded",!1),this.resultsMaxHeight=!1,this.predictiveSearchResults.removeAttribute("style")}}]),r}();customElements.define("predictive-search",PredictiveSearch);