/**
 * Convert HTMLElement to operable element
 * @param {HTMLElement | Node} element
 */
export default class ElementManager {
    element: HTMLElement | NodeList;
    length: number;
    selector: string;

    static create(element: HTMLElement | NodeList): ElementManager {
        return new ElementManager(element)
    }

    constructor(origin: HTMLElement | NodeList, selector?: string) {
        this.element = origin;
        this.length = 'length' in origin ? origin.length : 1;
        this.selector = selector || null;
        this.forEach((element, index) => {
            this[index] = element;
        });
    }

    isSingle(): boolean {
        return this.element instanceof HTMLElement;
    }

    item(index: number): HTMLElement {
        return this[index];
    }

    manageItem(index: number): ElementManager {
        return new ElementManager(this[index]);
    }

    first(): ElementManager {
        return this.manageItem(0);
    }

    last(): ElementManager {
        return this.manageItem(this.length - 1)
    }

    splice(): void {
        /* Pseudo-array must have a `splice` function */
    }

    forEach(callbackFn: (current: HTMLElement, index: number, list: ElementManager) => void): void {
        if (this.element instanceof HTMLElement || this.element instanceof HTMLDocument) {
            callbackFn(<HTMLElement>this.element, 0, this);
        } else {
            this.element.forEach((current, index) => {
                callbackFn(<HTMLElement>current, index, this);
            });
        }
    }

    html(): string
    html(newer: string): this
    html(newer?: string) {
        if (newer === undefined) {
            return this.item(0).innerHTML;
        } else {
            this.forEach((eachElement) => {
                eachElement.innerHTML = newer;
            });
            return this;
        }
    }

    text(): string {
        return this.item(0).innerText;
    }

    value(): string
    value(newer: string): this
    value(newer?: string): string | this {
        if (newer === undefined) {
            return this.item(0)['value'] || null;
        } else {
            this.forEach((eachElement) => {
                let formElement;
                // For TypeScript's sake
                switch (eachElement.constructor) {
                    case HTMLInputElement:
                        formElement = eachElement as HTMLInputElement;
                        break;
                    case HTMLAudioElement:
                        formElement = eachElement as HTMLAudioElement;
                        break;
                    case HTMLSelectElement:
                        formElement = eachElement as HTMLSelectElement;
                        break;
                    case HTMLTextAreaElement:
                        formElement = eachElement as HTMLTextAreaElement;
                        break;
                    default:
                        return;
                }

                formElement.value = newer
            });
        }
    }

    val(): string
    val(newer: string): this
    val(newer?: string): string | this {
        return this.value(newer)
    }

    bind(type: string, listener: EventListenerOrEventListenerObject): void {
        this.forEach(eachElement => eachElement.addEventListener(type, listener));
    }

    on(type: string, listener: EventListenerOrEventListenerObject): void {
        this.bind(type, listener);
    }

    class(): DOMTokenList {
        return this.item(0).classList;
    }

    addClass(...tokens: string[]): this {
        this.forEach(eachElement => eachElement.classList.add(...tokens));
        return this;
    }

    removeClass(...tokens: string[]): this {
        this.forEach(eachElement => eachElement.classList.remove(...tokens));
        return this;
    }

    clearClass(): this {
        this.forEach(eachElement => eachElement.className = '');
        return this;
    }

    hide(): this {
        this.forEach((eachElement) => {
            eachElement.dataset.displayType = eachElement.style.display;
            eachElement.style.display = 'none';
        });
        return this;
    }

    display(type: string): this {
        this.forEach((eachElement) => {
            eachElement.style.display = type;
        });
        return this;
    }

    show(type: string): void {
        if (type === undefined) {
            this.forEach((eachElement) => {
                eachElement.style.display = eachElement.dataset.displayType || 'initial';
                delete eachElement.dataset.displayType;
            })
        } else {
            this.display(type);
        }
    }

    toggle(): void {
        this.forEach((eachElement) => {
            if (eachElement.dataset.displayType) {
                eachElement.dataset.displayType = eachElement.style.display;
                eachElement.style.display = 'none';
            } else {
                eachElement.style.display = eachElement.dataset.displayType || 'initial';
                delete eachElement.dataset.displayType;
            }
        });
    }

    toggleVisible(): void {
        this.toggle();
    }

    delete(index: number): void {
        if (index === undefined) {
            this.forEach(eachElement => eachElement.parentElement.removeChild(eachElement));
        } else {
            let singleElement = this.item(index);
            singleElement.parentElement.removeChild(singleElement);
        }
    }

    del(index: number): void {
        this.delete(index);
    }

