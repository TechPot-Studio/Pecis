/**
 * Send ajax requests
 * @param {object} config
 */
export default function ajax(config) {
    console.warn('Use pecis.ajax is based on the XMLHttpRequest')
    let request = new XMLHttpRequest();
    config.success = config.success || function (){};

    config.preset ? config.preset(request) : null;
    request.open(config.type, config.url, true);
    request.send(config.data || null);
    request.responseType = config.response || 'text';
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                // 200: Loading or Successful
                config.success ? config.success(request.response) : null;
            } else {
                // 0: Unset or Opened
                config.fail ? config.fail() : null;
            }
        }
    }
}
