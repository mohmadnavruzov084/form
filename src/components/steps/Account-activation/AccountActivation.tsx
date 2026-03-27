import React from 'react';
import './AccountActivation.scss';

export const AccountActivation = () => {
  return (
    <div className="account-activation">
      <div className="account-activation__content">
        <div className="account-activation__icon">🎉</div>
        <h2 className="account-activation__title">Account activated!</h2>
        <p className="account-activation__subtitle">
          Congratulations! Your account has been successfully activated.
        </p>
        <p className="account-activation__text">
          You can now access all features and start using our services.
        </p>
        
        <div className="account-activation__buttons">
          <button className="account-activation__btn account-activation__btn--primary">
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};