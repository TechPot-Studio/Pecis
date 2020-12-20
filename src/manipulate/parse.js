/**
 * Parse string
 * @param {string} str String to parse
 * @param {Function} parser Parser
 */
export default function parse(str, parser=JSON.parse) {
    parser(str)
};
