export default function addStyle(styles: string): HTMLStyleElement {
    const styleLoader: HTMLStyleElement = document.createElement('style');
    styleLoader.innerHTML = styles;
    document.head.appendChild(styleLoader);
    return styleLoader;
}
