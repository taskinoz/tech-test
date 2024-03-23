export function isInt(value: string) {
    return !isNaN(Number(value)) && Number.isInteger(Number(value));
}

export function isFloat(value: string) {
    return !isNaN(Number(value)) && !Number.isInteger(Number(value));
}

export function isString(value: string) {
    return isNaN(Number(value));
}