    child(): ElementManager {
        return new ElementManager(this.item(0).childNodes);
    }

    parent(): ElementManager {
        return new ElementManager(this.item(0).parentElement);
    }

    next(): ElementManager {
        return new ElementManager(<HTMLElement> this.item(0).nextElementSibling);
    }

    prev(): ElementManager {
        return new ElementManager(<HTMLElement> this.item(0).previousElementSibling);
    }

    append(...elements: (string|HTMLElement)[]): void {
        this.element[0].append(...elements);
    }

    add(...elements: (string|HTMLElement)[]): void {
        this.append(...elements);
    }

    toArray(): Array<HTMLElement> {
        let result = [];
        this.forEach(eachElement => result.push(eachElement));
        return result;
    }

    click(): void
    click(fn: EventListenerOrEventListenerObject): void
    click(fn?: EventListenerOrEventListenerObject): void {
        fn ? this.bind('click', fn) : this.forEach(eachElement => eachElement.click());
    }

    focus(): void
    focus(fn: EventListenerOrEventListenerObject): void
    focus(fn?: EventListenerOrEventListenerObject): void {
        fn ? this.bind('focus', fn) : this.forEach(eachElement => eachElement.focus());
    }

    mouseenter(fn: EventListenerOrEventListenerObject): void     { this.bind('mouseenter', fn); }
    mouseleave(fn: EventListenerOrEventListenerObject): void     { this.bind('mouseleave', fn); }
    mouseup(fn: EventListenerOrEventListenerObject): void        { this.bind('mouseup', fn); }
    mousedown(fn: EventListenerOrEventListenerObject): void      { this.bind('mousedown', fn); }
    mousemove(fn: EventListenerOrEventListenerObject): void      { this.bind('mousemove', fn); }
    mouseover(fn: EventListenerOrEventListenerObject): void      { this.bind('mouseover', fn ); }
    mouseout(fn: EventListenerOrEventListenerObject): void       { this.bind('mouseout', fn) }
    mousewheel(fn: EventListenerOrEventListenerObject): void     { this.bind('mousewheel', fn); }
    drag(fn: EventListenerOrEventListenerObject): void           { this.bind('drag', fn); }
    dragstart(fn: EventListenerOrEventListenerObject): void      { this.bind('dragstart', fn); }
    dragend(fn: EventListenerOrEventListenerObject): void        { this.bind('dragend', fn); }
    dragenter(fn: EventListenerOrEventListenerObject): void      { this.bind('dragenter', fn); }
    dragexit(fn: EventListenerOrEventListenerObject): void       { this.bind('dragexit', fn); }
    dragover(fn: EventListenerOrEventListenerObject): void       { this.bind('dragover', fn); }
    dragleave(fn: EventListenerOrEventListenerObject): void      { this.bind('dragleave', fn); }
    canplay(fn: EventListenerOrEventListenerObject): void        { this.bind('canplay', fn); }
    canplaythrough(fn: EventListenerOrEventListenerObject): void { this.bind('canplaythrough', fn); }
    play(fn: EventListenerOrEventListenerObject): void           { this.bind('play', fn); }
    playing(fn: EventListenerOrEventListenerObject): void        { this.bind('playing', fn); }
    copy(fn: EventListenerOrEventListenerObject): void           { this.bind('copy', fn); }
    beforecopy(fn: EventListenerOrEventListenerObject): void     { this.bind('beforecopy', fn); }
    paste(fn: EventListenerOrEventListenerObject): void          { this.bind('paste', fn); }
    beforepaste(fn: EventListenerOrEventListenerObject): void    { this.bind('beforepaste', fn); }
    blur(fn: EventListenerOrEventListenerObject): void           { this.bind('blur', fn); }
    load(fn: EventListenerOrEventListenerObject): void           { this.bind('load', fn); }
    loadstart(fn: EventListenerOrEventListenerObject): void      { this.bind('loadstart', fn); }
    loadeddata(fn: EventListenerOrEventListenerObject): void     { this.bind('loadeddata', fn); }
    loadedmetadata(fn: EventListenerOrEventListenerObject): void { this.bind('loadedmetadata', fn); }
    focusin(fn: EventListenerOrEventListenerObject): void        { this.bind('focusin', fn); }
    focusout(fn: EventListenerOrEventListenerObject): void       { this.bind('focus', fn); }
    keydown(fn: EventListenerOrEventListenerObject): void        { this.bind('keydown', fn); }
    keyup(fn: EventListenerOrEventListenerObject): void          { this.bind('keyup', fn); }
    keypress(fn: EventListenerOrEventListenerObject): void       { this.bind('keypress', fn); }
}
