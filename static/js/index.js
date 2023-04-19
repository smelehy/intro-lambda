import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./hlw-lambda";
console.log(new Date().toLocaleTimeString(),document.getElementById("root"));
console.log(new Date().toLocaleTimeString(),document.body);
const root = createRoot(document.getElementById("root"));
root.render(<App />);