import haveDocument from '../utils/haveDocument.ts';

/**
 * Select a element
 * @param {string} selector Query Selector of the element
 */
export default function query(selector) {
    if (haveDocument()) {
        return document.querySelectorAll(selector);
    } else {
        return null;
    }

};
