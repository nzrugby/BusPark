/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./buspark.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./buspark.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return instructions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EAST_BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NORTH_BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SOUTH_BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WEST_BORDER; });
// instruction sequence
const instructions = ["PLACE 5,8,NORTH", "MOVE", "LEFT", "PLACE 3,6,NORTH", "MOVE", "LEFT", "MOVE", "MOVE", "RIGHT", "PLACE 5,4,NORTH", "MOVE", "MOVE", "LEFT", "MOVE", "MOVE", "RIGHT", "MOVE", "LEFT", "MOVE", "REPORT"];
//Dir: direction
const Dir = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
//X direction
const EAST_BORDER = 6;
const WEST_BORDER = 2;
//Y direction
const NORTH_BORDER = 2;
const SOUTH_BORDER = 6;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export busArea */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return output; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_buspark_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_buspark_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_buspark_css__);

// construct bus area including valid park area and invalid park area
var busArea = document.querySelector('.frame');
var step = 42;
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        var div = generateDiv(i, j, step);
        busArea.appendChild(div);
    }
}

function generateDiv(x, y, length) {
    var div = document.createElement("div");
    div.style.top = i * length + 'px';
    div.style.left = j * length + 'px';
    div.className = x >= 2 && x <= 6 && y >= 2 && y <= 6 ? 'parkArea' : 'noParkArea';
    return div;
}

// create output console
var output = document.createElement('div');
output.className = 'output';
busArea.appendChild(output);

// create car UI element 
var car = document.createElement('div');
car.className = 'car';
busArea.appendChild(car);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_buspark_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_buspark_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_buspark_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_js__ = __webpack_require__(2);





var car = new __WEBPACK_IMPORTED_MODULE_1__car_js__["a" /* default */]();

var btn = document.getElementById('btnStart');
btn.addEventListener('click', () => {
	car.reset();
	StartPark();
});

