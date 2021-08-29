import * as Yup from "yup";
import "yup-phone-lite";
import { t } from "@lingui/macro";

const LeadValidationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(
      2,
      t({
        id: "form.schema.name.min",
        message: "Name must be longer than 2 characters.",
      })
    )
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

export default LeadValidationSchema;
