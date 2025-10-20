import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalAppWrapper from "./components/wrapper/GlobalAppWrapper.tsx";
import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalAppWrapper />
  </StrictMode>,
);
