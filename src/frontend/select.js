import ElementManager from "../classes/ElementManager";

/**
 * Operate the DOM with the smallest possible code
 * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated
 * But this may cause some problems
 * The return result is a custom class
 * @param {string} selector Query Selector For the Element
 * @param {number} index Index In the List
 * @return {ElementManager}
 */
export default function select(selector, index) {
    if (typeof selector === 'string') {
        if (index === undefined) {
            return new ElementManager(document.querySelectorAll(selector), selector);
        } else {
            return new ElementManager(document.querySelectorAll(selector).item(index), selector);
        }

    } else {
        return new ElementManager(selector);
    }
}
