/**
 * Navigate URL
 */
export default function navigate(url, target = '_self') {
    if (window.window) {
        window.opener = null;
        window.open(url, target);
    }
};
