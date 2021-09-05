import * as React from "react";
import { Form, Formik } from "formik";
import { t, Trans } from "@lingui/macro";
import * as registerFormStyles from "./register-form.module.css";

import { FaCheckCircle } from "react-icons/fa";
import FieldWrapper from "../field-wrapper";
import {
  RegisterValidationSchemaEn,
  RegisterValidationSchemaTr,
} from "./register-validation-schema";
import { useLocalization } from "gatsby-theme-i18n";
import SubmissionZone from "./submission-zone";

const RegisterForm = () => {
  const [isSent, setIsSent] = React.useState(false);
  const [isUnknownerror, setIsUnknownError] = React.useState(false);
  const { locale } = useLocalization();
  const localValidation =
    locale === "en" ? RegisterValidationSchemaEn : RegisterValidationSchemaTr;
  return (
    <Formik
      initialValues={{
        course: "",
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        province: "",
        installments: "",
        groupDiscount: false,
        otherDiscount: false,
        gdpr: false,
      }}
      validationSchema={localValidation}
      onSubmit={(values, { setSubmitting }) => {
        setIsUnknownError(false);
        const url = "https://forms.erciyesenglish.workers.dev/forms/register";
        fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
        })
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("Server Error");
            } else {
              return response.json();
            }
          })
          .then(() => {
            setSubmitting(false);
            setIsSent(true);
          })
          .catch(() => {
            window.scrollTo(0, 0);
            setSubmitting(false);
            setIsUnknownError(true);
          });
      }}
    >
      {isSent ? (
        <div className={registerFormStyles.thankyouPage}>
          <h1>
            <FaCheckCircle />{" "}
            <Trans id="registerForm.thankyou.headline">Sent!</Trans>!
          </h1>
          <p>
            <Trans id="registerForm.thankyou.text">
              Thanks for registering!
            </Trans>
          </p>
        </div>
      ) : (
        <div className={registerFormStyles.registerPage}>
          <div className={registerFormStyles.registerFormWrapper}>
            <p
              style={{
                display: isUnknownerror ? "block" : "none",
                color: "red",
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              There was an unknown error. Please try again.
            </p>
            <Form>
              <FieldWrapper
                fieldName="course"
                label={t({
                  id: "registerForm.course.label",
                  message: "Which course are you registering for?*",
                })}
                as="select"
              >
                <option value="">
                  {t({
                    id: "registerForm.course.option0",
                    message: "Select your course...",
                  })}
                </option>
                <option value="Phase 1 - Fall Semester">
                  {t({
                    id: "registerForm.course.option1",
                    message: "Phase 1 - Fall Semester",
                  })}
                </option>
                <option value="Phase 2 - Fall Semester">
                  {t({
                    id: "registerForm.course.option2",
                    message: "Phase 2 - Fall Semester",
                  })}
                </option>
                <option value="Phase 3 - Fall Semester">
                  {t({
                    id: "registerForm.course.option3",
                    message: "Phase 3 - Fall Semester",
                  })}
                </option>
                <option value="Connect Program">
                  {t({
                    id: "registerForm.course.option4",
                    message: "Connect Program",
                  })}
                </option>
              </FieldWrapper>
              <div className={registerFormStyles.inputTwoCol}>
                <FieldWrapper
                  fieldName="fname"
                  label={t({
                    id: "registerForm.fname.label",
                    message: "First Name*",
                  })}
                  placeholder={t({
                    id: "registerForm.fname.placeholder",
                    message: "Mike",
                  })}
                />
                <FieldWrapper
                  fieldName="lname"
                  label={t({
                    id: "registerForm.lname.label",
                    message: "Last Name*",
                  })}
                  placeholder={t({
                    id: "registerForm.lname.placeholder",
                    message: "Smith",
                  })}
                />
              </div>
              <div className={registerFormStyles.inputTwoCol}>
                <FieldWrapper
                  fieldName="email"
                  label={t({
                    id: "registerForm.email.label",
                    message: "Email*",
                  })}
                  placeholder={t({
                    id: "registerForm.email.placeholder",
                    message: "mike@example.com",
                  })}
                />
                <FieldWrapper
                  fieldName="phone"
                  label={t({
                    id: "registerForm.phone.label",
                    message: "Phone*",
                  })}
                  placeholder={t({
                    id: "registerForm.phone.placeholder",
                    message: "0 538 007 11 22",
                  })}
                />
              </div>
              <FieldWrapper
                fieldName="address1"
                label={t({
                  id: "registerForm.address1.label",
                  message: "Address Line 1*",
                })}
                placeholder={t({
                  id: "registerForm.address1.placeholder",
                  message: "Full address, business name, c/o",
                })}
              />
              <FieldWrapper
                fieldName="address2"
                label={t({
                  id: "registerForm.address2.label",
                  message: "Address Line 2*",
                })}
                placeholder={t({
                  id: "registerForm.address2.placeholder",
                  message: "Apartment, flat, floor, etc.",
                })}
              />
              <div className={registerFormStyles.inputTwoCol}>
                <FieldWrapper
                  fieldName="city"
                  label={t({
                    id: "registerForm.city.label",
                    message: "City*",
                  })}
                  placeholder={t({
                    id: "registerForm.city.placeholder",
                    message: "Talas",
                  })}
                />
                <FieldWrapper
                  fieldName="province"
                  label={t({
                    id: "registerForm.province.label",
                    message: "Province*",
                  })}
                  placeholder={t({
                    id: "registerForm.province.placeholder",
                    message: "Kayseri",
                  })}
                />
              </div>
              <FieldWrapper
                fieldName="installments"
                label="How many payments?*"
                label={t({
                  id: "registerForm.installments.label",
                  message: "How many payments*",
                })}
                as="select"
              >
                <option value="">
                  {t({
                    id: "registerForm.installments.option0",
                    message: "Please select...",
                  })}
                </option>
                <option value="One Payment">
                  {t({
                    id: "registerForm.installments.option1",
                    message: "One Payments",
                  })}
                </option>
                <option value="Two Payments">
                  {t({
                    id: "registerForm.installments.option2",
                    message: "Two Payments",
                  })}
                </option>
              </FieldWrapper>
              <FieldWrapper
                fieldName="groupDiscount"
                label={t({
                  id: "registerForm.groupDiscount",
                  message: "Are you part of a group?",
                })}
                type="checkbox"
              />
              <FieldWrapper
                fieldName="otherDiscount"
                label={t({
                  id: "registerForm.otherDiscount",
                  message: "Are you part of something?",
                })}
                type="checkbox"
              />
              <FieldWrapper
                fieldName="gdpr"
                label={t({
                  id: "registerForm.gdpr",
                  message:
                    "I consent to having this website store my submitted information so they can respond to my inquiry",
                })}
                type="checkbox"
              />
            </Form>
          </div>
          <div className={registerFormStyles.registerSummaryWrapper}>
            <SubmissionZone />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
