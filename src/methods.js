import stringOperator from './utils/stringOperator.ts';

import ajax from './methods/ajax';
import addStyle from './frontend/addStyle';
import classof from './methods/classof';
import createElement from './frontend/createElement.ts';
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
import random from './math/random.ts';

const {lowerCase, upperCase, camelCase, stringTimes} = stringOperator

export {
    ajax,
    addStyle,
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
    random,
    upperCase
}
