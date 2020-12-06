/**
 * Check is env have `document`
 * @return {boolean}
 */
export default function haveDocument() {
    return globalThis.document && globalThis.Document && document instanceof Document
}
