import pecis from '../core/Pecis';
import defineProperties from '../utils/propertiesDefiner';

/**
 * Set the function to run when use directly `pecis()`
 * @param {number} code
 */
export default function setDefault(code) {
    defineProperties(pecis, 'DEFAULT_FUNC', code, false, false, false);
};
