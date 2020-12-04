/**
 * Sleep time
 * `pecis.sleep(time).then(Fn)` = setTimeOut
 * `await sleep(time)` is normal sleep time
 * @param {number} time
 */
export default async function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
};
