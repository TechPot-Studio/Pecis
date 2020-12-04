/**
 * Slice string or array
 * @param {Array<> | string} obj
 * @param {number} start
 * @param {number} end
 */
export default function slice(obj, start, end) {
    return obj.slice(start, end || start);
};
