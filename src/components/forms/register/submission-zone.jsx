import * as React from "react";
import * as submissionStyles from "./submission-zone.module.css";
import { useFormikContext } from "formik";
import { Trans, t } from "@lingui/macro";

const SubmissionZone = () => {
  const { submitForm, values, isSubmitting } = useFormikContext();

  const courses = {
    "": 0,
    "Phase 1 - Fall Semester": 3500,
    "Phase 2 - Fall Semester": 3500,
    "Phase 3 - Fall Semester": 3500,
    "Phase 4 - Fall Semester": 3200,
    "Children's Program": 1200,
  };
  const coursesI18n = {
    "": "",
    "Phase 1 - Fall Semester": t({
      id: "registerForm.submit.course1",
      message: "Phase 1 - Fall Semester",
    }),
    "Phase 2 - Fall Semester": t({
      id: "registerForm.submit.course2",
      message: "Phase 2 - Fall Semester",
    }),
    "Phase 3 - Fall Semester": t({
      id: "registerForm.submit.course3",
      message: "Phase 3 - Fall Semester",
    }),
    "Phase 4 - Fall Semester": t({
      id: "registerForm.submit.course4",
      message: "Phase 4 - Fall Semester",
    }),
    "Children's Program": t({
      id: "registerForm.submit.children",
      message: "Children's Program",
    }),
  };
  const [course, setCourse] = React.useState("");
  const [hasGroupDiscount, setHasGroupDiscount] = React.useState(false);
  const [hasStudentDiscount, setHasStudentDiscount] = React.useState(false);
  const [installmentNum, setInstallmentNum] = React.useState(1);

  const [totalPrice, setTotalPrice] = React.useState(0);

  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
  React.useEffect(() => {
    let total = 0;

    if (values.course) {
      setCourse(values.course);
      total = courses[values.course];

      // early registration discount.
      if (values.course !== "Children's Program") total = total - 200;
    } else {
      setCourse("");
    }

    if (values.groupDiscount && values.course !== "Children's Program") {
      setHasGroupDiscount(true);
      total = total - 100;
    } else {
      setHasGroupDiscount(false);
    }

    if (values.studentDiscount && values.course !== "Children's Program") {
      setHasStudentDiscount(true);
      total = total - 100;
    } else {
      setHasStudentDiscount(false);
    }

    if (
      values.installments === "One Payment" &&
      values.course !== "Children's Program"
    ) {
      total = total - 200;
      setInstallmentNum(1);
    } else {
      setInstallmentNum(2);
    }

    setTotalPrice(total);
  });
  return (
    <div className={submissionStyles.summary}>
      <p style={{ display: "none" }}>
        <span className={submissionStyles.priceLabel}>
          <Trans id="registerForm.submit.price.label">Total:</Trans>
        </span>
        <span className={submissionStyles.price}>
          {totalPrice > 0 && course !== "Children's Program" ? (
            <del className={submissionStyles.fullPrice}>
              {currency.format(courses[course])}
            </del>
          ) : null}
          <span>{currency.format(totalPrice)}</span>
        </span>
      </p>
      <ul style={{ display: "none" }}>
        {course ? (
          <>
            <li>{`${coursesI18n[course]} - ${currency.format(
              courses[course]
            )}`}</li>
            {course !== "Children's Program" ? (
              <li>
                <Trans id="registerForm.submit.earlyDiscount">
                  200TL Early Registration discount applied.
                </Trans>
              </li>
            ) : null}
          </>
        ) : null}
        {hasGroupDiscount ? (
          <li>
            <Trans id="registerForm.submit.groupDiscount">
              100TL Group discount applied.
            </Trans>
          </li>
        ) : null}
        {hasStudentDiscount ? (
          <li>
            <Trans id="registerForm.submit.studentDiscount">
              100TL Returning student discount applied.
            </Trans>
          </li>
        ) : null}
        {installmentNum === 1 ? (
          <li>
            <Trans id="registerForm.submit.oneDiscount">
              200TL One time payment discount applied.
            </Trans>
          </li>
        ) : null}
      </ul>
      {isSubmitting ? (
        <button disabled type="button">
          <Trans id="registerForm.submit.buttonSending">Submitting...</Trans>
        </button>
      ) : (
        <button disabled={isSubmitting} type="button" onClick={submitForm}>
          <Trans id="registerForm.submit.button">Register Now</Trans>
        </button>
      )}
    </div>
  );
};

export default SubmissionZone;
