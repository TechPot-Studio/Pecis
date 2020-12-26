export default {
    setMultipleAttributes(target: HTMLElement, objectSeq: object) {
        Object.keys(objectSeq).forEach((attrName: string) => {
            target?.setAttribute(attrName, objectSeq[attrName])
        });
    }
}
