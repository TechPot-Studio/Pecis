/**
 * forEach in ANY OBJECT TYPE
 * @param {object} obj Object for each
 * @param {Function} callbackFn call back function
 */
export default function forEach(obj, callbackFn) {
    Object.keys(obj).forEach((value, _, object) => {
        callbackFn(object[value], value, object);
    });
}
