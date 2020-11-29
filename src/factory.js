import {VERSION} from './utils/variables';
import errors from './utils/errors';
import elementOperator from './utils/elementOperator';
import ElementManager from './utils/ElementManager';
import TranslationTable from "./utils/TranslationTable";
import defineProperties from "./utils/propertiesDefiner";

export default function factory(window) {
    'use strict';
    function pecis() {
        this.name = 'Pecis';
        console.info(`Pecis ${VERSION} is available!```);
    }

    pecis.version = VERSION;
    pecis.peb = pecis.version;

    // Error type

    pecis.PecisBaseError = errors.PecisBaseError;
    pecis.ExtensionError = errors.ExtensionError;
    pecis.MissingEnvironmentError = errors.MissingEnvironmentError;
    pecis.MultipleElementError = errors.MultipleElementError;
    pecis.MissingParameterError = errors.MissingParameterError;

    let emptyArray = [null];

    pecis.FIRST_ITEM = 0
    pecis.GLOBAL = window;
    pecis.UA = window.navigator ? navigator.userAgent : null

    pecis.reqArg = (name) => {
        throw new errors.MissingParameterError(name ? 'Missing parameter ' + name : 'Missing required parameters');
    };

    if (window.document && document instanceof Document) {
        customElements.define('pecis-trans', class PebTransElement extends HTMLElement {
            constructor() {
                super();
            }
        });
    }

    pecis.TranslationTable = TranslationTable;

    /**
     * Set the function to run when use directly `pecis()`
     * @param {number} code
     */
    pecis.setDefault = function (code) {
        defineProperties(pecis, 'DEFAULT_FUNC', code, false, false, false)
    }

    /**
     * Quick sum items
     * @param  {number[] | Array<number>} values Values to sum
     * @return {number}
     */
    pecis.sum = function (...values) {
        if (values[0] instanceof Array) {
            return pecis.sum(values[0]);
        } else {
            let result = 0;
            values.forEach((value) => {
                result += value;
            });
            return result;
        }
    };

    pecis.global = function () {
        // globalThis is read-only
        return window;
    };

    /**
     * Create an element
     * @param {string | Array<string, Function>} name
     * @param {object} attr
     * @param {...(HTMLElement | string)} child
     */
    pecis.createElement = function (name, attr, ...child) {
        let is = name instanceof Array,
            create = document.createElement,
            result = is ? create(name[0], {is: name[1]}) : create(name);
        elementOperator.setMultipleAttributes(result, attr);
        result.append(...child)
        return result;
    };

    /**
     * Convert HTMLElement to operable element
     * @param {HTMLElement | Node} element
     */
    pecis.ElementManager = ElementManager;

    /**
     * Operate the DOM with the smallest possible code
     * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated
     * But this may cause some problems
     * The return result is a custom class
     * @param {string} selector Query Selector For the Element
     * @param {number} index Index In the List
     * @return {ElementManager}
     */
    pecis.sel = pecis.select = function (selector, index) {
        if (typeof selector === 'string') {
            if (index === undefined) {
                return new ElementManager(document.querySelectorAll(selector), selector);
            } else {
                return new ElementManager(document.querySelectorAll(selector).item(index), selector);
            }

        } else {
            return new ElementManager(selector);
        }
    };

    /**
     * Select a element
     * @param {string} selector Query Selector of the element
     */
    pecis.query = function (selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Send ajax requests
     * @param {object} config
     */
    pecis.ajax = function (config) {
        let request = new XMLHttpRequest()
            , arg = config;
        arg.success = config.success || this.noop;
        arg.fail = config.fail || this.noop;

        arg.preset ? arg.preset(request) : null;
        request.open(arg.type, arg.url, true);
        request.send(arg.data || null);
        request.responseType = config.response || 'text';
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    // 200: Loading or Successful
                    arg.success(request.response);
                } else {
                    // 0: Unset or Opened
                    arg.fail();
                }
            }
        }
    };

    /**
     * Print to console
     * @param {any[]} data
     */
    pecis.log = function (...data) {
        console.log(...data);
    };
    pecis.log.info = pecis.log;

    /**
     * Print to console
     * @param {any[]} data
     */
    pecis.log.error = function (...data) {
        console.error(...data);
    };

    /**
     * Print to console
     * @param {any[]} data
     */
    pecis.log.warn = function (...data) {
        console.error(...data);
    };

    /**
     * Clear console
     */
    pecis.log.clear = function () {
        console.clear();
    };

    /**
     * Print table to console
     * @param {any} tabularData
     * @param {ReadonlyArray<string>} properties
     */
    pecis.log.table = function (tabularData, properties) {
        console.table(tabularData, properties)
    }

    /**
     * Start a group to console
     * @param {string} label
     * @param {boolean} isCollapsed
     * @param {Function} run
     */
    pecis.log.group = function (label, isCollapsed = false, run = undefined) {
        if (isCollapsed) {
            console.groupCollapsed(label);
        } else {
            console.group(label);
        }

        if (run) {
            run();
            console.groupEnd();
        }
    }

    /**
     * Close a group
     */
    pecis.log.groupEnd = function () {
        console.groupEnd();
    }

    /**
     * Trace function call
     * @param {any[]} data
     */
    pecis.log.trace = function (...data) {
        console.trace(...data);
    }

    /**
     * Console assertion
     * @param {boolean} condition
     * @param {any[]} data
     */
    pecis.log.assert = function (condition, ...data) {
        console.assert(condition, ...data)
    }

    /**
     * return a new string upper cased
     * @param {string} str
     * @return {string}
     */
    pecis.upperCase = function (str) {
        return str.toUpperCase();
    };
    /**
     * return a new string lower cased
     * @param {string} str
     * @return {string}
     */
    pecis.lowerCase = function (str) {
        return str.toLowerCase();
    };

    /**
     * Remove spaces or dashes and convert to camel case
     * @param {string} str
     * @return {string}
     */
    pecis.camelCase = function (str) {
        return str.replace(/[ -]./g, (word) => {
            return word.replace(/[ -]/g, '').toUpperCase();
        });
    };

    /**
     * Get a class of value
     * @param {any} obj
     */
    pecis.classof = function (obj) {
        if (obj && obj.constructor && obj.constructor.toString()) {
            if (obj.constructor.name) {
                return obj.constructor.name;
            }
            let str = obj.constructor.toString()
                , arr;
            if (str.charAt(0) === '[') {
                arr = str.match(/\w+\s∗(\w+)/);
            } else {
                arr = str.match(/function\s*(\w+)/);
            }
            if (arr && arr.length === 2) {
                return arr[1];
            }
        }
        return undefined;
    };

    /**
     * Return a boolean of is obj a number
     * Contains `123` `"123"` `1.23` `"1.23"` `.23` `".23"` `0xff00` `"0xf3"`
     * @param {string | number} obj
     */
    pecis.isNumeric = function (obj) {
        return !isNaN(obj - 0);
    };

    /**
     * Sleep time
     * `pecis.sleep(time).then(Fn)` = setTimeOut
     * `await sleep(time)` is normal sleep time
     * @param {number} time
     */
    pecis.sleep = async function (time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    };

    /**
     * forEach in ANY OBJECT TYPE
     * @param {object} obj Object for each
     * @param {Function} callbackFn call back function
     */
    pecis.forEach = function (obj, callbackFn) {
        Object.keys(obj).forEach((value, _, object) => {
            callbackFn(object[value], value, object);
        });
    };

    /**
     * Return is this in array
     * @param {array} arr
     * @param {any} obj
     * @param {boolean} returnIndex
     */
    pecis.inArray = function (arr, obj, returnIndex = false) {
        if (returnIndex) {
            return arr.indexOf(obj) > -1 ? arr.indexOf(obj) : null;
        } else {
            return arr.indexOf(obj) > -1;
        }
    };

    /**
     * Slice string or array
     * @param {Array<> | string} obj
     * @param {number} start
     * @param {number} end
     */
    pecis.slice = function (obj, start, end) {
        return obj.slice(start, end || start);
    };

    /**
     * Get search string data
     */
    pecis.getSearchData = function (data) {
        if (window.location) {
            let str = data || location.search;

            return JSON.parse('{\"' + decodeURIComponent(str.replace(/"/g,'\\\"').replace(/[?]/g, '').replace(/=/g, '\":\"').replace(/&/g, '\",\"')) + '\"}');

        } else {
            throw errors.PebMissingEnvironmentError('Missing environment window.location');
        }
    };

    /**
     * Wrap URL
     */
    pecis.navigate = function (url, target = '_self') {
        if (window.window) {
            window.opener = null;
            window.open(url, target);
        }
    };

    pecis.noop = function () {
        // NOOP
    };

    /**
     * Multiple String
     */
    pecis.stringTimes = function (string, times, connector = '') {
        return new Array(times).fill(string).join(connector);
    };

    /**
     * Throw error
     */
    pecis.error = function (message, type) {
        let errorType = type || Error;
        throw new errorType(message);
    };

    // Common function integration
    pecis.parseJson = JSON.parse;
    pecis.stringifyJson = JSON.stringify;
    pecis.now = Date.now;
    pecis.insert = emptyArray.push.call;

    pecis.SearchParams = window.URLSearchParams;

    return pecis;
}
