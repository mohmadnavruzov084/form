import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { userSchema, type UserFormData } from "../../../modules/userSchema";
import { FormInput } from "../../../ui/FormInput";
import { FormPhoneInput } from "../../../ui/FormPhoneInput";

interface PersonalInformationProps {
  onNext: (data: UserFormData) => void; // onNext принимает данные формы
}

export const PersonalInformayion = ({ onNext }: PersonalInformationProps) => {
  const methods = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userFullName: "",
      email: "",
      phoneNumber: "",
      company: "",
      address: "",
    },
  });
  const onSubmit = (data: UserFormData) => {
    onNext(data); // передаем данные в родитель
  };
  return (
    <>
      <div className="formRegistration">
        <h1 className="formRegistration_title">Personal information</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="formBox">
            <div className="formBox_item">
              <FormInput
                name="userFullName"
                label="Full name"
                required
                placeholder="Exp. John Carter"
              />
              <FormInput
                name="email"
                label="Email"
                required
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="formBox_item">
              <FormPhoneInput
                name="phoneNumber"
                label="Phone number"
                required
              />
              <FormInput
                name="company"
                label="Company"
                placeholder="Exp. Company"
              />
            </div>

            <div className="formBox_title castom-item">
              <FormInput
                name="address"
                label="Address"
                required
                placeholder="Exp. San Francisco, CA"
                className="inputLong castom-input"
              />
            </div>

            <button className="button" type="submit">
              Continue
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};
