/**
 * Get a class of value
 * @param {any} obj
 */
export default function classof (obj) {
    if (obj && obj.constructor && obj.constructor.toString()) {
        if (obj.constructor.name) {
            return obj.constructor.name;
        }
        let str = obj.constructor.toString()
            , arr;
        if (str.charAt(0) === '[') {
            arr = str.match(/\w+\s∗(\w+)/);
        } else {
            arr = str.match(/function\s*(\w+)/);
        }
        if (arr && arr.length === 2) {
            return arr[1];
        }
    }
    return undefined;
}
