import React from "react";
import { useFormContext } from "react-hook-form";

export const FormInput = ({
  name,
  label,
  required = false,
  type = "text",
  placeholder,
  className = "",
  ...props
}) => {
  const {
    register,
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

      <input
        type={type}
        className={`inputDefaul ${error ? "input-error" : ""} ${className}`}
        placeholder={placeholder}
        {...register(name)}
        {...props}
      />

      {error && (
        <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
          {error.message}
        </p>
      )}
    </div>
  );
};
