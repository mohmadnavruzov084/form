import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RegistrationForm from "../src/components/Registration-form/RegistrationForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RegistrationForm />
  </StrictMode>,
);
