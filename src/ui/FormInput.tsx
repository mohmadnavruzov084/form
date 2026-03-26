import clsx from "clsx";
import { useFormContext } from "react-hook-form";

// Типизация пропсов
interface FormInputProps {
  name: string; // имя поля (обязательно)
  label?: string; // текст над полем
  required?: boolean; // обязательное поле?
  type?: string; // тип input (text, email, tel и т.д.)
  placeholder?: string; // плейсхолдер
  className?: string; // дополнительные классы
  [key: string]: any; // остальные пропсы (onChange, disabled и т.д.)
}

export const FormInput = ({
  name,
  label,
  required = false,
  type = "text",
  placeholder,
  className = "",
  ...props
}: FormInputProps) => {
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
        className={clsx("inputDefaul", className, { "input-error": error })}
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
