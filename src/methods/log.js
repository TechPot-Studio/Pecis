/**
 * Print to console
 * @param {any[]} data
 */
function log(...data) {
    console.log(...data);
}

log.info = log;

/**
 * Print to console
 * @param {any[]} data
 */
log.error = function (...data) {
    console.error(...data);
};

/**
 * Print to console
 * @param {any[]} data
 */
log.warn = function (...data) {
    console.error(...data);
};

/**
 * Clear console
 */
log.clear = function () {
    console.clear();
};

/**
 * Print table to console
 * @param {any} tabularData
 * @param {ReadonlyArray<string>} properties
 */
log.table = function (tabularData, properties) {
    console.table(tabularData, properties)
}

/**
 * Start a group to console
 * @param {string} label
 * @param {boolean} isCollapsed
 * @param {Function} run
 */
log.group = function (label, isCollapsed = false, run = undefined) {
    if (isCollapsed) {
        console.groupCollapsed(label);
    } else {
        console.group(label);
    }

    if (run) {
        run();
        console.groupEnd();
    }
}

/**
 * Close a group
 */
log.groupEnd = function () {
    console.groupEnd();
}

/**
 * Trace function call
 * @param {any[]} data
 */
log.trace = function (...data) {
    console.trace(...data);
}

/**
 * Console assertion
 * @param {boolean} condition
 * @param {any[]} data
 */
log.assert = function (condition, ...data) {
    console.assert(condition, ...data)
}

export default log;
