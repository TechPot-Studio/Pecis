/**
 * Check is env have `document`
 */
export default function haveDocument(): boolean {
    return globalThis.document && globalThis.Document && document instanceof Document
}
