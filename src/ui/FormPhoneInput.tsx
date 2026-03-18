import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

export const FormPhoneInput = ({
  name,
  label,
  required = false,
  className = "",
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <div>
      {label && (
        <div className="formBox_title">
          {label} {required && <span className="red-star">*</span>}
        </div>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value = "", ...field } }) => (
          <IMaskInput
            {...field}
            value={value}
            onAccept={(value) => onChange(value)}
            mask="+7 (000) 000-00-00"
            className={`inputDefaul ${error ? "input-error" : ""} ${className}`}
            placeholder="(123) 000-0000"
            {...props}
          />
        )}
      />

      {error && (
        <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
          {error.message}
        </p>
      )}
    </div>
  );
};
