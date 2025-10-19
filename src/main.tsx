import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalAppWrapper from "./components/wrapper/GlobalAppWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalAppWrapper />
  </StrictMode>,
);
