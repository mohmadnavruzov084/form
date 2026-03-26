import React, { useState } from "react";
import "./SubscriptionPlan.scss";

const plans = [
  {
    id: "15",
    name: "15 visits",
    price: "1500 ₽",
    perVisit: "100 ₽/visit",
    validity: "1 month",
  },
  {
    id: "30",
    name: "30 visits",
    price: "2500 ₽",
    perVisit: "83 ₽/visit",
    validity: "2 months",
    save: "Save 500 ₽",
  },
  {
    id: "single",
    name: "Single visit",
    price: "200 ₽",
    perVisit: "200 ₽/visit",
    validity: "One time",
  },
];
interface SubscriptionPlanProps {
  selectedPlan: string | null;
  setSelectedPlan: (plan: string | null) => void;
  onNext: () => void;
  onBack: () => void;
}

export const SubscriptionPlan = ({
  selectedPlan,
  setSelectedPlan,
  onNext,
  onBack,
}: SubscriptionPlanProps) => {
  return (
    <div className="subscription-plan">
      <div className="subscription-plan__content">
        <h2 className="subscription-plan__title">Choose membership</h2>

        <div className="subscription-plan__list">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`subscription-plan__card ${selectedPlan === plan.id ? "subscription-plan__card--selected" : ""}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="subscription-plan__row">
                <span className="subscription-plan__name">{plan.name}</span>
                <span className="subscription-plan__price">{plan.price}</span>
              </div>
              <div className="subscription-plan__row subscription-plan__row--small">
                <span>{plan.perVisit}</span>
                <span>{plan.validity}</span>
              </div>
              {plan.save && (
                <div className="subscription-plan__save">{plan.save}</div>
              )}
            </div>
          ))}
        </div>

        <div className="subscription-plan__buttons">
          <button
            className="subscription-plan__btn subscription-plan__btn--back"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="subscription-plan__btn subscription-plan__btn--next"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
