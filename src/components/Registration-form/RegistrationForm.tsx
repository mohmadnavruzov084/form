import React, { useState } from "react";
import "./RegistrationForm.scss";
import { useUserDataStore } from "../../modules/userStore.tsx";
import { SubscriptionPlan } from "../steps/Subscrition/SubscriptionPlan.tsx";
import { IdentityVerification } from "../steps/Verification/IdentityVerification.tsx";
import { AccountActivation } from "../steps/Account-activation/AccountActivation.tsx";
import { PersonalInformayion } from "../steps/Personal-info/PersonalInformation.tsx";
import { type UserFormData } from "../../modules/userSchema";
import { Sidebar } from "../../ui/sidebar/sidebar.tsx";

function RegistrationForm() {
  const [step, setStep] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState<UserFormData | null>(null);
  const setUser = useUserDataStore((state) => state.setUser);

  
  const isStepCompleted = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return formData !== null;
      case 2:
        return selectedPlan !== null;
      case 3:
        return selectedMethod !== null;
      default:
        return false;
    }
  };

  const canAccessStep = (targetStep: number) => {
    switch (targetStep) {
      case 1:
        return true;
      case 2:
        return formData !== null;
      case 3:
        return selectedPlan !== null;
      case 4:
        return selectedMethod !== null;
      default:
        return false;
    }
  };

  const handleStepClick = (targetStep: number) => {
    if (!canAccessStep(targetStep)) {
      alert("Сначала заполните предыдущие шаги!");
      return;
    }
    setStep(targetStep);
  };

  const handlePersonalInfoSubmit = (data: UserFormData) => {
    setFormData(data);
    setUser(data);
    setStep(2);
  };

  const handleContinue = () => {
    if (step === 2) {
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
    setStep((prev) => prev - 1);
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <PersonalInformayion onNext={handlePersonalInfoSubmit} />;
      case 2:
        return (
          <SubscriptionPlan
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onNext={handleContinue}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <IdentityVerification
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            onNext={handleContinue}
            onBack={handleBack}
          />
        );
      case 4:
        return <AccountActivation />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Sidebar
        step={step}
        onStepClick={handleStepClick}
        canAccessStep={canAccessStep}
        isStepCompleted={isStepCompleted}
      />
      {renderContent()}
    </div>
  );
}

export default RegistrationForm;