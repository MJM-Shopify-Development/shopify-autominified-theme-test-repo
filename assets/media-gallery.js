"use strict";function _typeof16(t){return(_typeof16="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof15(t){return(_typeof15="function"==typeof Symbol&&"symbol"==_typeof16(Symbol.iterator)?function(t){return _typeof16(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof16(t)})(t)}function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==_typeof15(Symbol.iterator)?function(t){return _typeof15(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof15(t)})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"===_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!==_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(o){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(o);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var o="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,o){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,o){var n=[null];return n.push.apply(n,e),e=new(Function.bind.apply(t,n)),o&&_setPrototypeOf(e,o.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("media-gallery")||customElements.define("media-gallery",function(){_inherits(o,_wrapNativeSuper(HTMLElement));var t=_createSuper(o);function o(){var e;return _classCallCheck(this,o),(e=t.call(this)).elements={liveRegion:e.querySelector('[id^="GalleryStatus"]'),viewer:e.querySelector('[id^="GalleryViewer"]'),thumbnails:e.querySelector('[id^="GalleryThumbnails"]')},e.mql=window.matchMedia("(min-width: 750px)"),e.elements.thumbnails?(e.elements.viewer.addEventListener("slideChanged",debounce(e.onSlideChanged.bind(_assertThisInitialized(e)),500)),e.elements.thumbnails.querySelectorAll("[data-target]").forEach(function(t){t.querySelector("button").addEventListener("click",e.setActiveMedia.bind(_assertThisInitialized(e),t.dataset.target,!1))}),e.dataset.desktopLayout.includes("thumbnail")&&e.mql.matches&&e.removeListSemantic(),e):_possibleConstructorReturn(e)}return _createClass(o,[{key:"onSlideChanged",value:function(t){t=this.elements.thumbnails.querySelector('[data-target="'.concat(t.detail.currentElement.dataset.mediaId,'"]')),this.setActiveThumbnail(t)}},{key:"setActiveMedia",value:function(t,e){var o=this,n=this.elements.viewer.querySelector('[data-media-id="'.concat(t,'"]'));this.elements.viewer.querySelectorAll("[data-media-id]").forEach(function(t){t.classList.remove("is-active")}),n.classList.add("is-active"),e&&(n.parentElement.prepend(n),this.elements.thumbnails&&(e=this.elements.thumbnails.querySelector('[data-target="'.concat(t,'"]'))).parentElement.prepend(e),this.elements.viewer.slider)&&this.elements.viewer.resetPages(),this.preventStickyHeader(),window.setTimeout(function(){o.elements.thumbnails&&n.parentElement.scrollTo({left:n.offsetLeft}),o.elements.thumbnails&&"stacked"!==o.dataset.desktopLayout||n.scrollIntoView({behavior:"smooth"})}),this.playActiveMedia(n),this.elements.thumbnails&&(e=this.elements.thumbnails.querySelector('[data-target="'.concat(t,'"]')),this.setActiveThumbnail(e),this.announceLiveRegion(n,e.dataset.mediaPosition))}},{key:"setActiveThumbnail",value:function(t){this.elements.thumbnails&&t&&(this.elements.thumbnails.querySelectorAll("button").forEach(function(t){return t.removeAttribute("aria-current")}),t.querySelector("button").setAttribute("aria-current",!0),this.elements.thumbnails.isSlideVisible(t,10)||this.elements.thumbnails.slider.scrollTo({left:t.offsetLeft}))}},{key:"announceLiveRegion",value:function(t,e){var o=this;(t=t.querySelector(".product__modal-opener--image img"))&&(t.onload=function(){o.elements.liveRegion.setAttribute("aria-hidden",!1),o.elements.liveRegion.innerHTML=window.accessibilityStrings.imageAvailable.replace("[index]",e),setTimeout(function(){o.elements.liveRegion.setAttribute("aria-hidden",!0)},2e3)},t.src=t.src)}},{key:"playActiveMedia",value:function(t){window.pauseAllMedia(),(t=t.querySelector(".deferred-media"))&&t.loadContent(!1)}},{key:"preventStickyHeader",value:function(){this.stickyHeader=this.stickyHeader||document.querySelector("sticky-header"),this.stickyHeader&&this.stickyHeader.dispatchEvent(new Event("preventHeaderReveal"))}},{key:"removeListSemantic",value:function(){this.elements.viewer.slider&&(this.elements.viewer.slider.setAttribute("role","presentation"),this.elements.viewer.sliderItems.forEach(function(t){return t.setAttribute("role","presentation")}))}}]),o}());