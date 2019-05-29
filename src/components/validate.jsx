const validate = (value, rules) => {
    let isValid = true;

    for(let rule in rules) {
        
        switch(rule) {
            case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;

            case 'isRequired': isValid = isValid && isRequiredValidator(value); break;

            default: isValid = true;
        }
    }
    return isValid;
}

const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

const isRequiredValidator = value => {
    return value.trim() !== '';
}

export default validate;