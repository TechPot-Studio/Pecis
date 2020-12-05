/**
 *
 * @param {string} name
 * @param {CustomElementConstructor} constructor
 */
export default function defineCustomElements (name, constructor) {
    if (globalThis.document && document instanceof Document) {
        customElements.define(name, constructor)
    }
}
