export default function getGlobal () {
    'use strict';
    if (typeof globalThis === 'object') return globalThis;

    // browser
    if (typeof window === 'object' && window.window === window) return window;
    // commonjs, AMD, CMD
    if (typeof global === 'object' && global.global === global) return global;
    // web worker
    if (typeof self === 'object' && self.self === self) return self;
}
