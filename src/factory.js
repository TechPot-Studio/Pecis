import pecis from './core/Pecis';
import { arr } from './utils/presetObject';
import vars from './utils/variables';
import errors from './utils/errors';
import ElementManager from './classes/ElementManager.ts';
import TranslationTable from './classes/TranslationTable';
import * as methods from './methods';
import PecisTransElement from './elements/PecisTransElement';
import defineCustomElements from './utils/customElementsDefiner';
import getGlobal from './utils/getGlobalVariable';

defineCustomElements(['pecis-trans', PecisTransElement]);

pecis.version = vars.ver;
pecis.pecis = pecis.version;

pecis.global = getGlobal();
pecis._global = getGlobal();

pecis.BaseError = errors.BaseError;
pecis.ExtensionError = errors.ExtensionError;
pecis.MissingEnvironmentError = errors.MissingEnvironmentError;
pecis.MultipleElementError = errors.MultipleElementError;
pecis.MissingParameterError = errors.MissingParameterError;

pecis.TranslationTable = TranslationTable;

pecis.FIRST_ITEM = 0;
pecis.UA = pecis.global?.navigator?.userAgent || null;

pecis.sum = methods.sum;
pecis.ajax = methods.ajax;
pecis.addStyle = methods.addStyle;
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
pecis.noop = () => {/* NOOP */};
pecis.error = methods.error;
pecis.upperCase = methods.upperCase;
pecis.lowerCase = methods.lowerCase;
pecis.camelCase = methods.camelCase;
pecis.stringTimes = methods.stringTimes;
pecis.parseJson = JSON.parse;
pecis.stringifyJson = JSON.stringify;
pecis.now = Date.now;
pecis.math = Math;
pecis.insert = arr.push.call;
pecis.random = methods.random;
pecis.SearchParams = globalThis.URLSearchParams;

export default pecis;
