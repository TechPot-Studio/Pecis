import errors from './errors';

export default function throwMissingDOMError() {
    throw new errors.MissingEnvironmentError('Missing DOM Environment');
}
