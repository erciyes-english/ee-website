import * as React from "react";
import * as fieldStyles from "./field-wrapper.module.css";
import { Field, useFormikContext } from "formik";

const FieldWrapper = ({
  fieldName,
  label,
  placeholder,
  as,
  type,
  children,
  hideLabel,
  errorTextColor,
}) => {
  if (!placeholder) placeholder = null;
  if (!type) type = null;
  if (!as) as = null;
  if (!errorTextColor) errorTextColor = "red";
  const { errors, touched } = useFormikContext();

  const checkboxStyle = type === "checkbox" ? fieldStyles.isCheckbox : null;
  return (
    <div className={`${fieldStyles.fieldWrapper} ${checkboxStyle}`}>
      {type !== "checkbox" && !hideLabel ? (
        <label htmlFor={fieldName}>{label}</label>
      ) : null}
      <Field
        as={as}
        type={type}
        name={fieldName}
        placeholder={placeholder}
        className={
          errors[fieldName] && touched[fieldName] ? fieldStyles.error : null
        }
      >
        {children}
      </Field>
      {type === "checkbox" ? <label htmlFor={fieldName}>{label}</label> : null}
      <p className={fieldStyles.fieldError} style={{ color: errorTextColor }}>
        {errors[fieldName] && touched[fieldName] ? (
          <span>{errors[fieldName]}</span>
        ) : null}
      </p>
    </div>
  );
};

export default FieldWrapper;
