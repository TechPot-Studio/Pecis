import haveDocument from './haveDocument';

/**
 * Define a custom element
 */
function defineCustomElement (name: string, constructor: CustomElementConstructor): void {
    if (haveDocument()) {
        customElements.define(name, constructor);
    }
}

/**
 * Define multiple elements
 */
export default function defineElements (...consequences: [string, CustomElementConstructor][]): void {
    consequences.forEach(eachConsequence => defineCustomElement(eachConsequence[0], eachConsequence[1]));
}
