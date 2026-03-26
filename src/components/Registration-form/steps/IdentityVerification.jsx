import React from "react";
import "./IdentityVerification.scss";
import clsx from "clsx";

export const IdentityVerification = ({
  selectedMethod,
  setSelectedMethod,
  onNext,
  onBack,
}) => {
  const methods = [
    {
      id: "passport",
      name: "Passport",
      desc: "Upload photo of your passport",
      icon: "📜",
    },
    {
      id: "driver",
      name: "Driver's license",
      desc: "Upload front and back side",
      icon: "🚗",
    },
    {
      id: "idcard",
      name: "ID card",
      desc: "Government issued ID card",
      icon: "📇",
    },
  ];

  return (
    <div className="identity-verification">
      <div className="identity-verification__content">
        <h2 className="identity-verification__title">Identity verification</h2>
        <p className="identity-verification__subtitle">
          Verify your identity for security purposes
        </p>

        <div className="identity-verification__list">
          {methods.map((method) => (
            <div
              key={method.id}
              className={clsx("identity-verification__card", {
                "identity-verification__card--selected":
                  selectedMethod === method.id,
              })}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="identity-verification__icon">{method.icon}</div>
              <div className="identity-verification__info">
                <div className="identity-verification__name">{method.name}</div>
                <div className="identity-verification__desc">{method.desc}</div>
              </div>
              <div className="identity-verification__radio">
                <div
                  className={`identity-verification__dot ${selectedMethod === method.id ? "identity-verification__dot--active" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="identity-verification__buttons">
          <button
            className="identity-verification__btn identity-verification__btn--back"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="identity-verification__btn identity-verification__btn--next"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
