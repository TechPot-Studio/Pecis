/**
 * Peb.js JavaScript library
 * pecis.js.org | MIT License
 */
declare module 'pecis' {

    /* type declare */
    type WrapPageTarget = '_blank' | '_self' | '_top' | '_parent';
    type XHRTypes = 'GET' | 'POST';
    type XHRResponseTypes = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'ms-stream';
    type ManagerSupportedDOMObject = HTMLElement | NodeList;

    /* interface declare */
    interface AjaxConfigOptions {
        /** Request type - `GET` or `POST`*/
        type: XHRTypes,
        /** Request URL */
        url: string,
        /** Data to send */
        data?: any,
        /** Response type */
        response?: XHRResponseTypes,
        /** Function to set ajax */
        preset?: (request: XMLHttpRequest) => void;
        /** Function to do when success */
        success?: (response: any) => void,
        /** Function to do when fail */
        fail?: () => void
    }

    interface translationTableOptions {
        [lang: string]: {
            [word: string]: string
        }
    }

    /**
     * A namespace of basic pecis.js method pecis
     */
    namespace pecis {
        /** Version of pecis.js */
        const version: string;
        const FIRST_ITEM: 0;
        const GLOBAL: any;

        class BaseError extends Error {
            constructor(message: string)
        }
        class NullObjectError extends BaseError {
            constructor(message: string)
        }
        class MissingEnvironmentError extends BaseError {
            constructor(message: string)
        }
        class TranslationTable {
            constructor(table: translationTableOptions)
            set(table: TranslationTable)
            get(): object
            translate(lang: string): void
        }
        class ElementManager {
            /** Origin element */
            element: ManagerSupportedDOMObject;
            /** Length of list */
            length: number;
            constructor(node: ManagerSupportedDOMObject, selector?: string);
            static create(node: ManagerSupportedDOMObject): ElementManager;
            item(index: number): HTMLElement;
            manageItem(index: number): ElementManager;
            first(): ElementManager;
            last(): ElementManager;
            forEach(callbackFn: (currentElement: HTMLElement, index: number, list: ElementManager) => void): void;
            html(newer: string): string|ElementManager;
            text(): string;
            value(newer: string): void;
            val(newer: string): void;
            bind(type: string, listener: EventListenerOrEventListenerObject): void;
            on(type: string, listener: EventListenerOrEventListenerObject): void;
            class(index?: number): DOMSettableTokenList;
            addClass(...tokens: string[]): this;
            removeClass(...tokens: string[]): this;
            clearClass(...tokens: string[]): this;
            hide(): this;
            display(type: string): this;
            show(type?: string): void;
            delete(index?: number): void;
            del(index?: number): void;
            child(): ElementManager;
            parent(): ElementManager;
            next(): ElementManager;
            prev(): ElementManager;
            /** Click elements or bind a `click` event listener */
            click(fn?: EventListenerOrEventListenerObject): void;
            /** Focus elements or bind a `focus` event listener */
            focus(fn?: EventListenerOrEventListenerObject): void;
            /** Bind a `mouseenter` event listener */
            mouseenter(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `mouseleave` event listener */
            mouseleave(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `mouseup` event listener */
            mouseup(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `mousedown` event listener */
            mousedown(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `mousemove` event listener */
            mousemove(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `mouseover` event listener */
            mouseover(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `mouseout` event listener */
            mouseout(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `mousewheel` event listener */
            mousewheel(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `drag` event listener */
            drag(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `dragstart` event listener */
            dragstart(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `dragend` event listener */
            dragend(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `dragenter` event listener */
            dragenter(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `dragexit` event listener */
            dragexit(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `dragover` event listener */
            dragover(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `dragleave` event listener */
            dragleave(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `canplay` event listener */
            canplay(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `canplaythrough` event listener */
            canplaythrough(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `play` event listener */
            play(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `playing` event listener */
            playing(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `copy` event listener */
            copy(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `beforecopy` event listener */
            beforecopy(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `paste` event listener */
            paste(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `beforepaste` event listener */
            beforepaste(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `blur` event listener */
            blur(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `load` event listener */
            load(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `loadstart` event listener */
            loadstart(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `loadeddata` event listener */
            loadeddata(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `loadedmetadata` event listener */
            loadedmetadata(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `focusin` event listener */
            focusin(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `focusout` event listener */
            focusout(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `keydown` event listener */
            keydown(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `keyup` event listener */
            keyup(fn: EventListenerOrEventListenerObject): void;
            /** Bind a `keypress` event listener */
            keypress(fn: EventListenerOrEventListenerObject): void;
        }
        function now(): number;
        function stringifyJson(obj: object): string;
        function parseJson(jsonString: string): object;
        function parse(data: string, parser: Function): any;
        function query(selector: string): NodeList;
        function select(selector: string, index?: number): ElementManager;
        function select(element: HTMLElement|HTMLCollection|NodeList): ElementManager;
        function sel(selector: string, index?: number): ElementManager;
        function sel(element: HTMLElement|HTMLCollection|NodeList): ElementManager;
        function ajax(args: AjaxConfigOptions): void;
        function fetch(url: string, init: Request): Promise<Response>;
        function createElement(name: string, attributes: object, inner?: string, ...child: (HTMLElement)[]);
        namespace log {
            function info(...data: any[]): void;
            function error(...data: any[]): void;
            function warn(...data: any[]): void;
            function clear(): void;
            function table(tabularData: any, properties: ReadonlyArray<string>): void;
            function group(label: string, isCollapsed?: boolean, beetween?: Function): void;
            function groupEnd(): void;
            function trace(...data: any[]): void;
            function assert(condition: boolean, ...data: any[]);
        }
        function navigate(url: string, target: WrapPageTarget): void;
        function upperCase(str: string): string;
        function lowerCase(str: string): string;
        function camelCase(str: string): string;
        class dataMap {
            constructor();
            set(key: string, value: any): void;
            get(key: string): any;
            keys(): Array<string>;
            remove(key: string): boolean;
            lockType(type: Function): void;
        }
        function classof(obj: any): string;
        function insert(arr: Array<any>, ...items: any[]): number;
        function noop(): void;
        function slice(obj: string, start: number, end?: number): string;
        function slice(obj: Array<any>, start: number, end?: number): Array<any>;
        function getSearchData(): object;
        function isNumeric(obj: string|number): boolean;
        function random(): number;
        function random(min: number, max: number): number;
        function sleep(milliseconds: number): Promise<void>;
        function stringTimes(str: string, times: number, connector?: string): string;
        function forEach(obj: any, callbackFn: (current: any, index: number, array: any[]) => void): void;
    }

    export default pecis;
}
