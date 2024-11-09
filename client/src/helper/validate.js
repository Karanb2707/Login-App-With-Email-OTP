import toast from "react-hot-toast"

// validate login page
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

// validate password page
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors;
}

//validate reset password page
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);
    
    if(values.password !== values.confirm_pwd)
    {
        errors.exit = toast.error("Password not match...!");
    }

    return errors;
}

//validate register page
export async function registerValidation(values) {
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

//validate profile page
export async function profileValidation(values) {
    const errors = emailVerify({}, values)
    return errors;
}

// validate username
function usernameVerify(error = {}, values){
    if(!values.username)
    {
        error.username = toast.error('Username Required');
    }
    else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username');
    }

    return error;
}

//validate password
function passwordVerify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password)
    {
        errors.password = toast.error('Password Required');
    }
    else if(values.password.includes(" "))
    {
        errors.password = toast.error('Wrong Password');
    }
    else if(values.password.length < 4)
    {
        errors.password = toast.error('Password must be more than 4 characters long');
    }
    else if(!specialChars.test(values.password))
    {
        errors.password = toast.error('Password must have special character');
    }
    
    return errors;
}

//validate email
function emailVerify(errors = {}, values){
    if(!values.email)
    {
        errors.email = toast.error("Email Required!");
    }
    else if(values.email.includes(" "))
    {
        errors.email = toast.error("Wrong Mail");
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
        errors.email = toast.error("Invalid Email Address");
    }

    return errors;
}
