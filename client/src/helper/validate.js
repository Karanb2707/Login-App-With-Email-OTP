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

//validate reset password
