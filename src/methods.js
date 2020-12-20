import stringOperator from './utils/stringOperator';

import ajax from './methods/ajax';
import classof from './methods/classof';
import createElement from './frontend/createElement';
import error from './manipulate/error';
import forEach from './methods/forEach';
import getSearchData from './methods/getSearchData';
import isNumeric from './math/isNumeric';
import log from './methods/log';
import navigate from './methods/navigate';
import parse from './manipulate/parse';
import query from './frontend/query';
import select from './frontend/select';
import setDefault from './manipulate/setDefault';
import sleep from './manipulate/sleep';
import slice from './manipulate/slice';
import sum from './math/sum';

const {lowerCase, upperCase, camelCase, stringTimes} = stringOperator

export {
    ajax,
    classof,
    camelCase,
    createElement,
    error,
    forEach,
    getSearchData,
    isNumeric,
    log,
    lowerCase,
    navigate,
    parse,
    query,
    select,
    setDefault,
    sleep,
    slice,
    stringTimes,
    sum,
    upperCase
}
