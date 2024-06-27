import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BroswerRouter from "./lib/components/BrowserRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BroswerRouter>
      <App />
    </BroswerRouter>
  </React.StrictMode>
);
