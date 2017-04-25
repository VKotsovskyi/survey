export const VALIDATION = {
    string: {
        pattern: /^.{3,255}$/,
        error_message: 'Length should be from 3 to 255 numbers'
    },
    email: {
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error_message: 'Invalid email address'
    },
    phone: {
        pattern: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
        error_message: 'Invalid phone number'
    },
    zip: {
        pattern: /^\d{5}(?:[-\s]\d{4})?$/,
        error_message: 'Invalid zip code'
    },
    positive_num: {
        pattern: /^[+]?([.]\d+|\d+[.]?\d*)$/,
        error_message: 'Please anter number > then 0'
    },
}