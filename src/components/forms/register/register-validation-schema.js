import * as Yup from "yup";
import "yup-phone-lite";

const RegisterValidationSchema = Yup.object().shape({
  course: Yup.string().required("This field is required."),
  fname: Yup.string()
    .min(2, "Names must be longer than 2 characters.")
    .max(50, "Names must be shorter than 50 characters.")
    .required("This field is required."),
  lname: Yup.string()
    .min(2, "Names must be longer than 2 characters.")
    .max(50, "Names must be shorter than 50 characters.")
    .required("This field is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("This field is required."),
  phone: Yup.string()
    .phone("TR", "Invalid phone number.")
    .required("This field is required."),
  address1: Yup.string()
    .min(2, "Address must be longer than 2 characters.")
    .max(200, "Address must be shorter than 200 characters.")
    .required("This field is required."),
  address2: Yup.string()
    .min(2, "Address must be longer than 2 characters.")
    .max(200, "Address must be shorter than 200 characters."),
  city: Yup.string()
    .max(50, "City must be shorter than 50 characters.")
    .required("This field is required."),
  province: Yup.string()
    .max(50, "Province must be shorter than 50 characters.")
    .required("This field is required."),
  installments: Yup.string().required("This field is required."),
  gdpr: Yup.boolean().oneOf([true], "Must Accept GDPR"),
});

export default RegisterValidationSchema;
