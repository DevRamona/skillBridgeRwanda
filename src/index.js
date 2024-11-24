import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider} from "./context/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SkillBridgeProvider } from "./context/SkillBridgeContext"; // Import the new context
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.REACT_APP_NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <SkillBridgeProvider> {/* Wrap with the new context provider */}
          <App />
        </SkillBridgeProvider>
      </AuthContextProvider>
    </Router>
    <ToastContainer />
  </React.StrictMode>
);