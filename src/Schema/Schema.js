import * as Yup from 'yup';

const passwordRules= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const loginSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email address').required("This field is required"),
    password: Yup.string().min(8,"Minimum 8 chars required").matches(passwordRules,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("This field is required"),
})

export const forgotPassSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email address').required("This field is required"),
})

export const resetPassSchema = Yup.object().shape({
    newPassword: Yup.string().min(8,"Minimum 8 chars required").matches(passwordRules,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("This field is required"),
    confirmPassword: Yup.string().min(8,"Minimum 8 chars required").matches(passwordRules,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("This field is required"),
})

export const registerSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email address').required("This field is required"),
    password: Yup.string().min(8,"Minimum 8 chars required").matches(passwordRules,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("This field is required"),
    firstname: Yup.string().min(3,"Minimum 3 chars required").required("This field is required"),
    lastname: Yup.string().min(3,"Minimum 3 chars required").required("This field is required"),
})

export const userDetailEditSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email address').required("This field is required"),
    firstname: Yup.string().min(3,"Minimum 3 chars required").required("This field is required"),
    lastname: Yup.string().min(3,"Minimum 3 chars required").required("This field is required"),
})

export const bookingSchema = Yup.object().shape({
    houseNo:Yup.string().min(3,"Minimum 3 chars required").required("This field is required"),
    streetName:Yup.string().min(3,"Minimum 3 chars required").required("This field is required"),
    district:Yup.string().min(3,"Minimum 3 chars required").required("This field is required"),
    landmark:Yup.string().min(3,"Minimum 3 chars required"),
})