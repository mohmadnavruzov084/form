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
        {/* ... feedback ... */}
      </div>
    </div>
  );
};