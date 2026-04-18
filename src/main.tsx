import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (window.location.hash) {
  window.history.replaceState(null, "", window.location.pathname);
}

createRoot(document.getElementById("root")!).render(<App />);
