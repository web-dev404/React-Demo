export const required = (value) => (value ? undefined : "Required");

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max Length is ${maxLength} symbols`;
    return undefined;
}

export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);