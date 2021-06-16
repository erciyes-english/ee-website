import * as React from "react";
import { Field, Form, Formik } from "formik";
import { t, Trans } from "@lingui/macro";
import * as leadFormStyles from "./lead-form.module.css";

const LeadForm = () => {
  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        email: "",
        phone: "",
        interest: "",
        gdrp: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        // axios -> POST request to cloudflare worker.
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={leadFormStyles.leadForm}>
        <div className={leadFormStyles.inputTwoCol}>
          <Field
            name="fname"
            placeholder={t({ id: "leadForm.fname", message: "First Name" })}
          />
          <Field
            name="lname"
            placeholder={t({ id: "leadForm.lname", message: "Last Name" })}
          />
        </div>
        <Field
          name="email"
          type="email"
          placeholder={t({ id: "leadForm.email", message: "E-mail" })}
        />
        <Field
          name="phone"
          type="tel"
          placeholder={t({ id: "leadForm.phone", message: "Phone" })}
        />
        <Field as="select" name="interest">
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
            {t({ id: "leadForm.interest.option4", message: "Connect Program" })}
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
        </Field>
        <label htmlFor="gdpr" className={leadFormStyles.formCheckbox}>
          <Field type="checkbox" name="gdpr" />
          <span htmlFor="gdpr">
            <Trans id="leadForm.gdpr">
              I consent to having this website store my submitted information so
              they can respond to my inquiry
            </Trans>
          </span>
        </label>
        <button type="submit">
          <Trans id="leadForm.submit-btn">Send</Trans>
        </button>
      </Form>
    </Formik>
  );
};

export default LeadForm;
