import elementOperator from '../utils/elementOperator';
import haveDocument from '../utils/haveDocument';
import throwMissingDOMError from '../utils/DOMErrorThrow';

/**
 * Create an element
 */
export default function createElement(name: string, attr: object, ...child: (string | HTMLElement)[]): HTMLElement {
    if (haveDocument()) {
        let result = document.createElement(name);
        elementOperator.setMultipleAttributes(result, attr);
        result.append(...child);
        return result;
    } else {
        throwMissingDOMError();
    }

};
