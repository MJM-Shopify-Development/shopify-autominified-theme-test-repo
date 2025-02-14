"use strict";function _typeof3(e){return(_typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return _typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof3(e)})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){return"symbol"===_typeof(e=_toPrimitive(e,"string"))?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!==_typeof(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _wrapNativeSuper(e){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(t,e)})(e)}function _construct(e,t,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(e,t,r){var n=[null];return n.push.apply(n,t),t=new(Function.bind.apply(e,n)),r&&_setPrototypeOf(t,r.prototype),t}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var FacetFiltersForm=function(){_inherits(a,_wrapNativeSuper(HTMLElement));var r=_createSuper(a);function a(){_classCallCheck(this,a),(t=r.call(this)).onActiveFilterClick=t.onActiveFilterClick.bind(_assertThisInitialized(t)),t.debouncedOnSubmit=debounce(function(e){t.onSubmitHandler(e)},500),t.querySelector("form").addEventListener("input",t.debouncedOnSubmit.bind(_assertThisInitialized(t)));var t,e=t.querySelector("#FacetsWrapperDesktop");return e&&e.addEventListener("keyup",onKeyUpEscape),t}return _createClass(a,[{key:"createSearchParams",value:function(e){return e=new FormData(e),new URLSearchParams(e).toString()}},{key:"onSubmitForm",value:function(e,t){a.renderPage(e,t)}},{key:"onSubmitHandler",value:function(e){var t,r,n,o=this,i=(e.preventDefault(),document.querySelectorAll("facet-filters-form form"));"mobile-facets__checkbox"==e.srcElement.className?(t=this.createSearchParams(e.target.closest("form")),this.onSubmitForm(t,e)):(r=[],n="FacetFiltersFormMobile"===e.target.closest("form").id,i.forEach(function(e){n?"FacetFiltersFormMobile"===e.id&&r.push(o.createSearchParams(e)):"FacetSortForm"!==e.id&&"FacetFiltersForm"!==e.id&&"FacetSortDrawerForm"!==e.id||(document.querySelectorAll(".no-js-list").forEach(function(e){return e.remove()}),r.push(o.createSearchParams(e)))}),this.onSubmitForm(r.join("&"),e))}},{key:"onActiveFilterClick",value:function(e){e.preventDefault(),a.toggleActiveFacets(),e=-1==e.currentTarget.href.indexOf("?")?"":e.currentTarget.href.slice(e.currentTarget.href.indexOf("?")+1),a.renderPage(e)}}],[{key:"setListeners",value:function(){window.addEventListener("popstate",function(e){(e=e.state?e.state.searchParams:a.searchParamsInitial)!==a.searchParamsPrev&&a.renderPage(e,null,!1)})}},{key:"toggleActiveFacets",value:function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];document.querySelectorAll(".js-facet-remove").forEach(function(e){e.classList.toggle("disabled",t)})}},{key:"renderPage",value:function(n,o){var e=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],t=(a.searchParamsPrev=n,a.getSections()),r=document.getElementById("ProductCount"),i=document.getElementById("ProductCountDesktop");document.querySelectorAll(".facets-container .loading__spinner, facet-filters-form .loading__spinner").forEach(function(e){return e.classList.remove("hidden")}),document.getElementById("ProductGridContainer").querySelector(".collection").classList.add("loading"),r&&r.classList.add("loading"),i&&i.classList.add("loading"),t.forEach(function(e){function t(e){return e.url===r}var r="".concat(window.location.pathname,"?section_id=").concat(e.section,"&").concat(n);a.filterData.some(t)?a.renderSectionFromCache(t,o):a.renderSectionFromFetch(r,o)}),e&&a.updateURLHash(n)}},{key:"renderSectionFromFetch",value:function(t,r){fetch(t).then(function(e){return e.text()}).then(function(e){a.filterData=[].concat(_toConsumableArray(a.filterData),[{html:e,url:t}]),a.renderFilters(e,r),a.renderProductGridContainer(e),a.renderProductCount(e),"function"==typeof initializeScrollAnimationTrigger&&initializeScrollAnimationTrigger(e.innerHTML)})}},{key:"renderSectionFromCache",value:function(e,t){e=a.filterData.find(e).html,a.renderFilters(e,t),a.renderProductGridContainer(e),a.renderProductCount(e),"function"==typeof initializeScrollAnimationTrigger&&initializeScrollAnimationTrigger(e.innerHTML)}},{key:"renderProductGridContainer",value:function(e){document.getElementById("ProductGridContainer").innerHTML=(new DOMParser).parseFromString(e,"text/html").getElementById("ProductGridContainer").innerHTML,document.getElementById("ProductGridContainer").querySelectorAll(".scroll-trigger").forEach(function(e){e.classList.add("scroll-trigger--cancel")})}},{key:"renderProductCount",value:function(e){var e=(new DOMParser).parseFromString(e,"text/html").getElementById("ProductCount").innerHTML,t=document.getElementById("ProductCount"),r=document.getElementById("ProductCountDesktop");t.innerHTML=e,t.classList.remove("loading"),r&&(r.innerHTML=e,r.classList.remove("loading")),document.querySelectorAll(".facets-container .loading__spinner, facet-filters-form .loading__spinner").forEach(function(e){return e.classList.add("hidden")})}},{key:"renderFilters",value:function(e,r){function t(e){var t=r?r.target.closest(".js-filter"):void 0;return!!t&&e.dataset.index===t.dataset.index}var n=(e=(new DOMParser).parseFromString(e,"text/html")).querySelectorAll("#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter"),o=Array.from(n).filter(function(e){return!t(e)}),n=Array.from(n).find(t);o.forEach(function(e){document.querySelector('.js-filter[data-index="'.concat(e.dataset.index,'"]')).innerHTML=e.innerHTML}),a.renderActiveFacets(e),a.renderAdditionalElements(e),n&&(o=r.target.closest(".js-filter").id)&&(a.renderCounts(n,r.target.closest(".js-filter")),a.renderMobileCounts(n,document.getElementById(o)),e=document.getElementById(o).classList.contains("mobile-facets__details")?"#".concat(o," .mobile-facets__close-button"):"#".concat(o," .facets__summary"),n=document.querySelector(e))&&n.focus()}},{key:"renderActiveFacets",value:function(r){[".active-facets-mobile",".active-facets-desktop"].forEach(function(e){var t=r.querySelector(e);t&&(document.querySelector(e).innerHTML=t.innerHTML)}),a.toggleActiveFacets(!1)}},{key:"renderAdditionalElements",value:function(t){[".mobile-facets__open",".mobile-facets__count",".sorting"].forEach(function(e){t.querySelector(e)&&(document.querySelector(e).innerHTML=t.querySelector(e).innerHTML)}),document.getElementById("FacetFiltersFormMobile").closest("menu-drawer").bindEvents()}},{key:"renderCounts",value:function(e,t){var r=t.querySelector(".facets__summary"),n=e.querySelector(".facets__summary"),r=(n&&r&&(r.outerHTML=n.outerHTML),t.querySelector(".facets__header")),r=((n=e.querySelector(".facets__header"))&&r&&(r.outerHTML=n.outerHTML),t.querySelector(".facets-wrap"));(n=e.querySelector(".facets-wrap"))&&r&&(Boolean(t.querySelector("show-more-button .label-show-more.hidden"))&&n.querySelectorAll(".facets__item.hidden").forEach(function(e){return e.classList.replace("hidden","show-more-item")}),r.outerHTML=n.outerHTML)}},{key:"renderMobileCounts",value:function(e,t){t=t.querySelector(".mobile-facets__list"),(e=e.querySelector(".mobile-facets__list"))&&t&&(t.outerHTML=e.outerHTML)}},{key:"updateURLHash",value:function(e){history.pushState({searchParams:e},"","".concat(window.location.pathname).concat(e&&"?".concat(e)))}},{key:"getSections",value:function(){return[{section:document.getElementById("product-grid").dataset.id}]}}]),a}(),PriceRange=(FacetFiltersForm.filterData=[],FacetFiltersForm.searchParamsInitial=window.location.search.slice(1),FacetFiltersForm.searchParamsPrev=window.location.search.slice(1),customElements.define("facet-filters-form",FacetFiltersForm),FacetFiltersForm.setListeners(),function(){_inherits(r,_wrapNativeSuper(HTMLElement));var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.call(this)).querySelectorAll("input").forEach(function(e){return e.addEventListener("change",t.onRangeChange.bind(_assertThisInitialized(t)))}),t.setMinAndMaxValues(),t}return _createClass(r,[{key:"onRangeChange",value:function(e){this.adjustToValidValues(e.currentTarget),this.setMinAndMaxValues()}},{key:"setMinAndMaxValues",value:function(){var e=this.querySelectorAll("input"),t=e[0];(e=e[1]).value&&t.setAttribute("max",e.value),t.value&&e.setAttribute("min",t.value),""===t.value&&e.setAttribute("min",0),""===e.value&&t.setAttribute("max",e.getAttribute("max"))}},{key:"adjustToValidValues",value:function(e){var t=Number(e.value),r=Number(e.getAttribute("min")),n=Number(e.getAttribute("max"));t<r&&(e.value=r),n<t&&(e.value=n)}}]),r}()),FacetRemove=(customElements.define("price-range",PriceRange),function(){_inherits(n,_wrapNativeSuper(HTMLElement));var r=_createSuper(n);function n(){_classCallCheck(this,n);var t,e=(t=r.call(this)).querySelector("a");return e.setAttribute("role","button"),e.addEventListener("click",t.closeFilter.bind(_assertThisInitialized(t))),e.addEventListener("keyup",function(e){e.preventDefault(),"SPACE"===e.code.toUpperCase()&&t.closeFilter(e)}),t}return _createClass(n,[{key:"closeFilter",value:function(e){e.preventDefault(),(this.closest("facet-filters-form")||document.querySelector("facet-filters-form")).onActiveFilterClick(e)}}]),n}());customElements.define("facet-remove",FacetRemove);