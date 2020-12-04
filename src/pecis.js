/**
 * Peb JavaScript Library
 * Checked Out JQuery FEATURES (NOT SOURCE CODE)
 * Most features are OC
 * 
 * @copyright TechPot Studio and other contributors
 */

import './scss/styles.scss';
import pecis from './factory';

if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    module.exports = pecis;
} else if (typeof define === 'function' && define.amd) {
    // AMD
    define('peb', [], function () {
        return pecis;
    });
} else {
    // Browser
    globalThis.pecis = pecis;
}
