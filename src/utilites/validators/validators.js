export const inputValidation = value => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 20) {
        error= `Max length more than 20`;
    } else if (value.length < 3) {
        error= `Min length must be more than 3`;
    } 

    return error;  
}

export const inputLengthValidation = value => {
    let error;
    if (!value) {
        error = undefined;
    } else if (value.length > 20) {
        error= `You length more than 20`;
    } else if (value.length < 3) {
        error= `Min length must be more than 3`;
    } 

    return error;  
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length more than ${maxLength}`;
    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length > minLength) return `Min length must be more than ${minLength}`;
    return undefined;
}