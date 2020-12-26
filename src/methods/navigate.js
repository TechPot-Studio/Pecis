/**
 * Navigate URL
 */
export default function navigate(url, target = '_self') {
    const href = document.createElement('a');
    href.href = url;
    href.target = target;
    document.body.appendChild(href);
    href.click();
    document.body.removeChild(href);
};
