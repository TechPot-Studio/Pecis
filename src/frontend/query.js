import haveDocument from '../utils/haveDocument.ts';
import throwMissingDOMError from '../utils/DOMErrorThrow';

/**
 * Select a element
 * @param {string} selector Query Selector of the element
 */
export default function query(selector) {
    if (haveDocument()) {
        return document.querySelectorAll(selector);
    } else {
        throwMissingDOMError();
    }

};
