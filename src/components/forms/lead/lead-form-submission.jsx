import * as React from "react";
import { useFormikContext } from "formik";
import { Trans } from "@lingui/macro";

const LeadFormSubmission = () => {
  const { isSubmitting, submitForm } = useFormikContext();

  return (
    <>
      {isSubmitting ? (
        <button disabled type="button">
          <Trans id="leadForm.submit-btn-sending">Sending...</Trans>
        </button>
      ) : (
        <button disabled={isSubmitting} type="button" onClick={submitForm}>
          <Trans id="leadForm.submit-btn">Send</Trans>
        </button>
      )}
    </>
  );
};

export default LeadFormSubmission;
