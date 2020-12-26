import pecis from './core/Pecis';
import { arr } from './utils/presetObject';
import vars from './utils/variables';
import errors from './utils/errors';
import ElementManager from './classes/ElementManager';
import TranslationTable from './classes/TranslationTable';
import * as methods from './methods';
import PecisTransElement from './elements/PecisTransElement';
import defineCustomElements from './utils/customElementsDefiner';

defineCustomElements(['pecis-trans', PecisTransElement]);

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

pecis.sum = methods.sum;
pecis.ajax = methods.ajax;
pecis.classof = methods.classof;
pecis.createElement = methods.createElement;
pecis.ElementManager = ElementManager;
pecis.sel = pecis.select = methods.select;
pecis.slice = methods.slice;
pecis.setDefault = methods.setDefault;
pecis.sleep = methods.sleep;
pecis.isNumeric = methods.isNumeric;
pecis.log = methods.log;
pecis.forEach = methods.forEach;
pecis.fetch = globalThis.fetch;
pecis.getSearchData = methods.getSearchData;
pecis.query = methods.query;
pecis.parse = methods.parse;
pecis.navigate = methods.navigate;
pecis.noop = function () {/* NOOP */};
pecis.error = methods.error;
pecis.upperCase = methods.upperCase;
pecis.lowerCase = methods.lowerCase;
pecis.camelCase = methods.camelCase;
pecis.stringTimes = methods.stringTimes;

pecis.parseJson = JSON.parse;
pecis.stringifyJson = JSON.stringify;
pecis.now = Date.now;
pecis.insert = arr.push.call;

pecis.SearchParams = globalThis.URLSearchParams;

export default pecis;
