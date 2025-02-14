"use strict";var SCROLL_ANIMATION_TRIGGER_CLASSNAME="scroll-trigger",SCROLL_ANIMATION_OFFSCREEN_CLASSNAME="scroll-trigger--offscreen",SCROLL_ZOOM_IN_TRIGGER_CLASSNAME="animate--zoom-in",SCROLL_ANIMATION_CANCEL_CLASSNAME="scroll-trigger--cancel";function onIntersection(e,i){e.forEach(function(e,t){var n;e.isIntersecting?((n=e.target).classList.contains(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME)&&(n.classList.remove(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME),n.hasAttribute("data-cascade"))&&n.setAttribute("style","--animation-order: ".concat(t,";")),i.unobserve(n)):(e.target.classList.add(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME),e.target.classList.remove(SCROLL_ANIMATION_CANCEL_CLASSNAME))})}function initializeScrollAnimationTrigger(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],e=Array.from(e.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));0!==e.length&&(n?e.forEach(function(e){e.classList.add("scroll-trigger--design-mode")}):(t=new IntersectionObserver(onIntersection,{rootMargin:"0px 0px -50px 0px"}),e.forEach(function(e){return t.observe(e)})))}function initializeScrollZoomAnimationTrigger(){var e;window.matchMedia("(prefers-reduced-motion: reduce)").matches||0!==(e=Array.from(document.getElementsByClassName(SCROLL_ZOOM_IN_TRIGGER_CLASSNAME))).length&&e.forEach(function(e){var t=!1;new IntersectionObserver(function(e){e.forEach(function(e){t=e.isIntersecting})}).observe(e),e.style.setProperty("--zoom-in-ratio",1+.002*percentageSeen(e)),window.addEventListener("scroll",throttle(function(){t&&e.style.setProperty("--zoom-in-ratio",1+.002*percentageSeen(e))}),{passive:!0})})}function percentageSeen(e){var t=window.innerHeight,n=window.scrollY,i=e.getBoundingClientRect().top+n,e=e.offsetHeight;return n+t<i?0:i+e<n?100:Math.round((n+t-i)/((t+e)/100))}window.addEventListener("DOMContentLoaded",function(){initializeScrollAnimationTrigger(),initializeScrollZoomAnimationTrigger()}),Shopify.designMode&&(document.addEventListener("shopify:section:load",function(e){return initializeScrollAnimationTrigger(e.target,!0)}),document.addEventListener("shopify:section:reorder",function(){return initializeScrollAnimationTrigger(document,!0)}));