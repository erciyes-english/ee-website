import * as React from "react";
import { Form, Formik } from "formik";
import { t, Trans } from "@lingui/macro";
import * as leadFormStyles from "./lead-form.module.css";
import { FaCheckCircle } from "react-icons/fa";
import FieldWrapper from "../field-wrapper";
import {
  LeadValidationSchemaEn,
  LeadValidationSchemaTr,
} from "./lead-validation-schema";
import LeadFormSubmission from "./lead-form-submission";
import { useLocalization } from "gatsby-theme-i18n";

const LeadForm = ({ errorTextColor }) => {
  const { locale } = useLocalization();
  const localValidation =
    locale === "en" ? LeadValidationSchemaEn : LeadValidationSchemaTr;
  const [isSent, setIsSent] = React.useState(false);
  const [isUnknownerror, setIsUnknownError] = React.useState(false);

  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        email: "",
        phone: "",
        interest: "",
        gdpr: false,
      }}
      validationSchema={localValidation}
      onSubmit={(values, { setSubmitting }) => {
        setIsUnknownError(false);
        const url = "https://forms.erciyesenglish.workers.dev/forms/lead";
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
            setSubmitting(false);
            setIsUnknownError(true);
          });
      }}
    >
      {isSent ? (
        <div className={leadFormStyles.thankyouPage}>
          <h1>
            <FaCheckCircle />{" "}
            <Trans id="leadForm.thankyou.headline">Sent!</Trans>
          </h1>
          <p>
            <Trans id="leadForm.thankyou.text">We'll answer shortly!</Trans>
          </p>
        </div>
      ) : (
        <Form className={leadFormStyles.leadForm}>
          <p
            style={{
              display: isUnknownerror ? "block" : "none",
              color: errorTextColor,
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            There was an unknown error. Please try again.
          </p>
          <div className={leadFormStyles.inputTwoCol}>
            <FieldWrapper
              fieldName="fname"
              label="First Name*"
              placeholder={t({ id: "leadForm.fname", message: "First Name" })}
              hideLabel={true}
              errorTextColor={errorTextColor}
            />
            <FieldWrapper
              fieldName="lname"
              label="Last Name*"
              placeholder={t({ id: "leadForm.lname", message: "Last Name" })}
              hideLabel={true}
              errorTextColor={errorTextColor}
            />
          </div>
          <FieldWrapper
            fieldName="email"
            label="Email*"
            placeholder={t({ id: "leadForm.email", message: "Email" })}
            hideLabel={true}
            errorTextColor={errorTextColor}
          />
          <FieldWrapper
            fieldName="phone"
            label="Phone*"
            placeholder={t({ id: "leadForm.phone", message: "Phone" })}
            hideLabel={true}
            errorTextColor={errorTextColor}
          />
          <FieldWrapper
            fieldName="interest"
            label="Interested In?"
            hideLabel={true}
            as="select"
            errorTextColor={errorTextColor}
          >
            <option value="">
              {t({ id: "leadForm.interest", message: "Interested In?" })}
            </option>
            <option value="Phase 1">
              {t({ id: "leadForm.interest.option1", message: "Phase 1" })}
            </option>
            <option value="Phase 2">
              {t({ id: "leadForm.interest.option2", message: "Phase 2" })}
            </option>
            <option value="Phase 3">
              {t({ id: "leadForm.interest.option3", message: "Phase 3" })}
            </option>
            <option value="Connect Program">
              {t({
                id: "leadForm.interest.option4",
                message: "Connect Program",
              })}
            </option>
            <option value="Conversation Club">
              {t({
                id: "leadForm.interest.option5",
                message: "Conversation Club",
              })}
            </option>
            <option value="One-on-one">
              {t({ id: "leadForm.interest.option6", message: "One-on-one" })}
            </option>
            <option value="Other">
              {t({ id: "leadForm.interest.option7", message: "Other" })}
            </option>
          </FieldWrapper>

          <FieldWrapper
            fieldName="gdpr"
            label={t({
              id: "leadForm.gdpr",
              message:
                "I consent to having this website store my submitted information so they can respond to my inquiry",
            })}
            type="checkbox"
            errorTextColor={errorTextColor}
          />
          <LeadFormSubmission />
        </Form>
      )}
    </Formik>
  );
};

export default LeadForm;
