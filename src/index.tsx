import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AiAgentMobile } from "./screens/AiAgentMobile";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AiAgentMobile />
  </StrictMode>,
);
