export default {
    /**
     * return a new string upper case
     */
    upperCase(str: string): string {
        return str.toUpperCase();
    },

    /**
     * return a new string lower cased
     */
    lowerCase(str: string): string {
        return str.toLowerCase();
    },

    /**
     * Remove spaces or dashes and convert to camel case
     */
    camelCase(str: string): string {
        return str.replace(/[ -]./g, word => word.replace(/[ -]/g, '').toUpperCase());
    },

    /**
     * Multiple String
     */
    stringTimes(string: string, times: number, connector: string = ''): string {
        return new Array(times).fill(string).join(connector);
    }
};
