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
            bind(type: string, listener: (event?: Event) => void): void;
            on(type: string, listener: (event?: Event) => void): void;
            class(index?: number): DOMSettableTokenList;
            addClass(...tokens: string[]): this;
            removeClass(...tokens: string[]): this;
            clearClass(...tokens: string[]): this;
            hide(): this;
            display(type: string): this;
            show(type?: string): void;
            delete(index?: number): void;
            del(index?: number): void;
            child(): this;
            parent(): this;
            next(): this;
            prev(): this;
            /** Click elements or bind a `click` event listener */
            click(fn?: Function): void;
            /** Focus elements or bind a `focus` event listener */
            focus(fn?: Function): void;
            /** Bind a `mouseenter` event listener */
            mouseenter(fn: Function): void;
            /** Bind a `mouseleave` event listener */
            mouseleave(fn: Function): void;
            /** Bind a `mouseup` event listener */
            mouseup(fn: Function): void;
            /** Bind a `mousedown` event listener */
            mousedown(fn: Function): void;
            /** Bind a `mousemove` event listener */
            mousemove(fn: Function): void;
            /** Bind a `mouseover` event listener */
            mouseover(fn: Function): void;
            /** Bind a `mouseout` event listener */
            mouseout(fn: Function): void;
            /** Bind a `mousewheel` event listener */
            mousewheel(fn: Function): void;
            /** Bind a `drag` event listener */
            drag(fn: Function): void;
            /** Bind a `dragstart` event listener */
            dragstart(fn: Function): void;
            /** Bind a `dragend` event listener */
            dragend(fn: Function): void;
            /** Bind a `dragenter` event listener */
            dragenter(fn: Function): void;
            /** Bind a `dragexit` event listener */
            dragexit(fn: Function): void;
            /** Bind a `dragover` event listener */
            dragover(fn: Function): void;
            /** Bind a `dragleave` event listener */
            dragleave(fn: Function): void;
            /** Bind a `canplay` event listener */
            canplay(fn: Function): void;
            /** Bind a `canplaythrough` event listener */
            canplaythrough(fn: Function): void;
            /** Bind a `play` event listener */
            play(fn: Function): void;
            /** Bind a `playing` event listener */
            playing(fn: Function): void;
            /** Bind a `copy` event listener */
            copy(fn: Function): void;
            /** Bind a `beforecopy` event listener */
            beforecopy(fn: Function): void;
            /** Bind a `paste` event listener */
            paste(fn: Function): void;
            /** Bind a `beforepaste` event listener */
            beforepaste(fn: Function): void;
            /** Bind a `blur` event listener */
            blur(fn: Function): void;
            /** Bind a `load` event listener */
            load(fn: Function): void;
            /** Bind a `loadstart` event listener */
            loadstart(fn: Function): void;
            /** Bind a `loadeddata` event listener */
            loadeddata(fn: Function): void;
            /** Bind a `loadedmetadata` event listener */
            loadedmetadata(fn: Function): void;
            /** Bind a `focusin` event listener */
            focusin(fn: Function): void;
            /** Bind a `focusout` event listener */
            focusout(fn: Function): void;
            /** Bind a `keydown` event listener */
            keydown(fn: Function): void;
            /** Bind a `keyup` event listener */
            keyup(fn: Function): void;
            /** Bind a `keypress` event listener */
            keypress(fn: Function): void;
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
