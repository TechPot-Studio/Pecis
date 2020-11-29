export default function (o, key, value, writable = true, configurable = true, enumerable = true) {
    Object.defineProperties(o, key, {
        value: value,
        writable: writable,
        configurable: configurable,
        enumerable: enumerable
    });
}
