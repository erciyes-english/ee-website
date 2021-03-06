import * as Yup from "yup";
import "yup-phone-lite";

export const LeadValidationSchemaEn = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Name must be longer than 2 characters.")
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
  interest: Yup.string().required("This field is required."),
  gdpr: Yup.boolean().oneOf([true], "Must Accept GDPR"),
});

export const LeadValidationSchemaTr = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Ad 2 harften uzun olmalıdır.")
    .max(50, "Ad 50 harften kısa olmalıdır.")
    .required("Bu alan gereklidir."),
  lname: Yup.string()
    .min(2, "Ad 2 harften uzun olmalıdır.")
    .max(50, "Ad 50 harften kısa olmalıdır.")
    .required("Bu alan gereklidir."),
  email: Yup.string()
    .email("Geçersiz e-posta adresi.")
    .required("Bu alan gereklidir."),
  phone: Yup.string()
    .phone("TR", "Geçersiz telefon numarası.")
    .required("Bu alan gereklidir."),
  interest: Yup.string().required("Bu alan gereklidir."),
  gdpr: Yup.boolean().oneOf([true], "GDPR'yi Kabul Etmeli"),
});
