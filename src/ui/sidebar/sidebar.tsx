import "./sidebar.scss";

interface SidebarProps {
  step: number;
  onStepClick?: (step: number) => void;
  canAccessStep?: (step: number) => boolean;
  isStepCompleted: (stepNumber: number) => boolean;
}

export const Sidebar = ({ step, onStepClick, canAccessStep, isStepCompleted }: SidebarProps) => {
  const handleStepClick = (targetStep: number) => {
    if (canAccessStep && !canAccessStep(targetStep)) {
      alert("Сначала заполните предыдущие шаги!");
      return;
    }
    onStepClick?.(targetStep);
  };

  // Определяем статус линии между шагами
  const getLineStatus = (fromStep: number, toStep: number) => {
    const isFromCompleted = isStepCompleted(fromStep);
    const isToCompleted = isStepCompleted(toStep);
    
    if (isToCompleted) {
      return "line-100"; // полностью фиолетовая
    } else if (isFromCompleted) {
      return "line-50"; // наполовину фиолетовая
    } else {
      return "line-0"; // серая
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {/* ... твой SVG ... */}
        </svg>
        <h2>brix templates</h2>
      </div>

      <div className="step-list">
        {/* Шаг 1 */}
        <div className="step-list_item">
          <span
            className={`step-number ${isStepCompleted(1) || step >= 1 ? "step-number_active" : ""}`}
            onClick={() => handleStepClick(1)}
            style={{ cursor: "pointer" }}
          >
            1
          </span>
          <div className="step-list_step-content">
            <h4>Personal information</h4>
            <p>Tell us who you are to get started.</p>
          </div>
        </div>

        {/* Линия между 1 и 2 */}
        <div className={`line ${getLineStatus(1, 2)}`}></div>

        {/* Шаг 2 */}
        <div className="step-list_item">
          <span
            className={`step-number ${isStepCompleted(2) || step >= 2 ? "step-number_active" : ""}`}
            onClick={() => handleStepClick(2)}
            style={{ cursor: "pointer" }}
          >
            2
          </span>
          <div className="step-list_step-content">
            <h4>Subscription plan</h4>
            <p>Choose the product plan that fits your needs.</p>
          </div>
        </div>

        {/* Линия между 2 и 3 */}
        <div className={`line ${getLineStatus(2, 3)}`}></div>

        {/* Шаг 3 */}
        <div className="step-list_item">
          <span
            className={`step-number ${isStepCompleted(3) || step >= 3 ? "step-number_active" : ""}`}
            onClick={() => handleStepClick(3)}
            style={{ cursor: "pointer" }}
          >
            3
          </span>
          <div className="step-list_step-content">
            <h4>Identity verification</h4>
            <p>Verify your identity for security purposes.</p>
          </div>
        </div>

        {/* Линия между 3 и 4 */}
        <div className={`line ${getLineStatus(3, 4)}`}></div>

        {/* Шаг 4 */}
        <div className="step-list_item">
          <span
            className={`step-number ${isStepCompleted(4) || step >= 4 ? "step-number_active" : ""}`}
            onClick={() => handleStepClick(4)}
            style={{ cursor: "pointer" }}
          >
            4
          </span>
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
      </div>
    </div>
  );
};
