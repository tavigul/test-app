// import { parsePhoneNumber } from "react-phone-number-input";

// ******************************
export const validator = (values: any, fieldName: any) => {
    let errors = {};
    switch (fieldName) {
        case "email":
            validateEmail(values.email, errors);
            break;
        // case "phone":
        //     validatePhoneNumber(values.phone, errors);
        //     break;
        default:
    }
    return errors;
};

// ******************************
// export function getCountryCode(phoneNumber) {
//     return get(parsePhoneNumber(phoneNumber), "country");
// }

// ******************************
// function validatePhoneNumber(phone, errors) {
//     let result = true;
//     const phoneObject = parsePhoneNumber(phone);
//     if (!phoneObject) {
//         errors.phone = "Invalid Phonenumber";
//         result = false;
//     }
//     return result;
// }
// ******************************
function validateEmail(email: string, errors:any) {
    let result = true;

    if (!email) {
        errors.email = "Email is Required";
        result = false;
    } else {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        result = re.test(String(email).toLowerCase());
        if (!result) errors.email = "Invalid Email address";
    }
    return result;
}

