/**
 * Throw error
 */
export default function error(message, type) {
    let errorType = type || Error;
    throw new errorType(message);
};
