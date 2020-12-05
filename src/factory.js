import pecis from './core/Pecis';
import { arr } from './utils/presetObject';
import vars from './utils/variables';
import errors from './utils/errors';
import ElementManager from './classes/ElementManager';
import TranslationTable from './classes/TranslationTable';
import {
    ajax,
    classof, createElement, camelCase,
    error,
    forEach,
    getSearchData,
    isNumeric,
    log, lowerCase,
    navigate,
    query,
    select, setDefault, sleep, slice, sum, stringTimes,
    upperCase
} from './methods';
import PecisTransElement from './elements/PecisTransElement';
import defineCustomElements from './utils/customElementsDefiner';

defineCustomElements('pecis-trans', PecisTransElement);

pecis.version = vars.ver;
pecis.pecis = pecis.version;

pecis.global = globalThis;


pecis.BaseError = errors.BaseError;
pecis.ExtensionError = errors.ExtensionError;
pecis.MissingEnvironmentError = errors.MissingEnvironmentError;
pecis.MultipleElementError = errors.MultipleElementError;
pecis.MissingParameterError = errors.MissingParameterError;

pecis.TranslationTable = TranslationTable;

pecis.FIRST_ITEM = 0;
pecis.GLOBAL = window;
pecis.UA = window.navigator ? navigator.userAgent : null;

pecis.sum = sum;
pecis.ajax = ajax;
pecis.classof = classof;
pecis.createElement = createElement;
pecis.ElementManager = ElementManager;
pecis.sel = pecis.select = select;
pecis.slice = slice;
pecis.setDefault = setDefault;
pecis.sleep = sleep;
pecis.isNumeric = isNumeric;
pecis.log = log;
pecis.forEach = forEach;
pecis.getSearchData = getSearchData;
pecis.query = query;
pecis.navigate = navigate;
pecis.noop = function () {/* NOOP */};
pecis.error = error;
pecis.upperCase = upperCase;
pecis.lowerCase = lowerCase;
pecis.camelCase = camelCase;
pecis.stringTimes = stringTimes;

pecis.parseJson = JSON.parse;
pecis.stringifyJson = JSON.stringify;
pecis.now = Date.now;
pecis.insert = arr.push.call;

pecis.SearchParams = globalThis.URLSearchParams;

export default pecis;
