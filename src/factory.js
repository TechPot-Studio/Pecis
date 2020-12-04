import pecis from "./core/Pecis";
import vars from './utils/variables';
import errors from './utils/errors';
import ElementManager from './classes/ElementManager';
import TranslationTable from './classes/TranslationTable';
import defineProperties from './utils/propertiesDefiner';
import ajax from './methods/ajax';
import classof from './methods/classof';
import createElement from './frontend/createElement';
import sum from './math/sum';
import select from './frontend/select';
import getSearchData from './methods/getSearchData';
import error from './manipulate/error';
import navigate from './methods/navigate';
import slice from './manipulate/slice';
import log from './methods/log';
import forEach from './methods/forEach';
import query from './frontend/query';
import sleep from './manipulate/sleep';
import stringOperator from './utils/stringOperator';
import PecisTransElement from './elements/PecisTransElement';
import isNumeric from './math/isNumeric';

pecis.version = vars.ver;
pecis.pecis = pecis.version;

let emptyArray = [null];

pecis.FIRST_ITEM = 0
pecis.GLOBAL = window;
pecis.UA = window.navigator ? navigator.userAgent : null

if (window.document && document instanceof Document) {
    customElements.define('pecis-trans', PecisTransElement);
}

/**
 * Set the function to run when use directly `pecis()`
 * @param {number} code
 */
pecis.setDefault = function (code) {
    defineProperties(pecis, 'DEFAULT_FUNC', code, false, false, false)
}

pecis.global = window;

pecis.PecisBaseError = errors.PecisBaseError;
pecis.ExtensionError = errors.ExtensionError;
pecis.MissingEnvironmentError = errors.MissingEnvironmentError;
pecis.MultipleElementError = errors.MultipleElementError;
pecis.MissingParameterError = errors.MissingParameterError;

pecis.TranslationTable = TranslationTable;

pecis.sum = sum;
pecis.ajax = ajax;
pecis.classof = classof;
pecis.createElement = createElement;
pecis.ElementManager = ElementManager;
pecis.sel = pecis.select = select;
pecis.slice = slice;
pecis.sleep = sleep;
pecis.isNumeric = isNumeric;
pecis.log = log;
pecis.forEach = forEach;
pecis.getSearchData = getSearchData;
pecis.query = query;
pecis.navigate = navigate;
pecis.noop = function () {/* NOOP */};
pecis.error = error;
pecis.upperCase = stringOperator.upperCase;
pecis.lowerCase = stringOperator.lowerCase;
pecis.camelCase = stringOperator.camelCase;
pecis.stringTimes = stringOperator.stringTimes;

pecis.parseJson = JSON.parse;
pecis.stringifyJson = JSON.stringify;
pecis.now = Date.now;
pecis.insert = emptyArray.push.call;

pecis.SearchParams = window.URLSearchParams;

export default pecis;
