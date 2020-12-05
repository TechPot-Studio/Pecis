import errors from '../utils/errors';

/**
 * Get search string data
 */
export default function getSearchData(data) {
    if (window.location) {
        let str = data || location.search;

        return JSON.parse('{\"' + decodeURIComponent(str.replace(/"/g,'\\\"').replace(/[?]/g, '').replace(/=/g, '\":\"').replace(/&/g, '\",\"')) + '\"}');

    } else {
        throw errors.PebMissingEnvironmentError('Missing environment window.location');
    }
}
