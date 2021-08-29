import * as React from "react";
import * as submissionStyles from "./submission-zone.module.css";
import { useFormikContext } from "formik";

const courses = {
  "": 0,
  "Phase 1 - Fall Semester": 3000,
  "Phase 2 - Fall Semester": 3000,
  "Phase 3 - Fall Semester": 3000,
  "Connect Program": 4000,
};

const SubmissionZone = () => {
  const { submitForm, values, isSubmitting } = useFormikContext();

  const [course, setCourse] = React.useState("");
  const [hasGroupDiscount, setHasGroupDiscount] = React.useState(false);
  const [hasOtherDiscount, setHasOtherDiscount] = React.useState(false);
  const [installmentNum, setInstallmentNum] = React.useState(1);

  const [totalPrice, setTotalPrice] = React.useState(0);

  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
  React.useEffect(() => {
    let total = 0;
    setCourse(values.course);
    total = courses[values.course];

    if (values.groupDiscount) {
      setHasGroupDiscount(true);
      total = total - total * 0.1;
    } else {
      setHasGroupDiscount(false);
    }

    if (values.otherDiscount) {
      setHasOtherDiscount(true);
      total = total - total * 0.1;
    } else {
      setHasOtherDiscount(false);
    }

    if (values.installments === "One Payment") {
      total = total - 100;
      setInstallmentNum(1);
    } else {
      setInstallmentNum(2);
    }

    setTotalPrice(total);
  }, [values]);
  return (
    <div className={submissionStyles.summary}>
      <p>
        <span className={submissionStyles.priceLabel}>Total:</span>
        <span className={submissionStyles.price}>
          {currency.format(totalPrice)}
        </span>
      </p>
      <ul>
        {course ? (
          <li>{`${course} - ${currency.format(courses[course])}`}</li>
        ) : null}
        {hasGroupDiscount ? <li>10% Group discount applied.</li> : null}
        {hasOtherDiscount ? <li>10% Other discount applied.</li> : null}
        {installmentNum === 1 ? (
          <li>100TL One time payment discount applied.</li>
        ) : null}
      </ul>
      {isSubmitting ? (
        <button disabled type="button">
          Submitting...
        </button>
      ) : (
        <button disabled={isSubmitting} type="button" onClick={submitForm}>
          Register Now
        </button>
      )}
    </div>
  );
};

export default SubmissionZone;
