import * as React from "react";
import { Field, Form, Formik } from "formik";
import { t } from "@lingui/macro";

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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Field
          name="fname"
          placeholder={t({ id: "leadForm.fname", message: "First Name" })}
        />
        <Field name="lname" placeholder="Last Name" />
        <Field name="email" type="email" placeholder="Email" />
        <Field name="phone" type="tel" placeholder="Phone" />
        <Field as="select" name="interest">
          <option value="">Interested In?</option>
          <option value="Phase 1">Phase 1</option>
          <option value="Phase 2">Phase 2</option>
          <option value="Phase 3">Phase 3</option>
          <option value="Connect Program">Connect Program</option>
          <option value="Conversation Club">Conversation Club</option>
          <option value="One-on-one">One-on-one</option>
          <option value="Other">Other</option>
        </Field>
        <label htmlFor="gdrp">
          <Field type="checkbox" name="gdrp" /> I consent to having this website
          store my submitted information so they can respond to my inquiry
        </label>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default LeadForm;
