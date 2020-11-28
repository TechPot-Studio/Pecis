class PecisBaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PecisBasicError';
    }
}
export class ExtensionError extends PecisBaseError {
    constructor(message) {
        super(message);
        this.name = 'PecisExtensionError';
    }
}

export class MissingEnvironmentError extends PecisBaseError {
    constructor(message) {
        super(message);
        this.name = 'PecisMissingEnvironmentError'
    }
}

export class MissingParameterError extends PecisBaseError {
    constructor(message) {
        super(message)
        this.name = 'PecisMissingParameterError';
    }
}

export class MultipleElementError extends PecisBaseError {
    constructor(message) {
        super(message);
        this.name = 'PecisMultipleElementError'
    }
}

export default {
    PecisBaseError: PecisBaseError,
    ExtensionError,
    MissingEnvironmentError,
    MissingParameterError,
    MultipleElementError
}