function StartPark() {
	// use regex to find the first valid PLACE cmd in cmd sequence
	var pattern = /^PLACE \d,\d,(NORTH)|(EAST)|(WEST)|(SOUTH)$/;
	while (!pattern.test(__WEBPACK_IMPORTED_MODULE_2__const_js__["f" /* instructions */][0])) {
		// take instructions as queue and always remove the first element if it's not right one'
		__WEBPACK_IMPORTED_MODULE_2__const_js__["f" /* instructions */].shift();
	}
	//execute the valid instructions sequence
	__WEBPACK_IMPORTED_MODULE_2__const_js__["f" /* instructions */].map(function (instruction, index) {
		setTimeout(car.instruction, (index + 1) * 1000, instruction);
	});
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".frame{\r\n\tposition: absolute;\r\n\ttop:100px;\r\n\tleft:500px;\r\n\tbackground-color: transparent;\r\n\tborder: double;\r\n\twidth:425px;\r\n\theight:550px;\r\n}\r\n.output{\r\n\tposition: absolute;\r\n\ttop:420px;\r\n\twidth:420px;\r\n\theight:125px;\r\n\tborder:solid;\r\n\tindex:999;\r\n}\r\n#btnStart{\r\n\tposition:absolute;\r\n\ttop:200px;\r\n\tleft:1000px;\r\n}\r\n.noParkArea{\r\n\tposition:absolute;\r\n\twidth:42px;\r\n\theight:42px;\r\n\tbackground-color:lightgrey;\r\n\tborder:1px dashed;\r\n\ttop:100px;\r\n\tleft:500px;\r\n}\r\n.parkArea{\r\n\tposition:absolute;\r\n\twidth:42px;\r\n\theight:42px;\r\n\tbackground-color:burlywood;\r\n\tborder:1px dashed;\r\n\ttop:100px;\r\n\tleft:500px;\r\n}\r\n.car{\r\n\tbackground: url(" + escape(__webpack_require__(7)) + ") no-repeat center;\r\n\theight:38px;\r\n\twidth:38px;\r\n\tmargin:1px 1px 1px 1px;\r\n\tbackground-color: transparent;\r\n\tposition:absolute;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_js__ = __webpack_require__(2);



var Car = function () {
    var X = 0;
    var Y = 0;
    var direction = "NORTH";
    var cellLength = 42;
    var angle = 0;
    var insideCarPark = false;
    var car = document.querySelector('.car');

    // every time when start button clicked the car will be reseted to original location and status
    this.reset = function () {
        place(0, 0, "NORTH");
        insideCarPark = false;
        angle = 0;
        car.style.transform = `rotate(${angle}deg)`;
    };
    // accept instruction from control system
    this.instruction = function (cmd) {
        console.log(cmd);
        var instrs = cmd.replace(" ", ",").split(",");
        if (instrs.indexOf('PLACE') >= 0) {
            place(instrs[1], instrs[2], instrs[3]);
        } else {
            var fun = insideCarPark ? cmd.toLowerCase() + "()" : "";
            eval(fun);
        }
        showReport(cmd);
    };
    // private function to show real-time data and report
    function showReport(cmd) {
        __WEBPACK_IMPORTED_MODULE_1__ui_js__["a" /* output */].innerHTML = `Real-time data:<br>
                            Current instruction:  ${cmd}<br>
                            Current X position:  ${X}<br>
                            Current Y position:  ${Y}<br>
                            Current Direction:  ${direction}<br>
                            Report:  ${cmd.indexOf('REPORT') >= 0 ? [X, Y, direction] : ""}
                            `;
    }
    // execute PLACE cmd
    function place(x, y, d) {
        X = parseInt(x);
        Y = parseInt(y);
        direction = d;
        car.style.top = Y * cellLength + 'px';
        car.style.left = X * cellLength + 'px';
        if (X >= __WEBPACK_IMPORTED_MODULE_0__const_js__["e" /* WEST_BORDER */] && X <= __WEBPACK_IMPORTED_MODULE_0__const_js__["b" /* EAST_BORDER */] && Y >= __WEBPACK_IMPORTED_MODULE_0__const_js__["c" /* NORTH_BORDER */] && Y <= __WEBPACK_IMPORTED_MODULE_0__const_js__["d" /* SOUTH_BORDER */]) {
            insideCarPark = true;
        }
    }
    // execute LEFT cmd
    function left() {
        angle -= 90;
        direction = __WEBPACK_IMPORTED_MODULE_0__const_js__["a" /* Dir */][(__WEBPACK_IMPORTED_MODULE_0__const_js__["a" /* Dir */].indexOf(direction) + 3) % 4];
        car.style.transform = `rotate(${angle}deg)`;
    }
    // execute RIGHT cmd
    function right() {
        angle += 90;
        direction = __WEBPACK_IMPORTED_MODULE_0__const_js__["a" /* Dir */][(__WEBPACK_IMPORTED_MODULE_0__const_js__["a" /* Dir */].indexOf(direction) + 1) % 4];
        car.style.transform = `rotate(${angle}deg)`;
    }
    // execute MOVE cmd
    function move() {
        var step = 1;
        switch (direction) {
            case 'NORTH':
                if (Y - step >= __WEBPACK_IMPORTED_MODULE_0__const_js__["c" /* NORTH_BORDER */]) {
                    Y -= step;car.style.top = Y * cellLength + 'px';
                };break;
            case 'EAST':
                if (X + step <= __WEBPACK_IMPORTED_MODULE_0__const_js__["b" /* EAST_BORDER */]) {
                    X += step;car.style.left = X * cellLength + 'px';
                };break;
            case 'SOUTH':
                if (Y + step <= __WEBPACK_IMPORTED_MODULE_0__const_js__["d" /* SOUTH_BORDER */]) {
                    Y += step;car.style.top = Y * cellLength + 'px';
                };break;
            case 'WEST':
                if (X - step >= __WEBPACK_IMPORTED_MODULE_0__const_js__["e" /* WEST_BORDER */]) {
                    X -= step;car.style.left = X * cellLength + 'px';
                };break;
            default:
                break;
        }
    }
    // execute REPORT cmd
    function report() {
        var REPORT = [X, Y, direction];
        console.log(REPORT);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Car);

/***/ })
/******/ ]);