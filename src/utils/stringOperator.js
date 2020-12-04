export default {
    /**
     * return a new string upper cased
     * @param {string} str
     * @return {string}
     */
    upperCase(str) {
        return str.toUpperCase();
    },

    /**
     * return a new string lower cased
     * @param {string} str
     * @return {string}
     */
    lowerCase(str) {
        return str.toLowerCase();
    },

    /**
     * Remove spaces or dashes and convert to camel case
     * @param {string} str
     * @return {string}
     */
    camelCase(str) {
        return str.replace(/[ -]./g, word => word.replace(/[ -]/g, '').toUpperCase());
    },

    /**
     * Multiple String
     */
    stringTimes(string, times, connector = '') {
        return new Array(times).fill(string).join(connector);
    }
}
