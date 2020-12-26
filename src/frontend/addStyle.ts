export default function addStyle(styles: string) {
    const styleLoader = document.createElement('style');
    styleLoader.innerHTML = styles;
    document.head.appendChild(styleLoader);
    return styleLoader;
}
