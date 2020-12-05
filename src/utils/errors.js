class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PecisBasicError';
    }
}
export class ExtensionError extends BaseError {
    constructor(message) {
        super(message);
        this.name = 'PecisExtensionError';
    }
}

export class MissingEnvironmentError extends BaseError {
    constructor(message) {
        super(message);
        this.name = 'PecisMissingEnvironmentError'
    }
}

export class MissingParameterError extends BaseError {
    constructor(message) {
        super(message)
        this.name = 'PecisMissingParameterError';
    }
}

export class MultipleElementError extends BaseError {
    constructor(message) {
        super(message);
        this.name = 'PecisMultipleElementError'
    }
}

export default {
    BaseError,
    ExtensionError,
    MissingEnvironmentError,
    MissingParameterError,
    MultipleElementError
}

