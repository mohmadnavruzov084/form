import React, { useState } from "react";
import "./RegistrationForm.scss";
import { FormProvider, useForm } from "react-hook-form";
import { userSchema } from "../../modules/userSchema";
import { useUseStore } from "../../modules/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../../ui/FormInput";
import { FormPhoneInput } from "../../ui/FormPhoneInput";
import { SubscriptionPlan } from "./steps/SubscriptionPlan.jsx";
import { IdentityVerification } from "./steps/IdentityVerification.jsx";
import { AccountActivation } from "./steps/AccountActivation.jsx";

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Только один useForm!
  const methods = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userFullName: "",
      email: "",
      phoneNumber: "",
      company: "",
      address: "",
    },
  });

  const setUser = useUseStore((state) => state.setUser);

  // Функция для перехода на следующий шаг с проверкой
  const handleContinue = () => {
    if (step === 1) {
      methods.trigger().then((isValid) => {
        if (isValid) {
          const data = methods.getValues();
          setUser(data);
          setStep(2);
        } else {
          alert("Заполните все поля!");
        }
      });
    } else if (step === 2) {
      if (!selectedPlan) {
        alert("Выберите план!");
      } else {
        setStep(3);
      }
    } else if (step === 3) {
      if (!selectedMethod) {
        alert("Выберите способ верификации!");
      } else {
        setStep(4);
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  let content;

  if (step === 1) {
    content = (
      <div className="formRegistration">
        <h1 className="formRegistration_title">Personal information</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleContinue)} className="formBox">
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
    );
  } else if (step === 2) {
    content = (
      <SubscriptionPlan
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        onNext={handleContinue}
        onBack={handleBack}
      />
    );
  } else if (step === 3) {
    content = (
      <IdentityVerification
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        onNext={handleContinue}
        onBack={handleBack}
      />
    );
  } else if (step === 4) {
    content = <AccountActivation />;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar_logo">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7163 6.35721C20.4717 6.35721 21.8948 4.9341 21.8948 3.17861C21.8948 1.42311 20.4717 0 18.7163 0C16.9608 0 15.5377 1.42311 15.5377 3.17861C15.5377 4.9341 16.9608 6.35721 18.7163 6.35721Z"
              fill="#8055FA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7161 13.9837C20.4716 13.9837 21.8947 12.5608 21.8947 10.8055C21.8947 9.05024 20.4716 7.62732 18.7161 7.62732C16.9607 7.62732 15.5376 9.05024 15.5376 10.8055C15.5376 12.5608 16.9607 13.9837 18.7161 13.9837Z"
              fill="#7550FB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7161 21.8947C20.4716 21.8947 21.8947 20.4716 21.8947 18.7161C21.8947 16.9606 20.4716 15.5375 18.7161 15.5375C16.9607 15.5375 15.5376 16.9606 15.5376 18.7161C15.5376 20.4716 16.9607 21.8947 18.7161 21.8947Z"
              fill="#6A4AFC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.806 13.9836C12.5612 13.9836 13.9841 12.5607 13.9841 10.8054C13.9841 9.05018 12.5612 7.62726 10.806 7.62726C9.05076 7.62726 7.62787 9.05018 7.62787 10.8054C7.62787 12.5607 9.05076 13.9836 10.806 13.9836Z"
              fill="#6045FD"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8054 21.8947C12.5607 21.8947 13.9835 20.4715 13.9835 18.7161C13.9835 16.9606 12.5607 15.5374 10.8054 15.5374C9.05021 15.5374 7.62732 16.9606 7.62732 18.7161C7.62732 20.4715 9.05021 21.8947 10.8054 21.8947Z"
              fill="#553FFE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17854 21.8947C4.934 21.8947 6.35709 20.4715 6.35709 18.7161C6.35709 16.9606 4.934 15.5374 3.17854 15.5374C1.42308 15.5374 0 16.9606 0 18.7161C0 20.4715 1.42308 21.8947 3.17854 21.8947Z"
              fill="#4A3AFF"
            />
          </svg>
          <h2>brix templates</h2>
        </div>

        <div className="step-list">
          <div className="step-list_item">
            <span className={`step-number ${step >= 1 ? 'step-number_active' : ''}`}>1</span>
            <div className="step-list_step-content">
              <h4>Personal information</h4>
              <p>Tell us who you are to get started.</p>
            </div>
          </div>
          <div className={`line ${step >= 2 ? 'line_active' : ''}`}></div>
          <div className="step-list_item">
            <span className={`step-number ${step >= 2 ? 'step-number_active' : ''}`}>2</span>
            <div className="step-list_step-content">
              <h4>Subscription plan</h4>
              <p>Choose the product plan that fits your needs.</p>
            </div>
          </div>
          <div className={`line ${step >= 3 ? 'line_active' : ''}`}></div>
          <div className="step-list_item">
            <span className={`step-number ${step >= 3 ? 'step-number_active' : ''}`}>3</span>
            <div className="step-list_step-content">
              <h4>Identity verification</h4>
              <p>Verify your identity for security purposes.</p>
            </div>
          </div>
          <div className={`line ${step >= 4 ? 'line_active' : ''}`}></div>
          <div className="step-list_item">
            <span className={`step-number ${step >= 4 ? 'step-number_active' : ''}`}>4</span>
            <div className="step-list_step-content">
              <h4>Activate account</h4>
              <p>Final step! Let’s activate your account.</p>
            </div>
          </div>
        </div>

        <div className="feedback">
          <div>
            <h4>Need a help?</h4>
            <p>chat with live support</p>
          </div>
          <div className="feedback-icon">
            <a href="https://vk.com/video-149258223_456243354">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M15.4027 11.9159V8.1264C15.4027 4.08017 12.1226 0.800049 8.07635 0.800049C4.03012 0.800049 0.75 4.08017 0.75 8.1264V11.9159M0.75 11.3601C0.75 9.8532 1.97156 8.63167 3.47843 8.63167C4.48301 8.63167 5.29739 9.44606 5.29739 10.4506V13.3812C5.29739 14.3857 4.48301 15.2001 3.47843 15.2001C1.97156 15.2001 0.75 13.9786 0.75 12.4717V11.3601ZM10.8553 10.4506C10.8553 9.44606 11.6697 8.63167 12.6743 8.63167C14.1812 8.63167 15.4027 9.8532 15.4027 11.3601V12.4717C15.4027 13.9786 14.1812 15.2001 12.6743 15.2001C11.6697 15.2001 10.8553 14.3857 10.8553 13.3812V10.4506Z"
                  stroke="#170F49"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {content}
    </div>
  );
}

export default RegistrationForm;