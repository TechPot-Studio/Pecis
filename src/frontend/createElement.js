import elementOperator from '../utils/elementOperator';
import FakeElement from '../utils/FakeElement';

/**
 * Create an element
 * @param {string | Array<string, Function>} name
 * @param {object} attr
 * @param {...(HTMLElement | string)} child
 */
export default function createElement(name, attr, ...child) {
    let is = name instanceof Array,
        create = globalThis.document ? document.createElement : () => new FakeElement(),
        result = is ? create(name[0], {is: name[1]}) : create(name);
    elementOperator.setMultipleAttributes(result, attr);
    result.append(...child);
    return result;
};
