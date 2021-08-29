import * as React from "react";
import { Form, Formik } from "formik";
import { Trans } from "@lingui/macro";
import * as registerFormStyles from "./register-form.module.css";

import { FaCheckCircle } from "react-icons/fa";
import FieldWrapper from "../field-wrapper";
import RegisterValidationSchema from "./register-validation-schema";
import SubmissionZone from "./submission-zone";

const RegisterForm = () => {
  const [isSent, setIsSent] = React.useState(false);
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
      validationSchema={RegisterValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submiting");
        // axios -> POST request to cloudflare worker.
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setIsSent(true);
        }, 400);
      }}
    >
      {isSent ? (
        <div className={registerFormStyles.thankyouPage}>
          <h1>
            <FaCheckCircle /> Sent!
          </h1>
          <p>Thanks for registering!</p>
        </div>
      ) : (
        <div className={registerFormStyles.registerPage}>
          <div className={registerFormStyles.registerFormWrapper}>
            <Form>
              <FieldWrapper
                fieldName="course"
                label="Which course are you registering for?*"
                as="select"
              >
                <option value="">Select your course...</option>
                <option value="Phase 1 - Fall Semester">
                  Phase 1 - Fall Semester
                </option>
                <option value="Phase 2 - Fall Semester">
                  Phase 2 - Fall Semester
                </option>
                <option value="Phase 3 - Fall Semester">
                  Phase 3 - Fall Semester
                </option>
                <option value="Connect Program">Connect Program</option>
              </FieldWrapper>
              <div className={registerFormStyles.inputTwoCol}>
                <FieldWrapper
                  fieldName="fname"
                  label="First Name*"
                  placeholder="Mike"
                />
                <FieldWrapper
                  fieldName="lname"
                  label="Last Name*"
                  placeholder="Smith"
                />
              </div>
              <div className={registerFormStyles.inputTwoCol}>
                <FieldWrapper
                  fieldName="email"
                  label="Email*"
                  placeholder="mike@example.com"
                />
                <FieldWrapper
                  fieldName="phone"
                  label="Phone*"
                  placeholder="0 538 007 11 22"
                />
              </div>
              <FieldWrapper
                fieldName="address1"
                label="Address Line 1*"
                placeholder="Full address, business name, c/o"
              />
              <FieldWrapper
                fieldName="address2"
                label="Address Line 2"
                placeholder="Apartment, flat, floor, etc."
              />
              <div className={registerFormStyles.inputTwoCol}>
                <FieldWrapper
                  fieldName="city"
                  label="City*"
                  placeholder="Talas"
                />
                <FieldWrapper
                  fieldName="province"
                  label="Province*"
                  placeholder="Kayseri"
                />
              </div>
              <FieldWrapper
                fieldName="installments"
                label="How many payments?*"
                as="select"
              >
                <option value="">Please select...</option>
                <option value="One Payment">One Payment</option>
                <option value="Two Payments">Two Payments</option>
              </FieldWrapper>
              <FieldWrapper
                fieldName="groupDiscount"
                label="Are you part of a group?"
                type="checkbox"
              />
              <FieldWrapper
                fieldName="otherDiscount"
                label="Are you part of something?"
                type="checkbox"
              />
              <FieldWrapper
                fieldName="gdpr"
                label="I consent to having this website store my submitted information so
          they can respond to my inquiry."
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
