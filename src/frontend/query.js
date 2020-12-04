/**
 * Select a element
 * @param {string} selector Query Selector of the element
 */
export default function query(selector) {
    return document.querySelectorAll(selector);
};
