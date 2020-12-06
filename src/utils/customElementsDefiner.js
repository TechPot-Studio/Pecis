import haveDocument from './haveDocument';

/**
 * Define a custom element
 * @param {string} name
 * @param {CustomElementConstructor} constructor
 */
export default function defineCustomElements (name, constructor) {
    if (haveDocument()) {
        customElements.define(name, constructor)
    }
}
