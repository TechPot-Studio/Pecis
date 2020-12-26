/**
 * Return a boolean of is obj a number
 * like `123` `"123"` `1.23` `"1.23"` `.23` `".23"` `0xff00` `"0xf3"`
 * @param {string | number} obj
 */
export default function isNumeric(obj) {
    return !isNaN(obj);
};
