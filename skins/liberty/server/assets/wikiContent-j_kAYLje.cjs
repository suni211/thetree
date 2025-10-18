"use strict";
const server = require("../server.cjs");
const prevNextBtn = require("./prevNextBtn-0UpawiXO.cjs");
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = server.round(width) !== offsetWidth || server.round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return server.createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? server.round(rect.width) : rect.width) / width;
  let y = ($ ? server.round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ server.createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = server.createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : server.createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return server.rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = server.createCoords(1);
  const offsets = server.createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : server.createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = server.max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = server.max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += server.max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : server.createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return server.rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = server.max(rect.top, accRect.top);
    accRect.right = server.min(rect.right, accRect.right);
    accRect.bottom = server.min(rect.bottom, accRect.bottom);
    accRect.left = server.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = server.createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : server.createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = server.floor(top);
    const insetRight = server.floor(root.clientWidth - (left + width));
    const insetBottom = server.floor(root.clientHeight - (top + height));
    const insetLeft = server.floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: server.max(0, server.min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = server.offset;
const shift = server.shift;
const flip = server.flip;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return server.computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
const _sfc_main$2 = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    GeneralButton: server.GeneralButton
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isFold: true,
      showCurtain: false
    };
  },
  methods: {
    onClickUnfoldButton() {
      this.isFold = false;
      this.showCurtain = false;
    },
    async recalculate() {
      this.isFold = true;
      this.showCurtain = false;
      await this.$nextTick();
      const el = this.$refs.el;
      if (!el) return;
      this.showCurtain = el.scrollHeight > el.clientHeight;
    }
  },
  mounted() {
    this.recalculate();
  },
  watch: {
    categories() {
      this.recalculate();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  const _component_GeneralButton = server.vueExports.resolveComponent("GeneralButton");
  _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttrs(server.vueExports.mergeProps({
    ref: "el",
    class: ["category", { "category-folded": $data.isFold }]
  }, _attrs))} data-v-1cb51ecd><span data-v-1cb51ecd>분류</span><ul data-v-1cb51ecd><!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList($props.categories, (c) => {
    _push(`<li class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ blur: c.blur })}" data-v-1cb51ecd>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
      class: { "not-exist": c.notExist },
      to: _ctx.doc_action_link(c.document, "w")
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(c.document.title)}`);
        } else {
          return [
            server.vueExports.createTextVNode(server.vueExports.toDisplayString(c.document.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
  if ($data.showCurtain) {
    _push(`<div class="curtain" data-v-1cb51ecd>`);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GeneralButton, {
      class: "curtain-button",
      whenClick: $options.onClickUnfoldButton
    }, {
      default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`더 보기`);
        } else {
          return [
            server.vueExports.createTextVNode("더 보기")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/wiki/wikiCategory.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const WikiCategory = /* @__PURE__ */ server._export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1cb51ecd"]]);
const _sfc_main$1 = {
  mixins: [server.Common],
  components: {
    NuxtLink: server.NuxtLink,
    PrevNextBtn: prevNextBtn.PrevNextBtn
  },
  props: {
    categories: JSON
  },
  methods: {
    pageProps(name, category) {
      return {
        prev: category.prevItem ? { query: { namespace: name, cuntil: category.prevItem } } : null,
        next: category.nextItem ? { query: { namespace: name, cfrom: category.nextItem } } : null
      };
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PrevNextBtn = server.vueExports.resolveComponent("PrevNextBtn");
  const _component_NuxtLink = server.vueExports.resolveComponent("NuxtLink");
  _push(`<!--[-->`);
  server.serverRenderer_cjs_prodExports.ssrRenderList($props.categories, (category, name) => {
    _push(`<div${server.serverRenderer_cjs_prodExports.ssrRenderAttr("id", "category-" + name)} data-v-a1796a93><h2 data-v-a1796a93>${server.serverRenderer_cjs_prodExports.ssrInterpolate(name === "분류" ? "하위 분류" : name)}</h2>`);
    if (category.prevItem || category.nextItem) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, { ref_for: true }, $options.pageProps(name, category)), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<div data-v-a1796a93><div data-v-a1796a93>전체 ${server.serverRenderer_cjs_prodExports.ssrInterpolate(category.count)}개 문서</div><div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass({ "many-wrapper": Object.keys(category.categoriesPerChar).length >= 3 })}" data-v-a1796a93><!--[-->`);
    server.serverRenderer_cjs_prodExports.ssrRenderList(category.categoriesPerChar, (documents, char) => {
      _push(`<div data-v-a1796a93><h3 data-v-a1796a93>${server.serverRenderer_cjs_prodExports.ssrInterpolate(char)}</h3><ul data-v-a1796a93><!--[-->`);
      server.serverRenderer_cjs_prodExports.ssrRenderList(documents, (document2) => {
        _push(`<li data-v-a1796a93>`);
        _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.doc_action_link(document2.parsedName, "w"),
          title: _ctx.doc_fulltitle(document2.parsedName)
        }, {
          default: server.vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${server.serverRenderer_cjs_prodExports.ssrInterpolate(document2.category.text || document2.parsedName.title)}`);
            } else {
              return [
                server.vueExports.createTextVNode(server.vueExports.toDisplayString(document2.category.text || document2.parsedName.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    });
    _push(`<!--]--></div></div>`);
    if (category.prevItem || category.nextItem) {
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PrevNextBtn, server.vueExports.mergeProps({ flex: "" }, { ref_for: true }, $options.pageProps(name, category)), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/wiki/wikiCategoryDocs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WikiCategoryDocs = /* @__PURE__ */ server._export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a1796a93"]]);
const _sfc_main = {
  mixins: [server.Common],
  components: {
    Modal: server.Modal,
    NuxtLink: server.NuxtLink,
    Alert: server.Alert,
    WikiCategory,
    WikiCategoryDocs,
    LocalDate: server.LocalDate
  },
  props: {
    discuss: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    },
    categories: {
      type: Array,
      default: () => []
    },
    userbox: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      popover: {
        show: false,
        content: "",
        cleanup: null
      },
      modal: {
        show: false,
        content: ""
      }
    };
  },
  mounted() {
    this.setupWikiContent();
  },
  watch: {
    async content() {
      await this.$nextTick();
      this.setupWikiContent();
    },
    "popover.show"(newValue) {
      var _a, _b;
      if (!newValue)
        (_b = (_a = this.popover).cleanup) == null ? void 0 : _b.call(_a);
    },
    $route() {
      this.popover.show = false;
    }
  },
  methods: {
    getFootnotes(element) {
      return [...element.getElementsByClassName("wiki-fn-content")];
    },
    setupWikiContent(element = this.$refs.div) {
      const headings = element.getElementsByClassName("wiki-heading");
      for (let heading of headings) {
        heading.addEventListener("click", (e) => {
          if (e.target.tagName === "A") return;
          const heading2 = e.currentTarget;
          const content = heading2.nextElementSibling;
          const prevClosed = heading2.classList.contains("wiki-heading-folded");
          if (prevClosed) {
            heading2.classList.remove("wiki-heading-folded");
            content.classList.remove("wiki-heading-content-folded");
          } else {
            heading2.classList.add("wiki-heading-folded");
            content.classList.add("wiki-heading-content-folded");
          }
        });
        if (this.$store.state.localConfig["wiki.hide_heading_content"]) {
          heading.classList.add("wiki-heading-folded");
          heading.nextElementSibling.classList.add("wiki-heading-content-folded");
        }
      }
      const foldings = element.getElementsByClassName("wiki-folding");
      for (let folding of foldings) {
        const foldingText = folding.firstElementChild;
        const foldingContent = foldingText.nextElementSibling;
        let offsetWidth;
        let offsetHeight;
        const resizeObserver = new ResizeObserver(([entry]) => {
          if (!entry.contentRect.height) return;
          const openedBefore = foldingContent.classList.contains("wiki-folding-opened");
          if (!openedBefore) foldingContent.classList.add("wiki-folding-opened");
          offsetWidth = foldingContent.offsetWidth;
          offsetHeight = foldingContent.offsetHeight;
          if (!openedBefore) foldingContent.classList.remove("wiki-folding-opened");
          resizeObserver.disconnect();
        });
        resizeObserver.observe(foldingText);
        let transitionCount = 0;
        const transitioning = () => transitionCount !== 0;
        foldingContent.addEventListener("transitionstart", (_) => transitionCount++);
        foldingContent.addEventListener("transitionend", (_) => transitionCount--);
        foldingContent.addEventListener("transitioncancel", (_) => transitionCount--);
        const setSizeToOffsetSize = () => {
          foldingContent.style.maxWidth = offsetWidth + "px";
          foldingContent.style.maxHeight = offsetHeight + "px";
        };
        const removeSize = () => {
          foldingContent.style.maxWidth = "";
          foldingContent.style.maxHeight = "";
        };
        const finishOpen = () => {
          if (transitioning()) return;
          removeSize();
          foldingContent.classList.add("wiki-folding-opened");
          foldingContent.removeEventListener("transitionend", finishOpen);
        };
        if (this.$store.state.localConfig["wiki.show_folding"])
          foldingContent.classList.add("wiki-folding-open-anim", "wiki-folding-opened");
        foldingText.addEventListener("click", (e) => {
          const foldingText2 = e.currentTarget;
          const foldingContent2 = foldingText2.nextElementSibling;
          const opened = foldingContent2.classList.contains("wiki-folding-open-anim");
          if (opened) {
            setSizeToOffsetSize();
            requestAnimationFrame((_) => {
              foldingContent2.classList.remove("wiki-folding-open-anim");
              foldingContent2.classList.remove("wiki-folding-opened");
              removeSize();
            });
          } else {
            foldingContent2.classList.add("wiki-folding-open-anim");
            setSizeToOffsetSize();
            foldingContent2.addEventListener("transitionend", finishOpen);
          }
        });
      }
      let footnoteType = this.$store.state.localConfig["wiki.footnote_type"];
      footnoteType ?? (footnoteType = server.isMobile ? "popup" : "popover");
      if (footnoteType === "popover") this.setupFootnoteTooltip(element);
      else if (footnoteType === "popup") this.setupFootnoteModal(element);
      else if (footnoteType === "unfold") this.setupFootnoteUnfolded(element);
      if (this.$store.state.localConfig["wiki.unfold_wiki_link"]) {
        const links = element.getElementsByClassName("wiki-link-internal");
        for (let link of links) {
          if (link.tagName !== "A") continue;
          const title = link.getAttribute("title");
          if (!title) continue;
          let checkTitle = title;
          const anchorPos = title.lastIndexOf("#");
          if (anchorPos !== -1)
            checkTitle = title.slice(0, anchorPos);
          if (checkTitle.trim() === link.innerText.trim())
            continue;
          if (link.getElementsByTagName("img").length)
            continue;
          const unfolded = document.createElement("span");
          unfolded.classList = "wiki-link-unfolded";
          unfolded.innerText = title;
          const linkParent = link.parentNode;
          if (linkParent) {
            if (link.nextSibling)
              linkParent.insertBefore(unfolded, link.nextSibling);
            else
              linkParent.appendChild(unfolded);
          }
        }
      }
      const oldDarkStyle = document.getElementById("darkStyle");
      if (oldDarkStyle) oldDarkStyle.remove();
      const darkStyleElements = document.querySelectorAll("*[data-dark-style]");
      const darkStyles = [];
      for (let element2 of darkStyleElements) {
        const styleData = element2.dataset.darkStyle.split(";").map((a) => a.trim()).filter((a) => a);
        let style = "";
        for (let stylePart of styleData) {
          const [key, value] = stylePart.split(":").map((a) => a.trim());
          style += `${key}:${value} !important;`;
        }
        let darkStyle = darkStyles.find((a) => a.style === style);
        if (!darkStyle) {
          darkStyle = {
            style,
            class: "_" + crypto.randomUUID().replaceAll("-", "")
          };
          darkStyles.push(darkStyle);
        }
        element2.classList.add(darkStyle.class);
      }
      if (darkStyles.length) {
        const newDarkStyle = document.createElement("style");
        newDarkStyle.id = "darkStyle";
        newDarkStyle.innerHTML = darkStyles.map((a) => `.theseed-dark-mode .${a.class}{${a.style}}`).join("");
        document.body.appendChild(newDarkStyle);
      }
      const times = element.querySelectorAll("time[data-type=timezone]");
      for (let time of times) {
        const type = time.dataset.type;
        const date = new Date(time.dateTime);
        const dateStr = [
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate()
        ].map((num) => num.toString().padStart(2, "0")).join("-");
        const timeStr = [
          date.getHours(),
          date.getMinutes(),
          date.getSeconds()
        ].map((num) => num.toString().padStart(2, "0")).join(":");
        let result = dateStr + " " + timeStr;
        if (type === "timezone") {
          const offset2 = -(date.getTimezoneOffset() / 60);
          result += (offset2 > 0 ? "+" : "-") + (offset2 * 100).toString().padStart(4, "0");
        }
        time.textContent = result;
      }
      if (!this.discuss) {
        const anchorElem = document.getElementById(location.hash.slice(1));
        anchorElem == null ? void 0 : anchorElem.scrollIntoView();
      }
    },
    setupFootnoteTooltip(element) {
      let hovering = 0;
      const mouseLeaveHandler = (_) => {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          hovering--;
          if (!hovering)
            this.popover.show = false;
        }));
      };
      const popover = this.$refs.popover;
      popover.addEventListener("mouseenter", (_) => {
        hovering++;
      });
      popover.addEventListener("mouseleave", mouseLeaveHandler);
      for (let footnote of this.getFootnotes(element)) {
        const targetId = footnote.getAttribute("href").slice(1);
        const contentElement = document.getElementById(targetId).parentElement;
        footnote.title = "";
        const update = () => computePosition(footnote, popover, {
          placement: "top",
          middleware: [
            offset(5),
            flip(),
            shift()
          ]
        }).then(({ x, y, placement, middlewareData }) => {
          popover.setAttribute("x-placement", placement);
          Object.assign(popover.style, {
            left: `${x}px`,
            top: `${y}px`
          });
          this.$refs.popoverArrow.style.left = `calc(50% - 10px - ${middlewareData.shift.x}px)`;
        });
        footnote.addEventListener("mouseenter", async (_) => {
          hovering++;
          this.popover.show = true;
          this.popover.content = contentElement.innerHTML;
          this.popover.cleanup = autoUpdate(footnote, popover, update);
        });
        footnote.addEventListener("mouseleave", mouseLeaveHandler);
      }
    },
    setupFootnoteModal(element) {
      for (let footnote of this.getFootnotes(element)) {
        const targetId = footnote.getAttribute("href").slice(1);
        const contentElement = document.getElementById(targetId).parentElement;
        footnote.title = "";
        footnote.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.content = contentElement.innerHTML;
          this.modal.show = true;
        });
      }
    },
    setupFootnoteUnfolded(element) {
      for (let footnote of this.getFootnotes(element)) {
        if (footnote.tagName !== "A") continue;
        const footnoteLink = footnote.getAttribute("href");
        if (!footnoteLink) continue;
        const footnoteId = decodeURIComponent(footnoteLink.slice(1));
        const footnoteParent = footnote.parentNode;
        if (!footnoteParent) continue;
        let footnoteContent = document.getElementById(footnoteId);
        if (!footnoteContent || !footnoteContent.parentNode)
          continue;
        footnoteContent = footnoteContent.parentNode.innerHTML;
        const unfolded = document.createElement("span");
        unfolded.classList = "wiki-fn-unfolded";
        unfolded.innerHTML = footnoteContent;
        unfolded.id = "r" + footnoteId;
        const unfoldedLink = unfolded.getElementsByTagName("a")[0];
        if (unfoldedLink)
          unfoldedLink.href = "#" + footnoteId;
        unfolded.removeChild(unfolded.getElementsByTagName("span")[0]);
        this.setupWikiContent(unfolded);
        footnoteParent.insertBefore(unfolded, footnote);
        footnoteParent.removeChild(footnote);
      }
    },
    async formSubmit(e) {
      const el = e.target;
      const actionAttr = el.getAttribute("action");
      const url = new URL(el.action);
      const formData = new FormData(el);
      await this.internalRequestAndProcess(url.pathname, {
        method: el.method,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
      });
      const newEl = this.$refs.div.querySelector(`form[action="${actionAttr}"]`);
      for (let [key, value] of formData.entries()) {
        const input = newEl.querySelector(`[type=radio][name="${key}"][value="${value}"]`);
        input.checked = true;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiCategory = server.vueExports.resolveComponent("WikiCategory");
  const _component_LocalDate = server.vueExports.resolveComponent("LocalDate");
  const _component_Modal = server.vueExports.resolveComponent("Modal");
  _push(`<!--[-->`);
  if ($props.categories.length && _ctx.$store.state.localConfig["wiki.category_position"] !== "bottom") {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiCategory, { categories: $props.categories }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.userbox.admin) {
    _push(`<div class="user-box admin-box" data-v-5ba10ddc> 이 사용자는 특수 권한을 가지고 있습니다. </div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.userbox.blocked) {
    _push(`<div class="user-box banned-box" data-v-5ba10ddc> 이 사용자는 ${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.userbox.blocked.name)} 그룹에 있습니다. (#${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.userbox.blocked.id)})<br data-v-5ba10ddc><br data-v-5ba10ddc> 이 사용자는 `);
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
      date: $props.userbox.blocked.createdAt
    }, null, _parent));
    _push(`에 `);
    if ($props.userbox.blocked.expiresAt) {
      _push(`<!--[-->`);
      _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LocalDate, {
        date: $props.userbox.blocked.expiresAt
      }, null, _parent));
      _push(` 까지 <!--]-->`);
    } else {
      _push(`<!--[--> 영구적으로 <!--]-->`);
    }
    _push(` ${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.userbox.blocked.name)} 그룹에 추가되었습니다.<br data-v-5ba10ddc> 사유: ${server.serverRenderer_cjs_prodExports.ssrInterpolate($props.userbox.blocked.note ?? "없음")}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${server.serverRenderer_cjs_prodExports.ssrRenderClass([{ "wiki-thread-content": $props.discuss }, "wiki-content"])}" data-v-5ba10ddc>${$props.content ?? ""}</div>`);
  if ($props.categories.length && ["bottom", "both"].includes(_ctx.$store.state.localConfig["wiki.category_position"])) {
    _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_WikiCategory, { categories: $props.categories }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${server.serverRenderer_cjs_prodExports.ssrRenderStyle($data.popover.show ? null : { display: "none" })}" id="tooltip" class="popper" data-v-5ba10ddc><div id="tooltip-arrow" class="popper__arrow" data-v-5ba10ddc></div><div id="tooltip-content" class="wiki-content" data-v-5ba10ddc>${$data.popover.content ?? ""}</div></div>`);
  _push(server.serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Modal, {
    modelValue: $data.modal.show,
    "onUpdate:modelValue": ($event) => $data.modal.show = $event
  }, {
    default: server.vueExports.withCtx((props, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="wiki-content" data-v-5ba10ddc${_scopeId}>${$data.modal.content ?? ""}</div><button type="button" data-v-5ba10ddc${_scopeId}>닫기</button>`);
      } else {
        return [
          server.vueExports.createVNode("div", {
            class: "wiki-content",
            innerHTML: $data.modal.content,
            onClick: _ctx.onDynamicContentClick
          }, null, 8, ["innerHTML", "onClick"]),
          server.vueExports.createVNode("button", {
            onClick: props.close,
            type: "button"
          }, "닫기", 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = server.vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/wiki/wikiContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WikiContent = /* @__PURE__ */ server._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5ba10ddc"]]);
exports.WikiCategoryDocs = WikiCategoryDocs;
exports.WikiContent = WikiContent;
